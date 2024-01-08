const express = require('express');
const router=express.Router();
const Feedback=require('../models/Feedback');

router.post('/userFeedback',async (req,res)=>{
   try {
    const {name,email,message,feedbackDate}=req.body;

    const newFeedback=new Feedback({name,email,message,feedbackDate});

    const saveFeedack= await newFeedback.save();

    res.status(201).json(saveFeedack);
    
   } catch (error) {
    console.error(error);
    res.status(500).json({error:'Error in saving feedback'})
   }
     


})

module.exports = router;