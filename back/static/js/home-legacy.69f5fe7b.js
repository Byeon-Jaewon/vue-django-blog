(function(){"use strict";var t={6731:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var i=n(144),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("MainMenu"),n("v-main",[n("helloWorld")],1),n("MainFooter")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{link:""}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),n("v-app-bar",{attrs:{app:"","clipped-left":"",color:"indigo",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v("Vue-django")]),n("v-spacer"),n("v-btn",{attrs:{text:"",href:"/"}},[t._v("Home")]),n("v-btn",{attrs:{text:"",href:"/blog/post/list"}},[t._v("Blog")]),n("v-btn",{attrs:{text:"",href:"/admin"}},[t._v("Admin")]),n("v-btn",{attrs:{text:""}},[t._v("/")]),n("v-btn",{attrs:{text:"",href:"/post_list.html"}},[t._v("PostList")]),n("v-btn",{attrs:{text:"",href:"/post_detail.html"}},[t._v("PostDetail")]),n("v-spacer"),n("v-menu",{attrs:{left:"",bottom:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{text:""}},"v-btn",r,!1),i),[n("v-icon",[t._v("mdi-account")]),t._v(" Anonymous "),n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[n("v-list",[n("v-list-item",[n("v-list-item-title",[t._v("Login")])],1),n("v-list-item",[n("v-list-item-title",[t._v("SignUp")])],1),n("v-list-item",[n("v-list-item-title",[t._v("LogOut")])],1),n("v-list-item",[n("v-list-item-title",[t._v("ChangePassword")])],1)],1)],1)],1)],1)},a=[],l={data:function(){return{drawer:null,items:[{title:"Dashboard",icon:"mdi-view-dashboard"},{title:"Photos",icon:"mdi-image"},{title:"About",icon:"mdi-help-box"}]}}},u=l,c=n(1001),v=n(3453),f=n.n(v),m=n(8320),h=n(5206),p=n(680),d=n(6428),b=n(6816),y=n(7620),_=n(2059),g=n(459),x=n(6768),w=n(3347),j=n(9762),Z=n(7921),V=(0,c.Z)(u,s,a,!1,null,null,null),k=V.exports;f()(V,{VAppBar:m.Z,VAppBarNavIcon:h.Z,VBtn:p.Z,VIcon:d.Z,VList:b.Z,VListItem:y.Z,VListItemContent:_.km,VListItemIcon:g.Z,VListItemTitle:_.V9,VMenu:x.Z,VNavigationDrawer:w.Z,VSpacer:j.Z,VToolbarTitle:Z.qW});var C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{app:""}},[n("span",[t._v("© 2022 심심해서 해보는 vue-django ")])])},O=[],M=n(899),L={},I=(0,c.Z)(L,C,O,!1,null,null,null),S=I.exports;f()(I,{VFooter:M.Z});var T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",{staticClass:"text-center"},[i("v-col",{attrs:{cols:"12"}},[i("v-img",{staticClass:"my-3",attrs:{src:n(9574),contain:"",height:"200"}})],1),i("v-col",{staticClass:"mb-4"},[i("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify (Home) ")]),i("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),i("br"),t._v("please join our online "),i("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),i("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[i("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),i("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,n){return i("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),i("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[i("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),i("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,n){return i("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),i("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[i("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),i("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,n){return i("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},A=[],P={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},E=P,F=n(2102),W=n(9846),D=n(7047),$=n(2877),q=(0,c.Z)(E,T,A,!1,null,null,null),B=q.exports;f()(q,{VCol:F.Z,VContainer:W.Z,VImg:D.Z,VRow:$.Z});var H={components:{HelloWorld:B,MainMenu:k,MainFooter:S},data:function(){return{}}},N=H,Q=n(7524),R=n(7877),U=(0,c.Z)(N,r,o,!1,null,null,null),z=U.exports;f()(U,{VApp:Q.Z,VMain:R.Z});var G=n(9132);i.Z.use(G.Z);var J=new G.Z({});i.Z.config.productionTip=!1,new i.Z({vuetify:J,render:function(t){return t(z)}}).$mount("#app")},9574:function(t,e,n){t.exports=n.p+"static/img/logo.4d6033c9.svg"}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,o){if(!i){var s=1/0;for(c=0;c<t.length;c++){i=t[c][0],r=t[c][1],o=t[c][2];for(var a=!0,l=0;l<i.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(a=!1,o<s&&(s=o));if(a){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[i,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.j=177}(),function(){n.p="/"}(),function(){var t={177:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,o,s=i[0],a=i[1],l=i[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(l)var c=l(n)}for(e&&e(i);u<s.length;u++)o=s[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},i=self["webpackChunkfront"]=self["webpackChunkfront"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(6731)}));i=n.O(i)})();
//# sourceMappingURL=home-legacy.69f5fe7b.js.map