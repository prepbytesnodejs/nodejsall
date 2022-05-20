const convertToUpperCase=(req,res,next)=>{

    const str=req.body.name;

    console.log("Data--------",str);

    req.body.name=str.toUpperCase();
    req.body.additional="Added by middleware";

    //res.send("response sent by middleware");
    next();  // when you call next method it passes control to the next middleware or method (controller) in line

}

const encryptPassword=(req,res,next)=>{

    const str=req.body.password;

    console.log("Middleare-----Hit",str);
    const encodeString=btoa(str);

    console.log(encodeString);

    req.body.password=encodeString;

    // iloveindia
    //er677

    next();



    

}


module.exports={
    convertToUpperCase,
    encryptPassword

}