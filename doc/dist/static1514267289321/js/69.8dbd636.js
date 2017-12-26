webpackJsonp([69],{1694:function(t,v,_){t.exports={render:function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",{staticClass:"doc"},[_("h2",[t._v("Form 表单")]),t._v(" "),_("h3",[t._v("基本")]),t._v(" "),_("example",{attrs:{demo:"form/form1"}}),t._v(" "),_("h3",[t._v("三种排版以及验证")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),_("example",{attrs:{demo:"form/form3"}}),t._v(" "),_("h3",[t._v("只读的表单")]),t._v(" "),_("example",{attrs:{demo:"form/form2"}}),t._v(" "),_("h3",[t._v("修改密码验证")]),t._v(" "),_("example",{attrs:{demo:"form/form4"}}),t._v(" "),_("h3",[t._v("Inline模式")]),t._v(" "),_("example",{attrs:{demo:"form/form5"}}),t._v(" "),_("h3",[t._v("不同的组合样式2")]),t._v(" "),_("example",{attrs:{demo:"form/form6"}}),t._v(" "),_("h3",[t._v("Form 参数")]),t._v(" "),t._m(3),t._v(" "),_("h3",[t._v("Form 方法")]),t._v(" "),t._m(4),t._v(" "),_("h3",[t._v("FormItem 参数")]),t._v(" "),t._m(5)],1)},staticRenderFns:[function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("p",[t._v("Form提供三种排列方式: "),_("code",[t._v("single")]),t._v("一个FormItem一行, "),_("code",[t._v("block")]),t._v("标题独立一行, "),_("code",[t._v("twocolumn")]),t._v("两列一行。")])},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("p",[t._v("在"),_("code",[t._v("twocolumn")]),t._v("的排列的方式下，对"),_("code",[t._v("FormItem")]),t._v("添加"),_("code",[t._v("block")]),t._v("参数即可列为一行，主要针对"),_("code",[t._v("textarea")]),t._v("这种不定行高的对象。")])},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("blockquote",[t._v("注意：当使用"),_("code",[t._v("for")]),t._v("循环组件的时候，请使用"),_("code",[t._v("FormItemList")]),t._v("组件对"),_("code",[t._v("FormItem")]),t._v("添加一层嵌套，防止"),_("code",[t._v("FormItem")]),t._v("在同一个parent下没有使用key作为唯一值引用而产生BUG。")])},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("table",{staticClass:"table"},[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("可选值")]),t._v(" "),_("th",[t._v("默认值")])]),t._v(" "),_("tr",[_("td",[t._v("mode")]),t._v(" "),_("td",[t._v("排版模式")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("inline,single,twocolumn")]),t._v(" "),_("td",[t._v("single")])]),t._v(" "),_("tr",[_("td",[t._v("model")]),t._v(" "),_("td",[t._v("关联的model模型，用于数据validator。详情至"),_("a",{attrs:{href:"https://github.com/heyui/hey-validator",target:"_blank"}},[t._v("hey-validator")])]),t._v(" "),_("td",[t._v("Object")]),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("labelWidth")]),t._v(" "),_("td",[t._v("说明文字的宽度")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("80")])]),t._v(" "),_("tr",[_("td",[t._v("no-valid")]),t._v(" "),_("td",[t._v("只读的表单")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("false")])]),t._v(" "),_("tr",[_("td",[t._v("rules")]),t._v(" "),_("td",[t._v("数据validator规则。详情至"),_("a",{attrs:{href:"https://github.com/heyui/hey-validator",target:"_blank"}},[t._v("hey-validator")])]),t._v(" "),_("td",[t._v("Object")]),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("labelPosition")]),t._v(" "),_("td",[t._v("说明文字的位置")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("left,right")]),t._v(" "),_("td",[t._v("right")])]),t._v(" "),_("tr",[_("td",[t._v("top")]),t._v(" "),_("td",[t._v("错误的时候滑动到错误input的位置")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("0-1，百分比")]),t._v(" "),_("td",[t._v("0.5")])]),t._v(" "),_("tr",[_("td",[t._v("topOffset")]),t._v(" "),_("td",[t._v("错误的时候滑动到错误input的位置的高度位移")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("0")])])])},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("table",{staticClass:"table"},[_("tr",[_("th",[t._v("方法名")]),t._v(" "),_("th",[t._v("说明")])]),t._v(" "),_("tr",[_("td",[t._v("valid")]),t._v(" "),_("td",[t._v("valid( ): 整体验证表单")])]),t._v(" "),_("tr",[_("td",[t._v("validField")]),t._v(" "),_("td",[t._v("validField( prop ): 整体个体字段")])]),t._v(" "),_("tr",[_("td",[t._v("reset")]),t._v(" "),_("td",[t._v("reset( ): 重置验证")])])])},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("table",{staticClass:"table"},[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("可选值")]),t._v(" "),_("th",[t._v("默认值")])]),t._v(" "),_("tr",[_("td",[t._v("label")]),t._v(" "),_("td",[t._v("文字")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("prop")]),t._v(" "),_("td",[t._v("关联的model中对应的字段，可以自动做required属性判断，用于数据validator。详情至"),_("a",{attrs:{href:"https://github.com/heyui/hey-validator",target:"_blank"}},[t._v("hey-validator")])]),t._v(" "),_("td",[t._v("Object")]),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("showLabel")]),t._v(" "),_("td",[t._v("是否显示label")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("false")])]),t._v(" "),_("tr",[_("td",[t._v("required")]),t._v(" "),_("td",[t._v("当一个label针对的输入比较复杂时，可以单独设置，只做必填样式的展示。")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("false")])]),t._v(" "),_("tr",[_("td",[t._v("single")]),t._v(" "),_("td",[t._v("是否为独立一行，主要是在"),_("code",[t._v("twocolumn")]),t._v("模式下使用，适用于"),_("code",[t._v("textarea")]),t._v("这种不定高度的模块。")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("false")])])])}]},t.exports.render._withStripped=!0},936:function(t,v,_){var e=_(1)(null,_(1694),null,null,null);e.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/form/form.vue",e.esModule&&Object.keys(e.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.options.functional&&console.error("[vue-loader] form.vue: functional components are not supported with templates, they should use render functions."),t.exports=e.exports}});