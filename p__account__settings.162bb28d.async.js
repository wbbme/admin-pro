(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[6527],{70242:function(p){p.exports={baseView:"baseView___3sRG3",left:"left___GavW0",right:"right___3-EXe",avatar_title:"avatar_title___13ztg",avatar:"avatar___1GisI",button_view:"button_view___o9apF"}},98697:function(p){p.exports={row:"row___J_FI0",item:"item___2gpD9"}},59236:function(p){p.exports={area_code:"area_code___2LS8F",phone_number:"phone_number___1PO0T"}},11619:function(p){p.exports={main:"main___2yGev",leftMenu:"leftMenu___179-W",right:"right___2jdGg",title:"title___3cGwa"}},14381:function(p,V,r){"use strict";r.r(V),r.d(V,{default:function(){return ue}});var h=r(60360),y=r(66646),E=r(65353),w=r(18604),me=r(37482),P=r(3810),e=r(67294),n=r(23715),F=r(26388),ve=r(67604),v=r(66498),ge=r(68137),Z=r(50532),pe=r(14643),U=r(92909),fe=r(83557),H=r(88058),he=r(13753),N=r(48429),ye=r(97140),C=r(28389),D=r(84391),Ee=r(58210),B=r(87240),z=r(98697),A=r.n(z),S=C.Z.Option,b={label:"",value:"",key:""},G=function(u){(0,E.Z)(s,u);var l=(0,w.Z)(s);function s(){var a;(0,h.Z)(this,s);for(var t=arguments.length,c=new Array(t),i=0;i<t;i++)c[i]=arguments[i];return a=l.call.apply(l,[this].concat(c)),a.componentDidMount=function(){var o=a.props.dispatch;o&&o({type:"accountAndsettings/fetchProvince"})},a.getCityOption=function(){var o=a.props.city;return o?a.getOption(o):[]},a.getOption=function(o){return!o||o.length<1?e.createElement(S,{key:0,value:0},"\u6CA1\u6709\u627E\u5230\u9009\u9879"):o.map(function(d){return e.createElement(S,{key:d.id,value:d.id},d.name)})},a.selectProvinceItem=function(o){var d=a.props,f=d.dispatch,m=d.onChange;f&&f({type:"accountAndsettings/fetchCity",payload:o.key}),m&&m({province:o,city:b})},a.selectCityItem=function(o){var d=a.props,f=d.value,m=d.onChange;f&&m&&m({province:f.province,city:o})},a}return(0,y.Z)(s,[{key:"componentDidUpdate",value:function(t){var c=this.props,i=c.dispatch,o=c.value;!t.value&&!!o&&!!o.province&&i&&i({type:"accountAndsettings/fetchCity",payload:o.province.key})}},{key:"getProvinceOption",value:function(){var t=this.props.province;return t?this.getOption(t):[]}},{key:"conversionObject",value:function(){var t=this.props.value;if(!t)return{province:b,city:b};var c=t.province,i=t.city;return{province:c||b,city:i||b}}},{key:"render",value:function(){var t=this.conversionObject(),c=t.province,i=t.city,o=this.props.loading;return e.createElement(B.Z,{spinning:o,wrapperClassName:A().row},e.createElement(C.Z,{className:A().item,value:c,labelInValue:!0,showSearch:!0,onSelect:this.selectProvinceItem},this.getProvinceOption()),e.createElement(C.Z,{className:A().item,value:i,labelInValue:!0,showSearch:!0,onSelect:this.selectCityItem},this.getCityOption()))}}]),s}(e.Component),K=(0,n.$j)(function(u){var l=u.accountAndsettings,s=u.loading,a=l.province,t=l.city;return{province:a,city:t,loading:s.models.accountAndsettings}})(G),W=r(59236),O=r.n(W),j=function(l){var s=l.value,a=l.onChange,t=["",""];return s&&(t=s.split("-")),e.createElement(e.Fragment,null,e.createElement(Z.Z,{className:O().area_code,value:t[0],onChange:function(i){a&&a("".concat(i.target.value,"-").concat(t[1]))}}),e.createElement(Z.Z,{className:O().phone_number,onChange:function(i){a&&a("".concat(t[0],"-").concat(i.target.value))},value:t[1]}))},x=j,L=r(70242),M=r.n(L),$=C.Z.Option,R=function(l){var s=l.avatar;return e.createElement(e.Fragment,null,e.createElement("div",{className:M().avatar_title},e.createElement(n._H,{id:"accountandsettings.basic.avatar",defaultMessage:"Avatar"})),e.createElement("div",{className:M().avatar},e.createElement("img",{src:s,alt:"avatar"})),e.createElement(H.Z,{showUploadList:!1},e.createElement("div",{className:M().button_view},e.createElement(N.Z,null,e.createElement(D.Z,null),e.createElement(n._H,{id:"accountandsettings.basic.change-avatar",defaultMessage:"Change avatar"})))))},T=function(l,s,a){var t=s.province,c=s.city;t.key||a("Please input your province!"),c.key||a("Please input your city!"),a()},J=function(l,s,a){var t=s.split("-");t[0]||a("Please input your area code!"),t[1]||a("Please input your phone number!"),a()},X=function(u){(0,E.Z)(s,u);var l=(0,w.Z)(s);function s(){var a;(0,h.Z)(this,s);for(var t=arguments.length,c=new Array(t),i=0;i<t;i++)c[i]=arguments[i];return a=l.call.apply(l,[this].concat(c)),a.view=void 0,a.getViewDom=function(o){a.view=o},a.handleFinish=function(){U.default.success((0,n.wv)({id:"accountandsettings.basic.update.success"}))},a}return(0,y.Z)(s,[{key:"getAvatarURL",value:function(){var t=this.props.currentUser;if(t){if(t.avatar)return t.avatar;var c="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png";return c}return""}},{key:"render",value:function(){var t=this.props.currentUser;return e.createElement("div",{className:M().baseView,ref:this.getViewDom},e.createElement("div",{className:M().left},e.createElement(v.Z,{layout:"vertical",onFinish:this.handleFinish,initialValues:t,hideRequiredMark:!0},e.createElement(v.Z.Item,{name:"email",label:(0,n.wv)({id:"accountandsettings.basic.email"}),rules:[{required:!0,message:(0,n.wv)({id:"accountandsettings.basic.email-message"},{})}]},e.createElement(Z.Z,null)),e.createElement(v.Z.Item,{name:"name",label:(0,n.wv)({id:"accountandsettings.basic.nickname"}),rules:[{required:!0,message:(0,n.wv)({id:"accountandsettings.basic.nickname-message"},{})}]},e.createElement(Z.Z,null)),e.createElement(v.Z.Item,{name:"profile",label:(0,n.wv)({id:"accountandsettings.basic.profile"}),rules:[{required:!0,message:(0,n.wv)({id:"accountandsettings.basic.profile-message"},{})}]},e.createElement(Z.Z.TextArea,{placeholder:(0,n.wv)({id:"accountandsettings.basic.profile-placeholder"}),rows:4})),e.createElement(v.Z.Item,{name:"country",label:(0,n.wv)({id:"accountandsettings.basic.country"}),rules:[{required:!0,message:(0,n.wv)({id:"accountandsettings.basic.country-message"},{})}]},e.createElement(C.Z,{style:{maxWidth:220}},e.createElement($,{value:"China"},"\u4E2D\u56FD"))),e.createElement(v.Z.Item,{name:"geographic",label:(0,n.wv)({id:"accountandsettings.basic.geographic"}),rules:[{required:!0,message:(0,n.wv)({id:"accountandsettings.basic.geographic-message"},{})},{validator:T}]},e.createElement(K,null)),e.createElement(v.Z.Item,{name:"address",label:(0,n.wv)({id:"accountandsettings.basic.address"}),rules:[{required:!0,message:(0,n.wv)({id:"accountandsettings.basic.address-message"},{})}]},e.createElement(Z.Z,null)),e.createElement(v.Z.Item,{name:"phone",label:(0,n.wv)({id:"accountandsettings.basic.phone"}),rules:[{required:!0,message:(0,n.wv)({id:"accountandsettings.basic.phone-message"},{})},{validator:J}]},e.createElement(x,null)),e.createElement(v.Z.Item,null,e.createElement(N.Z,{htmlType:"submit",type:"primary"},e.createElement(n._H,{id:"accountandsettings.basic.update",defaultMessage:"Update Information"}))))),e.createElement("div",{className:M().right},e.createElement(R,{avatar:this.getAvatarURL()})))}}]),s}(e.Component),Q=(0,n.$j)(function(u){var l=u.accountAndsettings;return{currentUser:l.currentUser}})(X),we=r(66518),g=r(95322),Y=r(98522),k=r(94506),q=r(73566),_=function(u){(0,E.Z)(s,u);var l=(0,w.Z)(s);function s(){var a;(0,h.Z)(this,s);for(var t=arguments.length,c=new Array(t),i=0;i<t;i++)c[i]=arguments[i];return a=l.call.apply(l,[this].concat(c)),a.getData=function(){return[{title:(0,n.wv)({id:"accountandsettings.binding.taobao"},{}),description:(0,n.wv)({id:"accountandsettings.binding.taobao-description"},{}),actions:[e.createElement("a",{key:"Bind"},e.createElement(n._H,{id:"accountandsettings.binding.bind",defaultMessage:"Bind"}))],avatar:e.createElement(Y.Z,{className:"taobao"})},{title:(0,n.wv)({id:"accountandsettings.binding.alipay"},{}),description:(0,n.wv)({id:"accountandsettings.binding.alipay-description"},{}),actions:[e.createElement("a",{key:"Bind"},e.createElement(n._H,{id:"accountandsettings.binding.bind",defaultMessage:"Bind"}))],avatar:e.createElement(k.Z,{className:"alipay"})},{title:(0,n.wv)({id:"accountandsettings.binding.dingding"},{}),description:(0,n.wv)({id:"accountandsettings.binding.dingding-description"},{}),actions:[e.createElement("a",{key:"Bind"},e.createElement(n._H,{id:"accountandsettings.binding.bind",defaultMessage:"Bind"}))],avatar:e.createElement(q.Z,{className:"dingding"})}]},a}return(0,y.Z)(s,[{key:"render",value:function(){return e.createElement(e.Fragment,null,e.createElement(g.ZP,{itemLayout:"horizontal",dataSource:this.getData(),renderItem:function(c){return e.createElement(g.ZP.Item,{actions:c.actions},e.createElement(g.ZP.Item.Meta,{avatar:c.avatar,title:c.title,description:c.description}))}}))}}]),s}(e.Component),ee=_,Ze=r(59560),te=r(47153),ne=function(u){(0,E.Z)(s,u);var l=(0,w.Z)(s);function s(){var a;(0,h.Z)(this,s);for(var t=arguments.length,c=new Array(t),i=0;i<t;i++)c[i]=arguments[i];return a=l.call.apply(l,[this].concat(c)),a.getData=function(){var o=e.createElement(te.Z,{checkedChildren:(0,n.wv)({id:"accountandsettings.settings.open"}),unCheckedChildren:(0,n.wv)({id:"accountandsettings.settings.close"}),defaultChecked:!0});return[{title:(0,n.wv)({id:"accountandsettings.notification.password"},{}),description:(0,n.wv)({id:"accountandsettings.notification.password-description"},{}),actions:[o]},{title:(0,n.wv)({id:"accountandsettings.notification.messages"},{}),description:(0,n.wv)({id:"accountandsettings.notification.messages-description"},{}),actions:[o]},{title:(0,n.wv)({id:"accountandsettings.notification.todo"},{}),description:(0,n.wv)({id:"accountandsettings.notification.todo-description"},{}),actions:[o]}]},a}return(0,y.Z)(s,[{key:"render",value:function(){var t=this.getData();return e.createElement(e.Fragment,null,e.createElement(g.ZP,{itemLayout:"horizontal",dataSource:t,renderItem:function(i){return e.createElement(g.ZP.Item,{actions:i.actions},e.createElement(g.ZP.Item.Meta,{title:i.title,description:i.description}))}}))}}]),s}(e.Component),ae=ne,ie={strong:e.createElement("span",{className:"strong"},e.createElement(n._H,{id:"accountandsettings.security.strong",defaultMessage:"Strong"})),medium:e.createElement("span",{className:"medium"},e.createElement(n._H,{id:"accountandsettings.security.medium",defaultMessage:"Medium"})),weak:e.createElement("span",{className:"weak"},e.createElement(n._H,{id:"accountandsettings.security.weak",defaultMessage:"Weak"}),"Weak")},se=function(u){(0,E.Z)(s,u);var l=(0,w.Z)(s);function s(){var a;(0,h.Z)(this,s);for(var t=arguments.length,c=new Array(t),i=0;i<t;i++)c[i]=arguments[i];return a=l.call.apply(l,[this].concat(c)),a.getData=function(){return[{title:(0,n.wv)({id:"accountandsettings.security.password"},{}),description:e.createElement(e.Fragment,null,(0,n.wv)({id:"accountandsettings.security.password-description"}),"\uFF1A",ie.strong),actions:[e.createElement("a",{key:"Modify"},e.createElement(n._H,{id:"accountandsettings.security.modify",defaultMessage:"Modify"}))]},{title:(0,n.wv)({id:"accountandsettings.security.phone"},{}),description:"".concat((0,n.wv)({id:"accountandsettings.security.phone-description"},{}),"\uFF1A138****8293"),actions:[e.createElement("a",{key:"Modify"},e.createElement(n._H,{id:"accountandsettings.security.modify",defaultMessage:"Modify"}))]},{title:(0,n.wv)({id:"accountandsettings.security.question"},{}),description:(0,n.wv)({id:"accountandsettings.security.question-description"},{}),actions:[e.createElement("a",{key:"Set"},e.createElement(n._H,{id:"accountandsettings.security.set",defaultMessage:"Set"}))]},{title:(0,n.wv)({id:"accountandsettings.security.email"},{}),description:"".concat((0,n.wv)({id:"accountandsettings.security.email-description"},{}),"\uFF1Aant***sign.com"),actions:[e.createElement("a",{key:"Modify"},e.createElement(n._H,{id:"accountandsettings.security.modify",defaultMessage:"Modify"}))]},{title:(0,n.wv)({id:"accountandsettings.security.mfa"},{}),description:(0,n.wv)({id:"accountandsettings.security.mfa-description"},{}),actions:[e.createElement("a",{key:"bind"},e.createElement(n._H,{id:"accountandsettings.security.bind",defaultMessage:"Bind"}))]}]},a}return(0,y.Z)(s,[{key:"render",value:function(){var t=this.getData();return e.createElement(e.Fragment,null,e.createElement(g.ZP,{itemLayout:"horizontal",dataSource:t,renderItem:function(i){return e.createElement(g.ZP.Item,{actions:i.actions},e.createElement(g.ZP.Item.Meta,{title:i.title,description:i.description}))}}))}}]),s}(e.Component),re=se,ce=r(11619),I=r.n(ce),oe=P.Z.Item,le=function(u){(0,E.Z)(s,u);var l=(0,w.Z)(s);function s(a){var t;(0,h.Z)(this,s),t=l.call(this,a),t.main=void 0,t.getMenu=function(){var i=t.state.menuMap;return Object.keys(i).map(function(o){return e.createElement(oe,{key:o},i[o])})},t.getRightTitle=function(){var i=t.state,o=i.selectKey,d=i.menuMap;return d[o]},t.selectKey=function(i){t.setState({selectKey:i})},t.resize=function(){!t.main||requestAnimationFrame(function(){if(!!t.main){var i="inline",o=t.main.offsetWidth;t.main.offsetWidth<641&&o>400&&(i="horizontal"),window.innerWidth<768&&o>400&&(i="horizontal"),t.setState({mode:i})}})},t.renderChildren=function(){var i=t.state.selectKey;switch(i){case"base":return e.createElement(Q,null);case"security":return e.createElement(re,null);case"binding":return e.createElement(ee,null);case"notification":return e.createElement(ae,null);default:break}return null};var c={base:e.createElement(n._H,{id:"accountandsettings.menuMap.basic",defaultMessage:"Basic Settings"}),security:e.createElement(n._H,{id:"accountandsettings.menuMap.security",defaultMessage:"Security Settings"}),binding:e.createElement(n._H,{id:"accountandsettings.menuMap.binding",defaultMessage:"Account Binding"}),notification:e.createElement(n._H,{id:"accountandsettings.menuMap.notification",defaultMessage:"New Message Notification"})};return t.state={mode:"inline",menuMap:c,selectKey:"base"},t}return(0,y.Z)(s,[{key:"componentDidMount",value:function(){var t=this.props.dispatch;t({type:"accountAndsettings/fetchCurrent"}),window.addEventListener("resize",this.resize),this.resize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var t=this,c=this.props.currentUser;if(!c.userid)return"";var i=this.state,o=i.mode,d=i.selectKey;return e.createElement(F.Z,null,e.createElement("div",{className:I().main,ref:function(m){m&&(t.main=m)}},e.createElement("div",{className:I().leftMenu},e.createElement(P.Z,{mode:o,selectedKeys:[d],onClick:function(m){var de=m.key;return t.selectKey(de)}},this.getMenu())),e.createElement("div",{className:I().right},e.createElement("div",{className:I().title},this.getRightTitle()),this.renderChildren())))}}]),s}(e.Component),ue=(0,n.$j)(function(u){var l=u.accountAndsettings;return{currentUser:l.currentUser}})(le)}}]);
