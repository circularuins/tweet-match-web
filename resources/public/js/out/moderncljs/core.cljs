(ns moderncljs.core
  (:require [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary]
            [reagent-forms.core :refer [bind-fields]]
            [ajax.core :refer [POST]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.net.XhrIo :as xhr]
            [clojure.browser.repl :as repl]
            )
  (:use [domina :only [by-id value]])
  (:require-macros [secretary.core :refer [defroute]]))

(repl/connect "http://localhost:9000/repl")

(enable-console-print!)

(defn ^:export happy[]
  (.write js/document "<p>Happy</p>"))

;; define the function to be attached to form submission event
(defn validate-form []
  ;; get email and password element using (by-id id)
  (let [email (by-id "email")
        password (by-id "password")]
    ;; get email and password value using (value el)
    (if (and (> (count (value email)) 0)
             (> (count (value password)) 0))
      true
      (do (js/alert "Please, complete the form!")
          false))))

;; define the function to attach validate-form to onsubmit event of the form
(defn init []
  ;; verifiy that js/document exisits and it has a getElementById property
  (if (and js/document
           (.-getElementById js/document))
    ;; get loginForm by element id and set its onsubmit property to our validate-form function
    (let [login-form (.getElementById js/document "loginForm")]
      (set! (.-onsubmit login-form) validate-form))))

;; initialize the HTML page in unobtrusive way
(set! (.-onload js/window) init)
