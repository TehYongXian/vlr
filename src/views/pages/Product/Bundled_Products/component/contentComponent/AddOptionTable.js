import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

class AddOptionTable extends React.Component {
  state = {
    rows: [{}]
  };
  handleChange = idx => e => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value
    };
    this.setState({
      rows
    });
  };
  handleAddRow = () => {
    const item = {
      name: "",
      mobile: ""
    };
    this.setState({
      rows: [...this.state.rows, item]
    });
  };
  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1)
    });
  };
  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows]
    rows.splice(idx, 1)
    this.setState({ rows })
  }
  render() {
    return (
      <div>
        
        <div className="container2">
          <div className="row clearfix">
            <div className="col-md-12 column">
              <table
                className="table table-bordered table-hover"
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th className="text-center"> Is Default </th>
                    <th className="text-center"> Name </th>
                    <th className="text-center"> SKU </th>
                    <th className="text-center"> Default Quantity </th>
                    <th className="text-center"> User Defined </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.rows.map((item, idx) => (
                    <tr id="addr0" key={idx}>

                      <td className="AddItem-table_td">
                        <input type="checkbox"></input>
                      </td>
                      <td className="AddItem-table_td">
                        <p className="">Item Name</p>
                      </td>

                      <td className="AddItem-table_td">
                        <p className="addItem-title2">Item SKU</p>
                      </td>
                      <td className="AddItem-table_td">
                          <input id="" className=""></input>
                        
                      </td>

                      <td>
                          <input type="checkbox"></input>
                        <button
                          className="btn btn-sm addItem-btn"
                          onClick={this.handleRemoveSpecificRow(idx)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" class="c-icon c-icon-2xl" role="img"><path fill="var(--ci-primary-color, currentColor)" d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z" class="ci-primary"></path><rect width="32" height="200" x="168" y="216" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><rect width="32" height="200" x="240" y="216" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><rect width="32" height="200" x="312" y="216" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><path fill="var(--ci-primary-color, currentColor)" d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z" class="ci-primary"></path></svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* <button className="SimpleProduct-container_button1">Add Products to Option</button> */}

              <Link to="/AddSelectPro"><button  className="BundledPage_item-btn-addOption2">
              Add Products to Option
              </button></Link>
              {/* <button
                onClick={this.handleRemoveRow}
                className="btn btn-danger float-right"
              >
                Delete Last Row
              </button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddOptionTable
