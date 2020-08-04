
; /* Start:"a:4:{s:4:"full";s:70:"/bitrix/templates/aspro_optimus/js/jquery.actual.min.js?15898055531251";s:6:"source";s:55:"/bitrix/templates/aspro_optimus/js/jquery.actual.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! Copyright 2012, Ben Lin (http://dreamerslab.com/)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 1.0.18
 *
 * Requires: jQuery >= 1.2.3
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a);
}else{a(jQuery);}}(function(a){a.fn.addBack=a.fn.addBack||a.fn.andSelf;a.fn.extend({actual:function(b,l){if(!this[b]){throw'$.actual => The jQuery method "'+b+'" you called does not exist';
}var f={absolute:false,clone:false,includeMargin:false,display:"block"};var i=a.extend(f,l);var e=this.eq(0);var h,j;if(i.clone===true){h=function(){var m="position: absolute !important; top: -1000 !important; ";
e=e.clone().attr("style",m).appendTo("body");};j=function(){e.remove();};}else{var g=[];var d="";var c;h=function(){c=e.parents().addBack().filter(":hidden");
d+="visibility: hidden !important; display: "+i.display+" !important; ";if(i.absolute===true){d+="position: absolute !important; ";}c.each(function(){var m=a(this);
var n=m.attr("style");g.push(n);m.attr("style",n?n+";"+d:d);});};j=function(){c.each(function(m){var o=a(this);var n=g[m];if(n===undefined){o.removeAttr("style");
}else{o.attr("style",n);}});};}h();var k=/(outer)/.test(b)?e[b](i.includeMargin):e[b]();j();return k;}});}));
/* End */
;
; /* Start:"a:4:{s:4:"full";s:64:"/bitrix/templates/aspro_optimus/js/jqModal.min.js?15898055533355";s:6:"source";s:45:"/bitrix/templates/aspro_optimus/js/jqModal.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * jqModal - Minimalist Modaling with jQuery
 *   (http://dev.iceburg.net/jquery/jqModal/)
 *
 * Copyright (c) 2007,2008 Brice Burgess <bhb@iceburg.net>
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 * 
 * $Version: 03/01/2009 +r14
 */
(function($) {
$.fn.jqm=function(o){
var p={
overlay: 50,
overlayClass: 'jqmOverlay',
closeClass: 'jqmClose',
trigger: '.jqModal',
ajax: F,
ajaxText: '',
target: F,
modal: F,
toTop: F,
onShow: F,
onHide: F,
onLoad: F
};
return this.each(function(){if(this._jqm)return H[this._jqm].c=$.extend({},H[this._jqm].c,o);s++;this._jqm=s;
H[s]={c:$.extend(p,$.jqm.params,o),a:F,w:$(this).addClass('jqmID'+s),s:s};
if(p.trigger)$(this).jqmAddTrigger(p.trigger);
});};

$.fn.jqmAddClose=function(e){return hs(this,e,'jqmHide');};
$.fn.jqmAddTrigger=function(e){return hs(this,e,'jqmShow');};
$.fn.jqmShow=function(t){return this.each(function(){t=t||window.event;$.jqm.open(this._jqm,t);});};
$.fn.jqmHide=function(t){return this.each(function(){t=t||window.event;$.jqm.close(this._jqm,t)});};

$.jqm = {
hash:{},
open:function(s,t){var h=H[s],c=h.c,cc='.'+c.closeClass,z=(parseInt(h.w.css('z-index'))),z=(z>0)?z:3000,o=$('<div></div>').css({height:'100%',width:'100%',position:'fixed',left:0,top:0,'z-index':z-1,opacity:c.overlay/100});if(h.a)return F;h.t=t;h.a=true;h.w.css('z-index',z);
 if(c.modal) {if(!A[0])L('bind');A.push(s);}
 else if(c.overlay > 0)h.w.jqmAddClose(o);
 else o=F;

 h.o=(o)?o.addClass(c.overlayClass).prependTo('body'):F;
 if(ie6){$('html,body').css({height:'100%',width:'100%'});if(o){o=o.css({position:'absolute'})[0];for(var y in {Top:1,Left:1})o.style.setExpression(y.toLowerCase(),"(_=(document.documentElement.scroll"+y+" || document.body.scroll"+y+"))+'px'");}}

 if(c.ajax) {var r=c.target||h.w,u=c.ajax,r=(typeof r == 'string')?$(r,h.w):$(r),u=(u.substr(0,1) == '@')?$(t).attr(u.substring(1)):u;
  r.html(c.ajaxText).load(u,function(){if(c.onLoad)c.onLoad.call(this,h);if(cc)h.w.jqmAddClose($(cc,h.w));e(h);});}
 else if(cc)h.w.jqmAddClose($(cc,h.w));

 if(c.toTop&&h.o)h.w.before('<span id="jqmP'+h.w[0]._jqm+'"></span>').insertAfter(h.o);	
 (c.onShow)?c.onShow(h):h.w.show();e(h);return F;
},
close:function(s){var h=H[s];if(!h.a)return F;h.a=F;
 if(A[0]){A.pop();if(!A[0])L('unbind');}
 if(h.c.toTop&&h.o)$('#jqmP'+h.w[0]._jqm).after(h.w).remove();
 if(h.c.onHide)h.c.onHide(h);else{h.w.hide();if(h.o)h.o.remove();} return F;
},
params:{}};
var s=0,H=$.jqm.hash,A=[],ie6=$.browser.msie&&($.browser.version == "6.0"),F=false,
i=$('<iframe src="javascript:false;document.write(\'\');" class="jqm"></iframe>').css({opacity:0}),
e=function(h){if(ie6)if(h.o)h.o.html('<p style="width:100%;height:100%"/>').prepend(i);else if(!$('iframe.jqm',h.w)[0])h.w.prepend(i); f(h);},
f=function(h){try{$(':input:visible',h.w)[0].focus();}catch(_){}},
L=function(t){$()[t]("keypress",m)[t]("keydown",m)[t]("mousedown",m);},
m=function(e){var h=H[A[A.length-1]],r=(!$(e.target).parents('.jqmID'+h.s)[0]);if(r)f(h);return !r;},
hs=function(w,t,c){return w.each(function(){var s=this._jqm;$(t).each(function() {
 if(!this[c]){this[c]=[];$(this).click(function(){for(var i in {jqmShow:1,jqmHide:1})for(var s in this[i])if(H[this[i][s]])H[this[i][s]].w[i](this);return F;});}this[c].push(s);});});};
})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:73:"/bitrix/templates/aspro_optimus/js/jquery.fancybox.min.js?158980555321528";s:6:"source";s:53:"/bitrix/templates/aspro_optimus/js/jquery.fancybox.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(e,t,n,i){"use strict";var o=n(e),a=n(t),r=n.fancybox=function(){r.open.apply(this,arguments)},s=null,l=t.createTouch!==i,c=function(e){return e&&e.hasOwnProperty&&e instanceof n},p=function(e){return e&&"string"===n.type(e)},d=function(e){return p(e)&&e.indexOf("%")>0},h=function(e){return e&&!(e.style.overflow&&"hidden"===e.style.overflow)&&(e.clientWidth&&e.scrollWidth>e.clientWidth||e.clientHeight&&e.scrollHeight>e.clientHeight)},f=function(e,t){var n=parseInt(e,10);return t&&d(e)&&(n=r.getViewport()[t]/100*n),Math.ceil(n)},u=function(e,t){return f(e,t)+"px"};n.extend(r,{version:"2.1.0",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!l,autoCenter:!l,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0"'+(n.browser.msie?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:{closeClick:!0,speedOut:200,showEarly:!0,css:{}},title:{type:"float"}},onCancel:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeChange:n.noop,beforeClose:n.noop,afterClose:n.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(e,t){return e&&(n.isPlainObject(t)||(t={}),!1!==r.close(!0))?(n.isArray(e)||(e=c(e)?n(e).get():[e]),n.each(e,function(o,a){var s,l,d,h,f,u,g,m={};"object"===n.type(a)&&(a.nodeType&&(a=n(a)),c(a)?(m={href:a.attr("href"),title:a.attr("title"),isDom:!0,element:a},n.metadata&&n.extend(!0,m,a.metadata())):m=a),s=t.href||m.href||(p(a)?a:null),l=t.title!==i?t.title:m.title||"",d=t.content||m.content,h=d?"html":t.type||m.type,!h&&m.isDom&&(h=a.data("fancybox-type"),h||(f=a.prop("class").match(/fancybox\.(\w+)/),h=f?f[1]:null)),p(s)&&(h||(r.isImage(s)?h="image":r.isSWF(s)?h="swf":"#"===s.charAt(0)?h="inline":p(a)&&(h="html",d=a)),"ajax"===h&&(u=s.split(/\s+/,2),s=u.shift(),g=u.shift())),d||("inline"===h?s?d=n(p(s)?s.replace(/.*(?=#[^\s]+$)/,""):s):m.isDom&&(d=a):"html"===h?d=s:h||s||!m.isDom||(h="inline",d=a)),n.extend(m,{href:s,type:h,content:d,title:l,selector:g}),e[o]=m}),r.opts=n.extend(!0,{},r.defaults,t),t.keys!==i&&(r.opts.keys=t.keys?n.extend({},r.defaults.keys,t.keys):!1),r.group=e,r._start(r.opts.index)):void 0},cancel:function(){var e=r.coming;e&&!1!==r.trigger("onCancel")&&(r.hideLoading(),r.ajaxLoad&&r.ajaxLoad.abort(),r.ajaxLoad=null,r.imgPreload&&(r.imgPreload.onload=r.imgPreload.onerror=null),e.wrap&&e.wrap.stop(!0).trigger("onReset").remove(),r.current||r.trigger("afterClose"),r.coming=null)},close:function(e){r.cancel(),!1!==r.trigger("beforeClose")&&(r.unbindEvents(),r.isOpen&&e!==!0?(r.isOpen=r.isOpened=!1,r.isClosing=!0,n(".fancybox-item, .fancybox-nav").remove(),r.wrap.stop(!0,!0).removeClass("fancybox-opened"),"fixed"===r.wrap.css("position")&&r.wrap.css(r._getPosition(!0)),r.transitions[r.current.closeMethod]()):(n(".fancybox-wrap").stop(!0).trigger("onReset").remove(),r._afterZoomOut()))},play:function(e){var t=function(){clearTimeout(r.player.timer)},i=function(){t(),r.current&&r.player.isActive&&(r.player.timer=setTimeout(r.next,r.current.playSpeed))},o=function(){t(),n("body").unbind(".player"),r.player.isActive=!1,r.trigger("onPlayEnd")},a=function(){r.current&&(r.current.loop||r.current.index<r.group.length-1)&&(r.player.isActive=!0,n("body").bind({"afterShow.player onUpdate.player":i,"onCancel.player beforeClose.player":o,"beforeLoad.player":t}),i(),r.trigger("onPlayStart"))};e===!0||!r.player.isActive&&e!==!1?a():o()},next:function(e){var t=r.current;t&&(p(e)||(e=t.direction.next),r.jumpto(t.index+1,e,"next"))},prev:function(e){var t=r.current;t&&(p(e)||(e=t.direction.prev),r.jumpto(t.index-1,e,"prev"))},jumpto:function(e,t,n){var o=r.current;o&&(e=f(e),r.direction=t||o.direction[e>=o.index?"next":"prev"],r.router=n||"jumpto",o.loop&&(0>e&&(e=o.group.length+e%o.group.length),e%=o.group.length),o.group[e]!==i&&(r.cancel(),r._start(e)))},reposition:function(e,t){var n;r.isOpen&&(n=r._getPosition(t),e&&"scroll"===e.type?(delete n.position,r.wrap.stop(!0,!0).animate(n,200)):r.wrap.css(n))},update:function(e){var t=e&&e.type,n=!t||"orientationchange"===t;n&&(clearTimeout(s),s=null),r.isOpen&&!s&&((n||l)&&(r.wrap.removeAttr("style").addClass("fancybox-tmp"),r.trigger("onUpdate")),s=setTimeout(function(){var n=r.current;n&&(r.wrap.removeClass("fancybox-tmp"),"scroll"!==t&&r._setDimension(),"scroll"===t&&n.canShrink||r.reposition(e),r.trigger("onUpdate"),s=null)},l?500:n?20:300))},toggle:function(e){r.isOpen&&(r.current.fitToView="boolean"===n.type(e)?e:!r.current.fitToView,r.update())},hideLoading:function(){a.unbind("keypress.fb"),n("#fancybox-loading").remove()},showLoading:function(){var e,t;r.hideLoading(),a.bind("keypress.fb",function(e){27===(e.which||e.keyCode)&&(e.preventDefault(),r.cancel())}),e=n('<div id="fancybox-loading"><div></div></div>').click(r.cancel).appendTo("body"),r.defaults.fixed||(t=r.getViewport(),e.css({position:"absolute",top:.5*t.h+t.y,left:.5*t.w+t.x}))},getViewport:function(){var t=r.current?r.current.locked:!1,n={x:o.scrollLeft(),y:o.scrollTop()};return t?(n.w=t[0].clientWidth,n.h=t[0].clientHeight):(n.w=l&&e.innerWidth?e.innerWidth:o.width(),n.h=l&&e.innerHeight?e.innerHeight:o.height()),n},unbindEvents:function(){r.wrap&&c(r.wrap)&&r.wrap.unbind(".fb"),a.unbind(".fb"),o.unbind(".fb")},bindEvents:function(){var e,t=r.current;t&&(o.bind("orientationchange.fb"+(l?"":" resize.fb")+(t.autoCenter&&!t.locked?" scroll.fb":""),r.update),e=t.keys,e&&a.bind("keydown.fb",function(o){var a=o.which||o.keyCode,s=o.target||o.srcElement;o.ctrlKey||o.altKey||o.shiftKey||o.metaKey||s&&(s.type||n(s).is("[contenteditable]"))||n.each(e,function(e,s){return t.group.length>1&&s[a]!==i?(r[e](s[a]),o.preventDefault(),!1):n.inArray(a,s)>-1?(r[e](),o.preventDefault(),!1):void 0})}),n.fn.mousewheel&&t.mouseWheel&&r.wrap.bind("mousewheel.fb",function(e,i,o,a){for(var s=e.target||null,l=n(s),c=!1;l.length&&!(c||l.is(".fancybox-skin")||l.is(".fancybox-wrap"));)c=h(l[0]),l=n(l).parent();0===i||c||r.group.length>1&&!t.canShrink&&(a>0||o>0?r.prev(a>0?"down":"left"):(0>a||0>o)&&r.next(0>a?"up":"right"),e.preventDefault())}))},trigger:function(e,t){var i,o=t||r.coming||r.current;if(o){if(n.isFunction(o[e])&&(i=o[e].apply(o,Array.prototype.slice.call(arguments,1))),i===!1)return!1;"onCancel"!==e||r.isOpened||(r.isActive=!1),o.helpers&&n.each(o.helpers,function(t,i){i&&r.helpers[t]&&n.isFunction(r.helpers[t][e])&&r.helpers[t][e](i,o)}),n.event.trigger(e+".fb")}},isImage:function(e){return p(e)&&e.match(/\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$/i)},isSWF:function(e){return p(e)&&e.match(/\.(swf)((\?|#).*)?$/i)},_start:function(e){var t,i,o,a,s,c={};if(e=f(e),t=r.group[e]||null,!t)return!1;if(c=n.extend(!0,{},r.opts,t),a=c.margin,s=c.padding,"number"===n.type(a)&&(c.margin=[a,a,a,a]),"number"===n.type(s)&&(c.padding=[s,s,s,s]),c.modal&&n.extend(!0,c,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),c.autoSize&&(c.autoWidth=c.autoHeight=!0),"auto"===c.width&&(c.autoWidth=!0),"auto"===c.height&&(c.autoHeight=!0),c.group=r.group,c.index=e,r.coming=c,!1===r.trigger("beforeLoad"))return void(r.coming=null);if(o=c.type,i=c.href,!o)return r.coming=null,r.current&&r.router&&"jumpto"!==r.router?(r.current.index=e,r[r.router](r.direction)):!1;if(r.isActive=!0,("image"===o||"swf"===o)&&(c.autoHeight=c.autoWidth=!1,c.scrolling="visible"),"image"===o&&(c.aspectRatio=!0),"iframe"===o&&l&&(c.scrolling="scroll"),c.wrap=n(c.tpl.wrap).addClass("fancybox-"+(l?"mobile":"desktop")+" fancybox-type-"+o+" fancybox-tmp "+c.wrapCSS).appendTo(c.parent),n.extend(c,{skin:n(".fancybox-skin",c.wrap),outer:n(".fancybox-outer",c.wrap),inner:n(".fancybox-inner",c.wrap)}),n.each(["Top","Right","Bottom","Left"],function(e,t){c.skin.css("padding"+t,u(c.padding[e]))}),r.trigger("onReady"),"inline"===o||"html"===o){if(!c.content||!c.content.length)return r._error("content")}else if(!i)return r._error("href");"image"===o?r._loadImage():"ajax"===o?r._loadAjax():"iframe"===o?r._loadIframe():r._afterLoad()},_error:function(e){n.extend(r.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:e,content:r.coming.tpl.error}),r._afterLoad()},_loadImage:function(){var e=r.imgPreload=new Image;e.onload=function(){this.onload=this.onerror=null,r.coming.width=this.width,r.coming.height=this.height,r._afterLoad()},e.onerror=function(){this.onload=this.onerror=null,r._error("image")},e.src=r.coming.href,e.complete!==i&&e.complete||r.showLoading()},_loadAjax:function(){var e=r.coming;r.showLoading(),r.ajaxLoad=n.ajax(n.extend({},e.ajax,{url:e.href,error:function(e,t){r.coming&&"abort"!==t?r._error("ajax",e):r.hideLoading()},success:function(t,n){"success"===n&&(e.content=t,r._afterLoad())}}))},_loadIframe:function(){var e=r.coming,t=n(e.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",l?"auto":e.iframe.scrolling).attr("src",e.href);n(e.wrap).bind("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}}),e.iframe.preload&&(r.showLoading(),t.one("load",function(){n(this).data("ready",1),l||n(this).bind("load.fb",r.update),n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),r._afterLoad()})),e.content=t.appendTo(e.inner),e.iframe.preload||r._afterLoad()},_preloadImages:function(){var e,t,n=r.group,i=r.current,o=n.length,a=i.preload?Math.min(i.preload,o-1):0;for(t=1;a>=t;t+=1)e=n[(i.index+t)%o],"image"===e.type&&e.href&&((new Image).src=e.href)},_afterLoad:function(){var e,t,i,o,a,s,l=r.coming,p=r.current,d="fancybox-placeholder";if(r.hideLoading(),l&&r.isActive!==!1){if(!1===r.trigger("afterLoad",l,p))return l.wrap.stop(!0).trigger("onReset").remove(),void(r.coming=null);switch(p&&(r.trigger("beforeChange",p),p.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove(),"fixed"===p.wrap.css("position")&&p.wrap.css(r._getPosition(!0))),r.unbindEvents(),e=l,t=l.content,i=l.type,o=l.scrolling,n.extend(r,{wrap:e.wrap,skin:e.skin,outer:e.outer,inner:e.inner,current:e,previous:p}),a=e.href,i){case"inline":case"ajax":case"html":e.selector?t=n("<div>").html(t).find(e.selector):c(t)&&(t.data(d)||t.data(d,n('<div class="'+d+'"></div>').insertAfter(t).hide()),t=t.show().detach(),e.wrap.bind("onReset",function(){n(this).find(t).length&&t.hide().replaceAll(t.data(d)).data(d,!1)}));break;case"image":t=e.tpl.image.replace("{href}",a);break;case"swf":t='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+a+'"></param>',s="",n.each(e.swf,function(e,n){t+='<param name="'+e+'" value="'+n+'"></param>',s+=" "+e+'="'+n+'"'}),t+='<embed src="'+a+'" type="application/x-shockwave-flash" width="100%" height="100%"'+s+"></embed></object>"}c(t)&&t.parent().is(e.inner)||e.inner.append(t),r.trigger("beforeShow"),e.inner.css("overflow","yes"===o?"scroll":"no"===o?"hidden":o),r._setDimension(),e.wrap.removeClass("fancybox-tmp"),e.pos=n.extend({},e.dim,r._getPosition(!0)),r.isOpen=!1,r.coming=null,r.bindEvents(),r.isOpened?p.prevMethod&&r.transitions[p.prevMethod]():n(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(),r.transitions[r.isOpened?e.nextMethod:e.openMethod](),r._preloadImages()}},_setDimension:function(){var e,t,i,o,a,s,l,c,p,h,g,m,y,w,v,b=r.getViewport(),x=0,k=!1,C=!1,O=r.wrap,W=r.skin,_=r.inner,S=r.current,P=S.width,E=S.height,T=S.minWidth,j=S.minHeight,L=S.maxWidth,M=S.maxHeight,H=S.scrolling,R=S.scrollOutside?S.scrollbarWidth:0,A=S.margin,I=A[1]+A[3],D=A[0]+A[2];if(O.add(W).add(_).width("auto").height("auto"),e=W.outerWidth(!0)-W.width(),t=W.outerHeight(!0)-W.height(),i=I+e,o=D+t,a=d(P)?(b.w-i)*f(P)/100:P,s=d(E)?(b.h-o)*f(E)/100:E,"iframe"===S.type){if(w=S.content,S.autoHeight&&1===w.data("ready"))try{w[0].contentWindow.document.location&&(_.width(a).height(9999),v=w.contents().find("body"),R&&v.css("overflow-x","hidden"),s=v.height())}catch(V){}}else(S.autoWidth||S.autoHeight)&&(_.addClass("fancybox-tmp"),S.autoWidth||_.width(a),S.autoHeight||_.height(s),S.autoWidth&&(a=_.width()),S.autoHeight&&(s=_.height()),_.removeClass("fancybox-tmp"));if(P=f(a),E=f(s),p=a/s,T=f(d(T)?f(T,"w")-i:T),L=f(d(L)?f(L,"w")-i:L),j=f(d(j)?f(j,"h")-o:j),M=f(d(M)?f(M,"h")-o:M),l=L,c=M,m=b.w-I,y=b.h-D,S.aspectRatio?(P>L&&(P=L,E=P/p),E>M&&(E=M,P=E*p),T>P&&(P=T,E=P/p),j>E&&(E=j,P=E*p)):(P=Math.max(T,Math.min(P,L)),E=Math.max(j,Math.min(E,M))),S.fitToView)if(L=Math.min(b.w-i,L),M=Math.min(b.h-o,M),_.width(f(P)).height(f(E)),O.width(f(P+e)),h=O.width(),g=O.height(),S.aspectRatio)for(;(h>m||g>y)&&P>T&&E>j&&!(x++>19);)E=Math.max(j,Math.min(M,E-10)),P=E*p,T>P&&(P=T,E=P/p),P>L&&(P=L,E=P/p),_.width(f(P)).height(f(E)),O.width(f(P+e)),h=O.width(),g=O.height();else P=Math.max(T,Math.min(P,P-(h-m))),E=Math.max(j,Math.min(E,E-(g-y)));R&&"auto"===H&&s>E&&m>P+e+R&&(P+=R),_.width(f(P)).height(f(E)),O.width(f(P+e)),h=O.width(),g=O.height(),k=(h>m||g>y)&&P>T&&E>j,C=S.aspectRatio?l>P&&c>E&&a>P&&s>E:(l>P||c>E)&&(a>P||s>E),n.extend(S,{dim:{width:u(h),height:u(g)},origWidth:a,origHeight:s,canShrink:k,canExpand:C,wPadding:e,hPadding:t,wrapSpace:g-W.outerHeight(!0),skinSpace:W.height()-E}),!w&&S.autoHeight&&E>j&&M>E&&!C&&_.height("auto")},_getPosition:function(e){var t=r.current,n=r.getViewport(),i=t.margin,o=r.wrap.width()+i[1]+i[3],a=r.wrap.height()+i[0]+i[2],s={position:"absolute",top:i[0],left:i[3]};return t.autoCenter&&t.fixed&&!e&&a<=n.h&&o<=n.w?s.position="fixed":t.locked||(s.top+=n.y,s.left+=n.x),s.top=u(Math.max(s.top,s.top+(n.h-a)*t.topRatio)),s.left=u(Math.max(s.left,s.left+(n.w-o)*t.leftRatio)),s},_afterZoomIn:function(){var e=r.current;e&&(r.isOpen=r.isOpened=!0,r.wrap.addClass("fancybox-opened").css("overflow","visible"),r.reposition(),(e.closeClick||e.nextClick)&&r.inner.css("cursor","pointer").bind("click.fb",function(t){n(t.target).is("a")||n(t.target).parent().is("a")||r[e.closeClick?"close":"next"]()}),e.closeBtn&&n(e.tpl.closeBtn).appendTo(r.skin).bind("click.fb",r.close),e.arrows&&r.group.length>1&&((e.loop||e.index>0)&&n(e.tpl.prev).appendTo(r.outer).bind("click.fb",r.prev),(e.loop||e.index<r.group.length-1)&&n(e.tpl.next).appendTo(r.outer).bind("click.fb",r.next)),r.trigger("afterShow"),e.loop||e.index!==e.group.length-1?r.opts.autoPlay&&!r.player.isActive&&(r.opts.autoPlay=!1,r.play()):r.play(!1))},_afterZoomOut:function(){var e=r.current;n(".fancybox-wrap").stop(!0).trigger("onReset").remove(),n.extend(r,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),r.trigger("afterClose",e)}}),r.transitions={getOrigPosition:function(){var e=r.current,t=e.element,n=e.orig,i={},o=50,a=50,s=e.hPadding,l=e.wPadding,p=r.getViewport();return!n&&e.isDom&&t.is(":visible")&&(n=t.find("img:first"),n.length||(n=t)),c(n)?(i=n.offset(),n.is("img")&&(o=n.outerWidth(),a=n.outerHeight())):(i.top=p.y+(p.h-a)*e.topRatio,i.left=p.x+(p.w-o)*e.leftRatio),e.locked&&(i.top-=p.y,i.left-=p.x),i={top:u(i.top-s*e.topRatio),left:u(i.left-l*e.leftRatio),width:u(o+l),height:u(a+s)}},step:function(e,t){var n,i,o,a=t.prop,s=r.current,l=s.wrapSpace,c=s.skinSpace;("width"===a||"height"===a)&&(n=t.end===t.start?1:(e-t.start)/(t.end-t.start),r.isClosing&&(n=1-n),i="width"===a?s.wPadding:s.hPadding,o=e-i,r.skin[a](f("width"===a?o:o-l*n)),r.inner[a](f("width"===a?o:o-l*n-c*n)))},zoomIn:function(){var e=r.current,t=e.pos,i=e.openEffect,o="elastic"===i,a=n.extend({opacity:1},t);delete a.position,o?(t=this.getOrigPosition(),e.openOpacity&&(t.opacity=.1)):"fade"===i&&(t.opacity=.1),r.wrap.css(t).animate(a,{duration:"none"===i?0:e.openSpeed,easing:e.openEasing,step:o?this.step:null,complete:r._afterZoomIn})},zoomOut:function(){var e=r.current,t=e.closeEffect,n="elastic"===t,i={opacity:.1};n&&(i=this.getOrigPosition(),e.closeOpacity&&(i.opacity=.1)),r.wrap.animate(i,{duration:"none"===t?0:e.closeSpeed,easing:e.closeEasing,step:n?this.step:null,complete:r._afterZoomOut})},changeIn:function(){var e,t=r.current,n=t.nextEffect,i=t.pos,o={opacity:1},a=r.direction,s=200;i.opacity=.1,"elastic"===n&&(e="down"===a||"up"===a?"top":"left","down"===a||"right"===a?(i[e]=u(f(i[e])-s),o[e]="+="+s+"px"):(i[e]=u(f(i[e])+s),o[e]="-="+s+"px")),"none"===n?r._afterZoomIn():r.wrap.css(i).animate(o,{duration:t.nextSpeed,easing:t.nextEasing,complete:r._afterZoomIn})},changeOut:function(){var e=r.previous,t=e.prevEffect,i={opacity:.1},o=r.direction,a=200;"elastic"===t&&(i["down"===o||"up"===o?"top":"left"]=("up"===o||"left"===o?"-":"+")+"="+a+"px"),e.wrap.animate(i,{duration:"none"===t?0:e.prevSpeed,easing:e.prevEasing,complete:function(){n(this).trigger("onReset").remove()}})}},r.helpers.overlay={overlay:null,update:function(){var e,i="100%";this.overlay.width(i).height("100%"),n.browser.msie?(e=Math.max(t.documentElement.offsetWidth,t.body.offsetWidth),a.width()>e&&(i=a.width())):a.width()>o.width()&&(i=a.width()),this.overlay.width(i).height(a.height())},onReady:function(e,i){n(".fancybox-overlay").stop(!0,!0),this.overlay||n.extend(this,{overlay:n('<div class="fancybox-overlay"></div>').appendTo(i.parent),margin:a.height()>o.height()||"scroll"===n("body").css("overflow-y")?n("body").css("margin-right"):!1,el:n(t.all&&!t.querySelector?"html":"body")}),i.fixed&&!l&&(this.overlay.addClass("fancybox-overlay-fixed"),i.autoCenter&&(this.overlay.append(i.wrap),i.locked=this.overlay)),e.showEarly===!0&&this.beforeShow.apply(this,arguments)},beforeShow:function(e,t){var i=this.overlay.unbind(".fb").width("auto").height("auto").css(e.css);e.closeClick&&i.bind("click.fb",function(e){n(e.target).hasClass("fancybox-overlay")&&r.close()}),t.fixed&&!l?t.locked&&(this.el.addClass("fancybox-lock"),this.margin!==!1&&n("body").css("margin-right",f(this.margin)+t.scrollbarWidth)):this.update(),i.show()},onUpdate:function(e,t){(!t.fixed||l)&&this.update()},afterClose:function(e){var t=this,i=e.speedOut||0;t.overlay&&!r.isActive&&t.overlay.fadeOut(i||0,function(){n("body").css("margin-right",t.margin),t.el.removeClass("fancybox-lock"),t.overlay.remove(),t.overlay=null})}},r.helpers.title={beforeShow:function(e){var t,i,o=r.current.title,a=e.type;if(p(o)&&""!==n.trim(o)){switch(t=n('<div class="fancybox-title fancybox-title-'+a+'-wrap">'+o+"</div>"),a){case"inside":i=r.skin;break;case"outside":i=r.wrap;break;case"over":i=r.inner;break;default:i=r.skin,t.appendTo("body").width(t.width()).wrapInner('<span class="child"></span>'),r.current.margin[2]+=Math.abs(f(t.css("margin-bottom")))}"top"===e.position?t.prependTo(i):t.appendTo(i)}}},n.fn.fancybox=function(e){var t,i=n(this),o=this.selector||"",s=function(a){var s,l,c=n(this).blur(),p=t;a.ctrlKey||a.altKey||a.shiftKey||a.metaKey||c.is(".fancybox-wrap")||(s=e.groupAttr||"data-fancybox-group",l=c.attr(s),l||(s="rel",l=c.get(0)[s]),l&&""!==l&&"nofollow"!==l&&(c=o.length?n(o):i,c=c.filter("["+s+'="'+l+'"]'),p=c.index(this)),e.index=p,r.open(c,e)!==!1&&a.preventDefault())};return e=e||{},t=e.index||0,o&&e.live!==!1?a.undelegate(o,"click.fb-start").delegate(o+":not('.fancybox-item, .fancybox-nav')","click.fb-start",s):i.unbind("click.fb-start").bind("click.fb-start",s),this},a.ready(function(){n.scrollbarWidth===i&&(n.scrollbarWidth=function(){var e=n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),t=e.children(),i=t.innerWidth()-t.height(99).innerWidth();return e.remove(),i}),n.support.fixedPosition===i&&(n.support.fixedPosition=function(){var e=n('<div style="position:fixed;top:20px;"></div>').appendTo("body"),t=20===e[0].offsetTop||15===e[0].offsetTop;return e.remove(),t}()),n.extend(r.defaults,{scrollbarWidth:n.scrollbarWidth(),fixed:n.support.fixedPosition,parent:n("body")})})}(window,document,jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:72:"/bitrix/templates/aspro_optimus/js/jquery.history.min.js?158980555321571";s:6:"source";s:52:"/bitrix/templates/aspro_optimus/js/jquery.history.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
window.JSON||(window.JSON={}),function(){function f(a){return a<10?"0"+a:a}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return typeof b=="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,g=gap,h,i=b[a];i&&typeof i=="object"&&typeof i.toJSON=="function"&&(i=i.toJSON(a)),typeof rep=="function"&&(i=rep.call(b,a,i));switch(typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";gap+=indent,h=[];if(Object.prototype.toString.apply(i)==="[object Array]"){f=i.length;for(c=0;c<f;c+=1)h[c]=str(c,i)||"null";return e=h.length===0?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]",gap=g,e}if(rep&&typeof rep=="object"){f=rep.length;for(c=0;c<f;c+=1)d=rep[c],typeof d=="string"&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e))}else for(d in i)Object.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));return e=h.length===0?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}",gap=g,e}}"use strict",typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(a){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var JSON=window.JSON,cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(a,b,c){var d;gap="",indent="";if(typeof c=="number")for(d=0;d<c;d+=1)indent+=" ";else typeof c=="string"&&(indent=c);rep=b;if(!b||typeof b=="function"||typeof b=="object"&&typeof b.length=="number")return str("",{"":a});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&typeof e=="object")for(c in e)Object.hasOwnProperty.call(e,c)&&(d=walk(e,c),d!==undefined?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(a,b){"use strict";var c=a.History=a.History||{},d=a.jQuery;if(typeof c.Adapter!="undefined")throw new Error("History.js Adapter has already been loaded...");c.Adapter={bind:function(a,b,c){d(a).bind(b,c)},trigger:function(a,b,c){d(a).trigger(b,c)},extractEventData:function(a,c,d){var e=c&&c.originalEvent&&c.originalEvent[a]||d&&d[a]||b;return e},onDomLoad:function(a){d(a)}},typeof c.init!="undefined"&&c.init()}(window),function(a,b){"use strict";var c=a.document,d=a.setTimeout||d,e=a.clearTimeout||e,f=a.setInterval||f,g=a.History=a.History||{};if(typeof g.initHtml4!="undefined")throw new Error("History.js HTML4 Support has already been loaded...");g.initHtml4=function(){if(typeof g.initHtml4.initialized!="undefined")return!1;g.initHtml4.initialized=!0,g.enabled=!0,g.savedHashes=[],g.isLastHash=function(a){var b=g.getHashByIndex(),c;return c=a===b,c},g.saveHash=function(a){return g.isLastHash(a)?!1:(g.savedHashes.push(a),!0)},g.getHashByIndex=function(a){var b=null;return typeof a=="undefined"?b=g.savedHashes[g.savedHashes.length-1]:a<0?b=g.savedHashes[g.savedHashes.length+a]:b=g.savedHashes[a],b},g.discardedHashes={},g.discardedStates={},g.discardState=function(a,b,c){var d=g.getHashByState(a),e;return e={discardedState:a,backState:c,forwardState:b},g.discardedStates[d]=e,!0},g.discardHash=function(a,b,c){var d={discardedHash:a,backState:c,forwardState:b};return g.discardedHashes[a]=d,!0},g.discardedState=function(a){var b=g.getHashByState(a),c;return c=g.discardedStates[b]||!1,c},g.discardedHash=function(a){var b=g.discardedHashes[a]||!1;return b},g.recycleState=function(a){var b=g.getHashByState(a);return g.discardedState(a)&&delete g.discardedStates[b],!0},g.emulated.hashChange&&(g.hashChangeInit=function(){g.checkerFunction=null;var b="",d,e,h,i;return g.isInternetExplorer()?(d="historyjs-iframe",e=c.createElement("iframe"),e.setAttribute("id",d),e.style.display="none",c.body.appendChild(e),e.contentWindow.document.open(),e.contentWindow.document.close(),h="",i=!1,g.checkerFunction=function(){if(i)return!1;i=!0;var c=g.getHash()||"",d=g.unescapeHash(e.contentWindow.document.location.hash)||"";return c!==b?(b=c,d!==c&&(h=d=c,e.contentWindow.document.open(),e.contentWindow.document.close(),e.contentWindow.document.location.hash=g.escapeHash(c)),g.Adapter.trigger(a,"hashchange")):d!==h&&(h=d,g.setHash(d,!1)),i=!1,!0}):g.checkerFunction=function(){var c=g.getHash();return c!==b&&(b=c,g.Adapter.trigger(a,"hashchange")),!0},g.intervalList.push(f(g.checkerFunction,g.options.hashChangeInterval)),!0},g.Adapter.onDomLoad(g.hashChangeInit)),g.emulated.pushState&&(g.onHashChange=function(b){var d=b&&b.newURL||c.location.href,e=g.getHashByUrl(d),f=null,h=null,i=null,j;return g.isLastHash(e)?(g.busy(!1),!1):(g.doubleCheckComplete(),g.saveHash(e),e&&g.isTraditionalAnchor(e)?(g.Adapter.trigger(a,"anchorchange"),g.busy(!1),!1):(f=g.extractState(g.getFullUrl(e||c.location.href,!1),!0),g.isLastSavedState(f)?(g.busy(!1),!1):(h=g.getHashByState(f),j=g.discardedState(f),j?(g.getHashByIndex(-2)===g.getHashByState(j.forwardState)?g.back(!1):g.forward(!1),!1):(g.pushState(f.data,f.title,f.url,!1),!0))))},g.Adapter.bind(a,"hashchange",g.onHashChange),g.pushState=function(b,d,e,f){if(g.getHashByUrl(e))throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(f!==!1&&g.busy())return g.pushQueue({scope:g,callback:g.pushState,args:arguments,queue:f}),!1;g.busy(!0);var h=g.createStateObject(b,d,e),i=g.getHashByState(h),j=g.getState(!1),k=g.getHashByState(j),l=g.getHash();return g.storeState(h),g.expectedStateId=h.id,g.recycleState(h),g.setTitle(h),i===k?(g.busy(!1),!1):i!==l&&i!==g.getShortUrl(c.location.href)?(g.setHash(i,!1),!1):(g.saveState(h),g.Adapter.trigger(a,"statechange"),g.busy(!1),!0)},g.replaceState=function(a,b,c,d){if(g.getHashByUrl(c))throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(d!==!1&&g.busy())return g.pushQueue({scope:g,callback:g.replaceState,args:arguments,queue:d}),!1;g.busy(!0);var e=g.createStateObject(a,b,c),f=g.getState(!1),h=g.getStateByIndex(-2);return g.discardState(f,e,h),g.pushState(e.data,e.title,e.url,!1),!0}),g.emulated.pushState&&g.getHash()&&!g.emulated.hashChange&&g.Adapter.onDomLoad(function(){g.Adapter.trigger(a,"hashchange")})},typeof g.init!="undefined"&&g.init()}(window),function(a,b){"use strict";var c=a.console||b,d=a.document,e=a.navigator,f=a.sessionStorage||!1,g=a.setTimeout,h=a.clearTimeout,i=a.setInterval,j=a.clearInterval,k=a.JSON,l=a.alert,m=a.History=a.History||{},n=a.history;k.stringify=k.stringify||k.encode,k.parse=k.parse||k.decode;if(typeof m.init!="undefined")throw new Error("History.js Core has already been loaded...");m.init=function(){return typeof m.Adapter=="undefined"?!1:(typeof m.initCore!="undefined"&&m.initCore(),typeof m.initHtml4!="undefined"&&m.initHtml4(),!0)},m.initCore=function(){if(typeof m.initCore.initialized!="undefined")return!1;m.initCore.initialized=!0,m.options=m.options||{},m.options.hashChangeInterval=m.options.hashChangeInterval||100,m.options.safariPollInterval=m.options.safariPollInterval||500,m.options.doubleCheckInterval=m.options.doubleCheckInterval||500,m.options.storeInterval=m.options.storeInterval||1e3,m.options.busyDelay=m.options.busyDelay||250,m.options.debug=m.options.debug||!1,m.options.initialTitle=m.options.initialTitle||d.title,m.intervalList=[],m.clearAllIntervals=function(){var a,b=m.intervalList;if(typeof b!="undefined"&&b!==null){for(a=0;a<b.length;a++)j(b[a]);m.intervalList=null}},m.debug=function(){(m.options.debug||!1)&&m.log.apply(m,arguments)},m.log=function(){var a=typeof c!="undefined"&&typeof c.log!="undefined"&&typeof c.log.apply!="undefined",b=d.getElementById("log"),e,f,g,h,i;a?(h=Array.prototype.slice.call(arguments),e=h.shift(),typeof c.debug!="undefined"?c.debug.apply(c,[e,h]):c.log.apply(c,[e,h])):e="\n"+arguments[0]+"\n";for(f=1,g=arguments.length;f<g;++f){i=arguments[f];if(typeof i=="object"&&typeof k!="undefined")try{i=k.stringify(i)}catch(j){}e+="\n"+i+"\n"}return b?(b.value+=e+"\n-----\n",b.scrollTop=b.scrollHeight-b.clientHeight):a||l(e),!0},m.getInternetExplorerMajorVersion=function(){var a=m.getInternetExplorerMajorVersion.cached=typeof m.getInternetExplorerMajorVersion.cached!="undefined"?m.getInternetExplorerMajorVersion.cached:function(){var a=3,b=d.createElement("div"),c=b.getElementsByTagName("i");while((b.innerHTML="<!--[if gt IE "+ ++a+"]><i></i><![endif]-->")&&c[0]);return a>4?a:!1}();return a},m.isInternetExplorer=function(){var a=m.isInternetExplorer.cached=typeof m.isInternetExplorer.cached!="undefined"?m.isInternetExplorer.cached:Boolean(m.getInternetExplorerMajorVersion());return a},m.emulated={pushState:!Boolean(a.history&&a.history.pushState&&a.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(e.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(e.userAgent)),hashChange:Boolean(!("onhashchange"in a||"onhashchange"in d)||m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<8)},m.enabled=!m.emulated.pushState,m.bugs={setHash:Boolean(!m.emulated.pushState&&e.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),safariPoll:Boolean(!m.emulated.pushState&&e.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),ieDoubleCheck:Boolean(m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<7)},m.isEmptyObject=function(a){for(var b in a)return!1;return!0},m.cloneObject=function(a){var b,c;return a?(b=k.stringify(a),c=k.parse(b)):c={},c},m.getRootUrl=function(){var a=d.location.protocol+"//"+(d.location.hostname||d.location.host);if(d.location.port||!1)a+=":"+d.location.port;return a+="/",a},m.getBaseHref=function(){var a=d.getElementsByTagName("base"),b=null,c="";return a.length===1&&(b=a[0],c=b.href.replace(/[^\/]+$/,"")),c=c.replace(/\/+$/,""),c&&(c+="/"),c},m.getBaseUrl=function(){var a=m.getBaseHref()||m.getBasePageUrl()||m.getRootUrl();return a},m.getPageUrl=function(){var a=m.getState(!1,!1),b=(a||{}).url||d.location.href,c;return c=b.replace(/\/+$/,"").replace(/[^\/]+$/,function(a,b,c){return/\./.test(a)?a:a+"/"}),c},m.getBasePageUrl=function(){var a=d.location.href.replace(/[#\?].*/,"").replace(/[^\/]+$/,function(a,b,c){return/[^\/]$/.test(a)?"":a}).replace(/\/+$/,"")+"/";return a},m.getFullUrl=function(a,b){var c=a,d=a.substring(0,1);return b=typeof b=="undefined"?!0:b,/[a-z]+\:\/\//.test(a)||(d==="/"?c=m.getRootUrl()+a.replace(/^\/+/,""):d==="#"?c=m.getPageUrl().replace(/#.*/,"")+a:d==="?"?c=m.getPageUrl().replace(/[\?#].*/,"")+a:b?c=m.getBaseUrl()+a.replace(/^(\.\/)+/,""):c=m.getBasePageUrl()+a.replace(/^(\.\/)+/,"")),c.replace(/\#$/,"")},m.getShortUrl=function(a){var b=a,c=m.getBaseUrl(),d=m.getRootUrl();return m.emulated.pushState&&(b=b.replace(c,"")),b=b.replace(d,"/"),m.isTraditionalAnchor(b)&&(b="./"+b),b=b.replace(/^(\.\/)+/g,"./").replace(/\#$/,""),b},m.store={},m.idToState=m.idToState||{},m.stateToId=m.stateToId||{},m.urlToId=m.urlToId||{},m.storedStates=m.storedStates||[],m.savedStates=m.savedStates||[],m.normalizeStore=function(){m.store.idToState=m.store.idToState||{},m.store.urlToId=m.store.urlToId||{},m.store.stateToId=m.store.stateToId||{}},m.getState=function(a,b){typeof a=="undefined"&&(a=!0),typeof b=="undefined"&&(b=!0);var c=m.getLastSavedState();return!c&&b&&(c=m.createStateObject()),a&&(c=m.cloneObject(c),c.url=c.cleanUrl||c.url),c},m.getIdByState=function(a){var b=m.extractId(a.url),c;if(!b){c=m.getStateString(a);if(typeof m.stateToId[c]!="undefined")b=m.stateToId[c];else if(typeof m.store.stateToId[c]!="undefined")b=m.store.stateToId[c];else{for(;;){b=(new Date).getTime()+String(Math.random()).replace(/\D/g,"");if(typeof m.idToState[b]=="undefined"&&typeof m.store.idToState[b]=="undefined")break}m.stateToId[c]=b,m.idToState[b]=a}}return b},m.normalizeState=function(a){var b,c;if(!a||typeof a!="object")a={};if(typeof a.normalized!="undefined")return a;if(!a.data||typeof a.data!="object")a.data={};b={},b.normalized=!0,b.title=a.title||"",b.url=m.getFullUrl(m.unescapeString(a.url||d.location.href)),b.hash=m.getShortUrl(b.url),b.data=m.cloneObject(a.data),b.id=m.getIdByState(b),b.cleanUrl=b.url.replace(/\??\&_suid.*/,""),b.url=b.cleanUrl,c=!m.isEmptyObject(b.data);if(b.title||c)b.hash=m.getShortUrl(b.url).replace(/\??\&_suid.*/,""),/\?/.test(b.hash)||(b.hash+="?"),b.hash+="&_suid="+b.id;return b.hashedUrl=m.getFullUrl(b.hash),(m.emulated.pushState||m.bugs.safariPoll)&&m.hasUrlDuplicate(b)&&(b.url=b.hashedUrl),b},m.createStateObject=function(a,b,c){var d={data:a,title:b,url:c};return d=m.normalizeState(d),d},m.getStateById=function(a){a=String(a);var c=m.idToState[a]||m.store.idToState[a]||b;return c},m.getStateString=function(a){var b,c,d;return b=m.normalizeState(a),c={data:b.data,title:a.title,url:a.url},d=k.stringify(c),d},m.getStateId=function(a){var b,c;return b=m.normalizeState(a),c=b.id,c},m.getHashByState=function(a){var b,c;return b=m.normalizeState(a),c=b.hash,c},m.extractId=function(a){var b,c,d;return c=/(.*)\&_suid=([0-9]+)$/.exec(a),d=c?c[1]||a:a,b=c?String(c[2]||""):"",b||!1},m.isTraditionalAnchor=function(a){var b=!/[\/\?\.]/.test(a);return b},m.extractState=function(a,b){var c=null,d,e;return b=b||!1,d=m.extractId(a),d&&(c=m.getStateById(d)),c||(e=m.getFullUrl(a),d=m.getIdByUrl(e)||!1,d&&(c=m.getStateById(d)),!c&&b&&!m.isTraditionalAnchor(a)&&(c=m.createStateObject(null,null,e))),c},m.getIdByUrl=function(a){var c=m.urlToId[a]||m.store.urlToId[a]||b;return c},m.getLastSavedState=function(){return m.savedStates[m.savedStates.length-1]||b},m.getLastStoredState=function(){return m.storedStates[m.storedStates.length-1]||b},m.hasUrlDuplicate=function(a){var b=!1,c;return c=m.extractState(a.url),b=c&&c.id!==a.id,b},m.storeState=function(a){return m.urlToId[a.url]=a.id,m.storedStates.push(m.cloneObject(a)),a},m.isLastSavedState=function(a){var b=!1,c,d,e;return m.savedStates.length&&(c=a.id,d=m.getLastSavedState(),e=d.id,b=c===e),b},m.saveState=function(a){return m.isLastSavedState(a)?!1:(m.savedStates.push(m.cloneObject(a)),!0)},m.getStateByIndex=function(a){var b=null;return typeof a=="undefined"?b=m.savedStates[m.savedStates.length-1]:a<0?b=m.savedStates[m.savedStates.length+a]:b=m.savedStates[a],b},m.getHash=function(){var a=m.unescapeHash(d.location.hash);return a},m.unescapeString=function(b){var c=b,d;for(;;){d=a.unescape(c);if(d===c)break;c=d}return c},m.unescapeHash=function(a){var b=m.normalizeHash(a);return b=m.unescapeString(b),b},m.normalizeHash=function(a){var b=a.replace(/[^#]*#/,"").replace(/#.*/,"");return b},m.setHash=function(a,b){var c,e,f;return b!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.setHash,args:arguments,queue:b}),!1):(c=m.escapeHash(a),m.busy(!0),e=m.extractState(a,!0),e&&!m.emulated.pushState?m.pushState(e.data,e.title,e.url,!1):d.location.hash!==c&&(m.bugs.setHash?(f=m.getPageUrl(),m.pushState(null,null,f+"#"+c,!1)):d.location.hash=c),m)},m.escapeHash=function(b){var c=m.normalizeHash(b);return c=a.escape(c),m.bugs.hashEscape||(c=c.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),c},m.getHashByUrl=function(a){var b=String(a).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return b=m.unescapeHash(b),b},m.setTitle=function(a){var b=a.title,c;b||(c=m.getStateByIndex(0),c&&c.url===a.url&&(b=c.title||m.options.initialTitle));try{d.getElementsByTagName("title")[0].innerHTML=b.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(e){}return d.title=b,m},m.queues=[],m.busy=function(a){typeof a!="undefined"?m.busy.flag=a:typeof m.busy.flag=="undefined"&&(m.busy.flag=!1);if(!m.busy.flag){h(m.busy.timeout);var b=function(){var a,c,d;if(m.busy.flag)return;for(a=m.queues.length-1;a>=0;--a){c=m.queues[a];if(c.length===0)continue;d=c.shift(),m.fireQueueItem(d),m.busy.timeout=g(b,m.options.busyDelay)}};m.busy.timeout=g(b,m.options.busyDelay)}return m.busy.flag},m.busy.flag=!1,m.fireQueueItem=function(a){return a.callback.apply(a.scope||m,a.args||[])},m.pushQueue=function(a){return m.queues[a.queue||0]=m.queues[a.queue||0]||[],m.queues[a.queue||0].push(a),m},m.queue=function(a,b){return typeof a=="function"&&(a={callback:a}),typeof b!="undefined"&&(a.queue=b),m.busy()?m.pushQueue(a):m.fireQueueItem(a),m},m.clearQueue=function(){return m.busy.flag=!1,m.queues=[],m},m.stateChanged=!1,m.doubleChecker=!1,m.doubleCheckComplete=function(){return m.stateChanged=!0,m.doubleCheckClear(),m},m.doubleCheckClear=function(){return m.doubleChecker&&(h(m.doubleChecker),m.doubleChecker=!1),m},m.doubleCheck=function(a){return m.stateChanged=!1,m.doubleCheckClear(),m.bugs.ieDoubleCheck&&(m.doubleChecker=g(function(){return m.doubleCheckClear(),m.stateChanged||a(),!0},m.options.doubleCheckInterval)),m},m.safariStatePoll=function(){var b=m.extractState(d.location.href),c;if(!m.isLastSavedState(b))c=b;else return;return c||(c=m.createStateObject()),m.Adapter.trigger(a,"popstate"),m},m.back=function(a){return a!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.back,args:arguments,queue:a}),!1):(m.busy(!0),m.doubleCheck(function(){m.back(!1)}),n.go(-1),!0)},m.forward=function(a){return a!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.forward,args:arguments,queue:a}),!1):(m.busy(!0),m.doubleCheck(function(){m.forward(!1)}),n.go(1),!0)},m.go=function(a,b){var c;if(a>0)for(c=1;c<=a;++c)m.forward(b);else{if(!(a<0))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(c=-1;c>=a;--c)m.back(b)}return m};if(m.emulated.pushState){var o=function(){};m.pushState=m.pushState||o,m.replaceState=m.replaceState||o}else m.onPopState=function(b,c){var e=!1,f=!1,g,h;return m.doubleCheckComplete(),g=m.getHash(),g?(h=m.extractState(g||d.location.href,!0),h?m.replaceState(h.data,h.title,h.url,!1):(m.Adapter.trigger(a,"anchorchange"),m.busy(!1)),m.expectedStateId=!1,!1):(e=m.Adapter.extractEventData("state",b,c)||!1,e?f=m.getStateById(e):m.expectedStateId?f=m.getStateById(m.expectedStateId):f=m.extractState(d.location.href),f||(f=m.createStateObject(null,null,d.location.href)),m.expectedStateId=!1,m.isLastSavedState(f)?(m.busy(!1),!1):(m.storeState(f),m.saveState(f),m.setTitle(f),m.Adapter.trigger(a,"statechange"),m.busy(!1),!0))},m.Adapter.bind(a,"popstate",m.onPopState),m.pushState=function(b,c,d,e){if(m.getHashByUrl(d)&&m.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(e!==!1&&m.busy())return m.pushQueue({scope:m,callback:m.pushState,args:arguments,queue:e}),!1;m.busy(!0);var f=m.createStateObject(b,c,d);return m.isLastSavedState(f)?m.busy(!1):(m.storeState(f),m.expectedStateId=f.id,n.pushState(f.id,f.title,f.url),m.Adapter.trigger(a,"popstate")),!0},m.replaceState=function(b,c,d,e){if(m.getHashByUrl(d)&&m.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(e!==!1&&m.busy())return m.pushQueue({scope:m,callback:m.replaceState,args:arguments,queue:e}),!1;m.busy(!0);var f=m.createStateObject(b,c,d);return m.isLastSavedState(f)?m.busy(!1):(m.storeState(f),m.expectedStateId=f.id,n.replaceState(f.id,f.title,f.url),m.Adapter.trigger(a,"popstate")),!0};if(f){try{m.store=k.parse(f.getItem("History.store"))||{}}catch(p){m.store={}}m.normalizeStore()}else m.store={},m.normalizeStore();m.Adapter.bind(a,"beforeunload",m.clearAllIntervals),m.Adapter.bind(a,"unload",m.clearAllIntervals),m.saveState(m.storeState(m.extractState(d.location.href,!0))),f&&(m.onUnload=function(){var a,b;try{a=k.parse(f.getItem("History.store"))||{}}catch(c){a={}}a.idToState=a.idToState||{},a.urlToId=a.urlToId||{},a.stateToId=a.stateToId||{};for(b in m.idToState){if(!m.idToState.hasOwnProperty(b))continue;a.idToState[b]=m.idToState[b]}for(b in m.urlToId){if(!m.urlToId.hasOwnProperty(b))continue;a.urlToId[b]=m.urlToId[b]}for(b in m.stateToId){if(!m.stateToId.hasOwnProperty(b))continue;a.stateToId[b]=m.stateToId[b]}m.store=a,m.normalizeStore(),f.setItem("History.store",k.stringify(a))},m.intervalList.push(i(m.onUnload,m.options.storeInterval)),m.Adapter.bind(a,"beforeunload",m.onUnload),m.Adapter.bind(a,"unload",m.onUnload));if(!m.emulated.pushState){m.bugs.safariPoll&&m.intervalList.push(i(m.safariStatePoll,m.options.safariPollInterval));if(e.vendor==="Apple Computer, Inc."||(e.appCodeName||"")==="Mozilla")m.Adapter.bind(a,"hashchange",function(){m.Adapter.trigger(a,"popstate")}),m.getHash()&&m.Adapter.onDomLoad(function(){m.Adapter.trigger(a,"hashchange")})}},m.init()}(window)
/* End */
;
; /* Start:"a:4:{s:4:"full";s:75:"/bitrix/templates/aspro_optimus/js/jquery.flexslider.min.js?158980555322345";s:6:"source";s:55:"/bitrix/templates/aspro_optimus/js/jquery.flexslider.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(e){e.flexslider=function(t,a){var n=e(t);n.vars=e.extend({},e.flexslider.defaults,a);var i,s=n.vars.namespace,r=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,o=("ontouchstart"in window||r||window.DocumentTouch&&document instanceof DocumentTouch)&&n.vars.touch,l="click touchend MSPointerUp keyup",c="",d="vertical"===n.vars.direction,u=n.vars.reverse,v=n.vars.itemWidth>0,p="fade"===n.vars.animation,m=""!==n.vars.asNavFor,f={},g=!0;e.data(t,"flexslider",n),f={init:function(){n.animating=!1,n.currentSlide=parseInt(n.vars.startAt?n.vars.startAt:0,10),isNaN(n.currentSlide)&&(n.currentSlide=0),n.animatingTo=n.currentSlide,n.atEnd=0===n.currentSlide||n.currentSlide===n.last,n.containerSelector=n.vars.selector.substr(0,n.vars.selector.search(" ")),n.slides=e(n.vars.selector,n),n.container=e(n.containerSelector,n),n.count=n.slides.length,n.syncExists=e(n.vars.sync).length>0,"slide"===n.vars.animation&&(n.vars.animation="swing"),n.prop=d?"top":"marginLeft",n.args={},n.manualPause=!1,n.stopped=!1,n.started=!1,n.startTimeout=null,n.transitions=!n.vars.video&&!p&&n.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var a in t)if(void 0!==e.style[t[a]])return n.pfx=t[a].replace("Perspective","").toLowerCase(),n.prop="-"+n.pfx+"-transform",!0;return!1}(),n.ensureAnimationEnd="",""!==n.vars.controlsContainer&&(n.controlsContainer=e(n.vars.controlsContainer).length>0&&e(n.vars.controlsContainer)),""!==n.vars.manualControls&&(n.manualControls=e(n.vars.manualControls).length>0&&e(n.vars.manualControls)),""!==n.vars.customDirectionNav&&(n.customDirectionNav=2===e(n.vars.customDirectionNav).length&&e(n.vars.customDirectionNav)),n.vars.randomize&&(n.slides.sort(function(){return Math.round(Math.random())-.5}),n.container.empty().append(n.slides)),n.doMath(),n.setup("init"),n.vars.controlNav&&f.controlNav.setup(),n.vars.directionNav&&f.directionNav.setup(),n.vars.keyboard&&(1===e(n.containerSelector).length||n.vars.multipleKeyboard)&&e(document).bind("keyup",function(e){var t=e.keyCode;if(!n.animating&&(39===t||37===t)){var a=39===t?n.getTarget("next"):37===t?n.getTarget("prev"):!1;n.flexAnimate(a,n.vars.pauseOnAction)}}),n.vars.mousewheel&&n.bind("mousewheel",function(e,t,a,i){e.preventDefault();var s=0>t?n.getTarget("next"):n.getTarget("prev");n.flexAnimate(s,n.vars.pauseOnAction)}),n.vars.pausePlay&&f.pausePlay.setup(),n.vars.slideshow&&n.vars.pauseInvisible&&f.pauseInvisible.init(),n.vars.slideshow&&(n.vars.pauseOnHover&&n.hover(function(){n.manualPlay||n.manualPause||n.pause()},function(){n.manualPause||n.manualPlay||n.stopped||n.play()}),n.vars.pauseInvisible&&f.pauseInvisible.isHidden()||(n.vars.initDelay>0?n.startTimeout=setTimeout(n.play,n.vars.initDelay):n.play())),m&&f.asNav.setup(),o&&n.vars.touch&&f.touch(),(!p||p&&n.vars.smoothHeight)&&e(window).bind("resize orientationchange focus",f.resize),n.find("img").attr("draggable","false"),setTimeout(function(){n.vars.start(n)},200)},asNav:{setup:function(){n.asNav=!0,n.animatingTo=Math.floor(n.currentSlide/n.move),n.currentItem=n.currentSlide,n.slides.removeClass(s+"active-slide").eq(n.currentItem).addClass(s+"active-slide"),r?(t._slider=n,n.slides.each(function(){var t=this;t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),t.addEventListener("MSGestureTap",function(t){t.preventDefault();var a=e(this),i=a.index();e(n.vars.asNavFor).data("flexslider").animating||a.hasClass("active")||(n.direction=n.currentItem<i?"next":"prev",n.flexAnimate(i,n.vars.pauseOnAction,!1,!0,!0))})})):n.slides.on(l,function(t){t.preventDefault();var a=e(this),i=a.index(),r=a.offset().left-e(n).scrollLeft();0>=r&&a.hasClass(s+"active-slide")?n.flexAnimate(n.getTarget("prev"),!0):e(n.vars.asNavFor).data("flexslider").animating||a.hasClass(s+"active-slide")||(n.direction=n.currentItem<i?"next":"prev",n.flexAnimate(i,n.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){n.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var t,a,i="thumbnails"===n.vars.controlNav?"control-thumbs":"control-paging",r=1;if(n.controlNavScaffold=e('<ol class="'+s+"control-nav "+s+i+'"></ol>'),n.pagingCount>1)for(var o=0;o<n.pagingCount;o++){if(a=n.slides.eq(o),t="thumbnails"===n.vars.controlNav?'<img src="'+a.attr("data-thumb")+'"/>':"<a>"+r+"</a>","thumbnails"===n.vars.controlNav&&!0===n.vars.thumbCaptions){var d=a.attr("data-thumbcaption");""!==d&&void 0!==d&&(t+='<span class="'+s+'caption">'+d+"</span>")}n.controlNavScaffold.append("<li>"+t+"</li>"),r++}n.controlsContainer?e(n.controlsContainer).append(n.controlNavScaffold):n.append(n.controlNavScaffold),f.controlNav.set(),f.controlNav.active(),n.controlNavScaffold.delegate("a, img",l,function(t){if(t.preventDefault(),""===c||c===t.type){var a=e(this),i=n.controlNav.index(a);a.hasClass(s+"active")||(n.direction=i>n.currentSlide?"next":"prev",n.flexAnimate(i,n.vars.pauseOnAction))}""===c&&(c=t.type),f.setToClearWatchedEvent()})},setupManual:function(){n.controlNav=n.manualControls,f.controlNav.active(),n.controlNav.bind(l,function(t){if(t.preventDefault(),""===c||c===t.type){var a=e(this),i=n.controlNav.index(a);a.hasClass(s+"active")||(i>n.currentSlide?n.direction="next":n.direction="prev",n.flexAnimate(i,n.vars.pauseOnAction))}""===c&&(c=t.type),f.setToClearWatchedEvent()})},set:function(){var t="thumbnails"===n.vars.controlNav?"img":"a";n.controlNav=e("."+s+"control-nav li "+t,n.controlsContainer?n.controlsContainer:n)},active:function(){n.controlNav.removeClass(s+"active").eq(n.animatingTo).addClass(s+"active")},update:function(t,a){n.pagingCount>1&&"add"===t?n.controlNavScaffold.append(e("<li><a>"+n.count+"</a></li>")):1===n.pagingCount?n.controlNavScaffold.find("li").remove():n.controlNav.eq(a).closest("li").remove(),f.controlNav.set(),n.pagingCount>1&&n.pagingCount!==n.controlNav.length?n.update(a,t):f.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+s+'direction-nav"><li class="'+s+'nav-prev"><a class="'+s+'prev" href="#">'+n.vars.prevText+'</a></li><li class="'+s+'nav-next"><a class="'+s+'next" href="#">'+n.vars.nextText+"</a></li></ul>");n.customDirectionNav?n.directionNav=n.customDirectionNav:n.controlsContainer?(e(n.controlsContainer).append(t),n.directionNav=e("."+s+"direction-nav li a",n.controlsContainer)):(n.append(t),n.directionNav=e("."+s+"direction-nav li a",n)),f.directionNav.update(),n.directionNav.bind(l,function(t){t.preventDefault();var a;(""===c||c===t.type)&&(a=e(this).hasClass(s+"next")?n.getTarget("next"):n.getTarget("prev"),n.flexAnimate(a,n.vars.pauseOnAction)),""===c&&(c=t.type),f.setToClearWatchedEvent()})},update:function(){var e=s+"disabled";1===n.pagingCount?(n.directionNav.addClass(e).attr("tabindex","-1"),n.directionNav.parent().addClass(e)):n.vars.animationLoop?(n.directionNav.removeClass(e).removeAttr("tabindex"),n.directionNav.parent().removeClass(e)):0===n.animatingTo?(n.directionNav.removeClass(e).filter("."+s+"prev").addClass(e).attr("tabindex","-1"),n.directionNav.parent().removeClass(e),n.directionNav.filter("."+s+"prev").parent().addClass(e)):n.animatingTo===n.last?(n.directionNav.removeClass(e).filter("."+s+"next").addClass(e).attr("tabindex","-1"),n.directionNav.parent().removeClass(e),n.directionNav.filter("."+s+"next").parent().addClass(e)):(n.directionNav.removeClass(e).removeAttr("tabindex"),n.directionNav.parent().removeClass(e))}},pausePlay:{setup:function(){var t=e('<div class="'+s+'pauseplay"><a></a></div>');n.controlsContainer?(n.controlsContainer.append(t),n.pausePlay=e("."+s+"pauseplay a",n.controlsContainer)):(n.append(t),n.pausePlay=e("."+s+"pauseplay a",n)),f.pausePlay.update(n.vars.slideshow?s+"pause":s+"play"),n.pausePlay.bind(l,function(t){t.preventDefault(),(""===c||c===t.type)&&(e(this).hasClass(s+"pause")?(n.manualPause=!0,n.manualPlay=!1,n.pause()):(n.manualPause=!1,n.manualPlay=!0,n.play())),""===c&&(c=t.type),f.setToClearWatchedEvent()})},update:function(e){"play"===e?n.pausePlay.removeClass(s+"pause").addClass(s+"play").html(n.vars.playText):n.pausePlay.removeClass(s+"play").addClass(s+"pause").html(n.vars.pauseText)}},touch:function(){function e(e){e.stopPropagation(),n.animating?e.preventDefault():(n.pause(),t._gesture.addPointer(e.pointerId),C=0,c=d?n.h:n.w,f=Number(new Date),l=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c)}function a(e){e.stopPropagation();var a=e.target._slider;if(a){var n=-e.translationX,i=-e.translationY;return C+=d?i:n,m=C,y=d?Math.abs(C)<Math.abs(-n):Math.abs(C)<Math.abs(-i),e.detail===e.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){t._gesture.stop()}):void((!y||Number(new Date)-f>500)&&(e.preventDefault(),!p&&a.transitions&&(a.vars.animationLoop||(m=C/(0===a.currentSlide&&0>C||a.currentSlide===a.last&&C>0?Math.abs(C)/c+2:1)),a.setProps(l+m,"setTouch"))))}}function i(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!y&&null!==m){var a=u?-m:m,n=a>0?t.getTarget("next"):t.getTarget("prev");t.canAdvance(n)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?t.flexAnimate(n,t.vars.pauseOnAction):p||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}s=null,o=null,m=null,l=null,C=0}}var s,o,l,c,m,f,g,h,S,y=!1,x=0,b=0,C=0;r?(t.style.msTouchAction="none",t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",e,!1),t._slider=n,t.addEventListener("MSGestureChange",a,!1),t.addEventListener("MSGestureEnd",i,!1)):(g=function(e){n.animating?e.preventDefault():(window.navigator.msPointerEnabled||1===e.touches.length)&&(n.pause(),c=d?n.h:n.w,f=Number(new Date),x=e.touches[0].pageX,b=e.touches[0].pageY,l=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c,s=d?b:x,o=d?x:b,t.addEventListener("touchmove",h,!1),t.addEventListener("touchend",S,!1))},h=function(e){x=e.touches[0].pageX,b=e.touches[0].pageY,m=d?s-b:s-x,y=d?Math.abs(m)<Math.abs(x-o):Math.abs(m)<Math.abs(b-o);var t=500;(!y||Number(new Date)-f>t)&&(e.preventDefault(),!p&&n.transitions&&(n.vars.animationLoop||(m/=0===n.currentSlide&&0>m||n.currentSlide===n.last&&m>0?Math.abs(m)/c+2:1),n.setProps(l+m,"setTouch")))},S=function(e){if(t.removeEventListener("touchmove",h,!1),n.animatingTo===n.currentSlide&&!y&&null!==m){var a=u?-m:m,i=a>0?n.getTarget("next"):n.getTarget("prev");n.canAdvance(i)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?n.flexAnimate(i,n.vars.pauseOnAction):p||n.flexAnimate(n.currentSlide,n.vars.pauseOnAction,!0)}t.removeEventListener("touchend",S,!1),s=null,o=null,m=null,l=null},t.addEventListener("touchstart",g,!1))},resize:function(){!n.animating&&n.is(":visible")&&(v||n.doMath(),p?f.smoothHeight():v?(n.slides.width(n.computedW),n.update(n.pagingCount),n.setProps()):d?(n.viewport.height(n.h),n.setProps(n.h,"setTotal")):(n.vars.smoothHeight&&f.smoothHeight(),n.newSlides.width(n.computedW),n.setProps(n.computedW,"setTotal")))},smoothHeight:function(e){if(!d||p){var t=p?n:n.viewport;e?t.animate({height:n.slides.eq(n.animatingTo).height()},e):t.height(n.slides.eq(n.animatingTo).height())}},sync:function(t){var a=e(n.vars.sync).data("flexslider"),i=n.animatingTo;switch(t){case"animate":a.flexAnimate(i,n.vars.pauseOnAction,!1,!0);break;case"play":a.playing||a.asNav||a.play();break;case"pause":a.pause()}},uniqueID:function(t){return t.filter("[id]").add(t.find("[id]")).each(function(){var t=e(this);t.attr("id",t.attr("id")+"_clone")}),t},pauseInvisible:{visProp:null,init:function(){var e=f.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){f.pauseInvisible.isHidden()?n.startTimeout?clearTimeout(n.startTimeout):n.pause():n.started?n.play():n.vars.initDelay>0?setTimeout(n.play,n.vars.initDelay):n.play()})}},isHidden:function(){var e=f.pauseInvisible.getHiddenProp();return e?document[e]:!1},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(i),i=setTimeout(function(){c=""},3e3)}},n.flexAnimate=function(t,a,i,r,l){if(n.vars.animationLoop||t===n.currentSlide||(n.direction=t>n.currentSlide?"next":"prev"),m&&1===n.pagingCount&&(n.direction=n.currentItem<t?"next":"prev"),!n.animating&&(n.canAdvance(t,l)||i)&&n.is(":visible")){if(m&&r){var c=e(n.vars.asNavFor).data("flexslider");if(n.atEnd=0===t||t===n.count-1,c.flexAnimate(t,!0,!1,!0,l),n.direction=n.currentItem<t?"next":"prev",c.direction=n.direction,Math.ceil((t+1)/n.visible)-1===n.currentSlide||0===t)return n.currentItem=t,n.slides.removeClass(s+"active-slide").eq(t).addClass(s+"active-slide"),!1;n.currentItem=t,n.slides.removeClass(s+"active-slide").eq(t).addClass(s+"active-slide"),t=Math.floor(t/n.visible)}if(n.animating=!0,n.animatingTo=t,a&&n.pause(),n.vars.before(n),n.syncExists&&!l&&f.sync("animate"),n.vars.controlNav&&f.controlNav.active(),v||n.slides.removeClass(s+"active-slide").eq(t).addClass(s+"active-slide"),n.atEnd=0===t||t===n.last,n.vars.directionNav&&f.directionNav.update(),t===n.last&&(n.vars.end(n),n.vars.animationLoop||n.pause()),p)o?(n.slides.eq(n.currentSlide).css({opacity:0,zIndex:1}),n.slides.eq(t).css({opacity:1,zIndex:2}),n.wrapup(y)):(n.slides.eq(n.currentSlide).css({zIndex:1}).animate({opacity:0},n.vars.animationSpeed,n.vars.easing),n.slides.eq(t).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing,n.wrapup));else{var g,h,S,y=d?n.slides.filter(":first").height():n.computedW;v?(g=n.vars.itemMargin,S=(n.itemW+g)*n.move*n.animatingTo,h=S>n.limit&&1!==n.visible?n.limit:S):h=0===n.currentSlide&&t===n.count-1&&n.vars.animationLoop&&"next"!==n.direction?u?(n.count+n.cloneOffset)*y:0:n.currentSlide===n.last&&0===t&&n.vars.animationLoop&&"prev"!==n.direction?u?0:(n.count+1)*y:u?(n.count-1-t+n.cloneOffset)*y:(t+n.cloneOffset)*y,n.setProps(h,"",n.vars.animationSpeed),n.transitions?(n.vars.animationLoop&&n.atEnd||(n.animating=!1,n.currentSlide=n.animatingTo),n.container.unbind("webkitTransitionEnd transitionend"),n.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(n.ensureAnimationEnd),n.wrapup(y)}),clearTimeout(n.ensureAnimationEnd),n.ensureAnimationEnd=setTimeout(function(){n.wrapup(y)},n.vars.animationSpeed+100)):n.container.animate(n.args,n.vars.animationSpeed,n.vars.easing,function(){n.wrapup(y)})}n.vars.smoothHeight&&f.smoothHeight(n.vars.animationSpeed)}},n.wrapup=function(e){p||v||(0===n.currentSlide&&n.animatingTo===n.last&&n.vars.animationLoop?n.setProps(e,"jumpEnd"):n.currentSlide===n.last&&0===n.animatingTo&&n.vars.animationLoop&&n.setProps(e,"jumpStart")),n.animating=!1,n.currentSlide=n.animatingTo,n.vars.after(n)},n.animateSlides=function(){!n.animating&&g&&n.flexAnimate(n.getTarget("next"))},n.pause=function(){clearInterval(n.animatedSlides),n.animatedSlides=null,n.playing=!1,n.vars.pausePlay&&f.pausePlay.update("play"),n.syncExists&&f.sync("pause")},n.play=function(){n.playing&&clearInterval(n.animatedSlides),n.animatedSlides=n.animatedSlides||setInterval(n.animateSlides,n.vars.slideshowSpeed),n.started=n.playing=!0,n.vars.pausePlay&&f.pausePlay.update("pause"),n.syncExists&&f.sync("play")},n.stop=function(){n.pause(),n.stopped=!0},n.canAdvance=function(e,t){var a=m?n.pagingCount-1:n.last;return t?!0:m&&n.currentItem===n.count-1&&0===e&&"prev"===n.direction?!0:m&&0===n.currentItem&&e===n.pagingCount-1&&"next"!==n.direction?!1:e!==n.currentSlide||m?n.vars.animationLoop?!0:n.atEnd&&0===n.currentSlide&&e===a&&"next"!==n.direction?!1:n.atEnd&&n.currentSlide===a&&0===e&&"next"===n.direction?!1:!0:!1},n.getTarget=function(e){return n.direction=e,"next"===e?n.currentSlide===n.last?0:n.currentSlide+1:0===n.currentSlide?n.last:n.currentSlide-1},n.setProps=function(e,t,a){var i=function(){var a=e?e:(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo,i=function(){if(v)return"setTouch"===t?e:u&&n.animatingTo===n.last?0:u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:n.animatingTo===n.last?n.limit:a;switch(t){case"setTotal":return u?(n.count-1-n.currentSlide+n.cloneOffset)*e:(n.currentSlide+n.cloneOffset)*e;case"setTouch":return u?e:e;case"jumpEnd":return u?e:n.count*e;case"jumpStart":return u?n.count*e:e;default:return e}}();return-1*i+"px"}();n.transitions&&(i=d?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)",a=void 0!==a?a/1e3+"s":"0s",n.container.css("-"+n.pfx+"-transition-duration",a),n.container.css("transition-duration",a)),n.args[n.prop]=i,(n.transitions||void 0===a)&&n.container.css(n.args),n.container.css("transform",i)},n.setup=function(t){if(p)n.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===t&&(o?n.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+n.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(n.currentSlide).css({opacity:1,zIndex:2}):0==n.vars.fadeFirstSlide?n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).css({opacity:1}):n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing)),n.vars.smoothHeight&&f.smoothHeight();else{var a,i;"init"===t&&(n.viewport=e('<div class="'+s+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(n).append(n.container),n.cloneCount=0,n.cloneOffset=0,u&&(i=e.makeArray(n.slides).reverse(),n.slides=e(i),n.container.empty().append(n.slides))),n.vars.animationLoop&&!v&&(n.cloneCount=2,n.cloneOffset=1,"init"!==t&&n.container.find(".clone").remove(),n.container.append(f.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(f.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),n.newSlides=e(n.vars.selector,n),a=u?n.count-1-n.currentSlide+n.cloneOffset:n.currentSlide+n.cloneOffset,d&&!v?(n.container.height(200*(n.count+n.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){n.newSlides.css({display:"block"}),n.doMath(),n.viewport.height(n.h),n.setProps(a*n.h,"init")},"init"===t?100:0)):(n.container.width(200*(n.count+n.cloneCount)+"%"),n.setProps(a*n.computedW,"init"),setTimeout(function(){n.doMath(),n.newSlides.css({width:n.computedW,"float":"left",display:"block"}),n.newSlides.css({opacity:1}),n.vars.smoothHeight&&f.smoothHeight()},"init"===t?100:0))}v||n.slides.removeClass(s+"active-slide").eq(n.currentSlide).addClass(s+"active-slide"),n.vars.init(n)},n.doMath=function(){var e=n.slides.first(),t=n.vars.itemMargin,a=n.vars.minItems,i=n.vars.maxItems;n.w=void 0===n.viewport?n.width():n.viewport.width(),n.h=e.height(),n.boxPadding=e.outerWidth()-e.width(),v?(n.itemT=n.vars.itemWidth+t,n.minW=a?a*n.itemT:n.w,n.maxW=i?i*n.itemT-t:n.w,n.itemW=n.minW>n.w?(n.w-t*(a-1))/a:n.maxW<n.w?(n.w-t*(i-1))/i:n.vars.itemWidth>n.w?n.w:n.vars.itemWidth,n.visible=Math.floor(n.w/n.itemW),n.move=n.vars.move>0&&n.vars.move<n.visible?n.vars.move:n.visible,n.pagingCount=Math.ceil((n.count-n.visible)/n.move+1),n.last=n.pagingCount-1,n.limit=1===n.pagingCount?0:n.vars.itemWidth>n.w?n.itemW*(n.count-1)+t*(n.count-1):(n.itemW+t)*n.count-n.w-t):(n.itemW=n.w,n.pagingCount=n.count,n.last=n.count-1),n.computedW=n.itemW-n.boxPadding},n.update=function(e,t){n.doMath(),v||(e<n.currentSlide?n.currentSlide+=1:e<=n.currentSlide&&0!==e&&(n.currentSlide-=1),n.animatingTo=n.currentSlide),n.vars.controlNav&&!n.manualControls&&("add"===t&&!v||n.pagingCount>n.controlNav.length?f.controlNav.update("add"):("remove"===t&&!v||n.pagingCount<n.controlNav.length)&&(v&&n.currentSlide>n.last&&(n.currentSlide-=1,n.animatingTo-=1),f.controlNav.update("remove",n.last))),n.vars.directionNav&&f.directionNav.update()},n.addSlide=function(t,a){var i=e(t);n.count+=1,n.last=n.count-1,d&&u?void 0!==a?n.slides.eq(n.count-a).after(i):n.container.prepend(i):void 0!==a?n.slides.eq(a).before(i):n.container.append(i),n.update(a,"add"),n.slides=e(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.added(n)},n.removeSlide=function(t){var a=isNaN(t)?n.slides.index(e(t)):t;n.count-=1,n.last=n.count-1,isNaN(t)?e(t,n.slides).remove():d&&u?n.slides.eq(n.last).remove():n.slides.eq(t).remove(),n.doMath(),n.update(a,"remove"),n.slides=e(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.removed(n)},f.init()},e(window).blur(function(e){focused=!1}).focus(function(e){focused=!0}),e.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},e.fn.flexslider=function(t){if(void 0===t&&(t={}),"object"==typeof t)return this.each(function(){var a=e(this),n=t.selector?t.selector:".slides > li",i=a.find(n);1===i.length&&t.allowOneSlide===!0||0===i.length?(i.fadeIn(400),t.start&&t.start(a)):void 0===a.data("flexslider")&&new e.flexslider(this,t)});var a=e(this).data("flexslider");switch(t){case"play":a.play();break;case"pause":a.pause();break;case"stop":a.stop();break;case"next":a.flexAnimate(a.getTarget("next"),!0);break;case"prev":case"previous":a.flexAnimate(a.getTarget("prev"),!0);break;default:"number"==typeof t&&a.flexAnimate(t,!0)}}}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:73:"/bitrix/templates/aspro_optimus/js/jquery.validate.min.js?158980555322257";s:6:"source";s:57:"/bitrix/templates/aspro_optimus/js/jquery.validate.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery Validation Plugin - v1.13.1 - 10/14/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.validateDelegate(":submit","click",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(b.target).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(b.target).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.submit(function(b){function d(){var d,e;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),e=c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),void 0!==e?e:!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c;return a(this[0]).is("form")?b=this.validate().form():(b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b})),b},removeAttrs:function(b){var c={},d=this;return a.each(b.split(/\s/),function(a,b){c[b]=d.attr(b),d.removeAttr(b)}),c},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){return!!a.trim(""+a(b).val())},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(a,b){(9!==b.which||""!==this.elementValue(a))&&(a.name in this.submitted||a===this.lastElement)&&this.element(a)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c=a.data(this[0].form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!this.is(e.ignore)&&e[d].call(c,this[0],b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']","focusin focusout keyup",b).validateDelegate("select, option, [type='radio'], [type='checkbox']","click",b),this.settings.invalidHandler&&a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c=this.clean(b),d=this.validationTargetFor(c),e=!0;return this.lastElement=d,void 0===d?delete this.invalid[c.name]:(this.prepareElement(d),this.currentElements=a(d),e=this.check(d)!==!1,e?delete this.invalid[d.name]:this.invalid[d.name]=!0),a(b).attr("aria-invalid",!e),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),e},showErrors:function(b){if(b){a.extend(this.errorMap,b),this.errorList=[];for(var c in b)this.errorList.push({message:b[c],element:this.findByName(c)[0]});this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function(){return!this.name&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in c||!b.objectLength(a(this).rules())?!1:(c[this.name]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([]),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d=a(b),e=b.type;return"radio"===e||"checkbox"===e?a("input[name='"+b.name+"']:checked").val():"number"===e&&"undefined"!=typeof b.validity?b.validity.badInput?!1:d.val():(c=d.val(),"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a];return void 0},defaultMessage:function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")},formatAndAdd:function(b,c){var d=this.defaultMessage(b,c.method),e=/\$?\{(\d+)\}/g;"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),this.errorList.push({message:d,element:b,method:c.method}),this.errorMap[b.name]=d,this.submitted[b.name]=d},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g=this.errorsFor(b),h=this.idOrName(b),i=a(b).attr("aria-describedby");g.length?(g.removeClass(this.settings.validClass).addClass(this.settings.errorClass),g.html(c)):(g=a("<"+this.settings.errorElement+">").attr("id",h+"-error").addClass(this.settings.errorClass).html(c||""),d=g,this.settings.wrapper&&(d=g.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b),g.is("label")?g.attr("for",h):0===g.parents("label[for='"+h+"']").length&&(f=g.attr("id").replace(/(:|\.|\[|\])/g,"\\$1"),i?i.match(new RegExp("\\b"+f+"\\b"))||(i+=" "+f):i=f,a(b).attr("aria-describedby",i),e=this.groups[b.name],e&&a.each(this.groups,function(b,c){c===e&&a("[name='"+b+"']",this.currentForm).attr("aria-describedby",g.attr("id"))}))),!c&&this.settings.success&&(g.text(""),"string"==typeof this.settings.success?g.addClass(this.settings.success):this.settings.success(g,b)),this.toShow=this.toShow.add(g)},errorsFor:function(b){var c=this.idOrName(b),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+d.replace(/\s+/g,", #")),this.errors().filter(e)},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+b+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),/min|max/.test(c)&&(null===g||/number|range|text/.test(g))&&(d=Number(d)),d||0===d?e[c]=d:g===c&&"range"!==g&&(e[c]=!0);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b);for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),void 0!==d&&(e[c]=d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:delete b[d]}}),a.each(b,function(d,e){b[d]=a.isFunction(e)?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:a.trim(b).length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},date:function(a,b){/*return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())*/ /*customized!!!*/ var check = false,re=new RegExp((typeof(VALIDATE_DATE_MASK)!=='undefined'?VALIDATE_DATE_MASK:'^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{4}$')),adata,gg,mm,aaaa,xdata;if(re.test(a)){adata=a.split('.');if(adata.length===1){adata=a.split('-');if(adata.length===1){adata=a.split(' ');if(adata.length===1){adata=a.split('/');if(adata.length===1){adata=a.split(':');}}}}gg=parseInt(adata[0],10);mm=parseInt(adata[1],10);aaaa=parseInt(adata[2],10);xdata=new Date(aaaa,mm-1,gg,12,0,0,0);if((xdata.getUTCFullYear()===aaaa)&&(xdata.getUTCMonth()===mm-1)&&(xdata.getUTCDate()===gg)){check = true;}else{check = false;}}else{check = false;}return this.optional(b)||check;},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c,d,e=0,f=0,g=!1;if(a=a.replace(/\D/g,""),a.length<13||a.length>19)return!1;for(c=a.length-1;c>=0;c--)d=a.charAt(c),f=parseInt(d,10),g&&(f*=2)>9&&(f-=9),e+=f,g=!g;return e%10===0},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||d>=e},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||c>=a},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d){if(this.optional(c))return"dependency-mismatch";var e,f,g=this.previousValue(c);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),g.originalMessage=this.settings.messages[c.name].remote,this.settings.messages[c.name].remote=g.message,d="string"==typeof d&&{url:d}||d,g.old===b?g.valid:(g.old=b,e=this,this.startRequest(c),f={},f[c.name]=b,a.ajax(a.extend(!0,{url:d,mode:"abort",port:"validate"+c.name,dataType:"json",data:f,context:e.currentForm,success:function(d){var f,h,i,j=d===!0||"true"===d;e.settings.messages[c.name].remote=g.originalMessage,j?(i=e.formSubmitted,e.prepareElement(c),e.formSubmitted=i,e.successList.push(c),delete e.invalid[c.name],e.showErrors()):(f={},h=d||e.defaultMessage(c,"remote"),f[c.name]=g.message=a.isFunction(h)?h(b):h,e.invalid[c.name]=!0,e.showErrors(f)),g.valid=j,e.stopRequest(c,j)}},d)),"pending")}}}),a.format=function(){throw"$.format has been deprecated. Please use $.validator.format instead."};var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a.extend(a.fn,{validateDelegate:function(b,c,d){return this.bind(c,function(c){var e=a(c.target);return e.is(b)?d.apply(e,arguments):void 0})}})});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:81:"/bitrix/templates/aspro_optimus/js/jquery.inputmask.bundle.min.js?158980555370933";s:6:"source";s:65:"/bitrix/templates/aspro_optimus/js/jquery.inputmask.bundle.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(e){function t(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var i={};t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,i){"use strict";var n,a,r;"function"==typeof Symbol&&Symbol.iterator,a=[i(2)],void 0!==(r="function"==typeof(n=function(e){return e})?n.apply(t,a):n)&&(e.exports=r)},function(e,t,i){"use strict";var n,a,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};a=[i(0),i(5),i(6)],void 0!==(r="function"==typeof(n=function(e,t,i,n){function a(t,i,o){if(!(this instanceof a))return new a(t,i,o);this.el=n,this.events={},this.maskset=n,this.refreshValue=!1,!0!==o&&(e.isPlainObject(t)?i=t:(i=i||{},t&&(i.alias=t)),this.opts=e.extend(!0,{},this.defaults,i),this.noMasksCache=i&&i.definitions!==n,this.userOptions=i||{},this.isRTL=this.opts.numericInput,r(this.opts.alias,i,this.opts))}function r(t,i,o){var s=a.prototype.aliases[t];return s?(s.alias&&r(s.alias,n,o),e.extend(!0,o,s),e.extend(!0,o,i),!0):(null===o.mask&&(o.mask=t),!1)}function s(t,i){function r(t,r,o){var s=!1;if(null!==t&&""!==t||((s=null!==o.regex)?t=(t=o.regex).replace(/^(\^)(.*)(\$)$/,"$2"):(s=!0,t=".*")),1===t.length&&!1===o.greedy&&0!==o.repeat&&(o.placeholder=""),o.repeat>0||"*"===o.repeat||"+"===o.repeat){var l="*"===o.repeat?0:"+"===o.repeat?1:o.repeat;t=o.groupmarker[0]+t+o.groupmarker[1]+o.quantifiermarker[0]+l+","+o.repeat+o.quantifiermarker[1]}var u,c=s?"regex_"+o.regex:o.numericInput?t.split("").reverse().join(""):t;return a.prototype.masksCache[c]===n||!0===i?(u={mask:t,maskToken:a.prototype.analyseMask(t,s,o),validPositions:{},_buffer:n,buffer:n,tests:{},excludes:{},metadata:r,maskLength:n},!0!==i&&(a.prototype.masksCache[c]=u,u=e.extend(!0,{},a.prototype.masksCache[c]))):u=e.extend(!0,{},a.prototype.masksCache[c]),u}if(e.isFunction(t.mask)&&(t.mask=t.mask(t)),e.isArray(t.mask)){if(t.mask.length>1){if(null===t.keepStatic){t.keepStatic="auto";for(var o=0;o<t.mask.length;o++)if(t.mask[o].charAt(0)!==t.mask[0].charAt(0)){t.keepStatic=!0;break}}var s=t.groupmarker[0];return e.each(t.isRTL?t.mask.reverse():t.mask,function(i,a){s.length>1&&(s+=t.groupmarker[1]+t.alternatormarker+t.groupmarker[0]),a.mask===n||e.isFunction(a.mask)?s+=a:s+=a.mask}),r(s+=t.groupmarker[1],t.mask,t)}t.mask=t.mask.pop()}return t.mask&&t.mask.mask!==n&&!e.isFunction(t.mask.mask)?r(t.mask.mask,t.mask,t):r(t.mask,t.mask,t)}function l(e){var t=i.createElement("input"),n="on"+e,a=n in t;return a||(t.setAttribute(n,"return;"),a="function"==typeof t[n]),t=null,a}function u(r,s,c){function d(e,t,i){t=t||0;var a,r,o,s=[],l=0,u=v();do{!0===e&&h().validPositions[l]?(r=(o=h().validPositions[l]).match,a=o.locator.slice(),s.push(!0===i?o.input:!1===i?r.nativeDef:N(l,r))):(r=(o=P(l,a,l-1)).match,a=o.locator.slice(),(!1===c.jitMasking||l<u||"number"==typeof c.jitMasking&&isFinite(c.jitMasking)&&c.jitMasking>l)&&s.push(!1===i?r.nativeDef:N(l,r))),"auto"===c.keepStatic&&r.newBlockMarker&&null!==r.fn&&(c.keepStatic=l-1),l++}while(($===n||l<$)&&(null!==r.fn||""!==r.def)||t>l);return""===s[s.length-1]&&s.pop(),!1===i&&h().maskLength!==n||(h().maskLength=l-1),s}function h(){return s}function g(e){var t=h();t.buffer=n,!0!==e&&(t.validPositions={},t.p=0)}function v(e,t,i){var a=-1,r=-1,o=i||h().validPositions;e===n&&(e=-1);for(var s in o){var l=parseInt(s);o[l]&&(t||!0!==o[l].generatedInput)&&(l<=e&&(a=l),l>=e&&(r=l))}return-1!==a&&e-a>1||r<e?a:r}function k(t,i,a,r){var o,s=t,l=e.extend(!0,{},h().validPositions),u=!1;for(h().p=t,o=i-1;o>=s;o--)h().validPositions[o]!==n&&(!0!==a&&(!h().validPositions[o].match.optionality&&function(e){var t=h().validPositions[e];if(t!==n&&null===t.match.fn){var i=h().validPositions[e-1],a=h().validPositions[e+1];return i!==n&&a!==n}return!1}(o)||!1===c.canClearPosition(h(),o,v(n,!0),r,c))||delete h().validPositions[o]);for(g(!0),o=s+1;o<=v();){for(;h().validPositions[s]!==n;)s++;if(o<s&&(o=s+1),h().validPositions[o]===n&&j(o))o++;else{var p=P(o);!1===u&&l[s]&&l[s].match.def===p.match.def?(h().validPositions[s]=e.extend(!0,{},l[s]),h().validPositions[s].input=p.input,delete h().validPositions[o],o++):A(s,p.match.def)?!1!==_(s,p.input||N(o),!0)&&(delete h().validPositions[o],o++,u=!0):j(o)||(o++,s--),s++}}if(!0!==r)for(o=v(-1,!0);h().validPositions[o]&&!0===h().validPositions[o].generatedInput;)delete h().validPositions[o--];g(!0)}function y(e,t,i){for(var a,r=S(e=e>0?e-1:0),o=r.alternation!==n?r.locator[r.alternation].toString().split(","):[],s=0;s<t.length&&(!((a=t[s]).match&&(c.greedy&&!0!==a.match.optionalQuantifier||(!1===a.match.optionality||!1===a.match.newBlockMarker)&&!0!==a.match.optionalQuantifier)&&(r.alternation===n||r.alternation!==a.alternation||a.locator[r.alternation]!==n&&D(a.locator[r.alternation].toString().split(","),o)))||!0===i&&(null!==a.match.fn||/[0-9a-bA-Z]/.test(a.match.def)));s++);return a}function b(e){var t=e.locator[e.alternation];return"string"==typeof t&&t.length>0&&(t=t.split(",")[0]),t!==n?t.toString():""}function x(e,t){for(var i=(e.alternation!=n?e.mloc[b(e)]:e.locator).join("");i.length<t;)i+="0";return i}function P(e,t,i){return h().validPositions[e]||y(e,C(e,t?t.slice():t,i))}function S(e){return h().validPositions[e]?h().validPositions[e]:C(e)[0]}function A(e,t){for(var i=!1,n=C(e),a=0;a<n.length;a++)if(n[a].match&&n[a].match.def===t){i=!0;break}return i}function C(t,i,a){function r(i,a,s,l){function u(s,l,p){function m(t,i){var n=0===e.inArray(t,i.matches);return n||e.each(i.matches,function(e,a){if(!0===a.isQuantifier&&(n=m(t,i.matches[e-1])))return!1}),n}function k(t,i,a){var r,o;if((h().tests[t]||h().validPositions[t])&&e.each(h().tests[t]||[h().validPositions[t]],function(e,t){if(t.mloc[i])return r=t,!1;var s=a!==n?a:t.alternation,l=t.locator[s]!==n?t.locator[s].toString().indexOf(i):-1;(o===n||l<o)&&-1!==l&&(r=t,o=l)}),r){var s=r.locator[r.alternation];return(r.mloc[i]||r.mloc[s]||r.locator).slice((a!==n?a:r.alternation)+1)}return a!==n?k(t,i):n}function y(e,t){function i(e){for(var t,i,n=[],a=0,r=e.length;a<r;a++)if("-"===e.charAt(a))for(i=e.charCodeAt(a+1);++t<i;)n.push(String.fromCharCode(t));else t=e.charCodeAt(a),n.push(e.charAt(a));return n.join("")}return c.regex&&null!==e.match.fn&&null!==t.match.fn?-1!==i(t.match.def.replace(/[\[\]]/g,"")).indexOf(i(e.match.def.replace(/[\[\]]/g,""))):e.match.def===t.match.nativeDef}function b(e,t){if(t===n||e.alternation===t.alternation&&-1===e.locator[e.alternation].toString().indexOf(t.locator[t.alternation])){e.mloc=e.mloc||{};var i=e.locator[e.alternation];if(i!==n){if("string"==typeof i&&(i=i.split(",")[0]),e.mloc[i]===n&&(e.mloc[i]=e.locator.slice()),t!==n){for(var a in t.mloc)"string"==typeof a&&(a=a.split(",")[0]),e.mloc[a]===n&&(e.mloc[a]=t.mloc[a]);e.locator[e.alternation]=Object.keys(e.mloc).join(",")}return!0}e.alternation=n}return!1}if(f>1e4)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+h().mask;if(f===t&&s.matches===n)return d.push({match:s,locator:l.reverse(),cd:v,mloc:{}}),!0;if(s.matches!==n){if(s.isGroup&&p!==s){if(s=u(i.matches[e.inArray(s,i.matches)+1],l))return!0}else if(s.isOptional){var x=s;if(s=r(s,a,l,p)){if(!m(o=d[d.length-1].match,x))return!0;g=!0,f=t}}else if(s.isAlternator){var P,S=s,A=[],C=d.slice(),M=l.length,E=a.length>0?a.shift():-1;if(-1===E||"string"==typeof E){var w,D=f,O=a.slice(),_=[];if("string"==typeof E)_=E.split(",");else for(w=0;w<S.matches.length;w++)_.push(w.toString());if(h().excludes[t]){for(var j=_.slice(),F=0,T=h().excludes[t].length;F<T;F++)_.splice(_.indexOf(h().excludes[t][F].toString()),1);0===_.length&&(h().excludes[t]=n,_=j)}(!0===c.keepStatic||isFinite(parseInt(c.keepStatic))&&D>=c.keepStatic)&&(_=_.slice(0,1));for(var R=0;R<_.length;R++){w=parseInt(_[R]),d=[],a=k(f,w,M)||O.slice(),S.matches[w]&&u(S.matches[w],[w].concat(l),p)&&(s=!0),P=d.slice(),f=D,d=[];for(var N=0;N<P.length;N++){var G=P[N],B=!1;G.alternation=G.alternation||M,b(G);for(var I=0;I<A.length;I++){var L=A[I];if("string"!=typeof E||G.alternation!==n&&-1!==e.inArray(G.locator[G.alternation].toString(),_)){if(G.match.nativeDef===L.match.nativeDef){B=!0,b(L,G);break}if(y(G,L)){b(G,L)&&(B=!0,A.splice(A.indexOf(L),0,G));break}if(y(L,G)){b(L,G);break}if(z=L,null===(U=G).match.fn&&null!==z.match.fn&&z.match.fn.test(U.match.def,h(),t,!1,c,!1)){b(G,L)&&(B=!0,A.splice(A.indexOf(L),0,G));break}}}B||A.push(G)}}d=C.concat(A),f=t,g=d.length>0,s=A.length>0,a=O.slice()}else s=u(S.matches[E]||i.matches[E],[E].concat(l),p);if(s)return!0}else if(s.isQuantifier&&p!==i.matches[e.inArray(s,i.matches)-1])for(var H=s,V=a.length>0?a.shift():0;V<(isNaN(H.quantifier.max)?V+1:H.quantifier.max)&&f<=t;V++){var K=i.matches[e.inArray(H,i.matches)-1];if(s=u(K,[V].concat(l),K)){if((o=d[d.length-1].match).optionalQuantifier=V>H.quantifier.min-1,m(o,K)){if(V>H.quantifier.min-1){g=!0,f=t;break}return!0}return!0}}else if(s=r(s,a,l,p))return!0}else f++;var U,z}for(var p=a.length>0?a.shift():0;p<i.matches.length;p++)if(!0!==i.matches[p].isQuantifier){var m=u(i.matches[p],[p].concat(s),l);if(m&&f===t)return m;if(f>t)break}}var o,s,l,u,p=h().maskToken,f=i?a:0,m=i?i.slice():[0],d=[],g=!1,v=i?i.join(""):"";if(t>-1){if(i===n){for(var k,b=t-1;(k=h().validPositions[b]||h().tests[b])===n&&b>-1;)b--;k!==n&&b>-1&&(s=b,l=k,u=[],e.isArray(l)||(l=[l]),l.length>0&&(l[0].alternation===n?0===(u=y(s,l.slice()).locator.slice()).length&&(u=l[0].locator.slice()):e.each(l,function(e,t){if(""!==t.def)if(0===u.length)u=t.locator.slice();else for(var i=0;i<u.length;i++)t.locator[i]&&-1===u[i].toString().indexOf(t.locator[i])&&(u[i]+=","+t.locator[i])})),v=(m=u).join(""),f=b)}if(h().tests[t]&&h().tests[t][0].cd===v)return h().tests[t];for(var x=m.shift();x<p.length&&!(r(p[x],m,[x])&&f===t||f>t);x++);}return(0===d.length||g)&&d.push({match:{fn:null,optionality:!0,casing:null,def:"",placeholder:""},locator:[],mloc:{},cd:v}),i!==n&&h().tests[t]?e.extend(!0,[],d):(h().tests[t]=e.extend(!0,[],d),h().tests[t])}function M(){return h()._buffer===n&&(h()._buffer=d(!1,1),h().buffer===n&&(h().buffer=h()._buffer.slice())),h()._buffer}function E(e){return h().buffer!==n&&!0!==e||(h().buffer=d(!0,v(),!0)),h().buffer}function w(e,t,i){var a,r;if(!0===e)g(),e=0,t=i.length;else for(a=e;a<t;a++)delete h().validPositions[a];for(r=e,a=e;a<t;a++)if(g(!0),i[a]!==c.skipOptionalPartCharacter){var o=_(r,i[a],!0,!0);!1!==o&&(g(!0),r=o.caret!==n?o.caret:o.pos+1)}}function D(t,i,a){for(var r,o=c.greedy?i:i.slice(0,1),s=!1,l=a!==n?a.split(","):[],u=0;u<l.length;u++)-1!==(r=t.indexOf(l[u]))&&t.splice(r,1);for(var p=0;p<t.length;p++)if(-1!==e.inArray(t[p],o)){s=!0;break}return s}function O(t,i,a,r,o){var s,l,u,p,f,m,d,k=e.extend(!0,{},h().validPositions),y=!1,x=o!==n?o:v();if(-1===x&&o===n)l=(p=S(s=0)).alternation;else for(;x>=0;x--)if((u=h().validPositions[x])&&u.alternation!==n){if(p&&p.locator[u.alternation]!==u.locator[u.alternation])break;s=x,l=h().validPositions[s].alternation,p=u}if(l!==n){d=parseInt(s),h().excludes[d]=h().excludes[d]||[],!0!==t&&h().excludes[d].push(b(p));var P=[],A=0;for(f=d;f<v(n,!0)+1;f++)(m=h().validPositions[f])&&!0!==m.generatedInput&&/[0-9a-bA-Z]/.test(m.input)?P.push(m.input):f<t&&A++,delete h().validPositions[f];for(;h().excludes[d]&&h().excludes[d].length<10;){var C=-1*A,M=P.slice();for(h().tests[d]=n,g(!0),y=!0;M.length>0;){var E=M.shift();if(E!==c.skipOptionalPartCharacter&&!(y=_(v(n,!0)+1,E,!1,r,!0)))break}if(y&&i!==n){var w=v(t)+1;for(f=d;f<v()+1;f++)((m=h().validPositions[f])===n||null==m.match.fn)&&f<t+C&&C++;y=_((t+=C)>w?w:t,i,a,r,!0)}if(y)break;if(g(),p=S(d),h().validPositions=e.extend(!0,{},k),!h().excludes[d]){y=O(t,i,a,r,d-1);break}var D=b(p);if(-1!==h().excludes[d].indexOf(D)){y=O(t,i,a,r,d-1);break}for(h().excludes[d].push(D),f=d;f<v(n,!0)+1;f++)delete h().validPositions[f]}}return h().excludes[d]=n,y}function _(t,i,r,o,s,l){function u(e){return X?e.begin-e.end>1||e.begin-e.end==1:e.end-e.begin>1||e.end-e.begin==1}function p(i,r,s){var l=!1;return e.each(C(i),function(p,f){var d=f.match;if(E(!0),!1!==(l=null!=d.fn?d.fn.test(r,h(),i,s,c,u(t)):(r===d.def||r===c.skipOptionalPartCharacter)&&""!==d.def&&{c:N(i,d,!0)||d.def,pos:i})){var y=l.c!==n?l.c:r;y=y===c.skipOptionalPartCharacter&&null===d.fn?N(i,d,!0)||d.def:y;var b=i,x=E();if(l.remove!==n&&(e.isArray(l.remove)||(l.remove=[l.remove]),e.each(l.remove.sort(function(e,t){return t-e}),function(e,t){k(t,t+1,!0)})),l.insert!==n&&(e.isArray(l.insert)||(l.insert=[l.insert]),e.each(l.insert.sort(function(e,t){return e-t}),function(e,t){_(t.pos,t.c,!0,o)})),l.refreshFromBuffer){var P=l.refreshFromBuffer;if(w(!0===P?P:P.start,P.end,x),l.pos===n&&l.c===n)return l.pos=v(),!1;if((b=l.pos!==n?l.pos:i)!==i)return l=e.extend(l,_(b,y,!0,o)),!1}else if(!0!==l&&l.pos!==n&&l.pos!==i&&(b=l.pos,w(i,b,E().slice()),b!==i))return l=e.extend(l,_(b,y,!0)),!1;return(!0===l||l.pos!==n||l.c!==n)&&(p>0&&g(!0),m(b,e.extend({},f,{input:function(t,i,n){switch(c.casing||i.casing){case"upper":t=t.toUpperCase();break;case"lower":t=t.toLowerCase();break;case"title":var r=h().validPositions[n-1];t=0===n||r&&r.input===String.fromCharCode(a.keyCode.SPACE)?t.toUpperCase():t.toLowerCase();break;default:if(e.isFunction(c.casing)){var o=Array.prototype.slice.call(arguments);o.push(h().validPositions),t=c.casing.apply(this,o)}}return t}(y,d,b)}),o,u(t))||(l=!1),!1)}}),l}function f(t,i,a){var r;if(t===n)for(t=i-1;t>0&&!h().validPositions[t];t--);for(var o=t;o<i;o++)if(h().validPositions[o]===n&&!j(o,!0)){var s=0==o?S(o):h().validPositions[o-1];if(s){var l,u=x(s),c=C(o).slice(),p=n,f=S(o);if(""===c[c.length-1].match.def&&c.pop(),e.each(c,function(e,t){l=x(t,u.length);var i=Math.abs(l-u);(p===n||i<p)&&null===t.match.fn&&!0!==t.match.optionality&&!0!==t.match.optionalQuantifier&&(p=i,f=t)}),(f=e.extend({},f,{input:N(o,f.match,!0)||f.match.def})).generatedInput=!0,m(o,f,!0),!0!==a){var d=h().validPositions[i].input;h().validPositions[i]=n,r=_(i,d,!0,!0)}}}return r}function m(t,i,a,r){if(r||c.insertMode&&h().validPositions[t]!==n&&a===n){var o,s=e.extend(!0,{},h().validPositions),l=v(n,!0);for(o=t;o<=l;o++)delete h().validPositions[o];h().validPositions[t]=e.extend(!0,{},i);var u,p=!0,m=h().validPositions,d=!1;for(o=u=t;o<=l;o++){var k=s[o];if(k!==n)for(var y=u;""!==S(y).match.def&&(null===k.match.fn&&m[o]&&(!0===m[o].match.optionalQuantifier||!0===m[o].match.optionality)||null!=k.match.fn);){if(y++,!1===d&&s[y]&&s[y].match.def===k.match.def)h().validPositions[y]=e.extend(!0,{},s[y]),h().validPositions[y].input=k.input,f(n,y,!0),u=y,p=!0;else if(A(y,k.match.def)){var b=_(y,k.input,!0,!0);p=!1!==b,u=b.caret||b.insert?v():y,d=!0}else if(!(p=!0===k.generatedInput)&&""===S(y).match.def)break;if(p)break}if(!p)break}if(!p)return h().validPositions=e.extend(!0,{},s),g(!0),!1}else h().validPositions[t]=e.extend(!0,{},i);return g(!0),!0}r=!0===r;var d=t;t.begin!==n&&(d=X&&!u(t)?t.end:t.begin);var y=!0,b=e.extend(!0,{},h().validPositions);if(e.isFunction(c.preValidation)&&!r&&!0!==o&&!0!==l&&(y=c.preValidation(E(),d,i,u(t),c)),!0===y){if(f(n,d,!0),u(t)&&(K(0,a.keyCode.DELETE,t,!0,!0),d=h().p),($===n||d<$)&&(y=p(d,i,r),(!r||!0===o)&&!1===y&&!0!==l)){var P=h().validPositions[d];if(!P||null!==P.match.fn||P.match.def!==i&&i!==c.skipOptionalPartCharacter){if((c.insertMode||h().validPositions[F(d)]===n)&&!j(d,!0))for(var M=d+1,D=F(d);M<=D;M++)if(!1!==(y=p(M,i,r))){y=f(d,y.pos!==n?y.pos:M)||y,d=M;break}}else y={caret:F(d)}}!1!==y||null===c.keepStatic||!1===c.keepStatic||r||!0===s||(y=O(d,i,r,o)),!0===y&&(y={pos:d})}if(e.isFunction(c.postValidation)&&!1!==y&&!r&&!0!==o&&!0!==l){var T=c.postValidation(E(!0),y,c);if(T!==n){if(T.refreshFromBuffer&&T.buffer){var R=T.refreshFromBuffer;w(!0===R?R:R.start,R.end,T.buffer)}y=!0===T?y:T}}return y&&y.pos===n&&(y.pos=d),!1!==y&&!0!==l||(g(!0),h().validPositions=e.extend(!0,{},b)),y}function j(e,t){var i=P(e).match;if(""===i.def&&(i=S(e).match),null!=i.fn)return i.fn;if(!0!==t&&e>-1){var n=C(e);return n.length>1+(""===n[n.length-1].match.def?1:0)}return!1}function F(e,t){for(var i=e+1;""!==S(i).match.def&&(!0===t&&(!0!==S(i).match.newBlockMarker||!j(i))||!0!==t&&!j(i));)i++;return i}function T(e,t){var i,n=e;if(n<=0)return 0;for(;--n>0&&(!0===t&&!0!==S(n).match.newBlockMarker||!0!==t&&!j(n)&&((i=C(n)).length<2||2===i.length&&""===i[1].match.def)););return n}function R(t,i,a,r,o){if(r&&e.isFunction(c.onBeforeWrite)){var s=c.onBeforeWrite.call(J,r,i,a,c);if(s){if(s.refreshFromBuffer){var l=s.refreshFromBuffer;w(!0===l?l:l.start,l.end,s.buffer||i),i=E(!0)}a!==n&&(a=s.caret!==n?s.caret:a)}}t!==n&&(t.inputmask._valueSet(i.join("")),a===n||r!==n&&"blur"===r.type?z(t,a,0===i.length):I(t,a),!0===o&&(te=!0,e(t).trigger("input")))}function N(t,i,a){if((i=i||S(t).match).placeholder!==n||!0===a)return e.isFunction(i.placeholder)?i.placeholder(c):i.placeholder;if(null===i.fn){if(t>-1&&h().validPositions[t]===n){var r,o=C(t),s=[];if(o.length>1+(""===o[o.length-1].match.def?1:0))for(var l=0;l<o.length;l++)if(!0!==o[l].match.optionality&&!0!==o[l].match.optionalQuantifier&&(null===o[l].match.fn||r===n||!1!==o[l].match.fn.test(r.match.def,h(),t,!0,c))&&(s.push(o[l]),null===o[l].match.fn&&(r=o[l]),s.length>1&&/[0-9a-bA-Z]/.test(s[0].match.def)))return c.placeholder.charAt(t%c.placeholder.length)}return i.def}return c.placeholder.charAt(t%c.placeholder.length)}function G(t,i,r,o,s){var l=o.slice(),u="",p=-1,f=n;if(g(),r||!0===c.autoUnmask)p=F(p);else{var m=M().slice(0,F(-1)).join(""),k=l.join("").match(new RegExp("^"+a.escapeRegex(m),"g"));k&&k.length>0&&(l.splice(0,k.length*m.length),p=F(p))}-1===p?(h().p=F(p),p=0):h().p=p,e.each(l,function(i,a){if(a!==n)if(h().validPositions[i]===n&&l[i]===N(i)&&j(i,!0)&&!1===_(i,l[i],!0,n,n,!0))h().p++;else{var o=new e.Event("_checkval");o.which=a.charCodeAt(0),u+=a;var s=v(n,!0),m=S(s),g=P(s+1,m?m.locator.slice():n,s);if(y=p,b=u,-1===d(!0,0,!1).slice(y,F(y)).join("").indexOf(b)||j(y)||S(y).match.nativeDef!==b.charAt(0)&&(" "!==S(y).match.nativeDef||S(y+1).match.nativeDef!==b.charAt(0))||r||c.autoUnmask){var k=r?i:null==g.match.fn&&g.match.optionality&&s+1<h().p?s+1:h().p;(f=oe.keypressEvent.call(t,o,!0,!1,r,k))&&(p=k+1,u="")}else f=oe.keypressEvent.call(t,o,!0,!1,!0,s+1);R(n,E(),f.forwardPosition,o,!1)}var y,b}),i&&R(t,E(),f?f.forwardPosition:n,s||new e.Event("checkval"),s&&"input"===s.type)}function B(t){if(t){if(t.inputmask===n)return t.value;t.inputmask&&t.inputmask.refreshValue&&oe.setValueEvent.call(t)}var i=[],a=h().validPositions;for(var r in a)a[r].match&&null!=a[r].match.fn&&i.push(a[r].input);var o=0===i.length?"":(X?i.reverse():i).join("");if(e.isFunction(c.onUnMask)){var s=(X?E().slice().reverse():E()).join("");o=c.onUnMask.call(J,s,o,c)}return o}function I(a,r,o,s){function l(e){return!0===s||!X||"number"!=typeof e||c.greedy&&""===c.placeholder||(e=a.inputmask.__valueGet.call(a).length-e),e}var u;if(r===n)return a.setSelectionRange?(r=a.selectionStart,o=a.selectionEnd):t.getSelection?(u=t.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode!==a&&u.commonAncestorContainer!==a||(r=u.startOffset,o=u.endOffset):i.selection&&i.selection.createRange&&(o=(r=0-(u=i.selection.createRange()).duplicate().moveStart("character",-a.inputmask._valueGet().length))+u.text.length),{begin:l(r),end:l(o)};if(e.isArray(r)&&(o=X?r[0]:r[1],r=X?r[1]:r[0]),r.begin!==n&&(o=X?r.begin:r.end,r=X?r.end:r.begin),"number"==typeof r){r=l(r),o="number"==typeof(o=l(o))?o:r;var p=parseInt(((a.ownerDocument.defaultView||t).getComputedStyle?(a.ownerDocument.defaultView||t).getComputedStyle(a,null):a.currentStyle).fontSize)*o;if(a.scrollLeft=p>a.scrollWidth?p:0,!1===c.insertMode&&r===o&&o++,a.inputmask.caretPos={begin:r,end:o},a.setSelectionRange)a.selectionStart=r,a.selectionEnd=o;else if(t.getSelection){if(u=i.createRange(),a.firstChild===n||null===a.firstChild){var f=i.createTextNode("");a.appendChild(f)}u.setStart(a.firstChild,r<a.inputmask._valueGet().length?r:a.inputmask._valueGet().length),u.setEnd(a.firstChild,o<a.inputmask._valueGet().length?o:a.inputmask._valueGet().length),u.collapse(!0);var m=t.getSelection();m.removeAllRanges(),m.addRange(u)}else a.createTextRange&&((u=a.createTextRange()).collapse(!0),u.moveEnd("character",o),u.moveStart("character",r),u.select());z(a,{begin:r,end:o})}}function L(t){var i,a,r=E(),o=r.length,s=v(),l={},u=h().validPositions[s],c=u!==n?u.locator.slice():n;for(i=s+1;i<r.length;i++)c=(a=P(i,c,i-1)).locator.slice(),l[i]=e.extend(!0,{},a);var p=u&&u.alternation!==n?u.locator[u.alternation]:n;for(i=o-1;i>s&&((a=l[i]).match.optionality||a.match.optionalQuantifier&&a.match.newBlockMarker||p&&(p!==l[i].locator[u.alternation]&&null!=a.match.fn||null===a.match.fn&&a.locator[u.alternation]&&D(a.locator[u.alternation].toString().split(","),p.toString().split(","))&&""!==C(i)[0].def))&&r[i]===N(i,a.match);i--)o--;return t?{l:o,def:l[o]?l[o].match:n}:o}function H(e){for(var t,i=L(),a=e.length,r=h().validPositions[v()];i<a&&!j(i,!0)&&(t=r!==n?P(i,r.locator.slice(""),r):S(i))&&!0!==t.match.optionality&&(!0!==t.match.optionalQuantifier&&!0!==t.match.newBlockMarker||i+1===a&&""===(r!==n?P(i+1,r.locator.slice(""),r):S(i+1)).match.def);)i++;for(;(t=h().validPositions[i-1])&&t&&t.match.optionality&&t.input===c.skipOptionalPartCharacter;)i--;return e.splice(i),e}function V(t){if(e.isFunction(c.isComplete))return c.isComplete(t,c);if("*"===c.repeat)return n;var i=!1,a=L(!0),r=T(a.l);if(a.def===n||a.def.newBlockMarker||a.def.optionality||a.def.optionalQuantifier){i=!0;for(var o=0;o<=r;o++){var s=P(o).match;if(null!==s.fn&&h().validPositions[o]===n&&!0!==s.optionality&&!0!==s.optionalQuantifier||null===s.fn&&t[o]!==N(o,s)){i=!1;break}}}return i}function K(e,t,i,r,o){if((c.numericInput||X)&&(t===a.keyCode.BACKSPACE?t=a.keyCode.DELETE:t===a.keyCode.DELETE&&(t=a.keyCode.BACKSPACE),X)){var s=i.end;i.end=i.begin,i.begin=s}if(t===a.keyCode.BACKSPACE&&(i.end-i.begin<1||!1===c.insertMode)?(i.begin=T(i.begin),h().validPositions[i.begin]!==n&&h().validPositions[i.begin].input===c.groupSeparator&&i.begin--):t===a.keyCode.DELETE&&i.begin===i.end&&(i.end=j(i.end,!0)&&h().validPositions[i.end]&&h().validPositions[i.end].input!==c.radixPoint?i.end+1:F(i.end)+1,h().validPositions[i.begin]!==n&&h().validPositions[i.begin].input===c.groupSeparator&&i.end++),k(i.begin,i.end,!1,r),!0!==r&&null!==c.keepStatic&&!1!==c.keepStatic){var l=O(!0);l&&(i.begin=l.caret!==n?l.caret:l.pos?F(l.pos.begin?l.pos.begin:l.pos):v(-1,!0))}var u=v(i.begin,!0);if(u<i.begin||-1===i.begin)h().p=F(u);else if(!0!==r&&(h().p=i.begin,!0!==o))for(;h().p<u&&h().validPositions[h().p]===n;)h().p++}function U(n){var a=(n.ownerDocument.defaultView||t).getComputedStyle(n,null),r=i.createElement("div");r.style.width=a.width,r.style.textAlign=a.textAlign,q=i.createElement("div"),n.inputmask.colorMask=q,q.className="im-colormask",n.parentNode.insertBefore(q,n),n.parentNode.removeChild(n),q.appendChild(r),q.appendChild(n),n.style.left=r.offsetLeft+"px",e(n).on("click",function(e){return I(n,function(e){var t,r=i.createElement("span");for(var o in a)isNaN(o)&&-1!==o.indexOf("font")&&(r.style[o]=a[o]);r.style.textTransform=a.textTransform,r.style.letterSpacing=a.letterSpacing,r.style.position="absolute",r.style.height="auto",r.style.width="auto",r.style.visibility="hidden",r.style.whiteSpace="nowrap",i.body.appendChild(r);var s,l=n.inputmask._valueGet(),u=0;for(t=0,s=l.length;t<=s;t++){if(r.innerHTML+=l.charAt(t)||"_",r.offsetWidth>=e){var c=e-u,p=r.offsetWidth-e;r.innerHTML=l.charAt(t),t=(c-=r.offsetWidth/3)<p?t-1:t;break}u=r.offsetWidth}return i.body.removeChild(r),t}(e.clientX)),oe.clickEvent.call(n,[e])}),e(n).on("keydown",function(e){e.shiftKey||!1===c.insertMode||setTimeout(function(){z(n)},0)})}function z(e,t,a){function r(e){if(e===n&&(e=""),p||null!==o.fn&&s.input!==n)if(p&&(null!==o.fn&&s.input!==n||""===o.def)){p=!1;var t=u.length;u[t-1]=u[t-1]+"</span>",u.push(e)}else u.push(e);else p=!0,u.push("<span class='im-static'>"+e)}var o,s,l,u=[],p=!1,f=0;if(q!==n){var m=E();if(t===n?t=I(e):t.begin===n&&(t={begin:t,end:t}),!0!==a){var d=v();do{h().validPositions[f]?(s=h().validPositions[f],o=s.match,l=s.locator.slice(),r(m[f])):(s=P(f,l,f-1),o=s.match,l=s.locator.slice(),(!1===c.jitMasking||f<d||"number"==typeof c.jitMasking&&isFinite(c.jitMasking)&&c.jitMasking>f)&&r(N(f,o))),f++}while(($===n||f<$)&&(null!==o.fn||""!==o.def)||d>f||p);p&&r(),i.activeElement===e&&(u.splice(t.begin,0,t.begin===t.end?'<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">':'<mark class="im-caret-select">'),u.splice(t.end+1,0,"</mark>"))}var g=q.getElementsByTagName("div")[0];g.innerHTML=u.join(""),e.inputmask.positionColorMask(e,g)}}s=s||this.maskset,c=c||this.opts;var Q,W,$,q,Z,J=this,Y=this.el,X=this.isRTL,ee=!1,te=!1,ie=!1,ne=!1,ae=!1,re={on:function(t,i,r){var o=function(t){var i=this;if(i.inputmask===n&&"FORM"!==this.nodeName){var o=e.data(i,"_inputmask_opts");o?new a(o).mask(i):re.off(i)}else{if("setvalue"===t.type||"FORM"===this.nodeName||!(i.disabled||i.readOnly&&!("keydown"===t.type&&t.ctrlKey&&67===t.keyCode||!1===c.tabThrough&&t.keyCode===a.keyCode.TAB))){switch(t.type){case"input":if(!0===te)return te=!1,t.preventDefault();p&&(ae=!0);break;case"keydown":ee=!1,te=!1;break;case"keypress":if(!0===ee)return t.preventDefault();ee=!0;break;case"click":if(f||m){var s=arguments;return setTimeout(function(){r.apply(i,s)},0),!1}}var l=r.apply(i,arguments);return ae&&(ae=!1,setTimeout(function(){I(i,i.inputmask.caretPos,n,!0)})),!1===l&&(t.preventDefault(),t.stopPropagation()),l}t.preventDefault()}};t.inputmask.events[i]=t.inputmask.events[i]||[],t.inputmask.events[i].push(o),-1!==e.inArray(i,["submit","reset"])?null!==t.form&&e(t.form).on(i,o):e(t).on(i,o)},off:function(t,i){var n;t.inputmask&&t.inputmask.events&&(i?(n=[])[i]=t.inputmask.events[i]:n=t.inputmask.events,e.each(n,function(i,n){for(;n.length>0;){var a=n.pop();-1!==e.inArray(i,["submit","reset"])?null!==t.form&&e(t.form).off(i,a):e(t).off(i,a)}delete t.inputmask.events[i]}))}},oe={keydownEvent:function(t){var i=this,n=e(i),r=t.keyCode,o=I(i);if(r===a.keyCode.BACKSPACE||r===a.keyCode.DELETE||m&&r===a.keyCode.BACKSPACE_SAFARI||t.ctrlKey&&r===a.keyCode.X&&!l("cut"))t.preventDefault(),K(0,r,o),R(i,E(!0),h().p,t,i.inputmask._valueGet()!==E().join("")),i.inputmask._valueGet()===M().join("")?n.trigger("cleared"):!0===V(E())&&n.trigger("complete");else if(r===a.keyCode.END||r===a.keyCode.PAGE_DOWN){t.preventDefault();var s=F(v());c.insertMode||s!==h().maskLength||t.shiftKey||s--,I(i,t.shiftKey?o.begin:s,s,!0)}else r===a.keyCode.HOME&&!t.shiftKey||r===a.keyCode.PAGE_UP?(t.preventDefault(),I(i,0,t.shiftKey?o.begin:0,!0)):(c.undoOnEscape&&r===a.keyCode.ESCAPE||90===r&&t.ctrlKey)&&!0!==t.altKey?(G(i,!0,!1,Q.split("")),n.trigger("click")):r!==a.keyCode.INSERT||t.shiftKey||t.ctrlKey?!0===c.tabThrough&&r===a.keyCode.TAB?(!0===t.shiftKey?(null===S(o.begin).match.fn&&(o.begin=F(o.begin)),o.end=T(o.begin,!0),o.begin=T(o.end,!0)):(o.begin=F(o.begin,!0),o.end=F(o.begin,!0),o.end<h().maskLength&&o.end--),o.begin<h().maskLength&&(t.preventDefault(),I(i,o.begin,o.end))):t.shiftKey||!1===c.insertMode&&(r===a.keyCode.RIGHT?setTimeout(function(){var e=I(i);I(i,e.begin)},0):r===a.keyCode.LEFT&&setTimeout(function(){var e=I(i);I(i,X?e.begin+1:e.begin-1)},0)):(c.insertMode=!c.insertMode,I(i,c.insertMode||o.begin!==h().maskLength?o.begin:o.begin-1));c.onKeyDown.call(this,t,E(),I(i).begin,c),ie=-1!==e.inArray(r,c.ignorables)},keypressEvent:function(t,i,r,o,s){var l=this,u=e(l),p=t.which||t.charCode||t.keyCode;if(!(!0===i||t.ctrlKey&&t.altKey)&&(t.ctrlKey||t.metaKey||ie))return p===a.keyCode.ENTER&&Q!==E().join("")&&(Q=E().join(""),setTimeout(function(){u.trigger("change")},0)),!0;if(p){46===p&&!1===t.shiftKey&&""!==c.radixPoint&&(p=c.radixPoint.charCodeAt(0));var f,m=i?{begin:s,end:s}:I(l),d=String.fromCharCode(p);h().writeOutBuffer=!0;var v=_(m,d,o);if(!1!==v&&(g(!0),f=v.caret!==n?v.caret:F(v.pos.begin?v.pos.begin:v.pos),h().p=f),f=c.numericInput&&v.caret===n?T(f):f,!1!==r&&(setTimeout(function(){c.onKeyValidation.call(l,p,v,c)},0),h().writeOutBuffer&&!1!==v)){var k=E();R(l,k,f,t,!0!==i),!0!==i&&setTimeout(function(){!0===V(k)&&u.trigger("complete")},0)}if(t.preventDefault(),i)return!1!==v&&(v.forwardPosition=f),v}},pasteEvent:function(i){var n,a=this,r=i.originalEvent||i,o=e(a),s=a.inputmask._valueGet(!0),l=I(a);X&&(n=l.end,l.end=l.begin,l.begin=n);var u=s.substr(0,l.begin),p=s.substr(l.end,s.length);if(u===(X?M().reverse():M()).slice(0,l.begin).join("")&&(u=""),p===(X?M().reverse():M()).slice(l.end).join("")&&(p=""),X&&(n=u,u=p,p=n),t.clipboardData&&t.clipboardData.getData)s=u+t.clipboardData.getData("Text")+p;else{if(!r.clipboardData||!r.clipboardData.getData)return!0;s=u+r.clipboardData.getData("text/plain")+p}var f=s;if(e.isFunction(c.onBeforePaste)){if(!1===(f=c.onBeforePaste.call(J,s,c)))return i.preventDefault();f||(f=s)}return G(a,!1,!1,X?f.split("").reverse():f.toString().split("")),R(a,E(),F(v()),i,Q!==E().join("")),!0===V(E())&&o.trigger("complete"),i.preventDefault()},inputFallBackEvent:function(t){var i,n,r=this,o=r.inputmask._valueGet();if(E().join("")!==o){var s=I(r);if(n=s,"."===(i=o).charAt(n.begin-1)&&""!==c.radixPoint&&((i=i.split(""))[n.begin-1]=c.radixPoint.charAt(0),i=i.join("")),o=function(e,t,i){if(f){var n=t.replace(E().join(""),"");if(1===n.length){var a=t.split("");a.splice(i.begin,0,n),t=a.join("")}}return t}(0,o=i,s),E().join("")!==o){var l=E().join(""),u=o.length>l.length?-1:0,p=o.substr(0,s.begin),m=o.substr(s.begin),d=l.substr(0,s.begin+u),h=l.substr(s.begin+u),g=s,v="",k=!1;if(p!==d){for(var y=(k=p.length>=d.length)?p.length:d.length,b=0;p.charAt(b)===d.charAt(b)&&b<y;b++);k&&(0===u&&(g.begin=b),v+=p.slice(b,g.end))}if(m!==h&&(m.length>h.length?v+=m.slice(0,1):m.length<h.length&&(g.end+=h.length-m.length,k||""===c.radixPoint||""!==m||p.charAt(g.begin+u-1)!==c.radixPoint||(g.begin--,v=c.radixPoint))),R(r,E(),{begin:g.begin+u,end:g.end+u}),v.length>0)e.each(v.split(""),function(t,i){var n=new e.Event("keypress");n.which=i.charCodeAt(0),ie=!1,oe.keypressEvent.call(r,n)});else{g.begin===g.end-1&&(g.begin=T(g.begin+1),g.begin===g.end-1?I(r,g.begin):I(r,g.begin,g.end));var x=new e.Event("keydown");x.keyCode=a.keyCode.DELETE,oe.keydownEvent.call(r,x),!1===c.insertMode&&I(r,I(r).begin-1)}t.preventDefault()}}},setValueEvent:function(t){this.inputmask.refreshValue=!1;var i=this.inputmask._valueGet(!0);e.isFunction(c.onBeforeMask)&&(i=c.onBeforeMask.call(J,i,c)||i),i=i.split(""),G(this,!0,!1,X?i.reverse():i),Q=E().join(""),(c.clearMaskOnLostFocus||c.clearIncomplete)&&this.inputmask._valueGet()===M().join("")&&this.inputmask._valueSet("")},focusEvent:function(e){var t=this,i=t.inputmask._valueGet();c.showMaskOnFocus&&(!c.showMaskOnHover||c.showMaskOnHover&&""===i)&&(t.inputmask._valueGet()!==E().join("")?R(t,E(),F(v())):!1===ne&&I(t,F(v()))),!0===c.positionCaretOnTab&&!1===ne&&oe.clickEvent.apply(t,[e,!0]),Q=E().join("")},mouseleaveEvent:function(e){if(ne=!1,c.clearMaskOnLostFocus&&i.activeElement!==this){var t=E().slice(),n=this.inputmask._valueGet();n!==this.getAttribute("placeholder")&&""!==n&&(-1===v()&&n===M().join("")?t=[]:H(t),R(this,t))}},clickEvent:function(t,a){var r=this;setTimeout(function(){if(i.activeElement===r){var t=I(r);if(a&&(X?t.end=t.begin:t.begin=t.end),t.begin===t.end)switch(c.positionCaretOnClick){case"none":break;case"select":I(r,0,E().length);break;case"radixFocus":if(function(t){if(""!==c.radixPoint){var i=h().validPositions;if(i[t]===n||i[t].input===N(t)){if(t<F(-1))return!0;var a=e.inArray(c.radixPoint,E());if(-1!==a){for(var r in i)if(a<r&&i[r].input!==N(r))return!1;return!0}}}return!1}(t.begin)){var o=E().join("").indexOf(c.radixPoint);I(r,c.numericInput?F(o):o);break}default:var s=t.begin,l=v(s,!0),u=F(l);if(s<u)I(r,j(s,!0)||j(s-1,!0)?s:F(s));else{var p=h().validPositions[l],f=P(u,p?p.match.locator:n,p),m=N(u,f.match);if(""!==m&&E()[u]!==m&&!0!==f.match.optionalQuantifier&&!0!==f.match.newBlockMarker||!j(u,!0)&&f.match.def===m){var d=F(u);(s>=d||s===u)&&(u=d)}I(r,u)}}}},0)},dblclickEvent:function(e){var t=this;setTimeout(function(){I(t,0,F(v()))},0)},cutEvent:function(n){var r=e(this),o=I(this),s=n.originalEvent||n,l=t.clipboardData||s.clipboardData,u=X?E().slice(o.end,o.begin):E().slice(o.begin,o.end);l.setData("text",X?u.reverse().join(""):u.join("")),i.execCommand&&i.execCommand("copy"),K(0,a.keyCode.DELETE,o),R(this,E(),h().p,n,Q!==E().join("")),this.inputmask._valueGet()===M().join("")&&r.trigger("cleared")},blurEvent:function(t){var i=e(this);if(this.inputmask){var a=this.inputmask._valueGet(),r=E().slice();""===a&&q===n||(c.clearMaskOnLostFocus&&(-1===v()&&a===M().join("")?r=[]:H(r)),!1===V(r)&&(setTimeout(function(){i.trigger("incomplete")},0),c.clearIncomplete&&(g(),r=c.clearMaskOnLostFocus?[]:M().slice())),R(this,r,n,t)),Q!==E().join("")&&(Q=r.join(""),i.trigger("change"))}},mouseenterEvent:function(e){ne=!0,i.activeElement!==this&&c.showMaskOnHover&&this.inputmask._valueGet()!==E().join("")&&R(this,E())},submitEvent:function(e){Q!==E().join("")&&W.trigger("change"),c.clearMaskOnLostFocus&&-1===v()&&Y.inputmask._valueGet&&Y.inputmask._valueGet()===M().join("")&&Y.inputmask._valueSet(""),c.removeMaskOnSubmit&&(Y.inputmask._valueSet(Y.inputmask.unmaskedvalue(),!0),setTimeout(function(){R(Y,E())},0))},resetEvent:function(e){Y.inputmask.refreshValue=!0,setTimeout(function(){W.trigger("setvalue")},0)}};if(a.prototype.positionColorMask=function(e,t){e.style.left=t.offsetLeft+"px"},r!==n)switch(r.action){case"isComplete":return Y=r.el,V(E());case"unmaskedvalue":return Y!==n&&r.value===n||(Z=r.value,Z=(e.isFunction(c.onBeforeMask)&&c.onBeforeMask.call(J,Z,c)||Z).split(""),G(n,!1,!1,X?Z.reverse():Z),e.isFunction(c.onBeforeWrite)&&c.onBeforeWrite.call(J,n,E(),0,c)),B(Y);case"mask":!function(t){re.off(t);var a=function(t,a){var r=t.getAttribute("type"),s="INPUT"===t.tagName&&-1!==e.inArray(r,a.supportsInputType)||t.isContentEditable||"TEXTAREA"===t.tagName;if(!s)if("INPUT"===t.tagName){var l=i.createElement("input");l.setAttribute("type",r),s="text"===l.type,l=null}else s="partial";return!1!==s?function(t){function r(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==v()||!0!==a.nullable?i.activeElement===this&&a.clearMaskOnLostFocus?(X?H(E().slice()).reverse():H(E().slice())).join(""):l.call(this):"":l.call(this)}function s(t){u.call(this,t),this.inputmask&&e(this).trigger("setvalue")}var l,u,c;if(!t.inputmask.__valueGet){if(!0!==a.noValuePatching){if(Object.getOwnPropertyDescriptor){"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"===o("test".__proto__)?function(e){return e.__proto__}:function(e){return e.constructor.prototype});var p=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),"value"):n;p&&p.get&&p.set?(l=p.get,u=p.set,Object.defineProperty(t,"value",{get:r,set:s,configurable:!0})):"INPUT"!==t.tagName&&(l=function(){return this.textContent},u=function(e){this.textContent=e},Object.defineProperty(t,"value",{get:r,set:s,configurable:!0}))}else i.__lookupGetter__&&t.__lookupGetter__("value")&&(l=t.__lookupGetter__("value"),u=t.__lookupSetter__("value"),t.__defineGetter__("value",r),t.__defineSetter__("value",s));t.inputmask.__valueGet=l,t.inputmask.__valueSet=u}t.inputmask._valueGet=function(e){return X&&!0!==e?l.call(this.el).split("").reverse().join(""):l.call(this.el)},t.inputmask._valueSet=function(e,t){u.call(this.el,null===e||e===n?"":!0!==t&&X?e.split("").reverse().join(""):e)},l===n&&(l=function(){return this.value},u=function(e){this.value=e},function(t){if(e.valHooks&&(e.valHooks[t]===n||!0!==e.valHooks[t].inputmaskpatch)){var i=e.valHooks[t]&&e.valHooks[t].get?e.valHooks[t].get:function(e){return e.value},r=e.valHooks[t]&&e.valHooks[t].set?e.valHooks[t].set:function(e,t){return e.value=t,e};e.valHooks[t]={get:function(e){if(e.inputmask){if(e.inputmask.opts.autoUnmask)return e.inputmask.unmaskedvalue();var t=i(e);return-1!==v(n,n,e.inputmask.maskset.validPositions)||!0!==a.nullable?t:""}return i(e)},set:function(t,i){var n,a=e(t);return n=r(t,i),t.inputmask&&a.trigger("setvalue"),n},inputmaskpatch:!0}}}(t.type),c=t,re.on(c,"mouseenter",function(t){var i=e(this);this.inputmask._valueGet()!==E().join("")&&i.trigger("setvalue")}))}}(t):t.inputmask=n,s}(t,c);if(!1!==a&&(W=e(Y=t),-1===($=Y!==n?Y.maxLength:n)&&($=n),!0===c.colorMask&&U(Y),p&&("inputmode"in Y&&(Y.inputmode=c.inputmode,Y.setAttribute("inputmode",c.inputmode)),!0===c.disablePredictiveText&&("autocorrect"in Y?Y.autocorrect=!1:(!0!==c.colorMask&&U(Y),Y.type="password"))),!0===a&&(re.on(Y,"submit",oe.submitEvent),re.on(Y,"reset",oe.resetEvent),re.on(Y,"mouseenter",oe.mouseenterEvent),re.on(Y,"blur",oe.blurEvent),re.on(Y,"focus",oe.focusEvent),re.on(Y,"mouseleave",oe.mouseleaveEvent),!0!==c.colorMask&&re.on(Y,"click",oe.clickEvent),re.on(Y,"dblclick",oe.dblclickEvent),re.on(Y,"paste",oe.pasteEvent),re.on(Y,"dragdrop",oe.pasteEvent),re.on(Y,"drop",oe.pasteEvent),re.on(Y,"cut",oe.cutEvent),re.on(Y,"complete",c.oncomplete),re.on(Y,"incomplete",c.onincomplete),re.on(Y,"cleared",c.oncleared),p||!0===c.inputEventOnly?Y.removeAttribute("maxLength"):(re.on(Y,"keydown",oe.keydownEvent),re.on(Y,"keypress",oe.keypressEvent)),re.on(Y,"compositionstart",e.noop),re.on(Y,"compositionupdate",e.noop),re.on(Y,"compositionend",e.noop),re.on(Y,"keyup",e.noop),re.on(Y,"input",oe.inputFallBackEvent),re.on(Y,"beforeinput",e.noop)),re.on(Y,"setvalue",oe.setValueEvent),Q=M().join(""),""!==Y.inputmask._valueGet(!0)||!1===c.clearMaskOnLostFocus||i.activeElement===Y)){var r=e.isFunction(c.onBeforeMask)&&c.onBeforeMask.call(J,Y.inputmask._valueGet(!0),c)||Y.inputmask._valueGet(!0);""!==r&&G(Y,!0,!1,X?r.split("").reverse():r.split(""));var s=E().slice();Q=s.join(""),!1===V(s)&&c.clearIncomplete&&g(),c.clearMaskOnLostFocus&&i.activeElement!==Y&&(-1===v()?s=[]:H(s)),R(Y,s),i.activeElement===Y&&I(Y,F(v()))}}(Y);break;case"format":return Z=(e.isFunction(c.onBeforeMask)&&c.onBeforeMask.call(J,r.value,c)||r.value).split(""),G(n,!0,!1,X?Z.reverse():Z),r.metadata?{value:X?E().slice().reverse().join(""):E().join(""),metadata:u.call(this,{action:"getmetadata"},s,c)}:X?E().slice().reverse().join(""):E().join("");case"isValid":r.value?(Z=r.value.split(""),G(n,!0,!0,X?Z.reverse():Z)):r.value=E().join("");for(var se=E(),le=L(),ue=se.length-1;ue>le&&!j(ue);ue--);return se.splice(le,ue+1-le),V(se)&&r.value===E().join("");case"getemptymask":return M().join("");case"remove":return Y&&Y.inputmask&&(W=e(Y),Y.inputmask._valueSet(c.autoUnmask?B(Y):Y.inputmask._valueGet(!0)),re.off(Y),Y.inputmask.colorMask&&((q=Y.inputmask.colorMask).removeChild(Y),q.parentNode.insertBefore(Y,q),q.parentNode.removeChild(q)),Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Y),"value")&&Y.inputmask.__valueGet&&Object.defineProperty(Y,"value",{get:Y.inputmask.__valueGet,set:Y.inputmask.__valueSet,configurable:!0}):i.__lookupGetter__&&Y.__lookupGetter__("value")&&Y.inputmask.__valueGet&&(Y.__defineGetter__("value",Y.inputmask.__valueGet),Y.__defineSetter__("value",Y.inputmask.__valueSet)),Y.inputmask=n),Y;case"getmetadata":if(e.isArray(s.metadata)){var ce=d(!0,0,!1).join("");return e.each(s.metadata,function(e,t){if(t.mask===ce)return ce=t,!1}),ce}return s.metadata}}var c=navigator.userAgent,p=l("touchstart"),f=/iemobile/i.test(c),m=/iphone/i.test(c)&&!f;return a.prototype={dataAttribute:"data-inputmask",defaults:{placeholder:"_",optionalmarker:["[","]"],quantifiermarker:["{","}"],groupmarker:["(",")"],alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:e.noop,onincomplete:e.noop,oncleared:e.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,alias:null,onKeyDown:e.noop,onBeforeMask:null,onBeforePaste:function(t,i){return e.isFunction(i.onBeforeMask)?i.onBeforeMask.call(this,t,i):t},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:e.noop,skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",radixPointDefinitionSymbol:n,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","password","search"],ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123,0,229],isComplete:null,canClearPosition:e.noop,preValidation:null,postValidation:null,staticDefinitionSymbol:n,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"verbatim",colorMask:!1,disablePredictiveText:!1,importDataAttributes:!0},definitions:{9:{validator:"[0-91-9]",definitionSymbol:"*"},a:{validator:"[A-Za-z�-���A-y�]",definitionSymbol:"*"},"*":{validator:"[0-91-9A-Za-z�-���A-y�]"}},aliases:{},masksCache:{},mask:function(o){var l=this;return"string"==typeof o&&(o=i.getElementById(o)||i.querySelectorAll(o)),o=o.nodeName?[o]:o,e.each(o,function(i,o){var c=e.extend(!0,{},l.opts);if(function(i,a,o,s){if(!0===a.importDataAttributes){var l,u,c,p,f=function(e,a){null!==(a=a!==n?a:i.getAttribute(s+"-"+e))&&("string"==typeof a&&(0===e.indexOf("on")?a=t[a]:"false"===a?a=!1:"true"===a&&(a=!0)),o[e]=a)},m=i.getAttribute(s);if(m&&""!==m&&(m=m.replace(/'/g,'"'),u=JSON.parse("{"+m+"}")),u){c=n;for(p in u)if("alias"===p.toLowerCase()){c=u[p];break}}f("alias",c),o.alias&&r(o.alias,o,a);for(l in a){if(u){c=n;for(p in u)if(p.toLowerCase()===l.toLowerCase()){c=u[p];break}}f(l,c)}}return e.extend(!0,a,o),("rtl"===i.dir||a.rightAlign)&&(i.style.textAlign="right"),("rtl"===i.dir||a.numericInput)&&(i.dir="ltr",i.removeAttribute("dir"),a.isRTL=!0),Object.keys(o).length}(o,c,e.extend(!0,{},l.userOptions),l.dataAttribute)){var p=s(c,l.noMasksCache);p!==n&&(o.inputmask!==n&&(o.inputmask.opts.autoUnmask=!0,o.inputmask.remove()),o.inputmask=new a(n,n,!0),o.inputmask.opts=c,o.inputmask.noMasksCache=l.noMasksCache,o.inputmask.userOptions=e.extend(!0,{},l.userOptions),o.inputmask.isRTL=c.isRTL||c.numericInput,o.inputmask.el=o,o.inputmask.maskset=p,e.data(o,"_inputmask_opts",c),u.call(o.inputmask,{action:"mask"}))}}),o&&o[0]&&o[0].inputmask||this},option:function(t,i){return"string"==typeof t?this.opts[t]:"object"===(void 0===t?"undefined":o(t))?(e.extend(this.userOptions,t),this.el&&!0!==i&&this.mask(this.el),this):void 0},unmaskedvalue:function(e){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"unmaskedvalue",value:e})},remove:function(){return u.call(this,{action:"remove"})},getemptymask:function(){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"getemptymask"})},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"isComplete"})},getmetadata:function(){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"getmetadata"})},isValid:function(e){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"isValid",value:e})},format:function(e,t){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"format",value:e,metadata:t})},analyseMask:function(t,i,r){function o(e,t,i,n){this.matches=[],this.openGroup=e||!1,this.alternatorGroup=!1,this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=i||!1,this.isAlternator=n||!1,this.quantifier={min:1,max:1}}function s(t,o,s){s=s!==n?s:t.matches.length;var l=t.matches[s-1];if(i)0===o.indexOf("[")||k&&/\\d|\\s|\\w]/i.test(o)||"."===o?t.matches.splice(s++,0,{fn:new RegExp(o,r.casing?"i":""),optionality:t.isOptional,newBlockMarker:l===n||l.def!==o,casing:null,def:o,placeholder:n,nativeDef:o}):(k&&(o=o[o.length-1]),e.each(o.split(""),function(e,i){l=t.matches[s-1],t.matches.splice(s++,0,{fn:null,optionality:t.isOptional,newBlockMarker:l===n||l.def!==i&&null!==l.fn,casing:null,def:r.staticDefinitionSymbol||i,placeholder:r.staticDefinitionSymbol!==n?i:n,nativeDef:i})})),k=!1;else{var u=(r.definitions?r.definitions[o]:n)||a.prototype.definitions[o];u&&!k?t.matches.splice(s++,0,{fn:u.validator?"string"==typeof u.validator?new RegExp(u.validator,r.casing?"i":""):new function(){this.test=u.validator}:new RegExp("."),optionality:t.isOptional,newBlockMarker:l===n||l.def!==(u.definitionSymbol||o),casing:u.casing,def:u.definitionSymbol||o,placeholder:u.placeholder,nativeDef:o}):(t.matches.splice(s++,0,{fn:null,optionality:t.isOptional,newBlockMarker:l===n||l.def!==o&&null!==l.fn,casing:null,def:r.staticDefinitionSymbol||o,placeholder:r.staticDefinitionSymbol!==n?o:n,nativeDef:o}),k=!1)}}function l(){if(b.length>0){if(s(f=b[b.length-1],c),f.isAlternator){m=b.pop();for(var e=0;e<m.matches.length;e++)m.matches[e].isGroup=!1;b.length>0?(f=b[b.length-1]).matches.push(m):y.matches.push(m)}}else s(y,c)}var u,c,p,f,m,d,h,g=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,v=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,k=!1,y=new o,b=[],x=[];for(i&&(r.optionalmarker[0]=n,r.optionalmarker[1]=n);u=i?v.exec(t):g.exec(t);){if(c=u[0],i)switch(c.charAt(0)){case"?":c="{0,1}";break;case"+":case"*":c="{"+c+"}"}if(k)l();else switch(c.charAt(0)){case r.escapeChar:k=!0,i&&l();break;case r.optionalmarker[1]:case r.groupmarker[1]:if((p=b.pop()).openGroup=!1,p!==n)if(b.length>0){if((f=b[b.length-1]).matches.push(p),f.isAlternator){m=b.pop();for(var P=0;P<m.matches.length;P++)m.matches[P].isGroup=!1,m.matches[P].alternatorGroup=!1;b.length>0?(f=b[b.length-1]).matches.push(m):y.matches.push(m)}}else y.matches.push(p);else l();break;case r.optionalmarker[0]:b.push(new o(!1,!0));break;case r.groupmarker[0]:b.push(new o(!0));break;case r.quantifiermarker[0]:var S=new o(!1,!1,!0),A=(c=c.replace(/[{}]/g,"")).split(","),C=isNaN(A[0])?A[0]:parseInt(A[0]),M=1===A.length?C:isNaN(A[1])?A[1]:parseInt(A[1]);if("*"!==M&&"+"!==M||(C="*"===M?0:1),S.quantifier={min:C,max:M},b.length>0){var E=b[b.length-1].matches;(u=E.pop()).isGroup||((h=new o(!0)).matches.push(u),u=h),E.push(u),E.push(S)}else(u=y.matches.pop()).isGroup||(i&&null===u.fn&&"."===u.def&&(u.fn=new RegExp(u.def,r.casing?"i":"")),(h=new o(!0)).matches.push(u),u=h),y.matches.push(u),y.matches.push(S);break;case r.alternatormarker:if(b.length>0){var w=(f=b[b.length-1]).matches[f.matches.length-1];d=f.openGroup&&(w.matches===n||!1===w.isGroup&&!1===w.isAlternator)?b.pop():f.matches.pop()}else d=y.matches.pop();if(d.isAlternator)b.push(d);else if(d.alternatorGroup?(m=b.pop(),d.alternatorGroup=!1):m=new o(!1,!1,!1,!0),m.matches.push(d),b.push(m),d.openGroup){d.openGroup=!1;var D=new o(!0);D.alternatorGroup=!0,b.push(D)}break;default:l()}}for(;b.length>0;)p=b.pop(),y.matches.push(p);return y.matches.length>0&&(function t(a){a&&a.matches&&e.each(a.matches,function(e,o){var l=a.matches[e+1];(l===n||l.matches===n||!1===l.isQuantifier)&&o&&o.isGroup&&(o.isGroup=!1,i||(s(o,r.groupmarker[0],0),!0!==o.openGroup&&s(o,r.groupmarker[1]))),t(o)})}(y),x.push(y)),(r.numericInput||r.isRTL)&&function e(t){t.matches=t.matches.reverse();for(var i in t.matches)if(t.matches.hasOwnProperty(i)){var a=parseInt(i);if(t.matches[i].isQuantifier&&t.matches[a+1]&&t.matches[a+1].isGroup){var o=t.matches[i];t.matches.splice(i,1),t.matches.splice(a+1,0,o)}t.matches[i].matches!==n?t.matches[i]=e(t.matches[i]):t.matches[i]=function(e){return e===r.optionalmarker[0]?e=r.optionalmarker[1]:e===r.optionalmarker[1]?e=r.optionalmarker[0]:e===r.groupmarker[0]?e=r.groupmarker[1]:e===r.groupmarker[1]&&(e=r.groupmarker[0]),e}(t.matches[i])}return t}(x[0]),x}},a.extendDefaults=function(t){e.extend(!0,a.prototype.defaults,t)},a.extendDefinitions=function(t){e.extend(!0,a.prototype.definitions,t)},a.extendAliases=function(t){e.extend(!0,a.prototype.aliases,t)},a.format=function(e,t,i){return a(t).format(e,i)},a.unmask=function(e,t){return a(t).unmaskedvalue(e)},a.isValid=function(e,t){return a(t).isValid(e)},a.remove=function(t){e.each(t,function(e,t){t.inputmask&&t.inputmask.remove()})},a.escapeRegex=function(e){return e.replace(new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"].join("|\\")+")","gim"),"\\$1")},a.keyCode={BACKSPACE:8,BACKSPACE_SAFARI:127,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,RIGHT:39,SPACE:32,TAB:9,UP:38,X:88,CONTROL:17},a})?n.apply(t,a):n)&&(e.exports=r)},function(e,t){e.exports=jQuery},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}i(4),i(7),i(8),i(9);var a=n(i(1)),r=n(i(0)),o=n(i(2));r.default===o.default&&i(10),window.Inputmask=a.default},function(e,t,i){"use strict";var n,a,r;"function"==typeof Symbol&&Symbol.iterator,a=[i(0),i(1)],void 0!==(r="function"==typeof(n=function(e,t){function i(e){if(!e.tokenizer){var t=[];for(var i in o)-1===t.indexOf(i[0])&&t.push(i[0]);e.tokenizer="("+t.join("+|")+")+?|.",e.tokenizer=new RegExp(e.tokenizer,"g")}return e.tokenizer}function n(e,n,a){for(var r,s="";r=i(a).exec(e);)void 0===n?s+=o[r[0]]?"("+o[r[0]][0]+")":t.escapeRegex(r[0]):o[r[0]]?s+=o[r[0]][3].call(n.date):s+=r[0];return s}function a(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}function r(e,t,n){var a,r,s,l,u,c,p,f,m={date:new Date(1,0,1)},d=e;if("string"==typeof d){for(;r=i(n).exec(t);){var h=d.slice(0,r[0].length);o.hasOwnProperty(r[0])&&(a=o[r[0]][2],s=o[r[0]][1],l=m,u=h,c=n,p=void 0,f=void 0,"year"===a?(l[a]=(f=4===(p=u).length?p:(new Date).getFullYear().toString().substr(0,4-p.length)+p,n.min&&n.min.year&&n.max&&n.max.year?(f=f.replace(/[^0-9]/g,""),f=p.charAt(0)===n.max.year.charAt(0)?p.replace(/[^0-9]/g,"0"):f+n.min.year.substr(f.length)):f=f.replace(/[^0-9]/g,"0"),f),l["raw"+a]=u):l[a]=c.min&&u.match(/[^0-9]/)?c.min[a]:u,void 0!==s&&s.call(l.date,"month"==a?parseInt(l[a])-1:l[a])),d=d.slice(h.length)}return m}}var o={d:["[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",Date.prototype.getDate],dd:["0[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",function(){return a(Date.prototype.getDate.call(this),2)}],ddd:[""],dddd:[""],m:["[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return Date.prototype.getMonth.call(this)+1}],mm:["0[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return a(Date.prototype.getMonth.call(this)+1,2)}],mmm:[""],mmmm:[""],yy:["[0-9]{2}",Date.prototype.setFullYear,"year",function(){return a(Date.prototype.getFullYear.call(this),2)}],yyyy:["[0-9]{4}",Date.prototype.setFullYear,"year",function(){return a(Date.prototype.getFullYear.call(this),4)}],h:["[1-9]|1[0-2]",Date.prototype.setHours,"hours",Date.prototype.getHours],hh:["0[1-9]|1[0-2]",Date.prototype.setHours,"hours",function(){return a(Date.prototype.getHours.call(this),2)}],hhh:["[0-9]+",Date.prototype.setHours,"hours",Date.prototype.getHours],H:["1?[0-9]|2[0-3]",Date.prototype.setHours,"hours",Date.prototype.getHours],HH:["[01][0-9]|2[0-3]",Date.prototype.setHours,"hours",function(){return a(Date.prototype.getHours.call(this),2)}],HHH:["[0-9]+",Date.prototype.setHours,"hours",Date.prototype.getHours],M:["[1-5]?[0-9]",Date.prototype.setMinutes,"minutes",Date.prototype.getMinutes],MM:["[0-5][0-9]",Date.prototype.setMinutes,"minutes",function(){return a(Date.prototype.getMinutes.call(this),2)}],s:["[1-5]?[0-9]",Date.prototype.setSeconds,"seconds",Date.prototype.getSeconds],ss:["[0-5][0-9]",Date.prototype.setSeconds,"seconds",function(){return a(Date.prototype.getSeconds.call(this),2)}],l:["[0-9]{3}",Date.prototype.setMilliseconds,"milliseconds",function(){return a(Date.prototype.getMilliseconds.call(this),3)}],L:["[0-9]{2}",Date.prototype.setMilliseconds,"milliseconds",function(){return a(Date.prototype.getMilliseconds.call(this),2)}],t:[""],tt:[""],T:[""],TT:[""],Z:[""],o:[""],S:[""]},s={isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};return t.extendAliases({datetime:{mask:function(e){return e.inputFormat=s[e.inputFormat]||e.inputFormat,e.displayFormat=s[e.displayFormat]||e.displayFormat||e.inputFormat,e.outputFormat=s[e.outputFormat]||e.outputFormat||e.inputFormat,e.placeholder=e.placeholder!==t.prototype.defaults.placeholder?e.placeholder:e.inputFormat,e.min=r(e.min,e.inputFormat,e),e.max=r(e.max,e.inputFormat,e),e.regex=n(e.inputFormat,void 0,e),null},inputFormat:"isoDateTime",displayFormat:void 0,outputFormat:void 0,min:null,max:null,i18n:{dayNames:["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]},postValidation:function(e,t,i){var n,a,o,s,l,u=t,c=r(e.join(""),i.inputFormat,i);return u&&c.date.getTime()==c.date.getTime()&&(s=c,l=u,u=(u=(!isFinite(s.day)||"29"==s.day&&!isFinite(s.rawyear)||new Date(s.date.getFullYear(),isFinite(s.month)?s.month:s.date.getMonth()+1,0).getDate()>=s.day)&&l)&&(n=c.date,o=!0,(a=i).min&&a.min.date.getTime()==a.min.date.getTime()&&(o=o&&a.min.date.getTime()<=n.getTime()),a.max&&a.max.date.getTime()==a.max.date.getTime()&&(o=o&&a.max.date.getTime()>=n.getTime()),o)),u},onKeyDown:function(n,r,o,s){if(n.ctrlKey&&n.keyCode===t.keyCode.RIGHT){for(var l,u=new Date,c="";l=i(s).exec(s.inputFormat);)"d"===l[0].charAt(0)?c+=a(u.getDate(),l[0].length):"m"===l[0].charAt(0)?c+=a(u.getMonth()+1,l[0].length):"yyyy"===l[0]?c+=u.getFullYear().toString():"y"===l[0].charAt(0)&&(c+=a(u.getYear(),l[0].length));this.inputmask._valueSet(c),e(this).trigger("setvalue")}},onUnMask:function(e,t,i){return n(i.outputFormat,r(e,i.inputFormat,i),i)},insertMode:!1}}),t})?n.apply(t,a):n)&&(e.exports=r)},function(e,t,i){"use strict";var n;"function"==typeof Symbol&&Symbol.iterator,void 0!==(n=function(){return window}.call(t,i,t,e))&&(e.exports=n)},function(e,t,i){"use strict";var n;"function"==typeof Symbol&&Symbol.iterator,void 0!==(n=function(){return document}.call(t,i,t,e))&&(e.exports=n)},function(e,t,i){"use strict";var n,a,r;"function"==typeof Symbol&&Symbol.iterator,a=[i(0),i(1)],void 0!==(r="function"==typeof(n=function(e,t){return t.extendDefinitions({A:{validator:"[A-Za-z�-���A-y�]",casing:"upper"},"&":{validator:"[0-9A-Za-z�-���A-y�]",casing:"upper"},"#":{validator:"[0-9A-Fa-f]",casing:"upper"}}),t.extendAliases({url:{definitions:{i:{validator:"."}},mask:"(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",insertMode:!1,autoUnmask:!1,inputmode:"url"},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function(e,t,i,n,a){return i-1>-1&&"."!==t.buffer[i-1]?(e=t.buffer[i-1]+e,e=i-2>-1&&"."!==t.buffer[i-2]?t.buffer[i-2]+e:"0"+e):e="00"+e,new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e)}}},onUnMask:function(e,t,i){return e},inputmode:"numeric"},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:!1,onBeforePaste:function(e,t){return(e=e.toLowerCase()).replace("mailto:","")},definitions:{"*":{validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",casing:"lower"},"-":{validator:"[0-9A-Za-z-]",casing:"lower"}},onUnMask:function(e,t,i){return e},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",casing:"upper"}},clearIncomplete:!0,autoUnmask:!0}}),t})?n.apply(t,a):n)&&(e.exports=r)},function(e,t,i){"use strict";var n,a,r;"function"==typeof Symbol&&Symbol.iterator,a=[i(0),i(1)],void 0!==(r="function"==typeof(n=function(e,t,i){function n(e,i){for(var n="",a=0;a<e.length;a++)t.prototype.definitions[e.charAt(a)]||i.definitions[e.charAt(a)]||i.optionalmarker.start===e.charAt(a)||i.optionalmarker.end===e.charAt(a)||i.quantifiermarker.start===e.charAt(a)||i.quantifiermarker.end===e.charAt(a)||i.groupmarker.start===e.charAt(a)||i.groupmarker.end===e.charAt(a)||i.alternatormarker===e.charAt(a)?n+="\\"+e.charAt(a):n+=e.charAt(a);return n}return t.extendAliases({numeric:{mask:function(e){if(0!==e.repeat&&isNaN(e.integerDigits)&&(e.integerDigits=e.repeat),e.repeat=0,e.groupSeparator===e.radixPoint&&e.digits&&"0"!==e.digits&&("."===e.radixPoint?e.groupSeparator=",":","===e.radixPoint?e.groupSeparator=".":e.groupSeparator="")," "===e.groupSeparator&&(e.skipOptionalPartCharacter=i),e.autoGroup=e.autoGroup&&""!==e.groupSeparator,e.autoGroup&&("string"==typeof e.groupSize&&isFinite(e.groupSize)&&(e.groupSize=parseInt(e.groupSize)),isFinite(e.integerDigits))){var t=Math.floor(e.integerDigits/e.groupSize),a=e.integerDigits%e.groupSize;e.integerDigits=parseInt(e.integerDigits)+(0===a?t-1:t),e.integerDigits<1&&(e.integerDigits="*")}e.placeholder.length>1&&(e.placeholder=e.placeholder.charAt(0)),"radixFocus"===e.positionCaretOnClick&&""===e.placeholder&&!1===e.integerOptional&&(e.positionCaretOnClick="lvp"),e.definitions[";"]=e.definitions["~"],e.definitions[";"].definitionSymbol="~",!0===e.numericInput&&(e.positionCaretOnClick="radixFocus"===e.positionCaretOnClick?"lvp":e.positionCaretOnClick,e.digitsOptional=!1,isNaN(e.digits)&&(e.digits=2),e.decimalProtect=!1);var r="[+]";if(r+=n(e.prefix,e),!0===e.integerOptional?r+="~{1,"+e.integerDigits+"}":r+="~{"+e.integerDigits+"}",e.digits!==i){e.radixPointDefinitionSymbol=e.decimalProtect?":":e.radixPoint;var o=e.digits.toString().split(",");isFinite(o[0]&&o[1]&&isFinite(o[1]))?r+=e.radixPointDefinitionSymbol+";{"+e.digits+"}":(isNaN(e.digits)||parseInt(e.digits)>0)&&(e.digitsOptional?r+="["+e.radixPointDefinitionSymbol+";{1,"+e.digits+"}]":r+=e.radixPointDefinitionSymbol+";{"+e.digits+"}")}return r+=n(e.suffix,e),r+="[-]",e.greedy=!1,r},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:".",positionCaretOnClick:"radixFocus",groupSize:3,groupSeparator:"",autoGroup:!1,allowMinus:!0,negationSymbol:{front:"-",back:""},integerDigits:"+",integerOptional:!0,prefix:"",suffix:"",rightAlign:!0,decimalProtect:!0,min:null,max:null,step:1,insertMode:!0,autoUnmask:!1,unmaskAsNumber:!1,inputmode:"numeric",preValidation:function(t,n,a,r,o){if("-"===a||a===o.negationSymbol.front)return!0===o.allowMinus&&(o.isNegative=o.isNegative===i||!o.isNegative,""===t.join("")||{caret:n,dopost:!0});if(!1===r&&a===o.radixPoint&&o.digits!==i&&(isNaN(o.digits)||parseInt(o.digits)>0)){var s=e.inArray(o.radixPoint,t);if(-1!==s)return!0===o.numericInput?n===s:{caret:s+1}}return!0},postValidation:function(n,a,r){var o=r.suffix.split(""),s=r.prefix.split("");if(a.pos===i&&a.caret!==i&&!0!==a.dopost)return a;var l=a.caret!==i?a.caret:a.pos,u=n.slice();r.numericInput&&(l=u.length-l-1,u=u.reverse());var c=u[l];if(c===r.groupSeparator&&(c=u[l+=1]),l===u.length-r.suffix.length-1&&c===r.radixPoint)return a;c!==i&&c!==r.radixPoint&&c!==r.negationSymbol.front&&c!==r.negationSymbol.back&&(u[l]="?",r.prefix.length>0&&l>=(!1===r.isNegative?1:0)&&l<r.prefix.length-1+(!1===r.isNegative?1:0)?s[l-(!1===r.isNegative?1:0)]="?":r.suffix.length>0&&l>=u.length-r.suffix.length-(!1===r.isNegative?1:0)&&(o[l-(u.length-r.suffix.length-(!1===r.isNegative?1:0))]="?")),s=s.join(""),o=o.join("");var p=u.join("").replace(s,"");if(p=(p=(p=(p=p.replace(o,"")).replace(new RegExp(t.escapeRegex(r.groupSeparator),"g"),"")).replace(new RegExp("[-"+t.escapeRegex(r.negationSymbol.front)+"]","g"),"")).replace(new RegExp(t.escapeRegex(r.negationSymbol.back)+"$"),""),isNaN(r.placeholder)&&(p=p.replace(new RegExp(t.escapeRegex(r.placeholder),"g"),"")),p.length>1&&1!==p.indexOf(r.radixPoint)&&("0"===c&&(p=p.replace(/^\?/g,"")),p=p.replace(/^0/g,"")),p.charAt(0)===r.radixPoint&&""!==r.radixPoint&&!0!==r.numericInput&&(p="0"+p),""!==p){if(p=p.split(""),(!r.digitsOptional||r.enforceDigitsOnBlur&&"blur"===a.event)&&isFinite(r.digits)){var f=e.inArray(r.radixPoint,p),m=e.inArray(r.radixPoint,u);-1===f&&(p.push(r.radixPoint),f=p.length-1);for(var d=1;d<=r.digits;d++)r.digitsOptional&&(!r.enforceDigitsOnBlur||"blur"!==a.event)||p[f+d]!==i&&p[f+d]!==r.placeholder.charAt(0)?-1!==m&&u[m+d]!==i&&(p[f+d]=p[f+d]||u[m+d]):p[f+d]=a.placeholder||r.placeholder.charAt(0)}if(!0!==r.autoGroup||""===r.groupSeparator||c===r.radixPoint&&a.pos===i&&!a.dopost)p=p.join("");else{var h=p[p.length-1]===r.radixPoint&&a.c===r.radixPoint;p=t(function(e,t){var i="";if(i+="("+t.groupSeparator+"*{"+t.groupSize+"}){*}",""!==t.radixPoint){var n=e.join("").split(t.radixPoint);n[1]&&(i+=t.radixPoint+"*{"+n[1].match(/^\d*\??\d*/)[0].length+"}")}return i}(p,r),{numericInput:!0,jitMasking:!0,definitions:{"*":{validator:"[0-9?]",cardinality:1}}}).format(p.join("")),h&&(p+=r.radixPoint),p.charAt(0)===r.groupSeparator&&p.substr(1)}}if(r.isNegative&&"blur"===a.event&&(r.isNegative="0"!==p),p=s+p,p+=o,r.isNegative&&(p=r.negationSymbol.front+p,p+=r.negationSymbol.back),p=p.split(""),c!==i)if(c!==r.radixPoint&&c!==r.negationSymbol.front&&c!==r.negationSymbol.back)(l=e.inArray("?",p))>-1?p[l]=c:l=a.caret||0;else if(c===r.radixPoint||c===r.negationSymbol.front||c===r.negationSymbol.back){var g=e.inArray(c,p);-1!==g&&(l=g)}r.numericInput&&(l=p.length-l-1,p=p.reverse());var v={caret:c===i||a.pos!==i?l+(r.numericInput?-1:1):l,buffer:p,refreshFromBuffer:a.dopost||n.join("")!==p.join("")};return v.refreshFromBuffer?v:a},onBeforeWrite:function(n,a,r,o){if(n)switch(n.type){case"keydown":return o.postValidation(a,{caret:r,dopost:!0},o);case"blur":case"checkval":var s;if((l=o).parseMinMaxOptions===i&&(null!==l.min&&(l.min=l.min.toString().replace(new RegExp(t.escapeRegex(l.groupSeparator),"g"),""),","===l.radixPoint&&(l.min=l.min.replace(l.radixPoint,".")),l.min=isFinite(l.min)?parseFloat(l.min):NaN,isNaN(l.min)&&(l.min=Number.MIN_VALUE)),null!==l.max&&(l.max=l.max.toString().replace(new RegExp(t.escapeRegex(l.groupSeparator),"g"),""),","===l.radixPoint&&(l.max=l.max.replace(l.radixPoint,".")),l.max=isFinite(l.max)?parseFloat(l.max):NaN,isNaN(l.max)&&(l.max=Number.MAX_VALUE)),l.parseMinMaxOptions="done"),null!==o.min||null!==o.max){if(s=o.onUnMask(a.join(""),i,e.extend({},o,{unmaskAsNumber:!0})),null!==o.min&&s<o.min)return o.isNegative=o.min<0,o.postValidation(o.min.toString().replace(".",o.radixPoint).split(""),{caret:r,dopost:!0,placeholder:"0"},o);if(null!==o.max&&s>o.max)return o.isNegative=o.max<0,o.postValidation(o.max.toString().replace(".",o.radixPoint).split(""),{caret:r,dopost:!0,placeholder:"0"},o)}return o.postValidation(a,{caret:r,placeholder:"0",event:"blur"},o);case"_checkval":return{caret:r}}var l},regex:{integerPart:function(e,i){return i?new RegExp("["+t.escapeRegex(e.negationSymbol.front)+"+]?"):new RegExp("["+t.escapeRegex(e.negationSymbol.front)+"+]?\\d+")},integerNPart:function(e){return new RegExp("[\\d"+t.escapeRegex(e.groupSeparator)+t.escapeRegex(e.placeholder.charAt(0))+"]+")}},definitions:{"~":{validator:function(e,n,a,r,o,s){var l=r?new RegExp("[0-9"+t.escapeRegex(o.groupSeparator)+"]").test(e):new RegExp("[0-9]").test(e);if(!0===l){if(!0!==o.numericInput&&n.validPositions[a]!==i&&"~"===n.validPositions[a].match.def&&!s){var u=n.buffer.join(""),c=(u=(u=u.replace(new RegExp("[-"+t.escapeRegex(o.negationSymbol.front)+"]","g"),"")).replace(new RegExp(t.escapeRegex(o.negationSymbol.back)+"$"),"")).split(o.radixPoint);c.length>1&&(c[1]=c[1].replace(/0/g,o.placeholder.charAt(0))),"0"===c[0]&&(c[0]=c[0].replace(/0/g,o.placeholder.charAt(0))),u=c[0]+o.radixPoint+c[1]||"";var p=n._buffer.join("");for(u===o.radixPoint&&(u=p);null===u.match(t.escapeRegex(p)+"$");)p=p.slice(1);l=(u=(u=u.replace(p,"")).split(""))[a]===i?{pos:a,remove:a}:{pos:a}}}else r||e!==o.radixPoint||n.validPositions[a-1]!==i||(n.buffer[a]="0",l={pos:a+1});return l},cardinality:1},"+":{validator:function(e,t,i,n,a){return a.allowMinus&&("-"===e||e===a.negationSymbol.front)},cardinality:1,placeholder:""},"-":{validator:function(e,t,i,n,a){return a.allowMinus&&e===a.negationSymbol.back},cardinality:1,placeholder:""},":":{validator:function(e,i,n,a,r){var o="["+t.escapeRegex(r.radixPoint)+"]",s=new RegExp(o).test(e);return s&&i.validPositions[n]&&i.validPositions[n].match.placeholder===r.radixPoint&&(s={caret:n+1}),s},cardinality:1,placeholder:function(e){return e.radixPoint}}},onUnMask:function(e,i,n){if(""===i&&!0===n.nullable)return i;var a=e.replace(n.prefix,"");return a=(a=a.replace(n.suffix,"")).replace(new RegExp(t.escapeRegex(n.groupSeparator),"g"),""),""!==n.placeholder.charAt(0)&&(a=a.replace(new RegExp(n.placeholder.charAt(0),"g"),"0")),n.unmaskAsNumber?(""!==n.radixPoint&&-1!==a.indexOf(n.radixPoint)&&(a=a.replace(t.escapeRegex.call(this,n.radixPoint),".")),a=(a=a.replace(new RegExp("^"+t.escapeRegex(n.negationSymbol.front)),"-")).replace(new RegExp(t.escapeRegex(n.negationSymbol.back)+"$"),""),Number(a)):a},isComplete:function(e,i){var n=e.join("");if(e.slice().join("")!==n)return!1;var a=n.replace(i.prefix,"");return a=(a=a.replace(i.suffix,"")).replace(new RegExp(t.escapeRegex(i.groupSeparator)+"([0-9]{3})","g"),"$1"),","===i.radixPoint&&(a=a.replace(t.escapeRegex(i.radixPoint),".")),isFinite(a)},onBeforeMask:function(e,n){if(n.isNegative=i,e=e.toString().charAt(e.length-1)===n.radixPoint?e.toString().substr(0,e.length-1):e.toString(),""!==n.radixPoint&&isFinite(e)){var a=e.split("."),r=""!==n.groupSeparator?parseInt(n.groupSize):0;2===a.length&&(a[0].length>r||a[1].length>r||a[0].length<=r&&a[1].length<r)&&(e=e.replace(".",n.radixPoint))}var o=e.match(/,/g),s=e.match(/\./g);if(e=s&&o?s.length>o.length?(e=e.replace(/\./g,"")).replace(",",n.radixPoint):o.length>s.length?(e=e.replace(/,/g,"")).replace(".",n.radixPoint):e.indexOf(".")<e.indexOf(",")?e.replace(/\./g,""):e.replace(/,/g,""):e.replace(new RegExp(t.escapeRegex(n.groupSeparator),"g"),""),0===n.digits&&(-1!==e.indexOf(".")?e=e.substring(0,e.indexOf(".")):-1!==e.indexOf(",")&&(e=e.substring(0,e.indexOf(",")))),""!==n.radixPoint&&isFinite(n.digits)&&-1!==e.indexOf(n.radixPoint)){var l=e.split(n.radixPoint)[1].match(new RegExp("\\d*"))[0];if(parseInt(n.digits)<l.toString().length){var u=Math.pow(10,parseInt(n.digits));e=e.replace(t.escapeRegex(n.radixPoint),"."),e=(e=Math.round(parseFloat(e)*u)/u).toString().replace(".",n.radixPoint)}}return e},canClearPosition:function(e,t,i,n,a){var r=e.validPositions[t],o=r.input!==a.radixPoint||null!==e.validPositions[t].match.fn&&!1===a.decimalProtect||r.input===a.radixPoint&&e.validPositions[t+1]&&null===e.validPositions[t+1].match.fn||isFinite(r.input)||t===i||r.input===a.groupSeparator||r.input===a.negationSymbol.front||r.input===a.negationSymbol.back;return!o||"+"!==r.match.nativeDef&&"-"!==r.match.nativeDef||(a.isNegative=!1),o},onKeyDown:function(i,n,a,r){var o=e(this);if(i.ctrlKey)switch(i.keyCode){case t.keyCode.UP:o.val(parseFloat(this.inputmask.unmaskedvalue())+parseInt(r.step)),o.trigger("setvalue");break;case t.keyCode.DOWN:o.val(parseFloat(this.inputmask.unmaskedvalue())-parseInt(r.step)),o.trigger("setvalue")}}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:!0,digits:2,digitsOptional:!1,clearMaskOnLostFocus:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0,radixPoint:""},percentage:{alias:"numeric",digits:2,digitsOptional:!0,radixPoint:".",placeholder:"0",autoGroup:!1,min:0,max:100,suffix:" %",allowMinus:!1}}),t})?n.apply(t,a):n)&&(e.exports=r)},function(e,t,i){"use strict";var n,a,r;"function"==typeof Symbol&&Symbol.iterator,a=[i(0),i(1)],void 0!==(r="function"==typeof(n=function(e,t){function i(e,t){var i=(e.mask||e).replace(/#/g,"0").replace(/\)/,"0").replace(/[+()#-]/g,""),n=(t.mask||t).replace(/#/g,"0").replace(/\)/,"0").replace(/[+()#-]/g,"");return i.localeCompare(n)}var n=t.prototype.analyseMask;return t.prototype.analyseMask=function(t,i,a){var r={};return a.phoneCodes&&(a.phoneCodes&&a.phoneCodes.length>1e3&&(function e(i,n,a){n=n||"",a=a||r,""!==n&&(a[n]={});for(var o="",s=a[n]||a,l=i.length-1;l>=0;l--)s[o=(t=i[l].mask||i[l]).substr(0,1)]=s[o]||[],s[o].unshift(t.substr(1)),i.splice(l,1);for(var u in s)s[u].length>500&&e(s[u].slice(),u,s)}((t=t.substr(1,t.length-2)).split(a.groupmarker[1]+a.alternatormarker+a.groupmarker[0])),t=function t(i){var n="",r=[];for(var o in i)e.isArray(i[o])?1===i[o].length?r.push(o+i[o]):r.push(o+a.groupmarker[0]+i[o].join(a.groupmarker[1]+a.alternatormarker+a.groupmarker[0])+a.groupmarker[1]):r.push(o+t(i[o]));return 1===r.length?n+=r[0]:n+=a.groupmarker[0]+r.join(a.groupmarker[1]+a.alternatormarker+a.groupmarker[0])+a.groupmarker[1],n}(r)),t=t.replace(/9/g,"\\9")),n.call(this,t,i,a)},t.extendAliases({abstractphone:{groupmarker:["<",">"],countrycode:"",phoneCodes:[],keepStatic:"auto",mask:function(e){return e.definitions={"#":t.prototype.definitions[9]},e.phoneCodes.sort(i)},onBeforeMask:function(e,t){var i=e.replace(/^0{1,2}/,"").replace(/[\s]/g,"");return(i.indexOf(t.countrycode)>1||-1===i.indexOf(t.countrycode))&&(i="+"+t.countrycode+i),i},onUnMask:function(e,t,i){return e.replace(/[()#-]/g,"")},inputmode:"tel"}}),t})?n.apply(t,a):n)&&(e.exports=r)},function(e,t,i){"use strict";var n,a,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};a=[i(2),i(1)],void 0!==(r="function"==typeof(n=function(e,t){return void 0===e.fn.inputmask&&(e.fn.inputmask=function(i,n){var a,r=this[0];if(void 0===n&&(n={}),"string"==typeof i)switch(i){case"unmaskedvalue":return r&&r.inputmask?r.inputmask.unmaskedvalue():e(r).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove()});case"getemptymask":return r&&r.inputmask?r.inputmask.getemptymask():"";case"hasMaskedValue":return!(!r||!r.inputmask)&&r.inputmask.hasMaskedValue();case"isComplete":return!r||!r.inputmask||r.inputmask.isComplete();case"getmetadata":return r&&r.inputmask?r.inputmask.getmetadata():void 0;case"setvalue":e(r).val(n),r&&void 0===r.inputmask&&e(r).triggerHandler("setvalue");break;case"option":if("string"!=typeof n)return this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(n)});if(r&&void 0!==r.inputmask)return r.inputmask.option(n);break;default:return n.alias=i,a=new t(n),this.each(function(){a.mask(this)})}else{if("object"==(void 0===i?"undefined":o(i)))return a=new t(i),void 0===i.mask&&void 0===i.alias?this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(i);a.mask(this)}):this.each(function(){a.mask(this)});if(void 0===i)return this.each(function(){(a=new t(n)).mask(this)})}}),e.fn.inputmask})?n.apply(t,a):n)&&(e.exports=r)}]);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:74:"/bitrix/templates/aspro_optimus/js/jquery.easing.1.3.min.js?15898055533338";s:6:"source";s:55:"/bitrix/templates/aspro_optimus/js/jquery.easing.1.3.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(n,e,t,u,a){return jQuery.easing[jQuery.easing.def](n,e,t,u,a)},easeInQuad:function(n,e,t,u,a){return u*(e/=a)*e+t},easeOutQuad:function(n,e,t,u,a){return-u*(e/=a)*(e-2)+t},easeInOutQuad:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e+t:-u/2*(--e*(e-2)-1)+t},easeInCubic:function(n,e,t,u,a){return u*(e/=a)*e*e+t},easeOutCubic:function(n,e,t,u,a){return u*((e=e/a-1)*e*e+1)+t},easeInOutCubic:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e+t:u/2*((e-=2)*e*e+2)+t},easeInQuart:function(n,e,t,u,a){return u*(e/=a)*e*e*e+t},easeOutQuart:function(n,e,t,u,a){return-u*((e=e/a-1)*e*e*e-1)+t},easeInOutQuart:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e*e+t:-u/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(n,e,t,u,a){return u*(e/=a)*e*e*e*e+t},easeOutQuint:function(n,e,t,u,a){return u*((e=e/a-1)*e*e*e*e+1)+t},easeInOutQuint:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e*e*e+t:u/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(n,e,t,u,a){return-u*Math.cos(e/a*(Math.PI/2))+u+t},easeOutSine:function(n,e,t,u,a){return u*Math.sin(e/a*(Math.PI/2))+t},easeInOutSine:function(n,e,t,u,a){return-u/2*(Math.cos(Math.PI*e/a)-1)+t},easeInExpo:function(n,e,t,u,a){return 0==e?t:u*Math.pow(2,10*(e/a-1))+t},easeOutExpo:function(n,e,t,u,a){return e==a?t+u:u*(-Math.pow(2,-10*e/a)+1)+t},easeInOutExpo:function(n,e,t,u,a){return 0==e?t:e==a?t+u:(e/=a/2)<1?u/2*Math.pow(2,10*(e-1))+t:u/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(n,e,t,u,a){return-u*(Math.sqrt(1-(e/=a)*e)-1)+t},easeOutCirc:function(n,e,t,u,a){return u*Math.sqrt(1-(e=e/a-1)*e)+t},easeInOutCirc:function(n,e,t,u,a){return(e/=a/2)<1?-u/2*(Math.sqrt(1-e*e)-1)+t:u/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(1==(e/=a))return t+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return-(s*Math.pow(2,10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i))+t},easeOutElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(1==(e/=a))return t+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return s*Math.pow(2,-10*e)*Math.sin((e*a-r)*(2*Math.PI)/i)+u+t},easeInOutElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(2==(e/=a/2))return t+u;if(i||(i=a*(.3*1.5)),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return 1>e?-.5*(s*Math.pow(2,10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i))+t:s*Math.pow(2,-10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i)*.5+u+t},easeInBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),u*(e/=a)*e*((r+1)*e-r)+t},easeOutBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),u*((e=e/a-1)*e*((r+1)*e+r)+1)+t},easeInOutBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),(e/=a/2)<1?u/2*(e*e*(((r*=1.525)+1)*e-r))+t:u/2*((e-=2)*e*(((r*=1.525)+1)*e+r)+2)+t},easeInBounce:function(n,e,t,u,a){return u-jQuery.easing.easeOutBounce(n,a-e,0,u,a)+t},easeOutBounce:function(n,e,t,u,a){return(e/=a)<1/2.75?u*(7.5625*e*e)+t:2/2.75>e?u*(7.5625*(e-=1.5/2.75)*e+.75)+t:2.5/2.75>e?u*(7.5625*(e-=2.25/2.75)*e+.9375)+t:u*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(n,e,t,u,a){return a/2>e?.5*jQuery.easing.easeInBounce(n,2*e,0,u,a)+t:.5*jQuery.easing.easeOutBounce(n,2*e-a,0,u,a)+.5*u+t}});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:64:"/bitrix/templates/aspro_optimus/js/equalize.min.js?1589805553588";s:6:"source";s:50:"/bitrix/templates/aspro_optimus/js/equalize.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * equalize.js
 * Author & copyright (c) 2012: Tim Svensen
 * Dual MIT & GPL license
 *
 * Page: http://tsvensen.github.com/equalize.js
 * Repo: https://github.com/tsvensen/equalize.js/
 */
(function(b){b.fn.equalize=function(a){var d=!1,g=!1,c,e;b.isPlainObject(a)?(c=a.equalize||"height",d=a.children||!1,g=a.reset||!1):c=a||"height";if(!b.isFunction(b.fn[c]))return!1;e=0<c.indexOf("eight")?"height":"width";return this.each(function(){var a=d?b(this).find(d):b(this).children(),f=0;a.each(function(){var a=b(this);g&&a.css(e,"");a=a[c]();a>f&&(f=a)});a.css(e,f+"px")})}})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:75:"/bitrix/templates/aspro_optimus/js/jquery.alphanumeric.min.js?1589805553942";s:6:"source";s:57:"/bitrix/templates/aspro_optimus/js/jquery.alphanumeric.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(n){n.fn.alphanumeric=function(r){var a,e,c=n(this),t="abcdefghijklmnopqrstuvwxyz",i=n.extend({ichars:"!@#$%^&*()+=[]\\';,/{}|\":<>?~`.- _",nchars:"",allow:""},r),h=i.allow.split(""),l=0;for(l;l<h.length;l++)-1!=i.ichars.indexOf(h[l])&&(h[l]="\\"+h[l]);return i.nocaps&&(i.nchars+=t.toUpperCase()),i.allcaps&&(i.nchars+=t),i.allow=h.join("|"),e=new RegExp(i.allow,"gi"),a=(i.ichars+i.nchars).replace(e,""),c.keypress(function(n){var r=String.fromCharCode(n.charCode?n.charCode:n.which);-1==a.indexOf(r)||n.ctrlKey||n.preventDefault()}),c.blur(function(){var n=c.val(),r=0;for(r;r<n.length;r++)if(-1!=a.indexOf(n[r]))return c.val(""),!1;return!1}),c},n.fn.numeric=function(r){var a="abcdefghijklmnopqrstuvwxyz",e=a.toUpperCase();return this.each(function(){n(this).alphanumeric(n.extend({nchars:a+e},r))})},n.fn.alpha=function(r){var a="1234567890";return this.each(function(){n(this).alphanumeric(n.extend({nchars:a},r))})}}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:70:"/bitrix/templates/aspro_optimus/js/jquery.cookie.min.js?15898055533066";s:6:"source";s:51:"/bitrix/templates/aspro_optimus/js/jquery.cookie.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

/* End */
;
; /* Start:"a:4:{s:4:"full";s:70:"/bitrix/templates/aspro_optimus/js/jquery.plugin.min.js?15898055533181";s:6:"source";s:55:"/bitrix/templates/aspro_optimus/js/jquery.plugin.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/** Abstract base class for collection plugins v1.0.1.
	Written by Keith Wood (kbwood{at}iinet.com.au) December 2013.
	Licensed under the MIT (http://keith-wood.name/licence.html) license. */
(function(){var j=false;window.JQClass=function(){};JQClass.classes={};JQClass.extend=function extender(f){var g=this.prototype;j=true;var h=new this();j=false;for(var i in f){h[i]=typeof f[i]=='function'&&typeof g[i]=='function'?(function(d,e){return function(){var b=this._super;this._super=function(a){return g[d].apply(this,a||[])};var c=e.apply(this,arguments);this._super=b;return c}})(i,f[i]):f[i]}function JQClass(){if(!j&&this._init){this._init.apply(this,arguments)}}JQClass.prototype=h;JQClass.prototype.constructor=JQClass;JQClass.extend=extender;return JQClass}})();(function($){JQClass.classes.JQPlugin=JQClass.extend({name:'plugin',defaultOptions:{},regionalOptions:{},_getters:[],_getMarker:function(){return'is-'+this.name},_init:function(){$.extend(this.defaultOptions,(this.regionalOptions&&this.regionalOptions[''])||{});var c=camelCase(this.name);$[c]=this;$.fn[c]=function(a){var b=Array.prototype.slice.call(arguments,1);if($[c]._isNotChained(a,b)){return $[c][a].apply($[c],[this[0]].concat(b))}return this.each(function(){if(typeof a==='string'){if(a[0]==='_'||!$[c][a]){throw'Unknown method: '+a;}$[c][a].apply($[c],[this].concat(b))}else{$[c]._attach(this,a)}})}},setDefaults:function(a){$.extend(this.defaultOptions,a||{})},_isNotChained:function(a,b){if(a==='option'&&(b.length===0||(b.length===1&&typeof b[0]==='string'))){return true}return $.inArray(a,this._getters)>-1},_attach:function(a,b){a=$(a);if(a.hasClass(this._getMarker())){return}a.addClass(this._getMarker());b=$.extend({},this.defaultOptions,this._getMetadata(a),b||{});var c=$.extend({name:this.name,elem:a,options:b},this._instSettings(a,b));a.data(this.name,c);this._postAttach(a,c);this.option(a,b)},_instSettings:function(a,b){return{}},_postAttach:function(a,b){},_getMetadata:function(d){try{var f=d.data(this.name.toLowerCase())||'';f=f.replace(/'/g,'"');f=f.replace(/([a-zA-Z0-9]+):/g,function(a,b,i){var c=f.substring(0,i).match(/"/g);return(!c||c.length%2===0?'"'+b+'":':b+':')});f=$.parseJSON('{'+f+'}');for(var g in f){var h=f[g];if(typeof h==='string'&&h.match(/^new Date\((.*)\)$/)){f[g]=eval(h)}}return f}catch(e){return{}}},_getInst:function(a){return $(a).data(this.name)||{}},option:function(a,b,c){a=$(a);var d=a.data(this.name);if(!b||(typeof b==='string'&&c==null)){var e=(d||{}).options;return(e&&b?e[b]:e)}if(!a.hasClass(this._getMarker())){return}var e=b||{};if(typeof b==='string'){e={};e[b]=c}this._optionsChanged(a,d,e);$.extend(d.options,e)},_optionsChanged:function(a,b,c){},destroy:function(a){a=$(a);if(!a.hasClass(this._getMarker())){return}this._preDestroy(a,this._getInst(a));a.removeData(this.name).removeClass(this._getMarker())},_preDestroy:function(a,b){}});function camelCase(c){return c.replace(/-([a-z])/g,function(a,b){return b.toUpperCase()})}$.JQPlugin={createPlugin:function(a,b){if(typeof a==='object'){b=a;a='JQPlugin'}a=camelCase(a);var c=camelCase(b.name);JQClass.classes[c]=JQClass.classes[a].extend(b);new JQClass.classes[c]()}}})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:74:"/bitrix/templates/aspro_optimus/js/jquery.countdown.min.js?158980555313137";s:6:"source";s:58:"/bitrix/templates/aspro_optimus/js/jquery.countdown.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(e){var t="countdown",i=0,s=1,n=2,o=3,r=4,a=5,l=6;e.JQPlugin.createPlugin({name:t,defaultOptions:{until:null,since:null,timezone:null,serverSync:null,format:"dHMS",layout:"",compact:!1,padZeroes:!1,significant:0,description:"",expiryUrl:"",expiryText:"",alwaysExpire:!1,onExpiry:null,onTick:null,tickInterval:1},regionalOptions:{"":{labels:["Years","Months","Weeks","Days","Hours","Minutes","Seconds"],labels1:["Year","Month","Week","Day","Hour","Minute","Second"],compactLabels:["y","m","w","d"],whichLabels:null,digits:["0","1","2","3","4","5","6","7","8","9"],timeSeparator:":",isRTL:!1}},_getters:["getTimes"],_rtlClass:t+"-rtl",_sectionClass:t+"-section",_amountClass:t+"-amount",_periodClass:t+"-period",_rowClass:t+"-row",_holdingClass:t+"-holding",_showClass:t+"-show",_descrClass:t+"-descr",_timerElems:[],_init:function(){function t(e){var a=1e12>e?n?performance.now()+performance.timing.navigationStart:s():e||s();a-r>=1e3&&(i._updateElems(),r=a),o(t)}var i=this;this._super(),this._serverSyncs=[];var s="function"==typeof Date.now?Date.now:function(){return(new Date).getTime()},n=window.performance&&"function"==typeof window.performance.now,o=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||null,r=0;!o||e.noRequestAnimationFrame?(e.noRequestAnimationFrame=null,setInterval(function(){i._updateElems()},980)):(r=window.animationStartTime||window.webkitAnimationStartTime||window.mozAnimationStartTime||window.oAnimationStartTime||window.msAnimationStartTime||s(),o(t))},UTCDate:function(e,t,i,s,n,o,r,a){"object"==typeof t&&t.constructor==Date&&(a=t.getMilliseconds(),r=t.getSeconds(),o=t.getMinutes(),n=t.getHours(),s=t.getDate(),i=t.getMonth(),t=t.getFullYear());var l=new Date;return l.setUTCFullYear(t),l.setUTCDate(1),l.setUTCMonth(i||0),l.setUTCDate(s||1),l.setUTCHours(n||0),l.setUTCMinutes((o||0)-(Math.abs(e)<30?60*e:e)),l.setUTCSeconds(r||0),l.setUTCMilliseconds(a||0),l},periodsToSeconds:function(e){return 31557600*e[0]+2629800*e[1]+604800*e[2]+86400*e[3]+3600*e[4]+60*e[5]+e[6]},resync:function(){var t=this;e("."+this._getMarker()).each(function(){var i=e.data(this,t.name);if(i.options.serverSync){for(var s=null,n=0;n<t._serverSyncs.length;n++)if(t._serverSyncs[n][0]==i.options.serverSync){s=t._serverSyncs[n];break}if(null==s[2]){var o=e.isFunction(i.options.serverSync)?i.options.serverSync.apply(this,[]):null;s[2]=(o?(new Date).getTime()-o.getTime():0)-s[1]}i._since&&i._since.setMilliseconds(i._since.getMilliseconds()+s[2]),i._until.setMilliseconds(i._until.getMilliseconds()+s[2])}});for(var i=0;i<t._serverSyncs.length;i++)null!=t._serverSyncs[i][2]&&(t._serverSyncs[i][1]+=t._serverSyncs[i][2],delete t._serverSyncs[i][2])},_instSettings:function(e,t){return{_periods:[0,0,0,0,0,0,0]}},_addElem:function(e){this._hasElem(e)||this._timerElems.push(e)},_hasElem:function(t){return e.inArray(t,this._timerElems)>-1},_removeElem:function(t){this._timerElems=e.map(this._timerElems,function(e){return e==t?null:e})},_updateElems:function(){for(var e=this._timerElems.length-1;e>=0;e--)this._updateCountdown(this._timerElems[e])},_optionsChanged:function(t,i,s){s.layout&&(s.layout=s.layout.replace(/&lt;/g,"<").replace(/&gt;/g,">")),this._resetExtraLabels(i.options,s);var n=i.options.timezone!=s.timezone;e.extend(i.options,s),this._adjustSettings(t,i,null!=s.until||null!=s.since||n);var o=new Date;(i._since&&i._since<o||i._until&&i._until>o)&&this._addElem(t[0]),this._updateCountdown(t,i)},_updateCountdown:function(t,i){if(t=t.jquery?t:e(t),i=i||this._getInst(t),i&&i.options){if(t.html(this._generateHTML(i)).toggleClass(this._rtlClass,i.options.isRTL),e.isFunction(i.options.onTick)){var s="lap"!=i._hold?i._periods:this._calculatePeriods(i,i._show,i.options.significant,new Date);(1==i.options.tickInterval||this.periodsToSeconds(s)%i.options.tickInterval==0)&&i.options.onTick.apply(t[0],[s])}var n="pause"!=i._hold&&(i._since?i._now.getTime()<i._since.getTime():i._now.getTime()>=i._until.getTime());if(n&&!i._expiring){if(i._expiring=!0,this._hasElem(t[0])||i.options.alwaysExpire){if(this._removeElem(t[0]),e.isFunction(i.options.onExpiry)&&i.options.onExpiry.apply(t[0],[]),i.options.expiryText){var o=i.options.layout;i.options.layout=i.options.expiryText,this._updateCountdown(t[0],i),i.options.layout=o}i.options.expiryUrl&&(window.location=i.options.expiryUrl)}i._expiring=!1}else"pause"==i._hold&&this._removeElem(t[0])}},_resetExtraLabels:function(e,t){for(var i in t)i.match(/[Ll]abels[02-9]|compactLabels1/)&&(e[i]=t[i]);for(var i in e)i.match(/[Ll]abels[02-9]|compactLabels1/)&&"undefined"==typeof t[i]&&(e[i]=null)},_adjustSettings:function(t,i,s){for(var n=null,o=0;o<this._serverSyncs.length;o++)if(this._serverSyncs[o][0]==i.options.serverSync){n=this._serverSyncs[o][1];break}if(null!=n)var r=i.options.serverSync?n:0,a=new Date;else{var l=e.isFunction(i.options.serverSync)?i.options.serverSync.apply(t[0],[]):null,a=new Date,r=l?a.getTime()-l.getTime():0;this._serverSyncs.push([i.options.serverSync,r])}var _=i.options.timezone;_=null==_?-a.getTimezoneOffset():_,(s||!s&&null==i._until&&null==i._since)&&(i._since=i.options.since,null!=i._since&&(i._since=this.UTCDate(_,this._determineTime(i._since,null)),i._since&&r&&i._since.setMilliseconds(i._since.getMilliseconds()+r)),i._until=this.UTCDate(_,this._determineTime(i.options.until,a)),r&&i._until.setMilliseconds(i._until.getMilliseconds()+r)),i._show=this._determineShow(i)},_preDestroy:function(e,t){this._removeElem(e[0]),e.empty()},pause:function(e){this._hold(e,"pause")},lap:function(e){this._hold(e,"lap")},resume:function(e){this._hold(e,null)},toggle:function(t){var i=e.data(t,this.name)||{};this[i._hold?"resume":"pause"](t)},toggleLap:function(t){var i=e.data(t,this.name)||{};this[i._hold?"resume":"lap"](t)},_hold:function(t,i){var s=e.data(t,this.name);if(s){if("pause"==s._hold&&!i){s._periods=s._savePeriods;var n=s._since?"-":"+";s[s._since?"_since":"_until"]=this._determineTime(n+s._periods[0]+"y"+n+s._periods[1]+"o"+n+s._periods[2]+"w"+n+s._periods[3]+"d"+n+s._periods[4]+"h"+n+s._periods[5]+"m"+n+s._periods[6]+"s"),this._addElem(t)}s._hold=i,s._savePeriods="pause"==i?s._periods:null,e.data(t,this.name,s),this._updateCountdown(t,s)}},getTimes:function(t){var i=e.data(t,this.name);return i?"pause"==i._hold?i._savePeriods:i._hold?this._calculatePeriods(i,i._show,i.options.significant,new Date):i._periods:null},_determineTime:function(e,t){var i=this,s=function(e){var t=new Date;return t.setTime(t.getTime()+1e3*e),t},n=function(e){e=e.toLowerCase();for(var t=new Date,s=t.getFullYear(),n=t.getMonth(),o=t.getDate(),r=t.getHours(),a=t.getMinutes(),l=t.getSeconds(),_=/([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g,p=_.exec(e);p;){switch(p[2]||"s"){case"s":l+=parseInt(p[1],10);break;case"m":a+=parseInt(p[1],10);break;case"h":r+=parseInt(p[1],10);break;case"d":o+=parseInt(p[1],10);break;case"w":o+=7*parseInt(p[1],10);break;case"o":n+=parseInt(p[1],10),o=Math.min(o,i._getDaysInMonth(s,n));break;case"y":s+=parseInt(p[1],10),o=Math.min(o,i._getDaysInMonth(s,n))}p=_.exec(e)}return new Date(s,n,o,r,a,l,0)},o=null==e?t:"string"==typeof e?n(e):"number"==typeof e?s(e):e;return o&&o.setMilliseconds(0),o},_getDaysInMonth:function(e,t){return 32-new Date(e,t,32).getDate()},_normalLabels:function(e){return e},_generateHTML:function(t){var _=this;t._periods=t._hold?t._periods:this._calculatePeriods(t,t._show,t.options.significant,new Date);for(var p=!1,c=0,u=t.options.significant,d=e.extend({},t._show),h=i;l>=h;h++)p|="?"==t._show[h]&&t._periods[h]>0,d[h]="?"!=t._show[h]||p?t._show[h]:null,c+=d[h]?1:0,u-=t._periods[h]>0?1:0;for(var m=[!1,!1,!1,!1,!1,!1,!1],h=l;h>=i;h--)t._show[h]&&(t._periods[h]?m[h]=!0:(m[h]=u>0,u--));var g=t.options.compact?t.options.compactLabels:t.options.labels,f=t.options.whichLabels||this._normalLabels,w=function(e){var i=t.options["compactLabels"+f(t._periods[e])];return d[e]?_._translateDigits(t,t._periods[e])+(i?i[e]:g[e])+" ":""},y=t.options.padZeroes?2:1,v=function(e){var i=t.options["labels"+f(t._periods[e])];return!t.options.significant&&d[e]||t.options.significant&&m[e]?'<span class="'+_._sectionClass+'"><span class="'+_._amountClass+'">'+_._minDigits(t,t._periods[e],y)+'</span><span class="'+_._periodClass+'">'+(i?i[e]:g[e])+"</span></span>":""};return t.options.layout?this._buildLayout(t,d,t.options.layout,t.options.compact,t.options.significant,m):(t.options.compact?'<span class="'+this._rowClass+" "+this._amountClass+(t._hold?" "+this._holdingClass:"")+'">'+w(i)+w(s)+w(n)+w(o)+(d[r]?this._minDigits(t,t._periods[r],2):"")+(d[a]?(d[r]?t.options.timeSeparator:"")+this._minDigits(t,t._periods[a],2):"")+(d[l]?(d[r]||d[a]?t.options.timeSeparator:"")+this._minDigits(t,t._periods[l],2):""):'<span class="'+this._rowClass+" "+this._showClass+(t.options.significant||c)+(t._hold?" "+this._holdingClass:"")+'">'+v(i)+v(s)+v(n)+v(o)+v(r)+v(a)+v(l))+"</span>"+(t.options.description?'<span class="'+this._rowClass+" "+this._descrClass+'">'+t.options.description+"</span>":"")},_buildLayout:function(t,_,p,c,u,d){for(var h=t.options[c?"compactLabels":"labels"],m=t.options.whichLabels||this._normalLabels,g=function(e){return(t.options[(c?"compactLabels":"labels")+m(t._periods[e])]||h)[e]},f=function(e,i){return t.options.digits[Math.floor(e/i)%10]},w={desc:t.options.description,sep:t.options.timeSeparator,yl:g(i),yn:this._minDigits(t,t._periods[i],1),ynn:this._minDigits(t,t._periods[i],2),ynnn:this._minDigits(t,t._periods[i],3),y1:f(t._periods[i],1),y10:f(t._periods[i],10),y100:f(t._periods[i],100),y1000:f(t._periods[i],1e3),ol:g(s),on:this._minDigits(t,t._periods[s],1),onn:this._minDigits(t,t._periods[s],2),onnn:this._minDigits(t,t._periods[s],3),o1:f(t._periods[s],1),o10:f(t._periods[s],10),o100:f(t._periods[s],100),o1000:f(t._periods[s],1e3),wl:g(n),wn:this._minDigits(t,t._periods[n],1),wnn:this._minDigits(t,t._periods[n],2),wnnn:this._minDigits(t,t._periods[n],3),w1:f(t._periods[n],1),w10:f(t._periods[n],10),w100:f(t._periods[n],100),w1000:f(t._periods[n],1e3),dl:g(o),dn:this._minDigits(t,t._periods[o],1),dnn:this._minDigits(t,t._periods[o],2),dnnn:this._minDigits(t,t._periods[o],3),d1:f(t._periods[o],1),d10:f(t._periods[o],10),d100:f(t._periods[o],100),d1000:f(t._periods[o],1e3),hl:g(r),hn:this._minDigits(t,t._periods[r],1),hnn:this._minDigits(t,t._periods[r],2),hnnn:this._minDigits(t,t._periods[r],3),h1:f(t._periods[r],1),h10:f(t._periods[r],10),h100:f(t._periods[r],100),h1000:f(t._periods[r],1e3),ml:g(a),mn:this._minDigits(t,t._periods[a],1),mnn:this._minDigits(t,t._periods[a],2),mnnn:this._minDigits(t,t._periods[a],3),m1:f(t._periods[a],1),m10:f(t._periods[a],10),m100:f(t._periods[a],100),m1000:f(t._periods[a],1e3),sl:g(l),sn:this._minDigits(t,t._periods[l],1),snn:this._minDigits(t,t._periods[l],2),snnn:this._minDigits(t,t._periods[l],3),s1:f(t._periods[l],1),s10:f(t._periods[l],10),s100:f(t._periods[l],100),s1000:f(t._periods[l],1e3)},y=p,v=i;l>=v;v++){var D="yowdhms".charAt(v),T=new RegExp("\\{"+D+"<\\}([\\s\\S]*)\\{"+D+">\\}","g");y=y.replace(T,!u&&_[v]||u&&d[v]?"$1":"")}return e.each(w,function(e,t){var i=new RegExp("\\{"+e+"\\}","g");y=y.replace(i,t)}),y},_minDigits:function(e,t,i){return t=""+t,t.length>=i?this._translateDigits(e,t):(t="0000000000"+t,this._translateDigits(e,t.substr(t.length-i)))},_translateDigits:function(e,t){return(""+t).replace(/[0-9]/g,function(t){return e.options.digits[t]})},_determineShow:function(e){var t=e.options.format,_=[];return _[i]=t.match("y")?"?":t.match("Y")?"!":null,_[s]=t.match("o")?"?":t.match("O")?"!":null,_[n]=t.match("w")?"?":t.match("W")?"!":null,_[o]=t.match("d")?"?":t.match("D")?"!":null,_[r]=t.match("h")?"?":t.match("H")?"!":null,_[a]=t.match("m")?"?":t.match("M")?"!":null,_[l]=t.match("s")?"?":t.match("S")?"!":null,_},_calculatePeriods:function(e,t,_,p){e._now=p,e._now.setMilliseconds(0);var c=new Date(e._now.getTime());e._since?p.getTime()<e._since.getTime()?e._now=p=c:p=e._since:(c.setTime(e._until.getTime()),p.getTime()>e._until.getTime()&&(e._now=p=c));var u=[0,0,0,0,0,0,0];if(t[i]||t[s]){var d=this._getDaysInMonth(p.getFullYear(),p.getMonth()),h=this._getDaysInMonth(c.getFullYear(),c.getMonth()),m=c.getDate()==p.getDate()||c.getDate()>=Math.min(d,h)&&p.getDate()>=Math.min(d,h),g=function(e){return 60*(60*e.getHours()+e.getMinutes())+e.getSeconds()},f=Math.max(0,12*(c.getFullYear()-p.getFullYear())+c.getMonth()-p.getMonth()+(c.getDate()<p.getDate()&&!m||m&&g(c)<g(p)?-1:0));u[i]=t[i]?Math.floor(f/12):0,u[s]=t[s]?f-12*u[i]:0,p=new Date(p.getTime());var w=p.getDate()==d,y=this._getDaysInMonth(p.getFullYear()+u[i],p.getMonth()+u[s]);p.getDate()>y&&p.setDate(y),p.setFullYear(p.getFullYear()+u[i]),p.setMonth(p.getMonth()+u[s]),w&&p.setDate(y)}var v=Math.floor((c.getTime()-p.getTime())/1e3),D=function(e,i){u[e]=t[e]?Math.floor(v/i):0,v-=u[e]*i};if(D(n,604800),D(o,86400),D(r,3600),D(a,60),D(l,1),v>0&&!e._since)for(var T=[1,12,4.3482,7,24,60,60],M=l,S=1,b=l;b>=i;b--)t[b]&&(u[M]>=S&&(u[M]=0,v=1),v>0&&(u[b]++,v=0,M=b,S=1)),S*=T[b];if(_)for(var b=i;l>=b;b++)_&&u[b]?_--:_||(u[b]=0);return u}})}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:76:"/bitrix/templates/aspro_optimus/js/jquery.countdown-ru.min.js?15898055531011";s:6:"source";s:57:"/bitrix/templates/aspro_optimus/js/jquery.countdown-ru.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(e){e.countdown.regionalOptions.ru={labels:[BX.message("COUNTDOWN_YEAR0"),BX.message("COUNTDOWN_MONTH0"),BX.message("COUNTDOWN_WEAK0"),BX.message("COUNTDOWN_DAY0"),BX.message("COUNTDOWN_HOUR"),BX.message("COUNTDOWN_MIN"),BX.message("COUNTDOWN_SEC")],labels1:[BX.message("COUNTDOWN_YEAR1"),BX.message("COUNTDOWN_MONTH1"),BX.message("COUNTDOWN_WEAK1"),BX.message("COUNTDOWN_DAY1"),BX.message("COUNTDOWN_HOUR"),BX.message("COUNTDOWN_MIN"),BX.message("COUNTDOWN_SEC")],labels2:[BX.message("COUNTDOWN_YEAR2"),BX.message("COUNTDOWN_MONTH2"),BX.message("COUNTDOWN_WEAK2"),BX.message("COUNTDOWN_DAY2"),BX.message("COUNTDOWN_HOUR"),BX.message("COUNTDOWN_MIN"),BX.message("COUNTDOWN_SEC")],compactLabels:["л","м","н","д"],compactLabels1:["г","м","н","д"],whichLabels:function(e){var s=e%10,O=Math.floor(e%100/10);return 1==e?1:s>=2&&4>=s&&1!=O?2:1==s&&1!=O?1:0},digits:["0","1","2","3","4","5","6","7","8","9"],timeSeparator:":",isRTL:!1},e.countdown.setDefaults(e.countdown.regionalOptions.ru)}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:73:"/bitrix/templates/aspro_optimus/js/jquery.ikSelect.min.js?158980555317826";s:6:"source";s:53:"/bitrix/templates/aspro_optimus/js/jquery.ikSelect.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(t,i,e,s){function o(i,e){var s={};this.el=i,this.$el=t(i);for(var o in h)s[o]=this.$el.data(o.toLowerCase());this.options=t.extend({},h,e,s),t.browser.mobile&&(this.options.filter=!1),this.init()}var n,r=t(i),h={syntax:'<div class="ik_select_link"><div class="ik_select_link_text"></div></div><div class="ik_select_dropdown"><div class="ik_select_list"></div></div>',autoWidth:!0,ddFullWidth:!0,equalWidths:!0,dynamicWidth:!1,extractLink:!1,customClass:"",linkCustomClass:"",ddCustomClass:"",ddMaxHeight:200,filter:!1,nothingFoundText:"Nothing found",isDisabled:!1,onInit:function(){},onShow:function(){},onHide:function(){},onKeyUp:function(){},onKeyDown:function(){},onHoverMove:function(){}},l=function(t){t=t.toLowerCase();var i=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:i[1]||"",version:i[2]||"0"}};if(!t.browser){var p=l(navigator.userAgent),a={};p.browser&&(a[p.browser]=!0,a.version=p.version),a.chrome?a.webkit=!0:a.webkit&&(a.safari=!0),t.browser=a}t.browser.mobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile/i.test(navigator.userAgent),t.browser.operamini="[object OperaMini]"===Object.prototype.toString.call(i.operamini),t.extend(o.prototype,{init:function(){this.$wrapper=t('<div class="ik_select">'+this.options.syntax+"</div>"),this.$link=t(".ik_select_link",this.$wrapper),this.$linkText=t(".ik_select_link_text",this.$wrapper),this.$dropdown=t(".ik_select_dropdown",this.$wrapper),this.$list=t(".ik_select_list",this.$wrapper),this.$listInner=t('<div class="ik_select_list_inner"/>'),this.$active=t([]),this.$hover=t([]),this.hoverIndex=0,this.$optionSet=t([]),this.$optgroupSet=t([]),this.$list.append(this.$listInner),this.options.filter&&(this.$filter=t([]),this.$optionSetOriginal=t([]),this.$nothingFoundText=t('<div class="ik_select_nothing_found"/>').html(this.options.nothingFoundText),this.$filterWrap=t(".ik_select_filter_wrap",this.$wrapper),this.$filterWrap.length||(this.$filterWrap=t('<div class="ik_select_filter_wrap"/>')),this.$filter=t('<input type="text" class="ik_select_filter">'),this.$filterWrap.append(this.$filter),this.$list.prepend(this.$filterWrap),this.$filter.on({"keydown.ikSelect keyup.ikSelect":t.proxy(this,"_elKeyUpDown"),"keyup.ikSelect":t.proxy(this,"_filterKeyup")})),this.$wrapper.addClass(this.options.customClass),this.$link.addClass(this.options.linkCustomClass||this.options.customClass&&this.options.customClass+"-link"),this.$dropdown.addClass(this.options.ddCustomClass||this.options.customClass&&this.options.customClass+"-dd"),this.reset(),this.toggle(!(this.options.isDisabled||this.$el.prop("disabled")||this.$el.hasClass("hidden"))),this.$link.on("click.ikSelect",t.proxy(this,"_linkClick")),this.$el.on({"focus.ikSelect":t.proxy(this,"_elFocus"),"blur.ikSelect":t.proxy(this,"_elBlur"),"change.ikSelect":t.proxy(this,"_syncOriginalOption"),"keydown.ikSelect keyup.ikSelect":t.proxy(this,"_elKeyUpDown")}),this.$list.on({"click.ikSelect":t.proxy(this,"_optionClick"),"mouseover.ikSelect":t.proxy(this,"_optionMouseover")},".ik_select_option"),this.$wrapper.on("click",function(){return!1}),this.$el.after(this.$wrapper),this.redraw(),this.$el.appendTo(this.$wrapper),this.options.onInit(this),this.$el.trigger("ikinit",this)},_linkClick:function(){this.isDisabled||(this===n?this.hideDropdown():this.showDropdown())},_optionClick:function(){this._makeOptionActive(this.searchIndexes?this.$optionSetOriginal.index(this.$hover):this.hoverIndex,!0),this.hideDropdown(),this.$el.change().focus()},_optionMouseover:function(i){var e=t(i.currentTarget);e.hasClass("ik_select_option_disabled")||(this.$hover.removeClass("ik_select_hover"),this.$hover=e.addClass("ik_select_hover"),this.hoverIndex=this.$optionSet.index(this.$hover))},_makeOptionActive:function(i,e){var s=t(this.el.options[i]),o="";s.data("img_src")&&(o+='<span class="icon_color" style="background: url('+s.data("img_src")+')"></span>',this.$link.addClass("img")),s.attr("title")&&this.$link.attr("title",s.attr("title")),o+=s.text(),this.$linkText.html(o),this.$link.toggleClass("ik_select_link_novalue",!s.attr("value")),this.$hover.removeClass("ik_select_hover"),this.$active.removeClass("ik_select_active"),this.$hover=this.$active=this.$optionSet.eq(i).addClass("ik_select_hover ik_select_active"),this.hoverIndex=i,e&&this._syncFakeOption()},_elKeyUpDown:function(i){var e,s=t(i.currentTarget),o=i.type,n=i.which;switch(n){case 38:"keydown"===o&&(i.preventDefault(),this._moveToPrevActive());break;case 40:"keydown"===o&&(i.preventDefault(),this._moveToNextActive());break;case 33:"keydown"===o&&(i.preventDefault(),e=this.$hover.position().top-this.$listInner.height(),this._moveToPrevActive(function(t){return e>=t}));break;case 34:"keydown"===o&&(i.preventDefault(),e=this.$hover.position().top+this.$listInner.height(),this._moveToNextActive(function(t){return t>=e}));break;case 36:"keydown"===o&&s.is(this.$el)&&(i.preventDefault(),this._moveToFirstActive());break;case 35:"keydown"===o&&s.is(this.$el)&&(i.preventDefault(),this._moveToLastActive());break;case 32:"keydown"===o&&s.is(this.$el)&&(i.preventDefault(),this.$dropdown.is(":visible")?this.$hover.click():this._linkClick());break;case 13:"keydown"===o&&this.$dropdown.is(":visible")&&(i.preventDefault(),this.$hover.click());break;case 27:"keydown"===o&&this.$dropdown.is(":visible")&&(i.preventDefault(),this.hideDropdown());break;case 9:"keydown"===o&&(t.browser.webkit&&this.$dropdown.is(":visible")?i.preventDefault():this.hideDropdown());break;default:"keyup"===o&&s.is(this.$el)&&this._syncOriginalOption()}"keyup"===o&&t.browser.mozilla&&this._syncFakeOption(),"keydown"===o&&(this.options.onKeyDown(this,n),this.$el.trigger("ikkeydown",[this,n])),"keyup"===o&&(this.options.onKeyUp(this,n),this.$el.trigger("ikkeyup",[this,n]))},_moveTo:function(i){var e,s,o;return!this.$dropdown.is(":visible")&&t.browser.webkit?(this.showDropdown(),this):(!this.$dropdown.is(":visible")||t.browser.mozilla?this._makeOptionActive(i,!0):(this.$hover.removeClass("ik_select_hover"),this.$hover=this.$optionSet.eq(i).addClass("ik_select_hover"),this.hoverIndex=i),e=this.$hover.position().top,s=e+this.$active.outerHeight(),this.$hover.index()||(o=this.$hover.closest(".ik_select_optgroup"),o.length&&(e=o.position().top)),s>this.$listInner.height()?this.$listInner.scrollTop(this.$listInner.scrollTop()+s-this.$listInner.height()):0>e&&this.$listInner.scrollTop(this.$listInner.scrollTop()+e),this.options.onHoverMove(this),void this.$el.trigger("ikhovermove",this))},_moveToFirstActive:function(){for(var t=0;t<this.$optionSet.length;t++)if(!this.$optionSet.eq(t).hasClass("ik_select_option_disabled")){this._moveTo(t);break}},_moveToLastActive:function(){for(var t=this.$optionSet.length-1;t>=0;t++)if(!this.$optionSet.eq(t).hasClass("ik_select_option_disabled")){this._moveTo(t);break}},_moveToPrevActive:function(t){for(var i,e=this.hoverIndex-1;e>=0;e--)if(i=this.$optionSet.eq(e),!i.hasClass("ik_select_option_disabled")&&("undefined"==typeof t||t(i.position().top))){this._moveTo(e);break}},_moveToNextActive:function(t){for(var i,e=this.hoverIndex+1;e<this.$optionSet.length;e++)if(i=this.$optionSet.eq(e),!i.hasClass("ik_select_option_disabled")&&("undefined"==typeof t||t(i.position().top))){this._moveTo(e);break}},_elFocus:function(){var t,i,e,s;return this.isDisabled?this:(this.$link.addClass("ik_select_link_focus"),t=this.$wrapper.offset().top,i=this.$wrapper.height(),e=r.scrollTop(),s=r.height(),void((t+i>e+s||e>t)&&r.scrollTop(t-s/2)))},_elBlur:function(){this.$link.removeClass("ik_select_link_focus")},_filterKeyup:function(){var i,e=t.trim(this.$filter.val());this.$listInner.show(),"undefined"==typeof this.searchIndexes&&(this.$optionSetOriginal=this.$optionSet,this.searchIndexes=t.makeArray(this.$optionSet.map(function(i,e){return t(e).text().toLowerCase()}))),e!==i&&(""===e?(this.$optionSet=this.$optionSetOriginal.show(),this.$optgroupSet.show(),this.$nothingFoundText.remove()):(this.$optionSet=t([]),this.$optgroupSet.show(),this.$optionSetOriginal.each(t.proxy(function(i,s){var o=t(s);this.searchIndexes[i].indexOf(e.toLowerCase())>=0?(this.$optionSet=this.$optionSet.add(o),o.show()):o.hide()},this)),this.$optionSet.length?(this.$nothingFoundText.remove(),this.$optgroupSet.each(function(i,e){var s=t(e);t(".ik_select_option:visible",s).length||s.hide()}),this.$hover.is(":visible")||this._moveToFirstActive()):(this.$listInner.hide(),this.$list.append(this.$nothingFoundText))),i=e)},_syncFakeOption:function(){this.el.selectedIndex=this.hoverIndex},_syncOriginalOption:function(){this._makeOptionActive(this.el.selectedIndex)},_fixHeight:function(){this.$dropdown.show(),this.$listInner.css("height","auto"),this.$listInner.height()>this.options.ddMaxHeight&&this.$listInner.css({overflow:"auto",height:this.options.ddMaxHeight,position:"relative"}),this.$dropdown.hide()},redraw:function(){var i,e,s;this.options.filter&&this.$filter.hide(),this.$wrapper.css({position:"relative"}),this.$dropdown.css({position:"absolute",zIndex:9998,width:"100%"}),this.$list.css({position:"relative"}),this._fixHeight(),(this.options.dynamicWidth||this.options.autoWidth||this.options.ddFullWidth)&&(this.$wrapper.width(""),this.$dropdown.show().width(9999),this.$listInner.css("float","left"),this.$list.css("float","left"),i=this.$list.outerWidth(!0),e=this.$listInner.width()-this.$listInnerUl.width(),this.$list.css("float",""),this.$listInner.css("float",""),this.$dropdown.css("width","100%"),this.options.ddFullWidth&&this.$dropdown.width(i+e),this.options.dynamicWidth?this.$wrapper.css({display:"inline-block",width:"auto",verticalAlign:"top"}):this.options.autoWidth&&this.$wrapper.width(i+(this.options.equalWidths?e:0)).addClass("ik_select_autowidth"),s=this.$wrapper.parent().width(),this.$wrapper.width()>s&&this.$wrapper.width(s)),this.options.filter&&this.$filter.show().outerWidth(this.$filterWrap.width()),this.$dropdown.hide(),this.$el.css({position:"absolute",margin:0,padding:0,top:0,left:-9999}),t.browser.mobile&&this.$el.css({opacity:0,left:0,height:this.$wrapper.height(),width:this.$wrapper.width()})},reset:function(){var i="";this.$linkText.html(this.$el.val()),this.$listInner.empty(),i="<ul>",this.$el.children().each(t.proxy(function(e,s){var o,n=t(s),r=s.tagName.toLowerCase();"optgroup"===r?(o=n.children().map(t.proxy(function(i,e){return this._generateOptionObject(t(e))},this)),o=t.makeArray(o),i+=this._renderListOptgroup({label:n.attr("label")||"&nbsp;",isDisabled:n.is(":disabled"),options:o})):"option"===r&&(i+=this._renderListOption(this._generateOptionObject(n)))},this)),i+="</ul>",this.$listInner.append(i),this._syncOriginalOption(),this.$listInnerUl=t("> ul",this.$listInner),this.$optgroupSet=t(".ik_select_optgroup",this.$listInner),this.$optionSet=t(".ik_select_option",this.$listInner)},hideDropdown:function(){this.options.filter&&(this.$filter.val(""),this._filterKeyup()),this.$dropdown.hide().appendTo(this.$wrapper).css({left:"",top:""}),this.options.extractLink&&(this.$wrapper.outerWidth(this.$wrapper.data("outerWidth")),this.$wrapper.height(""),this.$link.removeClass("ik_select_link_extracted").css({position:"",top:"",left:"",zIndex:""}).prependTo(this.$wrapper)),n=null,this.$el.focus(),this.options.onHide(this),this.$el.trigger("ikhide",this)},showDropdown:function(){var i,e,s,o,h,l,p,a,d;n!==this&&this.$optionSet.length&&(n&&n.hideDropdown(),this._syncOriginalOption(),t(".show_un_props").length?this.$dropdown.addClass("show_un_props"):t(".unshow_un_props").length&&this.$dropdown.addClass("unshow_un_props"),this.$dropdown.show(),i=this.$dropdown.offset(),e=this.$dropdown.outerWidth(!0),s=this.$dropdown.outerHeight(!0),o=this.$wrapper.offset(),l=r.width(),p=r.height(),a=r.scrollTop(),this.options.ddFullWidth&&o.left+e>l&&(i.left=l-e),i.top+s>a+p&&(i.top=a+p-s),this.$dropdown.css({left:i.left,top:i.top,width:this.$dropdown.width()}).appendTo("body"),this.options.extractLink&&(d=this.$link.offset(),h=this.$wrapper.outerWidth(),this.$wrapper.data("outerWidth",h),this.$wrapper.outerWidth(h),this.$wrapper.outerHeight(this.$wrapper.outerHeight()),this.$link.outerWidth(this.$link.outerWidth()),this.$link.addClass("ik_select_link_extracted").css({position:"absolute",top:d.top,left:d.left,zIndex:9999}).appendTo("body")),this.$listInner.scrollTop(this.$active.position().top-this.$list.height()/2),this.options.filter?this.$filter.focus():this.$el.focus(),n=this,this.options.onShow(this),this.$el.trigger("ikshow",this))},_generateOptionObject:function(t){return{value:t.val(),label:t.html()||"&nbsp;",isDisabled:t.is(":disabled"),dataParam:t.data(),className:t.attr("class"),title:t.attr("title")}},_renderListOption:function(t){var i,e=t.isDisabled?" ik_select_option_disabled":"",s=t.dataParam.img_src?" img":"",o="hidden"==t.className?" missing":"",n=t.title;return i='<li class="ik_select_option'+e+s+o+'" title="'+n+'" data-value="'+t.value+'">',i+='<span class="ik_select_option_label" title="'+n+'">',t.dataParam.img_src&&(i+='<span class="icon_color" style="background: url('+t.dataParam.img_src+')"></span>'),i+=t.label,i+="</span>",i+="</li>"},_renderListOptgroup:function(i){var e,s=i.isDisabled?" ik_select_optgroup_disabled":"";return e='<li class="ik_select_optgroup'+s+'">',e+='<div class="ik_select_optgroup_label">'+i.label+"</div>",e+="<ul>",t.isArray(i.options)&&t.each(i.options,t.proxy(function(t,i){e+=this._renderListOption({value:i.value,label:i.label||"&nbsp;",isDisabled:i.isDisabled})},this)),e+="</ul>",e+="</li>"},_renderOption:function(t){return'<option value="'+t.value+'">'+t.label+"</option>"},_renderOptgroup:function(i){var e;return e='<optgroup label="'+i.label+'">',t.isArray(i.options)&&t.each(i.options,t.proxy(function(t,i){e+=this._renderOption(i)},this)),e+="</option>"},addOptions:function(i,e,s){var o,n,r="",h="",l=this.$listInnerUl,p=this.$el;i=t.isArray(i)?i:[i],t.each(i,t.proxy(function(t,i){r+=this._renderListOption(i),h+=this._renderOption(i)},this)),t.isNumeric(s)&&s<this.$optgroupSet.length&&(l=this.$optgroupSet.eq(s),p=t("optgroup",this.$el).eq(s)),t.isNumeric(e)&&(o=t(".ik_select_option",l),e<o.length&&(o.eq(e).before(r),n=t("option",p),n.eq(e).before(h))),n||(l.append(r),p.append(h)),this.$optionSet=t(".ik_select_option",this.$listInner),this._fixHeight()},addOptgroups:function(i,e){var s="",o="";i&&(i=t.isArray(i)?i:[i],t.each(i,t.proxy(function(t,i){s+=this._renderListOptgroup(i),o+=this._renderOptgroup(i)},this)),t.isNumeric(e)&&e<this.$optgroupSet.length?(this.$optgroupSet.eq(e).before(s),t("optgroup",this.$el).eq(e).before(o)):(this.$listInnerUl.append(s),this.$el.append(o)),this.$optgroupSet=t(".ik_select_optgroup",this.$listInner),this.$optionSet=t(".ik_select_option",this.$listInner),this._fixHeight())},removeOptions:function(i,e){var s,o,n=t([]);t.isNumeric(e)&&(0>e?(s=t("> .ik_select_option",this.$listInnerUl),o=t("> option",this.$el)):e<this.$optgroupSet.length&&(s=t(".ik_select_option",this.$optgroupSet.eq(e)),o=t("optgroup",this.$el).eq(e).find("option"))),s||(s=this.$optionSet,o=t(this.el.options)),t.isArray(i)||(i=[i]),t.each(i,t.proxy(function(t,i){i<s.length&&(n=n.add(s.eq(i)).add(o.eq(i)))},this)),n.remove(),this.$optionSet=t(".ik_select_option",this.$listInner),this._syncOriginalOption(),this._fixHeight()},removeOptgroups:function(i){var e=t([]),s=t("optgroup",this.el);t.isArray(i)||(i=[i]),t.each(i,t.proxy(function(t,i){i<this.$optgroupSet.length&&(e=e.add(this.$optgroupSet.eq(i)).add(s.eq(i)))},this)),e.remove(),this.$optionSet=t(".ik_select_option",this.$listInner),this.$optgroupSet=t(".ik_select_optgroup",this.$listInner),this._syncOriginalOption(),this._fixHeight()},disable:function(){this.toggle(!1)},enable:function(){this.toggle(!0)},toggle:function(t){this.isDisabled="undefined"!=typeof t?!t:!this.isDisabled,this.$el.prop("disabled",this.isDisabled),this.$link.toggleClass("ik_select_link_disabled",this.isDisabled)},select:function(t,i){i?this.el.selectedIndex=t:this.$el.val(t),this._syncOriginalOption()},disableOptgroups:function(t){this.toggleOptgroups(t,!1)},enableOptgroups:function(t){this.toggleOptgroups(t,!0)},toggleOptgroups:function(i,e){t.isArray(i)||(i=[i]),t.each(i,t.proxy(function(i,s){var o,n,r,h=[],l=t("optgroup",this.$el).eq(s);o="undefined"!=typeof e?e:l.prop("disabled"),l.prop("disabled",!o),this.$optgroupSet.eq(s).toggleClass("ik_select_optgroup_disabled",!o),n=t("option",l),r=t(this.el.options).index(n.eq(0));for(var p=r;p<r+n.length;p++)h.push(p);this.toggleOptions(h,!0,o)},this)),this._syncOriginalOption()},disableOptions:function(t,i){this.toggleOptions(t,i,!1)},enableOptions:function(t,i){this.toggleOptions(t,i,!0)},toggleOptions:function(i,e,s){var o=t("option",this.el);t.isArray(i)||(i=[i]);var n=t.proxy(function(t,i){var e="undefined"!=typeof s?s:t.prop("disabled");t.prop("disabled",!e),this.$optionSet.eq(i).toggleClass("ik_select_option_disabled",!e)},this);t.each(i,function(i,s){e?n(o.eq(s),s):o.each(function(i,e){var o=t(e);return o.val()===s?(n(o,i),this):void 0})}),this._syncOriginalOption()},detach:function(){this.$el.off(".ikSelect").css({width:"",height:"",left:"",top:"",position:"",margin:"",padding:""}),this.$wrapper.before(this.$el),this.$wrapper.remove(),this.$el.removeData("plugin_ikSelect")}}),t.fn.ikSelect=function(i){var e;return t.browser.operamini?this:(e=Array.prototype.slice.call(arguments,1),this.each(function(){var s;t.data(this,"plugin_ikSelect")?"string"==typeof i&&(s=t.data(this,"plugin_ikSelect"),"function"==typeof s[i]&&s[i].apply(s,e)):t.data(this,"plugin_ikSelect",new o(this,i))}))},t.ikSelect={extendDefaults:function(i){t.extend(h,i)}},t(e).bind("click.ikSelect",function(){n&&n.hideDropdown()})}(jQuery,window,document);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:61:"/bitrix/templates/aspro_optimus/js/sly.min.js?158980555317577";s:6:"source";s:41:"/bitrix/templates/aspro_optimus/js/sly.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(e,t,a){"use strict";function n(t,p,h){function D(a){var n=0,i=ke.length;if(we.old=e.extend({},we),me=pe?0:he[fe.horizontal?"width":"height"](),Ie=be[fe.horizontal?"width":"height"](),ye=pe?t:ge[fe.horizontal?"outerWidth":"outerHeight"](),ke.length=0,we.start=0,we.end=q(ye-me,0),Ye){n=xe.length,Te=ge.children(fe.itemSelector),xe.length=0;var r,s=c(ge,fe.horizontal?"paddingLeft":"paddingTop"),o=c(ge,fe.horizontal?"paddingRight":"paddingBottom"),l="border-box"===e(Te).css("boxSizing"),u="none"!==Te.css("float"),f=0,v=Te.length-1;ye=0,Te.each(function(t,a){var n=e(a),i=a.getBoundingClientRect(),l=A(fe.horizontal?i.width||i.right-i.left:i.height||i.bottom-i.top),d=c(n,fe.horizontal?"marginLeft":"marginTop"),p=c(n,fe.horizontal?"marginRight":"marginBottom");n.parents(".frame.props").length&&n.find("td").eq(0).length&&(l-=n.find("td").eq(0).outerWidth());var h=l+d+p,g=!d||!p,m={};m.el=a,m.size=g?l:h,m.half=m.size/2,m.start=ye+(g?d:0),m.center=m.start-A(me/2-m.size/2),m.end=m.start-me+m.size,t||(ye+=s),ye+=h,fe.horizontal||u||p&&d&&t>0&&(ye-=O(d,p)),t===v&&(m.end+=o,ye+=o,f=g?p:0),xe.push(m),r=m}),ge[0].style[fe.horizontal?"width":"height"]=(l?ye:ye-s-o)+"px",ye-=f,xe.length?(we.start=xe[0][Xe?"center":"start"],we.end=Xe?r.center:ye>me?r.end:we.start):we.start=we.end=0}if(we.center=A(we.end/2+we.start/2),W(),Pe.length&&Ie>0&&(fe.dynamicHandle?(Ce=we.start===we.end?Ie:A(Ie*me/ye),Ce=d(Ce,fe.minHandleSize,Ie),Pe[0].style[fe.horizontal?"width":"height"]=Ce+"px",Ce!=Ie?(e(be).parent().animate({opacity:1},50),e(be).fadeIn(),e(be).closest(".wrapp_scrollbar").find(".slider_navigation").fadeIn(),e(he).hasClass("props")&&e(he).addClass("border")):(e(be).parent().animate({opacity:0},50),e(be).fadeOut(),e(be).closest(".wrapp_scrollbar").find(".slider_navigation").fadeOut(),e(he).hasClass("props")&&e(he).removeClass("border"))):Ce=Pe[fe.horizontal?"outerWidth":"outerHeight"](),ze.end=Ie-Ce,Ke||X()),!pe&&me>0){var p=we.start,h="";if(Ye)e.each(xe,function(e,t){Xe?ke.push(t.center):t.start+t.size>p&&p<=we.end&&(p=t.start,ke.push(p),p+=me,p>we.end&&p<we.end+me&&ke.push(we.end))});else for(;p-me<we.end;)ke.push(p),p+=me;if(Se[0]&&i!==ke.length){for(var g=0;g<ke.length;g++)h+=fe.pageBuilder.call(ve,g);Be=Se.html(h).children(),Be.eq(Ae.activePage).addClass(fe.activeClass)}}if(Ae.slideeSize=ye,Ae.frameSize=me,Ae.sbSize=Ie,Ae.handleSize=Ce,Ye){a&&null!=fe.startAt&&(L(fe.startAt),ve[He?"toCenter":"toStart"](fe.startAt));var m=xe[Ae.activeItem];E(He&&m?m.center:d(we.dest,we.start,we.end))}else a?null!=fe.startAt&&E(fe.startAt,1):E(d(we.dest,we.start,we.end));ce("load")}function E(e,t,a){Je.init&&Je.slidee&&fe.elasticBounds?e>we.end?e=we.end+(e-we.end)/6:e<we.start&&(e=we.start+(e-we.start)/6):e=d(e,we.start,we.end),Ze.start=+new Date,Ze.time=0,Ze.from=we.cur,Ze.to=e,Ze.delta=e-we.cur,Ze.tweesing=Je.tweese||Je.init&&!Je.slidee,Ze.immediate=!Ze.tweesing&&(t||Je.init&&Je.slidee||!fe.speed),Je.tweese=0,e!==we.dest&&(we.dest=e,ce("change"),Ke||N()),Q(),W(),_(),H()}function N(){if(ve.initialized){if(!Ke)return Ke=y(N),void(Je.released&&ce("moveStart"));Ze.immediate?we.cur=Ze.to:Ze.tweesing?(Ze.tweeseDelta=Ze.to-we.cur,we.cur+=Ze.tweeseDelta*(Je.released?fe.swingSpeed:fe.syncSpeed)):(Ze.time=O(+new Date-Ze.start,fe.speed),we.cur=Ze.from+Ze.delta*e.easing[fe.easing](Ze.time/fe.speed,Ze.time,0,1,fe.speed)),Ze.to===we.cur?(we.cur=Ze.to,Je.tweese=Ke=0):Ke=y(N),ce("move"),pe||(f?ge[0].style[f]=v+(fe.horizontal?"translateX":"translateY")+"("+-we.cur+"px)":ge[0].style[fe.horizontal?"left":"top"]=-A(we.cur)+"px"),!Ke&&Je.released&&ce("moveEnd"),X()}}function X(){Pe.length&&(ze.cur=we.start===we.end?0:((Je.init&&!Je.slidee?we.dest:we.cur)-we.start)/(we.end-we.start)*ze.end,ze.cur=d(A(ze.cur),ze.start,ze.end),Qe.hPos!==ze.cur&&(Qe.hPos=ze.cur,f?Pe[0].style[f]=v+(fe.horizontal?"translateX":"translateY")+"("+ze.cur+"px)":Pe[0].style[fe.horizontal?"left":"top"]=ze.cur+"px"))}function H(){Be[0]&&Qe.page!==Ae.activePage&&(Qe.page=Ae.activePage,Be.removeClass(fe.activeClass).eq(Ae.activePage).addClass(fe.activeClass),ce("activePage",Qe.page))}function Y(){tt=Je.init?y(Y):0,Ge.now=+new Date,Ge.pos=we.cur+(Ge.now-Ge.lastTime)/1e3*Ge.speed,E(Je.init?Ge.pos:A(Ge.pos)),Je.init||we.cur!==we.dest||ce("moveEnd"),Ge.lastTime=Ge.now}function F(e,t,n){if("boolean"===i(t)&&(n=t,t=a),t===a)E(we[e],n);else{if(He&&"center"!==e)return;var r=ve.getPos(t);r&&E(r[e],n,!He)}}function j(e){return null!=e?l(e)?e>=0&&e<xe.length?e:-1:Te.index(e):-1}function M(e){return j(l(e)&&0>e?e+xe.length:e)}function L(e,t){var a=j(e);return!Ye||0>a?!1:((Qe.active!==a||t)&&(Te.eq(Ae.activeItem).removeClass(fe.activeClass),Te.eq(a).addClass(fe.activeClass),Qe.active=Ae.activeItem=a,_(),ce("active",a)),a)}function R(e){e=d(l(e)?e:we.dest,we.start,we.end);var t={},a=Xe?0:me/2;if(!pe)for(var n=0,i=ke.length;i>n;n++){if(e>=we.end||n===ke.length-1){t.activePage=ke.length-1;break}if(e<=ke[n]+a){t.activePage=n;break}}if(Ye){for(var r=!1,s=!1,o=!1,c=0,u=xe.length;u>c;c++)if(r===!1&&e<=xe[c].start+xe[c].half&&(r=c),o===!1&&e<=xe[c].center+xe[c].half&&(o=c),c===u-1||e<=xe[c].end+xe[c].half){s=c;break}t.firstItem=l(r)?r:0,t.centerItem=l(o)?o:t.firstItem,t.lastItem=l(s)?s:t.centerItem}return t}function W(t){e.extend(Ae,R(t))}function _(){var e=we.dest<=we.start,t=we.dest>=we.end,a=(e?1:0)|(t?2:0);if(Qe.slideePosState!==a&&(Qe.slideePosState=a,_e.is("button,input")&&_e.prop("disabled",e),Ue.is("button,input")&&Ue.prop("disabled",t),_e.add(Le)[e?"addClass":"removeClass"](fe.disabledClass),Ue.add(Me)[t?"addClass":"removeClass"](fe.disabledClass)),Qe.fwdbwdState!==a&&Je.released&&(Qe.fwdbwdState=a,Le.is("button,input")&&Le.prop("disabled",e),Me.is("button,input")&&Me.prop("disabled",t)),Ye&&null!=Ae.activeItem){var n=0===Ae.activeItem,i=Ae.activeItem>=xe.length-1,r=(n?1:0)|(i?2:0);Qe.itemsButtonState!==r&&(Qe.itemsButtonState=r,Re.is("button,input")&&Re.prop("disabled",n),We.is("button,input")&&We.prop("disabled",i),Re[n?"addClass":"removeClass"](fe.disabledClass),We[i?"addClass":"removeClass"](fe.disabledClass))}}function U(e,t,a){if(e=M(e),t=M(t),e>-1&&t>-1&&e!==t&&(!a||t!==e-1)&&(a||t!==e+1)){Te.eq(e)[a?"insertAfter":"insertBefore"](xe[t].el);var n=t>e?e:a?t:t-1,i=e>t?e:a?t+1:t,r=e>t;null!=Ae.activeItem&&(e===Ae.activeItem?Qe.active=Ae.activeItem=a?r?t+1:t:r?t:t-1:Ae.activeItem>n&&Ae.activeItem<i&&(Qe.active=Ae.activeItem+=r?1:-1)),D()}}function $(e,t){for(var a=0,n=$e[e].length;n>a;a++)if($e[e][a]===t)return a;return-1}function Q(){Je.released&&!ve.isPaused&&ve.resume()}function Z(e){return A(d(e,ze.start,ze.end)/ze.end*(we.end-we.start))+we.start}function G(){Je.history[0]=Je.history[1],Je.history[1]=Je.history[2],Je.history[2]=Je.history[3],Je.history[3]=Je.delta}function J(e){Je.released=0,Je.source=e,Je.slidee="slidee"===e}function K(t){var a="touchstart"===t.type,n=t.data.source,i="slidee"===n;Je.init||!a&&te(t.target)||("handle"!==n||fe.dragHandle&&ze.start!==ze.end)&&(!i||(a?fe.touchDragging:fe.mouseDragging&&t.which<2))&&(a||r(t),J(n),Je.init=0,Je.$source=e(t.target),Je.touch=a,Je.pointer=a?t.originalEvent.touches[0]:t,Je.initX=Je.pointer.pageX,Je.initY=Je.pointer.pageY,Je.initPos=i?we.cur:ze.cur,Je.start=+new Date,Je.time=0,Je.path=0,Je.delta=0,Je.locked=0,Je.history=[0,0,0,0],Je.pathToLock=i?a?30:10:0,w.on(a?I:P,V),ve.pause(1),(i?ge:Pe).addClass(fe.draggedClass),ce("moveStart"),i&&(Ve=setInterval(G,10)))}function V(e){if(Je.released="mouseup"===e.type||"touchend"===e.type,Je.pointer=Je.touch?e.originalEvent[Je.released?"changedTouches":"touches"][0]:e,Je.pathX=Je.pointer.pageX-Je.initX,Je.pathY=Je.pointer.pageY-Je.initY,Je.path=T(x(Je.pathX,2)+x(Je.pathY,2)),Je.delta=fe.horizontal?Je.pathX:Je.pathY,Je.released||!(Je.path<1)){if(!Je.init){if(!(fe.horizontal?k(Je.pathX)>k(Je.pathY):k(Je.pathX)<k(Je.pathY)))return ee();Je.init=1}r(e),!Je.locked&&Je.path>Je.pathToLock&&Je.slidee&&(Je.locked=1,Je.$source.on(C,s)),Je.released&&(ee(),fe.releaseSwing&&Je.slidee&&(Je.swing=(Je.delta-Je.history[0])/40*300,Je.delta+=Je.swing,Je.tweese=k(Je.swing)>10)),E(Je.slidee?A(Je.initPos-Je.delta):Z(Je.initPos+Je.delta))}}function ee(){clearInterval(Ve),Je.released=!0,w.off(Je.touch?I:P,V),(Je.slidee?ge:Pe).removeClass(fe.draggedClass),setTimeout(function(){Je.$source.off(C,s)}),we.cur===we.dest&&Je.init&&ce("moveEnd"),ve.resume(1),Je.init=0}function te(t){return~e.inArray(t.nodeName,S)||e(t).is(fe.interactive)}function ae(){ve.stop()}function ne(e){switch(r(e),this){case Me[0]:case Le[0]:ve.moveBy(Me.is(this)?fe.moveBy:-fe.moveBy),w.on("mouseup",ae);break;case Re[0]:ve.prev();break;case We[0]:ve.next();break;case _e[0]:ve.prevPage();break;case Ue[0]:ve.nextPage()}}function ie(e){fe.clickBar&&e.target===be[0]&&(r(e),E(Z((fe.horizontal?e.pageX-be.offset().left:e.pageY-be.offset().top)-Ce/2)))}function re(e){if(fe.keyboardNavBy)switch(e.which){case fe.horizontal?37:38:r(e),ve["pages"===fe.keyboardNavBy?"prevPage":"prev"]();break;case fe.horizontal?39:40:r(e),ve["pages"===fe.keyboardNavBy?"nextPage":"next"]()}}function se(e){return te(this)?void(e.originalEvent[g+"ignore"]=!0):void(this.parentNode!==ge[0]||e.originalEvent[g+"ignore"]||ve.activate(this))}function oe(){this.parentNode===Se[0]&&ve.activatePage(Be.index(this))}function le(e){fe.pauseOnHover&&ve["mouseenter"===e.type?"pause":"resume"](2)}function ce(e,t){if($e[e]){for(ue=$e[e].length,B.length=0,de=0;ue>de;de++)B.push($e[e][de]);for(de=0;ue>de;de++)B[de].call(ve,e,t)}}var de,ue,fe=e.extend({},n.defaults,p),ve=this,pe=l(t),he=e(t),ge=fe.slidee?e(fe.slidee).eq(0):he.children().eq(0),me=0,ye=0,we={start:0,center:0,end:0,cur:0,dest:0},be=e(fe.scrollBar).eq(0),Pe=be.children().eq(0),Ie=0,Ce=0,ze={start:0,end:0,cur:0},Se=e(fe.pagesBar),Be=0,ke=[],Te=0,xe=[],Ae={firstItem:0,lastItem:0,centerItem:0,activeItem:null,activePage:0},qe=new u(he[0]),Oe=new u(ge[0]),De=new u(be[0]),Ee=new u(Pe[0]),Ne="basic"===fe.itemNav,Xe="forceCentered"===fe.itemNav,He="centered"===fe.itemNav||Xe,Ye=!pe&&(Ne||He||Xe),Fe=fe.scrollSource?e(fe.scrollSource):he,je=fe.dragSource?e(fe.dragSource):he,Me=e(fe.forward),Le=e(fe.backward),Re=e(fe.prev),We=e(fe.next),_e=e(fe.prevPage),Ue=e(fe.nextPage),$e={},Qe={},Ze={},Ge={},Je={released:1},Ke=0,Ve=0,et=0,tt=0;pe||(t=he[0]),ve.initialized=0,ve.frame=t,ve.slidee=ge[0],ve.pos=we,ve.rel=Ae,ve.items=xe,ve.pages=ke,ve.isPaused=0,ve.options=fe,ve.dragging=Je,ve.reload=function(){D()},ve.getPos=function(e){if(Ye){var t=j(e);return-1!==t?xe[t]:!1}var a=ge.find(e).eq(0);if(a[0]){var n=fe.horizontal?a.offset().left-ge.offset().left:a.offset().top-ge.offset().top,i=a[fe.horizontal?"outerWidth":"outerHeight"]();return{start:n,center:n-me/2+i/2,end:n-me+i,size:i}}return!1},ve.moveBy=function(e){Ge.speed=e,Ge.lastTime=+new Date,Ge.startPos=we.cur,J("button"),Je.init=1,ce("moveStart"),m(tt),Y()},ve.stop=function(){"button"===Je.source&&(Je.init=0,Je.released=1)},ve.prev=function(){ve.activate(null==Ae.activeItem?0:Ae.activeItem-1)},ve.next=function(){ve.activate(null==Ae.activeItem?0:Ae.activeItem+1)},ve.prevPage=function(){ve.activatePage(Ae.activePage-1)},ve.nextPage=function(){ve.activatePage(Ae.activePage+1)},ve.slideBy=function(e,t){e&&(Ye?ve[He?"toCenter":"toStart"](d((He?Ae.centerItem:Ae.firstItem)+fe.scrollBy*e,0,xe.length)):E(we.dest+e,t))},ve.slideTo=function(e,t){E(e,t)},ve.toStart=function(e,t){F("start",e,t)},ve.toEnd=function(e,t){F("end",e,t)},ve.toCenter=function(e,t){F("center",e,t)},ve.getIndex=j,ve.activate=function(e,t){var a=L(e);fe.smart&&a!==!1&&(He?ve.toCenter(a,t):a>=Ae.lastItem?ve.toStart(a,t):a<=Ae.firstItem?ve.toEnd(a,t):Q())},ve.activatePage=function(e,t){l(e)&&E(ke[d(e,0,ke.length-1)],t)},ve.resume=function(e){fe.cycleBy&&fe.cycleInterval&&("items"!==fe.cycleBy||xe[0]&&null!=Ae.activeItem)&&!(e<ve.isPaused)&&(ve.isPaused=0,et?et=clearTimeout(et):ce("resume"),et=setTimeout(function(){switch(ce("cycle"),fe.cycleBy){case"items":ve.activate(Ae.activeItem>=xe.length-1?0:Ae.activeItem+1);break;case"pages":ve.activatePage(Ae.activePage>=ke.length-1?0:Ae.activePage+1)}},fe.cycleInterval))},ve.pause=function(e){e<ve.isPaused||(ve.isPaused=e||100,et&&(et=clearTimeout(et),ce("pause")))},ve.toggle=function(){ve[et?"pause":"resume"]()},ve.set=function(t,a){e.isPlainObject(t)?e.extend(fe,t):fe.hasOwnProperty(t)&&(fe[t]=a)},ve.add=function(t,a){var n=e(t);Ye?(null==a||!xe[0]||a>=xe.length?n.appendTo(ge):xe.length&&n.insertBefore(xe[a].el),null!=Ae.activeItem&&a<=Ae.activeItem&&(Qe.active=Ae.activeItem+=n.length)):ge.append(n),D()},ve.remove=function(t){if(Ye){var a=M(t);if(a>-1){Te.eq(a).remove();var n=a===Ae.activeItem;null!=Ae.activeItem&&a<Ae.activeItem&&(Qe.active=--Ae.activeItem),D(),n&&(Qe.active=null,ve.activate(Ae.activeItem))}}else e(t).remove(),D()},ve.moveAfter=function(e,t){U(e,t,1)},ve.moveBefore=function(e,t){U(e,t)},ve.on=function(e,t){if("object"===i(e))for(var a in e)e.hasOwnProperty(a)&&ve.on(a,e[a]);else if("function"===i(t))for(var n=e.split(" "),r=0,s=n.length;s>r;r++)$e[n[r]]=$e[n[r]]||[],-1===$(n[r],t)&&$e[n[r]].push(t);else if("array"===i(t))for(var o=0,l=t.length;l>o;o++)ve.on(e,t[o])},ve.one=function(e,t){function a(){t.apply(ve,arguments),ve.off(e,a)}ve.on(e,a)},ve.off=function(e,t){if(t instanceof Array)for(var a=0,n=t.length;n>a;a++)ve.off(e,t[a]);else for(var i=e.split(" "),r=0,s=i.length;s>r;r++)if($e[i[r]]=$e[i[r]]||[],null==t)$e[i[r]].length=0;else{var o=$(i[r],t);-1!==o&&$e[i[r]].splice(o,1)}},ve.destroy=function(){return Fe.add(Pe).add(be).add(Se).add(Me).add(Le).add(Re).add(We).add(_e).add(Ue).off("."+g),w.off("keydown",re),Re.add(We).add(_e).add(Ue).removeClass(fe.disabledClass),Te&&null!=Ae.activeItem&&Te.eq(Ae.activeItem).removeClass(fe.activeClass),Se.empty(),pe||(he.off("."+g),qe.restore(),Oe.restore(),De.restore(),Ee.restore(),e.removeData(t,g)),xe.length=ke.length=0,Qe={},ve.initialized=0,ve},ve.init=function(){if(!ve.initialized){ve.on(h);var e=["overflow","position"],t=["position","webkitTransform","msTransform","transform","left","top","width","height"];qe.save.apply(qe,e),De.save.apply(De,e),Oe.save.apply(Oe,t),Ee.save.apply(Ee,t);var a=Pe;return pe||(a=a.add(ge),he.css("overflow","hidden"),f||"static"!==he.css("position")||he.css("position","relative")),f?v&&a.css(f,v):("static"===be.css("position")&&be.css("position","relative"),a.css({position:"absolute"})),fe.forward&&Me.on(z,ne),fe.backward&&Le.on(z,ne),fe.prev&&Re.on(C,ne),fe.next&&We.on(C,ne),fe.prevPage&&_e.on(C,ne),fe.nextPage&&Ue.on(C,ne),be[0]&&be.on(C,ie),Ye&&fe.activateOn&&he.on(fe.activateOn+"."+g,"*",se),Se[0]&&fe.activatePageOn&&Se.on(fe.activatePageOn+"."+g,"*",oe),je.on(b,{source:"slidee"},K),Pe&&Pe.on(b,{source:"handle"},K),w.on("keydown",re),pe||(he.on("mouseenter."+g+" mouseleave."+g,le),he.on("scroll."+g,o)),ve.initialized=1,D(!0),fe.cycleBy&&!pe&&ve[fe.startPaused?"pause":"resume"](),ve}}}function i(e){return null==e?String(e):"object"==typeof e||"function"==typeof e?Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase()||"object":typeof e}function r(e,t){e.preventDefault(),t&&e.stopPropagation()}function s(t){r(t,1),e(this).off(t.type,s)}function o(){this.scrollLeft=0,this.scrollTop=0}function l(e){return!isNaN(parseFloat(e))&&isFinite(e)}function c(e,t){return 0|A(String(e.css(t)).replace(/[^\-0-9.]/g,""))}function d(e,t,a){return t>e?t:e>a?a:e}function u(e){var t={};return t.style={},t.save=function(){if(e&&e.nodeType){for(var a=0;a<arguments.length;a++)t.style[arguments[a]]=e.style[arguments[a]];return t}},t.restore=function(){if(e&&e.nodeType){for(var a in t.style)t.style.hasOwnProperty(a)&&(e.style[a]=t.style[a]);return t}},t}var f,v,p="sly",h="Sly",g=p,m=t.cancelAnimationFrame||t.cancelRequestAnimationFrame,y=t.requestAnimationFrame,w=e(document),b="touchstart."+g+" mousedown."+g,P="mousemove."+g+" mouseup."+g,I="touchmove."+g+" touchend."+g,C=((document.implementation.hasFeature("Event.wheel","3.0")?"wheel.":"mousewheel.")+g,"click."+g),z="mousedown."+g,S=["INPUT","SELECT","BUTTON","TEXTAREA"],B=[],k=Math.abs,T=Math.sqrt,x=Math.pow,A=Math.round,q=Math.max,O=Math.min;!function(e){function t(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-a)),i=setTimeout(e,n);return a=t,i}y=e.requestAnimationFrame||e.webkitRequestAnimationFrame||t;var a=(new Date).getTime(),n=e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.clearTimeout;m=function(t){n.call(e,t)}}(window),function(){function e(e){for(var n=0,i=t.length;i>n;n++){var r=t[n]?t[n]+e.charAt(0).toUpperCase()+e.slice(1):e;if(null!=a.style[r])return r}}var t=["","webkit","moz","ms","o"],a=document.createElement("div");f=e("transform"),v=e("perspective")?"translateZ(0) ":""}(),t[h]=n,e.fn[p]=function(t,a){var r,s;return e.isPlainObject(t)||(("string"===i(t)||t===!1)&&(r=t===!1?"destroy":t,s=Array.prototype.slice.call(arguments,1)),t={}),this.each(function(i,o){var l=e.data(o,g);l||r?l&&r&&l[r]&&l[r].apply(l,s):l=e.data(o,g,new n(o,t,a).init())})},n.defaults={slidee:null,horizontal:!1,itemNav:null,itemSelector:null,smart:!1,activateOn:null,activateMiddle:!1,scrollSource:null,scrollBy:0,scrollHijack:300,scrollTrap:!1,dragSource:null,mouseDragging:!1,touchDragging:!1,releaseSwing:!1,swingSpeed:.2,elasticBounds:!1,interactive:null,scrollBar:null,dragHandle:!1,dynamicHandle:!1,minHandleSize:50,clickBar:!1,syncSpeed:.5,pagesBar:null,activatePageOn:null,pageBuilder:function(e){return"<li>"+(e+1)+"</li>"},forward:null,backward:null,prev:null,next:null,prevPage:null,nextPage:null,cycleBy:null,cycleInterval:5e3,pauseOnHover:!1,startPaused:!1,moveBy:300,speed:0,easing:"swing",startAt:null,keyboardNavBy:null,draggedClass:"dragged",activeClass:"active",disabledClass:"disabled"}}(jQuery,window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:69:"/bitrix/templates/aspro_optimus/js/equalize_ext.min.js?15898055531531";s:6:"source";s:50:"/bitrix/templates/aspro_optimus/js/equalize_ext.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$.fn.equalizeHeightsExt=function(e,t,i){for(var s=this.map(function(i,s){var n=0,r=0;return t!==!1&&(n=parseInt($(s).find(t).actual("outerHeight"))),n&&(n+=12),$(s).css("height",""),r=1==e?$(s).actual("outerHeight")-n:$(s).actual("height")-n}).get(),n=0,r=s.length;r>n;++n)s[n]%2&&--s[n];return this.height(Math.max.apply(this,s))},$.fn.sliceHeightExt=function(e){function t(t){if(t.each(function(){$(this).css("line-height",""),$(this).css("height","")}),"undefined"==typeof e.autoslicecount||e.autoslicecount!==!1){var i=t.first().hasClass("item")?t.first().outerWidth():t.first().parents(".item").outerWidth(),s=t.first().parents(".top_wrapper").outerWidth();i||(i=e.parent?t.closest(e.parent).outerWidth()-5:t.first().outerWidth()-5),s||(s=t.first().parents(".row").outerWidth()),s&&i&&(e.slice=Math.floor(s/i))}if(e.slice)for(var n=0;n<t.length;n+=e.slice)$(t.slice(n,n+e.slice)).equalizeHeightsExt(e.outer,e.classNull,e.minHeight);if(e.lineheight){var r=parseInt(e.lineheight);isNaN(r)&&(r=0),t.each(function(){$(this).css("line-height",$(this).actual("height")+r+"px")})}}var e=$.extend({slice:null,outer:!1,lineheight:!1,autoslicecount:!0,classNull:!1,minHeight:!1,options:!1,parent:!1},e),i=$(this);t(i),BX.addCustomEvent("onWindowResize",function(e){ignoreResize.push(!0),t(i),ignoreResize.pop()})};var timerResize=!1,ignoreResize=[];$(window).resize(function(){ignoreResize.length||(timerResize&&(clearTimeout(timerResize),timerResize=!1),timerResize=setTimeout(function(){BX.onCustomEvent("onWindowResize",!1)},100))});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:80:"/bitrix/templates/aspro_optimus/js/jquery.mousewheel-3.0.6.min.js?15898055531393";s:6:"source";s:65:"/bitrix/templates/aspro_optimus/js/jquery.mousewheel-3.0.6.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:81:"/bitrix/templates/aspro_optimus/js/jquery.mCustomScrollbar.min.js?158980555339873";s:6:"source";s:65:"/bitrix/templates/aspro_optimus/js/jquery.mCustomScrollbar.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e:e(jQuery,window,document)}(function(e){var t,o,a,n,i,r,l,s,c,d,u,f,h,m,p,g,v,x,_,w,S,b,C,y,B,T,k,M,O,I,D,E,W,R,A,L,z,P,H,U,F,q,j,Y,X,N,V,Q,G,J,K,Z,$,ee,te,oe,ae,ne,ie,re;ne="function"==typeof define&&define.amd,ie="undefined"!=typeof module&&module.exports,re="https:"==document.location.protocol?"https:":"http:",ne||(ie?require("jquery-mousewheel")(e):e.event.special.mousewheel||e("head").append(decodeURI("%3Cscript src="+re+"//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))),o="mCustomScrollbar",a="mCS",n=".mCustomScrollbar",i={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:100,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,documentTouchScroll:!0,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:"auto",autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},r=0,l={},s=window.attachEvent&&!window.addEventListener?1:0,c=!1,d=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],u={init:function(t){var t=e.extend(!0,{},i,t),o=f.call(this);if(t.live){var s=t.liveSelector||this.selector||n,c=e(s);if("off"===t.live)return void m(s);l[s]=setTimeout(function(){c.mCustomScrollbar(t),"once"===t.live&&c.length&&m(s)},500)}else m(s);return t.setWidth=t.set_width?t.set_width:t.setWidth,t.setHeight=t.set_height?t.set_height:t.setHeight,t.axis=t.horizontalScroll?"x":p(t.axis),t.scrollInertia=t.scrollInertia>0&&t.scrollInertia<17?17:t.scrollInertia,"object"!=typeof t.mouseWheel&&1==t.mouseWheel&&(t.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),t.mouseWheel.scrollAmount=t.mouseWheelPixels?t.mouseWheelPixels:t.mouseWheel.scrollAmount,t.mouseWheel.normalizeDelta=t.advanced.normalizeMouseWheelDelta?t.advanced.normalizeMouseWheelDelta:t.mouseWheel.normalizeDelta,t.scrollButtons.scrollType=g(t.scrollButtons.scrollType),h(t),e(o).each(function(){var o=e(this);if(!o.data(a)){o.data(a,{idx:++r,opt:t,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:o.css("direction"),cbOffsets:null,trigger:null,poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}});var n=o.data(a),i=n.opt,l=o.data("mcs-axis"),s=o.data("mcs-scrollbar-position"),c=o.data("mcs-theme");l&&(i.axis=l),s&&(i.scrollbarPosition=s),c&&(i.theme=c,h(i)),v.call(this),n&&i.callbacks.onCreate&&"function"==typeof i.callbacks.onCreate&&i.callbacks.onCreate.call(this),e("#mCSB_"+n.idx+"_container img:not(."+d[2]+")").addClass(d[2]),u.update.call(null,o)}})},update:function(t,o){var n=t||f.call(this);return e(n).each(function(){var t=e(this);if(t.data(a)){var n=t.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container"),l=e("#mCSB_"+n.idx),s=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];if(!r.length)return;n.tweenRunning&&V(t),o&&n&&i.callbacks.onBeforeUpdate&&"function"==typeof i.callbacks.onBeforeUpdate&&i.callbacks.onBeforeUpdate.call(this),t.hasClass(d[3])&&t.removeClass(d[3]),t.hasClass(d[4])&&t.removeClass(d[4]),l.css("max-height","none"),l.height()!==t.height()&&l.css("max-height",t.height()),_.call(this),"y"===i.axis||i.advanced.autoExpandHorizontalScroll||r.css("width",x(r)),n.overflowed=y.call(this),M.call(this),i.autoDraggerLength&&S.call(this),b.call(this),T.call(this);var c=[Math.abs(r[0].offsetTop),Math.abs(r[0].offsetLeft)];"x"!==i.axis&&(n.overflowed[0]?s[0].height()>s[0].parent().height()?B.call(this):(Q(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}),n.contentReset.y=null):(B.call(this),"y"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[1]&&Q(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==i.axis&&(n.overflowed[1]?s[1].width()>s[1].parent().width()?B.call(this):(Q(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}),n.contentReset.x=null):(B.call(this),"x"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[0]&&Q(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),o&&n&&(2===o&&i.callbacks.onImageLoad&&"function"==typeof i.callbacks.onImageLoad?i.callbacks.onImageLoad.call(this):3===o&&i.callbacks.onSelectorChange&&"function"==typeof i.callbacks.onSelectorChange?i.callbacks.onSelectorChange.call(this):i.callbacks.onUpdate&&"function"==typeof i.callbacks.onUpdate&&i.callbacks.onUpdate.call(this)),N.call(this)}})},scrollTo:function(t,o){if(void 0!==t&&null!=t){var n=f.call(this);return e(n).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l={trigger:"external",scrollInertia:r.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},s=e.extend(!0,{},l,o),c=Y.call(this,t),d=s.scrollInertia>0&&s.scrollInertia<17?17:s.scrollInertia;c[0]=X.call(this,c[0],"y"),c[1]=X.call(this,c[1],"x"),s.moveDragger&&(c[0]*=i.scrollRatio.y,c[1]*=i.scrollRatio.x),s.dur=ae()?0:d,setTimeout(function(){null!==c[0]&&void 0!==c[0]&&"x"!==r.axis&&i.overflowed[0]&&(s.dir="y",s.overwrite="all",Q(n,c[0].toString(),s)),null!==c[1]&&void 0!==c[1]&&"y"!==r.axis&&i.overflowed[1]&&(s.dir="x",s.overwrite="none",Q(n,c[1].toString(),s))},s.timeout)}})}},stop:function(){var t=f.call(this);return e(t).each(function(){var t=e(this);t.data(a)&&V(t)})},disable:function(t){var o=f.call(this);return e(o).each(function(){var o=e(this);o.data(a)&&(o.data(a),N.call(this,"remove"),k.call(this),t&&B.call(this),M.call(this,!0),o.addClass(d[3]))})},destroy:function(){var t=f.call(this);return e(t).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx),s=e("#mCSB_"+i.idx+"_container"),c=e(".mCSB_"+i.idx+"_scrollbar");r.live&&m(r.liveSelector||e(t).selector),N.call(this,"remove"),k.call(this),B.call(this),n.removeData(a),Z(this,"mcs"),c.remove(),s.find("img."+d[2]).removeClass(d[2]),l.replaceWith(s.contents()),n.removeClass(o+" _"+a+"_"+i.idx+" "+d[6]+" "+d[7]+" "+d[5]+" "+d[3]).addClass(d[4])}})}},f=function(){return"object"!=typeof e(this)||e(this).length<1?n:this},h=function(t){t.autoDraggerLength=!(e.inArray(t.theme,["rounded","rounded-dark","rounded-dots","rounded-dots-dark"])>-1)&&t.autoDraggerLength,t.autoExpandScrollbar=!(e.inArray(t.theme,["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"])>-1)&&t.autoExpandScrollbar,t.scrollButtons.enable=!(e.inArray(t.theme,["minimal","minimal-dark"])>-1)&&t.scrollButtons.enable,t.autoHideScrollbar=e.inArray(t.theme,["minimal","minimal-dark"])>-1||t.autoHideScrollbar,t.scrollbarPosition=e.inArray(t.theme,["minimal","minimal-dark"])>-1?"outside":t.scrollbarPosition},m=function(e){l[e]&&(clearTimeout(l[e]),Z(l,e))},p=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},g=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},v=function(){var t=e(this),n=t.data(a),i=n.opt,r=i.autoExpandScrollbar?" "+d[1]+"_expand":"",l=["<div id='mCSB_"+n.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_vertical"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+n.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_horizontal"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],s="yx"===i.axis?"mCSB_vertical_horizontal":"x"===i.axis?"mCSB_horizontal":"mCSB_vertical",c="yx"===i.axis?l[0]+l[1]:"x"===i.axis?l[1]:l[0],u="yx"===i.axis?"<div id='mCSB_"+n.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",f=i.autoHideScrollbar?" "+d[6]:"",h="x"!==i.axis&&"rtl"===n.langDir?" "+d[7]:"";i.setWidth&&t.css("width",i.setWidth),i.setHeight&&t.css("height",i.setHeight),i.setLeft="y"!==i.axis&&"rtl"===n.langDir?"989999px":i.setLeft,t.addClass(o+" _"+a+"_"+n.idx+f+h).wrapInner("<div id='mCSB_"+n.idx+"' class='mCustomScrollBox mCS-"+i.theme+" "+s+"'><div id='mCSB_"+n.idx+"_container' class='mCSB_container' style='position:relative; top:"+i.setTop+"; left:"+i.setLeft+";' dir='"+n.langDir+"' /></div>");var m=e("#mCSB_"+n.idx),p=e("#mCSB_"+n.idx+"_container");"y"===i.axis||i.advanced.autoExpandHorizontalScroll||p.css("width",x(p)),"outside"===i.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),m.addClass("mCSB_outside").after(c)):(m.addClass("mCSB_inside").append(c),p.wrap(u)),w.call(this);var g=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];g[0].css("min-height",g[0].height()),g[1].css("min-width",g[1].width())},x=function(t){var o=[t[0].scrollWidth,Math.max.apply(Math,t.children().map(function(){return e(this).outerWidth(!0)}).get())],a=t.parent().width();return o[0]>a?o[0]:o[1]>a?o[1]:"100%"},_=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx+"_container");if(n.advanced.autoExpandHorizontalScroll&&"y"!==n.axis){i.css({width:"auto","min-width":0,"overflow-x":"scroll"});var r=Math.ceil(i[0].scrollWidth);3===n.advanced.autoExpandHorizontalScroll||2!==n.advanced.autoExpandHorizontalScroll&&r>i.parent().width()?i.css({width:r,"min-width":"100%","overflow-x":"inherit"}):i.css({"overflow-x":"inherit",position:"absolute"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(i[0].getBoundingClientRect().right+.4)-Math.floor(i[0].getBoundingClientRect().left),"min-width":"100%",position:"relative"}).unwrap()}},w=function(){var t=e(this),o=t.data(a),n=o.opt,i=e(".mCSB_"+o.idx+"_scrollbar:first"),r=te(n.scrollButtons.tabindex)?"tabindex='"+n.scrollButtons.tabindex+"'":"",l=["<a href='#' class='"+d[13]+"' "+r+" />","<a href='#' class='"+d[14]+"' "+r+" />","<a href='#' class='"+d[15]+"' "+r+" />","<a href='#' class='"+d[16]+"' "+r+" />"],s=["x"===n.axis?l[2]:l[0],"x"===n.axis?l[3]:l[1],l[2],l[3]];n.scrollButtons.enable&&i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])},S=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[n.height()/i.outerHeight(!1),n.width()/i.outerWidth(!1)],c=[parseInt(r[0].css("min-height")),Math.round(l[0]*r[0].parent().height()),parseInt(r[1].css("min-width")),Math.round(l[1]*r[1].parent().width())],d=s&&c[1]<c[0]?c[0]:c[1],u=s&&c[3]<c[2]?c[2]:c[3];r[0].css({height:d,"max-height":r[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":c[0]+"px"}),r[1].css({width:u,"max-width":r[1].parent().width()-10})},b=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[i.outerHeight(!1)-n.height(),i.outerWidth(!1)-n.width()],s=[l[0]/(r[0].parent().height()-r[0].height()),l[1]/(r[1].parent().width()-r[1].width())];o.scrollRatio={y:s[0],x:s[1]}},C=function(e,t,o){var a=o?d[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(d[0]+" "+a),n.toggleClass(d[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(d[0]),n.removeClass(d[1])):(e.addClass(d[0]),n.addClass(d[1])))},y=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=null==o.overflowed?i.height():i.outerHeight(!1),l=null==o.overflowed?i.width():i.outerWidth(!1),s=i[0].scrollHeight,c=i[0].scrollWidth;return s>r&&(r=s),c>l&&(l=c),[r>n.height(),l>n.width()]},B=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx),r=e("#mCSB_"+o.idx+"_container"),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(V(t),("x"!==n.axis&&!o.overflowed[0]||"y"===n.axis&&o.overflowed[0])&&(l[0].add(r).css("top",0),Q(t,"_resetY")),"y"!==n.axis&&!o.overflowed[1]||"x"===n.axis&&o.overflowed[1]){var s=dx=0;"rtl"===o.langDir&&(s=i.width()-r.outerWidth(!1),dx=Math.abs(s/o.scrollRatio.x)),r.css("left",s),l[1].css("left",dx),Q(t,"_resetX")}},T=function(){var t=e(this),o=t.data(a),n=o.opt;if(!o.bindEvents){var i;if(I.call(this),n.contentTouchScroll&&D.call(this),E.call(this),n.mouseWheel.enable)!function o(){i=setTimeout(function(){e.event.special.mousewheel?(clearTimeout(i),W.call(t[0])):o()},100)}();P.call(this),U.call(this),n.advanced.autoScrollOnFocus&&H.call(this),n.scrollButtons.enable&&F.call(this),n.keyboard.enable&&q.call(this),o.bindEvents=!0}},k=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=".mCSB_"+o.idx+"_scrollbar",l=e("#mCSB_"+o.idx+",#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,"+r+" ."+d[12]+",#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal,"+r+">a"),s=e("#mCSB_"+o.idx+"_container");n.advanced.releaseDraggableSelectors&&l.add(e(n.advanced.releaseDraggableSelectors)),n.advanced.extraDraggableSelectors&&l.add(e(n.advanced.extraDraggableSelectors)),o.bindEvents&&(e(document).add(e(!A()||top.document)).unbind("."+i),l.each(function(){e(this).unbind("."+i)}),clearTimeout(t[0]._focusTimeout),Z(t[0],"_focusTimeout"),clearTimeout(o.sequential.step),Z(o.sequential,"step"),clearTimeout(s[0].onCompleteTimeout),Z(s[0],"onCompleteTimeout"),o.bindEvents=!1)},M=function(t){var o=e(this),n=o.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container_wrapper"),l=r.length?r:e("#mCSB_"+n.idx+"_container"),s=[e("#mCSB_"+n.idx+"_scrollbar_vertical"),e("#mCSB_"+n.idx+"_scrollbar_horizontal")],c=[s[0].find(".mCSB_dragger"),s[1].find(".mCSB_dragger")];"x"!==i.axis&&(n.overflowed[0]&&!t?(s[0].add(c[0]).add(s[0].children("a")).css("display","block"),l.removeClass(d[8]+" "+d[10])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[0].css("display","none"),l.removeClass(d[10])):(s[0].css("display","none"),l.addClass(d[10])),l.addClass(d[8]))),"y"!==i.axis&&(n.overflowed[1]&&!t?(s[1].add(c[1]).add(s[1].children("a")).css("display","block"),l.removeClass(d[9]+" "+d[11])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[1].css("display","none"),l.removeClass(d[11])):(s[1].css("display","none"),l.addClass(d[11])),l.addClass(d[9]))),n.overflowed[0]||n.overflowed[1]?o.removeClass(d[5]):o.addClass(d[5])},O=function(t){var o=t.type,a=t.target.ownerDocument!==document&&null!==frameElement?[e(frameElement).offset().top,e(frameElement).offset().left]:null,n=A()&&t.target.ownerDocument!==top.document&&null!==frameElement?[e(t.view.frameElement).offset().top,e(t.view.frameElement).offset().left]:[0,0];switch(o){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return a?[t.originalEvent.pageY-a[0]+n[0],t.originalEvent.pageX-a[1]+n[1],!1]:[t.originalEvent.pageY,t.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var i=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0],r=t.originalEvent.touches.length||t.originalEvent.changedTouches.length;return t.target.ownerDocument!==document?[i.screenY,i.screenX,r>1]:[i.pageY,i.pageX,r>1];default:return a?[t.pageY-a[0]+n[0],t.pageX-a[1]+n[1],!1]:[t.pageY,t.pageX,!1]}},I=function(){var t,o,n,i=e(this),r=i.data(a),l=r.opt,d=a+"_"+r.idx,u=["mCSB_"+r.idx+"_dragger_vertical","mCSB_"+r.idx+"_dragger_horizontal"],f=e("#mCSB_"+r.idx+"_container"),h=e("#"+u[0]+",#"+u[1]),m=l.advanced.releaseDraggableSelectors?h.add(e(l.advanced.releaseDraggableSelectors)):h,p=l.advanced.extraDraggableSelectors?e(!A()||top.document).add(e(l.advanced.extraDraggableSelectors)):e(!A()||top.document);function g(e,o,a,n){if(f[0].idleTimer=l.scrollInertia<233?250:0,t.attr("id")===u[1])var s="x",c=(t[0].offsetLeft-o+n)*r.scrollRatio.x;else var s="y",c=(t[0].offsetTop-e+a)*r.scrollRatio.y;Q(i,c.toString(),{dir:s,drag:!0})}h.bind("contextmenu."+d,function(e){e.preventDefault()}).bind("mousedown."+d+" touchstart."+d+" pointerdown."+d+" MSPointerDown."+d,function(a){if(a.stopImmediatePropagation(),a.preventDefault(),$(a)){c=!0,s&&(document.onselectstart=function(){return!1}),L.call(f,!1),V(i);var r=(t=e(this)).offset(),d=O(a)[0]-r.top,u=O(a)[1]-r.left,h=t.height()+r.top,m=t.width()+r.left;d<h&&d>0&&u<m&&u>0&&(o=d,n=u),C(t,"active",l.autoExpandScrollbar)}}).bind("touchmove."+d,function(e){e.stopImmediatePropagation(),e.preventDefault();var a=t.offset(),i=O(e)[0]-a.top,r=O(e)[1]-a.left;g(o,n,i,r)}),e(document).add(p).bind("mousemove."+d+" pointermove."+d+" MSPointerMove."+d,function(e){if(t){var a=t.offset(),i=O(e)[0]-a.top,r=O(e)[1]-a.left;if(o===i&&n===r)return;g(o,n,i,r)}}).add(m).bind("mouseup."+d+" touchend."+d+" pointerup."+d+" MSPointerUp."+d,function(e){t&&(C(t,"active",l.autoExpandScrollbar),t=null),c=!1,s&&(document.onselectstart=null),L.call(f,!0)})},D=function(){var o,n,i,r,l,s,d,u,f,h,m,p,g,v,x=e(this),_=x.data(a),w=_.opt,S=a+"_"+_.idx,b=e("#mCSB_"+_.idx),C=e("#mCSB_"+_.idx+"_container"),y=[e("#mCSB_"+_.idx+"_dragger_vertical"),e("#mCSB_"+_.idx+"_dragger_horizontal")],B=[],T=[],k=0,M="yx"===w.axis?"none":"all",I=[],D=C.find("iframe"),E=["touchstart."+S+" pointerdown."+S+" MSPointerDown."+S,"touchmove."+S+" pointermove."+S+" MSPointerMove."+S,"touchend."+S+" pointerup."+S+" MSPointerUp."+S],W=void 0!==document.body.style.touchAction&&""!==document.body.style.touchAction;function R(e){if(!ee(e)||c||O(e)[2])t=0;else{t=1,g=0,v=0,o=1,x.removeClass("mCS_touch_action");var a=C.offset();n=O(e)[0]-a.top,i=O(e)[1]-a.left,I=[O(e)[0],O(e)[1]]}}function L(e){if(ee(e)&&!c&&!O(e)[2]&&(w.documentTouchScroll||e.preventDefault(),e.stopImmediatePropagation(),(!v||g)&&o)){d=J();var t=b.offset(),a=O(e)[0]-t.top,r=O(e)[1]-t.left,l="mcsLinearOut";if(B.push(a),T.push(r),I[2]=Math.abs(O(e)[0]-I[0]),I[3]=Math.abs(O(e)[1]-I[1]),_.overflowed[0])var s=y[0].parent().height()-y[0].height(),u=n-a>0&&a-n>-s*_.scrollRatio.y&&(2*I[3]<I[2]||"yx"===w.axis);if(_.overflowed[1])var f=y[1].parent().width()-y[1].width(),h=i-r>0&&r-i>-f*_.scrollRatio.x&&(2*I[2]<I[3]||"yx"===w.axis);u||h?(W||e.preventDefault(),g=1):(v=1,x.addClass("mCS_touch_action")),W&&e.preventDefault(),m="yx"===w.axis?[n-a,i-r]:"x"===w.axis?[null,i-r]:[n-a,null],C[0].idleTimer=250,_.overflowed[0]&&U(m[0],k,l,"y","all",!0),_.overflowed[1]&&U(m[1],k,l,"x",M,!0)}}function z(e){if(!ee(e)||c||O(e)[2])t=0;else{t=1,e.stopImmediatePropagation(),V(x),s=J();var o=b.offset();r=O(e)[0]-o.top,l=O(e)[1]-o.left,B=[],T=[]}}function P(e){if(ee(e)&&!c&&!O(e)[2]){o=0,e.stopImmediatePropagation(),g=0,v=0,u=J();var t=b.offset(),a=O(e)[0]-t.top,n=O(e)[1]-t.left;if(!(u-d>30)){var i="mcsEaseOut",x=(h=1e3/(u-s))<2.5,S=x?[B[B.length-2],T[T.length-2]]:[0,0];f=x?[a-S[0],n-S[1]]:[a-r,n-l];var y=[Math.abs(f[0]),Math.abs(f[1])];h=x?[Math.abs(f[0]/4),Math.abs(f[1]/4)]:[h,h];var k=[Math.abs(C[0].offsetTop)-f[0]*H(y[0]/h[0],h[0]),Math.abs(C[0].offsetLeft)-f[1]*H(y[1]/h[1],h[1])];m="yx"===w.axis?[k[0],k[1]]:"x"===w.axis?[null,k[1]]:[k[0],null],p=[4*y[0]+w.scrollInertia,4*y[1]+w.scrollInertia];var I=parseInt(w.contentTouchScroll)||0;m[0]=y[0]>I?m[0]:0,m[1]=y[1]>I?m[1]:0,_.overflowed[0]&&U(m[0],p[0],i,"y",M,!1),_.overflowed[1]&&U(m[1],p[1],i,"x",M,!1)}}}function H(e,t){var o=[1.5*t,2*t,t/1.5,t/2];return e>90?t>4?o[0]:o[3]:e>60?t>3?o[3]:o[2]:e>30?t>8?o[1]:t>6?o[0]:t>4?t:o[2]:t>8?t:o[3]}function U(e,t,o,a,n,i){e&&Q(x,e.toString(),{dur:t,scrollEasing:o,dir:a,overwrite:n,drag:i})}C.bind(E[0],function(e){R(e)}).bind(E[1],function(e){L(e)}),b.bind(E[0],function(e){z(e)}).bind(E[2],function(e){P(e)}),D.length&&D.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(E[0],function(e){R(e),z(e)}).bind(E[1],function(e){L(e)}).bind(E[2],function(e){P(e)})})})},E=function(){var o,n=e(this),i=n.data(a),r=i.opt,l=i.sequential,s=a+"_"+i.idx,d=e("#mCSB_"+i.idx+"_container"),u=d.parent();function f(e,t,a){l.type=a&&o?"stepped":"stepless",l.scrollAmount=10,j(n,e,t,"mcsLinearOut",a?60:null)}d.bind("mousedown."+s,function(e){t||o||(o=1,c=!0)}).add(document).bind("mousemove."+s,function(e){if(!t&&o&&(window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type&&document.selection.createRange().text)){var a=d.offset(),n=O(e)[0]-a.top+d[0].offsetTop,s=O(e)[1]-a.left+d[0].offsetLeft;n>0&&n<u.height()&&s>0&&s<u.width()?l.step&&f("off",null,"stepped"):("x"!==r.axis&&i.overflowed[0]&&(n<0?f("on",38):n>u.height()&&f("on",40)),"y"!==r.axis&&i.overflowed[1]&&(s<0?f("on",37):s>u.width()&&f("on",39)))}}).bind("mouseup."+s+" dragend."+s,function(e){t||(o&&(o=0,f("off",null)),c=!1)})},W=function(){if(e(this).data(a)){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=e("#mCSB_"+o.idx),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],c=e("#mCSB_"+o.idx+"_container").find("iframe");c.length&&c.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind("mousewheel."+i,function(e,t){d(e,t)})})}),r.bind("mousewheel."+i,function(e,t){d(e,t)})}function d(a,i){if(V(t),!z(t,a.target)){var c="auto"!==n.mouseWheel.deltaFactor?parseInt(n.mouseWheel.deltaFactor):s&&a.deltaFactor<100?100:a.deltaFactor||100,d=n.scrollInertia;if("x"===n.axis||"x"===n.mouseWheel.axis)var u="x",f=[Math.round(c*o.scrollRatio.x),parseInt(n.mouseWheel.scrollAmount)],h="auto"!==n.mouseWheel.scrollAmount?f[1]:f[0]>=r.width()?.9*r.width():f[0],m=Math.abs(e("#mCSB_"+o.idx+"_container")[0].offsetLeft),p=l[1][0].offsetLeft,g=l[1].parent().width()-l[1].width(),v="y"===n.mouseWheel.axis?a.deltaY||i:a.deltaX;else var u="y",f=[Math.round(c*o.scrollRatio.y),parseInt(n.mouseWheel.scrollAmount)],h="auto"!==n.mouseWheel.scrollAmount?f[1]:f[0]>=r.height()?.9*r.height():f[0],m=Math.abs(e("#mCSB_"+o.idx+"_container")[0].offsetTop),p=l[0][0].offsetTop,g=l[0].parent().height()-l[0].height(),v=a.deltaY||i;"y"===u&&!o.overflowed[0]||"x"===u&&!o.overflowed[1]||((n.mouseWheel.invert||a.webkitDirectionInvertedFromDevice)&&(v=-v),n.mouseWheel.normalizeDelta&&(v=v<0?-1:1),(v>0&&0!==p||v<0&&p!==g||n.mouseWheel.preventDefault)&&(a.stopImmediatePropagation(),a.preventDefault()),a.deltaFactor<5&&!n.mouseWheel.normalizeDelta&&(h=a.deltaFactor,d=17),Q(t,(m-v*h).toString(),{dir:u,dur:d}))}}},R=new Object,A=function(t){var o=!1,a=!1,n=null;if(void 0===t?a="#empty":void 0!==e(t).attr("id")&&(a=e(t).attr("id")),!1!==a&&void 0!==R[a])return R[a];if(t){try{var i=t.contentDocument||t.contentWindow.document;n=i.body.innerHTML}catch(e){}o=null!==n}else{try{var i=top.document;n=i.body.innerHTML}catch(e){}o=null!==n}return!1!==a&&(R[a]=o),o},L=function(e){var t=this.find("iframe");if(t.length){var o=e?"auto":"none";t.css("pointer-events",o)}},z=function(t,o){var n=o.nodeName.toLowerCase(),i=t.data(a).opt.mouseWheel.disableOver;return e.inArray(n,i)>-1&&!(e.inArray(n,["select","textarea"])>-1&&!e(o).is(":focus"))},P=function(){var t,o=e(this),n=o.data(a),i=a+"_"+n.idx,r=e("#mCSB_"+n.idx+"_container"),l=r.parent(),s=e(".mCSB_"+n.idx+"_scrollbar ."+d[12]);s.bind("mousedown."+i+" touchstart."+i+" pointerdown."+i+" MSPointerDown."+i,function(o){c=!0,e(o.target).hasClass("mCSB_dragger")||(t=1)}).bind("touchend."+i+" pointerup."+i+" MSPointerUp."+i,function(e){c=!1}).bind("click."+i,function(a){if(t&&(t=0,e(a.target).hasClass(d[12])||e(a.target).hasClass("mCSB_draggerRail"))){V(o);var i=e(this),s=i.find(".mCSB_dragger");if(i.parent(".mCSB_scrollTools_horizontal").length>0){if(!n.overflowed[1])return;var c="x",u=a.pageX>s.offset().left?-1:1,f=Math.abs(r[0].offsetLeft)-u*(.9*l.width())}else{if(!n.overflowed[0])return;var c="y",u=a.pageY>s.offset().top?-1:1,f=Math.abs(r[0].offsetTop)-u*(.9*l.height())}Q(o,f.toString(),{dir:c,scrollEasing:"mcsEaseInOut"})}})},H=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=e("#mCSB_"+o.idx+"_container"),l=r.parent();r.bind("focusin."+i,function(o){var a=e(document.activeElement),i=r.find(".mCustomScrollBox").length;a.is(n.advanced.autoScrollOnFocus)&&(V(t),clearTimeout(t[0]._focusTimeout),t[0]._focusTimer=i?17*i:0,t[0]._focusTimeout=setTimeout(function(){var e=[oe(a)[0],oe(a)[1]],o=[r[0].offsetTop,r[0].offsetLeft],i=[o[0]+e[0]>=0&&o[0]+e[0]<l.height()-a.outerHeight(!1),o[1]+e[1]>=0&&o[0]+e[1]<l.width()-a.outerWidth(!1)],s="yx"!==n.axis||i[0]||i[1]?"all":"none";"x"===n.axis||i[0]||Q(t,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:s,dur:0}),"y"===n.axis||i[1]||Q(t,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:s,dur:0})},t[0]._focusTimer))})},U=function(){var t=e(this),o=t.data(a),n=a+"_"+o.idx,i=e("#mCSB_"+o.idx+"_container").parent();i.bind("scroll."+n,function(t){0===i.scrollTop()&&0===i.scrollLeft()||e(".mCSB_"+o.idx+"_scrollbar").css("visibility","hidden")})},F=function(){var t=e(this),o=t.data(a),n=o.opt,i=o.sequential,r=a+"_"+o.idx,l=".mCSB_"+o.idx+"_scrollbar",s=e(l+">a");s.bind("contextmenu."+r,function(e){e.preventDefault()}).bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r+" mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r+" mouseout."+r+" pointerout."+r+" MSPointerOut."+r+" click."+r,function(a){if(a.preventDefault(),$(a)){var r=e(this).attr("class");switch(i.type=n.scrollButtons.scrollType,a.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===i.type)return;c=!0,o.tweenRunning=!1,l("on",r);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===i.type)return;c=!1,i.dir&&l("off",r);break;case"click":if("stepped"!==i.type||o.tweenRunning)return;l("on",r)}}function l(e,o){i.scrollAmount=n.scrollButtons.scrollAmount,j(t,e,o)}})},q=function(){var t=e(this),o=t.data(a),n=o.opt,i=o.sequential,r=a+"_"+o.idx,l=e("#mCSB_"+o.idx),s=e("#mCSB_"+o.idx+"_container"),c=s.parent(),d="input,textarea,select,datalist,keygen,[contenteditable='true']",u=s.find("iframe"),f=["blur."+r+" keydown."+r+" keyup."+r];function h(a){switch(a.type){case"blur":o.tweenRunning&&i.dir&&m("off",null);break;case"keydown":case"keyup":var r=a.keyCode?a.keyCode:a.which,l="on";if("x"!==n.axis&&(38===r||40===r)||"y"!==n.axis&&(37===r||39===r)){if((38===r||40===r)&&!o.overflowed[0]||(37===r||39===r)&&!o.overflowed[1])return;"keyup"===a.type&&(l="off"),e(document.activeElement).is(d)||(a.preventDefault(),a.stopImmediatePropagation(),m(l,r))}else if(33===r||34===r){if((o.overflowed[0]||o.overflowed[1])&&(a.preventDefault(),a.stopImmediatePropagation()),"keyup"===a.type){V(t);var u=34===r?-1:1;if("x"===n.axis||"yx"===n.axis&&o.overflowed[1]&&!o.overflowed[0])var f="x",h=Math.abs(s[0].offsetLeft)-u*(.9*c.width());else var f="y",h=Math.abs(s[0].offsetTop)-u*(.9*c.height());Q(t,h.toString(),{dir:f,scrollEasing:"mcsEaseInOut"})}}else if((35===r||36===r)&&!e(document.activeElement).is(d)&&((o.overflowed[0]||o.overflowed[1])&&(a.preventDefault(),a.stopImmediatePropagation()),"keyup"===a.type)){if("x"===n.axis||"yx"===n.axis&&o.overflowed[1]&&!o.overflowed[0])var f="x",h=35===r?Math.abs(c.width()-s.outerWidth(!1)):0;else var f="y",h=35===r?Math.abs(c.height()-s.outerHeight(!1)):0;Q(t,h.toString(),{dir:f,scrollEasing:"mcsEaseInOut"})}}function m(e,a){i.type=n.keyboard.scrollType,i.scrollAmount=n.keyboard.scrollAmount,"stepped"===i.type&&o.tweenRunning||j(t,e,a)}}u.length&&u.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(f[0],function(e){h(e)})})}),l.attr("tabindex","0").bind(f[0],function(e){h(e)})},j=function(t,o,n,i,r){var l=t.data(a),s=l.opt,c=l.sequential,u=e("#mCSB_"+l.idx+"_container"),f="stepped"===c.type,h=s.scrollInertia<26?26:s.scrollInertia,m=s.scrollInertia<1?17:s.scrollInertia;switch(o){case"on":if(c.dir=[n===d[16]||n===d[15]||39===n||37===n?"x":"y",n===d[13]||n===d[15]||38===n||37===n?-1:1],V(t),te(n)&&"stepped"===c.type)return;p(f);break;case"off":clearTimeout(c.step),Z(c,"step"),V(t),(f||l.tweenRunning&&c.dir)&&p(!0)}function p(e){s.snapAmount&&(c.scrollAmount=s.snapAmount instanceof Array?"x"===c.dir[0]?s.snapAmount[1]:s.snapAmount[0]:s.snapAmount);var o="stepped"!==c.type,a=r||(e?o?h/1.5:m:1e3/60),n=e?o?7.5:40:2.5,d=[Math.abs(u[0].offsetTop),Math.abs(u[0].offsetLeft)],f=[l.scrollRatio.y>10?10:l.scrollRatio.y,l.scrollRatio.x>10?10:l.scrollRatio.x],g="x"===c.dir[0]?d[1]+c.dir[1]*(f[1]*n):d[0]+c.dir[1]*(f[0]*n),v="x"===c.dir[0]?d[1]+c.dir[1]*parseInt(c.scrollAmount):d[0]+c.dir[1]*parseInt(c.scrollAmount),x="auto"!==c.scrollAmount?v:g,_=i||(e?o?"mcsLinearOut":"mcsEaseInOut":"mcsLinear"),w=!!e;e&&a<17&&(x="x"===c.dir[0]?d[1]:d[0]),Q(t,x.toString(),{dir:c.dir[0],scrollEasing:_,dur:a,onComplete:w}),e?c.dir=!1:(clearTimeout(c.step),c.step=setTimeout(function(){p()},a))}},Y=function(t){var o=e(this).data(a).opt,n=[];return"function"==typeof t&&(t=t()),t instanceof Array?n=t.length>1?[t[0],t[1]]:"x"===o.axis?[null,t[0]]:[t[0],null]:(n[0]=t.y?t.y:t.x||"x"===o.axis?null:t,n[1]=t.x?t.x:t.y||"y"===o.axis?null:t),"function"==typeof n[0]&&(n[0]=n[0]()),"function"==typeof n[1]&&(n[1]=n[1]()),n},X=function(t,o){if(null!=t&&void 0!==t){var n=e(this),i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx+"_container"),s=l.parent(),c=typeof t;o||(o="x"===r.axis?"x":"y");var d="x"===o?l.outerWidth(!1)-s.width():l.outerHeight(!1)-s.height(),f="x"===o?l[0].offsetLeft:l[0].offsetTop,h="x"===o?"left":"top";switch(c){case"function":return t();case"object":var m=t.jquery?t:e(t);if(!m.length)return;return"x"===o?oe(m)[1]:oe(m)[0];case"string":case"number":if(te(t))return Math.abs(t);if(-1!==t.indexOf("%"))return Math.abs(d*parseInt(t)/100);if(-1!==t.indexOf("-="))return Math.abs(f-parseInt(t.split("-=")[1]));if(-1!==t.indexOf("+=")){var p=f+parseInt(t.split("+=")[1]);return p>=0?0:Math.abs(p)}if(-1!==t.indexOf("px")&&te(t.split("px")[0]))return Math.abs(t.split("px")[0]);if("top"===t||"left"===t)return 0;if("bottom"===t)return Math.abs(s.height()-l.outerHeight(!1));if("right"===t)return Math.abs(s.width()-l.outerWidth(!1));if("first"===t||"last"===t){var m=l.find(":"+t);return"x"===o?oe(m)[1]:oe(m)[0]}return e(t).length?"x"===o?oe(e(t))[1]:oe(e(t))[0]:(l.css(h,t),void u.update.call(null,n[0]))}}},N=function(t){var o=e(this),n=o.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container");if(t)return clearTimeout(r[0].autoUpdate),void Z(r[0],"autoUpdate");function l(e){clearTimeout(r[0].autoUpdate),u.update.call(null,o[0],e)}!function t(){clearTimeout(r[0].autoUpdate),0!==o.parents("html").length?r[0].autoUpdate=setTimeout(function(){return i.advanced.updateOnSelectorChange&&(n.poll.change.n=function(){!0===i.advanced.updateOnSelectorChange&&(i.advanced.updateOnSelectorChange="*");var e=0,t=r.find(i.advanced.updateOnSelectorChange);return i.advanced.updateOnSelectorChange&&t.length>0&&t.each(function(){e+=this.offsetHeight+this.offsetWidth}),e}(),n.poll.change.n!==n.poll.change.o)?(n.poll.change.o=n.poll.change.n,void l(3)):i.advanced.updateOnContentResize&&(n.poll.size.n=o[0].scrollHeight+o[0].scrollWidth+r[0].offsetHeight+o[0].offsetHeight+o[0].offsetWidth,n.poll.size.n!==n.poll.size.o)?(n.poll.size.o=n.poll.size.n,void l(1)):!i.advanced.updateOnImageLoad||"auto"===i.advanced.updateOnImageLoad&&"y"===i.axis||(n.poll.img.n=r.find("img").length,n.poll.img.n===n.poll.img.o)?void((i.advanced.updateOnSelectorChange||i.advanced.updateOnContentResize||i.advanced.updateOnImageLoad)&&t()):(n.poll.img.o=n.poll.img.n,void r.find("img").each(function(){!function(t){if(e(t).hasClass(d[2]))l();else{var o,a,n=new Image;n.onload=(o=n,a=function(){this.onload=null,e(t).addClass(d[2]),l(2)},function(){return a.apply(o,arguments)}),n.src=t.src}}(this)}))},i.advanced.autoUpdateTimeout):o=null}()},V=function(t){var o=t.data(a),n=e("#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal");n.each(function(){K.call(this)})},Q=function(t,o,n){var i=t.data(a),r=i.opt,l={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:r.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},n=e.extend(l,n),s=[n.dur,n.drag?0:n.dur],c=e("#mCSB_"+i.idx),d=e("#mCSB_"+i.idx+"_container"),u=d.parent(),f=r.callbacks.onTotalScrollOffset?Y.call(t,r.callbacks.onTotalScrollOffset):[0,0],h=r.callbacks.onTotalScrollBackOffset?Y.call(t,r.callbacks.onTotalScrollBackOffset):[0,0];if(i.trigger=n.trigger,0===u.scrollTop()&&0===u.scrollLeft()||(e(".mCSB_"+i.idx+"_scrollbar").css("visibility","visible"),u.scrollTop(0).scrollLeft(0)),"_resetY"!==o||i.contentReset.y||(M("onOverflowYNone")&&r.callbacks.onOverflowYNone.call(t[0]),i.contentReset.y=1),"_resetX"!==o||i.contentReset.x||(M("onOverflowXNone")&&r.callbacks.onOverflowXNone.call(t[0]),i.contentReset.x=1),"_resetY"!==o&&"_resetX"!==o){if(!i.contentReset.y&&t[0].mcs||!i.overflowed[0]||(M("onOverflowY")&&r.callbacks.onOverflowY.call(t[0]),i.contentReset.x=null),!i.contentReset.x&&t[0].mcs||!i.overflowed[1]||(M("onOverflowX")&&r.callbacks.onOverflowX.call(t[0]),i.contentReset.x=null),r.snapAmount){var m=r.snapAmount instanceof Array?"x"===n.dir?r.snapAmount[1]:r.snapAmount[0]:r.snapAmount;p=o,g=m,v=r.snapOffset,o=Math.round(p/g)*g-v}var p,g,v;switch(n.dir){case"x":var x=e("#mCSB_"+i.idx+"_dragger_horizontal"),_="left",w=d[0].offsetLeft,S=[c.width()-d.outerWidth(!1),x.parent().width()-x.width()],b=[o,0===o?0:o/i.scrollRatio.x],y=f[1],B=h[1],T=y>0?y/i.scrollRatio.x:0,k=B>0?B/i.scrollRatio.x:0;break;case"y":var x=e("#mCSB_"+i.idx+"_dragger_vertical"),_="top",w=d[0].offsetTop,S=[c.height()-d.outerHeight(!1),x.parent().height()-x.height()],b=[o,0===o?0:o/i.scrollRatio.y],y=f[0],B=h[0],T=y>0?y/i.scrollRatio.y:0,k=B>0?B/i.scrollRatio.y:0}b[1]<0||0===b[0]&&0===b[1]?b=[0,0]:b[1]>=S[1]?b=[S[0],S[1]]:b[0]=-b[0],t[0].mcs||(O(),M("onInit")&&r.callbacks.onInit.call(t[0])),clearTimeout(d[0].onCompleteTimeout),G(x[0],_,Math.round(b[1]),s[1],n.scrollEasing),!i.tweenRunning&&(0===w&&b[0]>=0||w===S[0]&&b[0]<=S[0])||G(d[0],_,Math.round(b[0]),s[0],n.scrollEasing,n.overwrite,{onStart:function(){n.callbacks&&n.onStart&&!i.tweenRunning&&(M("onScrollStart")&&(O(),r.callbacks.onScrollStart.call(t[0])),i.tweenRunning=!0,C(x),i.cbOffsets=[r.callbacks.alwaysTriggerOffsets||w>=S[0]+y,r.callbacks.alwaysTriggerOffsets||w<=-B])},onUpdate:function(){n.callbacks&&n.onUpdate&&M("whileScrolling")&&(O(),r.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(n.callbacks&&n.onComplete){"yx"===r.axis&&clearTimeout(d[0].onCompleteTimeout);var e=d[0].idleTimer||0;d[0].onCompleteTimeout=setTimeout(function(){M("onScroll")&&(O(),r.callbacks.onScroll.call(t[0])),M("onTotalScroll")&&b[1]>=S[1]-T&&i.cbOffsets[0]&&(O(),r.callbacks.onTotalScroll.call(t[0])),M("onTotalScrollBack")&&b[1]<=k&&i.cbOffsets[1]&&(O(),r.callbacks.onTotalScrollBack.call(t[0])),i.tweenRunning=!1,d[0].idleTimer=0,C(x,"hide")},e)}}})}function M(e){return i&&r.callbacks[e]&&"function"==typeof r.callbacks[e]}function O(){var e=[d[0].offsetTop,d[0].offsetLeft],o=[x[0].offsetTop,x[0].offsetLeft],a=[d.outerHeight(!1),d.outerWidth(!1)],i=[c.height(),c.width()];t[0].mcs={content:d,top:e[0],left:e[1],draggerTop:o[0],draggerLeft:o[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(a[0])-i[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(a[1])-i[1])),direction:n.dir}}},G=function(e,t,o,a,n,i,r){e._mTween||(e._mTween={top:{},left:{}});var l,s,r=r||{},c=r.onStart||function(){},d=r.onUpdate||function(){},u=r.onComplete||function(){},f=J(),h=0,m=e.offsetTop,p=e.style,g=e._mTween[t];"left"===t&&(m=e.offsetLeft);var v=o-m;function x(){g.stop||(h||c.call(),h=J()-f,_(),h>=g.time&&(g.time=h>g.time?h+l-(h-g.time):h+l-1,g.time<h+1&&(g.time=h+1)),g.time<a?g.id=s(x):u.call())}function _(){a>0?(g.currVal=function(e,t,o,a,n){switch(n){case"linear":case"mcsLinear":return o*e/a+t;case"mcsLinearOut":return e/=a,e--,o*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return(e/=a/2)<1?o/2*e*e+t:-o/2*(--e*(e-2)-1)+t;case"easeInOutStrong":return(e/=a/2)<1?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(2-Math.pow(2,-10*e))+t);case"easeInOut":case"mcsEaseInOut":return(e/=a/2)<1?o/2*e*e*e+t:o/2*((e-=2)*e*e+2)+t;case"easeOutSmooth":return e/=a,-o*(--e*e*e*e-1)+t;case"easeOutStrong":return o*(1-Math.pow(2,-10*e/a))+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=a)*e,r=i*e;return t+o*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}(g.time,m,v,a,n),p[t]=Math.round(g.currVal)+"px"):p[t]=o+"px",d.call()}g.stop=0,"none"!==i&&null!=g.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(g.id):clearTimeout(g.id),g.id=null),l=1e3/60,g.time=h+l,s=window.requestAnimationFrame?window.requestAnimationFrame:function(e){return _(),setTimeout(e,.01)},g.id=s(x)},J=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},K=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var t=["top","left"],o=0;o<t.length;o++){var a=t[o];e._mTween[a].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(e._mTween[a].id):clearTimeout(e._mTween[a].id),e._mTween[a].id=null,e._mTween[a].stop=1)}},Z=function(e,t){try{delete e[t]}catch(o){e[t]=null}},$=function(e){return!(e.which&&1!==e.which)},ee=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},te=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},oe=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]},ae=function(){var e=function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}();return!!e&&document[e]},e.fn[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o].defaults=i,window[o]=!0,e(window).bind("load",function(){e(n)[o](),e.extend(e.expr[":"],{mcsInView:e.expr[":"].mcsInView||function(t){var o,a,n=e(t),i=n.parents(".mCSB_container");if(i.length)return o=i.parent(),(a=[i[0].offsetTop,i[0].offsetLeft])[0]+oe(n)[0]>=0&&a[0]+oe(n)[0]<o.height()-n.outerHeight(!1)&&a[1]+oe(n)[1]>=0&&a[1]+oe(n)[1]<o.width()-n.outerWidth(!1)},mcsInSight:e.expr[":"].mcsInSight||function(t,o,a){var n,i,r,l,s=e(t),c=s.parents(".mCSB_container"),d="exact"===a[3]?[[1,0],[1,0]]:[[.9,.1],[.6,.4]];if(c.length)return n=[s.outerHeight(!1),s.outerWidth(!1)],r=[c[0].offsetTop+oe(s)[0],c[0].offsetLeft+oe(s)[1]],i=[c.parent()[0].offsetHeight,c.parent()[0].offsetWidth],r[0]-i[0]*(l=[n[0]<i[0]?d[0]:d[1],n[1]<i[1]?d[0]:d[1]])[0][0]<0&&r[0]+n[0]-i[0]*l[0][1]>=0&&r[1]-i[1]*l[1][0]<0&&r[1]+n[1]-i[1]*l[1][1]>=0},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var o=e(t).data(a);if(o)return o.overflowed[0]||o.overflowed[1]}})})});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:73:"/bitrix/templates/aspro_optimus/js/jquery.dotdotdot.min.js?15898055535908";s:6:"source";s:54:"/bitrix/templates/aspro_optimus/js/jquery.dotdotdot.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(t,e){function n(t,e,n){var r=t.children(),o=!1;t.empty();for(var i=0,d=r.length;d>i;i++){var l=r.eq(i);if(t.append(l),n&&t.append(n),a(t,e)){l.remove(),o=!0;break}n&&n.detach()}return o}function r(e,n,i,d,l){var s=!1,c="a table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",u="script, .dotdotdot-keep";return e.contents().detach().each(function(){var f=this,h=t(f);if("undefined"==typeof f||3==f.nodeType&&0==t.trim(f.data).length)return!0;if(h.is(u))e.append(h);else{if(s)return!0;e.append(h),!l||h.is(d.after)||h.find(d.after).length||e[e.is(c)?"after":"append"](l),a(i,d)&&(s=3==f.nodeType?o(h,n,i,d,l):r(h,n,i,d,l),s||(h.detach(),s=!0)),s||l&&l.detach()}}),s}function o(e,n,r,o,d){var c=e[0];if(!c)return!1;var f=s(c),h=-1!==f.indexOf(" ")?" ":"　",p="letter"==o.wrap?"":h,g=f.split(p),v=-1,w=-1,y=0,b=g.length-1;for(o.fallbackToLetter&&0==y&&0==b&&(p="",g=f.split(p),b=g.length-1);b>=y&&(0!=y||0!=b);){var m=Math.floor((y+b)/2);if(m==w)break;w=m,l(c,g.slice(0,w+1).join(p)+o.ellipsis),a(r,o)?(b=w,o.fallbackToLetter&&0==y&&0==b&&(p="",g=g[0].split(p),v=-1,w=-1,y=0,b=g.length-1)):(v=w,y=w)}if(-1==v||1==g.length&&0==g[0].length){var T=e.parent();e.detach();var x=d&&d.closest(T).length?d.length:0;T.contents().length>x?c=u(T.contents().eq(-1-x),n):(c=u(T,n,!0),x||T.detach()),c&&(f=i(s(c),o),l(c,f),x&&d&&t(c).parent().append(d))}else f=i(g.slice(0,v+1).join(p),o),l(c,f);return!0}function a(t,e){return t.innerHeight()>e.maxHeight}function i(e,n){for(;t.inArray(e.slice(-1),n.lastCharacter.remove)>-1;)e=e.slice(0,-1);return t.inArray(e.slice(-1),n.lastCharacter.noEllipsis)<0&&(e+=n.ellipsis),e}function d(t){return{width:t.innerWidth(),height:t.innerHeight()}}function l(t,e){t.innerText?t.innerText=e:t.nodeValue?t.nodeValue=e:t.textContent&&(t.textContent=e)}function s(t){return t.innerText?t.innerText:t.nodeValue?t.nodeValue:t.textContent?t.textContent:""}function c(t){do t=t.previousSibling;while(t&&1!==t.nodeType&&3!==t.nodeType);return t}function u(e,n,r){var o,a=e&&e[0];if(a){if(!r){if(3===a.nodeType)return a;if(t.trim(e.text()))return u(e.contents().last(),n)}for(o=c(a);!o;){if(e=e.parent(),e.is(n)||!e.length)return!1;o=c(e[0])}if(o)return u(t(o),n)}return!1}function f(e,n){return e?"string"==typeof e?(e=t(e,n),e.length?e:!1):e.jquery?e:!1:!1}function h(t){for(var e=t.innerHeight(),n=["paddingTop","paddingBottom"],r=0,o=n.length;o>r;r++){var a=parseInt(t.css(n[r]),10);isNaN(a)&&(a=0),e-=a}return e}if(!t.fn.dotdotdot){t.fn.dotdotdot=function(e){if(0==this.length)return t.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){t(this).dotdotdot(e)});var o=this;o.data("dotdotdot")&&o.trigger("destroy.dot"),o.data("dotdotdot-style",o.attr("style")||""),o.css("word-wrap","break-word"),"nowrap"===o.css("white-space")&&o.css("white-space","normal"),o.bind_events=function(){return o.bind("update.dot",function(e,d){e.preventDefault(),e.stopPropagation(),l.maxHeight="number"==typeof l.height?l.height:h(o),l.maxHeight+=l.tolerance,"undefined"!=typeof d&&(("string"==typeof d||"nodeType"in d&&1===d.nodeType)&&(d=t("<div />").append(d).contents()),d instanceof t&&(i=d)),g=o.wrapInner('<div class="dotdotdot" />').children(),g.contents().detach().end().append(i.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var c=!1,u=!1;return s.afterElement&&(c=s.afterElement.clone(!0),c.show(),s.afterElement.detach()),a(g,l)&&(u="children"==l.wrap?n(g,l,c):r(g,o,g,l,c)),g.replaceWith(g.contents()),g=null,t.isFunction(l.callback)&&l.callback.call(o[0],u,i),s.isTruncated=u,u}).bind("isTruncated.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],s.isTruncated),s.isTruncated}).bind("originalContent.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],i),i}).bind("destroy.dot",function(t){t.preventDefault(),t.stopPropagation(),o.unwatch().unbind_events().contents().detach().end().append(i).attr("style",o.data("dotdotdot-style")||"").data("dotdotdot",!1)}),o},o.unbind_events=function(){return o.unbind(".dot"),o},o.watch=function(){if(o.unwatch(),"window"==l.watch){var e=t(window),n=e.width(),r=e.height();e.bind("resize.dot"+s.dotId,function(){n==e.width()&&r==e.height()&&l.windowResizeFix||(n=e.width(),r=e.height(),u&&clearInterval(u),u=setTimeout(function(){o.trigger("update.dot")},100))})}else c=d(o),u=setInterval(function(){if(o.is(":visible")){var t=d(o);(c.width!=t.width||c.height!=t.height)&&(o.trigger("update.dot"),c=t)}},500);return o},o.unwatch=function(){return t(window).unbind("resize.dot"+s.dotId),u&&clearInterval(u),o};var i=o.contents(),l=t.extend(!0,{},t.fn.dotdotdot.defaults,e),s={},c={},u=null,g=null;return l.lastCharacter.remove instanceof Array||(l.lastCharacter.remove=t.fn.dotdotdot.defaultArrays.lastCharacter.remove),l.lastCharacter.noEllipsis instanceof Array||(l.lastCharacter.noEllipsis=t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),s.afterElement=f(l.after,o),s.isTruncated=!1,s.dotId=p++,o.data("dotdotdot",!0).bind_events().trigger("update.dot"),l.watch&&o.watch(),o},t.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0},t.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","　",",",";",".","!","?"],noEllipsis:[]}},t.fn.dotdotdot.debug=function(t){};var p=1,g=t.fn.html;t.fn.html=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?this.trigger("update",[n]):g.apply(this,arguments)};var v=t.fn.text;t.fn.text=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?(n=t("<div />").text(n).html(),this.trigger("update",[n])):v.apply(this,arguments)}}}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:62:"/bitrix/templates/aspro_optimus/js/velocity.js?158980555344791";s:6:"source";s:46:"/bitrix/templates/aspro_optimus/js/velocity.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! VelocityJS.org (1.5.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(a){"use strict";function b(a){var b=a.length,d=c.type(a);return"function"!==d&&!c.isWindow(a)&&(!(1!==a.nodeType||!b)||("array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a))}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return a&&a===a.window},c.type=function(a){return a?"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a:a+""},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return b===undefined||f.call(a,b)},c.each=function(a,c,d){var e=0,f=a.length,g=b(a);if(d){if(g)for(;e<f&&c.apply(a[e],d)!==!1;e++);else for(e in a)if(a.hasOwnProperty(e)&&c.apply(a[e],d)===!1)break}else if(g)for(;e<f&&c.call(a[e],e,a[e])!==!1;e++);else for(e in a)if(a.hasOwnProperty(e)&&c.call(a[e],e,a[e])===!1)break;return a},c.data=function(a,b,e){if(e===undefined){var f=a[c.expando],g=f&&d[f];if(b===undefined)return g;if(g&&b in g)return g[b]}else if(b!==undefined){var h=a[c.expando]||(a[c.expando]=++c.uuid);return d[h]=d[h]||{},d[h][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&(b?c.each(b,function(a,b){delete f[b]}):delete d[e])},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);i<j;i++)if(f=arguments[i])for(e in f)f.hasOwnProperty(e)&&(a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):d!==undefined&&(h[e]=d)));return h},c.queue=function(a,d,e){if(a){d=(d||"fx")+"queue";var f=c.data(a,d);return e?(!f||c.isArray(e)?f=c.data(a,d,function(a,c){var d=c||[];return a&&(b(Object(a))?function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;)a[e++]=b[d++];if(c!==c)for(;b[d]!==undefined;)a[e++]=b[d++];a.length=e,a}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}(e)):f.push(e),f):f||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){var a=this[0],b=function(a){for(var b=a.offsetParent;b&&"html"!==b.nodeName.toLowerCase()&&b.style&&"static"===b.style.position;)b=b.offsetParent;return b||document}(a),d=this.offset(),e=/^(?:body|html)$/i.test(b.nodeName)?{top:0,left:0}:c(b).offset();return d.top-=parseFloat(a.style.marginTop)||0,d.left-=parseFloat(a.style.marginLeft)||0,b.style&&(e.top+=parseFloat(b.style.borderTopWidth)||0,e.left+=parseFloat(b.style.borderLeftWidth)||0),{top:d.top-e.top,left:d.left-e.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):a()}(function(){"use strict";return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return u.isWrapped(a)?a=s.call(a):u.isNode(a)&&(a=[a]),a}function g(a){var b=o.data(a,"velocity");return null===b?d:b}function h(a,b){var c=g(a);c&&c.delayTimer&&!c.delayPaused&&(c.delayRemaining=c.delay-b+c.delayBegin,c.delayPaused=!0,clearTimeout(c.delayTimer.setTimeout))}function i(a,b){var c=g(a);c&&c.delayTimer&&c.delayPaused&&(c.delayPaused=!1,c.delayTimer.setTimeout=setTimeout(c.delayTimer.next,c.delayRemaining))}function j(a){return function(b){return Math.round(b*a)*(1/a)}}function k(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;e<p;++e){var f=j(c,a,d);if(0===f)return c;c-=(i(c,a,d)-b)/f}return c}function l(){for(var b=0;b<t;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do{g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g}while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!==f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0===i?h:m(b,c,c+u)}function o(){y=!0,a===c&&d===e||l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;w<4;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function l(a,b){var c=a;return u.isString(a)?y.Easings[a]||(c=!1):c=u.isArray(a)&&1===a.length?j.apply(null,a):u.isArray(a)&&2===a.length?z.apply(null,a.concat([b])):!(!u.isArray(a)||4!==a.length)&&k.apply(null,a),c===!1&&(c=y.Easings[y.defaults.easing]?y.defaults.easing:x),c}function m(a){if(a){var b=y.timestamp&&a!==!0?a:r.now(),c=y.State.calls.length;c>1e4&&(y.State.calls=e(y.State.calls),c=y.State.calls.length);for(var f=0;f<c;f++)if(y.State.calls[f]){var h=y.State.calls[f],i=h[0],j=h[2],k=h[3],l=!!k,q=null,s=h[5],t=h[6];if(k||(k=y.State.calls[f][3]=b-16),s){if(s.resume!==!0)continue;k=h[3]=Math.round(b-t-16),h[5]=null}t=h[6]=b-k;for(var v=Math.min(t/j.duration,1),w=0,x=i.length;w<x;w++){var z=i[w],B=z.element;if(g(B)){var D=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var E=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];o.each(E,function(a,b){A.setPropertyValue(B,"display",b)})}A.setPropertyValue(B,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&A.setPropertyValue(B,"visibility",j.visibility);for(var F in z)if(z.hasOwnProperty(F)&&"element"!==F){var G,H=z[F],I=u.isString(H.easing)?y.Easings[H.easing]:H.easing;if(u.isString(H.pattern)){var J=1===v?function(a,b,c){var d=H.endValue[b];return c?Math.round(d):d}:function(a,b,c){var d=H.startValue[b],e=H.endValue[b]-d,f=d+e*I(v,j,e);return c?Math.round(f):f};G=H.pattern.replace(/{(\d+)(!)?}/g,J)}else if(1===v)G=H.endValue;else{var K=H.endValue-H.startValue;G=H.startValue+K*I(v,j,K)}if(!l&&G===H.currentValue)continue;if(H.currentValue=G,"tween"===F)q=G;else{var L;if(A.Hooks.registered[F]){L=A.Hooks.getRoot(F);var M=g(B).rootPropertyValueCache[L];M&&(H.rootPropertyValue=M)}var N=A.setPropertyValue(B,F,H.currentValue+(p<9&&0===parseFloat(G)?"":H.unitType),H.rootPropertyValue,H.scrollData);A.Hooks.registered[F]&&(A.Normalizations.registered[L]?g(B).rootPropertyValueCache[L]=A.Normalizations.registered[L]("extract",null,N[1]):g(B).rootPropertyValueCache[L]=N[1]),"transform"===N[0]&&(D=!0)}}j.mobileHA&&g(B).transformCache.translate3d===d&&(g(B).transformCache.translate3d="(0px, 0px, 0px)",D=!0),D&&A.flushTransformCache(B)}}j.display!==d&&"none"!==j.display&&(y.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(y.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],v,Math.max(0,k+j.duration-b),k,q),1===v&&n(f)}}y.State.isTicking&&C(m)}function n(a,b){if(!y.State.calls[a])return!1;for(var c=y.State.calls[a][0],e=y.State.calls[a][1],f=y.State.calls[a][2],h=y.State.calls[a][4],i=!1,j=0,k=c.length;j<k;j++){var l=c[j].element;b||f.loop||("none"===f.display&&A.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&A.setPropertyValue(l,"visibility",f.visibility));var m=g(l);if(f.loop!==!0&&(o.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(o.queue(l)[1]))&&m){m.isAnimating=!1,m.rootPropertyValueCache={};var n=!1;o.each(A.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=m.transformCache[b];m.transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(n=!0,delete m.transformCache[b])}),f.mobileHA&&(n=!0,delete m.transformCache.translate3d),n&&A.flushTransformCache(l),A.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(r){setTimeout(function(){throw r},1)}h&&f.loop!==!0&&h(e),m&&f.loop===!0&&!b&&(o.each(m.tweensContainer,function(a,b){if(/^rotate/.test(a)&&(parseFloat(b.startValue)-parseFloat(b.endValue))%360==0){var c=b.startValue;b.startValue=b.endValue,b.endValue=c}/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),y(l,"reverse",{loop:!0,delay:f.delay})),f.queue!==!1&&o.dequeue(l,f.queue)}y.State.calls[a]=!1;for(var p=0,q=y.State.calls.length;p<q;p++)if(y.State.calls[p]!==!1){i=!0;break}i===!1&&(y.State.isTicking=!1,delete y.State.calls,y.State.calls=[])}var o,p=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),q=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),r=function(){var a=b.performance||{};if("function"!=typeof a.now){var c=a.timing&&a.timing.navigationStart?a.timing.navigationStart:(new Date).getTime();a.now=function(){return(new Date).getTime()-c}}return a}(),s=function(){var a=Array.prototype.slice;try{return a.call(c.documentElement),a}catch(b){return function(b,c){var d=this.length;if("number"!=typeof b&&(b=0),"number"!=typeof c&&(c=d),this.slice)return a.call(this,b,c);var e,f=[],g=b>=0?b:Math.max(0,d+b),h=c<0?d+c:Math.min(c,d),i=h-g;if(i>0)if(f=new Array(i),this.charAt)for(e=0;e<i;e++)f[e]=this.charAt(g+e);else for(e=0;e<i;e++)f[e]=this[g+e];return f}}}(),t=function(){return Array.prototype.includes?function(a,b){return a.includes(b)}:Array.prototype.indexOf?function(a,b){return a.indexOf(b)>=0}:function(a,b){for(var c=0;c<a.length;c++)if(a[c]===b)return!0;return!1}},u={isNumber:function(a){return"number"==typeof a},isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isWrapped:function(a){return a&&a!==b&&u.isNumber(a.length)&&!u.isString(a)&&!u.isFunction(a)&&!u.isNode(a)&&(0===a.length||u.isNode(a[0]))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}},v=!1;if(a.fn&&a.fn.jquery?(o=a,v=!0):o=b.Velocity.Utilities,p<=8&&!v)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(p<=7)return void(jQuery.fn.velocity=jQuery.fn.animate);var w=400,x="swing",y={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[],delayedElements:{count:0}},CSS:{},Utilities:o,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:w,easing:x,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0,promiseRejectEmpty:!0},init:function(a){o.data(a,"velocity",{isSVG:u.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:5,patch:0},debug:!1,timestamp:!0,pauseAll:function(a){var b=(new Date).getTime();o.each(y.State.calls,function(b,c){if(c){if(a!==d&&(c[2].queue!==a||c[2].queue===!1))return!0;c[5]={resume:!1}}}),o.each(y.State.delayedElements,function(a,c){c&&h(c,b)})},resumeAll:function(a){var b=(new Date).getTime();o.each(y.State.calls,function(b,c){if(c){if(a!==d&&(c[2].queue!==a||c[2].queue===!1))return!0;c[5]&&(c[5].resume=!0)}}),o.each(y.State.delayedElements,function(a,c){c&&i(c,b)})}};b.pageYOffset!==d?(y.State.scrollAnchor=b,y.State.scrollPropertyLeft="pageXOffset",y.State.scrollPropertyTop="pageYOffset"):(y.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,y.State.scrollPropertyLeft="scrollLeft",y.State.scrollPropertyTop="scrollTop");var z=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*.016):g=.016;;)if(h=c(h||i,g),j.push(1+h.x),k+=16,!(Math.abs(h.x)>1e-4&&Math.abs(h.v)>1e-4))break;return f?function(a){return j[a*(j.length-1)|0]}:k}}();y.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},o.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){y.Easings[b[0]]=k.apply(null,b[1])});var A=y.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"],units:["%","em","ex","ch","rem","vw","vh","vmin","vmax","cm","mm","Q","in","pc","pt","px","deg","grad","rad","turn","s","ms"],colorNames:{aliceblue:"240,248,255",antiquewhite:"250,235,215",aquamarine:"127,255,212",aqua:"0,255,255",azure:"240,255,255",beige:"245,245,220",bisque:"255,228,196",black:"0,0,0",blanchedalmond:"255,235,205",blueviolet:"138,43,226",blue:"0,0,255",brown:"165,42,42",burlywood:"222,184,135",cadetblue:"95,158,160",chartreuse:"127,255,0",chocolate:"210,105,30",coral:"255,127,80",cornflowerblue:"100,149,237",cornsilk:"255,248,220",crimson:"220,20,60",cyan:"0,255,255",darkblue:"0,0,139",darkcyan:"0,139,139",darkgoldenrod:"184,134,11",darkgray:"169,169,169",darkgrey:"169,169,169",darkgreen:"0,100,0",darkkhaki:"189,183,107",darkmagenta:"139,0,139",darkolivegreen:"85,107,47",darkorange:"255,140,0",darkorchid:"153,50,204",darkred:"139,0,0",darksalmon:"233,150,122",darkseagreen:"143,188,143",darkslateblue:"72,61,139",darkslategray:"47,79,79",darkturquoise:"0,206,209",darkviolet:"148,0,211",deeppink:"255,20,147",deepskyblue:"0,191,255",dimgray:"105,105,105",dimgrey:"105,105,105",dodgerblue:"30,144,255",firebrick:"178,34,34",floralwhite:"255,250,240",forestgreen:"34,139,34",fuchsia:"255,0,255",gainsboro:"220,220,220",ghostwhite:"248,248,255",gold:"255,215,0",goldenrod:"218,165,32",gray:"128,128,128",grey:"128,128,128",greenyellow:"173,255,47",green:"0,128,0",honeydew:"240,255,240",hotpink:"255,105,180",indianred:"205,92,92",indigo:"75,0,130",ivory:"255,255,240",khaki:"240,230,140",lavenderblush:"255,240,245",lavender:"230,230,250",lawngreen:"124,252,0",lemonchiffon:"255,250,205",lightblue:"173,216,230",lightcoral:"240,128,128",lightcyan:"224,255,255",lightgoldenrodyellow:"250,250,210",lightgray:"211,211,211",lightgrey:"211,211,211",lightgreen:"144,238,144",lightpink:"255,182,193",lightsalmon:"255,160,122",lightseagreen:"32,178,170",lightskyblue:"135,206,250",lightslategray:"119,136,153",lightsteelblue:"176,196,222",lightyellow:"255,255,224",limegreen:"50,205,50",lime:"0,255,0",linen:"250,240,230",magenta:"255,0,255",maroon:"128,0,0",mediumaquamarine:"102,205,170",mediumblue:"0,0,205",mediumorchid:"186,85,211",mediumpurple:"147,112,219",mediumseagreen:"60,179,113",mediumslateblue:"123,104,238",mediumspringgreen:"0,250,154",mediumturquoise:"72,209,204",mediumvioletred:"199,21,133",midnightblue:"25,25,112",mintcream:"245,255,250",mistyrose:"255,228,225",moccasin:"255,228,181",navajowhite:"255,222,173",navy:"0,0,128",oldlace:"253,245,230",olivedrab:"107,142,35",olive:"128,128,0",orangered:"255,69,0",orange:"255,165,0",orchid:"218,112,214",palegoldenrod:"238,232,170",palegreen:"152,251,152",paleturquoise:"175,238,238",palevioletred:"219,112,147",papayawhip:"255,239,213",peachpuff:"255,218,185",peru:"205,133,63",pink:"255,192,203",plum:"221,160,221",powderblue:"176,224,230",purple:"128,0,128",red:"255,0,0",rosybrown:"188,143,143",royalblue:"65,105,225",saddlebrown:"139,69,19",salmon:"250,128,114",sandybrown:"244,164,96",seagreen:"46,139,87",seashell:"255,245,238",sienna:"160,82,45",silver:"192,192,192",skyblue:"135,206,235",slateblue:"106,90,205",slategray:"112,128,144",snow:"255,250,250",springgreen:"0,255,127",steelblue:"70,130,180",tan:"210,180,140",teal:"0,128,128",thistle:"216,191,216",tomato:"255,99,71",turquoise:"64,224,208",violet:"238,130,238",wheat:"245,222,179",whitesmoke:"245,245,245",white:"255,255,255",yellowgreen:"154,205,50",yellow:"255,255,0"}},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<A.Lists.colors.length;a++){var b="color"===A.Lists.colors[a]?"0 0 0 1":"255 255 255 1";A.Hooks.templates[A.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(p)for(c in A.Hooks.templates)if(A.Hooks.templates.hasOwnProperty(c)){d=A.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(A.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),A.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in A.Hooks.templates)if(A.Hooks.templates.hasOwnProperty(c)){d=A.Hooks.templates[c],e=d[0].split(" ");for(var g in e)if(e.hasOwnProperty(g)){var h=c+e[g],i=g;A.Hooks.registered[h]=[c,i]}}},getRoot:function(a){var b=A.Hooks.registered[a];return b?b[0]:a},getUnit:function(a,b){var c=(a.substr(b||0,5).match(/^[a-z%]+/)||[])[0]||"";return c&&t(A.Lists.units,c)?c:""},fixColors:function(a){return a.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g,function(a,b,c){return A.Lists.colorNames.hasOwnProperty(c)?(b?b:"rgba(")+A.Lists.colorNames[c]+(b?"":",1)"):b+c})},cleanRootPropertyValue:function(a,b){return A.RegEx.valueUnwrap.test(b)&&(b=b.match(A.RegEx.valueUnwrap)[1]),A.Values.isCSSNullValue(b)&&(b=A.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=A.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=A.Hooks.cleanRootPropertyValue(d,b),b.toString().match(A.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=A.Hooks.registered[a];if(d){var e,f=d[0],g=d[1];return c=A.Hooks.cleanRootPropertyValue(f,c),e=c.toString().match(A.RegEx.valueSplit),e[g]=b,e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return A.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(A.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return y.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(p<=8)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){function a(a,b,c){if("border-box"===A.getPropertyValue(b,"boxSizing").toString().toLowerCase()===(c||!1)){var d,e,f=0,g="width"===a?["Left","Right"]:["Top","Bottom"],h=["padding"+g[0],"padding"+g[1],"border"+g[0]+"Width","border"+g[1]+"Width"];for(d=0;d<h.length;d++)e=parseFloat(A.getPropertyValue(b,h[d])),isNaN(e)||(f+=e);return c?-f:f}return 0}function b(b,c){return function(d,e,f){switch(d){case"name":return b;case"extract":return parseFloat(f)+a(b,e,c);case"inject":return parseFloat(f)-a(b,e,c)+"px"}}}p&&!(p>9)||y.State.isGingerbread||(A.Lists.transformsBase=A.Lists.transformsBase.concat(A.Lists.transforms3D));for(var c=0;c<A.Lists.transformsBase.length;c++)!function(){var a=A.Lists.transformsBase[c];A.Normalizations.registered[a]=function(b,c,e){switch(b){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[a]===d?/^scale/i.test(a)?1:0:g(c).transformCache[a].replace(/[()]/g,"");case"inject":var f=!1;switch(a.substr(0,a.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":y.State.isAndroid&&g(c).transformCache[a]===d&&e<1&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":f=!/(deg|\d)$/i.test(e);break;case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[a]="("+e+")"),g(c).transformCache[a]}}}();for(var e=0;e<A.Lists.colors.length;e++)!function(){var a=A.Lists.colors[e];A.Normalizations.registered[a]=function(b,c,e){switch(b){case"name":return a;case"extract":var f;if(A.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:A.RegEx.isHex.test(e)?g="rgb("+A.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(A.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return(!p||p>8)&&3===f.split(" ").length&&(f+=" 1"),f;case"inject":return/^rgb/.test(e)?e:(p<=8?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(p<=8?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")")}}}();A.Normalizations.registered.innerWidth=b("width",!0),A.Normalizations.registered.innerHeight=b("height",!0),A.Normalizations.registered.outerWidth=b("width"),A.Normalizations.registered.outerHeight=b("height")}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(p||y.State.isAndroid&&!y.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(y.State.prefixMatches[a])return[y.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;c<d;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),u.isString(y.State.prefixElement.style[e]))return y.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,b,c,d){return b+b+c+c+d+d}),b=c.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return!a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){if(a)if(a.classList)a.classList.add(b);else if(u.isString(a.className))a.className+=(a.className.length?" ":"")+b;else{var c=a.getAttribute(p<=7?"className":"class")||"";a.setAttribute("class",c+(c?" ":"")+b)}},removeClass:function(a,b){if(a)if(a.classList)a.classList.remove(b);else if(u.isString(a.className))a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ");else{var c=a.getAttribute(p<=7?"className":"class")||"";a.setAttribute("class",c.replace(new RegExp("(^|s)"+b.split(" ").join("|")+"(s|$)","gi")," "))}}},getPropertyValue:function(a,c,e,f){function h(a,c){var e=0;if(p<=8)e=o.css(a,c);else{var i=!1;/^(width|height)$/.test(c)&&0===A.getPropertyValue(a,"display")&&(i=!0,A.setPropertyValue(a,"display",A.Values.getDisplayType(a)));var j=function(){i&&A.setPropertyValue(a,"display","none")};if(!f){if("height"===c&&"border-box"!==A.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(A.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(A.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(A.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(A.getPropertyValue(a,"paddingBottom"))||0);return j(),k}if("width"===c&&"border-box"!==A.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(A.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(A.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(A.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(A.getPropertyValue(a,"paddingRight"))||0);return j(),l}}var m;m=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),e=9===p&&"filter"===c?m.getPropertyValue(c):m[c],""!==e&&null!==e||(e=a.style[c]),j()}if("auto"===e&&/^(top|right|bottom|left)$/i.test(c)){var n=h(a,"position");("fixed"===n||"absolute"===n&&/top|left/i.test(c))&&(e=o(a).position()[c]+"px")}return e}var i;if(A.Hooks.registered[c]){var j=c,k=A.Hooks.getRoot(j);e===d&&(e=A.getPropertyValue(a,A.Names.prefixCheck(k)[0])),A.Normalizations.registered[k]&&(e=A.Normalizations.registered[k]("extract",a,e)),i=A.Hooks.extractValue(j,e)}else if(A.Normalizations.registered[c]){var l,m;l=A.Normalizations.registered[c]("name",a),"transform"!==l&&(m=h(a,A.Names.prefixCheck(l)[0]),A.Values.isCSSNullValue(m)&&A.Hooks.templates[c]&&(m=A.Hooks.templates[c][1])),i=A.Normalizations.registered[c]("extract",a,m)}if(!/^[\d-]/.test(i)){var n=g(a);if(n&&n.isSVG&&A.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(q){i=0}else i=a.getAttribute(c);else i=h(a,A.Names.prefixCheck(c)[0])}return A.Values.isCSSNullValue(i)&&(i=0),y.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(A.Normalizations.registered[c]&&"transform"===A.Normalizations.registered[c]("name",a))A.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(A.Hooks.registered[c]){var i=c,j=A.Hooks.getRoot(c);e=e||A.getPropertyValue(a,j),d=A.Hooks.injectValue(i,d,e),c=j}if(A.Normalizations.registered[c]&&(d=A.Normalizations.registered[c]("inject",a,d),c=A.Normalizations.registered[c]("name",a)),h=A.Names.prefixCheck(c)[0],p<=8)try{a.style[h]=d}catch(l){y.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else{var k=g(a);k&&k.isSVG&&A.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d}y.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){var b="",c=g(a);if((p||y.State.isAndroid&&!y.State.isChrome)&&c&&c.isSVG){var d=function(b){return parseFloat(A.getPropertyValue(a,b))},e={translate:[d("translateX"),d("translateY")],skewX:[d("skewX")],skewY:[d("skewY")],scale:1!==d("scale")?[d("scale"),d("scale")]:[d("scaleX"),d("scaleY")],rotate:[d("rotateZ"),0,0]};o.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),e[a]&&(b+=a+"("+e[a].join(" ")+") ",delete e[a])})}else{var f,h;o.each(g(a).transformCache,function(c){if(f=g(a).transformCache[c],"transformPerspective"===c)return h=f,!0;9===p&&"rotateZ"===c&&(c="rotate"),b+=c+f+" "}),h&&(b="perspective"+h+" "+b)}A.setPropertyValue(a,"transform",b)}};A.Hooks.register(),A.Normalizations.register(),y.hook=function(a,b,c){var e;return a=f(a),o.each(a,function(a,f){if(g(f)===d&&y.init(f),c===d)e===d&&(e=A.getPropertyValue(f,b));else{var h=A.setPropertyValue(f,b,c);"transform"===h[0]&&y.CSS.flushTransformCache(f),e=h}}),e};var B=function(){function a(){return k?z.promise||null:p}function e(a,e){function f(f){var k,n;if(i.begin&&0===D)try{i.begin.call(r,r)}catch(V){setTimeout(function(){throw V},1)}if("scroll"===G){var p,q,w,x=/^x$/i.test(i.axis)?"Left":"Top",B=parseFloat(i.offset)||0;i.container?u.isWrapped(i.container)||u.isNode(i.container)?(i.container=i.container[0]||i.container,p=i.container["scroll"+x],w=p+o(a).position()[x.toLowerCase()]+B):i.container=null:(p=y.State.scrollAnchor[y.State["scrollProperty"+x]],q=y.State.scrollAnchor[y.State["scrollProperty"+("Left"===x?"Top":"Left")]],w=o(a).offset()[x.toLowerCase()]+B),j={scroll:{rootPropertyValue:!1,startValue:p,currentValue:p,endValue:w,unitType:"",easing:i.easing,scrollData:{container:i.container,direction:x,alternateValue:q}},element:a},y.debug&&console.log("tweensContainer (scroll): ",j.scroll,a)}else if("reverse"===G){if(!(k=g(a)))return;if(!k.tweensContainer)return void o.dequeue(a,i.queue);"none"===k.opts.display&&(k.opts.display="auto"),"hidden"===k.opts.visibility&&(k.opts.visibility="visible"),k.opts.loop=!1,k.opts.begin=null,k.opts.complete=null,v.easing||delete i.easing,v.duration||delete i.duration,i=o.extend({},k.opts,i),n=o.extend(!0,{},k?k.tweensContainer:null);for(var E in n)if(n.hasOwnProperty(E)&&"element"!==E){var F=n[E].startValue;n[E].startValue=n[E].currentValue=n[E].endValue,n[E].endValue=F,u.isEmptyObject(v)||(n[E].easing=i.easing),y.debug&&console.log("reverse tweensContainer ("+E+"): "+JSON.stringify(n[E]),a)}j=n}else if("start"===G){k=g(a),k&&k.tweensContainer&&k.isAnimating===!0&&(n=k.tweensContainer);var H=function(e,f){var g,l=A.Hooks.getRoot(e),m=!1,p=f[0],q=f[1],r=f[2]
;if(!(k&&k.isSVG||"tween"===l||A.Names.prefixCheck(l)[1]!==!1||A.Normalizations.registered[l]!==d))return void(y.debug&&console.log("Skipping ["+l+"] due to a lack of browser support."));(i.display!==d&&null!==i.display&&"none"!==i.display||i.visibility!==d&&"hidden"!==i.visibility)&&/opacity|filter/.test(e)&&!r&&0!==p&&(r=0),i._cacheValues&&n&&n[e]?(r===d&&(r=n[e].endValue+n[e].unitType),m=k.rootPropertyValueCache[l]):A.Hooks.registered[e]?r===d?(m=A.getPropertyValue(a,l),r=A.getPropertyValue(a,e,m)):m=A.Hooks.templates[l][1]:r===d&&(r=A.getPropertyValue(a,e));var s,t,v,w=!1,x=function(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=A.Values.getUnitType(a)),[d,c]};if(r!==p&&u.isString(r)&&u.isString(p)){g="";var z=0,B=0,C=[],D=[],E=0,F=0,G=0;for(r=A.Hooks.fixColors(r),p=A.Hooks.fixColors(p);z<r.length&&B<p.length;){var H=r[z],I=p[B];if(/[\d\.-]/.test(H)&&/[\d\.-]/.test(I)){for(var J=H,K=I,L=".",N=".";++z<r.length;){if((H=r[z])===L)L="..";else if(!/\d/.test(H))break;J+=H}for(;++B<p.length;){if((I=p[B])===N)N="..";else if(!/\d/.test(I))break;K+=I}var O=A.Hooks.getUnit(r,z),P=A.Hooks.getUnit(p,B);if(z+=O.length,B+=P.length,O===P)J===K?g+=J+O:(g+="{"+C.length+(F?"!":"")+"}"+O,C.push(parseFloat(J)),D.push(parseFloat(K)));else{var Q=parseFloat(J),R=parseFloat(K);g+=(E<5?"calc":"")+"("+(Q?"{"+C.length+(F?"!":"")+"}":"0")+O+" + "+(R?"{"+(C.length+(Q?1:0))+(F?"!":"")+"}":"0")+P+")",Q&&(C.push(Q),D.push(0)),R&&(C.push(0),D.push(R))}}else{if(H!==I){E=0;break}g+=H,z++,B++,0===E&&"c"===H||1===E&&"a"===H||2===E&&"l"===H||3===E&&"c"===H||E>=4&&"("===H?E++:(E&&E<5||E>=4&&")"===H&&--E<5)&&(E=0),0===F&&"r"===H||1===F&&"g"===H||2===F&&"b"===H||3===F&&"a"===H||F>=3&&"("===H?(3===F&&"a"===H&&(G=1),F++):G&&","===H?++G>3&&(F=G=0):(G&&F<(G?5:4)||F>=(G?4:3)&&")"===H&&--F<(G?5:4))&&(F=G=0)}}z===r.length&&B===p.length||(y.debug&&console.error('Trying to pattern match mis-matched strings ["'+p+'", "'+r+'"]'),g=d),g&&(C.length?(y.debug&&console.log('Pattern found "'+g+'" -> ',C,D,"["+r+","+p+"]"),r=C,p=D,t=v=""):g=d)}g||(s=x(e,r),r=s[0],v=s[1],s=x(e,p),p=s[0].replace(/^([+-\/*])=/,function(a,b){return w=b,""}),t=s[1],r=parseFloat(r)||0,p=parseFloat(p)||0,"%"===t&&(/^(fontSize|lineHeight)$/.test(e)?(p/=100,t="em"):/^scale/.test(e)?(p/=100,t=""):/(Red|Green|Blue)$/i.test(e)&&(p=p/100*255,t="")));if(/[\/*]/.test(w))t=v;else if(v!==t&&0!==r)if(0===p)t=v;else{h=h||function(){var d={myParent:a.parentNode||c.body,position:A.getPropertyValue(a,"position"),fontSize:A.getPropertyValue(a,"fontSize")},e=d.position===M.lastPosition&&d.myParent===M.lastParent,f=d.fontSize===M.lastFontSize;M.lastParent=d.myParent,M.lastPosition=d.position,M.lastFontSize=d.fontSize;var g={};if(f&&e)g.emToPx=M.lastEmToPx,g.percentToPxWidth=M.lastPercentToPxWidth,g.percentToPxHeight=M.lastPercentToPxHeight;else{var h=k&&k.isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");y.init(h),d.myParent.appendChild(h),o.each(["overflow","overflowX","overflowY"],function(a,b){y.CSS.setPropertyValue(h,b,"hidden")}),y.CSS.setPropertyValue(h,"position",d.position),y.CSS.setPropertyValue(h,"fontSize",d.fontSize),y.CSS.setPropertyValue(h,"boxSizing","content-box"),o.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){y.CSS.setPropertyValue(h,b,"100%")}),y.CSS.setPropertyValue(h,"paddingLeft","100em"),g.percentToPxWidth=M.lastPercentToPxWidth=(parseFloat(A.getPropertyValue(h,"width",null,!0))||1)/100,g.percentToPxHeight=M.lastPercentToPxHeight=(parseFloat(A.getPropertyValue(h,"height",null,!0))||1)/100,g.emToPx=M.lastEmToPx=(parseFloat(A.getPropertyValue(h,"paddingLeft"))||1)/100,d.myParent.removeChild(h)}return null===M.remToPx&&(M.remToPx=parseFloat(A.getPropertyValue(c.body,"fontSize"))||16),null===M.vwToPx&&(M.vwToPx=parseFloat(b.innerWidth)/100,M.vhToPx=parseFloat(b.innerHeight)/100),g.remToPx=M.remToPx,g.vwToPx=M.vwToPx,g.vhToPx=M.vhToPx,y.debug>=1&&console.log("Unit ratios: "+JSON.stringify(g),a),g}();var S=/margin|padding|left|right|width|text|word|letter/i.test(e)||/X$/.test(e)||"x"===e?"x":"y";switch(v){case"%":r*="x"===S?h.percentToPxWidth:h.percentToPxHeight;break;case"px":break;default:r*=h[v+"ToPx"]}switch(t){case"%":r*=1/("x"===S?h.percentToPxWidth:h.percentToPxHeight);break;case"px":break;default:r*=1/h[t+"ToPx"]}}switch(w){case"+":p=r+p;break;case"-":p=r-p;break;case"*":p*=r;break;case"/":p=r/p}j[e]={rootPropertyValue:m,startValue:r,currentValue:r,endValue:p,unitType:t,easing:q},g&&(j[e].pattern=g),y.debug&&console.log("tweensContainer ("+e+"): "+JSON.stringify(j[e]),a)};for(var I in s)if(s.hasOwnProperty(I)){var J=A.Names.camelCase(I),K=function(b,c){var d,f,g;return u.isFunction(b)&&(b=b.call(a,e,C)),u.isArray(b)?(d=b[0],!u.isArray(b[1])&&/^[\d-]/.test(b[1])||u.isFunction(b[1])||A.RegEx.isHex.test(b[1])?g=b[1]:u.isString(b[1])&&!A.RegEx.isHex.test(b[1])&&y.Easings[b[1]]||u.isArray(b[1])?(f=c?b[1]:l(b[1],i.duration),g=b[2]):g=b[1]||b[2]):d=b,c||(f=f||i.easing),u.isFunction(d)&&(d=d.call(a,e,C)),u.isFunction(g)&&(g=g.call(a,e,C)),[d||0,f,g]}(s[I]);if(t(A.Lists.colors,J)){var L=K[0],O=K[1],P=K[2];if(A.RegEx.isHex.test(L)){for(var Q=["Red","Green","Blue"],R=A.Values.hexToRgb(L),S=P?A.Values.hexToRgb(P):d,T=0;T<Q.length;T++){var U=[R[T]];O&&U.push(O),S!==d&&U.push(S[T]),H(J+Q[T],U)}continue}}H(J,K)}j.element=a}j.element&&(A.Values.addClass(a,"velocity-animating"),N.push(j),k=g(a),k&&(""===i.queue&&(k.tweensContainer=j,k.opts=i),k.isAnimating=!0),D===C-1?(y.State.calls.push([N,r,i,null,z.resolver,null,0]),y.State.isTicking===!1&&(y.State.isTicking=!0,m())):D++)}var h,i=o.extend({},y.defaults,v),j={};switch(g(a)===d&&y.init(a),parseFloat(i.delay)&&i.queue!==!1&&o.queue(a,i.queue,function(b){y.velocityQueueEntryFlag=!0;var c=y.State.delayedElements.count++;y.State.delayedElements[c]=a;var d=function(a){return function(){y.State.delayedElements[a]=!1,b()}}(c);g(a).delayBegin=(new Date).getTime(),g(a).delay=parseFloat(i.delay),g(a).delayTimer={setTimeout:setTimeout(b,parseFloat(i.delay)),next:d}}),i.duration.toString().toLowerCase()){case"fast":i.duration=200;break;case"normal":i.duration=w;break;case"slow":i.duration=600;break;default:i.duration=parseFloat(i.duration)||1}if(y.mock!==!1&&(y.mock===!0?i.duration=i.delay=1:(i.duration*=parseFloat(y.mock)||1,i.delay*=parseFloat(y.mock)||1)),i.easing=l(i.easing,i.duration),i.begin&&!u.isFunction(i.begin)&&(i.begin=null),i.progress&&!u.isFunction(i.progress)&&(i.progress=null),i.complete&&!u.isFunction(i.complete)&&(i.complete=null),i.display!==d&&null!==i.display&&(i.display=i.display.toString().toLowerCase(),"auto"===i.display&&(i.display=y.CSS.Values.getDisplayType(a))),i.visibility!==d&&null!==i.visibility&&(i.visibility=i.visibility.toString().toLowerCase()),i.mobileHA=i.mobileHA&&y.State.isMobile&&!y.State.isGingerbread,i.queue===!1)if(i.delay){var k=y.State.delayedElements.count++;y.State.delayedElements[k]=a;var n=function(a){return function(){y.State.delayedElements[a]=!1,f()}}(k);g(a).delayBegin=(new Date).getTime(),g(a).delay=parseFloat(i.delay),g(a).delayTimer={setTimeout:setTimeout(f,parseFloat(i.delay)),next:n}}else f();else o.queue(a,i.queue,function(a,b){if(b===!0)return z.promise&&z.resolver(r),!0;y.velocityQueueEntryFlag=!0,f(a)});""!==i.queue&&"fx"!==i.queue||"inprogress"===o.queue(a)[0]||o.dequeue(a)}var j,k,p,q,r,s,v,x=arguments[0]&&(arguments[0].p||o.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||u.isString(arguments[0].properties));u.isWrapped(this)?(k=!1,q=0,r=this,p=this):(k=!0,q=1,r=x?arguments[0].elements||arguments[0].e:arguments[0]);var z={promise:null,resolver:null,rejecter:null};if(k&&y.Promise&&(z.promise=new y.Promise(function(a,b){z.resolver=a,z.rejecter=b})),x?(s=arguments[0].properties||arguments[0].p,v=arguments[0].options||arguments[0].o):(s=arguments[q],v=arguments[q+1]),!(r=f(r)))return void(z.promise&&(s&&v&&v.promiseRejectEmpty===!1?z.resolver():z.rejecter()));var C=r.length,D=0;if(!/^(stop|finish|finishAll|pause|resume)$/i.test(s)&&!o.isPlainObject(v)){var E=q+1;v={};for(var F=E;F<arguments.length;F++)u.isArray(arguments[F])||!/^(fast|normal|slow)$/i.test(arguments[F])&&!/^\d/.test(arguments[F])?u.isString(arguments[F])||u.isArray(arguments[F])?v.easing=arguments[F]:u.isFunction(arguments[F])&&(v.complete=arguments[F]):v.duration=arguments[F]}var G;switch(s){case"scroll":G="scroll";break;case"reverse":G="reverse";break;case"pause":var H=(new Date).getTime();return o.each(r,function(a,b){h(b,H)}),o.each(y.State.calls,function(a,b){var c=!1;b&&o.each(b[1],function(a,e){var f=v===d?"":v;return f!==!0&&b[2].queue!==f&&(v!==d||b[2].queue!==!1)||(o.each(r,function(a,d){if(d===e)return b[5]={resume:!1},c=!0,!1}),!c&&void 0)})}),a();case"resume":return o.each(r,function(a,b){i(b,H)}),o.each(y.State.calls,function(a,b){var c=!1;b&&o.each(b[1],function(a,e){var f=v===d?"":v;return f!==!0&&b[2].queue!==f&&(v!==d||b[2].queue!==!1)||(!b[5]||(o.each(r,function(a,d){if(d===e)return b[5].resume=!0,c=!0,!1}),!c&&void 0))})}),a();case"finish":case"finishAll":case"stop":o.each(r,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer),"finishAll"!==s||v!==!0&&!u.isString(v)||(o.each(o.queue(b,u.isString(v)?v:""),function(a,b){u.isFunction(b)&&b()}),o.queue(b,u.isString(v)?v:"",[]))});var I=[];return o.each(y.State.calls,function(a,b){b&&o.each(b[1],function(c,e){var f=v===d?"":v;if(f!==!0&&b[2].queue!==f&&(v!==d||b[2].queue!==!1))return!0;o.each(r,function(c,d){if(d===e)if((v===!0||u.isString(v))&&(o.each(o.queue(d,u.isString(v)?v:""),function(a,b){u.isFunction(b)&&b(null,!0)}),o.queue(d,u.isString(v)?v:"",[])),"stop"===s){var h=g(d);h&&h.tweensContainer&&f!==!1&&o.each(h.tweensContainer,function(a,b){b.endValue=b.currentValue}),I.push(a)}else"finish"!==s&&"finishAll"!==s||(b[2].duration=1)})})}),"stop"===s&&(o.each(I,function(a,b){n(b,!0)}),z.promise&&z.resolver(r)),a();default:if(!o.isPlainObject(s)||u.isEmptyObject(s)){if(u.isString(s)&&y.Redirects[s]){j=o.extend({},v);var J=j.duration,K=j.delay||0;return j.backwards===!0&&(r=o.extend(!0,[],r).reverse()),o.each(r,function(a,b){parseFloat(j.stagger)?j.delay=K+parseFloat(j.stagger)*a:u.isFunction(j.stagger)&&(j.delay=K+j.stagger.call(b,a,C)),j.drag&&(j.duration=parseFloat(J)||(/^(callout|transition)/.test(s)?1e3:w),j.duration=Math.max(j.duration*(j.backwards?1-a/C:(a+1)/C),.75*j.duration,200)),y.Redirects[s].call(b,b,j||{},a,C,r,z.promise?z:d)}),a()}var L="Velocity: First argument ("+s+") was not a property map, a known action, or a registered redirect. Aborting.";return z.promise?z.rejecter(new Error(L)):b.console&&console.log(L),a()}G="start"}var M={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},N=[];o.each(r,function(a,b){u.isNode(b)&&e(b,a)}),j=o.extend({},y.defaults,v),j.loop=parseInt(j.loop,10);var O=2*j.loop-1;if(j.loop)for(var P=0;P<O;P++){var Q={delay:j.delay,progress:j.progress};P===O-1&&(Q.display=j.display,Q.visibility=j.visibility,Q.complete=j.complete),B(r,"reverse",Q)}return a()};y=o.extend(B,y),y.animate=B;var C=b.requestAnimationFrame||q;if(!y.State.isMobile&&c.hidden!==d){var D=function(){c.hidden?(C=function(a){return setTimeout(function(){a(!0)},16)},m()):C=b.requestAnimationFrame||q};D(),c.addEventListener("visibilitychange",D)}return a.Velocity=y,a!==b&&(a.fn.velocity=B,a.fn.velocity.defaults=y.defaults),o.each(["Down","Up"],function(a,b){y.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=o.extend({},c),j=i.begin,k=i.complete,l={},m={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""};i.display===d&&(i.display="Down"===b?"inline"===y.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){0===e&&j&&j.call(g,g);for(var c in m)if(m.hasOwnProperty(c)){l[c]=a.style[c];var d=A.getPropertyValue(a,c);m[c]="Down"===b?[d,0]:[0,d]}l.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in l)l.hasOwnProperty(b)&&(a.style[b]=l[b]);e===f-1&&(k&&k.call(g,g),h&&h.resolver(g))},y(a,m,i)}}),o.each(["In","Out"],function(a,b){y.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=o.extend({},c),j=i.complete,k={opacity:"In"===b?1:0};0!==e&&(i.begin=null),i.complete=e!==f-1?null:function(){j&&j.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),y(this,k,i)}}),y}(window.jQuery||window.Zepto||window,window,window?window.document:undefined)});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:65:"/bitrix/templates/aspro_optimus/js/velocity.ui.js?158980555313257";s:6:"source";s:49:"/bitrix/templates/aspro_optimus/js/velocity.ui.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* VelocityJS.org UI Pack (5.0.4). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License. Portions copyright Daniel Eden, Christian Pucci. */
!function(t){"function"==typeof require&&"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(["velocity"],t):t()}(function(){return function(t,a,e,r){function n(t,a){var e=[];return t&&a?($.each([t,a],function(t,a){var r=[];$.each(a,function(t,a){for(;a.toString().length<5;)a="0"+a;r.push(a)}),e.push(r.join(""))}),parseFloat(e[0])>parseFloat(e[1])):!1}if(!t.Velocity||!t.Velocity.Utilities)return void(a.console&&console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));var i=t.Velocity,$=i.Utilities,s=i.version,o={major:1,minor:1,patch:0};if(n(o,s)){var l="Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";throw alert(l),new Error(l)}i.RegisterEffect=i.RegisterUI=function(t,a){function e(t,a,e,r){var n=0,s;$.each(t.nodeType?[t]:t,function(t,a){r&&(e+=t*r),s=a.parentNode,$.each(["height","paddingTop","paddingBottom","marginTop","marginBottom"],function(t,e){n+=parseFloat(i.CSS.getPropertyValue(a,e))})}),i.animate(s,{height:("In"===a?"+":"-")+"="+n},{queue:!1,easing:"ease-in-out",duration:e*("In"===a?.6:1)})}return i.Redirects[t]=function(n,s,o,l,c,u){function f(){s.display!==r&&"none"!==s.display||!/Out$/.test(t)||$.each(c.nodeType?[c]:c,function(t,a){i.CSS.setPropertyValue(a,"display","none")}),s.complete&&s.complete.call(c,c),u&&u.resolver(c||n)}var p=o===l-1;a.defaultDuration="function"==typeof a.defaultDuration?a.defaultDuration.call(c,c):parseFloat(a.defaultDuration);for(var d=0;d<a.calls.length;d++){var g=a.calls[d],y=g[0],m=s.duration||a.defaultDuration||1e3,X=g[1],Y=g[2]||{},O={};if(O.duration=m*(X||1),O.queue=s.queue||"",O.easing=Y.easing||"ease",O.delay=parseFloat(Y.delay)||0,O._cacheValues=Y._cacheValues||!0,0===d){if(O.delay+=parseFloat(s.delay)||0,0===o&&(O.begin=function(){s.begin&&s.begin.call(c,c);var a=t.match(/(In|Out)$/);a&&"In"===a[0]&&y.opacity!==r&&$.each(c.nodeType?[c]:c,function(t,a){i.CSS.setPropertyValue(a,"opacity",0)}),s.animateParentHeight&&a&&e(c,a[0],m+O.delay,s.stagger)}),null!==s.display)if(s.display!==r&&"none"!==s.display)O.display=s.display;else if(/In$/.test(t)){var v=i.CSS.Values.getDisplayType(n);O.display="inline"===v?"inline-block":v}s.visibility&&"hidden"!==s.visibility&&(O.visibility=s.visibility)}d===a.calls.length-1&&(O.complete=function(){if(a.reset){for(var t in a.reset){var e=a.reset[t];i.CSS.Hooks.registered[t]!==r||"string"!=typeof e&&"number"!=typeof e||(a.reset[t]=[a.reset[t],a.reset[t]])}var s={duration:0,queue:!1};p&&(s.complete=f),i.animate(n,a.reset,s)}else p&&f()},"hidden"===s.visibility&&(O.visibility=s.visibility)),i.animate(n,y,O)}},i},i.RegisterEffect.packagedEffects={"callout.bounce":{defaultDuration:550,calls:[[{translateY:-30},.25],[{translateY:0},.125],[{translateY:-15},.125],[{translateY:0},.25]]},"callout.shake":{defaultDuration:800,calls:[[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:0},.125]]},"callout.flash":{defaultDuration:1100,calls:[[{opacity:[0,"easeInOutQuad",1]},.25],[{opacity:[1,"easeInOutQuad"]},.25],[{opacity:[0,"easeInOutQuad"]},.25],[{opacity:[1,"easeInOutQuad"]},.25]]},"callout.pulse":{defaultDuration:825,calls:[[{scaleX:1.1,scaleY:1.1},.5,{easing:"easeInExpo"}],[{scaleX:1,scaleY:1},.5]]},"callout.swing":{defaultDuration:950,calls:[[{rotateZ:15},.2],[{rotateZ:-10},.2],[{rotateZ:5},.2],[{rotateZ:-5},.2],[{rotateZ:0},.2]]},"callout.tada":{defaultDuration:1e3,calls:[[{scaleX:.9,scaleY:.9,rotateZ:-3},.1],[{scaleX:1.1,scaleY:1.1,rotateZ:3},.1],[{scaleX:1.1,scaleY:1.1,rotateZ:-3},.1],["reverse",.125],["reverse",.125],["reverse",.125],["reverse",.125],["reverse",.125],[{scaleX:1,scaleY:1,rotateZ:0},.2]]},"transition.fadeIn":{defaultDuration:500,calls:[[{opacity:[1,0]}]]},"transition.fadeOut":{defaultDuration:500,calls:[[{opacity:[0,1]}]]},"transition.flipXIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateY:[0,-55]}]],reset:{transformPerspective:0}},"transition.flipXOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateY:55}]],reset:{transformPerspective:0,rotateY:0}},"transition.flipYIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateX:[0,-45]}]],reset:{transformPerspective:0}},"transition.flipYOut":{defaultDuration:800,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateX:25}]],reset:{transformPerspective:0,rotateX:0}},"transition.flipBounceXIn":{defaultDuration:900,calls:[[{opacity:[.725,0],transformPerspective:[400,400],rotateY:[-10,90]},.5],[{opacity:.8,rotateY:10},.25],[{opacity:1,rotateY:0},.25]],reset:{transformPerspective:0}},"transition.flipBounceXOut":{defaultDuration:800,calls:[[{opacity:[.9,1],transformPerspective:[400,400],rotateY:-10},.5],[{opacity:0,rotateY:90},.5]],reset:{transformPerspective:0,rotateY:0}},"transition.flipBounceYIn":{defaultDuration:850,calls:[[{opacity:[.725,0],transformPerspective:[400,400],rotateX:[-10,90]},.5],[{opacity:.8,rotateX:10},.25],[{opacity:1,rotateX:0},.25]],reset:{transformPerspective:0}},"transition.flipBounceYOut":{defaultDuration:800,calls:[[{opacity:[.9,1],transformPerspective:[400,400],rotateX:-15},.5],[{opacity:0,rotateX:90},.5]],reset:{transformPerspective:0,rotateX:0}},"transition.swoopIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["100%","50%"],transformOriginY:["100%","100%"],scaleX:[1,0],scaleY:[1,0],translateX:[0,-700],translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%"}},"transition.swoopOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformOriginX:["50%","100%"],transformOriginY:["100%","100%"],scaleX:0,scaleY:0,translateX:-700,translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%",scaleX:1,scaleY:1,translateX:0}},"transition.whirlIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,0],scaleY:[1,0],rotateY:[0,160]},1,{easing:"easeInOutSine"}]]},"transition.whirlOut":{defaultDuration:750,calls:[[{opacity:[0,"easeInOutQuint",1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:0,scaleY:0,rotateY:160},1,{easing:"swing"}]],reset:{scaleX:1,scaleY:1,rotateY:0}},"transition.shrinkIn":{defaultDuration:750,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,1.5],scaleY:[1,1.5],translateZ:0}]]},"transition.shrinkOut":{defaultDuration:600,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:1.3,scaleY:1.3,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.expandIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,.625],scaleY:[1,.625],translateZ:0}]]},"transition.expandOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:.5,scaleY:.5,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.bounceIn":{defaultDuration:800,calls:[[{opacity:[1,0],scaleX:[1.05,.3],scaleY:[1.05,.3]},.4],[{scaleX:.9,scaleY:.9,translateZ:0},.2],[{scaleX:1,scaleY:1},.5]]},"transition.bounceOut":{defaultDuration:800,calls:[[{scaleX:.95,scaleY:.95},.35],[{scaleX:1.1,scaleY:1.1,translateZ:0},.35],[{opacity:[0,1],scaleX:.3,scaleY:.3},.3]],reset:{scaleX:1,scaleY:1}},"transition.bounceUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[-30,1e3]},.6,{easing:"easeOutCirc"}],[{translateY:10},.2],[{translateY:0},.2]]},"transition.bounceUpOut":{defaultDuration:1e3,calls:[[{translateY:20},.2],[{opacity:[0,"easeInCirc",1],translateY:-1e3},.8]],reset:{translateY:0}},"transition.bounceDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[30,-1e3]},.6,{easing:"easeOutCirc"}],[{translateY:-10},.2],[{translateY:0},.2]]},"transition.bounceDownOut":{defaultDuration:1e3,calls:[[{translateY:-20},.2],[{opacity:[0,"easeInCirc",1],translateY:1e3},.8]],reset:{translateY:0}},"transition.bounceLeftIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[30,-1250]},.6,{easing:"easeOutCirc"}],[{translateX:-10},.2],[{translateX:0},.2]]},"transition.bounceLeftOut":{defaultDuration:750,calls:[[{translateX:30},.2],[{opacity:[0,"easeInCirc",1],translateX:-1250},.8]],reset:{translateX:0}},"transition.bounceRightIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[-30,1250]},.6,{easing:"easeOutCirc"}],[{translateX:10},.2],[{translateX:0},.2]]},"transition.bounceRightOut":{defaultDuration:750,calls:[[{translateX:-30},.2],[{opacity:[0,"easeInCirc",1],translateX:1250},.8]],reset:{translateX:0}},"transition.slideUpIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,20],translateZ:0}]]},"transition.slideUpOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:-20,translateZ:0}]],reset:{translateY:0}},"transition.slideDownIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,-20],translateZ:0}]]},"transition.slideDownOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:20,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftIn":{defaultDuration:1e3,calls:[[{opacity:[1,0],translateX:[0,-20],translateZ:0}]]},"transition.slideLeftOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:-20,translateZ:0}]],reset:{translateX:0}},"transition.slideRightIn":{defaultDuration:1e3,calls:[[{opacity:[1,0],translateX:[0,20],translateZ:0}]]},"transition.slideRightOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:20,translateZ:0}]],reset:{translateX:0}},"transition.slideUpBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,75],translateZ:0}]]},"transition.slideUpBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:-75,translateZ:0}]],reset:{translateY:0}},"transition.slideDownBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,-75],translateZ:0}]]},"transition.slideDownBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:75,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,-75],translateZ:0}]]},"transition.slideLeftBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:-75,translateZ:0}]],reset:{translateX:0}},"transition.slideRightBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,75],translateZ:0}]]},"transition.slideRightBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:75,translateZ:0}]],reset:{translateX:0}},"transition.perspectiveUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:[0,-180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveUpOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},"transition.perspectiveDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveDownOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},"transition.perspectiveLeftIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2e3,2e3],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:[0,-180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveLeftOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2e3,2e3],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}},"transition.perspectiveRightIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2e3,2e3],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveRightOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2e3,2e3],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}}};for(var c in i.RegisterEffect.packagedEffects)i.RegisterEffect(c,i.RegisterEffect.packagedEffects[c]);i.RunSequence=function(t){var a=$.extend(!0,[],t);a.length>1&&($.each(a.reverse(),function(t,e){var r=a[t+1];if(r){var n=e.o||e.options,s=r.o||r.options,o=n&&n.sequenceQueue===!1?"begin":"complete",l=s&&s[o],c={};c[o]=function(){var t=r.e||r.elements,a=t.nodeType?[t]:t;l&&l.call(a,a),i(e)},r.o?r.o=$.extend({},s,c):r.options=$.extend({},s,c)}}),a.reverse()),i(a[0])}}(window.jQuery||window.Zepto||window,window,document)});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:59:"/bitrix/templates/aspro_optimus/js/main.js?1595503095161065";s:6:"source";s:42:"/bitrix/templates/aspro_optimus/js/main.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var basketTimeoutSlide;
var resizeEventTimer;

var funcDefined = function(func){
	try {
		if (typeof func == 'function') {
			return true;
		} else {
			return typeof window[func] === "function";
		}
	} catch (e) {
		return false;
	}
}

if(!funcDefined('setLocationSKU')){
	function setLocationSKU(ID, urlParam){
		if(urlParam === undefined)
			urlParam = 'oid';

		var objUrl = parseUrlQuery(),
			j = 0,
			prefix = '',
			query_string = '',
			url = '';
		
			objUrl[urlParam] = ID;
			for(var i in objUrl)
			{
				if(parseInt(j)>0)
					prefix = '&';
				query_string = query_string + prefix + i + '='+ objUrl[i];
				j++;
			}
			if(query_string)
			{
				url = location.pathname+'?'+query_string;
			}
			try {
				//history.pushState(null, null, url);
				history.replaceState(null, null, url);
				
				return;
			} catch(e) {}
			location.hash = '#' + url.substr(1);
	}
}

if(!funcDefined('trimPrice')){
	var trimPrice = function trimPrice(s){
		s=s.split(" ").join("");
		s=s.split("&nbsp;").join("");
		return s;
	}
}

if(!funcDefined('markProductRemoveBasket')){
	var markProductRemoveBasket = function markProductRemoveBasket(id){
		$('.in-cart[data-item='+id+']').hide();
		$('.to-cart[data-item='+id+']').show();
		$('.to-cart[data-item='+id+']').closest('.button_block').removeClass('wide');
		$('.to-cart[data-item='+id+']').closest('.counter_wrapp').find('.counter_block').show();
		$('.counter_block[data-item='+id+']').show();
		$('.in-subscribe[data-item='+id+']').hide();
		$('.to-subscribe[data-item='+id+']').show();
		$('.wish_item[data-item='+id+']').removeClass("added");
		$('.wish_item[data-item='+id+'] .value:not(.added)').show();
		$('.wish_item[data-item='+id+'] .value.added').hide();
	}
}

if(!funcDefined('markProductAddBasket')){
	var markProductAddBasket = function markProductAddBasket(id){
		$('.to-cart[data-item='+id+']').hide();
		$('.to-cart[data-item='+id+']').closest('.counter_wrapp').find('.counter_block').hide();
		$('.to-cart[data-item='+id+']').closest('.button_block').addClass('wide');
		$('.in-cart[data-item='+id+']').show();
		$('.wish_item[data-item='+id+']').removeClass("added");
		$('.wish_item[data-item='+id+'] .value:not(.added)').show();
		$('.wish_item[data-item='+id+'] .value.added').hide();
	}
}

if(!funcDefined('markProductDelay')){
	var markProductDelay = function markProductDelay(id){
		$('.in-cart[data-item='+id+']').hide();
		$('.to-cart[data-item='+id+']').show();
		$('.to-cart[data-item='+id+']').closest('.counter_wrapp').find('.counter_block').show();
		$('.to-cart[data-item='+id+']').closest('.button_block').removeClass('wide');
		$('.wish_item[data-item='+id+']').addClass("added");
		$('.wish_item[data-item='+id+'] .value:not(.added)').hide();
		// $('.wish_item[data-item='+id+'] .value.added').show();
		$('.wish_item[data-item='+id+'] .value.added').css('display','block');
	}
}

if(!funcDefined('markProductSubscribe')){
	var markProductSubscribe = function markProductSubscribe(id){
		$('.to-subscribe[data-item='+id+']').hide();
		$('.in-subscribe[data-item='+id+']').css('display','block');
	}
}

if(!funcDefined('basketFly')){
	var basketFly = function basketFly(action){
		$.post( arOptimusOptions['SITE_DIR']+"ajax/basket_fly.php", "PARAMS="+$("#basket_form").find("input#fly_basket_params").val(), $.proxy(function( data ){
			var small=$('.opener .basket_count').hasClass('small'),
				basket_count=$(data).find('.basket_count').find('.items div').text();
			$('#basket_line .basket_fly').addClass('loaded').html(data);

			if(action=="refresh"){
				$('li[data-type=AnDelCanBuy]').trigger('click');
			}

			if(window.matchMedia('(min-width: 769px)').matches){
				
				if (action=='open') {
					if(small){
						if(arOptimusOptions['THEME']['SHOW_BASKET_ONADDTOCART'] !== 'N'){
							$('.opener .basket_count').click();
						}
					}else{
						$('.opener .basket_count').removeClass('small')
						$('.tabs_content.basket li[item-section="AnDelCanBuy"]').addClass('cur');
						$('#basket_line ul.tabs li[item-section="AnDelCanBuy"]').addClass('cur');
					}
				} else if (action=='wish') {
					if(small){
						if(arOptimusOptions['THEME']['SHOW_BASKET_ONADDTOCART'] !== 'N'){
							$('.opener .wish_count').click();
						}
					}else{
						$('.opener .wish_count').removeClass('small')
						$('.tabs_content.basket li[item-section="DelDelCanBuy"]').addClass('cur');
						$('#basket_line ul.tabs li[item-section="DelDelCanBuy"]').addClass('cur');
					}
				} else {
					if(arOptimusOptions['THEME']['SHOW_BASKET_ONADDTOCART'] !== 'N'){
						$('.opener .basket_count').click();
					}
				}
			}
		}));
	}
}

if(!funcDefined("clearViewedProduct")){
	function clearViewedProduct(){
		try{
			var siteID = arOptimusOptions.SITE_ID;
			var localKey = 'OPTIMUS_VIEWED_ITEMS_' + siteID;
			var cookieParams = {path: '/', expires: 30};
			if(typeof BX.localStorage !== 'undefined'){
				// remove local storage
				BX.localStorage.set(localKey, {}, 0);
			}
			// remove cookie
			$.removeCookie(localKey, cookieParams);
		}
		catch(e){
			console.error(e);
		}
	}
}

if(!funcDefined("setViewedProduct")){
	function setViewedProduct(id, arData){
		try{

			// save $.cookie option
			var bCookieJson = $.cookie.json;
			$.cookie.json = true;

			var siteID = arOptimusOptions.SITE_ID;
			var localKey = 'OPTIMUS_VIEWED_ITEMS_' + siteID;
			var cookieParams = {path: '/', expires: 30};

			if((typeof BX.localStorage !== 'undefined') && (typeof id !== 'undefined') && (typeof arData !== 'undefined')){
				var PRODUCT_ID = (typeof arData.PRODUCT_ID !== 'undefined') ? arData.PRODUCT_ID : id;
				var arViewedLocal = BX.localStorage.get(localKey) ? BX.localStorage.get(localKey) : {};
				var arViewedCookie = $.cookie(localKey) ? $.cookie(localKey) : {};
				var count = 0;

				// delete some items (sync cookie & local storage)
				for(var _id in arViewedLocal){
					arViewedLocal[_id].IS_LAST = false;
					if(typeof arViewedCookie[_id] === 'undefined'){
						delete arViewedLocal[_id];
					}
				}
				for(var _id in arViewedCookie){
					if(typeof arViewedLocal[_id] === 'undefined'){
						delete arViewedCookie[_id];
					}
				}

				for(var _id in arViewedCookie){
					count++;
				}

				// delete item if other item (offer) of that PRODUCT_ID is exists
				if(typeof arViewedLocal[PRODUCT_ID] !== 'undefined'){
					if(arViewedLocal[PRODUCT_ID].ID != id){
						delete arViewedLocal[PRODUCT_ID];
						delete arViewedCookie[PRODUCT_ID];
					}
				}

				delete arViewedLocal[2243];
				delete arViewedCookie[2243];

				var time = new Date().getTime();
				arData.ID = id;
				arData.ACTIVE_FROM = time;
				arData.IS_LAST = true;
				arViewedLocal[PRODUCT_ID] = arData;
				arViewedCookie[PRODUCT_ID] = [time.toString(), arData.PICTURE_ID];

				$.cookie(localKey, arViewedCookie, cookieParams);
				BX.localStorage.set(localKey, arViewedLocal, 2592000);  // 30 days
			}
		}
		catch(e){
			console.error(e);
		}
		finally{
			// restore $.cookie option
			$.cookie.json = bCookieJson;
		}
	}
}



if(!funcDefined('initSelects')){
	function initSelects(target){
		var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
		if ( iOS ) return;
		if($("#bx-soa-order").length)
			return;
		// SELECT STYLING
		$(target).find('.wrapper select:visible').ikSelect({
			syntax: '<div class="ik_select_link"> \
						<span class="ik_select_link_text"></span> \
						<div class="trigger"></div> \
					</div> \
					<div class="ik_select_dropdown"> \
						<div class="ik_select_list"> \
						</div> \
					</div>',
			dynamicWidth: true,
			ddMaxHeight: 112,
			customClass: 'common_select',
			//equalWidths: true,
			onShow: function(inst){
				inst.$dropdown.css('top', (parseFloat(inst.$dropdown.css('top'))-5)+'px');
				if ( inst.$dropdown.outerWidth() < inst.$link.outerWidth() ){
					inst.$dropdown.css('width', inst.$link.outerWidth());
				}
				if ( inst.$dropdown.outerWidth() > inst.$link.outerWidth() ){
					inst.$dropdown.css('width', inst.$link.outerWidth());
				}
				var count=0,
					client_height=0;
				inst.$dropdown.css('left', inst.$link.offset().left);
				$(inst.$listInnerUl).find('li').each(function(){
					if(!$(this).hasClass('ik_select_option_disabled')){
						++count;
						client_height+=$(this).outerHeight();
					}
				})
				if(client_height<112){
					inst.$listInner.css('height', 'auto');
				}else{
					inst.$listInner.css('height', '112px');
				}
				inst.$link.addClass('opened');
				inst.$listInner.addClass('scroller');
			},
			onHide: function(inst){
				inst.$link.removeClass('opened');
			}
		});
		// END OF SELECT STYLING

		var timeout;
		$(window).on('resize', function(){
			clearTimeout(timeout);
			timeout = setTimeout(function(){
				//$('select:visible').ikSelect('redraw');
				var inst='';
				if(inst=$('.common_select-link.opened + select').ikSelect().data('plugin_ikSelect')){
					inst.$dropdown.css('left', inst.$link.offset().left+'px');
				}
			}, 20);
		});
	}
}

if(!funcDefined('CheckTopMenuFullCatalogSubmenu')){
	CheckTopMenuFullCatalogSubmenu = function(){
		if(arOptimusOptions['THEME']['MENU_TYPE_VIEW'] != 'hover')
			return;
		var $menu = $('.menu_top_block');
		var $wrapmenu = $menu.parents('.wrap_menu');
		var wrapMenuWidth = $wrapmenu.actual('outerWidth');
		var wrapMenuLeft = $wrapmenu.offset().left;
		var wrapMenuRight = wrapMenuLeft + wrapMenuWidth;
		var bCatalogFirst = $menu.hasClass('catalogfirst');
		var findMenuLi = $('.menu_top_block:visible li.full');
		var parentSubmenuWidth = $menu.actual('outerWidth');

		if($('.catalog_block.menu_top_block').length){
			if($('.catalog_block.menu_top_block').is(':visible'))
				findMenuLi=$('.menu_top_block.catalog_block li.full');
		}

		findMenuLi.each(function(){
			var $this = $(this);
			var $submenu = $this.find('>.dropdown');

			if($submenu.length){
				if(bCatalogFirst){
					$submenu.css({left: parentSubmenuWidth + 'px', width: (wrapMenuWidth - parentSubmenuWidth) + 'px', 'padding-left': '0px', 'padding-right': '0px'});
				}
				else{
					$submenu.css({left: ($this.offset().left * -1) + 'px', width: ($(window).width() - 1) + 'px', 'padding-left': wrapMenuLeft + 'px', 'padding-right': ($(window).width() - wrapMenuRight) + 'px'});
				}
				if(!isOnceInited && bCatalogFirst && arOptimusOptions["THEME"]["MENU_POSITION"]=="top"){
					$this.on('mouseenter', function(){
						$submenu.css('min-height', $this.closest('.dropdown').actual('outerHeight') + 'px');
					});
				}
			}
		});
	}
}

$.fn.getMaxHeights = function( outer, classNull, minHeight ){
	var maxHeight = this.map( function( i, e ){
		var calc_height=0;

		$(e).css('height', '');

		if( outer == true ){
			calc_height=$(e).actual('outerHeight');
		}else{
			calc_height=$(e).actual('height');
		}
		return calc_height;
	}).get();
	for(var i = 0, c = maxHeight.length; i < c; ++i){
		if(maxHeight[i] % 2){
			--maxHeight[i];
		}
	}
	return Math.max.apply( this, maxHeight );
}

$.fn.equalizeHeights = function( outer, classNull, minHeight ){
	var maxHeight = this.map( function( i, e ){
		var minus_height=0,
			calc_height=0;
		if(classNull!==false){
			minus_height=parseInt($(e).find(classNull).actual('outerHeight'));
		}
		if(minus_height)
			minus_height+=12;
		$(e).css('height', '');
		if( outer == true ){
			calc_height=$(e).actual('outerHeight')-minus_height;
		}else{
			calc_height=$(e).actual('height')-minus_height;
		}
		if(minHeight!==false){
			if(calc_height<minHeight){
				calc_height+=(minHeight-calc_height);
			}
			if(window.matchMedia('(max-width: 520px)').matches){
				calc_height=300;
			}
			if(window.matchMedia('(max-width: 400px)').matches){
				calc_height=200;
			}
		}
		return calc_height;
	}).get();

	for(var i = 0, c = maxHeight.length; i < c; ++i){
		if(maxHeight[i] % 2){
			--maxHeight[i];
		}
	}
	return this.height( Math.max.apply( this, maxHeight ) );
}

$.fn.getFloatWidth = function(){
	var width = 0

	if($(this).length){
		var rect = $(this)[0].getBoundingClientRect()
		if(!(width = rect.width)){
			width = rect.right - rect.left
		}
	}

	return width
}


$.fn.sliceHeight = function( options ){
	function _slice(el){

		el.each(function() {
			$(this).css('line-height', '');
			$(this).css('height', '');
		});
		if(typeof(options.autoslicecount) == 'undefined' || options.autoslicecount !== false){
			var row=(typeof(options.row) !== 'undefined' && options.row.length) ?  el.first().parents(options.row).getFloatWidth() : el.first().parents('.items').getFloatWidth(),
				elw=(typeof(options.item) !== 'undefined' && options.item.length) ? $(options.item).first().getFloatWidth() : (el.first().hasClass('item') ? el.first().getFloatWidth() : el.first().parents('.item').getFloatWidth());
			if(!row){
				row = el.first().parents('.row').getFloatWidth();
			}
			if(row && elw){
				options.slice = Math.floor(row / elw);
			}
		}
		if(options.slice){
			for(var i = 0; i < el.length; i += options.slice){
				$(el.slice(i, i + options.slice)).equalizeHeights(options.outer, options.classNull, options.minHeight);
			}
		}
		if(options.lineheight){
			var lineheightAdd = parseInt(options.lineheight);
			if(isNaN(lineheightAdd)){
				lineheightAdd = 0;
			}
			el.each(function() {
				$(this).css('line-height', ($(this).actual('height') + lineheightAdd) + 'px');
			});
		}
	}

	var options = $.extend({
		slice: null,
		outer: false,
		lineheight: false,
		autoslicecount: true,
		classNull: false,
		minHeight: false,
		options: false,
		resize: true,
		row:false,
		item:false
	}, options);

	var el = $(this);
	_slice(el);

	if(options.resize)
	{
		BX.addCustomEvent('onWindowResize', function(eventdata) {
			ignoreResize.push(true);
			_slice(el);
			ignoreResize.pop();
		});
	}
	else
	{
		if(!ignoreResize.length)
		{
			// ignoreResize.push(true);
			_slice(el);
			// ignoreResize.pop();
		}
	}
}

$.fn.sliceHeightNoResize = function( options ){
	function _slice(el){

		el.each(function() {
			$(this).css('line-height', '');
			$(this).css('height', '');
		});
		if(typeof(options.autoslicecount) == 'undefined' || options.autoslicecount !== false){
			var elw = (el.first().hasClass('item') ? el.first().getFloatWidth() : el.first().parents('.item').getFloatWidth());
			var elsw = el.first().parents('.items').getFloatWidth();
			if(!elsw){
				elsw = el.first().parents('.row').getFloatWidth();
			}
			if(elsw && elw){
				options.slice = Math.floor(elsw / elw);
			}
		}

		if(options.slice){
			for(var i = 0; i < el.length; i += options.slice){

				$(el.slice(i, i + options.slice)).equalizeHeights(options.outer, options.classNull, options.minHeight);
			}
		}
		if(options.lineheight){
			var lineheightAdd = parseInt(options.lineheight);
			if(isNaN(lineheightAdd)){
				lineheightAdd = 0;
			}
			el.each(function() {
				$(this).css('line-height', ($(this).actual('height') + lineheightAdd) + 'px');
			});
		}
	}

	var options = $.extend({
		slice: null,
		outer: false,
		lineheight: false,
		autoslicecount: true,
		classNull: false,
		minHeight: false,
		options: false,
		resize: true,
	}, options);

	var el = $(this);
	_slice(el);
}

if(!funcDefined('initHoverBlock')){
	function initHoverBlock(target){
		/*$(target).find('.catalog_item.item_wrap').on('mouseenter', function(){
			$(this).addClass('hover');
		})
		$(target).find('.catalog_item.item_wrap').on('mouseleave', function(){
			$(this).removeClass('hover');
		})*/
	}
}

if(!funcDefined('setStatusButton')){
	function setStatusButton(){
		$.ajax({
			url: arOptimusOptions["SITE_DIR"]+'ajax/getAjaxBasket.php',
			type: 'POST',
			success: function(data){
				if(data.BASKET){
					for( var i in data.BASKET ){
						$('.to-cart[data-item='+data.BASKET[i]+']').hide();
						$('.counter_block[data-item='+data.BASKET[i]+']').hide();
						$('.in-cart[data-item='+data.BASKET[i]+']').show();
						$('.in-cart[data-item='+data.BASKET[i]+']').closest('.button_block').addClass('wide');
					}
				}
				if(data.DELAY){
					for( var i in data.DELAY ){
						$('.wish_item.to[data-item='+data.DELAY[i]+']').hide();
						$('.wish_item.in[data-item='+data.DELAY[i]+']').show();
						if ($('.wish_item[data-item='+data.DELAY[i]+']').find(".value.added").length) {
							$('.wish_item[data-item='+data.DELAY[i]+']').addClass("added");
							$('.wish_item[data-item='+data.DELAY[i]+']').find(".value").hide();
							$('.wish_item[data-item='+data.DELAY[i]+']').find(".value.added").show();
						}
					}
				}
				if(data.SUBSCRIBE){
					for( var i in data.SUBSCRIBE ){
						$('.to-subscribe[data-item='+data.SUBSCRIBE[i]+']').hide();
						$('.in-subscribe[data-item='+data.SUBSCRIBE[i]+']').show();
					}
				}
				if(data.COMPARE){
					for( var i in data.COMPARE ){
						$('.compare_item.to[data-item='+data.COMPARE[i]+']').hide();
						$('.compare_item.in[data-item='+data.COMPARE[i]+']').show();
						if ($('.compare_item[data-item='+data.COMPARE[i]+']').find(".value.added").length){
							$('.compare_item[data-item='+data.COMPARE[i]+']').find(".value").hide();
							$('.compare_item[data-item='+data.COMPARE[i]+']').find(".value.added").show();
						}
					}
				}
			}
		});
	}
}

window.onload=function(){
	window.dataLayer = window.dataLayer || [];
}

if(!funcDefined('onLoadjqm')){
	var onLoadjqm = function(name, hash, requestData, selector, requestTitle, isButton, thButton){
		hash.w.addClass('show').css({
			'margin-left': ($(window).width() > hash.w.outerWidth() ? '-' + hash.w.outerWidth() / 2 + 'px' : '-' + $(window).width() / 2 + 'px'),
			'top': $(document).scrollTop() + (($(window).height() > hash.w.outerHeight() ? ($(window).height() - hash.w.outerHeight()) / 2 : 10))   + 'px',
			'opacity': 1
		});
		if(typeof(requestData) == 'undefined'){
			requestData = '';
		}
		if(typeof(selector) == 'undefined'){
			selector = false;
		}
		var width = $('.'+name+'_frame').width();
		$('.'+name+'_frame').css('margin-left', '-'+width/2+'px');

		if(name=='order-popup-call') {
		}
		else if(name=='order-button') {
			$(".order-button_frame").find("div[product_name]").find("input").val(hash.t.title).attr("readonly", "readonly").css({"overflow": "hidden", "text-overflow": "ellipsis"});
		}
		else if((name == "to-order" || name == "cheaper") && selector){
			$(".to-order_frame").find('[data-sid="PRODUCT_NAME"]').val($(selector).data('name')).attr("readonly", "readonly").css({"overflow": "hidden", "text-overflow": "ellipsis"});
			$(".to-order_frame").find('[data-sid="PRODUCT_ID"]').val($(selector).attr('data-item'));
			$(".cheaper_frame").find('[data-sid="PRODUCT_NAME"]').val($(selector).data('name')).attr("readonly", "readonly").css({"overflow": "hidden", "text-overflow": "ellipsis"});
			$(".cheaper_frame").find('[data-sid="PRODUCT_ID"]').val($(selector).attr('data-item'));
		}
		else if(name == "services" && selector) {
			$(".services_frame").find('[data-sid="SERVICE"]').val($(selector).attr('data-title'));
		}
		else if(name == "resume" && selector) {
			if($(selector).attr('data-jobs')){
				$(".resume_frame").find('[data-sid="POST"]').attr("readonly", "readonly").val($(selector).attr('data-jobs'));
			}
		}
		/*else if(name == "subscribe" && selector) {
			if($(selector).attr('data-item')){
				$(".subscribe_frame").find('[data-sid="POST"]').attr("readonly", "readonly").val($(selector).attr('data-jobs'));
			}
		}*/
		else if(name=='basket_error')
		{
			$(".basket_error_frame .pop-up-title").text(requestTitle);
			$(".basket_error_frame .ajax_text").html(requestData);
			// $('.basket_error_frame .ajax_text select').ikSelect('redraw');
			initSelects(document);
			if(isButton=="Y" && thButton){
				$("<div class='popup_button_basket_wr'><span class='popup_button_basket big_btn button' data-item="+thButton.data("item")+"><span>"+BX.message("ERROR_BASKET_BUTTON")+"</span></span></div>").insertAfter($(".basket_error_frame .ajax_text"));
			}
		}
		else if( name == 'one_click_buy'){
			$('#one_click_buy_form').submit( function() {
				if($('#one_click_buy_form').valid()){
					if($('.'+name+'_frame form input.error').length || $('.'+name+'_frame form textarea.error').length) {
						return false
					}
					else if(!$(this).find('#one_click_buy_form_button').hasClass('clicked')){
						if(!$(this).find('#one_click_buy_form_button').hasClass("clicked"))
                                                $(this).find('#one_click_buy_form_button').addClass("clicked");
						var bSend = true;
						if(window.renderRecaptchaById && window.asproRecaptcha && window.asproRecaptcha.key)
						{
							if(window.asproRecaptcha.params.recaptchaSize == 'invisible' && typeof grecaptcha != 'undefined' && arOptimusOptions.THEME.ONE_CLICK_BUY_CAPTCHA === 'Y')
							{
								if($('#one_click_buy_form').find('.g-recaptcha-response').val())
								{
									// eventdata.form.submit();
									bSend = true;
								}
								else
								{
									grecaptcha.execute($('#one_click_buy_form').find('.g-recaptcha').data('widgetid'));
									$(this).find('#one_click_buy_form_button').removeClass("clicked");
									bSend = false;
								}
							}
						}
                                               
						if(bSend)
						{
							var form_url = $(this).attr('action');
							$.ajax({
								url: form_url,
								data: $(this).serialize(),
								type: 'POST',
								dataType: 'json',
								error: function(data) {
									alert('Error connecting server');
								},
								success: function(data) {
									if(data.result == 'Y'){
										if(arOptimusOptions['COUNTERS']['USE_1CLICK_GOALS'] !== 'N'){
											var eventdata = {goal: 'goal_1click_success'};
											BX.onCustomEvent('onCounterGoals', [eventdata])
										}

										if(ocb_files.length)
										{
											var obData = new FormData();
											$.each( ocb_files, function( key, value ){
												if(value)
													obData.append( key+'_'+value.code , value[0] );
											});
											if(obData)
											{
												$.ajax({
													url: form_url+'?uploadfiles&orderID='+data.message,
													type: 'POST',
													data: obData,
													cache: false,
													dataType: 'json',
													processData: false, // Don't process the files
													contentType: false, // this is string query
													error: function(data) {
														alert('Error with files');
													},
													success: function( respond, textStatus, jqXHR ){
														$('.one_click_buy_result').show();
														$('.one_click_buy_result_success').show();
														purchaseCounter(data.message, arOptimusOptions["COUNTERS"]["TYPE"]["ONE_CLICK"]);
													}
												})
											}
										}
										else
										{
											$('.one_click_buy_result').show();
											$('.one_click_buy_result_success').show();
											purchaseCounter(data.message, arOptimusOptions["COUNTERS"]["TYPE"]["ONE_CLICK"]);
										}

									}
									else{
										$('.one_click_buy_result').show();
										$('.one_click_buy_result_fail').show();
										if(('err' in data) && data.err)
											data.message=data.message+' \n'+data.err;
										$('.one_click_buy_result_text').html(data.message);
									}
									$('.one_click_buy_modules_button', self).removeClass('disabled');
									$('#one_click_buy_form').hide();
									$('#one_click_buy_form_result').show();
								}
							});
						}
					}
				}
				return false;
			});
		}
		else if( name == 'one_click_buy_basket'){

			$('#one_click_buy_form').on("submit", function(){
				if($('#one_click_buy_form').valid()){
					if($('.'+name+'_frame form input.error').length || $('.'+name+'_frame form textarea.error').length) {
						return false
					}
					else if(!$(this).find('#one_click_buy_form_button').hasClass('clicked')){
						if(!$(this).find('#one_click_buy_form_button').hasClass("clicked"))
							$(this).find('#one_click_buy_form_button').addClass("clicked");
						var bSend = true;
						if(window.renderRecaptchaById && window.asproRecaptcha && window.asproRecaptcha.key)
						{
							if(window.asproRecaptcha.params.recaptchaSize == 'invisible' && typeof grecaptcha != 'undefined'  && arOptimusOptions.THEME.ONE_CLICK_BUY_CAPTCHA === 'Y')
							{
								if($('#one_click_buy_form').find('.g-recaptcha-response').val())
								{
									// eventdata.form.submit();
									bSend = true;
								}
								else
								{
									grecaptcha.execute($('#one_click_buy_form').find('.g-recaptcha').data('widgetid'));
									$(this).find('#one_click_buy_form_button').removeClass("clicked");
									bSend = false;
								}
							}
						}
						if(bSend)
						{
							var form_url = $(this).attr('action');
							$.ajax({
								url: $(this).attr('action'),
								data: $(this).serialize(),
								type: 'POST',
								dataType: 'json',
								error: function(data) {
									window.console&&console.log(data);
								},
								success: function(data) {
									if(data.result == 'Y') {
										if(arOptimusOptions['COUNTERS']['USE_FASTORDER_GOALS'] !== 'N'){
											var eventdata = {goal: 'goal_fastorder_success'};
											BX.onCustomEvent('onCounterGoals', [eventdata])
										}

										if(ocb_files.length)
										{
											var obData = new FormData();
											$.each( ocb_files, function( key, value ){
												if(value)
													obData.append( key+'_'+value.code , value[0] );
											});
											if(obData)
											{
												$.ajax({
													url: form_url+'?uploadfiles&orderID='+data.message,
													type: 'POST',
													data: obData,
													cache: false,
													dataType: 'json',
													processData: false, // Don't process the files
													contentType: false, // this is string query
													error: function(data) {
														alert('Error with files');
													},
													success: function( respond, textStatus, jqXHR ){
														$('.one_click_buy_result').show();
														$('.one_click_buy_result_success').show();
														purchaseCounter(data.message, arOptimusOptions["COUNTERS"]["TYPE"]["ONE_CLICK"]);
													}
												})
											}
										}
										else
										{
											$('.one_click_buy_result').show();
											$('.one_click_buy_result_success').show();
											purchaseCounter(data.message, arOptimusOptions["COUNTERS"]["TYPE"]["ONE_CLICK"]);
										}
									}
									else{
										$('.one_click_buy_result').show();
										$('.one_click_buy_result_fail').show();
										if(('err' in data) && data.err)
											data.message=data.message+' \n'+data.err;
										$('.one_click_buy_result_text').text(data.message);
									}
									$('.one_click_buy_modules_button', self).removeClass('disabled');
									$('#one_click_buy_form').hide();
									$('#one_click_buy_form_result').show();
								}
							});
						}
					}
				}
				return false;
			});
		}

		$('.'+name+'_frame').show();
	}
}

if(!funcDefined('onHidejqm')){
	var onHidejqm = function(name, hash){
		if (hash.w.find('.one_click_buy_result_success').is(':visible') && name=="one_click_buy_basket") {
			window.location.href = window.location.href;
		}
		hash.w.css('opacity', 0).hide();
		hash.w.empty();
		hash.o.remove();
		hash.w.removeClass('show');
	}
}

if(!funcDefined("oneClickBuy")) {
	var oneClickBuy = function (elementID, iblockID, that) {
		var name = 'one_click_buy';
		var elementQuantity = 1;
		var offerProps = false;
		var buy_btn=$(that).closest('.buy_block').find('.to-cart');
		var buy_btn2=$(that).closest('tr').find('.to-cart');

		if(typeof(that) !== 'undefined'){
			elementQuantity = $(that).attr('data-quantity');
			offerProps = $(that).attr('data-props');
		}

		if(elementQuantity < 0){
			elementQuantity = 1;
		}

		var tmp_props=buy_btn.data("props"),
			tmp_props2=buy_btn2.data("props"),
			props='',
			part_props='',
			add_props='N',
			fill_prop={},
			iblockid = buy_btn.data('iblockid'),
			item = buy_btn.attr('data-item');

		if(tmp_props){
			props=tmp_props.split(";");
		}else if(tmp_props2){
			props=tmp_props2.split(";");
		}
		if(buy_btn.data("part_props")){
			part_props=buy_btn.data("part_props");
		}
		if(buy_btn.data("add_props")){
			add_props=buy_btn.data("add_props");
		}

		fill_prop=fillBasketPropsExt(buy_btn, 'prop', buy_btn.data('bakset_div'));
		fill_prop.iblockID=iblockid;
		fill_prop.part_props=part_props;
		fill_prop.add_props=add_props;
		fill_prop.props=JSON.stringify(props);
		fill_prop.item=item;
		fill_prop.ocb_item="Y";

		$('body').find('.'+name+'_frame').remove();
		$('body').find('.'+name+'_trigger').remove();
		$('body').append('<div class="'+name+'_frame popup"></div>');
		$('body').append('<div class="'+name+'_trigger"></div>');
		$('.'+name+'_frame').jqm({trigger: '.'+name+'_trigger', onHide: function(hash) { onHidejqm(name,hash); }, toTop: false, onLoad: function( hash ){ onLoadjqm(name, hash ); }, ajax: arOptimusOptions["SITE_DIR"]+'ajax/one_click_buy.php?ELEMENT_ID='+elementID+'&IBLOCK_ID='+iblockID+'&ELEMENT_QUANTITY='+elementQuantity+'&OFFER_PROPS='+fill_prop.props});
		$('.'+name+'_trigger').click();
	}
}

if(!funcDefined("oneClickBuyBasket")) {
	var oneClickBuyBasket = function () {
		name = 'one_click_buy_basket'
		$('body').find('.'+name+'_frame').remove();
		$('body').find('.'+name+'_trigger').remove();
		$('body').append('<div class="'+name+'_frame popup"></div>');
		$('body').append('<div class="'+name+'_trigger"></div>');
		$('.'+name+'_frame').jqm({trigger: '.'+name+'_trigger', onHide: function(hash) { onHidejqm(name,hash) }, onLoad: function( hash ){ onLoadjqm( name, hash ); }, ajax: arOptimusOptions["SITE_DIR"]+'ajax/one_click_buy_basket.php'});
		$('.'+name+'_trigger').click();
	}
}

if(!funcDefined("scroll_block")) {
	function scroll_block(block){
		var topPos = block.offset().top,
			headerH = $('header').outerHeight(true,true);
		if($(".stores_tab").length){
			$(".stores_tab").addClass("current").siblings().removeClass("current");
		}else{
			$(".prices_tab").addClass("current").siblings().removeClass("current");
			if($(".prices_tab .opener").length && !$(".prices_tab .opener .opened").length){
				var item = $(".prices_tab .opener").first();
				item.find(".opener_icon").addClass("opened");
				item.parents("tr").addClass("nb")
				item.parents("tr").next(".offer_stores").find(".stores_block_wrap").slideDown(200);
			}
		}
		$('html,body').animate({'scrollTop':topPos-30},150);
	}
}

if(!funcDefined("jqmEd")) {
	var jqmEd = function (name, form_id, open_trigger, requestData, selector, requestTitle, isButton, thButton){
		if(typeof(requestData) == "undefined"){
			requestData = '';
		}

		if(typeof(selector) == "undefined"){
			selector = false;
		}
		$('body').find('.'+name+'_frame').remove();
		$('body').append('<div class="'+name+'_frame popup"></div>');
		if(typeof open_trigger == "undefined" ){
			$('.'+name+'_frame').jqm({trigger: '.'+name+'_frame.popup',onHide: function(hash) { onHidejqm(name,hash); }, onLoad: function( hash ){ onLoadjqm( name , hash , requestData, selector); }, ajax: arOptimusOptions["SITE_DIR"]+'ajax/form.php?form_id='+form_id+(requestData.length ? '&' + requestData : '')});
		}else{
			if(name == 'enter'){
				$('.'+name+'_frame').jqm({trigger: open_trigger,onHide: function(hash) { onHidejqm(name,hash); },  onLoad: function( hash ){ onLoadjqm( name , hash , requestData, selector); }, ajax: arOptimusOptions["SITE_DIR"]+'ajax/auth.php'});
			}else if(name=='basket_error'){
				$('.'+name+'_frame').jqm({trigger: open_trigger, onHide: function(hash) { onHidejqm(name,hash); }, onLoad: function( hash ){ onLoadjqm( name , hash , requestData, selector, requestTitle, isButton, thButton); }, ajax: arOptimusOptions["SITE_DIR"]+'ajax/basket_error.php'});
			}else{
				$('.'+name+'_frame').jqm({trigger: open_trigger, onHide: function(hash) { onHidejqm(name,hash); }, onLoad: function( hash ){ onLoadjqm( name , hash , requestData, selector); }, ajax: arOptimusOptions["SITE_DIR"]+'ajax/form.php?form_id='+form_id+(requestData.length ? '&' + requestData : '')});
			}
			$(open_trigger).dblclick(function(){return false;})
		}
		return true;
	}
}

if (!funcDefined("replaceBasketPopup")){
	function replaceBasketPopup (hash){
		if(typeof hash != "undefined"){
			hash.w.hide();
			hash.o.hide();
		}
	}
}

if(!funcDefined("waitLayer")){
	function waitLayer(delay, callback){
		if(typeof dataLayer != 'undefined'){
			if(typeof callback == 'function'){
				callback();
			}
		}
		else{
			setTimeout(function() {
				waitLayer(delay, callback);
			}, delay);
		}
	}
}

if(!funcDefined("waitCounter")){
	waitCounter = function(idCounter, delay, callback){
		var obCounter = window['yaCounter' + idCounter];
		if(typeof obCounter == 'object'){
			if(typeof callback == 'function'){
				callback();
			}
		}
		else{
			setTimeout(function(){
				waitCounter(idCounter, delay, callback);
			}, delay);
		}
	}
}

if(!funcDefined("InitTopestMenuGummi")){
	InitTopestMenuGummi = function(){
		if(!isOnceInited){
			function _init(){
				var arItems = $menuTopest.find('>li:not(.more)');
				var cntItems = arItems.length;
				if(cntItems){
					var itemsWidth = 0;
					for(var i = 0; i < cntItems; ++i){
						var item = arItems.eq(i);
						var itemWidth = item.actual('outerWidth',{includeMargin: true});
						arItemsHideWidth[i] = (itemsWidth += itemWidth) + (i !== (cntItems - 1) ? moreWidth : 0);
					}
				}
			}

			function _gummi(){
				var rowWidth = $menuTopest.actual('innerWidth');
				var arItems = $menuTopest.find('>li:not(.more),li.more>.dropdown>li');
				var cntItems = arItems.length;
				if(cntItems){
					var bMore = false;
					for(var i = cntItems - 1; i >= 0; --i){
						var item = arItems.eq(i);
						var bInMore = item.parents('.more').length > 0;
						if(!bInMore){
							if(arItemsHideWidth[i] > rowWidth){
								if(!bMore){
									bMore = true;
									more.removeClass('hidden');
								}
								var clone = item.clone();
								clone.find('>a').addClass('dark_font');
								clone.prependTo(moreDropdown);
								item.addClass('cloned');
							}
						}
					}
					for(var i = 0; i < cntItems; ++i){
						var item = arItems.eq(i);
						var bInMore = item.parents('.more').length > 0;
						if(bInMore){
							if(arItemsHideWidth[i] <= rowWidth){
								if(i === (cntItems - 1)){
									bMore = false;
									more.addClass('hidden');
								}
								var clone = item.clone();
								clone.find('>a').removeClass('dark_font');
								clone.insertBefore(more);
								item.addClass('cloned');
							}
						}
					}
					$menuTopest.find('li.cloned').remove();
				}
			}

			var $menuTopest = $('.menu.topest');
			var more = $menuTopest.find('>.more');
			var moreDropdown = more.find('>.dropdown');
			var moreWidth = more.actual('outerWidth',{includeMargin: true});
			var arItemsHideWidth = [];
			ignoreResize.push(true);
			_init();
			_gummi();
			ignoreResize.pop();

			$(window).resize(function(){
				ignoreResize.push(true);
				_gummi();
				ignoreResize.pop();
			});
		}
	}
}

if(!funcDefined("InitTopMenuGummi")){
	InitTopMenuGummi = function(){
		function _init(){
			var arItems = $topMenu.closest('.wrap_menu').find('.inc_menu .menu_top_block >li:not(.more)');
			var cntItems = arItems.length;
			if(cntItems){
				var itemsWidth = 0;
				for(var i = 0; i < cntItems; ++i){
					var item = arItems.eq(i);
						var itemWidth = item.actual('outerWidth');
						arItemsHideWidth[i] = (itemsWidth += itemWidth) + (i !== (cntItems - 1) ? moreWidth : 0);
				}
			}

		}

		function _gummi(){
			var rowWidth = $wrapMenu.actual('innerWidth') - $wrapMenuLeft.actual('innerWidth');
			var arItems = $topMenu.find('>li:not(.more):not(.catalog),li.more>.dropdown>li');
			var cntItems = arItems.length;

			if(cntItems){
				var bMore = false;
				for(var i = cntItems - 1; i >= 0; --i){
					var item = arItems.eq(i);
					var bInMore = item.parents('.more').length > 0;
					if(!bInMore){
						if(arItemsHideWidth[i] > rowWidth){
							if(!bMore){
								bMore = true;
								more.removeClass('hidden');
							}
							var clone = item.clone();
							clone.find('>.dropdown').removeAttr('style').removeClass('toleft');
							clone.find('>a').addClass('dark_font').removeAttr('style');
							clone.prependTo(moreDropdown);
							item.addClass('cloned');
						}
					}
				}
				for(var i = 0; i < cntItems; ++i){
					var item = arItems.eq(i);
					var bInMore = item.parents('.more').length > 0;
					if(bInMore){
						if(arItemsHideWidth[i] <= rowWidth){
							if(i === (cntItems - 1)){
								bMore = false;
								more.addClass('hidden');
							}
							var clone = item.clone();
							clone.find('>a').removeClass('dark_font');
							clone.insertBefore(more);
							item.addClass('cloned');
						}
					}
				}
				$topMenu.find('li.cloned').remove();

				var cntItemsVisible = $topMenu.find('>li:not(.more):not(.catalog)').length;
				var o = rowWidth - arItemsHideWidth[cntItemsVisible - 1];
				var itemsPaddingAdd = Math.floor(o / (cntItemsVisible + (more.hasClass('hidden') ? 0 : 1)));
				var itemsPadding_new = itemsPadding_min + itemsPaddingAdd;
				var itemsPadding_new_l = Math.floor(itemsPadding_new / 2);
				var itemsPadding_new_r = itemsPadding_new - itemsPadding_new_l;

				$topMenu.find('>li:not(.catalog):visible>a').each(function(){
					$(this).css({'padding-left': itemsPadding_new_l + 'px'});
					$(this).css({'padding-right': itemsPadding_new_r + 'px'});
				});

				var lastItemPadding_new = itemsPadding_new + o - (cntItemsVisible + (more.is(':visible') ? 1 : 0)) * itemsPaddingAdd;
				var lastItemPadding_new_l = Math.floor(lastItemPadding_new / 2);
				var lastItemPadding_new_r = lastItemPadding_new - lastItemPadding_new_l;
				$topMenu.find('>li:visible').last().find('>a').css({'padding-left': lastItemPadding_new_l + 'px'});
				$topMenu.find('>li:visible').last().find('>a').css({'padding-right': lastItemPadding_new_r + 'px'});
				CheckTopMenuFullCatalogSubmenu();
			}
		}

		var $topMenu = $('.menu_top_block');
		var $wrapMenu = $topMenu.parents('.wrap_menu');
		var $wrapMenuLeft = $wrapMenu.find('.catalog_menu_ext');
		var more = $topMenu.find('>.more');
		var moreWidth = more.actual('outerWidth',{includeMargin: true});
		more.addClass('hidden');
		var arItemsHideWidth = [];
		var moreDropdown = more.find('>.dropdown');
		var itemsPadding = parseInt(more.find('>a').css('padding-left')) * 2;
		var itemsPadding_min = itemsPadding;

		// setTimeout(function(){
			ignoreResize.push(true);
			_init();
			_gummi();
			ignoreResize.pop();
		// }, 100)

		$(window).resize(function(){
			ignoreResize.push(true);
			_gummi();
			ignoreResize.pop();
		});

		/*BX.addCustomEvent('onTopPanelFixUnfix', function(eventdata) {
			ignoreResize.push(true);
			_gummi();
			ignoreResize.pop();
		});*/
	}
}

if(!funcDefined("checkCounters")){
	function checkCounters(name){
		if(typeof name !== "undefined"){
			if(name == "google" && (arOptimusOptions["COUNTERS"]["GOOGLE_ECOMERCE"] == "Y" && arOptimusOptions["COUNTERS"]["GOOGLE_COUNTER"] > 0)){
				return true;
			}
			else if(name == "yandex" && (arOptimusOptions['COUNTERS']['USE_YA_COUNTER'] == 'Y' && arOptimusOptions["COUNTERS"]["YANDEX_ECOMERCE"] == "Y" && arOptimusOptions["COUNTERS"]["YANDEX_COUNTER"] > 0)){
				return true;
			}
			else{
				return false;
			}
		}
		else if((arOptimusOptions['COUNTERS']['USE_YA_COUNTER'] == 'Y' && arOptimusOptions["COUNTERS"]["YANDEX_ECOMERCE"] == "Y" && arOptimusOptions["COUNTERS"]["YANDEX_COUNTER"] > 0) || (arOptimusOptions["COUNTERS"]["GOOGLE_ECOMERCE"] == "Y" && arOptimusOptions["COUNTERS"]["GOOGLE_COUNTER"] > 0)) {
			return true;
		}
		else{
			return false;
		}
	}
}

if(!funcDefined("addBasketCounter")){
	function addBasketCounter(id){
		if(arOptimusOptions['COUNTERS']['USE_BASKET_GOALS'] !== 'N'){
			var eventdata = {goal: 'goal_basket_add', params: {id: id}};
			BX.onCustomEvent('onCounterGoals', [eventdata]);
		}
		if(checkCounters()){
			$.ajax({
				url:arOptimusOptions['SITE_DIR'] + "ajax/goals.php",
				dataType: "json",
				type: "POST",
				data: {"ID": id},
				success: function(item){
					if(!!item && !!item.ID){
						waitLayer(100, function() {
							dataLayer.push({
								"event": arOptimusOptions["COUNTERS"]['GOOGLE_EVENTS']['ADD2BASKET'],
							    "ecommerce": {
							    	"currencyCode": item.CURRENCY,
							        "add": {
							            "products": [{
						                    "id": item.ID,
						                    "name": item.NAME,
						                    "price": item.PRICE,
						                    "brand": item.BRAND,
						                    "category": item.CATEGORY,
						                    "quantity": item.QUANTITY
						                }]
							        }
							    }
							});
						});
					}
				}
			});
		}
	}
}

if(!funcDefined("purchaseCounter")){
	function purchaseCounter(order_id, type, callback){
		if(checkCounters()){
			$.ajax({
				url:arOptimusOptions['SITE_DIR'] + "ajax/goals.php",
				dataType: "json",
				type: "POST",
				data: {"ORDER_ID": order_id, "TYPE": type},
				success: function(order){
					var products = [];
					if(order.ITEMS){
						for(var i in order.ITEMS){
							products.push({
								"id": order.ITEMS[i].ID,
								"sku": order.ITEMS[i].ID,
			                    "name": order.ITEMS[i].NAME,
			                    "price": order.ITEMS[i].PRICE,
			                    "brand": order.ITEMS[i].BRAND,
			                    "category": order.ITEMS[i].CATEGORY,
			                    "quantity": order.ITEMS[i].QUANTITY
							});
						}
					}
					if(order.ID){
						waitLayer(100, function() {
							dataLayer.push({
								"event": arOptimusOptions["COUNTERS"]['GOOGLE_EVENTS']['PURCHASE'],
							    "ecommerce": d = {
							    	"purchase": {
								    	"actionField":{
								    		"id": order.ACCOUNT_NUMBER,
								    		"shipping": order.PRICE_DELIVERY,
								    		"tax": order.TAX_VALUE,
								    		"list": type,
								    		"revenue": order.PRICE
								    	},
							            "products": products
							        }
							    }
							});

							if(typeof callback !== 'undefined'){
								callback(d);
							}
						});
					}
					else{
						if(typeof callback !== 'undefined'){
							callback(false);
						}
					}
				},
				error: function(){
					if(typeof callback !== 'undefined'){
						callback(false);
					}
				}
			});
		}
		else{
			if(typeof callback !== 'undefined'){
				callback(false);
			}
		}
	}
}

if(!funcDefined("viewItemCounter")){
	function viewItemCounter(id, price_id){
		if(checkCounters()){
			$.ajax({
				url:arOptimusOptions['SITE_DIR'] + "ajax/goals.php",
				dataType: "json",
				type: "POST",
				data: {"PRODUCT_ID": id, "PRICE_ID": price_id},
				success: function(item){
					if(item.ID){
						waitLayer(100, function() {
							dataLayer.push({
								//"event": "",
								"ecommerce": {
									"detail": {
										"products": [{
											"id": item.ID,
											"name": item.NAME,
											"price": item.PRICE,
											"brand": item.BRAND,
											"category": item.CATEGORY
										}]
									}
								}
							});
						});
					}
				}
			});
		}
	}
}

if(!funcDefined("checkoutCounter")){
	function checkoutCounter(step, option, callback){
		if(checkCounters('google')){
			$.ajax({
				url:arOptimusOptions['SITE_DIR'] + "ajax/goals.php",
				dataType: "json",
				type: "POST",
				data: {"BASKET": "Y"},
				success: function(basket){
					var products = [];
					if(basket.ITEMS){
						for(var i in basket.ITEMS){
							products.push({
								"id": basket.ITEMS[i].ID,
			                    "name": basket.ITEMS[i].NAME,
			                    "price": basket.ITEMS[i].PRICE,
			                    "brand": basket.ITEMS[i].BRAND,
			                    "category": basket.ITEMS[i].CATEGORY,
			                    "quantity": basket.ITEMS[i].QUANTITY
							});
						}
					}
					if(products){
						waitLayer(100, function() {
							dataLayer.push({
								"event": arOptimusOptions["COUNTERS"]['GOOGLE_EVENTS']['CHECKOUT_ORDER'],
							    "ecommerce": {
							    	"checkout": {
								    	"actionField":{
								    		"step": step,
								    		"option": option
								    	},
								        "products": products
								    }
							    },
							    /*"eventCallback": function() {
							    	if((typeof callback !== 'undefined') && (typeof callback === 'function')){
							    		callback();
							    	}
							   }*/
							});
						});
					}
				}
			});
		}
	}
}

if(!funcDefined("delFromBasketCounter")){
	function delFromBasketCounter(id, callback){
		if(checkCounters()){
			$.ajax({
				url:arOptimusOptions['SITE_DIR'] + "ajax/goals.php",
				dataType: "json",
				type: "POST",
				data: {"ID": id},
				success: function(item){
					if(item.ID){
						waitLayer(100, function() {
							dataLayer.push({
								"event": arOptimusOptions["COUNTERS"]['GOOGLE_EVENTS']['REMOVE_BASKET'],
							    "ecommerce": {
							        "remove": {
							            "products": [{
						                    "id": item.ID,
						                    "name": item.NAME,
						                    "category": item.CATEGORY
						                }]
							        }
							    }
							});
							if(typeof callback == 'function'){
								callback();
							}
						});
					}
				}
			});
		}
	}
}

if(!funcDefined("setHeightCompany")){
	function setHeightCompany(){
		$('.md-50.img').height($('.md-50.big').outerHeight()-35);
	}
}

if(!funcDefined("initSly")){
	function initSly(){
		var $frame  = $(document).find('.frame');
		var $slidee = $frame.children('ul').eq(0);
		var $wrap   = $frame.parent();

		if(arOptimusOptions["PAGES"]["CATALOG_PAGE"]){
			$frame.sly({
				horizontal: 1,
				itemNav: 'basic',
				smart: 1,
				mouseDragging: 0,
				touchDragging: 0,
				releaseSwing: 0,
				startAt: 0,
				scrollBar: $wrap.find('.scrollbar'),
				scrollBy: 1,
				speed: 300,
				elasticBounds: 0,
				easing: 'swing',
				dragHandle: 1,
				dynamicHandle: 1,
				clickBar: 1,

				// Buttons
				forward: $wrap.find('.forward'),
				backward: $wrap.find('.backward'),
			});
			$frame.sly('reload');
		}
	}
}

if(!funcDefined("createTableCompare")){
	function createTableCompare(originalTable, appendDiv, cloneTable){

		try{
			var clone = originalTable.clone().removeAttr('id').addClass('clone');
			if(cloneTable.length){
				cloneTable.remove();
				appendDiv.html('');
				appendDiv.html(clone);
			}else{
				appendDiv.append(clone);
			}
		}
		catch(e){}
		finally{

		}
	}
}

if(!funcDefined('fillBasketPropsExt')){
	fillBasketPropsExt = function(that, prop_code, basket_prop_div){
		var
			i = 0,
			propCollection = null,
			foundValues = false,
			basketParams = {},
			obBasketProps = null;

		// obBasketProps = that.closest('.catalog_detail').find('.basket_props_block');
		if(that.closest('#fast_view_item').length)
			obBasketProps = that.closest('#fast_view_item').find('#'+basket_prop_div)[0];
		else
			obBasketProps = BX(basket_prop_div);

		if (!!obBasketProps)
		{
			propCollection = obBasketProps.getElementsByTagName('select');
			if (!!propCollection && !!propCollection.length)
			{
				for (i = 0; i < propCollection.length; i++)
				{
					if (!propCollection[i].disabled)
					{
						switch(propCollection[i].type.toLowerCase())
						{
							case 'select-one':
								basketParams[propCollection[i].name] = propCollection[i].value;
								foundValues = true;
								break;
							default:
								break;
						}
					}
				}
			}
			propCollection = obBasketProps.getElementsByTagName('input');
			if (!!propCollection && !!propCollection.length)
			{
				for (i = 0; i < propCollection.length; i++)
				{
					if (!propCollection[i].disabled)
					{
						switch(propCollection[i].type.toLowerCase())
						{
							case 'hidden':
								basketParams[propCollection[i].name] = propCollection[i].value;
								foundValues = true;
								break;
							case 'radio':
								if (propCollection[i].checked)
								{
									basketParams[propCollection[i].name] = propCollection[i].value;
									foundValues = true;
								}
								break;
							default:
								break;
						}
					}
				}
			}
		}
		if (!foundValues)
		{
			basketParams[prop_code] = [];
			basketParams[prop_code][0] = 0;
		}
		return basketParams;
	}
}
if(!funcDefined('showBasketError')){
	showBasketError = function(mess, title, addButton, th){
		var title_set=(title ? title : BX.message("ERROR_BASKET_TITLE")),
			isButton="N",
			thButton="";
		if(typeof addButton!==undefined){
			isButton="Y";
		}
		if(typeof th!==undefined){
			thButton=th;
		}
		$("body").append("<span class='add-error-bakset' style='display:none;'></span>");
		jqmEd('basket_error', 'error-bakset', '.add-error-bakset', mess, this, title_set, isButton, thButton);
		$("body .add-error-bakset").click();
		$("body .add-error-bakset").remove();
	}
}

if(!funcDefined("isRealValue")){
	function isRealValue(obj){
		return obj && obj !== "null" && obj!== "undefined";
	}
}

if(!funcDefined("rightScroll")){
	function rightScroll(prop, id){
		var el = BX('prop_' + prop + '_' + id);
		if (el) {
			var curVal = parseInt(el.style.marginLeft);
			if (curVal >= 0) el.style.marginLeft = curVal - 20 + '%';
		}
	}
}

if(!funcDefined("leftScroll")){
	function leftScroll(prop, id){
		var el = BX('prop_' + prop + '_' + id);
		if (el) {
			var curVal = parseInt(el.style.marginLeft);
			if (curVal < 0) el.style.marginLeft = curVal + 20 + '%';
		}
	}
}

if(!funcDefined("InitOrderCustom")){
	InitOrderCustom = function () {
		$('.ps_logo img').wrap('<div class="image"></div>');

		$('#bx-soa-order .radio-inline').each(function() {
			if ($(this).find('input').attr('checked') == 'checked') {
				$(this).addClass('checked');
			}
		});

		$('#bx-soa-order .checkbox input[type=checkbox]').each(function() {
			if ($(this).attr('checked') == 'checked')
				$(this).parent().addClass('checked');
		});

		$('#bx-soa-order .bx-authform-starrequired').each(function() {
			var html = $(this).html();
			$(this).closest('label').append('<span class="bx-authform-starrequired"> '+ html + '</span>');
			$(this).detach();
		});
		$('.bx_ordercart_coupon').each(function() {
			if ($(this).find('.bad').length)
				$(this).addClass('bad');
			else if ($(this).find('.good').length)
				$(this).addClass('good');
		});
		/*if (typeof(propsMap) !== 'undefined') {
			$(propsMap).on('click', function () {
				var value = $('#orderDescription').val();
				if ($('#orderDescription')) {
					if (value != '') {
						$('#orderDescription').closest('.form-group').addClass('value_y');
					}
				}
			});
		}*/
	}
}

if(!funcDefined("InitLabelAnimation")){
	InitLabelAnimation = function(className) {
		// Fix order labels
		if (!$(className).length) {
			return;
		}
		$(className).find('.form-group').each(function() {
			if ($(this).find('input[type=text], textarea').length && !$(this).find('.dropdown-block').length && $(this).find('input[type=text], textarea').val() != '') {
				$(this).addClass('value_y');
			}
		});

		$(document).on('click', className+' .form-group:not(.bx-soa-pp-field) label', function() {
			$(this).parent().find('input, textarea').focus();
		});

		$(document).on('focusout', className+' .form-group:not(.bx-soa-pp-field) input, '+className+' .form-group:not(.bx-soa-pp-field) textarea', function() {
			var value = $(this).val();
			if (value != '' && !$(this).closest('.form-group').find('.dropdown-block').length && !$(this).closest('.form-group').find('#profile_change').length) {
				$(this).closest('.form-group').addClass('value_y');
			}else{
				$(this).closest('.form-group').removeClass('value_y');
			}
		});

		$(document).on('focus', className+' .form-group:not(.bx-soa-pp-field) input, '+className+' .form-group:not(.bx-soa-pp-field) textarea', function() {
			if (!$(this).closest('.form-group').find('.dropdown-block').length && !$(this).closest('.form-group').find('#profile_change').length && !$(this).closest('.form-group').find('[name=PERSON_TYPE_OLD]').length ) {
				$(this).closest('.form-group').addClass('value_y');
			}
		});
	};
}

checkPopupWidth = function(){
	$('.popup.show').each(function() {
		var width_form = $(this).actual('width');
		$(this).css({
			'margin-left': ($(window).width() > width_form ? '-' + width_form / 2 + 'px' : '-' + $(window).width() / 2 + 'px'),
		});
	});
}

checkCaptchaWidth = function(){
	$('.captcha-row').each(function() {
		var width = $(this).actual('width');
		if($(this).hasClass('b')){
			if(width > 320){
				$(this).removeClass('b');
			}
		}
		else{
			if(width <= 320){
				$(this).addClass('b');
			}
		}
	});
}

checkFormWidth = function(){
	$('.form .form_left').each(function() {
		var form = $(this).parents('.form');
		var width = form.actual('width');
		if(form.hasClass('b')){
			if(width > 417){
				form.removeClass('b');
			}
		}
		else{
			if(width <= 417){
				form.addClass('b');
			}
		}
	});
}

checkFormControlWidth = function(){
	$('.form-control').each(function() {
		var width = $(this).actual('width');
		var labelWidth = $(this).find('label:not(.error) > span').actual('width');
		var errorWidth = $(this).find('label.error').actual('width');
		if(errorWidth > 0){
			if($(this).hasClass('h')){
				if(width > (labelWidth + errorWidth + 5)){
					$(this).removeClass('h');
				}
			}
			else{
				if(width <= (labelWidth + errorWidth + 5)){
					$(this).addClass('h');
				}
			}
		}
		else{
			$(this).removeClass('h');
		}
	});
}

scrollToTop = function(){
	if(arOptimusOptions['THEME']['SCROLLTOTOP_TYPE'] !== 'NONE'){
		var _isScrolling = false;
		// Append Button
		$('body').append($('<a />').addClass('scroll-to-top ' + arOptimusOptions['THEME']['SCROLLTOTOP_TYPE'] + ' ' + arOptimusOptions['THEME']['SCROLLTOTOP_POSITION']).attr({'href': '#', 'id': 'scrollToTop'}));
		$('#scrollToTop').click(function(e){
			e.preventDefault();
			$('body, html').animate({scrollTop : 0}, 500);
			return false;
		});
		// Show/Hide Button on Window Scroll event.
		$(window).scroll(function(){
			if(!_isScrolling) {
				_isScrolling = true;
				if($(window).scrollTop() > 150){
					$('#scrollToTop').stop(true, true).addClass('visible');
					_isScrolling = false;
				}
				else{
					$('#scrollToTop').stop(true, true).removeClass('visible');
					_isScrolling = false;
				}
				checkScrollToTop();
			}
		});
	}
}

checkScrollToTop = function(){
	var bottom = 55,
		scrollVal = $(window).scrollTop(),
		windowHeight = $(window).height(),
		footerOffset = 70;
	if($('footer').length)
		footerOffset = $('footer').offset().top +70;

	if(arOptimusOptions['THEME']['SCROLLTOTOP_POSITION'] == 'CONTENT'){
		warpperWidth = $('body > .wrapper > .wrapper_inner').width();
		$('#scrollToTop').css('margin-left', Math.ceil(warpperWidth / 2) + 23);
	}

	if(scrollVal + windowHeight > footerOffset){
		$('#scrollToTop').css('bottom', bottom  + scrollVal + windowHeight - footerOffset - 0);
	}
	else if(parseInt($('#scrollToTop').css('bottom')) > bottom){
		$('#scrollToTop').css('bottom', bottom);
	}
}

CheckObjectsSizes = function() {
	$('.container iframe,.container object,.container video').each(function() {
		var height_attr = $(this).attr('height');
		var width_attr = $(this).attr('width');
		if (height_attr && width_attr) {
			$(this).css('height', $(this).outerWidth() * height_attr / width_attr);
		}
	});
}

if(!funcDefined('reloadTopBasket')){
	var reloadTopBasket = function reloadTopBasket(action, basketWindow, speed, delay, slideDown, item){
		var obj={
				"PARAMS": $('#top_basket_params').val(),
				"ACTION": action
			};
		if(typeof item !== "undefined" ){
			obj.delete_top_item='Y';
			obj.delete_top_item_id=item.data('id');
		}
		$.post( arOptimusOptions['SITE_DIR']+"ajax/show_basket_popup.php", obj, $.proxy(function( data ){
			$(basketWindow).html(data);

			getActualBasket();

			if(arOptimusOptions['THEME']['SHOW_BASKET_ONADDTOCART'] !== 'N'){
				if($(window).outerWidth() > 520){
					if(slideDown=="Y")
						$(basketWindow).find('.basket_popup_wrapp').stop(true,true).slideDown(speed);
					clearTimeout(basketTimeoutSlide);
					basketTimeoutSlide = setTimeout(function() {
						var _this = $('#basket_line').find('.basket_popup_wrapp');
						if (_this.is(':hover')) {
							_this.show();
						}else{
							$('#basket_line').find('.basket_popup_wrapp').slideUp(speed);
						}
					},delay);
				}
			}
		}))
	}
}

/*countdown start*/

if(!funcDefined('initCountdown')){
	var initCountdown = function initCountdown(){
		if( $('.view_sale_block').size() ){
			$('.view_sale_block').each(function(){
				var activeTo=$(this).find('.active_to').text(),
					dateTo= new Date(activeTo.replace(/(\d+)\.(\d+)\.(\d+)/, '$3/$2/$1'));
				$(this).find('.countdown').countdown({until: dateTo, format: 'dHMS', padZeroes: true, layout: '{d<}<span class="days item">{dnn}<div class="text">{dl}</div></span>{d>} <span class="hours item">{hnn}<div class="text">{hl}</div></span> <span class="minutes item">{mnn}<div class="text">{ml}</div></span> <span class="sec item">{snn}<div class="text">{sl}</div></span>'}, $.countdown.regionalOptions['ru']);
			})
		}
	}
}

if(!funcDefined('initCountdownTime')){
	var initCountdownTime = function initCountdownTime(block, time){
		if(time)
		{
			var dateTo= new Date(time.replace(/(\d+)\.(\d+)\.(\d+)/, '$3/$2/$1'));
			block.find('.countdown').countdown('destroy');
			block.find('.countdown').countdown({until: dateTo, format: 'dHMS', padZeroes: true, layout: '{d<}<span class="days item">{dnn}<div class="text">{dl}</div></span>{d>} <span class="hours item">{hnn}<div class="text">{hl}</div></span> <span class="minutes item">{mnn}<div class="text">{ml}</div></span> <span class="sec item">{snn}<div class="text">{sl}</div></span>'}, $.countdown.regionalOptions['ru']);
			block.find('.view_sale_block').show();
		}
		else
		{
			block.find('.view_sale_block').hide();
		}
	}
}

/*countdown end*/

var isOnceInited = insertFilter = false;
var animationTime = 200;
var delayTime = 200;
var topMenuEnterTimer = false;
var isMobile = jQuery.browser.mobile;

if(isMobile){
	document.documentElement.className += ' mobile';
}

/*filter start*/
if(!funcDefined('checkVerticalMobileFilter')){
	var checkVerticalMobileFilter = function checkVerticalMobileFilter(){
		if($('.right_block1.catalog.vertical').length && !$('.left_block.filter_ajax').length)
		{
			if(typeof window['trackBarOptions'] !== 'undefined')
			{
				window['trackBarValues'] = {}
				for(key in window['trackBarOptions'])
				{
					window['trackBarValues'][key] = {
						'leftPercent': window['trackBar' + key].leftPercent,
						'leftValue': window['trackBar' + key].minInput.value,
						'rightPercent': window['trackBar' + key].rightPercent,
						'rightValue': window['trackBar' + key].maxInput.value,
					}
				}
			}

			if(window.matchMedia('(max-width: 950px)').matches)
			{
				if(!insertFilter)
				{
					$('.js_filter .bx_filter.bx_filter_vertical').html($('.left_block .bx_filter.bx_filter_vertical').html());
					$('.left_block .bx_filter.bx_filter_vertical .bx_filter_section').remove();
					insertFilter=true;
				}
			}
			else
			{
				if(insertFilter)
				{
					$('.left_block .bx_filter.bx_filter_vertical').html($('.js_filter .bx_filter.bx_filter_vertical').html());
					$('.js_filter .bx_filter.bx_filter_vertical .bx_filter_section').remove();
					insertFilter=false;
				}
			}

			if(typeof window['trackBarOptions'] !== 'undefined')
			{
				for(key in window['trackBarOptions'])
				{
					window['trackBarOptions'][key].leftPercent = window['trackBarValues'][key].leftPercent;
					window['trackBarOptions'][key].rightPercent = window['trackBarValues'][key].rightPercent;
					window['trackBarOptions'][key].curMinPrice = window['trackBarValues'][key].leftValue;
					window['trackBarOptions'][key].curMaxPrice = window['trackBarValues'][key].rightValue;
					window['trackBar' + key] = new BX.Iblock.SmartFilter(window['trackBarOptions'][key]);
					window['trackBar' + key].minInput.value = window['trackBarValues'][key].leftValue;
					window['trackBar' + key].maxInput.value = window['trackBarValues'][key].rightValue;
				}
			}
		}
		else if($('.left_block.filter_ajax').length)
		{
			var posBlock = $('.ajax_load').position();

			$('.left_block.filter_ajax .bx_filter').css('top', posBlock.top-13);
			if($('.left_block.filter_ajax .bx_filter').is(':visible') && !$('.adaptive_filter .filter_opener').hasClass('opened') && window.matchMedia('(max-width: 950px)').matches)
			{
				$('.adaptive_filter .filter_opener').addClass('opened');
			}
		}
	}
}
/*filter end*/

// TOP MENU ANIMATION
$(document).on('click', '.menu_top_block>li .more a', function(){
	$this = $(this);
	$this.parents('.dropdown').first().find('>.hidden').removeClass('hidden');
	$this.parent().addClass('hidden');
	setTimeout(function(){
		$this.parent().remove();
	}, 500);
});

$(document).on('mouseenter', '.menu_top_block.catalogfirst>li>.dropdown>li.full', function(){
	var $submenu = $(this).find('>.dropdown');

	if($submenu.length){
		if(topMenuEnterTimer){
			clearTimeout(topMenuEnterTimer);
			topMenuEnterTimer = false;
		}
	}
});

$(document).on('mouseenter', '.menu_top_block>li:not(.full)', function(){
	var $submenu = $(this).find('>.dropdown');

	if($submenu.length && !$submenu.hasClass('visible')){
		var $menu = $(this).parents('.menu');
		var $wrapmenu = $menu.parents('.wrap_menu');
		var wrapMenuWidth = $wrapmenu.actual('outerWidth');
		var wrapMenuLeft = $wrapmenu.offset().left;
		var wrapMenuRight = wrapMenuLeft + wrapMenuWidth;
		var left = wrapMenuRight - ($(this).offset().left + $submenu.actual('outerWidth'));
		if(window.matchMedia('(min-width: 951px)').matches && $(this).hasClass('catalog') && ( $('.banner_auto').hasClass('catalog_page') || $('.banner_auto').hasClass('front_page'))){
			return;
		}
		if(left < 0){
			$submenu.css({left: left + 'px'});
		}
		$submenu.stop().slideDown(animationTime, function(){
			$submenu.css({height: '', 'overflow':'visible'});
		});


		$(this).on('mouseleave', function(){
			var leaveTimer = setTimeout(function(){
				$submenu.stop().slideUp(animationTime, function(){
					$submenu.css({left: ''});
				});
			}, delayTime);

			$(this).on('mouseenter', function(){
				if(leaveTimer){
					clearTimeout(leaveTimer);
					leaveTimer = false;
				}
			});
		});
	}

});

$(document).on('mouseenter', '.menu_top_block>li .dropdown>li', function(){
	var $this = $(this);
	var $submenu = $this.find('>.dropdown');

	if($submenu.length && ((!$this.parents('.full').length && !$this.hasClass('full')) || $this.parents('.more').length)){
		var $menu = $this.parents('.menu');
		var $wrapmenu = $menu.parents('.wrap_menu');
		var arParentSubmenuForOpacity = [];
		topMenuEnterTimer = setTimeout(function(){

			var wrapMenuWidth = $wrapmenu.actual('outerWidth');
			var wrapMenuLeft = $wrapmenu.offset().left;
			var wrapMenuRight = wrapMenuLeft + wrapMenuWidth;
			var $parentSubmenu = $this.parent();
			var bToLeft = $parentSubmenu.hasClass('toleft') ? true : false;
			if(!bToLeft){
				bToLeft = $this.offset().left + $this.actual('outerWidth') + $submenu.actual('outerWidth') > wrapMenuRight;
			}
			else{
				bToLeft = $this.offset().left + $this.actual('outerWidth') - $submenu.actual('outerWidth') < wrapMenuLeft;
			}

			if(bToLeft){
				$this.find('>.dropdown').addClass('toleft').show();
			}
			else{
				$this.find('>.dropdown').removeClass('toleft').show();
			}
			var submenuLeft = $submenu.offset().left;
			var submenuRight = submenuLeft + $submenu.actual('outerWidth');

			$this.parents('.dropdown').each(function(){
				var $this = $(this);
				var leftOffset = $this.offset().left;
				var rightOffset = leftOffset + $this.actual('outerWidth');
				if(leftOffset >= submenuLeft  && leftOffset < (submenuRight - 1) || (rightOffset > (submenuLeft + 1) && rightOffset <= submenuRight)){
					arParentSubmenuForOpacity.push($this);
					$this.find('>li>a').css({opacity: '0.1'});
				}
			});
		}, delayTime);

		$this.unbind('mouseleave');
		$this.on('mouseleave', function(){
			var leaveTimer = setTimeout(function(){
				$this.find('.dropdown').removeClass('toleft').hide();
				if(arParentSubmenuForOpacity.length){
					for(i in arParentSubmenuForOpacity){
						arParentSubmenuForOpacity[i].find('>li>a').css({opacity: ''});
					}
				}
			}, delayTime);

			$this.unbind('mouseenter');
			$this.on('mouseenter', function(){
				if(leaveTimer){
					clearTimeout(leaveTimer);
					leaveTimer = false;
				}
			});
		});
	}
});

getGridSize = function(counts) {
	var counts_item=1;
		//wide
		if(window.matchMedia('(min-width: 1200px)').matches){
			counts_item=counts[0];
		}

		//large
		if(window.matchMedia('(max-width: 1200px)').matches){
			counts_item=counts[1];
		}

		//middle
		if(window.matchMedia('(max-width: 992px)').matches){
			counts_item=counts[2];
		}

		//small
		if(counts[3]){
			if(window.matchMedia('(max-width: 600px)').matches){
				counts_item=counts[3];
			}
		}

		//exsmall
		if(counts[4]){
			if(window.matchMedia('(max-width: 400px)').matches){
				counts_item=counts[4];
			}
		}
	return counts_item;
}

CheckFlexSlider = function(){
	$('.flexslider:not(.thmb)').each(function(){
		var slider = $(this);
		slider.resize();
		var counts = slider.data('flexslider').vars.counts;
		if(typeof(counts) != 'undefined'){
			var cnt = getGridSize(counts);
			var to0 = (cnt != slider.data('flexslider').vars.minItems || cnt != slider.data('flexslider').vars.maxItems || cnt != slider.data('flexslider').vars.move);
			if(to0){
				slider.data('flexslider').vars.minItems = cnt;
				slider.data('flexslider').vars.maxItems = cnt;
				slider.data('flexslider').vars.move = cnt;
				slider.flexslider(0);
				slider.resize();
				slider.resize(); // twise!
			}
		}
	});
}

InitFlexSlider = function() {
	$('.flexslider:not(.thmb):not(.flexslider-init)').each(function(){
		var slider = $(this);
		var options;
		var defaults = {
			animationLoop: false,
			controlNav: false,
			directionNav: true,
			animation: "slide"
		}
		var config = $.extend({}, defaults, options, slider.data('plugin-options'));
		if(!slider.parent().hasClass('top_slider_wrapp')){
			if(typeof(config.counts) != 'undefined' && config.direction !== 'vertical'){
				config.maxItems =  getGridSize(config.counts);
				config.minItems = getGridSize(config.counts);
				config.move = getGridSize(config.counts);
				config.itemWidth = 200;
			}

			config.after = function(slider){
				var eventdata = {slider: slider};
				BX.onCustomEvent('onSlide', [eventdata]);
			}
			config.start = function(slider){
				var eventdata = {slider: slider};
				BX.onCustomEvent('onSlideInit', [eventdata]);
			}

			config.end = function(slider){
				var eventdata = {slider: slider};
				BX.onCustomEvent('onSlideEnd', [eventdata]);
			}

			slider.flexslider(config).addClass('flexslider-init');
			if(config.controlNav)
				slider.addClass('flexslider-control-nav');
			if(config.directionNav)
				slider.addClass('flexslider-direction-nav');
		}
	});
}

InitZoomPict = function(el) {
	var block = $('.zoom_picture');
	if(typeof el !== 'undefined')
		block = el;
	if(block.length){
		var slide=block.closest('.slides');
		var zoomer = block,
			options,
			defaults = {
				zoomWidth: 200,
				zoomHeight: 200,
				adaptive: false,
				title: true,
				Xoffset: 15,

			};
		var config = $.extend({}, defaults, options, zoomer.data('plugin-options'));
			zoomer.xzoom(config);

		block.on('mouseleave', function(){
			block.data('xzoom').movezoom(event);
			/*
			if($('.xzoom-lens').length)
				block.data('xzoom').closezoom();
			*/
		})
	}
}

var arBasketAsproCounters = {}
SetActualBasketFlyCounters = function(){
	if(arBasketAsproCounters.DEFAULT == true){
		$.ajax({
			url: arOptimusOptions['SITE_DIR'] + 'ajax/basket_fly.php',
			type: 'post',
			success: function(html){
				$('#basket_line .basket_fly').addClass('loaded').html(html);
			}
		});
	}
	else{
		$('#header .basket_fly .opener .basket_count .count').attr('class', 'count' + (arBasketAsproCounters.READY.COUNT > 0 ? '' : ' empty_items')).find('.items span').text(arBasketAsproCounters.READY.COUNT)
		$('#header .basket_fly .opener .basket_count + a').attr('href', arBasketAsproCounters['READY']['HREF'])
		$('#header .basket_fly .opener .basket_count').attr('title', arBasketAsproCounters.READY.TITLE).attr('class', 'basket_count small clicked' + (arBasketAsproCounters.READY.COUNT > 0 ? '' : ' empty'))

		$('#header .basket_fly .opener .wish_count .count').attr('class', 'count' + (arBasketAsproCounters.DELAY.COUNT > 0 ? '' : ' empty_items')).find('.items span').text(arBasketAsproCounters.DELAY.COUNT)
		$('#header .basket_fly .opener .wish_count + a').attr('href', arBasketAsproCounters.DELAY.HREF)
		$('#header .basket_fly .opener .wish_count').attr('title', arBasketAsproCounters.DELAY.TITLE).attr('class', 'wish_count small clicked' + (arBasketAsproCounters.DELAY.COUNT > 0 ? '' : ' empty'))

		$('#header .basket_fly .opener .compare_count .count').attr('class', 'count' + (arBasketAsproCounters.COMPARE.COUNT > 0 ? '' : ' empty_items')).find('.items span').text(arBasketAsproCounters.COMPARE.COUNT)
		$('#header .basket_fly .opener .compare_count + a').attr('href', arBasketAsproCounters.COMPARE.HREF)

		$('#header .basket_fly .opener .user_block').attr('title', arBasketAsproCounters.PERSONAL.TITLE).find('+ a').attr('href', arBasketAsproCounters.PERSONAL.HREF)
		$('#header .basket_fly .opener .user_block .wraps_icon_block').attr('class', 'wraps_icon_block' + (arBasketAsproCounters.PERSONAL.ID > 0 ? ' user_auth' : ' user_reg') + (arBasketAsproCounters.PERSONAL.SRC ? ' w_img' : ' no_img')).attr('style', (arBasketAsproCounters.PERSONAL.SRC ? 'background:url("' + arBasketAsproCounters.PERSONAL.SRC + '") center center no-repeat;' : ''))
	}
}

/*set price item*/
if(!funcDefined('setPriceItem')){
	var setPriceItem = function setPriceItem(main_block, quantity, rewrite_price, check_quantity, is_sku){
		var old_quantity = main_block.find('.to-cart').attr('data-ratio'),
			value = (typeof rewrite_price !== 'undefined' && rewrite_price ? rewrite_price : main_block.find('.to-cart').attr('data-value')),
			currency = main_block.find('.to-cart').attr('data-currency'),
			total_block = '<div class="total_summ"><div>'+BX.message('TOTAL_SUMM_ITEM')+'<span></span></div></div>',
			price_block = main_block.find('.cost.prices'),
			check = (typeof check_quantity !== 'undefined' && check_quantity);

		if(main_block.find('.buy_block').length)
		{
			if(!main_block.find('.buy_block .total_summ').length)
				$(total_block).appendTo(main_block.find('.buy_block'))
		}
		else if(main_block.find('.counter_wrapp').length)
		{
			if(!main_block.find('.counter_wrapp .total_summ').length)
				$(total_block).appendTo(main_block.find('.counter_wrapp:first'))
		}
		if(main_block.find('.total_summ').length)
		{
			if(value && currency)
			{
				if((1 == quantity && old_quantity == quantity) || (typeof is_sku !== 'undefined' && is_sku && !check))
				{
					main_block.find('.total_summ').slideUp(200);
				}
				else
				{
					main_block.find('.total_summ span').html(BX.Currency.currencyFormat((value*quantity), currency, true));
					if(main_block.find('.total_summ').is(':hidden'))
						main_block.find('.total_summ').slideDown(200);
				}
			}
			else
				main_block.find('.total_summ').slideUp(200);
		}
	}
}

if(!funcDefined('getCurrentPrice')){
	var getCurrentPrice = function getCurrentPrice(price, currency, print_price){
		var val = '';
		var format_value = BX.Currency.currencyFormat(price, currency);
		if(print_price.indexOf(format_value) >= 0)
		{
			val = print_price.replace(format_value, '<span class="price_value">'+format_value+'</span><span class="price_currency">');
			val += '</span>';
		}
		else
		{
			val = print_price;
		}

		return val;
	}
}

$(document).ready(function(){
	//ecommerce order
	if(arOptimusOptions["PAGES"]["ORDER_PAGE"]){
		var arUrl = parseUrlQuery();
		if("ORDER_ID" in arUrl){
			var _id = arUrl["ORDER_ID"];
			if(arOptimusOptions['COUNTERS']['USE_FULLORDER_GOALS'] !== 'N'){
				var eventdata = {goal: 'goal_order_success', result: _id};
				BX.onCustomEvent('onCounterGoals', [eventdata])
			}

			if(checkCounters()){
				if(typeof BX.localStorage !== 'undefined'){
					var d = BX.localStorage.get('gtm_e_' + _id);
					if(typeof d === 'object'){
						waitLayer(100, function() {
							dataLayer.push({"event": arOptimusOptions["COUNTERS"]['GOOGLE_EVENTS']['PURCHASE'], "ecommerce": d});
						});
					}

					if(typeof localStorage !== 'undefined'){
						localStorage.removeItem('gtm_e_' + _id);
					}
				}
			}
		}
	}

	// ya.metrika debug
	if(arOptimusOptions['COUNTERS']['USE_DEBUG_GOALS'] === 'Y'){
		$.cookie('_ym_debug', 1, {path: '/',});
	}
	else{
		$.cookie('_ym_debug', null, {path: '/',});
	}

	scrollToTop();
	checkVerticalMobileFilter();
	checkFormWidth();

	if(!jQuery.browser.safari){
		setTimeout(function(){
			InitTopestMenuGummi();
			InitTopMenuGummi();
			isOnceInited = true;

			InitFlexSlider();

			// setTimeout(function() {$(window).resize();}, 150); // need to check resize flexslider & menu

			try{
				// SHOW TOP MENU ON READY AFTER GUMMI
				$('header .wrap_menu').css({overflow: 'visible'});
				$('.visible_on_ready').removeClass('visible_on_ready');
			}
			catch(e){console.error(e);}
		},100);
	}else{
		setTimeout(function(){
			$(window).resize(); // need to check resize flexslider & menu
			setTimeout(function(){
				InitTopestMenuGummi();
				InitTopMenuGummi();
				isOnceInited = true;

				InitFlexSlider();

				try{
					// SHOW TOP MENU ON READY AFTER GUMMI
					$('header .wrap_menu').css({overflow: 'visible'});
					$('.visible_on_ready').removeClass('visible_on_ready');
				}
				catch(e){console.error(e);}

				setTimeout(function(){
					$(window).scroll();
				}, 50);
			}, 50);
		}, 350);
	}

	InitZoomPict();

	$('body').on( 'click', '.captcha_reload', function(e){
		var captcha = $(this).parents('.captcha-row');
		e.preventDefault();
		$.ajax({
			url: arOptimusOptions['SITE_DIR'] + 'ajax/captcha.php'
		}).done(function(text){
			captcha.find('input[name=captcha_sid]').val(text);
			captcha.find('img').attr('src', '/bitrix/tools/captcha.php?captcha_sid=' + text);
			captcha.find('input[name=captcha_word]').val('').removeClass('error');
			captcha.find('.captcha_input').removeClass('error').find('.error').remove();
		});
	});

	setTimeout(function(){
		$('.bg_image_site').css({
			'opacity':1
		})
	},200);

	if(window.matchMedia('(min-width: 768px)').matches){
		$('.wrapper_middle_menu.wrap_menu').removeClass('mobile');
	}

	if(window.matchMedia('(max-width: 767px)').matches){
		$('.wrapper_middle_menu.wrap_menu').addClass('mobile');
	}

	setTimeout(function() {
		$(window).scroll();
	}, 400);

	$('.menu_top_block .v_bottom > a').on('click', function(e){
		if($(e.target).hasClass('toggle_block'))
			e.preventDefault();
	})
	$('.menu_top_block .v_bottom > a .toggle_block').on('click', function(e){
		$(this).closest('.v_bottom').toggleClass('opened');
		$(this).closest('.v_bottom').find('>.dropdown').slideToggle()
	})

	$(".show_props").live('click', function(){
		$(this).prev(".props_list_wrapp").stop().slideToggle(333);
		$(this).find(".char_title").toggleClass("opened");
	});

	$('.see_more').live('click', function(e) {
		e.preventDefault();
		var see_more = ($(this).is('.see_more') ? $(this) : $(this).parents('.see_more').first());
		var see_moreText = (see_more.find('> a').length ? see_more.find('> a') : see_more);
		var see_moreHiden = see_more.parent().find('> .d');
		if(see_more.hasClass('open')){
			see_moreText.text(BX.message('CATALOG_VIEW_MORE'));
			see_more.removeClass('open');
			see_moreHiden.hide();
		}
		else{
			see_moreText.text(BX.message('CATALOG_VIEW_LESS'));
			see_more.addClass('open');
			see_moreHiden.show();
		}
		return false;
	});

	$('.button.faq_button').click(function(e){
		e.preventDefault();
		$(this).toggleClass('opened');
		$('.faq_ask .form').slideToggle();
	});

	$('.staff.list .staff_section .staff_section_title a').click(function(e) {
		e.preventDefault();
		$(this).parents('.staff_section').toggleClass('opened');
		$(this).parents('.staff_section').find('.staff_section_items').stop().slideToggle(600);
		$(this).parents('.staff_section_title').find('.opener_icon').toggleClass('opened');
	});

	$('.jobs_wrapp .item .name').click(function(e) {
		$(this).closest('.item').toggleClass('opened');
		$(this).closest('.item').find('.description_wrapp').stop().slideToggle(600);
		$(this).closest('.item').find('.opener_icon').toggleClass('opened');
	});

	$('.faq.list .item .q a').live('click', function(e){
		e.preventDefault();
		$(this).parents('.item').toggleClass('opened');
		$(this).parents('.item').find('.a').stop().slideToggle();
		$(this).parents('.item').find('.q .opener_icon').toggleClass('opened');
	});

	$('.opener_icon').click(function(e) {
		e.preventDefault();
		$(this).parent().find('a').trigger('click');
	});

	$('.to-order').live('click', function(e){
		e.preventDefault();
		$("body").append("<span class='evb-toorder' style='display:none;'></span>");
		jqmEd('to-order', arOptimusOptions['FORM']['TOORDER_FORM_ID'], '.evb-toorder', '', this);
		$("body .evb-toorder").click();
		$("body .evb-toorder").remove();
	});

	$('.cheaper').live('click', function(e){
		e.preventDefault();
		$("body").append("<span class='evb-cheaper' style='display:none;'></span>");
		jqmEd('cheaper', arOptimusOptions['FORM']['CHEAPER_FORM_ID'], '.evb-cheaper', '', this);
		$("body .evb-cheaper").click();
		$("body .evb-cheaper").remove();
	});

	$('.dotdot').dotdotdot();

	$('.more_block span').live('click', function() {
		var content_offset=$('.catalog_detail .tabs_section').offset();
		$('html, body').animate({scrollTop: content_offset.top-23}, 400);
	});

	$(".counter_block:not(.basket) .plus").live("click", function(){
		if(!$(this).parents('.basket_wrapp').length){
			if($(this).parent().data("offers")!="Y"){
				var isDetailSKU2 = $(this).parents('.counter_block_wr').length;
					input = $(this).parents(".counter_block").find("input[type=text]")
					tmp_ratio = !isDetailSKU2 ? $(this).parents(".counter_wrapp").find(".to-cart").data('ratio') : $(this).parents('tr').first().find("td.buy .to-cart").data('ratio'),
					isDblQuantity = !isDetailSKU2 ? $(this).parents(".counter_wrapp").find(".to-cart").data('float_ratio') : $(this).parents('tr').first().find("td.buy .to-cart").data('float_ratio'),
					ratio=( isDblQuantity ? parseFloat(tmp_ratio) : parseInt(tmp_ratio, 10)),
					max_value='';
					currentValue = input.val();


				if(isDblQuantity)
					ratio = Math.round(ratio*arOptimusOptions.JS_ITEM_CLICK.precisionFactor)/arOptimusOptions.JS_ITEM_CLICK.precisionFactor;

				curValue = (isDblQuantity ? parseFloat(currentValue) : parseInt(currentValue, 10));

				curValue += ratio;
				if (isDblQuantity){
					curValue = Math.round(curValue*arOptimusOptions.JS_ITEM_CLICK.precisionFactor)/arOptimusOptions.JS_ITEM_CLICK.precisionFactor;
				}
				if(parseFloat($(this).data('max'))>0){
					if(input.val() <= $(this).data('max')){
						if(curValue<=$(this).data('max'))
							input.val(curValue);

						input.change();
					}
				}else{
					input.val(curValue);
					input.change();
				}
			}
		}
	});

	$(".counter_block:not(.basket) .minus").live("click", function(){
		if(!$(this).parents('.basket_wrapp').length){
			if($(this).parent().data("offers")!="Y"){
				var isDetailSKU2 = $(this).parents('.counter_block_wr').length;
					input = $(this).parents(".counter_block").find("input[type=text]")
					tmp_ratio = !isDetailSKU2 ? $(this).parents(".counter_wrapp").find(".to-cart").data('ratio') : $(this).parents('tr').first().find("td.buy .to-cart").data('ratio'),
					isDblQuantity = !isDetailSKU2 ? $(this).parents(".counter_wrapp").find(".to-cart").data('float_ratio') : $(this).parents('tr').first().find("td.buy .to-cart").data('float_ratio'),
					ratio=( isDblQuantity ? parseFloat(tmp_ratio) : parseInt(tmp_ratio, 10)),
					max_value='';
					currentValue = input.val();

				if(isDblQuantity)
					ratio = Math.round(ratio*arOptimusOptions.JS_ITEM_CLICK.precisionFactor)/arOptimusOptions.JS_ITEM_CLICK.precisionFactor;

				curValue = (isDblQuantity ? parseFloat(currentValue) : parseInt(currentValue, 10));

				curValue -= ratio;
				if (isDblQuantity){
					curValue = Math.round(curValue*arOptimusOptions.JS_ITEM_CLICK.precisionFactor)/arOptimusOptions.JS_ITEM_CLICK.precisionFactor;
				}

				if(parseFloat($(this).parents(".counter_block").find(".plus").data('max'))>0){
					if(currentValue > ratio){
						if(curValue<ratio){
							input.val(ratio);
						}else{
							input.val(curValue);
						}
						input.change();
					}
				}else{
					if(curValue > ratio){
						input.val(curValue);
					}else{
						if(ratio){
							input.val(ratio);
						}else if(currentValue > 1){
							input.val(curValue);
						}
					}
					input.change();
				}
			}
		}
	});

	$('.counter_block input[type=text]').numeric({allow:"."});
	$('.counter_block input[type=text]').live('focus', function(){
		$(this).addClass('focus');
	})
	$('.counter_block input[type=text]').live('blur', function(){
		$(this).removeClass('focus');
	})
	$('.counter_block input[type=text]').live('change', function(e){
		if(!$(this).parents('.basket_wrapp').length){
			var val = $(this).val(),
				tmp_ratio = $(this).parents(".counter_wrapp").find(".to-cart").data('ratio') ? $(this).parents(".counter_wrapp").find(".to-cart").data('ratio') : $(this).parents('tr').first().find("td.buy .to-cart").data('ratio'),
				isDblQuantity = $(this).parents(".counter_wrapp").find(".to-cart").data('float_ratio') ? $(this).parents(".counter_wrapp").find(".to-cart").data('float_ratio') : $(this).parents('tr').first().find("td.buy .to-cart").data('float_ratio'),
				ratio=( isDblQuantity ? parseFloat(tmp_ratio) : parseInt(tmp_ratio, 10)),
				diff = val % ratio;
			if(isDblQuantity)
			{
				if(Math.round(diff*arOptimusOptions.JS_ITEM_CLICK.precisionFactor)/arOptimusOptions.JS_ITEM_CLICK.precisionFactor == ratio)
					diff = 0;
			}

			if(isDblQuantity)
				ratio = Math.round(ratio*arOptimusOptions.JS_ITEM_CLICK.precisionFactor)/arOptimusOptions.JS_ITEM_CLICK.precisionFactor;

			if($(this).hasClass('focus'))
			{
				val -= diff;
				val = Math.round(val*arOptimusOptions.JS_ITEM_CLICK.precisionFactor)/arOptimusOptions.JS_ITEM_CLICK.precisionFactor;
			}

			if(parseFloat($(this).parents(".counter_block").find(".plus").data('max'))>0){
				if(val>parseFloat($(this).parents(".counter_block").find(".plus").data('max'))){
					val=parseFloat($(this).parents(".counter_block").find(".plus").data('max'));
					// val -= diff;
				}
			}

			if(val<ratio){
				val=ratio;
			}else if(!parseFloat(val)){
				val=1;
			}

			$(this).parents('.counter_block').parent().parent().find('.to-cart').attr('data-quantity', val);
			$(this).parents('.counter_block').parent().parent().find('.one_click').attr('data-quantity', val);
			$(this).val(val);
			var eventdata = {type: 'change', params: {id: $(this), value: val}};
			BX.onCustomEvent('onCounterProductAction', [eventdata]);
		}
	});

	BX.addCustomEvent('onCounterProductAction', function(eventdata) {
		if(typeof eventdata != 'object'){
			eventdata = {type: 'undefined'};
		}
		try{
			if(typeof eventdata.type != 'undefined'){
				if(!eventdata.params.id.closest('.gifts').length) // no gift
				{
					var obProduct = eventdata.params.id.data('product');
					if(typeof window[obProduct] == 'object')
					{
						window[obProduct].setPriceAction('Y');
					}
					else if(eventdata.params.id.length)
					{
						if(eventdata.params.id.closest('.main_item_wrapper').length && arOptimusOptions['THEME']['SHOW_TOTAL_SUMM'] != 'N')
						{
							setPriceItem(eventdata.params.id.closest('.main_item_wrapper'), eventdata.params.value);
						}
					}
					BX.onCustomEvent('onCounterProductActionResize');
				}
			}
		}
		catch(e){
			console.error(e)
		}
	});

	/*slide cart*/
	$(document).on('mouseenter', '#basket_line .basket_normal:not(.empty_cart):not(.bcart) .basket_block ', function() {
		$(this).closest('.basket_normal').find('.popup').addClass('block');
		$(this).closest('.basket_normal').find('.basket_popup_wrapp').stop(true,true).slideDown(150);
	});
	$(document).on('mouseleave', '#basket_line .basket_normal .basket_block ', function() {
		var th=$(this);
		$(this).closest('.basket_normal').find('.basket_popup_wrapp').stop(true,true).slideUp(150, function(){
			th.closest('.basket_normal').find('.popup').removeClass('block');
		});
	});

	$('.fast_view_block').live('click', function(){
		var _th = $(this),
			iblockid = _th.data('param-iblock_id'),
			href = _th.data('param-item_href'),
			name = _th.data('param-form_id');

		$('body').find('.'+name+'_frame').remove();
		$('body').find('.'+name+'_trigger').remove();
		$('body').append('<div class="'+name+'_frame popup"></div>');
		$('body').append('<div class="'+name+'_trigger"></div>');
		$('.'+name+'_frame').jqm({trigger: '.'+name+'_trigger', onHide: function(hash) { onHidejqm(name,hash) }, onLoad: function( hash ){ onLoadjqm( name, hash ); }, ajax: arOptimusOptions["SITE_DIR"]+'ajax/form.php?form_id=fast_view&iblock_id='+iblockid+'&item_href='+href});
		$('.'+name+'_trigger').click();
	})

	$(document).on('click', '.popup_button_basket', function(){
		var th=$(".to-cart[data-item="+$(this).data("item")+"]");

		var val = th.attr('data-quantity');

		if(!val) $val = 1;

		var tmp_props=th.data("props"),
			props='',
			part_props='',
			add_props='N',
			fill_prop={},
			iblockid = th.data('iblockid'),
			offer = th.data('offers'),
			rid='',
			basket_props='',
			item = th.attr('data-item');

		if(offer!="Y"){
			offer = "N";
		}else{
			basket_props=th.closest('.prices_tab').find('.bx_sku_props input').val();
		}
		if(tmp_props){
			props=tmp_props.split(";");
		}
		if(th.data("part_props")){
			part_props=th.data("part_props");
		}
		if(th.data("add_props")){
			add_props=th.data("add_props");
		}
		if($('.rid_item').length){
			rid=$('.rid_item').data('rid');
		}else if(th.data('rid')){
			rid=th.data('rid');
		}

		fill_prop=fillBasketPropsExt(th, 'prop', 'bx_ajax_text');

		fill_prop.quantity=val;
		fill_prop.add_item='Y';
		fill_prop.rid=rid;
		fill_prop.offers=offer;
		fill_prop.iblockID=iblockid;
		fill_prop.part_props=part_props;
		fill_prop.add_props=add_props;
		fill_prop.props=JSON.stringify(props);
		fill_prop.item=item;
		fill_prop.basket_props=basket_props;

		$.ajax({
			type:"POST",
			url:arOptimusOptions['SITE_DIR']+"ajax/item.php",
			data:fill_prop,
			dataType:"json",
			success:function(data){
				$('.basket_error_frame').jqmHide();
				if("STATUS" in data){
					getActualBasket(fill_prop.iblockID);
					if(data.STATUS === 'OK'){
						th.hide();
						th.closest('.counter_wrapp').find('.counter_block').hide();
						th.parents('tr').find('.counter_block_wr .counter_block').hide();
						th.closest('.button_block').addClass('wide');
						th.parent().find('.in-cart').show();

						addBasketCounter(item);
						$('.wish_item[data-item='+item+']').removeClass("added");
						$('.wish_item[data-item='+item+']').find(".value").show();
						$('.wish_item[data-item='+item+']').find(".value.added").hide();
						if($("#basket_line .cart").length)
						{
							if($("#basket_line .cart").is(".empty_cart"))
							{
								$("#basket_line .cart").removeClass("empty_cart").find(".cart_wrapp a.basket_link").removeAttr("href").addClass("cart-call");
								$("#basket_line .cart").removeClass("ecart");
								touchBasket('.cart:not(.empty_cart) .basket_block .link');
							}

							reloadTopBasket('add', $('#basket_line'), 200, 5000, 'Y');

						}else if($("#basket_line .basket_fly").length){
							if($(window).outerWidth()>768){
								basketFly('open');
							}else{
								basketFly('refresh');
							}
						}
					}else{
						showBasketError(BX.message(data.MESSAGE));
					}
				}else{
					showBasketError(BX.message("CATALOG_PARTIAL_BASKET_PROPERTIES_ERROR"));
				}
			}
		});
	})

	$(document).on( 'click', '.to-cart:not(.read_more)', function(e){
		e.preventDefault();
		var th=$(this);

		var val = $(this).attr('data-quantity');

		if(!val) $val = 1;

		var tmp_props=$(this).data("props"),
			props='',
			part_props='',
			add_props='N',
			fill_prop={},
			iblockid = $(this).data('iblockid'),
			offer = $(this).data('offers'),
			rid='',
			basket_props='',
			item = $(this).attr('data-item');

		if(offer!="Y"){
			offer = "N";
		}else{
			basket_props=$(this).closest('.prices_tab').find('.bx_sku_props input').val();
		}
		if(tmp_props){
			props=tmp_props.split(";");
		}
		if($(this).data("part_props")){
			part_props=$(this).data("part_props");
		}
		if($(this).data("add_props")){
			add_props=$(this).data("add_props");
		}
		if($('.rid_item').length){
			rid=$('.rid_item').data('rid');
		}else if($(this).data('rid')){
			rid=$(this).data('rid');
		}

		fill_prop=fillBasketPropsExt(th, 'prop', th.data('bakset_div'));

		fill_prop.quantity=val;
		fill_prop.add_item='Y';
		fill_prop.rid=rid;
		fill_prop.offers=offer;
		fill_prop.iblockID=iblockid;
		fill_prop.part_props=part_props;
		fill_prop.add_props=add_props;
		fill_prop.props=JSON.stringify(props);
		fill_prop.item=item;
		fill_prop.basket_props=basket_props;

		if(th.data("empty_props")=="N"){
			showBasketError($("#"+th.data("bakset_div")).html(), BX.message("ERROR_BASKET_PROP_TITLE"), "Y", th);
		}else{
			$.ajax({
				type:"POST",
				url:arOptimusOptions['SITE_DIR']+"ajax/item.php",
				data:fill_prop,
				dataType:"json",
				success:function(data){
					getActualBasket(fill_prop.iblockID);
					if(data !==null){
						if("STATUS" in data){
							if(data.MESSAGE_EXT===null)
								data.MESSAGE_EXT='';
							if(data.STATUS === 'OK'){
								/*th.hide();
								th.closest('.counter_wrapp').find('.counter_block').hide();
								th.parents('tr').find('.counter_block_wr .counter_block').hide();
								th.closest('.button_block').addClass('wide');
								th.parent().find('.in-cart').show();*/

								$('.to-cart[data-item='+item+']').hide();
								$('.to-cart[data-item='+item+']').closest('.counter_wrapp').find('.counter_block').hide();
								$('.to-cart[data-item='+item+']').parents('tr').find('.counter_block_wr .counter_block').hide();
								$('.to-cart[data-item='+item+']').closest('.button_block').addClass('wide');
								$('.to-cart[data-item='+item+']').parent().find('.in-cart').show();

								addBasketCounter(item);
								$('.wish_item[data-item='+item+']').removeClass("added");
								$('.wish_item[data-item='+item+']').find(".value").show();
								$('.wish_item[data-item='+item+']').find(".value.added").hide();
								if($("#basket_line .cart").length)
								{
									if($("#basket_line .cart").is(".empty_cart"))
									{
										$("#basket_line .cart").removeClass("empty_cart").find(".cart_wrapp a.basket_link").removeAttr("href").addClass("cart-call");
										$("#basket_line .cart").removeClass("ecart");
										touchBasket('.cart:not(.empty_cart) .basket_block .link');
									}

									reloadTopBasket('add', $('#basket_line'), 200, 5000, 'Y');

								}else if($("#basket_line .basket_fly").length){
									if($(window).outerWidth()>768){
										basketFly('open');
									}else{
										basketFly('refresh');
									}
								}
							}else{
								showBasketError(BX.message(data.MESSAGE)+' <br/>'+data.MESSAGE_EXT);
							}
						}else{
							showBasketError(BX.message("CATALOG_PARTIAL_BASKET_PROPERTIES_ERROR"));
						}
					}else{
						/*th.hide();
						th.closest('.counter_wrapp').find('.counter_block').hide();
						th.parents('tr').find('.counter_block_wr .counter_block').hide();
						th.closest('.button_block').addClass('wide');
						th.parent().find('.in-cart').show();*/

						$('.to-cart[data-item='+item+']').hide();
						$('.to-cart[data-item='+item+']').closest('.counter_wrapp').find('.counter_block').hide();
						$('.to-cart[data-item='+item+']').parents('tr').find('.counter_block_wr .counter_block').hide();
						$('.to-cart[data-item='+item+']').closest('.button_block').addClass('wide');
						$('.to-cart[data-item='+item+']').parent().find('.in-cart').show();

						addBasketCounter(item);
						$('.wish_item[data-item='+item+']').removeClass("added");
						$('.wish_item[data-item='+item+']').find(".value").show();
						$('.wish_item[data-item='+item+']').find(".value.added").hide();
						if($("#basket_line .cart").length)
						{
							if($("#basket_line .cart").is(".empty_cart"))
							{
								$("#basket_line .cart").removeClass("empty_cart").find(".cart_wrapp a.basket_link").removeAttr("href").addClass("cart-call");
								$("#basket_line .cart").removeClass("ecart");
								touchBasket('.cart:not(.empty_cart) .basket_block .link');
							}

							reloadTopBasket('add', $('#basket_line'), 200, 5000, 'Y');
						}else if($("#basket_line .basket_fly").length && $(window).outerWidth()>768){
							basketFly('open');
						}
					}
				}
			});
		}
	})

	$(document).on('click', '.to-subscribe', function(e){
		e.preventDefault();
		if($(this).is('.auth')){
			if($(this).hasClass('nsubsc'))
			{
				$("body").append("<span class='evb-subs' style='display:none;'></span>");
				jqmEd('subscribe', 'subscribe', '.evb-subs', 'id='+$(this).data('item'), this);
				$("body .evb-subs").click();
				$("body .evb-subs").remove();
			}
			else
			{
				location.href=arOptimusOptions['SITE_DIR']+'auth/?backurl='+location.pathname;
			}
		}
		else{
			var item = $(this).attr('data-item'),
				iblockid = $(this).attr('data-iblockid');
			$(this).hide();
			$(this).parent().find('.in-subscribe').show();
			$.get(arOptimusOptions['SITE_DIR'] + 'ajax/item.php?item=' + item + '&subscribe_item=Y',
				$.proxy(function(data){
					$('.wish_item[data-item=' + item + ']').removeClass('added');
					getActualBasket(iblockid);
				})
			);
		}
	})

	$(document).on('click', '.in-subscribe', function(e){
		e.preventDefault();
		var item = $(this).attr('data-item'),
			iblockid = $(this).attr('data-iblockid');;
		$(this).hide();
		$(this).parent().find('.to-subscribe').show();
		$.get(arOptimusOptions['SITE_DIR'] + 'ajax/item.php?item=' + item + '&subscribe_item=Y',
			$.proxy(function(data){
				getActualBasket(iblockid);
			})
		);
	})

	$(document).on('click', '.wish_item', function(e){
		e.preventDefault();
		var val = $(this).attr('data-quantity'),
			offer = $(this).data('offers'),
			iblockid = $(this).data('iblock'),
			tmp_props=$(this).data("props"),
			props='',
			item = $(this).attr('data-item');
			item2 = $(this).attr('data-item');
		if(!val) $val = 1;
		if(offer!="Y") offer = "N";
		if(tmp_props){
			props=tmp_props.split(";");
		}
		if(!$(this).hasClass('text')){
			if($(this).hasClass('added')){
				$(this).hide();
				$(this).closest('.wish_item_button').find('.to').show();

				$('.like_icons').each(function(){
					if($(this).find('.wish_item.text[data-item="'+item+'"]').length){
						$(this).find('.wish_item.text[data-item="'+item+'"]').removeClass('added');
						$(this).find('.wish_item.text[data-item="'+item+'"]').find('.value').show();
						$(this).find('.wish_item.text[data-item="'+item+'"]').find('.value.added').hide();
					}
					if($(this).find('.wish_item_button').length){
						$(this).find('.wish_item_button').find('.wish_item[data-item="'+item+'"]').removeClass('added');
						$(this).find('.wish_item_button').find('.wish_item[data-item="'+item+'"]').find('.value').show();
						$(this).find('.wish_item_button').find('.wish_item[data-item="'+item+'"]').find('.value.added').hide();
					}
				})
			}
			else{
				$(this).hide();
				$(this).closest('.wish_item_button').find('.in').addClass('added').show();

				$('.like_icons').each(function(){
					if($(this).find('.wish_item.text[data-item="'+item+'"]').length){
						$(this).find('.wish_item.text[data-item="'+item+'"]').addClass('added');
						$(this).find('.wish_item.text[data-item="'+item+'"]').find('.value').hide();
						$(this).find('.wish_item.text[data-item="'+item+'"]').find('.value.added').css({"display":"block"})
					}
					if($(this).find('.wish_item_button').length){
						$(this).find('.wish_item_button').find('.wish_item[data-item="'+item+'"]').addClass('added');
						$(this).find('.wish_item_button').find('.wish_item[data-item="'+item+'"]').find('.value').hide();
						$(this).find('.wish_item_button').find('.wish_item[data-item="'+item+'"]').find('.value.added').show();
					}
				})
			}
		}else{
			if(!$(this).hasClass('added')){
				$('.wish_item[data-item=' + item + ']').addClass('added');
				$('.wish_item[data-item=' + item + ']').find('.value').hide();
				$('.wish_item[data-item=' + item + ']').find('.value.added').css('display','block');

				$('.like_icons').each(function(){
					if($(this).find('.wish_item_button').length){
						$(this).find('.wish_item_button').find('.wish_item[data-item="'+item+'"]').addClass('added');
						$(this).find('.wish_item_button').find('.wish_item[data-item="'+item+'"]').find('.value').hide();
						$(this).find('.wish_item_button').find('.wish_item[data-item="'+item+'"]').find('.value.added').show();
					}
				})
			}else{
				$('.wish_item[data-item=' + item + ']').removeClass('added');
				$('.wish_item[data-item=' + item + ']').find('.value').show();
				$('.wish_item[data-item=' + item + ']').find('.value.added').hide();

				$('.like_icons').each(function(){
					if($(this).find('.wish_item_button').length){
						$(this).find('.wish_item_button').find('.wish_item[data-item="'+item+'"]').removeClass('added');
						$(this).find('.wish_item_button').find('.wish_item[data-item="'+item+'"]').find('.value').show();
						$(this).find('.wish_item_button').find('.wish_item[data-item="'+item+'"]').find('.value.added').hide();
					}
				})
			}
		}

		$('.in-cart[data-item=' + item + ']').hide();
		$('.to-cart[data-item=' + item + ']').parent().removeClass('wide');
		$('.to-cart[data-item=' + item + ']').show();
		$('.counter_block[data-item=' + item + ']').show();
		if(!$(this).closest('.module-cart').size()){
			$.ajax({
				type:"GET",
				url:arOptimusOptions['SITE_DIR']+"ajax/item.php",
				data:"item="+item2+"&quantity="+val+"&wish_item=Y"+"&offers="+offer+"&iblockID="+iblockid+"&props="+JSON.stringify(props),
				dataType:"json",
				success: function(data){
					getActualBasket(iblockid);
					if(data !==null){
						if(data.MESSAGE_EXT===null)
							data.MESSAGE_EXT='';
						if("STATUS" in data){
							if(data.STATUS === 'OK'){
								if(arOptimusOptions['COUNTERS']['USE_BASKET_GOALS'] !== 'N'){
									var eventdata = {goal: 'goal_wish_add', params: {id: item2}};
									BX.onCustomEvent('onCounterGoals', [eventdata]);
								}
								if($("#basket_line .cart").size()){
									reloadTopBasket('wish', $('#basket_line'), 200, 5000, 'N');
								}else{
									//ADDED
									$("#basket_line .basket_fly").removeClass('wish');
									$('.opener .wish_count').click();
									//basketFly('wish');
								}
							}else{
								showBasketError(BX.message(data.MESSAGE)+' <br/>'+data.MESSAGE_EXT, BX.message("ERROR_ADD_DELAY_ITEM"));
							}
						}else{
							showBasketError(BX.message(data.MESSAGE)+' <br/>'+data.MESSAGE_EXT, BX.message("ERROR_ADD_DELAY_ITEM"));
						}
					}else{
						if($("#basket_line .cart").size()){
							reloadTopBasket('wish', $('#basket_line'), 200, 5000, 'N');
						}else{
							basketFly('wish');
						}
					}
				}
			});
		}
	})

	// $('.compare_item').live('click', function(e){
	$(document).on('click', '.compare_item', function(e){
		e.preventDefault();
		var item = $(this).attr('data-item');
		var iblockID = $(this).attr('data-iblock');
		if(!$(this).hasClass('text')){
			if($(this).hasClass('added')){
				$(this).hide();
				$(this).closest('.compare_item_button').find('.to').show();

				/*sync other button*/
				$('.like_icons').each(function(){
					if($(this).find('.compare_item.text[data-item="'+item+'"]').length){
						$(this).find('.compare_item.text[data-item="'+item+'"]').removeClass('added');
						$(this).find('.compare_item.text[data-item="'+item+'"]').find('.value').show();
						$(this).find('.compare_item.text[data-item="'+item+'"]').find('.value.added').hide();
					}
					if($(this).find('.compare_item_button').length){
						$(this).find('.compare_item_button').find('.compare_item[data-item="'+item+'"]').removeClass('added');
						$(this).find('.compare_item_button').find('.compare_item[data-item="'+item+'"]').find('.value').show();
						$(this).find('.compare_item_button').find('.compare_item[data-item="'+item+'"]').find('.value.added').hide();
					}
				})
			}
			else{
				$(this).hide();
				$(this).closest('.compare_item_button').find('.in').show();

				/*sync other button*/
				$('.like_icons').each(function(){
					if($(this).find('.compare_item.text[data-item="'+item+'"]').length){
						$(this).find('.compare_item.text[data-item="'+item+'"]').addClass('added');;
						$(this).find('.compare_item.text[data-item="'+item+'"]').find('.value').hide();
						$(this).find('.compare_item.text[data-item="'+item+'"]').find('.value.added').css({"display":"block"});
					}
					if($(this).find('.compare_item_button').length){
						$(this).find('.compare_item_button').find('.compare_item[data-item="'+item+'"]').addClass('added');
						$(this).find('.compare_item_button').find('.compare_item[data-item="'+item+'"]').find('.value.added').show();
						$(this).find('.compare_item_button').find('.compare_item[data-item="'+item+'"]').find('.value').hide();
					}
				})
			}
		}else{
			if(!$(this).hasClass('added')){
				$('.compare_item[data-item=' + item + ']').addClass('added');
				$('.compare_item[data-item=' + item + ']').find('.value').hide();
				$('.compare_item[data-item=' + item + ']').find('.value.added').css('display','block');

				/*sync other button*/
				$('.like_icons').each(function(){
					if($(this).find('.compare_item_button').length){
						$(this).find('.compare_item_button').find('.compare_item[data-item="'+item+'"]').addClass('added');
						$(this).find('.compare_item_button').find('.compare_item[data-item="'+item+'"]').find('.value.added').show();
						$(this).find('.compare_item_button').find('.compare_item[data-item="'+item+'"]').find('.value').hide();
					}
				})
			}else{
				$('.compare_item[data-item=' + item + ']').removeClass('added');
				$('.compare_item[data-item=' + item + ']').find('.value').show();
				$('.compare_item[data-item=' + item + ']').find('.value.added').hide();

				/*sync other button*/
				$('.like_icons').each(function(){
					if($(this).find('.compare_item_button').length){
						$(this).find('.compare_item_button').find('.compare_item[data-item="'+item+'"]').removeClass('added');
						$(this).find('.compare_item_button').find('.compare_item[data-item="'+item+'"]').find('.value').show();
						$(this).find('.compare_item_button').find('.compare_item[data-item="'+item+'"]').find('.value.added').hide();
					}
				})
			}
		}

		$.get(arOptimusOptions['SITE_DIR'] + 'ajax/item.php?item=' + item + '&compare_item=Y&iblock_id=' + iblockID,
			$.proxy(function(data){
				getActualBasket(iblockID);
				jsAjaxUtil.InsertDataToNode(arOptimusOptions['SITE_DIR'] + 'ajax/show_compare_preview_top.php', 'compare_line', false);
				if($('#compare_fly').length){
					jsAjaxUtil.InsertDataToNode(arOptimusOptions['SITE_DIR'] + 'ajax/show_compare_preview_fly.php', 'compare_fly', false);
				}
			})
		);
	});

	$('.fancy').fancybox({
		openEffect  : 'fade',
		closeEffect : 'fade',
		nextEffect : 'fade',
		prevEffect : 'fade',
		tpl:{
			closeBtn : '<a title="'+BX.message('FANCY_CLOSE')+'" class="fancybox-item fancybox-close" href="javascript:;"></a>',
			next     : '<a title="'+BX.message('FANCY_NEXT')+'" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
			prev     : '<a title="'+BX.message('FANCY_PREV')+'" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
		},
	});

	$('.tabs>li').on('click', function(){
		if(!$(this).hasClass('active')){
			var sliderIndex = $(this).index(),
				curLiNav=$(this).closest('.top_blocks').find('.slider_navigation').find('>li:eq(' + sliderIndex + ')'),
				curLi=$(this).closest('.top_blocks').siblings('.tabs_content').find('>li:eq(' + sliderIndex + ')');
			$(this).addClass('active').addClass('cur').siblings().removeClass('active').removeClass('cur');
			curLi.addClass('cur').siblings().removeClass('cur');
			curLiNav.addClass('cur').siblings().removeClass('cur');

			//equal height
			curLi.find('.catalog_block .catalog_item_wrapp .catalog_item .item_info:visible .item-title').sliceHeight({item:'.catalog_item:visible', resize: false});
			curLi.find('.catalog_block .catalog_item_wrapp .catalog_item .item_info:visible').sliceHeight({classNull: '.footer_button', item:'.catalog_item:visible', resize: false});
			curLi.find('.catalog_block .catalog_item_wrapp .catalog_item:visible').sliceHeight({classNull: '.footer_button', item:'.catalog_item:visible', resize: false});
		}
	})

	/*search click*/
	$('.search_block .icon').on('click', function(){
		var th=$(this);
		if($(this).hasClass('open')){
			$(this).closest('.center_block').find('.search_middle_block').removeClass('active');
			$(this).removeClass('open');
			$(this).closest('.center_block').find('.search_middle_block').find('.noborder').hide();
		}else{
			setTimeout(function(){
				th.closest('.center_block').find('.search_middle_block').find('.noborder').show();
			},100);
			$(this).closest('.center_block').find('.search_middle_block').addClass('active');
			$(this).addClass('open');
		}
	})
	$(document).on('mouseenter', '.display_list .item_wrap', function(){
		$(this).prev().addClass('prev');
	});
	$(document).on('mouseleave', '.display_list .item_wrap', function(){
		$(this).prev().removeClass('prev');
	});
	$(document).on('mouseenter', '.catalog_block .item_wrap', function(){
		$(this).addClass('shadow_delay');
	});
	$(document).on('mouseleave', '.catalog_block .item_wrap', function(){
		$(this).removeClass('shadow_delay');
	});
	$(document).on('click', '.no_goods .button', function(){
		$('.bx_filter .smartfilter .bx_filter_search_reset').trigger('click');
	});

	$(document).on('click', '.ajax_load_btn', function(){
		var url=$(this).closest('.container').find('.module-pagination .flex-direction-nav .flex-next').attr('href'),
			th=$(this).find('.more_text_ajax');
		th.addClass('loading');

		$.ajax({
			url: url,
			data: {"ajax_get": "Y"},
			success: function(html){
				var new_html=$.parseHTML(html);
				th.removeClass('loading');
				if($('.display_list').length){
					$('.display_list').append(html);
				}else if($('.block_list').length){
					$('.block_list').append(html);
					touchItemBlock('.catalog_item a');
				}else if($('.module_products_list').length){
					$('.module_products_list > tbody').append(html);
				}
				setStatusButton();
				initCountdown();
				showTotalSummItem();
				BX.onCustomEvent('onAjaxSuccess');
				$('.bottom_nav').html($(html).find('.bottom_nav').html());
			}
		})
	})

	$(document).on('click', '.bx_compare .tabs-head li', function(){
		var url=$(this).find('.sortbutton').data('href');
		BX.showWait(BX("bx_catalog_compare_block"));
		$.ajax({
			url: url,
			data: {'ajax_action': 'Y'},
			success: function(html){
				history.pushState(null, null, url);
				$('#bx_catalog_compare_block').html(html);
				BX.closeWait();
			}
		})
	})
	var hoveredTrs;
	$(document).on({
		mouseover: function(e){
			var _ = $(this);
			var tbodyIndex = _.closest('tbody').index()+1; //+1 for nth-child
			var trIndex = _.index()+1; // +1 for nth-child
			hoveredTrs = $(e.delegateTarget).find('.data_table_props')
				.children(':nth-child('+tbodyIndex+')')
				.children(':nth-child('+trIndex+')').addClass('hovered');
		},
		mouseleave: function(e){
			if(hoveredTrs)
				hoveredTrs.removeClass('hovered');
		}
	}, '.bx_compare .data_table_props tbody>tr');
	$(document).on('click', '.fancy_offer', function(e){
		e.preventDefault();
		var arPict=[];
		$('.sliders .slides_block li').each(function(){
			var obImg = {};
			obImg = {
				'title': $(this).find('img').attr('alt'),
				'href': $(this).data('big')
			}
			if($(this).hasClass('current')){
				arPict.unshift(obImg);
			}else{
				arPict.push(obImg);
			}
		})
		$.fancybox(arPict, {
			openEffect  : 'fade',
			closeEffect : 'fade',
			nextEffect : 'fade',
			prevEffect : 'fade',
			type : 'image',
			tpl:{
				closeBtn : '<a title="'+BX.message('FANCY_CLOSE')+'" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next     : '<a title="'+BX.message('FANCY_NEXT')+'" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev     : '<a title="'+BX.message('FANCY_PREV')+'" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			},
		});
	})

	/*tabs*/
	$(".tabs_section .tabs-head li").live("click", function(e, s){
		if(!$(this).is(".current")){
			$(".tabs_section .tabs-head li").removeClass("current");
			$(this).addClass("current");
			$(".tabs_section ul.tabs_content li").removeClass("current");
			if($(this).attr("id") == "product_reviews_tab"){

				$(".shadow.common").hide();                                
                                if(s === "slide") {
                                    $("#reviews_content").slideDown(200, function(){});
                                    $(".tabs_section ul.tabs_content > li").not(":eq("+$(this).index()+")").find("> div + div").slideUp(200, function(){});
                                    var container = $(".tabs_section ul.tabs_content > li:eq("+$(this).index()+")");
                                    container.find("> div + div").slideDown(200, function(){
                                        container.addClass("current");
                                    });
                                }
                                else {
                                    $(".tabs_section ul.tabs_content > li:eq("+$(this).index()+")").addClass("current");
                                    $(".tabs_section ul.tabs_content > li").not(":eq("+$(this).index()+")").find("> div + div").hide();
                                    $("#for_product_reviews_tab").show();
                                    $("#reviews_content").show();
                                }                            
			}
			else {
                                $(".shadow.common").show();
                                if(s === "slide") {
                                    $(".tabs_section ul.tabs_content > li").not(":eq("+$(this).index()+")").find("> div + div").slideUp(200, function(){});
                                    var container = $(".tabs_section ul.tabs_content > li:eq("+$(this).index()+")");
                                    container.find("> div + div").slideDown(200, function(){
                                        container.addClass("current");
                                    });
                                }
                                else {                                    
                                    $("#reviews_content").hide();
                                    $(".tabs_section ul.tabs_content > li > div + div").hide();
                                    var container = $(".tabs_section ul.tabs_content > li:eq("+$(this).index()+")");
                                    container.addClass("current"); 
                                    container.find("> div + div").show();
                                }
			}
		}
                else if(s === "slide") {
                    var container = $(".tabs_section ul.tabs_content > li:eq("+$(this).index()+")");
                    container.find("> div + div").slideUp(200, function(){
                        $(".tabs_section .tabs-head li").removeClass("current");
                        $(".tabs_section ul.tabs_content li").removeClass("current");
                    });
                }
	});
        $(".tabs_section .tabs-body li .title-tab-heading").live("click", function(){
            $(".tabs_section .tabs-head li:eq("+$(this).parent("li").index()+")").trigger("click", "slide");
        });
	/*open first section slide*/
	setTimeout(function() {
		$('.jobs_wrapp .item:first .name tr').trigger('click');
	}, 300);

	$(document).on('click', '.buy_block .slide_offer', function(){
		scroll_block($('.tabs_section'));
	});
	$('.share_wrapp .text').on('click', function(){
		$(this).parent().find('.shares').fadeToggle();
	})
	$('html, body').live('mousedown', function(e) {
		e.stopPropagation();
		$('.shares').fadeOut();
		$('.search_middle_block').removeClass('active_wide');
	})
	$('.share_wrapp').find('*').live('mousedown', function(e) {
		e.stopPropagation();
	});
	$(document).on('click', '.reviews-collapse-link', function(){
		$('.reviews-reply-form').slideToggle();
	})

	initCountdown();

	/*adaptive menu start*/
	$('.menu.adaptive').on('click', function(){
		$(this).toggleClass('opened');
		if($(this).hasClass('opened')){
			$('.mobile_menu').toggleClass('opened').slideDown();
		}else{
			$('.mobile_menu').toggleClass('opened').slideUp();
		}
	});
	/*$('.mobile_menu .has-child >a').on('click', function(e){
		var parentLi=$(this).parent();
		e.preventDefault();
		parentLi.toggleClass('opened');
		parentLi.find('.dropdown').slideToggle();
	})*/

	$('.mobile_menu .has-child >div.toggle_mobile_menu').on('click', function(e){
		var parentLi=$(this).parent();
		e.preventDefault();
		parentLi.toggleClass('opened');
		parentLi.find('.dropdown').slideToggle();
	});

	$('.mobile_menu .search-input-div input').live('keyup', function(e) {
		var inputValue = $(this).val();
		$('.center_block .stitle_form input').val(inputValue);
		if(e.keyCode == 13){
			$('.center_block .stitle_form form').submit();
		}
	});

	$('.center_block .stitle_form input').live('keyup', function(e) {
		var inputValue = $(this).val();
		$('.mobile_menu .search-input-div input').val(inputValue);
		if(e.keyCode == 13){
			$('.center_block .stitle_form form').submit();
		}
	});

	$('.mobile_menu .search-button-div button').live('click', function(e) {
		e.preventDefault();
		var inputValue = $(this).parents().find('input').val();
		$('.center_block .stitle_form input').val(inputValue);
		$('.center_block .stitle_form form').submit();
	});
	/*adaptive menu end*/

	$('.btn.btn-add').on('click', function(){
		$.ajax({
			type:"GET",
			url:arOptimusOptions['SITE_DIR']+"ajax/clearBasket.php",
			success: function(data){
			}
		});
	})

	//set cookie for basket link click
	$(document).on('click', '.bx_ordercart_order_table_container .control > a, .basket-item-actions-remove, a[data-entity=basket-item-remove-delayed]', function(e){
		$.removeCookie('click_basket', {path: '/'});
		$.cookie('click_basket', 'Y', {path: '/'});
	})

	/*detail order show payments*/
	$('.sale-order-detail-payment-options-methods-info-change-link').on('click', function(){
		$(this).closest('.sale-order-detail-payment-options-methods-info').addClass('opened').siblings().addClass('opened');
	})

	/*expand/hide filter values*/
	$(document).on('click', '.expand_block', function(){
		togglePropBlock($(this));
	})

	/*touch event*/
	document.addEventListener('touchend', function(event) {
		if(!$(event.target).closest('.menu_item_l1').length){
			$('.menu .menu_item_l1 .child').css({'display':'none'});
			$('.menu_item_l1').removeClass('hover');
		}
		if(!$(event.target).closest('.basket_block').length){
			$('.basket_block .link').removeClass('hover');
			$('.basket_block .basket_popup_wrapp').slideUp();
		}
		if(!$(event.target).closest('.catalog_item').length){
			var tabsContentUnhoverHover = $('.tab:visible').attr('data-unhover') * 1;
			if(tabsContentUnhoverHover)
				$('.tab:visible').stop().animate({'height': tabsContentUnhoverHover}, 100);
			$('.tab:visible').find('.catalog_item').removeClass('hover');
			$('.tab:visible').find('.catalog_item .buttons_block').stop().fadeOut(233);
			if($('.catalog_block').length){
				$('.catalog_block').find('.catalog_item').removeClass('hover');
				//$('.catalog_block').find('.catalog_item').blur();
			}
		}
		//togglePropBlock($(event.target));

	}, false);

	//touchItemBlock('.catalog_item a');

	$(document).on('keyup', '.coupon .input_coupon input', function(){
		if($(this).val().length){
			$(this).removeClass('error');
			$(this).closest('.input_coupon').find('.error').remove();
		}else{
			$(this).addClass('error');
			$("<label class='error'>"+BX.message("INPUT_COUPON")+"</label>").insertBefore($(this));
		}
	})
	showPhoneMask('input[autocomplete=tel]');
	BX.addCustomEvent(window, "onAjaxSuccess", function(e){
		if(e != 'OK')
		{
			initSelects(document);
			// InitLabelAnimation('#bx-soa-order-form');
			InitOrderCustom();
			showPhoneMask('input[autocomplete=tel]');
			if($('#content > .catalog_detail').length){
				$('.bx_filter').remove();				
			}
                        
                        InitFlexSlider();

			if(arOptimusOptions["PAGES"]["CATALOG_PAGE"]){
				setStatusButton();
				initCountdown();
			}

			if(arOptimusOptions["PAGES"]["ORDER_PAGE"]){
				orderActions(e);
			}
		}
	});
	BX.addCustomEvent(window, "onFrameDataRequestFail", function(response){
		console.log(response);
	});
});

if(!funcDefined('togglePropBlock')){
	togglePropBlock=function(className){
		var all_props_block = className.closest('.bx_filter_parameters_box_container').find('.hidden_values');
		if(all_props_block.length && (className.hasClass('inner_text') || className.hasClass('expand_block')))
		{
			if(all_props_block.is(':visible'))
			{
				className.text(BX.message('FILTER_EXPAND_VALUES'));
				all_props_block.hide();
			}
			else
			{
				className.text(BX.message('FILTER_HIDE_VALUES'));
				all_props_block.show();
			}
		}
	}
}

if(!funcDefined('showPhoneMask')){
	showPhoneMask=function(className){
		$(className).inputmask('mask', {'mask': arOptimusOptions['THEME']['PHONE_MASK'], 'showMaskOnHover':false });
	}
}

if(!funcDefined('parseUrlQuery')){
	parseUrlQuery=function() {
	    var data = {};
	    if(location.search) {
	        var pair = (location.search.substr(1)).split('&');
	        for(var i = 0; i < pair.length; i ++) {
	            var param = pair[i].split('=');
	            data[param[0]] = param[1];
	        }
	    }
	    return data;
	}
}

if(!funcDefined('getActualBasket')){
	getActualBasket=function(iblockID){
		var data='';
		if(typeof iblockID !=="undefined"){
			data={"iblockID":iblockID}
		}
		$.ajax({
			type:"GET",
			url:arOptimusOptions['SITE_DIR']+"ajax/actualBasket.php",
			data:data,
			success: function(data){
				if(!$('.js_ajax').length)
					$('body').append('<div class="js_ajax"></div>');
				$('.js_ajax').html(data);
			}
		});
	}
}

function touchMenu(selector){
	if($(window).outerWidth()>600){
		$(selector).each(function(){
			var th=$(this);
			th.on('touchend', function(e) {
				if (th.find('.child').length && !th.hasClass('hover')) {
					e.preventDefault();
					e.stopPropagation();
					th.siblings().removeClass('hover');
					th.addClass('hover');
					$('.menu .child').css({'display':'none'});
					th.find('.child').css({'display':'block'});
				}
			})
		})
	}else{
		$(selector).off();
	}
}
function touchItemBlock(selector){
	$(selector).each(function(){
		var th=$(this),
			item=th.closest('.catalog_item');
		if(!th.closest('.best_block').length)
		{
			th.on('touchend', function(e) {
				if (!item.hasClass('hover')) {
					e.preventDefault();
					// e.stopPropagation();
					item.siblings().removeClass('hover');
					item.siblings().blur();
					item.closest('.catalog_block').find('.catalog_item').removeClass('hover');
					item.addClass('hover');
					item.addClass('touch');

					var tabsContentHover = th.closest('.tab').attr('data-hover') * 1,
						tabsContentUnhoverHover = th.closest('.tab').attr('data-unhover') * 1;

					th.closest('.tab').stop().animate({'height': tabsContentUnhoverHover}, 100);
					th.closest('.catalog_item').siblings().find('.buttons_block').stop().fadeOut(233)

					th.closest('.tab').fadeTo(100, 1);
					th.closest('.tab').stop().css({'height': tabsContentHover});
					th.closest('.catalog_item').find('.buttons_block').fadeIn(450, 'easeOutCirc');
				}
			})
		}
	})
}
function touchBasket(selector){
	if(arOptimusOptions['THEME']['SHOW_BASKET_ONADDTOCART'] !== 'N'){
		if($(window).outerWidth()>600){
			$(document).find(selector).on('touchend', function(e) {
				if ($(this).parent().find('.basket_popup_wrapp').length && !$(this).hasClass('hover')) {
					e.preventDefault();
					e.stopPropagation();
					$(this).addClass('hover');
					$(this).parent().find('.basket_popup_wrapp').slideDown();
				}
			})
		}else{
			$(selector).off();
		}
	}
}

function showTotalSummItem(popup){
	//show total summ
	if(arOptimusOptions["THEME"]["SHOW_TOTAL_SUMM"] == "ALWAYS")
	{
		var parent = 'body ';
		if(typeof popup  === 'string' && popup == 'Y')
			parent = '.popup ';
		$(parent+'.counter_wrapp .counter_block input.text').each(function(){
			var _th = $(this);

			if(_th.data('product'))
			{
				var obProduct = _th.data('product');
				if(typeof window[obProduct] == 'object')
					window[obProduct].setPriceAction('Y');
				else
					setPriceItem(_th.closest('.main_item_wrapper'), _th.val());
			}
			else
				setPriceItem(_th.closest('.main_item_wrapper'), _th.val());
		})
	}
}

function initFull(){
	initSelects(document);
	initHoverBlock(document);
	// touchItemBlock('.catalog_item a');
	// InitLabelAnimation('#bx-soa-order-form');
	InitOrderCustom();
	if(!$('html.print').length)
		checkStickyFooter();
	else
		window.print();

	showTotalSummItem();
	basketActions();
	orderActions();
}
if(!funcDefined('orderActions')){
	orderActions = function(e){
		if(arOptimusOptions["PAGES"]["ORDER_PAGE"]){
			//phone
			if($('#bx-soa-order input[autocomplete=tel]').length){
				// get property phone
				for(var i = 0;i<BX.Sale.OrderAjaxComponent.result.ORDER_PROP.properties.length;++i){
					if(BX.Sale.OrderAjaxComponent.result.ORDER_PROP.properties[i].IS_PHONE == 'Y'){
						var arPropertyPhone = BX.Sale.OrderAjaxComponent.result.ORDER_PROP.properties[i];
					}
				}

				// validate input type=tel
				if(typeof(BX.Sale.OrderAjaxComponent) !== 'undefined' && typeof(BX.Sale.OrderAjaxComponent) === 'object' && typeof(arPropertyPhone) == 'object' && arPropertyPhone){
					BX.Sale.OrderAjaxComponent.validatePhone = function(input, arProperty, fieldName)
					{
						if (!input || !arProperty)
							return [];

						var value = input.value,
							errors = [],
							name = BX.util.htmlspecialchars(arProperty.NAME),
							field = BX.message('SOA_FIELD') + ' "' + name + '"',
							re;

						if (arProperty.REQUIRED == 'Y' && value.length == 0){
							errors.push(field + ' ' + BX.message('SOA_REQUIRED'));
						}

						if(arProperty.IS_PHONE == 'Y' && value.length > 0){
							function regexpPhone(value, element, regexp){
								var re = new RegExp( regexp );
								return re.test(value);
							}

							var validPhone = regexpPhone($(input).val(), $(input), arOptimusOptions['THEME']['VALIDATE_PHONE_MASK']);

							if(!validPhone){
								errors.push(field + ' ' +BX.message('JS_FORMAT_ORDER'));
							}
						}

						return errors;
					}

					BX.Sale.OrderAjaxComponent.getValidationDataPhone = function(arProperty, propContainer){
						var data = {}, inputs;
						switch (arProperty.TYPE)
						{
							case 'STRING':
								data.action = 'blur';
								data.func = BX.delegate(function(input, fieldName){
									return this.validatePhone(input, arProperty, fieldName);
								}, this);

								inputs = propContainer.querySelectorAll('input[type=tel]');
								if ($(inputs).length)
								{
									data.inputs = inputs;
									break;
								}
						}

						return data;
					};

					BX.Sale.OrderAjaxComponent.bindValidationPhone = function(id, propContainer)
					{
						if (!this.validation.properties || !this.validation.properties[id])
							return;

						var arProperty = this.validation.properties[id],
							data = this.getValidationDataPhone(arProperty, propContainer),
							i, k;

						if (data && data.inputs && data.action)
						{
							for (i = 0; i < $(data.inputs).length; i++)
							{
								if (BX.type.isElementNode(data.inputs[i])){
									BX.bind(data.inputs[i], data.action, BX.delegate(function(){
										this.isValidProperty(data);
									}, this));
								}
								else{
									for (k = 0; k < $(data.inputs[i]).length; k++)
										BX.bind(data.inputs[i][k], data.action, BX.delegate(function(){
											this.isValidProperty(data);
										}, this));
								}
							}
						}
					};

					BX.Sale.OrderAjaxComponent.isValidPropertiesBlock = function(excludeLocation)
					{
						if (!this.options.propertyValidation)
							return [];

						var props = this.orderBlockNode.querySelectorAll('.bx-soa-customer-field[data-property-id-row]'),
							propsErrors = [],
							id, propContainer, arProperty, data, i;

						for (i = 0; i < props.length; i++)
						{
							id = props[i].getAttribute('data-property-id-row');

							if (!!excludeLocation && this.locations[id])
								continue;

							propContainer = props[i].querySelector('.soa-property-container');
							if (propContainer)
							{
								arProperty = this.validation.properties[id];
								data = this.getValidationData(arProperty, propContainer);
								dataPhone = this.getValidationDataPhone(arProperty, propContainer);
								data = $.extend({}, data, dataPhone);

								propsErrors = propsErrors.concat(this.isValidProperty(data, true));
							}
						}

						return propsErrors;
					};


					// create input type=tel
					var input = $('input[autocomplete=tel]'),
						inputHTML = input[0].outerHTML,
						value = input.val(),
						newInput = input[0].outerHTML.replace('type="text"', 'type="tel" value="'+value+'"');

					if($(input).length < 2)
					{
						input.hide();
						$(newInput).insertAfter(input);
					}
					showPhoneMask('input[autocomplete=tel][type=tel]');

					// change value input type=text when change input type=tel
					$('input[autocomplete=tel][type=tel]').on('keyup', function(){
						var $this = $(this);

						setTimeout(function(){
							var value = $this.val();
							$this.parent().find('input[autocomplete=tel][type=text]').val(value);
						}, 50);

					});

					BX.Sale.OrderAjaxComponent.bindValidationPhone(arPropertyPhone.ID, $('input[autocomplete=tel]').parent()[0]);
				}
			}

			if($('.bx-soa-cart-total').length){
				if(!$('.change_basket').length)
					$('.bx-soa-cart-total').prepend('<div class="change_basket">'+BX.message("BASKET_CHANGE_TITLE")+'<a href="'+arOptimusOptions["SITE_DIR"]+'basket/" class="change_link">'+BX.message("BASKET_CHANGE_LINK")+'</a></div>');
				if(typeof (BX.Sale.OrderAjaxComponent) == "object"){
					if(arOptimusOptions['COUNTERS']['USE_FULLORDER_GOALS'] !== 'N'){
						if(typeof BX.Sale.OrderAjaxComponent.reachgoalbegin === 'undefined'){
							BX.Sale.OrderAjaxComponent.reachgoalbegin = true;
							var eventdata = {goal: 'goal_order_begin'};
							// BX.onCustomEvent('onCounterGoals', [eventdata])
						}
					}

					if($('.bx-soa-cart-total-line-total').length && !$('.licence_block.filter').length && arOptimusOptions["THEME"]["SHOW_LICENCE"] == "Y"){
						if(typeof(e) === 'undefined')
							BX.Sale.OrderAjaxComponent.state_licence = (arOptimusOptions['THEME']['LICENCE_CHECKED'] == 'Y' ? 'checked' : '');
						$('<div class="form"><div class="licence_block filter label_block"><label data-for="licenses_order" class="hidden error">'+BX.message('JS_REQUIRED_LICENSES')+'</label><input type="checkbox" name="licenses_order" required '+BX.Sale.OrderAjaxComponent.state_licence+' value="Y"><label data-for="licenses_order" class="license">'+BX.message('LICENSES_TEXT')+'</label></div></div>').insertBefore($('#bx-soa-orderSave'));

						$('#bx-soa-orderSave, .bx-soa-cart-total-button-container').addClass('lic_condition');

						if(typeof (BX.Sale.OrderAjaxComponent.oldClickOrderSaveAction) === "undefined" && typeof (BX.Sale.OrderAjaxComponent.clickOrderSaveAction) !== 'undefined'){
							BX.Sale.OrderAjaxComponent.oldClickOrderSaveAction = BX.Sale.OrderAjaxComponent.clickOrderSaveAction;
							BX.Sale.OrderAjaxComponent.clickOrderSaveAction = function(event){
								if($('input[name="licenses_order"]').prop('checked')){
									$('.bx-soa .licence_block label.error').addClass('hidden');

									if (BX.Sale.OrderAjaxComponent.isValidForm())
									{
										if(typeof BX.Sale.OrderAjaxComponent.allowOrderSave == 'function')
											BX.Sale.OrderAjaxComponent.allowOrderSave();
										if(typeof BX.Sale.OrderAjaxComponent.doSaveAction == 'function')
											BX.Sale.OrderAjaxComponent.doSaveAction();
										else
											BX.Sale.OrderAjaxComponent.oldClickOrderSaveAction(event);
									}
								}
								else{
									$('.bx-soa .licence_block label.error').removeClass('hidden');
								}
							}
							if(BX.Sale.OrderAjaxComponent.orderSaveBlockNode.querySelector('.checkbox'))
							{
								if(typeof browser == 'object')
								{
									if('msie' in browser && browser.msie)
										$(BX.Sale.OrderAjaxComponent.orderSaveBlockNode.querySelector('.checkbox')).remove();
									else
										BX.Sale.OrderAjaxComponent.orderSaveBlockNode.querySelector('.checkbox').remove();
								}
							}
							BX.unbindAll(BX.Sale.OrderAjaxComponent.totalInfoBlockNode.querySelector('a.btn-order-save'));
							BX.unbindAll(BX.Sale.OrderAjaxComponent.mobileTotalBlockNode.querySelector('a.btn-order-save'));
							BX.unbindAll(BX.Sale.OrderAjaxComponent.orderSaveBlockNode.querySelector('a'));
							BX.bind(BX.Sale.OrderAjaxComponent.totalInfoBlockNode.querySelector('a.btn-order-save'), 'click', BX.proxy(BX.Sale.OrderAjaxComponent.clickOrderSaveAction, BX.Sale.OrderAjaxComponent));
							BX.bind(BX.Sale.OrderAjaxComponent.mobileTotalBlockNode.querySelector('a.btn-order-save'), 'click', BX.proxy(BX.Sale.OrderAjaxComponent.clickOrderSaveAction, BX.Sale.OrderAjaxComponent));
							BX.bind(BX.Sale.OrderAjaxComponent.orderSaveBlockNode.querySelector('a'), 'click', BX.proxy(BX.Sale.OrderAjaxComponent.clickOrderSaveAction, BX.Sale.OrderAjaxComponent));
						}

						$(document).on('click', '.bx-soa .licence_block label.license', function(){
							var id = $(this).data('for');
							$('.bx-soa .licence_block label.error').addClass('hidden');
							if(!$('input[name='+id+']').prop('checked')){
								$('input[name='+id+']').prop('checked', 'checked');
								BX.Sale.OrderAjaxComponent.state_licence = 'checked';
							}
							else{
								$('input[name='+id+']').prop('checked', '');
								BX.Sale.OrderAjaxComponent.state_licence = '';
							}
						})

						$(document).on('click', '.lic_condition a', function(){
							if(BX.hasClass(BX('bx-soa-order'), 'orderform--v1')){
								if(BX.Sale.OrderAjaxComponent.isValidForm())
								{
									BX.Sale.OrderAjaxComponent.animateScrollTo($('.licence_block')[0], 800, 50);
								}
							}
							else{
								var iCountErrors = BX.Sale.OrderAjaxComponent.isValidPropertiesBlock().length;
								if(!BX.Sale.OrderAjaxComponent.activeSectionId || !iCountErrors)
								{
									BX.Sale.OrderAjaxComponent.animateScrollTo($('.licence_block')[0], 800, 50);
								}
							}
						})


						/*$('.bx-soa-cart-total .licence_block label.license').on('click', function(){
							var id = $(this).data('for');
							$('.bx-soa-cart-total .licence_block label.error').addClass('hidden');
							if(!$('input[name='+id+']').prop('checked')){
								$('input[name='+id+']').prop('checked', 'checked');
								BX.Sale.OrderAjaxComponent.state_licence = 'checked';
							}
							else{
								$('input[name='+id+']').prop('checked', '');
								BX.Sale.OrderAjaxComponent.state_licence = '';
							}
						})*/
					}
					if(BX.Sale.OrderAjaxComponent.hasOwnProperty("params")){
						$('.bx-soa-cart-total .change_link').attr('href', BX.Sale.OrderAjaxComponent.params.PATH_TO_BASKET);
						if(arOptimusOptions["PRICES"]["MIN_PRICE"]){
							if(arOptimusOptions["PRICES"]["MIN_PRICE"]>Number(BX.Sale.OrderAjaxComponent.result.TOTAL.ORDER_PRICE)){
								$('<div class="fademask_ext"></div>').appendTo($('body'));
								location.href=BX.Sale.OrderAjaxComponent.params.PATH_TO_BASKET;
							}
						}
					}

					// fix hide total block
					//BX.removeClass(BX.Sale.OrderAjaxComponent.totalInfoBlockNode, 'bx-soa-cart-total-fixed');
					$(window).scroll();

					if(checkCounters() && typeof (BX.Sale.OrderAjaxComponent.oldSaveOrder) === "undefined"){
						var saveFunc = typeof (BX.Sale.OrderAjaxComponent.saveOrder) !== 'undefined' ? 'saveOrder' : 'saveOrderWithJson';
						if(typeof (BX.Sale.OrderAjaxComponent[saveFunc]) !== 'undefined'){
							BX.Sale.OrderAjaxComponent.oldSaveOrder = BX.Sale.OrderAjaxComponent[saveFunc];
							BX.Sale.OrderAjaxComponent[saveFunc] = function(result){
								var res = BX.parseJSON(result);
								if (res && res.order){
									if (!res.order.SHOW_AUTH){
										if (res.order.REDIRECT_URL && res.order.REDIRECT_URL.length && (!res.order.ERROR || BX.util.object_keys(res.order.ERROR).length < 1)){
											if((arMatch = res.order.REDIRECT_URL.match(/ORDER_ID\=[^&=]*/g)) && arMatch.length && (_id = arMatch[0].replace(/ORDER_ID\=/g, '', arMatch[0]))){
												$.ajax({
													url:arOptimusOptions['SITE_DIR']+"ajax/check_order.php",
													dataType: "json",
													type: "POST",
													data: { "ID": _id },
													success: function(id){
														if(parseInt(id)){
															purchaseCounter(parseInt(id), BX.message('FULL_ORDER'), function(d){
																if(typeof d == 'object'){
																	if(typeof BX.localStorage !== 'undefined'){
																		BX.localStorage.set('gtm_e_' + _id, d, 60);
																	}
																}
																BX.Sale.OrderAjaxComponent.oldSaveOrder(result);
															});
														}
														else{
															BX.Sale.OrderAjaxComponent.oldSaveOrder(result);
														}
													},
													error: function(){
														BX.Sale.OrderAjaxComponent.oldSaveOrder(result);
													}
												})
											}
											else{
												BX.Sale.OrderAjaxComponent.oldSaveOrder(result);
											}
										}
										else{
											BX.Sale.OrderAjaxComponent.oldSaveOrder(result);
										}
									}
									else{
										BX.Sale.OrderAjaxComponent.oldSaveOrder(result);
									}
								}
								else{
									BX.Sale.OrderAjaxComponent.oldSaveOrder(result);
								}
							}
						}
					}
				}
				$('.bx-ui-sls-quick-locations.quick-locations').on('click', function(){
					$(this).siblings().removeClass('active');
					$(this).addClass('active');
				})
			}
		}
	}
}

if(!funcDefined('basketActions')){
	basketActions = function(){
		if(arOptimusOptions["PAGES"]["BASKET_PAGE"]){
			checkMinPrice();

			//remove4Cart
			if(typeof(BX.Sale) !== 'undefined' && typeof(BX.Sale) === 'object')
			{
				if(typeof(BX.Sale.BasketComponent) !== 'undefined' && typeof(BX.Sale.BasketComponent) === 'object')
				{
					$(document).on('click', '.basket-item-actions-remove', function(){
						var basketID = $(this).closest('.basket-items-list-item-container').data('id');
						delFromBasketCounter(BX.Sale.BasketComponent.items[basketID].PRODUCT_ID);
					})
				}
			}

			if(location.hash)
			{
				var hash = location.hash.substring(1);
				if($('#basket_toolbar_button_'+hash).length)
				{
					$('#basket_toolbar_button_'+hash).trigger('click');
				}
			}

			$('.bx_sort_container').append('<div class="top_control basket_sort"><span style="display:none;" class="delete_all button grey_br transparent remove_all_basket">'+BX.message("BASKET_CLEAR_ALL_BUTTON")+'</span></div>');
			if($('.basket-items-list-header-filter').length)
			{
				$('.basket-items-list-header-filter').append('<div class="top_control basket_sort"><span style="opacity:1;" class="delete_all button grey_br transparent remove_all_basket">'+BX.message("BASKET_CLEAR_ALL_BUTTON")+'</span></div>');

				var cur_index = $('.basket-items-list-header-filter > a.active').index();
				//fix delayed
				if(cur_index == 3)
					cur_index = 2;

				if($('.basket-items-list-header-filter > a.active').data('filter') == 'all')
					cur_index = 'all';

				$('.basket-items-list-header-filter .top_control .delete_all').data("type",cur_index);

				$('.basket-items-list-header-filter > a').on('click', function() {
					var index = $(this).index();

					//fix delayed
					if(index == 3)
						index = 2;

					if($(this).data('filter') == 'all')
						index = 'all';

					$('.basket-items-list-header-filter .top_control .delete_all').data("type", index);
				});

				if(arOptimusOptions["THEME"]["SHOW_BASKET_PRINT"]=="Y"){
					$('<span class="basket_sort"><span class="basket_print button grey_br transparent">'+BX.message("BASKET_PRINT_BUTTON")+'</span></span>').insertAfter($('#pagetitle'));
				}
			}
			else
			{
				if(arOptimusOptions["THEME"]["SHOW_BASKET_PRINT"]=="Y"){
					$('.bx_sort_container .top_control').prepend('<span class="basket_print button grey_br transparent">'+BX.message("BASKET_PRINT_BUTTON")+'</span>');
				}

				var cur_index = $('.bx_sort_container a.current').index();
				$('.bx_sort_container .top_control .delete_all').data("type",cur_index);
				if($('.bx_ordercart > div:eq('+cur_index+') table tbody tr td.item').length)
					$('.bx_sort_container .top_control .delete_all').css('display','block');

				$('.bx_ordercart .bx_ordercart_coupon #coupon').wrap('<div class="input"></div>');

				$('.bx_sort_container > a').on('click', function() {
					var index = $(this).index();
					$('.bx_sort_container .top_control .delete_all').data("type", index);

					if($('.bx_ordercart > div:eq('+index+') table tbody tr td.item').length)
						$('.bx_sort_container .top_control .delete_all').css('display','block');
					else
						$('.bx_sort_container .top_control .delete_all').css('display','none');
				});
			}

			$('.basket_print').on('click', function() {
				 // window.open(location.pathname+"?print=Y",'_blank');
				 window.print();
			});

			$('.delete_all').on('click', function() {
				if(arOptimusOptions['COUNTERS']['USE_BASKET_GOALS'] !== 'N'){
					var eventdata = {goal: 'goal_basket_clear', params: {type: $(this).data('type')}};
					BX.onCustomEvent('onCounterGoals', [eventdata]);
				}
				$.post( arOptimusOptions['SITE_DIR']+"ajax/action_basket.php", "TYPE="+$(this).data('type')+"&CLEAR_ALL=Y", $.proxy(function( data ) {
					location.reload();
				}));
			});

			$('.bx_item_list_section .bx_catalog_item').sliceHeight({row:'.bx_item_list_slide', item:'.bx_catalog_item'});

			$(document).on('click', '.bx_ordercart_order_pay_center .checkout, .basket-checkout-section-inner .basket-btn-checkout', function(){
				if(checkCounters('google')){
					checkoutCounter(1, 'start order');
				}
			})

			BX.addCustomEvent('onAjaxSuccess', function() {
				checkMinPrice();

				var errorText = $.trim($('#warning_message').text());
				$('#basket_items_list .error_text').detach();
				if (errorText != '') {
					$('#warning_message').hide().text('');
					$('#basket_items_list').prepend('<div class="error_text">' +errorText+ '</div>');
				}
			});
		}
	}
}

if(!funcDefined('checkMinPrice')){
	checkMinPrice = function(){
		if(arOptimusOptions["PAGES"]["BASKET_PAGE"]){
			var summ_raw=0,
				summ=0;
			if($('#allSum_FORMATED').length)
			{
				summ_raw=$('#allSum_FORMATED').text().replace(/[^0-9\.,]/g,'');
				summ=parseFloat(summ_raw);
				if($('#basket_items').length)
				{
					var summ = 0;
					$('#basket_items tr').each(function(){
						if(typeof ($(this).data('item-price')) !== 'undefined' && $(this).data('item-price'))
							summ += $(this).data('item-price')*$(this).find('#QUANTITY_INPUT_'+$(this).attr('id')).val();
					})
				}
				if(!$('.catalog_back').length)
					$('.bx_ordercart_order_pay_center').prepend('<a href="'+arOptimusOptions["PAGES"]["CATALOG_PAGE_URL"]+'" class="catalog_back button transparent big_btn grey_br">'+BX.message("BASKET_CONTINUE_BUTTON")+'</a>');
			}

			if(arOptimusOptions["THEME"]["SHOW_ONECLICKBUY_ON_BASKET_PAGE"] == "Y")
				$('.basket-coupon-section').addClass('smallest');

			if(typeof BX.Sale !== "undefined")
			{
				if(typeof BX.Sale.BasketComponent !== "undefined" && ('result' in BX.Sale.BasketComponent))
					summ = BX.Sale.BasketComponent.result.allSum;
			}

			if(arOptimusOptions["PRICES"]["MIN_PRICE"]){
				if(arOptimusOptions["PRICES"]["MIN_PRICE"]>summ){
					if($('.oneclickbuy.fast_order').length)
						$('.oneclickbuy.fast_order').remove();

					if($('.basket-checkout-container').length)
					{
						if(!$('.icon_error_wrapper').length){
							$('.basket-checkout-block.basket-checkout-block-btn').html('<div class="icon_error_wrapper"><div class="icon_error_block">'+BX.message("MIN_ORDER_PRICE_TEXT").replace("#PRICE#", jsPriceFormat(arOptimusOptions["PRICES"]["MIN_PRICE"]))+'</div></div>');
						}
					}
					else
					{
						if(!$('.icon_error_wrapper').length){
							$('.bx_ordercart_order_pay_center').prepend('<div class="icon_error_wrapper"><div class="icon_error_block">'+BX.message("MIN_ORDER_PRICE_TEXT").replace("#PRICE#", jsPriceFormat(arOptimusOptions["PRICES"]["MIN_PRICE"]))+'</div></div>');
						}
						if($('.bx_ordercart_order_pay .checkout').length)
							$('.bx_ordercart_order_pay .checkout').remove();
					}
				}else{
					if($('.icon_error_wrapper').length)
						$('.icon_error_wrapper').remove();

					if($('.basket-checkout-container').length)
					{
						if(!$('.oneclickbuy.fast_order').length && arOptimusOptions["THEME"]["SHOW_ONECLICKBUY_ON_BASKET_PAGE"] == "Y" && !$('.basket-btn-checkout.disabled').length)
							$('.basket-checkout-section-inner').append('<div class="fastorder"><span class="oneclickbuy button big_btn fast_order" onclick="oneClickBuyBasket()">'+BX.message("BASKET_QUICK_ORDER_BUTTON")+'</span></div>');
					}
					else
					{
						if($('.bx_ordercart_order_pay .checkout').length)
							$('.bx_ordercart .bx_ordercart_order_pay .checkout').css('opacity','1');
						else
							$('.bx_ordercart_order_pay_center').append('<a href="javascript:void(0)" onclick="checkOut();" class="checkout" style="opacity: 1;">'+BX.message("BASKET_ORDER_BUTTON")+'</a>');
						if(!$('.oneclickbuy.fast_order').length && arOptimusOptions["THEME"]["SHOW_ONECLICKBUY_ON_BASKET_PAGE"] == "Y")
							$('.bx_ordercart_order_pay_center').append('<span class="oneclickbuy button big_btn fast_order" onclick="oneClickBuyBasket()">'+BX.message("BASKET_QUICK_ORDER_BUTTON")+'</span>');
					}

				}
			}else{
				if($('.basket-checkout-container').length)
				{
					if(!$('.oneclickbuy.fast_order').length && arOptimusOptions["THEME"]["SHOW_ONECLICKBUY_ON_BASKET_PAGE"] == "Y" && !$('.basket-btn-checkout.disabled').length)
						$('.basket-checkout-section-inner').append('<div class="fastorder"><span class="oneclickbuy button big_btn fast_order" onclick="oneClickBuyBasket()">'+BX.message("BASKET_QUICK_ORDER_BUTTON")+'</span></div>');
				}
				else
				{
					$('.bx_ordercart .bx_ordercart_order_pay .checkout').css('opacity','1');
					if(!$('.oneclickbuy.fast_order').length && arOptimusOptions["THEME"]["SHOW_ONECLICKBUY_ON_BASKET_PAGE"] == "Y")
						$('.bx_ordercart_order_pay_center').append('<span class="oneclickbuy button big_btn fast_order" onclick="oneClickBuyBasket()">'+BX.message("BASKET_QUICK_ORDER_BUTTON")+'</span>');
				}
			}
			$('#basket-root .basket-checkout-container').addClass('visible');
		}
	}
}

var isFrameDataReceived = false;
if (typeof window.frameCacheVars !== "undefined"){
	BX.addCustomEvent("onFrameDataReceived", function (json){
		initFull();
		isFrameDataReceived = true;
	});
}else{
	$( document ).ready(initFull);
}

if(!funcDefined('setHeightBlockSlider')){
	setHeightBlockSlider = function(){
		var sliderWidth = $(document).find('.specials.tab_slider_wrapp').outerWidth();

		$(document).find('.specials.tab_slider_wrapp .tabs_content > li.cur').css('height', '');
		$(document).find('.specials.tab_slider_wrapp .tabs_content .tab.cur .tabs_slider .buttons_block').hide();
		$(document).find('.specials.tab_slider_wrapp .tabs_content > li.cur').equalize({children: '.item-title'});
		$(document).find('.specials.tab_slider_wrapp .tabs_content > li.cur').equalize({children: '.item_info'});
		$(document).find('.specials.tab_slider_wrapp .tabs_content > li.cur').equalize({children: '.catalog_item'});
		var itemsButtonsHeight = $(document).find('.specials.tab_slider_wrapp .tabs_content .tab.cur .tabs_slider li .buttons_block').height();
		var tabsContentUnhover = $(document).find('.specials.tab_slider_wrapp .tabs_content .tab.cur').height() * 1;
		var tabsContentHover = tabsContentUnhover + itemsButtonsHeight+50;
		$(document).find('.specials.tab_slider_wrapp .tabs_content .tab.cur').attr('data-unhover', tabsContentUnhover);
		$(document).find('.specials.tab_slider_wrapp .tabs_content .tab.cur').attr('data-hover', tabsContentHover);
		$(document).find('.specials.tab_slider_wrapp .tabs_content').height(tabsContentUnhover);
	}
}

if(!funcDefined('checkStickyFooter')){
	checkStickyFooter = function() {
		try{
			ignoreResize.push(true);
			$('#content').css('min-height', '');
			var contentTop = 0;
			if($('#content').length)
				contentTop = $('#content').offset().top;

			var contentBottom = contentTop + $('#content').outerHeight();

			var footerTop = 0;
			if($('footer').length)
				footerTop = $('footer').offset().top;

			$('#content').css('min-height', $(window).height() - contentTop - (footerTop - contentBottom) - $('footer').outerHeight() + 'px');
			ignoreResize.pop();
		}
		catch(e){console.error(e);}
	}
}

/* EVENTS */
var timerResize = false, ignoreResize = [];
$(window).resize(function(){
	if(!$('html.print').length)
		checkStickyFooter();

	// here immediate functions
	if(!ignoreResize.length){
		if(timerResize){
			clearTimeout(timerResize);
			timerResize = false;
		}
		timerResize = setTimeout(function(){
			// here delayed functions in event
			BX.onCustomEvent('onWindowResize', false);
		}, 50);
	}
});

var timerScroll = false, ignoreScroll = [], documentScrollTopLast = $(document).scrollTop();
$(window).scroll(function(){
	// here immediate functions
	documentScrollTopLast = $(document).scrollTop();
	if(!ignoreScroll.length){
		if(timerScroll){
			clearTimeout(timerScroll);
			timerScroll = false;
		}
		timerScroll = setTimeout(function(){
			// here delayed functions in event
			BX.onCustomEvent('onWindowScroll', false);
		}, 50);
	}
});

BX.addCustomEvent('onWindowResize', function(eventdata){
	try{
		ignoreResize.push(true);

		// CheckTopMenuFullCatalogSubmenu();

		checkScrollToTop();
		checkPopupWidth();
		checkCaptchaWidth();
		checkFormWidth();
		checkFormControlWidth();
		touchMenu('ul.menu:not(.opened) > li.menu_item_l1');
		touchBasket('.cart:not(.empty_cart) .basket_block .link');
		CheckObjectsSizes();
		checkMobileFilter();

		CheckFlexSlider();
		// InitZoomPict();
		initSly();

		if(window.matchMedia('(min-width: 767px)').matches){
			$('.wrapper_middle_menu.wrap_menu').removeClass('mobile');
		}
		if(window.matchMedia('(max-width: 767px)').matches){
			$('.wrapper_middle_menu.wrap_menu').addClass('mobile');
		}

		if($(window).outerWidth()>600){
			$("#header ul.menu").removeClass("opened").css("display", "");

			if($(".authorization-cols").length){
				$('.authorization-cols').equalize({children: '.col .auth-title', reset: true});
				$('.authorization-cols').equalize({children: '.col .form-block', reset: true});
			}
		} else {
			$('.authorization-cols .auth-title').css("height", "");
			$('.authorization-cols .form-block').css("height", "");
		}


		if($("#basket_form").length && $(window).outerWidth()<=600){
			$("#basket_form .tabs_content.basket > li.cur td").each(function() { $(this).css("width","");});
		}

		if($(".front_slider_wrapp").length){
			$(".extended_pagination li i").each(function(){
				$(this).css({"borderBottomWidth": ($(this).parent("li").outerHeight()/2), "borderTopWidth": ($(this).parent("li").outerHeight()/2)});
			});
		}

		setHeightCompany();
		$(".bx_filter_section .bx_filter_select_container").each(function(){
			var prop_id=$(this).closest('.bx_filter_parameters_box').attr('property_id');
			if($('#smartFilterDropDown'+prop_id).length){
				$('#smartFilterDropDown'+prop_id).css("max-width", $(this).width());
			}
		})
		setTimeout(function(){
			checkVerticalMobileFilter();
		}, 100);
	}
	catch(e){}
	finally{
		ignoreResize.pop();
	}
});

BX.addCustomEvent('onWindowScroll', function(eventdata){
	try{
		ignoreScroll.push(true);
	}
	catch(e){}
	finally{
		ignoreScroll.pop();
	}
});

BX.addCustomEvent('onSlideInit', function(eventdata) {
	try{
		ignoreResize.push(true);
		if(eventdata){
			var slider = eventdata.slider;
			if(slider){
				if(slider.hasClass('viewed'))
				{
					$('.viewed_block .rows_block .item .item-title').sliceHeight({outer:true, slice:8, autoslicecount:false});
					$('.viewed_block .rows_block .item').sliceHeight({slice:8, autoslicecount:false});
				}

			}
		}
	}
	catch(e){}
	finally{
		ignoreResize.pop();
	}
});

BX.addCustomEvent('onCounterGoals', function(eventdata){
	if(arOptimusOptions['COUNTERS']['USE_YA_COUNTER'] === 'Y'){
		var idCounter = arOptimusOptions['COUNTERS']['YA_COUNTER_ID'];
		idCounter = parseInt(idCounter);

		if(typeof eventdata != 'object'){
			eventdata = {goal: 'undefined'};
		}
		if(typeof eventdata.goal != 'string'){
			eventdata.goal = 'undefined';
		}

		if(idCounter){
			try{
				waitCounter(idCounter, 50, function(){
					var obCounter = window['yaCounter' + idCounter];
					if(typeof obCounter == 'object'){
						obCounter.reachGoal(eventdata.goal);
					}
				});
			}
			catch(e){
				console.error(e)
			}
		}
		else{
			console.info('Bad counter id!', idCounter);
		}
	}
})

var onCaptchaVerifyinvisible = function(response){
	$('.g-recaptcha:last').each(function(){
		var id = $(this).attr('data-widgetid');
		if(typeof(id) !== 'undefined' && response){
			if(!$(this).closest('form').find('.g-recaptcha-response').val())
				$(this).closest('form').find('.g-recaptcha-response').val(response)
			if($('iframe[src*=recaptcha]').length)
			{
				$('iframe[src*=recaptcha]').each(function(){
					var block = $(this).parent().parent();
					if(!block.hasClass('grecaptcha-badge'))
						block.remove();
				})
			}
			$(this).closest('form').submit();
		}
	})
}

var onCaptchaVerifynormal = function(response){
	$('.g-recaptcha').each(function(){
		var id = $(this).attr('data-widgetid');
		if(typeof(id) !== 'undefined'){
			if(grecaptcha.getResponse(id) != ''){
				$(this).closest('form').find('.recaptcha').valid();
			}
		}
	});
}

BX.addCustomEvent('onSubmitForm', function(eventdata){
	try{
		if(!window.renderRecaptchaById || !window.asproRecaptcha || !window.asproRecaptcha.key)
		{
			eventdata.form.submit();
			$(eventdata.form).closest('.form').addClass('sending');
			return true;
		}
		if(window.asproRecaptcha.params.recaptchaSize == 'invisible' && typeof grecaptcha != 'undefined')
		{
			if($(eventdata.form).find('.g-recaptcha-response').val())
			{
				eventdata.form.submit();
				$(eventdata.form).closest('.form').addClass('sending');
			}
			else
			{
				grecaptcha.execute($(eventdata.form).find('.g-recaptcha').data('widgetid'));
			}
		}
		else
		{
			eventdata.form.submit();
			$(eventdata.form).closest('.form').addClass('sending');
		}

		return true;
	}catch (e){
		console.error(e);
		return true;
	}
})

$(document).ready(function(){
	/*  --- Bind mobile filter  --- */
	var $mobilefilter = $("#mobilefilter");
	var $mobileMenu = $("#mobilemenu, #mobileheadersimple");
	if($mobilefilter.length && window.matchMedia('(max-width: 768px)').matches){
	    $mobilefilter.isOpen = $mobileMenu.hasClass('show');
	    $mobilefilter.isAppendLeft = false;
	    $mobilefilter.isWrapFilter = false;
	    $mobilefilter.isHorizontalOrCompact = $('.filter_horizontal').length || $('.bx_filter_vertical.compact').length;
	    $mobilefilter.close = '<i class="svg svg-close close-icons"></i>';

	    $(document).on('click', '.filter_opener', function(){
	        OpenMobileFilter();
	    });

	    $(document).on('click', '#mobilefilter .svg-close.close-icons', function(){
	        CloseMobileFilter();
	    });

	    $(document).on('click', '.bx_filter_select_block', function(e){
	        var bx_filter_select_container = $(e.target).parents('.bx_filter_select_container');
	        if(bx_filter_select_container.length) {
	            var prop_id = bx_filter_select_container.closest('.bx_filter_parameters_box').attr('data-property_id');
	            if($('#smartFilterDropDown'+prop_id).length){
					$('#smartFilterDropDown'+prop_id).css({"max-width":bx_filter_select_container.width(), "z-index":"3020"});
	            }
	        }
	    });

	    $(document).on('mouseup', '.bx_filter_section', function(e){
	        if($(e.target).hasClass('bx_filter_search_button')) {
	            CloseMobileFilter();
	        }
	    });


	    $(document).on('mouseup', '.bx_filter_parameters_box_title', function(e){
	        $("[id^='smartFilterDropDown']").hide();
	        if($(e.target).hasClass('close-icons')) {
	            CloseMobileFilter();
	        }
	    });

	    $mobilefilter.parent().append('<div id="mobilefilter-overlay"></div>');
	    var $mobilefilterOverlay = $('#mobilefilter-overlay');

	    $mobilefilterOverlay.click(function(){
	        if($mobilefilter.isOpen){
	            CloseMobileFilter();
	            //e.stopPropagation();
	        }
	    });

	    mobileFilterNum = function(num, def){
	        if(def){
	            $('.bx_filter_search_button').val(num.data("f"));;
	        }
	        else {
	            var str = "";
	            var $prosLeng = $('.bx_filter_parameters_box > span');

	            str += $prosLeng.data("f") + " " + num + " " + declOfNumFilter(num, [$prosLeng.data("fi"), $prosLeng.data("fr"), $prosLeng.data("frm"),]);
	            $('.bx_filter_search_button').val(str);
	        }
	    }

	    declOfNumFilter = function(number, titles){
	        cases = [2, 0, 1, 1, 1, 2];
	        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
	    }

	    OpenMobileFilter = function(){
	        if(!$mobilefilter.isOpen){
	            if(!$mobilefilter.isAppendLeft){
	                if(!$mobilefilter.isWrapFilter){
	                    $(".bx_filter").wrap("<div id='wrapInlineFilter'></div>");
	                    $mobilefilter.isWrapFilter = true;
	                }
	                $(".bx_filter").css('top', '');
	                $(".bx_filter").appendTo($("#mobilefilter")).find('.title .bx_filter_parameters_box_title').append($mobilefilter.close);
	                $mobilefilter.isAppendLeft = true;
	            }

	            // show overlay
	            setTimeout(function(){
					$mobilefilterOverlay.fadeIn('fast');
	            }, 100);

	            // fix body
	            $('body').css({'overflow-y':'hidden'});

	            // show mobile filter
	            $mobilefilter.addClass('show');
	            $mobilefilter.find('.bx_filter').css({'display':'block'});
	            $mobilefilter.isOpen = true;

	            var init =  $mobilefilter.data('init');
	            if(typeof init === 'undefined'){
	                $mobilefilter.scroll(function() {
	                    $(".bx_filter_section .bx_filter_select_container").each(function(){
	                        var prop_id=$(this).closest('.bx_filter_parameters_box').attr('data-property_id');
	                        if($('#smartFilterDropDown'+prop_id).length){
	                            $('#smartFilterDropDown'+prop_id).hide();
	                        }
	                    });
	                });

	                $mobilefilter.data('init', "Y");
	            };
	        };
	    }

	    CloseMobileFilter = function(append){
	    	$('.bx_filter').css('display', '');
	        if($mobilefilter.isOpen){
	        	// scroll to top
	            $mobilefilter.find('.bx_filter_parameters').scrollTop(0);

	            // unfix body
	            $('body').css({'overflow-y':'auto'});

	            // hide overlay
	            setTimeout(function(){
					$mobilefilterOverlay.fadeOut('fast');
	            }, 100);

	            // hide mobile filter
	            $mobilefilter.removeClass('show');
	            $mobilefilter.isOpen = false;
	        }

	        if(append && $mobilefilter.isAppendLeft){
	            $(".bx_filter").appendTo($("#wrapInlineFilter")).show().find('.svg-close').remove();
	            $mobilefilter.isAppendLeft = false;
	            $mobilefilter.removeData('init');
	            mobileFilterNum($("#modef_num_mobile"),true);
	        }
	    }

	    checkMobileFilter = function(){
	        if((!window.matchMedia('(max-width: 991px)').matches && !$mobilefilter.isHorizontalOrCompact) || (!window.matchMedia('(max-width: 767px)').matches && $mobilefilter.isHorizontalOrCompact)){
	            CloseMobileFilter(true);
			}
	    }
	}
	else {
	    checkVerticalMobileFilter();
	    $(document).on('click', '.filter_opener', function(){
			$(this).toggleClass("opened");
			if($('.visible_mobile_filter').length) {
				$('.visible_mobile_filter').show();
				$('.bx_filter_vertical, .bx_filter').slideToggle(333);
			}
			else{
				$('.bx_filter_vertical').closest('div[id^=bx_incl]').show();
			    $('.bx_filter_vertical, .bx_filter').slideToggle(333);
			}
	    });
	}
	/*  --- END Bind mobile filter  --- */
});


/*custom event for sku prices*/

/*BX.addCustomEvent('onAsproSkuSetPrice', function(eventdata){
	console.log(eventdata);
})*/

/*BX.addCustomEvent('onAsproSkuSetPriceMatrix', function(eventdata){
	console.log(eventdata);
})*/


InitScrollBar= function(el, initOptions) {
	var block = $('.scrollbar:not(.mobile-scroll)');
	if(typeof el !== 'undefined')
		block = el;
	if(block.length)
	{
		var options,
			defaults = {
				mouseWheel: {
					scrollAmount: 150,
					preventDefault: true
				}
			};
		var config = $.extend({}, defaults, options, block.data('plugin-options'), initOptions);

		config.callbacks = {
			onScroll:function(){
				if($(this).find('.mCSB_buttonLeft').hasClass('disabled'))
					$(this).find('.mCSB_buttonLeft').removeClass('disabled');
				if($(this).find('.mCSB_buttonRight').hasClass('disabled'))
					$(this).find('.mCSB_buttonRight').removeClass('disabled');
			},
			onTotalScrollBack:function(){
				$(this).find('.mCSB_buttonLeft').addClass('disabled');
			},
			onTotalScroll:function(){
				$(this).find('.mCSB_buttonRight').addClass('disabled');
			},
			onInit:function(){
				$(this).find('.mCSB_buttonLeft').addClass('disabled');
			}
		};
		block.mCustomScrollbar(config);
	}
}


AjaxClickLink = function(e){
	var _this = '',
		container = $('#right_block_ajax .inner_wrapper'),
		container_inner = container.find('.ajax_load'),
		dopAction = '';
		url = '';
		if('preventDefault' in e)
		{
			e.preventDefault();
			_this = ($(e.target).hasClass('js-load-link') ? $(e.target) : $(e.target).closest('.js-load-link'))
		}
		else
		{
			_this = $(e);
			dopAction = 'Y';
		}

	if(container.length)
	{
		var objUrl = parseUrlQuery(),
			obGetData = {"ajax_get_filter": "Y", "control_ajax": "Y"};

		obGetData.bitrix_include_areas = 'N';

		if('clear_cache' in objUrl)
		{
			if(objUrl.clear_cache == 'Y')
			{
				obGetData.clear_cache = 'Y';
			}
		}

		if(container_inner.length)
			container_inner.addClass('loading-state');
		else
			container.addClass('loading-state');

		if(_this.data('url'))
			url = _this.data('url');

		if(dopAction)
		{
			BX.PopupWindowManager.getCurrentPopup().close();
			$('.bx_filter_select_popup ul li .sort_btn').removeClass('current');
			_this.addClass('current');
			_this.closest('.bx_filter_block').find('.bx_filter_select_text').text(_this.text());
		}

		$('.bx_filter .bx_sort_filter .bx_filter_select_text').text(_this.text());
		$('.bx_filter .bx_sort_filter .bx_filter_select_popup ul li span.current').removeClass('current');
		$('.bx_filter .bx_sort_filter .bx_filter_select_popup ul li').eq(_this.parent().index()).find('span').addClass('current');

		$.ajax({
			url: url,
			data: obGetData,
			success: function(html){
				container.html(html);

				if(container_inner.length)
					container_inner.removeClass('loading-state');
				else
					container.removeClass('loading-state');

				var eventdata = {action: 'jsLoadBlock'}
				BX.onCustomEvent('onCompleteAction', [eventdata, _this]);

				initCountdown();
				InitScrollBar();

			}
		})

	}
}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:67:"/bitrix/components/bitrix/search.title/script.min.js?15898050836443";s:6:"source";s:48:"/bitrix/components/bitrix/search.title/script.js";s:3:"min";s:52:"/bitrix/components/bitrix/search.title/script.min.js";s:3:"map";s:52:"/bitrix/components/bitrix/search.title/script.map.js";}"*/
function JCTitleSearch(t){var e=this;this.arParams={AJAX_PAGE:t.AJAX_PAGE,CONTAINER_ID:t.CONTAINER_ID,INPUT_ID:t.INPUT_ID,MIN_QUERY_LEN:parseInt(t.MIN_QUERY_LEN)};if(t.WAIT_IMAGE)this.arParams.WAIT_IMAGE=t.WAIT_IMAGE;if(t.MIN_QUERY_LEN<=0)t.MIN_QUERY_LEN=1;this.cache=[];this.cache_key=null;this.startText="";this.running=false;this.runningCall=false;this.currentRow=-1;this.RESULT=null;this.CONTAINER=null;this.INPUT=null;this.WAIT=null;this.ShowResult=function(t){if(BX.type.isString(t)){e.RESULT.innerHTML=t}e.RESULT.style.display=e.RESULT.innerHTML!==""?"block":"none";var s=e.adjustResultNode();var i;var n;var l=BX.findChild(e.RESULT,{tag:"table",class:"title-search-result"},true);if(l){n=BX.findChild(l,{tag:"th"},true)}if(n){var r=BX.pos(l);r.width=r.right-r.left;var a=BX.pos(n);a.width=a.right-a.left;n.style.width=a.width+"px";e.RESULT.style.width=s.width+a.width+"px";e.RESULT.style.left=s.left-a.width-1+"px";if(r.width-a.width>s.width)e.RESULT.style.width=s.width+a.width-1+"px";r=BX.pos(l);i=BX.pos(e.RESULT);if(i.right>r.right){e.RESULT.style.width=r.right-r.left+"px"}}var o;if(l)o=BX.findChild(e.RESULT,{class:"title-search-fader"},true);if(o&&n){i=BX.pos(e.RESULT);o.style.left=i.right-i.left-18+"px";o.style.width=18+"px";o.style.top=0+"px";o.style.height=i.bottom-i.top+"px";o.style.display="block"}};this.onKeyPress=function(t){var s=BX.findChild(e.RESULT,{tag:"table",class:"title-search-result"},true);if(!s)return false;var i;var n=s.rows.length;switch(t){case 27:e.RESULT.style.display="none";e.currentRow=-1;e.UnSelectAll();return true;case 40:if(e.RESULT.style.display=="none")e.RESULT.style.display="block";var l=-1;for(i=0;i<n;i++){if(!BX.findChild(s.rows[i],{class:"title-search-separator"},true)){if(l==-1)l=i;if(e.currentRow<i){e.currentRow=i;break}else if(s.rows[i].className=="title-search-selected"){s.rows[i].className=""}}}if(i==n&&e.currentRow!=i)e.currentRow=l;s.rows[e.currentRow].className="title-search-selected";return true;case 38:if(e.RESULT.style.display=="none")e.RESULT.style.display="block";var r=-1;for(i=n-1;i>=0;i--){if(!BX.findChild(s.rows[i],{class:"title-search-separator"},true)){if(r==-1)r=i;if(e.currentRow>i){e.currentRow=i;break}else if(s.rows[i].className=="title-search-selected"){s.rows[i].className=""}}}if(i<0&&e.currentRow!=i)e.currentRow=r;s.rows[e.currentRow].className="title-search-selected";return true;case 13:if(e.RESULT.style.display=="block"){for(i=0;i<n;i++){if(e.currentRow==i){if(!BX.findChild(s.rows[i],{class:"title-search-separator"},true)){var a=BX.findChild(s.rows[i],{tag:"a"},true);if(a){window.location=a.href;return true}}}}}return false}return false};this.onTimeout=function(){e.onChange(function(){setTimeout(e.onTimeout,500)})};this.onChange=function(t){if(e.running){e.runningCall=true;return}e.running=true;if(e.INPUT.value!=e.oldValue&&e.INPUT.value!=e.startText){e.oldValue=e.INPUT.value;if(e.INPUT.value.length>=e.arParams.MIN_QUERY_LEN){e.cache_key=e.arParams.INPUT_ID+"|"+e.INPUT.value;if(e.cache[e.cache_key]==null){if(e.WAIT){var s=BX.pos(e.INPUT);var i=s.bottom-s.top-2;e.WAIT.style.top=s.top+1+"px";e.WAIT.style.height=i+"px";e.WAIT.style.width=i+"px";e.WAIT.style.left=s.right-i+2+"px";e.WAIT.style.display="block"}BX.ajax.post(e.arParams.AJAX_PAGE,{ajax_call:"y",INPUT_ID:e.arParams.INPUT_ID,q:e.INPUT.value,l:e.arParams.MIN_QUERY_LEN},function(s){e.cache[e.cache_key]=s;e.ShowResult(s);e.currentRow=-1;e.EnableMouseEvents();if(e.WAIT)e.WAIT.style.display="none";if(!!t)t();e.running=false;if(e.runningCall){e.runningCall=false;e.onChange()}});return}else{e.ShowResult(e.cache[e.cache_key]);e.currentRow=-1;e.EnableMouseEvents()}}else{e.RESULT.style.display="none";e.currentRow=-1;e.UnSelectAll()}}if(!!t)t();e.running=false};this.onScroll=function(){if(BX.type.isElementNode(e.RESULT)&&e.RESULT.style.display!=="none"&&e.RESULT.innerHTML!==""){e.adjustResultNode()}};this.UnSelectAll=function(){var t=BX.findChild(e.RESULT,{tag:"table",class:"title-search-result"},true);if(t){var s=t.rows.length;for(var i=0;i<s;i++)t.rows[i].className=""}};this.EnableMouseEvents=function(){var t=BX.findChild(e.RESULT,{tag:"table",class:"title-search-result"},true);if(t){var s=t.rows.length;for(var i=0;i<s;i++)if(!BX.findChild(t.rows[i],{class:"title-search-separator"},true)){t.rows[i].id="row_"+i;t.rows[i].onmouseover=function(t){if(e.currentRow!=this.id.substr(4)){e.UnSelectAll();this.className="title-search-selected";e.currentRow=this.id.substr(4)}};t.rows[i].onmouseout=function(t){this.className="";e.currentRow=-1}}}};this.onFocusLost=function(t){setTimeout(function(){e.RESULT.style.display="none"},250)};this.onFocusGain=function(){if(e.RESULT.innerHTML.length)e.ShowResult()};this.onKeyDown=function(t){if(!t)t=window.event;if(e.RESULT.style.display=="block"){if(e.onKeyPress(t.keyCode))return BX.PreventDefault(t)}};this.adjustResultNode=function(){if(!(BX.type.isElementNode(e.RESULT)&&BX.type.isElementNode(e.CONTAINER))){return{top:0,right:0,bottom:0,left:0,width:0,height:0}}var t=BX.pos(e.CONTAINER);e.RESULT.style.position="absolute";e.RESULT.style.top=t.bottom+2+"px";e.RESULT.style.left=t.left+"px";e.RESULT.style.width=t.width+"px";return t};this._onContainerLayoutChange=function(){if(BX.type.isElementNode(e.RESULT)&&e.RESULT.style.display!=="none"&&e.RESULT.innerHTML!==""){e.adjustResultNode()}};this.Init=function(){this.CONTAINER=document.getElementById(this.arParams.CONTAINER_ID);BX.addCustomEvent(this.CONTAINER,"OnNodeLayoutChange",this._onContainerLayoutChange);this.RESULT=document.body.appendChild(document.createElement("DIV"));this.RESULT.className="title-search-result";this.INPUT=document.getElementById(this.arParams.INPUT_ID);this.startText=this.oldValue=this.INPUT.value;BX.bind(this.INPUT,"focus",function(){e.onFocusGain()});BX.bind(this.INPUT,"blur",function(){e.onFocusLost()});this.INPUT.onkeydown=this.onKeyDown;if(this.arParams.WAIT_IMAGE){this.WAIT=document.body.appendChild(document.createElement("DIV"));this.WAIT.style.backgroundImage="url('"+this.arParams.WAIT_IMAGE+"')";if(!BX.browser.IsIE())this.WAIT.style.backgroundRepeat="none";this.WAIT.style.display="none";this.WAIT.style.position="absolute";this.WAIT.style.zIndex="1100"}BX.bind(this.INPUT,"bxchange",function(){e.onChange()});var t=BX.findParent(this.CONTAINER,BX.is_fixed);if(BX.type.isElementNode(t)){BX.bind(window,"scroll",BX.throttle(this.onScroll,100,this))}};BX.ready(function(){e.Init(t)})}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:58:"/bitrix/templates/aspro_optimus/js/custom.js?1590135559102";s:6:"source";s:44:"/bitrix/templates/aspro_optimus/js/custom.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
You can use this file with your scripts.
It will not be overwritten when you upgrade solution.
*/


/* End */
;; /* /bitrix/templates/aspro_optimus/js/jquery.actual.min.js?15898055531251*/
; /* /bitrix/templates/aspro_optimus/js/jqModal.min.js?15898055533355*/
; /* /bitrix/templates/aspro_optimus/js/jquery.fancybox.min.js?158980555321528*/
; /* /bitrix/templates/aspro_optimus/js/jquery.history.min.js?158980555321571*/
; /* /bitrix/templates/aspro_optimus/js/jquery.flexslider.min.js?158980555322345*/
; /* /bitrix/templates/aspro_optimus/js/jquery.validate.min.js?158980555322257*/
; /* /bitrix/templates/aspro_optimus/js/jquery.inputmask.bundle.min.js?158980555370933*/
; /* /bitrix/templates/aspro_optimus/js/jquery.easing.1.3.min.js?15898055533338*/
; /* /bitrix/templates/aspro_optimus/js/equalize.min.js?1589805553588*/
; /* /bitrix/templates/aspro_optimus/js/jquery.alphanumeric.min.js?1589805553942*/
; /* /bitrix/templates/aspro_optimus/js/jquery.cookie.min.js?15898055533066*/
; /* /bitrix/templates/aspro_optimus/js/jquery.plugin.min.js?15898055533181*/
; /* /bitrix/templates/aspro_optimus/js/jquery.countdown.min.js?158980555313137*/
; /* /bitrix/templates/aspro_optimus/js/jquery.countdown-ru.min.js?15898055531011*/
; /* /bitrix/templates/aspro_optimus/js/jquery.ikSelect.min.js?158980555317826*/
; /* /bitrix/templates/aspro_optimus/js/sly.min.js?158980555317577*/
; /* /bitrix/templates/aspro_optimus/js/equalize_ext.min.js?15898055531531*/
; /* /bitrix/templates/aspro_optimus/js/jquery.mousewheel-3.0.6.min.js?15898055531393*/
; /* /bitrix/templates/aspro_optimus/js/jquery.mCustomScrollbar.min.js?158980555339873*/
; /* /bitrix/templates/aspro_optimus/js/jquery.dotdotdot.min.js?15898055535908*/
; /* /bitrix/templates/aspro_optimus/js/velocity.js?158980555344791*/
; /* /bitrix/templates/aspro_optimus/js/velocity.ui.js?158980555313257*/
; /* /bitrix/templates/aspro_optimus/js/main.js?1595503095161065*/
; /* /bitrix/components/bitrix/search.title/script.min.js?15898050836443*/
; /* /bitrix/templates/aspro_optimus/js/custom.js?1590135559102*/

//# sourceMappingURL=template_1bf93ed8bb4dbd88bdee9ffeb67e01b3.map.js