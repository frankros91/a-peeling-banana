(this["webpackJsonpa-peeling-banana"]=this["webpackJsonpa-peeling-banana"]||[]).push([[0],{186:function(e,n,a){},187:function(e,n,a){"use strict";a.r(n);var l=a(0),t=a.n(l),i=a(58),r=a.n(i),s=(a(70),a(30)),o=a(3),c=a(22),m=a.n(c),u=a(59),d=a.n(u),g=a(60),f=a(29),h=a(61),p=a.n(h),_=a(62),E=a.n(_),v=a(63),b=a.n(v),w=a(64),O=a.n(w);var C=function(e){if(!(e=e.trim().toLowerCase()))return[];var n=E()(f.a,(function(n,a,l){return m()(a.name.toLowerCase(),e)&&n.push(a.id),n}),[]);return b()(g.a,(function(e){var a=O()(e.ingredient_ids,n);return e.matchingIngredientsIds=a,a.length>0}))};a(186);function y(e){var n=e.products,a=e.searchValue,l=function(e){return e.ingredient_ids.map((function(n){var l=function(e){return p()(f.a,(function(n){return n.id===e}))}(n);return m()(e.matchingIngredientsIds,n)?function(e,n){var a=e.name.trim(),l=a.toLowerCase().indexOf(n.trim().toLowerCase()),i=l+n.length,r=a.substring(0,l),s=a.substring(l,i),o=a.substring(i,a.length);return t.a.createElement("li",{style:{textAlign:"left"}},t.a.createElement("span",null,r,t.a.createElement("b",null,s),o))}(l,a):t.a.createElement("li",{style:{textAlign:"left"}},l.name)}))},i=n.map((function(e){var n=l(e);return t.a.createElement("li",null,t.a.createElement("div",{style:{textAlign:"left",fontWeight:"bold"}},t.a.createElement("span",null,e.name)),t.a.createElement("ul",null,n))}));return t.a.createElement("ul",null,i)}function B(){var e=Object(l.useState)("Organic Banana"),n=Object(s.a)(e,2),a=n[0],i=n[1],r=Object(l.useState)([]),c=Object(s.a)(r,2),m=c[0],u=c[1];Object(l.useEffect)((function(){var e=C(a);u(e)}),[a]);return t.a.createElement("div",null,t.a.createElement(o.Row,null,t.a.createElement("input",{className:"Search-input",placeholder:"Hungry for ...",value:a,type:"search",onChange:function(e){i(e.target.value)}})),t.a.createElement(o.Row,null,t.a.createElement(y,{products:m,searchValue:a})))}var A=function(){return t.a.createElement(o.Container,null,t.a.createElement(o.Row,null,t.a.createElement(o.Col,{sm:1}),t.a.createElement(o.Col,{sm:10},t.a.createElement("div",{className:"App"},t.a.createElement(o.Row,null,t.a.createElement("img",{style:{width:"100%"},src:d.a,className:"App-logo",alt:"logo"})),t.a.createElement(B,null))),t.a.createElement(o.Col,{sm:1})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(t.a.createElement(t.a.StrictMode,null,t.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e){e.exports=JSON.parse('{"a":[{"id":1,"name":"Organic Acai Berry","is_allergen":false},{"id":2,"name":"Organic Cherry","is_allergen":false},{"id":3,"name":"Organic Banana","is_allergen":false},{"id":4,"name":"Organic Blueberry","is_allergen":false},{"id":5,"name":"Organic Kale","is_allergen":false},{"id":6,"name":"Hazelnuts","is_allergen":false},{"id":7,"name":"Ginger","is_allergen":false},{"id":8,"name":"Apples","is_allergen":false},{"id":9,"name":"Organic Raspberry","is_allergen":false},{"id":10,"name":"Avocado","is_allergen":false},{"id":11,"name":"Organic Flax Seeds","is_allergen":false},{"id":12,"name":"Organic Spinach","is_allergen":false},{"id":13,"name":"Lemon","is_allergen":false},{"id":14,"name":"Celery","is_allergen":false},{"id":15,"name":"Cucumber","is_allergen":false},{"id":16,"name":"Beets","is_allergen":false},{"id":17,"name":"Macadamia Nut","is_allergen":true},{"id":18,"name":"Celery","is_allergen":false},{"id":19,"name":"Cinnamon","is_allergen":false},{"id":20,"name":"Oats","is_allergen":false},{"id":21,"name":"Maple","is_allergen":false},{"id":22,"name":"Organic Butternut Squash","is_allergen":false},{"id":23,"name":"Mushrooms","is_allergen":false},{"id":24,"name":"Seaweed","is_allergen":false},{"id":25,"name":"Miso","is_allergen":false},{"id":26,"name":"Cacao","is_allergen":false}]}')},59:function(e,n,a){e.exports=a.p+"static/media/daily-harvest-logo.68c0e9f0.jpg"},60:function(e){e.exports=JSON.parse('{"a":[{"id":1,"name":"Acai + Cherry","collection":"smoothie","ingredient_ids":[1,2,3,4,5]},{"id":2,"name":"Chocolate + Blueberry","collection":"smoothie","ingredient_ids":[3,4,26,5,12]},{"id":3,"name":"Beet + Avocado Poke","collection":"harvest bowl","ingredient_ids":[10,16,7,17]},{"id":4,"name":"Cinnamon + Banana","collection":"oat bowl","ingredient_ids":[19,3,22,26,21,20]},{"id":5,"name":"Mushroom + Miso","collection":"soup","ingredient_ids":[22,23,7,24,25,12]},{"id":6,"name":"Ginger + Greens","collection":"smoothie","ingredient_ids":[10,7,3,11,12]}]}')},65:function(e,n,a){e.exports=a(187)},70:function(e,n,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.deb359bf.chunk.js.map