(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{O6H6:function(e,t,a){"use strict";var n=a("vOnD"),i=a("u9kb"),o=a("aOgs"),l=a("q1tI"),r=a.n(l),c=a("7ljp"),p=a("pD55"),s=a("8Aig"),d=a("ReZb"),u=a("GCVy"),b=a("+6vE");var m=function(e){var t=e.children;return r.a.createElement(i.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(i.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},g=a("gnlW"),f=a("mwnC"),O=a("/Rw0"),y=a("dVM4"),j=Object(n.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function k(e){var t=e.items,a=e.depth;return r.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(i.e,{as:"li",key:e.url,pl:a>0?3:0},r.a.createElement(i.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(k,{items:e.items,depth:a+1}):null)})))}k.defaultProps={depth:0};var N=k,v=a("MfeC");function w(e){var t=v.a.getPath(e.location.pathname),a=v.a.getVariantAndPage(e.root,t);if(!a)return null;var n=v.a.getVariantsForPage(e.root,a.page),o=[],l=n[0];return 0===n.length?null:(n.forEach((function(e){e.page.url===t&&(l=e),o.push(r.a.createElement(i.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(i.i,{overlay:e.overlay},r.a.createElement(i.i.Button,null,l.variant.title),r.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},o)))}w.Menu=Object(n.f)(i.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var C=w,x=Object(n.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),E=Object(n.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),I=Object(n.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(n.f)(i.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),_=Object(n.f)(i.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(n.f)(i.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=e.location,l=a.frontmatter,j=l.title,k=l.description,w=l.status,R=l.source,A=l.additionalContributors,D=void 0===A?[]:A,M=v.a.getVariantRoot(n.pathname);return r.a.createElement(c.a,{components:{Index:d.a,Note:u.a,Prompt:m,PromptReply:h,Screenshot:g.a}},r.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:j,description:k}),r.a.createElement(s.b,{location:n,isSearchEnabled:a.isSearchEnabled}),r.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(i.e,{display:["none",null,null,"block"]},r.a.createElement(f.a,{editOnGitHub:a.themeOptions.editOnGitHub,location:n})),r.a.createElement(E,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(I,null,r.a.createElement(i.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(i.e,null,r.a.createElement(i.e,null,r.a.createElement(i.m,{as:"h1"},j),k))),null!=M?r.a.createElement(S,null,r.a.createElement(C,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:M,location:n})):null),a.tableOfContents.items?r.a.createElement(_,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(i.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(N,{items:a.tableOfContents.items})):null,r.a.createElement(T,null,w||R?r.a.createElement(i.k,{mb:3,alignItems:"center"},w?r.a.createElement(y.a,{status:w}):null,r.a.createElement(i.e,{mx:"auto"}),R?r.a.createElement(O.a,{href:R}):null):null,a.tableOfContents.items?r.a.createElement(i.e,{display:["block",null,"none"],mb:3},r.a.createElement(i.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(i.r,{icon:o.b,mr:2}):r.a.createElement(i.r,{icon:o.c,mr:2}),"Table of contents"),r.a.createElement(i.e,{pt:1},r.a.createElement(N,{items:a.tableOfContents.items})))}))):null,t,r.a.createElement(b.a,{editOnGitHub:a.themeOptions.editOnGitHub,editUrl:a.editUrl,contributors:a.contributors.concat(D.map((function(e){return{login:e}})))}))))))}},zGDw:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("O6H6"),l={},r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},c=r("Note"),p=r("Screenshot"),s={_frontmatter:l},d=o.a;function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)(d,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"About security audits"),Object(i.b)("p",null,"A security audit is an assessment of package dependencies for security vulnerabilities. Security audits help you protect your package's users by enabling you to find and fix known vulnerabilities in dependencies that could cause data loss, service outages, unauthorized access to sensitive information, or other issues."),Object(i.b)("h2",null,"Running a security audit with ",Object(i.b)("inlineCode",{parentName:"h2"},"npm audit")),Object(i.b)(c,{mdxType:"Note"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," The ",Object(i.b)("inlineCode",{parentName:"p"},"npm audit")," command is available in npm@6. To upgrade, run ",Object(i.b)("inlineCode",{parentName:"p"},"npm install npm@latest -g"),".")),Object(i.b)("p",null,"The ",Object(i.b)("a",{href:"https://docs.npmjs.com/cli/audit"},Object(i.b)("inlineCode",{parentName:"p"},"npm audit")," command")," submits a description of the dependencies configured in your package to your default registry and asks for a report of known vulnerabilities. ",Object(i.b)("inlineCode",{parentName:"p"},"npm audit")," checks direct dependencies, devDependencies, bundledDependencies, and optionalDependencies, but does not check peerDependencies."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npm audit")," automatically runs when you install a package with ",Object(i.b)("inlineCode",{parentName:"p"},"npm install"),". You can also run ",Object(i.b)("inlineCode",{parentName:"p"},"npm audit")," manually on your ",Object(i.b)("a",{parentName:"p",href:"downloading-and-installing-packages-locally"},"locally installed packages")," to conduct a security audit of the package and produce a report of dependency vulnerabilities and, if available, suggested patches."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"On the command line, navigate to your package directory by typing ",Object(i.b)("inlineCode",{parentName:"li"},"cd path/to/your-package-name")," and pressing ",Object(i.b)("strong",{parentName:"li"},"Enter"),"."),Object(i.b)("li",{parentName:"ol"},"Ensure your package contains ",Object(i.b)("inlineCode",{parentName:"li"},"package.json")," and ",Object(i.b)("inlineCode",{parentName:"li"},"package-lock.json")," files."),Object(i.b)("li",{parentName:"ol"},"Type ",Object(i.b)("inlineCode",{parentName:"li"},"npm audit")," and press ",Object(i.b)("strong",{parentName:"li"},"Enter"),"."),Object(i.b)("li",{parentName:"ol"},"Review the audit report and run recommended commands or investigate further if needed.")),Object(i.b)("h3",null,"Resolving ",Object(i.b)("inlineCode",{parentName:"h3"},"EAUDITNOPJSON")," and ",Object(i.b)("inlineCode",{parentName:"h3"},"EAUDITNOLOCK")," errors"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npm audit")," requires packages to have ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," and ",Object(i.b)("inlineCode",{parentName:"p"},"package-lock.json")," files."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If you get an ",Object(i.b)("inlineCode",{parentName:"li"},"EAUDITNOPJSON")," error, create a ",Object(i.b)("inlineCode",{parentName:"li"},"package.json"),' file by following the steps in "',Object(i.b)("a",{parentName:"li",href:"creating-a-package-json-file"},"Creating a package.json file"),'".'),Object(i.b)("li",{parentName:"ul"},"If you get an ",Object(i.b)("inlineCode",{parentName:"li"},"EAUDITNOLOCK")," error, make sure your package has a ",Object(i.b)("inlineCode",{parentName:"li"},"package.json")," file, then create the package lock file by running ",Object(i.b)("inlineCode",{parentName:"li"},"npm i --package-lock-only"),".")),Object(i.b)("h2",null,"Reviewing and acting on the security audit report"),Object(i.b)("p",null,"Running ",Object(i.b)("inlineCode",{parentName:"p"},"npm audit"),' will produce a report of security vulnerabilities with the affected package name, vulnerability severity and description, path, and other information, and, if available, commands to apply patches to resolve vulnerabilities. For more information on the fields in the audit report, see "',Object(i.b)("a",{parentName:"p",href:"about-audit-reports"},"About audit reports"),'"'),Object(i.b)("h3",null,"Security vulnerabilities found with suggested updates"),Object(i.b)("p",null,"If security vulnerabilities are found and updates are available, you can either:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Run the ",Object(i.b)("inlineCode",{parentName:"li"},"npm audit fix")," subcommand to automatically install compatible updates to vulnerable dependencies."),Object(i.b)("li",{parentName:"ul"},'Run the recommended commands individually to install updates to vulnerable dependencies. (Some updates may be semver-breaking changes; for more information, see "',Object(i.b)("a",{parentName:"li",href:"#semver-warnings"},"SEMVER warnings"),'".)')),Object(i.b)(p,{src:"/packages-and-modules/securing-your-code/audit-report-suggested-fixes.png",alt:"Screenshot of command-line audit results with suggested fixes",mdxType:"Screenshot"}),Object(i.b)("h4",null,"SEMVER warnings"),Object(i.b)("p",null,"If the recommended action is a potential breaking change (semantic version major change), it will be followed by a ",Object(i.b)("inlineCode",{parentName:"p"},"SEMVER WARNING"),' that says "SEMVER WARNING: Recommended action is a potentially breaking change". If the package with the vulnerability has changed its API, you may need to make additional changes to your package\'s code.'),Object(i.b)("h3",null,"Security vulnerabilities found requiring manual review"),Object(i.b)("p",null,"If security vulnerabilities are found, but no patches are available, the audit report will provide information about the vulnerability so you can investigate further."),Object(i.b)(p,{src:"/packages-and-modules/securing-your-code/audit-manual-review.png",alt:"Screenshot of command-line audit results requiring a manual review",mdxType:"Screenshot"}),Object(i.b)("p",null,"To address the vulnerability, you can"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#check-for-mitigating-factors"},"Check for mitigating factors")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#update-dependent-packages-if-a-fix-exists"},"Update dependent packages if a fix exists")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#fix-the-vulnerability"},"Fix the vulnerability")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#open-an-issue-in-the-package-or-dependent-package-issue-tracker"},"Open an issue in the package or dependent package issue tracker"))),Object(i.b)("h4",null,"Check for mitigating factors"),Object(i.b)("p",null,'Review the security advisory in the "More info" field for mitigating factors that may allow you to continue using the package with the vulnerability in limited cases. For example, the vulnerability may only exist when the code is used on specific operating systems, or when a specific function is called.'),Object(i.b)("h4",null,"Update dependent packages if a fix exists"),Object(i.b)("p",null,"If a fix exists but packages that depend on the package with the vulnerability have not been updated to include the fixed version, you may want to open a pull or merge request on the dependent package repository to use the fixed version."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},'To find the package that must be updated, check the "Path" field for the location of the package with the vulnerability, then check for the package that depends on it. For example, if the path to the vulnerability is ',Object(i.b)("inlineCode",{parentName:"li"},"@package-name > dependent-package > package-with-vulnerability"),", you will need to update ",Object(i.b)("inlineCode",{parentName:"li"},"dependent-package"),"."),Object(i.b)("li",{parentName:"ol"},"On the ",Object(i.b)("a",{parentName:"li",href:"https://npmjs.com"},"npm public registry"),', find the dependent package and navigate to its repository. For more information on finding packages, see "',Object(i.b)("a",{parentName:"li",href:"searching-for-and-choosing-packages-to-download"},"Searching for and choosing packages to download"),'".'),Object(i.b)("li",{parentName:"ol"},"In the dependent package repository, open a pull or merge request to update the version of the vulnerable package to a version with a fix."),Object(i.b)("li",{parentName:"ol"},"Once the pull or merge request is merged and the package has been updated in the ",Object(i.b)("a",{parentName:"li",href:"https://npmjs.com"},"npm public registry"),", update your copy of the package with ",Object(i.b)("inlineCode",{parentName:"li"},"npm update"),".")),Object(i.b)("h4",null,"Fix the vulnerability"),Object(i.b)("p",null,"If a fix does not exist, you may want to suggest changes that address the vulnerability to the package maintainer in a pull or merge request on the package repository."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},'Check the "Path" field for the location of the vulnerability.'),Object(i.b)("li",{parentName:"ol"},"On the ",Object(i.b)("a",{parentName:"li",href:"https://npmjs.com"},"npm public registry"),', find the package with the vulnerability. For more information on finding packages, see "',Object(i.b)("a",{parentName:"li",href:"searching-for-and-choosing-packages-to-download"},"Searching for and choosing packages to download"),'".'),Object(i.b)("li",{parentName:"ol"},"In the package repository, open a pull or merge request to make the fix on the package repository."),Object(i.b)("li",{parentName:"ol"},"Once the fix is merged and the package has been updated in the npm public registry, update your copy of the package that depends on the package with the fix.")),Object(i.b)("h4",null,"Open an issue in the package or dependent package issue tracker"),Object(i.b)("p",null,"If you do not want to fix the vulnerability or update the dependent package yourself, open an issue in the package or dependent package issue tracker."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"On the ",Object(i.b)("a",{parentName:"li",href:"https://npmjs.com"},"npm public registry"),', find the package with the vulnerability or the dependent package that needs an update. For more information on finding packages, see "',Object(i.b)("a",{parentName:"li",href:"searching-for-and-choosing-packages-to-download"},"Searching for and choosing packages to download"),'".'),Object(i.b)("li",{parentName:"ol"},'In the package or dependent package issue tracker, open an issue and include information from the audit report, including the vulnerability report from the "More info" field.')),Object(i.b)("h3",null,"No security vulnerabilities found"),Object(i.b)("p",null,"If no security vulnerabilities are found, this means that packages with known vulnerabilities were not found in your package dependency tree. Since the advisory database can be updated at any time, we recommend regularly running ",Object(i.b)("inlineCode",{parentName:"p"},"npm audit")," manually, or adding ",Object(i.b)("inlineCode",{parentName:"p"},"npm audit")," to your continuous integration process."),Object(i.b)(p,{src:"/packages-and-modules/securing-your-code/audit-no-vulnerabilities.png",alt:"Screenshot showing audit report with no vulnerabilities",mdxType:"Screenshot"}),Object(i.b)("h2",null,"Turning off ",Object(i.b)("inlineCode",{parentName:"h2"},"npm audit")," on package installation"),Object(i.b)("h3",null,"Installing a single package"),Object(i.b)("p",null,"To turn off ",Object(i.b)("inlineCode",{parentName:"p"},"npm audit")," when installing a single package, use the ",Object(i.b)("inlineCode",{parentName:"p"},"--no-audit")," flag:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"npm install example-package-name --no-audit\n")),Object(i.b)("p",null,"For more information, see the ",Object(i.b)("a",{parentName:"p",href:"/cli/install"},Object(i.b)("inlineCode",{parentName:"a"},"npm-install")," command"),"."),Object(i.b)("h3",null,"Installing all packages"),Object(i.b)("p",null,"To turn off ",Object(i.b)("inlineCode",{parentName:"p"},"npm audit")," when installing all packages, set the ",Object(i.b)("inlineCode",{parentName:"p"},"audit")," setting to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," in your user and global npmrc config files:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"npm set audit false\n")),Object(i.b)("p",null,"For more information, see the ",Object(i.b)("a",{parentName:"p",href:"/cli/config"},Object(i.b)("inlineCode",{parentName:"a"},"npm-config")," management command")," and the ",Object(i.b)("a",{parentName:"p",href:"/cli/config#audit"},Object(i.b)("inlineCode",{parentName:"a"},"npm-config")," audit setting"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-packages-and-modules-securing-your-code-auditing-package-dependencies-for-security-vulnerabilities-mdx-bbc3e1eae336fb1351e9.js.map