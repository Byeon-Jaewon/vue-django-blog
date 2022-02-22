(function(){"use strict";var t={9754:function(t,n,e){e(6992),e(8674),e(9601),e(7727);var r=e(144),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",{attrs:{id:"inspire"}},[e("MainMenu"),e("v-main",[e("PostDetail")],1),e("MainFooter")],1)},o=[],a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(n){t.drawer=n},expression:"drawer"}},[e("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(n){return e("v-list-item",{key:n.title,attrs:{link:""}},[e("v-list-item-icon",[e("v-icon",[t._v(t._s(n.icon))])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(n.title))])],1)],1)})),1)],1),e("v-app-bar",{attrs:{app:"","clipped-left":"",color:"indigo",dark:""}},[e("v-app-bar-nav-icon",{on:{click:function(n){t.drawer=!t.drawer}}}),e("v-toolbar-title",[t._v("Vue-django")]),e("v-spacer"),e("v-btn",{attrs:{text:"",href:"/"}},[t._v("Home")]),e("v-btn",{attrs:{text:"",href:"/blog/post/list"}},[t._v("Blog")]),e("v-btn",{attrs:{text:"",href:"/admin"}},[t._v("Admin")]),e("v-btn",{attrs:{text:""}},[t._v("/")]),e("v-btn",{attrs:{text:"",href:"/post_list.html"}},[t._v("PostList")]),e("v-btn",{attrs:{text:"",href:"/post_detail.html"}},[t._v("PostDetail")]),e("v-spacer"),e("v-menu",{attrs:{left:"",bottom:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,i=n.attrs;return[e("v-btn",t._g(t._b({attrs:{text:""}},"v-btn",i,!1),r),[e("v-icon",[t._v("mdi-account")]),t._v(" Anonymous "),e("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[e("v-list",[e("v-list-item",[e("v-list-item-title",[t._v("Login")])],1),e("v-list-item",[e("v-list-item-title",[t._v("SignUp")])],1),e("v-list-item",[e("v-list-item-title",[t._v("LogOut")])],1),e("v-list-item",[e("v-list-item-title",[t._v("ChangePassword")])],1)],1)],1)],1)],1)},s=[],l={data:function(){return{drawer:null,items:[{title:"Dashboard",icon:"mdi-view-dashboard"},{title:"Photos",icon:"mdi-image"},{title:"About",icon:"mdi-help-box"}]}}},c=l,v=e(1001),u=e(3453),f=e.n(u),p=e(8320),d=e(5206),m=e(680),_=e(6428),b=e(6816),h=e(7620),g=e(2059),Z=e(459),w=e(6768),y=e(3347),V=e(9762),x=e(7921),C=(0,v.Z)(c,a,s,!1,null,null,null),j=C.exports;f()(C,{VAppBar:p.Z,VAppBarNavIcon:d.Z,VBtn:m.Z,VIcon:_.Z,VList:b.Z,VListItem:h.Z,VListItemContent:g.km,VListItemIcon:Z.Z,VListItemTitle:g.V9,VMenu:w.Z,VNavigationDrawer:y.Z,VSpacer:V.Z,VToolbarTitle:x.qW});var O=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-footer",{attrs:{app:""}},[e("span",[t._v("© 2022 심심해서 해보는 vue-django ")])])},k=[],M=e(899),P={},S=(0,v.Z)(P,O,k,!1,null,null,null),T=S.exports;f()(S,{VFooter:M.Z});var A=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{staticClass:"grey lighten-5"},[e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"12",lg:"10"}},[e("h1",[t._v("post title")]),e("p",[t._v("2022-01-01, written by author")])])],1),e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"12",sm:"8",lg:"7"}},[e("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[e("p",[t._v("asdsadasd"),e("br"),t._v("brbfdffsdf "),e("br"),e("br"),e("br"),e("br"),e("br"),t._v("dffsdsf")]),e("div",[e("strong",[t._v("TAGS:")]),e("v-chip",{staticClass:"ma-2",attrs:{color:"success",outlined:""}},[t._v(" python ")]),e("v-chip",{staticClass:"ma-2",attrs:{color:"success",outlined:""}},[t._v(" django ")])],1)])],1),e("v-col",{attrs:{cols:"12",sm:"4",lg:"3"}},[e("v-card",{staticClass:"pa-2 mb-5",attrs:{tile:""}},[e("p",[t._v("prev post")]),e("h2",[t._v("previous post title")])]),e("v-card",{staticClass:"pa-2 mb-5",attrs:{tile:""}},[e("p",[t._v("next post")]),e("h2",[t._v("next post title")])]),e("v-card",{staticClass:"pa-2 mb-5",attrs:{tile:""}},[e("p",[t._v("tag cloud")]),e("v-chip",{staticClass:"ma-2",attrs:{color:"indigo","text-color":"white"}},[e("v-avatar",{attrs:{left:""}},[e("v-icon",[t._v("mdi-account-circle")])],1),t._v(" python ")],1),e("v-chip",{staticClass:"ma-2",attrs:{color:"indigo","text-color":"white"}},[e("v-avatar",{attrs:{left:""}},[e("v-icon",[t._v("mdi-account-circle")])],1),t._v(" django ")],1)],1)],1)],1)],1)},I=[],L={name:"HelloWorld",data:function(){return{}}},D=L,E=e(6370),$=e(3237),B=e(5424),F=e(2102),H=e(9846),N=e(2877),W=(0,v.Z)(D,A,I,!1,null,null,null),q=W.exports;f()(W,{VAvatar:E.Z,VCard:$.Z,VChip:B.Z,VCol:F.Z,VContainer:H.Z,VIcon:_.Z,VRow:N.Z});var G={components:{PostDetail:q,MainMenu:j,MainFooter:T},data:function(){return{}}},R=G,U=e(7524),z=e(7877),J=(0,v.Z)(R,i,o,!1,null,null,null),K=J.exports;f()(J,{VApp:U.Z,VMain:z.Z});var Q=e(9132);r.Z.use(Q.Z);var X=new Q.Z({});r.Z.config.productionTip=!1,new r.Z({vuetify:X,render:function(t){return t(K)}}).$mount("#app")}},n={};function e(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={exports:{}};return t[r](o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(n,r,i,o){if(!r){var a=1/0;for(v=0;v<t.length;v++){r=t[v][0],i=t[v][1],o=t[v][2];for(var s=!0,l=0;l<r.length;l++)(!1&o||a>=o)&&Object.keys(e.O).every((function(t){return e.O[t](r[l])}))?r.splice(l--,1):(s=!1,o<a&&(a=o));if(s){t.splice(v--,1);var c=i();void 0!==c&&(n=c)}}return n}o=o||0;for(var v=t.length;v>0&&t[v-1][2]>o;v--)t[v]=t[v-1];t[v]=[r,i,o]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.j=33}(),function(){var t={33:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var i,o,a=r[0],s=r[1],l=r[2],c=0;if(a.some((function(n){return 0!==t[n]}))){for(i in s)e.o(s,i)&&(e.m[i]=s[i]);if(l)var v=l(e)}for(n&&n(r);c<a.length;c++)o=a[c],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(v)},r=self["webpackChunkfront"]=self["webpackChunkfront"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(9754)}));r=e.O(r)})();
//# sourceMappingURL=post_detail-legacy.b80b3a88.js.map