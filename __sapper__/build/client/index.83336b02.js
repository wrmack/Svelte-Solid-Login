import{S as s,i as e,s as a,j as t,e as n,t as o,c,b as r,d as $,f as l,g as i,h,k as m,l as d,a as u,m as f,y as p,o as g,n as v}from"./chunk.4ceeafff.js";import{l as w}from"./chunk.fe94475d.js";function N(s){var e,a,u,f;const p=s.$$slots.default,g=t(p,s,null);return{c(){e=n("div"),g||(a=n("em"),u=o("no content was provided")),g&&g.c(),this.h()},l(s){e=c(s,"DIV",{class:!0},!1);var t=r(e);if(!g){a=c(t,"EM",{},!1);var n=r(a);u=$(n,"no content was provided"),n.forEach(l)}g&&g.l(t),t.forEach(l),this.h()},h(){e.className="card svelte-1m4doad"},m(s,t){i(s,e,t),g?g.m(e,null):(h(e,a),h(a,u)),f=!0},p(s,e){g&&g.p&&s.$$scope&&g.p(m(p,e,s,null),d(p,e,null))},i(s){f||(g&&g.i&&g.i(s),f=!0)},o(s){g&&g.o&&g.o(s),f=!1},d(s){s&&l(e),g&&g.d(s)}}}function x(s,e,a){let{$$slots:t={},$$scope:n}=e;return s.$set=(s=>{"$$scope"in s&&a("$$scope",n=s.$$scope)}),{$$slots:t,$$scope:n}}class k extends s{constructor(s){super(),e(this,s,x,N,a,[])}}function y(s){var e,a,t,m;return{c(){e=n("h3"),a=o("Welcome "),t=n("span"),m=o(s.userName),this.h()},l(n){e=c(n,"H3",{class:!0},!1);var o=r(e);a=$(o,"Welcome "),t=c(o,"SPAN",{class:!0},!1);var i=r(t);m=$(i,s.userName),i.forEach(l),o.forEach(l),this.h()},h(){t.className="svelte-163kza3",e.className="svelte-163kza3"},m(s,n){i(s,e,n),h(e,a),h(e,t),h(t,m)},p(s,e){s.userName&&g(m,e.userName)},d(s){s&&l(e)}}}function E(s){var e,a;return{c(){e=n("h3"),a=o("This is a card component"),this.h()},l(s){e=c(s,"H3",{class:!0},!1);var t=r(e);a=$(t,"This is a card component"),t.forEach(l),this.h()},h(){e.className="svelte-163kza3"},m(s,t){i(s,e,t),h(e,a)},d(s){s&&l(e)}}}function S(s){var e,a;return{c(){e=n("h3"),a=o("This is a card component"),this.h()},l(s){e=c(s,"H3",{class:!0},!1);var t=r(e);a=$(t,"This is a card component"),t.forEach(l),this.h()},h(){e.className="svelte-163kza3"},m(s,t){i(s,e,t),h(e,a)},d(s){s&&l(e)}}}function T(s){var e,a,t,n,o=new k({props:{$$slots:{default:[y]},$$scope:{ctx:s}}}),c=new k({props:{$$slots:{default:[E]},$$scope:{ctx:s}}}),r=new k({props:{$$slots:{default:[S]},$$scope:{ctx:s}}});return{c(){e=u(),o.$$.fragment.c(),a=u(),c.$$.fragment.c(),t=u(),r.$$.fragment.c(),this.h()},l(s){e=$(s,"\n\n\n"),o.$$.fragment.l(s),a=$(s,"\n\n"),c.$$.fragment.l(s),t=$(s,"\n\n"),r.$$.fragment.l(s),this.h()},h(){document.title="Solid on svelte"},m(s,$){i(s,e,$),f(o,s,$),i(s,a,$),f(c,s,$),i(s,t,$),f(r,s,$),n=!0},p(s,e){var a={};(s.$$scope||s.userName)&&(a.$$scope={changed:s,ctx:e}),o.$set(a);var t={};s.$$scope&&(t.$$scope={changed:s,ctx:e}),c.$set(t);var n={};s.$$scope&&(n.$$scope={changed:s,ctx:e}),r.$set(n)},i(s){n||(o.$$.fragment.i(s),c.$$.fragment.i(s),r.$$.fragment.i(s),n=!0)},o(s){o.$$.fragment.o(s),c.$$.fragment.o(s),r.$$.fragment.o(s),n=!1},d(s){s&&l(e),o.$destroy(s),s&&l(a),c.$destroy(s),s&&l(t),r.$destroy(s)}}}function z(s,e,a){let t,n="";p(async()=>{window.solid.auth.trackSession(s=>{s?(console.log(`The user is ${s.webId}`),w.update(s=>!0),t=s.webId,o(t)):(console.log("The user is not logged in"),w.update(s=>!1),window.location="/login")})});const o=async s=>{const e=solid.data[s],t=await e.name;a("userName",n=t.value),console.log("user name",n)};return{userName:n}}class b extends s{constructor(s){super(),e(this,s,z,T,a,[])}}function j(s){var e,a,t=new b({});return{c(){e=u(),t.$$.fragment.c(),this.h()},l(s){e=$(s,"\n\n\n"),t.$$.fragment.l(s),this.h()},h(){document.title="Svelte Solid login"},m(s,n){i(s,e,n),f(t,s,n),a=!0},p:v,i(s){a||(t.$$.fragment.i(s),a=!0)},o(s){t.$$.fragment.o(s),a=!1},d(s){s&&l(e),t.$destroy(s)}}}export default class extends s{constructor(s){super(),e(this,s,null,j,a,[])}}
//# sourceMappingURL=index.83336b02.js.map