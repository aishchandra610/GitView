import React from 'react';
import { useState } from 'react';
import "../../public/Css/Input.css"
import { useNavigate } from 'react-router-dom'; // corrected import statement


function Input() {

  const [user, setUser] = useState("");
  const navigate = useNavigate(); // corrected function name

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (user.trim() !== "") {
      navigate(`/user/${user}`);
    }
  };

  return (
    <div className='main-page'>
    <div>
    <h1>GitView</h1>
    
    <div className='input-box'>
     {/* <div className='main-page'> */}
     
        
        
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" placeholder='Enter username ' onChange={(e)=>{setUser(e.target.value)}}/>
            <div className='submit-btn'> <button type='submit'>Enter</button></div>
           
        </form>
    </div>
    </div>
    </div>
    
  );
}

export default Input;
