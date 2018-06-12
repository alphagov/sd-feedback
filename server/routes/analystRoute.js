const express = require('express');
const router = express.Router();
const GridFsStorage = require('multer-gridfs-storage');
const multer = require('multer');

const keys = require('../config/keys');

const storage = new GridFsStorage({
  url: keys.mongoURI,
  file: (req, file) => {
    return { filename: req.body.analystName, bucketName: 'profiles' };
  }
});

const upload = multer({ storage });

const analystController = require('../controllers/analystController');

router.get('/', analystController.getAnalysts);
router.post('/', upload.single('analystImage'), analystController.addAnalyst);

router.get('/image/:id', analystController.getAnalystImage);

module.exports = router;
