'use strict'

var app = require('koa')()
var router = require('koa-router')()

router.get('/service-a', function* (next) {
  this.body = 'mock-servicea-response'
})

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000)
