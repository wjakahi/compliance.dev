(function(t){function n(n){for(var r,i,c=n[0],u=n[1],s=n[2],l=0,f=[];l<c.length;l++)i=c[l],o[i]&&f.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(n);while(f.length)f.shift()();return a.push.apply(a,s||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],r=!0,i=1;i<e.length;i++){var c=e[i];0!==o[c]&&(r=!1)}r&&(a.splice(n--,1),t=u(u.s=e[0]))}return t}var r={},i={app:0},o={app:0},a=[];function c(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"3eca8d1e"}[t]+".js"}function u(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.e=function(t){var n=[],e={about:1};i[t]?n.push(i[t]):0!==i[t]&&e[t]&&n.push(i[t]=new Promise((function(n,e){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"62ec4c93"}[t]+".css",o=u.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var s=a[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return n()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===o)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||o,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete i[t],d.parentNode.removeChild(d),e(a)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){i[t]=0})));var r=o[t];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,e){r=o[t]=[n,e]}));n.push(r[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t),s=function(n){l.onerror=l.onload=null,clearTimeout(f);var e=o[t];if(0!==e){if(e){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src,a=new Error("Loading chunk "+t+" failed.\n("+r+": "+i+")");a.type=r,a.request=i,e[1](a)}o[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},u.m=t,u.c=r,u.d=function(t,n,e){u.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,n){if(1&n&&(t=u(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)u.d(e,r,function(n){return t[n]}.bind(null,r));return e},u.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(n,"a",n),n},u.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},u.p="/compliance.prod/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var d=l;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"113a":function(t,n,e){},"3af2":function(t,n,e){"use strict";var r=e("bc3a"),i=e.n(r),o=e("7075");function a(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function c(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,n,e){return n&&c(t.prototype,n),e&&c(t,e),t}function s(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var l=function(){function t(){a(this,t),s(this,"handleError",(function(t){return Promise.reject(t)})),s(this,"redirectTo",(function(t,n){t.location=n}));var n=i.a.create({});n.interceptors.response.use(this.handleSuccess,this.handleError),this.service=n}return u(t,[{key:"handleSuccess",value:function(t){return t}},{key:"get",value:function(t,n){var e=this;o["a"].acquireToken().then((function(r){return e.service.request({method:"GET",url:t,responseType:"json",headers:{Authorization:"Bearer ".concat(r)}}).then((function(t){return n(t.status,t.data)}))}))}},{key:"put",value:function(t,n,e){var r=this;o["a"].acquireToken().then((function(i){return r.service.request({method:"PUT",url:t,responseType:"json",data:n,headers:{Authorization:"Bearer ".concat(i)}}).then((function(t){return e(t.status,t.data)}))}))}},{key:"post",value:function(t,n,e){var r=this;o["a"].acquireToken().then((function(i){return r.service.request({method:"POST",url:t,responseType:"json",data:n,headers:{Authorization:"Bearer ".concat(i)}}).then((function(t){return e(t.status,t.data)}))}))}},{key:"delete",value:function(t,n){var e=this;o["a"].acquireToken().then((function(r){return e.service.request({method:"DELETE",url:t,responseType:"json",headers:{Authorization:"Bearer ".concat(r)}}).then((function(t){return n(t.status,t.data)}))}))}}]),t}();n["a"]=new l},"41cb":function(t,n,e){"use strict";var r=e("2b0e"),i=e("8c4f"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{attrs:{"grid-list-md":""}},[e("v-layout",{attrs:{row:"",wrap:""}},t._l(t.menus,(function(n){return e("v-flex",{key:n.id,attrs:{lg2:"",md3:"",sm4:"",xs6:""}},[e("v-card",{staticClass:"white--text",attrs:{color:"chsli-color darken-2"}},[e("v-card-title",{attrs:{"primary-title":""}},[e("div",{staticClass:"headline"},[t._v(t._s(n.title))]),e("div",[t._v(t._s(n.description))])]),t._l(n.actions,(function(n){return e("v-card-actions",{key:n.title},[e("v-btn",{attrs:{flat:"",dark:""},on:{click:function(e){return t.routerSelection(n.url)}}},[t._v(t._s(n.title))])],1)}))],2)],1)})),1)],1)},a=[],c=e("a34a"),u=e.n(c);function s(t,n,e,r,i,o,a){try{var c=t[o](a),u=c.value}catch(s){return void e(s)}c.done?n(u):Promise.resolve(u).then(r,i)}function l(t){return function(){var n=this,e=arguments;return new Promise((function(r,i){var o=t.apply(n,e);function a(t){s(o,r,i,a,c,"next",t)}function c(t){s(o,r,i,a,c,"throw",t)}a(void 0)}))}}var f={name:"Home",data:function(){return{menus:[{id:1,title:"Physicians",description:"desc for physician",actions:[{title:"Maintain",url:"physician-administration"}]},{id:2,title:"Audits",description:"desc for audits",actions:[]},{id:3,title:"Reports",description:"desc for reports",actions:[]}]}},created:function(){var t=l(u.a.mark((function t(){return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}(),methods:{routerSelection:function(t){v.push({name:t})}}},d=f,p=(e("fcf8"),e("2877")),h=Object(p["a"])(d,o,a,!1,null,"fe1fb098",null);h.exports;r["default"].use(i["a"]);var v=n["a"]=new i["a"]({mode:"history",base:"/compliance.prod/",routes:[{path:"/",name:"home",component:function(){return e.e("about").then(e.bind(null,"83fe"))}},{path:"/physician-administration",name:"physician-administration",component:function(){return e.e("about").then(e.bind(null,"6bc2"))}},{path:"/physician-education",name:"physician-education",component:function(){return e.e("about").then(e.bind(null,"e8534"))}},{path:"/audit-record-selection",name:"audit-record-selection",component:function(){return e.e("about").then(e.bind(null,"a7a9"))}},{path:"/audit-practice_department",name:"audit-practice_department",component:function(){return e.e("about").then(e.bind(null,"e5ef"))}},{path:"/audit-provider/:npi/:provider_audit_id",name:"audit-provider",component:function(){return e.e("about").then(e.bind(null,"85a9"))}},{path:"/audit-practice/:practice_audit_id",name:"audit-practice",component:function(){return e.e("about").then(e.bind(null,"4804"))}},{path:"/audit-record/:audit_id",name:"audit-record",component:function(){return e.e("about").then(e.bind(null,"4686"))}},{path:"/entity_administration",name:"entity_administration",component:function(){return e.e("about").then(e.bind(null,"4f00"))}},{path:"/practice_administration",name:"practice_administration",component:function(){return e.e("about").then(e.bind(null,"54c4"))}},{path:"/audit_start",name:"audit_start",component:function(){return e.e("about").then(e.bind(null,"c437"))}},{path:"/audit_start_2",name:"audit_start_2",component:function(){return e.e("about").then(e.bind(null,"ec81"))}},{path:"/audit_start_provider",name:"audit_start_provider",component:function(){return e.e("about").then(e.bind(null,"4c92"))}},{path:"/audit_start_onboarding",name:"audit_start_onboarding",component:function(){return e.e("about").then(e.bind(null,"5de3"))}},{path:"/logging",name:"logging",component:function(){return e.e("about").then(e.bind(null,"eb74"))}},{path:"*",redirect:"/audit-record-listing/"}]})},"56d7":function(t,n,e){"use strict";e.r(n);e("744f"),e("6c7b"),e("7514"),e("20d6"),e("1c4c"),e("6762"),e("cadf"),e("e804"),e("55dd"),e("d04f"),e("c8ce"),e("217b"),e("7f7f"),e("f400"),e("7f25"),e("536b"),e("d9ab"),e("f9ab"),e("32d7"),e("25c9"),e("9f3c"),e("042e"),e("c7c6"),e("f4ff"),e("049f"),e("7872"),e("a69f"),e("0b21"),e("6c1a"),e("c7c62"),e("84b4"),e("c5f6"),e("2e37"),e("fca0"),e("7cdf"),e("ee1d"),e("b1b1"),e("87f3"),e("9278"),e("5df2"),e("04ff"),e("f751"),e("4504"),e("fee7"),e("ffc1"),e("0d6d"),e("9986"),e("8e6e"),e("25db"),e("e4f7"),e("b9a1"),e("64d5"),e("9aea"),e("db97"),e("66c8"),e("57f0"),e("165b"),e("456d"),e("cf6a"),e("fd24"),e("8615"),e("551c"),e("097d"),e("df1b"),e("2397"),e("88ca"),e("ba16"),e("d185"),e("ebde"),e("2d34"),e("f6b3"),e("2251"),e("c698"),e("a19f"),e("9253"),e("9275"),e("3b2b"),e("3846"),e("4917"),e("a481"),e("28a5"),e("386d"),e("6b54"),e("4f7f"),e("8a81"),e("ac4d"),e("8449"),e("9c86"),e("fa83"),e("48c0"),e("a032"),e("aef6"),e("d263"),e("6c37"),e("9ec8"),e("5695"),e("2fdb"),e("d0b0"),e("5df3"),e("b54a"),e("f576"),e("ed50"),e("788d"),e("14b9"),e("f386"),e("f559"),e("1448"),e("673e"),e("242a"),e("c66f"),e("b05c"),e("34ef"),e("6aa2"),e("15ac"),e("af56"),e("b6e4"),e("9c29"),e("63d9"),e("4dda"),e("10ad"),e("c02b"),e("4795"),e("130f"),e("ac6a"),e("96cf"),e("d1e7");var r=e("2b0e"),i=e("ce5b"),o=e.n(i);e("bf40");r["default"].use(o.a,{});var a=e("7bb1"),c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",[e("div",[e("v-navigation-drawer",{attrs:{persistent:"","mini-variant":t.miniVariant,clipped:t.clipped,"enable-resize-watcher":"",fixed:"",app:""},model:{value:t.drawer,callback:function(n){t.drawer=n},expression:"drawer"}},[e("v-list",[e("v-list-tile",{on:{click:function(n){return t.routerSelection("home")}}},[e("v-list-tile-content",[e("v-list-tile-title",[t._v("Home")])],1)],1),t._l(t.items,(function(n){return e("v-list-group",{key:n.title,attrs:{value:"true"},scopedSlots:t._u([{key:"activator",fn:function(){return[e("v-list-tile-content",[e("v-list-tile-title",[t._v(t._s(n.title))])],1)]},proxy:!0}],null,!0)},t._l(n.subItems,(function(n){return n.role.indexOf(t.currentUser.role)>=0?e("v-list-tile",{key:n.title,on:{click:function(e){return t.routerSelection(n.link)}}},[e("v-list-tile-content",[e("v-list-tile-title",[t._v(t._s(n.title))])],1),e("v-list-tile-action",[e("v-icon",[t._v(t._s(n.action))])],1)],1):t._e()})),1)}))],2)],1),e("v-toolbar",{attrs:{app:"","clipped-left":t.clipped}},[e("v-toolbar-side-icon",{on:{click:function(n){n.stopPropagation(),t.drawer=!t.drawer}}}),e("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),e("v-spacer"),e("v-toolbar-title",{domProps:{textContent:t._s(t.currentUser.unique_name)}}),e("v-btn",{attrs:{flat:"",icon:"",color:"red"},on:{click:function(n){return t.logout()}}},[e("i",{staticClass:"material-icons"},[t._v("power_settings_new")])])],1),e("v-content",[e("router-view")],1),e("v-navigation-drawer",{attrs:{temporary:"",right:t.right,fixed:"",app:""},model:{value:t.rightDrawer,callback:function(n){t.rightDrawer=n},expression:"rightDrawer"}},[e("v-list",[e("v-list-tile",{on:{click:function(n){t.right=!t.right}}},[e("v-list-tile-action",[e("v-icon",[t._v("compare_arrows")])],1),e("v-list-tile-title",[t._v("Switch drawer (click me)")])],1)],1)],1),e("v-footer",{attrs:{fixed:t.fixed,app:""}},[e("span",[t._v("© 2017 v"+t._s(t.version))])])],1),e("confirmation-dialog",{ref:"confirmationDialog",attrs:{title:"Log Out",message:"Are you sure you want to log out?"}})],1)},u=[],s=e("a34a"),l=e.n(s),f=e("41cb"),d=e("ccbf"),p=e("7075");function h(t,n,e,r,i,o,a){try{var c=t[o](a),u=c.value}catch(s){return void e(s)}c.done?n(u):Promise.resolve(u).then(r,i)}function v(t){return function(){var n=this,e=arguments;return new Promise((function(r,i){var o=t.apply(n,e);function a(t){h(o,r,i,a,c,"next",t)}function c(t){h(o,r,i,a,c,"throw",t)}a(void 0)}))}}var m={name:"App",components:{ConfirmationDialog:d["a"]},data:function(){return{clipped:!1,drawer:!0,fixed:!1,items:[{title:"Administration",subItems:[{icon:"bubble_chart",title:"Provider",link:"physician-administration",role:["user","administrator"]},{icon:"bubble_chart",title:"Provider Education",link:"physician-education",role:["user","administrator"]},{icon:"bubble_chart",title:"Entity",link:"entity_administration",role:["user","administrator"]},{icon:"bubble_chart",title:"Practice/Hospital Department",link:"practice_administration",role:["administrator"]}]},{title:"Audits",subItems:[{icon:"bubble_chart",title:"Start Audit",link:"audit-record-selection",role:["hidden for now"]},{icon:"bubble_chart",title:"Create Practice/Hospital Department",link:"audit_start",role:["not used"]},{icon:"bubble_chart",title:"Create Audit",link:"audit_start_2",role:["administrator"]},{icon:"bubble_chart",title:"Create Audit for Provider",link:"audit_start_provider",role:["not used"]},{icon:"bubble_chart",title:"Open Audits",link:"audit-practice_department",role:["user","administrator"]},{icon:"bubble_chart",title:"Create Onboarding Audit",link:"audit_start_onboarding",role:["not used"]}]},{title:"Utilities",subItems:[{icon:"bubble_chart",title:"Logging",link:"logging",role:["administrator"]}]}],dialog:!1,miniVariant:!1,right:!0,rightDrawer:!1,title:"CHSLI App",version:"1.0.1"}},computed:{currentUser:function(){return this.$store.getters.CURRENT_USER}},methods:{routerSelection:function(t){f["a"].push({name:t})},logout:function(){this.$refs.confirmationDialog.confirmation().then((function(t){t&&p["a"].signOut()}))}},beforeMount:function(){var t=v(l.a.mark((function t(){return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!p["a"].isAuthenticated()){t.next=15;break}return t.next=3,this.$store.dispatch("FETCH_USERS");case 3:return t.next=5,this.$store.dispatch("FETCH_ENTITY");case 5:return t.next=7,this.$store.dispatch("FETCH_PRACTICE");case 7:return t.next=9,this.$store.dispatch("FETCH_PHYSICIAN");case 9:return t.next=11,this.$store.dispatch("FETCH_APPLICATION_LISTS");case 11:return t.next=13,this.$store.dispatch("FETCH_SCORING_LIST");case 13:t.next=16;break;case 15:p["a"].signIn();case 16:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),mounted:function(){}},b=m,_=e("2877"),g=Object(_["a"])(b,c,u,!1,null,null,null),w=g.exports,T=e("2f62"),E=e("7dc5"),y=e("3af2"),C={rolesNeeded:{a:"user",b:"administrator"},currentUser:{},allUsers:[]},P={CURRENT_USER:function(t){return t.currentUser},ALL_USERS:function(t){return t.allUsers}},I={SET_CURRENT_USER:function(t,n){t.currentUser=n.allUsers},SET_ALL_USERS:function(t,n){t.allUsers=n.allUsers,t.currentUser=n.currentUser}},S={FETCH_USERS:function(t){y["a"].get("".concat(E.apiRoot,"/users"),(function(n,e){var r=[];r.allUsers=e.sort((function(t,n){return t.fullname<n.fullname?-1:t.fullname>n.fullname?1:0}));var i=p["a"].getUserProfile(),o=e.find((function(t){return t.ad_username&&t.ad_username.toLowerCase()==i.unique_name.toLowerCase()}));i.role=o.role,i.id=o.id,r.currentUser=i,t.commit("SET_ALL_USERS",r)}))},SET_CURRENT_USER:function(t,n){var e=t.commit;e("SET_CURRENT_USER",n)}},k={state:C,getters:P,mutations:I,actions:S};function x(t,n,e,r,i,o,a){try{var c=t[o](a),u=c.value}catch(s){return void e(s)}c.done?n(u):Promise.resolve(u).then(r,i)}function A(t){return function(){var n=this,e=arguments;return new Promise((function(r,i){var o=t.apply(n,e);function a(t){x(o,r,i,a,c,"next",t)}function c(t){x(o,r,i,a,c,"throw",t)}a(void 0)}))}}var N={physicians:[]},R={PHYSICIAN:function(t){return t.physicians.filter((function(t){return!0!==t.terminated}))},ALL_PHYSICIAN:function(t){return t.physicians}},U={SET_PHYSICIAN:function(t,n){t.physicians=n},UPDATE_PHYSICIAN:function(t,n){var e=t.physicians.findIndex((function(t){return t.npi===n.npi}));t.physicians[e]=Object.assign({},n)},NEW_PHYSICIAN:function(t,n){t.physicians.push(n)}},L={FETCH_PHYSICIAN:function(){var t=A(l.a.mark((function t(n){return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:y["a"].get("".concat(E.apiRoot,"/physician"),(function(t,e){n.commit("SET_PHYSICIAN",e)}));case 1:case"end":return t.stop()}}),t)})));function n(n){return t.apply(this,arguments)}return n}(),UPDATE_PHYSICIAN:function(){var t=A(l.a.mark((function t(n,e){var r;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=n.commit,t.abrupt("return",new Promise((function(t,n){y["a"].put("".concat(E.apiRoot,"/physician/").concat(e.npi),e,(function(i,o){o.success||n(o.message),r("UPDATE_PHYSICIAN",e),t(!0)}))})));case 2:case"end":return t.stop()}}),t)})));function n(n,e){return t.apply(this,arguments)}return n}(),NEW_PHYSICIAN:function(){var t=A(l.a.mark((function t(n,e){var r;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=n.commit,t.abrupt("return",new Promise((function(t,n){y["a"].post("".concat(E.apiRoot,"/physician"),e,(function(i,o){o.success||n(o.message),r("NEW_PHYSICIAN",e),t(!0)}))})));case 2:case"end":return t.stop()}}),t)})));function n(n,e){return t.apply(this,arguments)}return n}()},O={state:N,getters:R,mutations:U,actions:L};function H(t,n,e,r,i,o,a){try{var c=t[o](a),u=c.value}catch(s){return void e(s)}c.done?n(u):Promise.resolve(u).then(r,i)}function j(t){return function(){var n=this,e=arguments;return new Promise((function(r,i){var o=t.apply(n,e);function a(t){H(o,r,i,a,c,"next",t)}function c(t){H(o,r,i,a,c,"throw",t)}a(void 0)}))}}var Y={entity:[]},D={ENTITY:function(t){return t.entity}},F={SET_ENTITY:function(t,n){t.entity=n},UPDATE_ENTITY:function(t,n){var e=t.entity.findIndex((function(t){return t.id===n.id}));t.entity[e]=Object.assign({},n)},NEW_ENTITY:function(t,n){t.entity.push(n)},DELETE_ENTITY:function(t,n){t.entity=t.entity.filter((function(t){return t.id!=n.id}))}},q={FETCH_ENTITY:function(t){y["a"].get("".concat(E.apiRoot,"/entity"),(function(n,e){t.commit("SET_ENTITY",e)}))},UPDATE_ENTITY:function(){var t=j(l.a.mark((function t(n,e){var r;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=n.commit,t.abrupt("return",new Promise((function(t,n){y["a"].put("".concat(E.apiRoot,"/entity/").concat(e.id),e,(function(i,o){o.success||n(o.message),r("UPDATE_ENTITY",e),t(!0)}))})));case 2:case"end":return t.stop()}}),t)})));function n(n,e){return t.apply(this,arguments)}return n}(),NEW_ENTITY:function(){var t=j(l.a.mark((function t(n,e){var r;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=n.commit,t.abrupt("return",new Promise((function(t,n){y["a"].post("".concat(E.apiRoot,"/entity"),e,(function(i,o){o.success||n(o.message),e.id=o.new_id,r("NEW_ENTITY",e),t(!0)}))})));case 2:case"end":return t.stop()}}),t)})));function n(n,e){return t.apply(this,arguments)}return n}(),DELETE_ENTITY:function(){var t=j(l.a.mark((function t(n,e){var r;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=n.commit,t.abrupt("return",new Promise((function(t,n){y["a"].delete("".concat(E.apiRoot,"/entity/").concat(e.id),(function(i,o){o.success||n(o.message),r("DELETE_ENTITY",e),t(!0)}))})));case 2:case"end":return t.stop()}}),t)})));function n(n,e){return t.apply(this,arguments)}return n}()},$={state:Y,getters:D,mutations:F,actions:q};function W(t,n,e,r,i,o,a){try{var c=t[o](a),u=c.value}catch(s){return void e(s)}c.done?n(u):Promise.resolve(u).then(r,i)}function B(t){return function(){var n=this,e=arguments;return new Promise((function(r,i){var o=t.apply(n,e);function a(t){W(o,r,i,a,c,"next",t)}function c(t){W(o,r,i,a,c,"throw",t)}a(void 0)}))}}var z={practice:[]},G={PRACTICE:function(t){return t.practice}},M={SET_PRACTICE:function(t,n){t.practice=n},UPDATE_PRACTICE:function(t,n){var e=t.practice.findIndex((function(t){return t.id===n.id}));t.practice[e]=Object.assign({},n)},NEW_PRACTICE:function(t,n){t.practice.push(n)},DELETE_PRACTICE:function(t,n){t.practice=t.practice.filter((function(t){return t.id!=n.id}))}},J={FETCH_PRACTICE:function(){var t=B(l.a.mark((function t(n){return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:y["a"].get("".concat(E.apiRoot,"/practice"),(function(t,e){n.commit("SET_PRACTICE",e)}));case 1:case"end":return t.stop()}}),t)})));function n(n){return t.apply(this,arguments)}return n}(),UPDATE_PRACTICE:function(){var t=B(l.a.mark((function t(n,e){var r;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=n.commit,t.abrupt("return",new Promise((function(t,n){y["a"].put("".concat(E.apiRoot,"/practice/").concat(e.id),e,(function(i,o){o.success||n(o.message),r("UPDATE_PRACTICE",e),t(!0)}))})));case 2:case"end":return t.stop()}}),t)})));function n(n,e){return t.apply(this,arguments)}return n}(),NEW_PRACTICE:function(){var t=B(l.a.mark((function t(n,e){var r;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=n.commit,t.abrupt("return",new Promise((function(t,n){y["a"].post("".concat(E.apiRoot,"/practice"),e,(function(i,o){o.success||n(o.message),r("NEW_PRACTICE",e),t(!0)}))})));case 2:case"end":return t.stop()}}),t)})));function n(n,e){return t.apply(this,arguments)}return n}(),DELETE_PRACTICE:function(){var t=B(l.a.mark((function t(n,e){var r;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=n.commit,t.abrupt("return",new Promise((function(t,n){y["a"].delete("".concat(E.apiRoot,"/practice/").concat(e.id),e,(function(i,o){o.success||n(o.message),r("DELETE_PRACTICE",e),t(!0)}))})));case 2:case"end":return t.stop()}}),t)})));function n(n,e){return t.apply(this,arguments)}return n}()},V={state:z,getters:G,mutations:M,actions:J};function K(t,n,e,r,i,o,a){try{var c=t[o](a),u=c.value}catch(s){return void e(s)}c.done?n(u):Promise.resolve(u).then(r,i)}function Q(t){return function(){var n=this,e=arguments;return new Promise((function(r,i){var o=t.apply(n,e);function a(t){K(o,r,i,a,c,"next",t)}function c(t){K(o,r,i,a,c,"throw",t)}a(void 0)}))}}var X={lists:[]},Z={APPLICATION_LISTS:function(t){return t.lists}},tt={SET_APPLICATION_LISTS:function(t,n){t.lists=n}},nt={FETCH_APPLICATION_LISTS:function(){var t=Q(l.a.mark((function t(n){return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:y["a"].get("".concat(E.apiRoot,"/application_lists"),(function(t,e){n.commit("SET_APPLICATION_LISTS",e)}));case 1:case"end":return t.stop()}}),t)})));function n(n){return t.apply(this,arguments)}return n}()},et={state:X,getters:Z,mutations:tt,actions:nt};function rt(t,n,e,r,i,o,a){try{var c=t[o](a),u=c.value}catch(s){return void e(s)}c.done?n(u):Promise.resolve(u).then(r,i)}function it(t){return function(){var n=this,e=arguments;return new Promise((function(r,i){var o=t.apply(n,e);function a(t){rt(o,r,i,a,c,"next",t)}function c(t){rt(o,r,i,a,c,"throw",t)}a(void 0)}))}}var ot={score:[]},at={SCORING_LISTS:function(t){return t.score}},ct={SET_SCORING_LIST:function(t,n){t.score=n}},ut={FETCH_SCORING_LIST:function(){var t=it(l.a.mark((function t(n){return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:y["a"].get("".concat(E.apiRoot,"/scoring_list"),(function(t,e){n.commit("SET_SCORING_LIST",e)}));case 1:case"end":return t.stop()}}),t)})));function n(n){return t.apply(this,arguments)}return n}()},st={state:ot,getters:at,mutations:ct,actions:ut};r["default"].use(T["a"]);var lt=new T["a"].Store({modules:{user:k,physicians:O,entity:$,practice:V,applicationLists:et,scoringList:st}}),ft=e("9483");Object(ft["a"])("".concat("/compliance.prod/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var dt=e("7207"),pt=e.n(dt);r["default"].mixin({methods:{sampleFunction:function(){alert("Global Functions")},computeRisk:function(t){return-1==t||""==t||null==t?"":t<=75?"High":t<=84?"Medium":"Low"},computePracticeScore:function(t,n){if(0==n)return"";var e=100*n;return((e-t)/n).toFixed(0)},computePracticeScore_1:function(t,n){return 0==n||isNaN(t)?"":(t/n).toFixed(0)}}}),r["default"].config.productionTip=!1,r["default"].use(a["a"],{events:"input|blur"}),r["default"].use(pt.a),p["a"].initialize().then((function(t){new r["default"]({router:f["a"],store:lt,mixin:void 0,render:function(t){return t(w)}}).$mount("#app")}))},7075:function(t,n,e){"use strict";var r=e("e7be"),i=e.n(r),o=e("7dc5"),a=o.adfsConfig;n["a"]={authenticationContext:null,initialize:function(){var t=this;return this.authenticationContext=new i.a(a),new Promise((function(n,e){if(t.authenticationContext.isCallback(window.location.hash)||window.self!==window.top)t.authenticationContext.handleWindowCallback();else{var r=t.authenticationContext.getCachedUser();r?n():t.signIn()}}))},acquireToken:function(){var t=this;return new Promise((function(n,e){t.authenticationContext.acquireToken(a.clientId,(function(t,r){return t||!r?e(t):n(r)}))}))},acquireTokenRedirect:function(){this.authenticationContext.acquireTokenRedirect(a.tenant)},isAuthenticated:function(){return!!this.authenticationContext.getCachedToken(a.clientId)},getUserProfile:function(){return this.authenticationContext.getCachedUser().profile},signIn:function(){this.authenticationContext.login()},signOut:function(){this.authenticationContext.logOut()},setToken:function(t){sessionStorage.setItem("".concat(o.access_token_key,".token"),t)},getToken:function(){return sessionStorage.getItem("".concat(o.access_token_key,".token"))}}},"7dc5":function(t){t.exports={projectName:"Compliance",apiRoot_1:"https://www030.chsli.org:3001",apiRoot:"https://www030.chsli.org:3007",apiRoot_dev:"https://mvcslt01itd434.chsli.org:4000",access_token_key:"CHSLIComplianceAccessToken",adfsConfig:{tenant:"https://chsfs01.chsli.org/adfs",clientId:"chsli- client01",redirectUri_1:"https://chsli-apps.github.io/chs.compliance.client/",redirectUri_3:"https://wjakahi.github.io/chs.compliance.client/",redirectUri:"https://wjakahi.github.io/compliance.prod/",redirectUri_11:"http://localhost:3000/",cacheLocation:"localStorage",instance:"",expireOffsetSeconds:3e3,postLogoutRedirectUri:"https://wjakahi.github.io/chs.compliance.client/",responseType:"id_token"}}},ccbf:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-dialog",{attrs:{"max-width":"290"},model:{value:t.active,callback:function(n){t.active=n},expression:"active"}},[e("v-card",[e("v-card-title",{staticClass:"headline"},[t._v(t._s(t.title))]),e("v-card-text",[t._v("\n      "+t._s(t.message)+"\n    ")]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(n){return t.onYes()}}},[t._v("Yes")]),e("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(n){return t.onNo()}}},[t._v("No")])],1)],1)],1)},i=[],o={name:"ConfirmationDialogue",props:{title:String,message:String},data:function(){return{active:!1,resolve:null}},methods:{confirmation:function(){var t=this;return this.active=!0,new Promise((function(n,e){t.resolve=n}))},onYes:function(){this.active=!1,this.resolve(!0)},onNo:function(){this.active=!1,this.resolve(!1)}}},a=o,c=e("2877"),u=Object(c["a"])(a,r,i,!1,null,null,null);n["a"]=u.exports},fcf8:function(t,n,e){"use strict";var r=e("113a"),i=e.n(r);i.a}});
//# sourceMappingURL=app.f17e2e16.js.map