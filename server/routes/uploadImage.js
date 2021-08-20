
const aws = require('aws-sdk');
const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const multer = require('multer');
const multerS3 = require('multer-s3');
const { v4: uuidv4 } = require('uuid');
const config = require('../controllers/utils/awsS3Config');

const s3 = new aws.S3(config);

const uploadToS3 = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.BUCKET_NAME,
        key: function(req, file, cb) {
          let toSplitFile = file.originalname.split(".");
          const fileExtension = toSplitFile[toSplitFile.length - 1];
          cb(null, `images/${uuidv4()}.${fileExtension}`);
        }
    })
}).single('image');

router.route('/').post(protect, uploadToS3, (req, res, next) => {
  if (req.file) {
    res.status(200).json({
      fileName: req.file.originalname,
      fileLocation: req.file.location,
    });
  } else {
    res.status(400).json({ msg: 'File not uploaded. Try again.' });
  }  
});

module.exports = router;