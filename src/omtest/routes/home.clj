(ns omtest.routes.home
            (:require [omtest.layout :as layout]
                      [omtest.util :as util]
                      [omtest.mongo :as mongo]
                      [compojure.core :refer :all]
                      [noir.response :refer [edn]]
                      [clojure.pprint :refer [pprint]]
                      [cemerick.austin.repls :refer (browser-connected-repl-js)]))

(defn home-page []
      (layout/render
        "app.html" {:docs (util/md->html "/md/docs.md")}))

(defn hello-page []
      (layout/render
        "hello.html"))

(defn login-page []
      (layout/render
       "login.html"))

(defn index-page []
  (layout/render
   "index.html" {:users (mongo/get-recent-users)}))

(defn ranking-page [screen-name]
  (layout/render
   "ranking.html" {:user (mongo/get-single-user screen-name)}))

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

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/index" [] (index-page))
  (GET "/ranking/:screenname" [screenname] (ranking-page screenname))
  (GET "/hello" [] (hello-page))
  (GET "/login" [] (login-page))
  (POST "/eval" [request] (eval-clojure request))
  (POST "/save" {:keys [body-params]}
    (edn (save-document body-params))))
