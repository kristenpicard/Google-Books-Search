import React, { Component } from "react";
import Results from "../components/Results";
import SearchForm from "../components/SearchForm";
import API from "../utils/API";

class Search extends Component {
  state = {
    search: "",
    books: [],
  };

  // When the component mounts, get a list of all available base books and update this.state.books
  componentDidMount(query) {
    API.getBooks(query)
    .then((res) =>
      this.setState({
        books: res.data.items.map((bookData) => this.createBook(bookData)),
      })
    )
    .catch((err) => console.error(err));
  }

  createBook = (bookData) => {
    return {
      _id: bookData.id,
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
      image: bookData.volumeInfo.imageLinks.thumbnail,
      link: bookData.volumeInfo.previewLink,
    };
  };

  

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getBooks(this.state.search)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch((err) => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <h1 className="text-center">Search Books!</h1>

        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          search={this.state.search}
        />
        <Results books={this.state.books} />
      </div>
    );
  }
}

export default Search;
