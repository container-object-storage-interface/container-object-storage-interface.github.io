(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{112:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return d}));var n=r(3),i=r(7),c=(r(0),r(119)),a={title:"COSI Driver"},o={unversionedId:"write-driver/cosi-sidecar",id:"write-driver/cosi-sidecar",isDocsHomePage:!1,title:"COSI Driver",description:"COSI driver implements APIs that will be called by COSI controller. COSI driver must be deployed as sidecar for the COSI controller.",source:"@site/docs/write-driver/cosi-sidecar.md",slug:"/write-driver/cosi-sidecar",permalink:"/docs/write-driver/cosi-sidecar",editUrl:"https://github.com/container-object-storage-interface/container-object-storage-interface.github.io/edit/master/docs/write-driver/cosi-sidecar.md",version:"current",lastUpdatedBy:"Akash Mukhopadhyay",lastUpdatedAt:1666894223,formattedLastUpdatedAt:"10/27/2022",sidebar:"docs",previous:{title:"COSI Controller",permalink:"/docs/write-driver/cosi-controller"}},s=[{value:"Identity Server",id:"identity-server",children:[{value:"Identity Server Struct",id:"identity-server-struct",children:[]}]},{value:"Driver APIs",id:"driver-apis",children:[{value:"DriverCreateBucket",id:"drivercreatebucket",children:[]},{value:"DriverDeleteBucket",id:"driverdeletebucket",children:[]},{value:"DriverGrantBucketAccess",id:"drivergrantbucketaccess",children:[]},{value:"DriverRevokeBucketAccess",id:"driverrevokebucketaccess",children:[]}]}],l={toc:s};function d(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"COSI driver implements APIs that will be called by COSI controller. COSI driver must be deployed as ",Object(c.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/patterns/sidecar"},"sidecar")," for the COSI ",Object(c.b)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/container-object-storage-interface-controller"},"controller"),"."),Object(c.b)("p",null,"A COSI driver must implement following:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Identity server"),Object(c.b)("li",{parentName:"ul"},"COSI APIs")),Object(c.b)("h2",{id:"identity-server"},"Identity Server"),Object(c.b)("p",null,"A ",Object(c.b)("inlineCode",{parentName:"p"},"IdentityServer")," reports the driver's name on the ",Object(c.b)("inlineCode",{parentName:"p"},"DriverGetInfo")," RPC call from the controller."),Object(c.b)("h3",{id:"identity-server-struct"},"Identity Server Struct"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-go"},"type identityServer struct {\n    spec.UnimplementedIdentityServer\n    driverName string\n}\n")),Object(c.b)("h2",{id:"driver-apis"},"Driver APIs"),Object(c.b)("p",null,"COSI driver must implement following APIs. We recommended developer synchronize all checks and business logic."),Object(c.b)("h3",{id:"drivercreatebucket"},"DriverCreateBucket"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"DriverCreateBucket")," API is called when a user wants to create a new bucket. Driver must create the bucket only after ensuring that a bucket with same name does not already exist."),Object(c.b)("h3",{id:"driverdeletebucket"},"DriverDeleteBucket"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"DriverDeleteBucket")," API is called when a user wants to delete a bucket. Driver must delete the bucket if it exists. If it cannot find a bucket with the matching name, it should return as success."),Object(c.b)("h3",{id:"drivergrantbucketaccess"},"DriverGrantBucketAccess"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"DriverGrantBucketAccess")," API is used to grant an application access to a bucket."),Object(c.b)("h3",{id:"driverrevokebucketaccess"},"DriverRevokeBucketAccess"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"DriverRevokeBucketAccess")," API is used to revoke an application's access to a bucket."))}d.isMDXComponent=!0},119:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return v}));var n=r(0),i=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(r),p=n,v=u["".concat(a,".").concat(p)]||u[p]||b[p]||c;return r?i.a.createElement(v,o(o({ref:t},l),{},{components:r})):i.a.createElement(v,o({ref:t},l))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var l=2;l<c;l++)a[l]=r[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);