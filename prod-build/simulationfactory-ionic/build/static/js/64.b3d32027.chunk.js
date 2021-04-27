/*! For license information please see 64.b3d32027.chunk.js.LICENSE.txt */
(this["webpackJsonpsimulationfactory-ionic"]=this["webpackJsonpsimulationfactory-ionic"]||[]).push([[64],{194:function(t,e,r){"use strict";r.r(e),r.d(e,"scopeCss",(function(){return y}));var n=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),s=0;for(e=0;e<r;e++)for(var o=arguments[e],c=0,i=o.length;c<i;c++,s++)n[s]=o[c];return n},s="-shadowcsshost",o="-shadowcssslotted",c="-shadowcsscontext",i=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",a=new RegExp("(-shadowcsshost"+i,"gim"),u=new RegExp("(-shadowcsscontext"+i,"gim"),l=new RegExp("(-shadowcssslotted"+i,"gim"),f="-shadowcsshost-no-combinator",h=/-shadowcsshost-no-combinator([^\s]*)/,p=[/::shadow/g,/::content/g],g=/-shadowcsshost/gim,d=/:host/gim,m=/::slotted/gim,v=/:host-context/gim,x=/\/\*\s*[\s\S]*?\*\//g,w=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,_=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,b=/([{}])/g,S="%BLOCK%",O=function(t,e){var r=W(t),n=0;return r.escapedString.replace(_,(function(){for(var t=[],s=0;s<arguments.length;s++)t[s]=arguments[s];var o=t[2],c="",i=t[4],a="";i&&i.startsWith("{%BLOCK%")&&(c=r.blocks[n++],i=i.substring(S.length+1),a="{");var u={selector:o,content:c},l=e(u);return""+t[1]+l.selector+t[3]+a+l.content+i}))},W=function(t){for(var e=t.split(b),r=[],n=[],s=0,o=[],c=0;c<e.length;c++){var i=e[c];"}"===i&&s--,s>0?o.push(i):(o.length>0&&(n.push(o.join("")),r.push(S),o=[]),r.push(i)),"{"===i&&s++}return o.length>0&&(n.push(o.join("")),r.push(S)),{escapedString:r.join(""),blocks:n}},j=function(t,e,r){return t.replace(e,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var n=t[2].split(","),s=[],o=0;o<n.length;o++){var c=n[o].trim();if(!c)break;s.push(r(f,c,t[3]))}return s.join(",")}return f+t[3]}))},k=function(t,e,r){return t+e.replace(s,"")+r},E=function(t,e,r){return e.indexOf(s)>-1?k(t,e,r):t+e+r+", "+e+" "+t+r},R=function(t,e){return!function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(e).test(t)},C=function(t,e,r){for(var n,s="."+(e=e.replace(/\[is=([^\]]*)\]/g,(function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return e[0]}))),o=function(t){var n=t.trim();if(!n)return"";if(t.indexOf(f)>-1)n=function(t,e,r){if(g.lastIndex=0,g.test(t)){var n="."+r;return t.replace(h,(function(t,e){return e.replace(/([^:]*)(:*)(.*)/,(function(t,e,r,s){return e+n+r+s}))})).replace(g,n+" ")}return e+" "+t}(t,e,r);else{var o=t.replace(g,"");if(o.length>0){var c=o.match(/([^:]*)(:*)(.*)/);c&&(n=c[1]+s+c[2]+c[3])}}return n},c=function(t){var e=[],r=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(function(t,n){var s="__ph-"+r+"__";return e.push(n),r++,s}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,n,s){var o="__ph-"+r+"__";return e.push(s),r++,n+o})),placeholders:e}}(t),i="",a=0,u=/( |>|\+|~(?!=))\s*/g,l=!((t=c.content).indexOf(f)>-1);null!==(n=u.exec(t));){var p=n[1],d=t.slice(a,n.index).trim();i+=((l=l||d.indexOf(f)>-1)?o(d):d)+" "+p+" ",a=u.lastIndex}var m,v=t.substring(a);return i+=(l=l||v.indexOf(f)>-1)?o(v):v,m=c.placeholders,i.replace(/__ph-(\d+)__/g,(function(t,e){return m[+e]}))},L=function t(e,r,n,s,o){return O(e,(function(e){var o=e.selector,c=e.content;return"@"!==e.selector[0]?o=function(t,e,r,n){return t.split(",").map((function(t){return n&&t.indexOf("."+n)>-1?t.trim():R(t,e)?C(t,e,r).trim():t.trim()})).join(", ")}(e.selector,r,n,s):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(c=t(e.content,r,n,s)),{selector:o.replace(/\s{2,}/g," ").trim(),content:c}}))},T=function(t,e,r,n,i){var h=function(t,e){var r="."+e+" > ",n=[];return t=t.replace(l,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var s=t[2].trim(),o=t[3],c=r+s+o,i="",a=t[4]-1;a>=0;a--){var u=t[5][a];if("}"===u||","===u)break;i=u+i}var l=i+c,h=""+i.trimRight()+c.trim();if(l.trim()!==h.trim()){var p=h+", "+l;n.push({orgSelector:l,updatedSelector:p})}return c}return f+t[3]})),{selectors:n,cssText:t}}(t=function(t){return j(t,u,E)}(t=function(t){return j(t,a,k)}(t=t.replace(v,c).replace(d,s).replace(m,o))),n);return t=function(t){return p.reduce((function(t,e){return t.replace(e," ")}),t)}(t=h.cssText),e&&(t=L(t,e,r,n)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,"."+r)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:h.selectors}},y=function(t,e,r){var s=e+"-h",o=e+"-s",c=t.match(w)||[];t=function(t){return t.replace(x,"")}(t);var i=[];if(r){var a=function(t){var e="/*!@___"+i.length+"___*/",r="/*!@"+t.selector+"*/";return i.push({placeholder:e,comment:r}),t.selector=e+t.selector,t};t=O(t,(function(t){return"@"!==t.selector[0]?a(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=O(t.content,a),t):t}))}var u=T(t,e,s,o);return t=n([u.cssText],c).join("\n"),r&&i.forEach((function(e){var r=e.placeholder,n=e.comment;t=t.replace(r,n)})),u.slottedSelectors.forEach((function(e){t=t.replace(e.orgSelector,e.updatedSelector)})),t}}}]);
//# sourceMappingURL=64.b3d32027.chunk.js.map