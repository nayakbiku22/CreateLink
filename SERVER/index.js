const express=require('express');
const router=require('./routes/routes')
const cors=require('cors')
const app=express();
require('dotenv').config()
const dbConnection=require('./models/db')
const PORT=process.env.PORT ;

app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://create-link-tau.vercel.app"); // Adjust this accordingly
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});
app.use('/',router)

dbConnection();
// app.get('/',(req,res)=>{
//     res.send("Hello")
// })
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT} `)
})