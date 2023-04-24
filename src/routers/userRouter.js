const express = require("express");
let router = express.Router();
const user = require('../controller/UserController');
router.get('', user.Showlistuser);
router.post('/add-user', user.addNewuser);
module.exports = router;