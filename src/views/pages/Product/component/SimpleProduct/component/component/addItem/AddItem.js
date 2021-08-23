import React from "react";
import { render } from "react-dom";

class AddItem extends React.Component {
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
                    <th className="text-center"> Website </th>
                    <th className="text-center"> Customer Group </th>
                    <th className="text-center"> Quantity </th>
                    <th className="text-center"> Price </th>
                    <th className="text-center"> Action </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.rows.map((item, idx) => (
                    <tr id="addr0" key={idx}>

                      <td className="AddItem-table_td">
                        <p className="addItem-title2">Website</p>
                        <select id="AP_website" className="AddItem-table-select">
                          <option selected>
                            All Websites [USD]
                          </option>
                        </select>
                      </td>
                      <td className="AddItem-table_td">
                        <p className="addItem-title3">Customer Group</p>
                        <select id="AP_Customer_group" className="AddItem-table-select">
                          <option selected>
                            ALL GROUPS
                          </option>
                        </select>
                      </td>
                      <td className="AddItem-table_td">
                        <p className="addItem-title2">Quantity</p>
                        <input id="AP_Quantity" className="addItem-input"></input>
                        {/* <input className="fix-placeholder2 "></input> */}
                      </td>
                      <td className="AddItem-table_td">
                        <p className="addItem-title2">Price</p>
                        <div className="placeHolder-moneySim2" data-placeholder="$">
                          <input id="AP_Price" className="addItem-input"></input>
                          {/* <input className="fix-placeholder2 " type="text" className="fix-placeholder" ></input> */}
                        </div>
                      </td>


                      <td>
                        <button
                          className="btn btn-outline-danger btn-sm addItem-btn"
                          onClick={this.handleRemoveSpecificRow(idx)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={this.handleAddRow} className="btn btn-primary">
                Add Row
              </button>
              <button
                onClick={this.handleRemoveRow}
                className="btn btn-danger float-right"
              >
                Delete Last Row
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddItem