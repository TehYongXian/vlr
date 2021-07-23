// // import React from 'react'


// // const required = value => {
// //     if (!value) {
// //       return (
// //         <div className="alert alert-danger catagory-required" role="alert">
// //           This field is required!
// //         </div>
// //       );
// //     }
// //   };

// //   const itemName = value => {
// //     if (value.length > 100) {
// //         return (
// //             <div className="alert alert-danger" role="alert">
// //                 must be less than 100 characters.
// //             </div>
// //         )
// //     }
// //   }

// // const EditFunction = ( {category} ) => {
// //     return (
// //         <div>
// //             <div className="category-section">
// //                         <h1>Edit Category</h1>
// //                         <input 
// //                         placeholder={category.id}
// //                         />
// //                         <input type="text"
// //                             className="category-input"
// //                             name="categoryName"
// //                             placeholder={category.name}
// //                             value={this.state.categoryName}
// //                             onChange={this.onChangeName}
// //                             validations={[required, itemName]}
// //                         />
                        
// //                         <div className="category-section">
// //                           <h6>Type: </h6>
// //                           <select
// //                             className="categoryType-select"
// //                             name="categoryType"
// //                             value={this.state.categoryType}
// //                             onChange={this.onChangeType}
// //                             validations={[required]}
// //                             required
// //                             >
// //                               <option value="Shop">
// //                                 Shop
// //                               </option>
// //                               <option value="product">
// //                                 Product
// //                               </option>
// //                           </select>
// //                         </div>

// //                         <div className="form-group ">
// //                           <button className="btn btn-block edit-category-btn submit">
// //                               Submit
// //                           </button>
// //                         </div>
// //                       </div>
// //         </div>
// //     )
// // }

// // export default EditFunction

// import React, { Component } from 'react'
// import AuthService from '../../../../services/auth.service';

// class EditFunction extends Component {

//     handleUpdateCategory(e) {
//         e.preventDefault();
  
//         this.setState({
//           message: "",
//           successful: false
//         });
  
//         this.form.validateAll();
  
//         console.log("update", this.state);
//         if (this.checkBtn.context._errors.length === 0) {
//           AuthService.editCat(
//             this.state.categoryName,
//             this.state.categoryType
//           ).then(
//             response => {
//               this.setState({
//                 message: response.data.message,
//                 successful: true
//               });
//             },
//             error => {
//             const resMessage =
//               (error.response &&
//                 error.response.data &&
//                 error.response.data.message) ||
//               error.message ||
//               error.toString();
  
//               this.setState({
//                 successful: false,
//                 message: resMessage
//               });
//             }
//           );
//         }
//       }

//     render() {
//         return (
//             <div>
//                 <div>
//                     <h1>Edit Category</h1>
//                     <form>
//                     <input 
//                         placeholder={category.id}
//                         />
//                         <input type="text"
//                             className="category-input"
//                             name="categoryName"
//                             placeholder={category.name}
//                             value={this.state.categoryName}
//                             onChange={this.onChangeName}
//                             validations={[required, itemName]}
//                         />
                        
//                         <div className="category-section">
//                           <h6>Type: </h6>
//                           <select
//                             className="categoryType-select"
//                             name="categoryType"
//                             value={this.state.categoryType}
//                             onChange={this.onChangeType}
//                             validations={[required]}
//                             required
//                             >
//                               <option value="Shop">
//                                 Shop
//                               </option>
//                               <option value="product">
//                                 Product
//                               </option>
//                           </select>
//                           </div>

//                     </form>
//                 </div>
                
//             </div>
//         )
//     }
// }

// export default EditFunction


