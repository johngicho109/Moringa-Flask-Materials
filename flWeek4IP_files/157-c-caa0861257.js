(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[157],{"65NJ":function(e,t,n){"use strict"
var i=n("ouhR")
var s=n.n(i)
n("w2hD")
s.a.fn.scrollToVisible=function(e){const t={}
const n=s()(e)
if(0===n.length)return
let i=n.offset(),o=n.outerWidth(),a=n.outerHeight(),l=i.top,r=l+a,c=i.left,d=c+o,u="html,body"==this.selector?s.a.windowScrollTop():this.scrollTop(),h=this.scrollLeft(),p=this.outerHeight(),f=this.outerWidth()
if("html,body"!=this.selector){let e=s()("body").offset()
this.each((function(){try{e=s()(this).offset()
return false}catch(e){}}))
l-=e.top
r-=e.top
c-=e.left
d-=e.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){p=s()(window).height()
s()("#wizard_box:visible").length>0&&(p-=s()("#wizard_box:visible").height())
f=s()(window).width()
l-=u
c-=h
r-=u
d-=h}l<0||p<a&&r>p?t.scrollTop=l+u:r>p&&(t.scrollTop=r+u-p+20)
c<0?t.scrollLeft=c+h:d>f&&(t.scrollLeft=d+h-f+20)
1==t.scrollTop&&(t.scrollTop=0)
1==t.scrollLeft&&(t.scrollLeft=0)
this.scrollTop(t.scrollTop)
this.scrollLeft(t.scrollLeft)
return this}},"6ohZ":function(e,t,n){"use strict"
n.d(t,"a",(function(){return g}))
var i=n("An8g")
var s=n("Ff2n")
var o=n("q1tI")
var a=n.n(o)
n("17x9")
var l=n("Mmr1")
var r=n("msMH")
var c=n("HGxv")
var d=n("8WeW")
Object(d["a"])(JSON.parse('{"ar":{"close_d634289d":"إغلاق"},"ca":{"close_d634289d":"Tanca"},"cy":{"close_d634289d":"Cau"},"da":{"close_d634289d":"Luk"},"da-x-k12":{"close_d634289d":"Luk"},"de":{"close_d634289d":"Schließen"},"el":{"close_d634289d":"Κλείσιμο"},"en-AU":{"close_d634289d":"Close"},"en-AU-x-unimelb":{"close_d634289d":"Close"},"en-CA":{"close_d634289d":"Close"},"en-GB":{"close_d634289d":"Close"},"en-GB-x-lbs":{"close_d634289d":"Close"},"en-GB-x-ukhe":{"close_d634289d":"Close"},"es":{"close_d634289d":"Cerrar"},"fa":{"close_d634289d":"بستن"},"fi":{"close_d634289d":"Sulje"},"fr":{"close_d634289d":"Fermer"},"fr-CA":{"close_d634289d":"Fermer"},"he":{"close_d634289d":"סגירה"},"ht":{"close_d634289d":"Fèmen"},"hu":{"close_d634289d":"Bezárás"},"hy":{"close_d634289d":"Փակել"},"is":{"close_d634289d":"Loka"},"it":{"close_d634289d":"Chiudi"},"ja":{"close_d634289d":"閉じる"},"ko":{"close_d634289d":"닫기"},"mi":{"close_d634289d":"Katia"},"nb":{"close_d634289d":"Lukk"},"nb-x-k12":{"close_d634289d":"Lukk"},"nl":{"close_d634289d":"Sluiten"},"nn":{"close_d634289d":"Lukk"},"pl":{"close_d634289d":"Zamknij"},"pt":{"close_d634289d":"Fechar"},"pt-BR":{"close_d634289d":"Fechar"},"ru":{"close_d634289d":"Закрыть"},"sl":{"close_d634289d":"Zapri"},"sv":{"close_d634289d":"Stäng"},"sv-x-k12":{"close_d634289d":"Stäng"},"tr":{"close_d634289d":"Kapat"},"uk":{"close_d634289d":"Закрити"},"zh-Hans":{"close_d634289d":"关闭"},"zh-Hant":{"close_d634289d":"關閉"}}'))
n("jQeR")
n("0sPK")
var u=c["default"].scoped("modal")
var h=n("Dibh")
const p=["label","closeButtonLabel","onDismiss","children"]
function f(){return document.getElementById("flash_screenreader_holder")}function g(e){let t=e.label,n=e.closeButtonLabel,o=e.onDismiss,c=e.children,d=Object(s["a"])(e,p)
return a.a.createElement(h["a"],Object.assign({liveRegion:f},d,{label:t,onDismiss:o}),Object(i["a"])(h["a"].Header,{},void 0,Object(i["a"])(l["a"],{"data-testid":"instui-modal-close",placement:"end",offset:"medium",onClick:o},void 0,n||u.t("Close")),Object(i["a"])(r["a"],{},void 0,t)),c)}["Header","Body","Footer"].forEach(e=>g[e]=h["a"][e])
g.defaultProps={closeButtonLabel:void 0}},E7jo:function(e,t,n){"use strict"
var i=n("ouhR")
var s=n.n(i)
n("MIhX")
n("dJId")
n("dGUw")
n("oa+I")
s.a.widget("ui.droppable",{version:"@VERSION",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var e=this.options,t=e.accept
this.isover=0
this.isout=1
this.accept=s.a.isFunction(t)?t:function(e){return e.is(t)}
this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}
s.a.ui.ddmanager.droppables[e.scope]=s.a.ui.ddmanager.droppables[e.scope]||[]
s.a.ui.ddmanager.droppables[e.scope].push(this)
e.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){var e=s.a.ui.ddmanager.droppables[this.options.scope]
for(var t=0;t<e.length;t++)e[t]==this&&e.splice(t,1)
this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(e,t){"accept"==e&&(this.accept=s.a.isFunction(t)?t:function(e){return e.is(t)})
s.a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(e){var t=s.a.ui.ddmanager.current
this.options.activeClass&&this.element.addClass(this.options.activeClass)
t&&this._trigger("activate",e,this.ui(t))},_deactivate:function(e){var t=s.a.ui.ddmanager.current
this.options.activeClass&&this.element.removeClass(this.options.activeClass)
t&&this._trigger("deactivate",e,this.ui(t))},_over:function(e){var t=s.a.ui.ddmanager.current
if(!t||(t.currentItem||t.element)[0]==this.element[0])return
if(this.accept.call(this.element[0],t.currentItem||t.element)){this.options.hoverClass&&this.element.addClass(this.options.hoverClass)
this._trigger("over",e,this.ui(t))}},_out:function(e){var t=s.a.ui.ddmanager.current
if(!t||(t.currentItem||t.element)[0]==this.element[0])return
if(this.accept.call(this.element[0],t.currentItem||t.element)){this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)
this._trigger("out",e,this.ui(t))}},_drop:function(e,t){var n=t||s.a.ui.ddmanager.current
if(!n||(n.currentItem||n.element)[0]==this.element[0])return false
var i=false
this.element.find(":data(droppable)").not(".ui-draggable-dragging").each((function(){var e=s.a.data(this,"droppable")
if(e.options.greedy&&!e.options.disabled&&e.options.scope==n.options.scope&&e.accept.call(e.element[0],n.currentItem||n.element)&&s.a.ui.intersect(n,s.a.extend(e,{offset:e.element.offset()}),e.options.tolerance)){i=true
return false}}))
if(i)return false
if(this.accept.call(this.element[0],n.currentItem||n.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass)
this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)
this._trigger("drop",e,this.ui(n))
return this.element}return false},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}})
s.a.ui.intersect=function(e,t,n){if(!t.offset)return false
var i=(e.positionAbs||e.position.absolute).left,o=i+e.helperProportions.width,a=(e.positionAbs||e.position.absolute).top,l=a+e.helperProportions.height
var r=t.offset.left,c=r+t.proportions.width,d=t.offset.top,u=d+t.proportions.height
switch(n){case"fit":return r<=i&&o<=c&&d<=a&&l<=u
case"intersect":return r<i+e.helperProportions.width/2&&o-e.helperProportions.width/2<c&&d<a+e.helperProportions.height/2&&l-e.helperProportions.height/2<u
case"pointer":var h=(e.positionAbs||e.position.absolute).left+(e.clickOffset||e.offset.click).left,p=(e.positionAbs||e.position.absolute).top+(e.clickOffset||e.offset.click).top,f=s.a.ui.isOver(p,h,d,r,t.proportions.height,t.proportions.width)
return f
case"touch":return(a>=d&&a<=u||l>=d&&l<=u||a<d&&l>u)&&(i>=r&&i<=c||o>=r&&o<=c||i<r&&o>c)
default:return false}}
s.a.ui.ddmanager={current:null,droppables:{default:[]},prepareOffsets:function(e,t){var n=s.a.ui.ddmanager.droppables[e.options.scope]||[]
var i=t?t.type:null
var o=(e.currentItem||e.element).find(":data(droppable)").andSelf()
e:for(var a=0;a<n.length;a++){if(n[a].options.disabled||e&&!n[a].accept.call(n[a].element[0],e.currentItem||e.element))continue
for(var l=0;l<o.length;l++)if(o[l]==n[a].element[0]){n[a].proportions.height=0
continue e}n[a].visible="none"!=n[a].element.css("display")
if(!n[a].visible)continue
"mousedown"==i&&n[a]._activate.call(n[a],t)
n[a].offset=n[a].element.offset()
n[a].proportions={width:n[a].element[0].offsetWidth,height:n[a].element[0].offsetHeight}}},drop:function(e,t){var n=false
s.a.each(s.a.ui.ddmanager.droppables[e.options.scope]||[],(function(){if(!this.options)return
!this.options.disabled&&this.visible&&s.a.ui.intersect(e,this,this.options.tolerance)&&(n=this._drop.call(this,t)||n)
if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)){this.isout=1
this.isover=0
this._deactivate.call(this,t)}}))
return n},dragStart:function(e,t){e.element.parentsUntil("body").bind("scroll.droppable",(function(){e.options.refreshPositions||s.a.ui.ddmanager.prepareOffsets(e,t)}))},drag:function(e,t){e.options.refreshPositions&&s.a.ui.ddmanager.prepareOffsets(e,t)
s.a.each(s.a.ui.ddmanager.droppables[e.options.scope]||[],(function(){if(this.options.disabled||this.greedyChild||!this.visible)return
var n=s.a.ui.intersect(e,this,this.options.tolerance)
var i=n||1!=this.isover?n&&0==this.isover?"isover":null:"isout"
if(!i)return
var o
if(this.options.greedy){var a=this.element.parents(":data(droppable):eq(0)")
if(a.length){o=s.a.data(a[0],"droppable")
o.greedyChild="isover"==i?1:0}}if(o&&"isover"==i){o["isover"]=0
o["isout"]=1
o._out.call(o,t)}this[i]=1
this["isout"==i?"isover":"isout"]=0
this["isover"==i?"_over":"_out"].call(this,t)
if(o&&"isout"==i){o["isout"]=0
o["isover"]=1
o._over.call(o,t)}}))},dragStop:function(e,t){e.element.parentsUntil("body").unbind("scroll.droppable")
e.options.refreshPositions||s.a.ui.ddmanager.prepareOffsets(e,t)}}},JOjB:function(e,t,n){"use strict"
var i=n("ouhR")
var s=n.n(i)
var o=n("HGxv")
var a=n("8WeW")
Object(a["a"])(JSON.parse('{"ar":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"إظهار النص المقتبس","word_separator":" "}}},"ca":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostra el text citat","word_separator":" "}}},"cy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"dangos testun wedi’i ddyfynnu","word_separator":" "}}},"da":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"da-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"de":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"zitierten Text zeigen","word_separator":" "}}},"el":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"προβολή κειμένου που παρατίθεται"}}},"en":{"lib":{"text_helper":{"ellipsis":"...","word_separator":" "}}},"en-AU":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-AU-x-unimelb":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB-x-lbs":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB-x-ukhe":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"es":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostrar texto citado","word_separator":" "}}},"fa":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"نمایش متن نقل شده","word_separator":" "}}},"fi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"näytä lainattu teksti","word_separator":" "}}},"fr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"fr-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"he":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"מציג ציטוט","word_separator":" "}}},"ht":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afiche tèks site","word_separator":" "}}},"hu":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"idézett szöveg megjelenítése","word_separator":" "}}},"hy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"ցույց տալ մեջբերվող տեքստը","word_separator":"-"}}},"is":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Sýna ívitnaðan texta","word_separator":" "}}},"it":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostra testo citato","word_separator":" "}}},"ja":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"引用したテキストを表示","word_separator":" "}}},"ko":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"인용된 텍스트 표시","word_separator":" "}}},"mi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"whakaatu kuputuhi faahiti","word_separator":"-"}}},"nb":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nb-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"geciteerde tekst tonen","word_separator":" "}}},"nn":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis sitert tekst","word_separator":" "}}},"pl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"pokaż cytowany fragment tekstu","word_separator":" "}}},"pt":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"pt-BR":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"ru":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"показать цитированный текст","word_separator":" "}}},"sl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"prikaži citirano besedilo","word_separator":" "}}},"sv":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"sv-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"tr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"alıntılanan metni göster","word_separator":" "}}},"uk":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Показати цитований текст","word_separator":" "}}},"zh-Hans":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"显示引用的文本","word_separator":" "}}},"zh-Hant":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"顯示引用的文字","word_separator":" "}}}}'))
n("jQeR")
n("0sPK")
var l=o["default"].scoped("lib.text_helper")
var r=n("gI0r")
var c,d,u
c="LINK-PLACEHOLDER"
d=/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))|(LINK-PLACEHOLDER)/gi
t["a"]=u={quoteClump:function(e){return"<div class='quoted_text_holder'> <a href='#' class='show_quoted_text_link'>"+Object(r["a"])(l.t("quoted_text_toggle","show quoted text"))+"</a> <div class='quoted_text' style='display: none;'> "+s.a.raw(e.join("\n"))+" </div> </div>"},formatMessage:function(e){var t,n,i,s,o,a,l,h
s=[]
o=[]
e=e.replace(d,(function(e,t){var n
o.push(e===c?c:(n=e,"http://"===n.slice(0,7)||"https://"===n.slice(0,8)||(n="http://"+n),s.push(n),"<a href='"+Object(r["a"])(n)+"'>"+Object(r["a"])(e)+"</a>"))
return c}))
e=Object(r["a"])(e)
e=e.replace(new RegExp(c,"g"),(function(e,t){return o.shift()}))
e=e.replace(/\n/g,"<br />\n")
a=[]
l=[]
h=e.split("\n")
for(t=0,n=h.length;t<n;t++){i=h[t]
if(i.match(/^(&gt;|>)/))l.push(i)
else{l.length&&a.push(u.quoteClump(l))
l=[]
a.push(i)}}l.length&&a.push(u.quoteClump(l))
return a.join("\n")},delimit:function(e){var t,n,i,s,o
if(isNaN(e))return String(e)
o=e<0?"-":""
t=Math.abs(e)
if(Infinity===t)return String(e)
n=Math.floor(t)
s=t===n?"":String(t).replace(/^\d+\./,".")
while(n>=1e3){i=String(n).replace(/\d+(\d\d\d)$/,",$1")
n=Math.floor(n/1e3)
s=i+s}return o+String(n)+s},truncateText:function(e,t){var n,i,s,o,a,r
null==t&&(t={})
i=null!=(o=t.max)?o:30
n=l.t("ellipsis","...")
r=l.t("word_separator"," ")
e=(null!=e?e:"").replace(/\s+/g,r).trim()
if(!e||e.length<=i)return e
a=0
while(true){s=e.indexOf(r,a+1)
if(s<0||s>i-n.length)break
a=s}a||(a=i-n.length)
return e.substring(0,a)+n},plainText:function(e){return e.replace(/(<([^>]+)>)/gi,"")}}},TvTI:function(e,t,n){"use strict"
var i=n("ouhR")
var s=n.n(i)
var o=n("gI0r")
n("8JEM")
s.a.fn.fillTemplateData=function(e){if(this.length&&e){e.iterator&&this.find("*").andSelf().each((function(){const t=s()(this)
s.a.each(["name","id","class"],(n,i)=>{t.attr(i)&&t.attr(i,t.attr(i).replace(/-iterator-/,e.iterator))})}))
e.id&&this.attr("id",e.id)
let i=false
if(e.data)for(var t in e.data){if(e.except&&-1!=s.a.inArray(t,e.except))continue
e.data[t]&&e.dataValues&&-1!=s.a.inArray(t,e.dataValues)&&this.data(t,e.data[t].toString())
const a=this.find("."+t)
var n=e.avoid||""
a.each((function(){const a=s()(this)
if(a.length>0&&0===a.closest(n).length){"undefined"!==typeof e.data[t]&&null!==e.data[t]||(e.data[t]="")
if(e.htmlValues&&-1!=s.a.inArray(t,e.htmlValues)){a.html(s.a.raw(e.data[t].toString()))
if(a.hasClass("user_content")){i=true
a.removeClass("enhanced")
a.data("unenhanced_content_html",e.data[t].toString())}}else if("INPUT"==a[0].tagName.toUpperCase())a.val(e.data[t])
else try{const n=e.data[t].toString()
a.html(Object(o["a"])(n))}catch(e){}}}))}e.hrefValues&&e.data&&this.find("a,span[rel]").each((function(){let t,n,i,o=s()(this)
for(const a in e.hrefValues){if(!e.hrefValues.hasOwnProperty(a))continue
const l=e.hrefValues[a]
if(t=o.attr("href")){const n=s.a.replaceTags(t,l,encodeURIComponent(e.data[l]))
const i=o.text()===o.html()?o.text():null
if(t!==n){o.attr("href",n)
i&&o.text(i)}}(n=o.attr("rel"))&&o.attr("rel",s.a.replaceTags(n,l,e.data[l]));(i=o.attr("name"))&&o.attr("name",s.a.replaceTags(i,l,e.data[l]))}}))
i&&s()(document).triggerHandler("user_content_change")}return this}
s.a.fn.fillTemplateData.defaults={htmlValues:null,hrefValues:null}
s.a.fn.getTemplateData=function(e){if(!this.length||!e)return{}
var t,n={}
if(e.textValues){const t=this
e.textValues.forEach(e=>{const o=t.find("."+e.replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
i=s.a.trim(o.text())
"&nbsp;"===o.html()&&(i="")
1===i.length&&160===i.charCodeAt(0)&&(i="")
n[e]=i})}if(e.dataValues)for(t in e.dataValues){var i=this.data(e.dataValues[t])
i&&(n[e.dataValues[t]]=i)}if(e.htmlValues)for(t in e.htmlValues){const o=this.find("."+e.htmlValues[t].replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
i=null
i=o.hasClass("user_content")&&o.data("unenhanced_content_html")?o.data("unenhanced_content_html"):s.a.trim(o.html())
n[e.htmlValues[t]]=i}return n}
s.a.fn.getTemplateValue=function(e,t){const n=s.a.extend({},t,{textValues:[e]})
return this.getTemplateData(n)[e]}},aoKV:function(e,t,n){"use strict"
var i=n("ouhR")
var s=n.n(i)
n("Y/W1")
var o=n("gI0r")
n("oa+I")
n("E7jo")
s.a.fn.instTree=function(e){return s()(this).each((function(){let t=false
let n=s()(this)
const i=this
let a=null
i.options={autoclose:true,overrideEvents:false,multi:true,dragdrop:true,onClick:false,onDblClick:false,onExpand:false,onCollapse:false,onAddNode:false,onEditNode:false,onDeleteNode:false,onDrag:false,onDrop:false}
i.opts=s.a.extend({},i.options,e)
s.a.fn.instTree.InitInstTree=function(e){n=s()(e)
const o='<li class="separator"></li>'
n.find("li:not(.separator)").filter((function(){return!(s()(this).prev("li.separator").get(0)||s()(this).parents("ul.non-instTree").get(0))})).each((function(){s()(this).before(o)}))
n.find("li > span").not(".sign").not(".clr").addClass("text").attr("unselectable","on")
n.find("li:not(.separator)").filter((function(){return!s()(this).parents("ul.non-instTree").get(0)})).filter(":has(ul)").addClass("node").end().filter(":not(.node)").addClass("leaf")
i.IeSetStyles()
i.Clean()
i.AddSigns()
t||i.BindEvents(e)
if(i.opts.dragdrop){i.CancelDragDrop(e)
i.InitDragDrop(e)}}
i.InitDragDrop=function(e){n=s()(e)
n.find("span.text").draggable({cursor:s.a.browser.msie?"default":"move",distance:3,helper(){return s()('<div id="instTree-drag"><span>'+s()(this).html()+"</span></div>")},appendTo:n})
n.find("li.separator").droppable({accept:"span.text",hoverClass:"dd-hover"})
n.find("span.text").bind("dragstart",(function(e,t){n=s()(this).parents("ul.instTree:first")
const o=s()(this).parent("li")
const a=s()("div#instTree-drag")
s.a.browser.msie&&n.find("li.separator").removeClass("dd-hover")
s.a.browser.opera&&a.css("margin-top","10px")
if(o.is(".leaf")){a.addClass("leaf")
s.a.browser.msie&&a.css("background","#C3E1FF url("+i.opts.imgFolder+"leaf-drag.gif) left 3px no-repeat")}else o.is(".node")&&a.addClass("node")
o.prev("li.separator").addClass("alt").end().addClass("alt")
"function"===typeof i.opts.onDrag&&i.opts.onDrag(e,o)}))
n.find("li.separator").bind("dropover",(function(e,t){a=s()(this)}))
n.find("li.separator").bind("dropout",(e,t)=>{a=null})
n.find("span.text").bind("dragstop",(t,o)=>{let l=true
if(a){var r=n.find("li.alt:not(.separator):eq(0)")
const e=a.parents("li.node:eq(0)")
r.is(".node")&&e.is(".fixedLevel")&&(l=false)}if(a&&l){a.before(n.find("li.alt").remove().removeClass("alt"))
a=null
"function"===typeof i.opts.onDrop&&i.opts.onDrop(t,r)
s.a.fn.instTree.InitInstTree(e)}else n.find("li.alt").removeClass("alt")})}
i.CancelDragDrop=function(e){n=s()(e)
n.find("span.text").draggable("destroy")
n.find("li.separator").droppable("destroy")
n.find("li.separator").unbind()
n.find("span.text").unbind()}
s.a.fn.instTree.AddNode=function(e,t){n=s()(e)
const o=n.find("span.active").get(0)
if(o){const n=s()(o).parents("li:first")
const a=s()(o).parents("li.node:first")
if(!a.is(".fixedLevel")||"node"!=t){const a="leaf"==t?"":' class="node"'
const l='<li class="separator"></li>'
const r="<li"+a+'><span class="text">&nbsp;</span><input type="text" value="New item" /></li>'
const c=l+r
let d=false
let u,h,p
if(n.is(".leaf")){n.after(c)
u=n.nextAll("li:not(.separator):first")
p=n.parent()
d=true}else if(n.is(".node")){h=n.children("ul").get(0)
if(h){s()(h).append(c)
u=s()(h).children("li:not(.separator):last")}else{n.append("<ul>"+c+"</ul>")
h=n.children("ul").get(0)
u=s()(h).children("li:not(.separator):last")}i.ExpandNode(e,n)
p=n
d=true}if(d){s()(o).removeClass("active")
p.find("input:text").focus().select().blur((function(){i.SaveInput(e,s()(this))}))}s.a.fn.instTree.InitInstTree(e)
"function"===typeof i.opts.onAddNode&&i.opts.onAddNode(u)}}}
s.a.fn.instTree.EditNode=function(e){n=s()(e)
const t=n.find("span.active").get(0)
if(t){const n=s()(t).parents("li:first")
s()(t).replaceWith('<span class="text">&nbsp;</span><input type="text" value="'+Object(o["a"])(s()(t).text())+'" />')
n.find("input:text").focus().select().blur((function(){i.SaveInput(e,s()(this))}))
"function"===typeof i.opts.onEditNode&&i.opts.onEditNode(n)}}
s.a.fn.instTree.DeleteNode=function(e){n=s()(e)
const t=n.find("span.active").get(0)
if(t){const n=s()(t).parents("li:first")
const o=n.parents("li.node:first")
n.prev("li.separator").remove().end().remove()
s.a.fn.instTree.InitInstTree(e)
"function"===typeof i.opts.onDeleteNode&&i.opts.onDeleteNode(n,o)}}
i.SaveInput=function(e,t){t.prev("span.text").remove()
const n=""!==s.a.trim(t.get(0).value)?t.get(0).value:"_____"
t.replaceWith('<span class="active text">'+Object(o["a"])(n)+"</span>")
s.a.fn.instTree.InitInstTree(e)}
i.IeSetStyles=function(){if(s.a.browser.msie){n.find("li.node:not(.open) > ul").hide()
n.find("li.node.open > ul").css("margin-bottom","1px")}}
i.Clean=function(){n.find("li:not(.separator)").each((function(){s()(this).removeClass("last")
s()(this).next("li").length&&!s()(this).find("ul").length||s()(this).addClass("last")}))}
i.AddSigns=function(){n.find("li.node").each((function(){s()(this).hasClass("open")?s()(this).find("span.sign").remove().end().append('<span class="sign minus"></span>'):s()(this).find("span.sign").remove().end().append('<span class="sign plus"></span>')}))}
i.BindEvents=function(e){n.on("keydown",(function(t){const o=n.find('[aria-selected="true"]')
const a=s()("#file_list_container")
switch(t.which){case 38:t.preventDefault()
t.stopPropagation()
var l=i.FindNode(o,"up")
i.SelectNode(l)
a.scrollTop(i.FileScrollOffset(l,a))
break
case 40:t.preventDefault()
t.stopPropagation()
var r=i.FindNode(o,"down")
i.SelectNode(r)
a.scrollTop(i.FileScrollOffset(r,a))
break
case 37:t.preventDefault()
t.stopPropagation()
var c=o.attr("aria-expanded")
if(o.hasClass("node")&&"true"===c)i.CollapseNode(o)
else if("undefined"===typeof c||false===c||"false"===c){const e=o.parents(".node").eq(0)
i.SelectNode(e)
a.scrollTop(i.FileScrollOffset(e,a))}break
case 39:t.preventDefault()
t.stopPropagation()
c=o.attr("aria-expanded")
if(o.hasClass("node")&&"true"!==c)i.ExpandNode(e,o)
else if("true"===c){r=i.FindNode(o,"down")
i.SelectNode(r)
a.scrollTop(i.FileScrollOffset(r,a))}break
case 13:t.preventDefault()
t.stopPropagation()
var d=o
"function"===typeof i.opts.onEnter&&i.opts.onEnter.call(this,t,d)
break
case 35:t.preventDefault()
t.stopPropagation()
var u=s()('[role="treeitem"]:visible')
var h=u.last()
i.SelectNode(h)
a.scrollTop(i.FileScrollOffset(h,a))
break
case 36:t.preventDefault()
t.stopPropagation()
u=s()('[role="treeitem"]:visible')
var p=u.first()
i.SelectNode(p)
a.scrollTop(i.FileScrollOffset(p,a))}}))
n.click((function(t){const n=s()(this).closest(".instTree")
const o=s()(t.target)
let a
if(o.is("span.sign")){a=o.parents("li:eq(0)")
i.ToggleNode(e,a)}else if(o.is("span.text")){a=o.closest("li")
if("function"===typeof i.opts.onClick){if(!i.opts.overrideEvents){i.opts.multi&&t.ctrlKey||n.find(".active").removeClass("active").end().find(".active-leaf").removeClass("active-leaf").end().find(".active-node").removeClass("active-node")
o.addClass("active")
a.hasClass("leaf")?a.addClass("active-leaf"):a.addClass("active-node")}i.opts.onClick.call(a,t,a)}else{i.opts.multi&&t.ctrlKey||n.find(".active").removeClass("active").end().find(".active-leaf").removeClass("active-leaf").end().find(".active-node").removeClass("active-node")
o.addClass("active")
a.hasClass("leaf")?a.addClass("active-leaf"):a.addClass("active-node")}}}))
n.dblclick(t=>{const n=s()(t.target)
if(n.is("span.text")){const s=n.parents("li:eq(0)")
if("function"===typeof i.opts.onDblClick){!i.opts.overrideEvents&&s.is(".node")&&i.ToggleNode(e,s)
i.opts.onDblClick.call(s,t,s)}else s.is(".node")&&i.ToggleNode(e,s)}})
t=true}
i.ToggleNode=function(e,t){t.hasClass("open")?i.CollapseNode(t):i.ExpandNode(e,t)
i.Clean()}
i.ExpandNode=function(e,t){t.addClass("open")
t.attr("aria-expanded",true)
i.opts.autoclose&&t.siblings(".open").each((function(){i.CollapseNode(s()(this))}))
if(s.a.browser.msie){t.children("ul").show().css({"margin-bottom":"1px",visibility:"visible"})
t.children("ul").find("li.node:not(.open) > ul").each((function(){s()(this).css("visibility","hidden")}))}const n=t.find("span.sign:last")
n.removeClass("plus").addClass("minus")
i.opts.multi&&s.a.fn.instTree.InitInstTree(e)
"function"===typeof i.opts.onExpand&&i.opts.onExpand(t)}
i.CollapseNode=function(e){e.removeClass("open")
e.attr("aria-expanded",false)
s.a.browser.msie&&e.children("ul").hide()
const t=e.find("span.sign:last")
t.removeClass("minus").addClass("plus")
"function"===typeof i.opts.onCollapse&&i.opts.onCollapse(e)}
i.SelectNode=function(e){if(e.length){n.attr("aria-activedescendant",e.attr("id"))
n.find('[aria-selected="true"]').attr("aria-selected","false")
e.attr("aria-selected","true")}}
i.FindNode=function(e,t){const n=s()('[role="treeitem"]:visible')
const i=n.index(e)
let o=i
"up"==t?o--:o++
const a=o>=0?n.get(o):n.get(i)
const l=s()(a).data("indexPosition",o)
return l}
i.FileScrollOffset=function(e,t){const n=e.data("indexPosition")
const i=t.find(".leaf").first().height()||20
const s=e.siblings(".separator").first().height()||2
const o=s*n
const a=i*n
const l=t.height()/2
return a+o-l}
if(s()(this).is("ul")){n=s()(this)
n.addClass("instTree")
s.a.fn.instTree.InitInstTree(i)}}))}},aq8L:function(e,t,n){"use strict"
var i=n("HGxv")
var s=n("8WeW")
Object(s["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"ca":{"buttons":{"cancel":"Cancel·la","delete":"Suprimeix"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Segur que ho voleu suprimir?"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annullér","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annullér","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","delete":"Delete"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ви впевнені, що хочете це видалити?"}}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
n("jQeR")
n("0sPK")
var o=i["default"].scoped("instructure_misc_plugins")
var a=n("ouhR")
var l=n.n(a)
var r=n("gI0r")
var c=n("3PZ/")
n("dhbk")
n("ESjL")
n("65NJ")
n("w2hD")
l.a.fn.setOptions=function(e,t){let n=e?"<option value=''>"+Object(r["a"])(e)+"</option>":""
null==t&&(t=[])
t.forEach(e=>{const t=Object(r["a"])(e)
n+='<option value="'+t+'">'+t+"</option>"})
return this.html(l.a.raw(n))}
l.a.fn.ifExists=function(e){this.length&&e.call(this,this)
return this}
l.a.fn.scrollbarWidth=function(){const e=l()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div")
const n=t.innerWidth()
e.css("overflow-y","scroll")
const i=t.innerWidth()
e.remove()
return n-i}
l.a.fn.dim=function(e){return this.animate({opacity:.4},e)}
l.a.fn.undim=function(e){return this.animate({opacity:1},e)}
l.a.fn.confirmDelete=function(e){e=l.a.extend({},l.a.fn.confirmDelete.defaults,e)
const t=this
let n=null
let i=true
e.noMessage=e.noMessage||e.no_message
const s=function(){if(!i){e.cancelled&&l.a.isFunction(e.cancelled)&&e.cancelled.call(t)
return}e.confirmed||(e.confirmed=function(){t.dim()})
e.confirmed.call(t)
if(e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const i=e.prepareData?e.prepareData.call(t,n):{}
i.authenticity_token=Object(c["a"])()
l.a.ajaxJSON(e.url,"DELETE",i,n=>{e.success.call(t,n)},(n,i,s,o)=>{e.error&&l.a.isFunction(e.error)?e.error.call(t,n,i,s,o):l.a.ajaxJSON.unhandledXHRs.push(i)})}else{e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})})
e.success.call(t)}}
if(e.message&&!e.noMessage&&!l.a.skipConfirmations){if(e.dialog){i=false
const t="object"===typeof e.dialog?e.dialog:{}
const a=e.url.includes("assignments")?"btn-danger":"btn-primary"
n=l()(e.message).dialog(l.a.extend({},{modal:true,close:s,buttons:[{text:o.t("#buttons.cancel","Cancel"),click(){l()(this).dialog("close")}},{text:o.t("#buttons.delete","Delete"),class:a,click(){i=true
l()(this).dialog("close")}}]},t))
return}i=confirm(e.message)}s()}
l.a.fn.confirmDelete.defaults={get message(){return o.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
l.a.fn.fragmentChange=function(e){if(e&&true!==e){const n=(window.location.search||"").replace(/^\?/,"").split("&")
let i=null
for(var t=0;t<n.length;t++){const e=n[t]
e&&0===e.indexOf("hash=")&&(i="#"+e.substring(5))}this.bind("document_fragment_change",e)
const s=this
let o=false
for(t=0;t<l.a._checkFragments.fragmentList.length;t++){const e=l.a._checkFragments.fragmentList[t]
e.doc[0]==s[0]&&(o=true)}o||l.a._checkFragments.fragmentList.push({doc:s,fragment:""})
l()(window).bind("hashchange",l.a._checkFragments)
setTimeout(()=>{i&&i.length>0?s.triggerHandler("document_fragment_change",i):s&&s[0]&&s[0].location&&s[0].location.hash.length>0&&s.triggerHandler("document_fragment_change",s[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
l.a._checkFragments=function(){const e=l.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const n=e[t]
const i=n.doc
if(i[0].location.hash!=n.fragment){i.triggerHandler("document_fragment_change",i[0].location.hash)
n.fragment=i[0].location.hash
l.a._checkFragments.fragmentList[t]=n}}}
l.a._checkFragments.fragmentList=[]
l.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()}
l.a.fn.showIf=function(e){if(l.a.isFunction(e))return this.each((function(t){l()(this).showIf(e.call(this))}))
e?this.show():this.hide()
return this}
l.a.fn.disableIf=function(e){l.a.isFunction(e)&&(e=e.call(this))
this.prop("disabled",!!e)
return this}
l.a.fn.indicate=function(e){e=e||{}
let t
if("remove"==e){t=this.data("indicator")
t&&t.remove()
return}l()(".indicator_box").remove()
let n=this.offset()
e&&e.offset&&(n=e.offset)
const i=this.width()
const s=this.height()
const o=(e.container||this).zIndex()
t=l()(document.createElement("div"))
t.css({width:i+6,height:s+6,top:n.top-3,left:n.left-3,zIndex:o+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
t.addClass("indicator_box")
t.mouseover((function(){l()(this).stop().fadeOut("fast",(function(){l()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",t)
l()("body").append(t)
e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){l()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){l()(this).remove()}))
e&&e.scroll&&l()("html,body").scrollToVisible(t)}
l.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
l.a.fn.log=function(e){console.log("%s: %o",e,this)
return this}
l.a.fn.fillWindowWithMe=function(e){const t=l.a.extend({minHeight:400},e),n=l()(this),i=l()("#wrapper"),s=l()("#main"),o=l()("#not_right_side"),a=l()(window),r=l()(this).add(t.alsoResize)
function c(){r.height(0)
const e=a.height()-(i.offset().top+i.outerHeight())+(s.height()-o.height()),c=Math.max(400,e)
r.height(c)
l.a.isFunction(t.onResize)&&t.onResize.call(n,c)}c()
a.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",c)
return this}
l.a.fn.autoGrowInput=function(e){e=l.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e)
this.filter("input:text").each((function(){let t=e.minWidth||l()(this).width(),n="",i=l()(this),s=l()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:i.css("fontSize"),fontFamily:i.css("fontFamily"),fontWeight:i.css("fontWeight"),letterSpacing:i.css("letterSpacing"),whiteSpace:"nowrap"}),o=function(){setTimeout(()=>{if(n===(n=i.val()))return
s.text(n)
const o=s.width(),a=o+e.comfortZone>=t?o+e.comfortZone:t,l=i.width(),r=a<l&&a>=t||a>t&&a<e.maxWidth
r&&i.width(a)})}
s.insertAfter(i)
l()(this).bind("keyup keydown blur update change",o)}))
return this}
l.a},msMH:function(e,t,n){"use strict"
n.d(t,"a",(function(){return z}))
var i=n("rePB")
var s=n("Ff2n")
var o=n("1OyB")
var a=n("vuIU")
var l=n("Ji7U")
var r=n("LK+K")
var c=n("q1tI")
var d=n.n(c)
var u=n("17x9")
var h=n.n(u)
var p=n("TSYQ")
var f=n.n(p)
var g=n("n12J")
var _=n("J2CL")
function m(e,t,n){if("input"===e.as){if("children"===t&&e.children||void 0==e.value)return new Error("Prop `value` and not `children` must be supplied if `".concat(n,' as="input"`'))}else{if("value"===t&&void 0!=e.value)return new Error("Prop `children` and not `value` must be supplied unless `".concat(n,' as="input"`'))
if(!e.children)return new Error("Prop `children` should be supplied unless `".concat(n,' as="input"`.'))}return}var b=n("nAyT")
var v=n("KgFQ")
var x=n("jtGx")
var w=n("oXx0")
function y(e){var t=e.borders,n=e.colors,i=e.spacing,s=e.typography
return{lineHeight:s.lineHeightFit,h1FontSize:s.fontSizeXXLarge,h1FontWeight:s.fontWeightLight,h1FontFamily:s.fontFamily,h2FontSize:s.fontSizeXLarge,h2FontWeight:s.fontWeightNormal,h2FontFamily:s.fontFamily,h3FontSize:s.fontSizeLarge,h3FontWeight:s.fontWeightBold,h3FontFamily:s.fontFamily,h4FontSize:s.fontSizeMedium,h4FontWeight:s.fontWeightBold,h4FontFamily:s.fontFamily,h5FontSize:s.fontSizeSmall,h5FontWeight:s.fontWeightNormal,h5FontFamily:s.fontFamily,primaryInverseColor:n.textLightest,primaryColor:n.textDarkest,secondaryColor:n.textDark,secondaryInverseColor:n.textLight,borderPadding:i.xxxSmall,borderColor:n.borderMedium,borderWidth:t.widthSmall,borderStyle:t.style}}y.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"]}}
y["instructure"]=function(e){var t=e.typography
return{h1FontFamily:t.fontFamilyHeading,h2FontFamily:t.fontFamilyHeading,h3FontWeight:t.fontWeightBold,h3FontSize:"2.125rem",h4FontWeight:t.fontWeightBold,h4FontSize:t.fontSizeLarge,h5FontWeight:t.fontWeightBold,h5FontSize:t.fontSizeMedium}}
var C={fontFamily:["h1FontFamily","h2FontFamily","h3FontFamily","h4FontFamily","h5FontFamily"]}
var k=Object(_["e"])({map:C,version:"8.0.0"})
var F,S,A,O,T,q
var I={componentId:"blnAQ",template:function(e){return"\n\n.blnAQ_bGBk{line-height:".concat(e.lineHeight||"inherit",";margin:0}\n\ninput.blnAQ_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:-0.375rem 0 0 0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.blnAQ_bGBk[type]{text-align:left}\n\n[dir=rtl] input.blnAQ_bGBk[type]{text-align:right}\n\ninput.blnAQ_bGBk[type]:focus{outline:none}\n\n.blnAQ_fCtg{font-family:").concat(e.h1FontFamily||"inherit",";font-size:").concat(e.h1FontSize||"inherit",";font-weight:").concat(e.h1FontWeight||"inherit","}\n\n.blnAQ_cVrl{font-family:").concat(e.h2FontFamily||"inherit",";font-size:").concat(e.h2FontSize||"inherit",";font-weight:").concat(e.h2FontWeight||"inherit","}\n\n.blnAQ_dnfM{font-family:").concat(e.h3FontFamily||"inherit",";font-size:").concat(e.h3FontSize||"inherit",";font-weight:").concat(e.h3FontWeight||"inherit","}\n\n.blnAQ_KGwv{font-family:").concat(e.h4FontFamily||"inherit",";font-size:").concat(e.h4FontSize||"inherit",";font-weight:").concat(e.h4FontWeight||"inherit","}\n\n.blnAQ_eYKA{font-family:").concat(e.h5FontFamily||"inherit",";font-size:").concat(e.h5FontSize||"inherit",";font-weight:").concat(e.h5FontWeight||"inherit","}\n\n.blnAQ_dbSc{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0}\n\n.blnAQ_bACI{border-top:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-top:").concat(e.borderPadding||"inherit","}\n\n.blnAQ_kWwi{border-bottom:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-bottom:").concat(e.borderPadding||"inherit","}\n\n.blnAQ_drOs{color:inherit}\n\n.blnAQ_eCSh{color:").concat(e.primaryColor||"inherit","}\n\n.blnAQ_buuG{color:").concat(e.secondaryColor||"inherit","}\n\n.blnAQ_bFtJ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.blnAQ_dsSB{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.blnAQ_bOQC{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}")},root:"blnAQ_bGBk","level--h1":"blnAQ_fCtg","level--h2":"blnAQ_cVrl","level--h3":"blnAQ_dnfM","level--h4":"blnAQ_KGwv","level--h5":"blnAQ_eYKA","level--reset":"blnAQ_dbSc","border--top":"blnAQ_bACI","border--bottom":"blnAQ_kWwi","color--inherit":"blnAQ_drOs","color--primary":"blnAQ_eCSh","color--secondary":"blnAQ_buuG","color--primary-inverse":"blnAQ_bFtJ","color--secondary-inverse":"blnAQ_dsSB",ellipsis:"blnAQ_bOQC"}
var z=(F=Object(b["a"])("8.0.0",{ellipsis:"<TruncateText />"}),S=Object(w["a"])(),A=Object(_["l"])(y,I,k),F(O=S(O=A(O=(q=T=function(e){Object(l["a"])(n,e)
var t=Object(r["a"])(n)
function n(){Object(o["a"])(this,n)
return t.apply(this,arguments)}Object(a["a"])(n,[{key:"render",value:function(){var e
var t=this.props,o=t.border,a=t.children,l=t.color,r=t.level,c=t.margin,u=t.elementRef,h=t.ellipsis,p=Object(s["a"])(t,["border","children","color","level","margin","elementRef","ellipsis"])
var _=Object(v["a"])(n,this.props,(function(){return"reset"===r?"span":r}))
return d.a.createElement(g["a"],Object.assign({},Object(x["b"])(p),{className:f()((e={},Object(i["a"])(e,I.root,true),Object(i["a"])(e,I["level--".concat(r)],true),Object(i["a"])(e,I["color--".concat(l)],l),Object(i["a"])(e,I["border--".concat(o)],"none"!==o),Object(i["a"])(e,I.ellipsis,h),e)),as:_,margin:c,elementRef:u}),a)}}])
n.displayName="Heading"
return n}(c["Component"]),T.propTypes={border:h.a.oneOf(["none","top","bottom"]),children:m,color:h.a.oneOf(["primary","secondary","primary-inverse","secondary-inverse","inherit"]),level:h.a.oneOf(["h1","h2","h3","h4","h5","reset"]),as:h.a.elementType,margin:_["c"].spacing,elementRef:h.a.func,ellipsis:h.a.bool},T.defaultProps={children:null,margin:void 0,elementRef:void 0,border:"none",color:"inherit",level:"h2"},q))||O)||O)||O)}}])

//# sourceMappingURL=157-c-caa0861257.js.map