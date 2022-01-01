import http from "http"
import { taskFactory } from "#Entities"
import { Id } from "#Utils"
const server = http.createServer( (req, res) => {
  console.log(req.method)
  console.log(req.url)
  
})

server.listen(7000, ()=>{
  console.log('server is listening');
})