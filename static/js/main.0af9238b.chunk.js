(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(46)},33:function(e,t,n){},38:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(15),c=n.n(r),s=n(9),i=n(10),l=n(12),u=n(11),h=n(13),p=n(6),m=n(26),f=n(48),d=n(47);function v(){return o.a.createElement("div",{className:"no-select splash"},"hello")}n(33);var w=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,Object.assign({},this.props,{classNames:"fade"}))}}]),t}(d.a),b=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={showPage:!1,showSplash:!0},n.showPage=function(){n.setState({showPage:!0})},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){return e.setState({showSplash:!1})},2500)}},{key:"renderPage",value:function(){return o.a.createElement("div",null)}},{key:"renderSplash",value:function(){return o.a.createElement(w,{appear:!0,onExited:this.showPage,timeout:700},o.a.createElement(v,null))}},{key:"render",value:function(){return o.a.createElement("div",{className:"page"},o.a.createElement(f.a,{component:null},this.state.showSplash&&this.renderSplash(),this.state.showPage&&this.renderPage()))}}]),t}(o.a.Component),j=(n(38),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"shouldComponentUpdate",value:function(e){return this.props.location.pathname!==e.location.pathname}},{key:"render",value:function(){var e=this.props.location;return o.a.createElement(f.a,{className:"container"},o.a.createElement(d.a,{classNames:"page",key:e.key,timeout:700},o.a.createElement(p.c,{location:e},o.a.createElement(p.a,{component:b,exact:!0,path:"/"}))))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(45);c.a.render(o.a.createElement(function(){var e=Object(p.e)(j);return o.a.createElement(m.a,null,o.a.createElement(e,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.0af9238b.chunk.js.map