import React from "react";
import { useDropzone } from "react-dropzone";
import CIcon from '@coreui/icons-react'


const Dropzone = ({ onDrop, accept }) => {

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept
  });


  return (
    <div className="dropzone-input2"{...getRootProps()}>
      <input className="dropzone-input2" {...getInputProps()} />

      

      <div className="text-center">
        <div className="dragNdrop-camera">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="c-icon c-icon-2xl" role="img">
          <path fill="var(--ci-primary-color, currentColor)" d="M471.993,112h-89.2L366.551,65.25a32.023,32.023,0,0,0-30.229-21.5H175.241a31.991,31.991,0,0,0-30.294,21.691L129.1,112h-89.1a24.027,24.027,0,0,0-24,24V448a24.027,24.027,0,0,0,24,24H471.993a24.027,24.027,0,0,0,24-24V136A24.027,24.027,0,0,0,471.993,112Zm-8,328H48.007V144h104.01l23.224-68.25H336.322L360.032,144H463.993Z" class="ci-primary">
          </path>
          <path fill="var(--ci-primary-color, currentColor)" d="M256,168A114,114,0,1,0,370,282,114.13,114.13,0,0,0,256,168Zm0,196a82,82,0,1,1,82-82A82.093,82.093,0,0,1,256,364Z" class="ci-primary">
          </path>
        </svg>
      </div>
        {isDragActive ? (
          <small className="dropzone-content2">Release to drop the files here</small>
        ) : (
          <small className="dropzone-content2">
            Drag 'n' drop some files here, or click to select files
          </small>
        )}
      </div>
    </div>
  );
};

export default Dropzone;