(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{742:function(s,t,a){"use strict";a.r(t);var n=a(29),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"node-js-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js-介绍"}},[s._v("#")]),s._v(" node.js 介绍")]),s._v(" "),a("p",[s._v("一个基于 "),a("code",[s._v("Chrome v8")]),s._v(" 引擎的 "),a("code",[s._v("Javascript")]),s._v(" 运行时(代码的运行环境)环境")]),s._v(" "),a("h3",{attrs:{id:"chrome-v8-引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chrome-v8-引擎"}},[s._v("#")]),s._v(" chrome v8 引擎")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("chrome")]),s._v("是一个浏览器，它可以执行 "),a("code",[s._v("js")]),s._v(" 代码")]),s._v(" "),a("li",[a("code",[s._v("V8")]),s._v(" 就是 "),a("code",[s._v("chrome")]),s._v(" 的 "),a("code",[s._v("js")]),s._v("引擎，以速度著称")]),s._v(" "),a("li",[a("code",[s._v("nodejs")]),s._v(" 也是基于 "),a("code",[s._v("js")]),s._v(" 语法的，因此也可以借用 "),a("code",[s._v("∨8")]),s._v(" 引擎")])]),s._v(" "),a("h2",{attrs:{id:"nvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nvm"}},[s._v("#")]),s._v(" nvm")]),s._v(" "),a("p",[a("code",[s._v("nvm")]),s._v(" 是 "),a("code",[s._v("node.js")]),s._v(" 的版本管理工具")]),s._v(" "),a("h3",{attrs:{id:"windows-下安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-下安装"}},[s._v("#")]),s._v(" windows 下安装")]),s._v(" "),a("p",[s._v("下载地址："),a("code",[s._v("https://github.com/coreybutler/nvm-windows/releases")])]),s._v(" "),a("p",[s._v("安装完成后，找到 "),a("code",[s._v("nvm")]),s._v(" 的安装目录，有一个 "),a("code",[s._v("settings.txt")]),s._v(" 文件，打开之后把下面的代码复制进去：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("root: C:\\Users\\Frank\\AppData\\Roaming\\nvm\npath: C:\\Program Files\\nodejs\narch: 64\nproxy: none\nnode_mirror: https://npmmirror.com/mirrors/node/\nnpm_mirror: https://npmmirror.com/mirrors/npm/\n")])])]),a("p",[a("code",[s._v("nvm")]),s._v(" 基本命令有：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("安装 node:"),a("code",[s._v("nvm install <version>")])])]),s._v(" "),a("li",[a("p",[s._v("切换版本:"),a("code",[s._v("nvm use [version]")])])]),s._v(" "),a("li",[a("p",[s._v("列出已安装的版本:"),a("code",[s._v("nvm list")])])]),s._v(" "),a("li",[a("p",[s._v("卸载 node："),a("code",[s._v("nvm uninstall <version>")])])])]),s._v(" "),a("h3",{attrs:{id:"macos-下安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macos-下安装"}},[s._v("#")]),s._v(" macOS 下安装")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("当在 "),a("code",[s._v("arm")]),s._v("架构下的 "),a("code",[s._v("macos")]),s._v(" 上，通过 "),a("code",[s._v("nvm")]),s._v(" 安装 "),a("code",[s._v("v16")]),s._v(" 以下版本 "),a("code",[s._v("node")]),s._v(" 时,必须在 "),a("code",[s._v("Rosetta 2")]),s._v("的模式下打开终端，执行安装命令")])]),s._v(" "),a("p",[s._v("建议使用 "),a("code",[s._v("homebrew")]),s._v("，安装"),a("code",[s._v("nvm")]),s._v(":")]),s._v(" "),a("p",[s._v("国内可以使用"),a("a",{attrs:{href:"https://gitee.com/cunkai/HomebrewCN?utm_source=alading&utm_campaign=repo",target:"_blank",rel:"noopener noreferrer"}},[s._v("Homebrew 国内安装脚本"),a("OutboundLink")],1),s._v("安装"),a("code",[s._v("homebrew")])]),s._v(" "),a("p",[s._v("第一步："),a("code",[s._v("brew install nvm")])]),s._v(" "),a("p",[s._v("第二步："),a("code",[s._v("touch .zshrc")]),s._v(",写入：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NVM_DIR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v('/.nvm"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/opt/homebrew/opt/nvm/nvm.sh"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/opt/homebrew/opt/nvm/nvm.sh"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This loads nvm")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This loads nvm bash_completion")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NVM_NODEJS_ORG_MIRROR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://npmmirror.com/mirrors/node/\n")])])]),a("p",[s._v("第三步："),a("code",[s._v("source .zshrc")])]),s._v(" "),a("p",[s._v("接下来就可以使用 "),a("code",[s._v("nvm")]),s._v("指令安装 "),a("code",[s._v("node")])]),s._v(" "),a("p",[s._v("常用命令:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("nvm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" xxx\nnvm uninstall xxx\nnvm "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" default xxx //设置新终端的默认node版本\nnvm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])])]),a("h2",{attrs:{id:"npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[s._v("#")]),s._v(" npm")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/u014607184/article/details/104395593",target:"_blank",rel:"noopener noreferrer"}},[s._v("package.json 中的版本和 package-lock.json 的作用"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"dependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"react"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^16.8.0"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"react"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"~16.8.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"react"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"16.8.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),a("p",[s._v("三种方式的区分在于，项目通过 npm install 重新下载依赖包时，对于所下载的版本号的区别：")]),s._v(" "),a("ul",[a("li",[s._v("^16.8.0’ 表示安装 16.x.x 的最新版本，安装时不改变大版本号。")]),s._v(" "),a("li",[s._v("‘~16.8.0’ 表示安装 16.8.x 的最新版本，安装时不改变大版本号和次要版本号。")]),s._v(" "),a("li",[s._v("‘16.8.0’ 表示安装指定的版本号，也就是安装 16.8.0 版本。")])])]),s._v(" "),a("p",[a("code",[s._v("npm")]),s._v(" 是 "),a("code",[s._v("node.js")]),s._v(" 的软件包管理器")]),s._v(" "),a("h3",{attrs:{id:"npm-的常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-的常用命令"}},[s._v("#")]),s._v(" npm 的常用命令")]),s._v(" "),a("ul",[a("li",[s._v("安装所有依赖："),a("code",[s._v("npm install")])]),s._v(" "),a("li",[s._v("查看全局的包："),a("code",[s._v("npm list -g --depth 0")])]),s._v(" "),a("li",[s._v("查看全局包的安装位置："),a("code",[s._v("npm root -g")])]),s._v(" "),a("li",[s._v("查看 bin 目录位置:"),a("code",[s._v("npm bin -g")])]),s._v(" "),a("li",[s._v("安装全局的包："),a("code",[s._v("npm installl -g")])]),s._v(" "),a("li",[s._v("安装生产依赖："),a("code",[s._v("npm intall module_name")])]),s._v(" "),a("li",[s._v("安装开发依赖： "),a("code",[s._v("npm install module_name -D")])]),s._v(" "),a("li",[s._v("移除依赖："),a("code",[s._v("npm uninstall module_name")]),s._v(",全局加上"),a("code",[s._v("-g")])]),s._v(" "),a("li",[s._v("设置淘宝镜像源：npm config set registry=https://registry.npmmirror.com")])]),s._v(" "),a("h2",{attrs:{id:"nrm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nrm"}},[s._v("#")]),s._v(" nrm")]),s._v(" "),a("p",[s._v("nrm是npm的源管理工具")]),s._v(" "),a("p",[s._v("安装："),a("code",[s._v("npm install -g @adams549659584/nrm")])]),s._v(" "),a("p",[s._v("Mac M1芯片电脑可能无法正确获取当前正在使用的源使用此包可解决问题,解决方法来自抖音前端博主："),a("a",{attrs:{href:"https://www.douyin.com/user/MS4wLjABAAAAz0TXiTnI3HAmxDEfBrHItlViAwC6rsxJL6_GIHFA2Ho",target:"_blank",rel:"noopener noreferrer"}},[s._v("后盾人"),a("OutboundLink")],1),s._v("，感谢！")]),s._v(" "),a("h3",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("ul",[a("li",[s._v("nrm ls:显示源列表")]),s._v(" "),a("li",[s._v("nrm test：测试延迟")]),s._v(" "),a("li",[s._v("nrm use xxxx:使用xxxx源")])]),s._v(" "),a("h2",{attrs:{id:"yarn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yarn"}},[s._v("#")]),s._v(" Yarn")]),s._v(" "),a("p",[a("strong",[a("code",[s._v("Yarn")]),s._v(" 也是 "),a("code",[s._v("node")]),s._v(" 包管理工具")])]),s._v(" "),a("p",[a("code",[s._v("React")]),s._v(" 脚手架默认使用 "),a("code",[s._v("yarn")])]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("homebrew")]),s._v("安装："),a("code",[s._v("brew install yarn")])]),s._v(" "),a("p",[s._v("yarn 的镜像设置默认使用"),a("code",[s._v(".npmrc")]),s._v(" 中的设置，无需单独配置")]),s._v(" "),a("h3",{attrs:{id:"yarn-的一些常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yarn-的一些常用命令"}},[s._v("#")]),s._v(" Yarn 的一些常用命令")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("macOS:yarn 安装全局包后找不到命令的问题")]),s._v(" "),a("p",[s._v("将")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" global bin"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v('"')]),s._v("\n")])])]),a("p",[s._v("添加到.zshrc 中")])]),s._v(" "),a("ul",[a("li",[s._v("安装所有依赖："),a("code",[s._v("yarn")])]),s._v(" "),a("li",[s._v("查看全局的包："),a("code",[s._v("yarn global list")])]),s._v(" "),a("li",[s._v("查看全局包的安装位置："),a("code",[s._v("yarn global dir")])]),s._v(" "),a("li",[s._v("查看 bin 目录位置:"),a("code",[s._v("yarn global bin")])]),s._v(" "),a("li",[s._v("安装全局的包:"),a("code",[s._v("yarn global add <packageName>")])]),s._v(" "),a("li",[s._v("安装生产依赖："),a("code",[s._v("yarn add <packageName>")])]),s._v(" "),a("li",[s._v("安装开发依赖： "),a("code",[s._v("yarn add <packageName> -D")])]),s._v(" "),a("li",[s._v("移除依赖："),a("code",[s._v("yarn <global> remove <packageName>")])])]),s._v(" "),a("h2",{attrs:{id:"common-js-模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-js-模块化"}},[s._v("#")]),s._v(" common.js 模块化")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://ffe.link/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/JavaScript/ES6/Module%E6%A8%A1%E5%9D%97.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("回顾 ES6 模块化"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"commonjs-语法介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs-语法介绍"}},[s._v("#")]),s._v(" commonjs 语法介绍")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("module.exports")]),s._v(" 导出")]),s._v(" "),a("li",[a("code",[s._v("require")]),s._v("(…)导入")]),s._v(" "),a("li",[s._v("主要用于 "),a("code",[s._v("node.js")]),s._v(" 开发")])]),s._v(" "),a("h3",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("h4",{attrs:{id:"index-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index-js"}},[s._v("#")]),s._v(" index.js")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" message "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./tool'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// node index.js")]),s._v("\n")])])]),a("h4",{attrs:{id:"tool-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tool-js"}},[s._v("#")]),s._v(" tool.js")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'common.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"commonjs-和-es6-module-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs-和-es6-module-的区别"}},[s._v("#")]),s._v(" commonjs 和 ES6 Module 的区别")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("commonJs")]),s._v(" 是执行时引入 ，动态的,"),a("strong",[s._v("程序执行到 "),a("code",[s._v("require")]),s._v("才会引入")])]),s._v(" "),a("li",[a("code",[s._v("ES6 Module")]),s._v("是打包时引入，静态的,"),a("strong",[s._v("代码执行之前就要把所有东西引入进来")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);