var mongoose = require('mongoose') ;
var User =mongoose.model('User', {
    email:{
    type: String,
    required :true,
    minlength :1,
    trim: true
    }
})

var newUser = new User({
email: "baba"
});

// newUser.save().then((doc)=>{
//         console.log('saved user', doc)
//     }, (e)=> {
//         console.log('failed', e);
//     });

module.exports={User};
