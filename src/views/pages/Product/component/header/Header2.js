import React from 'react'
import {
    CDropdown,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CButtonGroup,
    CButton,
} from '@coreui/react'
import { saveAs } from 'file-saver';
class Header2 extends React.Component {
    constructor(props) {
      super(props);
      this.saveDataAction = this.saveDataAction.bind(this);
    }

    
  
    saveDataAction = () => {

        const blob = new Blob(
            [JSON.stringify({
                product: {
                    enable: document.getElementById('Enable_product').value,
                    name: document.getElementById('name').value,
                    attribute_set: document.getElementById('attribute_set').value,
                    sku: document.getElementById('sku').value,
                    price: document.getElementById('price').value,
                    Advance_Price: {
                        Speacial_price: document.getElementById('AP_Speacial_Price').value,
                        Speacial_price_From: document.getElementById('AP_Speacial_From').value,
                        Speacial_price_To: document.getElementById('AP_Speacial_To').value,
                        Cost: document.getElementById('AP_Cost').value,
                        Tier_Price: {
                            Website: document.getElementById('AP_website').value,
                            Customer_Group: document.getElementById('AP_Customer_group').value,
                            Quantity: document.getElementById('AP_Quantity').value,
                            Price: document.getElementById('AP_Price').value,
                        },
                        Manufacturer_Suggested_Retail_Price: document.getElementById('AP_MSRP').value,
                        Display_Actual_Price: document.getElementById('AP_DAP').value,
                    },
                    tax_class: document.getElementById('tax_class').value,
                    quantity: document.getElementById('quantity').value,
                    Advance_Inventory: {
                        Manage_Stock: document.getElementById('AI_Manage_Stock').value,
                        Quantity: document.getElementById('AI_QTY').value,
                        Out_of_Stock_Threshold: document.getElementById('AI_OoST').value,
                        Min_Qty_Allowed_in_Shopping_Cart: document.getElementById('AI_MinQAiSC').value,
                        Max_Qty_Allowed_in_Shopping_Cart: document.getElementById('AI_MaxQAiSC').value,
                        Qty_Uses_Decimals: document.getElementById('AI_QUD').value,
                    },
                    stock_status: document.getElementById('stock_status').value,
                    weight: document.getElementById('weight').value,
                    categories: this.props.selectedCategoryOptions,
                    visibility: document.getElementById('visibility').value,
                    new_from: document.getElementById('new_from').value,
                    new_to: document.getElementById('new_to').value,
                    country_of_manufacture: document.getElementById('country').value,
                },
                Search_Engine: {
                    Url_Key: document.getElementById('URL_key').value,
                    Meta_Title: document.getElementById('Meta_Title').value,
                    Meta_Keywors: document.getElementById('Meta_Keywors').value,
                    Meta_Description: document.getElementById('Meta_Description').value,
                },
                Design: {
                    Layout: document.getElementById('Layout_set').value,
                    Display_Product: document.getElementById('Display_Product').value,
                    Layout_Update_XML: document.getElementById('Layout_Update_XML').value,

                },
                Schedule_Design_Update: {
                    Schedule_Update_From: document.getElementById('Schedule_Update_From').value,
                    Schedule_Update_To: document.getElementById('Schedule_Update_To').value,
                    New_Theme: document.getElementById('New_Theme').value,
                    New_Layout: document.getElementById('New_Layout').value,
                    
                },
                Gift_Option: {
                    Allow_Gift_Option: document.getElementById('switch').value,
                },
                Downloadable_information: {
                    Downloadable_Product_checkBox: document.getElementById('Downloadable_Product').value,
                    Title: document.getElementById('Title').value,
                    Seperate_link: document.getElementById('Seperate_link').value,
                    Downloadable_Product: {
                        AddItem2_Title: document.getElementById('AddItem2_Title').value,
                        AddItem2_Price: document.getElementById('AddItem2_Price').value,
                        AddItem2_File: document.getElementById('AddItem2_File').value,
                        AddItem2_Sample: document.getElementById('AddItem2_Sample').value,
                        AddItem2_Shareable: document.getElementById('AddItem2_Shareable').value,
                        AddItem2_Mac_Downloads: document.getElementById('AddItem2_Mac_Downloads').value,
                    },
                    Samples: document.getElementById('Samples').value,

                }
            }, null, 4)],
            { type: "text/plain;charset=utf-8" }
        );
        saveAs(blob, "product.txt");
    };
  
    render() {
        return (
            <div className="Header-container">
                <div className="Header-section1">
                    <div className="Header-container-title">
                    <h3>New Product</h3>
                    </div>
                    <div className="Header-container-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" class="c-icon c-icon-2xl" role="img"><path fill="var(--ci-primary-color, currentColor)" d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z" class="ci-primary"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" class="c-icon c-icon-2xl" role="img"><path fill="var(--ci-primary-color, currentColor)" d="M450.27,348.569,406.6,267.945V184c0-83.813-68.187-152-152-152s-152,68.187-152,152v83.945L58.928,348.568A24,24,0,0,0,80.031,384h86.935c-.238,2.636-.367,5.3-.367,8a88,88,0,0,0,176,0c0-2.7-.129-5.364-.367-8h86.935a24,24,0,0,0,21.1-35.431ZM310.6,392a56,56,0,1,1-111.419-8H310.018A56.14,56.14,0,0,1,310.6,392ZM93.462,352,134.6,276.055V184a120,120,0,0,1,240,0v92.055L415.736,352Z" class="ci-primary"></path></svg>
    
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" class="c-icon c-icon-2xl" role="img"><path fill="var(--ci-primary-color, currentColor)" d="M411.6,343.656l-72.823-47.334,27.455-50.334A80.23,80.23,0,0,0,376,207.681V128a112,112,0,0,0-224,0v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L116.4,343.656A79.725,79.725,0,0,0,80,410.732V496H448V410.732A79.727,79.727,0,0,0,411.6,343.656ZM416,464H112V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,184,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L296.5,307.007l97.662,63.479h0A47.836,47.836,0,0,1,416,410.732Z" class="ci-primary"></path></svg>
                        <select className>
                            <option data-icon="" selected>
                                admin
                            </option>
                        </select>
    
    
                    </div>
                </div>
                <hr/>
    
                <div className="Header2-section2">
                    <div className="Header2-section2-item">
                        <button className="Header-section2-item-back">Back</button>
                        <button className="Header-section2-item-AddAtt">Add Attribute</button>
                        <CButtonGroup>
                        <CButton onClick={this.saveDataAction} color="warning">Save</CButton>
                        <CDropdown color="warning">
                            <CDropdownToggle caret color="warning" selected>
                            </CDropdownToggle>
                            <CDropdownMenu>
                                <CDropdownItem to="/SimpleProduct">Save</CDropdownItem>
                                <CDropdownItem></CDropdownItem>
                                
                            </CDropdownMenu>
                        </CDropdown>
                    </CButtonGroup>
                    </div>
                   
    
                </div> 
                <hr/>
            </div>
        )
    }
  }

  export default Header2