const express = require('express')
import { singleImageUpload } from './ImageUploader';

const app = express()
const port = 3000

app.post('/imageUploader', function (req, res) {
  singleImageUpload(req,res, function(err) {
      if(err) {
          return res.end(err.message);
      }
      res.end("File is uploaded to " + req.file.path);
  });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))