// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-import": {},
    // "autoprefixer": {}
    'autoprefixer': {browsers: ['last 2 versions','> 5%','Firefox < 20','> 5% in US','ie 9']}
  }
}
