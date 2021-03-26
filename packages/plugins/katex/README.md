# @renovamen/vuepress-plugin-katex

A plugin for adding KaTeX to VuePress. This plugin is based on [waylonflinn/markdown-it-katex](https://github.com/waylonflinn/markdown-it-katex).

[KaTeX](https://katex.org/) is a faster alternative to MathJax (see [here](https://www.intmath.com/cg5/katex-mathjax-comparison.php)).

[Demo](https://vuepress-theme-gungnir.vercel.app/zh/docs/plugins/katex.html)


&nbsp;

## Usage

Install:

```bash
yarn add @renovamen/vuepress-plugin-katex
# or
npm install @renovamen/vuepress-plugin-katex
```

Enable this plugin in VuePress with [KaTeX options](https://katex.org/docs/options.html):

```js
module.exports = {
  plugins: [
    [
      '@renovamen/vuepress-plugin-katex', {
        'throwOnError': false,  // (optional)
        'errorColor': '#cc0000'  // (optional)
      }
    ]
  ]
}
```

&nbsp;

## License

[MIT](LICENSE)
