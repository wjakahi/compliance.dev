(function(t){function e(e){for(var i,r,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)r=c[l],a[r]&&f.push(a[r][0]),a[r]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},r={app:0},a={app:0},o=[];function c(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"719442c9"}[t]+".js"}function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var i="css/"+({about:"about"}[t]||t)+"."+{about:"c598dfdf"}[t]+".css",r=s.p+i,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var c=a[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===i||u===r))return e()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){c=l[o],u=c.getAttribute("data-href");if(u===i||u===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var i=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");a.request=i,n(a)},f.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){r[t]=0}));var i=a[t];if(0!==i)if(i)e.push(i[2]);else{var o=new Promise(function(e,n){i=a[t]=[e,n]});e.push(i[2]=o);var u,l=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=c(t),u=function(e){f.onerror=f.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+i+": "+r+")");o.type=i,o.request=r,n[1](o)}a[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:f})},12e4);f.onerror=f.onload=u,l.appendChild(f)}return Promise.all(e)},s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/chs.compliance.client/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3af2":function(t,e,n){"use strict";var i=n("c665"),r=n("aa9a"),a=n("a322"),o=n("bc3a"),c=n.n(o),s=n("7075"),u=function(){function t(){Object(i["a"])(this,t),Object(a["a"])(this,"handleError",function(t){return Promise.reject(t)}),Object(a["a"])(this,"redirectTo",function(t,e){t.location=e});var e=c.a.create({});e.interceptors.response.use(this.handleSuccess,this.handleError),this.service=e}return Object(r["a"])(t,[{key:"handleSuccess",value:function(t){return t}},{key:"get",value:function(t,e){var n=this;s["a"].acquireToken().then(function(i){return n.service.request({method:"GET",url:t,responseType:"json",headers:{Authorization:"Bearer ".concat(i)}}).then(function(t){return e(t.status,t.data)})})}},{key:"put",value:function(t,e,n){var i=this;s["a"].acquireToken().then(function(r){return i.service.request({method:"PUT",url:t,responseType:"json",data:e,headers:{Authorization:"Bearer ".concat(r)}}).then(function(t){return n(t.status,t.data)})})}},{key:"post",value:function(t,e,n){var i=this;s["a"].acquireToken().then(function(r){return i.service.request({method:"POST",url:t,responseType:"json",data:e,headers:{Authorization:"Bearer ".concat(r)}}).then(function(t){return n(t.status,t.data)})})}},{key:"delete",value:function(t,e,n){var i=this;s["a"].acquireToken().then(function(r){return i.service.request({method:"DEL",url:t,responseType:"json",data:e,headers:{Authorization:"Bearer ".concat(r)}}).then(function(t){return n(t.status,t.data)})})}}]),t}();e["a"]=new u},"3f39":function(t,e,n){"use strict";var i=n("eb81"),r=n.n(i);r.a},"41cb":function(t,e,n){"use strict";var i=n("2b0e"),r=n("8c4f"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.menus,function(e){return n("v-flex",{key:e.id,attrs:{lg2:"",md3:"",sm4:"",xs6:""}},[n("v-card",{staticClass:"white--text",attrs:{color:"blue-grey darken-2"}},[n("v-card-title",{attrs:{"primary-title":""}},[n("div",{staticClass:"headline"},[t._v(t._s(e.title))]),n("div",[t._v(t._s(e.description))])]),t._l(e.actions,function(e){return n("v-card-actions",{key:e.title},[n("v-btn",{attrs:{flat:"",dark:""},on:{click:function(n){t.routerSelection(e.url)}}},[t._v(t._s(e.title))])],1)})],2)],1)}))],1)},o=[],c=n("a34a"),s=n.n(c),u=n("3040"),l={name:"Home",data:function(){return{menus:[{id:1,title:"Physicians",description:"desc for physician",actions:[{title:"Maintain",url:"physician-administration"}]},{id:2,title:"Audits",description:"desc for audits",actions:[]},{id:3,title:"Reports",description:"desc for reports",actions:[]}]}},created:function(){var t=Object(u["a"])(s.a.mark(function t(){return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),methods:{routerSelection:function(t){m.push({name:t})}}},f=l,d=(n("3f39"),n("2877")),p=Object(d["a"])(f,a,o,!1,null,"387c0e78",null);p.options.__file="Home.vue";var h=p.exports;i["default"].use(r["a"]);var m=e["a"]=new r["a"]({mode:"history",base:"/chs.compliance.client/",routes:[{path:"/",name:"home",component:h},{path:"/physician-administration",name:"physician-administration",component:function(){return n.e("about").then(n.bind(null,"6bc2"))}},{path:"/physician-education",name:"physician-education",component:function(){return n.e("about").then(n.bind(null,"e8534"))}},{path:"/audit-record-selection",name:"audit-record-selection",component:function(){return n.e("about").then(n.bind(null,"a7a9"))}},{path:"/audit-record-listing/",name:"audit-record-listing",component:function(){return n.e("about").then(n.bind(null,"83fe"))}},{path:"/audit-record/:audit_id",name:"audit-record",component:function(){return n.e("about").then(n.bind(null,"4686"))}},{path:"/entity_administration",name:"entity_administration",component:function(){return n.e("about").then(n.bind(null,"4f00"))}},{path:"/practice_administration",name:"practice_administration",component:function(){return n.e("about").then(n.bind(null,"54c4"))}},{path:"/audit_start",name:"audit_start",component:function(){return n.e("about").then(n.bind(null,"c437"))}},{path:"*",redirect:"/"}]})},"56d7":function(t,e,n){"use strict";n.r(e);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf"),n("d1e7");var i=n("2b0e"),r=n("ce5b"),a=n.n(r);n("bf40");i["default"].use(a.a,{});var o=n("7bb1"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",[n("v-navigation-drawer",{attrs:{persistent:"","mini-variant":t.miniVariant,clipped:t.clipped,"enable-resize-watcher":"",fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.items,function(e,i){return e.role.indexOf(t.currentUser.role)>=0?n("v-list-tile",{key:i,attrs:{value:"true"},on:{click:function(n){t.routerSelection(e.link)}}},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1):t._e()}))],1),n("v-toolbar",{attrs:{app:"","clipped-left":t.clipped}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),n("v-spacer"),n("v-toolbar-title",{domProps:{textContent:t._s(t.currentUser.unique_name)}}),n("v-btn",{attrs:{flat:"",icon:"",color:"red"},on:{click:function(e){t.logout()}}},[n("i",{staticClass:"material-icons"},[t._v("power_settings_new")])])],1),n("v-content",[n("router-view")],1),n("v-navigation-drawer",{attrs:{temporary:"",right:t.right,fixed:"",app:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[n("v-list",[n("v-list-tile",{on:{click:function(e){t.right=!t.right}}},[n("v-list-tile-action",[n("v-icon",[t._v("compare_arrows")])],1),n("v-list-tile-title",[t._v("Switch drawer (click me)")])],1)],1)],1),n("v-footer",{attrs:{fixed:t.fixed,app:""}},[n("span",[t._v("© 2017 v"+t._s(t.version))])])],1),n("confirmation-dialog",{ref:"confirmationDialog",attrs:{title:"Log Out",message:"Are you sure you want to log out?"}})],1)},s=[],u=n("41cb"),l=n("ccbf"),f=n("7075"),d={name:"App",components:{ConfirmationDialog:l["a"]},data:function(){return{clipped:!1,drawer:!0,fixed:!1,items:[{icon:"bubble_chart",title:"Home",link:"home",role:["user","administrator"]},{icon:"bubble_chart",title:"Physician Administration",link:"physician-administration",role:["user","administrator"]},{icon:"bubble_chart",title:"Physician Education",link:"physician-education",role:["user","administrator"]},{icon:"bubble_chart",title:"Entity Administration",link:"entity_administration",role:["administrator"]},{icon:"bubble_chart",title:"Practice Administration",link:"practice_administration",role:["administrator"]},{icon:"bubble_chart",title:"Start Audit",link:"audit-record-selection",role:["hidden for now"]},{icon:"bubble_chart",title:"Create Audit for Practice",link:"audit_start",role:["administrator"]},{icon:"bubble_chart",title:"Open Audits",link:"audit-record-listing",role:["user","administrator"]}],dialog:!1,miniVariant:!1,right:!0,rightDrawer:!1,title:"CHSLI App",version:"0.9f"}},computed:{currentUser:function(){return this.$store.getters.CURRENT_USER}},methods:{routerSelection:function(t){u["a"].push({name:t})},logout:function(){this.$refs.confirmationDialog.confirmation().then(function(t){t&&f["a"].signOut()})}},beforeMount:function(){f["a"].isAuthenticated()?(this.$store.dispatch("FETCH_USERS"),this.$store.dispatch("FETCH_ENTITY"),this.$store.dispatch("FETCH_PRACTICE"),this.$store.dispatch("FETCH_PHYSICIAN"),this.$store.dispatch("FETCH_APPLICATION_LISTS")):f["a"].signIn()},mounted:function(){}},p=d,h=n("2877"),m=Object(h["a"])(p,c,s,!1,null,null,null);m.options.__file="App.vue";var v=m.exports,b=n("2f62"),_=n("7dc5"),g=n("3af2"),T={rolesNeeded:{a:"user",b:"administrator"},currentUser:{},allUsers:[]},E={CURRENT_USER:function(t){return t.currentUser},ALL_USERS:function(t){return t.allUsers}},w={SET_CURRENT_USER:function(t,e){t.currentUser=e.allUsers},SET_ALL_USERS:function(t,e){t.allUsers=e.allUsers,t.currentUser=e.currentUser}},y={FETCH_USERS:function(t){g["a"].get("".concat(_.apiRoot,"/users"),function(e,n){var i=[];i.allUsers=n;var r=f["a"].getUserProfile(),a=n.find(function(t){return t.ad_username==r.unique_name});r.role=a.role,r.id=a.id,i.currentUser=r,t.commit("SET_ALL_USERS",i)})},SET_CURRENT_USER:function(t,e){var n=t.commit;n("SET_CURRENT_USER",e)}},C={state:T,getters:E,mutations:w,actions:y},k=n("a34a"),P=n.n(k),I=n("3040"),S={physicians:[]},A={PHYSICIAN:function(t){return t.physicians}},x={SET_PHYSICIAN:function(t,e){t.physicians=e},UPDATE_PHYSICIAN:function(t,e){var n=t.physicians.findIndex(function(t){return t.npi===e.npi});t.physicians[n]=Object.assign({},e)},NEW_PHYSICIAN:function(t,e){t.physicians.push(e)}},N={FETCH_PHYSICIAN:function(){var t=Object(I["a"])(P.a.mark(function t(e){return P.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:g["a"].get("".concat(_.apiRoot,"/physician"),function(t,n){e.commit("SET_PHYSICIAN",n)});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),UPDATE_PHYSICIAN:function(){var t=Object(I["a"])(P.a.mark(function t(e,n){var i;return P.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.commit,t.abrupt("return",new Promise(function(t,e){g["a"].put("".concat(_.apiRoot,"/physician/").concat(n.npi),n,function(r,a){a.success||e(a.message),i("UPDATE_PHYSICIAN",n),t(!0)})}));case 2:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),NEW_PHYSICIAN:function(){var t=Object(I["a"])(P.a.mark(function t(e,n){var i;return P.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.commit,t.abrupt("return",new Promise(function(t,e){g["a"].post("".concat(_.apiRoot,"/physician"),n,function(r,a){a.success||e(a.message),i("NEW_PHYSICIAN",n),t(!0)})}));case 2:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},R={state:S,getters:A,mutations:x,actions:N},U={entity:[]},O={ENTITY:function(t){return t.entity}},j={SET_ENTITY:function(t,e){t.entity=e},UPDATE_ENTITY:function(t,e){var n=t.entity.findIndex(function(t){return t.id===e.id});t.entity[n]=Object.assign({},e)},NEW_ENTITY:function(t,e){t.entity.push(e)},DELETE_ENTITY:function(t,e){t.entity=t.entity.filter(function(t){return t.id!=e.id})}},L={FETCH_ENTITY:function(t){g["a"].get("".concat(_.apiRoot,"/entity"),function(e,n){t.commit("SET_ENTITY",n)})},UPDATE_ENTITY:function(){var t=Object(I["a"])(P.a.mark(function t(e,n){var i;return P.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.commit,t.abrupt("return",new Promise(function(t,e){g["a"].put("".concat(_.apiRoot,"/entity/").concat(n.id),n,function(r,a){a.success||e(a.message),i("UPDATE_ENTITY",n),t(!0)})}));case 2:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),NEW_ENTITY:function(){var t=Object(I["a"])(P.a.mark(function t(e,n){var i;return P.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.commit,t.abrupt("return",new Promise(function(t,e){g["a"].post("".concat(_.apiRoot,"/entity"),n,function(r,a){a.success||e(a.message),n.id=a.new_id,i("NEW_ENTITY",n),t(!0)})}));case 2:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),DELETE_ENTITY:function(){var t=Object(I["a"])(P.a.mark(function t(e,n){var i;return P.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.commit,t.abrupt("return",new Promise(function(t,e){g["a"].delete("".concat(_.apiRoot,"/entity/").concat(n.id),function(r,a){a.success||e(a.message),i("DELETE_ENTITY",n),t(!0)})}));case 2:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},Y={state:U,getters:O,mutations:j,actions:L},H={practice:[]},D={PRACTICE:function(t){return t.practice}},q={SET_PRACTICE:function(t,e){t.practice=e},UPDATE_PRACTICE:function(t,e){var n=t.practice.findIndex(function(t){return t.id===e.id});t.practice[n]=Object.assign({},e)},NEW_PRACTICE:function(t,e){t.practice.push(e)},DELETE_PRACTICE:function(t,e){t.practice=t.practice.filter(function(t){return t.id!=e.id})}},F={FETCH_PRACTICE:function(){var t=Object(I["a"])(P.a.mark(function t(e){return P.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:g["a"].get("".concat(_.apiRoot,"/practice"),function(t,n){e.commit("SET_PRACTICE",n)});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),UPDATE_PRACTICE:function(){var t=Object(I["a"])(P.a.mark(function t(e,n){var i;return P.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.commit,t.abrupt("return",new Promise(function(t,e){g["a"].put("".concat(_.apiRoot,"/practice/").concat(n.id),n,function(r,a){a.success||e(a.message),i("UPDATE_PRACTICE",n),t(!0)})}));case 2:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),NEW_PRACTICE:function(){var t=Object(I["a"])(P.a.mark(function t(e,n){var i;return P.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.commit,t.abrupt("return",new Promise(function(t,e){g["a"].post("".concat(_.apiRoot,"/practice"),n,function(r,a){a.success||e(a.message),i("NEW_PRACTICE",n),t(!0)})}));case 2:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),DELETE_PRACTICE:function(){var t=Object(I["a"])(P.a.mark(function t(e,n){var i;return P.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.commit,t.abrupt("return",new Promise(function(t,e){g["a"].delete("".concat(_.apiRoot,"/practice/").concat(n.id),n,function(r,a){a.success||e(a.message),i("DELETE_PRACTICE",n),t(!0)})}));case 2:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},$={state:H,getters:D,mutations:q,actions:F},W={lists:[]},B={APPLICATION_LISTS:function(t){return t.lists}},z={SET_APPLICATION_LISTS:function(t,e){t.lists=e}},M={FETCH_APPLICATION_LISTS:function(){var t=Object(I["a"])(P.a.mark(function t(e){return P.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:g["a"].get("".concat(_.apiRoot,"/application_lists"),function(t,n){e.commit("SET_APPLICATION_LISTS",n)});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},J={state:W,getters:B,mutations:z,actions:M};i["default"].use(b["a"]);var V=new b["a"].Store({modules:{user:C,physicians:R,entity:Y,practice:$,applicationLists:J}}),G=n("9483");Object(G["a"])("".concat("/chs.compliance.client/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var K=n("7207"),Q=n.n(K);i["default"].config.productionTip=!1,i["default"].use(o["a"],{events:"input|blur"}),i["default"].use(Q.a),f["a"].initialize().then(function(t){new i["default"]({router:u["a"],store:V,render:function(t){return t(v)}}).$mount("#app")})},7075:function(t,e,n){"use strict";var i=n("e7be"),r=n.n(i),a=n("7dc5"),o=a.adfsConfig;e["a"]={authenticationContext:null,initialize:function(){var t=this;return this.authenticationContext=new r.a(o),new Promise(function(e,n){if(t.authenticationContext.isCallback(window.location.hash)||window.self!==window.top)t.authenticationContext.handleWindowCallback();else{var i=t.authenticationContext.getCachedUser();i?e():t.signIn()}})},acquireToken:function(){var t=this;return new Promise(function(e,n){t.authenticationContext.acquireToken(o.clientId,function(t,i){return t||!i?n(t):e(i)})})},acquireTokenRedirect:function(){this.authenticationContext.acquireTokenRedirect(o.tenant)},isAuthenticated:function(){return!!this.authenticationContext.getCachedToken(o.clientId)},getUserProfile:function(){return this.authenticationContext.getCachedUser().profile},signIn:function(){this.authenticationContext.login()},signOut:function(){this.authenticationContext.logOut()},setToken:function(t){sessionStorage.setItem("".concat(a.access_token_key,".token"),t)},getToken:function(){return sessionStorage.getItem("".concat(a.access_token_key,".token"))}}},"7dc5":function(t){t.exports={projectName:"Compliance",apiRoot:"https://www030.chsli.org:3001",apiRoot_dev:"https://mvcslt01itd434.chsli.org:4000",access_token_key:"CHSLIComplianceAccessToken",adfsConfig:{tenant:"https://chsfs01.chsli.org/adfs",clientId:"chsli- client01",redirectUri:"https://wjakahi.github.io/chs.compliance.client/",cacheLocation:"localStorage",instance:"",expireOffsetSeconds:3e3,postLogoutRedirectUri:"https://wjakahi.github.io/chs.compliance.client/",responseType:"id_token"}}},ccbf:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"290"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v(t._s(t.title))]),n("v-card-text",[t._v("\n      "+t._s(t.message)+"\n    ")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(e){t.onYes()}}},[t._v("Yes")]),n("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(e){t.onNo()}}},[t._v("No")])],1)],1)],1)},r=[],a={name:"ConfirmationDialogue",props:{title:String,message:String},data:function(){return{active:!1,resolve:null}},methods:{confirmation:function(){var t=this;return this.active=!0,new Promise(function(e,n){t.resolve=e})},onYes:function(){this.active=!1,this.resolve(!0)},onNo:function(){this.active=!1,this.resolve(!1)}}},o=a,c=n("2877"),s=Object(c["a"])(o,i,r,!1,null,null,null);s.options.__file="ConfirmationDialog.vue";e["a"]=s.exports},eb81:function(t,e,n){}});
//# sourceMappingURL=app.4976c853.js.map