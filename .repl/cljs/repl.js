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
var seq__9624_9628 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9625_9629 = null;
var count__9626_9630 = (0);
var i__9627_9631 = (0);
while(true){
if((i__9627_9631 < count__9626_9630)){
var f_9632 = cljs.core._nth.call(null,chunk__9625_9629,i__9627_9631);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_9632);

var G__9633 = seq__9624_9628;
var G__9634 = chunk__9625_9629;
var G__9635 = count__9626_9630;
var G__9636 = (i__9627_9631 + (1));
seq__9624_9628 = G__9633;
chunk__9625_9629 = G__9634;
count__9626_9630 = G__9635;
i__9627_9631 = G__9636;
continue;
} else {
var temp__4126__auto___9637 = cljs.core.seq.call(null,seq__9624_9628);
if(temp__4126__auto___9637){
var seq__9624_9638__$1 = temp__4126__auto___9637;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9624_9638__$1)){
var c__4576__auto___9639 = cljs.core.chunk_first.call(null,seq__9624_9638__$1);
var G__9640 = cljs.core.chunk_rest.call(null,seq__9624_9638__$1);
var G__9641 = c__4576__auto___9639;
var G__9642 = cljs.core.count.call(null,c__4576__auto___9639);
var G__9643 = (0);
seq__9624_9628 = G__9640;
chunk__9625_9629 = G__9641;
count__9626_9630 = G__9642;
i__9627_9631 = G__9643;
continue;
} else {
var f_9644 = cljs.core.first.call(null,seq__9624_9638__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_9644);

var G__9645 = cljs.core.next.call(null,seq__9624_9638__$1);
var G__9646 = null;
var G__9647 = (0);
var G__9648 = (0);
seq__9624_9628 = G__9645;
chunk__9625_9629 = G__9646;
count__9626_9630 = G__9647;
i__9627_9631 = G__9648;
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
