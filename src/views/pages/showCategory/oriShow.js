import React, { Component, useState, useEffect } from "react";
import AuthService from "../../../services/auth.service";
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import { useGlobalFilter, useTable } from 'react-table'




export default class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };
  }
  
  
  
  
  componentDidMount() {
    AuthService.getCategory()
      .then(res => {
        const  categories= res.data;
        this.setState({ categories });
      })
  }

  

  render() {
    const categories = this.state.categories;

    return (
      
      <div className="Table">
        <div className="page-table">

          <div>
            <h2>Category List</h2>
          
          
            <input 
            type="text"
            key="random1"
            // value={keyword}
            placeholder={"Search...."}
            // onChange={(this.onchange}
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
          
        </div>
      </div>


    );
  }
}
