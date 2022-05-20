const loggingMiddleware=(req,res,next)=>{

    console.log("Logged request -----------")


    next();

}


const commonResponseMiddleware=(req,res,next)=>{


    res.json({message:"From Common Middleware"});

}

module.exports={
    loggingMiddleware,
    commonResponseMiddleware

}