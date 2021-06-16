import axios from "axios";

export default {
  // Gets all books from Google Books API
  getBooks: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  // Gets book with the given ID
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the post with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  // Get the saved a books from the database
  savedBooks: function () {
    return axios.get("/api/books");
  },
};
