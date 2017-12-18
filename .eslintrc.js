module.exports = {

  "extends": "react-app",

  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },

  'rules': {
    "quotes": [1, 'single'],
    "jsx-a11y/href-no-hash":0,
    "no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行
    "no-spaced-func": 2, //函数调用时 函数名与()之间不能有空格
    "no-sparse-arrays": 2,//禁止稀疏数组， [1,,2]
    "comma-spacing": 1,//逗号前后的空格
    "key-spacing": [1, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格
    "semi-spacing": [1, {"before": false, "after": true}],//分号前后空格
    "space-unary-ops": [1, { "words": true, "nonwords": false }],//一元运算符的前/后要不要加空格
    "space-infix-ops": 1,//中缀操作符周围要不要有空格
    "space-before-blocks": [1, "always"],//不以新行开始的块{前面要不要有空格
    'jsx-a11y/alt-text': 0,
    'no-script-url':0,
    "react/jsx-closing-bracket-location": [1, {selfClosing: 'props-aligned', nonEmpty: 'after-props'}],
    "jsx-quotes": [1, "prefer-double"], // 
    "react/require-default-props": 0,
    "react/prefer-es6-class": 1,
    "react/jsx-equals-spacing": 1,
    "max-len": [1, 200, 2, {ignoreComments: true}],
    "react/self-closing-comp": 1,    // 对于没有子元素的标签来说总是自己关闭标签
    "react/sort-comp": 1,            // 按照具体规范的React.createClass 的生命周期函数书写代码
    "react/jsx-pascal-case": 1        // React模块名使用帕斯卡命名，实例使用骆驼式命名
  }
};