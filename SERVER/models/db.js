const mongoose=require('mongoose')

const dbConnection=async()=>{
    try {
       await mongoose.connect(process.env.MONGODB_URL)
        console.log(`MongoDB Connected`)
    } catch (error) {
        console.error(`Error while connecting to database`)
    }
}

module.exports=dbConnection