export const imageFilter = (req, file, cb) => {
    // accept image only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed!'), false);
    }

    return cb(null, true);
};
