import React from 'react';
import Category from '../../Category/Category';
import Popup from 'reactjs-popup';

 function CatModal() {


  return (
    <>
        <Popup trigger={<button className="CatModal-Popup"> Add Category</button>} position="left center" className="CatModal">
            <Category/>
        </Popup>
    </>
  );
}
export default CatModal
