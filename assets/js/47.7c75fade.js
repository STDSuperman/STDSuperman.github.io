(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{441:function(s,t,a){"use strict";a.r(t);var n=a(27),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("用来控制并发并且是中央集权的调度员，允许我们在发生计算时进行协调，例如 "),a("code",[s._v("setTimeout")]),s._v(" 或 "),a("code",[s._v("requestAnimationFrame")]),s._v(" 或其他。")]),s._v(" "),a("ul",[a("li",[s._v("调度器是一种数据结构。 它知道如何根据优先级或其他标准来存储任务和将任务进行排序。")]),s._v(" "),a("li",[s._v("调度器是执行上下文。 它表示在何时何地执行任务(举例来说，立即的，或另一种回调函数机制(比如 "),a("code",[s._v("setTimeout")]),s._v(" 或 "),a("code",[s._v("process.nextTick")]),s._v(")，或动画帧)。")]),s._v(" "),a("li",[s._v("调度器有一个(虚拟的)时钟。 调度器功能通过它的 "),a("code",[s._v("getter")]),s._v(" 方法 "),a("code",[s._v("now()")]),s._v(" 提供了“时间”的概念。在具体调度器上安排的任务将严格遵循该时钟所表示的时间。")])]),s._v(" "),a("p",[s._v("学到这相信大家也已经或多或少对"),a("code",[s._v("RxJS")]),s._v("有一定了解了，不知道大家有没有发现一个疑问，前面所展示的代码示例中有同步也有异步，而笔者却没有显示的控制他们的执行，他们的这套执行机制到底是什么呢？")]),s._v(" "),a("p",[s._v("其实他们的内部的调度就是靠的"),a("code",[s._v("Schedulers")]),s._v("来控制数据发送的时机，许多操作符会预设不同的"),a("code",[s._v("Scheduler")]),s._v("，所以我们不需要进行特殊处理他们就能良好的进行同步或异步运行。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" source "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Rx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Observable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("observer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    observer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    observer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    observer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    observer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("complete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'订阅前'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nsource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("observeOn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Rx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Scheduler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("async"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设为 async")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("subscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("next")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("error")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("err")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Error: '")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("complete")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'complete'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'订阅后'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 订阅前")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 订阅后")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// complete")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("从打印结果上来看，数据的发送时机的确已经由同步变成了异步，如果不进行调度方式修改，那么“订阅后”的打印应该是在数据发送完毕之后才会执行的。")]),s._v(" "),a("p",[s._v("看完示例之后我们再来研究这个调度器能做哪几种调度：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("queue")])]),s._v(" "),a("li",[a("code",[s._v("asap")])]),s._v(" "),a("li",[a("code",[s._v("async")])]),s._v(" "),a("li",[a("code",[s._v("animationFrame")])])]),s._v(" "),a("h4",{attrs:{id:"queue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#queue"}},[s._v("#")]),s._v(" queue")]),s._v(" "),a("p",[s._v("将每个下一个任务放在队列中，而不是立即执行")]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("queue")]),s._v(" 延迟使用调度程序时，其行为与 "),a("code",[s._v("async")]),s._v(" 调度程序相同。")])]),s._v(" "),a("p",[s._v("当没有延迟使用时，它将同步安排给定的任务-在安排好任务后立即执行。但是，当递归调用时（即在已调度的任务内部），将使用队列调度程序调度另一个任务，而不是立即执行，该任务将被放入队列并等待当前任务完成。")]),s._v(" "),a("p",[s._v("这意味着，当您使用 "),a("code",[s._v("queue")]),s._v(" 调度程序执行任务时，您确定它会在该调度程序调度的其他任何任务开始之前结束。")]),s._v(" "),a("blockquote",[a("p",[s._v("这个同步与我们平常理解的同步可能不太一样，笔者当时也都困惑了一会。")])]),s._v(" "),a("p",[s._v("还是用一个官方的例子来讲解这种调度方式是怎么理解吧：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" queueScheduler "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rxjs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nqueueScheduler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("schedule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  queueScheduler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("schedule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'second'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'first'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("blockquote",[a("p",[s._v("我们无需关注陌生的函数调用，我们这里着重于看这种调度方式与平常的同步调度的区别。")])]),s._v(" "),a("p",[s._v("首先我们调用"),a("code",[s._v("queueScheduler")]),s._v("的"),a("code",[s._v("schedule")]),s._v("方法开始执行，然后函数内部又同样再以同样的方式调用（这里也可以改成递归，不过这里用这个示例去理解可能会好一点），并且传入一个函数，打印"),a("code",[s._v("second")]),s._v("。")]),s._v(" "),a("p",[s._v("然后继续看下面的语句，一个普通的"),a("code",[s._v("console.log('first')")]),s._v("，然后我们再来看看打印结果：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// first")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// second")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("是不是有点神奇，如果没看明白为啥的，可以再回头看看前面"),a("code",[s._v("queue")]),s._v("对于递归执行的处理方式。也就是说如果递归调用，它内部会维护一个队列，然后等待先加入队列的任务先执行完成（也就是上面的"),a("code",[s._v("console.log('first')")]),s._v("执行完才会执行"),a("code",[s._v("console.log('second')")]),s._v("，因为"),a("code",[s._v("console.log('second')")]),s._v("这个任务是后加入该队列的）。")]),s._v(" "),a("h4",{attrs:{id:"asap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asap"}},[s._v("#")]),s._v(" asap")]),s._v(" "),a("p",[s._v("内部基于"),a("code",[s._v("Promise")]),s._v("实现（"),a("code",[s._v("Node")]),s._v("端采用"),a("code",[s._v("process.nextTick")]),s._v("），他会使用可用的最快的异步传输机制，如果不支持"),a("code",[s._v("Promise")]),s._v("或"),a("code",[s._v("process.nextTick")]),s._v("或者"),a("code",[s._v("Web Worker")]),s._v("的 "),a("code",[s._v("MessageChannel")]),s._v("也可能会调用"),a("code",[s._v("setTimeout")]),s._v("方式进行调度。")]),s._v(" "),a("h4",{attrs:{id:"async"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async"}},[s._v("#")]),s._v(" async")]),s._v(" "),a("p",[s._v("与"),a("code",[s._v("asap")]),s._v("方式很像，只不过内部采用"),a("code",[s._v("setInterval")]),s._v("进行调度，大多用于基于时间的操作符。")]),s._v(" "),a("h4",{attrs:{id:"animationframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#animationframe"}},[s._v("#")]),s._v(" animationFrame")]),s._v(" "),a("p",[s._v("从名字看其实相信大家已经就能略知一二了，内部基于"),a("code",[s._v("requestAnimationFrame")]),s._v("来实现调度，所以执行的时机将与"),a("code",[s._v("window.requestAnimationFrame")]),s._v("保持一致，适用于需要频繁渲染或操作动画的场景。")])])}),[],!1,null,null,null);t.default=e.exports}}]);