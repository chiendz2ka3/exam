const user = require("../models/user");

class UserController {
  addNewuser(req, res) {
    const userdata = req.body;
    const Users = new user(userdata);
    Users.save();
    res.redirect("/home");
  }
  Showlistuser(req, res) {
    user
      .find({})
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
