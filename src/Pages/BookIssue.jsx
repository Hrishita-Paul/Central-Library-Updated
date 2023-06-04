import React, { Component } from 'react';
import './BookIssue.css';
import { bookTypes } from '../Data';

class BookIssue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookName: '',
      author: '',
      type: '',
      books: [],
      showMessage: false,
      messageType: '',
      messageText: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleRadioChange = (e) => {
    this.setState({
      type: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { bookName, author, type, books } = this.state;

    // Validate input fields
    if (!bookName || !author || !type) {
      this.showMessage('error', 'Please fill in all fields');
      return;
    }

    // Create a new book object
    const newBook = {
      id: Date.now(), // Unique ID for the book
      bookName,
      author,
      type,
    };

    // Add the new book to the books array
    const updatedBooks = [...books, newBook];
    this.setState(
      {
        books: updatedBooks,
        bookName: '',
        author: '',
        type: '',
      },
      () => {
        this.showMessage('success', 'Book added successfully');
      }
    );
  };

  showMessage = (type, text) => {
    this.setState({
      showMessage: true,
      messageType: type,
      messageText: text,
    });
  };

  renderBookRow = (book) => {
    return (
      <tr key={book.id}>
        <td>{book.bookName}</td>
        <td>{book.author}</td>
        <td>{book.type}</td>
      </tr>
    );
  };

  render() {
    const { bookName, author, type, books, showMessage, messageType, messageText } = this.state;

    return (
      <>
        {/* Show message if showMessage is true */}
        {showMessage && (
          <div className={`alert alert-${messageType} alert-dismissible fade show`} role="alert">
            <strong>{messageType === 'success' ? 'Success' : 'Error!'}</strong> {messageText}
            </div>
        )}

        <div className="container my-3">
          <p className="heading">Book Issue</p>
          <hr />

          {/* Form section */}
          <form onSubmit={this.handleSubmit}>
            {/* Name input */}
            <div className="form-group row">
              <div className="col-sm-2">
                <span className="label-text">Name</span>
              </div>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="bookName"
                  name="bookName"
                  placeholder="Book Name"
                  value={bookName}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <br />

            <div className="form-group row">
              <div className="col-sm-2">
                <span className="label-text">Author</span>
              </div>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  name="author"
                  placeholder="Author"
                  value={author}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <br />

            {/* Type selection */}
            <fieldset className="form-group">
              <div className="row">
                <legend className="col-form-label col-sm-2 pt-0">Type</legend>
                <div className="col-sm-10">
                  {bookTypes.map((bookType) => (
                    <div className="form-check" key={bookType}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="type"
                        id={bookType}
                        value={bookType}
                        checked={type === bookType}
                        onChange={this.handleRadioChange}
                      />
                      <label className="form-check-label" htmlFor={bookType}>
                        {bookType}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </fieldset>
            <br />

            {/* Submit button */}
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">
                  Add Book
                </button>
              </div>
            </div>
          </form>

          {/* Table section */}
          <div id="table">
            <p className="heading">Your books</p>
            <table className="table table-striped">
              <thead>
                <tr className="table-warning">
                  <th scope="col">Name</th>
                  <th scope="col">Author</th>
                  <th scope="col">Type</th>
                </tr>
              </thead>
              <tbody>{books.map(this.renderBookRow)}</tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default BookIssue;
