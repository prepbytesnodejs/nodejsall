const http=require("http");    // common js module ,importing the http module


// create a http server and try getting request query params
// A request listener that accepts the request or sends the response
const requetAcceptor=function(req,res){
    console.log(req.url);

    if(req.method=="GET" && req.url=="/"){

        res.write("<h1>Hey there</h1>");
        res.end();

    }
    // / is root url

    else if (req.method=="POST" && req.url=="/users"){
        res.writeHead(200);
        res.end("Hey I am a root post request   ");

    }

    else if(req.method=="GET"){

        res.writeHead(200);
        res.end("Hey I am a get  request   ");

    }

   
    



}


const server=http.createServer(requetAcceptor);  // http package provides us with createServer Method that we can use to create a server
server.listen(8080);  // we are running this application in our system
