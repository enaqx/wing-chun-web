var serve = require('koa-static');
var koa = require('koa');
var app = koa();


app.use(serve(__dirname + '/web'));
app.listen(3000);
console.log('listening on port 3000');