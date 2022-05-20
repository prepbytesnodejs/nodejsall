const toLowerCaseString=(req,res,next)=>{

    console.log("show middleware  Got Calledd -------------");


    const str=req.body.name;

    req.body.name=str.toLowerCase();

    next();

}

const justADummyMidleware=(req,res,next)=>{

    console.log("dummy Middleware middleware  Got Calledd -------------");


   
    next();

}

module.exports={
    toLowerCaseString,
    justADummyMidleware

}