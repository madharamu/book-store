var express = require('express');
var router = express.Router();
var Book = require('../modes/book');

 router.get('/',function(req, res){     
     console.log('All books list...')
     Book.find({}).exec(function(err, books){
         res.json(books);
         console.log(books);
     });
 });

 router.get('/:id',function(req, res){
    console.log('Book by id');
    Book.findById({
        _id:req.params.id
    }).exec(function(err, book){
        res.json(book);
        console.log(book);
    });
 });

 router.post('/',function(req, res){
    console.log('Insering book into db...');
    var book = Book();
    book.title = req.body.title;
    book.author = req.body.author;
    book.category = req.body.category;
    book.price = req.body.price;
    book.save(function(err, book){
        res.send(book);
        console.log('Book saved...');
    })
 });

 router.put('/:id',function(req, res){
     console.log('Editing existing book details..')
     Book.findByIdAndUpdate({
         _id:req.params.id
     },{
         $set: {
             title: req.body.title,
             author: req.body.author,
             category: req.body.category,
             price: req.body.price
         }
     },{
         upsert: true
     }, function(err, book){
        res.send(book);
        console.log(book);
        console.log('Updated successfully..');
     })
 });

router.delete('/:id',function(req, res){
    console.log('Deleting book record...');
    Book.findByIdAndRemove({
        _id:req.params.id
    },function(err, book){
        res.send(book);
        console.log('Book deleted...')
    });
});


 module.exports = router;