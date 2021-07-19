import React, { Component } from "react";
import AuthService from "../../../services/auth.service";
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import ReactPaginate from "react-paginate";

import CatModal from "../showCategory/component/CatModal";
import Popup from 'reactjs-popup';

export default class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      search: '',
      categories: [],
      pagination: {},
      per_page: 5,
    };

    this.onSearch = this.onSearch.bind(this);
    this.getCategories = this.getCategories.bind(this)
    this.handleDeleteData = this.handleDeleteData.bind(this)
  }

  getCategories(search = '', page = 1) {
    AuthService.getCategory(search, page, this.state.per_page)
      .then(res => {
        const categories= res.data.data
        this.setState({
          categories,
          pagination: res.data.pagination,
        });
      })
  }

  componentDidMount() {
    this.getCategories()
  }

  onSearch(e) {
    const search = e.target.value;
    this.setState({ search });
    this.getCategories(search)
  }

  handlePageClick(data) {
    const page = data.selected + 1;
    this.getCategories(this.state.search, page)
  }

  handlePageSize(e) {
    this.state.per_page = e.target.value
    this.handlePageClick({ selected: 0 })
  }

  handleDeleteData(event) {
    if(window.confirm('Are you sure you want to delete?')) {
      AuthService.deleteCat(event.target.value)
        .then(res => {
          this.getCategories()
        })
    }
  }

  render() {
    const categories = this.state.categories;
    const pagination = this.state.pagination;

    return (
      <div className="Table">
        <div className="page-table">

          <div>
            <div className="header">
            <h2>Category List</h2>

              <div className="catPopUp">

              <CatModal/>

              </div>

          </div>


            <div className="catFunction-Top">
            <select
              value={this.state.per_page}
              onChange={this.handlePageSize.bind(this)}
              className="paginate-select">
              <option className="paginate-select_option">5</option>
              <option className="paginate-select_option">10</option>
              <option className="paginate-select_option">20</option>

            </select>

            <input 
            type="text"
            value={this.state.search}
            placeholder="Search...."
            onChange={this.onSearch}
            className="showCatSearch"
            />
            </div>

          </div>
          <>
          <table>
          <thead className="tableHead">
            <th>Id:</th>
            <th>Name:</th>
            <th>CategoryType:</th>
            <th>Action</th>
          </thead>

          <tbody>
            {categories.map(category =>
              <tr className="catData" key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>{category.categoryType}</td>
                <td>

                <Popup trigger={<button className="ActionBtnView"> View</button>} position="left center">
                <p>ID: {category.id}</p>
                <p>Category Name: {category.name}</p>
                <p>Category Type: {category.categoryType}</p>
                </Popup>

                <button 
                  onClick={this.handleDeleteData}
                  value={category.id}
                  className="ActionBtnDelete"
                  >   Delete

                </button>

                </td>
             
              </tr>
            )}
            
          </tbody>
          </table>
          </>

          <div className="paginate-style">
              <ReactPaginate
                className="paginate-style"
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pagination.last_page}
                pageRangeDisplayed={10}
                marginPagesDisplayed={3}
                onPageChange={this.handlePageClick.bind(this)}

                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
              />
          </div>

            {/* <div className="Page-Link">
              <Link to="/">Home</Link>
            </div> */}
        </div>
      </div>


    );
  }
}
