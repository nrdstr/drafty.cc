(window.webpackJsonpfit=window.webpackJsonpfit||[]).push([[0],{17:function(e,t,a){e.exports=a(42)},22:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),o=a.n(l);a(22);const s=Object(n.createContext)(),c=()=>Object(n.useContext)(s);var i=a(3);var d=a(4),m=a(8),u=a.n(m);var p=()=>{const e=c(),t=Object(d.a)(e,1)[0],a=t.isLoading,l=t.animations,o=Object(n.useRef)(null),s=l.loader_out;return Object(n.useEffect)(()=>{window.scrollTo(0,0),l.loader_out},[l.loader_out]),a?r.a.createElement(u.a,{ref:o,className:"loader__container"},r.a.createElement("div",{className:"loader__body ".concat(s?"animate--fade-out":"")},r.a.createElement("span",null,r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("div",{className:"loader__logo ".concat(s?"animate--fade-out":"")})),r.a.createElement("div",{className:"longfazers ".concat(s?"animate--fade-out":"")},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))):null},f=a(6),_=a.n(f),g=a(9);var y=()=>{const e=c(),t=Object(d.a)(e,2),a=t[0],n=a.user,l=a.drafts,o=a.animations,s=a.settings,m=a.popover,p=t[1],f=()=>{p({type:"show_drafts",payload:!0}),p({type:"animations",payload:Object(i.a)({},o,{overlay:"animate--fade-out"})}),setTimeout(()=>{p({type:"settings",payload:Object(i.a)({},s,{toggle:!1})})},200)},_=(e,t)=>p({type:"popover",payload:Object(i.a)({},m,{toggle:!0,type:e,button_text:t})});return s.toggle?r.a.createElement(u.a,{className:"settings ".concat(o.overlay," ").concat(m.toggle?"blur":"")},r.a.createElement("div",{className:"header--overlay"},r.a.createElement("div",{className:"header__avatar"},r.a.createElement("img",{alt:"Avatar",src:n.avatar})),r.a.createElement("button",{className:"overlay__cancel",onClick:f},r.a.createElement("img",{src:"/close.svg",alt:"Close Settings"}))),r.a.createElement("p",{style:{margin:0},className:"text text--medium text--slim text--light"},n.username),r.a.createElement("ul",{className:"settings__list"},r.a.createElement("li",null,r.a.createElement("p",{className:"text text--medium text--slim"},"Drafts"),r.a.createElement("p",{className:"settings__drafts text text--medium text--slim text--bold"},l.length)),r.a.createElement("li",null,r.a.createElement("p",{className:"text text--medium text--slim"},"Log out"),r.a.createElement("button",{onClick:()=>_("log_out","Logout"),className:"popover__btn popover__btn--confirm"},"Logout")),r.a.createElement("li",null,r.a.createElement("p",{className:"text text--medium text--slim"},"Delete all drafts"),r.a.createElement("button",{onClick:()=>_("draft_delete_all","Delete"),className:"popover__btn"},"Delete")),r.a.createElement("li",null,r.a.createElement("p",{className:"text text--medium text--slim"},"Delete my account"),r.a.createElement("button",{style:{marginRight:16},onClick:()=>_("account_delete","Delete"),className:"text text--medium text--red"},"Delete")))):null};var b=()=>{const e=c(),t=Object(d.a)(e,2),a=t[0],n=a.modify,l=a.animations,o=t[1];return r.a.createElement("div",{className:"controls"},r.a.createElement("button",{className:"controls__button controls__button--add",onClick:()=>{return e="new_draft",o({type:"animations",payload:Object(i.a)({},l,{overlay:"animate--fade-in"})}),o({type:"modify",payload:Object(i.a)({},n,{[e]:!0})}),void o({type:"show_drafts",payload:!1});var e}},r.a.createElement("img",{src:"/icons/close.svg",alt:"Create new draft"})),r.a.createElement("button",{className:"controls__button controls__button--settings",onClick:()=>(o({type:"animations",payload:Object(i.a)({},l,{overlay:"animate--fade-in"})}),o({type:"settings",payload:Object(i.a)({},y,{toggle:!0})}),void o({type:"show_drafts",payload:!1}))},r.a.createElement("img",{src:"/icons/settings.svg",alt:"Settings"})))};var v=()=>{const e=c(),t=Object(d.a)(e,1)[0],a=t.user,n=t.popover;return a.isAuthenticated?r.a.createElement("header",{className:"header ".concat(n.toggle?"blur":"")},r.a.createElement("div",{className:"header__user"},r.a.createElement("div",{className:"header__avatar"},r.a.createElement("img",{alt:"Avatar",src:a.avatar}))),r.a.createElement("div",{className:"header__logo"}),r.a.createElement(b,null)):r.a.createElement("header",{className:"header header--login"},r.a.createElement("div",{className:"header__logo header__logo--login"}),r.a.createElement("h1",{className:"text text--large text--bold text--narrow",style:{margin:"0 0 3px 0"}},"drafty"))};var E=()=>r.a.createElement("div",{className:"text footer__container"},r.a.createElement("p",null,"\xa9 Drafty 2020")),h=a(7),N=a.n(h);N.a.initializeApp({apiKey:"AIzaSyDogAtK4hVuw-_uiI4D5K0NWZc9j8gZUzU",authDomain:"speek2-5f7d5.firebaseapp.com",databaseURL:"https://speek2-5f7d5.firebaseio.com",projectId:"speek2-5f7d5",storageBucket:"speek2-5f7d5.appspot.com",messagingSenderId:"797679846776",appId:"1:797679846776:web:c92fd8300ccfa63746b48d"});new N.a.auth.GoogleAuthProvider;const x=new N.a.auth.TwitterAuthProvider,w=(new N.a.auth.FacebookAuthProvider,N.a.auth());var O=N.a;var j=()=>{const e=c(),t=Object(d.a)(e,2),a=t[0],l=a.user,o=a.animations,s=t[1],m=()=>{w.onAuthStateChanged(function(){var e=Object(g.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=8;break}return e.next=4,t;case 4:a=e.sent,a.photoURL.replace("_normal",""),s({type:"user",payload:Object(i.a)({},l,{isAuthenticated:!0,uid:w.currentUser.uid,twitterID:a.providerData[0].uid,username:a.displayName})});case 8:setTimeout(()=>{s({type:"animations",payload:Object(i.a)({},o,{loader_out:!0})}),setTimeout(()=>{s({type:"toggleLoader",payload:!1})},200)},1e3),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Error fetching previous auth: ",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())},u=function(){var e=Object(g.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w.signInWithPopup(x).then(function(){var e=Object(g.a)(_.a.mark((function e(t){var a,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.additionalUserInfo.profile,n=(n=a.profile_image_url_https).replace("_normal",""),s({type:"user",payload:Object(i.a)({},l,{isAuthenticated:!0,uid:w.currentUser.uid,twitterID:a.id,username:a.name,avatar:n})}),window.localStorage.setItem("isAuthenticated",!0),O.database().ref("/users/".concat(w.currentUser.uid,"/")).child("avatar").set(n),setTimeout(()=>{s({type:"animations",payload:Object(i.a)({},o,{loader_out:!0})}),setTimeout(()=>{s({type:"toggleLoader",payload:!1})},200)},1e3);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch(e=>console.error(e));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(()=>{m()},[]),l.isAuthenticated?null:r.a.createElement("div",{className:"login__container"},r.a.createElement(v,null),r.a.createElement("div",{className:"login__links"},r.a.createElement("img",{alt:"Home page art",src:"/writer-beard.svg"}),r.a.createElement("div",{style:{marginTop:30},className:"placeholder"},r.a.createElement("button",{onClick:u,className:"placeholder__button placeholder__button--landing"},r.a.createElement("span",{className:"btn__inner"},r.a.createElement("span",{className:"icon btn-text-one text text--medium"},"Log in with Twitter"),r.a.createElement("span",{className:"btn-text--twitter"}))))),r.a.createElement(E,null))};var k=e=>{const t=c(),a=Object(d.a)(t,2),l=a[0],o=l.popover,s=l.drafts,m=l.user,p=(l.animations,a[1]),f=Object(n.useState)("animate--fade-in"),y=Object(d.a)(f,2),b=y[0],v=y[1],E=Object(n.useState)(""),h=Object(d.a)(E,2),N=h[0],x=h[1],j=()=>{w.signOut().then(()=>{p({type:"user",payload:Object(i.a)({},{},{isAuthenticated:!1})}),p({type:"drafts",payload:[]}),C()})},k=function(){var e=Object(g.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=O.auth().currentUser,console.log("deleting ".concat(t.uid)),e.prev=2,O.database().ref("/users").child(t.uid).remove(),e.next=6,t.delete();case 6:j(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),C=()=>{v("animate--fade-out"),p({type:"popover",payload:{toggle:!1,index:null}}),setTimeout(()=>{v("animate--fade-in")},200)},S=()=>{const e=o.type;o.index;return"draft_delete"===e?(()=>{let e=s;e.splice(o.index,1),p({type:"drafts",payload:e});try{O.database().ref("/users/".concat(m.uid)).child("drafts").set(e),C()}catch(t){console.error(t)}})():"draft_delete_all"===e?(()=>{p({type:"drafts",payload:[]});try{O.database().ref("/users/".concat(m.uid)).child("drafts").set([]),C()}catch(e){console.error(e)}})():"account_delete"===e?k():"log_out"===e?j():void 0};return Object(n.useEffect)(()=>{const e=document.querySelector("body");if(o.toggle){e.style.overflow="hidden";const t=o.type;"draft_delete"===t&&x("delete this draft"),"log_out"===t&&x("log out"),"draft_delete_all"===t&&x("delete your drafts"),"account_delete"===t&&x("delete your account")}else e.style.overflow=""},[o.toggle]),o.toggle?r.a.createElement(u.a,{className:"popover ".concat(b)},r.a.createElement("div",{className:"popover__inner"},r.a.createElement("p",{className:"text text--medium text--bold text--center"},"Are you sure you want to ",N,"?"),r.a.createElement("div",{className:"popover__row"},r.a.createElement("button",{onClick:C,className:"popover__btn popover__btn--confirm"},"Cancel"),r.a.createElement("button",{onClick:S,className:"popover__btn"},o.button_text)))):null};var C=e=>{const t=c(),a=Object(d.a)(t,1)[0].animations,n=e.draft;return r.a.createElement("div",{className:"draft ".concat(a.draft_delete)},r.a.createElement("div",{onClick:()=>e.handleEditDraft(e.index),className:"draft__clickable-wrapper"},r.a.createElement("p",{className:"draft__text"},n.text)),r.a.createElement("button",{className:"draft__delete",onClick:()=>e.handleDeleteDraft(e.index)},r.a.createElement("img",{src:"/icons/trash.svg",alt:"Delete this draft"})))};var S=()=>{const e=c(),t=Object(d.a)(e,2),a=t[0],l=a.user,o=a.modify,s=a.drafts,m=a.show_drafts,u=a.animations,p=a.popover,f=t[1],_=e=>{const t=[!0,e];f({type:"animations",payload:Object(i.a)({},u,{overlay:"animate--fade-in"})}),f({type:"modify",payload:Object(i.a)({},o,{edit_draft:t})}),f({type:"show_drafts",payload:!1})},g=e=>{f({type:"modify",payload:Object(i.a)({},o,{edit_draft:[!1,e]})}),f({type:"popover",payload:{toggle:!0,type:"draft_delete",index:e,button_text:"Delete"}})},y=()=>{f({type:"modify",payload:Object(i.a)({},o,{new_draft:!0})}),f({type:"animations",payload:Object(i.a)({},u,{overlay:"animate--fade-in"})}),f({type:"show_drafts",payload:!1})};Object(n.useEffect)(()=>{f({type:"toggleLoader",payload:!0}),O.database().ref("/users/"+l.uid).once("value").then(e=>{try{const t=e.val();if(t)t.drafts&&t.drafts.length>0&&f({type:"drafts",payload:t.drafts}),f({type:"toggleLoader",payload:!1}),f({type:"user",payload:Object(i.a)({},l,{avatar:t.avatar})});else{const e={twitterID:l.twitterID,uid:l.uid};O.database().ref("/users/".concat(l.uid,"/")).set(JSON.parse(JSON.stringify(e)))}}catch(t){console.error(t)}}),document.addEventListener("keypress",e=>(e=>{"="===e.key&&setTimeout(()=>{y()},100)})(e))},[]);return m&&l.isAuthenticated?s&&s.length?r.a.createElement("div",{className:"drafts__container animate--fade-in ".concat(p.toggle?"blur no-scroll":"")},r.a.createElement("div",{className:"drafts animate--fade-in"},s.map((e,t)=>((e,t)=>r.a.createElement(C,{key:e.text.slice(0,10),draft:e,index:t,handleEditDraft:_,handleDeleteDraft:g}))(e,t)),r.a.createElement("div",{style:{paddingTop:10,paddingBottom:10},className:"placeholder"},r.a.createElement("button",{style:{marginTop:20,marginBottom:20},onClick:y,className:"placeholder__button button__draft"},r.a.createElement("span",{className:"btn__inner"},r.a.createElement("span",{className:"icon fas btn-text-one text--slim"},"Add new draft"),r.a.createElement("span",{className:"icon fas btn-text-two"}))),r.a.createElement("div",{className:"placeholder__logo"}))),r.a.createElement("button",{className:"drafts__add-mobile",onClick:y},r.a.createElement("img",{src:"/icons/close.svg",alt:"Create new draft"}))):r.a.createElement("div",{className:"drafts__container drafts__container--placeholder animate--fade-in"},r.a.createElement("div",{className:"drafts placeholder"},r.a.createElement("div",{className:"placeholder__art"}),r.a.createElement("button",{onClick:y,className:"placeholder__button"},r.a.createElement("span",{className:"btn__inner"},r.a.createElement("span",{className:"icon fas btn-text-one text--slim"},"Create a draft"),r.a.createElement("span",{className:"icon fas btn-text-two"})))),r.a.createElement("button",{style:p.toggle?{opacity:0}:null,className:"drafts__add-mobile",onClick:y},r.a.createElement("img",{src:"/add.svg",alt:"Create new draft"}))):null},A=a(11),D=a.n(A),L=a(16);a(40);var T=e=>r.a.createElement("div",{className:e.goal>0?"progress-ring__container":"hidden"},r.a.createElement(L.a,{value:e.progress,text:e.count,initialAnimation:!0,strokeWidth:5,className:"progress-ring__circle-chart",styles:{path:{stroke:"".concat(e.progress>0&&e.progress<=33.333?"#8ffdfc":e.progress>33.333&&e.progress<=50?"#8fc1fc":e.progress>51&&e.progress<=66.6666?"#c363a5":e.progress>67&&e.progress<=80?"#c43f9a":e.progress>81&&e.progress<=100?"#db1c87":e.progress>=100?"#f04100":null)},text:{fill:"".concat(e.progress>0&&e.progress<=33.333?"#8ffdfc":e.progress>33.333&&e.progress<=50?"#8fc1fc":e.progress>51&&e.progress<=66.6666?"#c363a5":e.progress>67&&e.progress<=80?"#c43f9a":e.progress>81&&e.progress<=100?"#db1c87":e.progress>=100?"#f04100":null)}}}));var I=()=>{const e=Object(n.useState)(!0),t=Object(d.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),s=Object(d.a)(o,2),m=s[0],p=s[1],f=Object(n.useState)(""),_=Object(d.a)(f,2),g=_[0],y=_[1],b=Object(n.useState)(""),v=Object(d.a)(b,2),E=v[0],h=v[1],x=Object(n.useState)("Copy"),w=Object(d.a)(x,2),O=w[0],j=w[1],k=Object(n.useState)(0),C=Object(d.a)(k,2),S=C[0],A=C[1],L=Object(n.useState)(0),I=Object(d.a)(L,2),R=I[0],U=I[1],W=c(),B=Object(d.a)(W,2),P=B[0],z=P.user,J=P.modify,K=P.drafts,q=P.animations,F=B[1],Y=Object(n.useRef)(null),Z=e=>{e.preventDefault();const t=K,a={text:g,timestamp:D()().unix()};t.unshift(a),F({type:"drafts",payload:t});try{N.a.database().ref("/users/".concat(z.uid)).child("drafts").update(t),Y.current.value="",F({type:"show_drafts",payload:!0}),X("new_draft")}catch(e){p(!0),l(!0),console.error(e)}},G=e=>{e.preventDefault();try{N.a.database().ref("/users/".concat(z.uid)).child("drafts").update(K),F({type:"show_drafts",payload:!0}),ee(!1)}catch(e){p(!0),l(!0),console.error(e)}},H=e=>{const t=e.target.value;y(t),A(t.length),M(t.length),t.length>0?l(!1):l(!0)},M=e=>U(Math.floor(e/280*100)),V=e=>{e.preventDefault(),Y.current.select(),document.execCommand("copy"),j(r.a.createElement("img",{className:"modify__button--tick",alt:"Text Copied",src:"/icons/check.svg"})),Y.current.focus(),Y.current.setSelectionRange(S,S),setTimeout(()=>{j("Copy")},1500)},$=e=>{e.preventDefault();const t=encodeURI(g),a="https://twitter.com/intent/tweet?text=".concat(t);window.open(a,"_blank"),Y.current.focus(),Y.current.setSelectionRange(S,S)},Q=e=>{const t=e.target.value;y(t);let a=K;a[J.edit_draft[1]].text=t,a[J.edit_draft[1]].timestamp=D()().unix(),F({type:"drafts",payload:K})},X=e=>{F({type:"show_drafts",payload:!0}),F({type:"animations",payload:Object(i.a)({},q,{overlay:"animate--fade-out"})}),setTimeout(()=>{F({type:"modify",payload:Object(i.a)({},J,{[e]:!1})}),l(!0)},200)},ee=e=>{e&&(K[J.edit_draft[1]].text=E,F({type:"drafts",payload:K})),F({type:"show_drafts",payload:!0}),F({type:"animations",payload:Object(i.a)({},q,{overlay:"animate--fade-out"})}),l(!0),setTimeout(()=>{F({type:"modify",payload:Object(i.a)({},J,{edit_draft:[!1,null]})})},200)};if(Object(n.useEffect)(()=>{const e=document.querySelector("body");A(0),M(0),J.new_draft||J.edit_draft[0]?(e.style.overflow="hidden",console.log(window.innerWidth),window.innerWidth>=769&&(Y.current.focus(),Y.current.setSelectionRange(S,S)),J.edit_draft[0]&&(h(K[J.edit_draft[1]].text),y(K[J.edit_draft[1]].text),l(!1),A(K[J.edit_draft[1]].text.length),M(K[J.edit_draft[1]].text.length))):e.style.overflow=""},[J.edit_draft,E,K,J.new_draft]),J.new_draft)return r.a.createElement("div",{className:"modify__container modify--open ".concat(q.overlay)},r.a.createElement("div",{className:"header--overlay"},r.a.createElement("div",{className:"header__avatar"},r.a.createElement("img",{alt:"Avatar",src:z.avatar})),r.a.createElement("button",{className:"overlay__cancel",onClick:()=>X("new_draft")},r.a.createElement("img",{src:"/close.svg",alt:"Close this page"}))),r.a.createElement("form",null,r.a.createElement("textarea",{type:"text",placeholder:"What's your idea?",className:"modify__input",maxLength:1e4,onChange:H,ref:Y,style:m?{border:"2px solid red"}:null}),r.a.createElement("p",{className:m?"modify__error":"hidden"},"Something's gone wrong. You may want to try refreshing the page."),r.a.createElement("div",{className:"modify__controls-container"},r.a.createElement("div",{className:"modify__timestamp"},r.a.createElement("p",{style:{opacity:0},className:"text text--tiny text--light text--slim"},r.a.createElement("em",null,"last modified"))),r.a.createElement("div",{className:"modify__controls"},r.a.createElement("div",{className:"modify__char-count"},r.a.createElement(T,{goal:280,progress:R,count:S})),r.a.createElement("button",{className:"modify__button",onClick:V,disabled:a||m},O),r.a.createElement("button",{className:"modify__button",onClick:$,disabled:a||m},"Tweet"),r.a.createElement("button",{className:"modify__button modify__button--save",onClick:Z,disabled:a||m},"Save")))));if(J.edit_draft[0]){const e=K[J.edit_draft[1]],t=D.a.unix(e.timestamp).fromNow();return r.a.createElement(u.a,{className:"modify__container modify--open ".concat(q.overlay)},r.a.createElement("div",{className:"header--overlay"},r.a.createElement("div",{className:"header__avatar"},r.a.createElement("img",{alt:"Avatar",src:z.avatar})),r.a.createElement("button",{className:"overlay__cancel",onClick:()=>ee(!0)},r.a.createElement("img",{src:"/close.svg",alt:"Close this page"}))),r.a.createElement("form",null,r.a.createElement("textarea",{type:"text",placeholder:"What's your idea?",className:"modify__input",maxLength:1e4,onChange:Q,value:K[J.edit_draft[1]].text,ref:Y,style:m?{border:"2px solid red"}:null}),r.a.createElement("p",{className:m?"modify__error":"hidden"},"Something's gone wrong. You may want to try refreshing the page."),r.a.createElement("div",{className:"modify__controls-container"},r.a.createElement("div",{className:"modify__controls"},r.a.createElement(T,{goal:280,progress:R,count:S}),r.a.createElement("button",{className:"modify__button",onClick:V,disabled:a||m},O),r.a.createElement("button",{className:"modify__button",onClick:$,disabled:a||m},"Tweet"),r.a.createElement("button",{className:"modify__button modify__button--save",onClick:G,disabled:a||m},"Save")),r.a.createElement("div",{className:"modify__timestamp"},r.a.createElement("p",{className:"text text--tiny text--light text--slim"},r.a.createElement("em",null,"last modified ",t))))))}return null};var R=e=>{const t=c(),a=Object(d.a)(t,2),n=a[0],l=n.user,o=n.toggleLogout,s=n.animations,m=a[1],u=()=>{m({type:"animations",payload:Object(i.a)({},s,{overlay:"animate--fade-out"})}),setTimeout(()=>{m({type:"toggleLogout",payload:!1})},200)},p=o?"logout__container ".concat(s.overlay):"hidden ".concat(s.overlay);return r.a.createElement("div",{className:p},r.a.createElement("div",{className:"header--overlay"},r.a.createElement("div",{className:"header__avatar"},r.a.createElement("img",{alt:"Avatar",src:l.avatar})),r.a.createElement("button",{className:"overlay__cancel",onClick:u},r.a.createElement("img",{src:"/close.svg",alt:"Close this page"}))),r.a.createElement("div",{className:"logout"},r.a.createElement("p",{className:"text text--medium text--slim"},"Are you sure?"),r.a.createElement("div",{className:"placeholder"},r.a.createElement("button",{onClick:()=>{w.signOut().then(()=>{m({type:"user",payload:Object(i.a)({},l,{isAuthenticated:!1})}),u()})},className:"placeholder__button"},r.a.createElement("span",{className:"btn__inner"},r.a.createElement("span",{className:"icon fas btn-text-one text text--small text--slim"},"Log Out"),r.a.createElement("span",{className:"icon btn-text--logout"}))))),r.a.createElement(E,null))};var U=()=>{const e=c();return Object(d.a)(e,1)[0].user.isAuthenticated?r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement(S,null),r.a.createElement(I,null),r.a.createElement(y,null),r.a.createElement(R,null)):null};a(41);var W=function(){const e=c(),t=Object(d.a)(e,2),a=t[0],l=a.popover,o=a.modify,s=a.settings,m=a.drafts,u=a.isLoading,f=a.user,_=t[1],g=Object(n.useState)(""),y=Object(d.a)(g,2),b=y[0],v=y[1];return Object(n.useEffect)(()=>{const e=localStorage.getItem("isAuthenticated");l.toggle||o.new_draft||o.edit_draft[0]||s.toggle||u?v("no-scroll"):v(""),e&&!0===e?_({type:"user",payload:Object(i.a)({},f,{isAuthenticated:!0})}):console.log(e)},[l.toggle||o.new_draft||o.edit_draft[0]||s.toggle]),r.a.createElement("div",{className:"app ".concat(b)},r.a.createElement("main",{className:"app__wrapper ".concat(b)},r.a.createElement("div",{style:m.length>0?null:{height:"100%"},className:"app__inner ".concat(b)},r.a.createElement(p,null),r.a.createElement(j,{scroll:b}),r.a.createElement(U,null)),r.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(({reducer:e,initialState:t,children:a})=>r.a.createElement(s.Provider,{value:Object(n.useReducer)(e,t)},a),{initialState:{user:{isAuthenticated:!1,uid:null,username:null,avatar:null},show_drafts:!0,drafts:[],twit:{},modify:{new_draft:!1,edit_draft:[!1,null]},animations:{overlay:"animate--fade-in",loader_out:!1,draft_delete:""},popover:{toggle:!1,type:"",index:null,buttonText:""},settings:{toggle:!1},toggleLogout:!1,isLoading:!0},reducer:(e,t)=>{switch(t.type){case"user":return Object(i.a)({},e,{user:t.payload});case"drafts":return Object(i.a)({},e,{drafts:t.payload});case"twit":return Object(i.a)({},e,{twit:t.payload});case"animations":return Object(i.a)({},e,{animations:t.payload});case"toggleLoader":return Object(i.a)({},e,{isLoading:t.payload});case"show_drafts":return Object(i.a)({},e,{show_drafts:t.payload});case"settings":return Object(i.a)({},e,{settings:t.payload});case"popover":return Object(i.a)({},e,{popover:t.payload});case"toggleLogout":return Object(i.a)({},e,{toggleLogout:t.payload});case"modify":return Object(i.a)({},e,{modify:t.payload});default:return e}}},r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.c0145511.chunk.js.map