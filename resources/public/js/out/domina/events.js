// Compiled by ClojureScript 0.0-2644 {}
if(!goog.isProvided_('domina.events')) {
goog.provide('domina.events');
}
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.object');
goog.require('domina');

domina.events.Event = (function (){var obj8103 = {};
return obj8103;
})();

domina.events.prevent_default = (function prevent_default(evt){
if((function (){var and__3712__auto__ = evt;
if(and__3712__auto__){
return evt.domina$events$Event$prevent_default$arity$1;
} else {
return and__3712__auto__;
}
})()){
return evt.domina$events$Event$prevent_default$arity$1(evt);
} else {
var x__4368__auto__ = (((evt == null))?null:evt);
return (function (){var or__3724__auto__ = (domina.events.prevent_default[goog.typeOf(x__4368__auto__)]);
if(or__3724__auto__){
return or__3724__auto__;
} else {
var or__3724__auto____$1 = (domina.events.prevent_default["_"]);
if(or__3724__auto____$1){
return or__3724__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});

domina.events.stop_propagation = (function stop_propagation(evt){
if((function (){var and__3712__auto__ = evt;
if(and__3712__auto__){
return evt.domina$events$Event$stop_propagation$arity$1;
} else {
return and__3712__auto__;
}
})()){
return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else {
var x__4368__auto__ = (((evt == null))?null:evt);
return (function (){var or__3724__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4368__auto__)]);
if(or__3724__auto__){
return or__3724__auto__;
} else {
var or__3724__auto____$1 = (domina.events.stop_propagation["_"]);
if(or__3724__auto____$1){
return or__3724__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});

domina.events.target = (function target(evt){
if((function (){var and__3712__auto__ = evt;
if(and__3712__auto__){
return evt.domina$events$Event$target$arity$1;
} else {
return and__3712__auto__;
}
})()){
return evt.domina$events$Event$target$arity$1(evt);
} else {
var x__4368__auto__ = (((evt == null))?null:evt);
return (function (){var or__3724__auto__ = (domina.events.target[goog.typeOf(x__4368__auto__)]);
if(or__3724__auto__){
return or__3724__auto__;
} else {
var or__3724__auto____$1 = (domina.events.target["_"]);
if(or__3724__auto____$1){
return or__3724__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});

domina.events.current_target = (function current_target(evt){
if((function (){var and__3712__auto__ = evt;
if(and__3712__auto__){
return evt.domina$events$Event$current_target$arity$1;
} else {
return and__3712__auto__;
}
})()){
return evt.domina$events$Event$current_target$arity$1(evt);
} else {
var x__4368__auto__ = (((evt == null))?null:evt);
return (function (){var or__3724__auto__ = (domina.events.current_target[goog.typeOf(x__4368__auto__)]);
if(or__3724__auto__){
return or__3724__auto__;
} else {
var or__3724__auto____$1 = (domina.events.current_target["_"]);
if(or__3724__auto____$1){
return or__3724__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});

domina.events.event_type = (function event_type(evt){
if((function (){var and__3712__auto__ = evt;
if(and__3712__auto__){
return evt.domina$events$Event$event_type$arity$1;
} else {
return and__3712__auto__;
}
})()){
return evt.domina$events$Event$event_type$arity$1(evt);
} else {
var x__4368__auto__ = (((evt == null))?null:evt);
return (function (){var or__3724__auto__ = (domina.events.event_type[goog.typeOf(x__4368__auto__)]);
if(or__3724__auto__){
return or__3724__auto__;
} else {
var or__3724__auto____$1 = (domina.events.event_type["_"]);
if(or__3724__auto____$1){
return or__3724__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});

domina.events.raw_event = (function raw_event(evt){
if((function (){var and__3712__auto__ = evt;
if(and__3712__auto__){
return evt.domina$events$Event$raw_event$arity$1;
} else {
return and__3712__auto__;
}
})()){
return evt.domina$events$Event$raw_event$arity$1(evt);
} else {
var x__4368__auto__ = (((evt == null))?null:evt);
return (function (){var or__3724__auto__ = (domina.events.raw_event[goog.typeOf(x__4368__auto__)]);
if(or__3724__auto__){
return or__3724__auto__;
} else {
var or__3724__auto____$1 = (domina.events.raw_event["_"]);
if(or__3724__auto____$1){
return or__3724__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});

domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){
return (function (evt){
f.call(null,(function (){
if(typeof domina.events.t8107 !== 'undefined'){
} else {

/**
* @constructor
*/
domina.events.t8107 = (function (evt,f,create_listener_function,meta8108){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta8108 = meta8108;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t8107.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var o__$1 = this;
var temp__4124__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4124__auto__)){
var val = temp__4124__auto__;
return val;
} else {
return (self__.evt[cljs.core.name.call(null,k)]);
}
});

domina.events.t8107.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__3724__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__3724__auto__)){
return or__3724__auto__;
} else {
return not_found;
}
});

domina.events.t8107.prototype.domina$events$Event$ = true;

domina.events.t8107.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t8107.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t8107.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t8107.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t8107.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t8107.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t8107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8109){
var self__ = this;
var _8109__$1 = this;
return self__.meta8108;
});

domina.events.t8107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8109,meta8108__$1){
var self__ = this;
var _8109__$1 = this;
return (new domina.events.t8107(self__.evt,self__.f,self__.create_listener_function,meta8108__$1));
});

domina.events.t8107.cljs$lang$type = true;

domina.events.t8107.cljs$lang$ctorStr = "domina.events/t8107";

domina.events.t8107.cljs$lang$ctorPrWriter = (function (this__4311__auto__,writer__4312__auto__,opt__4313__auto__){
return cljs.core._write.call(null,writer__4312__auto__,"domina.events/t8107");
});

domina.events.__GT_t8107 = (function __GT_t8107(evt__$1,f__$1,create_listener_function__$1,meta8108){
return (new domina.events.t8107(evt__$1,f__$1,create_listener_function__$1,meta8108));
});

}

return (new domina.events.t8107(evt,f,create_listener_function,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),51,new cljs.core.Keyword(null,"end-line","end-line",1837326455),42,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"line","line",212345235),28,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/wake/study/clojure/omtest/resources/public/js/out/domina/events.cljs"], null)));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__4480__auto__ = ((function (f,t){
return (function iter__8114(s__8115){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__8115__$1 = s__8115;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8115__$1);
if(temp__4126__auto__){
var s__8115__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8115__$2)){
var c__4478__auto__ = cljs.core.chunk_first.call(null,s__8115__$2);
var size__4479__auto__ = cljs.core.count.call(null,c__4478__auto__);
var b__8117 = cljs.core.chunk_buffer.call(null,size__4479__auto__);
if((function (){var i__8116 = (0);
while(true){
if((i__8116 < size__4479__auto__)){
var node = cljs.core._nth.call(null,c__4478__auto__,i__8116);
cljs.core.chunk_append.call(null,b__8117,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__8118 = (i__8116 + (1));
i__8116 = G__8118;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8117),iter__8114.call(null,cljs.core.chunk_rest.call(null,s__8115__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8117),null);
}
} else {
var node = cljs.core.first.call(null,s__8115__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__8114.call(null,cljs.core.rest.call(null,s__8115__$2)));
}
} else {
return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;
return iter__4480__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){
return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){
return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){
return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){
return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){
return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){
var seq__8127 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__8128 = null;
var count__8129 = (0);
var i__8130 = (0);
while(true){
if((i__8130 < count__8129)){
var node = cljs.core._nth.call(null,chunk__8128,i__8130);
goog.events.removeAll(node);

var G__8135 = seq__8127;
var G__8136 = chunk__8128;
var G__8137 = count__8129;
var G__8138 = (i__8130 + (1));
seq__8127 = G__8135;
chunk__8128 = G__8136;
count__8129 = G__8137;
i__8130 = G__8138;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__8127);
if(temp__4126__auto__){
var seq__8127__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8127__$1)){
var c__4511__auto__ = cljs.core.chunk_first.call(null,seq__8127__$1);
var G__8139 = cljs.core.chunk_rest.call(null,seq__8127__$1);
var G__8140 = c__4511__auto__;
var G__8141 = cljs.core.count.call(null,c__4511__auto__);
var G__8142 = (0);
seq__8127 = G__8139;
chunk__8128 = G__8140;
count__8129 = G__8141;
i__8130 = G__8142;
continue;
} else {
var node = cljs.core.first.call(null,seq__8127__$1);
goog.events.removeAll(node);

var G__8143 = cljs.core.next.call(null,seq__8127__$1);
var G__8144 = null;
var G__8145 = (0);
var G__8146 = (0);
seq__8127 = G__8143;
chunk__8128 = G__8144;
count__8129 = G__8145;
i__8130 = G__8146;
continue;
}
} else {
return null;
}
}
break;
}
});
var unlisten_BANG___2 = (function (content,type){
var type__$1 = cljs.core.name.call(null,type);
var seq__8131 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__8132 = null;
var count__8133 = (0);
var i__8134 = (0);
while(true){
if((i__8134 < count__8133)){
var node = cljs.core._nth.call(null,chunk__8132,i__8134);
goog.events.removeAll(node,type__$1);

var G__8147 = seq__8131;
var G__8148 = chunk__8132;
var G__8149 = count__8133;
var G__8150 = (i__8134 + (1));
seq__8131 = G__8147;
chunk__8132 = G__8148;
count__8133 = G__8149;
i__8134 = G__8150;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__8131);
if(temp__4126__auto__){
var seq__8131__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8131__$1)){
var c__4511__auto__ = cljs.core.chunk_first.call(null,seq__8131__$1);
var G__8151 = cljs.core.chunk_rest.call(null,seq__8131__$1);
var G__8152 = c__4511__auto__;
var G__8153 = cljs.core.count.call(null,c__4511__auto__);
var G__8154 = (0);
seq__8131 = G__8151;
chunk__8132 = G__8152;
count__8133 = G__8153;
i__8134 = G__8154;
continue;
} else {
var node = cljs.core.first.call(null,seq__8131__$1);
goog.events.removeAll(node,type__$1);

var G__8155 = cljs.core.next.call(null,seq__8131__$1);
var G__8156 = null;
var G__8157 = (0);
var G__8158 = (0);
seq__8131 = G__8155;
chunk__8132 = G__8156;
count__8133 = G__8157;
i__8134 = G__8158;
continue;
}
} else {
return null;
}
}
break;
}
});
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){
return ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){
while(true){
var temp__4124__auto__ = n.parentNode;
if(cljs.core.truth_(temp__4124__auto__)){
var parent = temp__4124__auto__;
var G__8159 = parent;
var G__8160 = cljs.core.cons.call(null,parent,so_far);
n = G__8159;
so_far = G__8160;
continue;
} else {
return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){
evt.target = domina.single_node.call(null,source);

var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));
var seq__8169_8177 = cljs.core.seq.call(null,ancestors);
var chunk__8170_8178 = null;
var count__8171_8179 = (0);
var i__8172_8180 = (0);
while(true){
if((i__8172_8180 < count__8171_8179)){
var n_8181 = cljs.core._nth.call(null,chunk__8170_8178,i__8172_8180);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_8181;

goog.events.fireListeners(n_8181,evt.type,true,evt);
}

var G__8182 = seq__8169_8177;
var G__8183 = chunk__8170_8178;
var G__8184 = count__8171_8179;
var G__8185 = (i__8172_8180 + (1));
seq__8169_8177 = G__8182;
chunk__8170_8178 = G__8183;
count__8171_8179 = G__8184;
i__8172_8180 = G__8185;
continue;
} else {
var temp__4126__auto___8186 = cljs.core.seq.call(null,seq__8169_8177);
if(temp__4126__auto___8186){
var seq__8169_8187__$1 = temp__4126__auto___8186;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8169_8187__$1)){
var c__4511__auto___8188 = cljs.core.chunk_first.call(null,seq__8169_8187__$1);
var G__8189 = cljs.core.chunk_rest.call(null,seq__8169_8187__$1);
var G__8190 = c__4511__auto___8188;
var G__8191 = cljs.core.count.call(null,c__4511__auto___8188);
var G__8192 = (0);
seq__8169_8177 = G__8189;
chunk__8170_8178 = G__8190;
count__8171_8179 = G__8191;
i__8172_8180 = G__8192;
continue;
} else {
var n_8193 = cljs.core.first.call(null,seq__8169_8187__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_8193;

goog.events.fireListeners(n_8193,evt.type,true,evt);
}

var G__8194 = cljs.core.next.call(null,seq__8169_8187__$1);
var G__8195 = null;
var G__8196 = (0);
var G__8197 = (0);
seq__8169_8177 = G__8194;
chunk__8170_8178 = G__8195;
count__8171_8179 = G__8196;
i__8172_8180 = G__8197;
continue;
}
} else {
}
}
break;
}

var seq__8173_8198 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__8174_8199 = null;
var count__8175_8200 = (0);
var i__8176_8201 = (0);
while(true){
if((i__8176_8201 < count__8175_8200)){
var n_8202 = cljs.core._nth.call(null,chunk__8174_8199,i__8176_8201);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_8202;

goog.events.fireListeners(n_8202,evt.type,false,evt);
}

var G__8203 = seq__8173_8198;
var G__8204 = chunk__8174_8199;
var G__8205 = count__8175_8200;
var G__8206 = (i__8176_8201 + (1));
seq__8173_8198 = G__8203;
chunk__8174_8199 = G__8204;
count__8175_8200 = G__8205;
i__8176_8201 = G__8206;
continue;
} else {
var temp__4126__auto___8207 = cljs.core.seq.call(null,seq__8173_8198);
if(temp__4126__auto___8207){
var seq__8173_8208__$1 = temp__4126__auto___8207;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8173_8208__$1)){
var c__4511__auto___8209 = cljs.core.chunk_first.call(null,seq__8173_8208__$1);
var G__8210 = cljs.core.chunk_rest.call(null,seq__8173_8208__$1);
var G__8211 = c__4511__auto___8209;
var G__8212 = cljs.core.count.call(null,c__4511__auto___8209);
var G__8213 = (0);
seq__8173_8198 = G__8210;
chunk__8174_8199 = G__8211;
count__8175_8200 = G__8212;
i__8176_8201 = G__8213;
continue;
} else {
var n_8214 = cljs.core.first.call(null,seq__8173_8208__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_8214;

goog.events.fireListeners(n_8214,evt.type,false,evt);
}

var G__8215 = cljs.core.next.call(null,seq__8173_8208__$1);
var G__8216 = null;
var G__8217 = (0);
var G__8218 = (0);
seq__8173_8198 = G__8215;
chunk__8174_8199 = G__8216;
count__8175_8200 = G__8217;
i__8176_8201 = G__8218;
continue;
}
} else {
}
}
break;
}

return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){
return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){
var and__3712__auto__ = o.getParentEventTarget;
if(cljs.core.truth_(and__3712__auto__)){
return o.dispatchEvent;
} else {
return and__3712__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){
return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(cljs.core.name.call(null,type)));
var seq__8225_8231 = cljs.core.seq.call(null,evt_map);
var chunk__8226_8232 = null;
var count__8227_8233 = (0);
var i__8228_8234 = (0);
while(true){
if((i__8228_8234 < count__8227_8233)){
var vec__8229_8235 = cljs.core._nth.call(null,chunk__8226_8232,i__8228_8234);
var k_8236 = cljs.core.nth.call(null,vec__8229_8235,(0),null);
var v_8237 = cljs.core.nth.call(null,vec__8229_8235,(1),null);
(evt[k_8236] = v_8237);

var G__8238 = seq__8225_8231;
var G__8239 = chunk__8226_8232;
var G__8240 = count__8227_8233;
var G__8241 = (i__8228_8234 + (1));
seq__8225_8231 = G__8238;
chunk__8226_8232 = G__8239;
count__8227_8233 = G__8240;
i__8228_8234 = G__8241;
continue;
} else {
var temp__4126__auto___8242 = cljs.core.seq.call(null,seq__8225_8231);
if(temp__4126__auto___8242){
var seq__8225_8243__$1 = temp__4126__auto___8242;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8225_8243__$1)){
var c__4511__auto___8244 = cljs.core.chunk_first.call(null,seq__8225_8243__$1);
var G__8245 = cljs.core.chunk_rest.call(null,seq__8225_8243__$1);
var G__8246 = c__4511__auto___8244;
var G__8247 = cljs.core.count.call(null,c__4511__auto___8244);
var G__8248 = (0);
seq__8225_8231 = G__8245;
chunk__8226_8232 = G__8246;
count__8227_8233 = G__8247;
i__8228_8234 = G__8248;
continue;
} else {
var vec__8230_8249 = cljs.core.first.call(null,seq__8225_8243__$1);
var k_8250 = cljs.core.nth.call(null,vec__8230_8249,(0),null);
var v_8251 = cljs.core.nth.call(null,vec__8230_8249,(1),null);
(evt[k_8250] = v_8251);

var G__8252 = cljs.core.next.call(null,seq__8225_8243__$1);
var G__8253 = null;
var G__8254 = (0);
var G__8255 = (0);
seq__8225_8231 = G__8252;
chunk__8226_8232 = G__8253;
count__8227_8233 = G__8254;
i__8228_8234 = G__8255;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source))){
return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else {
return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){
return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){
var type__$1 = cljs.core.name.call(null,type);
return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__8256_SHARP_){
return goog.events.getListeners(p1__8256_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map