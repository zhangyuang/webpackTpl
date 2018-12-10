
import fs from 'fs'
import path from 'path'
import Koa from 'koa'
import Router from 'koa-router'
import React from 'react'
import dva from 'dva'
import { renderToNodeStream, renderToString} from 'react-dom/server'
import nunjucks from 'nunjucks'
import { StaticRouter, matchPath } from 'dva/router'
import serialize from 'serialize-javascript'
import App from './App'
import koaStatic from 'koa-static'
import clientRoutes from '../src/router'
import { createMemoryHistory } from 'history'
const template = fs.readFileSync(path.resolve('./dist/template.html'), 'utf-8').toString()
const app = new Koa()
const serverRouter = new Router()
app.use(koaStatic('dist'))

const render = (ctx, next) => {
  const activeRoute = clientRoutes.find((route) => matchPath(ctx.req.url, route)) || {}
  const promise = activeRoute.prefetch
    ? activeRoute.prefetch(ctx.req.url)
    : Promise.resolve()
  promise.then((data) => {
    const context = { data }
    // const stream = renderToNodeStream(
    //   <StaticRouter location={ctx.req.url} context={context}>
    //     <App />
    //   </StaticRouter>
    // )
    // let html = ''
    // stream.pipe(html, { end: 'false' })
    // // 当React渲染结束后，发送剩余的HTML部分给浏览器
    // stream.on('end', () => {
    //   const htmlStr = template.replace('<!--react-ssr-outlet-->', `<div id='app'>${JSON.stringify(html)}</div>`)
    //     .replace('<!--react-ssr-inject-->', ` <script>window.__INITIAL_DATA__ = ${serialize(data) || ''}</script>`)
    //   // 将渲染后的html字符串发送给客户端
    //   console.log(htmlStr)
    //   ctx.res.end(htmlStr)
    // })
    const history = createMemoryHistory({
      initialEntries: [ctx.req.url]
    })
    const serverApp = dva({ history })
    serverApp.model(require('./model/video').default)

    serverApp.router((history) => {
      return (
        <StaticRouter location={ctx.req.url} context={context} history={history}>
          <App />
        </StaticRouter>
      )
    }
    )
    const markup = renderToString(
      serverApp.start()
    )
    console.log('mark', markup)
    const html = nunjucks.renderString(template, {
      data: serialize(data),
      markup: markup
    })
    // 将渲染后的html字符串发送给客户端
    ctx.res.end(html)
    next()
  }).catch(err => {
    console.log('err', err)
  })
}

serverRouter.get('*', render)
app.use(serverRouter.routes())
  .use(serverRouter.allowedMethods())

app.onerror = (err) => {
  console.log('err', err)
}
app.listen(3000, () => {
  console.log('Your app is running on 3000')
})
