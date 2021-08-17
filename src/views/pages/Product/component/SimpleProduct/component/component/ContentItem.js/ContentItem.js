import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function ContentItem() {
    const [value, setValue] = useState('');

  return (
    <ReactQuill height="10rem" theme="snow" value={value} onChange={setValue}/>
  );
}

export default ContentItem
