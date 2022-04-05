const koa = require("koa");

const cors = require("koa-cors");

const proxy = require("koa-server-http-proxy");

const app = new koa();

app.use(cors());

app.use(
    proxy("/", {
        target: 'http:10.3.7.88:8093/', //后台地址
        changeOrigin: true
    })
);

app.listen(8000, () => { console.log('代理服务成功...') })