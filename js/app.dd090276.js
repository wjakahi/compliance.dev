(function(t){function e(e){for(var r,i,o=e[0],s=e[1],u=e[2],l=0,p=[];l<o.length;l++)i=o[l],a[i]&&p.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(p.length)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,i=1;i<n.length;i++){var o=n[i];0!==a[o]&&(r=!1)}r&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},a={app:0},c=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"28f21103"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={about:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise(function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"3d85339c"}[t]+".css",i=s.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var o=a[c],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===r||u===i))return e()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){o=l[c],u=o.getAttribute("data-href");if(u===r||u===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||i,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.request=r,n(a)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){i[t]=0}));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise(function(e,n){r=a[t]=[e,n]});e.push(r[2]=c);var u,l=document.getElementsByTagName("head")[0],p=document.createElement("script");p.charset="utf-8",p.timeout=120,s.nc&&p.setAttribute("nonce",s.nc),p.src=o(t),u=function(e){p.onerror=p.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+r+": "+i+")");c.type=r,c.request=i,n[1](c)}a[t]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:p})},12e4);p.onerror=p.onload=u,l.appendChild(p)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/chs.compliance.client/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3f39":function(t,e,n){"use strict";var r=n("eb81"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf"),n("d1e7");var r=n("2b0e"),i=n("ce5b"),a=n.n(i);n("bf40");r["default"].use(a.a,{});var c=n("7bb1"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{persistent:"","mini-variant":t.miniVariant,clipped:t.clipped,"enable-resize-watcher":"",fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.items,function(e,r){return n("v-list-tile",{key:r,attrs:{value:"true"},on:{click:function(n){t.routerSelection(e.link)}}},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],1),n("v-toolbar",{attrs:{app:"","clipped-left":t.clipped}},[n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),n("v-spacer"),n("v-toolbar-title",{domProps:{textContent:t._s(t.currentUser.fullname)}})],1),n("v-content",[n("router-view")],1),n("v-navigation-drawer",{attrs:{temporary:"",right:t.right,fixed:"",app:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[n("v-list",[n("v-list-tile",{on:{click:function(e){t.right=!t.right}}},[n("v-list-tile-action",[n("v-icon",[t._v("compare_arrows")])],1),n("v-list-tile-title",[t._v("Switch drawer (click me)")])],1)],1)],1),n("v-footer",{attrs:{fixed:t.fixed,app:""}},[n("span",[t._v("© 2017")])])],1)},s=[],u=n("8c4f"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.menus,function(e){return n("v-flex",{key:e.id,attrs:{lg2:"",md3:"",sm4:"",xs6:""}},[n("v-card",{staticClass:"white--text",attrs:{color:"blue-grey darken-2"}},[n("v-card-title",{attrs:{"primary-title":""}},[n("div",{staticClass:"headline"},[t._v(t._s(e.title))]),n("div",[t._v(t._s(e.description))])]),t._l(e.actions,function(e){return n("v-card-actions",{key:e.title},[n("v-btn",{attrs:{flat:"",dark:""},on:{click:function(n){t.routerSelection(e.url)}}},[t._v(t._s(e.title))])],1)})],2)],1)}))],1)},p=[],f=n("a34a"),d=n.n(f),h=n("3040"),m={name:"Home",data:function(){return{menus:[{id:1,title:"Physicians",description:"desc for physician",actions:[{title:"Maintain",url:"physician-administration"}]},{id:2,title:"Audits",description:"desc for audits",actions:[]},{id:3,title:"Reports",description:"desc for reports",actions:[]}]}},created:function(){var t=Object(h["a"])(d.a.mark(function t(){return d.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),methods:{routerSelection:function(t){w.push({name:t})}}},v=m,b=(n("3f39"),n("2877")),g=Object(b["a"])(v,l,p,!1,null,"387c0e78",null);g.options.__file="Home.vue";var T=g.exports;r["default"].use(u["a"]);var w=new u["a"]({mode:"history",base:"/chs.compliance.client/",routes:[{path:"/",name:"home",component:T},{path:"/physician-administration",name:"physician-administration",component:function(){return n.e("about").then(n.bind(null,"6bc2"))}},{path:"/audit-record-selection",name:"audit-record-selection",component:function(){return n.e("about").then(n.bind(null,"a7a9"))}},{path:"*",redirect:"/"}]}),y={name:"App",data:function(){return{clipped:!1,drawer:!0,fixed:!1,items:[{icon:"bubble_chart",title:"Home",link:"home"},{icon:"bubble_chart",title:"Physician Administration",link:"physician-administration"},{icon:"bubble_chart",title:"Start An Audit",link:"audit-record-selection"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"CHSLI App",currentUser:{id:0,username:"XXX",email:"XXX",fullname:"XXX",jwt:""}}},methods:{routerSelection:function(t){w.push({name:t})},setCurrentUser:function(t){this.currentUser=t}},beforeMount:function(){this.setCurrentUser(this.$store.getters.CURRENT_USER),this.$store.dispatch("FETCH_ENTITY"),this.$store.dispatch("FETCH_PRACTICE"),this.$store.dispatch("FETCH_PHYSICIAN")}},_=y,E=Object(b["a"])(_,o,s,!1,null,null,null);E.options.__file="App.vue";var A=E.exports,C=n("2f62"),I={currentUser:{id:1,username:"wjakah01",email:"wade.jakahi@chsli.org",fullname:"Current User",jwt:""}},S={CURRENT_USER:function(t){return t.currentUser}},P={SET_CURRENT_USER:function(t,e){t.currentUser=e}},x={SET_CURRENT_USER:function(t,e){var n=t.commit;n("SET_CURRENT_USER",e)}},k={state:I,getters:S,mutations:P,actions:x},U=n("bc3a"),N=n.n(U),R=n("7dc5"),j={physicians:[]},H={PHYSICIAN:function(t){return t.physicians}},D={SET_PHYSICIAN:function(t,e){t.physicians=e},UPDATE_PHYSICIAN:function(t,e){var n=t.physicians.findIndex(function(t){return t.npi===e.npi});t.physicians[n]=e},NEW_PHYSICIAN:function(t,e){t.physicians.push(e)}},O={FETCH_PHYSICIAN:function(){var t=Object(h["a"])(d.a.mark(function t(e){var n,r;return d.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,N.a.get(R.apiRoot+"/physician");case 2:n=t.sent,r=n.data,e.commit("SET_PHYSICIAN",r);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),UPDATE_PHYSICIAN:function(){var t=Object(h["a"])(d.a.mark(function t(e,n){var r,i;return d.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,N.a.put(R.apiRoot+"/physician/"+n.npi,n);case 3:if(i=t.sent,i.data.success){t.next=6;break}return t.abrupt("return",i.data.message);case 6:return r("UPDATE_PHYSICIAN",n),t.abrupt("return",!0);case 8:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),NEW_PHYSICIAN:function(){var t=Object(h["a"])(d.a.mark(function t(e,n){var r,i;return d.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,N.a.post(R.apiRoot+"/physician",n);case 3:if(i=t.sent,i.data.success){t.next=6;break}return t.abrupt("return",i.data.message);case 6:return r("NEW_PHYSICIAN",n),t.abrupt("return",!0);case 8:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},Y={state:j,getters:H,mutations:D,actions:O},B={audits:[{auditId:1,patientName:"patient 1",unitsAudited:5},{auditId:2,patientName:"patient 2",unitsAudited:7},{auditId:3,patientName:"patient 3",unitsAudited:6}]},F={AUDITS:function(t){return t.audits}},X={SET_AUDITS:function(t,e){t.audits=e},UPDATE_AUDITS:function(t,e){t.audits=e}},M={FETCH_AUDITS:function(){var t=Object(h["a"])(d.a.mark(function t(e){var n,r;return d.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,N.a.get("http://localhost:3000/physicians");case 2:n=t.sent,r=n.data,e.commit("SET_AUDITS",r);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),UPDATE_AUDITS:function(){var t=Object(h["a"])(d.a.mark(function t(e,n){var r,i;return d.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,i={auditId:n.auditId,unitsAudited:n.unitsAudited},r("UPDATE_AUDITS",i),t.abrupt("return",!0);case 4:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},$={state:B,getters:F,mutations:X,actions:M},L={entity:[]},q={ENTITY:function(t){return t.entity}},W={SET_ENTITY:function(t,e){t.entity=e},UPDATE_ENTITY:function(t,e){console.log("payload - ",e)}},J={FETCH_ENTITY:function(){var t=Object(h["a"])(d.a.mark(function t(e){var n,r;return d.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,N.a.get(R.apiRoot+"/entity");case 2:n=t.sent,r=n.data,e.commit("SET_ENTITY",r);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),UPDATE_ENTITY:function(){var t=Object(h["a"])(d.a.mark(function t(e,n){var r,i;return d.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,i={npi:n.npi,submittingBills:n.submittingBills},r("UPDATE_ENTITY",i),t.abrupt("return",!0);case 4:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},V={state:L,getters:q,mutations:W,actions:J},z={practices:[]},G={PRACTICE:function(t){return t.practices}},K={SET_PRACTICE:function(t,e){t.practices=e},UPDATE_PRACTICE:function(t,e){console.log("payload - ",e)}},Q={FETCH_PRACTICE:function(){var t=Object(h["a"])(d.a.mark(function t(e){var n,r;return d.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,N.a.get(R.apiRoot+"/practice");case 2:n=t.sent,r=n.data,e.commit("SET_PRACTICE",r);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),UPDATE_PRACTICE:function(){var t=Object(h["a"])(d.a.mark(function t(e,n){var r,i;return d.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,i={npi:n.npi,submittingBills:n.submittingBills},r("UPDATE_PRACTICE",i),t.abrupt("return",!0);case 4:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},Z={state:z,getters:G,mutations:K,actions:Q};r["default"].use(C["a"]);var tt=new C["a"].Store({modules:{user:k,physicians:Y,audits:$,entity:V,practices:Z}}),et=n("9483");Object(et["a"])("".concat("/chs.compliance.client/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),r["default"].config.productionTip=!1,r["default"].use(c["a"]),new r["default"]({router:w,store:tt,render:function(t){return t(A)}}).$mount("#app")},"7dc5":function(t){t.exports={projectName:"Compliance",apiRoot1:"https://api-dev.chsli.org:8001",apiRoot:"http://10.60.115.87:3000",localStorePrefix:"CHSLIPocketGuideMaint"}},eb81:function(t,e,n){}});
//# sourceMappingURL=app.dd090276.js.map