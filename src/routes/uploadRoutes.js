import express from 'express';
import upload from '../utils/fileUpload.js';
import { sendSuccess } from '../utils/responseHandler.js';

const router = express.Router();

router.post('/', upload.single('image'), (req, res) => {
  sendSuccess(res, 200, 'Image uploaded successfully', {
    imagePath: `/${req.file.path}`,
  });
});

export default router;