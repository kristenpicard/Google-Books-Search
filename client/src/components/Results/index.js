import React, { Component } from "react";

class Results extends Component {
  render() {
    return (
      <div>
        {!this.props.books.length ? (
          <h1>No Results to Display</h1>
        ) : (
          <div>
            {this.props.books.map((result) => (
              <div className="card mb-3" key={result._id}>
                <div className="row">
                  <div className="col-md-2">
                    <img alt={result.title} src={result.image} />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">
                        {result.title} by {result.authors}
                      </h5>
                      <p className="card-text">{result.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Results;
