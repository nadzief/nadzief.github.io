(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t,a){e.exports=a(269)},129:function(e,t,a){},269:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),o=a.n(l),c=(a(129),a(27)),i=a(28),u=a(31),m=a(29),s=a(32),p=a(278),d=a(284),h=a(283),E=a(270),g=a(79),f=a.n(g),v=a(114),w=a.n(v),b=a(81),k=a.n(b),y=a(80),j=a.n(y),C=a(53),O=a.n(C),L=a(54),x=a.n(L),W=a(61),S=a.n(W),N=[{id:"1",image:"https://www.w3schools.com/w3css/img_lights.jpg",label:"Nutella",content:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"},{id:"2",image:"https://www.w3schools.com/w3css/img_lights.jpg",label:"Pane",content:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"},{id:"3",image:"https://www.w3schools.com/w3css/img_lights.jpg",label:"Latte",content:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"},{id:"4",image:"https://www.w3schools.com/w3css/img_lights.jpg",label:"Cappucino",content:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"},{id:"5",image:"https://www.w3schools.com/w3css/img_lights.jpg",label:"Mochacino",content:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"},{id:"6",image:"https://www.w3schools.com/w3css/img_lights.jpg",label:"Coffee",content:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"}],_=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginRight:"5%",marginLeft:"5%"}},r.a.createElement("h3",null," Catalog Produk "),r.a.createElement("main",null,r.a.createElement("div",null,r.a.createElement(O.a,{container:!0,spacing:40},N.map(function(e){return r.a.createElement(O.a,{item:!0,key:e.id,sm:6,md:4,lg:4},r.a.createElement(f.a,null,r.a.createElement(j.a,{style:{paddingTop:"56.25%"},image:e.image,title:"Image title"}),r.a.createElement(k.a,null,r.a.createElement(x.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.label),r.a.createElement(x.a,null,e.content)),r.a.createElement(w.a,null,r.a.createElement(E.a,{to:"/product/"+e.id},r.a.createElement(S.a,{variant:"contained",size:"small",color:"primary"},"View")),r.a.createElement(S.a,{variant:"contained",size:"small",color:"primary"},"Edit"))))}))))))},I=function(e){var t=e.match,a=N.find(function(e){return e.id===t.params.id});return console.log(N,t.params.id),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginRight:"5%",marginLeft:"5%"}},r.a.createElement("h3",null," Detail Produk "),r.a.createElement("main",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(E.a,{to:"/catalog"}," Back to Catalog ")),r.a.createElement(O.a,{container:!0,spacing:40},r.a.createElement(O.a,{item:!0,key:a.id,sm:6,md:4,lg:12},r.a.createElement(f.a,null,r.a.createElement(j.a,{style:{paddingTop:"50%"},image:a.image,title:"Image title"}),r.a.createElement(k.a,null,r.a.createElement(x.a,{gutterBottom:!0,variant:"h5",component:"h2"},a.label),r.a.createElement(x.a,null,a.content)))))))))},T=function(e){var t=e.match;return r.a.createElement("div",null,r.a.createElement("h3",null," Section : ",t.params.sectionName," "))},A=function(e){var t=e.match;return r.a.createElement("div",null,r.a.createElement(h.a,{exact:!0,path:t.url}),r.a.createElement("h3",null," Silakan Pilih : "),r.a.createElement("ul",null,r.a.createElement("li",null," ",r.a.createElement(E.a,{to:"".concat(t.url,"/info")}," Info ")," "),r.a.createElement("li",null," ",r.a.createElement(E.a,{to:"".concat(t.url,"/about")}," About ")," "),r.a.createElement("li",null," ",r.a.createElement(E.a,{to:"".concat(t.url,"/contacs")}," Contact ")," ")),r.a.createElement(h.a,{path:"".concat(t.url,"/:sectionName"),component:T}))},D=a(16),B=a.n(D),F=a(34),G=a(271),P=a(272),R=a(244),U=a(282),K=a(245),z=a(273),H=a(280),M=a(68),J=a.n(M),q="http://localhost:3333";var V=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={data:[],redirect:!1},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(F.a)(B.a.mark(function e(){var t=this;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(J.a.defaults.baseURL=q,J.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",J.a.get("/get/warung")).then(function(e){t.setState({data:e.data.data})}).catch(function(e){console.log(e)});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.redirect?r.a.createElement(H.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(G.a,null,r.a.createElement(P.a,{justify:"left"},r.a.createElement(R.a,{sm:12},r.a.createElement(U.a,null,r.a.createElement(U.a.Item,null," Home "),r.a.createElement(U.a.Item,{active:!0},"Warung"))),r.a.createElement(R.a,{sm:12},r.a.createElement(E.a,{to:"create-warung"},r.a.createElement(K.a,{variant:"primary"},r.a.createElement("i",{className:"fas fa-user-plus"})," \xa0 Tambah Warung"),r.a.createElement("br",null),r.a.createElement("br",null))),r.a.createElement(R.a,{sm:12},r.a.createElement(z.a,{striped:!0,bordered:!0,hover:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Nama Warung"),r.a.createElement("th",null,"Kode Warung"),r.a.createElement("th",null,"Alamat"),r.a.createElement("th",null,"No. Telp"),r.a.createElement("th",null,"Deskripsi"))),r.a.createElement("tbody",null,this.state.data.map(function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null," ",e.nama_warung," "),r.a.createElement("td",null," ",e.kode_warung," "),r.a.createElement("td",null," ",e.alamat," "),r.a.createElement("td",null," ",e.no_telp," "),r.a.createElement("td",null," ",e.deskripsi," "))}))))))))}}]),t}(n.Component),Y=a(115),$=a(52),Q=a(279),X=a(275),Z=a(116),ee=a.n(Z),te=a(117),ae="tb_warung",ne=Object(te.openDb)("db_warung",1,function(e){e.createObjectStore(ae)}),re={get:function(){var e=Object(F.a)(B.a.mark(function e(t){var a;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne;case 2:return a=e.sent,e.abrupt("return",a.transaction(ae).objectStore(ae).get(t));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getAll:function(){var e=Object(F.a)(B.a.mark(function e(){var t;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne;case 2:return t=e.sent,e.abrupt("return",t.transaction(ae).objectStore(ae).getAll());case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),set:function(){var e=Object(F.a)(B.a.mark(function e(t,a){var n,r;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne;case 2:return n=e.sent,(r=n.transaction(ae,"readwrite",{autoIncrement:!0})).objectStore(ae).put(a,t),e.abrupt("return",r.complete);case 6:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),delete:function(){var e=Object(F.a)(B.a.mark(function e(t){var a,n;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne;case 2:return a=e.sent,(n=a.transaction(ae,"readwrite")).objectStore(ae).delete(t),e.abrupt("return",n.complete);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),clear:function(){var e=Object(F.a)(B.a.mark(function e(){var t,a;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne;case 2:return t=e.sent,(a=t.transaction(ae,"readwrite")).objectStore(ae).clear(),e.abrupt("return",a.complete);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),keys:function(){var e=Object(F.a)(B.a.mark(function e(t){var a;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne;case 2:return a=e.sent,e.abrupt("return",a.transaction(ae).objectStore(ae).getAllKeys(t));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()};var le=re,oe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){return function(t){a.setState(Object(Y.a)({},e,t.target.value))}},a.fileUploadChange=function(e){return function(e){a.setState({foto:e.target.files[0]})}},a.handleClick=function(e){e.preventDefault();var t={nama_warung:a.state.namaWarung,kode_warung:a.state.kodeWarung,alamat:a.state.alamat,no_telp:a.state.noTelp,deskripsi:a.state.deskripsi},n=ee()();"serviceWorker"in navigator&&"SyncManager"in window?(console.log(n),console.log(t),console.log("service worker and background sync is ready"),navigator.serviceWorker.ready.then(function(e){le.set(n,t).then(function(){e.sync.register("sync-new-trx")})})):le.set(n,t)},a.state={namaWarung:"",kodeWarung:"",alamat:"",noTelp:"",deskripsi:"",foto:"",redirect:!1},a.handleClick=a.handleClick.bind(Object($.a)(Object($.a)(a))),a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(H.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(G.a,null,r.a.createElement(P.a,{justify:"center"},r.a.createElement(Q.a,{style:{width:"100%"}},r.a.createElement(Q.a.Body,null,r.a.createElement(R.a,{sm:12},r.a.createElement(X.a,{id:"form_warung"},r.a.createElement(X.a.Group,null,r.a.createElement(X.a.Label,null," Nama Warung "),r.a.createElement(X.a.Control,{id:"nama_warung",type:"text",placeholder:"Input Nama Warung",value:this.state.namaWarung,onChange:this.handleChange("namaWarung")})),r.a.createElement(X.a.Group,null,r.a.createElement(X.a.Label,null," Kode Warung "),r.a.createElement(X.a.Control,{id:"kode_warung",as:"select",value:this.state.kodeWarung,onChange:this.handleChange("kodeWarung")},r.a.createElement("option",null," -- Select -- "),r.a.createElement("option",{key:"1",value:"0001"}," 0001 "),r.a.createElement("option",{key:"2",value:"0002"}," 0002 "),r.a.createElement("option",{key:"3",value:"0003"}," 0003 "),r.a.createElement("option",{key:"4",value:"0004"}," 0004 "),r.a.createElement("option",{key:"5",value:"0005"}," 0005 "))),r.a.createElement(X.a.Group,null,r.a.createElement(X.a.Label,null," Alamat "),r.a.createElement(X.a.Control,{id:"alamat",as:"textarea",rows:"3",value:this.state.alamat,onChange:this.handleChange("alamat")})),r.a.createElement(X.a.Group,null,r.a.createElement(X.a.Label,null," No. Telp "),r.a.createElement(X.a.Control,{id:"no_telp",type:"text",placeholder:"Input Kode Warung",value:this.state.noTelp,onChange:this.handleChange("noTelp")})),r.a.createElement(X.a.Group,null,r.a.createElement(X.a.Label,null," Deskripsi "),r.a.createElement(X.a.Control,{id:"deskripsi",as:"textarea",rows:"3",value:this.state.deskripsi,onChange:this.handleChange("deskripsi")})),r.a.createElement(X.a.Group,null,r.a.createElement(X.a.Label,null," Upload Foto "),r.a.createElement(X.a.Control,{type:"file",onChange:this.fileUploadChange()})),r.a.createElement(K.a,{variant:"primary",type:"submit",onClick:this.handleClick},"Submit")))))))))}}]),t}(n.Component),ce=a(276),ie=a(281),ue=a(277),me=a(274),se=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ce.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(ce.a.Brand,{href:"#home"},"React PWA"),r.a.createElement(ce.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(ce.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(ie.a,{className:"mr-auto"},r.a.createElement(ie.a.Link,null,r.a.createElement(E.a,{to:"/",style:{color:"white"}},"Home")),r.a.createElement(ie.a.Link,null,r.a.createElement(E.a,{to:"/catalog",style:{color:"white"}},"Catalog")),r.a.createElement(ie.a.Link,null,r.a.createElement(E.a,{to:"/warung",style:{color:"white"}},"Warung")),r.a.createElement(ie.a.Link,null,r.a.createElement(E.a,{to:"/nested",style:{color:"white"}},"Nested")),r.a.createElement(ue.a,{title:"Dropdown",id:"collasible-nav-dropdown",style:{color:"white"}},r.a.createElement(ue.a.Item,{href:"#action/3.1"},"Action"),r.a.createElement(ue.a.Item,{href:"#action/3.2"},"Another action"),r.a.createElement(ue.a.Item,{href:"#action/3.3"},"Something"),r.a.createElement(ue.a.Divider,null),r.a.createElement(ue.a.Item,{href:"#action/3.4"},"Separated link"))),r.a.createElement(ie.a,null,r.a.createElement(ie.a.Link,{href:"#deets"},"Sign In"),r.a.createElement(ie.a.Link,{eventKey:2,href:"#memes"},"Sign Up")))),r.a.createElement(me.a,null,r.a.createElement("h1",null,"Hello, world!"),r.a.createElement("p",null,"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."),r.a.createElement("p",null,r.a.createElement(K.a,{variant:"primary"},"Learn more"))))}}]),t}(n.Component),pe=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container",style:{textAlign:"center"}},r.a.createElement("span",{className:"text-muted"}," Nadzief Corp @2019 ")))}}]),t}(n.Component);function de(){return r.a.createElement("div",null,r.a.createElement("h1",null," 404 Not Found "),r.a.createElement("p",null," ",r.a.createElement("h3",null," The Page What Your Request Is Not Found ")," "))}var he=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(se,null),r.a.createElement(d.a,null,r.a.createElement(h.a,{path:"/",exact:!0,component:_}),r.a.createElement(h.a,{path:"/warung",component:V}),r.a.createElement(h.a,{path:"/create-warung",component:oe}),r.a.createElement(h.a,{path:"/catalog",component:_}),r.a.createElement(h.a,{path:"/product/:id",component:I}),r.a.createElement(h.a,{path:"/nested",component:A}),r.a.createElement(h.a,{component:de})),r.a.createElement("div",null,r.a.createElement(pe,null))))}}]),t}(n.Component),Ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ge(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var fe=a(123),ve=a.n(fe);o.a.render(r.a.createElement(p.a,null,r.a.createElement(ve.a,null,r.a.createElement(he,null))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");Ee?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ge(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):ge(e)})}}()}},[[124,2,1]]]);
//# sourceMappingURL=main.b924d666.chunk.js.map