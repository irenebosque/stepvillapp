"use strict";(self.webpackChunkgatsby_garden=self.webpackChunkgatsby_garden||[]).push([[678],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,s=new RegExp("^"+i.source),o=new RegExp(i.source+n.source,"gu"),l=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,r,n)=>{let i=!1,s=!1,o=!1;for(let l=0;l<e.length;l++){const c=e[l];i&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),i=!1,o=s,s=!0,l++):s&&o&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),o=s,s=!1,i=!0):(i=r(c)===c&&n(c)!==c,o=s,s=n(c)===c&&r(c)!==c)}return e})(e,i,c)),e=e.replace(s,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,i):i(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,l.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return m},M:function(){return x},P:function(){return E},S:function(){return H},_:function(){return o},a:function(){return s},b:function(){return d},g:function(){return u},h:function(){return l}});var r=a(7294),n=(a(3204),a(5697)),i=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,i,o,l){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const g=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,a=o(e,g);return r.createElement(r.Fragment,null,r.createElement(p,s({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:l}=e,c=o(e,f);return r.createElement("img",s({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:i}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=o(e,h);const l=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(b,s({},i,t,{sizes:l,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),c):c};var w;b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const v=["fallback"],E=function(e){let{fallback:t}=e,a=o(e,v);return t?r.createElement(y,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(w=y.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(y,s({},e)),r.createElement("noscript",null,r.createElement(y,s({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=y.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],L=e=>e.replace(/\n/g,""),S=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},T={image:i().object.isRequired,alt:S},N=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],O=new Set;let R,_;const j=function(e){let{as:t="div",image:n,style:i,backgroundColor:d,className:u,class:g,onStartLoad:p,onLoad:m,onError:f}=e,h=o(e,N);const{width:b,height:y,layout:w}=n,v=c(b,y,w),{style:E,className:x}=v,k=o(v,I),C=(0,r.useRef)(),L=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);g&&(u=g);const S=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,b,y);return(0,r.useEffect)((()=>{R||(R=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return _=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void O.add(L);if(_&&O.has(L))return;let t,r;return R.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;C.current&&(C.current.innerHTML=a(s({isLoading:!0,isLoaded:O.has(L),image:n},h)),O.has(L)||(t=requestAnimationFrame((()=>{C.current&&(r=o(C.current,L,O,i,p,m,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{O.has(L)&&_&&(C.current.innerHTML=_(s({isLoading:O.has(L),isLoaded:O.has(L),image:n},h)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},k,{style:s({},E,i,{backgroundColor:d}),className:x+(u?" "+u:""),ref:C,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},q=(0,r.memo)((function(e){return e.image?(0,r.createElement)(j,e):null}));q.propTypes=T,q.displayName="GatsbyImage";const A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function z(e){return function(t){let{src:a,__imageData:n,__error:i}=t,l=o(t,A);return i&&console.warn(i),n?r.createElement(e,s({image:n},l)):(console.warn("Image not loaded",a),null)}}const P=z((function(e){let{as:t="div",className:a,class:n,style:i,image:l,loading:g="lazy",imgClassName:p,imgStyle:f,backgroundColor:h,objectFit:b,objectPosition:y}=e,w=o(e,k);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),f=s({objectFit:b,objectPosition:y,backgroundColor:h},f);const{width:v,height:S,layout:T,images:N,placeholder:I,backgroundColor:O}=l,R=c(v,S,T),{style:_,className:j}=R,q=o(R,C),A={fallback:void 0,sources:[]};return N.fallback&&(A.fallback=s({},N.fallback,{srcSet:N.fallback.srcSet?L(N.fallback.srcSet):void 0})),N.sources&&(A.sources=N.sources.map((e=>s({},e,{srcSet:L(e.srcSet)})))),r.createElement(t,s({},q,{style:s({},_,i,{backgroundColor:h}),className:j+(a?" "+a:"")}),r.createElement(m,{layout:T,width:v,height:S},r.createElement(E,s({},u(I,!1,T,v,S,O,b,y))),r.createElement(x,s({"data-gatsby-image-ssr":"",className:p},w,d("eager"===g,!1,A,g,f)))))})),W=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},M=new Set(["fixed","fullWidth","constrained"]),F={src:i().string.isRequired,alt:S,width:W,height:W,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!M.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};P.displayName="StaticImage",P.propTypes=F;const H=z(q);H.displayName="StaticImage",H.propTypes=F},6032:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var r=a(7294),n=a.p+"static/headerimage-80205bbe25c943b618c5d3cdaa6a4149.png",i=a(8032);var s=()=>{const e={backgroundImage:"url("+n+")",backgroundColor:"#f0f0f0",height:"115px"};return r.createElement("main",null,r.createElement("div",{className:"imageWrapper",style:e},r.createElement("div",{className:"container",style:{display:"grid",margin:"auto",maxWidth:"1170px",paddingLeft:"15px",paddingRight:"15px",gridTemplateColumns:"repeat(12, 1fr)",gridTemplateRows:"115px 876px auto auto",gridColumnGap:"30px",gridTemplateAreas:'\n      "h h h h h h h h h h h h"\n      "p p p p p i i i i i i i"\n      "c c c c c c c c c c c c"\n      "f f f f f f f f f f f f"\n    '}}),r.createElement(i.S,{alt:"Irene",src:"../images/headerimage.png",__imageData:a(6436)})))}},6436:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/56470483017bb0bf6b0d7df4f82f62a0/9f5a4/headerimage.png","srcSet":"/static/56470483017bb0bf6b0d7df4f82f62a0/d6fde/headerimage.png 344w,\\n/static/56470483017bb0bf6b0d7df4f82f62a0/f2ea3/headerimage.png 689w,\\n/static/56470483017bb0bf6b0d7df4f82f62a0/9f5a4/headerimage.png 1377w","sizes":"(min-width: 1377px) 1377px, 100vw"},"sources":[{"srcSet":"/static/56470483017bb0bf6b0d7df4f82f62a0/ed5ab/headerimage.webp 344w,\\n/static/56470483017bb0bf6b0d7df4f82f62a0/b1dc8/headerimage.webp 689w,\\n/static/56470483017bb0bf6b0d7df4f82f62a0/799ca/headerimage.webp 1377w","type":"image/webp","sizes":"(min-width: 1377px) 1377px, 100vw"}]},"width":1377,"height":621}')}}]);
//# sourceMappingURL=component---src-pages-index-js-441f96ee0582f113ef06.js.map