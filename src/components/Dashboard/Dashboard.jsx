import React, { Component } from "react";
import CustomInputText from "../shared/CustomInputText/CustomInputText";

import "../shared/styles/Dashboard.scss";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      list: ["Andrei", "Alina", "Marcu", "Vlad", "Cristian", "Marius"],
      listSearch: ["Andrei", "Alina", "Marcu", "Vlad", "Cristian", "Marius"]
    };
  }

  handleSearchChange = e => {
    const value = e.target.value;
    const listSearch = this.state.list.filter(
      item => item.toLowerCase().indexOf(value) !== -1
    );
    this.setState({
      [e.target.name]: e.target.value,
      listSearch: listSearch
    });
  };

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
    console.log(this.state);
  }

  // filterUpdate(value) {
  //   this.setState({search : value});
  // }
  render() {
    return (
      <div className="row page">
        <div className="left-container col s3">
          <form className=" container col s12">
            <div className="col s12 m12 l12">
              <CustomInputText
                handleChange={this.handleSearchChange}
                type="text"
                min="3"
                max="100"
                id="faculty"
                name="search"
                value={this.state.search}
                label="Facultate"
                placeholder="Informatica"
              />
            </div>
          </form>
          <div className="leftSide-body col s12 m12 l12">
            <div className="users-list col s12 m12 l12">
              {this.state.listSearch.map(item => {
                return (
                  <div className="col s12 m12 l12 ">
                    <div className="col s1 m1 l1">
                      <i class="fas fa-smile-beam" />
                    </div>
                    <div className="col s9 m9 l9">{item}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="right-container col s9">
          <div className="row header">
            <div className="col s12">HEADER</div>
          </div>

          <div className="row section">
            <div className="col s12">CONTENT</div>
          </div>

          <div class="row footer">
            <form class="col s12  ">
              <div class="row">
                <div class="col s12">
                  <textarea
                    id="textarea1"
                    class="materialize-textarea "
                    placeholder="Add a comment"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}