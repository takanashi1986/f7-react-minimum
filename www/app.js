(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{53:function(e,t,n){e.exports=n(82)},79:function(e,t,n){},80:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),l=n(22),c=n.n(l),u=n(33),i=n(4),m=n(10),s=n(51),p=n(46),d=n(17),f=n(47),E=n(48),g=n(34),b=n(49),O=n.n(b);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k={username:"",password:"",login:!1};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w={name:"",email:"",url:"",password:"",phone:"",gender:"",birthdate:"1999-04-05",toggle:!1,slider:50,textArea:"",resizable:"",checkboxGroup:{checkbox1:!1,checkbox2:!1,checkbox3:!1},radioButtonsGroup:0};function A(e){return function(e){if(Array.isArray(e))return D(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){R(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _={pictures:[]};function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var S,F=new m.Framework7StateKernel,L=(Object(E.createLogger)(),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.d),M=[f.a,!1].filter(Boolean),G=Object(d.c)({framework7:m.framework7Reducer,login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERNAME_UPDATED":return h(h({},e),{},{username:t.payload});case"PASSWORD_UPDATED":return h(h({},e),{},{password:t.payload});case"LOGIN_SUCCESS":return h(h({},e),{},{login:!0});case"LOGOUT":return h(h({},e),{},{login:!1});default:return e}},form:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FORM_NAME_UPDATED":return T(T({},e),{},{name:t.payload});case"FORM_EMAIL_UPDATED":return T(T({},e),{},{email:t.payload});case"FORM_URL_UPDATED":return T(T({},e),{},{url:t.payload});case"FORM_PASSWORD_UPDATED":return T(T({},e),{},{password:t.payload});case"FORM_PHONE_UPDATED":return T(T({},e),{},{phone:t.payload});case"FORM_GENDER_UPDATED":return T(T({},e),{},{gender:t.payload});case"FORM_BIRTHDATE_UPDATED":return T(T({},e),{},{birthdate:t.payload});case"FORM_TOGGLE_UPDATED":return T(T({},e),{},{toggle:!e.toggle});case"FORM_SLIDER_UPDATED":return T(T({},e),{},{slider:t.payload});case"FORM_TEXTAREA_UPDATED":return T(T({},e),{},{textArea:t.payload});case"FORM_RESIZABLE_UPDATED":return T(T({},e),{},{resizable:t.payload});case"FORM_CHECKBOX_UPDATED":return T(T({},e),{},{checkboxGroup:T(T({},e.checkboxGroup),{},j({},"checkbox".concat(t.payload),!e.checkboxGroup["checkbox".concat(t.payload)]))});case"FORM_RADIO_BUTTON_UPDATED":return T(T({},e),{},{radioButtonsGroup:t.payload});default:return e}},picture:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PICTURE":return U(U({},e),{},{pictures:[].concat(A(e.pictures),[{uri:t.payload}])});case"CLEAR_PICTURE":return U(U({},e),{},{pictures:[]});default:return e}}}),N=Object(g.a)({key:"root",storage:O.a,whitelist:["login"]},G),I=Object(d.e)(N,{},L(d.a.apply(void 0,function(e){if(Array.isArray(e))return B(e)}(S=M)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(S)||function(e,t){if(e){if("string"==typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(e,t):void 0}}(S)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))),x=Object(g.b)(I);Object(m.syncFramework7WithStore)(I,F);var H,q=function(e){return function(t){return e(t.login||{})}},z=q((function(e){return e.username})),W=q((function(e){return e.password})),X=q((function(e){return e.login})),K=(H=function(e){return e.main},function(e){var t,n;return H((null===(t=e.framework7)||void 0===t||null===(n=t.routing)||void 0===n?void 0:n.history)||{})}),J=function(){return Object(m.navigateTo)("/login/")},V=function(){return function(e,t){var n=t();if(function(e){return"password!"===W(e)}(n)){var a=K(n);e({type:"LOGIN_SUCCESS"}),e((null==a?void 0:a.length)>1?Object(m.goBack)():Object(m.navigateTo)("/"))}else e(Object(m.showAlert)('Incorrect password! Hint: please enter "password!".',"Failed Login"))}};function Y(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  max-width: 90%;\n"]);return Y=function(){return e},e}n(84).a.img(Y());var Z=function(){return Object(m.navigateTo)("/about/")},$=function(){return Object(m.navigateTo)("/form/")},Q=function(){return Object(m.goBack)()},ee=function(){return Object(m.goBack)()},te=function(){return Object(m.navigateTo)("/popup/")},ne=function(e){return{type:"ADD_PICTURE",payload:e}},ae=function(e){return function(t){return e(t.picture||{})}}((function(e){return e.pictures})),re=Object(o.b)((function(e){return{pictures:ae(e),hasHTML5mediaDevice:!!navigator.mediaDevices}}),(function(e){return{onGoToAbout:function(){return e(Z())},onGoToForm:function(){return e($())},onGoToDynamicRoute:function(){return e(Object(m.navigateTo)("/dynamic-route/blog/45/post/125/?foo=bar#about"))},onGoToDefaultRoute:function(){return e(Object(m.navigateTo)("/load-something-that-doesnt-exist/"))},onOpenLeftPanel:function(){return e(Object(m.navigateTo)("/panel-left/"))},onOpenRightPanel:function(){return e(Object(m.navigateTo)("/panel-right/"))},onOpenPopup:function(){return e(te())},onOpenLoginScreen:function(){return e(J())},onClickCameraButton:function(){return oe(Camera.PictureSourceType.CAMERA,Camera.DestinationType.FILE_URI,e)},onClickAlbumButton:function(){return oe(Camera.PictureSourceType.PHOTOLIBRARY,Camera.DestinationType.FILE_URI,e)},onClickWebApiCameraButton:function(){return e(Object(m.navigateTo)("/camera/"))},onClickClearPicture:function(){return e({type:"CLEAR_PICTURE"})}}}))((function(e){var t=e.pictures,n=void 0===t?[]:t,o=e.onGoToAbout,l=e.onGoToForm,c=e.onOpenLeftPanel,u=e.onOpenPopup,m=e.onClickCameraButton,s=e.onClickWebApiCameraButton,p=e.onClickAlbumButton,d=e.onClickClearPicture,f=e.hasHTML5mediaDevice;return r.a.createElement(i.s,null,r.a.createElement(i.r,null,r.a.createElement(i.o,null,r.a.createElement(i.i,{iconIos:"f7:menu",iconMd:"material:menu",link:!0,onClick:c})),r.a.createElement(i.q,null,"My App")),r.a.createElement(i.b,{strong:!0},r.a.createElement("p",null,"App example.")),r.a.createElement(i.d,null,"Photos"),r.a.createElement(i.b,null,(null==n?void 0:n.length)>0?r.a.createElement(a.Fragment,null,r.a.createElement(i.w,null,r.a.createElement(i.f,{width:"100"},r.a.createElement(i.e,{fill:!0,raised:!0,onClick:d},"Clear"))),r.a.createElement(i.j,{"simple-list":!0},n.map((function(e){var t=e.uri;return r.a.createElement(i.l,null,r.a.createElement(Img,null,"img src=",t))})))):r.a.createElement(i.w,null,r.a.createElement(i.f,null,"No photos"))),r.a.createElement(i.d,null,"Take Picture"),r.a.createElement(i.b,null,r.a.createElement(i.w,null,r.a.createElement(i.f,{width:"100"},r.a.createElement(i.e,{fill:!0,raised:!0,onClick:m},"Camera")))),f&&r.a.createElement(i.b,null,r.a.createElement(i.w,null,r.a.createElement(i.f,{width:"100"},r.a.createElement(i.e,{fill:!0,raised:!0,onClick:s},"HTML5 Camera")))),r.a.createElement(i.b,null,r.a.createElement(i.w,null,r.a.createElement(i.f,{width:"100"},r.a.createElement(i.e,{fill:!0,raised:!0,onClick:p},"From Album")))),r.a.createElement(i.d,null,"Navigation"),r.a.createElement(i.j,null,r.a.createElement(i.l,{link:!0,onClick:o,title:"About"}),r.a.createElement(i.l,{link:!0,onClick:l,title:"Form"})),r.a.createElement(i.d,null,"Modals"),r.a.createElement(i.b,{strong:!0},r.a.createElement(i.w,null,r.a.createElement(i.f,{width:"100"},r.a.createElement(i.e,{fill:!0,raised:!0,onClick:u},"Popup")))))}));function oe(e,t,n){navigator.camera.getPicture(function(e){return function(t){console.log(t),e(ne(t))}}(n),(function(e){alert(e)}),{quality:50,sourceType:e,destinationType:t,encodingType:Camera.EncodingType.JPEG,mediaType:Camera.MediaType.PICTURE,correctOrientation:!0})}var le=Object(o.b)(null,(function(e){return{onGoBackToHomePage:function(){return e(Object(m.goBack)())}}}))((function(e){var t=e.onGoBackToHomePage;return r.a.createElement(i.s,null,r.a.createElement(i.r,{title:"About",backLink:"Back",onBackClick:t}),r.a.createElement(i.d,null,"About My App"),r.a.createElement(i.b,{strong:!0},r.a.createElement("p",null,"Here is About page!"),r.a.createElement("p",null,"You can go",r.a.createElement(i.i,{onClick:t},"back"),"."),r.a.createElement("p",null,"Mauris posuere sit amet metus id venenatis. Ut ante dolor, tempor nec commodo rutrum, varius at sem. Nullam ac nisi non neque ornare pretium. Nulla mauris mauris, consequat et elementum sit amet, egestas sed orci. In hac habitasse platea dictumst."),r.a.createElement("p",null,"Fusce eros lectus, accumsan eget mi vel, iaculis tincidunt felis. Nulla tincidunt pharetra sagittis. Fusce in felis eros. Nulla sit amet aliquam lorem, et gravida ipsum. Mauris consectetur nisl non sollicitudin tristique. Praesent vitae metus ac quam rhoncus mattis vel et nisi. Aenean aliquet, felis quis dignissim iaculis, lectus quam tincidunt ligula, et venenatis turpis risus sed lorem. Morbi eu metus elit. Ut vel diam dolor.")))})),ce=Object(o.b)((function(e){return function(e){return e.form}(e)}),(function(e){return{onGoBackToHomePage:function(){return e(Object(m.goBack)())},onNameUpdated:function(t){return e(function(e){return{type:"FORM_NAME_UPDATED",payload:e}}(t))},onEmailUpdated:function(t){return e(function(e){return{type:"FORM_EMAIL_UPDATED",payload:e}}(t))},onUrlUpdated:function(t){return e(function(e){return{type:"FORM_URL_UPDATED",payload:e}}(t))},onPasswordUpdated:function(t){return e(function(e){return{type:"FORM_PASSWORD_UPDATED",payload:e}}(t))},onPhoneUpdated:function(t){return e(function(e){return{type:"FORM_PHONE_UPDATED",payload:e}}(t))},onGenderUpdated:function(t){return e(function(e){return{type:"FORM_GENDER_UPDATED",payload:e}}(t))},onBirthdateUpdated:function(t){return e(function(e){return{type:"FORM_BIRTHDATE_UPDATED",payload:e}}(t))},onToggleUpdated:function(){return e({type:"FORM_TOGGLE_UPDATED"})},onSliderUpdated:function(t){return e({type:"FORM_SLIDER_UPDATED",payload:t})},onTextAreaUpdated:function(t){return e(function(e){return{type:"FORM_TEXTAREA_UPDATED",payload:e}}(t))},onResizableUpdated:function(t){return e(function(e){return{type:"FORM_RESIZABLE_UPDATED",payload:e}}(t))},onCheckboxUpdated:function(t){return e(function(e){return{type:"FORM_CHECKBOX_UPDATED",payload:e}}(t))},onRadioButtonUpdated:function(t){return e(function(e){return{type:"FORM_RADIO_BUTTON_UPDATED",payload:e}}(t))}}}))((function(e){var t=e.onGoBackToHomePage,n=e.onNameUpdated,a=e.onEmailUpdated,o=e.onUrlUpdated,l=e.onPasswordUpdated,c=e.onPhoneUpdated,u=e.onGenderUpdated,m=e.onBirthdateUpdated,s=e.onToggleUpdated,p=e.onSliderUpdated,d=e.onTextAreaUpdated,f=e.onResizableUpdated,E=e.onCheckboxUpdated,g=e.onRadioButtonUpdated,b=e.name,O=e.email,y=e.url,h=e.password,v=e.phone,k=e.gender,P=e.birthdate,T=e.toggle,j=e.slider,w=e.textArea,A=e.resizable,D=e.checkboxGroup,C=e.radioButtonsGroup;return r.a.createElement(i.s,null,r.a.createElement(i.r,{title:"Form",backLink:"Back",onBackClick:t}),r.a.createElement(i.d,null,"Form Example"),r.a.createElement(i.j,{form:!0},r.a.createElement(i.l,null,r.a.createElement(i.h,null,"Name"),r.a.createElement(i.g,{type:"text",placeholder:"Name",onChange:function(e){var t=e.target;return n(t.value)},value:b})),r.a.createElement(i.l,null,r.a.createElement(i.h,null,"E-mail"),r.a.createElement(i.g,{type:"email",placeholder:"E-mail",onChange:function(e){var t=e.target;return a(t.value)},value:O})),r.a.createElement(i.l,null,r.a.createElement(i.h,null,"URL"),r.a.createElement(i.g,{type:"url",placeholder:"URL",onChange:function(e){var t=e.target;return o(t.value)},value:y})),r.a.createElement(i.l,null,r.a.createElement(i.h,null,"Password"),r.a.createElement(i.g,{type:"password",placeholder:"Password",onChange:function(e){var t=e.target;return l(t.value)},value:h})),r.a.createElement(i.l,null,r.a.createElement(i.h,null,"Phone"),r.a.createElement(i.g,{type:"tel",placeholder:"Phone",onChange:function(e){var t=e.target;return c(t.value)},value:v})),r.a.createElement(i.l,null,r.a.createElement(i.h,null,"Gender"),r.a.createElement(i.g,{type:"select",value:k,onChange:function(e){var t=e.target;return u(t.value)}},r.a.createElement("option",{value:0},"Male"),r.a.createElement("option",{value:1},"Female"))),r.a.createElement(i.l,null,r.a.createElement(i.h,null,"Birth date"),r.a.createElement(i.g,{type:"date",placeholder:"Birth date",onChange:function(e){var t=e.target;return m(t.value)},value:P})),r.a.createElement(i.l,{title:"Toggle"},r.a.createElement(i.y,{slot:"after",onToggleChange:s,checked:T})),r.a.createElement(i.l,null,r.a.createElement(i.h,null,"Slider"),r.a.createElement(i.g,null,r.a.createElement(i.v,{min:"0",max:"100",value:j,step:"1",label:!0,onRangeChanged:function(e){return p(e)}}))),r.a.createElement(i.l,null,r.a.createElement(i.h,null,"Textarea"),r.a.createElement(i.g,{type:"textarea",placeholder:"Bio",onChange:function(e){var t=e.target;return d(t.value)},value:w})),r.a.createElement(i.l,null,r.a.createElement(i.h,null,"Resizable"),r.a.createElement(i.g,{type:"textarea",placeholder:"Bio",resizable:!0,onChange:function(e){var t=e.target;return f(t.value)},value:A}))),r.a.createElement(i.d,null,"Checkbox group"),r.a.createElement(i.j,{form:!0},Array.from(Array(3).keys()).map((function(e){return r.a.createElement(i.l,{key:e,checkbox:!0,name:"my-checkbox",value:e+1,title:"Checkbox ".concat(e+1),onClick:function(){return E(e+1)},checked:D["checkbox".concat(e+1)]})}))),r.a.createElement(i.d,null,"Radio buttons group"),r.a.createElement(i.j,{form:!0},Array.from(Array(3).keys()).map((function(e){return r.a.createElement(i.l,{key:e,radio:!0,name:"my-radio",checked:e===C,value:e+1,title:"Radio ".concat(e+1),onClick:function(){return g(e)}})}))),r.a.createElement(i.d,null,"Buttons"),r.a.createElement(i.b,{strong:!0},r.a.createElement(i.w,{tag:"p"},r.a.createElement(i.e,{className:"col"},"Button"),r.a.createElement(i.e,{className:"col",fill:!0},"Fill")),r.a.createElement(i.w,{tag:"p"},r.a.createElement(i.e,{className:"col",raised:!0},"Raised"),r.a.createElement(i.e,{className:"col",raised:!0,fill:!0},"Raised Fill")),r.a.createElement(i.w,{tag:"p"},r.a.createElement(i.e,{className:"col",round:!0},"Round"),r.a.createElement(i.e,{className:"col",round:!0,fill:!0},"Round Fill")),r.a.createElement(i.w,{tag:"p"},r.a.createElement(i.e,{className:"col",outline:!0},"Outline"),r.a.createElement(i.e,{className:"col",round:!0,outline:!0},"Outline Round")),r.a.createElement(i.w,{tag:"p"},r.a.createElement(i.e,{className:"col",small:!0,outline:!0},"Small"),r.a.createElement(i.e,{className:"col",small:!0,round:!0,outline:!0},"Small Round")),r.a.createElement(i.w,{tag:"p"},r.a.createElement(i.e,{className:"col",small:!0,fill:!0},"Small"),r.a.createElement(i.e,{className:"col",small:!0,round:!0,fill:!0},"Small Round")),r.a.createElement(i.w,{tag:"p"},r.a.createElement(i.e,{className:"col",big:!0,raised:!0},"Big"),r.a.createElement(i.e,{className:"col",big:!0,fill:!0,raised:!0},"Big Fill")),r.a.createElement(i.w,{tag:"p"},r.a.createElement(i.e,{className:"col",big:!0,fill:!0,raised:!0,color:"red"},"Big Red"),r.a.createElement(i.e,{className:"col",big:!0,fill:!0,raised:!0,color:"green"},"Big Green"))))}));function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var me=Object(o.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(n),!0).forEach((function(t){ie(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},function(e){var t=Object(m.getCurrentRoute)(e),n=new URL("http://test".concat(t)),a={};return n.searchParams.forEach((function(e,t){a[t]=e})),{url:t,path:n.pathname,hash:n.hash,query:a}}(e))}),(function(e){return{onGoBackToHomePage:function(){return e(Object(m.goBack)())}}}))((function(e){var t=e.onGoBackToHomePage,n=e.url,a=e.path,o=e.hash,l=e.query;return r.a.createElement(i.s,null,r.a.createElement(i.r,{title:"Dynamic Route",backLink:"Back",onBackClick:t}),r.a.createElement(i.b,{strong:!0},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("b",null,"Url:")," ",n),r.a.createElement("li",null,r.a.createElement("b",null,"Path:")," ",a),r.a.createElement("li",null,r.a.createElement("b",null,"Hash:")," ",o),r.a.createElement("li",null,r.a.createElement("b",null,"Query:"),r.a.createElement("ul",null,Object.keys(l).map((function(e){return r.a.createElement("li",{key:e},r.a.createElement("b",null,e,":")," ",l[e])})))))),r.a.createElement(i.b,{strong:!0},r.a.createElement(i.i,{onClick:t},"Go back to home page")))})),se=Object(o.b)(null,(function(e){return{onGoBackToHomePage:function(){return e(Object(m.goBack)())}}}))((function(e){var t=e.onGoBackToHomePage;return r.a.createElement(i.s,null,r.a.createElement(i.r,{title:"Not found",backLink:"Back",onBackClick:t}),r.a.createElement(i.b,{strong:!0},r.a.createElement("p",null,"Sorry"),r.a.createElement("p",null,"Requested content not found.")))})),pe=Object(o.b)(null,(function(e){return{onClosePanelLeft:function(){return e(Q())},onGoToAbout:function(){return e((function(e){e(Q()),e(Z())}))},onGoToForm:function(){return e((function(e){e(Q()),e($())}))},onLogout:function(){return e((function(e,t){e({type:"LOGOUT"}),e(Object(m.navigateTo)("/login/"))}))}}}))((function(e){var t=e.onGoToAbout,n=e.onGoToForm,a=e.onClosePanelLeft,o=e.onLogout;return r.a.createElement(i.t,{left:!0,cover:!0,themeDark:!0,onPanelBackdropClick:a},r.a.createElement(i.s,null,r.a.createElement(i.r,{title:"Left Panel"}),r.a.createElement(i.b,{strong:!0},r.a.createElement("p",null,"Left panel content goes here")),r.a.createElement(i.d,null,"Load page in main view"),r.a.createElement(i.j,null,r.a.createElement(i.l,{link:!0,title:"About",onClick:t}),r.a.createElement(i.l,{link:!0,title:"Form",onClick:n}),r.a.createElement(i.l,{link:!0,title:"Logout",onClick:o}))))})),de=Object(o.b)(null,(function(e){return{onClosePanelRight:function(){return e(ee())},onGoToAbout:function(){return e((function(e){e(ee()),e(Z())}))},onGoToForm:function(){return e((function(e){e(ee()),e($())}))}}}))((function(e){var t=e.onGoToAbout,n=e.onGoToForm,a=e.onClosePanelRight;return r.a.createElement(i.t,{right:!0,reveal:!0,themeDark:!0,onPanelBackdropClick:a},r.a.createElement(i.s,null,r.a.createElement(i.r,{title:"Right Panel"}),r.a.createElement(i.b,{strong:!0},r.a.createElement("p",null,"Right panel content goes here")),r.a.createElement(i.d,null,"Load page in main view"),r.a.createElement(i.j,null,r.a.createElement(i.l,{link:!0,title:"About",onClick:t}),r.a.createElement(i.l,{link:!0,title:"Form",onClick:n}))))})),fe=Object(o.b)((function(e){return{username:z(e),password:W(e)}}),(function(e){return{onUsernameUpdated:function(t){return e(function(e){return{type:"USERNAME_UPDATED",payload:e}}(t))},onPasswordUpdated:function(t){return e(function(e){return{type:"PASSWORD_UPDATED",payload:e}}(t))},onLogin:function(){return e(V())}}}))((function(e){var t=e.onUsernameUpdated,n=e.onPasswordUpdated,a=e.onLogin,o=e.username,l=e.password;return r.a.createElement(i.m,{id:"login-screen"},r.a.createElement(i.z,null,r.a.createElement(i.s,{loginScreen:!0},r.a.createElement(i.n,null,"Login"),r.a.createElement(i.j,{form:!0},r.a.createElement(i.l,null,r.a.createElement(i.h,null,"Username"),r.a.createElement(i.g,{name:"username",placeholder:"Username",type:"text",onChange:function(e){var n=e.target;return t(n.value)},value:o})),r.a.createElement(i.l,null,r.a.createElement(i.h,null,"Password"),r.a.createElement(i.g,{name:"password",type:"password",placeholder:"Password",onChange:function(e){var t=e.target;return n(t.value)},value:l}))),r.a.createElement(i.j,null,r.a.createElement(i.k,{title:"Sign In",onClick:a}),r.a.createElement(i.c,null,r.a.createElement("p",null,"Click Sign In to see if you entered the correct password"))))))})),Ee=Object(o.b)(null,(function(e){return{onOpenPopup:function(){return e(te())},onClosePopup:function(){return e(Object(m.goBack)())}}}))((function(e){var t=e.onClosePopup;return r.a.createElement(i.u,null,r.a.createElement(i.z,null,r.a.createElement(i.s,null,r.a.createElement(i.r,{title:"Popup"},r.a.createElement(i.p,null,r.a.createElement(i.i,{onClick:t},"Close"))),r.a.createElement(i.b,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod."))))})),ge=n(50),be=n.n(ge),Oe={id:"io.framework7.testapp",name:"Framework7",theme:"auto",routes:[{path:"/login/",loginScreen:{component:fe}},{path:"/",component:re},{path:"/panel-left/",panel:{component:pe}},{path:"/panel-right/",panel:{component:de}},{path:"/about/",component:le},{path:"/form/",component:ce},{path:"/dynamic-route/blog/:blogId/post/:postId/",component:me},{path:"/popup/",popup:{component:Ee}},{path:"/camera/",popup:{component:Object(o.b)(null,(function(e){return{handleTakePhoto:function(t){e(ne(t)),e(Object(m.goBack)())}}}))((function(e){var t=e.handleTakePhoto;return r.a.createElement(i.u,null,r.a.createElement(be.a,{onTakePhoto:function(e){t(e)}}))}))}},{path:"(.*)",component:se,loginScreen:{component:fe}}],stateKernel:F,clicks:{externalLinks:'a[href="#"]'},panel:{closeByBackdropClick:!1},popup:{closeByBackdropClick:!1},statusbar:{enabled:!1,iosOverlaysWebView:!1},view:{routesBeforeEnter:function(e,t,n,a){var r=X(I.getState());return r||"/login/"===e.url?r&&"/login/"===e.url?a():void n():(a(),void I.dispatch(J()))}}},ye=function(){return r.a.createElement(i.a,{params:Oe},r.a.createElement(i.x,null),r.a.createElement(i.z,{id:"main-view",url:"/",main:!0,className:"ios-edges"}))};n(77),n(78),n(79),n(80);u.a.use(i.A),u.a.use(m.framework7ReduxPlugin);var he=document.getElementById("app");c.a.render(r.a.createElement(s.AppContainer,null,r.a.createElement(o.a,{store:I},r.a.createElement(p.a,{persistor:x},r.a.createElement(ye,null)))),he),document.addEventListener("deviceready",(function(){console.log(navigator.camera)}),!1)}},[[53,1,2]]]);