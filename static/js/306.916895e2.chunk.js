"use strict";(self.webpackChunkvocab_builder=self.webpackChunkvocab_builder||[]).push([[306],{8306:function(e,a,r){r.r(a),r.d(a,{default:function(){return p}});var n=r(9439),t=r(9434),u=r(4772),s=r(4498),c="RecommendPage_recommendContainer__-MEAL",i=r(9754),l=r(921),o=r(5979),g=r(1980),h=r(2791),f=r(184),p=function(){var e=(0,t.I0)(),a=(0,h.useState)(null),r=(0,n.Z)(a,2),s=r[0],i=r[1],o=(0,h.useState)(""),g=(0,n.Z)(o,2),p=g[0],v=g[1];(0,h.useEffect)((function(){e((0,l.aC)())}),[e]);var P=(0,h.useCallback)((function(a){clearTimeout(s);var r=setTimeout((function(){e((0,l.TY)({searchQuery:a.trim()}))}),300);i(r)}),[s,e]);return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{className:c,children:[(0,f.jsx)(u.A,{handleSearchChange:function(e){var a=e.target.value;v(a),P(a)},searchQuery:p}),(0,f.jsx)(d,{searchQuery:p})]})})},d=function(e){var a=e.searchQuery,r=(0,t.I0)(),n=(0,t.v9)(i.oQ),u=(0,t.v9)(i.SA),c=u.results,p=u.totalPages,d=u.page,v=u.perPage,P=(0,t.v9)(i.SA);(0,h.useEffect)((function(){r((0,l.TY)({searchQuery:a,page:P.page,perPage:P.perPage}))}),[r,a,P.page,P.perPage]);return(0,f.jsx)(f.Fragment,{children:n?(0,f.jsx)(g.a,{}):(0,f.jsxs)("div",{children:[c.length>0?(0,f.jsx)(s.O,{allWords:c}):(0,f.jsx)("p",{children:" not found"}),p>1&&(0,f.jsx)(o.B,{page:d,totalPages:p,perPage:v,onPageChange:function(e){r((0,l.TY)({searchQuery:a,page:e,perPage:l.TY.perPage}))}})]})})}}}]);
//# sourceMappingURL=306.916895e2.chunk.js.map