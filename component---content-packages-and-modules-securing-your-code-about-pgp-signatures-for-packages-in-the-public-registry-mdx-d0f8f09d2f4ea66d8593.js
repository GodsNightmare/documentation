(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),r=n("aOgs"),i=n("q1tI"),l=n.n(i),c=n("7ljp"),s=n("pD55"),p=n("8Aig"),m=n("ReZb"),u=n("GCVy"),b=n("+6vE");var d=function(e){var t=e.children;return l.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},l.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return l.a.createElement("strong",null,t)},y=n("gnlW"),f=n("mwnC"),g=n("/Rw0"),O=n("dVM4"),k=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function j(e){var t=e.items,n=e.depth;return l.a.createElement(k,{key:t,as:"ul",m:0,p:0},t.map((function(e){return l.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},l.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?l.a.createElement(j,{items:e.items,depth:n+1}):null)})))}j.defaultProps={depth:0};var E=j,w=n("MfeC");function v(e){var t=w.a.getPath(e.location.pathname),n=w.a.getVariantAndPage(e.root,t);if(!n)return null;var a=w.a.getVariantsForPage(e.root,n.page),r=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),r.push(l.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),l.a.createElement(o.i,{overlay:e.overlay},l.a.createElement(o.i.Button,null,i.variant.title),l.a.createElement(v.Menu,{direction:e.direction,width:e.menuWidth},r)))}v.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var P=v,x=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),_=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),G=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),C=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),N=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),I=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,k=i.title,j=i.description,v=i.status,S=i.source,z=i.additionalContributors,T=void 0===z?[]:z,K=w.a.getVariantRoot(a.pathname);return l.a.createElement(c.a,{components:{Index:m.a,Note:u.a,Prompt:d,PromptReply:h,Screenshot:y.a}},l.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},l.a.createElement(s.a,{title:k,description:j}),l.a.createElement(p.b,{location:a,isSearchEnabled:n.isSearchEnabled}),l.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},l.a.createElement(o.e,{display:["none",null,null,"block"]},l.a.createElement(f.a,{editOnGitHub:n.themeOptions.editOnGitHub,location:a})),l.a.createElement(_,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},l.a.createElement(G,null,l.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},l.a.createElement(o.e,null,l.a.createElement(o.e,null,l.a.createElement(o.m,{as:"h1"},k),j))),null!=K?l.a.createElement(C,null,l.a.createElement(P,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:K,location:a})):null),n.tableOfContents.items?l.a.createElement(N,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},l.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),l.a.createElement(E,{items:n.tableOfContents.items})):null,l.a.createElement(I,null,v||S?l.a.createElement(o.k,{mb:3,alignItems:"center"},v?l.a.createElement(O.a,{status:v}):null,l.a.createElement(o.e,{mx:"auto"}),S?l.a.createElement(g.a,{href:S}):null):null,n.tableOfContents.items?l.a.createElement(o.e,{display:["block",null,"none"],mb:3},l.a.createElement(o.h,null,(function(e){var t=e.open;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?l.a.createElement(o.r,{icon:r.b,mr:2}):l.a.createElement(o.r,{icon:r.c,mr:2}),"Table of contents"),l.a.createElement(o.e,{pt:1},l.a.createElement(E,{items:n.tableOfContents.items})))}))):null,t,l.a.createElement(b.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(T.map((function(e){return{login:e}})))}))))))}},zhDB:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n("zLVn"),o=(n("q1tI"),n("7ljp")),r=n("O6H6"),i={},l={_frontmatter:i},c=r.a;function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(c,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To increase confidence in the npm public registry, we add our ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pretty_Good_Privacy"},"PGP")," signature to package metadata and publicize our public PGP key on ",Object(o.b)("a",{parentName:"p",href:"https://keybase.io"},"Keybase"),'. Our Keybase account is "',Object(o.b)("a",{parentName:"p",href:"https://keybase.io/npmregistry"},"npmregistry"),'" and our public PGP key can be found at ',Object(o.b)("a",{parentName:"p",href:"https://keybase.io/npmregistry/pgp_keys.asc"},"https://keybase.io/npmregistry/pgp_keys.asc")),Object(o.b)("p",null,'You can use the package PGP signature and our public PGP key to verify that the same entity who published the key (npm) also signed the package you downloaded from the npm public registry. For more information, see "',Object(o.b)("a",{parentName:"p",href:"verifying-the-pgp-signature-for-a-package-from-the-npm-public-registry"},"Verifying the PGP signature of a package from the npm public registry"),'".'),Object(o.b)("h2",null,"Tools we use"),Object(o.b)("h3",null,"openpgpjs"),Object(o.b)("p",null,"To generate PGP signatures, we use ",Object(o.b)("a",{parentName:"p",href:"https://github.com/openpgpjs/openpgpjs"},"openpgpjs"),", a pure JavaScript implementation of OpenPGP. To learn more about openpgpjs, see ",Object(o.b)("a",{parentName:"p",href:"https://openpgpjs.org/"},"https://openpgpjs.org/"),"."),Object(o.b)("h3",null,"Keybase"),Object(o.b)("p",null,"We use Keybase to publicize our PGP key and give you confidence that the npm registry you install from is the same registry that signs packages."),Object(o.b)("p",null,"Keybase offers two advantages over the core OpenPGP experience that move us to recommend it to you:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The Keybase application and CLI provide an excellent user experience for PGP, which can be intimidating for newcomers."),Object(o.b)("li",{parentName:"ul"},"Keybase manages and displays social proofs that the entity that controls a specific PGP key also controls accounts on social media and other places. These proofs help you determine whether you can trust an account.")),Object(o.b)("p",null,"We’ve established proofs on Keybase that we control ",Object(o.b)("a",{parentName:"p",href:"https://twitter.com/npmjs"},"@npmjs")," on Twitter, the domain ",Object(o.b)("a",{parentName:"p",href:"https://npmjs.com"},"npmjs.com"),", and the domain ",Object(o.b)("a",{parentName:"p",href:"https://npmjs.org"},"npmjs.org"),". Verifying these proofs won’t tell you who owns those domains, but it does establish that the same entity controls them and the PGP key advertised on Keybase."),Object(o.b)("p",null,'If you install Keybase and create an account, you can follow npmregistry yourself and obtain a local copy of the registry’s public key. For more information, and to verify the PGP signature of a specific package version from the npm public registry, see "',Object(o.b)("a",{parentName:"p",href:"verifying-the-pgp-signature-for-a-package-from-the-npm-public-registry"},"Verifying the PGP signature for a package from the npm public registry"),'".'))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-packages-and-modules-securing-your-code-about-pgp-signatures-for-packages-in-the-public-registry-mdx-d0f8f09d2f4ea66d8593.js.map