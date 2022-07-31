(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{691:function(e,t,v){"use strict";v.r(t);var _=v(29),r=Object(_.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("p",[v("a",{attrs:{href:"https://juejin.cn/post/6961222829979697165",target:"_blank",rel:"noopener noreferrer"}},[e._v("最全的 Vue 面试题+详解答案"),v("OutboundLink")],1)]),e._v(" "),v("h2",{attrs:{id:"vue-和-原生-js-jquery-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-和-原生-js-jquery-的区别"}},[e._v("#")]),e._v(" Vue 和 原生 js(jquery) 的区别？")]),e._v(" "),v("p",[e._v("原生 js、jQuery：jQuery 只是对原生 js 的 API 进行了封装，操作更加方便，但是数据和视图层没有分开，本质上还是要操作 DOM 实现逻辑。")]),e._v(" "),v("p",[e._v("vue：不仅对 js 的 API 实现了封装，还实现了其他功能，使数据和视图层分开，通过数据驱动，操作的是数据，而不是 DOM，能让开发者更加关注到数据上")]),e._v(" "),v("h2",{attrs:{id:"说说-vue-的优点和缺点-或者项目为什么选择使用-vue"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#说说-vue-的优点和缺点-或者项目为什么选择使用-vue"}},[e._v("#")]),e._v(" 说说 Vue 的优点和缺点(或者项目为什么选择使用 Vue)?")]),e._v(" "),v("p",[v("strong",[e._v("优点")]),e._v("：")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("视图数据分离，"),v("code",[e._v("声明式编码")]),e._v("，让操作者"),v("strong",[e._v("不再直接操作 DOM 对象")]),e._v("，有更多的去时间思考业务逻辑")])]),e._v(" "),v("li",[v("p",[e._v("传统方式编写，依赖关系混乱，代码复用率不高。"),v("code",[e._v("组件化")]),e._v("可以"),v("strong",[e._v("提高代码可阅读性以及代码复用率")])])]),e._v(" "),v("li",[v("p",[v("code",[e._v("虚拟DOM")]),e._v("+优秀的"),v("code",[e._v("diff算法")]),e._v("，尽量"),v("strong",[e._v("复用 DOM 节点")])])])]),e._v(" "),v("p",[e._v("4."),v("code",[e._v("渐进式框架")]),e._v("，只需一个轻量小巧的"),v("code",[e._v("核心库")]),e._v("，可以引入各式各样的"),v("code",[e._v("Vue插件")]),e._v("进行扩展。")]),e._v(" "),v("p",[v("strong",[e._v("缺点")]),e._v("：")]),e._v(" "),v("p",[e._v("Vue 是"),v("code",[e._v("单页面应用")]),e._v("对于搜索引擎不友好，影响"),v("code",[e._v("SEO")]),e._v("，比如两个 Vue 页面(路由)它的路径是：index.html#aaa 和 index.html#bbb，但对于搜索引擎来说就是一个页面 index.html,这时搜索引擎就无法收录你的页面")]),e._v(" "),v("h2",{attrs:{id:"vue2-和-vue3-的响应式区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue2-和-vue3-的响应式区别"}},[e._v("#")]),e._v(" Vue2 和 Vue3 的响应式区别？")]),e._v(" "),v("p",[v("strong",[e._v("Vue2")]),e._v(":")]),e._v(" "),v("p",[e._v("基于"),v("code",[e._v("Object.defineProperty")]),e._v("，"),v("strong",[e._v("不具备监听数组的能力")]),e._v("，需要"),v("strong",[e._v("重新定义数组的原型")]),e._v("来达到响应式")]),e._v(" "),v("p",[v("code",[e._v("Object.defineProperty")]),e._v(" "),v("strong",[e._v("无法检测到对象属性的添加和删除")])]),e._v(" "),v("p",[e._v("由于 Vue 会在"),v("strong",[e._v("初始化实例时")]),e._v("对属性执行"),v("code",[e._v("getter")]),e._v("/"),v("code",[e._v("setter")]),e._v("转化，所有属性必须在 data 对象上存在才能让 Vue 将它转换为响应式")]),e._v(" "),v("p",[v("code",[e._v("深度监听")]),e._v("需要一次性递归，对性能影响比较大")]),e._v(" "),v("p",[v("strong",[e._v("Vue3")]),e._v(":")]),e._v(" "),v("p",[e._v("基于"),v("code",[e._v("Proxy")]),e._v("和"),v("code",[e._v("Reflect")]),e._v("，"),v("strong",[e._v("可以原生监听数组，可以监听对象属性的添加和删除")])]),e._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),v("ul",[v("li",[v("p",[v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proxy"),v("OutboundLink")],1),e._v("对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。")])]),e._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reflect"),v("OutboundLink")],1),e._v("是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与 proxy handlers (en-US)的方法相同。Reflect 不是一个函数对象，因此它是不可构造的。\n:::")])])]),e._v(" "),v("p",[e._v("不需要一次性遍历"),v("code",[e._v("data")]),e._v("的属性，可以显著提高性能")]),e._v(" "),v("p",[e._v("因为"),v("code",[e._v("Proxy")]),e._v("是"),v("code",[e._v("ES6")]),e._v("新增的属性，有些浏览器还不支持,只能兼容到"),v("code",[e._v("IE11")])]),e._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[e._v("参考")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://juejin.cn/post/6982001553540382733",target:"_blank",rel:"noopener noreferrer"}},[e._v("你真的了解 vue2.0 和 vue3.0 响应式原理区别吗？"),v("OutboundLink")],1)])])]),e._v(" "),v("h2",{attrs:{id:"vue-router-有几种路由方式-区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-有几种路由方式-区别"}},[e._v("#")]),e._v(" vue-router 有几种路由方式？区别？")]),e._v(" "),v("p",[v("code",[e._v("hash")]),e._v("：url#后面的东西就是 hash，hash 虽然出现再 URL 中，但不会被包含再 HTTP 中，对后端完全没有影响，因此改变 hash 不会重新加载页面（兼容性好，但不美观）")]),e._v(" "),v("p",[v("code",[e._v("history")]),e._v(":利用 HTML5 History 中新增的 pushState()和 replaceState()当调用它们修改浏览器的历史记录栈后，虽然当前 url 改变了，但浏览器不会刷新页面。这就为单页面应用前端路由“更新视图但不重新请求页面”提供了基础，虽然美观，但是刷新会出现 404，需要后端进行配置")]),e._v(" "),v("h2",{attrs:{id:"讲一下-vuex-的工作原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#讲一下-vuex-的工作原理"}},[e._v("#")]),e._v(" 讲一下 VueX 的工作原理？")]),e._v(" "),v("ol",[v("li",[e._v("Vuex 本质是一个对象")]),e._v(" "),v("li",[e._v("Vuex 对象有两个属性，一个是 install 方法，一个是 Store 这个类")]),e._v(" "),v("li",[e._v("install 方法的作用是将 store 这个实例挂载到所有的组件上，注意是同一个 store 实例。")]),e._v(" "),v("li",[e._v("Store 这个类拥有 commit，dispatch 这些方法，Store 类里将传入的 state 包装成 data，作为 new Vue 的参数，从而实现了 state 值的响应式。")])]),e._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[e._v("参考")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://juejin.cn/post/6855474001838342151",target:"_blank",rel:"noopener noreferrer"}},[e._v("手写 Vuex 核心原理，再也不怕面试官问我 Vuex 原理"),v("OutboundLink")],1)])]),e._v(" "),v("h2",{attrs:{id:"vue-里面-v-if、v-show-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-里面-v-if、v-show-的区别"}},[e._v("#")]),e._v(" Vue 里面 v-if、v-show 的区别")]),e._v(" "),v("ul",[v("li",[e._v("v-if 在编译过程中会被转化成三元表达式,条件不满足时不渲染此节点。")]),e._v(" "),v("li",[e._v("v-show 会被编译成指令，条件不满足时控制样式将对应节点隐藏 （display:none）")])]),e._v(" "),v("p",[e._v("使用场景")]),e._v(" "),v("p",[e._v("v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景\nv-show 适用于需要非常频繁切换条件的场景")]),e._v(" "),v("h2",{attrs:{id:"computed-和-watch-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#computed-和-watch-的区别"}},[e._v("#")]),e._v(" computed 和 watch 的区别")]),e._v(" "),v("h4",{attrs:{id:"计算属性-computed"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#计算属性-computed"}},[e._v("#")]),e._v(" "),v("strong",[e._v("计算属性 computed :")])]),e._v(" "),v("ol",[v("li",[v("code",[e._v("支持缓存")]),e._v("，只有"),v("code",[e._v("依赖数据发生改变")]),e._v("，才会重新进行计算")]),e._v(" "),v("li",[v("code",[e._v("不支持异步")]),e._v("，当 computed 内有异步操作时无效，无法监听数据的变化")]),e._v(" "),v("li",[e._v("computed 属性值会"),v("code",[e._v("默认走缓存")]),e._v("，计算属性是基于它们的响应式依赖进行缓存的，也就是"),v("code",[e._v("基于data中")]),e._v("声明过或者"),v("code",[e._v("父组件传递的props中的数据")]),e._v("通过计算得到的值，只在相关响应式依赖发生改变时它们才会重新求值。")]),e._v(" "),v("li",[e._v("如果一个属性是由其他属性计算而来的，这个属性依赖其他属性，是一个多对一或者一对一，一般用 computed")]),e._v(" "),v("li",[e._v("如果 computed 属性属性值是函数，那么默认会走 get 方法；函数的"),v("code",[e._v("返回值就是属性的属性值")]),e._v("；在 computed 中的，属性都有一个 get 和一个 set 方法，当数据变化时，调用 set 方法")])]),e._v(" "),v("h4",{attrs:{id:"侦听属性-watch"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#侦听属性-watch"}},[e._v("#")]),e._v(" "),v("strong",[e._v("侦听属性 watch：")])]),e._v(" "),v("ol",[v("li",[v("code",[e._v("不支持缓存，数据发生改变，会直接触发")]),e._v("相应的操作")]),e._v(" "),v("li",[v("code",[e._v("watch支持异步")])]),e._v(" "),v("li",[e._v("监听的函数接收"),v("code",[e._v("两个参数，第一个参数是最新的值；第二个参数是输入之前的值")])]),e._v(" "),v("li",[e._v("当一个属性发生变化时，需要执行对应的操作；"),v("code",[e._v("一对多")])]),e._v(" "),v("li",[e._v("监听数据必须是"),v("code",[e._v("data中声明过")]),e._v("或者父组件传递过来的"),v("code",[e._v("props中的数据")]),e._v("，当数据变化时，触发其他操作，函数有两个参数，\n"),v("ol",[v("li",[v("code",[e._v("immediate")]),e._v("：组件加载立即触发回调函数执行")]),e._v(" "),v("li",[v("code",[e._v("deep")]),e._v(": 深度监听，为了发现"),v("strong",[e._v("对象内部值")]),e._v("的变化，复杂类型的数据时使用，例如数组中的对象内容的改变，注意监听数组的变动不需要这么做。注意：deep 无法监听到数组的变动(通过数字下标修改数组中元素的值)和对象的新增，参考 vue 如何监测数据的表动,只有以响应式的方式触发才会被监听到")])])])]),e._v(" "),v("p",[e._v("作者：小只前端攻城狮\n链接：https://juejin.cn/post/6977363418273562660\n来源：稀土掘金\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。")]),e._v(" "),v("h2",{attrs:{id:"vue-组件通讯有哪几种方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-组件通讯有哪几种方式"}},[e._v("#")]),e._v(" Vue 组件通讯有哪几种方式")]),e._v(" "),v("ul",[v("li",[v("p",[v("code",[e._v("props")]),e._v(" 和 "),v("code",[e._v("$emit")]),e._v(":父组件向子组件传递数据是通过 "),v("code",[e._v("props")]),e._v(" 传递的，子组件给父组件传递数据是通过"),v("code",[e._v("$emit")]),e._v(" 触发事件来做到的")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("$parent")]),e._v(","),v("code",[e._v("$children")]),e._v(" 获取当前组件的父组件和当前组件的子组件")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("$attrs")]),e._v(" 和"),v("code",[e._v("$listeners")]),e._v(",适用于爷孙组件通讯，具体用法参考： "),v("a",{attrs:{href:"https://zfhblog.top/qian-duan-kai-fa/qian-duan-kuang-jia/vue.js/vuezu-jian-hua-bian-cheng.html#inheritattrs-attrs-listeners",target:"_blank",rel:"noopener noreferrer"}},[e._v("inheritattrs-attrs-listeners"),v("OutboundLink")],1)])]),e._v(" "),v("li",[v("p",[e._v("父组件中通过 "),v("code",[e._v("provide")]),e._v(" 来提供变量，然后在子组件中通过"),v("code",[e._v("inject")]),e._v("来注入变量。(官方不推荐在实际业务中使用，但是写组件库时很常用)")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("$refs")]),e._v(" 获取组件实例")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("envetBus")]),e._v(" 任意组件数据传递 这种情况下可以使用全局事件总线的方式")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("vueX")]),e._v("状态管理")])])]),e._v(" "),v("h2",{attrs:{id:"谈一下对-vuex-的理解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#谈一下对-vuex-的理解"}},[e._v("#")]),e._v(" 谈一下对 vuex 的理解")]),e._v(" "),v("p",[e._v("vuex 是专门为 vue 提供的"),v("code",[e._v("全局状态管理系统")]),e._v("，用于多个组件中"),v("code",[e._v("数据共享")]),e._v("、"),v("code",[e._v("数据缓存")]),e._v(" （无法持久化、内部核心原理是通过创造一个全局实例 new Vue）")]),e._v(" "),v("p",[e._v("主要包括以下几个模块：")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("State：定义了应用状态的数据结构，可以在这里设置默认的初始状态。")])]),e._v(" "),v("li",[v("p",[e._v("Getter：getters 可以认为是 store 的计算属性,就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。")])]),e._v(" "),v("li",[v("p",[e._v("Mutation：是唯一更改 store 中状态的方法，且必须是同步函数。")])]),e._v(" "),v("li",[v("p",[e._v("Action：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作。")])]),e._v(" "),v("li",[v("p",[e._v("Module：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中。("),v("code",[e._v("命名空间")]),e._v(")")])])]),e._v(" "),v("h2",{attrs:{id:"vuex-中-mapstate、mapgetters、mapmutations、mapactions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vuex-中-mapstate、mapgetters、mapmutations、mapactions"}},[e._v("#")]),e._v(" Vuex 中 mapState、mapGetters、mapMutations、mapActions")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://zfhblog.top/qian-duan-kai-fa/qian-duan-kuang-jia/vue.js/vuex.html#%E5%9B%9B%E4%B8%AAmap%E6%96%B9%E6%B3%95%E7%9A%84%E4%BD%BF%E7%94%A8",target:"_blank",rel:"noopener noreferrer"}},[e._v("四个 map 方法的使用"),v("OutboundLink")],1)]),e._v(" "),v("h2",{attrs:{id:"vue-set-和-vm-set"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-set-和-vm-set"}},[e._v("#")]),e._v(" Vue.set()和 vm.$set()")]),e._v(" "),v("p",[e._v("可以使原来"),v("code",[e._v("对象")]),e._v("和"),v("code",[e._v("数组")]),e._v("的"),v("strong",[e._v("无法监听")]),e._v("变的可监听，"),v("strong",[e._v("使数据正常渲染")]),e._v("。")]),e._v(" "),v("h2",{attrs:{id:"nexttick-是怎么可以获取到更新后的-dom-的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#nexttick-是怎么可以获取到更新后的-dom-的"}},[e._v("#")]),e._v(" $nexttick 是怎么可以获取到更新后的 dom 的?")]),e._v(" "),v("p",[e._v("vue 是依靠数据驱动视图更新的，该更新的过程是异步的。即：当侦听到你的数据发生变化时， Vue 将开启一个队列(该队列被 Vue 官方称为异步更新队列)。视图需要等队列中所有数据变化完成之后，再统一进行更新。")]),e._v(" "),v("p",[e._v("$nextTick(callback),这里的回调函数( callback)将在数据更新完成，视图更新完毕之后被调用")]),e._v(" "),v("h2",{attrs:{id:"vue-router-中-push-和-replace-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-中-push-和-replace-的区别"}},[e._v("#")]),e._v(" vue-router 中 push 和 replace 的区别")]),e._v(" "),v("p",[e._v("1.this.$router.push()")]),e._v(" "),v("p",[e._v("描述：跳转到不同的 url，但这个方法"),v("strong",[e._v("会向 history 栈添加一个记录")]),e._v("，点击后退会"),v("strong",[e._v("返回到上一个页面")]),e._v("。")]),e._v(" "),v("p",[e._v("2.this.$router.replace()")]),e._v(" "),v("p",[e._v("描述：同样是跳转到指定的 url，但是这个方法"),v("strong",[e._v("不会向 history 里面添加新的记录")]),e._v("，点击返回，"),v("strong",[e._v("会跳转到上上一个页面")]),e._v("。"),v("strong",[e._v("上一个记录是不存在的")]),e._v("。")]),e._v(" "),v("p",[e._v("3.this.$router.go(n)")]),e._v(" "),v("p",[e._v("相对于当前页面向前或向后跳转多少个页面,类似 window.history.go(n)。n 可为正数可为负数。正数返回上一个页面")]),e._v(" "),v("h2",{attrs:{id:"项目中-vue-router-设置的是-history-模式-部署到服务器上要怎么处理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#项目中-vue-router-设置的是-history-模式-部署到服务器上要怎么处理"}},[e._v("#")]),e._v(" 项目中 vue-router 设置的是 history 模式，部署到服务器上要怎么处理")]),e._v(" "),v("p",[e._v("我在 koa2 项目中,使用中间件 "),v("a",{attrs:{href:"https://www.npmjs.com/package/koa2-connect-history-api-fallback",target:"_blank",rel:"noopener noreferrer"}},[e._v("koa2-connect-history-api-fallback "),v("OutboundLink")],1),e._v(",它用于处理 vue-router 使用 history 模式返回 404 的问题")]),e._v(" "),v("h2",{attrs:{id:"mvvm-和-mvc-区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mvvm-和-mvc-区别"}},[e._v("#")]),e._v(" mvvm 和 mvc 区别？")]),e._v(" "),v("p",[e._v("几乎所有的 App 都只干这么一件事：将数据展示给用户看，并处理用户对界面的操作。\nMVC 的思想：一句话描述就是 Controller 负责将 Model 的数据用 View 显示出来，换句话说就是在 Controller 里面把 Model 的数据赋值给 View。")]),e._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[e._v("参考")]),e._v(" "),v("ul",[v("li",[v("p",[v("a",{attrs:{href:"https://blog.csdn.net/qq_42068550/article/details/89480350",target:"_blank",rel:"noopener noreferrer"}},[e._v("MVC 和 MVVM 的区别"),v("OutboundLink")],1)])]),e._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://www.jianshu.com/p/ad159a153c3c",target:"_blank",rel:"noopener noreferrer"}},[e._v("MVC、MVP、MVVM 的区别及联系"),v("OutboundLink")],1)])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);