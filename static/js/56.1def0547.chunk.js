(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1241:function(e,t,a){"use strict";a.r(t);var n=a(952),r=a.n(n),c=a(953),i=a(240),o=a(241),l=a(244),s=a(242),u=a(245),d=a(243),m=a(2),p=a.n(m),f=a(942),h=a(943),g=a(949),y=a(945),b=a(947),E=a(951),v=a(957),k=a(946),w=a(977),j=a(377),O=a(935),D=a(148),N=a.n(D),x=a(246),I=a(997),z=a(1025),S=(a(1007),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={modal:!1,collapse:!0,fadeIn:!0,timeout:300,data:[]},a.toggle=a.toggle.bind(Object(u.a)(a)),a.toggling=a.toggling.bind(Object(u.a)(a)),a.handleDelete=a.handleDelete.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"toggling",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggleFade",value:function(){this.setState(function(e){return{fadeIn:!e}})}},{key:"handleDelete",value:function(e,t){var a=this;e.preventDefault(),N()({title:"Apakah Anda Yakin?",text:"Ingin Menghapus Data Ini?",icon:"warning",buttons:!0,dangerMode:!0}).then(function(e){e?N()("Deleted!","Data Berhasil Dihapus",{icon:"success"}).then(a.props.dispatch(Object(I.b)(t))):N()("Data Tidak Jadi Dihapus")})}},{key:"componentWillMount",value:function(){var e=Object(c.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.dispatch(Object(I.d)());case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillReceiveProps",value:function(){var e=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,t.data.data.data;case 3:e.t1=e.sent,e.t2={data:e.t1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return p.a.createElement("div",{className:"animated fadeIn"},p.a.createElement(f.a,null,p.a.createElement(h.a,null,p.a.createElement(g.a,{timeout:this.state.timeout,in:this.state.fadeIn},p.a.createElement(y.a,null,p.a.createElement(b.a,null,p.a.createElement("i",{className:"fa fa-align-justify"})," Data User",p.a.createElement("div",{className:"card-header-actions"},p.a.createElement(E.a,{color:"link",className:"card-header-action btn-setting"},p.a.createElement("i",{className:"icon-settings"})),p.a.createElement(E.a,{color:"link",className:"card-header-action btn-minimize","data-target":"#collapseExample",onClick:this.toggling},p.a.createElement("i",{className:"icon-arrow-up"})))),p.a.createElement(v.a,{isOpen:this.state.collapse,id:"collapseExample"},p.a.createElement(k.a,null,p.a.createElement(f.a,null,p.a.createElement(h.a,{xs:"12",sm:"12"},p.a.createElement(w.a,{row:!0},p.a.createElement(h.a,{xs:"12",md:"5"},p.a.createElement(j.Link,{to:"/data-user/tambah-data"},p.a.createElement(E.a,{color:"primary",size:"md"},p.a.createElement("i",{className:"icon-plus"}," Tambah "))))))),p.a.createElement(z.a,{data:this.state.data,filterable:!0,sortable:!0,columns:[{Header:"Nama",accessor:"nama",width:150},{Header:"Email",accessor:"email",width:250},{Header:"Username",accessor:"username",width:100},{accessor:"actions",sortable:!1,filterable:!1,width:80,Cell:function(t){return p.a.createElement("div",null,p.a.createElement(j.Link,{to:"/data-user/edit-data/"+t.original.id},p.a.createElement(E.a,{color:"primary",size:"sm"},p.a.createElement("i",{className:"icon-pencil"}," "))),"\xa0\xa0",p.a.createElement(E.a,{color:"danger",size:"sm",onClick:function(a){e.handleDelete(a,t.original.id)}},p.a.createElement("i",{className:"icon-trash"}," ")))}}],defaultPageSize:5,showPaginationBottom:!0,className:"-striped -highlight"}))))))))}}]),t}(m.Component));t.default=Object(O.k)(Object(x.b)(function(e){return{data:e.dataUser}})(S))},997:function(e,t,a){"use strict";a.d(t,"d",function(){return d}),a.d(t,"e",function(){return m}),a.d(t,"a",function(){return p}),a.d(t,"b",function(){return f}),a.d(t,"c",function(){return h});var n=a(247),r=a.n(n),c=a(45),i=a(248),o=a.n(i),l=a(108),s=a(148),u=a.n(s);function d(){return function(e){e({type:c.k,loading:!0});var t=o.a+"get/user/";return r.a.get(t).then(function(t){var a;e((a=t.data,{type:c.l,payload:{data:a}}))}).catch(function(t){e(function(e){return{type:c.j,payload:{error:e}}}(t))})}}function m(e){return function(t){t({type:c.h,loading:!0});var a=o.a+"get/user/".concat(e);return r.a.get(a).then(function(e){var a;t((a=e.data,{type:c.i,payload:{datas:a}}))}).catch(function(e){t(function(e){return{type:c.g,payload:{error:e}}}(e))})}}function p(e){return function(t){t({type:c.n,loading:!0});var a=o.a+"post/user";return r.a.post(a,e).then(function(e){t({type:c.o,payload:e.data}),u()({icon:"success",title:"Berhasil Tambah Data",button:!0}),l.a.push("/data-user")}).catch(function(e){t(function(e){return{type:c.m,payload:{error:e}}}(e))})}}function f(e){return function(t){t({type:c.b,loading:!0});var a=o.a+"delete/user/".concat(e);return r.a.delete(a).then(function(e){t({type:c.c,success:!0}),t(d())}).catch(function(e){t(function(e){return{type:c.a,payload:{error:e}}}(e))})}}function h(e){return function(t){t({type:c.e,loading:!0});var a=o.a+"edit/user";return r.a.post(a,e).then(function(e){t({type:c.f,payload:e.data}),u()({icon:"success",title:"Berhasil Edit Data",button:!0}),l.a.push("/data-user")}).catch(function(e){t(function(e){return{type:c.d,payload:{error:e}}}(e))})}}}}]);
//# sourceMappingURL=56.1def0547.chunk.js.map