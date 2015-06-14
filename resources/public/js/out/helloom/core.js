// Compiled by ClojureScript 0.0-2644 {}
if(!goog.isProvided_('helloom.core')) {
goog.provide('helloom.core');
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
goog.require('domina.events');
goog.require('om.core');
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
cljs.core.enable_console_print_BANG_.call(null);
helloom.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello OM!!"], null));
om.core.root.call(null,(function (app,owner){
if(typeof helloom.core.t7681 !== 'undefined'){
} else {

/**
* @constructor
*/
helloom.core.t7681 = (function (owner,app,meta7682){
this.owner = owner;
this.app = app;
this.meta7682 = meta7682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
helloom.core.t7681.prototype.om$core$IRender$ = true;

helloom.core.t7681.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.h1(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.app));
});

helloom.core.t7681.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7683){
var self__ = this;
var _7683__$1 = this;
return self__.meta7682;
});

helloom.core.t7681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7683,meta7682__$1){
var self__ = this;
var _7683__$1 = this;
return (new helloom.core.t7681(self__.owner,self__.app,meta7682__$1));
});

helloom.core.t7681.cljs$lang$type = true;

helloom.core.t7681.cljs$lang$ctorStr = "helloom.core/t7681";

helloom.core.t7681.cljs$lang$ctorPrWriter = (function (this__4311__auto__,writer__4312__auto__,opt__4313__auto__){
return cljs.core._write.call(null,writer__4312__auto__,"helloom.core/t7681");
});

helloom.core.__GT_t7681 = (function __GT_t7681(owner__$1,app__$1,meta7682){
return (new helloom.core.t7681(owner__$1,app__$1,meta7682));
});

}

return (new helloom.core.t7681(owner,app,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),25,new cljs.core.Keyword(null,"column","column",2078222095),4,new cljs.core.Keyword(null,"line","line",212345235),23,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/wake/study/clojure/omtest/src-cljs/moderncljs/core.cljs"], null)));
}),helloom.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
helloom.core.hello = (function hello(){
return document.write("<p>Hello, ClojureScript!</p>");
});
goog.exportSymbol('helloom.core.hello', helloom.core.hello);
helloom.core.fact = (function fact(){
return document.write(cljs.core.map.call(null,(function (n){
return (n * n);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null)));
});
goog.exportSymbol('helloom.core.fact', helloom.core.fact);
helloom.core.happy = (function happy(){
return document.write("<p>Happy</p>");
});
goog.exportSymbol('helloom.core.happy', helloom.core.happy);

//# sourceMappingURL=core.js.map