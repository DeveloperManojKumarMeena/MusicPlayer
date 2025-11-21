const express = require('express')
const uploadFile = require('../service/imagekit.service')
const multer = require("multer")
const AiService = require('../service/ai.service')   
const songModel = require('../models/songs.model')

const router = express.Router()

const audiofile = multer({storage:multer.memoryStorage()})



router.post('/songs',audiofile.single("audio"),async(req,res)=>{

const filedata = await uploadFile(req.file)
const mood = await AiService(req.file.originalname)

   let moodText = mood.text;

   moodText = moodText.substring(moodText.indexOf(`{`),moodText.lastIndexOf(`}`)+1)
    moodText = JSON.parse(moodText);


   const newSong = await songModel.create({
        title:moodText.title,
        artist:moodText.artist,
        audio:filedata.url,
        mood:moodText.mood
    })
    res.json({
        Message:"request sent successfully",
        data:newSong
        
    })
})

module.exports=router