import React from 'react'

class NavTab extends React.Component {
   
    render() {
        return (
            <div>
                <ul className="Tab-navbar">
                    {
                        this.props.tabs.map(tab => {
                            const active = (tab === this.props.selected ? 'active' : '');

                            return (
                                <li className="NavTab" key={tab}>
                                    <a className={"nav-link " + active} onClick={() => this.props.setSelected(tab)}>
                                    {tab}
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default NavTab;
