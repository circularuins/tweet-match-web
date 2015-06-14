// Compiled by ClojureScript 0.0-2644 {}
if(!goog.isProvided_('reagent_forms.core')) {
goog.provide('reagent_forms.core');
}
goog.require('cljs.core');
goog.require('reagent_forms.datepicker');
goog.require('reagent.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.walk');
reagent_forms.core.value_of = (function value_of(element){
return element.target.value;
});
reagent_forms.core.id__GT_path = cljs.core.memoize.call(null,(function (id){
return cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,cljs.core.name.call(null,id),/\./));
}));
reagent_forms.core.set_doc_value = (function set_doc_value(doc,id,value,events){
var path = reagent_forms.core.id__GT_path.call(null,id);
return cljs.core.reduce.call(null,((function (path){
return (function (p1__8238_SHARP_,p2__8237_SHARP_){
var or__3724__auto__ = p2__8237_SHARP_.call(null,path,value,p1__8238_SHARP_);
if(cljs.core.truth_(or__3724__auto__)){
return or__3724__auto__;
} else {
return p1__8238_SHARP_;
}
});})(path))
,cljs.core.assoc_in.call(null,doc,path,value),events);
});
reagent_forms.core.mk_save_fn = (function mk_save_fn(doc,events){
return (function (id,value){
return cljs.core.swap_BANG_.call(null,doc,reagent_forms.core.set_doc_value,id,value,events);
});
});
reagent_forms.core.format_type = (function (){var method_table__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4625__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","format-type"),((function (method_table__4621__auto__,prefer_table__4622__auto__,method_cache__4623__auto__,cached_hierarchy__4624__auto__,hierarchy__4625__auto__){
return (function (field_type,_){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field_type], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"numeric","numeric",-1495594714)], null)))){
return new cljs.core.Keyword(null,"numeric","numeric",-1495594714);
} else {
return field_type;
}
});})(method_table__4621__auto__,prefer_table__4622__auto__,method_cache__4623__auto__,cached_hierarchy__4624__auto__,hierarchy__4625__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4625__auto__,method_table__4621__auto__,prefer_table__4622__auto__,method_cache__4623__auto__,cached_hierarchy__4624__auto__));
})();
reagent_forms.core.valid_number_ending_QMARK_ = (function valid_number_ending_QMARK_(n){
return ((cljs.core.not_EQ_.call(null,".",cljs.core.last.call(null,cljs.core.butlast.call(null,n)))) && (cljs.core._EQ_.call(null,".",cljs.core.last.call(null,n)))) || (cljs.core._EQ_.call(null,"0",cljs.core.last.call(null,n)));
});
reagent_forms.core.format_value = (function format_value(fmt,value){
if(cljs.core.truth_((function (){var and__3712__auto__ = cljs.core.not.call(null,isNaN(parseFloat(value)));
if(and__3712__auto__){
return fmt;
} else {
return and__3712__auto__;
}
})())){
return goog.string.format(fmt,value);
} else {
return value;
}
});
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (_,n){
if(cljs.core.truth_(cljs.core.not_empty.call(null,n))){
var parsed = parseFloat(n);
if(cljs.core.truth_(isNaN(parsed))){
return null;
} else {
if(reagent_forms.core.valid_number_ending_QMARK_.call(null,n)){
return n;
} else {
return parsed;
}
}
} else {
return null;
}
}));
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){
return value;
}));
reagent_forms.core.bind = (function (){var method_table__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4625__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","bind"),((function (method_table__4621__auto__,prefer_table__4622__auto__,method_cache__4623__auto__,cached_hierarchy__4624__auto__,hierarchy__4625__auto__){
return (function (p__8239,_){
var map__8240 = p__8239;
var map__8240__$1 = ((cljs.core.seq_QMARK_.call(null,map__8240))?cljs.core.apply.call(null,cljs.core.hash_map,map__8240):map__8240);
var field = cljs.core.get.call(null,map__8240__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field;
}
});})(method_table__4621__auto__,prefer_table__4622__auto__,method_cache__4623__auto__,cached_hierarchy__4624__auto__,hierarchy__4625__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4625__auto__,method_table__4621__auto__,prefer_table__4622__auto__,method_cache__4623__auto__,cached_hierarchy__4624__auto__));
})();
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__8242,p__8243){
var map__8244 = p__8242;
var map__8244__$1 = ((cljs.core.seq_QMARK_.call(null,map__8244))?cljs.core.apply.call(null,cljs.core.hash_map,map__8244):map__8244);
var fmt = cljs.core.get.call(null,map__8244__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var id = cljs.core.get.call(null,map__8244__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__8244__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var map__8245 = p__8243;
var map__8245__$1 = ((cljs.core.seq_QMARK_.call(null,map__8245))?cljs.core.apply.call(null,cljs.core.hash_map,map__8245):map__8245);
var save_BANG_ = cljs.core.get.call(null,map__8245__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__8245__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var value = (function (){var or__3724__auto__ = get.call(null,id);
if(cljs.core.truth_(or__3724__auto__)){
return or__3724__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value.call(null,fmt,value);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__8244,map__8244__$1,fmt,id,field,map__8245,map__8245__$1,save_BANG_,get){
return (function (p1__8241_SHARP_){
return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,field,reagent_forms.core.value_of.call(null,p1__8241_SHARP_)));
});})(map__8244,map__8244__$1,fmt,id,field,map__8245,map__8245__$1,save_BANG_,get))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__8246,p__8247){
var map__8248 = p__8246;
var map__8248__$1 = ((cljs.core.seq_QMARK_.call(null,map__8248))?cljs.core.apply.call(null,cljs.core.hash_map,map__8248):map__8248);
var id = cljs.core.get.call(null,map__8248__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__8249 = p__8247;
var map__8249__$1 = ((cljs.core.seq_QMARK_.call(null,map__8249))?cljs.core.apply.call(null,cljs.core.hash_map,map__8249):map__8249);
var checked = cljs.core.get.call(null,map__8249__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var save_BANG_ = cljs.core.get.call(null,map__8249__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__8249__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,checked),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__8248,map__8248__$1,id,map__8249,map__8249__$1,checked,save_BANG_,get){
return (function (){
return save_BANG_.call(null,id,cljs.core.swap_BANG_.call(null,checked,cljs.core.not));
});})(map__8248,map__8248__$1,id,map__8249,map__8249__$1,checked,save_BANG_,get))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return null;
}));
/**
* @param {...*} var_args
*/
reagent_forms.core.set_attrs = (function() { 
var set_attrs__delegate = function (p__8250,opts,p__8251){
var vec__8254 = p__8250;
var type = cljs.core.nth.call(null,vec__8254,(0),null);
var attrs = cljs.core.nth.call(null,vec__8254,(1),null);
var body = cljs.core.nthnext.call(null,vec__8254,(2));
var vec__8255 = p__8251;
var default_attrs = cljs.core.nth.call(null,vec__8255,(0),null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,default_attrs,reagent_forms.core.bind.call(null,attrs,opts),attrs)], null),body);
};
var set_attrs = function (p__8250,opts,var_args){
var p__8251 = null;
if (arguments.length > 2) {
  p__8251 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_attrs__delegate.call(this,p__8250,opts,p__8251);};
set_attrs.cljs$lang$maxFixedArity = 2;
set_attrs.cljs$lang$applyTo = (function (arglist__8256){
var p__8250 = cljs.core.first(arglist__8256);
arglist__8256 = cljs.core.next(arglist__8256);
var opts = cljs.core.first(arglist__8256);
var p__8251 = cljs.core.rest(arglist__8256);
return set_attrs__delegate(p__8250,opts,p__8251);
});
set_attrs.cljs$core$IFn$_invoke$arity$variadic = set_attrs__delegate;
return set_attrs;
})()
;
reagent_forms.core.init_field = (function (){var method_table__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4625__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","init-field"),((function (method_table__4621__auto__,prefer_table__4622__auto__,method_cache__4623__auto__,cached_hierarchy__4624__auto__,hierarchy__4625__auto__){
return (function (p__8257,_){
var vec__8258 = p__8257;
var ___$1 = cljs.core.nth.call(null,vec__8258,(0),null);
var map__8259 = cljs.core.nth.call(null,vec__8258,(1),null);
var map__8259__$1 = ((cljs.core.seq_QMARK_.call(null,map__8259))?cljs.core.apply.call(null,cljs.core.hash_map,map__8259):map__8259);
var field = cljs.core.get.call(null,map__8259__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var field__$1 = cljs.core.keyword.call(null,field);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field__$1], true),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field__$1;
}
});})(method_table__4621__auto__,prefer_table__4622__auto__,method_cache__4623__auto__,cached_hierarchy__4624__auto__,hierarchy__4625__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4625__auto__,method_table__4621__auto__,prefer_table__4622__auto__,method_cache__4623__auto__,cached_hierarchy__4624__auto__));
})();
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__8260,opts){
var vec__8261 = p__8260;
var _ = cljs.core.nth.call(null,vec__8261,(0),null);
var map__8262 = cljs.core.nth.call(null,vec__8261,(1),null);
var map__8262__$1 = ((cljs.core.seq_QMARK_.call(null,map__8262))?cljs.core.apply.call(null,cljs.core.hash_map,map__8262):map__8262);
var field = cljs.core.get.call(null,map__8262__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var component = vec__8261;
return ((function (vec__8261,_,map__8262,map__8262__$1,field,component){
return (function (){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
});
;})(vec__8261,_,map__8262,map__8262__$1,field,component))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (p__8264,p__8265){
var vec__8266 = p__8264;
var type = cljs.core.nth.call(null,vec__8266,(0),null);
var map__8267 = cljs.core.nth.call(null,vec__8266,(1),null);
var map__8267__$1 = ((cljs.core.seq_QMARK_.call(null,map__8267))?cljs.core.apply.call(null,cljs.core.hash_map,map__8267):map__8267);
var attrs = map__8267__$1;
var fmt = cljs.core.get.call(null,map__8267__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var id = cljs.core.get.call(null,map__8267__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__8268 = p__8265;
var map__8268__$1 = ((cljs.core.seq_QMARK_.call(null,map__8268))?cljs.core.apply.call(null,cljs.core.hash_map,map__8268):map__8268);
var save_BANG_ = cljs.core.get.call(null,map__8268__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__8268__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var display_value = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137),false,new cljs.core.Keyword(null,"value","value",305978217),get.call(null,id)], null));
return ((function (display_value,vec__8266,type,map__8267,map__8267__$1,attrs,fmt,id,map__8268,map__8268__$1,save_BANG_,get){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var doc_value = (function (){var or__3724__auto__ = get.call(null,id);
if(cljs.core.truth_(or__3724__auto__)){
return or__3724__auto__;
} else {
return "";
}
})();
var map__8269 = cljs.core.deref.call(null,display_value);
var map__8269__$1 = ((cljs.core.seq_QMARK_.call(null,map__8269))?cljs.core.apply.call(null,cljs.core.hash_map,map__8269):map__8269);
var value = cljs.core.get.call(null,map__8269__$1,new cljs.core.Keyword(null,"value","value",305978217));
var changed_self_QMARK_ = cljs.core.get.call(null,map__8269__$1,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));
var value__$1 = (cljs.core.truth_(changed_self_QMARK_)?value:doc_value);
cljs.core.swap_BANG_.call(null,display_value,cljs.core.dissoc,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));

return reagent_forms.core.format_value.call(null,fmt,value__$1);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (display_value,vec__8266,type,map__8267,map__8267__$1,attrs,fmt,id,map__8268,map__8268__$1,save_BANG_,get){
return (function (p1__8263_SHARP_){
var temp__4124__auto__ = reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.value_of.call(null,p1__8263_SHARP_));
if(cljs.core.truth_(temp__4124__auto__)){
var value = temp__4124__auto__;
cljs.core.reset_BANG_.call(null,display_value,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137),true,new cljs.core.Keyword(null,"value","value",305978217),value], null));

return save_BANG_.call(null,id,parseFloat(value));
} else {
return save_BANG_.call(null,id,null);
}
});})(display_value,vec__8266,type,map__8267,map__8267__$1,attrs,fmt,id,map__8268,map__8268__$1,save_BANG_,get))
], null),attrs)], null);
});
;})(display_value,vec__8266,type,map__8267,map__8267__$1,attrs,fmt,id,map__8268,map__8268__$1,save_BANG_,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"datepicker","datepicker",821741450),(function (p__8271,p__8272){
var vec__8273 = p__8271;
var _ = cljs.core.nth.call(null,vec__8273,(0),null);
var map__8274 = cljs.core.nth.call(null,vec__8273,(1),null);
var map__8274__$1 = ((cljs.core.seq_QMARK_.call(null,map__8274))?cljs.core.apply.call(null,cljs.core.hash_map,map__8274):map__8274);
var inline = cljs.core.get.call(null,map__8274__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var date_format = cljs.core.get.call(null,map__8274__$1,new cljs.core.Keyword(null,"date-format","date-format",-557196721));
var id = cljs.core.get.call(null,map__8274__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__8275 = p__8272;
var map__8275__$1 = ((cljs.core.seq_QMARK_.call(null,map__8275))?cljs.core.apply.call(null,cljs.core.hash_map,map__8275):map__8275);
var save_BANG_ = cljs.core.get.call(null,map__8275__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__8275__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var fmt = reagent_forms.datepicker.parse_format.call(null,date_format);
var today = (new Date());
var expanded_QMARK_ = reagent.core.atom.call(null,false);
return ((function (fmt,today,expanded_QMARK_,vec__8273,_,map__8274,map__8274__$1,inline,date_format,id,map__8275,map__8275__$1,save_BANG_,get){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (fmt,today,expanded_QMARK_,vec__8273,_,map__8274,map__8274__$1,inline,date_format,id,map__8275,map__8275__$1,save_BANG_,get){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(fmt,today,expanded_QMARK_,vec__8273,_,map__8274,map__8274__$1,inline,date_format,id,map__8275,map__8275__$1,save_BANG_,get))
,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__4126__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4126__auto__)){
var date = temp__4126__auto__;
return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else {
return null;
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (fmt,today,expanded_QMARK_,vec__8273,_,map__8274,map__8274__$1,inline,date_format,id,map__8275,map__8275__$1,save_BANG_,get){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(fmt,today,expanded_QMARK_,vec__8273,_,map__8274,map__8274__$1,inline,date_format,id,map__8275,map__8275__$1,save_BANG_,get))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),expanded_QMARK_,((function (fmt,today,expanded_QMARK_,vec__8273,_,map__8274,map__8274__$1,inline,date_format,id,map__8275,map__8275__$1,save_BANG_,get){
return (function (){
return get.call(null,id);
});})(fmt,today,expanded_QMARK_,vec__8273,_,map__8274,map__8274__$1,inline,date_format,id,map__8275,map__8275__$1,save_BANG_,get))
,((function (fmt,today,expanded_QMARK_,vec__8273,_,map__8274,map__8274__$1,inline,date_format,id,map__8275,map__8275__$1,save_BANG_,get){
return (function (p1__8270_SHARP_){
return save_BANG_.call(null,id,p1__8270_SHARP_);
});})(fmt,today,expanded_QMARK_,vec__8273,_,map__8274,map__8274__$1,inline,date_format,id,map__8275,map__8275__$1,save_BANG_,get))
], null)], null);
});
;})(fmt,today,expanded_QMARK_,vec__8273,_,map__8274,map__8274__$1,inline,date_format,id,map__8275,map__8275__$1,save_BANG_,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__8276,p__8277){
var vec__8278 = p__8276;
var _ = cljs.core.nth.call(null,vec__8278,(0),null);
var map__8279 = cljs.core.nth.call(null,vec__8278,(1),null);
var map__8279__$1 = ((cljs.core.seq_QMARK_.call(null,map__8279))?cljs.core.apply.call(null,cljs.core.hash_map,map__8279):map__8279);
var field = cljs.core.get.call(null,map__8279__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__8279__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var component = vec__8278;
var map__8280 = p__8277;
var map__8280__$1 = ((cljs.core.seq_QMARK_.call(null,map__8280))?cljs.core.apply.call(null,cljs.core.hash_map,map__8280):map__8280);
var opts = map__8280__$1;
var get = cljs.core.get.call(null,map__8280__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var state = reagent.core.atom.call(null,get.call(null,id));
return ((function (state,vec__8278,_,map__8279,map__8279__$1,field,id,component,map__8280,map__8280__$1,opts,get){
return (function (){
return reagent_forms.core.set_attrs.call(null,component,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"checked","checked",-50955819),state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
});
;})(state,vec__8278,_,map__8279,map__8279__$1,field,id,component,map__8280,map__8280__$1,opts,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"label","label",1718410804),(function (p__8281,p__8282){
var vec__8283 = p__8281;
var type = cljs.core.nth.call(null,vec__8283,(0),null);
var map__8284 = cljs.core.nth.call(null,vec__8283,(1),null);
var map__8284__$1 = ((cljs.core.seq_QMARK_.call(null,map__8284))?cljs.core.apply.call(null,cljs.core.hash_map,map__8284):map__8284);
var attrs = map__8284__$1;
var placeholder = cljs.core.get.call(null,map__8284__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var postamble = cljs.core.get.call(null,map__8284__$1,new cljs.core.Keyword(null,"postamble","postamble",-500033366));
var preamble = cljs.core.get.call(null,map__8284__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var id = cljs.core.get.call(null,map__8284__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__8285 = p__8282;
var map__8285__$1 = ((cljs.core.seq_QMARK_.call(null,map__8285))?cljs.core.apply.call(null,cljs.core.hash_map,map__8285):map__8285);
var get = cljs.core.get.call(null,map__8285__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return ((function (vec__8283,type,map__8284,map__8284__$1,attrs,placeholder,postamble,preamble,id,map__8285,map__8285__$1,get){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4124__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4124__auto__)){
var value = temp__4124__auto__;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
});
;})(vec__8283,type,map__8284,map__8284__$1,attrs,placeholder,postamble,preamble,id,map__8285,map__8285__$1,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"alert","alert",-571950580),(function (p__8286,p__8287){
var vec__8288 = p__8286;
var type = cljs.core.nth.call(null,vec__8288,(0),null);
var map__8289 = cljs.core.nth.call(null,vec__8288,(1),null);
var map__8289__$1 = ((cljs.core.seq_QMARK_.call(null,map__8289))?cljs.core.apply.call(null,cljs.core.hash_map,map__8289):map__8289);
var attrs = map__8289__$1;
var touch_event = cljs.core.get.call(null,map__8289__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var event = cljs.core.get.call(null,map__8289__$1,new cljs.core.Keyword(null,"event","event",301435442));
var id = cljs.core.get.call(null,map__8289__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var body = cljs.core.nthnext.call(null,vec__8288,(2));
var map__8290 = p__8287;
var map__8290__$1 = ((cljs.core.seq_QMARK_.call(null,map__8290))?cljs.core.apply.call(null,cljs.core.hash_map,map__8290):map__8290);
var opts = map__8290__$1;
var save_BANG_ = cljs.core.get.call(null,map__8290__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__8290__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return ((function (vec__8288,type,map__8289,map__8289__$1,attrs,touch_event,event,id,body,map__8290,map__8290__$1,opts,save_BANG_,get){
return (function (){
if(cljs.core.truth_(event)){
if(cljs.core.truth_(event.call(null,get.call(null,id)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4124__auto__ = cljs.core.not_empty.call(null,get.call(null,id));
if(cljs.core.truth_(temp__4124__auto__)){
var message = temp__4124__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__3724__auto__ = touch_event;
if(cljs.core.truth_(or__3724__auto__)){
return or__3724__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),((function (message,temp__4124__auto__,vec__8288,type,map__8289,map__8289__$1,attrs,touch_event,event,id,body,map__8290,map__8290__$1,opts,save_BANG_,get){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__4124__auto__,vec__8288,type,map__8289,map__8289__$1,attrs,touch_event,event,id,body,map__8290,map__8290__$1,opts,save_BANG_,get))
], true, false),"X"], null),message], null);
} else {
return null;
}
}
});
;})(vec__8288,type,map__8289,map__8289__$1,attrs,touch_event,event,id,body,map__8290,map__8290__$1,opts,save_BANG_,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"radio","radio",1323726374),(function (p__8291,p__8292){
var vec__8293 = p__8291;
var type = cljs.core.nth.call(null,vec__8293,(0),null);
var map__8294 = cljs.core.nth.call(null,vec__8293,(1),null);
var map__8294__$1 = ((cljs.core.seq_QMARK_.call(null,map__8294))?cljs.core.apply.call(null,cljs.core.hash_map,map__8294):map__8294);
var attrs = map__8294__$1;
var value = cljs.core.get.call(null,map__8294__$1,new cljs.core.Keyword(null,"value","value",305978217));
var id = cljs.core.get.call(null,map__8294__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__8294__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var body = cljs.core.nthnext.call(null,vec__8293,(2));
var map__8295 = p__8292;
var map__8295__$1 = ((cljs.core.seq_QMARK_.call(null,map__8295))?cljs.core.apply.call(null,cljs.core.hash_map,map__8295):map__8295);
var save_BANG_ = cljs.core.get.call(null,map__8295__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__8295__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var state = reagent.core.atom.call(null,cljs.core._EQ_.call(null,value,get.call(null,id)));
return ((function (state,vec__8293,type,map__8294,map__8294__$1,attrs,value,id,field,body,map__8295,map__8295__$1,save_BANG_,get){
return (function (){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (state,vec__8293,type,map__8294,map__8294__$1,attrs,value,id,field,body,map__8295,map__8295__$1,save_BANG_,get){
return (function (){
save_BANG_.call(null,id,value);

return cljs.core.reset_BANG_.call(null,state,cljs.core._EQ_.call(null,value,get.call(null,id)));
});})(state,vec__8293,type,map__8294,map__8294__$1,attrs,value,id,field,body,map__8295,map__8295__$1,save_BANG_,get))
], null),attrs)], null),body);
});
;})(state,vec__8293,type,map__8294,map__8294__$1,attrs,value,id,field,body,map__8295,map__8295__$1,save_BANG_,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"typeahead","typeahead",-1364611797),(function (p__8297,p__8298){
var vec__8299 = p__8297;
var type = cljs.core.nth.call(null,vec__8299,(0),null);
var map__8300 = cljs.core.nth.call(null,vec__8299,(1),null);
var map__8300__$1 = ((cljs.core.seq_QMARK_.call(null,map__8300))?cljs.core.apply.call(null,cljs.core.hash_map,map__8300):map__8300);
var data_source = cljs.core.get.call(null,map__8300__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var id = cljs.core.get.call(null,map__8300__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__8301 = p__8298;
var map__8301__$1 = ((cljs.core.seq_QMARK_.call(null,map__8301))?cljs.core.apply.call(null,cljs.core.hash_map,map__8301):map__8301);
var save_BANG_ = cljs.core.get.call(null,map__8301__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__8301__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var typeahead_hidden_QMARK_ = reagent.core.atom.call(null,true);
var mouse_on_list_QMARK_ = reagent.core.atom.call(null,false);
return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__8299,type,map__8300,map__8300__$1,data_source,id,map__8301,map__8301__$1,save_BANG_,get){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),get.call(null,id),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__8299,type,map__8300,map__8300__$1,data_source,id,map__8301,map__8301__$1,save_BANG_,get){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);
}
});})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__8299,type,map__8300,map__8300__$1,data_source,id,map__8301,map__8301__$1,save_BANG_,get))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__8299,type,map__8300,map__8300__$1,data_source,id,map__8301,map__8301__$1,save_BANG_,get){
return (function (p1__8296_SHARP_){
save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__8296_SHARP_));

return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);
});})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__8299,type,map__8300,map__8300__$1,data_source,id,map__8301,map__8301__$1,save_BANG_,get))
], null)], null),(function (){var temp__4126__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4126__auto__)){
var value = temp__4126__auto__;
var results = data_source.call(null,value.toLowerCase());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.typeahead","ul.typeahead",-1230632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),(function (){var or__3724__auto__ = cljs.core.empty_QMARK_.call(null,results);
if(or__3724__auto__){
return or__3724__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})(),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__8299,type,map__8300,map__8300__$1,data_source,id,map__8301,map__8301__$1,save_BANG_,get){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__8299,type,map__8300,map__8300__$1,data_source,id,map__8301,map__8301__$1,save_BANG_,get))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__8299,type,map__8300,map__8300__$1,data_source,id,map__8301,map__8301__$1,save_BANG_,get){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__8299,type,map__8300,map__8300__$1,data_source,id,map__8301,map__8301__$1,save_BANG_,get))
], null),(function (){var iter__4480__auto__ = ((function (results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__8299,type,map__8300,map__8300__$1,data_source,id,map__8301,map__8301__$1,save_BANG_,get){
return (function iter__8302(s__8303){
return (new cljs.core.LazySeq(null,((function (results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__8299,type,map__8300,map__8300__$1,data_source,id,map__8301,map__8301__$1,save_BANG_,get){
return (function (){
var s__8303__$1 = s__8303;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__8303__$1);
if(temp__4126__auto____$1){
var s__8303__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8303__$2)){
var c__4478__auto__ = cljs.core.chunk_first.call(null,s__8303__$2);
var size__4479__auto__ = cljs.core.count.call(null,c__4478__auto__);
var b__8305 = cljs.core.chunk_buffer.call(null,size__4479__auto__);
if((function (){var i__8304 = (0);
while(true){
if((i__8304 < size__4479__auto__)){
var result = cljs.core._nth.call(null,c__4478__auto__,i__8304);
cljs.core.chunk_append.call(null,b__8305,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__8304,result,c__4478__auto__,size__4479__auto__,b__8305,s__8303__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__8299,type,map__8300,map__8300__$1,data_source,id,map__8301,map__8301__$1,save_BANG_,get){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return save_BANG_.call(null,id,result);
});})(i__8304,result,c__4478__auto__,size__4479__auto__,b__8305,s__8303__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__8299,type,map__8300,map__8300__$1,data_source,id,map__8301,map__8301__$1,save_BANG_,get))
], null),result], null));

var G__8306 = (i__8304 + (1));
i__8304 = G__8306;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8305),iter__8302.call(null,cljs.core.chunk_rest.call(null,s__8303__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8305),null);
}
} else {
var result = cljs.core.first.call(null,s__8303__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (result,s__8303__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__8299,type,map__8300,map__8300__$1,data_source,id,map__8301,map__8301__$1,save_BANG_,get){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return save_BANG_.call(null,id,result);
});})(result,s__8303__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__8299,type,map__8300,map__8300__$1,data_source,id,map__8301,map__8301__$1,save_BANG_,get))
], null),result], null),iter__8302.call(null,cljs.core.rest.call(null,s__8303__$2)));
}
} else {
return null;
}
break;
}
});})(results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__8299,type,map__8300,map__8300__$1,data_source,id,map__8301,map__8301__$1,save_BANG_,get))
,null,null));
});})(results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__8299,type,map__8300,map__8300__$1,data_source,id,map__8301,map__8301__$1,save_BANG_,get))
;
return iter__4480__auto__.call(null,results);
})()], null);
} else {
return null;
}
})()], null);
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__8299,type,map__8300,map__8300__$1,data_source,id,map__8301,map__8301__$1,save_BANG_,get))
}));
reagent_forms.core.group_item = (function group_item(p__8307,p__8308,selections,field,id){
var vec__8312 = p__8307;
var type = cljs.core.nth.call(null,vec__8312,(0),null);
var map__8313 = cljs.core.nth.call(null,vec__8312,(1),null);
var map__8313__$1 = ((cljs.core.seq_QMARK_.call(null,map__8313))?cljs.core.apply.call(null,cljs.core.hash_map,map__8313):map__8313);
var attrs = map__8313__$1;
var touch_event = cljs.core.get.call(null,map__8313__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var key = cljs.core.get.call(null,map__8313__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var body = cljs.core.nthnext.call(null,vec__8312,(2));
var map__8314 = p__8308;
var map__8314__$1 = ((cljs.core.seq_QMARK_.call(null,map__8314))?cljs.core.apply.call(null,cljs.core.hash_map,map__8314):map__8314);
var multi_select = cljs.core.get.call(null,map__8314__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var save_BANG_ = cljs.core.get.call(null,map__8314__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__8314__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var handle_click_BANG_ = ((function (vec__8312,type,map__8313,map__8313__$1,attrs,touch_event,key,body,map__8314,map__8314__$1,multi_select,save_BANG_,get){
return (function handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.call(null,selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

return save_BANG_.call(null,id,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.second,cljs.core.deref.call(null,selections))));
} else {
var value = key.call(null,cljs.core.deref.call(null,selections));
cljs.core.reset_BANG_.call(null,selections,new cljs.core.PersistentArrayMap.fromArray([key,cljs.core.not.call(null,value)], true, false));

return save_BANG_.call(null,id,(cljs.core.truth_(key.call(null,cljs.core.deref.call(null,selections)))?key:null));
}
});})(vec__8312,type,map__8313,map__8313__$1,attrs,touch_event,key,body,map__8314,map__8314__$1,multi_select,save_BANG_,get))
;
return ((function (vec__8312,type,map__8313,map__8313__$1,attrs,touch_event,key,body,map__8314,map__8314__$1,multi_select,save_BANG_,get){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(key.call(null,cljs.core.deref.call(null,selections)))?"active":null),(function (){var or__3724__auto__ = touch_event;
if(cljs.core.truth_(or__3724__auto__)){
return or__3724__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),handle_click_BANG_], true, false),attrs),body], null);
});
;})(vec__8312,type,map__8313,map__8313__$1,attrs,touch_event,key,body,map__8314,map__8314__$1,multi_select,save_BANG_,get))
});
reagent_forms.core.mk_selections = (function mk_selections(id,selectors,p__8315){
var map__8320 = p__8315;
var map__8320__$1 = ((cljs.core.seq_QMARK_.call(null,map__8320))?cljs.core.apply.call(null,cljs.core.hash_map,map__8320):map__8320);
var multi_select = cljs.core.get.call(null,map__8320__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var get = cljs.core.get.call(null,map__8320__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var value = get.call(null,id);
return cljs.core.reduce.call(null,((function (value,map__8320,map__8320__$1,multi_select,get){
return (function (m,p__8321){
var vec__8322 = p__8321;
var _ = cljs.core.nth.call(null,vec__8322,(0),null);
var map__8323 = cljs.core.nth.call(null,vec__8322,(1),null);
var map__8323__$1 = ((cljs.core.seq_QMARK_.call(null,map__8323))?cljs.core.apply.call(null,cljs.core.hash_map,map__8323):map__8323);
var key = cljs.core.get.call(null,map__8323__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.assoc.call(null,m,key,cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([key], true),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__8320,map__8320__$1,multi_select,get))
,cljs.core.PersistentArrayMap.EMPTY,selectors);
});
/**
* selectors might be passed in inline or as a collection
*/
reagent_forms.core.extract_selectors = (function extract_selectors(selectors){
if((cljs.core.ffirst.call(null,selectors) instanceof cljs.core.Keyword)){
return selectors;
} else {
return cljs.core.first.call(null,selectors);
}
});
reagent_forms.core.selection_group = (function selection_group(p__8326,p__8327){
var vec__8333 = p__8326;
var type = cljs.core.nth.call(null,vec__8333,(0),null);
var map__8334 = cljs.core.nth.call(null,vec__8333,(1),null);
var map__8334__$1 = ((cljs.core.seq_QMARK_.call(null,map__8334))?cljs.core.apply.call(null,cljs.core.hash_map,map__8334):map__8334);
var attrs = map__8334__$1;
var id = cljs.core.get.call(null,map__8334__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__8334__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var selection_items = cljs.core.nthnext.call(null,vec__8333,(2));
var map__8335 = p__8327;
var map__8335__$1 = ((cljs.core.seq_QMARK_.call(null,map__8335))?cljs.core.apply.call(null,cljs.core.hash_map,map__8335):map__8335);
var opts = map__8335__$1;
var get = cljs.core.get.call(null,map__8335__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var selection_items__$1 = reagent_forms.core.extract_selectors.call(null,selection_items);
var selections = reagent.core.atom.call(null,reagent_forms.core.mk_selections.call(null,id,selection_items__$1,opts));
var selectors = cljs.core.map.call(null,((function (selection_items__$1,selections,vec__8333,type,map__8334,map__8334__$1,attrs,id,field,selection_items,map__8335,map__8335__$1,opts,get){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,item)),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item.call(null,item,opts,selections,field,id)], null)], null);
});})(selection_items__$1,selections,vec__8333,type,map__8334,map__8334__$1,attrs,id,field,selection_items,map__8335,map__8335__$1,opts,get))
,selection_items__$1);
return ((function (selection_items__$1,selections,selectors,vec__8333,type,map__8334,map__8334__$1,attrs,id,field,selection_items,map__8335,map__8335__$1,opts,get){
return (function (){
if(cljs.core.truth_(get.call(null,id))){
} else {
cljs.core.swap_BANG_.call(null,selections,((function (selection_items__$1,selections,selectors,vec__8333,type,map__8334,map__8334__$1,attrs,id,field,selection_items,map__8335,map__8335__$1,opts,get){
return (function (p1__8324_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (selection_items__$1,selections,selectors,vec__8333,type,map__8334,map__8334__$1,attrs,id,field,selection_items,map__8335,map__8335__$1,opts,get){
return (function (p__8336){
var vec__8337 = p__8336;
var k = cljs.core.nth.call(null,vec__8337,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
});})(selection_items__$1,selections,selectors,vec__8333,type,map__8334,map__8334__$1,attrs,id,field,selection_items,map__8335,map__8335__$1,opts,get))
,p1__8324_SHARP_));
});})(selection_items__$1,selections,selectors,vec__8333,type,map__8334,map__8334__$1,attrs,id,field,selection_items,map__8335,map__8335__$1,opts,get))
);
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,cljs.core.doall.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.filter.call(null,((function (selection_items__$1,selections,selectors,vec__8333,type,map__8334,map__8334__$1,attrs,id,field,selection_items,map__8335,map__8335__$1,opts,get){
return (function (p1__8325_SHARP_){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(p1__8325_SHARP_);
if(cljs.core.truth_(temp__4124__auto__)){
var visible_QMARK_ = temp__4124__auto__;
return visible_QMARK_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(opts)));
} else {
return true;
}
});})(selection_items__$1,selections,selectors,vec__8333,type,map__8334,map__8334__$1,attrs,id,field,selection_items,map__8335,map__8335__$1,opts,get))
,selectors)))], null);
});
;})(selection_items__$1,selections,selectors,vec__8333,type,map__8334,map__8334__$1,attrs,id,field,selection_items,map__8335,map__8335__$1,opts,get))
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"single-select","single-select",1327691774),(function (field,opts){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
});
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),(function (field,opts){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null);
});
}));
reagent_forms.core.map_options = (function map_options(options){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4480__auto__ = (function iter__8350(s__8351){
return (new cljs.core.LazySeq(null,(function (){
var s__8351__$1 = s__8351;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8351__$1);
if(temp__4126__auto__){
var s__8351__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8351__$2)){
var c__4478__auto__ = cljs.core.chunk_first.call(null,s__8351__$2);
var size__4479__auto__ = cljs.core.count.call(null,c__4478__auto__);
var b__8353 = cljs.core.chunk_buffer.call(null,size__4479__auto__);
if((function (){var i__8352 = (0);
while(true){
if((i__8352 < size__4479__auto__)){
var vec__8358 = cljs.core._nth.call(null,c__4478__auto__,i__8352);
var _ = cljs.core.nth.call(null,vec__8358,(0),null);
var map__8359 = cljs.core.nth.call(null,vec__8358,(1),null);
var map__8359__$1 = ((cljs.core.seq_QMARK_.call(null,map__8359))?cljs.core.apply.call(null,cljs.core.hash_map,map__8359):map__8359);
var key = cljs.core.get.call(null,map__8359__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__8358,(2),null);
cljs.core.chunk_append.call(null,b__8353,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null));

var G__8362 = (i__8352 + (1));
i__8352 = G__8362;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8353),iter__8350.call(null,cljs.core.chunk_rest.call(null,s__8351__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8353),null);
}
} else {
var vec__8360 = cljs.core.first.call(null,s__8351__$2);
var _ = cljs.core.nth.call(null,vec__8360,(0),null);
var map__8361 = cljs.core.nth.call(null,vec__8360,(1),null);
var map__8361__$1 = ((cljs.core.seq_QMARK_.call(null,map__8361))?cljs.core.apply.call(null,cljs.core.hash_map,map__8361):map__8361);
var key = cljs.core.get.call(null,map__8361__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__8360,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null),iter__8350.call(null,cljs.core.rest.call(null,s__8351__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4480__auto__.call(null,options);
})());
});
reagent_forms.core.default_selection = (function default_selection(options,v){
return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8363_SHARP_){
return cljs.core._EQ_.call(null,v,cljs.core.get_in.call(null,p1__8363_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
}),options)));
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"list","list",765357683),(function (p__8366,p__8367){
var vec__8368 = p__8366;
var type = cljs.core.nth.call(null,vec__8368,(0),null);
var map__8369 = cljs.core.nth.call(null,vec__8368,(1),null);
var map__8369__$1 = ((cljs.core.seq_QMARK_.call(null,map__8369))?cljs.core.apply.call(null,cljs.core.hash_map,map__8369):map__8369);
var attrs = map__8369__$1;
var id = cljs.core.get.call(null,map__8369__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__8369__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var options = cljs.core.nthnext.call(null,vec__8368,(2));
var map__8370 = p__8367;
var map__8370__$1 = ((cljs.core.seq_QMARK_.call(null,map__8370))?cljs.core.apply.call(null,cljs.core.hash_map,map__8370):map__8370);
var save_BANG_ = cljs.core.get.call(null,map__8370__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__8370__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__8370__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var options__$1 = reagent_forms.core.extract_selectors.call(null,options);
var options_lookup = reagent_forms.core.map_options.call(null,options__$1);
var selection = reagent.core.atom.call(null,(function (){var or__3724__auto__ = get.call(null,id);
if(cljs.core.truth_(or__3724__auto__)){
return or__3724__auto__;
} else {
return cljs.core.get_in.call(null,cljs.core.first.call(null,options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
}
})());
save_BANG_.call(null,id,cljs.core.deref.call(null,selection));

return ((function (options__$1,options_lookup,selection,vec__8368,type,map__8369,map__8369__$1,attrs,id,field,options,map__8370,map__8370__$1,save_BANG_,get,doc){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (options__$1,options_lookup,selection,vec__8368,type,map__8369,map__8369__$1,attrs,id,field,options,map__8370,map__8370__$1,save_BANG_,get,doc){
return (function (p1__8364_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__8364_SHARP_)));
});})(options__$1,options_lookup,selection,vec__8368,type,map__8369,map__8369__$1,attrs,id,field,options,map__8370,map__8370__$1,save_BANG_,get,doc))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (options__$1,options_lookup,selection,vec__8368,type,map__8369,map__8369__$1,attrs,id,field,options,map__8370,map__8370__$1,save_BANG_,get,doc){
return (function (p1__8365_SHARP_){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__8365_SHARP_));
if(cljs.core.truth_(temp__4124__auto__)){
var visible_QMARK_ = temp__4124__auto__;
return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else {
return true;
}
});})(options__$1,options_lookup,selection,vec__8368,type,map__8369,map__8369__$1,attrs,id,field,options,map__8370,map__8370__$1,save_BANG_,get,doc))
,options__$1))], null);
});
;})(options__$1,options_lookup,selection,vec__8368,type,map__8369,map__8369__$1,attrs,id,field,options,map__8370,map__8370__$1,save_BANG_,get,doc))
}));
reagent_forms.core.field_QMARK_ = (function field_QMARK_(node){
return (cljs.core.coll_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,node))) && (cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,node),new cljs.core.Keyword(null,"field","field",-1302436500)));
});
/**
* creates data bindings between the form fields and the supplied atom
* form - the form template with the fields
* doc - the document that the fields will be bound to
* events - any events that should be triggered when the document state changes
* @param {...*} var_args
*/
reagent_forms.core.bind_fields = (function() { 
var bind_fields__delegate = function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"get","get",1683182755),(function (p1__8371_SHARP_){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,doc),reagent_forms.core.id__GT_path.call(null,p1__8371_SHARP_));
}),new cljs.core.Keyword(null,"save!","save!",-1137373803),reagent_forms.core.mk_save_fn.call(null,doc,events)], null);
var form__$1 = clojure.walk.postwalk.call(null,((function (opts){
return (function (node){
if(reagent_forms.core.field_QMARK_.call(null,node)){
var field = reagent_forms.core.init_field.call(null,node,opts);
if(cljs.core.fn_QMARK_.call(null,field)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null);
} else {
return field;
}
} else {
return node;
}
});})(opts))
,form);
return ((function (opts,form__$1){
return (function (){
return form__$1;
});
;})(opts,form__$1))
};
var bind_fields = function (form,doc,var_args){
var events = null;
if (arguments.length > 2) {
  events = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return bind_fields__delegate.call(this,form,doc,events);};
bind_fields.cljs$lang$maxFixedArity = 2;
bind_fields.cljs$lang$applyTo = (function (arglist__8372){
var form = cljs.core.first(arglist__8372);
arglist__8372 = cljs.core.next(arglist__8372);
var doc = cljs.core.first(arglist__8372);
var events = cljs.core.rest(arglist__8372);
return bind_fields__delegate(form,doc,events);
});
bind_fields.cljs$core$IFn$_invoke$arity$variadic = bind_fields__delegate;
return bind_fields;
})()
;

//# sourceMappingURL=core.js.map