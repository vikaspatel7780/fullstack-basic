// const express =require('express')
import express from "express"
const app =express();
import dotenv from "dotenv";
dotenv.config();

const port=process.env.PORT||5001
// app.use(express.static('dist'))
app.get("/",(req,res)=>{
    res.send("Welcome to my home pages")
})

app.get('/api/login',(req,res)=>{
    res.send("this is login pages")
})

app.get('/api/jokes',(req,res)=>{
    const joks=[
        {
          "id": 1,
          "joke": "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
          "id": 2,
          "joke": "What do you get if you cross a snowman and a vampire? Frostbite."
        },
        {
          "id": 3,
          "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
          "id": 4,
          "joke": "Why don't skeletons fight each other? They don't have the guts."
        },
        {
          "id": 5,
          "joke": "What do you call fake spaghetti? An impasta."
        }
      ];
      res.json(joks)
      
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
