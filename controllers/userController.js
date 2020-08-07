
const {User,validate} = require('../models/userModel');
const bcrypt = require('bcrypt-nodejs');
exports.user_create = async (req, res) => {
     // let user = new User(
     //      { first_name, last_name, email_id, country_code, mobile_number, password, device_type, device_token, about_me, latitude, longitude, gender } = req.body);

     // user.save(function (err) {
     //      if (err) {
     //           return (err);
     //      }
     //      res.send('user Created successfully')
     // })
     try{
          const {err} = await validate(req.body);
          
          if(err) return res.status(400).send(err.details);
     
      
          let user = await User.findOne({email : req.body.email});
          if(user) return res.status(400).send('User already registered');
          user = new User(req.body,['email','name','password']);
          const salt = await bcrypt.genSaltSync(10);
          user.password = await bcrypt.hashSync(user.password,salt);
          await user.save();
         
          res.status(200).send("user register ");
  
      }catch(err){
          return res.status(400).send(err);
      }
};

exports.user_details = (req, res) => {
     User.findById(req.params.id, function (err, user) {
          if (err) return(err);
          res.send(user);
     })
};


exports.user_update = (req, res) => {
     User.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, user) {
          if (err) return(err);
          res.send('User udpated.');
     });
};


exports.user_delete = (req, res) => {
     User.findByIdAndRemove(req.params.id, function (err) {
          if (err) return(err);
          res.send('User Removed successfully!');
     })
};



exports.test = function (req, res) {
     res.send('Test controller!');
};