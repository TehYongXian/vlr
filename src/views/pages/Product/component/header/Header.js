import React from 'react'
import {
    CDropdown,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CButtonGroup,
    CButton,
} from '@coreui/react'

export default function Header() {
    return (
        <div className="Header-container">
            <div className="Header-section1">
                <div className="Header-container-title">
                    <h3>Catalog</h3>
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

            <div className="Header-section2">
                <div className="Header-section2-item">
                    <CButtonGroup>
                    <CButton color="warning">Add Product</CButton>
                    <CDropdown color="warning">
                        <CDropdownToggle caret color="warning">
                        </CDropdownToggle>
                        <CDropdownMenu>
                            <CDropdownItem to="/SimpleProduct">Simple Product</CDropdownItem>
                            <CDropdownItem>Configurable Product</CDropdownItem>
                            <CDropdownItem>Grouped Product</CDropdownItem>
                            <CDropdownItem>Virtual Product</CDropdownItem>
                            <CDropdownItem>Bundle Product</CDropdownItem>
                            <CDropdownItem>Downloadable Product</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                </CButtonGroup>
                </div>
               

            </div> 
            <hr/>
        </div>
    )
}
