(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(25)},,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),c=t.n(r),i=(t(13),t(1)),s=t(2),m=t(4),o=t(3),u=t(5),E=(t(15),function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",{className:"navigation"},"Creative",l.a.createElement("span",null,"Labs"))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"#portofolio"},"Portofolio")),l.a.createElement("li",null,l.a.createElement("a",{href:"#contact"},"Contact"))))}}]),a}(n.Component)),d=(t(17),function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement(E,null),l.a.createElement("div",{className:"top"},l.a.createElement("h1",null,"we design ",l.a.createElement("br",null),"your dream"),l.a.createElement("div",null,l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at nunc sed sapien faucibus molestie id quis tellus. Phasellus malesuada elit nunc, sed fermentum orci."),l.a.createElement("div",null,l.a.createElement("a",{href:"#contact",className:"contact"},"Contact Us")))))}}]),a}(n.Component)),p=(t(19),function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("footer",null,l.a.createElement("h3",null,"CreativeLabs"),l.a.createElement("p",null,l.a.createElement("strong",null,"Support Center")," ",l.a.createElement("br",null)," support@email.com"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#facebook"},l.a.createElement("i",{className:"fab fa-facebook-square"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#twitter"},l.a.createElement("i",{className:"fab fa-twitter-square"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#instagram"},l.a.createElement("i",{className:"fab fa-instagram"})))))}}]),a}(n.Component)),f=(t(21),t(23),function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(m.a)(this,Object(o.a)(a).call(this))).getName=function(a){var t=a.target.value;e.setState({name:t}),console.log(e.state.name)},e.getEmail=function(a){var t=a.target.value;t.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)?e.setState({email:t}):(e.setState({email:""}),console.log("Incorrect e-mail, must match expression")),console.log(e.state.email)},e.getDescription=function(a){var t=a.target.value;e.setState({message:t}),console.log(e.state.message)},e.submitForm=function(a){if(a.preventDefault(),""===e.state.name||""===e.state.email||""===e.state.message)return e.setState({formError:!0}),!1;e.setState({formError:!1}),console.log("UserData: {\n            Username: ".concat(e.state.name,",\n            Email: ").concat(e.state.email,",\n            Message: ").concat(e.state.message,"\n        }")),console.log("form sent")},e.state={name:"",email:"",message:"",formError:!1},e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("form",null,this.state.formError&&l.a.createElement("p",{className:"error"},"Fill all the input fields please."),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",name:"name",placeholder:"",onChange:this.getName})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",name:"email",placeholder:"",onChange:this.getEmail})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"name"},"Message"),l.a.createElement("textarea",{onChange:this.getDescription,maxLength:"450"})),l.a.createElement("div",null,l.a.createElement("p",null,"We will answer as soon as possible"),l.a.createElement("input",{type:"submit",name:"submit",value:"Send",onClick:this.submitForm})))}}]),a}(n.Component)),b=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("main",null,l.a.createElement("section",{id:"about",className:"about"},l.a.createElement("h2",null,"About Us"),l.a.createElement("div",null,l.a.createElement("p",null,"Mauris vestibulum luctus dui. Vestibulum a nisl vel nisi malesuada maximus ut et nulla. Duis non facilisis est, bibendum consectetur sem. Etiam ut nunc ac magna ornare lobortis at sit amet lectus. Etiam eget leo tempor, condimentum turpis sit amet, ultricies nunc. Aliquam erat volutpat. Morbi a egestas arcu. Nullam ac facilisis urna. Morbi posuere semper lacus vel sagittis. Nam facilisis accumsan efficitur."))),l.a.createElement("div",null,l.a.createElement("div",{className:"services"},l.a.createElement("div",{className:"service__one"},l.a.createElement("p",{className:"service__icon"},l.a.createElement("i",{className:"fas fa-calendar-alt"})),l.a.createElement("p",{className:"service__title"},"Planning"),l.a.createElement("p",null,"Pellentesque congue dolor arcu, in finibus nisi gravida non. Sed mi risus, congue in nunc sed, bibendum porta nibh. Praesent.")),l.a.createElement("div",{className:"service_two"},l.a.createElement("p",{className:"service__icon"},l.a.createElement("i",{className:"fas fa-pencil-alt"})),l.a.createElement("p",{className:"service__title"},"Design"),l.a.createElement("p",null,"Pellentesque congue dolor arcu, in finibus nisi gravida non. Sed mi risus, congue in nunc sed, bibendum porta nibh. Praesent.")),l.a.createElement("div",{className:"service__three"},l.a.createElement("p",{className:"service__icon"},l.a.createElement("i",{className:"fas fa-code"})),l.a.createElement("p",{className:"service__title"},"Development"),l.a.createElement("p",null,"Pellentesque congue dolor arcu, in finibus nisi gravida non. Sed mi risus, congue in nunc sed, bibendum porta nibh. Praesent.")))),l.a.createElement("div",{id:"portofolio",className:"gallery"},l.a.createElement("div",{className:"gallery__item__one"}),l.a.createElement("div",{className:"gallery__item__two"}),l.a.createElement("div",{className:"gallery__item__three"}),l.a.createElement("div",{className:"gallery__item__four"}),l.a.createElement("div",{className:"gallery__item__five"}),l.a.createElement("div",{className:"gallery__item__six"})),l.a.createElement("section",{id:"vision"},l.a.createElement("h2",null,"Our Vision"),l.a.createElement("div",null,l.a.createElement("p",null,"Donec facilisis nunc eros. Mauris nec odio sapien. Nunc ullamcorper interdum erat, et malesuada dolor congue at. Lorem ipsum dolor sit amet, consectetur adipiscing elit."),l.a.createElement("p",null,"Donec ut ultrices lectus. Sed varius sem sit amet sapien vestibulum, dictum aliquam tortor venenatis. Vestibulum tincidunt lacinia euismod. Etiam id ipsum a massa posuere."))),l.a.createElement("section",{id:"contact"},l.a.createElement("h2",{className:"form__h2"},"E-mail Us"),l.a.createElement(f,null)))}}]),a}(n.Component),v=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(d,null),l.a.createElement(b,null),l.a.createElement(p,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,2,1]]]);
//# sourceMappingURL=main.f430c93b.chunk.js.map