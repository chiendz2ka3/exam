const express = require("express");
let router = express.Router();
const user = require('../controller/UserController');
router.get('', user.Showlistuser);
router.post('/add-user', user.addNewuser);
router.get('/login', user.Login);
router.post('/delete-user/:id', user.deleteuser);
router.post('/loginuser', user.loginUsers);
module.exports = router;