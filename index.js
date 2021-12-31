require('module-alias/register')
const http = require("http")
const ent = require('@Entities')
const server = http.createServer( (req, res) => {
  console.log(req.method)
  console.log(req.url)
  ent.task()
})

server.listen(7000, ()=>{
  console.log('server is listening');
})