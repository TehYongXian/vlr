import React, { Component, useState, useEffect, useMemo } from "react";
import AuthService from "../../../services/auth.service";
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
// import { useGlobalFilter, useTable } from 'react-table'
import { useTable, usePagination } from "react-table";


export default class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      search: '',
      categories: [],
      pagination: {},
    };

    this.onSearch = this.onSearch.bind(this);
  }
  
  componentDidMount() {
    AuthService.getCategory()
      .then(res => {
        const  categories= res.data.data;
        this.setState({ categories, pagination: res.data.pagination });
      })
  }

  onSearch(e) {
    const search = e.target.value;
    this.setState({ search });

    AuthService.getCategory(search)
      .then(res => {
        const  categories= res.data.data;
        this.setState({ categories, pagination: res.data.pagination });
      })
  }

  render() {
    const categories = this.state.categories;

    // const columns = useMemo(() => columns, [])
    // const columns = useMemo(() => columns, [])

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

            <div className="Page-Link">
            <Link to="/">Home</Link>
              
            </div>
          
            <ul>
              <li></li>
            </ul>

        </div>
      </div>


    );
  }
}
