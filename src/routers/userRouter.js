const express = require("express");
let router = express.Router();
const user = require('../controller/UserController');
router.get('', user.Showlistuser);
router.post('/home/add-user', user.addNewuser);