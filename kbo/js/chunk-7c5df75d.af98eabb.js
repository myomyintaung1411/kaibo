(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c5df75d"],{"002e":function(t,e,n){t.exports=n.p+"img/4.4673e884.png"},"10a6":function(t,e,n){t.exports=n.p+"img/qrcode.29742261.png"},1276:function(t,e,n){"use strict";var r=n("d784"),i=n("44e7"),o=n("825a"),a=n("1d80"),c=n("4840"),s=n("8aa5"),l=n("50c4"),u=n("14c3"),f=n("9263"),d=n("d039"),g=[].push,p=Math.min,h=4294967295,v=!d((function(){return!RegExp(h,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(a(this)),o=void 0===n?h:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,o);var c,s,l,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,v=new RegExp(t.source,d+"g");while(c=f.call(v,r)){if(s=v.lastIndex,s>p&&(u.push(r.slice(p,c.index)),c.length>1&&c.index<r.length&&g.apply(u,c.slice(1)),l=c[0].length,p=s,u.length>=o))break;v.lastIndex===c.index&&v.lastIndex++}return p===r.length?!l&&v.test("")||u.push(""):u.push(r.slice(p)),u.length>o?u.slice(0,o):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=a(this),o=void 0==e?void 0:e[t];return void 0!==o?o.call(e,i,n):r.call(String(i),e,n)},function(t,i){var a=n(r,t,this,i,r!==e);if(a.done)return a.value;var f=o(t),d=String(this),g=c(f,RegExp),m=f.unicode,b=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(v?"y":"g"),x=new g(v?f:"^(?:"+f.source+")",b),A=void 0===i?h:i>>>0;if(0===A)return[];if(0===d.length)return null===u(x,d)?[d]:[];var y=0,w=0,_=[];while(w<d.length){x.lastIndex=v?w:0;var C,S=u(x,v?d:d.slice(w));if(null===S||(C=p(l(x.lastIndex+(v?0:w)),d.length))===y)w=s(d,w,m);else{if(_.push(d.slice(y,w)),_.length===A)return _;for(var E=1;E<=S.length-1;E++)if(_.push(S[E]),_.length===A)return _;w=y=C}}return _.push(d.slice(y)),_}]}),!v)},"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"153b":function(t,e,n){t.exports=n.p+"img/1.b9400ea3.png"},2884:function(t,e,n){t.exports=n.p+"img/servicegirl2.653a22ba.jpg"},"28a6":function(t,e,n){t.exports=n.p+"img/servicegirl1.f4312b05.jpg"},3555:function(t,e,n){t.exports=n.p+"img/5.fdecc206.png"},3616:function(t,e,n){t.exports=n.p+"img/4.865e5696.png"},"425e":function(t,e,n){t.exports=n.p+"img/service.22456601.png"},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),o=n("b622"),a=o("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},"4e0c":function(t,e,n){t.exports=n.p+"img/d3.18becd12.jpg"},6467:function(t,e,n){t.exports=n.p+"img/d4.c5f7af90.jpg"},6547:function(t,e,n){var r=n("a691"),i=n("1d80"),o=function(t){return function(e,n){var o,a,c=String(i(e)),s=r(n),l=c.length;return s<0||s>=l?t?"":void 0:(o=c.charCodeAt(s),o<55296||o>56319||s+1===l||(a=c.charCodeAt(s+1))<56320||a>57343?t?c.charAt(s):o:t?c.slice(s,s+2):a-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"69e1":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{width:"100%",background:"#000",height:"100%",position:"relative"}},[r("div",{staticClass:"header"},[r("img",{staticClass:"logo-img",attrs:{src:n("f912"),alt:""}}),r("img",{staticClass:"head_line",attrs:{src:n("8f5a"),alt:""}}),r("div",{staticClass:"nav"},[r("ul",[r("li",{class:{active:1==t.activeTab},on:{click:function(e){return t.goAssignBlock("block0",50)}}},[t._v(" 凯博娱乐 ")]),r("li",{class:{active:2==t.activeTab},on:{click:function(e){return t.goAssignBlock("block1",50)}}},[t._v(" 前往游戏 ")]),r("li",{class:{active:3==t.activeTab},on:{click:function(e){return t.goAssignBlock("block2",50)}}},[t._v(" APP下载 ")]),r("li",{on:{click:function(e){return t.Gologin()}}},[t._v("登录")]),r("li",{on:{click:function(e){return t.GoRegister()}}},[t._v("注册")])])])]),r("div",{ref:"block0",staticClass:"carousal"},[r("div",{staticClass:"caro-main"},[t._l(t.cList,(function(e,n){return r("div",{key:n,staticClass:"carousal-img"},[r("transition",{attrs:{name:"fade"}},[t.currentSlide==n?r("img",{staticStyle:{height:"500px",width:"100%"},attrs:{src:e.img}}):t._e()])],1)})),r("div",{staticStyle:{height:"490px",width:"100%",position:"relative"}},[r("div",{staticStyle:{position:"absolute",bottom:"0%",width:"100%",display:"flex","justify-content":"center"}},t._l(t.cList,(function(e,n){return r("div",{key:n,class:t.currentSlide==n?"gray":"white",staticStyle:{width:"25px",height:"25px","border-radius":"100%",cursor:"pointer",margin:"5px"},on:{click:function(e){return t.makeActive(n)}}})})),0)])],2),r("div",{staticClass:"marquee"},[r("marquee",{attrs:{behavior:"",direction:""}},[t._v(t._s(t.scrolldata))])],1),r("div",{staticClass:"customer-service"},[r("img",{attrs:{src:n("425e"),alt:"",width:"auto",height:"auto"},on:{click:function(e){return t.Service()}}})]),this.showdata?r("div",{staticClass:"qrcode"},[r("img",{attrs:{src:n("10a6"),alt:"",height:"350px",width:"100%"}}),r("div",{staticClass:"text"},[t._v("QQ: "+t._s(this.$Global.optioner.QQ))]),r("div",{staticClass:"text"},[t._v("WX: "+t._s(this.$Global.optioner.WX))])]):t._e()]),r("div",{ref:"block1",staticClass:"hn_c"},[r("span",[t._v("游戏登录")]),r("div",{staticClass:"card"},[r("div",{staticClass:"c_body"},[r("img",{attrs:{src:n("28a6"),alt:""}}),r("font",{attrs:{color:"#fff"}},[t._v("凯博娱乐")]),t._m(0),r("button",{on:{click:function(e){return t.goPlayGame()}}},[t._v("登录")])],1)]),r("div",{staticClass:"card"},[r("div",{staticClass:"c_body"},[r("img",{attrs:{src:n("2884"),alt:""}}),r("font",{attrs:{color:"#fff"}},[t._v("凯博娱乐")]),t._m(1),r("div",{staticClass:"button_g"},[r("button",{on:{click:function(e){return t.goPlayGame()}}},[t._v("登录")]),r("button",{on:{click:function(e){return t.goTestGame()}}},[t._v("试玩")])])],1)]),t._l(t.items,(function(e){return r("div",{key:e.id,staticClass:"desc"},[r("div",{staticClass:"desc_img"},[r("img",{attrs:{src:e.img,alt:""}})]),r("div",{staticClass:"desc_info"},[r("p",[t._v(t._s(e.title))]),r("p",[t._v(t._s(e.p))])])])}))],2),r("hr",{staticStyle:{margin:"15px",border:"none",height:"2px","background-color":"#ccc"}}),r("div",{ref:"block2",staticClass:"download"},[r("span",[t._v("APP下载")]),t._m(2),t._m(3),t._m(4)]),r("hr",{staticStyle:{margin:"15px",border:"none",height:"2px","background-color":"#ccc"}}),r("div",{staticClass:"scroll__img__div"},t._l(t.scrollImg,(function(e,n){return r("div",{key:n,staticClass:"scroll_img",on:{click:function(e){return t.goPlayGame()}}},[r("img",{attrs:{src:e.img,alt:""}}),r("span",[t._v(t._s(e.text))])])})),0),t._m(5)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" 您想要的都在这里，平台有实力，游戏质量有保障 "),n("br"),t._v(" 多玩少玩，多少要玩，早赢晚赢，早晚要赢 ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" 您想要的都在这里，平台有实力，游戏质量有保障 "),n("br"),t._v(" 多玩少玩，多少要玩，早赢晚赢，早晚要赢 ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" 随时随地，手机投注，安全畅玩, 凯博相伴 "),n("br"),t._v(" 赶紧扫描下载吧 ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"qr_code"},[r("img",{attrs:{src:n("c8c5"),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"down_text"},[n("p",[n("a",{attrs:{href:"http://kb1234.com/"}},[t._v("H5登录")]),t._v(" , 安卓/苹果下载 ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"footer"}},[n("p",[t._v("Copyright © 凯博娱乐 Co., Ltd. All rights reserved.")])])}],o=(n("b0c0"),n("ac1f"),n("1276"),n("beba")),a=n("e762"),c={data:function(){return{showdata:!1,interval:"",isTitleShowing:!0,currentSlide:1,activeTab:1,code:"",codeList:[],scrolldata:"华纳国际欢迎您",id:this.$Global.myLoginInfo.loginId,regForm:{name:"",pass:"",checkPass:"",phone:""},cList:[{img:n("e4bf")},{img:n("fa07")},{img:n("4e0c")},{img:n("6467")},{img:n("fcbc")}],scrollImg:[{img:n("153b"),text:"炸金花"},{img:n("8c7e"),text:"百家乐"},{img:n("f7ff"),text:"牛牛"},{img:n("002e"),text:"龙虎斗"},{img:n("3555"),text:"推筒子"}],items:[{id:1,img:n("b011"),title:"更专业",p:"我们在业内聘请了一些经验丰富的线上博彩专家和操盘手并保证我们游戏平台里的赔率是最佳赔率"},{id:2,img:n("7ab0"),title:"更快速",p:"凯博一直注重用户体验，高效快速的存款取款业务是用户最实在的体验"},{id:3,img:n("7de2"),title:"更安全",p:"客服均经过严格的筛选及专业的培训用心打造精英客服团队为玩家提供优质服务"},{id:4,img:n("3616"),title:"更便捷",p:"自主研发的Web, H5更有IOS, Andorid原生APP, 让您随时随地娱乐投注"}]}},mounted:function(){var t=this;this.interval=setInterval((function(){t.currentSlide=4===t.currentSlide?0:t.currentSlide+1}),4e3)},beforeUnmount:function(){clearInterval(this.interval)},created:function(){var t=window.location.href,e=t.split(".")[0],n=e.split("//")[1];this.getAgentInfo(n),this.GetScrollData(this.id)},methods:{makeActive:function(t){this.currentSlide=t},getAgentInfo:function(t){var e=this,n=this.$Global.en,r=JSON.stringify({Id:t}),i=o["a"].encrypt(r,n);this.axios.post(this.$Global.agentUrl,{data:i}).then((function(t){var r=t.data,i=JSON.parse(o["a"].decrypt(r,n));200==i.JsonData.code&&(e.$Global.optioner.QQ=i.JsonData.QQ,e.$Global.optioner.WX=i.JsonData.WXH,e.$Global.optioner.AgentId=i.JsonData.Id,e.$Global.optioner.AgentName=i.JsonData.name)})).catch((function(t){console.error(t)}))},GetScrollData:function(t){var e=this,n=this.$Global.en,r=JSON.stringify({Id:t}),i=o["a"].encrypt(r,n);this.axios.post(this.$Global.scrollData,{data:i}).then((function(t){var r=t.data,i=JSON.parse(o["a"].decrypt(r,n));200==i.JsonData.code?e.scrolldata=i.JsonData.msg:e.scrolldata="为了给广大游戏玩家带来更安全稳定的线上体验环境，公司将针对在线上进行游戏无差额对打套利,洗钱等违反公司常规游戏操作的用户进行净网行动，一经发现封号冻结资金，概不退还！"})).catch((function(t){console.error(t)}))},Gologin:function(){if(1==this.$store.state.login)return this.$mobilemessage.warning("您已登陆成功");this.$router.push("/login")},GoRegister:function(){this.$router.push("/register")},goTestGame:function(){window.open("http://kb1234.com/?token=","_blank")},goPlayGame:function(){if(0==this.$store.state.login)return this.$mobilemessage.warning("请先登录");var t=this.$Global.gameEn,e={name:this.$store.state.myAccount,password:this.$store.state.myPassword},n=o["a"].gameEncrypt(JSON.stringify(e),t);window.open("http://kb1234.com/?token=".concat(n))},randomString:function(t,e){e=e||"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/";for(var n="",r=0;r<t;r++){var i=Math.floor(Math.random()*e.length);n+=e.substring(i,i+1)}return n},doEncrypt:function(){var t={acc:this.$store.state.myAccount,pwd:this.$md5(this.$store.state.myPassword),agent:5};console.log(t,"asdfasdfasd");var e=a["a"].encode(JSON.stringify(t)),n=e.substring(0,8),r=e.substring(8),i=n+this.randomString(8),o=this.randomString(9)+i+r;return console.log(e,n,r,i,o),o},Service:function(){this.showdata=!this.showdata},goAssignBlock:function(t,e){switch(t){case"block0":this.activeTab=1;break;case"block1":this.activeTab=2;break;case"block2":this.activeTab=3;break}var n,r=window.innerHeight,i=this.$refs[t].offsetHeight,o=this.$refs[t].offsetTop,a=o-(r-i)/2,c=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,s=c;function l(){c<a?(s<=a?(window.scrollTo(0,s),n=window.requestAnimationFrame(l)):window.cancelAnimationFrame(n),s+=e):(a<=s?(window.scrollTo(0,s-e),n=window.requestAnimationFrame(l)):window.cancelAnimationFrame(n),s-=e)}window.requestAnimationFrame(l)}}},s=c,l=(n("f68b"),n("2877")),u=Object(l["a"])(s,r,i,!1,null,"543a55da",null);e["default"]=u.exports},"6a9b":function(t,e,n){},"7ab0":function(t,e,n){t.exports=n.p+"img/2.19dcf571.png"},"7de2":function(t,e,n){t.exports=n.p+"img/3.79f37c39.png"},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"8c7e":function(t,e,n){t.exports=n.p+"img/2.19242a02.png"},"8f5a":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAACCAYAAAAHBFkaAAAABGdBTUEAALGPC/xhBQAAA9dJREFUWAntV9tOHDEM7arVUomdvvL/v8gsUkGVqM+xj+NA5kaXPpGFTWL7+J7ZzOnh4eH128o4n79/O9nn1T4nytn61SC2AV0DtJNtoayjE7cPP013VAA9PhoOJt2mieRaguZd0ODAFv5yf6ayJhc6ZRVxhB7ORod6DMYYxrbwvy53iXMNnhnksmbJdTuNNuxLO+eB6hREPMJPiIkOCQkLTTYDoiqTMdmWPQg6TXYgNsJPFpMnGwKKR3jMTscCXO8V06REQivzt42fLj+brIkPB2KWvrcCazzJhkzLnxjLs/c6slNG5q/QBkvkb4RPWitfjy76U7ZIJK3gW63gazCYrjjLiD0G8VFxb3JjECaF63icqaaNQCmgBWmB0voscfPqaN+p89qc3lMnpHG26ijpqeRcV35dS2BEEw+z+Fk/RNsCbjVtgTo89sK7Lj8bX3hPEb4f52d/fDVSt+rzZ6kvuYdg5XfA2FR+Xc/XF6B1OkL68/p3fnrxXoGlEsS/nr8Rfn56jnhsKkHns6Jxl/tXMhv4ef7dxSPYaB7Zr/6NMKLN1xITiPH8Fr+b13gSXJG5Rq3SBnvOvpALDMOqU9x/o/G8O/XI71/LX3uAuJbhAyRtww16k/VZx18tf+p26Mcg3h3nXjFpJjH41act/NX6j26lDZXLfUTqNZRS7FWSnI3mPorX49ETxIfDTW/7rRGfIg632skBy0jQYGgJj3iMa7IQwp/w5p/R6C8lCt0Usg84G9N2e/DPL38gvDhOWxf3ReSAcXf+QSoboyQC8cl5CKytwd+D98u36TLdSroSycS4oaz4yQSlNzHwZQceP9YpBwx9hIF+QAaD/vgSO/s3z2SHu3QrpbAQ/nKPS0mfwGZT9A7KTZgn8ghel9bEKwA5bYysGc03b5gNyJvsXvw0lQt5UeU1Qugw0g/yRJdfENmJ72z2qnPX2UhqLKrNt7wUiUNZ+LzQAnt0RJn9gfAxPF6EiUeSpCJq5U3idWO+q48lz7fC+0s5T6C5AmdU47KWD2Y/ws9ZB8jpBVN13QiP8/DOftgRfVzOTPIX3hKkKnlWfPeR/OGy8T/rj/MgPzXvtc+L5SecHyYTTQfd6HM4hi+uYwYJI+znS4LOhXP3fUM/zJguPBePjkMX7FB+i+fvI3pF+S9Od7qVM/C9LSlJGawO4md76UQdlCXkLBS6LmPc8vcTdR2NtE9mFDA6uYUp+nsNS3i83C6krFOiNlH4znR7R/B4iedoTrMHP3p/gy6vrflif9UXvpz5YWKNICs72RvmR9YPuuzjT4j36zX81mUc2L3jL58HC7gpGKL1AAAAAElFTkSuQmCC"},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=n("9f7f"),o=RegExp.prototype.exec,a=String.prototype.replace,c=o,s=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=s||u||l;f&&(c=function(t){var e,n,i,c,f=this,d=l&&f.sticky,g=r.call(f),p=f.source,h=0,v=t;return d&&(g=g.replace("y",""),-1===g.indexOf("g")&&(g+="g"),v=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(p="(?: "+p+")",v=" "+v,h++),n=new RegExp("^(?:"+p+")",g)),u&&(n=new RegExp("^"+p+"$(?!\\s)",g)),s&&(e=f.lastIndex),i=o.call(d?n:f,v),d?i?(i.input=i.input.slice(h),i[0]=i[0].slice(h),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:s&&i&&(f.lastIndex=f.global?i.index+i[0].length:e),u&&i&&i.length>1&&a.call(i[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),t.exports=c},"9f7f":function(t,e,n){"use strict";var r=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},b011:function(t,e,n){t.exports=n.p+"img/1.ed8c6c3a.png"},c8c5:function(t,e,n){t.exports=n.p+"img/qr2.13d9ce92.jpg"},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),o=n("b622"),a=n("9263"),c=n("9112"),s=o("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=o("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),g=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var p=o(t),h=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),v=h&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!h||!v||"replace"===t&&(!l||!u||d)||"split"===t&&!g){var m=/./[p],b=n(p,""[t],(function(t,e,n,r,i){return e.exec===a?h&&!i?{done:!0,value:m.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),x=b[0],A=b[1];r(String.prototype,t,x),r(RegExp.prototype,p,2==e?function(t,e){return A.call(t,this,e)}:function(t){return A.call(t,this)})}f&&c(RegExp.prototype[p],"sham",!0)}},e4bf:function(t,e,n){t.exports=n.p+"img/d1.cce1c320.jpg"},e762:function(t,e,n){"use strict";n.d(e,"a",(function(){return X}));const r="3.6.0",i=r,o="function"===typeof atob,a="function"===typeof btoa,c="function"===typeof Buffer,s="function"===typeof TextDecoder?new TextDecoder:void 0,l="function"===typeof TextEncoder?new TextEncoder:void 0,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",f=[...u],d=(t=>{let e={};return t.forEach((t,n)=>e[t]=n),e})(f),g=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,p=String.fromCharCode.bind(String),h="function"===typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):(t,e=(t=>t))=>new Uint8Array(Array.prototype.slice.call(t,0).map(e)),v=t=>t.replace(/[+\/]/g,t=>"+"==t?"-":"_").replace(/=+$/m,""),m=t=>t.replace(/[^A-Za-z0-9\+\/]/g,""),b=t=>{let e,n,r,i,o="";const a=t.length%3;for(let c=0;c<t.length;){if((n=t.charCodeAt(c++))>255||(r=t.charCodeAt(c++))>255||(i=t.charCodeAt(c++))>255)throw new TypeError("invalid character found");e=n<<16|r<<8|i,o+=f[e>>18&63]+f[e>>12&63]+f[e>>6&63]+f[63&e]}return a?o.slice(0,a-3)+"===".substring(a):o},x=a?t=>btoa(t):c?t=>Buffer.from(t,"binary").toString("base64"):b,A=c?t=>Buffer.from(t).toString("base64"):t=>{const e=4096;let n=[];for(let r=0,i=t.length;r<i;r+=e)n.push(p.apply(null,t.subarray(r,r+e)));return x(n.join(""))},y=(t,e=!1)=>e?v(A(t)):A(t),w=t=>{if(t.length<2){var e=t.charCodeAt(0);return e<128?t:e<2048?p(192|e>>>6)+p(128|63&e):p(224|e>>>12&15)+p(128|e>>>6&63)+p(128|63&e)}e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return p(240|e>>>18&7)+p(128|e>>>12&63)+p(128|e>>>6&63)+p(128|63&e)},_=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,C=t=>t.replace(_,w),S=c?t=>Buffer.from(t,"utf8").toString("base64"):l?t=>A(l.encode(t)):t=>x(C(t)),E=(t,e=!1)=>e?v(S(t)):S(t),k=t=>E(t,!0),R=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,P=t=>{switch(t.length){case 4:var e=(7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3),n=e-65536;return p(55296+(n>>>10))+p(56320+(1023&n));case 3:return p((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return p((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},T=t=>t.replace(R,P),B=t=>{if(t=t.replace(/\s+/g,""),!g.test(t))throw new TypeError("malformed base64.");t+="==".slice(2-(3&t.length));let e,n,r,i="";for(let o=0;o<t.length;)e=d[t.charAt(o++)]<<18|d[t.charAt(o++)]<<12|(n=d[t.charAt(o++)])<<6|(r=d[t.charAt(o++)]),i+=64===n?p(e>>16&255):64===r?p(e>>16&255,e>>8&255):p(e>>16&255,e>>8&255,255&e);return i},I=o?t=>atob(m(t)):c?t=>Buffer.from(t,"base64").toString("binary"):B,U=c?t=>h(Buffer.from(t,"base64")):t=>h(I(t),t=>t.charCodeAt(0)),G=t=>U(F(t)),O=c?t=>Buffer.from(t,"base64").toString("utf8"):s?t=>s.decode(U(t)):t=>T(I(t)),F=t=>m(t.replace(/[-_]/g,t=>"-"==t?"+":"/")),N=t=>O(F(t)),j=t=>{if("string"!==typeof t)return!1;const e=t.replace(/\s+/g,"").replace(/=+$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(e)||!/[^\s0-9a-zA-Z\-_]/.test(e)},J=t=>({value:t,enumerable:!1,writable:!0,configurable:!0}),$=function(){const t=(t,e)=>Object.defineProperty(String.prototype,t,J(e));t("fromBase64",(function(){return N(this)})),t("toBase64",(function(t){return E(this,t)})),t("toBase64URI",(function(){return E(this,!0)})),t("toBase64URL",(function(){return E(this,!0)})),t("toUint8Array",(function(){return G(this)}))},D=function(){const t=(t,e)=>Object.defineProperty(Uint8Array.prototype,t,J(e));t("toBase64",(function(t){return y(this,t)})),t("toBase64URI",(function(){return y(this,!0)})),t("toBase64URL",(function(){return y(this,!0)}))},L=()=>{$(),D()},X={version:r,VERSION:i,atob:I,atobPolyfill:B,btoa:x,btoaPolyfill:b,fromBase64:N,toBase64:E,encode:E,encodeURI:k,encodeURL:k,utob:C,btou:T,decode:N,isValid:j,fromUint8Array:y,toUint8Array:G,extendString:$,extendUint8Array:D,extendBuiltins:L}},f68b:function(t,e,n){"use strict";n("6a9b")},f7ff:function(t,e,n){t.exports=n.p+"img/3.4a41c214.png"},f912:function(t,e,n){t.exports=n.p+"img/logo.b029a78f.png"},fa07:function(t,e,n){t.exports=n.p+"img/d5.c9e74364.jpg"},fcbc:function(t,e,n){t.exports=n.p+"img/dd.c9e74364.jpg"}}]);