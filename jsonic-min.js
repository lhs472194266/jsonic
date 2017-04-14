/* Copyright (c) 2013-2015 Richard Rodger, MIT License, https://github.com/rjrodger/jsonic */
"use strict";(function(){function t(r,e,n){if(n++,null==r)return"null";var i=Object.prototype.toString.call(r).charAt(8);if("F"===i&&!e.showfunc)return null;if(e.custom){if(r.hasOwnProperty("toString"))return r.toString();if(r.hasOwnProperty("inspect"))return r.inspect()}var u,o,c,a=0;if("N"===i)return isNaN(r)?"null":r.toString();if("O"===i){if(u=[],n<=e.depth){o=0;for(a in r){if(o>=e.maxitems)break;o++;var s=!0;for(c=0;c<e.exclude.length&&s;c++)s=!~a.indexOf(e.exclude[c]);s=s&&!e.omit[a];var l=t(r[a],e,n);if(null!=l&&s){var f=a.match(/^[a-zA-Z0-9_$]+$/)?a:JSON.stringify(a);u.push(f+":"+l)}}}return"{"+u.join(",")+"}"}if("A"===i){if(u=[],n<=e.depth)for(;a<r.length&&a<e.maxitems;a++){var l=t(r[a],e,n);null!=l&&u.push(l)}return"["+u.join(",")+"]"}var p=r.toString();return(~" \"'\r\n	,}]".indexOf(p[0])||!~p.match(/,}]/)||~" \r\n	".indexOf(p[p.length-1]))&&(p="'"+p.replace(/'/g,"\\'")+"'"),p}var r=this,e=r.jsonic,n=r.jsonic=function(t){return"[object String]"!==Object.prototype.toString.call(t)?Object.prototype.toString.call(t).match(/\[object (Object|Array)\]/)?t:""+t:(t=t.trim(),"{"!=t[0]&&"["!=t[0]&&(t="{"+t+"}"),i.parse(t))};n.noConflict=function(){return r.jsonic=e,n};var i=function(){function t(t,r){function e(){this.constructor=t}e.prototype=r.prototype,t.prototype=new e}function r(t,r,e,n,i,u){this.message=t,this.expected=r,this.found=e,this.offset=n,this.line=i,this.column=u,this.name="SyntaxError"}function e(t){function e(r){function e(r,e,n){var i,u;for(i=e;n>i;i++)u=t.charAt(i),"\n"===u?(r.seenCR||r.line++,r.column=1,r.seenCR=!1):"\r"===u||"\u2028"===u||"\u2029"===u?(r.line++,r.column=1,r.seenCR=!0):(r.column++,r.seenCR=!1)}return Ge!==r&&(Ge>r&&(Ge=0,He={line:1,column:1,seenCR:!1}),e(He,Ge,r),Ge=r),He}function n(t){Ke>Ue||(Ue>Ke&&(Ke=Ue,Le=[]),Le.push(t))}function i(n,i,u){function o(t){var r=1;for(t.sort(function(t,r){return t.description<r.description?-1:t.description>r.description?1:0});r<t.length;)t[r-1]===t[r]?t.splice(r,1):r++}function c(t,r){function e(t){function r(t){return t.charCodeAt(0).toString(16).toUpperCase()}return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(t){return"\\x0"+r(t)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(t){return"\\x"+r(t)}).replace(/[\u0180-\u0FFF]/g,function(t){return"\\u0"+r(t)}).replace(/[\u1080-\uFFFF]/g,function(t){return"\\u"+r(t)})}var n,i,u,o=new Array(t.length);for(u=0;u<t.length;u++)o[u]=t[u].description;return n=t.length>1?o.slice(0,-1).join(", ")+" or "+o[t.length-1]:o[0],i=r?'"'+e(r)+'"':"end of input","Expected "+n+" but "+i+" found."}var a=e(u),s=u<t.length?t.charAt(u):null;return null!==i&&o(i),new r(null!==n?n:c(i,s),i,s,u,a.line,a.column)}function u(){var t,r,e;return t=Ue,r=$(),r!==k?(e=o(),e!==k?(De=t,r=B(e),t=r):(Ue=t,t=P)):(Ue=t,t=P),t===k&&(t=Ue,r=$(),r!==k?(e=s(),e!==k?(De=t,r=I(e),t=r):(Ue=t,t=P)):(Ue=t,t=P)),t}function o(){var r,e,i,u,o,a;return r=Ue,123===t.charCodeAt(Ue)?(e=U,Ue++):(e=k,0===Me&&n(D)),e!==k?(i=$(),i!==k?(125===t.charCodeAt(Ue)?(u=G,Ue++):(u=k,0===Me&&n(H)),u!==k?(o=$(),o!==k?(De=r,e=K(),r=e):(Ue=r,r=P)):(Ue=r,r=P)):(Ue=r,r=P)):(Ue=r,r=P),r===k&&(r=Ue,123===t.charCodeAt(Ue)?(e=U,Ue++):(e=k,0===Me&&n(D)),e!==k?(i=$(),i!==k?(u=c(),u!==k?(125===t.charCodeAt(Ue)?(o=G,Ue++):(o=k,0===Me&&n(H)),o!==k?(a=$(),a!==k?(De=r,e=L(u),r=e):(Ue=r,r=P)):(Ue=r,r=P)):(Ue=r,r=P)):(Ue=r,r=P)):(Ue=r,r=P)),r}function c(){var r,e,i,u,o,c,s,l;if(r=Ue,44===t.charCodeAt(Ue)?(e=Q,Ue++):(e=k,0===Me&&n(T)),e===k&&(e=M),e!==k)if(i=a(),i===k&&(i=M),i!==k){for(u=[],o=Ue,44===t.charCodeAt(Ue)?(c=Q,Ue++):(c=k,0===Me&&n(T)),c!==k?(s=$(),s!==k?(l=a(),l!==k?(c=[c,s,l],o=c):(Ue=o,o=P)):(Ue=o,o=P)):(Ue=o,o=P);o!==k;)u.push(o),o=Ue,44===t.charCodeAt(Ue)?(c=Q,Ue++):(c=k,0===Me&&n(T)),c!==k?(s=$(),s!==k?(l=a(),l!==k?(c=[c,s,l],o=c):(Ue=o,o=P)):(Ue=o,o=P)):(Ue=o,o=P);u!==k?(44===t.charCodeAt(Ue)?(o=Q,Ue++):(o=k,0===Me&&n(T)),o===k&&(o=M),o!==k?(c=$(),c!==k?(De=r,e=V(i,u),r=e):(Ue=r,r=P)):(Ue=r,r=P)):(Ue=r,r=P)}else Ue=r,r=P;else Ue=r,r=P;return r}function a(){var r,e,i,u,o;return r=Ue,e=g(),e!==k?(58===t.charCodeAt(Ue)?(i=W,Ue++):(i=k,0===Me&&n(X)),i!==k?(u=$(),u!==k?(o=f(),o!==k?(De=r,e=Y(e,o),r=e):(Ue=r,r=P)):(Ue=r,r=P)):(Ue=r,r=P)):(Ue=r,r=P),r}function s(){var r,e,i,u,o,c;return r=Ue,91===t.charCodeAt(Ue)?(e=tr,Ue++):(e=k,0===Me&&n(rr)),e!==k?(i=$(),i!==k?(93===t.charCodeAt(Ue)?(u=er,Ue++):(u=k,0===Me&&n(nr)),u!==k?(o=$(),o!==k?(De=r,e=ir(),r=e):(Ue=r,r=P)):(Ue=r,r=P)):(Ue=r,r=P)):(Ue=r,r=P),r===k&&(r=Ue,91===t.charCodeAt(Ue)?(e=tr,Ue++):(e=k,0===Me&&n(rr)),e!==k?(i=$(),i!==k?(u=l(),u!==k?(93===t.charCodeAt(Ue)?(o=er,Ue++):(o=k,0===Me&&n(nr)),o!==k?(c=$(),c!==k?(De=r,e=ur(u),r=e):(Ue=r,r=P)):(Ue=r,r=P)):(Ue=r,r=P)):(Ue=r,r=P)):(Ue=r,r=P)),r}function l(){var r,e,i,u,o,c,a,s;if(r=Ue,44===t.charCodeAt(Ue)?(e=Q,Ue++):(e=k,0===Me&&n(T)),e===k&&(e=M),e!==k)if(i=f(),i===k&&(i=M),i!==k){for(u=[],o=Ue,44===t.charCodeAt(Ue)?(c=Q,Ue++):(c=k,0===Me&&n(T)),c!==k?(a=$(),a!==k?(s=f(),s!==k?(c=[c,a,s],o=c):(Ue=o,o=P)):(Ue=o,o=P)):(Ue=o,o=P);o!==k;)u.push(o),o=Ue,44===t.charCodeAt(Ue)?(c=Q,Ue++):(c=k,0===Me&&n(T)),c!==k?(a=$(),a!==k?(s=f(),s!==k?(c=[c,a,s],o=c):(Ue=o,o=P)):(Ue=o,o=P)):(Ue=o,o=P);u!==k?(44===t.charCodeAt(Ue)?(o=Q,Ue++):(o=k,0===Me&&n(T)),o===k&&(o=M),o!==k?(c=$(),c!==k?(De=r,e=or(i,u),r=e):(Ue=r,r=P)):(Ue=r,r=P)):(Ue=r,r=P)}else Ue=r,r=P;else Ue=r,r=P;return r}function f(){var r,e,i;return r=p(),r===k&&(r=h(),r===k&&(r=o(),r===k&&(r=s(),r===k&&(r=Ue,t.substr(Ue,4)===cr?(e=cr,Ue+=4):(e=k,0===Me&&n(ar)),e!==k?(i=$(),i!==k?(De=r,e=sr(),r=e):(Ue=r,r=P)):(Ue=r,r=P),r===k&&(r=Ue,t.substr(Ue,5)===lr?(e=lr,Ue+=5):(e=k,0===Me&&n(fr)),e!==k?(i=$(),i!==k?(De=r,e=pr(),r=e):(Ue=r,r=P)):(Ue=r,r=P),r===k&&(r=Ue,t.substr(Ue,4)===hr?(e=hr,Ue+=4):(e=k,0===Me&&n(dr)),e!==k?(i=$(),i!==k?(De=r,e=vr(),r=e):(Ue=r,r=P)):(Ue=r,r=P),r===k&&(r=C(),r===k&&(r=Ue,e=m(),e!==k&&(De=r,e=Ar(e)),r=e)))))))),r}function p(){var r,e,i,u,o;return Me++,r=Ue,34===t.charCodeAt(Ue)?(e=gr,Ue++):(e=k,0===Me&&n(mr)),e!==k?(34===t.charCodeAt(Ue)?(i=gr,Ue++):(i=k,0===Me&&n(mr)),i!==k?(u=$(),u!==k?(De=r,e=xr(),r=e):(Ue=r,r=P)):(Ue=r,r=P)):(Ue=r,r=P),r===k&&(r=Ue,34===t.charCodeAt(Ue)?(e=gr,Ue++):(e=k,0===Me&&n(mr)),e!==k?(i=d(),i!==k?(34===t.charCodeAt(Ue)?(u=gr,Ue++):(u=k,0===Me&&n(mr)),u!==k?(o=$(),o!==k?(De=r,e=Cr(i),r=e):(Ue=r,r=P)):(Ue=r,r=P)):(Ue=r,r=P)):(Ue=r,r=P)),Me--,r===k&&(e=k,0===Me&&n(yr)),r}function h(){var r,e,i,u,o;return Me++,r=Ue,39===t.charCodeAt(Ue)?(e=Fr,Ue++):(e=k,0===Me&&n(jr)),e!==k?(39===t.charCodeAt(Ue)?(i=Fr,Ue++):(i=k,0===Me&&n(jr)),i!==k?(u=$(),u!==k?(De=r,e=xr(),r=e):(Ue=r,r=P)):(Ue=r,r=P)):(Ue=r,r=P),r===k&&(r=Ue,39===t.charCodeAt(Ue)?(e=Fr,Ue++):(e=k,0===Me&&n(jr)),e!==k?(i=A(),i!==k?(39===t.charCodeAt(Ue)?(u=Fr,Ue++):(u=k,0===Me&&n(jr)),u!==k?(o=$(),o!==k?(De=r,e=Cr(i),r=e):(Ue=r,r=P)):(Ue=r,r=P)):(Ue=r,r=P)):(Ue=r,r=P)),Me--,r===k&&(e=k,0===Me&&n(br)),r}function d(){var t,r,e;if(t=Ue,r=[],e=v(),e!==k)for(;e!==k;)r.push(e),e=v();else r=P;return r!==k&&(De=t,r=wr(r)),t=r}function v(){var r,e,i,u,o,c;return Or.test(t.charAt(Ue))?(r=t.charAt(Ue),Ue++):(r=k,0===Me&&n(Sr)),r===k&&(r=Ue,t.substr(Ue,2)===Rr?(e=Rr,Ue+=2):(e=k,0===Me&&n(Er)),e!==k&&(De=r,e=$r()),r=e,r===k&&(r=Ue,t.substr(Ue,2)===Nr?(e=Nr,Ue+=2):(e=k,0===Me&&n(zr)),e!==k&&(De=r,e=Zr()),r=e,r===k&&(r=Ue,t.substr(Ue,2)===_r?(e=_r,Ue+=2):(e=k,0===Me&&n(kr)),e!==k&&(De=r,e=qr()),r=e,r===k&&(r=Ue,t.substr(Ue,2)===Jr?(e=Jr,Ue+=2):(e=k,0===Me&&n(Pr)),e!==k&&(De=r,e=Br()),r=e,r===k&&(r=Ue,t.substr(Ue,2)===Ir?(e=Ir,Ue+=2):(e=k,0===Me&&n(Ur)),e!==k&&(De=r,e=Dr()),r=e,r===k&&(r=Ue,t.substr(Ue,2)===Gr?(e=Gr,Ue+=2):(e=k,0===Me&&n(Hr)),e!==k&&(De=r,e=Kr()),r=e,r===k&&(r=Ue,t.substr(Ue,2)===Lr?(e=Lr,Ue+=2):(e=k,0===Me&&n(Mr)),e!==k&&(De=r,e=Qr()),r=e,r===k&&(r=Ue,t.substr(Ue,2)===Tr?(e=Tr,Ue+=2):(e=k,0===Me&&n(Vr)),e!==k&&(De=r,e=Wr()),r=e,r===k&&(r=Ue,t.substr(Ue,2)===Xr?(e=Xr,Ue+=2):(e=k,0===Me&&n(Yr)),e!==k?(i=E(),i!==k?(u=E(),u!==k?(o=E(),o!==k?(c=E(),c!==k?(De=r,e=te(i,u,o,c),r=e):(Ue=r,r=P)):(Ue=r,r=P)):(Ue=r,r=P)):(Ue=r,r=P)):(Ue=r,r=P)))))))))),r}function A(){var t,r,e;if(t=Ue,r=[],e=y(),e!==k)for(;e!==k;)r.push(e),e=y();else r=P;return r!==k&&(De=t,r=wr(r)),t=r}function y(){var r,e,i,u,o,c;return re.test(t.charAt(Ue))?(r=t.charAt(Ue),Ue++):(r=k,0===Me&&n(ee)),r===k&&(r=Ue,t.substr(Ue,2)===ne?(e=ne,Ue+=2):(e=k,0===Me&&n(ie)),e!==k&&(De=r,e=ue()),r=e,r===k&&(r=Ue,t.substr(Ue,2)===Nr?(e=Nr,Ue+=2):(e=k,0===Me&&n(zr)),e!==k&&(De=r,e=Zr()),r=e,r===k&&(r=Ue,t.substr(Ue,2)===_r?(e=_r,Ue+=2):(e=k,0===Me&&n(kr)),e!==k&&(De=r,e=qr()),r=e,r===k&&(r=Ue,t.substr(Ue,2)===Jr?(e=Jr,Ue+=2):(e=k,0===Me&&n(Pr)),e!==k&&(De=r,e=Br()),r=e,r===k&&(r=Ue,t.substr(Ue,2)===Ir?(e=Ir,Ue+=2):(e=k,0===Me&&n(Ur)),e!==k&&(De=r,e=Dr()),r=e,r===k&&(r=Ue,t.substr(Ue,2)===Gr?(e=Gr,Ue+=2):(e=k,0===Me&&n(Hr)),e!==k&&(De=r,e=Kr()),r=e,r===k&&(r=Ue,t.substr(Ue,2)===Lr?(e=Lr,Ue+=2):(e=k,0===Me&&n(Mr)),e!==k&&(De=r,e=Qr()),r=e,r===k&&(r=Ue,t.substr(Ue,2)===Tr?(e=Tr,Ue+=2):(e=k,0===Me&&n(Vr)),e!==k&&(De=r,e=Wr()),r=e,r===k&&(r=Ue,t.substr(Ue,2)===Xr?(e=Xr,Ue+=2):(e=k,0===Me&&n(Yr)),e!==k?(i=E(),i!==k?(u=E(),u!==k?(o=E(),o!==k?(c=E(),c!==k?(De=r,e=te(i,u,o,c),r=e):(Ue=r,r=P)):(Ue=r,r=P)):(Ue=r,r=P)):(Ue=r,r=P)):(Ue=r,r=P)))))))))),r}function g(){var r,e,i;if(Me++,r=p(),r===k){if(r=Ue,e=[],ce.test(t.charAt(Ue))?(i=t.charAt(Ue),Ue++):(i=k,0===Me&&n(ae)),i!==k)for(;i!==k;)e.push(i),ce.test(t.charAt(Ue))?(i=t.charAt(Ue),Ue++):(i=k,0===Me&&n(ae));else e=P;e!==k&&(De=r,e=se(e)),r=e}return Me--,r===k&&(e=k,0===Me&&n(oe)),r}function m(){var t,r;if(t=[],r=x(),r!==k)for(;r!==k;)t.push(r),r=x();else t=P;return t}function x(){var r;return le.test(t.charAt(Ue))?(r=t.charAt(Ue),Ue++):(r=k,0===Me&&n(fe)),r}function C(){var t,r,e,i,u,o,c;if(Me++,t=Ue,r=b(),r!==k)if(e=F(),e!==k)if(i=j(),i!==k)if(u=$(),u!==k){for(o=[],c=x();c!==k;)o.push(c),c=x();o!==k?(De=t,r=he(r,e,i,o),t=r):(Ue=t,t=P)}else Ue=t,t=P;else Ue=t,t=P;else Ue=t,t=P;else Ue=t,t=P;if(t===k){if(t=Ue,r=b(),r!==k)if(e=F(),e!==k)if(i=$(),i!==k){for(u=[],o=x();o!==k;)u.push(o),o=x();u!==k?(De=t,r=de(r,e,u),t=r):(Ue=t,t=P)}else Ue=t,t=P;else Ue=t,t=P;else Ue=t,t=P;if(t===k){if(t=Ue,r=b(),r!==k)if(e=j(),e!==k)if(i=$(),i!==k){for(u=[],o=x();o!==k;)u.push(o),o=x();u!==k?(De=t,r=ve(r,e,u),t=r):(Ue=t,t=P)}else Ue=t,t=P;else Ue=t,t=P;else Ue=t,t=P;if(t===k)if(t=Ue,r=b(),r!==k)if(e=$(),e!==k){for(i=[],u=x();u!==k;)i.push(u),u=x();i!==k?(De=t,r=Ae(r,i),t=r):(Ue=t,t=P)}else Ue=t,t=P;else Ue=t,t=P}}return Me--,t===k&&(r=k,0===Me&&n(pe)),t}function b(){var r,e,i,u;return r=Ue,e=R(),e!==k?(i=w(),i!==k?(De=r,e=ye(e,i),r=e):(Ue=r,r=P)):(Ue=r,r=P),r===k&&(r=S(),r===k&&(r=Ue,45===t.charCodeAt(Ue)?(e=ge,Ue++):(e=k,0===Me&&n(me)),e!==k?(i=R(),i!==k?(u=w(),u!==k?(De=r,e=xe(i,u),r=e):(Ue=r,r=P)):(Ue=r,r=P)):(Ue=r,r=P),r===k&&(r=Ue,45===t.charCodeAt(Ue)?(e=ge,Ue++):(e=k,0===Me&&n(me)),e!==k?(i=S(),i!==k?(De=r,e=Ce(i),r=e):(Ue=r,r=P)):(Ue=r,r=P)))),r}function F(){var r,e,i;return r=Ue,46===t.charCodeAt(Ue)?(e=be,Ue++):(e=k,0===Me&&n(Fe)),e!==k?(i=w(),i!==k?(De=r,e=je(i),r=e):(Ue=r,r=P)):(Ue=r,r=P),r}function j(){var t,r,e;return t=Ue,r=O(),r!==k?(e=w(),e!==k?(De=t,r=we(r,e),t=r):(Ue=t,t=P)):(Ue=t,t=P),t}function w(){var t,r,e;if(t=Ue,r=[],e=S(),e!==k)for(;e!==k;)r.push(e),e=S();else r=P;return r!==k&&(De=t,r=Oe(r)),t=r}function O(){var r,e,i;return r=Ue,Se.test(t.charAt(Ue))?(e=t.charAt(Ue),Ue++):(e=k,0===Me&&n(Re)),e!==k?(Ee.test(t.charAt(Ue))?(i=t.charAt(Ue),Ue++):(i=k,0===Me&&n($e)),i===k&&(i=M),i!==k?(De=r,e=Ne(e,i),r=e):(Ue=r,r=P)):(Ue=r,r=P),r}function S(){var r;return ze.test(t.charAt(Ue))?(r=t.charAt(Ue),Ue++):(r=k,0===Me&&n(Ze)),r}function R(){var r;return _e.test(t.charAt(Ue))?(r=t.charAt(Ue),Ue++):(r=k,0===Me&&n(ke)),r}function E(){var r;return qe.test(t.charAt(Ue))?(r=t.charAt(Ue),Ue++):(r=k,0===Me&&n(Je)),r}function $(){var t,r;for(Me++,t=[],r=N();r!==k;)t.push(r),r=N();return Me--,t===k&&(r=k,0===Me&&n(Pe)),t}function N(){var r;return Be.test(t.charAt(Ue))?(r=t.charAt(Ue),Ue++):(r=k,0===Me&&n(Ie)),r}function z(t){return t===Qe?null:t}var Z,_=arguments.length>1?arguments[1]:{},k={},q={start:u},J=u,P=k,B=function(t){return t},I=function(t){return t},U="{",D={type:"literal",value:"{",description:'"{"'},G="}",H={type:"literal",value:"}",description:'"}"'},K=function(){return{}},L=function(t){return t},M=null,Q=",",T={type:"literal",value:",",description:'","'},V=function(t,r){var e={};t&&(e[t[0]]=z(t[1]));for(var n=0;n<r.length;n++)e[r[n][2][0]]=z(r[n][2][1]);return e},W=":",X={type:"literal",value:":",description:'":"'},Y=function(t,r){return[t,r]},tr="[",rr={type:"literal",value:"[",description:'"["'},er="]",nr={type:"literal",value:"]",description:'"]"'},ir=function(){return[]},ur=function(t){return t},or=function(t,r){var e=[];t&&e.push(z(t));for(var n=0;n<r.length;n++)e.push(z(r[n][2]));return e},cr="true",ar={type:"literal",value:"true",description:'"true"'},sr=function(){return!0},lr="false",fr={type:"literal",value:"false",description:'"false"'},pr=function(){return!1},hr="null",dr={type:"literal",value:"null",description:'"null"'},vr=function(){return Qe},Ar=function(t){return t.join("").trim()},yr={type:"other",description:"double-quote string"},gr='"',mr={type:"literal",value:'"',description:'"\\""'},xr=function(){return""},Cr=function(t){return t},br={type:"other",description:"single-quote string"},Fr="'",jr={type:"literal",value:"'",description:'"\'"'},wr=function(t){return t.join("")},Or=/^[^"\\\0-\x1F]/,Sr={type:"class",value:'[^"\\\\\\0-\\x1F]',description:'[^"\\\\\\0-\\x1F]'},Rr='\\"',Er={type:"literal",value:'\\"',description:'"\\\\\\""'},$r=function(){return'"'},Nr="\\\\",zr={type:"literal",value:"\\\\",description:'"\\\\\\\\"'},Zr=function(){return"\\"},_r="\\/",kr={type:"literal",value:"\\/",description:'"\\\\/"'},qr=function(){return"/"},Jr="\\b",Pr={type:"literal",value:"\\b",description:'"\\\\b"'},Br=function(){return"\b"},Ir="\\f",Ur={type:"literal",value:"\\f",description:'"\\\\f"'},Dr=function(){return"\f"},Gr="\\n",Hr={type:"literal",value:"\\n",description:'"\\\\n"'},Kr=function(){return"\n"},Lr="\\r",Mr={type:"literal",value:"\\r",description:'"\\\\r"'},Qr=function(){return"\r"},Tr="\\t",Vr={type:"literal",value:"\\t",description:'"\\\\t"'},Wr=function(){return"	"},Xr="\\u",Yr={type:"literal",value:"\\u",description:'"\\\\u"'},te=function(t,r,e,n){return String.fromCharCode(parseInt("0x"+t+r+e+n))},re=/^[^'\\\0-\x1F]/,ee={type:"class",value:"[^'\\\\\\0-\\x1F]",description:"[^'\\\\\\0-\\x1F]"},ne="\\'",ie={type:"literal",value:"\\'",description:'"\\\\\'"'},ue=function(){return"'"},oe={type:"other",description:"key"},ce=/^[a-zA-Z0-9_$\-]/,ae={type:"class",value:"[a-zA-Z0-9_$\\-]",description:"[a-zA-Z0-9_$\\-]"},se=function(t){return t.join("")},le=/^[^,}\]]/,fe={type:"class",value:"[^,}\\]]",description:"[^,}\\]]"},pe={type:"other",description:"number"},he=function(t,r,e,n){return 0===n.length?parseFloat(t+r+e):(t+r+e+n.join("")).trim()},de=function(t,r,e){return 0===e.length?parseFloat(t+r):(t+r+e.join("")).trim()},ve=function(t,r,e){return 0===e.length?parseFloat(t+r):(t+r+e.join("")).trim()},Ae=function(t,r){return 0===r.length?parseFloat(t):(t+r.join("")).trim()},ye=function(t,r){return t+r},ge="-",me={type:"literal",value:"-",description:'"-"'},xe=function(t,r){return"-"+t+r},Ce=function(t){return"-"+t},be=".",Fe={type:"literal",value:".",description:'"."'},je=function(t){return"."+t},we=function(t,r){return t+r},Oe=function(t){return t.join("")},Se=/^[eE]/,Re={type:"class",value:"[eE]",description:"[eE]"},Ee=/^[+\-]/,$e={type:"class",value:"[+\\-]",description:"[+\\-]"},Ne=function(t,r){return t+(r?r:"")},ze=/^[0-9]/,Ze={type:"class",value:"[0-9]",description:"[0-9]"},_e=/^[1-9]/,ke={type:"class",value:"[1-9]",description:"[1-9]"},qe=/^[0-9a-fA-F]/,Je={type:"class",value:"[0-9a-fA-F]",description:"[0-9a-fA-F]"},Pe={type:"other",description:"whitespace"},Be=/^[ \t\n\r]/,Ie={type:"class",value:"[ \\t\\n\\r]",description:"[ \\t\\n\\r]"},Ue=0,De=0,Ge=0,He={line:1,column:1,seenCR:!1},Ke=0,Le=[],Me=0;if("startRule"in _){if(!(_.startRule in q))throw new Error("Can't start parsing from rule \""+_.startRule+'".');J=q[_.startRule]}var Qe=new Object;if(Z=J(),Z!==k&&Ue===t.length)return Z;throw Z!==k&&Ue<t.length&&n({type:"end",description:"end of input"}),i(null,Le,Ke)}return t(r,Error),{SyntaxError:r,parse:e}}();n.stringify=function(r,e){try{var e=e||{},n={};n.showfunc=e.showfunc||e.f||!1,n.custom=e.custom||e.c||!1,n.depth=e.depth||e.d||3,n.maxitems=e.maxitems||e.mi||11,n.maxchars=e.maxchars||e.mc||111,n.exclude=e.exclude||e.x||["$"];var i=e.omit||e.o||{};n.omit={};for(var u=0;u<i.length;u++)n.omit[i[u]]=!0;var o=t(r,n,0);return o=null==o?"":o.substring(0,n.maxchars)}catch(c){return"ERROR: jsonic.stringify: "+c+" input was: "+JSON.stringify(r)}},"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=n),exports.jsonic=n):r.jsonic=n}).call(this);
//# sourceMappingURL=jsonic-min.map