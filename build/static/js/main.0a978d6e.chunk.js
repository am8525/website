(window.webpackJsonpwebsite=window.webpackJsonpwebsite||[]).push([[0],{40:function(e,t,n){e.exports=n(56)},45:function(e,t,n){},46:function(e,t,n){},52:function(e){e.exports=JSON.parse('{"profile":{"pic":{"path":"images/headshot__.jpg","alt":"Headshot"},"name":{"value":"Andrew McFarlane"},"blurb":{"value":"Software Engineer based out of Langley, BC"},"icons":{"email":{"alt":"Email","type":"email","path":"images/email_icon.png","email":"andrew.mcfarlane52@gmail.com"},"github":{"alt":"Github","type":"link","path":"images/github_icon.png","link":"http://github.com/am8525"},"linkedin":{"alt":"Linkedin","type":"link","path":"images/linkedin_icon.png","link":"http://linkedin.com/in/andrewmcfarlane52/"},"resume":{"alt":"Resume","type":"download","path":"images/download_icon.png","download":"McFarlane-Andrew_Resume.docx"}},"tabs":{"ABOUT":{"sections":false,"content":{"t-0":{"text":"About me...","b":true,"i":true,"inline":true,"size":"32px"},"p-0":{"text":"Hello.\xa0My\xa0name\xa0is\xa0Andrew,\xa0but\xa0people\xa0typically\xa0call\xa0me\xa0AJ, besides\xa0my\xa0Nana."},"p-1":{"text":"If I could summarize myself in 3 words, it would be: nerdy gym rat."},"p-2":{"text":"I am most passionate about becoming a better version of myself than I was yesterday, mentally and physically. Typically, I wake up around 5am, eat breakfast at 5:30 (1 cup egg whites, 1 egg, 3oz ham), and get to the gym by 6. I get back around 730am and start my day around 830am."},"p-3":{"text":"I am a tech geek that is infatuated with information. During my last semester at Hobart College, I took some of the most difficult courses I could have possibly taken. And I absolutely loved it. BY FAR, my favorite class was Quantum Computing, which is where I picked up Information Theory (which is an absolute thrill, by the way), along with some Group Theory, a sprinkle of Number Theory, and a heaping handful of mind-bending problems and paradoxes that challenge your understanding of everything."},"p-4":{"text":"When I am not at the gym or programming, I am likely doing one of three things: reading a book or technical article, eating, or thinking about my next meal. Learning and eating make up a big part of my life."}}},"RESUME":{"sections":true,"content":{"Education":{"sections":false,"content":{"t-0":{"text":"Education","b":true,"u":true,"size":"28px"},"p-0":{"text":"Hobart College","b":true,"i":true,"size":"20px"},"p-1":{"text":"Graduated in 2019 with a dual BS in Physics and Computer Science, as well as a minor in French and Francophone Studies."},"p-2":{"text":"Finished with an overall 3.30 GPA."},"p-3":{"text":"Notable courses include Data Structures & Algorithms, AI, Networking, Databases, and Quantum Computing."}}},"Work Experience":{"sections":true,"content":{"Terrafugia":{"content":{"p-0":{"text":"Engineering Intern, Hybrid Systems","b":true,"size":"16px"},"p-1":{"text":"(May \'18 - Aug \'18)","i":true,"size":"14px","subheader":true,"endOfHeader":true},"p-2":{"text":"Built a system analytics tool for the Transition flying car in C++."}}},"HWS":{"content":{"p-0":{"text":"Physics Teaching Fellow,","b":true,"size":"16px"},"p-1":{"text":"Center for Teaching and Learning (CTL)","b":true,"size":"16px","subheader":true},"p-2":{"text":"(Aug \'18 - May \'19)","i":true,"size":"14px","subheader":true,"endOfHeader":true},"p-3":{"text":"Assisted students in their studies while making the learning process fun."}}}}},"NCAA":{"sections":false,"content":{"t-0":{"text":"Hobart College Defensive End","b":true,"i":true,"size":"20px","endOfHeader":true},"p-1":{"text":"Recorded 57 tackles and 5 sacks as a Sophomore."},"c-0":{"items":{"p-2":{"text":"Click "},"l-0":{"text":"here","link":"https://hwsathletics.com/roster.aspx?rp_id=10823"},"p-3":{"text":" for more information."}}}}},"Skills":{"sections":true,"content":{"Languages/Frameworks":{"content":{"h-0":{"head":"Used at an enterprise level:","items":{"li-0":"C++"}},"h-1":{"head":"Proficient within a personal or academic setting:","items":{"li-0":"Bash","li-1":"C","li-2":"Java","li-3":"JavaScript","li-4":"JUnit","li-5":"PHP","li-6":"ReactJS","li-7":"Redux","li-8":"SQL"}},"h-2":{"head":"Basic familiarity with:","items":{"li-0":"Applescript","li-1":"Perl"}}}},"Tools":{"content":{"h-0":{"head":"Used at an enterprise level:","items":{"li-0":"Jenkins","li-1":"Linux","li-2":"Qt","li-3":"SVN"}},"h-1":{"head":"Proficient within a personal or academic setting:","items":{"li-0":"Eclipse","li-1":"git","li-2":"JSON","li-3":"Sublime Text","li-4":"Swing","li-5":"VS Code"}}}}}}}},"PROJECTS":{"sections":true,"content":{"Website":{"sections":false,"content":{"t-0":{"text":"Personal Site","i":true,"size":"28px"},"p-0":{"text":"With next to zero prior web experience, built this website using ReactJS and Redux in a month."},"c-0":{"items":{"p-1":{"text":"Check out the source code "},"l-0":{"text":"here.","link":"https://github.com/am8525/website"}}}}}}}}}}')},56:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(16),o=n.n(i),l=(n(45),n(46),n(11)),c=n(69),s=n(68),u=n(10),p="TAB-",d="SUBTAB-",m={showTab:"SHOW_TAB",hideTab:"HIDE_TAB"},f={showTab:function(e){return{type:m.showTab,tabType:e}},hideTab:function(){return{type:m.hideTab}}},b={loadHeader:f.showTab},h=Object(l.b)((function(e,t){return{tabData:e&&e.config&&e.config.profile&&e.config.profile.tabs}}),b)((function(e){var t=e.classes,n=e.loadHeader,a=e.tabData;return a?r.a.createElement("div",{className:t.siteHeader},function(e,t,n){return Object.keys(n).map((function(n){return r.a.createElement(c.a,{className:t.headerBtn,onClick:function(){return e(n)}},n)}))}(n,t,a)):null})),g=Object(u.a)((function(){return Object(s.a)({siteHeader:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",background:"#3664ad",minWidth:"100%",borderBottom:"3px solid black",position:"fixed"},headerBtn:{justifyContent:"space-between",margin:"7px 20px",color:"white",fontSize:"15px",fontWeight:"bold","&:hover":{background:"#73789c",opacity:".8"}}})}))(h),y=n(6),x=n(70),O=function(e,t){return Object.keys(t).map((function(n){var a=function(e){switch(e.type){case"email":return n=e.email,void window.open("mailto:".concat(n));case"link":return t=e.link,void(window.location=t);case"download":return function(e){var t=document.createElement("a");t.href=e,t.download=e.split("/").pop(),document.body.appendChild(t),t.click(),document.body.removeChild(t)}(e.download);default:return null}var t,n};return r.a.createElement(x.a,{onClick:function(){a(t[n])}},r.a.createElement("img",{src:t[n].path,alt:t[n].alt,className:e.smallIcon}))}))};function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E={display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#fff4d6",borderRadius:"20px",border:"3px solid black",transition:"margin-top .5s ease-out",padding:"10px",maxWidth:"650px",margin:"0 auto"},j=Object(l.b)((function(e,t){return{profile:e&&e.config&&e.config.profile,tab:e&&e.tab&&e.tab.openTab}}),null)((function(e){var t=e.classes,n=e.profile,a=e.tab;return n?r.a.createElement("div",{style:v({},E,{marginTop:"none"!==a?"5px":"20%"})},r.a.createElement("div",null,r.a.createElement("img",{alt:n.pic&&n.pic.alt,src:n.pic&&n.pic.path,className:t.headshot})),r.a.createElement("div",{className:t.profileInfo},r.a.createElement("div",{className:t.name},r.a.createElement("h2",{className:t.nameTxt},n.name&&n.name.value)),r.a.createElement("div",{className:t.blurb},r.a.createElement("i",null,n.blurb&&n.blurb.value)),r.a.createElement("div",{className:t.quickLinks},O(t,n.icons)))):null})),k=Object(u.a)((function(){return Object(s.a)({headshot:{borderRadius:"50%",height:"240px",width:"200px",border:"3px solid black"},profileInfo:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},name:{marginTop:"-30px"},blurb:{marginTop:"-20px"},nameTxt:{fontFamily:"Georgia, serif",fontSize:"40px"},quickLinks:{display:"flex",marginTop:"50px"},smallIcon:{width:"45px",height:"45px",backgroundColor:"transparent",marginLeft:"10px",marginRight:"10px"}})}))(j),T=n(31),S=n(17),P=n(32),D=n(33),C=n(36),I={configLoad:"CONFIG-LOAD"},B={dataRef:function(e){return{type:I.configLoad,jsonData:e}}},A=n(52),N=function(e){function t(){return Object(T.a)(this,t),Object(P.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}},{key:"componentDidMount",value:function(){this.props.dataRef(A)}}]),t}(r.a.Component),L={dataRef:B.dataRef},R=Object(l.b)(null,L)(N),_=n(34),z=n.n(_),H=n(15),W=(n(53),n(58)),F=Object(s.a)({plainPanel:{display:"flex",flexDirection:"column",textAlign:"left"},tabbedPanelStack:{marginLeft:"15px"}}),J=function(e,t){return e&&e[t]&&e[t].sections?r.a.createElement(M,{sections:e,currentSection:t}):r.a.createElement(U,{sections:e,currentSection:t})};function U(e){var t=e.sections,n=e.currentSection;return t&&t[n]&&t[n].content?r.a.createElement("div",{style:F.plainPanel},oe(t[n].content)):null}function M(e){var t=e.sections,n=e.currentSection;return t&&t[n]?r.a.createElement("div",null,r.a.createElement(H.d,{horizontal:!0},Q(t,n,d),r.a.createElement("div",{style:F.tabbedPanelStack},V(t,n,d)))):null}var G=Object(W.a)({vertTabTxt:{fontWeight:"bold",display:"inline",padding:"-20px"},panelStack:{marginLeft:"-15px"}}),Q=function(e,t,n){return e&&e[t]&&e[t].sections?r.a.createElement("div",{style:G.tabList},r.a.createElement(H.b,null,Object.keys(e[t].content).map((function(e,t){return r.a.createElement(H.a,{tabFor:X(n,t)},r.a.createElement("p",{style:G.vertTabTxt},e))})))):null},V=function(e,t,n){return e&&e[t]&&e[t].sections?r.a.createElement("div",{style:G.panelStack},Object.keys(e[t].content).map((function(a,i){return r.a.createElement(H.c,{tabId:X(n,i),render:function(n){return n.selected?J(e[t].content,a):null}})}))):J(e,t)},X=function(e,t){return e.concat("-",t.toString(10))};function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $="t",K="p",Z="h",ee="l",te="c",ne=Object(W.a)({plainTxt:{},titleTxt:{fontFamily:"Courier New, Courier, monospace"},titleBox:{marginTop:"15px",marginLeft:"15px"},contentBox:{paddingLeft:"15px",paddingRight:"15px"},headerTxt:{fontWeight:"bold"},listStyling:{listStyleType:"none"},listBox:{marginTop:"2%",marginLeft:"2%"},linkBox:{display:"flex",textAlign:"center",paddingRight:"5px",paddingLeft:"5px"},linkTxt:{position:"relative",top:"33%"},plainPanel:{display:"flex",flexDirection:"column",textAlign:"left"},compoundBox:{display:"flex",flexDirection:"row",marginTop:"-15px"}}),ae=function(e,t,n){return e&&e[t]&&e[t].sections?r.a.createElement("div",null,r.a.createElement(H.d,{vertical:!0,defaultTab:n.concat("-","0")},Q(e,t,n),V(e,t,n))):e&&e[t]?r.a.createElement("div",{style:Y({},ne.plainPanel)},V(e,t,n)):null},re=function(e,t){var n={display:e[t].inline?"inline":"block",fontWeight:e[t].b?"bold":"normal",fontStyle:e[t].i?"italic":"normal",textDecoration:e[t].u?"underline":"none"};return e[t].size&&(n.fontSize=e[t].size),n},ie=function(e,t){return{marginTop:e[t].subheader?"-10px":"0px",paddingBottom:e[t].endOfHeader?"20px":"0px"}},oe=function(e){return r.a.createElement("div",{style:ne.contentBox},Object.keys(e).map((function(t){switch(t.split("-")[0]){case K:return le(e,t);case ee:return ce(e,t);case Z:return se(e,t);case $:return ue(e,t);case te:return pe(e,t);default:return null}})))},le=function(e,t){return r.a.createElement("div",{style:Y({},ie(e,t))},r.a.createElement("p",{style:Y({},ne.plainTxt,{},re(e,t))},e[t].text))},ce=function(e,t){return r.a.createElement("div",{style:Y({},ne.linkBox,{},ie(e,t))},r.a.createElement("a",{style:ne.linkTxt,href:e[t].link},e[t].text))},se=function(e,t){return r.a.createElement("div",{style:ne.listBox},r.a.createElement("header",{style:ne.headerTxt},e[t].head),r.a.createElement("ul",{style:ne.listStyling},Object.keys(e[t].items).map((function(n){return r.a.createElement("li",{style:ne.listItemTxt},e[t].items[n])}))))},ue=function(e,t){return r.a.createElement("div",{style:Y({},ne.titleBox)},r.a.createElement("p",{style:Y({},ne.titleTxt,{},re(e,t))},e[t].text))},pe=function(e,t){return r.a.createElement("div",{style:ne.compoundBox},Object.keys(e[t].items).map((function(n){switch(n.split("-")[0]){case K:return le(e[t].items,n);case ee:return ce(e[t].items,n);default:return null}})))},de=function(e){return Object(s.a)({root:{display:"none"===e?"none":"flex",backgroundColor:"#fff4d6",flexDirection:"row",border:"1px solid black",minHeight:"500px",marginTop:"4%",marginBottom:"-2%",borderRadius:"40px",alignItems:"flex-start",justifyContent:"space-between",width:"75%",position:"relative",bottom:"3%"}})};var me={hideTab:f.hideTab},fe=Object(l.b)((function(e,t){return{currentTab:e&&e.tab&&e.tab.openTab,tabs:e&&e.config&&e.config.profile&&e.config.profile.tabs}}),me)((function(e){var t=e.classes,n=e.tabs,a=e.currentTab;return r.a.createElement("div",{style:de(a).root},ae(n,a,p),r.a.createElement(x.a,{onClick:function(){return e.hideTab()},className:t.exitIcon},r.a.createElement(z.a,null)))})),be=Object(u.a)((function(){return Object(s.a)({exitIcon:{position:"relative",top:"10%",right:"2%"}})}))(fe),he=n(9),ge=n(35);function ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function xe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ye(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Oe={openTab:"none"};function we(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var ve=Object(he.c)({tab:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.showTab:return xe({},e,{openTab:t.tabType===e.openTab?"none":t.tabType});case m.hideTab:return xe({},e,{openTab:"none"});default:return e}},config:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I.configLoad:return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?we(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},t.jsonData);default:return e}}}),Ee={},je=[ge.a],ke=window.navigator.userAgent.includes("Chrome")?Object(he.e)(ve,Ee,Object(he.d)(he.a.apply(void 0,je),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())):Object(he.e)(ve,Ee,Object(he.d)(he.a.apply(void 0,je)));var Te=function(){return r.a.createElement("div",{className:"topLevel"},r.a.createElement(l.a,{store:ke},r.a.createElement(R,null),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"background"}),r.a.createElement(g,null),r.a.createElement(k,null),r.a.createElement(be,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.0a978d6e.chunk.js.map