(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),i=n("aOgs"),o=n("q1tI"),r=n.n(o),c=n("7ljp"),b=n("pD55"),p=n("8Aig"),s=n("ReZb"),m=n("GCVy"),d=n("+6vE");var u=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},O=n("gnlW"),j=n("mwnC"),g=n("/Rw0"),f=n("dVM4"),N=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function y(e){var t=e.items,n=e.depth;return r.a.createElement(N,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(y,{items:e.items,depth:n+1}):null)})))}y.defaultProps={depth:0};var w=y,C=n("MfeC");function k(e){var t=C.a.getPath(e.location.pathname),n=C.a.getVariantAndPage(e.root,t);if(!n)return null;var a=C.a.getVariantsForPage(e.root,n.page),i=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),i.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,o.variant.title),r.a.createElement(k.Menu,{direction:e.direction,width:e.menuWidth},i)))}k.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var v=k,E=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,N=o.title,y=o.description,k=o.status,D=o.source,W=o.additionalContributors,B=void 0===W?[]:W,G=C.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:s.a,Note:m.a,Prompt:u,PromptReply:h,Screenshot:O.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(b.a,{title:N,description:y}),r.a.createElement(p.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(E,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(j.a,{editOnGitHub:n.themeOptions.editOnGitHub,location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},N),y))),null!=G?r.a.createElement(S,null,r.a.createElement(v,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:G,location:a})):null),n.tableOfContents.items?r.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(w,{items:n.tableOfContents.items})):null,r.a.createElement(T,null,k||D?r.a.createElement(l.k,{mb:3,alignItems:"center"},k?r.a.createElement(f.a,{status:k}):null,r.a.createElement(l.e,{mx:"auto"}),D?r.a.createElement(g.a,{href:D}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:i.b,mr:2}):r.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(w,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(d.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(B.map((function(e){return{login:e}})))}))))))}},u6lv:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),i=n("O6H6"),o={},r={_frontmatter:o},c=i.a;function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm outdated [[<@scope>/]<pkg> ...]\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"This command will check the registry to see if any (or, specific) installed\npackages are currently outdated."),Object(l.b)("p",null,"By default, only the direct dependencies of the root project and direct\ndependencies of your configured ",Object(l.b)("em",{parentName:"p"},"workspaces")," are shown.\nUse ",Object(l.b)("inlineCode",{parentName:"p"},"--all")," to find all outdated meta-dependencies as well."),Object(l.b)("p",null,"In the output:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"wanted")," is the maximum version of the package that satisfies the semver\nrange specified in ",Object(l.b)("inlineCode",{parentName:"li"},"package.json"),". If there's no available semver range\n(i.e.  you're running ",Object(l.b)("inlineCode",{parentName:"li"},"npm outdated --global"),", or the package isn't\nincluded in ",Object(l.b)("inlineCode",{parentName:"li"},"package.json"),"), then ",Object(l.b)("inlineCode",{parentName:"li"},"wanted")," shows the currently-installed\nversion."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"latest")," is the version of the package tagged as latest in the registry.\nRunning ",Object(l.b)("inlineCode",{parentName:"li"},"npm publish")," with no special configuration will publish the\npackage with a dist-tag of ",Object(l.b)("inlineCode",{parentName:"li"},"latest"),". This may or may not be the maximum\nversion of the package, or the most-recently published version of the\npackage, depending on how the package's developer manages the latest\n",Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-dist-tag"},"dist-tag"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"location")," is where in the physical tree the package is located."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"depended by")," shows which package depends on the displayed dependency"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"package type")," (when using ",Object(l.b)("inlineCode",{parentName:"li"},"--long")," / ",Object(l.b)("inlineCode",{parentName:"li"},"-l"),") tells you whether this\npackage is a ",Object(l.b)("inlineCode",{parentName:"li"},"dependency")," or a dev/peer/optional dependency. Packages not\nincluded in ",Object(l.b)("inlineCode",{parentName:"li"},"package.json")," are always marked ",Object(l.b)("inlineCode",{parentName:"li"},"dependencies"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"homepage")," (when using ",Object(l.b)("inlineCode",{parentName:"li"},"--long")," / ",Object(l.b)("inlineCode",{parentName:"li"},"-l"),") is the ",Object(l.b)("inlineCode",{parentName:"li"},"homepage")," value contained\nin the package's packument"),Object(l.b)("li",{parentName:"ul"},"Red means there's a newer version matching your semver requirements, so\nyou should update now."),Object(l.b)("li",{parentName:"ul"},"Yellow indicates that there's a newer version ",Object(l.b)("em",{parentName:"li"},"above")," your semver\nrequirements (usually new major, or new 0.x minor) so proceed with\ncaution.")),Object(l.b)("h3",null,"An example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ npm outdated\nPackage      Current   Wanted   Latest  Location                  Depended by\nglob          5.0.15   5.0.15    6.0.1  node_modules/glob         dependent-package-name\nnothingness    0.0.3      git      git  node_modules/nothingness  dependent-package-name\nnpm            3.5.1    3.5.2    3.5.1  node_modules/npm          dependent-package-name\nlocal-dev      0.0.3   linked   linked  local-dev                 dependent-package-name\nonce           1.3.2    1.3.3    1.3.3  node_modules/once         dependent-package-name\n")),Object(l.b)("p",null,"With these ",Object(l.b)("inlineCode",{parentName:"p"},"dependencies"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "glob": "^5.0.15",\n  "nothingness": "github:othiym23/nothingness#master",\n  "npm": "^3.5.1",\n  "once": "^1.3.1"\n}\n')),Object(l.b)("p",null,"A few things to note:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"glob")," requires ",Object(l.b)("inlineCode",{parentName:"li"},"^5"),", which prevents npm from installing ",Object(l.b)("inlineCode",{parentName:"li"},"glob@6"),", which\nis outside the semver range."),Object(l.b)("li",{parentName:"ul"},"Git dependencies will always be reinstalled, because of how they're\nspecified.  The installed committish might satisfy the dependency\nspecifier (if it's something immutable, like a commit SHA), or it might\nnot, so ",Object(l.b)("inlineCode",{parentName:"li"},"npm outdated")," and ",Object(l.b)("inlineCode",{parentName:"li"},"npm update")," have to fetch Git repos to check.\nThis is why currently doing a reinstall of a Git dependency always forces\na new clone and install."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"npm@3.5.2"),' is marked as "wanted", but "latest" is ',Object(l.b)("inlineCode",{parentName:"li"},"npm@3.5.1")," because\nnpm uses dist-tags to manage its ",Object(l.b)("inlineCode",{parentName:"li"},"latest")," and ",Object(l.b)("inlineCode",{parentName:"li"},"next")," release channels.\n",Object(l.b)("inlineCode",{parentName:"li"},"npm update")," will install the ",Object(l.b)("em",{parentName:"li"},"newest")," version, but ",Object(l.b)("inlineCode",{parentName:"li"},"npm install npm"),"\n(with no semver range) will install whatever's tagged as ",Object(l.b)("inlineCode",{parentName:"li"},"latest"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"once")," is just plain out of date. Reinstalling ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," from\nscratch or running ",Object(l.b)("inlineCode",{parentName:"li"},"npm update")," will bring it up to spec.")),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"all")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"When running ",Object(l.b)("inlineCode",{parentName:"p"},"npm outdated")," and ",Object(l.b)("inlineCode",{parentName:"p"},"npm ls"),", setting ",Object(l.b)("inlineCode",{parentName:"p"},"--all")," will show all\noutdated or installed packages, rather than only those directly depended\nupon by the current project."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"json")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Whether or not to output JSON data, rather than the normal output."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"In ",Object(l.b)("inlineCode",{parentName:"li"},"npm pkg set")," it enables parsing set values with JSON.parse() before\nsaving them to your ",Object(l.b)("inlineCode",{parentName:"li"},"package.json"),".")),Object(l.b)("p",null,"Not supported by all npm commands."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"long")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Show extended information in ",Object(l.b)("inlineCode",{parentName:"p"},"ls"),", ",Object(l.b)("inlineCode",{parentName:"p"},"search"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"help-search"),"."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"parseable")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Output parseable results from commands that write to standard output. For\n",Object(l.b)("inlineCode",{parentName:"p"},"npm search"),", this will be tab-separated table format."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"global")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,'Operates in "global" mode, so that packages are installed into the ',Object(l.b)("inlineCode",{parentName:"p"},"prefix"),"\nfolder instead of the current working directory. See\n",Object(l.b)("a",{parentName:"p",href:"/cli/v7/configuring-npm/folders"},"folders")," for more on the differences in behavior."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"packages are installed into the ",Object(l.b)("inlineCode",{parentName:"li"},"{prefix}/lib/node_modules")," folder, instead\nof the current working directory."),Object(l.b)("li",{parentName:"ul"},"bin files are linked to ",Object(l.b)("inlineCode",{parentName:"li"},"{prefix}/bin")),Object(l.b)("li",{parentName:"ul"},"man pages are linked to ",Object(l.b)("inlineCode",{parentName:"li"},"{prefix}/share/man"))),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspace")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default:"),Object(l.b)("li",{parentName:"ul"},"Type: String (can be set multiple times)")),Object(l.b)("p",null,"Enable running a command in the context of the configured workspaces of the\ncurrent project while filtering by running only the workspaces defined by\nthis configuration option."),Object(l.b)("p",null,"Valid values for the ",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," config are either:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Workspace names"),Object(l.b)("li",{parentName:"ul"},"Path to a workspace directory"),Object(l.b)("li",{parentName:"ul"},"Path to a parent workspace directory (will result to selecting all of the\nnested workspaces)")),Object(l.b)("p",null,"When set for the ",Object(l.b)("inlineCode",{parentName:"p"},"npm init")," command, this may be set to the folder of a\nworkspace which does not yet exist, to create the folder and set it up as a\nbrand new workspace within the project."),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-update"},"npm update")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-dist-tag"},"npm dist-tag")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/using-npm/registry"},"npm registry")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/configuring-npm/folders"},"npm folders")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/using-npm/workspaces"},"npm workspaces"))))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-outdated-md-8842d67d94cf82fd806b.js.map