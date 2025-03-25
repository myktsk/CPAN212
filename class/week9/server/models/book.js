import mongoose from "mongoose";

// "title": "The Pragmatic Programmer",
//     "author": "Andrew Hunt, David Thomas",
//     "publisher": "Addison-Wesley",
//     "pages": 352,
//     "release_date": "1999-10-30",
//     "ISBN": "978-0201616224"

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  release_date: {
    type: Date,
    required: true,
  },
  ISBN: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model("books", bookSchema); // books is the collection name
export default Book;
