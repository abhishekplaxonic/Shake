import React from 'react';
import { useState } from 'react';
import './Dashboard.css'


function Inputform() {
    const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = () => {
      
  }



  return (
    <div class="login-page1">

    <div className="form">
     <div class="login">
          <div class="login-header">
            <h2>PLEASE FILL THIS  FORM </h2>
            
          </div>
        </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-container1">
           <div>
             <label>Image URL-1 </label>
             <input type="text" name="uname" required />
           </div>
           <div>
             <label>Image Upload-1 </label>
             <input type="file" name="uname" required />
           </div>
        </div>
        <div className="input-container1">
           <div>
             <label>Image URL-2 </label>
             <input type="text" name="uname" required />
           </div>
           <div>
             <label>Image Upload-2 </label>
             <input type="file" name="uname" required />
           </div>
        </div>
        <div className="input-container1">
           <div>
             <label>Image URL-3 </label>
             <input type="text" name="uname" required />
           </div>
           <div>
             <label>Image Upload-3 </label>
             <input type="file" name="uname" required />
           </div>
        </div>
        <div className="input-container1">
           <div>
             <label>Image URL-4 </label>
             <input type="text" name="uname" required />
           </div>
           <div>
             <label>Image Upload-4 </label>
             <input type="file"name="uname" required />
           </div>
        </div>
        {/* <label>Upload Image1</label>
        {selectedImage && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )} */}
      <br />
     
     
        <div className="input-container">
          <label>TEXTFORM</label>
          <input type="text" name="pass" required />
       
        </div>
        <button className="button-container">
         Submit
        </button>
      </form>
    </div>
    </div>
  );
}

export default Inputform;
