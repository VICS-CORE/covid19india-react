(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[10],{265:function(e,t,a){"use strict";a.r(t);var n=a(107),l=a(82),r=a(15),c=a(30),i=a.n(c),s=a(74),o=a(7),u=a.n(o),d=a(110),m=a(297),b=a(124),f=(a(148),Object(o.lazy)((function(){return Promise.all([a.e(2),a.e(20)]).then(a.bind(null,249))}))),j=Object(o.lazy)((function(){return Promise.all([a.e(29),a.e(13)]).then(a.bind(null,250))})),v=Object(o.lazy)((function(){return Promise.all([a.e(1),a.e(26),a.e(7)]).then(a.bind(null,220))})),h=Object(o.lazy)((function(){return Promise.all([a.e(5),a.e(18)]).then(a.bind(null,236))})),O=Object(o.lazy)((function(){return Promise.all([a.e(0),a.e(4),a.e(15)]).then(a.bind(null,237))})),E=Object(o.lazy)((function(){return a.e(9).then(a.bind(null,132))})),g=Object(o.lazy)((function(){return Promise.all([a.e(5),a.e(12)]).then(a.bind(null,238))}));function T(e){var t=new Date(e);return t.setDate(t.getDate()-1),Object(s.a)(t,"yyyy-MM-dd")}function p(e,t,a){var n={};for(var l in e)for(var r in n[l]={},e[l])r!==a&&(n[l][r]={},n[l][r].delta=e[l][r].delta,n[l][r].total=e[l][r].total);for(var c in t)for(var i in t[c])if(!(i<a)){n[c][i]={};var s=T(i);for(var o in n[c][i].delta=t[c][i].delta,n[c][i].total={},n[c][i].delta)n[c][i].total[o]=n[c][s].total[o]+n[c][i].delta[o]}return n}t.default=function(e){var t=Object(o.useState)({stateCode:"TT",districtName:null}),a=Object(l.a)(t,2),c=a[0],T=a[1],y=Object(o.useState)(null),S=Object(l.a)(y,2),k=S[0],P=S[1],H=Object(o.useState)("active"),w=Object(l.a)(H,2),z=w[0],C=w[1],M=Object(s.a)(new Date,"yyyy-MM-dd"),D=Object(o.useState)(M),N=Object(l.a)(D,2),I=N[0],A=N[1],R=Object(o.useState)({}),F=Object(l.a)(R,2),J=F[0],V=F[1],x=Object(o.useState)({}),q=Object(l.a)(x,2),B=q[0],G=q[1],K=Object(m.a)().t;Object(o.useMemo)((function(){var e=i.a.get("https://api.covid19india.org/v3/min/timeseries.min.json"),t=i.a.get("https://vics-core.github.io/covid-api/predictions.json");i.a.all([e,t]).then(i.a.spread((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var n=t[0].data,l=t[1].data,r=p(n,l,M);G(r)})))}),[M]),Object(o.useMemo)((function(){var e={};for(var t in B)B.hasOwnProperty(t)&&(e[t]=B[t][I]);V(e)}),[I,B]);var L=Object(o.useRef)(),Q=Object(b.useIsVisible)(L,{once:!0}),U=["TT"].concat(Object(n.a)(Object(n.a)(new Set([].concat(Object(n.a)(Object.keys(r.f).filter((function(e){return"TT"!==e}))),Object(n.a)(Object.keys(J||{}).filter((function(e){return"TT"!==e})))))).sort()));return u.a.createElement(u.a.Fragment,null,u.a.createElement(d.a,null,u.a.createElement("title",null,"Coronavirus Projections for India - seva.ml"),u.a.createElement("meta",{name:"title",content:"Coronavirus Projections for India"})),u.a.createElement("div",{className:"Home"},u.a.createElement(o.Suspense,{fallback:u.a.createElement("div",null)},u.a.createElement("div",{className:"Search"},u.a.createElement("h1",null,K("COVID-19 AI Predictions")))),u.a.createElement("div",{className:"home-left"},u.a.createElement("div",{className:"header"},B.TT&&u.a.createElement(o.Suspense,{fallback:u.a.createElement("div",{style:{minHeight:"56px"}})},u.a.createElement(v,{setDate:A,dates:Object.keys(B.TT).reverse(),date:I}))),J.TT&&u.a.createElement(o.Suspense,{fallback:u.a.createElement("div",null)},u.a.createElement(g,{data:J.TT})),u.a.createElement(o.Suspense,{fallback:u.a.createElement("div",null)},B.TT&&u.a.createElement(O,Object.assign({timeseries:B.TT},{date:I}))),u.a.createElement(o.Suspense,{fallback:u.a.createElement("div",null)},J.TT&&u.a.createElement(h,{data:J,regionHighlighted:c,setRegionHighlighted:T}))),u.a.createElement("div",{className:"home-right",ref:L},Q&&u.a.createElement(u.a.Fragment,null,J&&u.a.createElement(o.Suspense,{fallback:u.a.createElement("div",null)},u.a.createElement(j,Object.assign({stateCode:"TT"},{data:J},{mapStatistic:z,setMapStatistic:C},{regionHighlighted:c,setRegionHighlighted:T},{anchor:k,setAnchor:P}))),B.TT&&u.a.createElement(o.Suspense,{fallback:u.a.createElement("div",null)},u.a.createElement(f,Object.assign({timeseries:B[c.stateCode]},{date:I,stateCodes:U},{regionHighlighted:c,setRegionHighlighted:T},{anchor:k,setAnchor:P})))))),Q&&u.a.createElement(o.Suspense,{fallback:u.a.createElement("div",null)},u.a.createElement(E,null)))}}}]);
//# sourceMappingURL=Home.b8719e1d.chunk.js.map