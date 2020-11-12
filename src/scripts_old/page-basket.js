
; /* Start:"a:4:{s:4:"full";s:105:"/bitrix/templates/aspro_optimus/components/bitrix/sale.basket.basket/basket/script.min.js?158980507222553";s:6:"source";s:85:"/bitrix/templates/aspro_optimus/components/bitrix/sale.basket.basket/basket/script.js";s:3:"min";s:89:"/bitrix/templates/aspro_optimus/components/bitrix/sale.basket.basket/basket/script.min.js";s:3:"map";s:89:"/bitrix/templates/aspro_optimus/components/bitrix/sale.basket.basket/basket/script.map.js";}"*/
BasketPoolQuantity=function(){this.processing=false;this.poolQuantity={};this.updateTimer=null;this.currentQuantity={};this.lastStableQuantities={};this.updateQuantity()};BasketPoolQuantity.prototype.updateQuantity=function(){var e=BX("basket_items");if(basketJSParams["USE_ENHANCED_ECOMMERCE"]==="Y"){checkAnalytics(this.lastStableQuantities,e)}if(!!e&&e.rows.length>0){for(var t=1;e.rows.length>t;t++){var a=e.rows[t].id;this.currentQuantity[a]=BX("QUANTITY_"+a).value}}this.lastStableQuantities=BX.clone(this.currentQuantity,true)};BasketPoolQuantity.prototype.changeQuantity=function(e){var t=BX("QUANTITY_"+e).value;var a=this.isPoolEmpty();if(this.currentQuantity[e]&&this.currentQuantity[e]!=t){this.poolQuantity[e]=this.currentQuantity[e]=t}if(!a){this.enableTimer(true)}else{this.trySendPool()}};BasketPoolQuantity.prototype.trySendPool=function(){if(!this.isPoolEmpty()&&!this.isProcessing()){this.enableTimer(false);recalcBasketAjax({})}};BasketPoolQuantity.prototype.isPoolEmpty=function(){return Object.keys(this.poolQuantity).length==0};BasketPoolQuantity.prototype.clearPool=function(){this.poolQuantity={}};BasketPoolQuantity.prototype.isProcessing=function(){return this.processing===true};BasketPoolQuantity.prototype.setProcessing=function(e){this.processing=e===true};BasketPoolQuantity.prototype.enableTimer=function(e){clearTimeout(this.updateTimer);if(e===false)return;this.updateTimer=setTimeout(function(){basketPoolQuantity.trySendPool()},1500)};function updateBasketTable(e,t){var a=BX("basket_items"),i,s,l,r,n,o,_=false,u=false,c=false,d=false,p,T,f,A,b,B,y,E,m,X,v,h,I,S,k,D,N,P,C,g,U,O,R,L,Q,M,Y,x,F,w,H,K,V,j,W,G,J,q,z,Z,$,ee,te;if(!a||typeof t!=="object"){return}i=a.rows;r=i[i.length-1];p=t.PARAMS.QUANTITY_FLOAT==="Y";if(e!==null&&!!t.BASKET_DATA){T=BX(e);s=t.BASKET_ID;te=BX.type.isPlainObject(t.BASKET_DATA.GRID.ROWS[s]);if(te){l=t.BASKET_DATA.GRID.ROWS[s];n=document.createElement("tr");n.setAttribute("id",t.BASKET_ID);n.setAttribute("data-item-name",l["NAME"]);n.setAttribute("data-item-brand",l[basketJSParams["BRAND_PROPERTY"]+"_VALUE"]);n.setAttribute("data-item-price",l["PRICE"]);n.setAttribute("data-item-currency",l["CURRENCY"]);r.parentNode.insertBefore(n,T.nextSibling)}if(t.DELETE_ORIGINAL==="Y"){T.parentNode.removeChild(T)}if(te){f=n.insertCell(-1);f.setAttribute("class","margin");o=t.COLUMNS.split(",");for(A=0;A<o.length;A++){if(o[A]==="DELETE"){_=true}else if(o[A]==="DELAY"){u=true}else if(o[A]==="PROPS"){c=true}else if(o[A]==="TYPE"){d=true}}for(A=0;A<o.length;A++){switch(o[A]){case"PROPS":case"DELAY":case"DELETE":case"TYPE":break;case"NAME":b=n.insertCell(-1);B="";y="";b.setAttribute("class","itemphoto");if(l.PREVIEW_PICTURE_SRC.length>0){B=l.PREVIEW_PICTURE_SRC}else if(l.DETAIL_PICTURE_SRC.length>0){B=l.DETAIL_PICTURE_SRC}else{B=basketJSParams.TEMPLATE_FOLDER+"/images/no_photo.png"}if(l.DETAIL_PAGE_URL.length>0){y='<div class="bx_ordercart_photo_container">							<a href="'+l.DETAIL_PAGE_URL+'">								<div class="bx_ordercart_photo" style="background-image:url(\''+B+"')\"></div>							</a>						</div>"}else{y='<div class="bx_ordercart_photo_container">							<div class="bx_ordercart_photo" style="background-image:url(\''+B+"')\"></div>						</div>"}if(l.BRAND&&l.BRAND.length>0){y+='<div class="bx_ordercart_brand">							<img alt="" src="'+l.BRAND+'"/>						</div>'}b.innerHTML=y;E=n.insertCell(-1);m="";E.setAttribute("class","item");if(l["DETAIL_PAGE_URL"].length>0)m+='<h2 class="bx_ordercart_itemtitle"><a href="'+l["DETAIL_PAGE_URL"]+'">'+l["NAME"]+"</a></h2>";else m+='<h2 class="bx_ordercart_itemtitle">'+l["NAME"]+"</h2>";m+='<div class="bx_ordercart_itemart">';if(c){for(v=0;v<l["PROPS"].length;v++){h=l["PROPS"][v];if(l.SKU_DATA){X=false;for(I in l.SKU_DATA){if(l.SKU_DATA.hasOwnProperty(I)){S=l.SKU_DATA[I];if(S["CODE"]===h["CODE"]){X=true;break}}}if(X)continue}m+=BX.util.htmlspecialchars(h["NAME"])+":&nbsp;<span>"+h["VALUE"]+"</span><br/>"}}m+="</div>";if(l.SKU_DATA){z={};for(Q=0;Q<l["PROPS"].length;Q++){M=l["PROPS"][Q];z[M["CODE"]]=BX.type.isNotEmptyString(M["~VALUE"])?M["~VALUE"]:M["VALUE"]}for(I in l.SKU_DATA){if(l.SKU_DATA.hasOwnProperty(I)){Z=0;S=l.SKU_DATA[I];k=false;D=BX.util.array_keys(S["VALUES"]).length;if(D>5){N="full";P=D*20+"%";C=100/D+"%"}else{N="";P="100%";C="20%"}$=0;for(U in S["VALUES"]){$++;g=S["VALUES"][U];if(BX.type.isNotEmptyString(z[S["CODE"]])){if(z[S["CODE"]]==g["NAME"]||z[S["CODE"]]==g["XML_ID"])Z=$}if(!!g&&typeof g==="object"&&!!g["PICT"]){k=true}}ee="0";if(N!==""&&Z>5)ee=(5-Z)*20+"%";if(k){m+='<div class="bx_item_detail_scu_small_noadaptive '+N+'">';m+='<span class="bx_item_section_name_gray">'+BX.util.htmlspecialchars(S["NAME"])+"</span>";m+='<div class="bx_scu_scroller_container">';m+='<div class="bx_scu">';m+='<ul id="prop_'+S["CODE"]+"_"+l["ID"]+'" style="width: '+P+"; margin-left: "+ee+';" class="sku_prop_list">';$=0;for(L in S["VALUES"]){$++;O=S["VALUES"][L];R=Z==$?" bx_active":"";m+='<li style="width: '+C+"; padding-top: "+C+';"															class="sku_prop'+R+'" 															data-sku-selector="Y" 															data-value-id="'+O["XML_ID"]+'" 															data-sku-name="'+BX.util.htmlspecialchars(O["NAME"])+'" 															data-element="'+l["ID"]+'" 															data-property="'+S["CODE"]+'"															>															<a href="javascript:void(0)" class="cnt"><span class="cnt_item" style="background-image:url('+O["PICT"]["SRC"]+'"></span></a>														</li>'}m+="</ul>";m+="</div>";m+='<div class="bx_slide_left" onclick="leftScroll(\''+S["CODE"]+"', "+l["ID"]+", "+BX.util.array_keys(S["VALUES"]).length+');"></div>';m+='<div class="bx_slide_right" onclick="rightScroll(\''+S["CODE"]+"', "+l["ID"]+", "+BX.util.array_keys(S["VALUES"]).length+');"></div>';m+="</div>";m+="</div>"}else{m+='<div class="bx_item_detail_size_small_noadaptive '+N+'">';m+='<span class="bx_item_section_name_gray">'+BX.util.htmlspecialchars(S["NAME"])+"</span>";m+='<div class="bx_size_scroller_container">';m+='<div class="bx_size">';m+='<ul id="prop_'+S["CODE"]+"_"+l["ID"]+'" style="width: '+P+"; margin-left: "+ee+';" class="sku_prop_list">';$=0;for(L in S["VALUES"]){$++;O=S["VALUES"][L];R=Z==$?" bx_active":"";m+='<li style="width: '+C+';"															class="sku_prop '+R+'" 															data-sku-selector="Y" 															data-value-id="'+(S["TYPE"]==="S"&&S["USER_TYPE"]==="directory"?O["XML_ID"]:BX.util.htmlspecialchars(O["NAME"]))+'" 															data-sku-name="'+BX.util.htmlspecialchars(O["NAME"])+'" 															data-element="'+l["ID"]+'" 															data-property="'+S["CODE"]+'" 															>															<a href="javascript:void(0)" class="cnt">'+BX.util.htmlspecialchars(O["NAME"])+"</a>														</li>"}m+="</ul>";m+="</div>";m+='<div class="bx_slide_left" onclick="leftScroll(\''+S["CODE"]+"', "+l["ID"]+", "+BX.util.array_keys(S["VALUES"]).length+');"></div>';m+='<div class="bx_slide_right" onclick="rightScroll(\''+S["CODE"]+"', "+l["ID"]+", "+BX.util.array_keys(S["VALUES"]).length+');"></div>';m+="</div>";m+="</div>"}}}}E.innerHTML=m;break;case"QUANTITY":Y=n.insertCell(-1);x="";F=parseFloat(l["MEASURE_RATIO"])>0?l["MEASURE_RATIO"]:1;w=false;if(F!=0&&F!=""){H=l["QUANTITY"];l["QUANTITY"]=getCorrectRatioQuantity(l["QUANTITY"],F,p);if(H!=l["QUANTITY"]){w=true}}Y.setAttribute("class","custom");x+="<span>"+getColumnName(t,o[A])+":</span>";x+='<div class="centered">';x+='<table cellspacing="0" cellpadding="0" class="counter">';x+="<tr>";x+="<td>";x+='<input type="text" size="3" id="QUANTITY_INPUT_'+l["ID"]+'"											name="QUANTITY_INPUT_'+l["ID"]+'"											style="max-width: 50px"											value="'+l["QUANTITY"]+'"											onchange="updateQuantity(\'QUANTITY_INPUT_'+l["ID"]+"','"+l["ID"]+"', "+F+","+p+')"						>';x+="</td>";if(F!=0&&F!=""){x+='<td id="basket_quantity_control">							<div class="basket_quantity_control">								<a href="javascript:void(0);" class="plus" onclick="setQuantity('+l["ID"]+", "+F+", 'up', "+p+');"></a>								<a href="javascript:void(0);" class="minus" onclick="setQuantity('+l["ID"]+", "+F+", 'down', "+p+');"></a>							</div>						</td>'}if(l.hasOwnProperty("MEASURE_TEXT")&&l["MEASURE_TEXT"].length>0)x+='<td style="text-align: left">'+BX.util.htmlspecialchars(l["MEASURE_TEXT"])+"</td>";x+="</tr>";x+="</table>";x+="</div>";x+='<input type="hidden" id="QUANTITY_'+l["ID"]+'" name="QUANTITY_'+l["ID"]+'" value="'+l["QUANTITY"]+'" />';Y.innerHTML=x;if(w){updateQuantity("QUANTITY_INPUT_"+l["ID"],l["ID"],F,p)}break;case"PRICE":K=n.insertCell(-1);V=l["DISCOUNT_PRICE_PERCENT"]>0?l["FULL_PRICE_FORMATED"]:"";K.setAttribute("class","price");K.innerHTML='<div class="current_price" id="current_price_'+l["ID"]+'">'+l["PRICE_FORMATED"]+"</div>"+'<div class="old_price" id="old_price_'+l["ID"]+'">'+V+"</div>";if(d&&l["NOTES"].length>0){K.innerHTML+='<div class="type_price">'+basketJSParams["SALE_TYPE"]+"</div>";K.innerHTML+='<div class="type_price_value">'+l["NOTES"]+"</div>"}break;case"DISCOUNT":W=n.insertCell(-1);W.setAttribute("class","custom");W.innerHTML="<span>"+getColumnName(t,o[A])+":</span>";W.innerHTML+='<div id="discount_value_'+l["ID"]+'">'+l["DISCOUNT_PRICE_PERCENT_FORMATED"]+"</div>";break;case"WEIGHT":G=n.insertCell(-1);G.setAttribute("class","custom");G.innerHTML="<span>"+getColumnName(t,o[A])+":</span>";G.innerHTML+=l["WEIGHT_FORMATED"];break;default:J=n.insertCell(-1);q="";J.setAttribute("class","custom");J.innerHTML="<span>"+getColumnName(t,o[A])+":</span>";if(o[A]=="SUM")q+='<div id="sum_'+l["ID"]+'">';if(typeof l[o[A]]!="undefined"){q+=l[o[A]]}if(o[A]=="SUM")q+="</div>";J.innerHTML+=q;break}}if(_||u){var ae=n.insertCell(-1);ae.setAttribute("class","control");if(_)ae.innerHTML='<a href="'+basketJSParams["DELETE_URL"].replace("#ID#",l["ID"])+'">'+basketJSParams["SALE_DELETE"]+"</a><br />";if(u)ae.innerHTML+='<a href="'+basketJSParams["DELAY_URL"].replace("#ID#",l["ID"])+'">'+basketJSParams["SALE_DELAY"]+"</a>"}var ie=n.insertCell(-1);ie.setAttribute("class","margin")}}if(!!t.BASKET_DATA){for(j in t.BASKET_DATA.GRID.ROWS){if(t.BASKET_DATA.GRID.ROWS.hasOwnProperty(j)){var se=t.BASKET_DATA.GRID.ROWS[j];if(BX("discount_value_"+j))BX("discount_value_"+j).innerHTML=se.DISCOUNT_PRICE_PERCENT_FORMATED;if(BX("current_price_"+j))BX("current_price_"+j).innerHTML=se.PRICE_FORMATED;if(BX("old_price_"+j))BX("old_price_"+j).innerHTML=se.DISCOUNT_PRICE_PERCENT>0?se.FULL_PRICE_FORMATED:"";if(BX("sum_"+j))BX("sum_"+j).innerHTML=se.SUM;if(BX("QUANTITY_"+j)){BX("QUANTITY_INPUT_"+j).value=se.QUANTITY;BX("QUANTITY_INPUT_"+j).defaultValue=se.QUANTITY;BX("QUANTITY_"+j).value=se.QUANTITY}}}}if(!!t.BASKET_DATA)couponListUpdate(t.BASKET_DATA);if(t.hasOwnProperty("WARNING_MESSAGE")){var le="";for(A=t["WARNING_MESSAGE"].length-1;A>=0;A--)le+=t["WARNING_MESSAGE"][A]+"<br/>";BX("warning_message").innerHTML=le}if(!!t.BASKET_DATA){if(BX("allWeight_FORMATED"))BX("allWeight_FORMATED").innerHTML=t["BASKET_DATA"]["allWeight_FORMATED"].replace(/\s/g,"&nbsp;");if(BX("allSum_wVAT_FORMATED"))BX("allSum_wVAT_FORMATED").innerHTML=t["BASKET_DATA"]["allSum_wVAT_FORMATED"].replace(/\s/g,"&nbsp;");if(BX("allVATSum_FORMATED"))BX("allVATSum_FORMATED").innerHTML=t["BASKET_DATA"]["allVATSum_FORMATED"].replace(/\s/g,"&nbsp;");if(BX("allSum_FORMATED"))BX("allSum_FORMATED").innerHTML=t["BASKET_DATA"]["allSum_FORMATED"].replace(/\s/g,"&nbsp;");if(BX("PRICE_WITHOUT_DISCOUNT")){var re=t["BASKET_DATA"]["PRICE_WITHOUT_DISCOUNT"]!=t["BASKET_DATA"]["allSum_FORMATED"];BX("PRICE_WITHOUT_DISCOUNT").innerHTML=re?t["BASKET_DATA"]["PRICE_WITHOUT_DISCOUNT"].replace(/\s/g,"&nbsp;"):"";BX.style(BX("PRICE_WITHOUT_DISCOUNT").parentNode,"display",re?"table-row":"none")}BX.onCustomEvent("OnBasketChange")}}function couponCreate(e,t){var a="disabled";if(!BX.type.isElementNode(e))return;if(t.JS_STATUS==="BAD")a="bad";else if(t.JS_STATUS==="APPLYED")a="good";e.appendChild(BX.create("div",{props:{className:"bx_ordercart_coupon"},children:[BX.create("input",{props:{className:a,type:"text",value:t.COUPON,name:"OLD_COUPON[]"},attrs:{disabled:true,readonly:true}}),BX.create("span",{props:{className:a},attrs:{"data-coupon":t.COUPON}}),BX.create("div",{props:{className:"bx_ordercart_coupon_notes"},html:t.JS_CHECK_CODE})]}))}function couponListUpdate(e){var t,a,i,s,l,r,n,o;if(!!e&&typeof e!=="object"){return}t=BX("coupons_block");if(!!t){if(!!e.COUPON_LIST&&BX.type.isArray(e.COUPON_LIST)){i=BX("coupon");if(!!i){i.value=""}s=BX.findChildren(t,{tagName:"input",property:{name:"OLD_COUPON[]"}},true);if(!!s){if(BX.type.isElementNode(s)){s=[s]}for(r=0;r<e.COUPON_LIST.length;r++){l=false;o=-1;for(n=0;n<s.length;n++){if(s[n].value===e.COUPON_LIST[r].COUPON){l=true;o=n;s[n].couponUpdate=true;break}}if(l){a="disabled";if(e.COUPON_LIST[r].JS_STATUS==="BAD")a="bad";else if(e.COUPON_LIST[r].JS_STATUS==="APPLYED")a="good";BX.adjust(s[o],{props:{className:a}});BX.adjust(s[o].nextSibling,{props:{className:a}});BX.adjust(s[o].nextSibling.nextSibling,{html:e.COUPON_LIST[r].JS_CHECK_CODE})}else{couponCreate(t,e.COUPON_LIST[r])}}for(n=0;n<s.length;n++){if(typeof s[n].couponUpdate==="undefined"||!s[n].couponUpdate){BX.remove(s[n].parentNode);s[n]=null}else{s[n].couponUpdate=null}}}else{for(r=0;r<e.COUPON_LIST.length;r++){couponCreate(t,e.COUPON_LIST[r])}}}}t=null}function skuPropClickHandler(){var e=this,t,a,i={},s={},l,r,n,o,_;if(!!e&&e.hasAttribute("data-value-id")){BX.showWait();t=e.getAttribute("data-element");a=e.getAttribute("data-property");l=BX("action_var").value;i[a]=BX.util.htmlspecialcharsback(e.getAttribute("data-value-id"));if(BX.hasClass(e,"bx_active")){BX.closeWait();return}r=BX.findChildren(BX(t),{tagName:"ul",className:"sku_prop_list"},true);if(!!r&&r.length>0){for(n=0;r.length>n;n++){if(r[n].id!=="prop_"+a+"_"+t){o=BX.findChildren(BX(r[n].id),{tagName:"li",className:"bx_active"},true);if(!!o&&o.length>0){for(_=0;o.length>_;_++){if(o[_].hasAttribute("data-value-id")){i[o[_].getAttribute("data-property")]=BX.util.htmlspecialcharsback(o[_].getAttribute("data-value-id"))}}}}}}s={basketItemId:t,sessid:BX.bitrix_sessid(),site_id:BX.message("SITE_ID"),props:i,action_var:l,select_props:BX("column_headers").value,offers_props:BX("offers_props").value,quantity_float:BX("quantity_float").value,price_vat_show_value:BX("price_vat_show_value").value,hide_coupon:BX("hide_coupon").value,use_prepayment:BX("use_prepayment").value};s[l]="select_item";BX.ajax({url:"/bitrix/components/bitrix/sale.basket.basket/ajax.php",method:"POST",data:s,dataType:"json",onsuccess:function(e){BX.closeWait();updateBasketTable(t,e)}})}}function getColumnName(e,t){if(BX("col_"+t)){return BX.util.trim(BX("col_"+t).innerHTML)}else{return""}}function leftScroll(e,t,a){a=parseInt(a,10);var i=BX("prop_"+e+"_"+t);if(i){var s=parseInt(i.style.marginLeft,10);if(s<=-20)i.style.marginLeft=s+20+"%"}}function rightScroll(e,t,a){a=parseInt(a,10);var i=BX("prop_"+e+"_"+t);if(i){var s=parseInt(i.style.marginLeft,10);if(s>(5-a)*20)i.style.marginLeft=s-20+"%"}}function checkOut(){if(!!BX("coupon"))BX("coupon").disabled=true;BX("basket_form").submit();return true}function updateBasket(){recalcBasketAjax({})}function enterCoupon(){var e=BX("coupon");if(!!e&&!!e.value)recalcBasketAjax({coupon:e.value})}function updateQuantity(e,t,a,i){var s=BX(e).defaultValue,l=parseFloat(BX(e).value)||0,r=false,n=BX("auto_calculation")&&BX("auto_calculation").value=="Y"||!BX("auto_calculation");if(a===0||a==1){r=true}else{var o=l*1e4,_=a*1e4,u=o%_,c=parseInt(l);if(u===0){r=true}}var d=false;if(parseInt(l)!=parseFloat(l)){d=true}l=i===false&&d===false?parseInt(l):parseFloat(l).toFixed(4);l=correctQuantity(l);if(r){BX(e).defaultValue=l;BX("QUANTITY_INPUT_"+t).value=l;BX("QUANTITY_"+t).value=l;if(n){basketPoolQuantity.changeQuantity(t)}}else{l=getCorrectRatioQuantity(l,a,i);l=correctQuantity(l);if(l!=s){BX("QUANTITY_INPUT_"+t).value=l;BX("QUANTITY_"+t).value=l;if(n){basketPoolQuantity.changeQuantity(t)}}else{BX(e).value=s}}}function setQuantity(e,t,a,i){var s=parseFloat(BX("QUANTITY_INPUT_"+e).value),l;l=a=="up"?s+t:s-t;if(l<0)l=0;if(i){l=parseFloat(l).toFixed(4)}l=correctQuantity(l);if(t>0&&l<t){l=t}if(!i&&l!=l.toFixed(4)){l=parseFloat(l).toFixed(4)}l=getCorrectRatioQuantity(l,t,i);l=correctQuantity(l);BX("QUANTITY_INPUT_"+e).value=l;BX("QUANTITY_INPUT_"+e).defaultValue=l;updateQuantity("QUANTITY_INPUT_"+e,e,t,i)}function getCorrectRatioQuantity(e,t,a){var i=e*1e4,s=t*1e4,l=(e/t-(e/t).toFixed(0)).toFixed(6),r=e,n=false,o;t=parseFloat(t);if(l==0){return r}if(t!==0&&t!=1){for(o=t,max=parseFloat(e)+parseFloat(t);o<=max;o=parseFloat(parseFloat(o)+parseFloat(t)).toFixed(4)){r=o}}else if(t===1){r=e|0}if(parseInt(r,10)!=parseFloat(r)){n=true}r=a===false&&n===false?parseInt(r,10):parseFloat(r).toFixed(4);r=correctQuantity(r);return r}function correctQuantity(e){return parseFloat((e*1).toString())}function recalcBasketAjax(e){if(basketPoolQuantity.isProcessing()){return false}BX.showWait();var t={},a=BX("action_var").value,i=BX("basket_items"),s=BX("delayed_items"),l,r;l={sessid:BX.bitrix_sessid(),site_id:BX.message("SITE_ID"),props:t,action_var:a,select_props:BX("column_headers").value,offers_props:BX("offers_props").value,quantity_float:BX("quantity_float").value,price_vat_show_value:BX("price_vat_show_value").value,hide_coupon:BX("hide_coupon").value,use_prepayment:BX("use_prepayment").value};l[a]="recalculate";if(!!e&&typeof e==="object"){for(r in e){if(e.hasOwnProperty(r))l[r]=e[r]}}if(!!i&&i.rows.length>0){for(r=1;i.rows.length>r;r++)l["QUANTITY_"+i.rows[r].id]=BX("QUANTITY_"+i.rows[r].id).value}if(!!s&&s.rows.length>0){for(r=1;s.rows.length>r;r++)l["DELAY_"+s.rows[r].id]="Y"}basketPoolQuantity.setProcessing(true);basketPoolQuantity.clearPool();BX.ajax({url:"/bitrix/components/bitrix/sale.basket.basket/ajax.php",method:"POST",data:l,dataType:"json",onsuccess:function(t){BX.closeWait();basketPoolQuantity.setProcessing(false);if(e.coupon){if(!!t&&!!t.BASKET_DATA&&!!t.BASKET_DATA.NEED_TO_RELOAD_FOR_GETTING_GIFTS){BX.reload()}}if(basketPoolQuantity.isPoolEmpty()){updateBasketTable(null,t);basketPoolQuantity.updateQuantity()}else{basketPoolQuantity.enableTimer(true)}}})}function showBasketItemsList(e){BX.removeClass(BX("basket_toolbar_button"),"current");BX.removeClass(BX("basket_toolbar_button_delayed"),"current");BX.removeClass(BX("basket_toolbar_button_subscribed"),"current");BX.removeClass(BX("basket_toolbar_button_not_available"),"current");BX("normal_count").style.display="inline-block";BX("delay_count").style.display="inline-block";BX("subscribe_count").style.display="inline-block";BX("not_available_count").style.display="inline-block";if(e==2){if(BX("basket_items_list"))BX("basket_items_list").style.display="none";if(BX("basket_items_delayed")){BX("basket_items_delayed").style.display="block";BX.addClass(BX("basket_toolbar_button_delayed"),"current");BX("delay_count").style.display="none"}if(BX("basket_items_subscribed"))BX("basket_items_subscribed").style.display="none";if(BX("basket_items_not_available"))BX("basket_items_not_available").style.display="none"}else if(e==3){if(BX("basket_items_list"))BX("basket_items_list").style.display="none";if(BX("basket_items_delayed"))BX("basket_items_delayed").style.display="none";if(BX("basket_items_subscribed")){BX("basket_items_subscribed").style.display="block";BX.addClass(BX("basket_toolbar_button_subscribed"),"current");BX("subscribe_count").style.display="none"}if(BX("basket_items_not_available"))BX("basket_items_not_available").style.display="none"}else if(e==4){if(BX("basket_items_list"))BX("basket_items_list").style.display="none";if(BX("basket_items_delayed"))BX("basket_items_delayed").style.display="none";if(BX("basket_items_subscribed"))BX("basket_items_subscribed").style.display="none";if(BX("basket_items_not_available")){BX("basket_items_not_available").style.display="block";BX.addClass(BX("basket_toolbar_button_not_available"),"current");BX("not_available_count").style.display="none"}}else{if(BX("basket_items_list")){BX("basket_items_list").style.display="block";BX.addClass(BX("basket_toolbar_button"),"current");BX("normal_count").style.display="none"}if(BX("basket_items_delayed"))BX("basket_items_delayed").style.display="none";if(BX("basket_items_subscribed"))BX("basket_items_subscribed").style.display="none";if(BX("basket_items_not_available"))BX("basket_items_not_available").style.display="none"}}function deleteCoupon(){var e=this,t;if(BX.type.isElementNode(e)&&e.hasAttribute("data-coupon")){t=e.getAttribute("data-coupon");if(BX.type.isNotEmptyString(t)){recalcBasketAjax({delete_coupon:t})}}}function deleteProductRow(e){var t=BX.findParent(e,{tagName:"TR"}),a,i;if(t){a=BX("QUANTITY_"+t.id);if(a){i=getCurrentItemAnalyticsInfo(t,a.value)}}setAnalyticsDataLayer([],[i]);document.location.href=e.href;return false}function checkAnalytics(e,t){if(!e||!t||BX.util.array_values(e).length===0)return;var a,i,s={},l=[],r=[],n;if(!!t&&t.rows.length){for(n=1;t.rows.length>n;n++){a=t.rows[n].id;i=BX("QUANTITY_"+a).value-e[a];if(i!=0){s=getCurrentItemAnalyticsInfo(t.rows[n],i);if(i>0){l.push(s)}else{r.push(s)}}}}if(l.length||r.length){setAnalyticsDataLayer(l,r)}}function getCurrentItemAnalyticsInfo(e,t){if(!e)return;var a,i,s=[];var l={name:e.getAttribute("data-item-name")||"",id:e.id,price:e.getAttribute("data-item-price")||0,brand:(e.getAttribute("data-item-brand")||"").split(",  ").join("/"),variant:"",quantity:Math.abs(t)};a=e.querySelectorAll(".bx_active[data-sku-name]");for(i=0;i<a.length;i++){s.push(a[i].getAttribute("data-sku-name"))}l.variant=s.join("/");return l}function setAnalyticsDataLayer(e,t){window[basketJSParams["DATA_LAYER_NAME"]]=window[basketJSParams["DATA_LAYER_NAME"]]||[];if(e&&e.length){window[basketJSParams["DATA_LAYER_NAME"]].push({event:"addToCart",ecommerce:{currencyCode:getCurrencyCode(),add:{products:e}}})}if(t&&t.length){window[basketJSParams["DATA_LAYER_NAME"]].push({event:"removeFromCart",ecommerce:{currencyCode:getCurrencyCode(),remove:{products:t}}})}}function getCurrencyCode(){var e=BX("basket_items"),t,a="";if(e){t=e.querySelector("[data-item-currency");t&&(a=t.getAttribute("data-item-currency"))}return a}BX.ready(function(){basketPoolQuantity=new BasketPoolQuantity;var e=BX("coupons_block"),t=BX("basket_items");if(BX.type.isElementNode(e))BX.bindDelegate(e,"click",{attribute:"data-coupon"},deleteCoupon);if(BX.type.isElementNode(t))BX.bindDelegate(t,"click",{tagName:"li",attr:{"data-sku-selector":"Y"}},skuPropClickHandler);if(BX.type.isNotEmptyString(basketJSParams["EVENT_ONCHANGE_ON_START"])&&basketJSParams["EVENT_ONCHANGE_ON_START"]=="Y")BX.onCustomEvent("OnBasketChange")});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:109:"/bitrix/templates/aspro_optimus/components/bitrix/sale.basket.basket/basket/js/mustache.min.js?15898050725835";s:6:"source";s:90:"/bitrix/templates/aspro_optimus/components/bitrix/sale.basket.basket/basket/js/mustache.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function e(t,r){if(typeof exports==="object"&&exports&&typeof exports.nodeName!=="string"){r(exports)}else if(typeof define==="function"&&define.amd){define(["exports"],r)}else{t.Mustache={};r(t.Mustache)}})(this,function e(t){var r=Object.prototype.toString;var n=Array.isArray||function e(t){return r.call(t)==="[object Array]"};function i(e){return typeof e==="function"}function s(e){return n(e)?"array":typeof e}function a(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function o(e,t){return e!=null&&typeof e==="object"&&t in e}var u=RegExp.prototype.test;function l(e,t){return u.call(e,t)}var f=/\S/;function c(e){return!l(f,e)}var p={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function h(e){return String(e).replace(/[&<>"'`=\/]/g,function e(t){return p[t]})}var v=/\s*/;var d=/\s+/;var g=/\s*=/;var w=/\s*\}/;var y=/#|\^|\/|>|\{|&|=|!/;function x(e,r){if(!e)return[];var i=[];var s=[];var o=[];var u=false;var l=false;function f(){if(u&&!l){while(o.length)delete s[o.pop()]}else{o=[]}u=false;l=false}var p,h,x;function E(e){if(typeof e==="string")e=e.split(d,2);if(!n(e)||e.length!==2)throw new Error("Invalid tags: "+e);p=new RegExp(a(e[0])+"\\s*");h=new RegExp("\\s*"+a(e[1]));x=new RegExp("\\s*"+a("}"+e[1]))}E(r||t.tags);var U=new m(e);var T,j,S,V,C,A;while(!U.eos()){T=U.pos;S=U.scanUntil(p);if(S){for(var I=0,R=S.length;I<R;++I){V=S.charAt(I);if(c(V)){o.push(s.length)}else{l=true}s.push(["text",V,T,T+1]);T+=1;if(V==="\n")f()}}if(!U.scan(p))break;u=true;j=U.scan(y)||"name";U.scan(v);if(j==="="){S=U.scanUntil(g);U.scan(g);U.scanUntil(h)}else if(j==="{"){S=U.scanUntil(x);U.scan(w);U.scanUntil(h);j="&"}else{S=U.scanUntil(h)}if(!U.scan(h))throw new Error("Unclosed tag at "+U.pos);C=[j,S,T,U.pos];s.push(C);if(j==="#"||j==="^"){i.push(C)}else if(j==="/"){A=i.pop();if(!A)throw new Error('Unopened section "'+S+'" at '+T);if(A[1]!==S)throw new Error('Unclosed section "'+A[1]+'" at '+T)}else if(j==="name"||j==="{"||j==="&"){l=true}else if(j==="="){E(S)}}A=i.pop();if(A)throw new Error('Unclosed section "'+A[1]+'" at '+U.pos);return b(k(s))}function k(e){var t=[];var r,n;for(var i=0,s=e.length;i<s;++i){r=e[i];if(r){if(r[0]==="text"&&n&&n[0]==="text"){n[1]+=r[1];n[3]=r[3]}else{t.push(r);n=r}}}return t}function b(e){var t=[];var r=t;var n=[];var i,s;for(var a=0,o=e.length;a<o;++a){i=e[a];switch(i[0]){case"#":case"^":r.push(i);n.push(i);r=i[4]=[];break;case"/":s=n.pop();s[5]=i[2];r=n.length>0?n[n.length-1][4]:t;break;default:r.push(i)}}return t}function m(e){this.string=e;this.tail=e;this.pos=0}m.prototype.eos=function e(){return this.tail===""};m.prototype.scan=function e(t){var r=this.tail.match(t);if(!r||r.index!==0)return"";var n=r[0];this.tail=this.tail.substring(n.length);this.pos+=n.length;return n};m.prototype.scanUntil=function e(t){var r=this.tail.search(t),n;switch(r){case-1:n=this.tail;this.tail="";break;case 0:n="";break;default:n=this.tail.substring(0,r);this.tail=this.tail.substring(r)}this.pos+=n.length;return n};function E(e,t){this.view=e;this.cache={".":this.view};this.parent=t}E.prototype.push=function e(t){return new E(t,this)};E.prototype.lookup=function e(t){var r=this.cache;var n;if(r.hasOwnProperty(t)){n=r[t]}else{var s=this,a,u,l=false;while(s){if(t.indexOf(".")>0){n=s.view;a=t.split(".");u=0;while(n!=null&&u<a.length){if(u===a.length-1)l=o(n,a[u]);n=n[a[u++]]}}else{n=s.view[t];l=o(s.view,t)}if(l)break;s=s.parent}r[t]=n}if(i(n))n=n.call(this.view);return n};function U(){this.cache={}}U.prototype.clearCache=function e(){this.cache={}};U.prototype.parse=function e(r,n){var i=this.cache;var s=i[r];if(s==null)s=i[r+":"+(n||t.tags).join(":")]=x(r,n);return s};U.prototype.render=function e(t,r,n){var i=this.parse(t);var s=r instanceof E?r:new E(r);return this.renderTokens(i,s,n,t)};U.prototype.renderTokens=function e(t,r,n,i){var s="";var a,o,u;for(var l=0,f=t.length;l<f;++l){u=undefined;a=t[l];o=a[0];if(o==="#")u=this.renderSection(a,r,n,i);else if(o==="^")u=this.renderInverted(a,r,n,i);else if(o===">")u=this.renderPartial(a,r,n,i);else if(o==="&")u=this.unescapedValue(a,r);else if(o==="name")u=this.escapedValue(a,r);else if(o==="text")u=this.rawValue(a);if(u!==undefined)s+=u}return s};U.prototype.renderSection=function e(t,r,s,a){var o=this;var u="";var l=r.lookup(t[1]);function f(e){return o.render(e,r,s)}if(!l)return;if(n(l)){for(var c=0,p=l.length;c<p;++c){u+=this.renderTokens(t[4],r.push(l[c]),s,a)}}else if(typeof l==="object"||typeof l==="string"||typeof l==="number"){u+=this.renderTokens(t[4],r.push(l),s,a)}else if(i(l)){if(typeof a!=="string")throw new Error("Cannot use higher-order sections without the original template");l=l.call(r.view,a.slice(t[3],t[5]),f);if(l!=null)u+=l}else{u+=this.renderTokens(t[4],r,s,a)}return u};U.prototype.renderInverted=function e(t,r,i,s){var a=r.lookup(t[1]);if(!a||n(a)&&a.length===0)return this.renderTokens(t[4],r,i,s)};U.prototype.renderPartial=function e(t,r,n){if(!n)return;var s=i(n)?n(t[1]):n[t[1]];if(s!=null)return this.renderTokens(this.parse(s),r,n,s)};U.prototype.unescapedValue=function e(t,r){var n=r.lookup(t[1]);if(n!=null)return n};U.prototype.escapedValue=function e(r,n){var i=n.lookup(r[1]);if(i!=null)return t.escape(i)};U.prototype.rawValue=function e(t){return t[1]};t.name="mustache.js";t.version="2.3.0";t.tags=["{{","}}"];var T=new U;t.clearCache=function e(){return T.clearCache()};t.parse=function e(t,r){return T.parse(t,r)};t.render=function e(t,r,n){if(typeof t!=="string"){throw new TypeError('Invalid template! Template should be a "string" '+'but "'+s(t)+'" was given as the first '+"argument for mustache#render(template, view, partials)")}return T.render(t,r,n)};t.to_html=function e(r,n,s,a){var o=t.render(r,n,s);if(i(a)){a(o)}else{return o}};t.escape=h;t.Scanner=m;t.Context=E;t.Writer=U;return t});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:112:"/bitrix/templates/aspro_optimus/components/bitrix/sale.basket.basket/basket/js/action-pool.min.js?15898050724358";s:6:"source";s:93:"/bitrix/templates/aspro_optimus/components/bitrix/sale.basket.basket/basket/js/action-pool.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function(){"use strict";BX.namespace("BX.Sale.BasketActionPool");BX.Sale.BasketActionPool=function(t){this.component=t;this.requestProcessing=false;this.updateTimer=null;this.isBasketRefreshed=this.component.params.DEFERRED_REFRESH!=="Y";this.needFullRecalculation=this.component.params.DEFERRED_REFRESH==="Y";this.pool={};this.lastActualPool={};this.approvedAction=["QUANTITY","DELETE","RESTORE","DELAY","OFFER","MERGE_OFFER"];this.switchTimer()};BX.Sale.BasketActionPool.prototype.setRefreshStatus=function(t){this.isBasketRefreshed=!!t};BX.Sale.BasketActionPool.prototype.getRefreshStatus=function(){return this.isBasketRefreshed};BX.Sale.BasketActionPool.prototype.isItemInPool=function(t){return!!this.pool[t]};BX.Sale.BasketActionPool.prototype.clearLastActualQuantityPool=function(t){this.lastActualPool[t]&&delete this.lastActualPool[t].QUANTITY};BX.Sale.BasketActionPool.prototype.checkItemPoolBefore=function(t){if(!t)return;this.pool[t]=this.pool[t]||{}};BX.Sale.BasketActionPool.prototype.checkItemPoolAfter=function(t){if(!t||!this.pool[t])return;if(Object.keys(this.pool[t]).length===0){delete this.pool[t]}};BX.Sale.BasketActionPool.prototype.addCoupon=function(t){this.pool.COUPON=t;this.switchTimer()};BX.Sale.BasketActionPool.prototype.removeCoupon=function(t){this.checkItemPoolBefore("REMOVE_COUPON");this.pool.REMOVE_COUPON[t]=t;this.switchTimer()};BX.Sale.BasketActionPool.prototype.changeQuantity=function(t,o,e){this.checkItemPoolBefore(t);if(this.lastActualPool[t]&&this.lastActualPool[t].QUANTITY!==o||!this.lastActualPool[t]&&o!==e){this.pool[t].QUANTITY=o}else{this.pool[t]&&delete this.pool[t].QUANTITY}this.checkItemPoolAfter(t);this.switchTimer()};BX.Sale.BasketActionPool.prototype.deleteItem=function(t){this.checkItemPoolBefore(t);if(this.pool[t].RESTORE){delete this.pool[t].RESTORE}else{this.pool[t].DELETE="Y"}this.checkItemPoolAfter(t);this.switchTimer()};BX.Sale.BasketActionPool.prototype.restoreItem=function(t,o){this.checkItemPoolBefore(t);if(this.pool[t].DELETE==="Y"){delete this.pool[t].DELETE}else{this.pool[t].RESTORE=o}this.checkItemPoolAfter(t);this.switchTimer()};BX.Sale.BasketActionPool.prototype.addDelayed=function(t){this.checkItemPoolBefore(t);this.pool[t].DELAY="Y";this.checkItemPoolAfter(t);this.switchTimer()};BX.Sale.BasketActionPool.prototype.removeDelayed=function(t){this.checkItemPoolBefore(t);this.pool[t].DELAY="N";this.checkItemPoolAfter(t);this.switchTimer()};BX.Sale.BasketActionPool.prototype.changeSku=function(t,o,e){if(JSON.stringify(o)!==JSON.stringify(e)){this.checkItemPoolBefore(t);this.pool[t].OFFER=o}else{this.pool[t]&&delete this.pool[t].OFFER;this.checkItemPoolAfter(t)}this.switchTimer()};BX.Sale.BasketActionPool.prototype.mergeSku=function(t){this.checkItemPoolBefore(t);this.pool[t].MERGE_OFFER="Y";this.switchTimer()};BX.Sale.BasketActionPool.prototype.switchTimer=function(){clearTimeout(this.updateTimer);if(this.isProcessing()){return}if(this.isPoolEmpty()){this.component.editPostponedBasketItems();this.component.fireCustomEvents()}if(!this.isPoolEmpty()){this.updateTimer=setTimeout(BX.proxy(this.trySendPool,this),300)}else if(!this.getRefreshStatus()){this.trySendPool()}};BX.Sale.BasketActionPool.prototype.trySendPool=function(){if(this.isPoolEmpty()&&this.getRefreshStatus()){return}this.doProcessing(true);if(!this.isPoolEmpty()){this.component.sendRequest("recalculateAjax",{basket:this.getPoolData()});this.lastActualPool=this.pool;this.pool={}}else if(!this.getRefreshStatus()){this.component.sendRequest("refreshAjax",{fullRecalculation:this.needFullRecalculation?"Y":"N"});this.needFullRecalculation=false}};BX.Sale.BasketActionPool.prototype.getPoolData=function(){var t={},o=this.pool;if(o.COUPON){t.coupon=o.COUPON;delete o.COUPON}if(o.REMOVE_COUPON){t.delete_coupon=o.REMOVE_COUPON;delete o.REMOVE_COUPON}for(var e in o){if(o.hasOwnProperty(e)){for(var i in o[e]){if(o[e].hasOwnProperty(i)&&BX.util.in_array(i,this.approvedAction)){t[i+"_"+e]=o[e][i]}}}}return t};BX.Sale.BasketActionPool.prototype.isPoolEmpty=function(){return Object.keys(this.pool).length===0};BX.Sale.BasketActionPool.prototype.doProcessing=function(t){this.requestProcessing=t===true;if(this.requestProcessing){this.component.startLoader()}else{this.component.endLoader()}};BX.Sale.BasketActionPool.prototype.isProcessing=function(){return this.requestProcessing===true}})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:108:"/bitrix/templates/aspro_optimus/components/bitrix/sale.basket.basket/basket/js/filter.min.js?158980507210511";s:6:"source";s:88:"/bitrix/templates/aspro_optimus/components/bitrix/sale.basket.basket/basket/js/filter.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function(){"use strict";BX.namespace("BX.Sale.BasketFilter");BX.Sale.BasketFilter=function(t){this.component=t;this.activeFilterMode=false;this.filterTimer=null;this.mouseOverClearFilter=false;this.realShownItems=[];this.realSortedItems=[];this.realScrollTop=0;this.lastShownItemsHash="";this.currentFilter={query:"",similarHash:"",warning:false,notAvailable:false,delayed:false};if(this.component.useItemsFilter){this.bindEvents()}};BX.Sale.BasketFilter.prototype.bindEvents=function(){var t;var e=this.component.getEntity(this.component.getCacheNode(this.component.ids.itemListWrapper),"basket-filter");t=this.component.getEntity(e,"basket-filter-input");if(BX.type.isDomNode(t)){BX.bind(t,"focus",function(){e.style.flex=3});BX.bind(t,"blur",BX.delegate(function(){if(!this.mouseOverClearFilter){e.style.flex=""}},this));BX.bind(t,"keyup",BX.proxy(this.onFilterInput,this));BX.bind(t,"cut",BX.proxy(this.onFilterInput,this));BX.bind(t,"paste",BX.proxy(this.onFilterInput,this))}t=this.component.getEntity(e,"basket-filter-clear-btn");if(BX.type.isDomNode(t)){BX.bind(t,"mouseenter",BX.delegate(function(){this.mouseOverClearFilter=true},this));BX.bind(t,"mouseout",BX.delegate(function(){this.mouseOverClearFilter=false},this));BX.bind(t,"click",BX.delegate(function(){if(!this.filterInputEmpty()){this.clearFilterInput();this.onFilterChange()}e.style.flex=""},this))}};BX.Sale.BasketFilter.prototype.isActive=function(){return this.activeFilterMode};BX.Sale.BasketFilter.prototype.showFilterByName=function(t){if(!t)return;switch(t){case"not-available":this.showNotAvailableItemsFilter();break;case"delayed":this.showDelayItemsFilter();break;case"warning":this.showWarningItemsFilter();break;case"similar":this.showSimilarItemsFilter();break;case"all":default:this.clearAllFiltersExcept([]);this.onFilterChange()}};BX.Sale.BasketFilter.prototype.onFilterInput=function(){var t=BX.type.isDomNode(BX.proxy_context)?BX.util.trim(BX.proxy_context.value).toLowerCase():"";if(this.currentFilter.query!==t){this.currentFilter.query=t;this.onFilterChange()}};BX.Sale.BasketFilter.prototype.clearAllFiltersExcept=function(t){if(!t||!BX.type.isArray(t))return;!BX.util.in_array("input",t)&&this.clearFilterInput();!BX.util.in_array("warning",t)&&this.clearWarningItemsFilter();!BX.util.in_array("delayed",t)&&this.clearDelayItemsFilter();!BX.util.in_array("not-available",t)&&this.clearNotAvailableItemsFilter();if(!BX.util.in_array("similar",t)){this.clearSimilarItemsFilter();this.component.showSimilarCount(false)}};BX.Sale.BasketFilter.prototype.filterInputEmpty=function(){return this.currentFilter.query.length===0};BX.Sale.BasketFilter.prototype.clearFilterInput=function(){this.currentFilter.query="";var t=this.component.getEntity(this.component.getCacheNode(this.component.ids.itemListWrapper),"basket-filter-input");if(BX.type.isDomNode(t)){t.value=""}};BX.Sale.BasketFilter.prototype.addWarningItemsFilter=function(){this.currentFilter.warning=true};BX.Sale.BasketFilter.prototype.clearWarningItemsFilter=function(){this.currentFilter.warning=false};BX.Sale.BasketFilter.prototype.showWarningItemsFilter=function(){if(!this.currentFilter.warning){this.clearAllFiltersExcept(["warning"]);this.addWarningItemsFilter();this.onFilterChange()}};BX.Sale.BasketFilter.prototype.addDelayItemsFilter=function(){this.currentFilter.delayed=true};BX.Sale.BasketFilter.prototype.clearDelayItemsFilter=function(){this.currentFilter.delayed=false};BX.Sale.BasketFilter.prototype.showDelayItemsFilter=function(){if(!this.currentFilter.delayed){this.clearAllFiltersExcept(["delayed"]);this.addDelayItemsFilter();this.onFilterChange()}};BX.Sale.BasketFilter.prototype.addNotAvailableItemsFilter=function(){this.currentFilter.notAvailable=true};BX.Sale.BasketFilter.prototype.clearNotAvailableItemsFilter=function(){this.currentFilter.notAvailable=false};BX.Sale.BasketFilter.prototype.showNotAvailableItemsFilter=function(){if(!this.currentFilter.notAvailable){this.clearAllFiltersExcept(["not-available"]);this.addNotAvailableItemsFilter();this.onFilterChange()}};BX.Sale.BasketFilter.prototype.addSimilarItemsFilter=function(t){this.currentFilter.similarHash=t.HASH};BX.Sale.BasketFilter.prototype.clearSimilarItemsFilter=function(){this.currentFilter.similarHash=""};BX.Sale.BasketFilter.prototype.showSimilarItemsFilter=function(){var t=this.component.getItemDataByTarget(BX.proxy_context);if(this.currentFilter.similarHash!==t.HASH){this.clearAllFiltersExcept(["similar"]);this.addSimilarItemsFilter(t);this.onFilterChange()}};BX.Sale.BasketFilter.prototype.getTimeoutDuration=function(){return this.component.duration.filterTimer};BX.Sale.BasketFilter.prototype.onFilterChange=function(){this.component.showItemsOverlay();if(this.currentFilter.query.length||this.currentFilter.similarHash.length||this.currentFilter.warning||this.currentFilter.notAvailable||this.currentFilter.delayed){clearTimeout(this.filterTimer);this.filterTimer=setTimeout(BX.proxy(this.enableFilterMode,this),this.getTimeoutDuration())}else{this.disableFilterMode()}};BX.Sale.BasketFilter.prototype.enableFilterMode=function(){var t;if(!this.activeFilterMode){this.activeFilterMode=true;this.realShownItems=BX.util.array_values(this.component.shownItems);this.realSortedItems=BX.util.array_values(this.component.sortedItems);this.realScrollTop=this.component.getDocumentScrollTop()}this.component.scrollToFirstItem();this.component.sortedItems=this.searchItems();t=JSON.stringify(this.component.sortedItems);if(this.lastShownItemsHash!==t){this.lastShownItemsHash=t;this.component.deleteBasketItems(BX.util.array_values(this.component.shownItems),false);if(this.component.sortedItems.length){this.component.initializeBasketItems();this.hideEmptyFilterResult()}else{this.showEmptyFilterResult()}if(this.currentFilter.similarHash.length){this.component.showSimilarCount(true)}}else{this.highlightFoundItems()}this.component.hideItemsOverlay()};BX.Sale.BasketFilter.prototype.disableFilterMode=function(){clearTimeout(this.filterTimer);this.lastShownItemsHash="";if(this.activeFilterMode){this.activeFilterMode=false;this.component.sortedItems=BX.util.array_values(this.realSortedItems);this.component.deleteBasketItems(BX.util.array_values(this.component.shownItems),false);this.hideEmptyFilterResult();this.component.editBasketItems(BX.util.array_values(this.realShownItems));window.scrollTo(0,this.realScrollTop)}this.component.hideItemsOverlay()};BX.Sale.BasketFilter.prototype.searchItems=function(){var t=[];for(var e=0;e<this.realSortedItems.length;e++){var i=this.component.items[this.realSortedItems[e]];if(i&&this.searchItemMatch(i)){t.push(i.ID)}}return t};BX.Sale.BasketFilter.prototype.highlightFoundItems=function(){if(!this.activeFilterMode)return;for(var t in this.component.shownItems){if(this.component.shownItems.hasOwnProperty(t)){this.highlightSearchMatch(this.component.items[this.component.shownItems[t]])}}};BX.Sale.BasketFilter.prototype.searchItemMatch=function(t){var e=false,i=false;if(this.currentFilter.notAvailable){i=!!t.NOT_AVAILABLE;if(!i){return e}}else if(this.currentFilter.delayed){i=!!t.DELAYED;if(!i){return e}}else if(this.currentFilter.warning){i=BX.util.in_array(t.ID,this.component.warningItems);if(!i){return e}}else if(BX.type.isNotEmptyString(this.currentFilter.similarHash)){i=this.currentFilter.similarHash===t.HASH;if(!i){return e}}if(BX.type.isNotEmptyString(this.currentFilter.query)){if(t.NAME.toLowerCase().indexOf(this.currentFilter.query)!==-1){e="NAME"}if(!e){var r=parseFloat(this.currentFilter.query);if(!isNaN(r)){if(parseFloat(t.PRICE)===r){e="PRICE"}else if(parseFloat(t.SUM_PRICE)===r){e="SUM_PRICE"}}}if(!e&&this.currentFilter.query.length>=3){if(t.PRICE_FORMATED.toLowerCase().indexOf(this.currentFilter.query)!==-1){e="PRICE"}else if(t.SUM_PRICE_FORMATED.toLowerCase().indexOf(this.currentFilter.query)!==-1){e="SUM_PRICE"}}var s,l;if(!e&&t.PROPS.length){for(s in t.PROPS){if(t.PROPS.hasOwnProperty(s)&&BX.type.isNotEmptyString(t.PROPS[s].VALUE)){l=t.PROPS[s].VALUE.toLowerCase();if(l===this.currentFilter.query||this.currentFilter.query.length>=3&&l.indexOf(this.currentFilter.query)!==-1){e="PROPS";break}}}}if(!e&&t.COLUMN_LIST.length){for(s in t.COLUMN_LIST){if(t.COLUMN_LIST.hasOwnProperty(s)&&BX.type.isNotEmptyString(t.COLUMN_LIST[s].VALUE)){l=t.COLUMN_LIST[s].VALUE.toLowerCase();if(l===this.currentFilter.query||this.currentFilter.query.length>=3&&l.indexOf(this.currentFilter.query)!==-1){e="COLUMNS";break}}}}}else if(i){e=true}return e};BX.Sale.BasketFilter.prototype.highlightSearchMatch=function(t){var e=this.searchItemMatch(t);if(e){var i,r,s,l;switch(e){case"NAME":i=this.component.getEntity(BX(this.component.ids.item+t.ID),"basket-item-name");if(BX.type.isDomNode(i)){i.innerHTML=t.NAME.replace(new RegExp("(.*)("+this.currentFilter.query.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")(.*)","gi"),function(t,e,i,r){return BX.util.htmlspecialchars(e)+'<span class="basket-item-highlighted">'+BX.util.htmlspecialchars(i)+"</span>"+BX.util.htmlspecialchars(r)})}break;case"PRICE":i=BX(this.component.ids.price+t.ID);BX.addClass(i,"basket-item-highlighted");break;case"SUM_PRICE":i=BX(this.component.ids.sumPrice+t.ID);BX.addClass(i,"basket-item-highlighted");break;case"PROPS":i=this.component.getEntities(BX(this.component.ids.item+t.ID),"basket-item-property-value");for(r=0;r<i.length;r++){l=i[r].getAttribute("data-property-code");for(s in t.PROPS){if(t.PROPS.hasOwnProperty(s)&&t.PROPS[s].CODE===l){i[r].innerHTML=t.PROPS[s].VALUE.replace(new RegExp("("+this.currentFilter.query+")","gi"),'<span class="basket-item-highlighted">$1</span>')}}}break;case"COLUMNS":i=this.component.getEntities(BX(this.component.ids.item+t.ID),"basket-item-property-column-value");for(r=0;r<i.length;r++){l=i[r].getAttribute("data-column-property-code");for(s in t.COLUMN_LIST){if(t.COLUMN_LIST.hasOwnProperty(s)&&t.COLUMN_LIST[s].CODE===l){i[r].innerHTML=t.COLUMN_LIST[s].VALUE.replace(new RegExp("("+this.currentFilter.query+")","gi"),'<span class="basket-item-highlighted">$1</span>')}}}break}}};BX.Sale.BasketFilter.prototype.showEmptyFilterResult=function(){var t=this.component.getCacheNode(this.component.ids.itemList);if(BX.type.isDomNode(t)&&t.clientHeight>=500){var e=this.component.getCacheNode(this.component.ids.itemListEmptyResult);if(BX.type.isDomNode(e)){e.style.display=""}}};BX.Sale.BasketFilter.prototype.hideEmptyFilterResult=function(){var t=this.component.getCacheNode(this.component.ids.itemListEmptyResult);if(BX.type.isDomNode(t)){t.style.display="none"}}})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:107:"/bitrix/templates/aspro_optimus/components/bitrix/sale.basket.basket/basket/js/component.js?160095300262158";s:6:"source";s:91:"/bitrix/templates/aspro_optimus/components/bitrix/sale.basket.basket/basket/js/component.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
;(function() {
	'use strict';

	BX.namespace('BX.Sale.BasketComponent');

	BX.Sale.BasketComponent = {
		maxItemsShowCount: 30,
		precisionFactor: Math.pow(10, 6),
		stickyHeaderOffset: 0,

		duration: {
			priceAnimation: 300,
			filterTimer: 300
		},

		ids: {
			item: 'basket-item-',
			quantity: 'basket-item-quantity-',
			price: 'basket-item-price-',
			sumPrice: 'basket-item-sum-price-',
			sumPriceOld: 'basket-item-sum-price-old-',
			sumPriceDiff: 'basket-item-sum-price-difference-',
			itemHeightAligner: 'basket-item-height-aligner-',
			total: 'basket-total-price',
			basketRoot: 'basket-root',
			itemListWrapper: 'basket-items-list-wrapper',
			itemListContainer: 'basket-items-list-container',
			itemList: 'basket-item-list',
			itemListTable: 'basket-item-table',
			itemListEmptyResult: 'basket-item-list-empty-result',
			itemListOverlay: 'basket-items-list-overlay',
			warning: 'basket-warning'
		},

		initializePrimaryFields: function()
		{
			this.templates = {};
			this.nodes = {};

			/** Object of all basket items (itemId => itemArray) */
			this.items = {};

			/** Array of all basket items to show sorted by field SORT */
			this.sortedItems = [];

			/** Array of basket items showed on screen */
			this.shownItems = [];

			/** Array of basket items changed since last request */
			this.changedItems = [];

			/** Array of basket items postponed by pool to edit */
			this.postponedItems = [];

			/** Array of basket items with warnings */
			this.warningItems = [];

			this.isMobile = BX.browser.IsMobile();
			this.isTouch = BX.hasClass(document.documentElement, 'bx-touch');

			this.lastAction = 'initialLoad';
			this.coupons = null;

			this.imagePopup = null;
			this.loadingScreen = null;

			this.quantityDelay = null;
			this.quantityTimer = null;
		},

		init: function(parameters)
		{
			this.initializePrimaryFields();

			this.params = parameters.params || {};
			this.template = parameters.template || '';
			this.signedParamsString = parameters.signedParamsString || '';
			this.siteId = parameters.siteId || '';
			this.siteTemplateId = parameters.siteTemplateId || '';
			this.ajaxUrl = this.params.AJAX_PATH || '';
			this.templateFolder = parameters.templateFolder || '';

			this.useDynamicScroll = this.params.USE_DYNAMIC_SCROLL === 'Y';
			this.useItemsFilter = this.params.SHOW_FILTER === 'Y' && !this.isMobile;

			this.initializeFilter();
			this.applyBasketResult(parameters.result);
			this.initializeActionPool();

			if (this.useItemsFilter)
			{
				this.checkHeaderDisplay();
				this.bindHeaderEvents();
			}

			this.initializeBasketItems();
			this.editTotal();
			this.editWarnings();

			this.getCacheNode(this.ids.basketRoot).style.opacity = 1;

			this.bindInitialEvents();
		},

		getTemplate: function(templateName)
		{
			if (!this.templates.hasOwnProperty(templateName))
			{
				var template = BX(templateName);
				this.templates[templateName] = BX.type.isDomNode(template) ? template.innerHTML : '';
			}

			return this.templates[templateName];
		},

		getCacheNode: function(id)
		{
			if (!this.nodes.hasOwnProperty(id))
			{
				this.nodes[id] = BX(id);
			}

			return this.nodes[id];
		},

		getEntity: function(parent, entity, additionalFilter)
		{
			if (!parent || !entity)
				return null;

			additionalFilter = additionalFilter || '';

			return parent.querySelector(additionalFilter + '[data-entity="' + entity + '"]');
		},

		getEntities: function(parent, entity, additionalFilter)
		{
			if (!parent || !entity)
				return {length: 0};

			additionalFilter = additionalFilter || '';

			return parent.querySelectorAll(additionalFilter + '[data-entity="' + entity + '"]');
		},

		bindInitialEvents: function()
		{
			this.bindWarningEvents();

			BX.bind(window, 'scroll', BX.proxy(this.checkStickyHeaders, this));
			BX.bind(window, 'scroll', BX.proxy(this.lazyLoad, this));

			BX.bind(window, 'resize', BX.throttle(this.checkStickyHeaders, 20, this));
		},

		bindWarningEvents: function()
		{
			var showItemsNode = this.getEntity(BX(this.ids.warning), 'basket-items-warning-count');

			if (BX.type.isDomNode(showItemsNode))
			{
				showItemsNode.style.display = '';
				BX.bind(showItemsNode, 'click', BX.delegate(function() {this.toggleFilter('warning');}, this));
			}

			BX.bind(
				this.getEntity(BX(this.ids.warning), 'basket-items-warning-notification-close'),
				'click',
				BX.proxy(this.removeAllWarnings, this)
			);
		},

		toggleFilter: function(event)
		{
			var target = BX.type.isNotEmptyString(event) ?
				this.getEntity(
					this.getCacheNode(this.ids.itemListWrapper),
					'basket-items-count',
					'[data-filter="' + event + '"]'
				)
				: BX.getEventTarget(event);

			if (!BX.type.isDomNode(target) || BX.hasClass(target, 'active'))
				return;

			var entityName = target.getAttribute('data-filter');
			var entities = target.parentNode.querySelectorAll('[data-filter]');

			for (var i = 0; i < entities.length; i++)
			{
				if (entities[i].getAttribute('data-filter') === entityName)
				{
					BX.addClass(entities[i], 'active');
				}
				else if (BX.hasClass(entities[i], 'active'))
				{
					BX.removeClass(entities[i], 'active');
				}
			}

			this.filter.showFilterByName(entityName);
		},

		scrollToFirstItem: function()
		{
			var headerNode = this.getEntity(this.getCacheNode(this.ids.itemListWrapper), 'basket-items-list-header');

			if (BX.type.isDomNode(headerNode))
			{
				var itemListTopPosition = BX.pos(this.getCacheNode(this.ids.itemListContainer)).top;
				var headerBottomPosition = BX.pos(headerNode).bottom;

				if (itemListTopPosition < headerBottomPosition)
				{
					window.scrollTo(0, itemListTopPosition - this.stickyHeaderOffset);
				}
			}
		},

		showItemsOverlay: function()
		{
			var overlay = this.getCacheNode(this.ids.itemListOverlay);

			if (BX.type.isDomNode(overlay))
			{
				overlay.style.display = '';
			}
		},

		hideItemsOverlay: function()
		{
			var overlay = this.getCacheNode(this.ids.itemListOverlay);

			if (BX.type.isDomNode(overlay))
			{
				overlay.style.display = 'none';
			}
		},

		checkHeaderDisplay: function()
		{
			var header = this.getCacheNode(this.ids.itemListWrapper);

			if (BX.type.isDomNode(header))
			{
				BX.removeClass(header, 'basket-items-list-wrapper-light');
			}
		},

		bindHeaderEvents: function()
		{
			var entities = this.getEntities(this.getCacheNode(this.ids.itemListWrapper), 'basket-items-count');

			for (var i = 0; i < entities.length; i++)
			{
				BX.bind(entities[i], 'click', BX.proxy(this.toggleFilter, this));
			}
		},

		checkStickyHeaders: function()
		{
			if (this.isMobile)
				return;

			var node, position;
			var border = 2, offset = 0;
			var scrollTop = this.getDocumentScrollTop();
			var basketPosition = BX.pos(this.getCacheNode(this.ids.basketRoot));
			var basketScrolledToEnd = scrollTop + 200 >= basketPosition.bottom;

			if (BX.util.in_array('top', this.params.TOTAL_BLOCK_DISPLAY))
			{
				var totalBlockNode = this.getEntity(this.getCacheNode(this.ids.basketRoot), 'basket-total-block');
				if (BX.type.isDomNode(totalBlockNode))
				{
					node = this.getEntity(totalBlockNode, 'basket-checkout-aligner');
					if (BX.type.isDomNode(node))
					{
						position = BX.pos(totalBlockNode);

						if (scrollTop >= position.top)
						{
							offset += node.clientHeight;

							if (!BX.hasClass(node, 'basket-checkout-container-fixed'))
							{
								totalBlockNode.style.height = position.height + 'px';

								node.style.width = node.clientWidth + border + 'px';
								BX.addClass(node, 'basket-checkout-container-fixed');
							}
						}
						else if (BX.hasClass(node, 'basket-checkout-container-fixed'))
						{
							totalBlockNode.style.height = '';

							node.style.width = '';
							BX.removeClass(node, 'basket-checkout-container-fixed');
						}

						if (basketScrolledToEnd)
						{
							if (!BX.hasClass(node, 'basket-checkout-container-fixed-hide'))
							{
								BX.addClass(node, 'basket-checkout-container-fixed-hide');
							}
						}
						else if (BX.hasClass(node, 'basket-checkout-container-fixed-hide'))
						{
							BX.removeClass(node, 'basket-checkout-container-fixed-hide');
						}
					}
				}
			}

			if (this.useItemsFilter)
			{
				var itemWrapperNode = this.getCacheNode(this.ids.itemListWrapper);

				node = this.getEntity(itemWrapperNode, 'basket-items-list-header');
				if (BX.type.isDomNode(node))
				{
					position = BX.pos(itemWrapperNode);

					if ((scrollTop + offset >= position.top) && !basketScrolledToEnd)
					{
						if (!BX.hasClass(node, 'basket-items-list-header-fixed'))
						{
							node.style.width = node.clientWidth + border + 'px';

							itemWrapperNode.style.paddingTop = node.clientHeight + 'px';

							BX.addClass(node, 'basket-items-list-header-fixed');
						}

						if (offset)
						{
							node.style.top = offset + 'px';
						}

						offset += node.clientHeight;
					}
					else if (BX.hasClass(node, 'basket-items-list-header-fixed'))
					{
						itemWrapperNode.style.paddingTop = '';

						node.style.width = '';
						node.style.top = '';

						BX.removeClass(node, 'basket-items-list-header-fixed');
					}
				}
			}

			this.stickyHeaderOffset = offset;
		},

		getDocumentScrollTop: function()
		{
			return window.scrollY
				|| window.pageYOffset
				|| document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
		},

		lazyLoad: function()
		{
			var itemsNodePosition = BX.pos(this.getCacheNode(this.ids.itemListContainer));

			if (this.getDocumentScrollTop() + window.innerHeight >= itemsNodePosition.bottom - 400)
			{
				var itemIds = this.getItemsAfter();
				if (itemIds.length)
				{
					this.editBasketItems(itemIds);
				}
			}
		},

		fireCustomEvents: function()
		{
			if (this.result.EVENT_ONCHANGE_ON_START === 'Y')
			{
				BX.onCustomEvent('OnBasketChange');
			}

			if (this.params.HIDE_COUPON !== 'Y')
			{
				if (this.coupons !== null && this.coupons !== this.result.COUPON_LIST)
				{
					BX.onCustomEvent('OnCouponApply');
				}

				this.coupons = this.result.COUPON_LIST;
			}
		},

		editTotal: function()
		{
			this.fillTotalBlocks();
			this.showItemsCount();
			this.showWarningItemsCount();
			this.showNotAvailableItemsCount();
			this.showDelayedItemsCount();
		},

		fillTotalBlocks: function()
		{
			var totalNodes = this.getEntities(this.getCacheNode(this.ids.basketRoot), 'basket-total-block');

			if (totalNodes && totalNodes.length)
			{
				var totalTemplate = this.getTemplate('basket-total-template');
				if (totalTemplate)
				{
					var totalRender = this.render(totalTemplate, this.result.TOTAL_RENDER_DATA);

					for (var i in totalNodes)
					{
						if (totalNodes.hasOwnProperty(i) && BX.type.isDomNode(totalNodes[i]))
						{
							totalNodes[i].innerHTML = totalRender;

							this.bindTotalEvents(totalNodes[i]);
						}
					}
				}
			}

			this.checkStickyHeaders();
		},

		showItemsCount: function()
		{
			var itemCountNode = this.getEntity(
				this.getCacheNode(this.ids.itemListWrapper),
				'basket-items-count',
				'[data-filter="all"]'
			);

			if (BX.type.isDomNode(itemCountNode))
			{
				itemCountNode.innerHTML = BX.message('SBB_IN_BASKET') + ' (' + this.result.BASKET_ITEMS_COUNT + ')';
				itemCountNode.style.display = '';
			}
		},

		showSimilarCount: function(state)
		{
			var itemCountNode = this.getEntity(
				this.getCacheNode(this.ids.itemListWrapper),
				'basket-items-count',
				'[data-filter="similar"]'
			);

			if (BX.type.isDomNode(itemCountNode))
			{
				if (state)
				{
					itemCountNode.innerHTML = this.sortedItems.length + ' '
						+ this.getGoodsMessage(this.result.BASKET_ITEMS_COUNT, 'SBB_SIMILAR_ITEM');
					itemCountNode.style.display = '';
				}
				else
				{
					itemCountNode.style.display = 'none';
				}
			}
		},

		showWarningItemsCount: function()
		{
			var itemCountNode = this.getEntity(
				this.getCacheNode(this.ids.itemListWrapper),
				'basket-items-count',
				'[data-filter="warning"]'
			);

			if (BX.type.isDomNode(itemCountNode))
			{
				if (this.warningItems.length)
				{
					itemCountNode.innerHTML = BX.message('SBB_BASKET_ITEMS_WARNING') + ' (' + this.warningItems.length + ')';
					itemCountNode.style.display = '';
				}
				else
				{
					itemCountNode.style.display = 'none';
				}
			}
		},

		showNotAvailableItemsCount: function()
		{
			var itemCountNode = this.getEntity(
				this.getCacheNode(this.ids.itemListWrapper),
				'basket-items-count',
				'[data-filter="not-available"]'
			);

			if (BX.type.isDomNode(itemCountNode))
			{
				if (parseInt(this.result.NOT_AVAILABLE_BASKET_ITEMS_COUNT))
				{
					itemCountNode.innerHTML = this.result.NOT_AVAILABLE_BASKET_ITEMS_COUNT + ' '
						+ this.getGoodsMessage(this.result.NOT_AVAILABLE_BASKET_ITEMS_COUNT, 'SBB_NOT_AVAILABLE_ITEM');
					itemCountNode.style.display = '';
				}
				else
				{
					itemCountNode.style.display = 'none';
				}
			}
		},

		showDelayedItemsCount: function()
		{
			var itemCountNode = this.getEntity(
				this.getCacheNode(this.ids.itemListWrapper),
				'basket-items-count',
				'[data-filter="delayed"]'
			);

			if (BX.type.isDomNode(itemCountNode))
			{
				if (parseInt(this.result.DELAYED_BASKET_ITEMS_COUNT))
				{
					itemCountNode.innerHTML = this.result.DELAYED_BASKET_ITEMS_COUNT + ' '
						+ this.getGoodsMessage(this.result.DELAYED_BASKET_ITEMS_COUNT, 'SBB_DELAYED_ITEM');
					itemCountNode.style.display = '';
				}
				else
				{
					itemCountNode.style.display = 'none';
				}
			}
		},

		getGoodsMessage: function(count, customMessage)
		{
			var mesCode;
			var countReminder = (count > 10 && count < 20) ? 0 : count % 10;

			if (countReminder === 1)
			{
				mesCode = customMessage || 'SBB_GOOD';
			}
			else if (countReminder >= 2 && countReminder <= 4)
			{
				mesCode = customMessage ? customMessage + '_2' : 'SBB_GOOD_2';
			}
			else
			{
				mesCode = customMessage ? customMessage + 'S' : 'SBB_GOODS';
			}

			return BX.message(mesCode);
		},

		bindTotalEvents: function(node)
		{
			if (!this.result.TOTAL_RENDER_DATA.DISABLE_CHECKOUT)
			{
				BX.bind(this.getEntity(node, 'basket-checkout-button'), 'click', BX.proxy(this.checkOutAction, this));
			}

			BX.bind(this.getEntity(node, 'basket-coupon-input'), 'change', BX.proxy(this.addCouponAction, this));
			BX.bind(this.getEntity(node, 'basket-coupon-input'), 'paste', BX.proxy(this.pasteCouponAction, this));

			var couponNodes = this.getEntities(node, 'basket-coupon-delete');
			for (var i = 0, l = couponNodes.length; i < l; i++)
			{
				BX.bind(couponNodes[i], 'click', BX.proxy(this.removeCouponAction, this));
			}

		},

		checkOutAction: function()
		{
			document.location.href = this.params.PATH_TO_ORDER;
		},

		addCouponAction: function(event)
		{
			var target = BX.getEventTarget(event);
			if (target && target.value)
			{
				this.actionPool.addCoupon(target.value);
				target.disabled = true;
			}
		},

		pasteCouponAction: function(event)
		{
			setTimeout(BX.delegate(function() {
				this.addCouponAction(event);
			}, this), 10);
		},

		removeCouponAction: function()
		{
			var value = BX.proxy_context && BX.util.trim(BX.proxy_context.getAttribute('data-coupon'));
			if (value)
			{
				this.actionPool.removeCoupon(value);
			}
		},

		initializeActionPool: function()
		{
			this.actionPool = new BX.Sale.BasketActionPool(this);
		},

		initializeFilter: function()
		{
			this.filter = new BX.Sale.BasketFilter(this);
		},

		/**
		 * Send ajax request with basket data and executes callback by action
		 */
		sendRequest: function(action, data)
		{
			this.lastAction = action;

			if (this.lastAction === 'recalculateAjax')
			{
				// we use it to reload all items if applied discounts changed
				data.lastAppliedDiscounts = BX.util.array_keys(this.result.FULL_DISCOUNT_LIST).join(',');

				if (this.params.USE_ENHANCED_ECOMMERCE === 'Y')
				{
					this.checkAnalytics(data);
				}
			}

			BX.ajax({
				method: 'POST',
				dataType: 'json',
				url: this.ajaxUrl,
				data: this.getData(data),
				onsuccess: BX.delegate(function(result) {
					this.actionPool.doProcessing(false);

					if (!BX.type.isPlainObject(result))
						return;

					this.actionPool.setRefreshStatus(result.BASKET_REFRESHED);

					if (result.RESTORED_BASKET_ITEMS)
					{
						this.restoreBasketItems(result.RESTORED_BASKET_ITEMS);
					}

					if (result.DELETED_BASKET_ITEMS)
					{
						this.deleteBasketItems(result.DELETED_BASKET_ITEMS, this.params.SHOW_RESTORE === 'Y');
					}

					if (result.MERGED_BASKET_ITEMS)
					{
						this.deleteBasketItems(result.MERGED_BASKET_ITEMS, false, true);
					}

					this.applyBasketResult(result.BASKET_DATA);
					this.editBasketItems(this.getItemsToEdit());
					this.editTotal();

					this.applyPriceAnimation();
					this.editWarnings();

					this.setNotAvail(result.BASKET_DATA); // LEEFT
					this.actionPool.switchTimer();

					if (this.isBasketIntegrated() && this.isBasketChanged())
					{
						BX.Sale.OrderAjaxComponent.sendRequest();
					}
				}, this),
				onfailure: BX.delegate(function() {
					this.actionPool.doProcessing(false);
				}, this)
			});
		},

		isBasketIntegrated: function()
		{
			return this.params.BASKET_WITH_ORDER_INTEGRATION === 'Y';
		},

		isBasketChanged: function()
		{
			return this.changedItems.length;
		},

		addPriceAnimationData: function(nodeId, start, finish, currency)
		{
			if (!BX.type.isPlainObject(this.priceAnimationData))
			{
				this.clearPriceAnimationData();
			}

			this.priceAnimationData.start[nodeId] = parseFloat(start);
			this.priceAnimationData.finish[nodeId] = parseFloat(finish);
			this.priceAnimationData.currency[nodeId] = currency;
			this.priceAnimationData.int[nodeId] = (parseFloat(start) === parseInt(start)) && (parseFloat(finish) === parseInt(finish));
		},

		clearPriceAnimationData: function()
		{
			this.priceAnimationData = {
				start: {},
				finish: {},
				currency: {},
				int: {}
			};
		},

		applyBasketResult: function(result)
		{
			this.changedItems = [];
			this.clearPriceAnimationData();

			if (!BX.type.isPlainObject(result))
			{
				return;
			}

			if (result.BASKET_ITEM_RENDER_DATA)
			{
				var i, newData;

				for (i in result.BASKET_ITEM_RENDER_DATA)
				{
					if (result.BASKET_ITEM_RENDER_DATA.hasOwnProperty(i))
					{
						newData = result.BASKET_ITEM_RENDER_DATA[i];
						newData.WARNINGS = this.checkBasketItemWarnings(newData, result.WARNING_MESSAGE_WITH_CODE);

						if (this.items[newData.ID])
						{
							if (JSON.stringify(this.items[newData.ID]) === JSON.stringify(newData))
							{
								continue;
							}
						}
						else
						{
							this.addSortedItem(newData.ID, true);
						}

						this.changedItems.push(newData.ID);

						newData = this.checkBasketItemsAnimation(newData);
						this.items[newData.ID] = newData;
					}
				}

				this.changedItems = BX.util.array_unique(this.changedItems.concat(this.getChangedSimilarOffers()));

				if (this.isBasketChanged())
				{
					this.sortSortedItems(true);
				}
			}

			if (result.TOTAL_RENDER_DATA)
			{
				result.TOTAL_RENDER_DATA = this.checkTotalAnimation(result.TOTAL_RENDER_DATA);
			}

			this.result = result;
		},

		itemSortFunction: function(a, b)
		{
			if (!this.items.hasOwnProperty(a) || !this.items.hasOwnProperty(b))
			{
				return 0;
			}

			return parseFloat(this.items[a].SORT) - parseFloat(this.items[b].SORT);
		},

		getChangedSimilarOffers: function()
		{
			var changedSimilarOffers = [];

			var otherSimilarItemsQuantity, totalSimilarItemsQuantity;
			var hashMap = this.getHashMap();

			for (var hash in hashMap)
			{
				if (hashMap.hasOwnProperty(hash))
				{
					if (hashMap[hash].length > 1)
					{
						for (var i = 0; i < hashMap[hash].length; i++)
						{
							otherSimilarItemsQuantity = 0;
							totalSimilarItemsQuantity = 0;

							for (var k = 0; k < hashMap[hash].length; k ++)
							{
								if (hashMap[hash][k] != hashMap[hash][i])
								{
									otherSimilarItemsQuantity += parseFloat(this.items[hashMap[hash][k]].QUANTITY);
								}

								totalSimilarItemsQuantity += parseFloat(this.items[hashMap[hash][k]].QUANTITY);
							}

							if (
								!this.items[hashMap[hash][i]].HAS_SIMILAR_ITEMS
								|| this.items[hashMap[hash][i]].SIMILAR_ITEMS_QUANTITY != otherSimilarItemsQuantity
								|| this.items[hashMap[hash][i]].TOTAL_SIMILAR_ITEMS_QUANTITY != totalSimilarItemsQuantity
							)
							{
								changedSimilarOffers.push(hashMap[hash][i]);

								this.items[hashMap[hash][i]].HAS_SIMILAR_ITEMS = true;
								this.items[hashMap[hash][i]].SIMILAR_ITEMS_QUANTITY = otherSimilarItemsQuantity;
								this.items[hashMap[hash][i]].TOTAL_SIMILAR_ITEMS_QUANTITY = totalSimilarItemsQuantity;

								this.items[hashMap[hash][i]].ALL_AVAILABLE_QUANTITY = this.items[hashMap[hash][i]].AVAILABLE_QUANTITY;
								this.items[hashMap[hash][i]].AVAILABLE_QUANTITY = this.items[hashMap[hash][i]].ALL_AVAILABLE_QUANTITY - otherSimilarItemsQuantity;
							}
						}
					}
					else if (hashMap[hash][0] && this.items[hashMap[hash][0]].HAS_SIMILAR_ITEMS)
					{
						changedSimilarOffers.push(hashMap[hash][0]);

						delete this.items[hashMap[hash][0]].HAS_SIMILAR_ITEMS;
						delete this.items[hashMap[hash][0]].SIMILAR_ITEMS_QUANTITY;
						delete this.items[hashMap[hash][0]].TOTAL_SIMILAR_ITEMS_QUANTITY;

						this.items[hashMap[hash][0]].AVAILABLE_QUANTITY = this.items[hashMap[hash][0]].ALL_AVAILABLE_QUANTITY;
						delete this.items[hashMap[hash][0]].ALL_AVAILABLE_QUANTITY;
					}
				}
			}

			return changedSimilarOffers;
		},

		getHashMap: function()
		{
			var hashMap = {};

			for (var id in this.items)
			{
				if (this.items.hasOwnProperty(id) && this.isItemAvailable(id))
				{
					if (!hashMap.hasOwnProperty(this.items[id].HASH))
					{
						hashMap[this.items[id].HASH] = [];
					}

					hashMap[this.items[id].HASH].push(id);
				}
			}

			return hashMap;
		},

		isItemAvailable: function(itemId)
		{
			var sortedItems = this.filter.isActive() ? this.filter.realSortedItems : this.sortedItems;

			return !this.items[itemId].NOT_AVAILABLE
				&& !this.items[itemId].SHOW_RESTORE
				&& BX.util.in_array(itemId, sortedItems);
		},

		checkTotalAnimation: function(totalData)
		{
			if (this.result && this.result.TOTAL_RENDER_DATA && parseFloat(this.result.TOTAL_RENDER_DATA.PRICE) > parseFloat(totalData.PRICE))
			{
				totalData.PRICE_NEW = totalData.PRICE;
				totalData.PRICE = this.result.TOTAL_RENDER_DATA.PRICE;

				totalData.PRICE_FORMATED_NEW = totalData.PRICE_FORMATED;
				totalData.PRICE_FORMATED = this.result.TOTAL_RENDER_DATA.PRICE_FORMATED;

				this.addPriceAnimationData(this.ids.total, totalData.PRICE, totalData.PRICE_NEW, totalData.CURRENCY);
			}

			return totalData;
		},

		checkBasketItemsAnimation: function(itemData)
		{
			var itemId = itemData.ID;

			if (this.items[itemId])
			{
				var quantityNode = BX(this.ids.quantity + itemId);
				if (
					BX.type.isDomNode(quantityNode)
					&& !this.actionPool.isItemInPool(itemId)
					&& parseFloat(quantityNode.value) !== parseFloat(itemData.QUANTITY)
				)
				{
					itemData.QUANTITY_ANIMATION = true;
					this.actionPool.clearLastActualQuantityPool(itemId);
				}

				if (parseFloat(this.items[itemId].PRICE) > parseFloat(itemData.PRICE))
				{
					itemData.PRICE_NEW = itemData.PRICE;
					itemData.PRICE = this.items[itemId].PRICE;

					itemData.PRICE_FORMATED_NEW = itemData.PRICE_FORMATED;
					itemData.PRICE_FORMATED = this.items[itemId].PRICE_FORMATED;

					this.addPriceAnimationData(this.ids.price + itemId, itemData.PRICE, itemData.PRICE_NEW, itemData.CURRENCY);
				}

				if (
					BX.util.in_array('SUM', this.params.COLUMNS_LIST)
					&& parseFloat(this.items[itemId].SUM_PRICE) > parseFloat(itemData.SUM_PRICE)
					&& parseFloat(this.items[itemId].QUANTITY) === parseFloat(itemData.QUANTITY)
				)
				{
					itemData.SUM_PRICE_NEW = itemData.SUM_PRICE;
					itemData.SUM_PRICE = this.items[itemId].SUM_PRICE;

					itemData.SUM_PRICE_FORMATED_NEW = itemData.SUM_PRICE_FORMATED;
					itemData.SUM_PRICE_FORMATED = this.items[itemId].SUM_PRICE_FORMATED;

					this.addPriceAnimationData(this.ids.sumPrice + itemId, itemData.SUM_PRICE, itemData.SUM_PRICE_NEW, itemData.CURRENCY);
				}
			}

			return itemData;
		},

		getData: function(data)
		{
			data = data || {};

			data[this.params.ACTION_VARIABLE] = this.lastAction;
			data.via_ajax = 'Y';
			data.site_id = this.siteId;
			data.site_template_id = this.siteTemplateId;
			data.sessid = BX.bitrix_sessid();
			data.template = this.template;
			data.signedParamsString = this.signedParamsString;

			return data;
		},

		startLoader: function()
		{
			// if (!this.loadingScreen)
			// {
			// 	this.loadingScreen = new BX.PopupWindow('loading_screen', null, {
			// 		events: {
			// 			onAfterPopupShow: BX.delegate(function() {
			// 				BX.cleanNode(this.loadingScreen.popupContainer);
			// 				BX.removeClass(this.loadingScreen.popupContainer, 'popup-window');
			// 				this.loadingScreen.popupContainer.appendChild(
			// 					BX.create('IMG', {props: {src: this.templateFolder + '/images/loader.gif'}})
			// 				);
			// 				this.loadingScreen.popupContainer.removeAttribute('style');
			// 				this.loadingScreen.popupContainer.style.display = 'block';
			// 			}, this)
			// 		}
			// 	});
			// 	BX.addClass(this.loadingScreen.popupContainer, 'bx-step-opacity');
			// }
			//
			// this.loadingScreen.show();
		},

		/**
		 * Hiding loader image with overlay.
		 */
		endLoader: function()
		{
			// if (this.loadingScreen && this.loadingScreen.isShown())
			// {
			// 	this.loadingScreen.close();
			// }
		},

		editWarnings: function()
		{
			this.editGeneralWarnings();
			this.editBasketItemWarnings();
			this.toggleWarningBlock();
			this.showWarningItemsCount();
		},

		editGeneralWarnings: function()
		{
			var warningsNode = this.getEntity(this.getCacheNode(this.ids.warning), 'basket-general-warnings');

			if (BX.type.isDomNode(warningsNode))
			{
				var generalWarningText = warningsNode.innerHTML;

				if (this.result.WARNING_MESSAGE_WITH_CODE)
				{
					for (var code in this.result.WARNING_MESSAGE_WITH_CODE)
					{
						if (this.result.WARNING_MESSAGE_WITH_CODE.hasOwnProperty(code))
						{
							if (
								!this.items[code]
								&& generalWarningText.indexOf(this.result.WARNING_MESSAGE_WITH_CODE[code]) === -1
							)
							{
								generalWarningText += this.result.WARNING_MESSAGE_WITH_CODE[code] + '<br/>';
							}
						}
					}
				}

				if (generalWarningText)
				{
					warningsNode.innerHTML = generalWarningText;
					warningsNode.style.display = '';
				}
				else
				{
					warningsNode.style.display = 'none';
					warningsNode.innerHTML = '';
				}
			}
		},

		editBasketItemWarnings: function()
		{
			var itemsWarningsNode = this.getEntity(this.getCacheNode(this.ids.warning), 'basket-item-warnings');

			if (BX.type.isDomNode(itemsWarningsNode))
			{
				if (this.warningItems.length)
				{
					var warningCount = this.getEntity(itemsWarningsNode, 'basket-items-warning-count');
					if (BX.type.isDomNode(warningCount))
					{
						warningCount.innerHTML = this.warningItems.length + ' ' + this.getGoodsMessage(this.warningItems.length);
					}

					itemsWarningsNode.style.display = '';
				}
				else if (itemsWarningsNode.style.display !== 'none')
				{
					itemsWarningsNode.style.display = 'none';

					if (this.filter.isActive())
					{
						this.toggleFilter('all');
					}
				}
			}
		},

		toggleWarningBlock: function()
		{
			var warningNode = this.getCacheNode(this.ids.warning);

			if (BX.type.isDomNode(warningNode))
			{
				var generalWarningNode = this.getEntity(warningNode, 'basket-general-warnings');
				var itemsWarningsNode = this.getEntity(warningNode, 'basket-item-warnings');

				if (
					(!BX.type.isDomNode(generalWarningNode) || generalWarningNode.style.display === 'none')
					&& (!BX.type.isDomNode(itemsWarningsNode) || itemsWarningsNode.style.display === 'none')
				)
				{
					warningNode.style.display = 'none';
				}
				else
				{
					warningNode.style.display = '';
				}
			}
		},

		checkBasketItemWarnings: function(itemData, warnings)
		{
			if (!itemData)
				return;

			var itemWarnings;

			if (this.items[itemData.ID] && this.lastAction === 'refreshAjax')
			{
				itemWarnings = this.items[itemData.ID].WARNINGS;
			}
			else
			{
				itemWarnings = [];
			}

			if (BX.type.isArray(warnings[itemData.ID]) && warnings[itemData.ID].length)
			{
				for (var i in warnings[itemData.ID])
				{
					if (warnings[itemData.ID].hasOwnProperty(i) && !BX.util.in_array(warnings[itemData.ID][i], itemWarnings))
					{
						itemWarnings.push(warnings[itemData.ID][i]);
					}
				}
			}

			if (itemWarnings.length)
			{
				if (!BX.util.in_array(itemData.ID, this.warningItems))
				{
					this.warningItems.push(itemData.ID);
				}
			}
			else if (BX.util.in_array(itemData.ID, this.warningItems))
			{
				this.warningItems.splice(BX.util.array_search(itemData.ID, this.warningItems), 1);
			}

			return itemWarnings;
		},

		removeAllWarnings: function(event)
		{
			this.clearGeneralWarnings();
			this.clearBasketItemsWarnings();

			this.editWarnings();

			event && event.preventDefault();
		},

		clearGeneralWarnings: function()
		{
			this.result.WARNING_MESSAGE_WITH_CODE = {};

			var generalWarningNode = this.getEntity(this.getCacheNode(this.ids.warning), 'basket-general-warnings');

			if (BX.type.isDomNode(generalWarningNode))
			{
				generalWarningNode.innerHTML = '';
			}
		},

		clearBasketItemsWarnings: function()
		{
			var itemsToEdit = [];

			for (var i in this.warningItems)
			{
				if (this.warningItems.hasOwnProperty(i))
				{
					this.items[this.warningItems[i]].WARNINGS = [];

					if (this.isItemShown(this.warningItems[i]))
					{
						itemsToEdit.push(this.warningItems[i]);
					}
				}
			}

			this.warningItems = [];
			this.editBasketItems(itemsToEdit);
		},

		isItemShown: function(itemId)
		{
			return BX.util.in_array(itemId, this.shownItems);
		},

		initializeBasketItems: function()
		{
			if (Object.keys(this.items).length === 0)
				return;

			for (var i = 0; i < this.sortedItems.length; i++)
			{
				if (this.useDynamicScroll && this.shownItems.length >= this.maxItemsShowCount)
				{
					break;
				}

				this.createBasketItem(this.sortedItems[i]);
			}
		},

		createBasketItem: function(itemId)
		{
			if (!this.items[itemId])
			{
				return;
			}

			var basketItemTemplate = this.getTemplate('basket-item-template');
			if (basketItemTemplate)
			{
				var basketItemHtml = this.renderBasketItem(basketItemTemplate, this.items[itemId]);
				var sortIndex = BX.util.array_search(itemId, this.sortedItems);

				if (this.shownItems.length && sortIndex >= 0)
				{
					if (sortIndex < BX.util.array_search(this.shownItems[0], this.sortedItems))
					{
						// insert before
						BX(this.ids.item + this.shownItems[0]).insertAdjacentHTML('beforebegin', basketItemHtml);
						this.shownItems.unshift(itemId);
					}
					else if (sortIndex > BX.util.array_search(this.shownItems[this.shownItems.length - 1], this.sortedItems))
					{
						// insert after
						BX(this.ids.item + this.shownItems[this.shownItems.length - 1]).insertAdjacentHTML('afterend', basketItemHtml);
						this.shownItems.push(itemId);
					}
					else
					{
						// insert between
						BX(this.ids.item + this.sortedItems[sortIndex + 1]).insertAdjacentHTML('beforebegin', basketItemHtml);
						this.shownItems.splice(sortIndex + 1, 0, itemId);
					}
				}
				else
				{
					this.getCacheNode(this.ids.itemListTable).insertAdjacentHTML('beforeend', basketItemHtml);
					this.shownItems.push(itemId);
				}

				this.bindBasketItemEvents(this.items[itemId]);

				if (this.filter.isActive())
				{
					this.filter.highlightSearchMatch(this.items[itemId]);
				}
			}
		},

		getItemsToEdit: function()
		{
			var itemIds = [];

			if (this.isBasketChanged())
			{
				for (var i in this.changedItems)
				{
					if (this.changedItems.hasOwnProperty(i) && this.isItemShown(this.changedItems[i]))
					{
						itemIds.push(this.changedItems[i]);
					}
				}
			}

			return itemIds;
		},

		getItemsAfter: function()
		{
			var itemIdsAfter = [];

			if (this.useDynamicScroll)
			{
				var lastShownItemId = this.shownItems[this.shownItems.length - 1] || false;

				if (lastShownItemId)
				{
					var i = 0;
					var index = BX.util.array_search(lastShownItemId, this.sortedItems);

					while (this.sortedItems[++index] && i++ < this.maxItemsShowCount)
					{
						itemIdsAfter.push(this.sortedItems[index]);
					}
				}
			}

			return itemIdsAfter;
		},

		editBasketItems: function(itemIds)
		{
			if (!itemIds || itemIds.length === 0)
			{
				return;
			}

			var i, item;

			for (i in itemIds)
			{
				if (!itemIds.hasOwnProperty(i) || !BX.type.isPlainObject(this.items[itemIds[i]]))
				{
					continue;
				}

				item = this.items[itemIds[i]];

				if (this.actionPool.isItemInPool(item.ID))
				{
					if (!BX.util.in_array(item.ID, this.postponedItems))
					{
						this.postponedItems.push(item.ID);
					}

					continue;
				}

				if (BX.type.isDomNode(BX(this.ids.item + item.ID)))
				{
					this.redrawBasketItemNode(item.ID);
					this.applyQuantityAnimation(item.ID);
				}
				else
				{
					this.createBasketItem(item.ID);
				}
			}
		},

		editPostponedBasketItems: function()
		{
			if (!this.postponedItems.length)
				return;

			var itemsToEdit = [];

			for (var i in this.postponedItems)
			{
				if (this.postponedItems.hasOwnProperty(i) && this.isItemShown(this.postponedItems[i]))
				{
					itemsToEdit.push(this.postponedItems[i]);
				}
			}

			this.postponedItems = [];
			this.editBasketItems(itemsToEdit);
		},

		applyQuantityAnimation: function(itemId)
		{
			var basketItemNode = BX(this.ids.item + itemId);

			if (BX.type.isDomNode(basketItemNode) && this.items[itemId])
			{
				if (this.items[itemId].QUANTITY_ANIMATION)
				{
					BX.addClass(BX(this.ids.quantity + itemId), 'basket-updated');
				}
			}
		},

		applyPriceAnimation: function()
		{
			if (!this.priceAnimationData || Object.keys(this.priceAnimationData.start).length === 0)
				return;

			var animationData = this.priceAnimationData,
				nodeCache = {};

			new BX.easing({
				duration: this.params.USE_PRICE_ANIMATION === 'Y' ? this.duration.priceAnimation : 1,
				start: animationData.start,
				finish: animationData.finish,
				transition: BX.easing.makeEaseOut(BX.easing.transitions.quad),
				step: BX.delegate(function(state){
					for (var nodeId in animationData.start)
					{
						if (animationData.start.hasOwnProperty(nodeId))
						{
							if (!nodeCache[nodeId])
							{
								if (nodeId === this.ids.total)
								{
									nodeCache[nodeId] = this.getEntities(this.getCacheNode(this.ids.basketRoot), this.ids.total);
								}
								else
								{
									var node = BX(nodeId);
									nodeCache[nodeId] = node ? [node] : [];
								}
							}

							if (!animationData.int[nodeId])
							{
								// fix price blinking
								state[nodeId] = (state[nodeId] + (state[nodeId] % 1000) / 1000).toFixed(5);
							}

							for (var i = 0; i < nodeCache[nodeId].length; i++)
							{
								nodeCache[nodeId][i].innerHTML = this.getFormatPrice(state[nodeId], animationData.currency[nodeId]);
							}
						}
					}
				}, this),
				complete: BX.delegate(function() {
					var nodeId, formattedPrice, itemId, type;

					for (nodeId in animationData.start)
					{
						if (animationData.start.hasOwnProperty(nodeId))
						{
							formattedPrice = this.getFormatPrice(animationData.finish[nodeId], animationData.currency[nodeId]);

							for (var i = 0; i < nodeCache[nodeId].length; i++)
							{
								nodeCache[nodeId][i].innerHTML = formattedPrice;
							}

							if (nodeId.indexOf(this.ids.sumPrice) !== -1)
							{
								type = 'SUM_PRICE';
								itemId = nodeId.substr(this.ids.sumPrice.length);
							}
							else if (nodeId.indexOf(this.ids.price) !== -1)
							{
								type = 'PRICE';
								itemId = nodeId.substr(this.ids.price.length);
							}
							else if (nodeId.indexOf(this.ids.total) !== -1)
							{
								type = 'TOTAL';
								itemId = '';
							}
							else
							{
								itemId = '';
								type = '';
							}

							if (BX.type.isNotEmptyString(type))
							{
								if (itemId)
								{
									this.items[itemId][type] = animationData.finish[nodeId];
									delete this.items[itemId][type + '_NEW'];
									this.items[itemId][type + '_FORMATED'] = formattedPrice;
									delete this.items[itemId][type + '_FORMATED_NEW'];
								}
								else if (type === 'TOTAL')
								{
									this.result.TOTAL_RENDER_DATA.PRICE = animationData.finish[nodeId];
									delete this.result.TOTAL_RENDER_DATA.PRICE_NEW;
									this.result.TOTAL_RENDER_DATA.PRICE_FORMATED = formattedPrice;
									delete this.result.TOTAL_RENDER_DATA.PRICE_FORMATED_NEW;
								}
							}
						}
					}

					this.filter.highlightFoundItems();
				}, this)
			}).animate();
		},

		getFormatPrice: function(price, currency)
		{
			return BX.Currency.currencyFormat(price, currency, true);
		},

		deleteBasketItems: function(items, restore, final)
		{
			if (!items || !items.length)
			{
				return;
			}

			for (var i in items)
			{
				if (items.hasOwnProperty(i))
				{
					this.deleteBasketItem(items[i], restore, final);
				}
			}
		},

		deleteBasketItem: function(itemId, restore, final)
		{
			// delete not available item with no chance to restore
			if (this.items[itemId].NOT_AVAILABLE && restore)
			{
				restore = false;
				final = true;
			}

			if (restore)
			{
				this.items[itemId].SHOW_RESTORE = true;
				this.items[itemId].SHOW_LOADING = false;
				this.redrawBasketItemNode(itemId);
			}
			else
			{
				this.changeShownItem(itemId);
				BX.remove(BX(this.ids.item + itemId));
			}

			if (final)
			{
				this.changeSortedItem(itemId, false, true);
				this.changeShownItem(itemId, false, true);
			}
		},

		addSortedItem: function(itemId, all)
		{
			this.sortedItems.push(itemId.toString());

			if (all && this.filter.isActive())
			{
				this.filter.realSortedItems.push(itemId.toString());
			}
		},

		changeSortedItem: function(itemId, newItemId, all)
		{
			var index = BX.util.array_search(itemId, this.sortedItems);

			if (index >= 0)
			{
				if (newItemId)
				{
					this.sortedItems.splice(index, 1, newItemId.toString());
				}
				else
				{
					this.sortedItems.splice(index, 1);
				}
			}

			if (all && this.filter.isActive())
			{
				index = BX.util.array_search(itemId, this.filter.realSortedItems);

				if (index >= 0)
				{
					if (newItemId)
					{
						this.filter.realSortedItems.splice(index, 1, newItemId.toString());
					}
					else
					{
						this.filter.realSortedItems.splice(index, 1);
					}
				}
			}
		},

		sortSortedItems: function(all)
		{
			this.sortedItems.sort(BX.proxy(this.itemSortFunction, this));

			if (all && this.filter.isActive())
			{
				this.filter.realSortedItems.sort(BX.proxy(this.itemSortFunction, this));
			}
		},

		changeShownItem: function(itemId, newItemId, all)
		{
			var index = BX.util.array_search(itemId, this.shownItems);

			if (index >= 0)
			{
				if (newItemId)
				{
					this.shownItems.splice(index, 1, newItemId.toString());
				}
				else
				{
					this.shownItems.splice(index, 1);
				}
			}

			if (all && this.filter.isActive())
			{
				index = BX.util.array_search(itemId, this.filter.realShownItems);

				if (index >= 0)
				{
					if (newItemId)
					{
						this.filter.realShownItems.splice(index, 1, newItemId.toString());
					}
					else
					{
						this.filter.realShownItems.splice(index, 1);
					}
				}
			}
		},

		redrawBasketItemNode: function(itemId)
		{
			var basketItemNode = BX(this.ids.item + itemId);

			if (!this.items[itemId] || !BX.type.isDomNode(basketItemNode))
				return;

			var basketItemTemplate = this.getTemplate('basket-item-template');
			if (basketItemTemplate)
			{
				var nodeAligner = BX(this.ids.itemHeightAligner + itemId),
					oldHeight;

				if (BX.type.isDomNode(nodeAligner))
				{
					oldHeight = nodeAligner.clientHeight;
				}

				var basketItemHtml = this.renderBasketItem(basketItemTemplate, this.items[itemId]);
				basketItemNode.insertAdjacentHTML('beforebegin', basketItemHtml);
				BX.remove(basketItemNode);

				if (oldHeight)
				{
					nodeAligner = BX(this.ids.itemHeightAligner + itemId);

					if (BX.type.isDomNode(nodeAligner) && nodeAligner.clientHeight < oldHeight)
					{
						nodeAligner.style.minHeight = oldHeight + 'px';
						setTimeout(function(){nodeAligner.style.minHeight = '0px';}, 1);
					}
				}

				this.bindBasketItemEvents(this.items[itemId]);

				if (this.filter.isActive())
				{
					this.filter.highlightSearchMatch(this.items[itemId]);
				}
			}
		},

		restoreBasketItems: function(items)
		{
			if (!items || Object.keys(items).length === 0)
			{
				return;
			}

			var oldItemId, newItemId, basketItemNode;

			for (oldItemId in items)
			{
				if (items.hasOwnProperty(oldItemId))
				{
					newItemId = items[oldItemId];

					if (this.isItemShown(oldItemId))
					{
						this.changeShownItem(oldItemId, newItemId, true);

						basketItemNode = BX(this.ids.item + oldItemId);
						if (BX.type.isDomNode(basketItemNode))
						{
							basketItemNode.id = this.ids.item + newItemId;
							basketItemNode.setAttribute('data-id', newItemId);
						}
					}

					this.changeSortedItem(oldItemId, false, true);
				}
			}
		},

		bindBasketItemEvents: function(itemData)
		{
			if (!itemData)
				return;

			var itemNode = BX(this.ids.item + itemData.ID);
			if (BX.type.isDomNode(itemNode))
			{
				this.bindQuantityEvents(itemNode, itemData);
				this.bindSkuEvents(itemNode, itemData);
				this.bindImageEvents(itemNode, itemData);
				this.bindActionEvents(itemNode, itemData);
				this.bindRestoreAction(itemNode, itemData);
				this.bindItemWarningEvents(itemNode, itemData);
			}
		},

		bindQuantityEvents: function(node, data)
		{
			if (!node || !data || !this.isItemAvailable(data.ID))
				return;

			var entity;

			var block = this.getEntity(node, 'basket-item-quantity-block');
			if (block)
			{
				var startEventName = this.isTouch ? 'touchstart' : 'mousedown';
				var endEventName = this.isTouch ? 'touchend' : 'mouseup';

				entity = this.getEntity(block, 'basket-item-quantity-minus');
				BX.bind(entity, startEventName, BX.proxy(this.startQuantityInterval, this));
				BX.bind(entity, endEventName, BX.proxy(this.clearQuantityInterval, this));
				BX.bind(entity, 'mouseout', BX.proxy(this.clearQuantityInterval, this));
				BX.bind(entity, 'click', BX.proxy(this.quantityMinus, this));

				entity = this.getEntity(block, 'basket-item-quantity-plus');
				BX.bind(entity, startEventName, BX.proxy(this.startQuantityInterval, this));
				BX.bind(entity, endEventName, BX.proxy(this.clearQuantityInterval, this));
				BX.bind(entity, 'mouseout', BX.proxy(this.clearQuantityInterval, this));
				BX.bind(entity, 'click', BX.proxy(this.quantityPlus, this));

				entity = this.getEntity(block, 'basket-item-quantity-field');
				BX.bind(entity, 'change', BX.proxy(this.quantityChange, this));
			}
		},

		startQuantityInterval: function()
		{
			var target = BX.proxy_context;
			var func = target.getAttribute('data-entity') === 'basket-item-quantity-minus'
				? BX.proxy(this.quantityMinus, this)
				: BX.proxy(this.quantityPlus, this);

			this.quantityDelay = setTimeout(
				BX.delegate(function() {
					this.quantityTimer = setInterval(function(){func(target);}, 150);
				}, this),
				300
			);
		},

		clearQuantityInterval: function()
		{
			clearTimeout(this.quantityDelay);
			clearInterval(this.quantityTimer);
		},

		quantityPlus: function(target)
		{
			if (!BX.type.isDomNode(target))
			{
				target = BX.proxy_context;
				this.clearQuantityInterval();
			}

			var itemData = this.getItemDataByTarget(target);
			if (itemData)
			{
				var quantityField = BX(this.ids.quantity + itemData.ID);
				var isQuantityFloat = this.isQuantityFloat(itemData);

				var currentQuantity = isQuantityFloat ? parseFloat(quantityField.value) : Math.round(quantityField.value);
				var measureRatio = isQuantityFloat ? parseFloat(itemData.MEASURE_RATIO) : parseInt(itemData.MEASURE_RATIO);

				var quantity = parseFloat((currentQuantity + measureRatio).toFixed(5));
				quantity = this.getCorrectQuantity(itemData, quantity);

				this.setQuantity(itemData, quantity);
			}
		},

		quantityMinus: function(target)
		{
			target = BX.type.isDomNode(target) ? target : BX.proxy_context;

			var itemData = this.getItemDataByTarget(target);
			if (itemData)
			{
				var quantityField = BX(this.ids.quantity + itemData.ID);
				var isQuantityFloat = this.isQuantityFloat(itemData);

				var currentQuantity = isQuantityFloat ? parseFloat(quantityField.value) : Math.round(quantityField.value);
				var measureRatio = isQuantityFloat ? parseFloat(itemData.MEASURE_RATIO) : parseInt(itemData.MEASURE_RATIO);

				var quantity = parseFloat((currentQuantity - measureRatio).toFixed(5));
				quantity = this.getCorrectQuantity(itemData, quantity);

				this.setQuantity(itemData, quantity);
			}
		},

		quantityChange: function()
		{
			var itemData = this.getItemDataByTarget(BX.proxy_context);
			if (itemData)
			{
				var quantityField, quantity;

				quantityField = BX(this.ids.quantity + itemData.ID);
				quantity = this.getCorrectQuantity(itemData, quantityField.value);

				this.setQuantity(itemData, quantity);
			}
		},

		isQuantityFloat: function(item)
		{
			return this.params.QUANTITY_FLOAT === 'Y' || (parseInt(item.MEASURE_RATIO) !== parseFloat(item.MEASURE_RATIO));
		},

		getCorrectQuantity: function(itemData, quantity)
		{
			var isQuantityFloat = this.isQuantityFloat(itemData),
				measureRatio = isQuantityFloat ? parseFloat(itemData.MEASURE_RATIO) : parseInt(itemData.MEASURE_RATIO),
				availableQuantity = 0;

			quantity = (isQuantityFloat ? parseFloat(quantity) : parseInt(quantity, 10)) || 0;
			if (quantity < 0)
			{
				quantity = 0;
			}

			if (measureRatio > 0 && quantity < measureRatio)
			{
				quantity = measureRatio;
			}

			if (itemData.CHECK_MAX_QUANTITY === 'Y')
			{
				availableQuantity = isQuantityFloat ? parseFloat(itemData.AVAILABLE_QUANTITY) : parseInt(itemData.AVAILABLE_QUANTITY);
				if (availableQuantity > 0 && quantity > availableQuantity)
				{
					quantity = availableQuantity;
				}
			}

			var reminder = (quantity / measureRatio - ((quantity / measureRatio).toFixed(0))).toFixed(5),
				remain;

			if (parseFloat(reminder) === 0)
			{
				return quantity;
			}

			if (measureRatio !== 0 && measureRatio !== 1)
			{
				remain = (quantity * this.precisionFactor) % (measureRatio * this.precisionFactor) / this.precisionFactor;

				if (measureRatio > 0 && remain > 0)
				{
					if (
						remain >= measureRatio / 2
						&& (
							availableQuantity === 0
							|| (quantity + measureRatio - remain) <= availableQuantity
						)
					)
					{
						quantity += (measureRatio - remain);
					}
					else
					{
						quantity -= remain;
					}
				}
			}

			quantity = isQuantityFloat ? parseFloat(quantity) : parseInt(quantity, 10);

			return quantity;
		},

		setQuantity: function(itemData, quantity)
		{
			var quantityField = BX(this.ids.quantity + itemData.ID),
				currentQuantity;

			if (quantityField)
			{
				quantity = parseFloat(quantity);
				currentQuantity = parseFloat(quantityField.getAttribute('data-value'));

				quantityField.value = quantity;

				if (parseFloat(itemData.QUANTITY) !== parseFloat(quantity))
				{
					this.animatePriceByQuantity(itemData, quantity);
					this.actionPool.changeQuantity(itemData.ID, quantity, currentQuantity);
				}
			}
		},

		animatePriceByQuantity: function(itemData, quantity)
		{
			var priceNode = BX(this.ids.sumPrice + itemData.ID);
			if (!BX.type.isDomNode(priceNode))
				return;

			var quantityMultiplier = quantity / parseFloat(itemData.MEASURE_RATIO);

			var startPrice = parseFloat(itemData.SUM_PRICE),
				finalPrice = parseFloat(itemData.PRICE) * quantityMultiplier,
				isInt = parseInt(startPrice) === parseFloat(startPrice)
					&& parseInt(finalPrice) === parseFloat(finalPrice);

			if (startPrice !== finalPrice)
			{
				this.items[itemData.ID].QUANTITY = quantity;
				this.items[itemData.ID].SUM_PRICE = finalPrice;

				new BX.easing({
					duration: this.params.USE_PRICE_ANIMATION === 'Y' ? this.duration.priceAnimation : 1,
					start: {price: startPrice},
					finish: {price: finalPrice},
					transition: BX.easing.makeEaseOut(BX.easing.transitions.quad),
					step: BX.delegate(function(state){
						if (!isInt)
						{
							// fix price blinking
							state.price = (state.price + (state.price % 1000) / 1000).toFixed(5);
						}

						priceNode.innerHTML = this.getFormatPrice(state.price, itemData.CURRENCY);
					}, this),
					complete: BX.delegate(function() {
						var node, price;

						priceNode.innerHTML = this.getFormatPrice(finalPrice, itemData.CURRENCY);

						node = BX(this.ids.sumPriceOld + itemData.ID);
						if (BX.type.isDomNode(node))
						{
							price = parseFloat(itemData.FULL_PRICE) * quantityMultiplier;
							node.innerHTML = this.getFormatPrice(price, itemData.CURRENCY);
						}

						node = BX(this.ids.sumPriceDiff + itemData.ID);
						if (BX.type.isDomNode(node))
						{
							price = parseFloat(itemData.DISCOUNT_PRICE) * quantityMultiplier;
							node.innerHTML = this.getFormatPrice(price, itemData.CURRENCY);
						}
					}, this)
				}).animate();
			}
		},

		getItemDataByTarget: function(target)
		{
			var data = false;
			var id;

			var itemNode = BX.findParent(target, {attrs: {'data-entity': 'basket-item'}});
			if (itemNode)
			{
				id = itemNode.getAttribute('data-id');
				data = this.items[id];
			}

			return data;
		},

		bindSkuEvents: function(node, data)
		{
			if (!node || !data)
				return;

			var blocks = this.getEntities(node, 'basket-item-sku-block');
			var blockEntities, i, l, ii, ll;

			for (i = 0, l = blocks.length; i < l; i++)
			{
				blockEntities = this.getEntities(blocks[i], 'basket-item-sku-field');

				for (ii = 0, ll = blockEntities.length; ii < ll; ii++)
				{
					BX.bind(blockEntities[ii], 'click', BX.proxy(this.changeSku, this));
				}
			}
		},

		changeSku: function()
		{
			var i, l;

			var target = BX.proxy_context;

			if (BX.hasClass(target, 'selected'))
				return;

			var itemData = this.getItemDataByTarget(target);
			if (itemData)
			{
				var basketItemNode = BX(this.ids.item + itemData.ID);
				if (basketItemNode)
				{
					var currentSkuListNodes = this.getEntities(target.parentNode, 'basket-item-sku-field');
					for (i = 0, l = currentSkuListNodes.length; i < l; i++)
					{
						if (currentSkuListNodes[i].isEqualNode(target))
						{
							BX.addClass(currentSkuListNodes[i], 'selected');
						}
						else
						{
							BX.removeClass(currentSkuListNodes[i], 'selected');
						}
					}

					this.actionPool.changeSku(
						itemData.ID,
						this.getSkuPropertyValues(basketItemNode),
						this.getInitialSkuPropertyValues(basketItemNode)
					);
				}
			}
		},

		getSkuPropertyValues: function(basketItemNode)
		{
			var propertyValues = {};

			var propNodes = this.getEntities(basketItemNode, 'basket-item-sku-field', '.selected');
			for (var i = 0, l = propNodes.length; i < l; i++)
			{
				propertyValues[propNodes[i].getAttribute('data-property')] = BX.util.htmlspecialcharsback(propNodes[i].getAttribute('data-value-id'));
			}

			return propertyValues;
		},

		getInitialSkuPropertyValues: function(basketItemNode)
		{
			var propertyValues = {};

			var propNodes = this.getEntities(basketItemNode, 'basket-item-sku-field', '[data-initial="true"]');
			for (var i = 0, l = propNodes.length; i < l; i++)
			{
				propertyValues[propNodes[i].getAttribute('data-property')] = BX.util.htmlspecialcharsback(propNodes[i].getAttribute('data-value-id'));
			}

			return propertyValues;
		},

		bindImageEvents: function(node, data)
		{
			if (!node || !data)
				return;

			var images = node.querySelectorAll('.basket-item-custom-block-photo-item');
			for (var i = 0, l = images.length; i < l; i++)
			{
				BX.bind(images[i], 'click', BX.proxy(this.showPropertyImagePopup, this));
			}
		},

		showPropertyImagePopup: function()
		{
			var target, propertyCode, imageIndex, item, imageSrc, i;

			target = BX.proxy_context;
			item = this.getItemDataByTarget(target);

			propertyCode = target.getAttribute('data-column-property-code');
			imageIndex = target.getAttribute('data-image-index');

			if (item && item.COLUMN_LIST)
			{
				for (i in item.COLUMN_LIST)
				{
					if (
						item.COLUMN_LIST.hasOwnProperty(i)
						&& item.COLUMN_LIST[i].CODE === propertyCode
						&& item.COLUMN_LIST[i].VALUE[imageIndex]
					)
					{
						imageSrc = item.COLUMN_LIST[i].VALUE[imageIndex].IMAGE_SRC_ORIGINAL;
						break;
					}
				}
			}

			if (!imageSrc)
			{
				return;
			}

			if (this.imagePopup)
			{
				this.imagePopup.destroy();
			}

			var imageId = 'bx-soa-image-popup-content';
			var that = this;

			this.imagePopup = new BX.PopupWindow('bx-soa-image-popup', null, {
				lightShadow: true,
				offsetTop: 0,
				offsetLeft: 0,
				closeIcon: {top: '3px', right: '10px'},
				autoHide: true,
				bindOptions: {position: 'bottom'},
				closeByEsc: true,
				zIndex: 100,
				events: {
					onPopupShow: function() {
						BX.create('IMG', {
							props: {src: imageSrc},
							events: {
								load: function() {
									var content = BX(imageId);
									if (content)
									{
										var windowSize = BX.GetWindowInnerSize(),
											ratio = that.isMobile ? 0.5 : 0.9,
											contentHeight, contentWidth;

										BX.cleanNode(content);
										content.appendChild(this);

										contentHeight = content.offsetHeight;
										contentWidth = content.offsetWidth;

										if (contentHeight > windowSize.innerHeight * ratio)
										{
											content.style.height = windowSize.innerHeight * ratio + 'px';
											content.style.width = contentWidth * (windowSize.innerHeight * ratio / contentHeight) + 'px';
											contentHeight = content.offsetHeight;
											contentWidth = content.offsetWidth;
										}

										if (contentWidth > windowSize.innerWidth * ratio)
										{
											content.style.width = windowSize.innerWidth * ratio + 'px';
											content.style.height = contentHeight * (windowSize.innerWidth * ratio / contentWidth) + 'px';
										}

										content.style.height = content.offsetHeight + 'px';
										content.style.width = content.offsetWidth + 'px';

										that.imagePopup.adjustPosition();
									}
								}
							}
						});
					},
					onPopupClose: function() {
						this.destroy();
					}
				},
				content: BX.create('DIV', {props: {id: imageId}})
			});
			this.imagePopup.show();
		},

		bindActionEvents: function(node, data)
		{
			if (!node || !data)
				return;

			var entity;

			if (BX.util.in_array('DELETE', this.params.COLUMNS_LIST))
			{
				entity = this.getEntities(node, 'basket-item-delete');
				for (var i = 0, l = entity.length; i < l; i++)
				{
					BX.bind(entity[i], 'click', BX.proxy(this.deleteAction, this));
				}
			}

			if (BX.util.in_array('DELAY', this.params.COLUMNS_LIST))
			{
				entity = this.getEntity(node, 'basket-item-add-delayed');
				BX.bind(entity, 'click', BX.proxy(this.addDelayedAction, this));
			}

			entity = this.getEntity(node, 'basket-item-remove-delayed');
			BX.bind(entity, 'click', BX.proxy(this.removeDelayedAction, this));

			entity = this.getEntity(node, 'basket-item-merge-sku-link');
			BX.bind(entity, 'click', BX.proxy(this.mergeAction, this));

			entity = this.getEntity(node, 'basket-item-show-similar-link');
			BX.bind(entity, 'click', BX.delegate(function() {this.toggleFilter('similar');}, this));
		},

		deleteAction: function()
		{
			var itemData = this.getItemDataByTarget(BX.proxy_context);
			if (itemData)
			{
				this.actionPool.deleteItem(itemData.ID);

				this.items[itemData.ID].SHOW_LOADING = true;

				if (this.params.SHOW_RESTORE === 'Y' && this.isItemAvailable(itemData.ID))
				{
					this.items[itemData.ID].SHOW_RESTORE = true;
				}

				this.redrawBasketItemNode(itemData.ID);
			}
		},

		addDelayedAction: function()
		{
			var itemData = this.getItemDataByTarget(BX.proxy_context);
			if (itemData)
			{
				this.actionPool.addDelayed(itemData.ID);

				this.items[itemData.ID].SHOW_LOADING = true;
				this.redrawBasketItemNode(itemData.ID);
			}
		},

		removeDelayedAction: function()
		{
			var itemData = this.getItemDataByTarget(BX.proxy_context);
			if (itemData)
			{
				this.actionPool.removeDelayed(itemData.ID);

				this.items[itemData.ID].SHOW_LOADING = true;
				this.redrawBasketItemNode(itemData.ID);
			}
		},

		mergeAction: function()
		{
			var itemData = this.getItemDataByTarget(BX.proxy_context);
			if (itemData)
			{
				this.actionPool.mergeSku(itemData.ID);
			}
		},

		bindRestoreAction: function(node, itemData)
		{
			if (!node || !itemData || this.params.SHOW_RESTORE !== 'Y')
				return;

			BX.bind(
				this.getEntity(node, 'basket-item-restore-button'),
				'click',
				BX.delegate(function() {
					this.actionPool.restoreItem(itemData.ID, {
						PRODUCT_ID: itemData.PRODUCT_ID,
						QUANTITY: itemData.QUANTITY,
						PROPS: itemData.PROPS_ALL,
						SORT: itemData.SORT,
						MODULE: itemData.MODULE,
						PRODUCT_PROVIDER_CLASS: itemData.PRODUCT_PROVIDER_CLASS
					});

					this.items[itemData.ID].SHOW_RESTORE = false;
					this.items[itemData.ID].SHOW_LOADING = true;
					this.redrawBasketItemNode(itemData.ID);
				}, this)
			);
			BX.bind(
				this.getEntity(node, 'basket-item-close-restore-button'),
				'click',
				BX.delegate(function() {
					this.deleteBasketItem(itemData.ID, false, true);
				}, this)
			);
		},

		bindItemWarningEvents: function(node, data)
		{
			if (!node || !data)
				return;

			BX.bind(
				this.getEntity(BX(this.ids.item + data.ID), 'basket-item-warning-close'),
				'click',
				BX.proxy(this.closeItemWarnings, this)
			);
		},

		closeItemWarnings: function()
		{
			var target = BX.proxy_context;

			if (BX.type.isDomNode(target))
			{
				var itemData = this.getItemDataByTarget(target);

				this.items[itemData.ID].WARNINGS = [];
				this.warningItems.splice(BX.util.array_search(itemData.ID, this.warningItems), 1);

				this.redrawBasketItemNode(itemData.ID);
				this.editWarnings();
			}
		},

		renderBasketItem: function(template, data)
		{
			var clonedData = BX.clone(data);

			if (BX.type.isPlainObject(clonedData))
			{
				clonedData.USE_FILTER = this.useItemsFilter
					&& !this.filter.currentFilter.similarHash.length;
			}

			return Mustache.render(template, clonedData);
		},

		render: function(template, data)
		{
			return Mustache.render(template, data);
		},

		checkAnalytics: function(data)
		{
			if (!data || !data.basket)
				return;

			var itemId, itemsDiff = {};

			for (var i in data.basket)
			{
				if (data.basket.hasOwnProperty(i))
				{
					if (i.indexOf('QUANTITY_') >= 0)
					{
						itemId = i.substr(9);

						if (this.items[itemId])
						{
							itemsDiff[itemId] = parseFloat(data.basket[i]) - parseFloat(BX(this.ids.quantity + itemId).getAttribute('data-value'));
						}
					}
					else if (i.indexOf('DELETE_') >= 0)
					{
						itemId = i.substr(7);

						if (this.items[itemId])
						{
							itemsDiff[itemId] = -parseFloat(this.items[itemId].QUANTITY);
						}
					}
					else if (i.indexOf('RESTORE_') >= 0)
					{
						itemId = i.substr(8);

						if (this.items[itemId])
						{
							itemsDiff[itemId] = parseFloat(this.items[itemId].QUANTITY);
						}
					}
				}
			}

			this.setAnalyticsDataLayer(itemsDiff);
		},

		setAnalyticsDataLayer: function(itemsDiff)
		{
			if (!itemsDiff || Object.keys(itemsDiff).length === 0)
				return;

			window[this.params.DATA_LAYER_NAME] = window[this.params.DATA_LAYER_NAME] || [];

			var plus = [], minus = [];

			for (var itemId in itemsDiff)
			{
				if (itemsDiff.hasOwnProperty(itemId))
				{
					if (itemsDiff[itemId] > 0)
					{
						plus.push(this.getItemAnalyticsInfo(itemId, itemsDiff[itemId]));
					}
					else if (itemsDiff[itemId] < 0)
					{
						minus.push(this.getItemAnalyticsInfo(itemId, itemsDiff[itemId]));
					}
				}
			}

			if (plus.length)
			{
				window[this.params.DATA_LAYER_NAME].push({
					event: 'addToCart',
					ecommerce: {
						currencyCode: this.items[itemId].CURRENCY || '',
						add: {
							products: plus
						}
					}
				});
			}

			if (minus.length)
			{
				window[this.params.DATA_LAYER_NAME].push({
					event: 'removeFromCart',
					ecommerce: {
						currencyCode: this.items[itemId].CURRENCY || '',
						remove: {
							products: minus
						}
					}
				});
			}
		},

		getItemAnalyticsInfo: function(itemId, diff)
		{
			if (!this.items[itemId])
				return {};

			var brand = (this.items[itemId].BRAND || '').split(',  ').join('/');
			var variants = [];

			var selectedSku = this.getEntities(BX(this.ids.item + itemId), 'basket-item-sku-field', '.selected');
			for (var i = 0, l = selectedSku.length; i < l; i++)
			{
				variants.push(selectedSku[i].getAttribute('data-sku-name'));
			}

			return {
				'name': this.items[itemId].NAME || '',
				'id': this.items[itemId].PRODUCT_ID || '',
				'price': this.items[itemId].PRICE || 0,
				'brand': brand,
				'variant': variants.join('/'),
				'quantity': Math.abs(diff)
			};
		},

		/** LEEFT */
		setNotAvail: function(res){
			var button = this.getEntity(BX('basket-root'), 'basket-checkout-button');
			BX.show(button);
			$('#not-avail-warnings').remove();
			if(res.NOT_AVAIL){
				$('#basket-warning').append('<div id="not-avail-warnings">У вас отсутствуют все товары</div>')
				BX.hide(button)
			}
		}
	};
})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:116:"/bitrix/templates/aspro_optimus/components/bitrix/catalog.bigdata.products/optimus_new/script.min.js?158980555323915";s:6:"source";s:96:"/bitrix/templates/aspro_optimus/components/bitrix/catalog.bigdata.products/optimus_new/script.js";s:3:"min";s:100:"/bitrix/templates/aspro_optimus/components/bitrix/catalog.bigdata.products/optimus_new/script.min.js";s:3:"map";s:100:"/bitrix/templates/aspro_optimus/components/bitrix/catalog.bigdata.products/optimus_new/script.map.js";}"*/
(function(t){if(!!t.JCCatalogBigdataProducts){return}var e=function(t){e.superclass.constructor.apply(this,arguments);this.nameNode=BX.create("span",{props:{className:"bx_medium bx_bt_button",id:this.id},text:t.text});this.buttonNode=BX.create("span",{attrs:{className:t.ownerClass},style:{marginBottom:"0",borderBottom:"0 none transparent"},children:[this.nameNode],events:this.contextEvents});if(BX.browser.IsIE()){this.buttonNode.setAttribute("hideFocus","hidefocus")}};BX.extend(e,BX.PopupWindowButton);t.JCCatalogBigdataProducts=function(t){this.productType=0;this.showQuantity=true;this.showAbsent=true;this.secondPict=false;this.showOldPrice=false;this.showPercent=false;this.showSkuProps=false;this.visual={ID:"",PICT_ID:"",SECOND_PICT_ID:"",QUANTITY_ID:"",QUANTITY_UP_ID:"",QUANTITY_DOWN_ID:"",PRICE_ID:"",DSC_PERC:"",SECOND_DSC_PERC:"",DISPLAY_PROP_DIV:"",BASKET_PROP_DIV:""};this.product={checkQuantity:false,maxQuantity:0,stepQuantity:1,isDblQuantity:false,canBuy:true,canSubscription:true,name:"",pict:{},id:0,addUrl:"",buyUrl:""};this.basketData={useProps:false,emptyProps:false,quantity:"quantity",props:"prop",basketUrl:""};this.defaultPict={pict:null,secondPict:null};this.checkQuantity=false;this.maxQuantity=0;this.stepQuantity=1;this.isDblQuantity=false;this.canBuy=true;this.canSubscription=true;this.precision=6;this.precisionFactor=Math.pow(10,this.precision);this.offers=[];this.offerNum=0;this.treeProps=[];this.obTreeRows=[];this.showCount=[];this.showStart=[];this.selectedValues={};this.obProduct=null;this.obQuantity=null;this.obQuantityUp=null;this.obQuantityDown=null;this.obPict=null;this.obSecondPict=null;this.obPrice=null;this.obTree=null;this.obBuyBtn=null;this.obDscPerc=null;this.obSecondDscPerc=null;this.obSkuProps=null;this.obMeasure=null;this.obPopupWin=null;this.basketUrl="";this.basketParams={};this.treeRowShowSize=5;this.treeEnableArrow={display:"",cursor:"pointer",opacity:1};this.treeDisableArrow={display:"",cursor:"default",opacity:.2};this.lastElement=false;this.containerHeight=0;this.errorCode=0;if("object"===typeof t){this.productType=parseInt(t.PRODUCT_TYPE,10);this.showQuantity=t.SHOW_QUANTITY;this.showAbsent=t.SHOW_ABSENT;this.secondPict=!!t.SECOND_PICT;this.showOldPrice=!!t.SHOW_OLD_PRICE;this.showPercent=!!t.SHOW_DISCOUNT_PERCENT;this.showSkuProps=!!t.SHOW_SKU_PROPS;this.visual=t.VISUAL;switch(this.productType){case 1:case 2:if(!!t.PRODUCT&&"object"===typeof t.PRODUCT){if(this.showQuantity){this.product.checkQuantity=t.PRODUCT.CHECK_QUANTITY;this.product.isDblQuantity=t.PRODUCT.QUANTITY_FLOAT;if(this.product.checkQuantity){this.product.maxQuantity=this.product.isDblQuantity?parseFloat(t.PRODUCT.MAX_QUANTITY):parseInt(t.PRODUCT.MAX_QUANTITY,10)}this.product.stepQuantity=this.product.isDblQuantity?parseFloat(t.PRODUCT.STEP_QUANTITY):parseInt(t.PRODUCT.STEP_QUANTITY,10);this.checkQuantity=this.product.checkQuantity;this.isDblQuantity=this.product.isDblQuantity;this.maxQuantity=this.product.maxQuantity;this.stepQuantity=this.product.stepQuantity;if(this.isDblQuantity){this.stepQuantity=Math.round(this.stepQuantity*this.precisionFactor)/this.precisionFactor}}this.product.canBuy=t.PRODUCT.CAN_BUY;this.product.canSubscription=t.PRODUCT.SUBSCRIPTION;this.canBuy=this.product.canBuy;this.canSubscription=this.product.canSubscription;this.product.name=t.PRODUCT.NAME;this.product.pict=t.PRODUCT.PICT;this.product.id=t.PRODUCT.ID;if(!!t.PRODUCT.ADD_URL){this.product.addUrl=t.PRODUCT.ADD_URL}if(!!t.PRODUCT.BUY_URL){this.product.buyUrl=t.PRODUCT.BUY_URL}if(!!t.BASKET&&"object"===typeof t.BASKET){this.basketData.useProps=!!t.BASKET.ADD_PROPS;this.basketData.emptyProps=!!t.BASKET.EMPTY_PROPS}}else{this.errorCode=-1}break;case 3:if(!!t.OFFERS&&BX.type.isArray(t.OFFERS)){if(!!t.PRODUCT&&"object"===typeof t.PRODUCT){this.product.name=t.PRODUCT.NAME;this.product.id=t.PRODUCT.ID}this.offers=t.OFFERS;this.offerNum=0;if(!!t.OFFER_SELECTED){this.offerNum=parseInt(t.OFFER_SELECTED,10)}if(isNaN(this.offerNum)){this.offerNum=0}if(!!t.TREE_PROPS){this.treeProps=t.TREE_PROPS}if(!!t.DEFAULT_PICTURE){this.defaultPict.pict=t.DEFAULT_PICTURE.PICTURE;this.defaultPict.secondPict=t.DEFAULT_PICTURE.PICTURE_SECOND}}else{this.errorCode=-1}break;default:this.errorCode=-1}if(!!t.BASKET&&"object"===typeof t.BASKET){if(!!t.BASKET.QUANTITY){this.basketData.quantity=t.BASKET.QUANTITY}if(!!t.BASKET.PROPS){this.basketData.props=t.BASKET.PROPS}if(!!t.BASKET.BASKET_URL){this.basketData.basketUrl=t.BASKET.BASKET_URL}}this.lastElement=!!t.LAST_ELEMENT&&"Y"===t.LAST_ELEMENT}if(0===this.errorCode){BX.ready(BX.delegate(this.Init,this))}};t.JCCatalogBigdataProducts.prototype.Init=function(){var e=0,i="",s=null;this.obProduct=BX(this.visual.ID);if(!this.obProduct){this.errorCode=-1}this.obPict=BX(this.visual.PICT_ID);if(!this.obPict){this.errorCode=-2}if(this.secondPict&&!!this.visual.SECOND_PICT_ID){this.obSecondPict=BX(this.visual.SECOND_PICT_ID)}this.obPrice=BX(this.visual.PRICE_ID);if(!this.obPrice){this.errorCode=-16}if(this.showQuantity&&!!this.visual.QUANTITY_ID){this.obQuantity=BX(this.visual.QUANTITY_ID);if(!!this.visual.QUANTITY_UP_ID){this.obQuantityUp=BX(this.visual.QUANTITY_UP_ID)}if(!!this.visual.QUANTITY_DOWN_ID){this.obQuantityDown=BX(this.visual.QUANTITY_DOWN_ID)}}if(3===this.productType){if(!!this.visual.TREE_ID){this.obTree=BX(this.visual.TREE_ID);if(!this.obTree){this.errorCode=-256}i=this.visual.TREE_ITEM_ID;for(e=0;e<this.treeProps.length;e++){this.obTreeRows[e]={LEFT:BX(i+this.treeProps[e].ID+"_left"),RIGHT:BX(i+this.treeProps[e].ID+"_right"),LIST:BX(i+this.treeProps[e].ID+"_list"),CONT:BX(i+this.treeProps[e].ID+"_cont")};if(!this.obTreeRows[e].LEFT||!this.obTreeRows[e].RIGHT||!this.obTreeRows[e].LIST||!this.obTreeRows[e].CONT){this.errorCode=-512;break}}}if(!!this.visual.QUANTITY_MEASURE){this.obMeasure=BX(this.visual.QUANTITY_MEASURE)}}if(!!this.visual.BUY_ID){this.obBuyBtn=BX(this.visual.BUY_ID)}if(this.showPercent){if(!!this.visual.DSC_PERC){this.obDscPerc=BX(this.visual.DSC_PERC)}if(this.secondPict&&!!this.visual.SECOND_DSC_PERC){this.obSecondDscPerc=BX(this.visual.SECOND_DSC_PERC)}}if(this.showSkuProps){if(!!this.visual.DISPLAY_PROP_DIV){this.obSkuProps=BX(this.visual.DISPLAY_PROP_DIV)}}if(0===this.errorCode){if(this.showQuantity){if(!!this.obQuantityUp){BX.bind(this.obQuantityUp,"click",BX.delegate(this.QuantityUp,this))}if(!!this.obQuantityDown){BX.bind(this.obQuantityDown,"click",BX.delegate(this.QuantityDown,this))}if(!!this.obQuantity){BX.bind(this.obQuantity,"change",BX.delegate(this.QuantityChange,this))}}switch(this.productType){case 1:break;case 3:s=BX.findChildren(this.obTree,{tagName:"li"},true);if(!!s&&0<s.length){for(e=0;e<s.length;e++){BX.bind(s[e],"click",BX.delegate(this.SelectOfferProp,this))}}for(e=0;e<this.obTreeRows.length;e++){BX.bind(this.obTreeRows[e].LEFT,"click",BX.delegate(this.RowLeft,this));BX.bind(this.obTreeRows[e].RIGHT,"click",BX.delegate(this.RowRight,this))}this.SetCurrent();break}if(!!this.obBuyBtn){BX.bind(this.obBuyBtn,"click",BX.delegate(this.Basket,this))}if(this.lastElement){this.containerHeight=parseInt(this.obProduct.parentNode.offsetHeight,10);if(isNaN(this.containerHeight)){this.containerHeight=0}this.setHeight();BX.bind(t,"resize",BX.delegate(this.checkHeight,this));BX.bind(this.obProduct.parentNode,"mouseover",BX.delegate(this.setHeight,this));BX.bind(this.obProduct.parentNode,"mouseout",BX.delegate(this.clearHeight,this))}}};t.JCCatalogBigdataProducts.prototype.checkHeight=function(){this.containerHeight=parseInt(this.obProduct.parentNode.offsetHeight,10);if(isNaN(this.containerHeight)){this.containerHeight=0}};t.JCCatalogBigdataProducts.prototype.setHeight=function(){if(0<this.containerHeight){BX.adjust(this.obProduct.parentNode,{style:{height:this.containerHeight+"px"}})}};t.JCCatalogBigdataProducts.prototype.clearHeight=function(){BX.adjust(this.obProduct.parentNode,{style:{height:"auto"}})};t.JCCatalogBigdataProducts.prototype.QuantityUp=function(){var t=0,e=true;if(0===this.errorCode&&this.showQuantity&&this.canBuy){t=this.isDblQuantity?parseFloat(this.obQuantity.value):parseInt(this.obQuantity.value,10);if(!isNaN(t)){t+=this.stepQuantity;if(this.checkQuantity){if(t>this.maxQuantity){e=false}}if(e){if(this.isDblQuantity){t=Math.round(t*this.precisionFactor)/this.precisionFactor}this.obQuantity.value=t}}}};t.JCCatalogBigdataProducts.prototype.QuantityDown=function(){var t=0,e=true;if(0===this.errorCode&&this.showQuantity&&this.canBuy){t=this.isDblQuantity?parseFloat(this.obQuantity.value):parseInt(this.obQuantity.value,10);if(!isNaN(t)){t-=this.stepQuantity;if(t<this.stepQuantity){e=false}if(e){if(this.isDblQuantity){t=Math.round(t*this.precisionFactor)/this.precisionFactor}this.obQuantity.value=t}}}};t.JCCatalogBigdataProducts.prototype.QuantityChange=function(){var t=0,e=true;if(0===this.errorCode&&this.showQuantity){if(this.canBuy){t=this.isDblQuantity?parseFloat(this.obQuantity.value):parseInt(this.obQuantity.value,10);if(!isNaN(t)){if(this.checkQuantity){if(t>this.maxQuantity){e=false;t=this.maxQuantity}else if(t<this.stepQuantity){e=false;t=this.stepQuantity}}if(!e){this.obQuantity.value=t}}else{this.obQuantity.value=this.stepQuantity}}else{this.obQuantity.value=this.stepQuantity}}};t.JCCatalogBigdataProducts.prototype.QuantitySet=function(t){if(0===this.errorCode){this.canBuy=this.offers[t].CAN_BUY;if(this.canBuy){BX.addClass(this.obBuyBtn,"bx_bt_button");BX.removeClass(this.obBuyBtn,"bx_bt_button_type_2");this.obBuyBtn.innerHTML=BX.message("CBD_MESS_BTN_BUY")}else{BX.addClass(this.obBuyBtn,"bx_bt_button_type_2");BX.removeClass(this.obBuyBtn,"bx_bt_button");this.obBuyBtn.innerHTML=BX.message("CBD_MESS_NOT_AVAILABLE")}if(this.showQuantity){this.isDblQuantity=this.offers[t].QUANTITY_FLOAT;this.checkQuantity=this.offers[t].CHECK_QUANTITY;if(this.isDblQuantity){this.maxQuantity=parseFloat(this.offers[t].MAX_QUANTITY);this.stepQuantity=Math.round(parseFloat(this.offers[t].STEP_QUANTITY)*this.precisionFactor)/this.precisionFactor}else{this.maxQuantity=parseInt(this.offers[t].MAX_QUANTITY,10);this.stepQuantity=parseInt(this.offers[t].STEP_QUANTITY,10)}this.obQuantity.value=this.stepQuantity;this.obQuantity.disabled=!this.canBuy;if(!!this.obMeasure){if(!!this.offers[t].MEASURE){BX.adjust(this.obMeasure,{html:this.offers[t].MEASURE})}else{BX.adjust(this.obMeasure,{html:""})}}}}};t.JCCatalogBigdataProducts.prototype.SelectOfferProp=function(){var t=0,e="",i="",s=[],a=null,o=BX.proxy_context;if(!!o&&o.hasAttribute("data-treevalue")){i=o.getAttribute("data-treevalue");s=i.split("_");if(this.SearchOfferPropIndex(s[0],s[1])){a=BX.findChildren(o.parentNode,{tagName:"li"},false);if(!!a&&0<a.length){for(t=0;t<a.length;t++){e=a[t].getAttribute("data-onevalue");if(e===s[1]){BX.addClass(a[t],"bx_active")}else{BX.removeClass(a[t],"bx_active")}}}}}};t.JCCatalogBigdataProducts.prototype.SearchOfferPropIndex=function(t,e){var i="",s=false,a,o,r=[],h=-1,n={},u=[];for(a=0;a<this.treeProps.length;a++){if(this.treeProps[a].ID===t){h=a;break}}if(-1<h){for(a=0;a<h;a++){i="PROP_"+this.treeProps[a].ID;n[i]=this.selectedValues[i]}i="PROP_"+this.treeProps[h].ID;s=this.GetRowValues(n,i);if(!s){return false}if(!BX.util.in_array(e,s)){return false}n[i]=e;for(a=h+1;a<this.treeProps.length;a++){i="PROP_"+this.treeProps[a].ID;s=this.GetRowValues(n,i);if(!s){return false}if(this.showAbsent){r=[];u=[];u=BX.clone(n,true);for(o=0;o<s.length;o++){u[i]=s[o];if(this.GetCanBuy(u)){r[r.length]=s[o]}}}else{r=s}if(!!this.selectedValues[i]&&BX.util.in_array(this.selectedValues[i],r)){n[i]=this.selectedValues[i]}else{n[i]=r[0]}this.UpdateRow(a,n[i],s,r)}this.selectedValues=n;this.ChangeInfo()}return true};t.JCCatalogBigdataProducts.prototype.RowLeft=function(){var t=0,e="",i=-1,s=BX.proxy_context;if(!!s&&s.hasAttribute("data-treevalue")){e=s.getAttribute("data-treevalue");for(t=0;t<this.treeProps.length;t++){if(this.treeProps[t].ID===e){i=t;break}}if(-1<i&&this.treeRowShowSize<this.showCount[i]){if(0>this.showStart[i]){this.showStart[i]++;BX.adjust(this.obTreeRows[i].LIST,{style:{marginLeft:this.showStart[i]*20+"%"}});BX.adjust(this.obTreeRows[i].RIGHT,{style:this.treeEnableArrow})}if(0<=this.showStart[i]){BX.adjust(this.obTreeRows[i].LEFT,{style:this.treeDisableArrow})}}}};t.JCCatalogBigdataProducts.prototype.RowRight=function(){var t=0,e="",i=-1,s=BX.proxy_context;if(!!s&&s.hasAttribute("data-treevalue")){e=s.getAttribute("data-treevalue");for(t=0;t<this.treeProps.length;t++){if(this.treeProps[t].ID===e){i=t;break}}if(-1<i&&this.treeRowShowSize<this.showCount[i]){if(this.treeRowShowSize-this.showStart[i]<this.showCount[i]){this.showStart[i]--;BX.adjust(this.obTreeRows[i].LIST,{style:{marginLeft:this.showStart[i]*20+"%"}});BX.adjust(this.obTreeRows[i].LEFT,{style:this.treeEnableArrow})}if(this.treeRowShowSize-this.showStart[i]>=this.showCount[i]){BX.adjust(this.obTreeRows[i].RIGHT,{style:this.treeDisableArrow})}}}};t.JCCatalogBigdataProducts.prototype.UpdateRow=function(t,e,i,s){var a=0,o=0,r="",h=0,n="",u={},l=false,c=false,f=false,d=0,p=this.treeEnableArrow,P=this.treeEnableArrow,b=0,B=null;if(-1<t&&t<this.obTreeRows.length){B=BX.findChildren(this.obTreeRows[t].LIST,{tagName:"li"},false);if(!!B&&0<B.length){l="PICT"===this.treeProps[t].SHOW_MODE;h=i.length;c=this.treeRowShowSize<h;n=c?100/h+"%":"20%";u={props:{className:""},style:{width:n}};if(l){u.style.paddingTop=n}for(a=0;a<B.length;a++){r=B[a].getAttribute("data-onevalue");f=r===e;if(BX.util.in_array(r,s)){u.props.className=f?"bx_active":""}else{u.props.className=f?"bx_active bx_missing":"bx_missing"}u.style.display="none";if(BX.util.in_array(r,i)){u.style.display="";if(f){d=o}o++}BX.adjust(B[a],u)}u={style:{width:(c?20*h:100)+"%",marginLeft:"0%"}};if(l){BX.adjust(this.obTreeRows[t].CONT,{props:{className:c?"bx_item_detail_scu full":"bx_item_detail_scu"}})}else{BX.adjust(this.obTreeRows[t].CONT,{props:{className:c?"bx_item_detail_size full":"bx_item_detail_size"}})}if(c){if(d+1===h){P=this.treeDisableArrow}if(this.treeRowShowSize<=d){b=this.treeRowShowSize-d-1;u.style.marginLeft=b*20+"%"}if(0===b){p=this.treeDisableArrow}BX.adjust(this.obTreeRows[t].LEFT,{style:p});BX.adjust(this.obTreeRows[t].RIGHT,{style:P})}else{BX.adjust(this.obTreeRows[t].LEFT,{style:{display:"none"}});BX.adjust(this.obTreeRows[t].RIGHT,{style:{display:"none"}})}BX.adjust(this.obTreeRows[t].LIST,u);this.showCount[t]=h;this.showStart[t]=b}}};t.JCCatalogBigdataProducts.prototype.GetRowValues=function(t,e){var i=0,s,a=[],o=false,r=true;if(0===t.length){for(i=0;i<this.offers.length;i++){if(!BX.util.in_array(this.offers[i].TREE[e],a)){a[a.length]=this.offers[i].TREE[e]}}o=true}else{for(i=0;i<this.offers.length;i++){r=true;for(s in t){if(t[s]!==this.offers[i].TREE[s]){r=false;break}}if(r){if(!BX.util.in_array(this.offers[i].TREE[e],a)){a[a.length]=this.offers[i].TREE[e]}o=true}}}return o?a:false};t.JCCatalogBigdataProducts.prototype.GetCanBuy=function(t){var e=0,i,s=false,a=true;for(e=0;e<this.offers.length;e++){a=true;for(i in t){if(t[i]!==this.offers[e].TREE[i]){a=false;break}}if(a){if(this.offers[e].CAN_BUY){s=true;break}}}return s};t.JCCatalogBigdataProducts.prototype.SetCurrent=function(){var t=0,e=0,i=[],s="",a=false,o={},r=[],h=this.offers[this.offerNum].TREE;for(t=0;t<this.treeProps.length;t++){s="PROP_"+this.treeProps[t].ID;a=this.GetRowValues(o,s);if(!a){break}if(BX.util.in_array(h[s],a)){o[s]=h[s]}else{o[s]=a[0];this.offerNum=0}if(this.showAbsent){i=[];r=[];r=BX.clone(o,true);for(e=0;e<a.length;e++){r[s]=a[e];if(this.GetCanBuy(r)){i[i.length]=a[e]}}}else{i=a}this.UpdateRow(t,o[s],a,i)}this.selectedValues=o;this.ChangeInfo()};t.JCCatalogBigdataProducts.prototype.ChangeInfo=function(){var t=0,e,i=-1,s={},a=true,o="";for(t=0;t<this.offers.length;t++){a=true;for(e in this.selectedValues){if(this.selectedValues[e]!==this.offers[t].TREE[e]){a=false;break}}if(a){i=t;break}}if(-1<i){if(!!this.obPict){if(!!this.offers[i].PREVIEW_PICTURE){BX.adjust(this.obPict,{style:{backgroundImage:"url("+this.offers[i].PREVIEW_PICTURE.SRC+")"}})}else{BX.adjust(this.obPict,{style:{backgroundImage:"url("+this.defaultPict.pict.SRC+")"}})}}if(this.secondPict&&!!this.obSecondPict){if(!!this.offers[i].PREVIEW_PICTURE_SECOND){BX.adjust(this.obSecondPict,{style:{backgroundImage:"url("+this.offers[i].PREVIEW_PICTURE_SECOND.SRC+")"}})}else if(!!this.offers[i].PREVIEW_PICTURE.SRC){BX.adjust(this.obSecondPict,{style:{backgroundImage:"url("+this.offers[i].PREVIEW_PICTURE.SRC+")"}})}else if(!!this.defaultPict.secondPict){BX.adjust(this.obSecondPict,{style:{backgroundImage:"url("+this.defaultPict.secondPict.SRC+")"}})}else{BX.adjust(this.obSecondPict,{style:{backgroundImage:"url("+this.defaultPict.pict.SRC+")"}})}}if(this.showSkuProps&&!!this.obSkuProps){if(0===this.offers[i].DISPLAY_PROPERTIES.length){BX.adjust(this.obSkuProps,{style:{display:"none"},html:""})}else{BX.adjust(this.obSkuProps,{style:{display:""},html:this.offers[i].DISPLAY_PROPERTIES})}}if(!!this.obPrice){o=this.offers[i].PRICE.PRINT_DISCOUNT_VALUE;if(this.showOldPrice&&this.offers[i].PRICE.DISCOUNT_VALUE!==this.offers[i].PRICE.VALUE){o+=" <span>"+this.offers[i].PRICE.PRINT_VALUE+"</span>"}BX.adjust(this.obPrice,{html:o});if(this.showPercent){if(this.offers[i].PRICE.DISCOUNT_VALUE!==this.offers[i].PRICE.VALUE){s={style:{display:""},html:this.offers[i].PRICE.DISCOUNT_DIFF_PERCENT}}else{s={style:{display:"none"},html:""}}if(!!this.obDscPerc){BX.adjust(this.obDscPerc,s)}if(!!this.obSecondDscPerc){BX.adjust(this.obSecondDscPerc,s)}}}this.offerNum=i;this.QuantitySet(this.offerNum)}};t.JCCatalogBigdataProducts.prototype.InitBasketUrl=function(){switch(this.productType){case 1:case 2:this.basketUrl=this.product.addUrl;break;case 3:this.basketUrl=this.offers[this.offerNum].ADD_URL;break}this.basketParams={ajax_basket:"Y",rcm:"yes"};if(this.showQuantity){this.basketParams[this.basketData.quantity]=this.obQuantity.value}};t.JCCatalogBigdataProducts.prototype.FillBasketProps=function(){if(!this.visual.BASKET_PROP_DIV){return}var t=0,e=null,i=false,s=null;if(this.basketData.useProps&&!this.basketData.emptyProps){if(!!this.obPopupWin&&!!this.obPopupWin.contentContainer){s=this.obPopupWin.contentContainer}}else{s=BX(this.visual.BASKET_PROP_DIV)}if(!s){return}e=s.getElementsByTagName("select");if(!!e&&!!e.length){for(t=0;t<e.length;t++){if(!e[t].disabled){switch(e[t].type.toLowerCase()){case"select-one":this.basketParams[e[t].name]=e[t].value;i=true;break;default:break}}}}e=s.getElementsByTagName("input");if(!!e&&!!e.length){for(t=0;t<e.length;t++){if(!e[t].disabled){switch(e[t].type.toLowerCase()){case"hidden":this.basketParams[e[t].name]=e[t].value;i=true;break;case"radio":if(e[t].checked){this.basketParams[e[t].name]=e[t].value;i=true}break;default:break}}}}if(!i){this.basketParams[this.basketData.props]=[];this.basketParams[this.basketData.props][0]=0}};t.JCCatalogBigdataProducts.prototype.SendToBasket=function(){if(!this.canBuy){return}this.InitBasketUrl();this.FillBasketProps();if(this.product&&this.product.id){if(JCCatalogBigdataProducts.productsByRecommendation&&JCCatalogBigdataProducts.productsByRecommendation[this.product.id]){this.RememberProductRecommendation(JCCatalogBigdataProducts.productsByRecommendation[this.product.id],this.product.id)}}BX.ajax({method:"POST",dataType:"json",url:this.basketUrl,data:this.basketParams,onsuccess:BX.delegate(this.BasketResult,this)})};t.JCCatalogBigdataProducts.prototype.RememberRecommendation=function(t,e){var i=BX.findParent(t,{className:"bigdata_recommended_products_items"});var s=BX.findChild(i,{attr:{name:"bigdata_recommendation_id"}},true).value;this.RememberProductRecommendation(s,e)};t.JCCatalogBigdataProducts.prototype.RememberProductRecommendation=function(t,e){var i=BX.cookie_prefix+"_RCM_PRODUCT_LOG";var s=getCookie(i);var a=false;var o=[],r;if(s){o=s.split(".")}var h=o.length;while(h--){r=o[h].split("-");if(r[0]==e){r=o[h].split("-");r[1]=t;r[2]=BX.current_server_time;o[h]=r.join("-");a=true}else{if(BX.current_server_time-r[2]>3600*24*30){o.splice(h,1)}}}if(!a){o.push([e,t,BX.current_server_time].join("-"))}var n=o.join(".");var u=new Date((new Date).getTime()+1e3*3600*24*365*10);document.cookie=i+"="+n+"; path=/; expires="+u.toUTCString()+"; domain="+BX.cookie_domain};t.JCCatalogBigdataProducts.prototype.Basket=function(){var t="";if(!this.canBuy){return}switch(this.productType){case 1:case 2:if(this.basketData.useProps&&!this.basketData.emptyProps){this.InitPopupWindow();this.obPopupWin.setTitleBar({content:BX.create("div",{style:{marginRight:"30px",whiteSpace:"nowrap"},text:BX.message("CBD_TITLE_BASKET_PROPS")})});if(BX(this.visual.BASKET_PROP_DIV)){t=BX(this.visual.BASKET_PROP_DIV).innerHTML}this.obPopupWin.setContent(t);this.obPopupWin.setButtons([new e({ownerClass:this.obProduct.parentNode.parentNode.parentNode.className,text:BX.message("CBD_BTN_MESSAGE_SEND_PROPS"),events:{click:BX.delegate(this.SendToBasket,this)}})]);this.obPopupWin.show()}else{this.SendToBasket()}break;case 3:this.SendToBasket();break}};t.JCCatalogBigdataProducts.prototype.BasketResult=function(t){var i="",s="",a="",o=true,r=[];if(!!this.obPopupWin){this.obPopupWin.close()}if("object"!==typeof t){return false}o="OK"===t.STATUS;if(o){BX.onCustomEvent("OnBasketChange");s=this.product.name;switch(this.productType){case 1:case 2:a=this.product.pict.SRC;break;case 3:a=!!this.offers[this.offerNum].PREVIEW_PICTURE?this.offers[this.offerNum].PREVIEW_PICTURE.SRC:this.defaultPict.pict.SRC;break}i='<div style="width: 96%; margin: 10px 2%; text-align: center;"><img src="'+a+'" height="130" style="max-height:130px"><p>'+s+"</p></div>";r=[new e({ownerClass:this.obProduct.parentNode.parentNode.parentNode.className,text:BX.message("CBD_BTN_MESSAGE_BASKET_REDIRECT"),events:{click:BX.delegate(function(){location.href=!!this.basketData.basketUrl?this.basketData.basketUrl:BX.message("CBD_BASKET_URL")},this)}})]}else{i=!!t.MESSAGE?t.MESSAGE:BX.message("CBD_BASKET_UNKNOWN_ERROR");r=[new e({ownerClass:this.obProduct.parentNode.parentNode.parentNode.className,text:BX.message("CBD_BTN_MESSAGE_CLOSE"),events:{click:BX.delegate(this.obPopupWin.close,this.obPopupWin)}})]}this.InitPopupWindow();this.obPopupWin.setTitleBar({content:BX.create("div",{style:{marginRight:"30px",whiteSpace:"nowrap"},text:o?BX.message("CBD_TITLE_SUCCESSFUL"):BX.message("CBD_TITLE_ERROR")})});this.obPopupWin.setContent(i);this.obPopupWin.setButtons(r);this.obPopupWin.show()};t.JCCatalogBigdataProducts.prototype.InitPopupWindow=function(){if(!!this.obPopupWin){return}this.obPopupWin=BX.PopupWindowManager.create("CatalogSectionBasket_"+this.visual.ID,null,{autoHide:false,offsetLeft:0,offsetTop:0,overlay:true,closeByEsc:true,titleBar:true,closeIcon:{top:"10px",right:"10px"}})}})(window);function getCookie(t){var e=document.cookie.match(new RegExp("(?:^|; )"+t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return e?decodeURIComponent(e[1]):undefined}function bx_rcm_recommendation_event_attaching(t){return null}function bx_rcm_adaptive_recommendation_event_attaching(t,e){var i=function(e){var i=BX(this),s;for(s in t){if(t[s].productUrl==i.getAttribute("href")){window.JCCatalogBigdataProducts.prototype.RememberProductRecommendation(t[s].recommendationId,t[s].productId);break}}};var s=BX(e);if(!s){s=document.body}var a=BX.findChildren(s,{tag:"a"},true);if(a){var o;for(o in a){BX.bind(a[o],"click",i)}}}function bx_rcm_get_from_cloud(t,e,i){var s="https://analytics.bitrix.info/crecoms/v1_0/recoms.php";var a=BX.ajax.prepareData(e);if(a){s+=(s.indexOf("?")!==-1?"&":"?")+a}var o=function(e){if(!e.items){e.items=[]}BX.ajax({url:"/bitrix/components/bitrix/catalog.bigdata.products/ajax.php?"+BX.ajax.prepareData({AJAX_ITEMS:e.items,RID:e.id}),method:"POST",data:i,dataType:"html",processData:false,start:true,onsuccess:function(e){var i=BX.processHTML(e);BX(t).innerHTML=i.HTML;BX.ajax.processScripts(i.SCRIPT)}})};BX.ajax({method:"GET",dataType:"json",url:s,timeout:3,onsuccess:o,onfailure:o})}
/* End */
;; /* /bitrix/templates/aspro_optimus/components/bitrix/sale.basket.basket/basket/script.min.js?158980507222553*/
; /* /bitrix/templates/aspro_optimus/components/bitrix/sale.basket.basket/basket/js/mustache.min.js?15898050725835*/
; /* /bitrix/templates/aspro_optimus/components/bitrix/sale.basket.basket/basket/js/action-pool.min.js?15898050724358*/
; /* /bitrix/templates/aspro_optimus/components/bitrix/sale.basket.basket/basket/js/filter.min.js?158980507210511*/
; /* /bitrix/templates/aspro_optimus/components/bitrix/sale.basket.basket/basket/js/component.js?160095300262158*/
; /* /bitrix/templates/aspro_optimus/components/bitrix/catalog.bigdata.products/optimus_new/script.min.js?158980555323915*/

//# sourceMappingURL=page_067b7e7f20f8744a8f3b5cddeb94cf0c.map.js