import React, { Component, useState, useEffect, useMemo } from "react";
import AuthService from "../../../services/auth.service";
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import ReactPaginate from "react-paginate"
import { 
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton
} from "@coreui/react";

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

  render() {
    const categories = this.state.categories;
    const pagination = this.state.pagination

    return (
      <div className="Table">
        <div className="page-table">

          <div>
            <div className="header">
            <h2>Category List</h2>



              <Link to={"/Category"}><button className="header_add-btn" >ADD</button></Link>
              <CModal
              className="show d-block position-static"
              backdrop={false}
              keyboard={false}
              portal={false}
              visible 
              >
<CModalHeader>
    <CModalTitle>Modal title</CModalTitle>
  </CModalHeader>
  <CModalBody>Modal body text goes here.</CModalBody>
  <CModalFooter>
    <CButton color="secondary">Close</CButton>
    <CButton color="primary">Save changes</CButton>
  </CModalFooter>
</CModal>
             
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
                <button>View</button>
                <button>Delete</button>
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
