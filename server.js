const express = require('express')
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/Users/HockToh/TestPicture')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
  })
  
  var upload = multer({ storage: storage })

  const app = express()
  const port = 3000

app.post('/imageUploader', upload.single('image'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})

// app.get('/', (req, res) => res.send('Hello Baby!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))