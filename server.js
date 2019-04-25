const express = require('express')
const multer  = require('multer')
import {imageFilter} from './ImageFilter';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/Users/HockToh/TestPicture')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  }
})

const upload = multer({ storage: storage, fileFilter: imageFilter }).single('image');

const app = express()
const port = 3000

app.post('/imageUploader', function (req, res) {
    upload(req,res,function(err) {
      if(err) {
          return res.end(err.message);
      }
      res.end("File is uploaded");
  });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))