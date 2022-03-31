const express = require("express");
const multer = require('multer');
const upload = multer();

const router =express.Router();

const userController = require('../controllers/user');

router.put('/edit',upload.none(),userController.editUser);
router.delete('/delete',upload.none(),userController.deleteUser);
router.get('/users',upload.none(),userController.getUsers);

module.exports = router;