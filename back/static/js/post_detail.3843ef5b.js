(function(){"use strict";var t={6966:function(t,e,o){var n=o(144),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{id:"inspire"}},[o("MainMenu"),o("v-main",[o("PostDetail")],1),o("MainFooter")],1)},a=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return o("v-list-item",{key:e.title,attrs:{link:""}},[o("v-list-item-icon",[o("v-icon",[t._v(t._s(e.icon))])],1),o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),o("v-app-bar",{attrs:{app:"","clipped-left":"",color:"indigo",dark:""}},[o("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),o("v-toolbar-title",[t._v("Vue-django")]),o("v-spacer"),o("v-btn",{attrs:{text:"",href:"/"}},[t._v("Home")]),o("v-btn",{attrs:{text:"",href:"/blog/post/list"}},[t._v("Blog")]),o("v-btn",{attrs:{text:"",href:"/admin"}},[t._v("Admin")]),o("v-btn",{attrs:{text:""}},[t._v("/")]),o("v-btn",{attrs:{text:"",href:"/post_list.html"}},[t._v("PostList")]),o("v-btn",{attrs:{text:"",href:"/post_detail.html"}},[t._v("PostDetail")]),o("v-spacer"),o("v-menu",{attrs:{left:"",bottom:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({attrs:{text:""}},"v-btn",r,!1),n),[o("v-icon",[t._v("mdi-account")]),t._v(" Anonymous "),o("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[o("v-list",[o("v-list-item",{on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[o("v-list-item-title",[t._v("Login")])],1),o("v-list-item",[o("v-list-item-title",[t._v("SignUp")])],1),o("v-list-item",[o("v-list-item-title",[t._v("LogOut")])],1),o("v-list-item",[o("v-list-item-title",[t._v("ChangePassword")])],1)],1)],1)],1),o("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",{staticClass:"elevation-12"},[o("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[o("v-toolbar-title",[t._v("Login Form")])],1),o("v-card-text",[o("v-form",[o("v-text-field",{attrs:{label:"username",name:"username","prepend-icon":"mdi-account",type:"text"}}),o("v-text-field",{attrs:{id:"password",label:"password",name:"password","prepend-icon":"mdi-lock",type:"password"}})],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"primary"}},[t._v(" login ")]),o("v-btn",{attrs:{text:"",color:"grey"}},[t._v(" cancel ")])],1)],1)],1)],1)},s=[],l={data:()=>({drawer:null,dialog:!1,items:[{title:"Dashboard",icon:"mdi-view-dashboard"},{title:"Photos",icon:"mdi-image"},{title:"About",icon:"mdi-help-box"}]})},c=l,v=o(1001),u=o(3453),p=o.n(u),d=o(8320),f=o(5206),m=o(680),g=o(3237),h=o(7118),_=o(4497),b=o(6232),y=o(6428),w=o(6816),Z=o(7620),x=o(2059),C=o(459),V=o(6768),T=o(3347),P=o(9762),k=o(5978),E=o(6656),O=o(7921),S=(0,v.Z)(c,i,s,!1,null,null,null),D=S.exports;p()(S,{VAppBar:d.Z,VAppBarNavIcon:f.Z,VBtn:m.Z,VCard:g.Z,VCardActions:h.h7,VCardText:h.ZB,VDialog:_.Z,VForm:b.Z,VIcon:y.Z,VList:w.Z,VListItem:Z.Z,VListItemContent:x.km,VListItemIcon:C.Z,VListItemTitle:x.V9,VMenu:V.Z,VNavigationDrawer:T.Z,VSpacer:P.Z,VTextField:k.Z,VToolbar:E.Z,VToolbarTitle:O.qW});var A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-footer",{attrs:{app:""}},[o("span",[t._v("© 2022 심심해서 해보는 vue-django ")])])},L=[],j=o(899),M={},I=(0,v.Z)(M,A,L,!1,null,null,null),R=I.exports;p()(I,{VFooter:j.Z});var F=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"grey lighten-5"},[o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{cols:"12",lg:"10"}},[o("h1",[t._v(t._s(t.post.title))]),o("p",[t._v(t._s(t.post.modify_at)+", written by "+t._s(t.post.owner))])])],1),o("v-row",{attrs:{align:"start",justify:"center"}},[o("v-col",{attrs:{cols:"12",sm:"8",lg:"7"}},[o("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[o("p",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.post.content))]),o("div",[o("strong",[t._v("TAGS:")]),t._l(t.post.tags,(function(e,n){return o("v-chip",{key:n,staticClass:"ma-2 my-hover",attrs:{color:"success",outlined:""},on:{click:function(o){return t.serverPage(e)}}},[t._v(t._s(e))])}))],2)])],1),o("v-col",{attrs:{cols:"12",sm:"4",lg:"3"}},[o("v-card",{staticClass:"pa-2 mb-5",attrs:{tile:""}},[o("p",[t._v("prev post")]),t.post.prev?o("h2",{staticClass:"my-hover",on:{click:function(e){return t.fetchPostDetail(t.post.prev.id)}}},[t._v(" "+t._s(t.post.prev.title)+" ")]):t._e()]),o("v-card",{staticClass:"pa-2 mb-5",attrs:{tile:""}},[o("p",[t._v("next post")]),t.post.next?o("h2",{staticClass:"my-hover",on:{click:function(e){return t.fetchPostDetail(t.post.next.id)}}},[t._v(" "+t._s(t.post.next.title)+" ")]):t._e()]),o("v-card",{staticClass:"pa-2 mb-5",attrs:{tile:""}},[o("p",[t._v("tag cloud")]),t._l(t.tagCloud,(function(e,n){return o("v-chip",{key:n,staticClass:"ma-2 my-hover",attrs:{color:e.color,"text-color":"white"},on:{click:function(o){return t.serverPage(e.name)}}},[o("v-avatar",{staticClass:"tag.color + ' darken-4'",attrs:{left:""}},[t._v(" "+t._s(e.count)+" ")]),t._v(" "+t._s(e.name)+" ")],1)}))],2)],1)],1)],1)},G=[],$=o(9669),B=o.n($),N={name:"HelloWorld",data:()=>({post:{},tagCloud:[]}),created(){console.log("created()");const t=location.pathname.split("/")[3];this.fetchPostDetail(t),this.fetchTagCloud()},methods:{fetchPostDetail(t){console.log("fetchPostDetail"),B().get(`/api/post/${t}/`).then((t=>{console.log("POST DETAIL GET RES",t),this.post=t.data})).catch((t=>{console.log("POST DETAIL GET ERR.RESPONSE",t),alert(t.response.status+" "+t.response.statusText)}))},fetchTagCloud(){console.log("fetchTagCloud"),B().get("/api/tag/cloud/").then((t=>{console.log("TAG CLOUD GET RES",t),this.tagCloud=t.data,this.tagCloud.forEach((t=>{3===t.weight?t.color="green":2===t.weight?t.color="blue-grey":1===t.weight&&(t.color="grey")}))})).catch((t=>{console.log("TAG CLOUD GET ERR.RESPONSE",t),alert(t.response.status+" "+t.response.statusText)}))},serverPage(t){console.log("serverPage()"),location.href=`/blog/post/list/?tagname=${t}`}}},U=N,H=o(6370),W=o(5424),q=o(2102),z=o(9846),J=o(2877),K=(0,v.Z)(U,F,G,!1,null,"3ce6164e",null),Q=K.exports;p()(K,{VAvatar:H.Z,VCard:g.Z,VChip:W.Z,VCol:q.Z,VContainer:z.Z,VRow:J.Z});var X={components:{PostDetail:Q,MainMenu:D,MainFooter:R},data:()=>({})},Y=X,tt=o(7524),et=o(7877),ot=(0,v.Z)(Y,r,a,!1,null,null,null),nt=ot.exports;p()(ot,{VApp:tt.Z,VMain:et.Z});var rt=o(9132);n.Z.use(rt.Z);var at=new rt.Z({});n.Z.config.productionTip=!1,new n.Z({vuetify:at,render:t=>t(nt)}).$mount("#app")}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,n,r,a){if(!n){var i=1/0;for(v=0;v<t.length;v++){n=t[v][0],r=t[v][1],a=t[v][2];for(var s=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(s=!1,a<i&&(i=a));if(s){t.splice(v--,1);var c=r();void 0!==c&&(e=c)}}return e}a=a||0;for(var v=t.length;v>0&&t[v-1][2]>a;v--)t[v]=t[v-1];t[v]=[n,r,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={33:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,a,i=n[0],s=n[1],l=n[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(l)var v=l(o)}for(e&&e(n);c<i.length;c++)a=i[c],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(v)},n=self["webpackChunkfront"]=self["webpackChunkfront"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(6966)}));n=o.O(n)})();
//# sourceMappingURL=post_detail.3843ef5b.js.map