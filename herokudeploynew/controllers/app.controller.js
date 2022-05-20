const rootController=(req,res)=>{
    res.json({
        
        message:"Success" ,

        data:"Hey from Heroku "

})
}


module.exports={
    rootController

}