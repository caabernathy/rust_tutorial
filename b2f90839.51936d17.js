(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{74:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(2),i=a(6),l=(a(0),a(86)),o={id:"doc1",title:"Build a Smart Bookmarking Tool with Rust and Rocket",sidebar_label:"Tutorrial",slug:"/"},r={unversionedId:"doc1",id:"doc1",isDocsHomePage:!1,title:"Build a Smart Bookmarking Tool with Rust and Rocket",description:"June 3, 2020",source:"@site/docs/doc1.md",slug:"/",permalink:"/rust-tutorial/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/doc1.md",version:"current",sidebar_label:"Tutorrial"},c=[{value:"Building the App",id:"building-the-app",children:[]},{value:"How will it work?",id:"how-will-it-work",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install Rust",id:"install-rust",children:[{value:"Switch to Nightly Rust",id:"switch-to-nightly-rust",children:[]}]}],s={rightToc:c};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"June 3, 2020"),Object(l.b)("p",null,"By ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.facebook.com/jjprevite"}),"Joe Previte")),Object(l.b)("img",{src:"/rust-tutorial/img/hero.png",width:"100%"}),Object(l.b)("br",null),Object(l.b)("br",null),Object(l.b)("p",null,"One of my favorite tools that exists internally is our smart bookmarking tool commonly referred to as \u201cbunnylol.\u201d Originally named bunny1 and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ccheever/bunny1"}),"open sourced"),", it\u2019s what we use to navigate across all tools, wikis, knowledge bases, and everything else one might use working at Facebook."),Object(l.b)("p",null,"An example of a bookmark I use often is the cal command. I can type in the browser cal and it will take me to our internal calendar tool. Another example is the ",Object(l.b)("inlineCode",{parentName:"p"},"wiki")," command, which I can use to search our internal wiki pages. I type in ",Object(l.b)("inlineCode",{parentName:"p"},"wiki")," followed by the name of something I\u2019m looking for and it will provide search results for wiki pages that match what I\u2019m looking for."),Object(l.b)("p",null,"As you can imagine, it\u2019s immensely helpful! It also provides a way for us to not only bookmark things like the calendar, but also do things like search wikis using the provided queries. Talk about smart bookmarks, eh?"),Object(l.b)("p",null,"Today, I\u2019m going to show you how to build a simple clone of bunny1 using ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.rust-lang.org/"}),"Rust")," and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://rocket.rs/"}),"Rocket")," (a web-framework for Rust). The original implementation is written in Python as a web server. We\u2019re going with Rust because it\u2019s:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Fast"),Object(l.b)("li",{parentName:"ul"},"Type-safe"),Object(l.b)("li",{parentName:"ul"},"Fun to write"),Object(l.b)("li",{parentName:"ul"},"Well-documented as a language\nLet\u2019s get to it!")),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},Object(l.b)("em",{parentName:"p"},"If you prefer learning by watching, you can follow along in the video series on the ",Object(l.b)("a",Object(n.a)({parentName:"em"},{href:"https://www.youtube.com/playlist?list=PLzIwronG0sE56c6hDYOKW3-rPxmIyttoe"}),"Facebook Open Source YouTube channel"),".")))),Object(l.b)("h2",{id:"building-the-app"},"Building the App"),Object(l.b)("p",null,"Before building the app, I\u2019ll cover how it will work and the prerequisites for following along. After that, I\u2019ll jump in and go through each step before setting it up for production."),Object(l.b)("h2",{id:"how-will-it-work"},"How will it work?"),Object(l.b)("p",null,"Starting from a high-level, the app will work something like this."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Open browser"),Object(l.b)("li",{parentName:"ol"},"In address bar, type a keyword"),Object(l.b)("li",{parentName:"ol"},"App will redirect if keyword matches one of the commands")),Object(l.b)("p",null,"Say for instance I was using Firefox and I had a command gh ",Object(l.b)("page",null)," which redirected to a page on GitHub like a repository. It would look like this:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Open Firefox"),Object(l.b)("li",{parentName:"ol"},"Type in gh facebook/react"),Object(l.b)("li",{parentName:"ol"},"Redirects to ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebook/react"}),"https://github.com/facebook/react"))),Object(l.b)("p",null,"Here is that flow in action:"),Object(l.b)("img",{src:"/rust-tutorial/img/running_app.gif",width:"100%"}),Object(l.b)("p",null,"I want to dig more into the technical details of this approach. I can achieve this by building a basic web server app that listens for requests and redirects them based on if it matches specific criteria. I am not building a client-side app because the only functionality I need is a redirect so it makes more sense to be built as a web server."),Object(l.b)("p",null,"Using the same example, the application logic will flow like this:"),Object(l.b)("img",{src:"/rust-tutorial/img/application_logic.png",width:"100%"}),Object(l.b)("p",null,"I will use a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.makeuseof.com/tag/create-custom-search-engines-google-chrome/"}),"custom search engine")," which will allow me to connect the address bar to my own search engine. With the basic flow down, I am ready to move on to the next step!"),Object(l.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(l.b)("p",null,"In order to start writing the Rust application, I will need to do a few things:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Install Rust"),Object(l.b)("li",{parentName:"ul"},"Switch to Nightly Rust"),Object(l.b)("li",{parentName:"ul"},"Set up VS Code for Rust\nTest Rocket with Hello World")),Object(l.b)("p",null,"I will walk through each of these."),Object(l.b)("h2",{id:"install-rust"},"Install Rust"),Object(l.b)("p",null,"To install Rust, I will use a tool called rustup. You can install it by running the command:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"shell\ncurl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),Object(l.b)("p",null,"This will install rustup which is used for installing Rust and staying up to date with different versions of the language. After you run it and follow the instructions, you should have Rust installed."),Object(l.b)("p",null,"You can double-check by running:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"shell\ncargo --version\n")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://doc.rust-lang.org/cargo/"}),"Cargo")," is the official Rust package manager and we will use it to compile, build and run our Rust code."),Object(l.b)("h3",{id:"switch-to-nightly-rust"},"Switch to Nightly Rust"),Object(l.b)("p",null,"Rust has three release channels:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Stable"),Object(l.b)("li",{parentName:"ul"},"Beta"),Object(l.b)("li",{parentName:"ul"},"Nightly")),Object(l.b)("p",null,"The stable build is what most people use. I am using the nightly version because Rocket, the framework I\u2019m using, uses \u201c",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://rocket.rs/v0.4/guide/getting-started/"}),"Rust's syntax extensions and other advanced, unstable features."),"\u201d"),Object(l.b)("p",null,"You can change this by running the command:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"shell\nrustup default nightly\n")),Object(l.b)("p",null,"You can always change it back to the stable version by running:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"shell\nrustup default stable\n")))}b.isMDXComponent=!0}}]);