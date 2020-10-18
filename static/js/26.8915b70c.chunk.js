/*! For license information please see 26.8915b70c.chunk.js.LICENSE.txt */
(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[26],{302:function(t,e,a){"use strict";a.r(e);var n=a(101),i=a(92),o=a(79),l=a(20),r=a(71),s={title:{text:"COVID-19 Predictions"},chart:{type:"spline",height:600},series:[{name:"Confirmed Cases",dataGrouping:{forced:!0,units:[["month",[1]]]},color:"orange"},{name:"Predicted Cases",dataGrouping:{forced:!0,units:[["month",[1]]]},color:"#7cb5ec"}],legend:{align:"right",verticalAlign:"top",layout:"vertical",x:-10,y:50,floating:!0},tooltip:{formatter:function(){return"<b>"+Object(l.e)(this.y)+"</b><br/>"+Object(r.a)(this.x,"dd MMM, yyyy")}},credits:{enabled:!1},xAxis:{type:"datetime",tickInterval:2592e6,range:31104e6},yAxis:{title:{text:"Daily Reported Cases"},max:175e3,min:0,tickAmount:10},motion:{enabled:!0,axisLabel:"date",loop:!1,updateInterval:1e3,magnet:{round:"round",step:1}}},c=a(98),p=a(29),u=a.n(p),h=a(146),d=a.n(h),y=a(120),m=a.n(y),f=a(121),v=a(148),g=a.n(v),b=a(7),E=a.n(b),P=a(96);a(213);!function(t){function e(e){var a=this;function n(t){switch((t=t||window.event).which){case 32:a.togglePlayPause();break;case 37:a.playRange.value=a.round(parseFloat(a.playRange.value)-1),a.updateChart(a.playRange.value);break;case 39:a.playRange.value=a.round(parseFloat(a.playRange.value)+1),a.updateChart(a.playRange.value);break;default:return}t.preventDefault()}this.chart=e,this.paused=!0,this.options=t.merge(this.defaultOptions,this.chart.options.motion),this.dataLength=0,this.options.startIndex=0,a.options.series=t.splat(a.options.series),a.dataLength=a.options&&a.options.labels&&a.options.labels.length,this.playControls=t.createElement("div",{id:"play-controls"},null,this.chart.renderTo.parentElement.parentElement,null),this.playPauseBtn=t.createElement("button",{id:"play-pause-button",title:"play"},null,this.playControls,null),this.playPauseBtn.className=this.options.playIcon,this.playPauseBtn.value="Play",this.playRange=t.createElement("input",{id:"play-range",type:"range",min:0,max:this.dataLength-1,step:this.options.magnet.step},null,this.playControls,null),this.playRange.value=t.pick(this.options.startIndex,this.dataLength-1),this.playOutput=t.createElement("label",{id:"play-output",name:this.options.axisLabel},null,this.playControls,null),this.playOutput.innerHTML=Object(r.a)(new Date(this.options.labels[this.round(this.playRange.value)]),"dd MMM, yyyy"),this.predictionControl=t.createElement("div",{id:"prediction-control"},null,this.chart.renderTo.parentElement.parentElement,null),this.noPrediction=t.createElement("input",{type:"radio",name:"prediction-control",id:"no-prediction",value:0},null,this.predictionControl,null),this.noPredictionLabel=t.createElement("label",{for:"no-prediction"},null,this.predictionControl,null),this.noPredictionLabel.innerHTML="No Prediction",this.shortTermPrediction=t.createElement("input",{type:"radio",name:"prediction-control",id:"short-term-prediction",value:20},null,this.predictionControl,null),this.shortTermPredictionLabel=t.createElement("label",{for:"short-term-prediction"},null,this.predictionControl,null),this.shortTermPredictionLabel.innerHTML="Short Term Prediction",this.longTermPrediction=t.createElement("input",{type:"radio",name:"prediction-control",id:"long-term-prediction",value:"Infinite",checked:!0},null,this.predictionControl,null),this.longTermPredictionLabel=t.createElement("label",{for:"long-term-prediction"},null,this.predictionControl,null),this.longTermPredictionLabel.innerHTML="Long Term Prediction",m.a.addEvent(this.playPauseBtn,"click",(function(){a.togglePlayPause()})),m.a.addEvent(this.playRange,"mouseup",(function(){a.attractToStep()})),m.a.addEvent(this.playRange,"input",(function(){a.updateChart(this.value)})),m.a.addEvent(this.predictionControl,"change",(function(){a.updateChart(a.playRange.value)})),m.a.addEvent(this.playControls,"click",(function(){a.playRange.focus()})),m.a.addEvent(this.playPauseBtn,"keydown",n),m.a.addEvent(this.playRange,"keydown",n),this.inputValue=parseFloat(this.playRange.value),this.updateChart(this.inputValue),this.options.autoPlay&&this.play()}e.prototype.defaultOptions={enabled:!0,axisLabel:"year",autoPlay:!1,loop:!1,series:0,updateInterval:10,magnet:{round:"round",step:.01},playIcon:"fa fa-play",pauseIcon:"fa fa-pause"},e.prototype.togglePlayPause=function(){this[this.paused?"play":"pause"]()},e.prototype.play=function(){var t=this;this.paused&&parseFloat(this.playRange.value)===parseFloat(this.playRange.max)&&this.reset(),this.changeButtonType("pause"),this.paused=!1,this.timer=setInterval((function(){t.playUpdate()}),this.options.updateInterval)},e.prototype.pause=function(){this.changeButtonType("play"),this.paused=!0,window.clearInterval(this.timer),this.attractToStep()},e.prototype.reset=function(){this.playRange.value=this.playRange.min,this.updateChart(this.playRange.value)},e.prototype.changeButtonType=function(t){this.playPauseBtn.title=t,this.playPauseBtn.className=t+" ","play"===t?this.playPauseBtn.className+=this.options.playIcon:"pause"===t&&(this.playPauseBtn.className+=this.options.pauseIcon)},e.prototype.playUpdate=function(){this.paused||(this.inputValue=parseFloat(this.playRange.value),this.playRange.value=this.inputValue+this.options.magnet.step,this.attractToStep(),this.updateChart(this.playRange.value),this.playRange.value>=parseFloat(this.playRange.max)&&(this.options.loop?this.reset():this.pause()))},e.prototype.updateChart=function(e){var a=this.options.labels[this.round(e)],n=Object(f.filter)([this.noPrediction,this.shortTermPrediction,this.longTermPrediction],"checked")[0]||this.longTermPrediction;n=n.value,this.currentAxisValue===a&&this.predictionControl.value===n||(this.currentAxisValue=a,this.predictionControl.value=n,this.chart.options.motion.startIndex=a,t.each(t.charts,(function(e,i){!function(e,a,n){var i;t.each(e.series,(function(t,o){var l=e.options.chart.fullData&&e.options.chart.fullData[a].TT;Object(f.isEmpty)(l)||(0===o?i=Object.assign(function(t,e){return Object(f.transform)(t,(function(t,a,n){n<=e&&t.push({x:new Date(n),y:a.c})}),[])}(l,a)):1===o&&(i=Object.assign(function(t,e,a){return Object(f.transform)(t,(function(t,n,i){!isNaN(a)&&t.length>=a||i>=e&&t.push({x:new Date(i),y:n.c})}),[])}(l,a,n))),t.setData(i))}))}(e,a,n),function(e){var a=isNaN(e)?175e3:8e4;t.each(t.charts,(function(t,e){t.yAxis[0].update({max:a})}))}(n),e.redraw()})),this.attractToStep())},e.prototype.attractToStep=function(){var t;t=this.options.labels,"[object Array]"===Object.prototype.toString.call(t)?this.playOutput.innerHTML=Object(r.a)(new Date(this.options.labels[this.round(this.playRange.value)]),"dd MMM, yyyy")||"":this.playOutput.innerHTML=this.round(this.playRange.value)},e.prototype.round=function(t){return Math[this.options.magnet.round](t)},t.Chart.prototype.callbacks.push((function(a){a.options.motion&&a.options.motion.enabled&&1===t.charts.length&&(a.motion=new e(a))})),t.Motion=e}(m.a);e.default=E.a.memo((function(){var t=Object(b.useState)([]),e=Object(o.a)(t,2),a=e[0],l=e[1],r=g.a.parse(window.location.search),p=r&&r.model?r.model.split(","):["1.1740"];return Object(b.useEffect)((function(){var t,e=[],a=Object(i.a)(p);try{for(a.s();!(t=a.n()).done;){var o=t.value;e.push(u.a.get("https://vics-core.github.io/covid-api/vp/".concat(o,".json")))}}catch(r){a.e(r)}finally{a.f()}u.a.all(e).then((function(t){var e=[],a=f.intersection.apply(void 0,Object(n.a)(t.map((function(t){return Object(f.keys)(t.data)})))),i=a[a.length-1];t.map((function(t,n){var o=Object(f.cloneDeep)(s),l=t.data;o.chart.fullData=l,o.motion.labels=a,function(t,e){t.series[0].data=Object(f.transform)(t.chart.fullData[e].TT,(function(t,a,n){n<=e&&t.push({x:new Date(n),y:a.c})}),[])}(o,i),function(t,e){var a=t.chart.fullData;a[e]&&(t.series[1].data=Object(f.transform)(a[e].TT,(function(t,a,n){var i;n>=e&&t.push((i=a,{x:new Date(n),y:i.c}))}),[]))}(o,i),e=e.concat(o)})),l(e)}))}),[]),E.a.createElement("div",{className:"VideoPlayer"},E.a.createElement(P.a,null,E.a.createElement("title",null,"Video Player - seva.ml"),E.a.createElement("meta",{name:"title",content:"Video Player - seva.ml"}),E.a.createElement("meta",{name:"description",content:"A video to demonstrate how the predictions are changing per day."})),E.a.createElement("div",{className:"header fadeInUp",style:{animationDelay:"0.3s"}},E.a.createElement("h1",null,"Video Player")),E.a.createElement("div",{className:"models"},a.map((function(t,e){return E.a.createElement("div",{className:"model",key:e},E.a.createElement(d.a,{options:t,highcharts:m.a}))}))),E.a.createElement(c.default,null))}))},98:function(t,e,a){"use strict";a.r(e);var n=a(7),i=a.n(n),o=a(207),l=a(208),r=a(209),s=a(210),c=a(305);e.default=i.a.memo((function(t){var e=Object(c.a)().t;return i.a.createElement("footer",{className:"fadeInUp",style:{animationDelay:"2s"}},i.a.createElement("h3",null,e("Look forward and drive!")),i.a.createElement("div",null,i.a.createElement("a",{href:"https://www.facebook.com/indiacovidseva",target:"_blank",rel:"noopener noreferrer",className:"facebook",style:{justifyContent:"center"}},i.a.createElement(o.a,null)),i.a.createElement("a",{href:"https://twitter.com/indiacovidseva",target:"_blank",rel:"noopener noreferrer",className:"twitter",style:{justifyContent:"center"}},i.a.createElement(l.a,null)),i.a.createElement("a",{href:"https://www.linkedin.com/company/indiacovidseva",target:"_blank",rel:"noopener noreferrer",className:"linkedin",style:{justifyContent:"center"}},i.a.createElement(r.a,null)),i.a.createElement("a",{href:"https://github.com/VICS-CORE/covid19india-react",className:"github",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(s.a,null))),i.a.createElement("h5",null,"Built on covid19india.org"))}))}}]);
//# sourceMappingURL=26.8915b70c.chunk.js.map