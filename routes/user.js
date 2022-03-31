const express = require("express");
const multer = require('multer');
const upload = multer();

const router =express.Router();

const userController = require('../controllers/user');

router.put('/user/edit',upload.none(),userController.editUser);
router.delete('/user/delete',upload.none(),userController.deleteUser);
router.get('/user',upload.none(),userController.getUsers);

module.exports = router;