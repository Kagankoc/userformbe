const express = require("express");
const multer = require('multer');
const upload = multer();
const router =express.Router();

const userController = require('../controllers/auth');

router.post('/login',upload.none(),userController.login);
router.post('/logout',upload.none(),userController.logout);
router.post('/register',upload.none(),userController.register);

module.exports = router;