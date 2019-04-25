import multer from 'multer';
import {imageFilter} from './ImageFilter';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/Users/HockToh/TestPicture')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  }
})

export const singleImageUpload = multer({ storage: storage, fileFilter: imageFilter }).single('image');
