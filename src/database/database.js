const mongoose = require('mongoose');
 async function connect(){
    try {
        await mongoose.connect('mongodb+srv://anhchiendz:wN2oTrQ8CkId6mLf@cluster0.m4r9mp2.mongodb.net/Collections', {
        useNewUrlParser : true,
        useUnifiedTopology : true
        });
        console.log("connect seccessfull");
    } catch (error) {
        console.log("connect fail!!!");
    }
}
module.exports = {connect};