import React, { Component } from "react";
import guests from "./guests.json";
import "./App.css";
import ReactPaginate from "react-paginate";

const converted_guests = guests.map((user) => ({
  arrived: false,
  guest: user,
}));

class Paginator extends Component {
  state = {
    guests: converted_guests,
    offset: 0,
    perPage: 3,
    currentPage: 0,
    data: [],
  };

  renderFragment(user) {
    return (
      <React.Fragment>
        <h4>{user.name}</h4>
        <h3>{user.company}</h3>
        <h3>{user.email}</h3>
        <h3>{user.phone}</h3>
        <p>{user.address}</p>
      </React.Fragment>
    );
  }

  receivedData() {
    const data = guests;
    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    const postData = slice.map((user) => this.renderFragment(user));

    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      postData,
    });
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  };
  componentDidMount() {
    this.receivedData();
  }

  render() {
    return (
      <div className="classHeader">
        <div className="users">
          <h1 className="headerName">Pagination</h1>
          <div id="usersId">{this.state.postData}</div>
          <div>
            <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Paginator;
