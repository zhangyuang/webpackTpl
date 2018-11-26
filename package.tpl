{
  "name": "{{ projectName }}",
  "version": "1.0.0",
  "description": "webpack + vue多页面应用脚手架模版",
  "author": "{{ author }}",
  "scripts": {
    "dev": "node cmd/dev-server.js",
    "start": "node cmd/dev-server.js",
    "build": "node cmd/build.js",
    "lint": "eslint --ext .js,.vue src",
    "test": "standard && node cmd/build.js --type=testing",
    "analyze": "NODE_ENV=production npm_config_report=true npm run build"
  },
  "dependencies": {
    "axios": "^0.18.0",
    "vue": "^2.5.17",
    {%- if installRouter -%}
    "vue-router": "^3.0.1"
    {%- endif -%}
  },
  "devDependencies": {
    "@babel/core": "^7.0.0",
    "@babel/plugin-proposal-decorators": "^7.0.0",
    "@babel/plugin-proposal-export-namespace-from": "^7.0.0",
    "@babel/plugin-proposal-json-strings": "^7.0.0",
    "@babel/plugin-transform-object-assign": "^7.0.0",
    {%- if installRouter -%}
    "@babel/plugin-syntax-dynamic-import": "^7.0.0",
    {%- endif -%}
    "@babel/plugin-transform-runtime": "^7.0.0",
    "@babel/preset-env": "^7.0.0",
    "@babel/register": "^7.0.0",
    "@babel/runtime": "7.0.0-beta.55",
    "autoprefixer": "^6.7.2",
    "babel-loader": "^8.0.0",
    "babel-minify-webpack-plugin": "^0.3.1",
    "connect-history-api-fallback": "^1.3.0",
    "css-loader": "^0.9.0",
    {%- if installEslint -%}
    "babel-eslint": "^10.0.1",
    "eslint": "^3.19.0",
    "eslint-friendly-formatter": "^2.0.7",
    "eslint-loader": "^1.7.1",
    "eslint-plugin-html": "^2.0.3",
    {%- endif -%}
    "eventsource-polyfill": "^0.9.6",
    "express": "^4.14.1",
    "extract-text-webpack-plugin": "^3.0.0",
    "file-loader": "^2.0.0",
    "friendly-errors-webpack-plugin": "^1.1.3",
    "glob": "^7.1.2",
    "html-loader": "^0.4.5",
    "html-webpack-plugin": "^2.28.0",
    "http-proxy-middleware": "^0.17.3",
    "less": "^2.7.2",
    "less-loader": "^4.0.4",
    "minimist": "^1.2.0",
    "opn": "^4.0.2",
    "optimize-css-assets-webpack-plugin": "^1.3.0",
    "ora": "^1.2.0",
    "postcss-loader": "^2.0.6",
    "rimraf": "^2.6.0",
    "sass-loader": "^6.0.6",
    "semver": "^5.3.0",
    "shelljs": "^0.7.6",
    "style-loader": "^0.18.2",
    "url-loader": "^0.5.8",
    "vue-loader": "^13.0.0",
    "vue-style-loader": "^4.1.2",
    "vue-template-compiler": "^2.5.17",
    "webpack": "^3.0.0",
    "webpack-bundle-analyzer": "^2.2.1",
    "webpack-dev-middleware": "^1.10.0",
    "webpack-hot-middleware": "^2.18.0",
    "webpack-merge": "^4.1.0"
  },
  "engines": {
    "node": ">= 6.9.0",
    "npm": ">= 3.0.0"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "iOS >= 7"
  ]
}
