(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[3081],{20698:function(N){N.exports={container:"container___3rwDa",lang:"lang___2ES0G",content:"content___3Paa8",top:"top___1W42Y",header:"header___1cl15",logo:"logo___29nS6",title:"title___3DxND",desc:"desc___2YLHe"}},97970:function(N,R,y){"use strict";y.r(R),y.d(R,{default:function(){return Tt}});var K=y(56361),X=y(76129),q=y(79800),_=y(91374),m=y(67294),tt=y(44721),p=y.n(tt),et=y(97449),nt=y.n(et),rt=y(78267),Z=y.n(rt),ot=y(23270),at=y.n(ot);function T(){return(T=Object.assign||function(l){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(l[t]=r[t])}return l}).apply(this,arguments)}function D(l,e){l.prototype=Object.create(e.prototype),l.prototype.constructor=l,l.__proto__=e}function $(l,e){if(l==null)return{};var r,t,n={},o=Object.keys(l);for(t=0;t<o.length;t++)e.indexOf(r=o[t])>=0||(n[r]=l[r]);return n}var u={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},G=Object.keys(u).map(function(l){return u[l]}),M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},it=Object.keys(M).reduce(function(l,e){return l[M[e]]=e,l},{}),S=function(e,r){for(var t=e.length-1;t>=0;t-=1){var n=e[t];if(Object.prototype.hasOwnProperty.call(n,r))return n[r]}return null},st=function(e){var r=S(e,u.TITLE),t=S(e,"titleTemplate");if(Array.isArray(r)&&(r=r.join("")),t&&r)return t.replace(/%s/g,function(){return r});var n=S(e,"defaultTitle");return r||n||void 0},ct=function(e){return S(e,"onChangeClientState")||function(){}},B=function(e,r){return r.filter(function(t){return t[e]!==void 0}).map(function(t){return t[e]}).reduce(function(t,n){return T({},t,n)},{})},ut=function(e,r){return r.filter(function(t){return t[u.BASE]!==void 0}).map(function(t){return t[u.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var o=Object.keys(n),a=0;a<o.length;a+=1){var i=o[a].toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},x=function(e,r,t){var n={};return t.filter(function(o){return!!Array.isArray(o[e])||(o[e]!==void 0&&console&&typeof console.warn=="function"&&console.warn("Helmet: "+e+' should be of type "Array". Instead found type "'+typeof o[e]+'"'),!1)}).map(function(o){return o[e]}).reverse().reduce(function(o,a){var i={};a.filter(function(f){for(var h,b=Object.keys(f),A=0;A<b.length;A+=1){var v=b[A],E=v.toLowerCase();r.indexOf(E)===-1||h==="rel"&&f[h].toLowerCase()==="canonical"||E==="rel"&&f[E].toLowerCase()==="stylesheet"||(h=E),r.indexOf(v)===-1||v!=="innerHTML"&&v!=="cssText"&&v!=="itemprop"||(h=v)}if(!h||!f[h])return!1;var j=f[h].toLowerCase();return n[h]||(n[h]={}),i[h]||(i[h]={}),!n[h][j]&&(i[h][j]=!0,!0)}).reverse().forEach(function(f){return o.push(f)});for(var s=Object.keys(i),c=0;c<s.length;c+=1){var d=s[c],g=T({},n[d],i[d]);n[d]=g}return o},[]).reverse()},W=function(e){return Array.isArray(e)?e.join(""):e},lt=[u.NOSCRIPT,u.SCRIPT,u.STYLE],Y=function(e,r){return r===void 0&&(r=!0),r===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},z=function(e){return Object.keys(e).reduce(function(r,t){var n=e[t]!==void 0?t+'="'+e[t]+'"':""+t;return r?r+" "+n:n},"")},J=function(e,r){return r===void 0&&(r={}),Object.keys(e).reduce(function(t,n){return t[M[n]||n]=e[n],t},r)},C=function(e,r,t){switch(e){case u.TITLE:return{toComponent:function(){return a=r.titleAttributes,(i={key:o=r.title})["data-rh"]=!0,s=J(a,i),[m.createElement(u.TITLE,s,o)];var o,a,i,s},toString:function(){return function(o,a,i,s){var c=z(i),d=W(a);return c?"<"+o+' data-rh="true" '+c+">"+Y(d,s)+"</"+o+">":"<"+o+' data-rh="true">'+Y(d,s)+"</"+o+">"}(e,r.title,r.titleAttributes,t)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return J(r)},toString:function(){return z(r)}};default:return{toComponent:function(){return function(o,a){return a.map(function(i,s){var c,d=((c={key:s})["data-rh"]=!0,c);return Object.keys(i).forEach(function(g){var f=M[g]||g;f==="innerHTML"||f==="cssText"?d.dangerouslySetInnerHTML={__html:i.innerHTML||i.cssText}:d[f]=i[g]}),m.createElement(o,d)})}(e,r)},toString:function(){return function(o,a,i){return a.reduce(function(s,c){var d=Object.keys(c).filter(function(h){return!(h==="innerHTML"||h==="cssText")}).reduce(function(h,b){var A=c[b]===void 0?b:b+'="'+Y(c[b],i)+'"';return h?h+" "+A:A},""),g=c.innerHTML||c.cssText||"",f=lt.indexOf(o)===-1;return s+"<"+o+' data-rh="true" '+d+(f?"/>":">"+g+"</"+o+">")},"")}(e,r,t)}}}},k=function(e){var r=e.bodyAttributes,t=e.encode,n=e.htmlAttributes,o=e.linkTags,a=e.metaTags,i=e.noscriptTags,s=e.scriptTags,c=e.styleTags,d=e.title,g=d===void 0?"":d,f=e.titleAttributes;return{base:C(u.BASE,e.baseTag,t),bodyAttributes:C("bodyAttributes",r,t),htmlAttributes:C("htmlAttributes",n,t),link:C(u.LINK,o,t),meta:C(u.META,a,t),noscript:C(u.NOSCRIPT,i,t),script:C(u.SCRIPT,s,t),style:C(u.STYLE,c,t),title:C(u.TITLE,{title:g,titleAttributes:f},t)}},Q=m.createContext({}),dt=p().shape({setHelmet:p().func,helmetInstances:p().shape({get:p().func,add:p().func,remove:p().func})}),pt=typeof document!="undefined",L=function(l){function e(r){var t;return(t=l.call(this,r)||this).instances=[],t.value={setHelmet:function(o){t.props.context.helmet=o},helmetInstances:{get:function(){return t.instances},add:function(o){t.instances.push(o)},remove:function(o){var a=t.instances.indexOf(o);t.instances.splice(a,1)}}},e.canUseDOM||(r.context.helmet=k({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t}return D(e,l),e.prototype.render=function(){return m.createElement(Q.Provider,{value:this.value},this.props.children)},e}(m.Component);L.canUseDOM=pt,L.propTypes={context:p().shape({helmet:p().shape()}),children:p().node.isRequired},L.defaultProps={context:{}},L.displayName="HelmetProvider";var P=function(e,r){var t,n=document.head||document.querySelector(u.HEAD),o=n.querySelectorAll(e+"[data-rh]"),a=[].slice.call(o),i=[];return r&&r.length&&r.forEach(function(s){var c=document.createElement(e);for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(d==="innerHTML"?c.innerHTML=s.innerHTML:d==="cssText"?c.styleSheet?c.styleSheet.cssText=s.cssText:c.appendChild(document.createTextNode(s.cssText)):c.setAttribute(d,s[d]===void 0?"":s[d]));c.setAttribute("data-rh","true"),a.some(function(g,f){return t=f,c.isEqualNode(g)})?a.splice(t,1):i.push(c)}),a.forEach(function(s){return s.parentNode.removeChild(s)}),i.forEach(function(s){return n.appendChild(s)}),{oldTags:a,newTags:i}},U=function(e,r){var t=document.getElementsByTagName(e)[0];if(t){for(var n=t.getAttribute("data-rh"),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(r),s=0;s<i.length;s+=1){var c=i[s],d=r[c]||"";t.getAttribute(c)!==d&&t.setAttribute(c,d),o.indexOf(c)===-1&&o.push(c);var g=a.indexOf(c);g!==-1&&a.splice(g,1)}for(var f=a.length-1;f>=0;f-=1)t.removeAttribute(a[f]);o.length===a.length?t.removeAttribute("data-rh"):t.getAttribute("data-rh")!==i.join(",")&&t.setAttribute("data-rh",i.join(","))}},V=function(e,r){var t=e.baseTag,n=e.htmlAttributes,o=e.linkTags,a=e.metaTags,i=e.noscriptTags,s=e.onChangeClientState,c=e.scriptTags,d=e.styleTags,g=e.title,f=e.titleAttributes;U(u.BODY,e.bodyAttributes),U(u.HTML,n),function(v,E){v!==void 0&&document.title!==v&&(document.title=W(v)),U(u.TITLE,E)}(g,f);var h={baseTag:P(u.BASE,t),linkTags:P(u.LINK,o),metaTags:P(u.META,a),noscriptTags:P(u.NOSCRIPT,i),scriptTags:P(u.SCRIPT,c),styleTags:P(u.STYLE,d)},b={},A={};Object.keys(h).forEach(function(v){var E=h[v],j=E.newTags,vt=E.oldTags;j.length&&(b[v]=j),vt.length&&(A[v]=h[v].oldTags)}),r&&r(),s(e,b,A)},I=null,F=function(l){function e(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=l.call.apply(l,[this].concat(o))||this).rendered=!1,t}D(e,l);var r=e.prototype;return r.shouldComponentUpdate=function(t){return!at()(t,this.props)},r.componentDidUpdate=function(){this.emitChange()},r.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},r.emitChange=function(){var t,n,o=this.props.context,a=o.setHelmet,i=null,s=(t=o.helmetInstances.get().map(function(c){var d=T({},c.props);return delete d.context,d}),{baseTag:ut(["href"],t),bodyAttributes:B("bodyAttributes",t),defer:S(t,"defer"),encode:S(t,"encodeSpecialCharacters"),htmlAttributes:B("htmlAttributes",t),linkTags:x(u.LINK,["rel","href"],t),metaTags:x(u.META,["name","charset","http-equiv","property","itemprop"],t),noscriptTags:x(u.NOSCRIPT,["innerHTML"],t),onChangeClientState:ct(t),scriptTags:x(u.SCRIPT,["src","innerHTML"],t),styleTags:x(u.STYLE,["cssText"],t),title:st(t),titleAttributes:B("titleAttributes",t)});L.canUseDOM?(n=s,I&&cancelAnimationFrame(I),n.defer?I=requestAnimationFrame(function(){V(n,function(){I=null})}):(V(n),I=null)):k&&(i=k(s)),a(i)},r.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},r.render=function(){return this.init(),null},e}(m.Component);F.propTypes={context:dt.isRequired},F.displayName="HelmetDispatcher";var H=function(l){function e(){return l.apply(this,arguments)||this}D(e,l);var r=e.prototype;return r.shouldComponentUpdate=function(t){return!nt()(this.props,t)},r.mapNestedChildrenToProps=function(t,n){if(!n)return null;switch(t.type){case u.SCRIPT:case u.NOSCRIPT:return{innerHTML:n};case u.STYLE:return{cssText:n};default:throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},r.flattenArrayTypeChildren=function(t){var n,o=t.child,a=t.arrayTypeChildren;return T({},a,((n={})[o.type]=[].concat(a[o.type]||[],[T({},t.newChildProps,this.mapNestedChildrenToProps(o,t.nestedChildren))]),n))},r.mapObjectTypeChildren=function(t){var n,o,a=t.child,i=t.newProps,s=t.newChildProps,c=t.nestedChildren;switch(a.type){case u.TITLE:return T({},i,((n={})[a.type]=c,n.titleAttributes=T({},s),n));case u.BODY:return T({},i,{bodyAttributes:T({},s)});case u.HTML:return T({},i,{htmlAttributes:T({},s)});default:return T({},i,((o={})[a.type]=T({},s),o))}},r.mapArrayTypeChildrenToProps=function(t,n){var o=T({},n);return Object.keys(t).forEach(function(a){var i;o=T({},o,((i={})[a]=t[a],i))}),o},r.warnOnInvalidChildren=function(t,n){return Z()(G.some(function(o){return t.type===o}),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+G.join(", ")+" are allowed. Helmet does not support rendering <"+t.type+"> elements. Refer to our API for more information."),Z()(!n||typeof n=="string"||Array.isArray(n)&&!n.some(function(o){return typeof o!="string"}),"Helmet expects a string as a child of <"+t.type+">. Did you forget to wrap your children in braces? ( <"+t.type+">{``}</"+t.type+"> ) Refer to our API for more information."),!0},r.mapChildrenToProps=function(t,n){var o=this,a={};return m.Children.forEach(t,function(i){if(i&&i.props){var s=i.props,c=s.children,d=$(s,["children"]),g=Object.keys(d).reduce(function(h,b){return h[it[b]||b]=d[b],h},{}),f=i.type;switch(typeof f=="symbol"?f=f.toString():o.warnOnInvalidChildren(i,c),f){case u.FRAGMENT:n=o.mapChildrenToProps(c,n);break;case u.LINK:case u.META:case u.NOSCRIPT:case u.SCRIPT:case u.STYLE:a=o.flattenArrayTypeChildren({child:i,arrayTypeChildren:a,newChildProps:g,nestedChildren:c});break;default:n=o.mapObjectTypeChildren({child:i,newProps:n,newChildProps:g,nestedChildren:c})}}}),this.mapArrayTypeChildrenToProps(a,n)},r.render=function(){var t=this.props,n=t.children,o=T({},$(t,["children"]));return n&&(o=this.mapChildrenToProps(n,o)),m.createElement(Q.Consumer,null,function(a){return m.createElement(F,T({},o,{context:a}))})},e}(m.Component);H.propTypes={base:p().object,bodyAttributes:p().object,children:p().oneOfType([p().arrayOf(p().node),p().node]),defaultTitle:p().string,defer:p().bool,encodeSpecialCharacters:p().bool,htmlAttributes:p().object,link:p().arrayOf(p().object),meta:p().arrayOf(p().object),noscript:p().arrayOf(p().object),onChangeClientState:p().func,script:p().arrayOf(p().object),style:p().arrayOf(p().object),title:p().string,titleAttributes:p().object,titleTemplate:p().string},H.defaultProps={defer:!0,encodeSpecialCharacters:!0},H.displayName="Helmet";var w=y(23715),ft=y(87748),ht=y(54200),mt=y.n(ht),yt=y(20698),O=y.n(yt),gt=function(e){var r=e.route,t=r===void 0?{routes:[]}:r,n=t.routes,o=n===void 0?[]:n,a=e.children,i=e.location,s=i===void 0?{pathname:""}:i,c=(0,w.YB)(),d=c.formatMessage,g=(0,X.Z)(o),f=g.breadcrumb,h=(0,q.ZP)((0,K.Z)({pathname:s.pathname,formatMessage:d,breadcrumb:f},e));return m.createElement(L,null,m.createElement(H,null,m.createElement("title",null,h),m.createElement("meta",{name:"description",content:h})),m.createElement("div",{className:O().container},m.createElement("div",{className:O().lang},m.createElement(w.pD,null)),m.createElement("div",{className:O().content},m.createElement("div",{className:O().top},m.createElement("div",{className:O().header},m.createElement(ft.rU,{to:"/"},m.createElement("img",{alt:"logo",className:O().logo,src:mt()}),m.createElement("span",{className:O().title},"Ant Design"))),m.createElement("div",{className:O().desc},m.createElement(w._H,{id:"pages.layouts.userLayout.title",defaultMessage:"Ant Design \u662F\u897F\u6E56\u533A\u6700\u5177\u5F71\u54CD\u529B\u7684 Web \u8BBE\u8BA1\u89C4\u8303"}))),a),m.createElement(_.Z,null)))},Tt=(0,w.$j)(function(l){var e=l.settings;return(0,K.Z)({},e)})(gt)},54200:function(N,R,y){N.exports=y.p+"static/logo.f0355d39.svg"}}]);
