import{_ as t,a as n,b as e,c as a,i as c,s as r,d as s,S as o,p as i,D as u,e as f,t as l,f as m,g as h,h as d,j as $,k as v,l as p,m as g,u as w,n as y}from"./chunk.fec452ba.js";import{_ as k,a as j}from"./chunk.0ec0df63.js";import{G as S}from"./chunk.534c992d.js";function b(t){var n,e,a,c,r,s,o,i,u,y,k,j;return{c:function(){n=f("h1"),e=l("Success! Welcome to the decentralized web."),a=m(),c=f("img"),r=m(),s=f("span"),o=l("We have emailed you more information about your new Solid Identity"),i=m(),u=f("span"),y=l("We will redirect you to your POD in "),k=l(t.timeLeft),j=l(" seconds..."),this.h()},l:function(f){n=h(f,"H1",{class:!0},!1);var l=d(n);e=$(l,"Success! Welcome to the decentralized web."),l.forEach(v),a=$(f,"\n    "),c=h(f,"IMG",{src:!0,alt:!0,class:!0},!1),d(c).forEach(v),r=$(f,"\n    "),s=h(f,"SPAN",{class:!0},!1);var m=d(s);o=$(m,"We have emailed you more information about your new Solid Identity"),m.forEach(v),i=$(f,"\n    "),u=h(f,"SPAN",{class:!0},!1);var p=d(u);y=$(p,"We will redirect you to your POD in "),k=$(p,t.timeLeft),j=$(p," seconds..."),p.forEach(v),this.h()},h:function(){n.className="svelte-1juefmu",c.src="rocket.svg",c.alt="rocket",c.className="rocket svelte-1juefmu",s.className="svelte-1juefmu",u.className="svelte-1juefmu"},m:function(t,f){p(t,n,f),g(n,e),p(t,a,f),p(t,c,f),p(t,r,f),p(t,s,f),g(s,o),p(t,i,f),p(t,u,f),g(u,y),g(u,k),g(u,j)},p:function(t,n){t.timeLeft&&w(k,n.timeLeft)},d:function(t){t&&(v(n),v(a),v(c),v(r),v(s),v(i),v(u))}}}function L(t){var n,e=new S({props:{class:"gradient-background",$$slots:{default:[b]},$$scope:{ctx:t}}});return{c:function(){e.$$.fragment.c()},l:function(t){e.$$.fragment.l(t)},m:function(t,a){i(e,t,a),n=!0},p:function(t,n){var a={};(t.$$scope||t.timeLeft)&&(a.$$scope={changed:t,ctx:n}),e.$set(a)},i:function(t){n||(e.$$.fragment.i(t),n=!0)},o:function(t){e.$$.fragment.o(t),n=!1},d:function(t){e.$destroy(t)}}}function x(t,n,e){var a,c=15;u(k(j.mark(function t(){return j.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=setInterval(r,1e3);case 1:case"end":return t.stop()}},t)})));var r=function(){e("timeLeft",c-=1),0===c&&s()},s=function(){var t=k(j.mark(function t(){return j.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,clearInterval(a);case 2:window.location="/login";case 3:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return{timeLeft:c}}var N=function(i){function u(t){var o;return n(this,u),o=e(this,a(u).call(this)),c(s(o),t,x,L,r,[]),o}return t(u,o),u}();function W(t){var n,e,a=new N({});return{c:function(){n=m(),a.$$.fragment.c(),this.h()},l:function(t){n=$(t,"\n\n"),a.$$.fragment.l(t),this.h()},h:function(){document.title="Success"},m:function(t,c){p(t,n,c),i(a,t,c),e=!0},p:y,i:function(t){e||(a.$$.fragment.i(t),e=!0)},o:function(t){a.$$.fragment.o(t),e=!1},d:function(t){t&&v(n),a.$destroy(t)}}}export default(function(i){function u(t){var o;return n(this,u),o=e(this,a(u).call(this)),c(s(o),t,null,W,r,[]),o}return t(u,o),u}());
//# sourceMappingURL=registration-success.ecbed960.js.map