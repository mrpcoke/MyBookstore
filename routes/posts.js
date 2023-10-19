/*
Sample Rest API for MongoDB Database using 
Node JS, express
All code written by Paul Coke (c)2023
*/
const express = require("express");
const router = express.Router(); 
const Book = require("../model/Books");

//Create a new book database entry in the DB
router.post('/', (req,res)=>{

    const book = new Book({

        title: req.body.title,
        author: req.body.author

    });

    book.save()
    .then((data)=>{

        res.json(data);
    })
    .catch((err)=>{

        res.json({message: err});
    })

});

//Read ALL books in the DB
router.get('/', async (req,res)=>{

    const book = await Book.find();

    try{

        res.json(book);
    }
    catch(err){

        res.json({message: err});
    }

});

//Search specific book by Id
router.get('/:bookid', async (req,res)=>{

    const book = await Book.findById(req.params.bookid);

    try{

        res.json(book);
    }
    catch(err){

        res.json({message: err});
    }

});

//Delete book from DB
router.delete('/:bookId', async (req,res)=>{

        const book = await Book.deleteOne({_id: req.params.bookId});
    
        try{
            
            res.json(book);
        }
        catch(err){

            res.json({message: err});
        }

});

//Update book 
router.patch('/:bookId', async (req,res)=>{

    const book = await Book.updateOne({_id: req.params.bookId}, {$set: {title: req.body.title }});

    try{

        res.json(book);
    }
    catch(err){

        res.json({ message: err});
    }

});


module.exports = router; 