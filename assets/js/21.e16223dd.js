(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{415:function(e,t,r){"use strict";r.r(t);var o=r(27),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[r("img",{attrs:{src:"https://blog-images-1257398419.cos.ap-nanjing.myqcloud.com/vue-ssr/conclusion.png",alt:"总结"}})]),e._v(" "),r("p",[e._v("总体来说涉及流程还蛮多的，稍微有点小复杂，对于不熟悉"),r("code",[e._v("node")]),e._v("和"),r("code",[e._v("webpack")]),e._v("的童鞋来说可能会稍微有点不太好理解，不过也不用慌，按照笔者前面给出的架构图来看，应该也能知晓到大概的步骤。")]),e._v(" "),r("blockquote",[r("p",[e._v("如果遇到面试问到，说不定就算不会，也能说到一二。万一面试官都不会，那就更加精彩了（手动滑稽）。")])]),e._v(" "),r("p",[e._v("对于服务端渲染来说呢，我们更多需要考虑的还是服务端的请求处理压力问题，毕竟在某些并发量大的情况下容易造成服务崩溃，同时由于"),r("code",[e._v("Node")]),e._v("是单线程工作，所以如果不做特殊处理导致服务器不可用那么整个网站也将无法访问了，当然我们也可以开启多线程，尽可能利用服务器多核处理能力，来分担服务器处理请求的压力。")]),e._v(" "),r("p",[e._v("不仅如此，我们也可以为服务器"),r("code",[e._v("cpu")]),e._v("占用设定一个阈值，一旦达到或超过这个设定的阈值就直接降级到"),r("code",[e._v("csr")]),e._v("（客户端渲染）模式，也能有效降低服务器的几率。")]),e._v(" "),r("p",[e._v("除了以上提到的优化的手段，我们也可以在提高服务稳定性上来进行多层次分析，比如接入监控、日志系统、进程守护等等。")]),e._v(" "),r("p",[e._v("或者也可以采用缓存，减少一些不必要的重复渲染，常见的比如配合"),r("code",[e._v("lru-cache")]),e._v("实现页面级缓存或组件级别缓存等；如果是在多进程场景下，可能会出现不同进程缓存内容不同享的问题导致缓存失效，我们可以针对这种情况引入"),r("code",[e._v("redis")]),e._v("提供缓存服务。")]),e._v(" "),r("h3",{attrs:{id:"参考链接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[e._v("#")]),e._v(" 参考链接")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/amandakelake/blog/issues/60",target:"_blank",rel:"noopener noreferrer"}},[e._v("后端渲染、客户端渲染(CSR)、同构应用(SSR)"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://beyoursun.github.io/2017/10/13/Spa-Prerender-Guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("单页应用多路由预渲染指南"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);