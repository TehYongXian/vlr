import { supportsColor } from 'chalk';
import React, { Component, useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import authService from 'src/services/auth.service';




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

//   const editCategory = (id, editCategory) => {
//       setCategory
//   }



export default class EditFunction extends Component{
    constructor(props) {
        super(props);

    
    }

    // const [editCategory, setEditCategoryId] = useState(null);
    render() {  
        
    return (
            <div>
                <Form>
                    <h1>Edit informations</h1>
                    <Input 
                    type="text"
                    className="category-input"
                    name="categoryName"
                    placeholder="Name"
                    // value={this.state.categoryName}
                    // onChange={this.onChangeName}
                    validations={[required, itemName]}
                    />
                    
                    <select
                        className="categoryType-select"
                        name="categoryType"
                        // value={this.state.categoryType}
                        // onChange={this.onChangeType}
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

                    <div className="form-group ">
                        <button className="btn btn-block category-btn submit">
                            Submit
                        </button>
                    </div>

                </Form>

                {/* {this.state.message && (
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
            /> */}
            </div>
        )
    }
}
