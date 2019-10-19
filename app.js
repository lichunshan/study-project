const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const session = require('koa-session');
const koaBody = require('koa-body');
const logger = require('koa-logger');
const config = require('./config.js');
const Models = require('./models/index.js');
const Routes = require('./router/routes.js');
// 设置模板引擎
app.use(views('./views', { map: { html: 'nunjucks' } }));
// 连接数据库
Models();
// 设置session
app.keys = ['some secret hurr'];
app.use(session(config.session,app));
//设置koa-body
app.use(koaBody());
// 设置日志
app.use(logger((str, args)=>{
    console.log(str);
    // console.log(new Date().toLocaleTimeString());
}));
// 应用路由
Routes(app);
app.listen(3000);
