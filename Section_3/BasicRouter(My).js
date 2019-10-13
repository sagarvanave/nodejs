'use strict';
const http = require('http');
const url = require('url');
const qs = require('querystring')

let routes={
  'GET':{
    '/':(req,res)=>{
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end("<h1>Welcome User</h1>")
    },
    '/about':(req,res)=>{
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end("<h1>You are in about page</h1>")
    },
    '/api/getinfo':(req,res)=>{
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end(JSON.stringify(req.queryParams));
    }
  },
  'POST':{
    '/api/login':(req,res)=>
    {
      let body='';
      req.on('data',data=>{
        body+=data;
      });
      req.on('end',()=>{
        let params=qs.parse(body);
        console.log("Usename : ",params['username']);
        console.log("Password : ",params['password']);
        res.end();
      })
    }
  },
  'NA':(req,res)=>{
    res.writeHead(404);
    res.end('Content not found');
  }
}

function router(req , res)
{
  let baseURI=url.parse(req.url,true);
  let resolveRoute=routes[req.method][baseURI.pathname];
  if(resolveRoute != undefined)
  {
    req.queryParams=baseURI.query;
    resolveRoute(req,res);
  }
  else {
    routes['NA'](req,res);
  }
  // console.log("Requested route : ",baseURI);
  // console.log("Requested method : ",req.method);
  // res.writeHead(200, {'Content-Type': 'text/html'});
  // res.end('<h1>Hello Router...</h1>');

}
http.createServer(router).listen(8080,()=>{
  console.log("Server running on port number 8080");
});
