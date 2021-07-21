import React from 'react';
import Category from '../../Category/Category';
import Popup from 'reactjs-popup';

 function CatModal() {
  return (
    <>

      <Popup className="CatModal" trigger={<button className="CatModal-Popup"> Add Category</button>} position="left center" >
          {close => (
            <div>
              <button className="close" onClick={close}>
                &times;
              </button>
              <Category/>
              
            </div>
          )}
      </Popup>
    </>
  );
}
export default CatModal
