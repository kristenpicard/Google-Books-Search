import React, { Component } from "react";
import Results from "../components/Results";
import SearchForm from "../components/SearchForm";
import API from "../utils/API";

class Search extends Component {
  state = {
    result: "",
    books: []
};

componentDidMount() {
    this.searchBook();
}

makeBook = bookData => {
    return {
        _id: bookData.id,
        title: bookData.volumeInfo.title,
        authors: bookData.volumeInfo.authors,
        description: bookData.volumeInfo.description,
        image: bookData.volumeInfo.imageLinks.thumbnail,
        link: bookData.volumeInfo.previewLink
    }
}

searchBook = query => {
    API.getBook(query)
        .then(res => this.setState({ books: res.data.items.map(bookData => this.makeBook(bookData)) }))
        .catch(err => console.error(err));
};

handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
        [name]: value
    });
};

handleFormSubmit = event => {
    event.preventDefault();
    this.searchBook(this.state.search);
};

  render() {
    return (
      <div>
        <div className="container">
        <h1 className="text-center">Search Books!</h1>
        <p className="text-center">Use the search bar to look for various book titles.  Click view to find out more about the book.  Click save to add that book to your list of unread books.</p>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          search={this.state.search}
        />
        <Results
          books={this.state.books}
        ></Results>
        </div>
      </div>
    );
  }
}

export default Search;
