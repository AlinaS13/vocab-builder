"use strict";(self.webpackChunkvocab_builder=self.webpackChunkvocab_builder||[]).push([[168],{1010:function(e,r,t){t.d(r,{e:function(){return W}});var a=t(2791),n="AddWordModal_modalOverlay__T67C4",s="AddWordModal_modalContainer__hBW1u",o="AddWordModal_modalCloseButton__vH3Aw",d="AddWordModal_modalCloseSvg__RZr2Y",i="AddWordModal_modalTitle__6JOcu",l="AddWordModal_modalText__mYnVi",c=t(1213),u=t(9439),m=t(9434),h={verbCategoriesWrp:"AddWordForm_verbCategoriesWrp__puM70",filterBox:"AddWordForm_filterBox__sn+e4",filterBtn:"AddWordForm_filterBtn__9xJcF",dropDowList:"AddWordForm_dropDowList__+SBAu",dropDownItem:"AddWordForm_dropDownItem__3PK76",active:"AddWordForm_active__8ejji",hidden:"AddWordForm_hidden__HikGm",radioButtons:"AddWordForm_radioButtons__rDvxq",categoriesName:"AddWordForm_categoriesName__lNgPW",inputSet:"AddWordForm_inputSet__dbUJ5",addWordInputWrp:"AddWordForm_addWordInputWrp__YugIY",addWordInput:"AddWordForm_addWordInput__bZTBn",addWordLabel:"AddWordForm_addWordLabel__DecRb",addWordButtonsWrp:"AddWordForm_addWordButtonsWrp__jEMgI",addWordButton:"AddWordForm_addWordButton__h0OJo",cancelButton:"AddWordForm_cancelButton__7jg81",errorMessage:"AddWordForm_errorMessage__NpXZ7",errorMessageCategory:"AddWordForm_errorMessageCategory__bIsSA"},g=t(9754),_=t(6382),f=t(6856),p=t(233),x=t(5925),A=t(921),j=t(255),b=t(184),v=function(){var e=(0,m.I0)(),r=(0,m.v9)(g.us),t=(0,a.useState)(null),n=(0,u.Z)(t,2),s=n[0],o=n[1],d=(0,a.useState)(!1),i=(0,u.Z)(d,2),l=i[0],c=i[1],v=(0,a.useState)("Categories"),W=(0,u.Z)(v,2),C=W[0],N=W[1],y=(0,a.useState)(!1),F=(0,u.Z)(y,2),B=F[0],w=F[1],k=(0,a.useState)(""),I=(0,u.Z)(k,2),E=I[0],M=I[1],Z=(0,a.useState)(""),S=(0,u.Z)(Z,2),T=S[0],L=S[1],H=(0,a.useState)({}),D=(0,u.Z)(H,2),U=D[0],O=D[1],Q=(0,a.useState)(!1),P=(0,u.Z)(Q,2),z=P[0],J=P[1];(0,a.useEffect)((function(){z&&!r&&e((0,A.CP)())}),[e,z,r]);return(0,b.jsxs)("form",{onSubmit:function(r){r.preventDefault();var t=new RegExp("\\b[A-Za-z'-]+(?:\\s+[A-Za-z'-]+)*\\b"),a=new RegExp("^(?![A-Za-z])[\u0410-\u042f\u0406\u0404\u0407\u0490\u0491\u0430-\u044f\u0456\u0454\u0457\u02bc\\s]+$","u");if(t.test(E))if(a.test(T))if("Categories"!==C){O({});try{var n;n="regular"===s||"irregular"===s?{en:E,ua:T,category:C,isIrregular:B}:{en:E,ua:T,category:C},e((0,A.gi)(n)),e((0,j.jx)())}catch(U){}}else O({message:"Please select a category",code:"category"});else O({message:"Letter must be Ukrainian",code:"ua"});else O({message:"Letter must be English",code:"en"})},children:[(0,b.jsxs)("div",{className:h.verbCategoriesWrp,children:[(0,b.jsxs)("div",{className:h.filterBox,onClick:function(){J(!z)},children:[z?(0,b.jsx)("button",{type:"button",className:h.filterBtn,children:(0,b.jsx)(f.rWj,{size:20,fill:"#FCFCFC"})}):(0,b.jsx)("button",{type:"button",className:h.filterBtn,children:(0,b.jsx)(f.Ix0,{size:20,fill:"#FCFCFC"})}),(0,b.jsx)("p",{className:h.categoriesName,children:C}),(0,b.jsxs)("ul",{className:!0===z?h.dropDowList||h.active:h.hidden,children:[(0,b.jsx)("li",{onClick:function(){N("Categories"),c(null),J(!1),O({})},children:(0,b.jsx)("p",{className:h.categoriesName,children:" Categories"})}),r&&r.map((function(e){return(0,b.jsx)("li",{onClick:function(){N(e),c(e),J(!1),O({})},className:e===l?h.selectedCategory:"",children:(0,b.jsx)("p",{className:h.categoriesName,children:e})},(0,_.x0)())}))]})]}),"verb"===C&&(0,b.jsxs)("div",{className:h.radioButtons,children:[(0,b.jsx)("input",{className:"custom-radio",type:"radio",id:"regularCheckbox",name:"verbModal",value:"regular",checked:"regular"===s,onChange:function(){o("regular"),w(!1)}}),(0,b.jsx)("label",{htmlFor:"regularCheckbox",className:h.radioInput,children:"Regular"}),(0,b.jsx)("input",{className:"custom-radio",type:"radio",value:"irregular",id:"irregularCheckbox",checked:B,onChange:function(){o("irregular"),w(!0)},name:"verbModal"}),(0,b.jsx)("label",{htmlFor:"irregularCheckbox",className:h.radioInput,children:"Irregular"})]}),U&&"category"===U.code&&(0,b.jsx)("div",{className:h.errorMessageCategory,children:U.message})]}),(0,b.jsxs)("div",{className:h.inputSet,children:[(0,b.jsxs)("div",{className:h.addWordInputWrp,children:[(0,b.jsx)("input",{className:h.addWordInput,id:"ua",type:"text",value:T,onChange:function(e){L(e.target.value),O({})},required:!0}),U&&"ua"===U.code&&(0,b.jsx)("div",{className:h.errorMessage,children:U.message}),(0,b.jsxs)("label",{htmlFor:"ua",className:h.addWordLabel,children:[(0,b.jsx)("img",{src:p,alt:p})," Ukrainian"]})]}),(0,b.jsxs)("div",{className:h.addWordInputWrp,children:[(0,b.jsx)("input",{className:h.addWordInput,id:"en",type:"text",value:E,onChange:function(e){M(e.target.value),O({})},required:!0}),U&&"en"===U.code&&(0,b.jsx)("div",{className:h.errorMessage,children:U.message}),(0,b.jsxs)("label",{htmlFor:"en",className:h.addWordLabel,children:[(0,b.jsx)("img",{src:x,alt:x})," English"]})]})]}),(0,b.jsxs)("div",{className:h.addWordButtonsWrp,children:[(0,b.jsx)("button",{className:h.addWordButton,type:"submit",children:"Add"}),(0,b.jsx)("button",{className:h.cancelButton,type:"button",onClick:function(){return e((0,j.jx)())},children:"Cancel"})]})]})},W=function(){var e=(0,m.I0)(),r=(0,m.v9)(g.JQ),t=function(r){"Escape"!==r.code&&r.currentTarget!==r.target||e((0,j.jx)())};return(0,a.useEffect)((function(){if(r)return document.addEventListener("keydown",t),function(){document.removeEventListener("keydown",t)}})),(0,b.jsx)("div",{className:n,onClick:t,children:(0,b.jsxs)("div",{className:s,onClick:function(e){return e.stopPropagation()},children:[(0,b.jsx)("button",{type:"button",className:o,onClick:function(){return e((0,j.jx)())},children:(0,b.jsx)(c.$iT,{color:"#ffffff",className:d})}),(0,b.jsx)("h2",{className:i,children:"Add word"}),(0,b.jsx)("p",{className:l,children:"Adding a new word to the dictionary is an important step in enriching the language base and expanding the vocabulary."}),(0,b.jsx)(v,{})]})})}},4772:function(e,r,t){t.d(r,{A:function(){return B}});var a=t(7689),n=t(1087),s=t(9439),o=t(2791),d={filtersWrp:"Filters_filtersWrp__bzIxK",inputWrp:"Filters_inputWrp__Ggkdu",inputSvg:"Filters_inputSvg__LoBNa",filterBox:"Filters_filterBox__KRNyd",filterBtn:"Filters_filterBtn__Kc6mr",dropDowList:"Filters_dropDowList__5Jzgb",dropDownItem:"Filters_dropDownItem__kdQCF",active:"Filters_active__mluDs",hidden:"Filters_hidden__KrYiF",radioButtons:"Filters_radioButtons__zMmGy",categoriesName:"Filters_categoriesName__QKwI6",radioLabel:"Filters_radioLabel__0509p"},i=t(3853),l=t(6856),c=t(921),u=t(9434),m=t(9754),h=t(6382),g=t(1014),_=t(184),f=function(e){var r=e.handleSearchChange,t=e.searchQuery,n=(0,u.I0)(),f=(0,u.v9)(g.Wl),p=(0,a.TH)(),x=(0,u.v9)(m.us),A=(0,o.useState)(!1),j=(0,s.Z)(A,2),b=j[0],v=(j[1],(0,o.useState)(null)),W=(0,s.Z)(v,2),C=W[0],N=W[1],y=(0,o.useState)("Categories"),F=(0,s.Z)(y,2),B=F[0],w=F[1],k=(0,o.useState)(!1),I=(0,s.Z)(k,2),E=I[0],M=I[1],Z="/dictionary"===p.pathname;(0,o.useEffect)((function(){f&&!x&&n((0,c.CP)())}),[n,f,x]);var S=function(e){w(e),M(!1),Z?n((0,c.b7)({selectedCategory:e})):Z||n((0,c.TY)({selectedCategory:e}))},T=function(e){N(e),Z?n((0,c.b7)({selectedCategory:"verb",isIrregular:e})):Z||n((0,c.TY)({selectedCategory:"verb",isIrregular:e}))};return(0,_.jsxs)("div",{className:d.filtersWrp,children:[(0,_.jsxs)("form",{className:d.inputWrp,children:[(0,_.jsx)("input",{name:"search",type:"search",autoComplete:"off",placeholder:"Find the word",value:t,onChange:r}),(0,_.jsx)(i.jRj,{className:d.inputSvg,color:"#121417"})]}),(0,_.jsx)("div",{children:(0,_.jsxs)("div",{className:d.filterBox,onClick:function(){M(!E)},children:[E?(0,_.jsx)("button",{type:"button",className:d.filterBtn,children:(0,_.jsx)(l.rWj,{size:20,fill:"#121417"})}):(0,_.jsx)("button",{type:"button",className:d.filterBtn,children:(0,_.jsx)(l.Ix0,{size:20,fill:"#121417"})}),(0,_.jsx)("p",{className:d.categoriesName,children:B}),(0,_.jsxs)("ul",{className:!0===E?d.dropDowList||d.active:d.hidden,children:[(0,_.jsx)("li",{onClick:function(){N(null),M(!1),document.getElementsByName("verbFilter").forEach((function(e){e.checked=!1})),T(null),S(null),w("Categories")},children:(0,_.jsx)("p",{className:d.categoriesName,children:"Categories"})}),x&&x.map((function(e){return(0,_.jsx)("li",{onClick:function(){S(e)},className:e===b?d.selectedCategory:"",children:(0,_.jsxs)("p",{className:d.categoriesName,children:[" ",e]})},(0,h.x0)())}))]})]})}),"verb"===B&&(0,_.jsxs)("div",{className:d.radioButtons,children:[(0,_.jsx)("input",{className:"custom-radio-filter",type:"radio",id:"custom-1",name:"verbFilter",value:"regular",checked:"true"===C,onChange:function(){return T("true")}}),(0,_.jsx)("label",{htmlFor:"custom-1",children:(0,_.jsx)("span",{className:d.radioLabel,children:"Regular"})}),(0,_.jsx)("input",{className:"custom-radio-filter",type:"radio",value:"irregular",id:"custom-2",name:"verbFilter",checked:"false"===C,onChange:function(){return T("false")}}),(0,_.jsx)("label",{htmlFor:"custom-2",children:(0,_.jsx)("span",{className:d.radioLabel,children:"Irregular"})})]})]})},p="Dashboard_dashboardFilterWrp__akBQy",x="Dashboard_dashboardWrp__r1+xj",A="Dashboard_dashboardProgres__YRw0F",j="Dashboard_dashboardProgresValue__u2P-n",b="Dashboard_dashboardAddBtnAndLinkWrp__bJ0Yv",v="Dashboard_dashboardAddBtn__p3V8Q",W="Dashboard_dashboardlink__ifgEM",C=t(9126),N=t(8820),y=t(1010),F=t(255),B=function(e){var r=e.handleSearchChange,t=e.searchQuery,s=(0,u.I0)(),o=(0,a.TH)(),d=(0,u.v9)(m.aT),i=(0,u.v9)(m.JQ),l="/dictionary"===o.pathname;return(0,_.jsx)("div",{children:(0,_.jsxs)("div",{className:p,children:[(0,_.jsx)(f,{handleSearchChange:r,searchQuery:t}),(0,_.jsxs)("div",{className:x,children:[(0,_.jsxs)("div",{className:A,children:["To study:",(0,_.jsx)("span",{className:j,children:null===d||void 0===d?void 0:d.totalCount})]}),(0,_.jsxs)("div",{className:b,children:[l&&(0,_.jsxs)("button",{className:v,type:"button",onClick:function(){return s((0,F.JM)())},children:["Add word ",(0,_.jsx)(N.Lfi,{color:"#85AA9F"})]}),i&&(0,_.jsx)(y.e,{}),(0,_.jsxs)(n.OL,{className:W,to:"/training",children:["Train oneself ",(0,_.jsx)(C.lzl,{color:"#85AA9F"})]})]})]})]})})}},5979:function(e,r,t){t.d(r,{B:function(){return i}});t(2791);var a="WordsPagination_pagination__bOMu0",n="WordsPagination_paginationButton__LEhOa",s="WordsPagination_currentPage__g3qyN",o=t(6856),d=t(184),i=function(e){var r=e.page,t=e.totalPages,i=e.onPageChange,l=Array.from({length:t},(function(e,r){return r+1}));return(0,d.jsxs)("div",{className:a,children:[(0,d.jsx)("button",{className:n,onClick:function(){return i(1)},children:(0,d.jsx)(o.obO,{})}),r>1&&(0,d.jsx)("button",{className:n,onClick:function(){return i(r-1)},children:(0,d.jsx)(o.RL9,{})}),l.map((function(e){return 1===e||e===t||e>=r-1&&e<=r+1?(0,d.jsx)("button",{onClick:function(){return i(e)},className:" ".concat(e===r?s:n),children:(0,d.jsx)("span",{children:e})},e):e===r-3||e===r+3?(0,d.jsx)("button",{className:n,onClick:function(){return i(e)},children:"..."},e):null})),r<t&&(0,d.jsx)("button",{className:n,onClick:function(){return i(r+1)},children:(0,d.jsx)(o.Bqb,{})}),(0,d.jsx)("button",{className:n,onClick:function(){return i(t)},children:(0,d.jsx)(o.ykb,{})})]})}},4498:function(e,r,t){t.d(r,{O:function(){return O}});var a=t(1413),n=t(3433),s=t(9439),o=t(2791),d={tableWrp:"WordsTable_tableWrp__ZHVzU",table:"WordsTable_table__z8qAm",trHead:"WordsTable_trHead__g-q1x",thHead:"WordsTable_thHead__LT400",tBody:"WordsTable_tBody__uhU2J",trBody:"WordsTable_trBody__jfJ1v",tdBody:"WordsTable_tdBody__VOSC6",actionBtn:"WordsTable_actionBtn__wVFX8",addToDictionaryBtn:"WordsTable_addToDictionaryBtn__pUhfv"},i=t(1358),l="ActionsModal_modalOverlay__V3yV5",c="ActionsModal_modalContainer__ztCIZ",u="ActionsModal_actionBtnWrp__zXsmK",m=t(6355),h=t(3853),g=t(921),_=t(9434),f="EditWordModal_modalOverlay__6plEZ",p="EditWordModal_modalContainer__b7Dqs",x="EditWordModal_modalCloseButton__eNzbg",A="EditWordModal_modalCloseSvg__spS+Y",j=t(1213),b="EditWordForm_inputSet__XYKMT",v="EditWordForm_addWordInputWrp__92BfX",W="EditWordForm_addWordInput__FfSdq",C="EditWordForm_addWordLabel__J897f",N="EditWordForm_addWordButtonsWrp__bG9JN",y="EditWordForm_addWordButton__BgwYH",F="EditWordForm_cancelButton__AcKoZ",B="EditWordForm_errorMessage__CcM1-",w=t(233),k=t(5925),I=t(9655),E=t(184),M=function(e){var r=e.onClose,t=e.currentWord,a=(0,_.I0)(),n=(0,o.useState)(t.en),d=(0,s.Z)(n,2),i=d[0],l=d[1],c=(0,o.useState)(t.ua),u=(0,s.Z)(c,2),m=u[0],h=u[1],f=(0,o.useState)({}),p=(0,s.Z)(f,2),x=p[0],A=p[1];return(0,E.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=new RegExp("\\b[A-Za-z'-]+(?:\\s+[A-Za-z'-]+)*\\b"),s=new RegExp("^(?![A-Za-z])[\u0410-\u042f\u0406\u0404\u0407\u0490\u0491\u0430-\u044f\u0456\u0454\u0457\u02bc\\s]+$","u");if(i&&m)if(n.test(i))if(s.test(m)){A({});try{var o;o={id:t._id,data:{en:i,ua:m,category:t.category,isIrregular:t.isIrregular}},a((0,g.A8)(o)),r()}catch(x){401===x.response.status&&I.Am.error("Error: "+x.response.status)}}else A({message:"Letter must be Ukrainian",code:"ua"});else A({message:"Letter must be English",code:"en"});else A({message:"Please fill in both fields",code:"emptyFields"})},children:[(0,E.jsxs)("div",{className:b,children:[(0,E.jsxs)("div",{className:v,children:[(0,E.jsx)("input",{className:W,id:"ua",type:"text",defaultValue:t.ua,onChange:function(e){h(e.target.value),A({})}}),x&&"ua"===x.code&&(0,E.jsx)("div",{className:B,children:x.message}),(0,E.jsxs)("label",{htmlFor:"ua",className:C,children:[(0,E.jsx)("img",{src:w,alt:w})," Ukrainian"]})]}),(0,E.jsxs)("div",{className:v,children:[(0,E.jsx)("input",{className:W,id:"en",type:"text",defaultValue:t.en,onChange:function(e){l(e.target.value),A({})}}),x&&"en"===x.code&&(0,E.jsx)("div",{className:B,children:x.message}),"emptyFields"===x.code&&(0,E.jsx)("div",{className:B,children:x.message}),(0,E.jsxs)("label",{htmlFor:"en",className:C,children:[(0,E.jsx)("img",{src:k,alt:k})," English"]})]})]}),(0,E.jsxs)("div",{className:N,children:[(0,E.jsx)("button",{className:y,type:"submit",children:"Save"}),(0,E.jsx)("button",{className:F,type:"button",onClick:r,children:"Cancel"})]})]})},Z=function(e){var r=e.isOpen,t=e.onClose,a=e.currentWord,n=function(e){"Escape"!==e.code&&e.currentTarget!==e.target||t()};return(0,o.useEffect)((function(){if(r)return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}})),(0,E.jsx)("div",{className:f,onClick:t,children:(0,E.jsxs)("div",{className:p,onClick:function(e){return e.stopPropagation()},children:[(0,E.jsx)("button",{type:"button",className:x,onClick:t,children:(0,E.jsx)(j.$iT,{color:"#ffffff",className:A})}),(0,E.jsx)(M,{onClose:t,currentWord:a})]})})},S=function(e){var r=e.isOpen,t=e.onClose,a=e.currentWordId,n=e.currentWord,d=(0,_.I0)(),i=(0,o.useState)(!1),f=(0,s.Z)(i,2),p=f[0],x=f[1],A=function(e){"Escape"!==e.code&&e.currentTarget!==e.target||t()};(0,o.useEffect)((function(){if(r)return document.addEventListener("keydown",A),function(){document.removeEventListener("keydown",A)}}));return(0,E.jsxs)("div",{className:l,onClick:t,children:[(0,E.jsx)("div",{className:c,onClick:function(e){return e.stopPropagation()},children:(0,E.jsxs)("div",{className:u,children:[(0,E.jsxs)("button",{type:"button",onClick:function(){x(!0)},children:[(0,E.jsx)(h.IYd,{color:"85AA9F"}),"Edit"]}),(0,E.jsxs)("button",{type:"button",onClick:function(){d((0,g.x8)(a)).then((function(e){e.payload?(d((0,g.aC)()),I.Am.success("Word successfully added to dictionary")):I.Am.error("Failed to add word to dictionary")})).catch((function(e){I.Am.error("Failed to add word to dictionary")})),t()},children:[(0,E.jsx)(m.lp8,{color:"85AA9F"}),"Delete"]})]})}),p&&(0,E.jsx)(Z,{isOpen:p,onClose:function(){return x(!1)},currentWord:n})]})},T=t(1640),L=t(890),H=function(e){var r=e.value;return(0,E.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,E.jsx)(L.Z,{variant:"body2",color:"textSecondary",style:{marginRight:16,fontSize:22,fontWeight:500,color:"#121417",fontFamily:"inherit"},children:"".concat(Math.round(r),"%")}),(0,E.jsx)(T.Z,{variant:"determinate",value:r,style:{color:"#2BD627",width:"26px",height:"26px",borderRadius:"100%",boxShadow:"inset 0 0 0px 3px #D4F8D3",backgroundColor:"transparent"},thickness:5})]})},D=t(7689),U=t(9126),O=function(e){var r=e.ownWords,t=e.allWords,l=(0,D.TH)(),c=(0,_.I0)(),u="/dictionary"===l.pathname,m=(0,o.useState)(!1),h=(0,s.Z)(m,2),f=h[0],p=h[1],x=(0,o.useState)(null),A=(0,s.Z)(x,2),j=A[0],b=A[1],v=(0,o.useState)(null),W=(0,s.Z)(v,2),C=W[0],N=W[1],y=function(e){p(!0),b(e.original._id),N(e.original)},F=(0,o.useMemo)((function(){return[{Header:"Word",accessor:"en"},{Header:"Translation",accessor:"ua"},{Header:"Category",accessor:"category"}].concat((0,n.Z)(u?[{Header:"Progress",accessor:"progress",Cell:function(e){var r=e.cell;return(0,E.jsx)(H,{value:r.value})}},{Header:"",accessor:"actions",Cell:function(e){var r=e.row;return(0,E.jsx)("button",{className:d.actionBtn,onClick:function(){return y(r)},children:"..."})}}]:[{Header:"",accessor:"addToDictionary",Cell:function(e){var r=e.row;return(0,E.jsxs)("button",{className:d.addToDictionaryBtn,onClick:function(){return function(e){c((0,g._R)(e.original._id)).then((function(e){e.payload?c((0,g.aC)()):I.Am.error("Failed to add word to dictionary")})).catch((function(e){I.Am.error("Failed to add word to dictionary")}))}(r)},children:["Add to Dictionary ",(0,E.jsx)(U.lzl,{color:"#85AA9F"})]})}}]))}),[u]),B=(0,o.useMemo)((function(){return[r]}),[r]),w=(0,o.useMemo)((function(){return[t]}),[t]),k=(0,i.useTable)({columns:F,data:u?B[0]:w[0]}),M=k.getTableProps,Z=k.getTableBodyProps,T=k.headerGroups,L=k.rows,O=k.prepareRow;return(0,E.jsxs)("div",{className:d.tableWrp,children:[(0,E.jsxs)("table",(0,a.Z)((0,a.Z)({},M()),{},{className:d.table,children:[(0,E.jsx)("thead",{className:d.thead,children:T.map((function(e){return(0,E.jsx)("tr",(0,a.Z)((0,a.Z)({className:d.trHead},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return(0,E.jsx)("th",(0,a.Z)((0,a.Z)({className:d.thHead},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),(0,E.jsx)("tbody",(0,a.Z)((0,a.Z)({className:d.tBody},Z()),{},{children:L.map((function(e){return O(e),(0,E.jsx)("tr",(0,a.Z)((0,a.Z)({className:d.trBody},e.getRowProps()),{},{children:e.cells.map((function(e){return(0,E.jsx)("td",(0,a.Z)((0,a.Z)({className:d.tdBody},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]})),f&&(0,E.jsx)(S,{isOpen:f,onClose:function(){return p(!1)},currentWordId:j,currentWord:C})]})}},9754:function(e,r,t){t.d(r,{JQ:function(){return i},OP:function(){return u},SA:function(){return a},Uq:function(){return l},aT:function(){return s},oH:function(){return c},oQ:function(){return d},us:function(){return n},w_:function(){return o}});var a=function(e){return e.words.allWords},n=function(e){return e.words.categories},s=function(e){return e.words.statistics},o=function(e){return e.words.userWords},d=function(e){return e.words.isLoading},i=function(e){return e.words.isModalAddWordOpen},l=function(e){return e.words.tasks},c=function(e){return e.words.tasks.length},u=function(e){return e.words.tasksAnswers}},233:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIZSURBVHgBxZfPbtNAEMZnxg5ClIP7Bs4JccJB4kwq8QDhCeANgAMHTkkPCAkOTd+gvEFeADW5I9WckLjUb2BLoKjCHQ+z68Y0iUON6j+/Q2JnN/vNfrs7HiNUJJjEHtxzRg7QUwAJAMEHAc82IiR6HelFKJAtsiXPwsl+UmVcvFH4Q+y71HslJC8LwUrgCXN6GL7bj/7Za1eDmTHtuWMUeA23ABGnX9/ef7OzvexHM2vH6Z2q1T7UAkbqxkGZG7Ql/jEO6hU3iJ3Qk/e/gs2WNQfqn/mW3JYTaw40K27InbAnajOAx59+HjUr/jcId683Xt3ZJcitd8+hRZgv+2YprANqyxhahpDs8cbgKPac1I2hfRJeXvaJUmcE3eCRpnZCm9u7wWiTfgbQGRIQSBtHbye+OQX/8YSrHQ/lxzOBDtE9IJUKh4ZIyDwgoDs0E2byDTpDQl0CmkNXsCwIeumss31wkc0I+3NT0X6G1pETHMyTvB5gnkLbMB+aLxsAPpxHGtExtEWGx7nmtZpQzoce/HbOtI72oUlEInzwpb+6LUoyuxcyPjAdoCnM2EbjGmtFqbUF+XkjQZgxdeyV9YVmad/vQx/IOa1tOa5mviluoLL+tuMdHtSyMXXDwZIHZeJW66b/X7kxUTdeQGU0sWWaW4Snu4QrB1AMeaan5C6NtJwdajCP8ncI9ApB+1CTEJgWcJHOTJKpMu4faU3WyuvyqhsAAAAASUVORK5CYII="},5925:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPwSURBVHgBxVdNSBRhGH5nGnfRftyNIipaJop+DtX2R0VGealD5a5BEUK4hyIMITs5XtIuOZ1UiDwUuF7EurgtGkTEJtkhrPy5pELtpKT057ol1urq9L6zju7azM6MG/jAwMw37/c+z3zfvD8fA2bhbXHs2LDK+7r6wPH4gOT+fvACLwM46BUDMLam85HEbeO7D1W8ae8b/hmAQOGYGbecCWIe2KzreOebiM84ZBlp7TaQk0wUIXabG9+50caH9g1wrs0PM5O3UIiUzj2bhtgB51pr0FkYn8pg9mvNQyYh4Y2Xn9WAVQGRSIQXCrd0zRJnhM+jsTKhsTccFqp5MCMg7L3mZhgmJHhcPF6QKchH6funfEz0h8h3WgEjqDIWeN4yLt7n1cmZiJglh3HxAawQrvBO/+0WWl1dAXU7T4fIkCagCMhExAJyvC7TMH8nOBRS/q9ZzEUB/Szi40EePCehVIA5ATRZFdD06osZbj1yQP+gcLBZlfh4g8aWKW8w1H79kZvptqM/Cra8fZC3w6E4INjy9uNzLuTmcLDLtQLk6DhM1DenkC4vuQhs7krF5tLbJ3rkqvlh2H6+EfoejiW2gLVVJjsjw7s7TyoOkrej6Og6MELBy6AReQIMp0QYm9gPjNkF0BNhhN9NbcbkigCmmLg5Sq+YvTSd0Z67PGehQHHcCstc6yG76AykA5FnF51OzO/4mvCxxq5l6sjhsr1MNBptwBTqAwuYHhyBb7u9KWNrewOKQCvAfOPn4gNhN9jtliZODw6bGjNELOZm+mF7RLac5/8PqIqyS0VOIG4WlhgsLQMsEYib+dHZ00XNhJWJFAWjZ0pSxla31luOAohNdnPsVlcPhoMlAVog8kWEYTd35Oa7FxOxmWI9IyosagqmZGSUiCgTUtakZBTM84AY/KRrm8Ox7VzfEDaQbBa1TY505OSUnBsJIGLaIrIvwKo6ePSUdiomzEwFWKV7leVGLXK1DJMzqgdG5CqoDqg1hMqydj/B+Ik7EYZyvNaInBwGj5014p7rGQxFUMcMakdErbMs16Ujp8qou5RJSK5+eiI2Om11ars+fy6Q41WCd4uHmlE9cp2qpilC/Ri1LJM/6rTAc0oSi3fPddvzAnA/yhsi+XgXoqbU6pebFCFdFeL5YpJdysnI6XRK2DoXUmdMzeliyXVESFN9Hws3ixVSss0/tWBz4F63XfDlI7mUCXmyCLwk7DnyyffC95rFiFSWF2zaq/wsmQJ/brHlw15aXa3XuodTnEBFqgz7tlpgsqqwcuhmSw0kcguFt8Hh1Ph0nHDgQyFl1MPhUp7AIrIHK1nK8RzHJMrtlF4pw5k9nv8FO2wEzP2jMFgAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=168.45ad47ec.chunk.js.map