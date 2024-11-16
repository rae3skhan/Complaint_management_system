import React, { useState } from 'react';

const Contact = () => {
    let [user,setUser]=useState({
        firstName:"",
        lastName:"",
        email:"",
        message:"",
    });

let handelInputChange=(e)=>{
    let {name,value}=e.target;
    setUser((prev) => ({
        ...prev,
        [name]: value
    }));
  
  
}
 
let handleSubmit=(e)=>{
e.preventDefault();
console.log(user);

}
  return (
    <div>
      <form onSubmit={handleSubmit}>
     <input type="text" name="firstName" value={user.firstName} placeholder='Enter your first Name' onChange={handelInputChange} />
     <input type="text" name="lastName" value={user.lastName} placeholder='Enter your last name' onChange={handelInputChange} />
     <input type="text" name="email" value={user.email} placeholder='Enter your email'  onChange={handelInputChange}/>
     <textarea name="message" value={user.message} onChange={handelInputChange} placeholder='Enter your message' rows={5}></textarea>
     <button type='submit'>Send</button>
      </form>
      <div>
      </div>
    </div>
  )
}

export default Contact
