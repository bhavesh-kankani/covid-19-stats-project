(this["webpackJsonpcovid-19-stats-project"]=this["webpackJsonpcovid-19-stats-project"]||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var o=a(10),s=a(11),n=a(14),r=a(13),i=a(0),c=a.n(i),l=a(7),d=a.n(l),b=(a(27),a(28),a(12)),h=(a(31),a(39)),u=a(40),j=a.p+"static/media/corona.a71ca60e.jpg",m=a(1),v=function(e){Object(n.a)(a,e);var t=Object(r.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"loadGlobal",value:function(){d.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root"))}},{key:"loadNational",value:function(){d.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root"))}},{key:"loadAbout",value:function(){d.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root"))}},{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)(h.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(m.jsx)(h.a.Brand,{href:"#home",children:"COVID-19 STATISTICS"}),Object(m.jsx)(h.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(m.jsx)(h.a.Collapse,{id:"responsive-navbar-nav",className:"navbar",children:Object(m.jsxs)(u.a,{className:"mr-auto",children:[Object(m.jsx)(u.a.Link,{onClick:this.loadGlobal,className:"navbar",children:"Global"}),Object(m.jsx)(u.a.Link,{onClick:this.loadNational,className:"navbar",children:"National"}),Object(m.jsx)(u.a.Link,{onClick:this.loadAbout,className:"navbar",children:"About COVID-19"})]})})]})})}}]),a}(c.a.Component),O=function(e){Object(n.a)(a,e);var t=Object(r.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={items:[],isLoaded:!1},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.covid19api.com/summary").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.items;return t?Object(m.jsxs)("div",{children:[Object(m.jsx)(v,{}),Object(m.jsx)("h1",{children:"GLOBAL STATISTICS"}),Object(m.jsxs)("p",{children:[Object(m.jsxs)("label",{style:{color:"#fe073a"},children:["Confirmed:"," ",a.Global.TotalConfirmed.toLocaleString("en-IN")]}),"\u2003"," ",Object(m.jsxs)("label",{style:{color:"#007bfe"},children:["Active:"," ",(a.Global.TotalConfirmed-(a.Global.TotalRecovered+a.Global.TotalDeaths)).toLocaleString("en-IN")]}),"\u2003"," ",Object(m.jsxs)("label",{style:{color:"#28a645"},children:["Recovered:"," ",a.Global.TotalRecovered.toLocaleString("en-IN")]}),"\u2003"," ",Object(m.jsxs)("label",{style:{color:"#6c757d"},children:["Deceased:"," ",a.Global.TotalDeaths.toLocaleString("en-IN")]})]}),Object(m.jsx)(b.a,{style:{margin:"0px auto",paddingTop:"25px",paddingBottom:"10vh"},chartType:"GeoChart",data:function(e){console.log(e);var t=[["Country Code","Country","Confirmed"]];for(var a in e.Countries)t.push([e.Countries[a].CountryCode,e.Countries[a].Country,e.Countries[a].TotalConfirmed]);return t}(a),rootProps:{"data-testid":"1"},options:{width:"100vw",height:"75vh",colorAxis:{colors:["#FF5959","#FF0000"]},backgroundColor:"#161625",legend:"none",datalessRegionColor:"#161625"}}),Object(m.jsx)(b.a,{style:{margin:"0px auto"},chartType:"Table",loader:Object(m.jsx)("div",{children:"Loading Chart"}),data:function(e){var t=[[{type:"string",label:"COUNTRY  "},{type:"number",label:"CONFIRMED"},{type:"number",label:"ACTIVE"},{type:"number",label:"RECOVERED"},{type:"number",label:"DECEASED"}]];for(var a in e.Countries)t.push([e.Countries[a].Country,e.Countries[a].TotalConfirmed,e.Countries[a].TotalConfirmed-(e.Countries[a].TotalRecovered+e.Countries[a].TotalDeaths),e.Countries[a].TotalRecovered,e.Countries[a].TotalDeaths]);return t}(a),options:{showRowNumber:!0,height:"100%",width:"75vw",sortColumn:1,sortAscending:!1,allowHTML:!0,cssClassNames:{headerRow:"header-row",tableRow:"table-row",headerCell:"header-cell",tableCell:"table-cell"}}})]}):Object(m.jsx)("div",{children:"Loading..."})}}]),a}(c.a.Component),p=function(e){Object(n.a)(a,e);var t=Object(r.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={items:[],isLoaded:!1},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.covid19india.org/data.json").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.items;return t?Object(m.jsxs)("div",{children:[Object(m.jsx)(v,{}),Object(m.jsx)("h1",{children:"NATIONAL STATISTICS"}),Object(m.jsxs)("p",{children:[Object(m.jsxs)("label",{style:{color:"#fe073a"},children:["Confirmed:"," ",Number(a.statewise[0].confirmed).toLocaleString("en-IN")]}),"\u2003"," ",Object(m.jsxs)("label",{style:{color:"#007bfe"},children:["Active:"," ",Number(a.statewise[0].active).toLocaleString("en-IN")]}),"\u2003"," ",Object(m.jsxs)("label",{style:{color:"#28a645"},children:["Recovered:"," ",Number(a.statewise[0].recovered).toLocaleString("en-IN")]}),"\u2003"," ",Object(m.jsxs)("label",{style:{color:"#6c757d"},children:["Deceased:"," ",Number(a.statewise[0].deaths).toLocaleString("en-IN")]})]}),Object(m.jsx)(b.a,{width:"90vw",height:"75vh",style:{margin:"0px auto",paddingTop:"25px",paddingBottom:"10vh"},chartType:"GeoChart",data:function(e){var t=[["State","Confirmed"]],a=[];for(var o in e.statewise)"Telangana"===e.statewise[o].state&&(a.push(e.statewise[o].state),a.push(e.statewise[o].confirmed));for(var s in e.statewise)"Total"!==String(e.statewise[s].state)&&("Andhra Pradesh"===e.statewise[s].state?(console.log(a[1]),t.push([{v:"IN-"+e.statewise[s].statecode,f:e.statewise[s].state+"+"+a[0]},Number(e.statewise[s].confirmed)+Number(a[1])])):t.push([{v:"IN-"+e.statewise[s].statecode,f:e.statewise[s].state},Number(e.statewise[s].confirmed)]));return t}(a),rootProps:{"data-testid":"1"},options:{colorAxis:{colors:["#FF5960","#FF0000"]},region:"IN",domain:"IN",backgroundColor:"#161625",legend:"none",datalessRegionColor:"#161625",resolution:"provinces"}}),Object(m.jsx)(b.a,{style:{margin:"0px auto"},chartType:"Table",loader:Object(m.jsx)("div",{children:"Loading Chart"}),data:function(e){var t=[[{type:"string",label:"STATE"},{type:"number",label:"CONFIRMED"},{type:"number",label:"ACTIVE"},{type:"number",label:"RECOVERED"},{type:"number",label:"DECEASED"}]];for(var a in e.statewise)"Total"!==e.statewise[a].state&&t.push([e.statewise[a].state,Number(e.statewise[a].confirmed),Number(e.statewise[a].active),Number(e.statewise[a].recovered),Number(e.statewise[a].deaths)]);return t}(a),options:{showRowNumber:!0,height:"100%",width:"75vw",sortColumn:1,sortAscending:!1,allowHTML:!0,cssClassNames:{headerRow:"header-row",tableRow:"table-row",headerCell:"header-cell",tableCell:"table-cell"}}})]}):Object(m.jsx)("div",{children:"Loading..."})}}]),a}(c.a.Component),C=function(e){Object(n.a)(a,e);var t=Object(r.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"about",children:[Object(m.jsx)(v,{}),Object(m.jsxs)("p",{children:[Object(m.jsx)("img",{src:j,align:"right",alt:"Corona Img"}),"Coronaviruses are a large family of viruses, including some that cause the common cold to some that cause major diseases such as the Severe Acute Respiratory Syndrome (SARS) and the Middle East Respiratory Syndrome (MERS).",Object(m.jsx)("br",{})," ",Object(m.jsx)("br",{}),"The coronavirus (COVID-19) outbreak came to light when on December 31, 2019, China informed the World Health Organization (WHO) of a cluster of cases of pneumonia of an unknown cause in Wuhan City in Hubei province. On January 9, 2020, the WHO issued a statement saying Chinese researchers have made \u201cpreliminary determination\u201d of the virus as a novel coronavirus.",Object(m.jsx)("br",{})," ",Object(m.jsx)("br",{}),"Since then, more than 3,000 deaths have been reported due to COVID-19 across the world. Cases have been reported from more than 80 countries, including India. The virus has acquired the ability to spread among humans, with cases of human-to-human transmissions being reported first in Vietnam and Germany.",Object(m.jsx)("br",{})," ",Object(m.jsx)("br",{}),"With the overall cases worldwide rising rapidly, the WHO has declared the outbreak a global health emergency.",Object(m.jsx)("br",{})," ",Object(m.jsx)("br",{}),"COVID-19 symptoms can include fever, cough and shortness of breath. The illness also causes lung lesions and pneumonia. Milder cases may resemble the flu or a bad cold, making detection difficult. Chinese researchers have shared the whole genome sequence of COVID-19, however apart from some basic details, not much is known about the virus in terms of its source, precise duration of incubation, severity, and what makes it quite easily transmissible.",Object(m.jsx)("br",{})," ",Object(m.jsx)("br",{})]})]})}}]),a}(c.a.Component);d.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.6ea1add8.chunk.js.map