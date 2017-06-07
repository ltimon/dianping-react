/**
 * Created by litong on 2017/6/6.
 */
const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

//首页 超值特惠
const homeAdData = require('./home/ad')
router.get('/api/homead',(ctx,next) => {
    ctx.body = homeAdData
})

//首页 猜你喜欢
const homeListData = require('./home/list')
router.get('/api/homelist/:city/:page',(ctx,next) => {
    //获取参数
    const params = ctx.params
    const city = params.city
    const page = params.page
    ctx.body = homeListData
})

// 开始服务并生产路由
app.use(router.routes())
    .use(router.allowedMethods)
app.listen(3000)
console.log("app run at http://localhost:3000")
