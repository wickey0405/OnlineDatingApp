(function(e){function t(t){for(var r,i,o=t[0],c=t[1],u=t[2],d=0,g=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&g.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(g.length)g.shift()();return n.push.apply(n,u||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],r=!0,o=1;o<s.length;o++){var c=s[o];0!==a[c]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=s[0]))}return e}var r={},a={app:0},n=[];function i(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=r,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(s,r,function(t){return e[t]}.bind(null,r));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/OnlineDatingApp/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("e792"),s("0cdd");var r=s("2b0e"),a=s("5f5b");s("ab8b"),s("2dd8");r["default"].use(a["a"]);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}},[s("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),s("router-link",{attrs:{to:"/message-list"}},[e._v("Message List")])],1),s("router-view")],1)},i=[],o=(s("034f"),s("2877")),c={},u=Object(o["a"])(c,n,i,!1,null,null,null),l=u.exports,d=s("8c4f"),g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container d-flex flex-wrap"},e._l(e.users,(function(t){return s("div",{key:t.id,staticClass:"col-4"},[s("div",{staticClass:"card m-1"},[s("img",{staticClass:"card-img-top",attrs:{src:t.picture.large,alt:"..."}}),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[s("router-link",{attrs:{to:"/user/"+t.id}},[e._v(e._s(t.name))])],1),s("p",{staticClass:"card-text"},[e._v("age: "+e._s(t.age))])])])])})),0)},m=[],f=s("5530"),p=(s("a630"),s("3ca3"),s("159b"),s("2f62")),h={name:"userList",computed:Object(f["a"])(Object(f["a"])({},Object(p["d"])("UsersModule",["users"])),Object(p["b"])("UsersModule",["existUsers"])),created:function(){var e=this;if(!this.existUsers){var t=function(e){return Array.from({length:e},(function(e,t){return t}))},s=t(15);s.forEach((function(){return e.$store.dispatch("UsersModule/fetchUsers")}))}}},b=h,v=Object(o["a"])(b,g,m,!1,null,null,null),y=v.exports,M=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container shadow"},[s("div",{staticClass:"row flex-column justify-content-center"},[s("div",{staticClass:"col m-2"},[s("img",{staticClass:"vh-30",attrs:{src:e.targetUser.picture.large}})]),s("div",{staticClass:"col m-2"},[s("router-link",{attrs:{to:"/user/"+e.targetUser.id+"/chat"}},[s("button",{staticClass:"btn btn-secondary",staticStyle:{}},[e._v("message")])])],1)]),s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-10"},[s("table",{staticClass:"table table-font-size"},[s("tbody",[s("tr",[s("td",[e._v("Name")]),s("td",[e._v(e._s(e.targetUser.name))])]),s("tr",[s("td",[e._v("Gender")]),s("td",[e._v(e._s(e.targetUser.gender))])]),s("tr",[s("td",[e._v("Age")]),s("td",[e._v(e._s(e.targetUser.age))])]),s("tr",[s("td",[e._v("Country")]),s("td",[e._v(e._s(e.targetUser.country))])]),s("tr",[s("td",[e._v("State")]),s("td",[e._v(e._s(e.targetUser.state))])]),s("tr",[s("td",[e._v("City")]),s("td",[e._v(e._s(e.targetUser.city))])]),s("tr",[s("td",[e._v("Email")]),s("td",[e._v(e._s(e.targetUser.email))])])])])])])])},_=[],j={name:"UserDetail",props:{id:String},data:function(){return{targetUser:{}}},computed:Object(f["a"])(Object(f["a"])({},Object(p["d"])("UsersModule",["users"])),Object(p["b"])("UsersModule",["getUserById"])),created:function(){this.targetUser=this.getUserById(this.id)}},C=j,U=(s("ed8b"),Object(o["a"])(C,M,_,!1,null,"03bac8da",null)),O=U.exports,w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"container vh-75 bg-white overflow-auto",attrs:{id:"scroll-area"}},[s("div",{staticClass:"row w-100"},e._l(e.targetComments,(function(t,r){return s("div",{key:r,staticClass:"col-12 d-flex align-items-center my-1"},[s("div",{staticClass:"col-12 d-flex",class:{"justify-content-end":e.isYourComment(t),"justify-content-start":!e.isYourComment(t)}},[e.isYourComment(t)?e._e():s("img",{attrs:{src:e.targetUser.picture.thumbnail,alt:""}}),s("div",{staticClass:"balloon col-10 text-left rounded text-break",class:{YourBackground:e.isYourComment(t),targetUserBackground:!e.isYourComment(t)}},[e._v(e._s(t.message))]),e.isYourComment(t)?s("img",{staticClass:"pictureStyle",attrs:{src:e.yourPictureURL,alt:""}}):e._e()])])})),0)]),s("div",{staticClass:"container mt-2"},[s("div",{staticClass:"input-group mb-3 col-12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.tempMessage,expression:"tempMessage"}],staticClass:"form-control",attrs:{type:"text",placeholder:"your message","aria-label":"Recipient's username","aria-describedby":"button-addon2"},domProps:{value:e.tempMessage},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendMessage.apply(null,arguments)},input:function(t){t.target.composing||(e.tempMessage=t.target.value)}}}),s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button",id:"button-addon2",disabled:""===e.tempMessage},on:{click:e.sendMessage}},[e._v("send")])])])])},x=[],k=(s("d3b7"),{name:"Chat",props:{id:String},data:function(){return{targetUser:{},targetComments:[],tempMessage:"",yourPictureURL:"https://img-www4.hp-ez.com/img/tokoron-project/img_20140616-190149.jpg"}},computed:Object(f["a"])(Object(f["a"])(Object(f["a"])(Object(f["a"])({},Object(p["d"])("UsersModule",["users"])),Object(p["d"])("MessagesModule",["messages"])),Object(p["b"])("UsersModule",["getUserById"])),Object(p["b"])("MessagesModule",["getMessagesById"])),created:function(){this.targetUser=this.getUserById(this.id),this.targetComments=this.getMessagesById(this.id)},updated:function(){var e=document.getElementById("scroll-area");console.log(e),e&&(e.scrollTop=e.scrollHeight)},methods:Object(f["a"])(Object(f["a"])({},Object(p["c"])("MessagesModule",["setMessages"])),{},{autoScroll:function(){var e=document.getElementById("scroll-area");e&&(e.scrollTop=e.scrollHeight,console.log("scroll done"))},isYourComment:function(e){return"YOU"===e.id},sendMessage:function(){var e={id:"YOU",message:this.tempMessage};this.targetComments.push(e),this.setMessages([this.targetComments,this.id]),this.fetchMessage(this.tempMessage),this.tempMessage=""},fetchMessage:function(e){var t=this,s=new FormData;s.append("apikey","DZZ5HcUYhIIHMCzJb42VEyLlaJB3Ttiv"),s.append("query",e),fetch("https://api.a3rt.recruit.co.jp/talk/v1/smalltalk",{method:"POST",body:s}).then((function(e){return e.json()})).then((function(e){t.pushMessage(e.results[0].reply)})).then(this.autoScroll)},pushMessage:function(e){var t={id:this.id,message:e};this.targetComments.push(t),this.setMessages([this.targetComments,this.id])}})}),I=k,B=(s("ebc8"),Object(o["a"])(I,w,x,!1,null,"bfe61736",null)),S=B.exports,T=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",e._l(e.messages,(function(t){return s("div",{key:t.id},[s("div",{staticClass:"col-12 d-flex justify-content-start align-items-center m-2"},[s("img",{staticClass:"mr-2",attrs:{src:e.getTargetUser(t.id).picture.thumbnail,alt:""}}),s("p",[s("router-link",{attrs:{to:"/user/"+t.id+"/chat"}},[e._v(e._s(e.getTargetMessage(t.id)[e.getTargetMessage(t.id).length-1].message))])],1)])])})),0)},E=[],P={name:"messageList",computed:Object(f["a"])(Object(f["a"])(Object(f["a"])({},Object(p["d"])("MessagesModule",["messages"])),Object(p["b"])("UsersModule",["getUserById"])),Object(p["b"])("MessagesModule",["getMessagesById"])),methods:{getTargetUser:function(e){return this.getUserById(e)},getTargetMessage:function(e){return this.getMessagesById(e)}}},Y=P,L=Object(o["a"])(Y,T,E,!1,null,null,null),$=L.exports;r["default"].use(d["a"]);var D=[{path:"/",name:"UserList",component:y},{path:"/user/:id",name:"UserDetail",component:O,props:!0},{path:"/user/:id/chat",name:"Chat",component:S,props:!0},{path:"/message-list",name:"MessageList",component:$}],H=new d["a"]({mode:"history",base:"/OnlineDatingApp/",routes:D}),A=H,J=(s("4de4"),s("b0c0"),{namespaced:!0,state:{users:[]},mutations:{setUsers:function(e,t){e.users.push(t)}},getters:{getUserById:function(e){return function(t){return e.users.filter((function(e){return e.id===t}))[0]}},existUsers:function(e){return 0!==e.users.length}},actions:{fetchUsers:function(e){fetch("https://randomuser.me/api/").then((function(e){return e.json()})).then((function(e){var t=e.results[0],s={id:t.login.uuid,name:t.name.title+" "+t.name.first+" "+t.name.last,gender:t.gender,age:t.dob.age,country:t.location.country,state:t.location.state,city:t.location.city,email:t.email,picture:{large:t.picture.large,medium:t.picture.medium,thumbnail:t.picture.thumbnail}};return s})).then((function(t){return e.commit("setUsers",t)}))}}}),z={namespaced:!0,state:{messages:[]},mutations:{setMessages:function(e,t){var s={id:t[1],messagesWithThisId:t[0]};0===e.messages.filter((function(e){return e.id===s.id})).length?e.messages.push(s):e.messages.filter((function(e){return e.id===s.id}))[0]=s}},getters:{getMessagesById:function(e){return function(t){return 0===e.messages.filter((function(e){return e.id===t})).length?[]:(console.log(e.messages),e.messages.filter((function(e){return e.id===t}))[0].messagesWithThisId)}},existMessages:function(e){return 0!==e.messages.length}},actions:{}};r["default"].use(p["a"]);var R=new p["a"].Store({modules:{UsersModule:J,MessagesModule:z}}),N=(s("f9e3"),s("ed18")),W=s.n(N);r["default"].config.productionTip=!1,W.a.config(),new r["default"]({router:A,store:R,render:function(e){return e(l)}}).$mount("#app")},"6ff4":function(e,t,s){},"85ec":function(e,t,s){},d538:function(e,t,s){},ebc8:function(e,t,s){"use strict";s("6ff4")},ed8b:function(e,t,s){"use strict";s("d538")}});
//# sourceMappingURL=app.775d52bd.js.map