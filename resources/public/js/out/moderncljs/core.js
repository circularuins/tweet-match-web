// Compiled by ClojureScript 0.0-2644 {}
if(!goog.isProvided_('moderncljs.core')) {
goog.provide('moderncljs.core');
}
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('goog.net.XhrIo');
goog.require('om.dom');
goog.require('clojure.browser.repl');
goog.require('reagent_forms.core');
goog.require('domina');
goog.require('om.core');
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
cljs.core.enable_console_print_BANG_.call(null);
moderncljs.core.happy = (function happy(){
return document.write("<p>Happy</p>");
});
goog.exportSymbol('moderncljs.core.happy', moderncljs.core.happy);
moderncljs.core.validate_form = (function validate_form(){
var email = domina.by_id.call(null,"email");
var password = domina.by_id.call(null,"password");
if(((cljs.core.count.call(null,domina.value.call(null,email)) > (0))) && ((cljs.core.count.call(null,domina.value.call(null,password)) > (0)))){
return true;
} else {
alert("Please, complete the form!");

return false;
}
});
moderncljs.core.init = (function init(){
if(cljs.core.truth_((function (){var and__3712__auto__ = document;
if(cljs.core.truth_(and__3712__auto__)){
return document.getElementById;
} else {
return and__3712__auto__;
}
})())){
var login_form = document.getElementById("loginForm");
return login_form.onsubmit = moderncljs.core.validate_form;
} else {
return null;
}
});
window.onload = moderncljs.core.init;

//# sourceMappingURL=core.js.map