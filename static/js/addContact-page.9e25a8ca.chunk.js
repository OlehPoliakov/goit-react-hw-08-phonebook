"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[264],{8954:function(e,n,a){a.r(n),a.d(n,{default:function(){return C}});var t=a(428),r=a(9126),s=(a(7632),a(5705)),i=a(7689),c=a(6355),l="GoBack_Button__JkEh-",o="GoBack_Label__wREDN",m=a(3329);var u=function(e){var n=e.text,a=e.path,r=(0,i.s0)();return(0,m.jsxs)(t.Z,{className:l,type:"button",onClick:function(){return r(a)},children:[(0,m.jsx)(c.BMs,{}),(0,m.jsx)("span",{className:o,children:n})]})},d="ContactForm_form__zqkUM",h="ContactForm_Label__bcOrV",_="ContactForm_Input__LESLa",p="ContactForm_Title__WvXtn",x="ContactForm_ErM__NWA6P";function b(e){var n=e.title,a=e.initialValues,i=e.onSubmitForm,c=e.validationSchema,l=e.buttonLabel;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u,{text:"Contact list",path:"/contacts"}),(0,m.jsx)("p",{children:n}),(0,m.jsx)(s.J9,{initialValues:a,validationSchema:c,onSubmit:i,children:function(e){var n=e.values,a=e.handleChange,i=e.handleSubmit,c=e.isSubmitting;return(0,m.jsxs)(s.l0,{className:d,onSubmit:i,children:[(0,m.jsxs)("label",{className:h,children:[(0,m.jsx)("span",{className:p,children:"Name"}),(0,m.jsx)(s.gN,{className:_,type:"text",name:"name",onChange:a,placeholder:"Volodymyr Zelenskyy",title:"Name may contain only letters, apostrophe, dash and spaces.",value:n.name,required:!0}),(0,m.jsx)(s.Bc,{name:"name",render:function(e){return(0,m.jsx)("p",{className:x,children:e})}})]}),(0,m.jsxs)("label",{className:h,children:[(0,m.jsx)("span",{className:p,children:"Number"}),(0,m.jsx)(s.gN,{className:_,type:"tel",name:"number",onChange:a,placeholder:"937-99-92",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:n.number,required:!0}),(0,m.jsx)(s.Bc,{name:"number",render:function(e){return(0,m.jsx)("p",{className:x,children:e})}})]}),(0,m.jsxs)(t.Z,{variant:"outline-primary",type:"submit",disabled:c,children:[c?"...":l,(0,m.jsx)(r.RYR,{size:20}),(0,m.jsx)("p",{children:"Add contact"})]})]})}})]})}var j=a(885),f=a(2350),v=a(5562),N=a(5264);var y=function(e){var n=(0,i.s0)(),a=(0,f.Lr)(),t=(0,j.Z)(a,1)[0],r=(0,f.wY)().data;return function(e){r.some((function(n){return n.name===e.name}))?v.Report.warning("".concat(e.name),"This user is already in the contact list.","OK"):t(e),n("/contacts"),N.Notify.success("The ".concat(e.name," has been added to your contact list."))}},k=a(7417);var C=function(){var e=y();return(0,m.jsx)(b,{title:"Add new contact",initialValues:{name:"",number:""},onSubmitForm:e,validationSchema:k.OD,buttonLabel:"Add contact"})}},7417:function(e,n,a){a.d(n,{$T:function(){return i},OD:function(){return r},TW:function(){return s}});var t=a(2797),r=t.Ry({name:t.Z_().min(3).max(20).required(),number:t.Rx().min(3).required()}),s=t.Ry({email:t.Z_().required().email(),password:t.Z_().required().min(7).max(14)}),i=t.Ry({name:t.Z_().required().min(3).max(30),email:t.Z_().required().email(),password:t.Z_().required().min(7).max(14)})}}]);
//# sourceMappingURL=addContact-page.9e25a8ca.chunk.js.map