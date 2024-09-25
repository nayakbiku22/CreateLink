const multer=require('multer');
// const path = require('path');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, '/tmp/uploads'); // Use /tmp instead of /var/task/uploads
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// });

// const upload = multer({ storage: storage });
const upload=multer({dest:'uploads'})


module.exports=upload