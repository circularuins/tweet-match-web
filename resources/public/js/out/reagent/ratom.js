// Compiled by ClojureScript 0.0-2644 {}
if(!goog.isProvided_('reagent.ratom')) {
goog.provide('reagent.ratom');
}
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = cljs.core.atom.call(null,(0));
reagent.ratom.running = (function running(){
return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_6902 = reagent.ratom._STAR_ratom_context_STAR_;
try{reagent.ratom._STAR_ratom_context_STAR_ = obj;

return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_6902;
}});
reagent.ratom.captured = (function captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Atom: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4311__auto__,writer__4312__auto__,opt__4313__auto__){
return cljs.core._write.call(null,writer__4312__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__6906__delegate = function (x,p__6903){
var map__6905 = p__6903;
var map__6905__$1 = ((cljs.core.seq_QMARK_.call(null,map__6905))?cljs.core.apply.call(null,cljs.core.hash_map,map__6905):map__6905);
var validator = cljs.core.get.call(null,map__6905__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var meta = cljs.core.get.call(null,map__6905__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__6906 = function (x,var_args){
var p__6903 = null;
if (arguments.length > 1) {
  p__6903 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6906__delegate.call(this,x,p__6903);};
G__6906.cljs$lang$maxFixedArity = 1;
G__6906.cljs$lang$applyTo = (function (arglist__6907){
var x = cljs.core.first(arglist__6907);
var p__6903 = cljs.core.rest(arglist__6907);
return G__6906__delegate(x,p__6903);
});
G__6906.cljs$core$IFn$_invoke$arity$variadic = G__6906__delegate;
return G__6906;
})()
;
atom = function(x,var_args){
var p__6903 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;

reagent.ratom.IDisposable = (function (){var obj6909 = {};
return obj6909;
})();

reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){
if((function (){var and__3712__auto__ = this$;
if(and__3712__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__3712__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4368__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3724__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4368__auto__)]);
if(or__3724__auto__){
return or__3724__auto__;
} else {
var or__3724__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__3724__auto____$1){
return or__3724__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj6911 = {};
return obj6911;
})();

reagent.ratom.run = (function run(this$){
if((function (){var and__3712__auto__ = this$;
if(and__3712__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__3712__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4368__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3724__auto__ = (reagent.ratom.run[goog.typeOf(x__4368__auto__)]);
if(or__3724__auto__){
return or__3724__auto__;
} else {
var or__3724__auto____$1 = (reagent.ratom.run["_"]);
if(or__3724__auto____$1){
return or__3724__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj6913 = {};
return obj6913;
})();

reagent.ratom._update_watching = (function _update_watching(this$,derefed){
if((function (){var and__3712__auto__ = this$;
if(and__3712__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__3712__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__4368__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3724__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__4368__auto__)]);
if(or__3724__auto__){
return or__3724__auto__;
} else {
var or__3724__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__3724__auto____$1){
return or__3724__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){
if((function (){var and__3712__auto__ = k;
if(and__3712__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__3712__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__4368__auto__ = (((k == null))?null:k);
return (function (){var or__3724__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__4368__auto__)]);
if(or__3724__auto__){
return or__3724__auto__;
} else {
var or__3724__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__3724__auto____$1){
return or__3724__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){
return cljs.core.reduce_kv.call(null,(function (_,key,f){
f.call(null,key,obs,oldval,newval);

return null;
}),null,watches);
});

/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__3712__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__3712__auto__)){
return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__3712__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__3724__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3724__auto__)){
return or__3724__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__6914_6926 = cljs.core.seq.call(null,derefed);
var chunk__6915_6927 = null;
var count__6916_6928 = (0);
var i__6917_6929 = (0);
while(true){
if((i__6917_6929 < count__6916_6928)){
var w_6930 = cljs.core._nth.call(null,chunk__6915_6927,i__6917_6929);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_6930)){
} else {
cljs.core.add_watch.call(null,w_6930,this$__$1,reagent.ratom._handle_change);
}

var G__6931 = seq__6914_6926;
var G__6932 = chunk__6915_6927;
var G__6933 = count__6916_6928;
var G__6934 = (i__6917_6929 + (1));
seq__6914_6926 = G__6931;
chunk__6915_6927 = G__6932;
count__6916_6928 = G__6933;
i__6917_6929 = G__6934;
continue;
} else {
var temp__4126__auto___6935 = cljs.core.seq.call(null,seq__6914_6926);
if(temp__4126__auto___6935){
var seq__6914_6936__$1 = temp__4126__auto___6935;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6914_6936__$1)){
var c__4511__auto___6937 = cljs.core.chunk_first.call(null,seq__6914_6936__$1);
var G__6938 = cljs.core.chunk_rest.call(null,seq__6914_6936__$1);
var G__6939 = c__4511__auto___6937;
var G__6940 = cljs.core.count.call(null,c__4511__auto___6937);
var G__6941 = (0);
seq__6914_6926 = G__6938;
chunk__6915_6927 = G__6939;
count__6916_6928 = G__6940;
i__6917_6929 = G__6941;
continue;
} else {
var w_6942 = cljs.core.first.call(null,seq__6914_6936__$1);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_6942)){
} else {
cljs.core.add_watch.call(null,w_6942,this$__$1,reagent.ratom._handle_change);
}

var G__6943 = cljs.core.next.call(null,seq__6914_6936__$1);
var G__6944 = null;
var G__6945 = (0);
var G__6946 = (0);
seq__6914_6926 = G__6943;
chunk__6915_6927 = G__6944;
count__6916_6928 = G__6945;
i__6917_6929 = G__6946;
continue;
}
} else {
}
}
break;
}

var seq__6918_6947 = cljs.core.seq.call(null,self__.watching);
var chunk__6919_6948 = null;
var count__6920_6949 = (0);
var i__6921_6950 = (0);
while(true){
if((i__6921_6950 < count__6920_6949)){
var w_6951 = cljs.core._nth.call(null,chunk__6919_6948,i__6921_6950);
if(cljs.core.contains_QMARK_.call(null,derefed,w_6951)){
} else {
cljs.core.remove_watch.call(null,w_6951,this$__$1);
}

var G__6952 = seq__6918_6947;
var G__6953 = chunk__6919_6948;
var G__6954 = count__6920_6949;
var G__6955 = (i__6921_6950 + (1));
seq__6918_6947 = G__6952;
chunk__6919_6948 = G__6953;
count__6920_6949 = G__6954;
i__6921_6950 = G__6955;
continue;
} else {
var temp__4126__auto___6956 = cljs.core.seq.call(null,seq__6918_6947);
if(temp__4126__auto___6956){
var seq__6918_6957__$1 = temp__4126__auto___6956;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6918_6957__$1)){
var c__4511__auto___6958 = cljs.core.chunk_first.call(null,seq__6918_6957__$1);
var G__6959 = cljs.core.chunk_rest.call(null,seq__6918_6957__$1);
var G__6960 = c__4511__auto___6958;
var G__6961 = cljs.core.count.call(null,c__4511__auto___6958);
var G__6962 = (0);
seq__6918_6947 = G__6959;
chunk__6919_6948 = G__6960;
count__6920_6949 = G__6961;
i__6921_6950 = G__6962;
continue;
} else {
var w_6963 = cljs.core.first.call(null,seq__6918_6957__$1);
if(cljs.core.contains_QMARK_.call(null,derefed,w_6963)){
} else {
cljs.core.remove_watch.call(null,w_6963,this$__$1);
}

var G__6964 = cljs.core.next.call(null,seq__6918_6957__$1);
var G__6965 = null;
var G__6966 = (0);
var G__6967 = (0);
seq__6918_6947 = G__6964;
chunk__6919_6948 = G__6965;
count__6920_6949 = G__6966;
i__6921_6950 = G__6967;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__6922_6968 = cljs.core.seq.call(null,self__.watching);
var chunk__6923_6969 = null;
var count__6924_6970 = (0);
var i__6925_6971 = (0);
while(true){
if((i__6925_6971 < count__6924_6970)){
var w_6972 = cljs.core._nth.call(null,chunk__6923_6969,i__6925_6971);
cljs.core.remove_watch.call(null,w_6972,this$__$1);

var G__6973 = seq__6922_6968;
var G__6974 = chunk__6923_6969;
var G__6975 = count__6924_6970;
var G__6976 = (i__6925_6971 + (1));
seq__6922_6968 = G__6973;
chunk__6923_6969 = G__6974;
count__6924_6970 = G__6975;
i__6925_6971 = G__6976;
continue;
} else {
var temp__4126__auto___6977 = cljs.core.seq.call(null,seq__6922_6968);
if(temp__4126__auto___6977){
var seq__6922_6978__$1 = temp__4126__auto___6977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6922_6978__$1)){
var c__4511__auto___6979 = cljs.core.chunk_first.call(null,seq__6922_6978__$1);
var G__6980 = cljs.core.chunk_rest.call(null,seq__6922_6978__$1);
var G__6981 = c__4511__auto___6979;
var G__6982 = cljs.core.count.call(null,c__4511__auto___6979);
var G__6983 = (0);
seq__6922_6968 = G__6980;
chunk__6923_6969 = G__6981;
count__6924_6970 = G__6982;
i__6925_6971 = G__6983;
continue;
} else {
var w_6984 = cljs.core.first.call(null,seq__6922_6978__$1);
cljs.core.remove_watch.call(null,w_6984,this$__$1);

var G__6985 = cljs.core.next.call(null,seq__6922_6978__$1);
var G__6986 = null;
var G__6987 = (0);
var G__6988 = (0);
seq__6922_6968 = G__6985;
chunk__6923_6969 = G__6986;
count__6924_6970 = G__6987;
i__6925_6971 = G__6988;
continue;
}
} else {
}
}
break;
}

self__.watching = cljs.core.PersistentHashSet.EMPTY;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return self__.on_dispose.call(null);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
var old_value = self__.state;
self__.state = new_value;

cljs.core._notify_watches.call(null,a__$1,old_value,new_value);

return new_value;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x,y));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,self__.state,x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);
var derefed = reagent.ratom.captured.call(null,this$__$1);
if(cljs.core.not_EQ_.call(null,derefed,self__.watching)){
reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.on_set)){
self__.on_set.call(null,oldval,newval);
} else {
}

return reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldval,newval);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.call(null,self__.watches,k);

if(cljs.core.empty_QMARK_.call(null,self__.watches)){
return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not.call(null,(function (){var or__3724__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3724__auto__)){
return or__3724__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
var x__6114__auto___6989 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);
if(!((console.log == null))){
console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(177),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,x__6114__auto___6989))].join(''))].join(''));
} else {
}

} else {
}

if(cljs.core.truth_((function (){var or__3724__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3724__auto__)){
return or__3724__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reaction derefed outside auto-running context"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",-1557728360,null))))].join('')));
}

reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run.call(null,this$__$1);
} else {
return self__.state;
}
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4311__auto__,writer__4312__auto__,opt__4313__auto__){
return cljs.core._write.call(null,writer__4312__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__6990){
var map__6992 = p__6990;
var map__6992__$1 = ((cljs.core.seq_QMARK_.call(null,map__6992))?cljs.core.apply.call(null,cljs.core.hash_map,map__6992):map__6992);
var derefed = cljs.core.get.call(null,map__6992__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));
var on_dispose = cljs.core.get.call(null,map__6992__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var on_set = cljs.core.get.call(null,map__6992__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var auto_run = cljs.core.get.call(null,map__6992__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

reagent.ratom._update_watching.call(null,reaction,derefed);
}

return reaction;
};
var make_reaction = function (f,var_args){
var p__6990 = null;
if (arguments.length > 1) {
  p__6990 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return make_reaction__delegate.call(this,f,p__6990);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__6993){
var f = cljs.core.first(arglist__6993);
var p__6990 = cljs.core.rest(arglist__6993);
return make_reaction__delegate(f,p__6990);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

//# sourceMappingURL=ratom.js.map