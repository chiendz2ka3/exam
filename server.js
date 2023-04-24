const express = require('express')
const app = express()
// let router = express.Router();
const port = 3000
const db = require("./src/database/database.js");
 const route = require('./src/routers/indexrouter.js')
// const session = require('express-session');
app.listen(port, () => {
    console.log(`kết nối với máy chủ chiến trương ${port}`)
})
db.connect();
 app.use(express.urlencoded({extended:true}));
// const userrouter = require('./src/routers/userRouter.js');
route(app);
// router.use('/',userrouter);