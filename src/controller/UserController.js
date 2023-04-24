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

  // delete user
  deleteuser(req,res){
    let id = req.params.id;
    console.log(id);
    user.findByIdAndDelete(id)
        .then(rs=>res.redirect("/home"))
        .catch(err=>res.send(err));
};
  // Login User
  Login(req , res){
    res.render('login');
  }
 async loginUsers(req , res){
  console.log("da log duoc vao ham");
    let existUser = await user.findOne({UserName: req.body.UserName});
    if(!existUser) return res.status(401).send("Email or password is not correct");
    const checkPassword = await bcrypt.compare(req.body.PassWord,existUser.PassWord);
    if(!checkPassword) return res.status(401).send("Email or password is not correct");
    res.redirect('/home');
  }
}
module.exports = new UserController();
