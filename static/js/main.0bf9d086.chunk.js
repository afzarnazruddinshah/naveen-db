(this["webpackJsonpnaveen-ro"]=this["webpackJsonpnaveen-ro"]||[]).push([[0],{107:function(e,t,a){e.exports=a(145)},112:function(e,t,a){},123:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},139:function(e,t){},140:function(e,t){},141:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t),a.d(t,"firebaseConfig",(function(){return xe}));var n=a(0),r=a.n(n),l=a(12),c=a.n(l),o=(a(112),a(32)),i=a(33),u=a(37),m=a(36),d=a(13),s=a(39),h=a(9),E=a(10),g=a.n(E),f=(a(123),a(176)),p=a(47),b=a.n(p),v=a(88),O=a.n(v),y=a(173),C=a(191),j=a(190),S=a(192),w=a(180),k=Object(y.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}})),x=(Object(y.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),Object(s.g)((function(e){var t=k(),a=k(),l=Object(n.useState)(null),c=Object(h.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)(null),m=Object(h.a)(u,2),s=m[0],p=m[1],v=Object(n.useState)(null),y=Object(h.a)(v,2),x=(y[0],y[1]),N=Object(n.useState)(null),D=Object(h.a)(N,2),R=D[0],A=D[1],I=Object(n.useState)(null),M=Object(h.a)(I,2),P=M[0],F=M[1],W=Object(n.useState)(null),L=Object(h.a)(W,2),B=L[0],T=L[1],q=r.a.useState("select"),z=Object(h.a)(q,2),G=z[0],H=z[1],V=r.a.useState(null),X=Object(h.a)(V,2),U=X[0],J=X[1],Y=r.a.useState(null),Q=Object(h.a)(Y,2),K=Q[0],Z=Q[1],$=r.a.useState(null),_=Object(h.a)($,2),ee=_[0],te=_[1],ae=r.a.useState(null),ne=Object(h.a)(ae,2),re=(ne[0],ne[1]);Object(n.useEffect)((function(){le()}));var le=function(t){g.a.auth().onAuthStateChanged((function(t){null!==t&&void 0!==t||e.history.push("/login")}))},ce=function(e){switch(e.persist(),e.target.name){case"name":i(e.target.value);break;case"number":p(e.target.value);break;case"model":x(e.target.value);break;case"dateofinstallment":A(e.target.value);break;case"nextservicedate":F(e.target.value);break;case"natureofwork":T(e.target.value);break;case"product":H(e.target.value);break;case"brandmodel":J(e.target.value);break;case"amountreceived":Z(e.target.value);break;case"recommendedby":te(e.target.value);break;case"billimage":re(e.target.files[0])}};return r.a.createElement("div",{className:"login-form"},r.a.createElement("p",null,r.a.createElement(d.b,{to:"/dashboard"},r.a.createElement(f.a,{color:"secondary",variant:"contained"},r.a.createElement(b.a,null),"\xa0"," Go To Dashboard"))),r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement("h2",null,"Add New Record"),r.a.createElement(C.a,{name:"name",type:"text",onChange:ce,label:"Customer Name, Addr",required:!0}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(C.a,{name:"number",type:"number",onChange:ce,label:"Customer Phone Number",required:!0}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(w.a,{className:a.formControl},r.a.createElement(j.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"product",value:G,onChange:ce},r.a.createElement(S.a,{value:"select",disabled:!0},"Select a Product"),r.a.createElement(S.a,{value:"Air Conditioner"},"Air Conditioner"),r.a.createElement(S.a,{value:"RO"},"RO"),r.a.createElement(S.a,{value:"Washing Machine"},"Washing Machine"),r.a.createElement(S.a,{value:"Refrigerator"},"Refrigerator"),r.a.createElement(S.a,{value:"TV"},"TV"),r.a.createElement(S.a,{value:"Microwave Oven"},"Microwave Oven"),r.a.createElement(S.a,{value:"Others"},"Others"))),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(C.a,{className:t.textField,name:"dateofinstallment",type:"date",onChange:ce,label:"Date",required:!0}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(C.a,{className:t.textField,name:"nextservicedate",type:"date",onChange:ce,label:"Next Due Date"}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(C.a,{name:"natureofwork",type:"text",onChange:ce,label:"Nature of Work",required:!0}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(C.a,{name:"brandmodel",type:"text",onChange:ce,label:"Brand and Model",required:!0}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(C.a,{name:"amountreceived",type:"text",onChange:ce,label:"Amount Received",required:!0}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(C.a,{name:"recommendedby",type:"text",onChange:ce,label:"Recommended By",required:!0}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement(f.a,{color:"primary",variant:"contained",type:"submit",onClick:function(t){(t.preventDefault(),null!==o&&null!==s&&null!==R&&null!==B&&null!==U&&null!==K&&null!==ee)&&(window.confirm("Are you sure you want to add this Record?")&&Object(E.firestore)().collection("installations").add({custName:o,custPhone:s,product:G,dateOfInstallment:R,nextServiceDate:P,natureOfWork:B,brandModel:U,amountReceived:K,recommendedBy:ee}).then((function(){alert("Record Added Successfully..!"),e.history.push("/dashboard")})).catch((function(e){console.error("Error Adding Document: ",e)})));return!1}},"Add New Record \xa0 ",r.a.createElement(O.a,null))),r.a.createElement("div",null," ",r.a.createElement("div",null,"\xa0")))}))),N=a(29),D=(a(129),a(5)),R=a(185),A=a(187),I=a(182),M=a(184),P=a(186),F=a(183),W=a(181),L=a(91),B=a.n(L),T=a(92),q=a.n(T),z=a(89),G=a.n(z),H=a(90),V=a.n(H),X=Object(y.a)({table:{minWidth:650},container:{maxHeight:500}}),U=Object(D.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(I.a),J=Object(D.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:"#8ECDCC"},"&:nth-of-type(even)":{backgroundColor:"#CD8EBF"}}}}))(F.a),Y=Object(s.g)((function(e){var t=X(),a=Object(n.useState)([]),l=Object(h.a)(a,2),c=l[0],o=l[1],i=Object(n.useState)(!1),u=Object(h.a)(i,2),m=u[0],s=u[1],p=Object(n.useState)(""),v=Object(h.a)(p,2),O=v[0],y=v[1],j=Object(n.useState)(!1),S=Object(h.a)(j,2),w=S[0],k=S[1],x=Object(n.useState)([]),D=Object(h.a)(x,2),L=D[0],T=D[1];Object(n.useEffect)((function(){z(),H()}),[]);var z=function(){g.a.auth().onAuthStateChanged((function(t){null!==t&&void 0!==t||e.history.push("/login")}))},H=function(){var e=Object(E.firestore)(),t=[];e.collection("installations").get().then((function(e){e.forEach((function(e){var a={id:e.id},n=Object(N.a)({},a,{},e.data());t.push(n)})),o(t),s(!0)}))},Y=(!0===w?L:c).map((function(t){return r.a.createElement(J,{key:t.id},r.a.createElement(U,{component:"th",scope:"row"},t.custName),r.a.createElement(U,{align:"right"},t.custPhone),r.a.createElement(U,{align:"right"},t.product),r.a.createElement(U,{align:"right"},t.dateOfInstallment),r.a.createElement(U,{align:"right"},t.nextServiceDate),r.a.createElement(U,{align:"right"},t.natureOfWork),r.a.createElement(U,{align:"right"},t.brandModel),r.a.createElement(U,{align:"right"},t.amountReceived),r.a.createElement(U,{align:"right"},t.recommendedBy),r.a.createElement(U,{onClick:function(){return a=t.id,void e.history.push("/editrecord/"+a);var a},align:"right"},r.a.createElement(G.a,null)),r.a.createElement(U,{onClick:function(){return e=t.id,void(window.confirm("Are you sure you want to delete?")&&Object(E.firestore)().collection("installations").doc(String(e)).delete().then((function(){alert("Record Deleted Successfully");var t=c.filter((function(t){return t.id!==e}));o(t)})).catch((function(e){console.error("Error removing document: ",e)})));var e},align:"right"},r.a.createElement(V.a,null)))})),Q=!0===m?Y:r.a.createElement(F.a,null,r.a.createElement(I.a,null,"Loading"));return r.a.createElement("div",{className:"login-form"},r.a.createElement("p",null,r.a.createElement(d.b,{to:"/dashboard"},r.a.createElement(f.a,{color:"secondary",variant:"contained"},r.a.createElement(b.a,null),"\xa0"," Go To Dashboard"))),r.a.createElement("h2",{id:"title"},"Viewing All Records"),r.a.createElement(C.a,{value:O,label:"Search any record",type:"text",name:"searchbox",onChange:function(e){e.persist(),y(e.target.value)}})," \xa0 \xa0",r.a.createElement(f.a,{color:"primary",variant:"contained",type:"button",onClick:function(e){k(!0);var t=c.filter((function(e){return-1!==String(e.custName).toLowerCase().search(String(O).toLowerCase())})),a=c.filter((function(e){return-1!==String(e.product).toLowerCase().search(String(O).toLowerCase())})),n=c.filter((function(e){return-1!==String(e.custPhone).toLowerCase().search(String(O).toLowerCase())})),r=c.filter((function(e){return-1!==String(e.brandModel).toLowerCase().search(String(O).toLowerCase())})),l=c.filter((function(e){return-1!==String(e.recommendedBy).toLowerCase().search(String(O).toLowerCase())})),o=t.concat(a,n,r,l);T(o)}},r.a.createElement(B.a,null)),"\xa0 ","  "," ",r.a.createElement(f.a,{color:"primary",variant:"contained",type:"button",onClick:function(e){k(!1),y("")}},r.a.createElement(q.a,null)),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement(M.a,{className:t.container,component:W.a},r.a.createElement(R.a,{className:t.table,stickyHeader:!0,size:"small","aria-label":"sticky table"},r.a.createElement(P.a,null,r.a.createElement(F.a,null,r.a.createElement(U,{align:"right"},"Name and Address"),r.a.createElement(U,{align:"right"},"Phone"),r.a.createElement(U,{align:"right"},"Product"),r.a.createElement(U,{align:"right"},"Date "),r.a.createElement(U,{align:"right"},"Next Due Date"),r.a.createElement(U,{align:"right"},"Nature Of Work"),r.a.createElement(U,{align:"right"},"Brand and Model"),r.a.createElement(U,{align:"right"},"Amount Received"),r.a.createElement(U,{align:"right"},"Recommended By"),r.a.createElement(U,{align:"right"},"Edit"),r.a.createElement(U,{align:"right"},"Delete"))),r.a.createElement(A.a,null,Q))))})),Q=function(){var e=new Date,t=e.getDate(),a=e.getMonth()+1,n=e.getFullYear();return t<10&&(t="0"+t),a<10&&(a="0"+a),e=n+"-"+a+"-"+t},K=(a(130),a(188)),Z=a(66),$=a.n(Z),_=a(93),ee=a.n(_),te=a(75),ae=a(134);te.setXLSX(ae);var ne=Object(y.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2),alignContent:"center",textAlign:"center",justifyContent:"center",alignItems:"center"}}}})),re=Object(s.g)((function(e){ne();var t=Object(n.useState)(0),a=Object(h.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)([]),i=Object(h.a)(o,2),u=(i[0],i[1]),m=Object(n.useState)(!1),s=Object(h.a)(m,2),p=(s[0],s[1]),b=Object(n.useRef)(document.createElement("audio")),v=r.a.useState([]),O=Object(h.a)(v,2),y=(O[0],O[1],{color:"secondary",children:r.a.createElement($.a,null)});Object(n.useEffect)((function(){C(),j()}),[]);var C=function(t){g.a.auth().onAuthStateChanged((function(t){null!==t&&void 0!==t||e.history.push("/login")}))},j=function(){var e=Q(),t=Object(E.firestore)(),a=[];t.collection("installations").where("nextServiceDate","==",e).get().then((function(e){e.forEach((function(e){var t={id:e.id},n=Object(N.a)({},t,{},e.data());a.push(n)})),u(a),p(!0),c(a.length)})).catch((function(e){console.log(e)})),t.collection("installations").where("status","==","pending").get().then((function(e){e.forEach((function(e){var t={id:e.id},n=Object(N.a)({},t,{},e.data()),r=a.find((function(e){return e.id===t.id}));null!==r&&void 0!==r||a.push(n)})),u(a),p(!0),c(a.length),S(a.length)})).catch((function(e){console.log(e)}))},S=function(e){e>0&&b.current.play()};return r.a.createElement("div",{className:"dashboardform"},r.a.createElement("h2",null,"Welcome to On Time Service"),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("p",null,r.a.createElement(d.b,{to:"/addrecords"},r.a.createElement(f.a,{size:"large",variant:"contained",color:"primary",type:"button"},"Add Records"))," "),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("p",null,r.a.createElement(d.b,{to:"/viewrecords"},r.a.createElement(f.a,{size:"large",variant:"contained",color:"primary",type:"button"},"View Records"))),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("p",null,r.a.createElement(d.b,{to:"/notifications"},r.a.createElement(f.a,{size:"large",variant:"contained",color:"primary",type:"button"},"Notifications \xa0"," ",r.a.createElement(K.a,Object.assign({max:10,color:"secondary",badgeContent:l},y))))," "),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement(f.a,{color:"primary",variant:"contained",onClick:function(){var e=Object(E.firestore)(),t=[];e.collection("installations").get().then((function(e){e.forEach((function(e){var a={id:e.id},n=Object(N.a)({},a,{},e.data());t.push(n)})),console.log(t);te('SELECT * INTO XLSX("OnTimeServiceRecords.xlsx",?) FROM ?',[[{sheetid:"On Time Service Records",header:!0}],[t]])}))}},"Export As File\xa0 "," "," "," ",r.a.createElement(ee.a,null)),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("p",null,r.a.createElement(f.a,{size:"large",variant:"contained",color:"secondary",onClick:function(t){g.a.auth().signOut().then((function(){e.history.push("/login")})).catch((function(e){console.log(e)}))}},"Logout")),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0")),r.a.createElement("audio",{"webkit-playsinline":"true",playsInline:!0,ref:b,id:"notificationSound",src:"https://notificationsounds.com/soundfiles/acc3e0404646c57502b480dc052c4fe1/file-sounds-1140-just-saying.mp3"}))})),le=(a(141),void 0),ce=Object(y.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),oe=Object(y.a)({table:{minWidth:650},container:{maxHeight:440}}),ie=Object(D.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(I.a),ue=Object(D.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:"#8ECDCC"},"&:nth-of-type(even)":{backgroundColor:"#CD8EBF"}}}}))(F.a),me=Object(s.g)((function(e){var t=oe(),a=ce(),l=Object(n.useState)(!1),c=Object(h.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)([]),m=Object(h.a)(u,2),s=m[0],p=m[1],v=Object(n.useState)(0),O=Object(h.a)(v,2),y=O[0],C=O[1];Object(n.useEffect)((function(){k(),x(),console.log("useEffect notifications")}),[]);var k=function(t){g.a.auth().onAuthStateChanged((function(t){null!==t&&void 0!==t||e.history.push("/login")}))},x=function(){var e=Q(),t=Object(E.firestore)(),a=[];t.collection("installations").where("nextServiceDate","==",e).get().then((function(e){e.forEach((function(e){var t={id:e.id},n=Object(N.a)({},t,{},e.data());a.push(n)})),i(!0),p(a),C(a.length)})).catch((function(e){console.log(e)})),t.collection("installations").where("status","==","pending").get().then((function(e){e.forEach((function(e){var t={id:e.id},n=Object(N.a)({},t,{},e.data()),r=a.find((function(e){return e.id===t.id}));null!==r&&void 0!==r||a.push(n)})),i(!0),p(a),C(a.length)})).catch((function(e){console.log(e)}))},D=s.map((function(e,t){return r.a.createElement(ue,{key:t},r.a.createElement(ie,null,e.custName),r.a.createElement(ie,null,e.plantInstalled),r.a.createElement(ie,null,e.dateOfInstallment),r.a.createElement(ie,null,e.nextServiceDate),r.a.createElement(ie,null,e.custAddress),r.a.createElement(ie,null,e.custPhone),r.a.createElement(ie,null,r.a.createElement(w.a,{className:a.formControl},r.a.createElement(j.a,{defaultValue:"pending",value:e.status,labelId:"demo-simple-select-label",id:"demo-simple-select",onChange:function(t){return function(e,t){var a=Object(E.firestore)();window.confirm("Are you sure to Change?")&&a.collection("installations").doc(String(e)).set({status:t},{merge:!0}).then((function(){var a=le.state.records,n=le.state.records.find((function(t){return t.id===e}));a.pop(n),n.status=t,a.push(n),i(!0),p(a),C(a.length)})).catch((function(e){console.error("Error Adding Document: ",e)}))}(e.id,t.target.value)}},r.a.createElement(S.a,{value:"pending"},"Pending"),r.a.createElement(S.a,{value:"completed"},"Completed")))))})),I=!0===o?D:r.a.createElement(ue,null,r.a.createElement(ie,null,"Loading")),L=0===y?r.a.createElement("tr",null,r.a.createElement("td",null,"No Notification")):I,B={color:"secondary",children:r.a.createElement($.a,null)};return r.a.createElement("div",{className:"login-form"},r.a.createElement("p",null,r.a.createElement(d.b,{to:"/dashboard"},r.a.createElement(f.a,{color:"secondary",variant:"contained"},r.a.createElement(b.a,null),"\xa0"," Go To Dashboard"))),r.a.createElement("h2",null,"Notifications ",r.a.createElement(K.a,Object.assign({color:"secondary",badgeContent:y},B))),r.a.createElement(M.a,{className:t.container,component:W.a},r.a.createElement(R.a,{className:t.table,stickyHeader:!0,size:"small","aria-label":"sticky table"},r.a.createElement(P.a,null,r.a.createElement(F.a,null,r.a.createElement(ie,{align:"right"},"Name"),r.a.createElement(ie,{align:"right"},"Plant Installed"),r.a.createElement(ie,{align:"right"},"Date of Installment"),r.a.createElement(ie,{align:"right"},"Next Service Date"),r.a.createElement(ie,{align:"right"},"Address"),r.a.createElement(ie,{align:"right"},"Phone"),r.a.createElement(ie,{align:"right"},"Status"))),r.a.createElement(A.a,null,L))))})),de=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(i.a)(a,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",{className:"error-block"},r.a.createElement("p",null,r.a.createElement("span",null,"Something went wrong. "),r.a.createElement(d.b,{to:"/"},"Go To Dashboard"))):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(n.Component);var se=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"pagenotfound"},r.a.createElement("h1",null," 404 Error. Page Not Found "),r.a.createElement(d.b,{className:"link",to:"/dashboard"},"Click Here to go to Dashboard")))},he=a(48),Ee=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:"",product:"",dateofinstallment:"",nextservicedate:"",natureOfWork:"",brandModel:"",amountReceived:"",recommendedBy:""},e.getCurrentUser=function(t){g.a.auth().onAuthStateChanged((function(t){null!==t&&void 0!==t||e.props.history.push("/login")}))},e.handleInputChange=function(t){t.persist(),e.setState((function(){return Object(he.a)({},t.target.name,t.target.value)}))},e.validateInput=function(){var t=e.state,a=t.name,n=t.number,r=t.product,l=t.dateofinstallment,c=t.nextservicedate,o=t.natureOfWork,i=t.brandModel,u=t.amountReceived,m=t.recommendedBy;return!!(null!==a&&null!==n&&null!==r&&null!==l&&null!==c&&null!==o&&null!==i&&null!==u&null!==m)},e.addRecord=function(t){if(t.preventDefault(),e.validateInput()&&window.confirm("Are you sure to edit?")){var a=e.props.match.params.id;Object(E.firestore)().collection("installations").doc(String(a)).set({custName:e.state.name,custPhone:e.state.number,product:e.state.product,dateOfInstallment:e.state.dateofinstallment,nextServiceDate:e.state.nextservicedate,natureOfWork:e.state.natureOfWork,brandModel:e.state.brandModel,amountReceived:e.state.amountReceived,recommendedBy:e.state.recommendedBy}).then((function(){alert("Record Edited Successfully..!"),e.props.history.push("/dashboard")})).catch((function(e){console.error("Error Adding Document: ",e)}))}return!1},e.getData=function(){var t=e.props.match.params.id;Object(E.firestore)().collection("installations").doc(String(t)).get().then((function(t){if(t.exists){var a=t.data();e.setState((function(){return{name:a.custName,number:a.custPhone,product:a.product,dateofinstallment:a.dateOfInstallment,nextservicedate:a.nextServiceDate,natureOfWork:a.natureOfWork,brandModel:a.brandModel,amountReceived:a.amountReceived,recommendedBy:a.recommendedBy}}),(function(){}))}else console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getCurrentUser(),this.getData()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement(d.b,{to:"/dashboard"},r.a.createElement("button",{id:"home"},"< Go To Dashboard"))),r.a.createElement("div",{className:"form"},r.a.createElement("form",null,r.a.createElement("h2",null,"Edit Record"),r.a.createElement("p",{htmlFor:"name"},"Customer Name, Addr:"),r.a.createElement("input",{type:"text",value:this.state.name,placeholder:"Customer Name, Addr",onChange:this.handleInputChange,name:"name",required:!0}),r.a.createElement("p",{htmlFor:"number"},"Customer Contact Number:"),r.a.createElement("input",{type:"number",value:this.state.number,placeholder:"Customer Phone Number",onChange:this.handleInputChange,name:"number",required:!0}),r.a.createElement("p",{htmlFor:"product"},"Product:"),r.a.createElement(j.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"product",value:this.state.product,onChange:this.handleInputChange},r.a.createElement(S.a,{value:"select",disabled:!0},"Select a Product"),r.a.createElement(S.a,{value:"Air Conditioner"},"Air Conditioner"),r.a.createElement(S.a,{value:"RO"},"RO"),r.a.createElement(S.a,{value:"Washing Machine"},"Washing Machine"),r.a.createElement(S.a,{value:"Refrigerator"},"Refrigerator"),r.a.createElement(S.a,{value:"TV"},"TV"),r.a.createElement(S.a,{value:"Microwave Oven"},"Microwave Oven"),r.a.createElement(S.a,{value:"Others"},"Others")),r.a.createElement("p",{htmlFor:"dateofinstallment"},"Date:"),r.a.createElement("input",{type:"date",value:this.state.dateofinstallment,placeholder:"Date of Installment",onChange:this.handleInputChange,name:"dateofinstallment",required:!0}),r.a.createElement("p",{htmlFor:"nextservicedate"},"Next Due Date:"),r.a.createElement("input",{type:"date",value:this.state.nextservicedate,placeholder:"Next Service Date",onChange:this.handleInputChange,name:"nextservicedate"}),r.a.createElement("p",{htmlFor:"natureOfWork"},"Nature Of Work:"),r.a.createElement("input",{type:"text",value:this.state.natureOfWork,placeholder:"Nature Of Work",onChange:this.handleInputChange,name:"natureOfWork",required:!0}),r.a.createElement("p",{htmlFor:"brandModel"},"Brand and Model:"),r.a.createElement("input",{type:"text",value:this.state.brandModel,placeholder:"Brand and Model",onChange:this.handleInputChange,name:"brandModel",required:!0}),r.a.createElement("p",{htmlFor:"amountReceived"},"Amount Received:"),r.a.createElement("input",{type:"text",value:this.state.amountReceived,placeholder:"Amount Received",onChange:this.handleInputChange,name:"amountReceived",required:!0}),r.a.createElement("p",{htmlFor:"recommendedBy"},"Recommended By:"),r.a.createElement("input",{type:"text",value:this.state.recommendedBy,placeholder:"Recommended By",onChange:this.handleInputChange,name:"recommendedBy",required:!0}),r.a.createElement("div",null),r.a.createElement("button",{type:"submit",onClick:this.addRecord}," ","Submit"))))}}]),a}(n.Component),ge=Object(s.g)(Ee),fe=(a(142),a(193)),pe=a(189),be=Object(y.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}})),ve=Object(y.a)((function(e){return{textfield:{"& > *":{margin:e.spacing(1),width:"25ch"}}}})),Oe=Object(s.g)((function(e){var t=ve(),a=be(),l=Object(n.useState)(!1),c=Object(h.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)(""),m=Object(h.a)(u,2),d=m[0],s=m[1],E=Object(n.useState)(""),p=Object(h.a)(E,2),b=p[0],v=p[1],O=Object(n.useState)(""),y=Object(h.a)(O,2),j=y[0],S=y[1],w=function(e){e.persist(),"email"===e.target.name?v(e.target.value):S(e.target.value)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h2",{className:"title"},"On Time Service")),r.a.createElement("h3",{className:"title"},"Login"),r.a.createElement("div",{className:"login-form"},r.a.createElement("form",{className:t.textfield},r.a.createElement("small",{className:"err"},d),r.a.createElement(C.a,{type:"email",onChange:w,required:!0,name:"email",id:"standard-basic",label:"Email Address"}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),"\xa0\xa0\xa0\xa0\xa0",r.a.createElement(C.a,{type:"password",onChange:w,required:!0,name:"pwd",id:"standard-basic",label:"Password"}),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement("div",null),r.a.createElement(f.a,{size:"large",variant:"contained",color:"primary",type:"submit",name:"submit",onClick:function(t){t.preventDefault(),i(!0),g.a.auth().signInWithEmailAndPassword(b,j).then((function(t){e.history.push("/dashboard")})).catch((function(e){i(!1),"auth/wrong-password"===e.code&&s("The email or Password is incorrect !")}))}},"Login Now"),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement("div",null,r.a.createElement("div",null),"\xa0"),r.a.createElement("p",{className:"red stmt login-form"},"Forgot Password?"," ",r.a.createElement("span",{onClick:function(t){""===String(b).trim()?alert("Enter email address and then click Forgot Password Link"):g.a.auth().sendPasswordResetEmail(b).then((function(t){e.history.push("/resetpwd")})).catch((function(e){console.log(e)}))}},r.a.createElement("u",null,"Click Here"))))),r.a.createElement(fe.a,{className:a.backdrop,open:o,onClick:function(e){i(!1)}},r.a.createElement(pe.a,{color:"inherit"})))})),ye=(a(143),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={authMessage:""},e.handleInputChange=function(t){t.persist(),e.setState((function(){return Object(he.a)({},t.target.name,t.target.value)}),(function(){}))},e.signIn=function(t){t.preventDefault(),g.a.auth().createUserWithEmailAndPassword(e.state.email,e.state.password).then((function(t){alert("Account Created Successfully ! Please Login Now"),e.props.history.push("/login")})).catch((function(t){e.setState((function(){return{authMessage:t.message}}))}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h2",{className:"title"},"Naveen's Db")),r.a.createElement("h3",{className:"title"},"Sign Up"),r.a.createElement("div",{className:"form"},r.a.createElement("form",null,r.a.createElement("small",{id:"err"},this.state.authMessage),r.a.createElement("p",{htmlFor:"email"},"Email"),r.a.createElement("input",{placeholder:"eg., xxx@example.com",type:"email",name:"email",onChange:this.handleInputChange,required:!0}),r.a.createElement("p",{htmlFor:"password"},"Password"),r.a.createElement("input",{placeholder:"Must be atleast 8 characters",type:"password",name:"password",onChange:this.handleInputChange,required:!0}),r.a.createElement("button",{type:"submit",name:"submit",onClick:this.signIn},"Sign In")),r.a.createElement("p",null,"Already have an account?"," ",r.a.createElement(d.b,{to:"/login"},r.a.createElement("u",null,"Login here")))))}}]),a}(n.Component)),Ce=Object(s.g)(ye),je=(a(144),function(e){return r.a.createElement("div",{id:"pwdreset"},r.a.createElement("h2",null,"Password Reset"),r.a.createElement("p",null,"Hi User, Please check your Mail Inbox for Password Reset Link"),r.a.createElement("small",null,"Note: It might take a minute or two to send password reset mail. Please be patient for the time being."),r.a.createElement("small",null," Once you reset the Password, ",r.a.createElement(d.b,{to:"/login"},r.a.createElement("u",null,"Click here"))))}),Se=function(){return r.a.createElement(d.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/naveen-db/",render:function(){return r.a.createElement(s.a,{to:"/login"})}}),r.a.createElement(s.b,{exact:!0,path:"/",render:function(){return r.a.createElement(s.a,{to:"/login"})}}),r.a.createElement(s.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(Oe,null)}}),r.a.createElement(s.b,{exact:!0,path:"/signup",render:function(){return r.a.createElement(Ce,null)}}),r.a.createElement(s.b,{exact:!0,path:"/dashboard",render:function(){return r.a.createElement(re,null)}}),r.a.createElement(s.b,{exact:!0,path:"/addrecords",render:function(){return r.a.createElement(x,null)}}),r.a.createElement(s.b,{exact:!0,path:"/notifications",render:function(){return r.a.createElement(me,null)}}),r.a.createElement(s.b,{exact:!0,path:"/viewrecords",render:function(){return r.a.createElement(Y,null)}}),r.a.createElement(s.b,{exact:!0,path:"/editrecord/:id",render:function(){return r.a.createElement(ge,null)}}),r.a.createElement(s.b,{exact:!0,path:"/resetpwd",render:function(){return r.a.createElement(je,null)}}),r.a.createElement(s.b,{render:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(de,null,r.a.createElement(se,null)))}})))},we=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Se,null))}}]),a}(n.Component),ke=a(94),xe={apiKey:"AIzaSyCmGN1TXfG9dTYXx80HvckdQkJpE9nTLXY",authDomain:"naveen-s-db.firebaseapp.com",databaseURL:"https://naveen-s-db.firebaseio.com",projectId:"naveen-s-db",storageBucket:"naveen-s-db.appspot.com",messagingSenderId:"941064666107",appId:"1:941064666107:web:17532e787616deadbf695e",measurementId:"G-34S1Z2T39Q"};a.n(ke).a.initializeApp(xe),c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(we,null)),document.getElementById("root"))},86:function(e,t){}},[[107,1,2]]]);
//# sourceMappingURL=main.0bf9d086.chunk.js.map