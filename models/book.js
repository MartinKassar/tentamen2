mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

        isbn: String,             //Type of place
        title: String,            // The price
        author: String,       //The monthly fee
        price: Number,         //If bidding is active or not
        sellerEmail: String,
        used: Boolean,
        location: {             //Coordinates details
            city: String,          //Latitude
            street: String          //Longitude
        }
    
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;


