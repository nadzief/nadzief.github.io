(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1244:function(e,t,a){"use strict";a.r(t);var n=a(952),r=a.n(n),i=a(953),c=a(240),o=a(241),l=a(244),s=a(242),u=a(245),d=a(243),p=a(2),h=a.n(p),m=a(942),f=a(943),g=a(949),b=a(945),y=a(947),E=a(951),v=a(957),k=a(946),w=a(977),j=a(377),O=a(935),D=a(148),N=a.n(D),x=a(246),B=a(999),I=a(1025),S=(a(1007),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={modal:!1,collapse:!0,fadeIn:!0,timeout:300,data:[]},a.toggle=a.toggle.bind(Object(u.a)(a)),a.toggling=a.toggling.bind(Object(u.a)(a)),a.handleDelete=a.handleDelete.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"toggling",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggleFade",value:function(){this.setState(function(e){return{fadeIn:!e}})}},{key:"handleDelete",value:function(e,t){var a=this;e.preventDefault(),N()({title:"Apakah Anda Yakin?",text:"Ingin Menghapus Data Ini?",icon:"warning",buttons:!0,dangerMode:!0}).then(function(e){e?N()("Deleted!","Data Berhasil Dihapus",{icon:"success"}).then(a.props.dispatch(Object(B.b)(t))):N()("Data Tidak Jadi Dihapus")})}},{key:"componentWillMount",value:function(){var e=Object(i.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.dispatch(Object(B.d)());case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillReceiveProps",value:function(){var e=Object(i.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,t.data.data.data;case 3:e.t1=e.sent,e.t2={data:e.t1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return h.a.createElement("div",{className:"animated fadeIn"},h.a.createElement(m.a,null,h.a.createElement(f.a,null,h.a.createElement(g.a,{timeout:this.state.timeout,in:this.state.fadeIn},h.a.createElement(b.a,null,h.a.createElement(y.a,null,h.a.createElement("i",{className:"fa fa-align-justify"})," Berita",h.a.createElement("div",{className:"card-header-actions"},h.a.createElement(E.a,{color:"link",className:"card-header-action btn-setting"},h.a.createElement("i",{className:"icon-settings"})),h.a.createElement(E.a,{color:"link",className:"card-header-action btn-minimize","data-target":"#collapseExample",onClick:this.toggling},h.a.createElement("i",{className:"icon-arrow-up"})))),h.a.createElement(v.a,{isOpen:this.state.collapse,id:"collapseExample"},h.a.createElement(k.a,null,h.a.createElement(m.a,null,h.a.createElement(f.a,{xs:"12",sm:"12"},h.a.createElement(w.a,{row:!0},h.a.createElement(f.a,{xs:"12",md:"5"},h.a.createElement(j.Link,{to:"/berita/tambah-berita"},h.a.createElement(E.a,{color:"primary",size:"md"},h.a.createElement("i",{className:"icon-plus"}," Tambah "))))))),h.a.createElement(I.a,{data:this.state.data,filterable:!0,sortable:!0,columns:[{Header:"Title",accessor:"title",width:150},{Header:"Content",accessor:"content",width:250},{Header:"Kategori",accessor:"nama_category",width:100},{Header:"Author",accessor:"author",width:100},{Header:"Status",accessor:"status",width:100},{accessor:"actions",sortable:!1,filterable:!1,width:80,Cell:function(t){return h.a.createElement("div",null,h.a.createElement(j.Link,{to:"/berita/edit-berita/"+t.original.id},h.a.createElement(E.a,{color:"primary",size:"sm"},h.a.createElement("i",{className:"icon-pencil"}," "))),"\xa0\xa0",h.a.createElement(E.a,{color:"danger",size:"sm",onClick:function(a){e.handleDelete(a,t.original.id)}},h.a.createElement("i",{className:"icon-trash"}," ")))}}],defaultPageSize:5,showPaginationBottom:!0,className:"-striped -highlight"}))))))))}}]),t}(p.Component));t.default=Object(O.k)(Object(x.b)(function(e){return{data:e.dataBerita}})(S))},999:function(e,t,a){"use strict";a.d(t,"d",function(){return d}),a.d(t,"e",function(){return p}),a.d(t,"a",function(){return h}),a.d(t,"b",function(){return m}),a.d(t,"c",function(){return f});var n=a(247),r=a.n(n),i=a(46),c=a(248),o=a.n(c),l=a(108),s=a(148),u=a.n(s);function d(){return function(e){e({type:i.k,loading:!0});var t=o.a+"get/berita/";return r.a.get(t).then(function(t){var a;e((a=t.data,{type:i.l,payload:{data:a}}))}).catch(function(t){e(function(e){return{type:i.j,payload:{error:e}}}(t))})}}function p(e){return function(t){t({type:i.h,loading:!0});var a=o.a+"get/berita/".concat(e);return r.a.get(a).then(function(e){var a;t((a=e.data,{type:i.i,payload:{datas:a}}))}).catch(function(e){t(function(e){return{type:i.g,payload:{error:e}}}(e))})}}function h(e){return function(t){t({type:i.n,loading:!0});var a=o.a+"post/berita";return r.a.post(a,e).then(function(e){t({type:i.o,payload:e.data}),u()({icon:"success",title:"Berhasil Tambah Data",button:!0}),l.a.push("/berita")}).catch(function(e){t(function(e){return{type:i.m,payload:{error:e}}}(e))})}}function m(e){return function(t){t({type:i.b,loading:!0});var a=o.a+"delete/berita/".concat(e);return r.a.delete(a).then(function(e){t({type:i.c,success:!0}),t(d())}).catch(function(e){t(function(e){return{type:i.a,payload:{error:e}}}(e))})}}function f(e){return function(t){t({type:i.e,loading:!0});var a=o.a+"edit/berita";return r.a.post(a,e).then(function(e){t({type:i.f,payload:e.data}),u()({icon:"success",title:"Berhasil Edit Data",button:!0}),l.a.push("/berita")}).catch(function(e){t(function(e){return{type:i.d,payload:{error:e}}}(e))})}}}}]);
//# sourceMappingURL=54.f69ac1f3.chunk.js.map