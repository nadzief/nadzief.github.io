(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){e.exports=a(215)},113:function(e,t,a){},215:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),c=a.n(l),i=(a(113),a(11)),o=a(12),u=a(14),s=a(13),m=a(15),d=a(227),p=a(229),h=a(230),E=a(8),f=a.n(E),g=a(21),b=a(31),v=a(224),w=a(94),k=a.n(w),y=a(95),j=a.n(y),x=a(96),O=a.n(x),C=function(e){function t(e,a){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e,a))).handleSelect=n.handleSelect.bind(Object(b.a)(Object(b.a)(n))),n.state={index:0,direction:null},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleSelect",value:function(e,t){this.setState({index:e,direction:t.direction})}},{key:"render",value:function(){var e=this.state,t=e.index,a=e.direction;return r.a.createElement("div",null,r.a.createElement(v.a,{activeIndex:t,direction:a,onSelect:this.handleSelect},r.a.createElement(v.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:k.a,alt:"First slide",height:550}),r.a.createElement(v.a.Caption,null,r.a.createElement("h3",null,"First slide label"),r.a.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum."))),r.a.createElement(v.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:j.a,alt:"Second slide",height:550}),r.a.createElement(v.a.Caption,null,r.a.createElement("h3",null,"Second slide label"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),r.a.createElement(v.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:O.a,alt:"Third slide",height:550}),r.a.createElement(v.a.Caption,null,r.a.createElement("h3",null,"Third slide label"),r.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur.")))),r.a.createElement("br",null))}}]),t}(n.Component),N=a(216),S=a(217),W=a(194),L=a(231),I=a(225),T=a(218),A=a(40),_=a.n(A),H=a(51),F=a(29),D=a.n(F),R="http://langitsalam.com:3334";var z=/(<[^>]+>|&nbsp;)/gi,M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={data:[],redirect:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(f.a.mark(function e(){var t=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(D.a.defaults.baseURL=R,D.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",D.a.get("/get/produk")).then(function(e){t.setState({data:e.data.data})}).catch(function(e){console.log(e)});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.classes;return this.state.redirect?n.createElement(I.a,{to:"/"}):n.createElement(n.Fragment,null,n.createElement(C,null),n.createElement("div",null,n.createElement(N.a,null,n.createElement(S.a,{justify:"left"},n.createElement(W.a,{sm:12},n.createElement(L.a,null,n.createElement(L.a.Item,null," Home "),n.createElement(L.a.Item,{active:!0}," Catalog "))),n.createElement(W.a,{sm:12},n.createElement("div",{style:{marginRight:"5%",marginLeft:"5%"}},n.createElement("main",null,n.createElement("div",null,this.state.data.map(function(t){return n.createElement("div",{key:t.id,className:e.item},n.createElement("div",{className:e.imageWrapper},n.createElement(T.a,{to:"/product/".concat(t.id)},n.createElement(H.Lazy,{ltIE9:!0,className:e.image},n.createElement("img",{src:t.link_image,alt:t.title,className:e.image})))),n.createElement("div",{className:e.bodyWrapper},n.createElement("h2",{className:e.title},n.createElement(T.a,{to:"/product/".concat(t.id)},t.title)),n.createElement("div",{className:e.excerpt},t.deskripsi=t.deskripsi.replace(z,"").substring(0,200)),n.createElement("div",{className:e.info},n.createElement("span",null,t.harga))))})))))))))}}]),t}(n.PureComponent),P=_()(function(e){return{wrapper:{margin:[[20,0]],padding:18},item:{display:"flex",padding:[[18,0]]},imageWrapper:{flexShrink:0},image:{objectFit:"cover",display:"inline-block",backgroundColor:"rgba(0, 0, 0, 0.067)",width:96,height:54,"@media (min-width: 640px)":{width:250,height:140},"@media (min-width: 860px)":{width:332,height:186}},bodyWrapper:{paddingLeft:18,flex:"1 1 auto"},title:{composes:"heading",lineHeight:1,"& a":{fontSize:18,color:e.baseColor},"@media (min-width: 640px)":{lineHeight:1.5,"& a":{fontSize:21}}},excerpt:{position:"absolute",opacity:0,pointerEvents:"none",left:"-999em",lineHeight:1.6,margin:[[18,0]],"@media (min-width: 640px)":{position:"static",opacity:1,pointerEvents:"auto",color:e.textMuted}},info:{fontSize:13,marginRight:6,color:e.textMuted}}})(M),U=a(219),G=a(195),B=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(U.a,null,r.a.createElement("h1",null,"Hello, world!"),r.a.createElement("p",null,"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."),r.a.createElement("p",null,r.a.createElement(G.a,{variant:"primary"},"Learn more"))))}}]),t}(n.Component),K=function(e){var t=e.match;return r.a.createElement("div",null,r.a.createElement("h3",null," Section : ",t.params.sectionName," "))},q=function(e){var t=e.match;return r.a.createElement("div",null,r.a.createElement(B,null),r.a.createElement(h.a,{exact:!0,path:t.url}),r.a.createElement("h3",null," Silakan Pilih : "),r.a.createElement("ul",null,r.a.createElement("li",null," ",r.a.createElement(T.a,{to:"".concat(t.url,"/info")}," Info ")," "),r.a.createElement("li",null," ",r.a.createElement(T.a,{to:"".concat(t.url,"/about")}," About ")," "),r.a.createElement("li",null," ",r.a.createElement(T.a,{to:"".concat(t.url,"/contacs")}," Contact ")," ")),r.a.createElement(h.a,{path:"".concat(t.url,"/:sectionName"),component:K}))},J=a(220),Y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={data:[],redirect:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(f.a.mark(function e(){var t=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(D.a.defaults.baseURL=R,D.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",D.a.get("/get/warung")).then(function(e){t.setState({data:e.data.data})}).catch(function(e){console.log(e)});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.redirect?r.a.createElement(I.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null),r.a.createElement("div",null,r.a.createElement(N.a,null,r.a.createElement(S.a,{justify:"left"},r.a.createElement(W.a,{sm:12},r.a.createElement(L.a,null,r.a.createElement(L.a.Item,null," Home "),r.a.createElement(L.a.Item,{active:!0},"Warung"))),r.a.createElement(W.a,{sm:12},r.a.createElement(T.a,{to:"create-warung"},r.a.createElement(G.a,{variant:"primary"},r.a.createElement("i",{className:"fas fa-user-plus"})," \xa0 Tambah Warung"),r.a.createElement("br",null),r.a.createElement("br",null))),r.a.createElement(W.a,{sm:12},r.a.createElement(J.a,{striped:!0,bordered:!0,hover:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Nama Warung"),r.a.createElement("th",null,"Kode Warung"),r.a.createElement("th",null,"Alamat"),r.a.createElement("th",null,"No. Telp"),r.a.createElement("th",null,"Deskripsi"))),r.a.createElement("tbody",null,this.state.data.map(function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null," ",e.nama_warung," "),r.a.createElement("td",null," ",e.kode_warung," "),r.a.createElement("td",null," ",e.alamat," "),r.a.createElement("td",null," ",e.no_telp," "),r.a.createElement("td",null," ",e.deskripsi," "))}))))))))}}]),t}(n.Component),$=a(100),Q=a(228),V=a(221),X=a(101),Z=a.n(X),ee=a(102),te="tb_warung",ae=Object(ee.openDb)("db_warung",1,function(e){e.createObjectStore(te)}),ne={get:function(){var e=Object(g.a)(f.a.mark(function e(t){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae;case 2:return a=e.sent,e.abrupt("return",a.transaction(te).objectStore(te).get(t));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getAll:function(){var e=Object(g.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae;case 2:return t=e.sent,e.abrupt("return",t.transaction(te).objectStore(te).getAll());case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),set:function(){var e=Object(g.a)(f.a.mark(function e(t,a){var n,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae;case 2:return n=e.sent,(r=n.transaction(te,"readwrite",{autoIncrement:!0})).objectStore(te).put(a,t),e.abrupt("return",r.complete);case 6:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),delete:function(){var e=Object(g.a)(f.a.mark(function e(t){var a,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae;case 2:return a=e.sent,(n=a.transaction(te,"readwrite")).objectStore(te).delete(t),e.abrupt("return",n.complete);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),clear:function(){var e=Object(g.a)(f.a.mark(function e(){var t,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae;case 2:return t=e.sent,(a=t.transaction(te,"readwrite")).objectStore(te).clear(),e.abrupt("return",a.complete);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),keys:function(){var e=Object(g.a)(f.a.mark(function e(t){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae;case 2:return a=e.sent,e.abrupt("return",a.transaction(te).objectStore(te).getAllKeys(t));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()};var re=ne,le=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleChange=function(e){return function(t){a.setState(Object($.a)({},e,t.target.value))}},a.fileUploadChange=function(e){return function(e){a.setState({foto:e.target.files[0]})}},a.handleClick=function(e){e.preventDefault();var t=Z()(),n={id:t,nama_warung:a.state.namaWarung,kode_warung:a.state.kodeWarung,alamat:a.state.alamat,no_telp:a.state.noTelp,deskripsi:a.state.deskripsi};"serviceWorker"in navigator&&"SyncManager"in window?(console.log(t),console.log(n),console.log("service worker and background sync is ready"),navigator.serviceWorker.ready.then(function(e){re.set(t,n).then(function(){e.sync.register("sync-new-trx")})})):re.set(t,n)},a.state={namaWarung:"",kodeWarung:"",alamat:"",noTelp:"",deskripsi:"",foto:"",redirect:!1},a.handleClick=a.handleClick.bind(Object(b.a)(Object(b.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(I.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null),r.a.createElement("div",null,r.a.createElement(N.a,null,r.a.createElement(S.a,{justify:"center"},r.a.createElement(Q.a,{style:{width:"100%"}},r.a.createElement(Q.a.Body,null,r.a.createElement(W.a,{sm:12},r.a.createElement(V.a,{id:"form_warung"},r.a.createElement(V.a.Group,null,r.a.createElement(V.a.Label,null," Nama Warung "),r.a.createElement(V.a.Control,{id:"nama_warung",type:"text",placeholder:"Input Nama Warung",value:this.state.namaWarung,onChange:this.handleChange("namaWarung")})),r.a.createElement(V.a.Group,null,r.a.createElement(V.a.Label,null," Kode Warung "),r.a.createElement(V.a.Control,{id:"kode_warung",as:"select",value:this.state.kodeWarung,onChange:this.handleChange("kodeWarung")},r.a.createElement("option",null," -- Select -- "),r.a.createElement("option",{key:"1",value:"0001"}," 0001 "),r.a.createElement("option",{key:"2",value:"0002"}," 0002 "),r.a.createElement("option",{key:"3",value:"0003"}," 0003 "),r.a.createElement("option",{key:"4",value:"0004"}," 0004 "),r.a.createElement("option",{key:"5",value:"0005"}," 0005 "))),r.a.createElement(V.a.Group,null,r.a.createElement(V.a.Label,null," Alamat "),r.a.createElement(V.a.Control,{id:"alamat",placeholder:"Input Alamat Lengkap",as:"textarea",rows:"3",value:this.state.alamat,onChange:this.handleChange("alamat")})),r.a.createElement(V.a.Group,null,r.a.createElement(V.a.Label,null," No. Telp "),r.a.createElement(V.a.Control,{id:"no_telp",type:"text",placeholder:"Input No. Telp Warung",value:this.state.noTelp,onChange:this.handleChange("noTelp")})),r.a.createElement(V.a.Group,null,r.a.createElement(V.a.Label,null," Deskripsi "),r.a.createElement(V.a.Control,{id:"deskripsi",as:"textarea",placeholder:"Input Deskripsi Warung Anda",rows:"3",value:this.state.deskripsi,onChange:this.handleChange("deskripsi")})),r.a.createElement(V.a.Group,null,r.a.createElement(V.a.Label,null," Upload Foto "),r.a.createElement(V.a.Control,{type:"file",onChange:this.fileUploadChange()})),r.a.createElement(G.a,{variant:"primary",type:"submit",onClick:this.handleClick},"Submit")))))))))}}]),t}(n.Component),ce=/(<[^>]+>|&nbsp;)/gi,ie=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={data:[],redirect:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(f.a.mark(function e(){var t=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(D.a.defaults.baseURL=R,D.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",D.a.get("/get/berita")).then(function(e){t.setState({data:e.data.data})}).catch(function(e){console.log(e)});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.classes;return this.state.redirect?n.createElement(I.a,{to:"/"}):n.createElement(n.Fragment,null,n.createElement(C,null),n.createElement("div",null,n.createElement(N.a,null,n.createElement(S.a,{justify:"left"},n.createElement(W.a,{sm:12},n.createElement(L.a,null,n.createElement(L.a.Item,null," Home "))),n.createElement(W.a,{sm:12},n.createElement("div",{style:{marginRight:"5%",marginLeft:"5%"}},n.createElement("main",null,n.createElement("div",null,this.state.data.map(function(t){return n.createElement("div",{key:t.id,className:e.item},n.createElement("div",{className:e.imageWrapper},n.createElement(T.a,{to:"/berita/".concat(t.id)},n.createElement(H.Lazy,{ltIE9:!0,className:e.image},n.createElement("img",{src:t.link_image,alt:t.title,className:e.image})))),n.createElement("div",{className:e.bodyWrapper},n.createElement("h2",{className:e.title},n.createElement(T.a,{to:"/berita/".concat(t.id)},t.title)),n.createElement("div",{className:e.excerpt},t.content=t.content.replace(ce,"").substring(0,200)),n.createElement("div",{className:e.info},n.createElement("span",null,t.author))))})))))))))}}]),t}(n.PureComponent),oe=_()(function(e){return{wrapper:{margin:[[20,0]],padding:18},item:{display:"flex",padding:[[18,0]]},imageWrapper:{flexShrink:0},image:{objectFit:"cover",display:"inline-block",backgroundColor:"rgba(0, 0, 0, 0.067)",width:96,height:54,"@media (min-width: 640px)":{width:250,height:140},"@media (min-width: 860px)":{width:332,height:186}},bodyWrapper:{paddingLeft:18,flex:"1 1 auto"},title:{composes:"heading",lineHeight:1,"& a":{fontSize:18,color:e.baseColor},"@media (min-width: 640px)":{lineHeight:1.5,"& a":{fontSize:21}}},excerpt:{position:"absolute",opacity:0,pointerEvents:"none",left:"-999em",lineHeight:1.6,margin:[[18,0]],"@media (min-width: 640px)":{position:"static",opacity:1,pointerEvents:"auto",color:e.textMuted}},info:{fontSize:13,marginRight:6,color:e.textMuted}}})(ie),ue=a(223),se=a(226),me=a(222),de=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ue.a,{fixed:!0,collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(ue.a.Brand,{href:"#home"},"React PWA"),r.a.createElement(ue.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(ue.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(se.a,{className:"mr-auto"},r.a.createElement(se.a.Link,null,r.a.createElement(T.a,{to:"/",style:{color:"white"}},"Home")),r.a.createElement(se.a.Link,null,r.a.createElement(T.a,{to:"/catalog",style:{color:"white"}},"Catalog")),r.a.createElement(se.a.Link,null,r.a.createElement(T.a,{to:"/warung",style:{color:"white"}},"Warung")),r.a.createElement(se.a.Link,null,r.a.createElement(T.a,{to:"/nested",style:{color:"white"}},"Nested")),r.a.createElement(me.a,{title:"Dropdown",id:"collasible-nav-dropdown",style:{color:"white"}},r.a.createElement(me.a.Item,{href:"#action/3.1"},"Action"),r.a.createElement(me.a.Item,{href:"#action/3.2"},"Another action"),r.a.createElement(me.a.Item,{href:"#action/3.3"},"Something"),r.a.createElement(me.a.Divider,null),r.a.createElement(me.a.Item,{href:"#action/3.4"},"Separated link"))),r.a.createElement(se.a,null,r.a.createElement(se.a.Link,{href:"#deets"},"Sign In"),r.a.createElement(se.a.Link,{eventKey:2,href:"#memes"},"Sign Up")))))}}]),t}(n.Component),pe=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("footer",{className:"footer",style:{backgroundColor:"black",height:"100px"}},r.a.createElement("div",{className:"container",style:{textAlign:"center",color:"white",verticalAlign:"middle",lineHeight:"100px"}},r.a.createElement("span",{className:"text-muted"}," Nadzief Corp \xa9 2019 "))))}}]),t}(n.Component);function he(){return r.a.createElement("div",null,r.a.createElement("h1",null," 404 Not Found "),r.a.createElement("p",null," ",r.a.createElement("h3",null," The Page What Your Request Is Not Found ")," "))}var Ee=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(de,null),r.a.createElement(p.a,null,r.a.createElement(h.a,{path:"/",exact:!0,component:oe}),r.a.createElement(h.a,{path:"/warung",component:Y}),r.a.createElement(h.a,{path:"/create-warung",component:le}),r.a.createElement(h.a,{path:"/catalog",component:P}),r.a.createElement(h.a,{path:"/nested",component:q}),r.a.createElement(h.a,{component:he})),r.a.createElement("div",null,r.a.createElement(pe,null))))}}]),t}(n.Component),fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ge(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var be=a(107),ve=a.n(be);c.a.render(r.a.createElement(A.ThemeProvider,{theme:{brandPrimary:"#1abedb",textMuted:"#707070",baseColor:"#171717"}},r.a.createElement(d.a,null,r.a.createElement(ve.a,null,r.a.createElement(Ee,null)))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");fe?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ge(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):ge(e)})}}()},94:function(e,t,a){e.exports=a.p+"static/media/bg4.4554b63d.jpg"},95:function(e,t,a){e.exports=a.p+"static/media/bg9.7d2facc5.jpg"},96:function(e,t,a){e.exports=a.p+"static/media/bg10.463b2448.jpg"}},[[108,2,1]]]);
//# sourceMappingURL=main.a0c835b2.chunk.js.map