(ns omtest.mongo
  (:require [monger.core :as mg]
            [monger.collection :as mc]
            [monger.query :as mq]
            [monger.operators :as mo]
            [clojure.string :as str]
            [clj-time
             [core :as t]
             [local :as tl]
             [coerce :as coerce]])
  (:import java.util.Date
           java.util.regex.Pattern
           org.bson.types.ObjectId))

(defn calc-match-percent [leven]
  (* (/ (- 1000.0 leven) 400) 100))

(defn fix-object [object]
  (let [id (:_id object)
        screen-name (:screen-name object)]
    (-> object
        (assoc :id (str id))
        (assoc :url (str "https://twitter.com/" screen-name))
        (dissoc :_id))))

(def db (mg/get-db (mg/connect) "matching-db"))

(defn get-recent-users-by-sex
  [sex]
  (->> (mq/with-collection db "mach-ranking"
         (mq/find {:sex sex})
         (mq/sort (array-map :date -1))
         )
       (take 50)
       (map fix-object)))

(defn get-recent-users
  []
  (->> (mq/with-collection db "mach-ranking"
         (mq/sort (array-map :date -1))
         )
       (take 100)
       (map fix-object)))

(defn get-single-user
  [screen-name]
  (mc/find-one-as-map db "mach-ranking" {:screen-name screen-name}))

(defn get-user-tweet
  [screen-name]
    (:tweet (mc/find-one-as-map db "mach-ranking" {:screen-name screen-name})))

(defn get-rnd-user
  [sex]
  (->> (mq/with-collection db "mach-ranking"
         (mq/find {:sex sex})
         (mq/fields [:screen-name :user-id]))
       (shuffle)
       (take 10)))


;; 補助関数

(defn all-clear [coll]
  (mc/remove db coll))

(defn count-all [coll]
  (mc/count db coll))
