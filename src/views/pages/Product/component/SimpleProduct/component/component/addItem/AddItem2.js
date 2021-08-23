import React from "react";
import { render } from "react-dom";

class AddItem2 extends React.Component {
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
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-12 column">
              <table
                className="table table-bordered table-hover"
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th className="text-center ">Title</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">File</th>
                    <th className="text-center">Sample</th>
                    <th className="text-center">Shareable</th>
                    <th className="text-center">Max. Downloads</th>
                    <th className="text-center">Action</th>

                  </tr>
                </thead>
                <tbody>
                  {this.state.rows.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      

                      <td className="AddItem-table_td">
                        <p className="addItem-title">Title</p>
                        <select id="AddItem2_Title" className="AddItem-table-select">
                          <option selected>
                            All Websites [USD]
                          </option>
                        </select>
                      </td>
                      <td className="AddItem-table_td">
                        <p className="addItem-title">Price</p>
                        <select id="AddItem2_Price" className="AddItem-table-select">
                          <option selected>
                            ALL GROUPS
                          </option>
                        </select>
                      </td>
                      <td className="AddItem-table_td">
                        <p className="addItem-title">File</p>
                        <input id="AddItem2_File" className="addItem-input"></input>
                        {/* <input className="fix-placeholder2 "></input> */}
                      </td>
                      <td className="AddItem-table_td">
                        <p className="addItem-title">Sample</p>
                        <div className="placeHolder-moneySim2" data-placeholder="$">
                          <input id="AddItem2_Sample" className="addItem-input"></input>
                          {/* <input className="fix-placeholder2 " type="text" className="fix-placeholder" ></input> */}
                        </div>
                      </td>
                      <td className="AddItem-table_td">
                        <p className="addItem-title">Shareable</p>
                        <div className="placeHolder-moneySim2" data-placeholder="$">
                        <input id="AddItem2_Shareable" className="addItem-input"></input>
                          {/* <input className="fix-placeholder2" type="text" className="fix-placeholder" ></input> */}
                        </div>
                      </td>
                      <td className="AddItem-table_td">
                        <p>Mac. Downloads</p>
                        <div className="placeHolder-moneySim2" data-placeholder="$">
                        <input id="AddItem2_Mac_Downloads" className="addItem-input"></input>
                          {/* <input className="fix-placeholder2" type="text" className="fix-placeholder" ></input> */}
                        </div>
                      </td>


                      <td>
                        <button
                          className="btn btn-outline-danger btn-sm"
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

export default AddItem2
// render(<AddItem2 />, document.getElementById("root"));