webpackJsonp([1],{0:function(t,e,n){t.exports=n("NHnr")},J8a1:function(t,e){},L1Sg:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("/5sW"),s={name:"Footer",data:function(){return{questions:[{q:"What is the allowable tolerance of peanuts in chunky peanut butter?"},{q:"If you pour peanuts on jellied bread, is that still a PB&J?"},{q:"Is PB and J on toasted bread still a PB&J?"},{q:"Is PB and J on pumpernickel or gluten-free bread considered a PB&J?"},{q:"On which side should a PB&J land when dropped?"},{q:"If a PB&J falls in the forest, and there's no one there to eat it, is it still a PB&J?"},{q:"Is dipping bread in PB and J still a PB&J?"},{q:"What is the allowable tolerance of peanuts in chunky PB?"}],currentQuestion:{},qChange:!1}},created:function(){var t=this,e=6e3,n=function n(){var a=Math.floor(Math.random()*t.questions.length);t.currentQuestion=t.questions[a],t.qChange=!t.qChange,setTimeout(n,e)};n()}},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("transition",{attrs:{name:"fade"}},[n("p",{key:t.qChange},[t._v(t._s(t.currentQuestion.q))])])],1)},r=[],o=n("XyMi");function c(t){n("qmr0")}var u=!1,l=c,h="data-v-3f1702a0",d=null,v=Object(o["a"])(s,i,r,u,l,h,d),p=v.exports,f={name:"app",components:{Footer:p}},_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("The Peanut Butter and Jelly Sandwich: Properties, Mechanics, and Assembly")]),t._v(" "),n("h4",[t._v("By: Spencer Buhler, Nicholas Lush, Cole Lyman, and Mark Standring")]),t._v(" "),n("router-nav"),t._v(" "),n("router-view"),t._v(" "),n("Footer")],1)},m=[];function g(t){n("J8a1")}var b=!1,B=g,q=null,P=null,J=Object(o["a"])(f,_,m,b,B,q,P),j=J.exports,w=n("/ocq"),y=n("RgRr"),C={data:function(){return{images:[{src:"images/pbj1.jpg",caption:"This is a happy sandwich."},{src:"images/pbj2.jpg",caption:"This is a loving sandwich."},{src:"images/pbj3.jpg",caption:"This is a gross sandwich."}]}},components:{Slider:y["Slider"],SliderItem:y["SliderItem"]}},k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("slider",{attrs:{animation:"fade",auto:!0,height:"400px"}},t._l(this.images,function(e,a){return n("slider-item",{key:a},[n("div",{staticClass:"row"},[n("img",{attrs:{src:e.src,height:"350"}}),t._v(" "),n("p",{staticClass:"caption"},[n("strong",[t._v("Figure "+t._s(a+1)+":")]),t._v(" "+t._s(e.caption))])])])})),t._v(" "),n("h3",[t._v("What constitutes a Peanut Butter and Jelly (PB&J) sandwich?")]),t._v(" "),t._m(0)],1)},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"six columns"},[n("h4",[t._v("A PB&J constitutes:")]),t._v(" "),n("ul",[n("li",{staticClass:"tick"},[t._v(" A grain-based substrate")]),t._v(" "),n("li",{staticClass:"tick"},[t._v(" Enjoyment for the given partaker")]),t._v(" "),n("li",{staticClass:"tick"},[t._v(" Peanut butter (PB) and some jam or jelly-like (J) substance on the substrate")]),t._v(" "),n("li",{staticClass:"tick"},[t._v(" A horizontal interface between the PB and the J")])])]),t._v(" "),n("div",{staticClass:"six columns"},[n("h4",[t._v("A PB&J does not constitute:")]),t._v(" "),n("ul",[n("li",{staticClass:"cross"},[t._v(" Any substance that detracts from the enjoyment of the partaker")]),t._v(" "),n("li",{staticClass:"cross"},[t._v(" PB substitutes, e.g., Almond Butter, Soynut Butter, Coconut Butter, etc.")])])])])}];function x(t){n("XjYS")}var M=!1,A=x,E="data-v-5f22d71f",I=null,$=Object(o["a"])(C,k,S,M,A,E,I),O=$.exports,T={},F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("\n    Here is where we explain the Mechanics of the peanut buffer jelly sandwich.\n  ")])])}];function L(t){n("L1Sg")}var Q=!1,W=L,X="data-v-5c8702ce",N=null,R=Object(o["a"])(T,F,H,Q,W,X,N),Y=R.exports;a["default"].use(w["a"]);var z=new w["a"]({routes:[{path:"/",name:"Home",component:O},{path:"/mechanics",name:"Mechanics",component:Y}]}),G=n("SMXG"),D=n.n(G);a["default"].config.productionTip=!1,a["default"].use(D.a),new a["default"]({data:{images:[{src:"",caption:""}],questions:[{q:""}],currentQuestion:{q:""}},router:z,render:function(t){return t(j)}}).$mount("#app")},XjYS:function(t,e){},qmr0:function(t,e){}},[0]);
//# sourceMappingURL=app.f157cde1.js.map