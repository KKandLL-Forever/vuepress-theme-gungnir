# vuepress-plugin-giscus@next

[![npm](https://img.shields.io/npm/v/vuepress-plugin-giscus/next.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/vuepress-plugin-giscus/v/next) [![docs](https://img.shields.io/badge/Docs-vuepress--plugin--giscus-26A2FF?style=flat-square)](https://v2-vuepress-theme-gungnir.vercel.app/docs/plugins/giscus.html) [![license](https://img.shields.io/badge/License-Apache--2.0-green?style=flat-square)](LICENSE)

Plugin `vuepress-plugin-giscus@next` for adding comment system [Giscus](https://github.com/giscus/giscus) powered by [GitHub Discussions](https://docs.github.com/en/discussions) to [VuePress 2](https://v2.vuepress.vuejs.org/).

[Demo](https://v2-vuepress-theme-gungnir.vercel.app/docs/plugins/giscus.html)


&nbsp;

## Install

```bash
yarn add vuepress-plugin-giscus@next
# or
npm install vuepress-plugin-giscus@next
```


&nbsp;

## Usage

First you need to see [Giscus's website](https://giscus.app) for its details and generate your repo id, category id and other things on the website.

Then add the plugin to your `.vuepress/config.js`:

```js
module.exports = {
  plugins: [
    [
      "vuepress-plugin-giscus", {
        repo: "[repo]",  // required, string, format: user_name/repo_name
        repoId: "[repo id]",  // required, string, generate it on Giscus's website
        category: "[category name]",  // required, string
        categoryId: "[category id]",  // required, string, generate it on Giscus's website
        mapping: "[page <-> discussion mapping]",  // optional, string, default="title"
        reactionsEnabled: "[enable reactions or not?]",  // optional, boolean, default=true
        theme: "[theme]", // optional, string, default="light"
        lang: "[language]",  // optional, string, default="auto" (follow the site's language, fell to "en" if your site's language is not supported by Giscus)
        crossorigin: "[crossorigin]"  // optional, string, default="anonymous"
      }
    ]
  ]
}
```


&nbsp;

## Component

After that, `Giscus` will have already been registered as a Vue component, so you can use it in Vuepress directly. You can also change Giscus' theme, language and enablement on-the-fly by pass props to the component ([how it works](https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#parent-to-giscus-message-events)):

```md
<Giscus :theme="theme" :lang="lang" :reactionsEnabled="reactionsEnabled" />
```


&nbsp;

## License

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/giscus/LICENSE)
