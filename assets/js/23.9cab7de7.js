(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{417:function(v,_,t){"use strict";t.r(_);var e=t(27),c=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[t("img",{attrs:{src:"https://my-blog-1257398419.cos.ap-chengdu.myqcloud.com/medias/blogImage/%E7%8A%B6%E6%80%81%E7%A0%81.png",alt:"状态码"}})]),v._v(" "),t("blockquote",[t("p",[v._v("本文对一次完整的请求和渲染过程做了一个详细的总结，小伙伴如果觉得本文对你稍微有所帮助的话，可以给笔者点个赞，有疑问的地方欢迎私聊。")])]),v._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[v._v("#")]),v._v(" 概述")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("DNS")]),v._v("解析域名获取"),t("code",[v._v("IP")]),v._v("地址")]),v._v(" "),t("li",[v._v("发起"),t("code",[v._v("http")]),v._v("请求("),t("code",[v._v("TCP三次握手")]),v._v(")")]),v._v(" "),t("li",[v._v("服务器处理请求，并返回请求资源")]),v._v(" "),t("li",[v._v("浏览器解析"),t("code",[v._v("html")]),v._v("文件渲染页面")]),v._v(" "),t("li",[v._v("关闭请求("),t("code",[v._v("TCP四次挥手")]),v._v(")")])]),v._v(" "),t("h3",{attrs:{id:"dns-解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns-解析"}},[v._v("#")]),v._v(" DNS 解析")]),v._v(" "),t("blockquote",[t("p",[v._v("说到这里就不得不提一下"),t("code",[v._v("DNS")]),v._v("这哥们的解析顺序了")])]),v._v(" "),t("ul",[t("li",[t("code",[v._v("浏览器缓存")]),v._v(" "),t("ul",[t("li",[v._v("如果有解析这个域名的记录，并且没有清除浏览器缓存就存在该域名的"),t("code",[v._v("IP")]),v._v("映射，未找到则进行下一步查找。")])])]),v._v(" "),t("li",[t("code",[v._v("系统缓存")]),v._v(" "),t("ul",[t("li",[v._v("从本机"),t("code",[v._v("host")]),v._v("文件中查找是否存在该域名对应的"),t("code",[v._v("IP")]),v._v("映射。")])])]),v._v(" "),t("li",[t("code",[v._v("路由器缓存")]),v._v(" "),t("ul",[t("li",[v._v("从路由器缓存记录中查找是否存在该域名的解析记录，有则返回对应的"),t("code",[v._v("IP")]),v._v("映射。")])])]),v._v(" "),t("li",[t("code",[v._v("ISP(互联网服务提供商) DNS缓存")]),v._v(" "),t("ul",[t("li",[v._v("以上三种方式属于本地查询，如果还是未找到则进入"),t("code",[v._v("ISP DNS缓存")]),v._v("中查找。就比如你用的网络是联通的，那就进入联通的"),t("code",[v._v("DNS缓存服务器")]),v._v("中查找。")])])]),v._v(" "),t("li",[t("code",[v._v("根域名服务器")]),v._v(" "),t("ul",[t("li",[v._v("全球仅存在13台根域名服务器，1台主根域名服务器，12台辅根域名服务器。以上方式都未成功，则进入根域名服务器，根域名服务器收到请求后会查询区域文件记录，若不存在则将其管辖范围下的主域名服务器（如"),t("code",[v._v(".com")]),v._v("）的"),t("code",[v._v("IP")]),v._v("地址发送给客户端。")])])]),v._v(" "),t("li",[t("code",[v._v("主域名服务器")]),v._v(" "),t("ul",[t("li",[v._v("本地"),t("code",[v._v("DNS服务器")]),v._v("向根域名服务器返回的主域名服务器发起请求，主域名服务器收到请求后，查询自己缓存，若没有则返回自己下一级域名服务器"),t("code",[v._v("IP")]),v._v("地址，若还是未找到，就重复该步骤直到找到该域名对应的"),t("code",[v._v("IP")]),v._v("地中。")])])]),v._v(" "),t("li",[t("code",[v._v("保存当前结果到缓存，并返回给客户端")]),v._v(" "),t("ul",[t("li",[v._v("客户端拿到"),t("code",[v._v("IP地址")]),v._v("请求对应资源。")])])])]),v._v(" "),t("h3",{attrs:{id:"缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[v._v("#")]),v._v(" 缓存")]),v._v(" "),t("blockquote",[t("p",[v._v("强缓存通过返回头的"),t("code",[v._v("cache-control")]),v._v("、"),t("code",[v._v("expires")]),v._v("判断")])]),v._v(" "),t("blockquote",[t("p",[v._v("对比缓存通过首部的"),t("code",[v._v("ETag")]),v._v("、"),t("code",[v._v("last-modified")]),v._v("判断")])]),v._v(" "),t("h4",{attrs:{id:"强缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[v._v("#")]),v._v(" 强缓存")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("Expires是一个绝对时间，即服务器时间。浏览器检查当前时间，如果还没到失效时间就直接使用缓存文件。但是该方法存在一个问题：服务器时间与客户端时间可能不一致。因此该字段已经很少使用。")])]),v._v(" "),t("li",[t("p",[v._v("cache-control中的max-age保存一个相对时间。例如Cache-Control: max-age = 484200，表示浏览器收到文件后，缓存在484200s内均有效。 如果同时存在cache-control和Expires，浏览器总是优先使用cache-control。")])])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[v._v("指令")]),v._v(" "),t("th",{staticStyle:{"text-align":"center"}},[v._v("参数")]),v._v(" "),t("th",{staticStyle:{"text-align":"center"}},[v._v("说明")])])]),v._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[v._v("private")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("无")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("表明响应只能被单个用户缓存，不能作为共享缓存（即代理服务器不能缓存它）")])]),v._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[v._v("public")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("可省略")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("表明响应可以被任何对象（包括：发送请求的客户端，代理服务器，等等）缓存")])]),v._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[v._v("no-cache")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("可省略")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("缓存前必需确认其有效性")])]),v._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[v._v("no-store")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("无")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("不缓存请求或响应的任何内容")])]),v._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[v._v("max-age=(s)")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("必须")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("响应的最大值")])])])]),v._v(" "),t("ul",[t("li",[t("code",[v._v("Pragma")])])]),v._v(" "),t("p",[t("code",[v._v("Pragma")]),v._v("是"),t("code",[v._v("HTTP/1.1")]),v._v("之前版本遗留的通用首部字段，仅作为"),t("code",[v._v("于HTTP/1.0")]),v._v("的向后兼容而使用。虽然它是一个通用首部，但是它在响应报文中时的行为没有规范，依赖于浏览器的实现。"),t("code",[v._v("RFC")]),v._v("中该字段只有"),t("code",[v._v("no-cache")]),v._v("一个可选值，会通知浏览器不直接使用缓存，要求向服务器发请求校验新鲜度。因为它优先级最高，当存在时一定不会命中强缓存。")]),v._v(" "),t("blockquote",[t("p",[v._v("如果响应报文首部的"),t("code",[v._v("expires")]),v._v("的时间大于请求的时间或者"),t("code",[v._v("max-age")]),v._v("不为0并且"),t("code",[v._v("cache-control")]),v._v("设置的值不为"),t("code",[v._v("no-cache")]),v._v("或者"),t("code",[v._v("no-store")]),v._v("，同时请求报文首部不存在"),t("code",[v._v("Pragma")]),v._v("字段的时候才会命中强缓存。")])]),v._v(" "),t("h4",{attrs:{id:"对比缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对比缓存"}},[v._v("#")]),v._v(" 对比缓存")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("last-modified")]),v._v("是第一次请求资源时，服务器返回的字段，表示最后一次更新的时间。下一次浏览器请求资源时就发送"),t("code",[v._v("if-modified-since")]),v._v("字段。服务器用本地"),t("code",[v._v("Last-modified")]),v._v("时间与"),t("code",[v._v("if-modified-since")]),v._v("时间比较，如果不一致则认为缓存已过期并返回新资源给浏览器；如果时间一致则发送"),t("code",[v._v("304")]),v._v("状态码，让浏览器继续使用缓存。")]),v._v(" "),t("li",[t("code",[v._v("Etag")]),v._v("：资源的实体标识（哈希字符串），当资源内容更新时，"),t("code",[v._v("Etag")]),v._v("会改变。服务器会判断"),t("code",[v._v("Etag")]),v._v("是否发生变化，如果变化则返回新资源，否则返回304。")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://my-blog-1257398419.cos.ap-chengdu.myqcloud.com/medias/blogImage/%E5%9B%BE%E8%A7%A3%E7%BC%93%E5%AD%98.png",alt:"图解缓存"}})]),v._v(" "),t("h3",{attrs:{id:"tcp三次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp三次握手"}},[v._v("#")]),v._v(" TCP三次握手")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://my-blog-1257398419.cos.ap-chengdu.myqcloud.com/medias/blogImage/%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B.png",alt:"TCP三次握手图解"}})]),v._v(" "),t("p",[v._v("由上图我们可以清晰的看到"),t("code",[v._v("TCP")]),v._v("三次握手的详细过程。")]),v._v(" "),t("ul",[t("li",[v._v("首先是由客户端发送一个建立连接的请求，"),t("code",[v._v("SYN")]),v._v("置为1(表示要建立连接)，生成一个随机数"),t("code",[v._v("seq=x")]),v._v("，进入"),t("code",[v._v("SYN_SEND")]),v._v("状态")]),v._v(" "),t("li",[v._v("服务端接收到请求，首选确认"),t("code",[v._v("ack=x+1")]),v._v("，将"),t("code",[v._v("SYN")]),v._v("置为1，"),t("code",[v._v("ACK")]),v._v("置为1，也生成一个随机数"),t("code",[v._v("seq=y")]),v._v("，进入"),t("code",[v._v("SYN_RECV")]),v._v("；")]),v._v(" "),t("li",[v._v("客户端收到请求后，发送确认包"),t("code",[v._v("ACK=y+1")]),v._v(",服务器接收到确认包，连接建立成功，客户端和服务器进入"),t("code",[v._v("ESTABLISHED")]),v._v("状态。")])]),v._v(" "),t("p",[v._v("服务器接收到客户端的"),t("code",[v._v("http")]),v._v("请求后会将该"),t("code",[v._v("http")]),v._v("请求封装成一个"),t("code",[v._v("Request")]),v._v("对象，并通过不同的"),t("code",[v._v("web")]),v._v("服务器处理，处理完结果以"),t("code",[v._v("Response")]),v._v("对象返回给客户端，主要内容为"),t("code",[v._v("状态码")]),v._v("、"),t("code",[v._v("请求头")]),v._v("、"),t("code",[v._v("响应报文")]),v._v("三个部分。")]),v._v(" "),t("h3",{attrs:{id:"常见状态码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见状态码"}},[v._v("#")]),v._v(" 常见状态码")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[v._v("状态码")]),v._v(" "),t("th",{staticStyle:{"text-align":"center"}},[v._v("类别")]),v._v(" "),t("th",{staticStyle:{"text-align":"center"}},[v._v("原因短语")])])]),v._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[v._v("1xx")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("Informational（信息性状态码）")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("接受的请求正在处理")])]),v._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[v._v("2xx")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("Success（成功状态码）")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("请求正常处理完毕")])]),v._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[v._v("3xx")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("Redirection（重定向状态码）")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("需要进行附加操作以完成请求")])]),v._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[v._v("4xx")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("Client Error（客户端错误状态码）")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("服务器无法处理请求")])]),v._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[v._v("5xx")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("Server Error（服务器错误状态码")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("服务器处理请求出错")])])])]),v._v(" "),t("h3",{attrs:{id:"页面渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#页面渲染"}},[v._v("#")]),v._v(" 页面渲染")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://my-blog-1257398419.cos.ap-chengdu.myqcloud.com/medias/blogImage/domTree.png",alt:"domTree"}})]),v._v(" "),t("p",[t("img",{attrs:{src:"https://my-blog-1257398419.cos.ap-chengdu.myqcloud.com/medias/blogImage/cssTree.png",alt:"cssTree"}})]),v._v(" "),t("h4",{attrs:{id:"基本流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本流程"}},[v._v("#")]),v._v(" 基本流程")]),v._v(" "),t("ul",[t("li",[v._v("解析"),t("code",[v._v("HTML")]),v._v("文件，生成"),t("code",[v._v("DOM")]),v._v("树")]),v._v(" "),t("li",[v._v("解析"),t("code",[v._v("CSS")]),v._v("文件，生成"),t("code",[v._v("CSS")]),v._v("树")]),v._v(" "),t("li",[v._v("合并"),t("code",[v._v("DOM")]),v._v("树和"),t("code",[v._v("CSS")]),v._v("树，生成渲染树")]),v._v(" "),t("li",[v._v("布局和绘制页面（回流，重绘）")])]),v._v(" "),t("p",[v._v("浏览器解析"),t("code",[v._v("HTML")]),v._v("文件自上而下解析遇到"),t("code",[v._v("CSS")]),v._v("文件会阻塞页面渲染和"),t("code",[v._v("JS")]),v._v("文件的执行，"),t("code",[v._v("CSS")]),v._v("文件不会阻塞"),t("code",[v._v("js")]),v._v("文件加载，他们是可以并行的，如果"),t("code",[v._v("js")]),v._v("文件具有"),t("code",[v._v("defer")]),v._v("(IE)或者"),t("code",[v._v("async")]),v._v("属性时，该"),t("code",[v._v("js")]),v._v("文件加载完就立即执行，不会受到"),t("code",[v._v("css")]),v._v("加载的影响。")]),v._v(" "),t("blockquote",[t("p",[v._v("一旦页面"),t("code",[v._v("DOM")]),v._v("树生成接解析完毕就会触发"),t("code",[v._v("DOMContentLoaded")]),v._v("（"),t("code",[v._v("PS:IE用onreadystatechange")]),v._v("），就可以通过"),t("code",[v._v("document.addEventListener('DOMContentLoaded',callback,false)")]),v._v("来进行绑定监听事件。")])]),v._v(" "),t("h4",{attrs:{id:"回流和重绘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回流和重绘"}},[v._v("#")]),v._v(" 回流和重绘")]),v._v(" "),t("p",[v._v("概念")]),v._v(" "),t("ul",[t("li",[v._v("回流")])]),v._v(" "),t("blockquote",[t("p",[t("code",[v._v("Reflow")]),v._v("，又叫"),t("code",[v._v("layout")]),v._v("，一般意味着"),t("code",[v._v("DOM")]),v._v("元素内容、结构、位置或尺寸发生变化，需要重新计算样式和渲染树，这个过程叫做回流。")])]),v._v(" "),t("ul",[t("li",[v._v("重绘")])]),v._v(" "),t("blockquote",[t("p",[t("code",[v._v("Repaint")]),v._v("，一般是因为元素一些外观上的改变（例如：背景色，边框颜色，字体颜色等），此时只要应用新样式绘制到元素上就行了，这个过程叫重绘。")])]),v._v(" "),t("p",[v._v("所以回流比重绘的代价高的多得多，每个节点都有"),t("code",[v._v("reflow")]),v._v("方法，一个节点产生回流，可能会导致子元素产生回流，甚至会导致父节点或者兄弟节点产生回流。")]),v._v(" "),t("p",[v._v("触发回流的一些操作")]),v._v(" "),t("ul",[t("li",[v._v("删除、新增"),t("code",[v._v("DOM")]),v._v("节点会触发"),t("code",[v._v("Repaint")]),v._v("和"),t("code",[v._v("Reflow")])]),v._v(" "),t("li",[v._v("操作节点位置改变或给节点添加一个动画")]),v._v(" "),t("li",[v._v("改变"),t("code",[v._v("CSS")]),v._v("一些样式（如：改变节点尺寸等）")]),v._v(" "),t("li",[v._v("窗口大小改变")]),v._v(" "),t("li",[v._v("修改网页默认字体")]),v._v(" "),t("li",[v._v("网页初始化的时候")]),v._v(" "),t("li",[t("code",[v._v("js")]),v._v("获取精确"),t("code",[v._v("CSS")]),v._v("样式的时候（如："),t("code",[v._v("getComputedStyle")]),v._v("，"),t("code",[v._v("scroll")]),v._v("家族，"),t("code",[v._v("offset")]),v._v("家族,"),t("code",[v._v("client")]),v._v("家族等，使用这些方法将强制刷新队列)")])]),v._v(" "),t("blockquote",[t("p",[v._v("会产生上面的问题的根源还是现代浏览器都比较聪明，他们通过队列化修改并批量执行来优化重排的过程，浏览器会将修改操作都放入一个队列当中，等到过了一段时间或者达到一个阈值才会清空队列。")])]),v._v(" "),t("p",[v._v("那么我们为了减少回流优化页面性能又该采取什么样的措施呢？")]),v._v(" "),t("ul",[t("li",[v._v("在需要对一个节点采用数次操作时可以先将该元素"),t("code",[v._v("display:none")]),v._v("，修改完之后再让他显示，这样只会触发两次重排")]),v._v(" "),t("li",[v._v("需要使用js操作多个节点时可以借用"),t("code",[v._v("DocumentFragment")]),v._v("来进行批量操作后再插回页面")]),v._v(" "),t("li",[v._v("让需要被操作的节点先脱离标准文档流\n"),t("ul",[t("li",[t("code",[v._v("position:absolute(fixed)")])]),v._v(" "),t("li",[v._v("浮动")])])]),v._v(" "),t("li",[v._v("使用"),t("code",[v._v("cssText")]),v._v("。将需要操作的样式一次性合并然后作用到元素上。")])]),v._v(" "),t("p",[v._v("我们说了这么多的减少重绘、重排，好像还忘了一个神奇的东西。"),t("code",[v._v("bingo")]),v._v("，就是我们的"),t("code",[v._v("CSS3 GPU加速")]),v._v("啦！")]),v._v(" "),t("h4",{attrs:{id:"css3-gpu加速"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css3-gpu加速"}},[v._v("#")]),v._v(" CSS3 GPU加速")]),v._v(" "),t("p",[v._v("能触发GPU硬件加速的有如下几个属性：")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("transform")])]),v._v(" "),t("li",[t("code",[v._v("filter")])]),v._v(" "),t("li",[t("code",[v._v("opacity")])]),v._v(" "),t("li",[t("code",[v._v("Wall-change")])])]),v._v(" "),t("p",[v._v("他们的优点在于，在使用"),t("code",[v._v("transform filter opacity")]),v._v("属性实现动画时，不会触发重排和重绘;当然，在享受GPU硬件加速带来的好处的同时呢，我们也得考虑一个问题就是如果太多元素使用这个特性，将会出现内存内存占用过大，影响性能。")]),v._v(" "),t("h3",{attrs:{id:"tcp四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp四次挥手"}},[v._v("#")]),v._v(" TCP四次挥手")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://my-blog-1257398419.cos.ap-chengdu.myqcloud.com/medias/blogImage/%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B.png",alt:"TCP四次挥手"}})]),v._v(" "),t("blockquote",[t("p",[t("code",[v._v("FIN")]),v._v("代表断开连接标志位，"),t("code",[v._v("ACK")]),v._v("确认标志位，"),t("code",[v._v("seq")]),v._v("随机数，这里笔者就不多说了，类似于前面所述的三次握手")])]),v._v(" "),t("ul",[t("li",[v._v("首先客户端向服务器端发送一个"),t("code",[v._v("FIN=1")]),v._v("+"),t("code",[v._v("seq=u")]),v._v("标志位")]),v._v(" "),t("li",[v._v("服务端收到请求发送一个确认号"),t("code",[v._v("ACK=1")]),v._v("，其中"),t("code",[v._v("ack=u+1")]),v._v(","),t("code",[v._v("seq=v")])]),v._v(" "),t("li",[v._v("之后服务器再次向客户端发送一个"),t("code",[v._v("FIN=1")]),v._v("+"),t("code",[v._v("seq=w")]),v._v("+"),t("code",[v._v("ACK=1")]),v._v("+"),t("code",[v._v("ack=u+1")])]),v._v(" "),t("li",[v._v("客户端收到后，向服务端发送一个"),t("code",[v._v("ACK=1")]),v._v(","),t("code",[v._v("ack=w+1")]),v._v(","),t("code",[v._v("seq=w+1")])])]),v._v(" "),t("p",[v._v("到这里一次完整的"),t("code",[v._v("TCP")]),v._v("四次挥手就完结了，大家看完这个可能会有疑问，为什么是四次挥手而不是三次，为什么"),t("code",[v._v("FIN")]),v._v("和"),t("code",[v._v("ACK")]),v._v("并不是一起发送的，那么这里笔者就得说道说道了。")]),v._v(" "),t("p",[v._v("因为刚开始是客户端主动请求断开连接，这仅仅表示客户端没有数据传给服务端了，并不代表服务端的数据也传输完了，发送一个"),t("code",[v._v("ACK")]),v._v("确认标志位只是告诉客户端我知道了。")]),v._v(" "),t("p",[v._v("等到服务端数据也传输完了，才会出现第三次握手，也就是服务端主动发送一个"),t("code",[v._v("FIN+ACK")]),v._v("给客户端，告诉客户端我的数据也发送完了，我们分手吧，然后客户端收到了，再告诉服务端我知道了。至此，分手完毕。")]),v._v(" "),t("blockquote",[t("p",[v._v("笔者一次性巴拉巴拉这么多，可能大家会有点不好消化，可是笔者的初衷还是希望能够遇到一个知识点就解决它并延申一些相关知识点，这样比零散的查找会好得多。")])]),v._v(" "),t("blockquote",[t("p",[v._v("参考文章")])]),v._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/rennaiqian/article/details/79145122",target:"_blank",rel:"noopener noreferrer"}},[v._v("浏览器HTTP缓存机制"),t("OutboundLink")],1)]),v._v(" "),t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/daijinxue/p/6640153.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("从输入url到页面加载完成发生了什么？——前端角度"),t("OutboundLink")],1)]),v._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/tTU1EvLDeLFq5btqiK/article/details/84985576",target:"_blank",rel:"noopener noreferrer"}},[v._v("你真的了解回流和重绘吗?"),t("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=c.exports}}]);