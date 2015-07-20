(ns omtest.routes.home
            (:require [omtest.layout :as layout]
                      [omtest.util :as util]
                      [omtest.mongo :as mongo]
                      [compojure.core :refer :all]
                      [noir.response :refer [edn]]
                      [clojure.pprint :refer [pprint]]
                      [cemerick.austin.repls :refer (browser-connected-repl-js)]
                      [selmer.filters :as filters]
                      [bouncer.core :as b]
                      [bouncer.validators :as v]
                      [ring.util.response :refer [redirect]]))

(filters/add-filter! :leven-to-percent (fn [leven] (mongo/calc-match-percent leven)))
(filters/add-filter! :leven-label (fn [leven] (let [label (mongo/calc-match-percent leven)]
                                                (cond
                                                  (>= label 100) "バグ？"
                                                  (and (< label 100) (>= label 90)) "結婚する？"
                                                  (and (< label 90) (>= label 80)) "付き合っちゃう？"
                                                  (and (< label 80) (>= label 75)) "お似合い。かも？"
                                                  (and (< label 75) (>= label 70)) "ベストフレンド"
                                                  (and (< label 70) (>= label 65)) "友達から"
                                                  (and (< label 65) (>= label 60)) "通りすがり"
                                                  (< label 60) "ドンマイ"))))
(filters/add-filter! :get-tweet (fn [screen-name] (mongo/get-user-tweet screen-name)))
(filters/add-filter! :resize-tag (fn [size] (str (* 5 size))))

(defn hello-page []
      (layout/render
        "hello.html"))

(defn login-page []
      (layout/render
       "login.html"))

(defn about-page []
  (layout/render
   "about.html"))

(defn index-page [{:keys [flash]}]
  (layout/render
   "index.html" (merge {:users (mongo/get-recent-users)
                        :best-couple (mongo/make-best-couple-data)}
                       (select-keys flash [:screen-name :errors]))))

(defn ranking-page [screen-name]
  (layout/render
   "ranking.html" {:pv (mongo/inc-pv screen-name)
                   :user (mongo/get-single-user screen-name)
                   }))

(defn fame-page []
  (layout/render
   "fame.html" {:boys (mongo/get-most-viewed-by-sex "b")
                :girls (mongo/get-most-viewed-by-sex "g")}))

(defn search-page [word]
  (layout/render
   "search.html" {:users (mongo/get-users-by-word word)
                  :search-word word}))

(defn save-document [doc]
      (pprint doc)
      {:status "ok"})

(defn eval-clojure [request]
  (try
    ;; (let [expr (read-string (slurp (:body request)))]
    ;;   (pr-str (eval expr)))
    request
    (catch Throwable t
      (str "ERROR: " t))))

(defn browser-repl []
  (let [repl-env (reset! cemerick.austin.repls/browser-repl-env
                         (cemerick.austin/repl-env))]
    (cemerick.austin.repls/cljs-repl repl-env)))

(defn validate-screen-name [params]
  (first
   (b/validate
    params
    :screen-name v/required)))

(defn redirect-ranking-page [{:keys [params]}]
  (if-let [errors (validate-screen-name params)]
    (-> (redirect "/")
        (assoc :flash (assoc params :errors errors)))
    (do
      (ranking-page (:screen-name params)))))

(defroutes home-routes
  (GET "/" request (index-page request))
  (POST "/" request (redirect-ranking-page request))
  (GET "/ranking/:screenname" [screenname] (ranking-page screenname))
  (GET "/fame" [] (fame-page))
  (GET "/search/:word" [word] (search-page word))
  (GET "/hello" [] (hello-page))
  (GET "/login" [] (login-page))
  (GET "/about" [] (about-page))
  (POST "/eval" [request] (eval-clojure request))
  (POST "/save" {:keys [body-params]}
    (edn (save-document body-params))))
