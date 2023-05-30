(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8451:function(e,t,s){Promise.resolve().then(s.bind(s,5116))},5116:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return b}});var n=s(9268),a=s(6006),o=s(691),l=s.n(o),r=s(6394),i=s.n(r),c=s(5846),f=s.n(c),d=s(3625);s(1307),s(5557),s(5555);var p=s(3752),u=s.n(p);function _(e){let{autoFocus:t,className:s,defaultValue:o,handleSelect:l,label:r}=e,[i,c]=a.useState(!1),[f,p]=a.useState([]),_=a.useId();return(0,n.jsxs)("span",{className:"".concat(u().wrapper," ").concat(s),children:[(0,n.jsx)("label",{children:r}),(0,n.jsx)(d.Wf,{id:_,autoFocus:t,isLoading:i,defaultInputValue:o,labelKey:"family",placeholder:"Enter a font name",onSearch:e=>{c(!0),fetch("".concat("https://www.googleapis.com/webfonts/v1/webfonts","?key=").concat("AIzaSyBL9K--BHmB9QPY-Yr_Fd5NZYVOfGmBTKs")).then(e=>e.json()).then(e=>{c(!1),p(e.items)})},onChange:e=>{var t;let s=(null===(t=e[0])||void 0===t?void 0:t.family)||"";l(s)},options:f,useCache:!0})]})}var h=s(4971),m=s.n(h);function g(e){let{fontA:t,fontB:s,value:a}=e;return(0,n.jsxs)("div",{className:m().wrapper,children:[t&&(0,n.jsx)("span",{className:m().font,style:{color:"#00B7FF",fontFamily:t},children:a}),s&&(0,n.jsx)("span",{className:m().font,style:{color:"#C75646",fontFamily:s},children:a})]})}var x=s(7533),A=s.n(x),j={src:"/tiff//_next/static/media/end.58933041.png",height:38,width:32,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAgElEQVR42j2Puw2AMAxE04WehpKpKLMDTGK60JEKpuA3C2MQwXNkUZx8fiddHDfG5Mcp1RKTQw3e2e7VtCgIEPUWBsJWTYdOVKEbqPMSuIYb1Q9wAbw6YVngGh4WrswSoozfS63E+QT8tegipJaHqQh27cAOs4MIPKa2a+0rZfcfHDV5ctB+g+UAAAAASUVORK5CYII=",blurWidth:7,blurHeight:8};function b(){let[e,t]=a.useState("Inter"),[o,r]=a.useState(""),[c,d]=a.useState(["R","g","h","e"]);a.useEffect(()=>{(async()=>{let t=(await s.e(405).then(s.t.bind(s,5405,23))).default;t.load({google:{families:[e,o]}})})()},[e,o]);let p=(e,t)=>{let s=c.slice();s[e]=t.target.value,d(s)};return(0,n.jsxs)(a.Fragment,{children:[(0,n.jsx)(l(),{children:(0,n.jsx)("title",{children:"Tiff - A type diff tool"})}),(0,n.jsx)("aside",{className:A().ribbon,children:(0,n.jsxs)("div",{className:A().content,children:[(0,n.jsx)("h1",{children:"Tiff"}),(0,n.jsxs)("section",{children:[(0,n.jsx)("p",{className:A().subtitle,children:"A type diff tool that visually contrasts the differences between two fonts."}),(0,n.jsxs)("p",{className:A().disclaimer,children:["Currently supports fonts from the\xa0",(0,n.jsx)(f(),{href:"https://www.google.com/fonts",children:"Google Web Fonts"}),"\xa0 library and any system fonts. Best if viewed on the latest version of modern browsers."]})]})]})}),(0,n.jsx)("main",{className:A().primary,children:(0,n.jsxs)("div",{className:A().content,children:[(0,n.jsxs)("section",{className:A().fontSelect,children:[(0,n.jsx)(_,{autoFocus:!1,defaultValue:"Inter",label:"Font A",className:A().fontA,handleSelect:e=>t(e)}),(0,n.jsx)(_,{autoFocus:!0,label:"Font B",className:A().fontB,handleSelect:e=>r(e)})]}),(0,n.jsxs)("section",{className:A().fontDisplay,children:[(0,n.jsx)(g,{value:c[0],fontA:e,fontB:o}),(0,n.jsx)(g,{value:c[1],fontA:e,fontB:o}),(0,n.jsx)(g,{value:c[2],fontA:e,fontB:o}),(0,n.jsx)(g,{value:c[3],fontA:e,fontB:o})]}),(0,n.jsxs)("section",{className:A().displayControl,children:[(0,n.jsx)("p",{children:"Edit to see different letters"}),(0,n.jsxs)("div",{className:A().testLetters,children:[(0,n.jsx)("input",{className:A().testLetter,maxLength:1,value:c[0],onChange:e=>p(0,e)}),(0,n.jsx)("input",{className:A().testLetter,maxLength:1,value:c[1],onChange:e=>p(1,e)}),(0,n.jsx)("input",{className:A().testLetter,maxLength:1,value:c[2],onChange:e=>p(2,e)}),(0,n.jsx)("input",{className:A().testLetter,maxLength:1,value:c[3],onChange:e=>p(3,e)})]}),(0,n.jsxs)("p",{children:["or"," ",(0,n.jsx)("span",{className:A().reset,onClick:()=>d(["R","g","h","e"]),children:"reset"})," ","to default"]})]}),(0,n.jsx)("section",{className:A().footer,children:(0,n.jsx)(i(),{src:j,alt:"end of content"})})]})})]})}},3752:function(e){e.exports={wrapper:"FontSelector_wrapper__r16pk"}},4971:function(e){e.exports={wrapper:"Letter_wrapper__aS6QI",font:"Letter_font___y5ri"}},7533:function(e){e.exports={fontA:"page_fontA__d_uEm",fontB:"page_fontB__kGJxZ",content:"page_content__rFejU",ribbon:"page_ribbon__TxX9o",subtitle:"page_subtitle__oV8gD",disclaimer:"page_disclaimer__PgfHR",primary:"page_primary__BiJN8",fontSelect:"page_fontSelect__N4OdZ",fontDisplay:"page_fontDisplay__eoaLO",displayMode:"page_displayMode__rXa61",displayControl:"page_displayControl__OG1xL",testLetters:"page_testLetters__TJAcT",testLetter:"page_testLetter__Gg4Ii",reset:"page_reset__FbQFT page_fontA__d_uEm",footer:"page_footer__lVP8S"}}},function(e){e.O(0,[501,324,667,488,744],function(){return e(e.s=8451)}),_N_E=e.O()}]);