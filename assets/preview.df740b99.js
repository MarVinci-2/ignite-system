var U=Object.defineProperty;var d=(t,i)=>U(t,"name",{value:i,configurable:!0});import{w as s,u as X}from"./iframe.5877974a.js";import"./es.number.to-fixed.d67a83e3.js";function D(){var t=s.document.documentElement,i=Math.max(t.scrollHeight,t.offsetHeight),o=Math.max(t.scrollWidth,t.offsetWidth);return{width:o,height:i}}d(D,"getDocumentWidthAndHeight");function V(){var t=s.document.createElement("canvas");t.id="storybook-addon-measure";var i=t.getContext("2d"),o=D(),e=o.width,r=o.height;return R(t,i,{width:e,height:r}),t.style.position="absolute",t.style.left="0",t.style.top="0",t.style.zIndex="2147483647",t.style.pointerEvents="none",s.document.body.appendChild(t),{canvas:t,context:i,width:e,height:r}}d(V,"createCanvas");function R(t,i,o){var e=o.width,r=o.height;t.style.width="".concat(e,"px"),t.style.height="".concat(r,"px");var n=s.window.devicePixelRatio;t.width=Math.floor(e*n),t.height=Math.floor(r*n),i.scale(n,n)}d(R,"setCanvasWidthAndHeight");var u={};function G(){u.canvas||(u=V())}d(G,"init");function z(){u.context&&u.context.clearRect(0,0,u.width,u.height)}d(z,"clear");function J(t){z(),t(u.context)}d(J,"draw");function Q(){R(u.canvas,u.context,{width:0,height:0});var t=D(),i=t.width,o=t.height;R(u.canvas,u.context,{width:i,height:o}),u.width=i,u.height=o}d(Q,"rescale");function _(){u.canvas&&(z(),u.canvas.parentNode.removeChild(u.canvas),u={})}d(_,"destroy");var y={margin:"#f6b26b",border:"#ffe599",padding:"#93c47d",content:"#6fa8dc",text:"#232020"},v=6;function O(t,i){var o=i.x,e=i.y,r=i.w,n=i.h,a=i.r;o=o-r/2,e=e-n/2,r<2*a&&(a=r/2),n<2*a&&(a=n/2),t.beginPath(),t.moveTo(o+a,e),t.arcTo(o+r,e,o+r,e+n,a),t.arcTo(o+r,e+n,o,e+n,a),t.arcTo(o,e+n,o,e,a),t.arcTo(o,e,o+r,e,a),t.closePath()}d(O,"roundedRect");function tt(t,i){var o=i.padding,e=i.border,r=i.width,n=i.height,a=i.top,l=i.left,h=r-e.left-e.right-o.left-o.right,f=n-o.top-o.bottom-e.top-e.bottom,g=l+e.left+o.left,p=a+e.top+o.top;return t==="top"?g+=h/2:t==="right"?(g+=h,p+=f/2):t==="bottom"?(g+=h/2,p+=f):t==="left"?p+=f/2:t==="center"&&(g+=h/2,p+=f/2),{x:g,y:p}}d(tt,"positionCoordinate");function ot(t,i,o,e,r){var n=o.margin,a=o.border,l=o.padding,h=d(function(c){return 0},"shift"),f=0,g=0,p=r?1:.5,m=r?e*2:0;return t==="padding"?h=d(function(c){return l[c]*p+m},"shift"):t==="border"?h=d(function(c){return l[c]+a[c]*p+m},"shift"):t==="margin"&&(h=d(function(c){return l[c]+a[c]+n[c]*p+m},"shift")),i==="top"?g=-h("top"):i==="right"?f=h("right"):i==="bottom"?g=h("bottom"):i==="left"&&(f=-h("left")),{offsetX:f,offsetY:g}}d(ot,"offset");function it(t,i){return Math.abs(t.x-i.x)<Math.abs(t.w+i.w)/2&&Math.abs(t.y-i.y)<Math.abs(t.h+i.h)/2}d(it,"collide");function et(t,i,o){return t==="top"?i.y=o.y-o.h-v:t==="right"?i.x=o.x+o.w/2+v+i.w/2:t==="bottom"?i.y=o.y+o.h+v:t==="left"&&(i.x=o.x-o.w/2-v-i.w/2),{x:i.x,y:i.y}}d(et,"overlapAdjustment");function N(t,i,o,e){var r=o.x,n=o.y,a=o.w,l=o.h;return O(t,{x:r,y:n,w:a,h:l,r:3}),t.fillStyle="".concat(y[i],"dd"),t.fill(),t.strokeStyle=y[i],t.stroke(),t.fillStyle=y.text,t.fillText(e,r,n),O(t,{x:r,y:n,w:a,h:l,r:3}),t.fillStyle="".concat(y[i],"dd"),t.fill(),t.strokeStyle=y[i],t.stroke(),t.fillStyle=y.text,t.fillText(e,r,n),{x:r,y:n,w:a,h:l}}d(N,"textWithRect");function q(t,i){t.font="600 12px monospace",t.textBaseline="middle",t.textAlign="center";var o=t.measureText(i),e=o.actualBoundingBoxAscent+o.actualBoundingBoxDescent,r=o.width+v*2,n=e+v*2;return{w:r,h:n}}d(q,"configureText");function rt(t,i,o,e){var r=o.type,n=o.position,a=n===void 0?"center":n,l=o.text,h=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1,f=tt(a,i),g=f.x,p=f.y,m=ot(r,a,i,v+1,h),b=m.offsetX,c=m.offsetY;g+=b,p+=c;var T=q(t,l),A=T.w,M=T.h;if(e&&it({x:g,y:p,w:A,h:M},e)){var W=et(a,{x:g,y:p,w:A,h:M},e);g=W.x,p=W.y}return N(t,r,{x:g,y:p,w:A,h:M},l)}d(rt,"drawLabel");function nt(t,i){var o=i.w,e=i.h,r=o*.5+v,n=e*.5+v;return{offsetX:(t.x==="left"?-1:1)*r,offsetY:(t.y==="top"?-1:1)*n}}d(nt,"floatingOffset");function at(t,i,o){var e=o.type,r=o.text,n=i.floatingAlignment,a=i.extremities,l=a[n.x],h=a[n.y],f=q(t,r),g=f.w,p=f.h,m=nt(n,{w:g,h:p}),b=m.offsetX,c=m.offsetY;return l+=b,h+=c,N(t,e,{x:l,y:h,w:g,h:p},r)}d(at,"drawFloatingLabel");function E(t,i,o,e){var r=[];o.forEach(function(n,a){var l=e&&n.position==="center"?at(t,i,n):rt(t,i,n,r[a-1],e);r[a]=l})}d(E,"drawStack");function dt(t,i,o,e){var r=o.reduce(function(n,a){return Object.prototype.hasOwnProperty.call(n,a.position)||(n[a.position]=[]),n[a.position].push(a),n},{});r.top&&E(t,i,r.top,e),r.right&&E(t,i,r.right,e),r.bottom&&E(t,i,r.bottom,e),r.left&&E(t,i,r.left,e),r.center&&E(t,i,r.center,e)}d(dt,"labelStacks");function P(t){return gt(t)||ft(t)||ht(t)||lt()}d(P,"_toConsumableArray");function lt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}d(lt,"_nonIterableSpread");function ht(t,i){if(!!t){if(typeof t=="string")return L(t,i);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return L(t,i)}}d(ht,"_unsupportedIterableToArray");function ft(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}d(ft,"_iterableToArray");function gt(t){if(Array.isArray(t))return L(t)}d(gt,"_arrayWithoutHoles");function L(t,i){(i==null||i>t.length)&&(i=t.length);for(var o=0,e=new Array(i);o<i;o++)e[o]=t[o];return e}d(L,"_arrayLikeToArray");var H={margin:"#f6b26ba8",border:"#ffe599a8",padding:"#93c47d8c",content:"#6fa8dca8"},F=30;function w(t){return parseInt(t.replace("px",""),10)}d(w,"pxToNumber");function x(t){return Number.isInteger(t)?t:t.toFixed(2)}d(x,"round");function Y(t){return t.filter(function(i){return i.text!==0&&i.text!=="0"})}d(Y,"filterZeroValues");function pt(t){var i={top:s.window.scrollY,bottom:s.window.scrollY+s.window.innerHeight,left:s.window.scrollX,right:s.window.scrollX+s.window.innerWidth},o={top:Math.abs(i.top-t.top),bottom:Math.abs(i.bottom-t.bottom),left:Math.abs(i.left-t.left),right:Math.abs(i.right-t.right)};return{x:o.left>o.right?"left":"right",y:o.top>o.bottom?"top":"bottom"}}d(pt,"floatingAlignment");function ut(t){var i=s.getComputedStyle(t),o=t.getBoundingClientRect(),e=o.top,r=o.left,n=o.right,a=o.bottom,l=o.width,h=o.height,f=i.marginTop,g=i.marginBottom,p=i.marginLeft,m=i.marginRight,b=i.paddingTop,c=i.paddingBottom,T=i.paddingLeft,A=i.paddingRight,M=i.borderBottomWidth,W=i.borderTopWidth,$=i.borderLeftWidth,j=i.borderRightWidth;e=e+s.window.scrollY,r=r+s.window.scrollX,a=a+s.window.scrollY,n=n+s.window.scrollX;var S={top:w(f),bottom:w(g),left:w(p),right:w(m)},Z={top:w(b),bottom:w(c),left:w(T),right:w(A)},K={top:w(W),bottom:w(M),left:w($),right:w(j)},C={top:e-S.top,bottom:a+S.bottom,left:r-S.left,right:n+S.right};return{margin:S,padding:Z,border:K,top:e,left:r,bottom:a,right:n,width:l,height:h,extremities:C,floatingAlignment:pt(C)}}d(ut,"measureElement");function st(t,i){var o=i.margin,e=i.width,r=i.height,n=i.top,a=i.left,l=i.bottom,h=i.right,f=r+o.bottom+o.top;t.fillStyle=H.margin,t.fillRect(a,n-o.top,e,o.top),t.fillRect(h,n-o.top,o.right,f),t.fillRect(a,l,e,o.bottom),t.fillRect(a-o.left,n-o.top,o.left,f);var g=[{type:"margin",text:x(o.top),position:"top"},{type:"margin",text:x(o.right),position:"right"},{type:"margin",text:x(o.bottom),position:"bottom"},{type:"margin",text:x(o.left),position:"left"}];return Y(g)}d(st,"drawMargin");function ct(t,i){var o=i.padding,e=i.border,r=i.width,n=i.height,a=i.top,l=i.left,h=i.bottom,f=i.right,g=r-e.left-e.right,p=n-o.top-o.bottom-e.top-e.bottom;t.fillStyle=H.padding,t.fillRect(l+e.left,a+e.top,g,o.top),t.fillRect(f-o.right-e.right,a+o.top+e.top,o.right,p),t.fillRect(l+e.left,h-o.bottom-e.bottom,g,o.bottom),t.fillRect(l+e.left,a+o.top+e.top,o.left,p);var m=[{type:"padding",text:o.top,position:"top"},{type:"padding",text:o.right,position:"right"},{type:"padding",text:o.bottom,position:"bottom"},{type:"padding",text:o.left,position:"left"}];return Y(m)}d(ct,"drawPadding");function mt(t,i){var o=i.border,e=i.width,r=i.height,n=i.top,a=i.left,l=i.bottom,h=i.right,f=r-o.top-o.bottom;t.fillStyle=H.border,t.fillRect(a,n,e,o.top),t.fillRect(a,l-o.bottom,e,o.bottom),t.fillRect(a,n+o.top,o.left,f),t.fillRect(h-o.right,n+o.top,o.right,f);var g=[{type:"border",text:o.top,position:"top"},{type:"border",text:o.right,position:"right"},{type:"border",text:o.bottom,position:"bottom"},{type:"border",text:o.left,position:"left"}];return Y(g)}d(mt,"drawBorder");function wt(t,i){var o=i.padding,e=i.border,r=i.width,n=i.height,a=i.top,l=i.left,h=r-e.left-e.right-o.left-o.right,f=n-o.top-o.bottom-e.top-e.bottom;return t.fillStyle=H.content,t.fillRect(l+e.left+o.left,a+e.top+o.top,h,f),[{type:"content",position:"center",text:"".concat(x(h)," x ").concat(x(f))}]}d(wt,"drawContent");function bt(t){return function(i){if(t&&i){var o=ut(t),e=st(i,o),r=ct(i,o),n=mt(i,o),a=wt(i,o),l=o.width<=F*3||o.height<=F;dt(i,o,[].concat(P(a),P(r),P(n),P(e)),l)}}}d(bt,"drawBoxModel");function vt(t){J(bt(t))}d(vt,"drawSelectedElement");var yt=d(function(i,o){var e=s.document.elementFromPoint(i,o),r=d(function a(l){if(l&&l.shadowRoot){var h=l.shadowRoot.elementFromPoint(i,o);return l.isEqualNode(h)?l:h.shadowRoot?a(h):h}return l},"crawlShadows"),n=r(e);return n||e},"deepElementFromPoint"),I,B={x:0,y:0};function k(t,i){I=yt(t,i),vt(I)}d(k,"findAndDrawElement");var xt=d(function(i,o){var e=o.globals.measureEnabled;return X(function(){var r=d(function(a){window.requestAnimationFrame(function(){a.stopPropagation(),B.x=a.clientX,B.y=a.clientY})},"onMouseMove");return document.addEventListener("mousemove",r),function(){document.removeEventListener("mousemove",r)}},[]),X(function(){var r=d(function(l){window.requestAnimationFrame(function(){l.stopPropagation(),k(l.clientX,l.clientY)})},"onMouseOver"),n=d(function(){window.requestAnimationFrame(function(){Q()})},"onResize");return e&&(document.addEventListener("mouseover",r),G(),window.addEventListener("resize",n),k(B.x,B.y)),function(){window.removeEventListener("resize",n),_()}},[e]),i()},"withMeasure"),At="measureEnabled";function Mt(t,i,o){return i in t?Object.defineProperty(t,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[i]=o,t}d(Mt,"_defineProperty");var Wt=[xt],Pt=Mt({},At,!1);export{Wt as decorators,Pt as globals};
//# sourceMappingURL=preview.df740b99.js.map
