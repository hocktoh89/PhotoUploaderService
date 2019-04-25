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

var upload = multer({ storage: storage, fileFilter: imageFilter });

const app = express()
const port = 3000

app.post('/imageUploader', upload.single('image'), function (err, req, res, next) {

  if(err)
  {
    res.status(500).send(err.message);
  } else {
    res.status(200).send('I will give you a permanennt link to do upload');
  }

  // res.status(200).send('I will give you a permanennt link to do upload');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))