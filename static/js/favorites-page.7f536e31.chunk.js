(this["webpackJsonphw-task-foodify-application"]=this["webpackJsonphw-task-foodify-application"]||[]).push([[0],{36:function(e,t,a){"use strict";var n=a(42),c=a(45),i=a(43),r=a.n(i),s=a(1),o=["title","className"],d=function(e){var t=e.title,a=e.className,i=Object(c.a)(e,o),d=[a,r.a.button].join(" ");return Object(s.jsx)("button",Object(n.a)(Object(n.a)({className:d},i),{},{children:t}))};d.defaultProps={className:"",title:"Button"},t.a=d},40:function(e,t,a){e.exports={cardBox:"RecipeCard_cardBox__2GFt7",cardImgBox:"RecipeCard_cardImgBox__iNjcU",cardImg:"RecipeCard_cardImg__YGvpV",cardDescr:"RecipeCard_cardDescr__1bRwl",cardTitle:"RecipeCard_cardTitle__27zOk",dishTitle:"RecipeCard_dishTitle__3nNf-",areaBox:"RecipeCard_areaBox__2ybQU",hiddenText:"RecipeCard_hiddenText__3ju-A"}},41:function(e,t,a){e.exports={recipeList:"RecipeList_recipeList__1PTsI"}},43:function(e,t,a){e.exports={button:"Button_button__2_apU"}},44:function(e,t,a){"use strict";a(0);var n=a.p+"static/media/Placeholder.0ee1dc9b.jpg",c=a(40),i=a.n(c),r=a(1),s=function(e){var t=e.title,a=e.image,n=e.description,c=(e.category,e.area);return Object(r.jsxs)("li",{className:i.a.cardBox,children:[Object(r.jsx)("div",{className:i.a.cardImgBox,children:Object(r.jsx)("img",{className:i.a.cardImg,src:a,alt:t})}),Object(r.jsxs)("div",{className:i.a.cardDescr,children:[Object(r.jsxs)("div",{className:i.a.cardTitle,children:[Object(r.jsx)("h2",{className:i.a.dishTitle,children:t}),Object(r.jsx)("span",{className:i.a.areaBox,children:c})]}),Object(r.jsx)("p",{className:i.a.hiddenText,onClick:function(e){return e.target.classList.remove("".concat(i.a.hiddenText))},children:n})]})]})};s.defaultProps={imgSrc:n,description:""};var o=s,d=a(41),l=a.n(d);t.a=function(e){var t=e.recipeList;return Object(r.jsx)("ul",{className:l.a.recipeList,children:t.map((function(e){var t=e.idMeal,a=e.strMeal,n=e.strInstructions,c=e.strMealThumb,i=e.strCategory,s=e.strArea;return Object(r.jsx)(o,{title:a,description:n,image:c,category:i,area:s},t)}))})}},78:function(e,t,a){e.exports={backdrop:"Modal_backdrop__2vaDg",content:"Modal_content__2__Qm"}},79:function(e,t,a){e.exports={container:"AddDishForm_container__j6sYP",title:"AddDishForm_title__1vTjJ",form:"AddDishForm_form__1v72V",input:"AddDishForm_input__2JOIM",button:"AddDishForm_button__2mts8"}},80:function(e,t,a){e.exports={addBtn:"Pages_addBtn__1xEIG"}},81:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(34),c=a(35),i=a(39),r=a(38),s=a(0),o=a(83),d=a(16),l=a(44),u=a(36),h=a(15),p=a(78),j=a.n(p),m=a(1),b=document.querySelector("#modal-root"),_=function(e){var t=e.children,a=e.onClose;Object(s.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]);return Object(h.createPortal)(Object(m.jsx)("div",{className:j.a.backdrop,onClick:function(e){e.currentTarget===e.target&&a()},children:Object(m.jsx)("div",{className:j.a.content,children:t})}),b)},f=a(37),x=a(79),v=a.n(x),O=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={title:"",description:""},e.handleChange=function(t){var a=t.target,n=a.name,c=a.value;e.setState(Object(f.a)({},n,c))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.title,c=a.description;e.props.onAddDish(n,c),e.setState({title:"",description:""})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.description;return Object(m.jsxs)("div",{className:v.a.container,children:[Object(m.jsx)("h2",{className:v.a.title,children:"Add custom dish"}),Object(m.jsxs)("form",{className:v.a.form,onSubmit:this.handleSubmit,children:[Object(m.jsx)("input",{className:v.a.input,type:"text",name:"name",value:t,placeholder:"Dish title",onChange:this.handleChange,required:!0}),Object(m.jsx)("textarea",{className:v.a.input,type:"tel",name:"number",value:a,placeholder:"Dish description...",onChange:this.handleChange,required:!0}),Object(m.jsx)(u.a,{title:"Add custom dish",className:v.a.button,type:"submit"})]})]})}}]),a}(s.Component),g=a(80),N=a.n(g),C=(a(81),function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={favorites:[],showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleAddBtnClick=function(e){e.preventDefault()},e.onAddDish=function(){e.toggleModal()},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.favorites,a=e.showModal;return Object(m.jsxs)(d.a,{children:[Object(m.jsx)(u.a,{type:"button",title:"Add custom dish",className:N.a.addBtn,onClick:this.toggleModal}),Object(m.jsx)(l.a,{recipeList:t}),Object(m.jsx)(o.a,{in:a,unmountOnExit:!0,classNames:"modal",timeout:250,children:Object(m.jsx)(_,{onClose:this.toggleModal,children:Object(m.jsx)(O,{onSave:this.onAddDish})})})]})}}]),a}(s.Component));t.default=C}}]);
//# sourceMappingURL=favorites-page.7f536e31.chunk.js.map