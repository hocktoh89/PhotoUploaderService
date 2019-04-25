const express = require('express')
import { singleImageUpload } from './ImageUploader';
var url = require('url');

function hostUrl(req) {
  return url.format({
    protocol: req.protocol,
    host: req.get('host')
  });
}

const app = express()
const port = 3000

app.post('/imageUploader', function (req, res) {
  singleImageUpload(req, res, function(err) {
      if(err) {
          return res.end(err.message);
      }

      res.end("File is uploaded to " + hostUrl(req) + req.file.path);
  });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))