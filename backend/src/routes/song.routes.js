const express = require('express')
const uploadFile = require('../service/imagekit.service')
const multer = require("multer")
const AiService = require('../service/ai.service')   

const router = express.Router()

const audiofile = multer({storage:multer.memoryStorage()})



router.post('/songs',audiofile.single("audio"),async(req,res)=>{

const filedata = await uploadFile(req.file)
const mood = await AiService(filedata.url)
console.log(filedata.url)
console.log(mood)   
    
    res.json({
        Message:"request sent successfully",
       
        
    })
})

module.exports=router