const express=require("express")

//Traemos el enrutador def express
const router =express.Router();
router.get("/", (req, res)=>{
    res.render("misitioHome", {layout:"misitio"});
})

module.exports=router;