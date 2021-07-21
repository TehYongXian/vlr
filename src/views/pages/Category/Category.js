import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

// import Select from "raect-select";

import AuthService from "../../../services/auth.service";
// import Modal from

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

  // export default function Modal()

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.handleUpdateCategory = this.handleUpdateCategory.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeType = this.onChangeType.bind(this);

        this.state = {
          categoryID: "0",
          categoryName: "",
          categoryType: "",
          successful: false,
          message: ""
        };
      }


      onChangeType(e) {
        this.setState({
          categoryType: e.target.value
        })
      }

    onChangeName(e) {
        this.setState({
          categoryName: e.target.value
        });
    }

    handleUpdateCategory(e) {
      e.preventDefault();

      this.setState({
        message: "",
        successful: false
      });

      this.form.validateAll();

      console.log("update", this.state);
      if (this.checkBtn.context._errors.length === 0) {
        AuthService.update(
          this.state.categoryName,
          this.state.categoryType
        ).then(
          response => {
            this.setState({
              message: response.data.message,
              successful: true
            });
          },
          error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

            this.setState({
              successful: false,
              message: resMessage
            });
          }
        );
      }
    }



        
render() {
  
return ( 
    <div className="category">
            <Form
            onSubmit={this.handleUpdateCategory}
            ref={c => {
              this.form = c;
            }}
            >

          {!this.state.successful && (
            <div className="category-section">
              <h2>Category</h2>

                
                {/* Category Name */}
                <Input 
                type="text"
                className="category-input"
                name="categoryName"
                placeholder="Name"
                value={this.state.categoryName}
                onChange={this.onChangeName}
                validations={[required, itemName]}
                />
                <div className="category-select">
                <h6 className="category-select_h6">Type:  </h6>
                <select
                className="categoryType-select"
                name="categoryType"
                value={this.state.categoryType}
                onChange={this.onChangeType}
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


                <div className="form-group ">
                    <button className="btn btn-block category-btn submit">
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
        </div>
)

    
  }
}