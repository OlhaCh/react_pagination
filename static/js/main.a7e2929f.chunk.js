(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,c,a){},12:function(e,c,a){"use strict";a.r(c);var t=a(5),n=a.n(t),i=a(4),r=a(1),l=(a(10),a(2)),s=a.n(l);function o(e,c){for(var a=[],t=e;t<=c;t+=1)a.push(t);return a}var j=a(0),u=function(e){var c=e.total,a=e.perPage,t=e.currentPage,n=e.onPageChange,i=Math.ceil(c/Number(a)),r=o(1,i);return Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:s()("page-item",{disabled:1===t}),children:Object(j.jsx)("a",{"data-cy":"prevLink",href:"#".concat(t),"aria-disabled":"true",className:"page-link",onClick:function(){t<1||n(t-1)},children:"\xab"})}),r.map((function(e){return Object(j.jsx)("li",{className:s()("page-item",{active:e===t}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(t),onClick:function(){return n(e)},children:e})},e)})),Object(j.jsx)("li",{className:s()("page-item",{disabled:t===i}),children:Object(j.jsx)("a",{"data-cy":"nextLink",href:"#".concat(t),"aria-disabled":"false",className:"page-link",onClick:function(){t>c||n(t+1)},children:"\xbb"})})]})},d=o(1,42).map((function(e){return"".concat(e)})),b=function(){var e=Object(r.useState)("5"),c=Object(i.a)(e,2),a=c[0],t=c[1],n=Object(r.useState)(1),l=Object(i.a)(n,2),s=l[0],o=l[1],b=(s-1)*Number(a),h=b+Number(a),m=h>42?42:h,p=d.slice(b,m);return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat(b+1," - ").concat(m," of ").concat(d.length,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:a,onChange:function(e){return function(e){o(1),t(e.target.value)}(e)},children:[Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"20",children:"20"})]})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(u,{total:d.length,perPage:a,currentPage:s,onPageChange:function(e){return o(e)}}),Object(j.jsx)("ul",{children:p.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:"Item ".concat(e)},e)}))})]})};n.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.a7e2929f.chunk.js.map