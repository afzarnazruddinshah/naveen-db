(this["webpackJsonpnaveen-ro"]=this["webpackJsonpnaveen-ro"]||[]).push([[0],{113:function(e,t,a){e.exports=a(153)},118:function(e,t,a){},129:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},143:function(e,t){},144:function(e,t){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t),a.d(t,"firebaseConfig",(function(){return qe}));var n=a(0),r=a.n(n),l=a(13),c=a.n(l),o=(a(118),a(33)),i=a(34),u=a(38),s=a(37),m=a(11),d=a(40),h=a(9),g=a(10),E=a.n(g),v=(a(129),a(186)),f=a(24),p=a.n(f),b=a(89),O=a.n(b),y=a(183),C=a(202),w=a(201),S=a(203),j=a(190),R=Object(y.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}})),k=Object(d.g)((function(e){var t=R(),a=R(),l=Object(n.useState)(null),c=Object(h.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)(null),s=Object(h.a)(u,2),d=s[0],f=s[1],b=Object(n.useState)(null),y=Object(h.a)(b,2),k=y[0],N=y[1],x=Object(n.useState)(null),D=Object(h.a)(x,2),I=D[0],A=D[1],F=Object(n.useState)(null),P=Object(h.a)(F,2),M=P[0],W=P[1],B=r.a.useState("select"),L=Object(h.a)(B,2),T=L[0],q=L[1],z=r.a.useState(null),G=Object(h.a)(z,2),J=G[0],U=G[1],H=r.a.useState(null),V=Object(h.a)(H,2),X=V[0],_=V[1],Y=r.a.useState(null),Q=Object(h.a)(Y,2),K=Q[0],Z=Q[1],$=r.a.useState("select"),ee=Object(h.a)($,2),te=ee[0],ae=ee[1],ne=r.a.useState(""),re=Object(h.a)(ne,2),le=re[0],ce=re[1],oe=r.a.useState("select"),ie=Object(h.a)(oe,2),ue=ie[0],se=ie[1];Object(n.useEffect)((function(){me()}));var me=function(t){E.a.auth().onAuthStateChanged((function(t){ce(t.uid),null!==t&&void 0!==t||e.history.push("/login")}))},de=function(e){switch(e.persist(),e.target.name){case"name":i(e.target.value);break;case"number":f(e.target.value);break;case"dateofinstallment":N(e.target.value);break;case"nextservicedate":A(e.target.value);break;case"natureofwork":W(e.target.value);break;case"product":q(e.target.value);break;case"refrigerant":se(e.target.value);break;case"brandmodel":U(e.target.value);break;case"amountreceived":_(e.target.value);break;case"recommendedby":Z(e.target.value);break;case"recommended":ae(e.target.value)}};return r.a.createElement("div",{className:"login-form"},r.a.createElement("p",null,r.a.createElement(m.b,{to:"/dashboard"},r.a.createElement(v.a,{color:"secondary",variant:"contained"},r.a.createElement(p.a,null),"\xa0"," Go To Dashboard"))),r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement("h2",null,"Add New Record"),r.a.createElement(C.a,{name:"name",type:"text",onChange:de,label:"Customer Name, Addr",required:!0}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(C.a,{name:"number",type:"number",onChange:de,label:"Customer Phone Number",required:!0}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(j.a,{className:a.formControl},r.a.createElement(w.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"product",value:T,onChange:de},r.a.createElement(S.a,{value:"select",disabled:!0},"Select a Product"),r.a.createElement(S.a,{value:"Air Conditioner"},"Air Conditioner"),r.a.createElement(S.a,{value:"RO"},"RO"),r.a.createElement(S.a,{value:"Washing Machine"},"Washing Machine"),r.a.createElement(S.a,{value:"Refrigerator"},"Refrigerator"),r.a.createElement(S.a,{value:"TV"},"TV"),r.a.createElement(S.a,{value:"Microwave Oven"},"Microwave Oven"),r.a.createElement(S.a,{value:"Others"},"Others"))),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),("Air Conditioner"===T||"Refrigerator"===T)&&r.a.createElement(j.a,{className:a.formControl},r.a.createElement(w.a,{labelId:"demo-simple-select-label",id:"demo-simple-select-1",name:"refrigerant",value:ue,onChange:de},r.a.createElement(S.a,{value:"select",disabled:!0},"Select a Refrigerant"),r.a.createElement(S.a,{value:"R22"},"R22"),r.a.createElement(S.a,{value:"R32"},"R32"),r.a.createElement(S.a,{value:"R410"},"R410"),r.a.createElement(S.a,{value:"R134"},"R134"),r.a.createElement(S.a,{value:"R600"},"R600"),r.a.createElement(S.a,{value:"R290"},"R290"))),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(C.a,{className:t.textField,name:"dateofinstallment",type:"date",onChange:de,label:"Date",required:!0}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(C.a,{className:t.textField,name:"nextservicedate",type:"date",onChange:de,label:"Next Due Date"}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(C.a,{name:"natureofwork",type:"text",onChange:de,label:"Nature of Work",required:!0}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(C.a,{name:"brandmodel",type:"text",onChange:de,label:"Brand and Model",required:!0}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(C.a,{name:"amountreceived",type:"text",onChange:de,label:"Amount Received",required:!0}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(j.a,{className:a.formControl},r.a.createElement(w.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"recommended",value:te,onChange:de},r.a.createElement(S.a,{value:"select",disabled:!0},"Recommended By"),r.a.createElement(S.a,{value:"Relatives"},"Relatives"),r.a.createElement(S.a,{value:"Friends"},"Friends"),r.a.createElement(S.a,{value:"Dealers"},"Dealers"),r.a.createElement(S.a,{value:"Neighbours"},"Neighbours"),r.a.createElement(S.a,{value:"Customers"},"Customers"),r.a.createElement(S.a,{value:"JustDial"},"JustDial"),r.a.createElement(S.a,{value:"Google"},"Google"),r.a.createElement(S.a,{value:"Others"},"Others"))),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(C.a,{name:"recommendedby",type:"text",onChange:de,label:"Recommender Name",required:!0}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(v.a,{color:"primary",variant:"contained",type:"submit",onClick:function(t){(t.preventDefault(),null!==o&&null!==d&&null!==k&&null!==M&&null!==J&&null!==X&&null!==K&&null!==te)&&(window.confirm("Are you sure you want to add this Record?")&&Object(g.firestore)().collection("installations").add({custName:o,custPhone:d,product:T,refrigerant:ue,dateOfInstallment:k,nextServiceDate:I,natureOfWork:M,brandModel:J,amountReceived:X,recommendedBy:K,recommended:te,uid:le}).then((function(){alert("Record Added Successfully..!"),e.history.push("/dashboard")})).catch((function(e){console.error("Error Adding Document: ",e)})));return!1}},"Add New Record \xa0 ",r.a.createElement(O.a,null))),r.a.createElement("div",null," ",r.a.createElement("div",null,"\xa0")))})),N=a(31),x=(a(135),a(5)),D=a(195),I=a(197),A=a(192),F=a(194),P=a(196),M=a(193),W=a(191),B=a(92),L=a.n(B),T=a(93),q=a.n(T),z=a(90),G=a.n(z),J=a(91),U=a.n(J),H=function(){var e=new Date,t=e.getDate(),a=e.getMonth()+1,n=e.getFullYear();return t<10&&(t="0"+t),a<10&&(a="0"+a),e=n+"-"+a+"-"+t},V=function(e){if(null!==e){var t=e.slice(0,4),a=function(e){switch(e){case"01":return"Jan";case"02":return"Feb";case"03":return"Mar";case"04":return"Apr";case"05":return"May";case"06":return"Jun";case"07":return"Jul";case"08":return"Aug";case"09":return"Sep";case"10":return"Oct";case"11":return"Nov";case"12":return"Dec";default:return""}}(e.slice(5,7)),n=e.slice(8,10);return String(" "+n+" "+a+", "+t+" ")}return null},X=Object(y.a)({table:{minWidth:650},container:{maxHeight:500}}),_=Object(x.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(A.a),Y=Object(x.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:"#8ECDCC"},"&:nth-of-type(even)":{backgroundColor:"#CD8EBF"}}}}))(M.a),Q=Object(d.g)((function(e){var t=X(),a=Object(n.useState)([]),l=Object(h.a)(a,2),c=l[0],o=l[1],i=Object(n.useState)(!1),u=Object(h.a)(i,2),s=u[0],d=u[1],f=Object(n.useState)(""),b=Object(h.a)(f,2),O=b[0],y=b[1],w=Object(n.useState)(!1),S=Object(h.a)(w,2),j=S[0],R=S[1],k=Object(n.useState)([]),x=Object(h.a)(k,2),B=x[0],T=x[1];Object(n.useEffect)((function(){z(),H()}),[]);var z=function(){E.a.auth().onAuthStateChanged((function(t){localStorage.setItem("uid",t.uid),null!==t&&void 0!==t||e.history.push("/login")}))},J=function(e,t){var a=e.dateOfInstallment,n=t.dateOfInstallment,r=0;return a>n?r=-1:a<n&&(r=1),r},H=function(){var e=Object(g.firestore)(),t=[];e.collection("installations").where("uid","==",localStorage.getItem("uid")).get().then((function(e){e.forEach((function(e){var a={id:e.id},n=Object(N.a)({},a,{},e.data());t.push(n)})),t.sort(J),o(t),d(!0)}))},Q=(!0===j?B:c).map((function(t){return r.a.createElement(Y,{key:t.id},r.a.createElement(_,{component:"th",scope:"row"},t.custName),r.a.createElement(_,{align:"right"},t.custPhone),r.a.createElement(_,{align:"right"},t.product),r.a.createElement(_,{align:"right"},"select"!==t.refrigerant&&void 0!==t.refrigerant?t.refrigerant:"No Data"),r.a.createElement(_,{align:"right"},V(t.dateOfInstallment)),r.a.createElement(_,{align:"right"},V(t.nextServiceDate)),r.a.createElement(_,{align:"right"},t.natureOfWork),r.a.createElement(_,{align:"right"},t.brandModel),r.a.createElement(_,{align:"right"},t.amountReceived),r.a.createElement(_,{align:"right"},t.recommendedBy),r.a.createElement(_,{onClick:function(){return a=t.id,void e.history.push("/editrecord/"+a);var a},align:"right"},r.a.createElement(G.a,null)),r.a.createElement(_,{onClick:function(){return e=t.id,void(window.confirm("Are you sure you want to delete?")&&Object(g.firestore)().collection("installations").doc(String(e)).delete().then((function(){alert("Record Deleted Successfully");var t=c.filter((function(t){return t.id!==e}));o(t)})).catch((function(e){console.error("Error removing document: ",e)})));var e},align:"right"},r.a.createElement(U.a,null)))})),K=!0===s?Q:r.a.createElement(M.a,null,r.a.createElement(A.a,null,"Loading"));return r.a.createElement("div",{className:"login-form"},r.a.createElement("p",null,r.a.createElement(m.b,{to:"/dashboard"},r.a.createElement(v.a,{color:"secondary",variant:"contained"},r.a.createElement(p.a,null),"\xa0"," Go To Dashboard"))),r.a.createElement("h2",{id:"title"},"Viewing All Records"),r.a.createElement(C.a,{value:O,label:"Search any record",type:"text",name:"searchbox",onChange:function(e){e.persist(),y(e.target.value)}})," \xa0 \xa0",r.a.createElement(v.a,{color:"primary",variant:"contained",type:"button",onClick:function(e){R(!0);var t=c.filter((function(e){return-1!==String(e.custName).toLowerCase().search(String(O).toLowerCase())})),a=c.filter((function(e){return-1!==String(e.product).toLowerCase().search(String(O).toLowerCase())})),n=c.filter((function(e){return-1!==String(e.custPhone).toLowerCase().search(String(O).toLowerCase())})),r=c.filter((function(e){return-1!==String(e.brandModel).toLowerCase().search(String(O).toLowerCase())})),l=c.filter((function(e){return-1!==String(e.recommendedBy).toLowerCase().search(String(O).toLowerCase())})),o=t.concat(a,n,r,l);T(o)}},r.a.createElement(L.a,null)),"\xa0 ","  "," ",r.a.createElement(v.a,{color:"primary",variant:"contained",type:"button",onClick:function(e){R(!1),y("")}},r.a.createElement(q.a,null)),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement(F.a,{className:t.container,component:W.a},r.a.createElement(D.a,{className:t.table,stickyHeader:!0,size:"small","aria-label":"sticky table"},r.a.createElement(P.a,null,r.a.createElement(M.a,null,r.a.createElement(_,{align:"right"},"Name and Address"),r.a.createElement(_,{align:"right"},"Phone"),r.a.createElement(_,{align:"right"},"Product"),r.a.createElement(_,{align:"right"},"Refrigerant"),r.a.createElement(_,{align:"right"},"Date "),r.a.createElement(_,{align:"right"},"Next Due Date"),r.a.createElement(_,{align:"right"},"Nature Of Work"),r.a.createElement(_,{align:"right"},"Brand and Model"),r.a.createElement(_,{align:"right"},"Amount Received"),r.a.createElement(_,{align:"right"},"Recommended By"),r.a.createElement(_,{align:"right"},"Edit"),r.a.createElement(_,{align:"right"},"Delete"))),r.a.createElement(I.a,null,K))))})),K=(a(136),a(198)),Z=a(65),$=a.n(Z),ee=a(94),te=a.n(ee),ae=a(95),ne=a.n(ae),re=a(73),le=a(138);re.setXLSX(le);var ce=Object(d.g)((function(e){var t=Object(n.useState)(0),a=Object(h.a)(t,2),l=a[0],c=a[1],o=Object(n.useRef)(document.createElement("audio")),i=r.a.useState(),u=Object(h.a)(i,2),s=u[0],d=u[1],f={color:"secondary",children:r.a.createElement($.a,null)};Object(n.useEffect)((function(){b(),y(),O()}),[]);var b=function(t){E.a.auth().onAuthStateChanged((function(t){localStorage.setItem("uid",t.uid),null!==t&&void 0!==t||e.history.push("/login")}))},O=function(){var e=Object(g.firestore)(),t=[];e.collection("installations").where("uid","==",localStorage.getItem("uid")).get().then((function(e){e.forEach((function(e){var a={id:e.id},n=Object(N.a)({},a,{},e.data());t.push(n)}));var a=t.reduce((function(e,t){var a=e[t.recommended]||[];return a.push(t),e[t.recommended]=a,e}),{}),n={customers:void 0!==a.Customers?a.Customers.length:0,relatives:void 0!==a.Relatives?a.Relatives.length:0,friends:void 0!==a.Friends?a.Friends.length:0,dealers:void 0!==a.Dealers?a.Dealers.length:0,neighbours:void 0!==a.Neighbours?a.Neighbours.length:0,justDial:void 0!==a.JustDial?a.JustDial.length:0,google:void 0!==a.Google?a.Google.length:0,others:void 0!==a.Others?a.Others.length:0};d(t),localStorage.setItem("reports_data",JSON.stringify(n))}))},y=function(){var e=H(),t=Object(g.firestore)(),a=[];t.collection("installations").where("nextServiceDate","==",e).get().then((function(e){e.forEach((function(e){var t={id:e.id},n=Object(N.a)({},t,{},e.data());a.push(n)})),c(a.length)})).catch((function(e){console.log(e)})),t.collection("installations").where("status","==","pending").get().then((function(e){e.forEach((function(e){var t={id:e.id},n=Object(N.a)({},t,{},e.data()),r=a.find((function(e){return e.id===t.id}));null!==r&&void 0!==r||a.push(n)})),c(a.length),C(a.length)})).catch((function(e){console.log(e)}))},C=function(e){e>0&&o.current.play()};return r.a.createElement("div",{className:"dashboardform"},r.a.createElement("h2",null,"On Time Service ",r.a.createElement(p.a,{variant:"filled",color:"primary"})),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("p",null,r.a.createElement(m.b,{to:"/addrecords"},r.a.createElement(v.a,{size:"large",variant:"contained",color:"primary",type:"button"},"Add Records"))," "),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("p",null,r.a.createElement(m.b,{to:"/viewrecords"},r.a.createElement(v.a,{size:"large",variant:"contained",color:"primary",type:"button"},"View Records"))),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("p",null,r.a.createElement(m.b,{to:"/notifications"},r.a.createElement(v.a,{size:"large",variant:"contained",color:"primary",type:"button"},"Notifications \xa0"," ",r.a.createElement(K.a,Object.assign({max:10,color:"secondary",badgeContent:l},f))))," "),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement(v.a,{size:"large",color:"primary",variant:"contained",onClick:function(){re('SELECT * INTO XLSX("OnTimeServiceRecords.xlsx",?) FROM ?',[[{sheetid:"On Time Service Records",header:!0}],[s]])}},"Export As File\xa0 ",r.a.createElement(te.a,null)),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement(m.b,{to:"/reports"},r.a.createElement(v.a,{size:"large",color:"primary",variant:"contained"},"Reports \xa0",r.a.createElement(ne.a,null))),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("p",null,r.a.createElement(v.a,{size:"large",variant:"contained",color:"secondary",onClick:function(t){E.a.auth().signOut().then((function(){localStorage.removeItem("uid"),e.history.push("/login")})).catch((function(e){console.log(e)}))}},"Logout")),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("audio",{"webkit-playsinline":"true",playsInline:!0,ref:o,id:"notificationSound",src:"https://notificationsounds.com/soundfiles/acc3e0404646c57502b480dc052c4fe1/file-sounds-1140-just-saying.mp3"}))})),oe=(a(145),void 0),ie=Object(y.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),ue=Object(y.a)({table:{minWidth:650},container:{maxHeight:440}}),se=Object(x.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(A.a),me=Object(x.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:"#8ECDCC"},"&:nth-of-type(even)":{backgroundColor:"#CD8EBF"}}}}))(M.a),de=Object(d.g)((function(e){var t=ue(),a=ie(),l=Object(n.useState)(!1),c=Object(h.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)([]),s=Object(h.a)(u,2),d=s[0],f=s[1],b=Object(n.useState)(0),O=Object(h.a)(b,2),y=O[0],C=O[1];Object(n.useEffect)((function(){R(),k()}),[]);var R=function(t){E.a.auth().onAuthStateChanged((function(t){null!==t&&void 0!==t||e.history.push("/login")}))},k=function(){var e=H(),t=Object(g.firestore)(),a=[];t.collection("installations").where("nextServiceDate","==",e).get().then((function(e){e.forEach((function(e){var t={id:e.id},n=Object(N.a)({},t,{},e.data());a.push(n)})),i(!0),f(a),C(a.length)})).catch((function(e){console.log(e)})),t.collection("installations").where("status","==","pending").get().then((function(e){e.forEach((function(e){var t={id:e.id},n=Object(N.a)({},t,{},e.data()),r=a.find((function(e){return e.id===t.id}));null!==r&&void 0!==r||a.push(n)})),i(!0),f(a),C(a.length)})).catch((function(e){console.log(e)}))},x=d.map((function(e,t){return r.a.createElement(me,{key:t},r.a.createElement(se,null,e.custName),r.a.createElement(se,null,e.plantInstalled),r.a.createElement(se,null,e.dateOfInstallment),r.a.createElement(se,null,e.nextServiceDate),r.a.createElement(se,null,e.custAddress),r.a.createElement(se,null,e.custPhone),r.a.createElement(se,null,r.a.createElement(j.a,{className:a.formControl},r.a.createElement(w.a,{defaultValue:"pending",value:e.status,labelId:"demo-simple-select-label",id:"demo-simple-select",onChange:function(t){return function(e,t){var a=Object(g.firestore)();window.confirm("Are you sure to Change?")&&a.collection("installations").doc(String(e)).set({status:t},{merge:!0}).then((function(){var a=oe.state.records,n=oe.state.records.find((function(t){return t.id===e}));a.pop(n),n.status=t,a.push(n),i(!0),f(a),C(a.length)})).catch((function(e){console.error("Error Adding Document: ",e)}))}(e.id,t.target.value)}},r.a.createElement(S.a,{value:"pending"},"Pending"),r.a.createElement(S.a,{value:"completed"},"Completed")))))})),A=!0===o?x:r.a.createElement(me,null,r.a.createElement(se,null,"Loading")),B=0===y?r.a.createElement("tr",null,r.a.createElement("td",null,"No Notification")):A,L={color:"secondary",children:r.a.createElement($.a,null)};return r.a.createElement("div",{className:"login-form"},r.a.createElement("p",null,r.a.createElement(m.b,{to:"/dashboard"},r.a.createElement(v.a,{color:"secondary",variant:"contained"},r.a.createElement(p.a,null),"\xa0"," Go To Dashboard"))),r.a.createElement("h2",null,"Notifications ",r.a.createElement(K.a,Object.assign({color:"secondary",badgeContent:y},L))),r.a.createElement(F.a,{className:t.container,component:W.a},r.a.createElement(D.a,{className:t.table,stickyHeader:!0,size:"small","aria-label":"sticky table"},r.a.createElement(P.a,null,r.a.createElement(M.a,null,r.a.createElement(se,{align:"right"},"Name"),r.a.createElement(se,{align:"right"},"Plant Installed"),r.a.createElement(se,{align:"right"},"Date of Installment"),r.a.createElement(se,{align:"right"},"Next Service Date"),r.a.createElement(se,{align:"right"},"Address"),r.a.createElement(se,{align:"right"},"Phone"),r.a.createElement(se,{align:"right"},"Status"))),r.a.createElement(I.a,null,B))))})),he=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(i.a)(a,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",{className:"error-block"},r.a.createElement("p",null,r.a.createElement("span",null,"Something went wrong. "),r.a.createElement(m.b,{to:"/"},"Go To Dashboard"))):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(n.Component);var ge=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"pagenotfound"},r.a.createElement("h1",null," 404 Error. Page Not Found "),r.a.createElement(m.b,{className:"link",to:"/dashboard"},"Click Here to go to Dashboard")))},Ee=a(48),ve=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:"",product:"",refrigerant:"",dateofinstallment:"",nextservicedate:"",natureOfWork:"",brandModel:"",amountReceived:"",recommendedBy:"",recommended:"",userId:""},e.getCurrentUser=function(t){E.a.auth().onAuthStateChanged((function(t){e.setState((function(){return{userId:t.uid}})),null!==t&&void 0!==t||e.props.history.push("/login")}))},e.handleInputChange=function(t){t.persist(),e.setState((function(){return Object(Ee.a)({},t.target.name,t.target.value)}))},e.validateInput=function(){var t=e.state,a=t.name,n=t.number,r=t.product,l=t.dateofinstallment,c=t.natureOfWork,o=t.brandModel,i=t.amountReceived,u=t.recommendedBy,s=t.recommended;return null!==a&&null!==n&&null!==r&&null!==l&&null!==c&&null!==o&&null!==i&&null!==u&&null!==s},e.addRecord=function(t){if(t.preventDefault(),e.validateInput()&&window.confirm("Are you sure to edit?")){var a=e.props.match.params.id;Object(g.firestore)().collection("installations").doc(String(a)).set({custName:e.state.name,custPhone:e.state.number,product:e.state.product,refrigerant:"Air Conditioner"===e.state.product||"Refrigerator"===e.state.product?e.state.refrigerant:"select",dateOfInstallment:e.state.dateofinstallment,nextServiceDate:e.state.nextservicedate,natureOfWork:e.state.natureOfWork,brandModel:e.state.brandModel,amountReceived:e.state.amountReceived,recommendedBy:e.state.recommendedBy,recommended:e.state.recommended,uid:e.state.userId}).then((function(){alert("Record Edited Successfully..!"),e.props.history.push("/dashboard")})).catch((function(e){console.error("Error Adding Document: ",e)}))}return!1},e.getData=function(){var t=e.props.match.params.id;Object(g.firestore)().collection("installations").doc(String(t)).get().then((function(t){if(t.exists){var a=t.data();console.log(a),e.setState((function(){return{name:a.custName,number:a.custPhone,product:a.product,refrigerant:void 0!==a.refrigerant?a.refrigerant:"select",dateofinstallment:a.dateOfInstallment,nextservicedate:a.nextServiceDate,natureOfWork:a.natureOfWork,brandModel:a.brandModel,amountReceived:a.amountReceived,recommendedBy:a.recommendedBy,recommended:a.recommended}}),(function(){}))}else console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getCurrentUser(),this.getData()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement(m.b,{to:"/dashboard"},r.a.createElement("button",{id:"home"},"< Go To Dashboard"))),r.a.createElement("div",{className:"form"},r.a.createElement("form",null,r.a.createElement("h2",null,"Edit Record"),r.a.createElement("p",{htmlFor:"name"},"Customer Name, Addr:"),r.a.createElement("input",{type:"text",value:this.state.name,placeholder:"Customer Name, Addr",onChange:this.handleInputChange,name:"name",required:!0}),r.a.createElement("p",{htmlFor:"number"},"Customer Contact Number:"),r.a.createElement("input",{type:"number",value:this.state.number,placeholder:"Customer Phone Number",onChange:this.handleInputChange,name:"number",required:!0}),r.a.createElement("p",{htmlFor:"product"},"Product:"),r.a.createElement(w.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"product",value:this.state.product,onChange:this.handleInputChange},r.a.createElement(S.a,{value:"select",disabled:!0},"Select a Product"),r.a.createElement(S.a,{value:"Air Conditioner"},"Air Conditioner"),r.a.createElement(S.a,{value:"RO"},"RO"),r.a.createElement(S.a,{value:"Washing Machine"},"Washing Machine"),r.a.createElement(S.a,{value:"Refrigerator"},"Refrigerator"),r.a.createElement(S.a,{value:"TV"},"TV"),r.a.createElement(S.a,{value:"Microwave Oven"},"Microwave Oven"),r.a.createElement(S.a,{value:"Others"},"Others")),("Air Conditioner"===this.state.product||"Refrigerator"===this.state.product)&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{htmlFor:"refrigerant"},"Refrigerant:"),r.a.createElement(w.a,{labelId:"demo-simple-select-label",id:"demo-simple-select-1",name:"refrigerant",value:this.state.refrigerant,onChange:this.handleInputChange},r.a.createElement(S.a,{value:"select",disabled:!0},"Select a Refrigerant"),r.a.createElement(S.a,{value:"R22"},"R22"),r.a.createElement(S.a,{value:"R32"},"R32"),r.a.createElement(S.a,{value:"R410"},"R410"),r.a.createElement(S.a,{value:"R134"},"R134"),r.a.createElement(S.a,{value:"R600"},"R600"),r.a.createElement(S.a,{value:"R290"},"R290"))),r.a.createElement("p",{htmlFor:"dateofinstallment"},"Date:"),r.a.createElement("input",{type:"date",value:this.state.dateofinstallment,placeholder:"Date of Installment",onChange:this.handleInputChange,name:"dateofinstallment",required:!0}),r.a.createElement("p",{htmlFor:"nextservicedate"},"Next Due Date:"),r.a.createElement("input",{type:"date",value:this.state.nextservicedate,placeholder:"Next Service Date",onChange:this.handleInputChange,name:"nextservicedate"}),r.a.createElement("p",{htmlFor:"natureOfWork"},"Nature Of Work:"),r.a.createElement("input",{type:"text",value:this.state.natureOfWork,placeholder:"Nature Of Work",onChange:this.handleInputChange,name:"natureOfWork",required:!0}),r.a.createElement("p",{htmlFor:"brandModel"},"Brand and Model:"),r.a.createElement("input",{type:"text",value:this.state.brandModel,placeholder:"Brand and Model",onChange:this.handleInputChange,name:"brandModel",required:!0}),r.a.createElement("p",{htmlFor:"amountReceived"},"Amount Received:"),r.a.createElement("input",{type:"text",value:this.state.amountReceived,placeholder:"Amount Received",onChange:this.handleInputChange,name:"amountReceived",required:!0}),r.a.createElement("p",{htmlFor:"recommended"},"Recommender:"),r.a.createElement(w.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"recommended",value:this.state.recommended,onChange:this.handleInputChange},r.a.createElement(S.a,{value:"select",disabled:!0},"Recommended By"),r.a.createElement(S.a,{value:"Relatives"},"Relatives"),r.a.createElement(S.a,{value:"Friends"},"Friends"),r.a.createElement(S.a,{value:"Dealers"},"Dealers"),r.a.createElement(S.a,{value:"Neighbours"},"Neighbours"),r.a.createElement(S.a,{value:"Customers"},"Customers"),r.a.createElement(S.a,{value:"JustDial"},"JustDial"),r.a.createElement(S.a,{value:"Google"},"Google"),r.a.createElement(S.a,{value:"Others"},"Others")),r.a.createElement("p",{htmlFor:"recommendedBy"},"Recommended By:"),r.a.createElement("input",{type:"text",value:this.state.recommendedBy,placeholder:"Recommended By",onChange:this.handleInputChange,name:"recommendedBy",required:!0}),r.a.createElement("div",null),r.a.createElement("button",{type:"submit",onClick:this.addRecord}," ","Submit"))))}}]),a}(n.Component),fe=Object(d.g)(ve),pe=(a(146),a(204)),be=a(199),Oe=Object(y.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}})),ye=Object(y.a)((function(e){return{textfield:{"& > *":{margin:e.spacing(1),width:"25ch"}}}})),Ce=Object(d.g)((function(e){var t=ye(),a=Oe(),l=Object(n.useState)(!1),c=Object(h.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)(""),s=Object(h.a)(u,2),m=s[0],d=s[1],g=Object(n.useState)(""),f=Object(h.a)(g,2),p=f[0],b=f[1],O=Object(n.useState)(""),y=Object(h.a)(O,2),w=y[0],S=y[1];r.a.useEffect((function(){localStorage.clear(),localStorage.removeItem("reports_data"),localStorage.removeItem("uid")}),[]);var j=function(e){e.persist(),"email"===e.target.name?b(e.target.value):S(e.target.value)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",null,"\xa0"),r.a.createElement("div",null,"\xa0"),r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:"/naveen-db/logo-3.png",width:"360",height:"96.33",alt:"logo-here"}))),r.a.createElement("div",{className:"login-form"},r.a.createElement("div",null,"\xa0"),r.a.createElement("div",null,"\xa0"),r.a.createElement(v.a,{style:{color:"black",backgroundColor:"white"},size:"large",variant:"contained"},"\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Login\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0"),r.a.createElement("div",null,"\xa0"),r.a.createElement("div",null,"\xa0"),r.a.createElement("form",{className:t.textfield},r.a.createElement("small",null),r.a.createElement(C.a,{variant:"outlined",type:"email",onChange:j,required:!0,error:""!==m,name:"email",id:"standard-basic",label:"Email Address",helperText:m}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),"\xa0\xa0\xa0\xa0\xa0",r.a.createElement(C.a,{type:"password",variant:"outlined",onChange:j,required:!0,name:"pwd",id:"standard-basic",label:"Password"}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement("div",null),r.a.createElement(v.a,{size:"large",variant:"contained",color:"primary",type:"submit",name:"submit",onClick:function(t){t.preventDefault(),i(!0),E.a.auth().signInWithEmailAndPassword(p,w).then((function(t){e.history.push("/dashboard")})).catch((function(e){i(!1),"auth/wrong-password"===e.code&&d("Email or Password is incorrect")}))}},"Login Now"),r.a.createElement(v.a,{style:{backgroundColor:"red",color:"white"},size:"large",variant:"contained",type:"submit",name:"submit",onClick:function(t){""===String(p).trim()?alert("Enter email address and then click Forgot Password Link"):E.a.auth().sendPasswordResetEmail(p).then((function(t){e.history.push("/resetpwd")})).catch((function(e){console.log(e)}))}},"Forgot Password?"))),r.a.createElement(pe.a,{className:a.backdrop,open:o,onClick:function(e){i(!1)}},r.a.createElement(be.a,{color:"inherit"})))})),we=(a(147),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={authMessage:""},e.handleInputChange=function(t){t.persist(),e.setState((function(){return Object(Ee.a)({},t.target.name,t.target.value)}),(function(){}))},e.signIn=function(t){t.preventDefault(),E.a.auth().createUserWithEmailAndPassword(e.state.email,e.state.password).then((function(t){alert("Account Created Successfully ! Please Login Now"),e.props.history.push("/login")})).catch((function(t){e.setState((function(){return{authMessage:t.message}}))}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h2",{className:"title"},"Naveen's Db")),r.a.createElement("h3",{className:"title"},"Sign Up"),r.a.createElement("div",{className:"form"},r.a.createElement("form",null,r.a.createElement("small",{id:"err"},this.state.authMessage),r.a.createElement("p",{htmlFor:"email"},"Email"),r.a.createElement("input",{placeholder:"eg., xxx@example.com",type:"email",name:"email",onChange:this.handleInputChange,required:!0}),r.a.createElement("p",{htmlFor:"password"},"Password"),r.a.createElement("input",{placeholder:"Must be atleast 8 characters",type:"password",name:"password",onChange:this.handleInputChange,required:!0}),r.a.createElement("button",{type:"submit",name:"submit",onClick:this.signIn},"Sign In")),r.a.createElement("p",null,"Already have an account?"," ",r.a.createElement(m.b,{to:"/login"},r.a.createElement("u",null,"Login here")))))}}]),a}(n.Component)),Se=Object(d.g)(we),je=(a(148),function(e){return r.a.createElement("div",{id:"pwdreset"},r.a.createElement("h2",null,"Password Reset"),r.a.createElement("p",null,"Hi User, Please check your Mail Inbox for Password Reset Link"),r.a.createElement("small",null,"Note: It might take a minute or two to send password reset mail. Please be patient for the time being."),r.a.createElement("small",null," Once you reset the Password, ",r.a.createElement(m.b,{to:"/login"},r.a.createElement("u",null,"Click here"))))}),Re=a(96),ke=a(200),Ne=(a(149),function(){var e=JSON.parse(localStorage.getItem("reports_data"));return r.a.createElement(n.Fragment,null,r.a.createElement(ke.a,{container:!0,justify:"center",alignContent:"center",alignItems:"center"},r.a.createElement("p",null,r.a.createElement(ke.a,{item:!0,justify:"center",alignContent:"center",alignItems:"center"},r.a.createElement(m.b,{to:"/dashboard"},r.a.createElement(v.a,{color:"secondary",variant:"contained"},r.a.createElement(p.a,null),"\xa0"," Go To Dashboard")))),r.a.createElement("div",null,r.a.createElement("p",null,"\xa0")),r.a.createElement(ke.a,{item:!0},r.a.createElement(Re.a,{chartType:"PieChart",data:[["Sales","Recommenders"],["Relatives",e.relatives],["Friends",e.friends],["Dealers",e.dealers],["Neighbours",e.neighbours],["Customers",e.customers],["JustDial",e.justDial],["Google",e.google],["Others",e.others]],options:{pieHole:.5,slices:[{color:"#2BB673"},{color:"#d91e48"},{color:"#007fad"},{color:"#e9a227"}],legend:{position:"bottom",alignment:"center",textStyle:{color:"233238",fontSize:14}},tooltip:{showColorCode:!0},chartArea:{top:30,width:"50%",height:"50%"},fontName:"Roboto"},graph_id:"PieChart",width:"100%",height:"400px",legend_toggle:!0}))))}),xe=a(98),De=a.n(xe),Ie=a(99),Ae=a.n(Ie),Fe=(a(152),function(e){r.a.useRef("canvas");return r.a.createElement(r.a.Fragment,null,r.a.createElement(De.a,{penColor:"green",canvasProps:{width:400,height:500,className:"sigCanvas",id:"signatureCanvas"}}),r.a.createElement("button",{onClick:function(){var e=document.getElementById("signatureCanvas");Ae()(e,{name:"signature",type:"jpg",quality:.5})}},"Save Signature"))}),Pe=function(){return r.a.createElement(m.a,{basename:"/"},r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/naveen-db/",render:function(){return r.a.createElement(d.a,{to:"/login"})}}),r.a.createElement(d.b,{exact:!0,path:"/",render:function(){return r.a.createElement(d.a,{to:"/login"})}}),r.a.createElement(d.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(Ce,null)}}),r.a.createElement(d.b,{exact:!0,path:"/signup",render:function(){return r.a.createElement(Se,null)}}),r.a.createElement(d.b,{exact:!0,path:"/dashboard",render:function(){return r.a.createElement(ce,null)}}),r.a.createElement(d.b,{exact:!0,path:"/addrecords",render:function(){return r.a.createElement(k,null)}}),r.a.createElement(d.b,{exact:!0,path:"/notifications",render:function(){return r.a.createElement(de,null)}}),r.a.createElement(d.b,{exact:!0,path:"/viewrecords",render:function(){return r.a.createElement(Q,null)}}),r.a.createElement(d.b,{exact:!0,path:"/editrecord/:id",render:function(){return r.a.createElement(fe,null)}}),r.a.createElement(d.b,{exact:!0,path:"/resetpwd",render:function(){return r.a.createElement(je,null)}}),r.a.createElement(d.b,{exact:!0,path:"/reports",render:function(){return r.a.createElement(Ne,null)}}),r.a.createElement(d.b,{exact:!0,path:"/generate-bill",render:function(){return r.a.createElement(Fe,null)}}),r.a.createElement(d.b,{render:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(he,null,r.a.createElement(ge,null)))}})))},Me=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Pe,null))}}]),a}(n.Component),We=a(100),Be=a.n(We),Le=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Te(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var qe={apiKey:"AIzaSyCmGN1TXfG9dTYXx80HvckdQkJpE9nTLXY",authDomain:"naveen-s-db.firebaseapp.com",databaseURL:"https://naveen-s-db.firebaseio.com",projectId:"naveen-s-db",storageBucket:"naveen-s-db.appspot.com",messagingSenderId:"941064666107",appId:"1:941064666107:web:17532e787616deadbf695e",measurementId:"G-34S1Z2T39Q"};Be.a.initializeApp(qe),c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Me,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/naveen-db",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/naveen-db","/service-worker.js");Le?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Te(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Te(t,e)}))}}()},87:function(e,t){}},[[113,1,2]]]);
//# sourceMappingURL=main.a636ccfb.chunk.js.map