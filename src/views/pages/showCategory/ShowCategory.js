import React, { Component, useState } from "react";
import AuthService from "../../../services/auth.service";
import ReactPaginate from "react-paginate";

import CatModal from "../showCategory/component/CatModal";
import Popup from 'reactjs-popup';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import GeneralData from "../GeneralRegistration/component/GeneralData/GeneralData";

import Select from 'react-select';




const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger catagory-required" role="alert">
        This field is required!
      </div>
    );
  }
};

const itemName = value => {
  if (value.length > 100) {
    return (
      <div className="alert alert-danger" role="alert">
        must be less than 100 characters.
      </div>
    )
  }
}

const options = [
  { value: 'Shop', label: 'Shop' },
  { value: 'Product', label: 'Product' },
];


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
    this.getCategories = this.getCategories.bind(this);
    this.handleDeleteData = this.handleDeleteData.bind(this);

    this.handleEditCategoryData = this.handleEditCategoryData.bind(this);
  }


  getCategories(search = '', page = 1) {
    AuthService.getCategory(search, page, this.state.per_page)
      .then(res => {
        const categories = res.data.data
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
    if (window.confirm('Are you sure you want to delete?')) {
      AuthService.deleteCat(event.target.value)
        .then(res => {
          this.getCategories()
        })
    }
  }

  handleEditCategoryData(e) {

    e.preventDefault();

    const id = e.target[0].value
    const name = e.target[2].value
    const type = e.target[3].value

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    // if (window.alert('Update Done!')) {
    AuthService.editCat(id, name, type)
      .then(response => {
        this.getCategories()
      })
    // }
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

                <CatModal />

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
                <th className="th_id">Id:</th>
                <th>Name:</th>
                <th>Category Type:</th>
                <th className="action_th">Action</th>
              </thead>

              <tbody>
                {categories.map(category =>
                  <tr className="catData" key={category.id}>
                    <td className="td_id">{category.id}</td>
                    <td>{category.name}</td>
                    <td>{category.categoryType}</td>
                    <td>

                      <Popup trigger={<button className="ActionBtnView"> View</button>} position="left center" className="view-popup">
                        <p>ID: {category.id}</p>
                        <p>Name: {category.name}</p>
                        <p>Category Type: {category.categoryType}</p>
                      </Popup>


                      <Popup className="editPopUp-popup-content" trigger={<button className="edit-popupBtn"> Edit </button>} position="left center" >
                        {close => (
                          <div>
                            <button className="close" onClick={close}>
                              &times;
                            </button>

                            {/* Edit Form */}
                            <Form onSubmit={this.handleEditCategoryData}
                              ref={c => {
                                this.form = c;
                              }}
                            >
                              {!this.state.successful && (

                                <div className="category-section">
                                  <h1>Edit Category</h1>

                                  <Input
                                    type="hidden"
                                    value={category.id}
                                  />

                                  <Input
                                    className="editCategory-input"
                                    value={"ID: " + category.id}
                                    readOnly
                                  />
                                  <Input
                                    type="text"
                                    className="editCategory-input"
                                    name="categoryName"
                                    value={category.name}
                                    validations={[required, itemName]}
                                  />
                                  <p>{category.categoryType}</p>
                                    

                                  <div className="category-EditSection">
                                  <h6>Type: </h6>

                                    <select
                                      className="categoryType-Editselect"
                                      name="categoryType"
                                      validations={[required]}
                                      required
                                    >
                                      <option value="Shop">
                                        Shop
                                      </option>
                                      <option value="product">
                                        Product
                                      </option>
                                    </select>

                                   
                                  </div>

                                  <div className="edit-category-btn-section">
                                    <button className="btn btn-block edit-category-btn submit" >
                                      Submit
                                    </button>
                                  </div>
                                </div>
                              )}
                              {this.state.message && (
                                <div className="form-group category-message">
                                  <div
                                    className={
                                      this.state.successful
                                        ? "alert alert-success"
                                        : "alert alert-danger"
                                    }
                                    role="alert"
                                  >
                                    {this.state.message}
                                  </div>
                                </div>
                              )}
                              <CheckButton
                                style={{ display: "none" }}
                                ref={c => {
                                  this.checkBtn = c;
                                }}
                              />
                            </Form>

                            <GeneralData/>

                          </div>
                        )}
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
