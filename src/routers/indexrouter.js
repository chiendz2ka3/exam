const user = require('../routers/userRouter');
function route(app){
    app.use('/home', user);
}
module.exports = route;