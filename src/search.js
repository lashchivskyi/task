import React, { Component } from "react";
import guests from "./guests.json";
import "./App.css";

const converted_guests = guests.map((user) => ({
  arrived: false,
  guest: user,
}));
console.log(converted_guests);

class Search extends Component {
  state = {
    guests: converted_guests,
    filter: null,
    query: "",
  };

  handleSearch = (e) => {
    const { guests } = this.state;
    const query = e.target.value.toLowerCase();
    const results = guests.filter(
      (user) =>
        user.guest.name.toLowerCase().indexOf(query) !== -1 ||
        user.guest.company.toLowerCase().indexOf(query) !== -1 ||
        user.guest.email.toLowerCase().indexOf(query) !== -1 ||
        user.guest.address.toLowerCase().indexOf(query) !== -1 ||
        user.guest.phone.toLowerCase().indexOf(query) !== -1
    );
    console.log("[query]", results);

    this.setState({
      filter: results,
      query: e.target.value,
    });
  };

  render() {
    const { guests, query, filter } = this.state;
    const { handleSearch } = this;

    let list = guests;
    if (filter !== null && query.length > 0) {
      list = filter;
    }

    return (
      <div className="classHeader">
        <div>
          <h1 className="headerName">Guest list</h1>
          <header>
            <input
              className="handleSearch"
              onChange={handleSearch}
              value={query}
              placeholder="text.."
            />
          </header>
          <div className="users">
            <h3>The number of elements in the array: {guests.length}</h3>
            {list.map((user, key) => (
              <div key={key} id="usersId">
                <div className="usersInfo">
                  <h4>{user.guest.name}</h4>
                  <h3>{user.guest.company}</h3>
                  <h3>{user.guest.email}</h3>
                  <h3>{user.guest.phone}</h3>
                  <p>{user.guest.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
