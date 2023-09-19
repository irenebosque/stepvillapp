"use strict";(self.webpackChunkgatsby_garden=self.webpackChunkgatsby_garden||[]).push([[678],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,i=new RegExp("^"+s.source),l=new RegExp(s.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,i=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];s&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),s=!1,l=i,i=!0,o++):i&&l&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=i,i=!1,s=!0):(s=r(c)===c&&n(c)!==c,l=i,i=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return m},M:function(){return x},P:function(){return E},S:function(){return H},_:function(){return l},a:function(){return i},b:function(){return d},g:function(){return p},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function p(e,t,a,r,n,s,l,o){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],g=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,a=l(e,u);return r.createElement(r.Fragment,null,r.createElement(g,i({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:o}=e,c=l(e,h);return r.createElement("img",i({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=l(e,f);const o=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,i({},s,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var w;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const v=["fallback"],E=function(e){let{fallback:t}=e,a=l(e,v);return t?r.createElement(b,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(w=b.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(b,i({},e)),r.createElement("noscript",null,r.createElement(b,i({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=b.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],L=e=>e.replace(/\n/g,""),S=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:s().object.isRequired,alt:S},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],R=new Set;let O,_;const j=function(e){let{as:t="div",image:n,style:s,backgroundColor:d,className:p,class:u,onStartLoad:g,onLoad:m,onError:h}=e,f=l(e,T);const{width:y,height:b,layout:w}=n,v=c(y,b,w),{style:E,className:x}=v,k=l(v,I),C=(0,r.useRef)(),L=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);u&&(p=u);const S=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,y,b);return(0,r.useEffect)((()=>{O||(O=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return _=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void R.add(L);if(_&&R.has(L))return;let t,r;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;C.current&&(C.current.innerHTML=a(i({isLoading:!0,isLoaded:R.has(L),image:n},f)),R.has(L)||(t=requestAnimationFrame((()=>{C.current&&(r=l(C.current,L,R,s,g,m,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{R.has(L)&&_&&(C.current.innerHTML=_(i({isLoading:R.has(L),isLoaded:R.has(L),image:n},f)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},k,{style:i({},E,s,{backgroundColor:d}),className:x+(p?" "+p:""),ref:C,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},P=(0,r.memo)((function(e){return e.image?(0,r.createElement)(j,e):null}));P.propTypes=N,P.displayName="GatsbyImage";const q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function A(e){return function(t){let{src:a,__imageData:n,__error:s}=t,o=l(t,q);return s&&console.warn(s),n?r.createElement(e,i({image:n},o)):(console.warn("Image not loaded",a),null)}}const W=A((function(e){let{as:t="div",className:a,class:n,style:s,image:o,loading:u="lazy",imgClassName:g,imgStyle:h,backgroundColor:f,objectFit:y,objectPosition:b}=e,w=l(e,k);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),h=i({objectFit:y,objectPosition:b,backgroundColor:f},h);const{width:v,height:S,layout:N,images:T,placeholder:I,backgroundColor:R}=o,O=c(v,S,N),{style:_,className:j}=O,P=l(O,C),q={fallback:void 0,sources:[]};return T.fallback&&(q.fallback=i({},T.fallback,{srcSet:T.fallback.srcSet?L(T.fallback.srcSet):void 0})),T.sources&&(q.sources=T.sources.map((e=>i({},e,{srcSet:L(e.srcSet)})))),r.createElement(t,i({},P,{style:i({},_,s,{backgroundColor:f}),className:j+(a?" "+a:"")}),r.createElement(m,{layout:N,width:v,height:S},r.createElement(E,i({},p(I,!1,N,v,S,R,y,b))),r.createElement(x,i({"data-gatsby-image-ssr":"",className:g},w,d("eager"===u,!1,q,u,h)))))})),z=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},M=new Set(["fixed","fullWidth","constrained"]),F={src:s().string.isRequired,alt:S,width:z,height:z,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!M.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};W.displayName="StaticImage",W.propTypes=F;const H=A(P);H.displayName="StaticImage",H.propTypes=F},6032:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var r=a(7294),n=a.p+"static/headerimage-80205bbe25c943b618c5d3cdaa6a4149.png",s=a(611),i=a(8032);var l=()=>{const e={backgroundImage:"url("+n+")",backgroundColor:"#f0f0f0",height:"115px"};return r.createElement(s.Z,null,r.createElement("div",{className:"imageWrapper",style:e},r.createElement("div",{className:"container",style:{display:"grid",margin:"auto",maxWidth:"1170px",paddingLeft:"15px",paddingRight:"15px",gridTemplateColumns:"repeat(12, 1fr)",gridTemplateRows:"115px 876px auto auto",gridColumnGap:"30px",gridTemplateAreas:'\n      "h h h h h h h h h h h h"\n      "p p p p p i i i i i i i"\n      "c c c c c c c c c c c c"\n      "f f f f f f f f f f f f"\n    '}},r.createElement("header",null,r.createElement("div",{className:"logo"},r.createElement("div",{className:"appIconShadow"},r.createElement("svg",{width:"0",height:"0"},r.createElement("defs",null,r.createElement("clipPath",{id:"shape"},r.createElement("path",{id:"shape",d:"M6181.23,233.709v-1.792c0-.5-0.02-1-0.02-1.523a24.257,24.257,0,0,0-.28-3.3,11.207,11.207,0,0,0-1.04-3.132,10.683,10.683,0,0,0-1.95-2.679,10.384,10.384,0,0,0-2.68-1.943,10.806,10.806,0,0,0-3.13-1.038,19.588,19.588,0,0,0-3.3-.285c-0.5-.017-1-0.017-1.52-0.017h-22.39c-0.51,0-1.01.017-1.53,0.017a24.041,24.041,0,0,0-3.3.285,11.009,11.009,0,0,0-3.13,1.038,10.491,10.491,0,0,0-4.62,4.622,10.893,10.893,0,0,0-1.04,3.132,19.2,19.2,0,0,0-.28,3.3c-0.02.5-.02,1-0.02,1.523v22.392c0,0.5.02,1,.02,1.524a24.257,24.257,0,0,0,.28,3.3,10.9,10.9,0,0,0,1.04,3.132,10.491,10.491,0,0,0,4.62,4.622,11.04,11.04,0,0,0,3.13,1.038,19.891,19.891,0,0,0,3.3.285c0.51,0.017,1.01.017,1.53,0.017h22.39c0.5,0,1-.017,1.52-0.017a24.221,24.221,0,0,0,3.3-.285,10.836,10.836,0,0,0,3.13-1.038,10.408,10.408,0,0,0,2.68-1.943,10.683,10.683,0,0,0,1.95-2.679,11.217,11.217,0,0,0,1.04-3.132,20.257,20.257,0,0,0,.28-3.3c0.02-.5.02-1,0.02-1.524v-20.6h0Z",transform:"translate(-6131 -218)"})))),r.createElement(i.S,{src:"../images/icon.png",alt:"Header Icon",className:"headerIcon",style:{width:"50px",height:"50px",WebkitClipPath:"url(#shape)",clipPath:"url(#shape)",marginRight:"15px"},__imageData:a(6887)})),r.createElement("p",{className:"headerName"},"StepVillapp"))))))}},6887:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#c8d878","images":{"fallback":{"src":"/stepvillapp/static/8b252f5602be74e45637d848ab67a831/8d0f7/icon.png","srcSet":"/stepvillapp/static/8b252f5602be74e45637d848ab67a831/87b07/icon.png 154w,\\n/stepvillapp/static/8b252f5602be74e45637d848ab67a831/d8276/icon.png 308w,\\n/stepvillapp/static/8b252f5602be74e45637d848ab67a831/8d0f7/icon.png 616w","sizes":"(min-width: 616px) 616px, 100vw"},"sources":[{"srcSet":"/stepvillapp/static/8b252f5602be74e45637d848ab67a831/c664b/icon.webp 154w,\\n/stepvillapp/static/8b252f5602be74e45637d848ab67a831/bf83e/icon.webp 308w,\\n/stepvillapp/static/8b252f5602be74e45637d848ab67a831/faa48/icon.webp 616w","type":"image/webp","sizes":"(min-width: 616px) 616px, 100vw"}]},"width":616,"height":636}')}}]);
//# sourceMappingURL=component---src-pages-index-js-3e921f95359aae63a331.js.map