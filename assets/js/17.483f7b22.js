(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{635:function(s,e,t){"use strict";t.r(e);var a=t(29),i=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"基础概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础概念"}},[s._v("#")]),s._v(" 基础概念")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("flex")]),s._v(" 容器：采用 "),t("code",[s._v("flex")]),s._v(" 布局的元素，称为 "),t("code",[s._v("flex")]),s._v(" 容器")]),s._v(" "),t("li",[t("code",[s._v("flex")]),s._v("项目："),t("code",[s._v("flex")]),s._v(" 容器的所有"),t("strong",[s._v("子元素")]),s._v("自动成为容器成员，称为 "),t("code",[s._v("flex")]),s._v(" 项目")]),s._v(" "),t("li",[s._v("容器默认存在两根轴：水平的主轴"),t("code",[s._v("main axis")]),s._v("和垂直的交叉轴"),t("code",[s._v("cross axis")]),s._v("。主轴的开始位置叫做 "),t("code",[s._v("main start")]),s._v("，结束位置叫做 "),t("code",[s._v("main end")]),s._v("；交叉轴的开始位置叫做"),t("code",[s._v("cross start")]),s._v("，结束位置叫做 "),t("code",[s._v("cross end")])]),s._v(" "),t("li",[t("strong",[s._v("项目默认沿主轴排列")]),s._v(",单个项目占据的主轴空间叫做 "),t("code",[s._v("main size")]),s._v("，占据的交叉轴空间叫做 "),t("code",[s._v("cross size")])])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/flex-%E5%AE%B9%E5%99%A8.png",alt:"flex-容器"}})]),s._v(" "),t("h2",{attrs:{id:"容器的属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器的属性"}},[s._v("#")]),s._v(" 容器的属性")]),s._v(" "),t("h3",{attrs:{id:"display"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#display"}},[s._v("#")]),s._v(" display")]),s._v(" "),t("p",[s._v("决定了是否使用"),t("code",[s._v("flex")]),s._v(" 布局")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("两者区别")]),s._v(" "),t("p",[s._v("在没有指定宽度的时候，属性设置为 "),t("code",[s._v("flex")]),s._v(" 的宽度默认为父元素的宽度，属性设置为 "),t("code",[s._v("inline-flex")]),s._v("为它内容的宽度")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("display:flex;")]),s._v("将对象作为弹性伸缩盒显示")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/displayflex.png",alt:"displayflex"}})]),s._v(" "),t("ul",[t("li",[t("code",[s._v("diisplay:inline-flex;")]),s._v("将对象作为内联块级弹性伸缩盒显示")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/displayinline-flex.png",alt:"displayinline-flex"}})]),s._v(" "),t("h3",{attrs:{id:"flex-direction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-direction"}},[s._v("#")]),s._v(" flex-direction")]),s._v(" "),t("p",[s._v("决定主轴的方向（即项目的排列方向）")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("row")]),s._v("（默认值）主轴为水平方向，起点在左端")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/flex-direction-row.png",alt:"flex-direction-row"}})]),s._v(" "),t("ul",[t("li",[t("code",[s._v("row-reverse")]),s._v(" 主轴为水平方向，起点在右端")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/flex-direction-row-reverse.png",alt:"flex-direction-row-reverse"}})]),s._v(" "),t("ul",[t("li",[t("code",[s._v("column")]),s._v(" 主轴为垂直方向，起点在上沿")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/flex-direction-column.png",alt:"flex-direction-column"}})]),s._v(" "),t("ul",[t("li",[t("code",[s._v("column-reverse")]),s._v(" 主轴为垂直方向，起点在下沿")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/flex-direction-column-reverse.png",alt:"flex-direction-column-reverse"}})]),s._v(" "),t("h3",{attrs:{id:"flex-wrap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-wrap"}},[s._v("#")]),s._v(" flex-wrap")]),s._v(" "),t("p",[s._v("默认情况下，项目都排在一条线（又称“轴线”）上，"),t("code",[s._v("flex-wrap")]),s._v(" 属性定义，如一果条轴线排不下，如何换行")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("nowrap")]),s._v("（默认值） 不换行")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("如果项目的宽度加和超过容器的宽度会自动压缩每个项目的宽度，坚决不换行！")])])])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/flex-wrap-nowrap.png",alt:"flex-wrap-nowrap"}})]),s._v(" "),t("ul",[t("li",[t("code",[s._v("wrap")]),s._v("换行 第一行在上方")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/flex-wrap-wrap.png",alt:"flex-wrap-wrap"}})]),s._v(" "),t("ul",[t("li",[t("code",[s._v("wrap-reverse")]),s._v(" 换行 第一行在下方")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/flex-wrap-reverse.png",alt:"flex-wrap-reverse"}})]),s._v(" "),t("h3",{attrs:{id:"flex-flow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-flow"}},[s._v("#")]),s._v(" flex-flow")]),s._v(" "),t("p",[t("code",[s._v("flex-direction")]),s._v(" 属性和 "),t("code",[s._v("flex-wrap")]),s._v(" 属性的简写形式，默认值为 "),t("strong",[t("code",[s._v("row nowrap")])])]),s._v(" "),t("h3",{attrs:{id:"justify-content"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#justify-content"}},[s._v("#")]),s._v(" justify-content")]),s._v(" "),t("p",[s._v("定义了项目在主轴上的对齐方式")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("flex-start")]),s._v("(默认值) 左对齐")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/justify-content-flex-start.png",alt:"justify-content-flex-start"}})]),s._v(" "),t("ul",[t("li",[t("code",[s._v("flex-end")]),s._v(" 右对齐")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/justify-content-%20flex-end.png",alt:"justify-content- flex-end"}})]),s._v(" "),t("ul",[t("li",[t("code",[s._v("center")]),s._v(" 居中")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/justify-content-center.png",alt:"justify-content-center"}})]),s._v(" "),t("ul",[t("li",[t("code",[s._v("space-between")]),s._v(" 两端对齐，项目之间的间隔都相等")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/justify-content-space-between.png",alt:"justify-content-space-between"}})]),s._v(" "),t("ul",[t("li",[t("code",[s._v("space-around")]),s._v(" 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/justify-content-space-around.png",alt:"justify-content-space-around"}})]),s._v(" "),t("h3",{attrs:{id:"align-items"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#align-items"}},[s._v("#")]),s._v(" align-items")]),s._v(" "),t("p",[s._v("定义项目在交叉轴上如何对齐")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("stretch")]),s._v("(默认值)：如果 Flex 项目未设置交叉轴方向的大小或设为 auto，将占满整个容器交叉轴方向的大小")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/align-items-stretch.png",alt:"align-items-stretch"}})]),s._v(" "),t("ul",[t("li",[t("code",[s._v("flex-start")]),s._v(" 交叉轴的起点对齐")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/align-items-flex-start.png",alt:"align-items-flex-start"}})]),s._v(" "),t("ul",[t("li",[t("code",[s._v("flex-end")]),s._v(" 交叉轴的终点对齐")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/align-items-flex-end.png",alt:"align-items-flex-end"}})]),s._v(" "),t("ul",[t("li",[t("code",[s._v("center")]),s._v(" 交叉轴的中点对齐(垂直居中)")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/align-items-center.png",alt:"align-items-center"}})]),s._v(" "),t("ul",[t("li",[t("code",[s._v("baseline")]),s._v(" 项目的第一行文字的基线对齐")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/align-items-baseline.png",alt:"align-items-baseline"}})]),s._v(" "),t("h3",{attrs:{id:"align-content"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#align-content"}},[s._v("#")]),s._v(" align-content")]),s._v(" "),t("p",[s._v("定义了存在多根主轴线时，flex 项目在交叉轴上的对齐方式")]),s._v(" "),t("p",[s._v("如果项目只有一根主轴线 ，"),t("strong",[s._v("该属性不起作用")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("stretch")]),s._v("(默认值) 主轴线平分 Flex 容器交叉轴方向上的空间")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/align-content-stretch.png",alt:"align-content-stretch"}})]),s._v(" "),t("ul",[t("li",[t("code",[s._v("flex-start")]),s._v(" 交叉轴的起点对齐")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/align-content-flex-start.png",alt:"align-content-flex-start"}})]),s._v(" "),t("ul",[t("li",[t("code",[s._v("flex-end")]),s._v(" 交叉轴的终点对齐")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/align-content-flex-end.png",alt:"align-content-flex-end"}}),s._v("!")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("center")]),s._v("与交叉轴的中点对齐")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/align-content-center.png",alt:"align-content-center"}})]),s._v(" "),t("ul",[t("li",[s._v("space-between 与交叉轴的两端对齐，轴线之间的间隔平均分布")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/align-content-space-between.png",alt:"align-content-space-between"}})]),s._v(" "),t("ul",[t("li",[s._v("space-around 每根轴线两侧的间隔都相等，所以轴线之间的间隔比轴线与边框大一倍")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/align-content-space-around.png",alt:"align-content-space-around"}})]),s._v(" "),t("h2",{attrs:{id:"项目的属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目的属性"}},[s._v("#")]),s._v(" 项目的属性")]),s._v(" "),t("h3",{attrs:{id:"order"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#order"}},[s._v("#")]),s._v(" order")]),s._v(" "),t("p",[s._v("属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/order.png",alt:"order"}})]),s._v(" "),t("h3",{attrs:{id:"flex-grow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-grow"}},[s._v("#")]),s._v(" flex-grow")]),s._v(" "),t("ul",[t("li",[s._v("属性定义项目的放大比例，默认为"),t("strong",[s._v("0")]),s._v("，即如果存在剩余空间，也不放大。")]),s._v(" "),t("li",[s._v("如果所有项目的 "),t("code",[s._v("flex-grow")]),s._v(" 属性都为 1，则它们将等分主轴剩余空间（如果有的话）。如果一个项目的"),t("code",[s._v("flex-grow")]),s._v(" 属性为 2，其他项目都为 1，则前者占据的主轴剩余空间将是其他项的 2 倍。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/flex-grow.png",alt:"flex-grow"}})]),s._v(" "),t("ul",[t("li",[s._v("如果有的项目有 "),t("code",[s._v("flex-grow")]),s._v(" 属性，有的项目没有 "),t("code",[s._v("flex-grow")]),s._v(" 属性,但有 "),t("code",[s._v("width")]),s._v(" 属性，有 "),t("code",[s._v("flex-grow")]),s._v("属性的项目将等分主轴剩余空间")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/flex-grow-2.png",alt:"flex-grow-2"}})]),s._v(" "),t("h3",{attrs:{id:"flex-shrink"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-shrink"}},[s._v("#")]),s._v(" flex-shrink")]),s._v(" "),t("p",[s._v("属性定义了项目的缩小比例，默认为"),t("strong",[s._v("1")]),s._v("，即如果空间不足，该项目将缩小。")]),s._v(" "),t("ul",[t("li",[s._v("如果所有项目的 "),t("code",[s._v("flex-shrink")]),s._v(" 属性都为 1，当空间不足时，都将等比例缩小。如果一个项目的 "),t("code",[s._v("flex-shrink")]),s._v(" 属性为 0，其他项目都为 1，则空间不足时，前者不缩小。")]),s._v(" "),t("li",[s._v("负值对该属性无效。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zfh-oss.oss-cn-shanghai.aliyuncs.com/docs-images/flex-shrink.png",alt:"flex-shrink"}})]),s._v(" "),t("h3",{attrs:{id:"flex-basis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-basis"}},[s._v("#")]),s._v(" flex-basis")]),s._v(" "),t("ul",[t("li",[s._v("优先级高于 "),t("code",[s._v("width")]),s._v("(或"),t("code",[s._v("height")]),s._v(")")]),s._v(" "),t("li",[s._v("属性定义了在分配多余空间之前，"),t("strong",[s._v("项目占据的主轴空间")]),s._v("（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为"),t("code",[s._v("auto")]),s._v("，即项目的本来大小。")])]),s._v(" "),t("h3",{attrs:{id:"flex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex"}},[s._v("#")]),s._v(" flex")]),s._v(" "),t("p",[s._v("属性是"),t("code",[s._v("flex-grow")]),s._v(", "),t("code",[s._v("flex-shrink")]),s._v(" 和 "),t("code",[s._v("flex-basis")]),s._v("的简写，默认值为 "),t("code",[s._v("0 1 auto")]),s._v("。后两个属性可选。")]),s._v(" "),t("h4",{attrs:{id:"关键字值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关键字值"}},[s._v("#")]),s._v(" 关键字值")]),s._v(" "),t("h4",{attrs:{id:"单值语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单值语法"}},[s._v("#")]),s._v(" 单值语法")]),s._v(" "),t("ul",[t("li",[s._v("一个无单位数(number),会被当作 "),t("code",[s._v("flex:number 1 0")]),s._v(";\n"),t("ul",[t("li",[t("code",[s._v("flex:1")]),s._v(" ; 平分剩余空间")])])]),s._v(" "),t("li",[s._v("一个有效的宽度"),t("code",[s._v("width")]),s._v("值，它会被当作"),t("code",[s._v("flex-basis")]),s._v(" 的值(会被当作"),t("code",[s._v("flex:1 1 width")]),s._v(")")]),s._v(" "),t("li",[s._v("关键字 "),t("code",[s._v("none")]),s._v("，"),t("code",[s._v("auto")]),s._v("或"),t("code",[s._v("initial")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("flex: auto")]),s._v('; 元素会根据自身的宽度与高度来确定尺寸，但是会伸长并吸收 flex 容器中额外的自由空间，也会缩短自身来适应 flex 容器。这相当于将属性设置为 "'),t("code",[s._v("flex: 1 1 auto")]),s._v('"')]),s._v(" "),t("li",[t("code",[s._v("flex: initial")]),s._v(';元素会根据自身宽高设置尺寸。它会缩短自身以适应 flex 容器，但不会伸长并吸收 flex 容器中的额外自由空间来适应 flex 容器 。相当于将属性设置为"'),t("code",[s._v("flex: 0 1 auto")]),s._v('"')]),s._v(" "),t("li",[t("code",[s._v("flex: none")]),s._v("; 元素会根据自身宽高来设置尺寸。它是"),t("strong",[s._v("完全非弹性的")]),s._v('：既不会缩短，也不会伸长来适应 flex 容器。相当于将属性设置为"'),t("code",[s._v("flex: 0 0 auto")]),s._v('"')])])])]),s._v(" "),t("h4",{attrs:{id:"双值语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#双值语法"}},[s._v("#")]),s._v(" 双值语法")]),s._v(" "),t("p",[s._v("第一个值必须为一个无单位数，并且它会被当作 "),t("code",[s._v("flex-grow")]),s._v(" 的值。第二个值必须为以下之一：")]),s._v(" "),t("ul",[t("li",[s._v("一个无单位数：它会被当作 "),t("code",[s._v("flex-shrink")]),s._v(" 的值")]),s._v(" "),t("li",[s._v("一个有效的宽度值: 它会被当作 "),t("code",[s._v("flex-basis")]),s._v(" 的值")])]),s._v(" "),t("h4",{attrs:{id:"三值语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三值语法"}},[s._v("#")]),s._v(" 三值语法")]),s._v(" "),t("ul",[t("li",[s._v("第一个值必须为一个无单位数，并且它会被当作 "),t("code",[s._v("flex-grow")]),s._v(" 的值")]),s._v(" "),t("li",[s._v("第二个值必须为一个无单位数，并且它会被当作 "),t("code",[s._v("flex-shrink")]),s._v(" 的值。")]),s._v(" "),t("li",[s._v("第三个值必须为一个有效的宽度值， 并且它会被当作 "),t("code",[s._v("flex-basis")]),s._v(" 的值")])]),s._v(" "),t("h3",{attrs:{id:"align-self"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#align-self"}},[s._v("#")]),s._v(" align-self")]),s._v(" "),t("p",[s._v("属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 "),t("code",[s._v("align-items")]),s._v(" 属性。默认值为 "),t("code",[s._v("auto")]),s._v("，表示继承父元素的 "),t("code",[s._v("align-items")]),s._v("属性。")]),s._v(" "),t("ul",[t("li",[s._v("该属性可能取 6 个值，除了 "),t("code",[s._v("auto")]),s._v("，其他都与 "),t("code",[s._v("align-items")]),s._v(" 属性完全一致。")])]),s._v(" "),t("h2",{attrs:{id:"flex-实现圣杯布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-实现圣杯布局"}},[s._v("#")]),s._v(" flex 实现圣杯布局")]),s._v(" "),t("p",{staticClass:"codepen",staticStyle:{height:"300px","box-sizing":"border-box",display:"flex","align-items":"center","justify-content":"center",border:"2px solid",margin:"1em 0",padding:"1em"},attrs:{"data-height":"300","data-default-tab":"html,result","data-slug-hash":"XWVzOLJ","data-user":"zhangfanhang"}},[t("span",[s._v("See the Pen "),t("a",{attrs:{href:"https://codepen.io/zhangfanhang/pen/XWVzOLJ"}},[s._v("\n  flex 实现圣杯布局")]),s._v(" by zhangfanhang ("),t("a",{attrs:{href:"https://codepen.io/zhangfanhang"}},[s._v("@zhangfanhang")]),s._v(")\n  on "),t("a",{attrs:{href:"https://codepen.io"}},[s._v("CodePen")]),s._v(".")])]),s._v(" "),t("script",{attrs:{async:"",src:"https://cpwebassets.codepen.io/assets/embed/ei.js"}})])}),[],!1,null,null,null);e.default=i.exports}}]);