'use strict'

const app = require('koa')()
const router = require('koa-router')()
const request = require('request-promise')

router.get('/service-a', function* (next) {
  const serviceBResponse = yield request.get(process.env.MICROSERVICEB_ENDPOINT + '/service-b')
  const serviceCResponse = yield request.get(process.env.MICROSERVICEC_ENDPOINT + '/service-c')

  this.body = '(' + ['service-a-response', serviceBResponse, serviceCResponse].join(',') + ')'
})

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000)
