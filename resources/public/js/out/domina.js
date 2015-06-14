// Compiled by ClojureScript 0.0-2644 {}
if(!goog.isProvided_('domina')) {
goog.provide('domina');
}
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.style');
goog.require('clojure.string');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_7650 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_7651 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_7652 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_7652,opt_wrapper_7650,table_section_wrapper_7651,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_7650,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_7651,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_7651,cell_wrapper_7652,table_section_wrapper_7651,table_section_wrapper_7651]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3712__auto__ = div.firstChild;
if(cljs.core.truth_(and__3712__auto__)){
return div.firstChild.childNodes;
} else {
return and__3712__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__7657 = cljs.core.seq.call(null,tbody);
var chunk__7658 = null;
var count__7659 = (0);
var i__7660 = (0);
while(true){
if((i__7660 < count__7659)){
var child = cljs.core._nth.call(null,chunk__7658,i__7660);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__7661 = seq__7657;
var G__7662 = chunk__7658;
var G__7663 = count__7659;
var G__7664 = (i__7660 + (1));
seq__7657 = G__7661;
chunk__7658 = G__7662;
count__7659 = G__7663;
i__7660 = G__7664;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__7657);
if(temp__4126__auto__){
var seq__7657__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7657__$1)){
var c__4511__auto__ = cljs.core.chunk_first.call(null,seq__7657__$1);
var G__7665 = cljs.core.chunk_rest.call(null,seq__7657__$1);
var G__7666 = c__4511__auto__;
var G__7667 = cljs.core.count.call(null,c__4511__auto__);
var G__7668 = (0);
seq__7657 = G__7665;
chunk__7658 = G__7666;
count__7659 = G__7667;
i__7660 = G__7668;
continue;
} else {
var child = cljs.core.first.call(null,seq__7657__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__7669 = cljs.core.next.call(null,seq__7657__$1);
var G__7670 = null;
var G__7671 = (0);
var G__7672 = (0);
seq__7657 = G__7669;
chunk__7658 = G__7670;
count__7659 = G__7671;
i__7660 = G__7672;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__7674 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__7674,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__7674,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__7674,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__7675 = wrapper.lastChild;
var G__7676 = (level - (1));
wrapper = G__7675;
level = G__7676;
continue;
} else {
return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_)){
domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__3712__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3712__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__3712__auto__;
}
})())){
domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s))){
return domina.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});

domina.DomContent = (function (){var obj7678 = {};
return obj7678;
})();

domina.nodes = (function nodes(content){
if((function (){var and__3712__auto__ = content;
if(and__3712__auto__){
return content.domina$DomContent$nodes$arity$1;
} else {
return and__3712__auto__;
}
})()){
return content.domina$DomContent$nodes$arity$1(content);
} else {
var x__4368__auto__ = (((content == null))?null:content);
return (function (){var or__3724__auto__ = (domina.nodes[goog.typeOf(x__4368__auto__)]);
if(or__3724__auto__){
return or__3724__auto__;
} else {
var or__3724__auto____$1 = (domina.nodes["_"]);
if(or__3724__auto____$1){
return or__3724__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});

domina.single_node = (function single_node(nodeseq){
if((function (){var and__3712__auto__ = nodeseq;
if(and__3712__auto__){
return nodeseq.domina$DomContent$single_node$arity$1;
} else {
return and__3712__auto__;
}
})()){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
var x__4368__auto__ = (((nodeseq == null))?null:nodeseq);
return (function (){var or__3724__auto__ = (domina.single_node[goog.typeOf(x__4368__auto__)]);
if(or__3724__auto__){
return or__3724__auto__;
} else {
var or__3724__auto____$1 = (domina.single_node["_"]);
if(or__3724__auto____$1){
return or__3724__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});

domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){
if(cljs.core.truth_((function (){var and__3712__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3712__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__3712__auto__;
}
})())){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
};
var log_debug = function (var_args){
var mesg = null;
if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__7679){
var mesg = cljs.core.seq(arglist__7679);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
};
var log = function (var_args){
var mesg = null;
if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__7680){
var mesg = cljs.core.seq(arglist__7680);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;
if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__7681){
var contents = cljs.core.seq(arglist__7681);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.call(null,(function (p1__7682_SHARP_){
return p1__7682_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__7683_SHARP_,p2__7684_SHARP_){
return goog.dom.insertChildAt(p1__7683_SHARP_,p2__7684_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__7686_SHARP_,p2__7685_SHARP_){
return goog.dom.insertSiblingBefore(p2__7685_SHARP_,p1__7686_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__7688_SHARP_,p2__7687_SHARP_){
return goog.dom.insertSiblingAfter(p2__7687_SHARP_,p1__7688_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__7690_SHARP_,p2__7689_SHARP_){
return goog.dom.replaceNode(p2__7689_SHARP_,p1__7690_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));

return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))){
return null;
} else {
return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var seq__7695_7699 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__7696_7700 = null;
var count__7697_7701 = (0);
var i__7698_7702 = (0);
while(true){
if((i__7698_7702 < count__7697_7701)){
var n_7703 = cljs.core._nth.call(null,chunk__7696_7700,i__7698_7702);
goog.style.setStyle(n_7703,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__7704 = seq__7695_7699;
var G__7705 = chunk__7696_7700;
var G__7706 = count__7697_7701;
var G__7707 = (i__7698_7702 + (1));
seq__7695_7699 = G__7704;
chunk__7696_7700 = G__7705;
count__7697_7701 = G__7706;
i__7698_7702 = G__7707;
continue;
} else {
var temp__4126__auto___7708 = cljs.core.seq.call(null,seq__7695_7699);
if(temp__4126__auto___7708){
var seq__7695_7709__$1 = temp__4126__auto___7708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7695_7709__$1)){
var c__4511__auto___7710 = cljs.core.chunk_first.call(null,seq__7695_7709__$1);
var G__7711 = cljs.core.chunk_rest.call(null,seq__7695_7709__$1);
var G__7712 = c__4511__auto___7710;
var G__7713 = cljs.core.count.call(null,c__4511__auto___7710);
var G__7714 = (0);
seq__7695_7699 = G__7711;
chunk__7696_7700 = G__7712;
count__7697_7701 = G__7713;
i__7698_7702 = G__7714;
continue;
} else {
var n_7715 = cljs.core.first.call(null,seq__7695_7709__$1);
goog.style.setStyle(n_7715,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__7716 = cljs.core.next.call(null,seq__7695_7709__$1);
var G__7717 = null;
var G__7718 = (0);
var G__7719 = (0);
seq__7695_7699 = G__7716;
chunk__7696_7700 = G__7717;
count__7697_7701 = G__7718;
i__7698_7702 = G__7719;
continue;
}
} else {
}
}
break;
}

return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__7720){
var content = cljs.core.first(arglist__7720);
arglist__7720 = cljs.core.next(arglist__7720);
var name = cljs.core.first(arglist__7720);
var value = cljs.core.rest(arglist__7720);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){
var seq__7725_7729 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__7726_7730 = null;
var count__7727_7731 = (0);
var i__7728_7732 = (0);
while(true){
if((i__7728_7732 < count__7727_7731)){
var n_7733 = cljs.core._nth.call(null,chunk__7726_7730,i__7728_7732);
n_7733.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__7734 = seq__7725_7729;
var G__7735 = chunk__7726_7730;
var G__7736 = count__7727_7731;
var G__7737 = (i__7728_7732 + (1));
seq__7725_7729 = G__7734;
chunk__7726_7730 = G__7735;
count__7727_7731 = G__7736;
i__7728_7732 = G__7737;
continue;
} else {
var temp__4126__auto___7738 = cljs.core.seq.call(null,seq__7725_7729);
if(temp__4126__auto___7738){
var seq__7725_7739__$1 = temp__4126__auto___7738;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7725_7739__$1)){
var c__4511__auto___7740 = cljs.core.chunk_first.call(null,seq__7725_7739__$1);
var G__7741 = cljs.core.chunk_rest.call(null,seq__7725_7739__$1);
var G__7742 = c__4511__auto___7740;
var G__7743 = cljs.core.count.call(null,c__4511__auto___7740);
var G__7744 = (0);
seq__7725_7729 = G__7741;
chunk__7726_7730 = G__7742;
count__7727_7731 = G__7743;
i__7728_7732 = G__7744;
continue;
} else {
var n_7745 = cljs.core.first.call(null,seq__7725_7739__$1);
n_7745.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__7746 = cljs.core.next.call(null,seq__7725_7739__$1);
var G__7747 = null;
var G__7748 = (0);
var G__7749 = (0);
seq__7725_7729 = G__7746;
chunk__7726_7730 = G__7747;
count__7727_7731 = G__7748;
i__7728_7732 = G__7749;
continue;
}
} else {
}
}
break;
}

return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__7750){
var content = cljs.core.first(arglist__7750);
arglist__7750 = cljs.core.next(arglist__7750);
var name = cljs.core.first(arglist__7750);
var value = cljs.core.rest(arglist__7750);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){
var seq__7755_7759 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__7756_7760 = null;
var count__7757_7761 = (0);
var i__7758_7762 = (0);
while(true){
if((i__7758_7762 < count__7757_7761)){
var n_7763 = cljs.core._nth.call(null,chunk__7756_7760,i__7758_7762);
n_7763.removeAttribute(cljs.core.name.call(null,name));

var G__7764 = seq__7755_7759;
var G__7765 = chunk__7756_7760;
var G__7766 = count__7757_7761;
var G__7767 = (i__7758_7762 + (1));
seq__7755_7759 = G__7764;
chunk__7756_7760 = G__7765;
count__7757_7761 = G__7766;
i__7758_7762 = G__7767;
continue;
} else {
var temp__4126__auto___7768 = cljs.core.seq.call(null,seq__7755_7759);
if(temp__4126__auto___7768){
var seq__7755_7769__$1 = temp__4126__auto___7768;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7755_7769__$1)){
var c__4511__auto___7770 = cljs.core.chunk_first.call(null,seq__7755_7769__$1);
var G__7771 = cljs.core.chunk_rest.call(null,seq__7755_7769__$1);
var G__7772 = c__4511__auto___7770;
var G__7773 = cljs.core.count.call(null,c__4511__auto___7770);
var G__7774 = (0);
seq__7755_7759 = G__7771;
chunk__7756_7760 = G__7772;
count__7757_7761 = G__7773;
i__7758_7762 = G__7774;
continue;
} else {
var n_7775 = cljs.core.first.call(null,seq__7755_7769__$1);
n_7775.removeAttribute(cljs.core.name.call(null,name));

var G__7776 = cljs.core.next.call(null,seq__7755_7769__$1);
var G__7777 = null;
var G__7778 = (0);
var G__7779 = (0);
seq__7755_7759 = G__7776;
chunk__7756_7760 = G__7777;
count__7757_7761 = G__7778;
i__7758_7762 = G__7779;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__7781 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__7781,(0),null);
var v = cljs.core.nth.call(null,vec__7781,(1),null);
if(cljs.core.truth_((function (){var and__3712__auto__ = k;
if(cljs.core.truth_(and__3712__auto__)){
return v;
} else {
return and__3712__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style = domina.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.parse_style_attributes.call(null,style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.parse_style_attributes.call(null,style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node = domina.single_node.call(null,content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__7782_SHARP_){
var attr = attrs__$1.item(p1__7782_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value))){
return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else {
return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var seq__7789_7795 = cljs.core.seq.call(null,styles);
var chunk__7790_7796 = null;
var count__7791_7797 = (0);
var i__7792_7798 = (0);
while(true){
if((i__7792_7798 < count__7791_7797)){
var vec__7793_7799 = cljs.core._nth.call(null,chunk__7790_7796,i__7792_7798);
var name_7800 = cljs.core.nth.call(null,vec__7793_7799,(0),null);
var value_7801 = cljs.core.nth.call(null,vec__7793_7799,(1),null);
domina.set_style_BANG_.call(null,content,name_7800,value_7801);

var G__7802 = seq__7789_7795;
var G__7803 = chunk__7790_7796;
var G__7804 = count__7791_7797;
var G__7805 = (i__7792_7798 + (1));
seq__7789_7795 = G__7802;
chunk__7790_7796 = G__7803;
count__7791_7797 = G__7804;
i__7792_7798 = G__7805;
continue;
} else {
var temp__4126__auto___7806 = cljs.core.seq.call(null,seq__7789_7795);
if(temp__4126__auto___7806){
var seq__7789_7807__$1 = temp__4126__auto___7806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7789_7807__$1)){
var c__4511__auto___7808 = cljs.core.chunk_first.call(null,seq__7789_7807__$1);
var G__7809 = cljs.core.chunk_rest.call(null,seq__7789_7807__$1);
var G__7810 = c__4511__auto___7808;
var G__7811 = cljs.core.count.call(null,c__4511__auto___7808);
var G__7812 = (0);
seq__7789_7795 = G__7809;
chunk__7790_7796 = G__7810;
count__7791_7797 = G__7811;
i__7792_7798 = G__7812;
continue;
} else {
var vec__7794_7813 = cljs.core.first.call(null,seq__7789_7807__$1);
var name_7814 = cljs.core.nth.call(null,vec__7794_7813,(0),null);
var value_7815 = cljs.core.nth.call(null,vec__7794_7813,(1),null);
domina.set_style_BANG_.call(null,content,name_7814,value_7815);

var G__7816 = cljs.core.next.call(null,seq__7789_7807__$1);
var G__7817 = null;
var G__7818 = (0);
var G__7819 = (0);
seq__7789_7795 = G__7816;
chunk__7790_7796 = G__7817;
count__7791_7797 = G__7818;
i__7792_7798 = G__7819;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var seq__7826_7832 = cljs.core.seq.call(null,attrs);
var chunk__7827_7833 = null;
var count__7828_7834 = (0);
var i__7829_7835 = (0);
while(true){
if((i__7829_7835 < count__7828_7834)){
var vec__7830_7836 = cljs.core._nth.call(null,chunk__7827_7833,i__7829_7835);
var name_7837 = cljs.core.nth.call(null,vec__7830_7836,(0),null);
var value_7838 = cljs.core.nth.call(null,vec__7830_7836,(1),null);
domina.set_attr_BANG_.call(null,content,name_7837,value_7838);

var G__7839 = seq__7826_7832;
var G__7840 = chunk__7827_7833;
var G__7841 = count__7828_7834;
var G__7842 = (i__7829_7835 + (1));
seq__7826_7832 = G__7839;
chunk__7827_7833 = G__7840;
count__7828_7834 = G__7841;
i__7829_7835 = G__7842;
continue;
} else {
var temp__4126__auto___7843 = cljs.core.seq.call(null,seq__7826_7832);
if(temp__4126__auto___7843){
var seq__7826_7844__$1 = temp__4126__auto___7843;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7826_7844__$1)){
var c__4511__auto___7845 = cljs.core.chunk_first.call(null,seq__7826_7844__$1);
var G__7846 = cljs.core.chunk_rest.call(null,seq__7826_7844__$1);
var G__7847 = c__4511__auto___7845;
var G__7848 = cljs.core.count.call(null,c__4511__auto___7845);
var G__7849 = (0);
seq__7826_7832 = G__7846;
chunk__7827_7833 = G__7847;
count__7828_7834 = G__7848;
i__7829_7835 = G__7849;
continue;
} else {
var vec__7831_7850 = cljs.core.first.call(null,seq__7826_7844__$1);
var name_7851 = cljs.core.nth.call(null,vec__7831_7850,(0),null);
var value_7852 = cljs.core.nth.call(null,vec__7831_7850,(1),null);
domina.set_attr_BANG_.call(null,content,name_7851,value_7852);

var G__7853 = cljs.core.next.call(null,seq__7826_7844__$1);
var G__7854 = null;
var G__7855 = (0);
var G__7856 = (0);
seq__7826_7832 = G__7853;
chunk__7827_7833 = G__7854;
count__7828_7834 = G__7855;
i__7829_7835 = G__7856;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var seq__7861_7865 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__7862_7866 = null;
var count__7863_7867 = (0);
var i__7864_7868 = (0);
while(true){
if((i__7864_7868 < count__7863_7867)){
var node_7869 = cljs.core._nth.call(null,chunk__7862_7866,i__7864_7868);
goog.dom.classes.add(node_7869,class$);

var G__7870 = seq__7861_7865;
var G__7871 = chunk__7862_7866;
var G__7872 = count__7863_7867;
var G__7873 = (i__7864_7868 + (1));
seq__7861_7865 = G__7870;
chunk__7862_7866 = G__7871;
count__7863_7867 = G__7872;
i__7864_7868 = G__7873;
continue;
} else {
var temp__4126__auto___7874 = cljs.core.seq.call(null,seq__7861_7865);
if(temp__4126__auto___7874){
var seq__7861_7875__$1 = temp__4126__auto___7874;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7861_7875__$1)){
var c__4511__auto___7876 = cljs.core.chunk_first.call(null,seq__7861_7875__$1);
var G__7877 = cljs.core.chunk_rest.call(null,seq__7861_7875__$1);
var G__7878 = c__4511__auto___7876;
var G__7879 = cljs.core.count.call(null,c__4511__auto___7876);
var G__7880 = (0);
seq__7861_7865 = G__7877;
chunk__7862_7866 = G__7878;
count__7863_7867 = G__7879;
i__7864_7868 = G__7880;
continue;
} else {
var node_7881 = cljs.core.first.call(null,seq__7861_7875__$1);
goog.dom.classes.add(node_7881,class$);

var G__7882 = cljs.core.next.call(null,seq__7861_7875__$1);
var G__7883 = null;
var G__7884 = (0);
var G__7885 = (0);
seq__7861_7865 = G__7882;
chunk__7862_7866 = G__7883;
count__7863_7867 = G__7884;
i__7864_7868 = G__7885;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var seq__7890_7894 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__7891_7895 = null;
var count__7892_7896 = (0);
var i__7893_7897 = (0);
while(true){
if((i__7893_7897 < count__7892_7896)){
var node_7898 = cljs.core._nth.call(null,chunk__7891_7895,i__7893_7897);
goog.dom.classes.remove(node_7898,class$);

var G__7899 = seq__7890_7894;
var G__7900 = chunk__7891_7895;
var G__7901 = count__7892_7896;
var G__7902 = (i__7893_7897 + (1));
seq__7890_7894 = G__7899;
chunk__7891_7895 = G__7900;
count__7892_7896 = G__7901;
i__7893_7897 = G__7902;
continue;
} else {
var temp__4126__auto___7903 = cljs.core.seq.call(null,seq__7890_7894);
if(temp__4126__auto___7903){
var seq__7890_7904__$1 = temp__4126__auto___7903;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7890_7904__$1)){
var c__4511__auto___7905 = cljs.core.chunk_first.call(null,seq__7890_7904__$1);
var G__7906 = cljs.core.chunk_rest.call(null,seq__7890_7904__$1);
var G__7907 = c__4511__auto___7905;
var G__7908 = cljs.core.count.call(null,c__4511__auto___7905);
var G__7909 = (0);
seq__7890_7894 = G__7906;
chunk__7891_7895 = G__7907;
count__7892_7896 = G__7908;
i__7893_7897 = G__7909;
continue;
} else {
var node_7910 = cljs.core.first.call(null,seq__7890_7904__$1);
goog.dom.classes.remove(node_7910,class$);

var G__7911 = cljs.core.next.call(null,seq__7890_7904__$1);
var G__7912 = null;
var G__7913 = (0);
var G__7914 = (0);
seq__7890_7894 = G__7911;
chunk__7891_7895 = G__7912;
count__7892_7896 = G__7913;
i__7893_7897 = G__7914;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){
var seq__7919_7923 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__7920_7924 = null;
var count__7921_7925 = (0);
var i__7922_7926 = (0);
while(true){
if((i__7922_7926 < count__7921_7925)){
var node_7927 = cljs.core._nth.call(null,chunk__7920_7924,i__7922_7926);
goog.dom.classes.toggle(node_7927,class$);

var G__7928 = seq__7919_7923;
var G__7929 = chunk__7920_7924;
var G__7930 = count__7921_7925;
var G__7931 = (i__7922_7926 + (1));
seq__7919_7923 = G__7928;
chunk__7920_7924 = G__7929;
count__7921_7925 = G__7930;
i__7922_7926 = G__7931;
continue;
} else {
var temp__4126__auto___7932 = cljs.core.seq.call(null,seq__7919_7923);
if(temp__4126__auto___7932){
var seq__7919_7933__$1 = temp__4126__auto___7932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7919_7933__$1)){
var c__4511__auto___7934 = cljs.core.chunk_first.call(null,seq__7919_7933__$1);
var G__7935 = cljs.core.chunk_rest.call(null,seq__7919_7933__$1);
var G__7936 = c__4511__auto___7934;
var G__7937 = cljs.core.count.call(null,c__4511__auto___7934);
var G__7938 = (0);
seq__7919_7923 = G__7935;
chunk__7920_7924 = G__7936;
count__7921_7925 = G__7937;
i__7922_7926 = G__7938;
continue;
} else {
var node_7939 = cljs.core.first.call(null,seq__7919_7933__$1);
goog.dom.classes.toggle(node_7939,class$);

var G__7940 = cljs.core.next.call(null,seq__7919_7933__$1);
var G__7941 = null;
var G__7942 = (0);
var G__7943 = (0);
seq__7919_7923 = G__7940;
chunk__7920_7924 = G__7941;
count__7921_7925 = G__7942;
i__7922_7926 = G__7943;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){
var classes_7952__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__7948_7953 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__7949_7954 = null;
var count__7950_7955 = (0);
var i__7951_7956 = (0);
while(true){
if((i__7951_7956 < count__7950_7955)){
var node_7957 = cljs.core._nth.call(null,chunk__7949_7954,i__7951_7956);
goog.dom.classes.set(node_7957,classes_7952__$1);

var G__7958 = seq__7948_7953;
var G__7959 = chunk__7949_7954;
var G__7960 = count__7950_7955;
var G__7961 = (i__7951_7956 + (1));
seq__7948_7953 = G__7958;
chunk__7949_7954 = G__7959;
count__7950_7955 = G__7960;
i__7951_7956 = G__7961;
continue;
} else {
var temp__4126__auto___7962 = cljs.core.seq.call(null,seq__7948_7953);
if(temp__4126__auto___7962){
var seq__7948_7963__$1 = temp__4126__auto___7962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7948_7963__$1)){
var c__4511__auto___7964 = cljs.core.chunk_first.call(null,seq__7948_7963__$1);
var G__7965 = cljs.core.chunk_rest.call(null,seq__7948_7963__$1);
var G__7966 = c__4511__auto___7964;
var G__7967 = cljs.core.count.call(null,c__4511__auto___7964);
var G__7968 = (0);
seq__7948_7953 = G__7965;
chunk__7949_7954 = G__7966;
count__7950_7955 = G__7967;
i__7951_7956 = G__7968;
continue;
} else {
var node_7969 = cljs.core.first.call(null,seq__7948_7963__$1);
goog.dom.classes.set(node_7969,classes_7952__$1);

var G__7970 = cljs.core.next.call(null,seq__7948_7963__$1);
var G__7971 = null;
var G__7972 = (0);
var G__7973 = (0);
seq__7948_7953 = G__7970;
chunk__7949_7954 = G__7971;
count__7950_7955 = G__7972;
i__7951_7956 = G__7973;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var seq__7978_7982 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__7979_7983 = null;
var count__7980_7984 = (0);
var i__7981_7985 = (0);
while(true){
if((i__7981_7985 < count__7980_7984)){
var node_7986 = cljs.core._nth.call(null,chunk__7979_7983,i__7981_7985);
goog.dom.setTextContent(node_7986,value);

var G__7987 = seq__7978_7982;
var G__7988 = chunk__7979_7983;
var G__7989 = count__7980_7984;
var G__7990 = (i__7981_7985 + (1));
seq__7978_7982 = G__7987;
chunk__7979_7983 = G__7988;
count__7980_7984 = G__7989;
i__7981_7985 = G__7990;
continue;
} else {
var temp__4126__auto___7991 = cljs.core.seq.call(null,seq__7978_7982);
if(temp__4126__auto___7991){
var seq__7978_7992__$1 = temp__4126__auto___7991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7978_7992__$1)){
var c__4511__auto___7993 = cljs.core.chunk_first.call(null,seq__7978_7992__$1);
var G__7994 = cljs.core.chunk_rest.call(null,seq__7978_7992__$1);
var G__7995 = c__4511__auto___7993;
var G__7996 = cljs.core.count.call(null,c__4511__auto___7993);
var G__7997 = (0);
seq__7978_7982 = G__7994;
chunk__7979_7983 = G__7995;
count__7980_7984 = G__7996;
i__7981_7985 = G__7997;
continue;
} else {
var node_7998 = cljs.core.first.call(null,seq__7978_7992__$1);
goog.dom.setTextContent(node_7998,value);

var G__7999 = cljs.core.next.call(null,seq__7978_7992__$1);
var G__8000 = null;
var G__8001 = (0);
var G__8002 = (0);
seq__7978_7982 = G__7999;
chunk__7979_7983 = G__8000;
count__7980_7984 = G__8001;
i__7981_7985 = G__8002;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var seq__8007_8011 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__8008_8012 = null;
var count__8009_8013 = (0);
var i__8010_8014 = (0);
while(true){
if((i__8010_8014 < count__8009_8013)){
var node_8015 = cljs.core._nth.call(null,chunk__8008_8012,i__8010_8014);
goog.dom.forms.setValue(node_8015,value);

var G__8016 = seq__8007_8011;
var G__8017 = chunk__8008_8012;
var G__8018 = count__8009_8013;
var G__8019 = (i__8010_8014 + (1));
seq__8007_8011 = G__8016;
chunk__8008_8012 = G__8017;
count__8009_8013 = G__8018;
i__8010_8014 = G__8019;
continue;
} else {
var temp__4126__auto___8020 = cljs.core.seq.call(null,seq__8007_8011);
if(temp__4126__auto___8020){
var seq__8007_8021__$1 = temp__4126__auto___8020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8007_8021__$1)){
var c__4511__auto___8022 = cljs.core.chunk_first.call(null,seq__8007_8021__$1);
var G__8023 = cljs.core.chunk_rest.call(null,seq__8007_8021__$1);
var G__8024 = c__4511__auto___8022;
var G__8025 = cljs.core.count.call(null,c__4511__auto___8022);
var G__8026 = (0);
seq__8007_8011 = G__8023;
chunk__8008_8012 = G__8024;
count__8009_8013 = G__8025;
i__8010_8014 = G__8026;
continue;
} else {
var node_8027 = cljs.core.first.call(null,seq__8007_8021__$1);
goog.dom.forms.setValue(node_8027,value);

var G__8028 = cljs.core.next.call(null,seq__8007_8021__$1);
var G__8029 = null;
var G__8030 = (0);
var G__8031 = (0);
seq__8007_8011 = G__8028;
chunk__8008_8012 = G__8029;
count__8009_8013 = G__8030;
i__8010_8014 = G__8031;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__3712__auto__ = allows_inner_html_QMARK_;
if(and__3712__auto__){
var and__3712__auto____$1 = (function (){var or__3724__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3724__auto__)){
return or__3724__auto__;
} else {
return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__3712__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__3712__auto____$1;
}
} else {
return and__3712__auto__;
}
})())){
var value_8042 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__8038_8043 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__8039_8044 = null;
var count__8040_8045 = (0);
var i__8041_8046 = (0);
while(true){
if((i__8041_8046 < count__8040_8045)){
var node_8047 = cljs.core._nth.call(null,chunk__8039_8044,i__8041_8046);
node_8047.innerHTML = value_8042;

var G__8048 = seq__8038_8043;
var G__8049 = chunk__8039_8044;
var G__8050 = count__8040_8045;
var G__8051 = (i__8041_8046 + (1));
seq__8038_8043 = G__8048;
chunk__8039_8044 = G__8049;
count__8040_8045 = G__8050;
i__8041_8046 = G__8051;
continue;
} else {
var temp__4126__auto___8052 = cljs.core.seq.call(null,seq__8038_8043);
if(temp__4126__auto___8052){
var seq__8038_8053__$1 = temp__4126__auto___8052;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8038_8053__$1)){
var c__4511__auto___8054 = cljs.core.chunk_first.call(null,seq__8038_8053__$1);
var G__8055 = cljs.core.chunk_rest.call(null,seq__8038_8053__$1);
var G__8056 = c__4511__auto___8054;
var G__8057 = cljs.core.count.call(null,c__4511__auto___8054);
var G__8058 = (0);
seq__8038_8043 = G__8055;
chunk__8039_8044 = G__8056;
count__8040_8045 = G__8057;
i__8041_8046 = G__8058;
continue;
} else {
var node_8059 = cljs.core.first.call(null,seq__8038_8053__$1);
node_8059.innerHTML = value_8042;

var G__8060 = cljs.core.next.call(null,seq__8038_8053__$1);
var G__8061 = null;
var G__8062 = (0);
var G__8063 = (0);
seq__8038_8043 = G__8060;
chunk__8039_8044 = G__8061;
count__8040_8045 = G__8062;
i__8041_8046 = G__8063;
continue;
}
} else {
}
}
break;
}
}catch (e8037){if((e8037 instanceof Error)){
var e_8064 = e8037;
domina.replace_children_BANG_.call(null,content,value_8042);
} else {
throw e8037;

}
}} else {
domina.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){
return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__3712__auto__ = bubble;
if(cljs.core.truth_(and__3712__auto__)){
return (value == null);
} else {
return and__3712__auto__;
}
})())){
var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4126__auto__)){
var parent = temp__4126__auto__;
return get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){
var m = (function (){var or__3724__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3724__auto__)){
return or__3724__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__8071_8075 = cljs.core.seq.call(null,children);
var chunk__8072_8076 = null;
var count__8073_8077 = (0);
var i__8074_8078 = (0);
while(true){
if((i__8074_8078 < count__8073_8077)){
var child_8079 = cljs.core._nth.call(null,chunk__8072_8076,i__8074_8078);
frag.appendChild(child_8079);

var G__8080 = seq__8071_8075;
var G__8081 = chunk__8072_8076;
var G__8082 = count__8073_8077;
var G__8083 = (i__8074_8078 + (1));
seq__8071_8075 = G__8080;
chunk__8072_8076 = G__8081;
count__8073_8077 = G__8082;
i__8074_8078 = G__8083;
continue;
} else {
var temp__4126__auto___8084 = cljs.core.seq.call(null,seq__8071_8075);
if(temp__4126__auto___8084){
var seq__8071_8085__$1 = temp__4126__auto___8084;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8071_8085__$1)){
var c__4511__auto___8086 = cljs.core.chunk_first.call(null,seq__8071_8085__$1);
var G__8087 = cljs.core.chunk_rest.call(null,seq__8071_8085__$1);
var G__8088 = c__4511__auto___8086;
var G__8089 = cljs.core.count.call(null,c__4511__auto___8086);
var G__8090 = (0);
seq__8071_8075 = G__8087;
chunk__8072_8076 = G__8088;
count__8073_8077 = G__8089;
i__8074_8078 = G__8090;
continue;
} else {
var child_8091 = cljs.core.first.call(null,seq__8071_8085__$1);
frag.appendChild(child_8091);

var G__8092 = cljs.core.next.call(null,seq__8071_8085__$1);
var G__8093 = null;
var G__8094 = (0);
var G__8095 = (0);
seq__8071_8075 = G__8092;
chunk__8072_8076 = G__8093;
count__8073_8077 = G__8094;
i__8074_8078 = G__8095;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__8065_SHARP_,p2__8066_SHARP_){
return f.call(null,p1__8065_SHARP_,p2__8066_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){
return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.lazy_nl_via_item.call(null,nl);
} else {
return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){
var and__3712__auto__ = obj;
if(cljs.core.truth_(and__3712__auto__)){
var and__3712__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__3712__auto____$1){
return obj.length;
} else {
return and__3712__auto____$1;
}
} else {
return and__3712__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if((function (){var G__8097 = list_thing;
if(G__8097){
var bit__4405__auto__ = (G__8097.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4405__auto__) || (G__8097.cljs$core$ISeqable$)){
return true;
} else {
if((!G__8097.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8097);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8097);
}
})()){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing))){
return domina.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);

(domina.nodes["_"] = (function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if((function (){var G__8098 = content;
if(G__8098){
var bit__4405__auto__ = (G__8098.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4405__auto__) || (G__8098.cljs$core$ISeqable$)){
return true;
} else {
if((!G__8098.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8098);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8098);
}
})()){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return domina.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

(domina.single_node["_"] = (function (content){
if((content == null)){
return null;
} else {
if((function (){var G__8099 = content;
if(G__8099){
var bit__4405__auto__ = (G__8099.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4405__auto__) || (G__8099.cljs$core$ISeqable$)){
return true;
} else {
if((!G__8099.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8099);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8099);
}
})()){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));

(domina.DomContent["string"] = true);

(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));

(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ISeqable$ = true;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});

NodeList.prototype.cljs$core$IIndexed$ = true;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ICounted$ = true;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ISeqable$ = true;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});

StaticNodeList.prototype.cljs$core$IIndexed$ = true;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ICounted$ = true;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ISeqable$ = true;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist.call(null,coll__$1);
});

HTMLCollection.prototype.cljs$core$IIndexed$ = true;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ICounted$ = true;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});
} else {
}

//# sourceMappingURL=domina.js.map