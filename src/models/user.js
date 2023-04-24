let mongoose = require("mongoose");
let user = new mongoose.Schema({
    FirstName:{
        type:String,
        required: true,
        minLength:[6,'Tên phải có độ dài tối thiểu là 6'],
        maxLength:255
    },
    LastName:{
        type:String,
        required: true,
        minLength:[6,'Tên phải có độ dài tối thiểu là 6'],
        maxLength:255
    },
    tel: {
        type:String,
        required:true,
        validate: {
            validator: (v)=>{
                const regExp = /^(\([0-9]{3}\) |[0-9]{3})[0-9]{3}[0-9]{4}/;
                return v.match(regExp) && v.startsWith('0');
            },
            message: t => `${t.value} không phải là số điện thoại`
        }
    },
    UserName:{
        type:String,
        required: true,
        minLength:[6,'User phải có độ dài tối thiểu là 6'],
        maxLength:255
    },
    PassWord:{
        type:String,
        required: true,
        minLength:[6],
        maxLength:255
    }
});
module.exports = mongoose.model("user",user);