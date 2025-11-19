const express = require('express')
const uploadFile = require('../service/imagekit.service')
const multer = require("multer")

const router = express.Router()

const audiofile = multer({storage:multer.memoryStorage()})



router.post('/songs',audiofile.single("audio"),async(req,res)=>{

const filedata = await uploadFile(req.file)
    console.log(filedata);
    res.json({
        Message:"request send succ..",
        
    })
})

module.exports=router