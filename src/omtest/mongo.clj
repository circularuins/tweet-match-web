(ns omtest.mongo
  (:require [monger.core :as mg]
            [monger.collection :as mc]
            [monger.query :as mq]
            [monger.operators :as mo]
            [monger.operators :refer :all]
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
       (take 100)
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

(defn get-single-user-by-id
  [user-id]
  (mc/find-one-as-map db "mach-ranking" {:user-id user-id}))


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

(defn inc-pv
  [screen-name]
  (let [coll "mach-ranking"]
    (mc/update db coll {:screen-name screen-name} {$inc {:pv 1}})))

(defn get-most-viewed-by-sex
  [sex]
  (->> (mq/with-collection db "mach-ranking"
         (mq/find {:sex sex})
         (mq/sort (array-map :pv -1))
         )
       (take 10)
       (map fix-object)))

(defn get-users-by-word
  [word]
  (filter (fn[x] (some #(= (:word %) word) (:top-words x))) (mc/find-maps db "mach-ranking")))

(defn get-best-couple
  []
  (nth (->> (mq/with-collection db "best-matching"
              (mq/find {:best-leven {mo/$gte 601}})
              (mq/sort (array-map :best-leven 1 :date -1))
              (mq/limit 3)))
       0))

(defn make-best-couple-data
  []
  (let [best-couple (get-best-couple)]
    (array-map :user1 (get-single-user-by-id (:user-id best-couple))
               :user2 (get-single-user (:partner-screen-name best-couple))
               :leven (:best-leven best-couple)
               :date (:date best-couple))))



;; 補助関数

(defn all-clear [coll]
  (mc/remove db coll))

(defn count-all [coll]
  (mc/count db coll))
