// Compiled by ClojureScript 0.0-2644 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7925_7929 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7926_7930 = null;
var count__7927_7931 = (0);
var i__7928_7932 = (0);
while(true){
if((i__7928_7932 < count__7927_7931)){
var f_7933 = cljs.core._nth.call(null,chunk__7926_7930,i__7928_7932);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_7933);

var G__7934 = seq__7925_7929;
var G__7935 = chunk__7926_7930;
var G__7936 = count__7927_7931;
var G__7937 = (i__7928_7932 + (1));
seq__7925_7929 = G__7934;
chunk__7926_7930 = G__7935;
count__7927_7931 = G__7936;
i__7928_7932 = G__7937;
continue;
} else {
var temp__4126__auto___7938 = cljs.core.seq.call(null,seq__7925_7929);
if(temp__4126__auto___7938){
var seq__7925_7939__$1 = temp__4126__auto___7938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7925_7939__$1)){
var c__4676__auto___7940 = cljs.core.chunk_first.call(null,seq__7925_7939__$1);
var G__7941 = cljs.core.chunk_rest.call(null,seq__7925_7939__$1);
var G__7942 = c__4676__auto___7940;
var G__7943 = cljs.core.count.call(null,c__4676__auto___7940);
var G__7944 = (0);
seq__7925_7929 = G__7941;
chunk__7926_7930 = G__7942;
count__7927_7931 = G__7943;
i__7928_7932 = G__7944;
continue;
} else {
var f_7945 = cljs.core.first.call(null,seq__7925_7939__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_7945);

var G__7946 = cljs.core.next.call(null,seq__7925_7939__$1);
var G__7947 = null;
var G__7948 = (0);
var G__7949 = (0);
seq__7925_7929 = G__7946;
chunk__7926_7930 = G__7947;
count__7927_7931 = G__7948;
i__7928_7932 = G__7949;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});
