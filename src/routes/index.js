const { notFound, internalServerError } = require("../middlewares/handleError")
const insert = require('./insert')
const company = require('./company')

const BASE_ENDPOINT = '/api/v1/'
const initWebRoutes = (app) => {
  app.use(`${BASE_ENDPOINT}insert`, insert)
  app.use(`${BASE_ENDPOINT}company`, company)
  

  app.use(notFound)
  app.use(internalServerError)
}

module.exports = initWebRoutes