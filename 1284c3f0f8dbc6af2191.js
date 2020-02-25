(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{382:function(e,t){},430:function(e,t,i){},443:function(e,t,i){"use strict";var r=i(430);i.n(r).a},459:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"card"},[e._m(0),i("div",{staticClass:"card__content"},[i("form",{staticClass:"edit-form edit-form--reviews form--strong",on:{submit:function(t){return t.preventDefault(),e.reviewCard(e.newReview)},reset:function(t){return t.preventDefault(),e.hideAddingCard(t)}}},[i("div",{staticClass:"edit-form__column"},[i("input",{staticClass:"edit-form__file",attrs:{type:"file",name:"reviews-image",id:"upload-pic"},on:{change:e.appendFileAndRenderPhoto}}),i("div",{staticClass:"edit-form__row"},[i("div",{staticClass:"edit-form__frame",class:{filled:e.renderedPhoto.length},style:e.renderedBackground})]),e._m(1),i("vc-tooltip-input",{attrs:{errorText:e.validation.firstError("newReview.photo")}})],1),i("div",{staticClass:"edit-form__column"},[i("div",{staticClass:"edit-form__row-double"},[i("div",{staticClass:"edit-form__row"},[i("vc-input",{attrs:{type:"text",name:"author",title:"Имя автора",placeholder:"Имя автора",errorText:e.validation.firstError("newReview.author")},model:{value:e.newReview.author,callback:function(t){e.$set(e.newReview,"author",t)},expression:"newReview.author"}})],1),i("div",{staticClass:"edit-form__row"},[i("vc-input",{attrs:{type:"text",name:"occ",title:"Титул автора",placeholder:"Титул автора",errorText:e.validation.firstError("newReview.occ")},model:{value:e.newReview.occ,callback:function(t){e.$set(e.newReview,"occ",t)},expression:"newReview.occ"}})],1)]),i("div",{staticClass:"edit-form__row"},[i("vc-input",{attrs:{type:"textarea",name:"text",title:"Отзыв",placeholder:"Отзыв автора",errorText:e.validation.firstError("newReview.text")},model:{value:e.newReview.text,callback:function(t){e.$set(e.newReview,"text",t)},expression:"newReview.text"}})],1),i("div",{staticClass:"edit-form__row"},[i("div",{staticClass:"controls edit-form__btns"},[e._m(2),i("div",{staticClass:"controls__btn"},[i("button",{staticClass:"btn btn--gradient",class:{"is-blocked":e.isBlocked},attrs:{type:"submit"}},[e._v("Сохранить")])])])])])])])])};r._withStripped=!0;var n=i(152),o=i.n(n),s=i(30),a=i(102);function c(e,t,i,r,n,o,s){try{var a=e[o](s),c=a.value}catch(e){return void i(e)}a.done?t(c):Promise.resolve(c).then(r,n)}function d(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),r.forEach(function(t){u(e,t,i[t])})}return e}function u(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var l=o.a.Validator,v={mixins:[o.a.mixin],name:"reviews-add-new",props:["review"],data:function(){return{isBlocked:!1,renderedPhoto:"",newReview:d({},this.review)}},components:{vcInput:function(){return i.e(0).then(i.bind(null,458))},vcTooltipInput:function(){return i.e(2).then(i.bind(null,463))}},validators:{"newReview.author":function(e){return l.value(e).required()},"newReview.occ":function(e){return l.value(e).required()},"newReview.text":function(e){return l.value(e).required()},"newReview.photo":function(e){return l.value(e).required()}},methods:d({},Object(a.b)("reviews",["saveReview","updateReview"]),{hideAddingCard:function(){this.$emit("hideAddingCard")},appendFileAndRenderPhoto:function(e){var t=this;this.newReview.photo=e.target.files[0];var i=new FileReader;try{i.readAsDataURL(this.newReview.photo),i.onload=function(){t.renderedPhoto=i.result}}catch(t){Object(s.a)(e,t)}},reviewCard:function(){var e,t=(e=regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$validate();case 2:if(!e.sent){e.next=14;break}if(this.isBlocked=!0,!Object.keys(this.newReview).some(function(e){return t.newReview[e]!==t.review[e]})){e.next=13;break}if(!this.newReview.id){e.next=11;break}return e.next=9,this.updateReview(this.newReview);case 9:e.next=13;break;case 11:return e.next=13,this.saveReview(this.newReview);case 13:this.$emit("hideAddingCard");case 14:case"end":return e.stop()}},e,this)}),function(){var t=this,i=arguments;return new Promise(function(r,n){var o=e.apply(t,i);function s(e){c(o,r,n,s,a,"next",e)}function a(e){c(o,r,n,s,a,"throw",e)}s(void 0)})});return function(){return t.apply(this,arguments)}}()}),computed:d({},Object(a.c)("reviews",["getReviews"]),{renderedBackground:function(){return this.renderedPhoto?"background-image: url(".concat(this.renderedPhoto,");"):""}}),created:function(){this.newReview=d({},this.review),this.review.photo&&(this.renderedPhoto="https://webdev-api.loftschool.com/"+this.review.photo)},watch:{review:function(){this.newReview=d({},this.review),this.renderedPhoto="https://webdev-api.loftschool.com/"+this.review.photo}}},w=(i(443),i(57)),f=Object(w.a)(v,r,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card__header"},[t("div",{staticClass:"card__column"},[t("div",{staticClass:"page-subtitle"},[this._v("Новый отзыв")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"edit-form__row"},[t("div",{staticClass:"edit-form__button"},[t("label",{staticClass:"btn btn--link",attrs:{for:"upload-pic"}},[this._v("Добавить фото")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"controls__btn"},[t("button",{staticClass:"btn btn--link",attrs:{type:"reset"}},[this._v("Отмена")])])}],!1,null,"3d50e43c",null);f.options.__file="src/admin/components/reviews-add-new.vue";t.default=f.exports}}]);