import React, { Component } from 'react'

export default class AddItem extends Component {
    state = {
        addInputField: []
    }

    addNewRow() {
        this.setState({ addInputField: [...this.state.addInputField, ""] })
    }

    render() {
        return (
            <div className="SimpleProduct-container_S5">

            <div >
                <table>
                        <th className="AdvancePrice-th">Title</th>
                        <th className="AdvancePrice-th">Price</th>
                        <th className="AdvancePrice-th">File</th>
                        <th className="AdvancePrice-th">Sample</th>
                        <th className="AdvancePrice-th">Shareable</th>
                        <th className="AdvancePrice-th">Max. Downloads</th>
                        <tr>

                        </tr>
                </table>
                    {
                        this.state.addInputField.map(() => {
                            return (
                                <div>
                                    <table className="AddItem-table">
                                    <tr>
                                        <td className="AddItem-table_td">
                                            <p>Title</p>
                                            <select className="AddItem-table-select">
                                                <option selected>
                                                    All Websites [USD]
                                                </option>
                                            </select>
                                        </td>
                                        <td className="AddItem-table_td">
                                            <p>Price</p>
                                            <select className="AddItem-table-select">
                                                <option selected>
                                                    ALL GROUPS
                                                </option>
                                            </select>
                                        </td>
                                        <td className="AddItem-table_td">
                                            <p>File</p>
                                            <input className="fix-placeholder AddItem-table-input"></input>
                                        </td>
                                        <td className="AddItem-table_td">
                                            <p>Sample</p>
                                            <div className="placeHolder-moneySim" data-placeholder="$">
                                                <input className="fix-placeholder AddItem-table-input" type="text" className="fix-placeholder" ></input>
                                            </div>
                                        </td>
                                        <td className="AddItem-table_td">
                                            <p>Shareable</p>
                                            <div className="placeHolder-moneySim" data-placeholder="$">
                                                <input className="fix-placeholder v" type="text" className="fix-placeholder" ></input>
                                            </div>
                                        </td>
                                        <td className="AddItem-table_td"> 
                                            <p>Mac. Downloads</p>
                                            <div className="placeHolder-moneySim" data-placeholder="$">
                                                <input className="fix-placeholder AddItem-table-input" type="text" className="fix-placeholder" ></input>
                                            </div>
                                        </td>
                                    </tr>
                                    </table>
                                </div>
                            )

                        })
                    }
                <button onClick={(e) => this.addNewRow(e)}>Add Link</button>

            </div>
            </div>
        )
    }
}
