import React from 'react'

class NavbarElements extends React.Component {
    
    render() {
        if (this.props.isSelected) {
            return (
                <div className="TabBar">
                    {this.props.children}
                </div>
            );
        }
        return null;
    }
}

export default NavbarElements;
