const user = require("../models/user");
const bcrypt = require("bcryptjs");
class UserController {
 async addNewuser(req, res) {
  console.log(req.body.PassWord);
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.PassWord,salt);
    const userdata = {
      FirstName : req.body.FirstName,
      LastName : req.body.LastName,
      tel: req.body.tel,
      UserName: req.body.UserName, 
      PassWord: hashPassword
    };
    const Users = new user(userdata);
    try {
      Users.save();
    } catch (error) {
      res.status(404).send("404 NOT FOUND");
    }
    res.redirect("/home");
  }
  Showlistuser(req, res) {
    user.find({})
      .then((result) => {
        res.render("home", {
          item: result,
        });
      })
      .catch((err) => {
        console.log("fail!!!", err);
      });
  }
}
module.exports = new UserController();
