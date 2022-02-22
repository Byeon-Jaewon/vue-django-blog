(function(){"use strict";var t={3801:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var i=n(144),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{link:""}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),n("v-app-bar",{attrs:{app:"","clipped-left":"",color:"indigo"}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v("Application")])],1),n("v-main",[n("PostDetail")],1),n("v-footer",{attrs:{app:""}},[n("span",[t._v("© 2022 ")])])],1)},o=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",{staticClass:"text-center"},[i("v-col",{attrs:{cols:"12"}},[i("v-img",{staticClass:"my-3",attrs:{src:n(9574),contain:"",height:"200"}})],1),i("v-col",{staticClass:"mb-4"},[i("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify (PostDetail) ")]),i("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),i("br"),t._v("please join our online "),i("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),i("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[i("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),i("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,n){return i("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),i("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[i("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),i("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,n){return i("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),i("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[i("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),i("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,n){return i("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},a=[],l={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},c=l,u=n(1001),f=n(3453),v=n.n(f),p=n(2102),h=n(247),m=n(7047),d=n(2877),y=(0,u.Z)(c,s,a,!1,null,null,null),b=y.exports;v()(y,{VCol:p.Z,VContainer:h.Z,VImg:m.Z,VRow:d.Z});var g={components:{PostDetail:b},data:function(){return{drawer:null,items:[{title:"Dashboard",icon:"mdi-view-dashboard"},{title:"Photos",icon:"mdi-image"},{title:"About",icon:"mdi-help-box"}]}}},w=g,_=n(7524),x=n(8320),j=n(8090),k=n(899),C=n(6428),V=n(6816),Z=n(7620),O=n(5981),I=n(459),T=n(7877),L=n(3120),P=n(7921),A=(0,u.Z)(w,r,o,!1,null,null,null),D=A.exports;v()(A,{VApp:_.Z,VAppBar:x.Z,VAppBarNavIcon:j.Z,VFooter:k.Z,VIcon:C.Z,VList:V.Z,VListItem:Z.Z,VListItemContent:O.km,VListItemIcon:I.Z,VListItemTitle:O.V9,VMain:T.Z,VNavigationDrawer:L.Z,VToolbarTitle:P.qW});var S=n(5591);i.Z.use(S.Z);var E=new S.Z({});i.Z.config.productionTip=!1,new i.Z({vuetify:E,render:function(t){return t(D)}}).$mount("#app")},9574:function(t,e,n){t.exports=n.p+"static/img/logo.4d6033c9.svg"}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,o){if(!i){var s=1/0;for(u=0;u<t.length;u++){i=t[u][0],r=t[u][1],o=t[u][2];for(var a=!0,l=0;l<i.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(a=!1,o<s&&(s=o));if(a){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[i,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={33:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,o,s=i[0],a=i[1],l=i[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(l)var u=l(n)}for(e&&e(i);c<s.length;c++)o=s[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},i=self["webpackChunkfront"]=self["webpackChunkfront"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(3801)}));i=n.O(i)})();
//# sourceMappingURL=post_detail-legacy.e8e9dbf0.js.map