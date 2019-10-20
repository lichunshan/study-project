const Router = require('koa-router');
const router = new Router();
router.get('/', async(ctx, next) => {
  let n = ctx.session.views || 0;
  ctx.session.views = ++n;
  // console.log(JSON.stringify(ctx.request));
  // ctx.body = n + ' views';
  await ctx.render('./admin/index.html', { title: n + ' views', b: JSON.stringify(ctx.request.body) });
  await next();
  // ctx.body = '你好'
});
module.exports = router;
