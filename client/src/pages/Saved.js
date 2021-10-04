import React, { Component } from "react";
import API from "../utils/API";

class Saved extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount() {
    this.saveBook();
  }

  saveBook = () => {
    API.savedBooks()
      .then((res) =>
        this.setState({
          savedBooks: res.data,
        })
      )
      .catch((err) => console.error(err));
  };

  handleButtonClick = (id) => {
    API.deleteBook(id).then(this.componentDidMount());
  };

  render() {
    const { savedBooks } = this.state;
    console.log(savedBooks);
    return (
      <div>
        <h2 className="text-center">Saved books</h2>
        {/* <SavedResults savedBooks={this.state.savedBooks} /> */}
        <div>
          {savedBooks.length == 0 ? (
            <h1 className="text-center">No Results to Display</h1>
          ) : (
            <div>
              {savedBooks.map((result) => (
                <div className="card mb-3" key={result._id}>
                  <div className="row">
                    <div className="col-md-2">
                      <img
                        alt={result.title}
                        className="img-fluid"
                        src={result.image}
                      />
                    </div>
                    <div className="col-md-10">
                      <div className="card-body">
                        <h5 className="card-title">
                          {result.title} by {result.authors}
                        </h5>
                        <p className="card-text">{result.description}</p>
                        <div>
                          <a
                            href={result.link}
                            className="btn badge-pill btn-dark mt-3"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            View
                          </a>
                          <button
                            onClick={() => this.handleButtonClick(result._id)}
                            className="btn badge-pill btn-dark mt-3"
                          >
                            {/* {savedBooks
                            .map((book) => book._id)
                            .includes(result._id)
                            ? "Unsave"
                            : "Save"} */}
                            Unsave
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Saved;
