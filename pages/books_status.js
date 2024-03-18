let BookInstance = require('../models/bookinstance');
let Book = require('../models/book');

function get_books_status () {
  return BookInstance.find({status: 'Available'}, 'title status')
  .populate('book');
}

exports.show_all_books_status = async function() {
  try {
    let books = await get_books_status().exec();
    return books.map(function(b) {
      return Book(b.book).title + ' : ' + b.status;
    });
  }
  catch(err) {
    console.log('Could not get books by status "Available" ' + err);
  }
}