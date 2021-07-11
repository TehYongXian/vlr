import React, { Component, useState, useEffect, useMemo } from "react";
import AuthService from "../../../services/auth.service";
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
// import { useGlobalFilter, useTable } from 'react-table'
import { useTable, usePagination } from "react-table";
import Pagination from '../showCategory/component/Pagination'


export default class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      search: '',
      categories: [],
      pagination: [],
      totalResults: 0,
      currentPage: 1,
    };

    this.onSearch = this.onSearch.bind(this);
  }
  
  componentDidMount() {
    AuthService.getCategory()
      .then(res => {
        const categories= res.data.data;
        this.setState({ categories, pagination: res.data.pagination, totalResults: AuthService.getCategory.totalResults});
      })
  }

  onSearch(e) {
    const search = e.target.value;
    this.setState({ search });

    AuthService.getCategory(search)
      .then(res => {
        const categories= res.data.data;
        this.setState({ categories, pagination: res.data.pagination});
      })
  }

  nextPage(){
    AuthService.nextPage()
      .then(res => {
        const categories= res.data.data;
        this.setState({ categories, pagination: res.data.pagination, currentPage: categories.pageNumber });
      })
  }

  render() {
    const categories = this.state.categories;
    const numberPages = Math.floor(this.state.totalResults / 10);



    return (
      <div className="Table">
        <div className="page-table">

          <div>
            <h2>Category List</h2>
            <input 
            type="text"
            value={this.state.search}
            placeholder="Search...."
            onChange={this.onSearch}
            />
            
          </div>
          <>
          <table>
          <thead className="tableHead">
            <th>Id:</th>
            <th>Name:</th>
            <th>CategoryType:</th>
          </thead>
          
          <tbody>
            {categories.map(category =>
              <tr classname="catData" key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>{category.categoryType}</td>
              </tr>
            )}
          </tbody>
          </table>
          </>

            
          

          { this.state.totalResults > 10 ?  <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} /> : ''}
            <ul>
              <li>Next</li>
              <li>Previous</li>
            </ul>


            <div className="Page-Link">
            <Link to="/">Home</Link>
              
            </div>
        </div>
      </div>


    );
  }
}
