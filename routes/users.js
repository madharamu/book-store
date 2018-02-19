var express = require('express');
var router = express.Router();
var User = require('../modes/user');

 router.get('/',function(req, res){     
     console.log('All users list...')
     User.find({}).exec(function(err, users){
         res.json(users);
         console.log(users);
     });
 });

 router.get('/:id',function(req, res){
    console.log('User by id');
    User.findById({
        _id:req.params.id
    }).exec(function(err, user){
        res.json(user);
        console.log(user);
    });
 });

 router.post('/',function(req, res){
    console.log('Insering user into db...');
    var user = User();
    user.name = req.body.name;
    user.emailId = req.body.emailId;
    user.password = req.body.password;
    user.save(function(err, user){
        res.send(user);
        console.log('User saved...');
    })
 });

 router.put('/:id',function(req, res){
     console.log('Editing existing user details..')
     User.findByIdAndUpdate({
         _id:req.params.id
     },{
         $set: {
             name: req.body.name,
             emailId: req.body.emailId,
             password: req.body.password
         }
     },{
         upsert: true
     }, function(err, user){
        res.send(user);
        console.log(user);
        console.log('Updated successfully..');
     })
 });

router.delete('/:id',function(req, res){
    console.log('Deleting user record...');
    User.findByIdAndRemove({
        _id:req.params.id
    },function(err, user){
        res.send(user);
        console.log('User deleted...')
    });
});


 module.exports = router;