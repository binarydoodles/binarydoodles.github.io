!function(){function e(){return!window._pa||!window._pa.siteId&&!window._pa.segments}var t=[];document.getElementsByClassName||(document.getElementsByClassName=function(e){var t,n,o,a=document,i=[];if(a.querySelectorAll)return a.querySelectorAll("."+e);if(a.evaluate)for(n=".//*[contains(concat(' ', @class, ' '), ' "+e+" ')]",o=(t=a.evaluate(n,a,null,0,null)).iterateNext();o;o=t.iterateNext())i.push(o);else for(t=a.getElementsByTagName("*"),n=new RegExp("(^|\\s)"+e+"(\\s|$)"),o=0;o<t.length;o++)n.test(t[o].className)&&i.push(t[o]);return i});var n=function(e){var t=!1;return function(){t||(t=!0,e())}},o=function(e){var t=null,o=n(e);"complete"===document.readyState&&setTimeout(o,1),document.addEventListener?(t=function(){document.removeEventListener("DOMContentLoaded",t,!1),o()},document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",o,!1)):document.attachEvent&&(t=function(){"complete"===document.readyState&&o()},document.attachEvent("onreadystatechange",t),window.attachEvent("onload",o))};try{!function(n){if(n&&!window.sharpspring_tracking_installed){window.sharpspring_tracking_installed=!0;window._ss=new function(n){function a(e,t,n){var o=document.createElement("script"),a=e+"?"+t;o.src=a,o.onload=o.onreadystatechange=function(){window.loadedBool||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(o.parentNode.removeChild(o),window.loadedBool=!0,"function"==typeof n&&n())},document.getElementsByTagName("head")[0].appendChild(o)}function i(e,t){a(X,e,t)}function s(e){var t=e.indexOf("/net");return-1===t?e:e.substr(0,t)}function r(e){if(e&&e.concat){var n=e.concat(),o=n.shift();try{U[o]?(t.push("Call "+o),U[o].apply(R,n),D.push(["CALL",e])):D.push(["ERROR",e])}catch(e){console&&"function"==typeof console.warn&&console.warn("tracking failed",o)}}}function c(e,t,n){if(null!==t&&void 0!==t||(n.expires=-1),"number"==typeof n.expires){var o=n.expires,a=(new Date).getTime();n.expires=new Date(a+o)}n.path=n.path||"/";var i=String(t);return document.cookie=[escape(e),"=",n.raw?i:escape(i),n.expires>0?"; expires="+n.expires.toUTCString():"",n.path?"; path="+n.path:"",n.domain?"; domain="+n.domain:"","https:"===window.location.protocol?"; SameSite=None; Secure":"; SameSite=Lax"].join(""),document.cookie}function d(e){if(e){var t=document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return t?unescape(t[2]):null}return document.cookie}function l(){H.se=d(q),H.tk=d(V);var e=null;return H.se?A||(e=d(F),ee.href=document.referrer,e&&e.length?ee.hostname!==j&&ee.hostname.split(".").slice(1).join(".")!==z||(H.rf=e):document.referrer.length&&ee.hostname===location.hostname||(H.se=(new Date).getTime())):H.se=(new Date).getTime(),A=H.se,c(q,A,{expires:$}),c(F,location.href,{expires:Q}),A}function u(e){l(),H.ts=(new Date).getTime().toString();var t,n=document.documentElement,o=(window.pageXOffset||n.scrollLeft)-(n.clientLeft||0),a=(window.pageYOffset||n.scrollTop)-(n.clientTop||0),i=[];H.pt=a,H.pl=o,H.ts=Math.round((new Date).getTime()/1e3),H.loc=window.location.href,W={};for(t in H)H.hasOwnProperty(t)&&(i.push(encodeURIComponent(t)+"="+encodeURIComponent(H[t])),W[t]=H[t]);for(t in e)e.hasOwnProperty(t)&&(i.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t])),W[t]=e[t]);return i.join("&")}function p(){return window.screen.width+"x"+window.screen.height}function h(){if(ne())for(l();M.length>0;)r(M.shift())}function m(){h()}function f(){var e=null;return document.hasOwnProperty("hidden")?(e="hidden",document.addEventListener("visibilitychange",m)):document.hasOwnProperty("mozHidden")?(e="mozHidden",document.addEventListener("mozvisibilitychange",m)):document.hasOwnProperty("webkitHidden")?(e="webkitHidden",document.addEventListener("webkitvisibilitychange",m)):document.hasOwnProperty("msHidden")&&(e="msHidden",document.addEventListener("msvisibilitychange",m)),e}function w(e){if(e&&e.display&&e.e164){var t,n,o=document.getElementsByClassName("ss-phone");for(n=0;n<o.length;n++)(t=o[n]).innerHTML=e.display,"A"===t.nodeName&&(t.href="tel: +"+e.e164)}}function g(e,t){window.documentIsReady?"function"==typeof e&&e.apply(window,t):P.push({f:e,a:t})}function b(e){return"function"==typeof e?function(){g(e,Array.prototype.slice.call(arguments))}:null}function _(e){var t=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]"),n=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(location.search);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))}function v(){var e=function(){if(!window.chatbotLoadWrapperBool){window.chatbotLoadWrapperBool=!0;var e=_("preview-bot"),t=u(e?{"preview-bot":e}:{});a(Y+"/getChatbot",t)}};o(e),setTimeout(e,100)}function y(e,t){e.className=e.className.replace(new RegExp(" *\\b"+t+"\\b","g"),"")}function C(e,t){e.className+=" "+t}function E(){var e=!!window.screen&&window.screen.width<600;if(e=e||window.innerWidth<600,window.ssChatbot.isMobile!==e){window.ssChatbot.isMobile=e;var t=document.getElementById("ssChatbot");if(!t)return;t.contentWindow.postMessage({isMobile:e},"*"),e?C(t,"_ss_cb_isMobile"):y(t,"_ss_cb_isMobile")}}function x(e){if("sendMeTheConfig"===e.data){var t=document.getElementById("ssChatbot");if(t){var n=d(V).replace("|","_");t.contentWindow.postMessage({chatbot:window.ssChatbot,trackingId:n,pagePath:window.location.pathname,leadFields:window.ssChatbotLeadFields,hasChatbotBrandingService:window.ssChatbotBranding,offline:window.location.search.indexOf("preview-bot")>=0},"*"),E()}else console.log("respondToConfigRequest failed - no element found with id=ssChatbot.")}}function T(e){var t=document.getElementById("ssChatbot");t&&(t.style=window.ssChatbot.orientation?"right: 0;":"left: 0;","chatbotCollapsed"===e.data&&(C(t,"_ss_cb_collapsed"),y(t,"_ss_cb_expanded"),y(t,"_ss_cb_welcomeExpanded")),"chatbotExpanded"===e.data&&(y(t,"_ss_cb_collapsed"),C(t,"_ss_cb_expanded"),y(t,"_ss_cb_welcomeExpanded")),"chatbotWelcomeExpanded"===e.data&&(y(t,"_ss_cb_collapsed"),y(t,"_ss_cb_expanded"),C(t,"_ss_cb_welcomeExpanded")))}function k(e){"chatbot-notification"===e.data.name&&(e.data.start?(clearInterval(J),J=setInterval(function(){document.title=Z===document.title?e.data.message:Z},K)):(clearInterval(J),document.title=Z))}function L(){if("visible"===document.visibilityState){var e=document.getElementById("ssChatbot");if(!e)return;e.contentWindow.postMessage({name:"visibility-change",visible:!0},"*")}}function I(e){if(window.ssChatbot||(window.ssChatbot=e.bot),e.lead){var t,n=[];for(t in e.lead)e.lead.hasOwnProperty(t)&&n.push({key:t,value:e.lead[t]});window.ssChatbotLeadFields=n}e.chatbotBranding&&(window.ssChatbotBranding=e.hasChatbotBrandingService),window.addEventListener&&(window.addEventListener("message",x,!1),window.addEventListener("message",T,!1),window.addEventListener("resize",E,!1),window.addEventListener("message",k,!1),window.addEventListener("visibilitychange",L,!1))}function S(){var e="en_US";if(navigator&&navigator.languages)for(var t={"de-DE":"de_DE",de:"de_DE","en-US":"en_US",en:"en_US","es-ES":"es_ES",es:"es_ES","it-IT":"it_IT",it:"it_IT","nl-NL":"nl_NL",nl:"nl_NL","pt-PT":"pt_PT",pt:"pt_PT"},n=0;n<navigator.languages.length;n++){var o=navigator.languages[n];if(t[o]){e=t[o];break}}return e}function N(){var e=0===window.location.search.indexOf("?")?window.location.search.slice(1):"",t=Y+G+"?"+e;t+="&requestedLanguage="+S();var n=document.createElement("iframe");n.src=t,n.id="ssChatbot";var o=document.createElement("style");o.innerHTML="iframe#ssChatbot {    border: none;    position: fixed;    bottom: 5px;    z-index: 9999;}iframe#ssChatbot._ss_cb_collapsed {    height: 72px;    width: 100px;}iframe#ssChatbot._ss_cb_expanded {    height: 100%;    max-height: 724px;    min-width: 414px;}iframe#ssChatbot._ss_cb_welcomeExpanded {    height: 72px;    min-width: 350px;}iframe#ssChatbot._ss_cb_isMobile {    padding: 0;    margin-top: 20px;}iframe#ssChatbot._ss_cb_expanded._ss_cb_isMobile {    bottom: 0;    height: 564px;    min-width: 314px;    width: 100%;    height: 99%;}iframe#ssChatbot._ss_cb_welcomeExpanded._ss_cb_isMobile {    bottom: 0;    height: 564px;    width: 100%;}",document.head.appendChild(o);var a=window.ssChatbot.orientation?"right: 0;":"left: 0;";n.style=a,document.body.appendChild(n)}var R=this,B=null,O="2.4.0",M=n.concat(),P=[],D=[],H={},U={},A=null,W={},j="app.sharpspring.com",z="marketingautomation.services",q="__ss",F="__ss_referrer",V="__ss_tk",$=864e5,Q=36e5,X="https://koi.sharpspring.com/net",Y="https://app.sharpspring.com",G="/publicChatbot",J=null,K=1e3,Z=document.title,ee=document.createElement("a"),te=null,ne=function(){return!te||!document[te]},oe=[],ae=null,ie=null;t.push("Variables Initialized"),this.push=function(e){ne()?r(e):M.push(e)},this.onReady=function(){var e;for(window.documentIsReady=!0;P.length>0;)"function"==typeof(e=P.shift()).f&&e.f.apply(window,e.a)},this.handleChatbotResponse=function(e){if(oe.push(e),e&&e.bot)try{I(e),N()}catch(e){D.push(["ERROR",e])}},this.handleResponse=function(n){if(oe.push(n),n){if("page"===n.type&&(ae=n,n.isChatbotCapable&&g(v,[])),n.hasOwnProperty("trackingID")){var o=H.tk||n.trackingID;if(c(V,o,{expires:7884e8}),o){var a,i,s,r,d,l,u,p,h=o.replace("|","_"),m=document.getElementsByClassName("ss-form");for(l=0;l<m.length;l++)for(a=m.item(l).getElementsByTagName("form"),u=0;u<a.length;u++){for(s=(i=a.item(u)).getElementsByTagName("input"),d=!1,p=0;p<s.length;p++)if("trackingid__sb"===(r=s.item(p)).name){d=!0;break}d||((r=document.createElement("input")).type="hidden",r.name="trackingid__sb",r.value=h,i.appendChild(r))}if(n&&n.pa&&e())try{window._pa={},W&&"addTransactionItem"===W.tp&&(window._pa.productId=W.itemCode||W.productName,window._pa.sharpSpringSessionSync=o);var f=document.createElement("script");f.type="text/javascript",f.async=!0,f.src=("https:"===document.location.protocol?"https://":"http://")+"//tag.perfectaudience.com/serve/"+n.pa+".js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(f,b)}catch(e){t.push("Caught exception for PA")}}try{var _=X.replace(".sharpspring.com/net",".marketingautomation.services/net");if(_!==X){var y=new Image;y.width=y.height=1,y.style.position="absolute",y.style.visibility="hidden",document.body.appendChild(y),y.src=_+"/f/?tk="+o}}catch(e){t.push("Caught exception")}}n.hasOwnProperty("phoneNumber")&&w(n.phoneNumber)}if("function"==typeof ie)try{ie(n)}catch(e){t.push("Caught exception")}},this.getVersion=function(){return O},this.getHistory=function(){return D},this.getResponseHistory=function(){return oe},this.getLastResponse=function(){return ae},U._setDomain=function(e){X=e,Y=s(e)},U._setAccount=function(e){B=e,H.ac=B},U._setResponseCallback=function(e){!1!==e&&(R.runCallback=!0),ie=b(e)},U._trackPageView=function(e){var t={tp:"page",ti:document.title};location.hash.length&&(t.hs=location.hash);var n=u(t),a=!1,s=function(){if(!a){a=!0;var t;void 0===R.runCallback&&void 0===e?X=X.replace("/net","/koi"):e&&(t=b(e)),i(n,t)}};o(s),setTimeout(s,100)},U._setTransaction=function(e,t){e.tp="setTransaction",i(u(e),b(t))},U._addTransactionItem=function(e,t){e.tp="addTransactionItem",i(u(e),b(t))},U._completeTransaction=function(e,t){e.tp="completeTransaction",i(u(e),b(t))},U._trackCampaign=function(e,t){c("__ss_cp",e,{expires:7776e6}),i(u({tp:"tags",cp:e}),b(t))},U._trackEvent=function(e,t){if("object"==typeof e){var n={tp:"event",ev:e.event||null,tg:e.tags||null,lb:e.label||"",vl:e.value||"",et:e.eventTrigger||"click",ta:e.triggerAutomation||1,uri:e.uri||""};n.ev&&n.tg&&i(u(n),b(t))}},H.rf=document.referrer,H.hn=location.hostname,H.lg=navigator.userLanguage||navigator.language,H.sr=p(),H.cd=screen.colorDepth,H.vr=O,te=f(),t.push("Running queue"),h(),t.push("Queue finished")}(n),t.push("Installed"),o(function(){t.push("Page ready"),window._ss.onReady()})}}(window._ss)}catch(e){t.push("Caught exception")}}();