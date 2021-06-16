import React, { Component } from "react";
import API from "../utils/API";

import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";


class Search extends Component {
  state = {
    search: "",
    books: [],
  };

  // When the component mounts, get a list of all available base books and update this.state.books
  componentDidMount() {
    API.getBooks()
      .then(res => this.setState({ books: res.data.message }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getBooks(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        
          <h1 className="text-center">Search Books!</h1>
          
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            books={this.state.books}
          />
          <SearchResults results={this.state.results} />
      
      </div>
    );
  }
}

export default Search;