const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/chrysillamayasari/Documents/playground/react/silly-site/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/chrysillamayasari/Documents/playground/react/silly-site/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/chrysillamayasari/Documents/playground/react/silly-site/src/pages/index.js"))),
  "component---src-pages-my-files-js": hot(preferDefault(require("/Users/chrysillamayasari/Documents/playground/react/silly-site/src/pages/my-files.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/chrysillamayasari/Documents/playground/react/silly-site/src/templates/blog-post.js")))
}

