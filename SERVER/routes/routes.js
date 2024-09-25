const upload=require('../utils/upload')
const { uploadImage, downloadImage } = require('../controller/imageController');

const router=require('express').Router();
router.post('/upload',upload.single('file'),uploadImage);
router.get('/file/:fileId',downloadImage);
module.exports= router;