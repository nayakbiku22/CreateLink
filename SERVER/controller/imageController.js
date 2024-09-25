const File=require('../models/file')


 const uploadImage=async(req,res)=>{
    const fileObj={
        path: req.file.path,
        name:req.file.originalname
    }
    // console.log(fileObj.name)
    try {
        const file=await File.create(fileObj)
        // console.log(file)
        res.status(200).json({path:`https://create-link-server.vercel.app/file/${file._id}`})
    } catch (error) {
        console.error(error.message)
        res.status(500).json({error:error.message})
    }
}

const downloadImage=async(req,res)=>{
    try {
        const id=req.params.fileId
        const file=await File.findById(id)
        file.downloadContent++;
        await file.save();
        res.download(file.path,file.name)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({error:error.message})
    }
}

module.exports={uploadImage,downloadImage}