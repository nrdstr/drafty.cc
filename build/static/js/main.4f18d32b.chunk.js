(window.webpackJsonpfit=window.webpackJsonpfit||[]).push([[0],{17:function(e,t,a){e.exports=a(42)},22:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(14),c=a.n(o),l=(a(22),Object(r.createContext)()),s=function(){return Object(r.useContext)(l)},i=a(4);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var m=a(3),p=a(8),f=a.n(p),y=function(){var e=s(),t=Object(m.a)(e,1)[0],a=t.isLoading,o=t.animations,c=Object(r.useRef)(null),l=o.loader_out;return Object(r.useEffect)((function(){o.loader_out}),[o.loader_out]),a?n.a.createElement(f.a,{ref:c,className:"loader__container"},n.a.createElement("div",{className:"loader__body ".concat(l?"animate--fade-out":"")},n.a.createElement("span",null,n.a.createElement("span",null),n.a.createElement("span",null),n.a.createElement("span",null),n.a.createElement("span",null)),n.a.createElement("div",{className:"loader__logo ".concat(l?"animate--fade-out":"")})),n.a.createElement("div",{className:"longfazers ".concat(l?"animate--fade-out":"")},n.a.createElement("span",null),n.a.createElement("span",null),n.a.createElement("span",null),n.a.createElement("span",null))):null},g=a(6),b=a.n(g),v=a(9);function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var E=function(){var e=s(),t=Object(m.a)(e,2),a=t[0],r=a.user,o=a.drafts,c=a.animations,l=a.settings,i=a.popover,u=t[1],d=function(e,t){return u({type:"popover",payload:h({},i,{toggle:!0,type:e,button_text:t})})};return l.toggle?n.a.createElement(f.a,{className:"settings ".concat(c.overlay," ").concat(i.toggle?"blur":"")},n.a.createElement("div",{className:"header--overlay"},n.a.createElement("div",{className:"header__avatar"},n.a.createElement("img",{alt:"Avatar",src:r.avatar})),n.a.createElement("button",{className:"overlay__cancel",onClick:function(){u({type:"show_drafts",payload:!0}),u({type:"animations",payload:h({},c,{overlay:"animate--fade-out"})}),setTimeout((function(){u({type:"settings",payload:h({},l,{toggle:!1})})}),200)}},n.a.createElement("img",{src:"/close.svg",alt:"Close Settings"}))),n.a.createElement("p",{style:{margin:0},className:"text text--medium text--slim text--light"},r.username),n.a.createElement("ul",{className:"settings__list"},n.a.createElement("li",null,n.a.createElement("p",{className:"text text--medium text--slim"},"Drafts"),n.a.createElement("p",{className:"settings__drafts text text--medium text--slim text--bold"},o.length)),n.a.createElement("li",null,n.a.createElement("p",{className:"text text--medium text--slim"},"Log out"),n.a.createElement("button",{onClick:function(){return d("log_out","Logout")},className:"popover__btn popover__btn--confirm"},"Logout")),n.a.createElement("li",null,n.a.createElement("p",{className:"text text--medium text--slim"},"Delete all drafts"),n.a.createElement("button",{onClick:function(){return d("draft_delete_all","Delete")},className:"popover__btn"},"Delete")),n.a.createElement("li",null,n.a.createElement("p",{className:"text text--medium text--slim"},"Delete my account"),n.a.createElement("button",{style:{marginRight:16},onClick:function(){return d("account_delete","Delete")},className:"text text--medium text--red"},"Delete")))):null};function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=function(){var e=s(),t=Object(m.a)(e,2),a=t[0],r=a.modify,o=a.animations,c=t[1];return n.a.createElement("div",{className:"controls"},n.a.createElement("button",{className:"controls__button controls__button--add",onClick:function(){return e="new_draft",c({type:"animations",payload:w({},o,{overlay:"animate--fade-in"})}),c({type:"modify",payload:w({},r,Object(i.a)({},e,!0))}),void c({type:"show_drafts",payload:!1});var e}},n.a.createElement("img",{src:"/icons/close.svg",alt:"Create new draft"})),n.a.createElement("button",{className:"controls__button controls__button--settings",onClick:function(){return c({type:"animations",payload:w({},o,{overlay:"animate--fade-in"})}),c({type:"settings",payload:w({},E,{toggle:!0})}),void c({type:"show_drafts",payload:!1})}},n.a.createElement("img",{src:"/icons/settings.svg",alt:"Settings"})))},N=function(){var e=s(),t=Object(m.a)(e,1)[0],a=t.user,r=t.popover;return a.isAuthenticated?n.a.createElement("header",{className:"header ".concat(r.toggle?"blur":"")},n.a.createElement("div",{className:"header__user"},n.a.createElement("div",{className:"header__avatar"},n.a.createElement("img",{alt:"Avatar",src:a.avatar}))),n.a.createElement("div",{className:"header__logo"}),n.a.createElement(j,null)):n.a.createElement("header",{className:"header header--login"},n.a.createElement("div",{className:"header__logo header__logo--login"}),n.a.createElement("h1",{className:"text text--large text--bold text--narrow",style:{margin:"0 0 3px 0"}},"drafty"))},x=function(){return n.a.createElement("div",{className:"text footer__container"},n.a.createElement("p",null,"\xa9 Drafty 2020"))},P=a(7),k=a.n(P);k.a.initializeApp({apiKey:"AIzaSyDogAtK4hVuw-_uiI4D5K0NWZc9j8gZUzU",authDomain:"speek2-5f7d5.firebaseapp.com",databaseURL:"https://speek2-5f7d5.firebaseio.com",projectId:"speek2-5f7d5",storageBucket:"speek2-5f7d5.appspot.com",messagingSenderId:"797679846776",appId:"1:797679846776:web:c92fd8300ccfa63746b48d"});new k.a.auth.GoogleAuthProvider;var D=new k.a.auth.TwitterAuthProvider,S=(new k.a.auth.FacebookAuthProvider,k.a.auth()),C=k.a;function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var T=function(){var e=s(),t=Object(m.a)(e,2),a=t[0],o=a.user,c=a.animations,l=t[1],i=function(){var e=Object(v.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S.signInWithPopup(D).then(function(){var e=Object(v.a)(b.a.mark((function e(t){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.additionalUserInfo.profile,r=(r=a.profile_image_url_https).replace("_normal",""),l({type:"user",payload:L({},o,{isAuthenticated:!0,uid:S.currentUser.uid,twitterID:a.id,username:a.name,avatar:r})}),C.database().ref("/users/".concat(S.currentUser.uid,"/")).child("avatar").set(r),setTimeout((function(){l({type:"animations",payload:L({},c,{loader_out:!0})}),setTimeout((function(){l({type:"toggleLoader",payload:!1})}),200)}),1e3);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.error(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){S.onAuthStateChanged(function(){var e=Object(v.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=8;break}return e.next=4,t;case 4:(a=e.sent).photoURL.replace("_normal",""),l({type:"user",payload:L({},o,{isAuthenticated:!0,uid:S.currentUser.uid,twitterID:a.providerData[0].uid,username:a.displayName})});case 8:setTimeout((function(){l({type:"animations",payload:L({},c,{loader_out:!0})}),setTimeout((function(){l({type:"toggleLoader",payload:!1})}),200)}),1e3),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Error fetching previous auth: ",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[]),o.isAuthenticated?null:n.a.createElement("div",{className:"login__container"},n.a.createElement(N,null),n.a.createElement("div",{className:"login__links"},n.a.createElement("img",{alt:"Home page art",src:"/writer-beard.svg"}),n.a.createElement("div",{style:{marginTop:30},className:"placeholder"},n.a.createElement("button",{onClick:i,className:"placeholder__button placeholder__button--landing"},n.a.createElement("span",{className:"btn__inner"},n.a.createElement("span",{className:"icon btn-text-one text text--medium"},"Log in with Twitter"),n.a.createElement("span",{className:"btn-text--twitter"}))))),n.a.createElement(x,null))};function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var U=function(e){var t=s(),a=Object(m.a)(t,2),o=a[0],c=o.popover,l=o.drafts,i=o.user,u=(o.animations,a[1]),d=Object(r.useState)("animate--fade-in"),p=Object(m.a)(d,2),y=p[0],g=p[1],_=Object(r.useState)(""),h=Object(m.a)(_,2),E=h[0],O=h[1],w=function(){S.signOut().then((function(){u({type:"user",payload:R({},{},{isAuthenticated:!1})}),u({type:"drafts",payload:[]}),N()}))},j=function(){var e=Object(v.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=C.auth().currentUser,console.log("deleting ".concat(t.uid)),e.prev=2,C.database().ref("/users").child(t.uid).remove(),e.next=6,t.delete();case 6:w(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),N=function(){g("animate--fade-out"),u({type:"popover",payload:{toggle:!1,index:null}}),setTimeout((function(){g("animate--fade-in")}),200)};return Object(r.useEffect)((function(){var e=document.querySelector("body");if(c.toggle){e.style.overflow="hidden";var t=c.type;"draft_delete"===t&&O("delete this draft"),"log_out"===t&&O("log out"),"draft_delete_all"===t&&O("delete your drafts"),"account_delete"===t&&O("delete your account")}else e.style.overflow=""}),[c.toggle]),c.toggle?n.a.createElement(f.a,{className:"popover ".concat(y)},n.a.createElement("div",{className:"popover__inner"},n.a.createElement("p",{className:"text text--medium text--bold text--center"},"Are you sure you want to ",E,"?"),n.a.createElement("div",{className:"popover__row"},n.a.createElement("button",{onClick:N,className:"popover__btn popover__btn--confirm"},"Cancel"),n.a.createElement("button",{onClick:function(){var e=c.type;c.index;return"draft_delete"===e?function(){var e=l;e.splice(c.index,1),u({type:"drafts",payload:e});try{C.database().ref("/users/".concat(i.uid)).child("drafts").set(e),N()}catch(t){console.error(t)}}():"draft_delete_all"===e?function(){u({type:"drafts",payload:[]});try{C.database().ref("/users/".concat(i.uid)).child("drafts").set([]),N()}catch(e){console.error(e)}}():"account_delete"===e?j():"log_out"===e?w():void 0},className:"popover__btn"},c.button_text)))):null},W=function(e){var t=s(),a=Object(m.a)(t,1)[0].animations,r=e.draft;return n.a.createElement("div",{className:"draft ".concat(a.draft_delete)},n.a.createElement("div",{onClick:function(){return e.handleEditDraft(e.index)},className:"draft__clickable-wrapper"},n.a.createElement("p",{className:"draft__text"},r.text)),n.a.createElement("button",{className:"draft__delete",onClick:function(){return e.handleDeleteDraft(e.index)}},n.a.createElement("img",{src:"/icons/trash.svg",alt:"Delete this draft"})))};function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var J=function(){var e=s(),t=Object(m.a)(e,2),a=t[0],o=a.user,c=a.modify,l=a.drafts,i=a.show_drafts,u=a.animations,d=a.popover,p=t[1],f=function(e){var t=[!0,e];p({type:"animations",payload:z({},u,{overlay:"animate--fade-in"})}),p({type:"modify",payload:z({},c,{edit_draft:t})}),p({type:"show_drafts",payload:!1})},y=function(e){p({type:"modify",payload:z({},c,{edit_draft:[!1,e]})}),p({type:"popover",payload:{toggle:!0,type:"draft_delete",index:e,button_text:"Delete"}})},g=function(){p({type:"modify",payload:z({},c,{new_draft:!0})}),p({type:"animations",payload:z({},u,{overlay:"animate--fade-in"})}),p({type:"show_drafts",payload:!1})};Object(r.useEffect)((function(){p({type:"toggleLoader",payload:!0}),C.database().ref("/users/"+o.uid).once("value").then((function(e){try{var t=e.val();if(t)t.drafts&&t.drafts.length>0&&p({type:"drafts",payload:t.drafts}),p({type:"toggleLoader",payload:!1}),p({type:"user",payload:z({},o,{avatar:t.avatar})});else{var a={twitterID:o.twitterID,uid:o.uid};C.database().ref("/users/".concat(o.uid,"/")).set(JSON.parse(JSON.stringify(a)))}}catch(r){console.error(r)}})),document.addEventListener("keypress",(function(e){return function(e){"="===e.key&&setTimeout((function(){g()}),100)}(e)}))}),[]);return i&&o.isAuthenticated?l&&l.length?n.a.createElement("div",{className:"drafts__container animate--fade-in ".concat(d.toggle?"blur no-scroll":"")},n.a.createElement("div",{className:"drafts animate--fade-in"},l.map((function(e,t){return function(e,t){return n.a.createElement(W,{key:e.text.slice(0,10),draft:e,index:t,handleEditDraft:f,handleDeleteDraft:y})}(e,t)})),n.a.createElement("div",{style:{paddingTop:10,paddingBottom:10},className:"placeholder"},n.a.createElement("button",{style:{marginTop:20,marginBottom:20},onClick:g,className:"placeholder__button button__draft"},n.a.createElement("span",{className:"btn__inner"},n.a.createElement("span",{className:"icon fas btn-text-one text--slim"},"Add new draft"),n.a.createElement("span",{className:"icon fas btn-text-two"}))),n.a.createElement("div",{className:"placeholder__logo"}))),n.a.createElement("button",{className:"drafts__add-mobile",onClick:g},n.a.createElement("img",{src:"/icons/close.svg",alt:"Create new draft"}))):n.a.createElement("div",{className:"drafts__container drafts__container--placeholder animate--fade-in"},n.a.createElement("div",{className:"drafts placeholder"},n.a.createElement("div",{className:"placeholder__art"}),n.a.createElement("button",{onClick:g,className:"placeholder__button"},n.a.createElement("span",{className:"btn__inner"},n.a.createElement("span",{className:"icon fas btn-text-one text--slim"},"Create a draft"),n.a.createElement("span",{className:"icon fas btn-text-two"})))),n.a.createElement("button",{style:d.toggle?{opacity:0}:null,className:"drafts__add-mobile",onClick:g},n.a.createElement("img",{src:"/add.svg",alt:"Create new draft"}))):null},K=a(11),q=a.n(K),F=a(16),Y=(a(40),function(e){return n.a.createElement("div",{className:e.goal>0?"progress-ring__container":"hidden"},n.a.createElement(F.a,{value:e.progress,text:e.count,initialAnimation:!0,strokeWidth:5,className:"progress-ring__circle-chart",styles:{path:{stroke:"".concat(e.progress>0&&e.progress<=33.333?"#8ffdfc":e.progress>33.333&&e.progress<=50?"#8fc1fc":e.progress>51&&e.progress<=66.6666?"#c363a5":e.progress>67&&e.progress<=80?"#c43f9a":e.progress>81&&e.progress<=100?"#db1c87":e.progress>=100?"#f04100":null)},text:{fill:"".concat(e.progress>0&&e.progress<=33.333?"#8ffdfc":e.progress>33.333&&e.progress<=50?"#8fc1fc":e.progress>51&&e.progress<=66.6666?"#c363a5":e.progress>67&&e.progress<=80?"#c43f9a":e.progress>81&&e.progress<=100?"#db1c87":e.progress>=100?"#f04100":null)}}}))});function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var H=function(){var e=Object(r.useState)(!0),t=Object(m.a)(e,2),a=t[0],o=t[1],c=Object(r.useState)(!1),l=Object(m.a)(c,2),u=l[0],d=l[1],p=Object(r.useState)(""),y=Object(m.a)(p,2),g=y[0],b=y[1],v=Object(r.useState)(""),_=Object(m.a)(v,2),h=_[0],E=_[1],O=Object(r.useState)("Copy"),w=Object(m.a)(O,2),j=w[0],N=w[1],x=Object(r.useState)(0),P=Object(m.a)(x,2),D=P[0],S=P[1],C=Object(r.useState)(0),A=Object(m.a)(C,2),L=A[0],T=A[1],I=s(),R=Object(m.a)(I,2),U=R[0],W=U.user,B=U.modify,z=U.drafts,J=U.animations,K=R[1],F=Object(r.useRef)(null),Z=function(e){return T(Math.floor(e/280*100))},H=function(e){e.preventDefault(),F.current.select(),document.execCommand("copy"),N(n.a.createElement("img",{className:"modify__button--tick",alt:"Text Copied",src:"/icons/check.svg"})),F.current.focus(),F.current.setSelectionRange(D,D),setTimeout((function(){N("Copy")}),1500)},M=function(e){e.preventDefault();var t=encodeURI(g),a="https://twitter.com/intent/tweet?text=".concat(t);window.open(a,"_blank"),F.current.focus(),F.current.setSelectionRange(D,D)},V=function(e){K({type:"show_drafts",payload:!0}),K({type:"animations",payload:G({},J,{overlay:"animate--fade-out"})}),setTimeout((function(){K({type:"modify",payload:G({},B,Object(i.a)({},e,!1))}),o(!0)}),200)},$=function(e){e&&(z[B.edit_draft[1]].text=h,K({type:"drafts",payload:z})),K({type:"show_drafts",payload:!0}),K({type:"animations",payload:G({},J,{overlay:"animate--fade-out"})}),o(!0),setTimeout((function(){K({type:"modify",payload:G({},B,{edit_draft:[!1,null]})})}),200)};if(Object(r.useEffect)((function(){var e=document.querySelector("body");S(0),Z(0),B.new_draft||B.edit_draft[0]?(e.style.overflow="hidden",console.log(window.innerWidth),window.innerWidth>=769&&(F.current.focus(),F.current.setSelectionRange(D,D)),B.edit_draft[0]&&(E(z[B.edit_draft[1]].text),b(z[B.edit_draft[1]].text),o(!1),S(z[B.edit_draft[1]].text.length),Z(z[B.edit_draft[1]].text.length))):e.style.overflow=""}),[B.edit_draft,h,z,B.new_draft]),B.new_draft)return n.a.createElement("div",{className:"modify__container modify--open ".concat(J.overlay)},n.a.createElement("div",{className:"header--overlay"},n.a.createElement("div",{className:"header__avatar"},n.a.createElement("img",{alt:"Avatar",src:W.avatar})),n.a.createElement("button",{className:"overlay__cancel",onClick:function(){return V("new_draft")}},n.a.createElement("img",{src:"/close.svg",alt:"Close this page"}))),n.a.createElement("form",null,n.a.createElement("textarea",{type:"text",placeholder:"What's your idea?",className:"modify__input",maxLength:1e4,onChange:function(e){var t=e.target.value;b(t),S(t.length),Z(t.length),t.length>0?o(!1):o(!0)},ref:F,style:u?{border:"2px solid red"}:null}),n.a.createElement("p",{className:u?"modify__error":"hidden"},"Something's gone wrong. You may want to try refreshing the page."),n.a.createElement("div",{className:"modify__controls-container"},n.a.createElement("div",{className:"modify__timestamp"},n.a.createElement("p",{style:{opacity:0},className:"text text--tiny text--light text--slim"},n.a.createElement("em",null,"last modified"))),n.a.createElement("div",{className:"modify__controls"},n.a.createElement("div",{className:"modify__char-count"},n.a.createElement(Y,{goal:280,progress:L,count:D})),n.a.createElement("button",{className:"modify__button",onClick:H,disabled:a||u},j),n.a.createElement("button",{className:"modify__button",onClick:M,disabled:a||u},"Tweet"),n.a.createElement("button",{className:"modify__button modify__button--save",onClick:function(e){e.preventDefault();var t=z,a={text:g,timestamp:q()().unix()};t.unshift(a),K({type:"drafts",payload:t});try{k.a.database().ref("/users/".concat(W.uid)).child("drafts").update(t),F.current.value="",K({type:"show_drafts",payload:!0}),V("new_draft")}catch(e){d(!0),o(!0),console.error(e)}},disabled:a||u},"Save")))));if(B.edit_draft[0]){var Q=z[B.edit_draft[1]],X=q.a.unix(Q.timestamp).fromNow();return n.a.createElement(f.a,{className:"modify__container modify--open ".concat(J.overlay)},n.a.createElement("div",{className:"header--overlay"},n.a.createElement("div",{className:"header__avatar"},n.a.createElement("img",{alt:"Avatar",src:W.avatar})),n.a.createElement("button",{className:"overlay__cancel",onClick:function(){return $(!0)}},n.a.createElement("img",{src:"/close.svg",alt:"Close this page"}))),n.a.createElement("form",null,n.a.createElement("textarea",{type:"text",placeholder:"What's your idea?",className:"modify__input",maxLength:1e4,onChange:function(e){var t=e.target.value;b(t);var a=z;a[B.edit_draft[1]].text=t,a[B.edit_draft[1]].timestamp=q()().unix(),K({type:"drafts",payload:z})},value:z[B.edit_draft[1]].text,ref:F,style:u?{border:"2px solid red"}:null}),n.a.createElement("p",{className:u?"modify__error":"hidden"},"Something's gone wrong. You may want to try refreshing the page."),n.a.createElement("div",{className:"modify__controls-container"},n.a.createElement("div",{className:"modify__controls"},n.a.createElement(Y,{goal:280,progress:L,count:D}),n.a.createElement("button",{className:"modify__button",onClick:H,disabled:a||u},j),n.a.createElement("button",{className:"modify__button",onClick:M,disabled:a||u},"Tweet"),n.a.createElement("button",{className:"modify__button modify__button--save",onClick:function(e){e.preventDefault();try{k.a.database().ref("/users/".concat(W.uid)).child("drafts").update(z),K({type:"show_drafts",payload:!0}),$(!1)}catch(e){d(!0),o(!0),console.error(e)}},disabled:a||u},"Save")),n.a.createElement("div",{className:"modify__timestamp"},n.a.createElement("p",{className:"text text--tiny text--light text--slim"},n.a.createElement("em",null,"last modified ",X))))))}return null};function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function V(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var $=function(e){var t=s(),a=Object(m.a)(t,2),r=a[0],o=r.user,c=r.toggleLogout,l=r.animations,i=a[1],u=function(){i({type:"animations",payload:V({},l,{overlay:"animate--fade-out"})}),setTimeout((function(){i({type:"toggleLogout",payload:!1})}),200)},d=c?"logout__container ".concat(l.overlay):"hidden ".concat(l.overlay);return n.a.createElement("div",{className:d},n.a.createElement("div",{className:"header--overlay"},n.a.createElement("div",{className:"header__avatar"},n.a.createElement("img",{alt:"Avatar",src:o.avatar})),n.a.createElement("button",{className:"overlay__cancel",onClick:u},n.a.createElement("img",{src:"/close.svg",alt:"Close this page"}))),n.a.createElement("div",{className:"logout"},n.a.createElement("p",{className:"text text--medium text--slim"},"Are you sure?"),n.a.createElement("div",{className:"placeholder"},n.a.createElement("button",{onClick:function(){S.signOut().then((function(){i({type:"user",payload:V({},o,{isAuthenticated:!1})}),u()}))},className:"placeholder__button"},n.a.createElement("span",{className:"btn__inner"},n.a.createElement("span",{className:"icon fas btn-text-one text text--small text--slim"},"Log Out"),n.a.createElement("span",{className:"icon btn-text--logout"}))))),n.a.createElement(x,null))},Q=function(){var e=s();return Object(m.a)(e,1)[0].user.isAuthenticated?n.a.createElement(n.a.Fragment,null,n.a.createElement(N,null),n.a.createElement(J,null),n.a.createElement(H,null),n.a.createElement(E,null),n.a.createElement($,null)):null};a(41);var X=function(){var e=s(),t=Object(m.a)(e,1)[0],a=t.popover,o=t.modify,c=t.settings,l=t.drafts,i=t.isLoading,u=Object(r.useState)(""),d=Object(m.a)(u,2),p=d[0],f=d[1];return Object(r.useEffect)((function(){a.toggle||o.new_draft||o.edit_draft[0]||c.toggle||i?f("no-scroll"):f("")}),[a.toggle||o.new_draft||o.edit_draft[0]||c.toggle]),n.a.createElement("div",{className:"app ".concat(p)},n.a.createElement("main",{className:"app__wrapper ".concat(p)},n.a.createElement("div",{style:l.length>0?null:{height:"100%"},className:"app__inner ".concat(p)},n.a.createElement(y,null),n.a.createElement(T,{scroll:p}),n.a.createElement(Q,null)),n.a.createElement(U,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement((function(e){var t=e.reducer,a=e.initialState,o=e.children;return n.a.createElement(l.Provider,{value:Object(r.useReducer)(t,a)},o)}),{initialState:{user:{isAuthenticated:!1,uid:null,username:null,avatar:null},show_drafts:!0,drafts:[],twit:{},modify:{new_draft:!1,edit_draft:[!1,null]},animations:{overlay:"animate--fade-in",loader_out:!1,draft_delete:""},popover:{toggle:!1,type:"",index:null,buttonText:""},settings:{toggle:!1},toggleLogout:!1,isLoading:!1},reducer:function(e,t){switch(t.type){case"user":return d({},e,{user:t.payload});case"drafts":return d({},e,{drafts:t.payload});case"twit":return d({},e,{twit:t.payload});case"animations":return d({},e,{animations:t.payload});case"toggleLoader":return d({},e,{isLoading:t.payload});case"show_drafts":return d({},e,{show_drafts:t.payload});case"settings":return d({},e,{settings:t.payload});case"popover":return d({},e,{popover:t.payload});case"toggleLogout":return d({},e,{toggleLogout:t.payload});case"modify":return d({},e,{modify:t.payload});default:return e}}},n.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.4f18d32b.chunk.js.map