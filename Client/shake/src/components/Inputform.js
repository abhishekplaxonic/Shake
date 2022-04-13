import React from 'react';
import { useState } from 'react';
import './Dashboard.css'
import axios from 'axios';


function Inputform() {

    const[store , setStore] = useState()
  
    const [ image , setImage] = useState();
    const [image2 , setImage2] = useState();
    const [ image3 , setImage3] = useState();
    const [ image4 , setImage4] = useState();
    const [text, setText] = useState();
    const [url, setUrl] = useState();


 
    const [urlValue, setUrlvalue] = useState(); 
    const [showText, setShowText] = useState();
    const [input , setInput] = useState();
    const [inputTwo, setInputTwo] = useState();
    const [inputThree, setInputThree] = useState();
    const [inputFour, setInputFour] = useState();

     

    const textChange = (e) => {
      setShowText(e.target.value);
    };

    const imageChange = (e) => {
      var file = new FileReader();
      file.readAsDataURL(e.target.files[0]);
      file.onloadend = function (event) {
        setInput(event.target.result);
      };
      setStore(e.target.files[0])
    };

    const imageChange1 = (e) => {
        var file = new FileReader();
        file.readAsDataURL(e.target.files[0]);
        file.onloadend = function(event){
          setInputTwo(event.target.result)
        };
        setStore(...store , e.target.files[1])
    }  

    const imageChange2 = (e) => {
         var file = new FileReader();
         file.readAsDataURL(e.target.files[0]);
         file.onloadend = function(event){
           setInputThree(event.target.result)
         }
         setStore(...store , e.target.files[2])
    }

    const imageChange3 = (e) => {
         var file = new FileReader();
         file.readAsDataURL(e.target.files[0]);
         file.onloadend = function(event){
           setInputFour(event.target.result)
         }
         setStore(...store , e.target.files[3])
    }

    const imagechange = (e) => {
      setUrlvalue(e.target.value);
    };
    
  
    if (image && image2 && image3 && image4 && text ) {
      return (
        <>
         <div className='centerimg'>
            <img src={image} alt="Logo" />
            
         </div>

         <div className='centerimg head'>
             <h1>{text}</h1>
         </div>
         <div className='belowimage'>
        
          <img src={image2} alt="Logo" />
          <img src={image3} alt="Logo" />
          <img src={image4} alt="Logo" />
          {/* <img src={url} alt="Logo" /> */}
         </div>
        </>
      );
    }

  //   const onUpload = (event) => {
     
  // }
  


  const handleSubmit = (event) => {
    event.preventDefault()
    let formData = new FormData();



     formData.append('text', text);   //append the values with key, value pair
     
           const config = {     
                  headers: { 'content-type': 'multipart/form-data' }
           }

    for (const key of Object.keys(store)) {
        formData.append('store', store[key])
    }
    axios.post("http://localhost:8000/endpoint/multi-images-upload", formData, config, {
    }).then(response => {
        console.log((response.data))
    })
    .catch(error => {
      console.log(error);
  });
      setImage(input)
      setImage2(inputTwo)
      setImage3(inputThree)
      setImage4(inputFour)
      setText(showText);
      setUrl(urlValue)
  }

  


  return (

    <div className="form">
     <div className="login">
          <div className="login-header">
            <h2>PLEASE FILL THIS  FORM </h2>
            
          </div>
        </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-container1">
           <div>
             <label>Image URL-1 </label>
             {/* <input type="text" name="uname" required /> */}
           </div>
           <div>
             <label>Image Upload-1 </label>
             <input onChange={imageChange} type="file" multiple name="store" required />
           </div>
        </div>
        <div className="input-container1">
           <div>
             <label>Image URL-2 </label>
             {/* <input  type="text" name="uname" required /> */}
           </div>
           <div>
             <label>Image Upload-2 </label>
             <input onChange={imageChange1} type="file" multiple name="store" required />
           </div>
        </div>
        <div className="input-container1">
           <div>
             <label>Image URL-3 </label>
             {/* <input  type="text" name="uname" required /> */}
           </div>
           <div>
             <label>Image Upload-3 </label>
             <input onChange={imageChange2} type="file" multiple name="store" required />
           </div>
        </div>
        <div className="input-container1">
           <div>
             <label>Image URL-4 </label>
             {/* <input type="text" name="uname" required /> */}
           </div>
           <div>
             <label>Image Upload-4 </label>
             <input onChange={imageChange3} type="file" multiple name="store" required />
           </div>
        </div>
        {/* <div>
        <label>
          Name:
          <input
            onChange={imagechange}
            value={urlValue}
            type="text"
            name="url"
          />
        </label>
        </div> */}
       

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
          {/* <input type="text" name="pass" required />
          
        */}
        <input onChange={textChange} value={text} name={text}  type="text" />
        </div>
        <button className="button-container">
         Submit
        </button>
      </form>
    </div>
    
  );
}

export default Inputform;
