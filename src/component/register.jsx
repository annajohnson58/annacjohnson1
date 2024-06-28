import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Reg() {
  const navigate=useNavigate();
  const [username, setName] = useState(0);
  const [email, setEmail] = useState(0);
   const [password, setPassword] = useState(0);
   const [repassword, setRepassword] = useState(0);
   const[error,setError]=useState(false);
   const[result,setResult]=useState(0);
  
function handleChange1(e){
  setName(e.target.value)
}
  function handleChange2(e){
  setEmail(e.target.value)
}
   function handleChange3(e){
  setPassword(e.target.value)
}
   function handleChange4(e){
  setRepassword(e.target.value)
}

  function handleClick() {

    if(password==repassword){
        
    
   setResult({username,email,password,repassword});
    setError(false);
    // navigate('/login');
    axios.post('http://localhost:5000/register',{
      email,username,password});
      navigate('/login');


    }
    else{
        setError(true);
        navigate('/error');
    }
    
  }
   
  

  return (
    <>
    <div style={{border:'2px solid black',display:'flex',justifyContent:'space-between',flexDirection:'column',width:'400px',margin:'20px',alignItems:'center',borderRadius:'10px',background:'beige'}}>
    
      <h1>REGISTER</h1>
      
    <label style={{fontStyle:'italic'}}>username</label>
      
      <input type='username' placeholder='Enter the username' onChange={handleChange1}/>
      
      <label style={{fontStyle:'italic'}}>email</label>
      
      <input type='email' placeholder='Enter the email' onChange={handleChange2}/>
      
      <label style={{fontStyle:'italic'}}>password</label>
      
      <input type='password' placeholder='Enter the password' onChange={handleChange3}/>
     
      <label style={{fontStyle:'italic'}}>repassword</label>
      
      <input type='repassword' placeholder='Enter the password again' onChange={handleChange4}/>
      
      {error==true?<p>you must enter all fields</p>:''}
      <br />
    <button  style={{color:'beige',background:'green'}}type="button"onClick={handleClick}>
     signup
    </button>
    <p>data: &nbsp;{result.email} &nbsp;{result.password}  &nbsp; {result.repassword}</p>
    
    </div> 
    </>
      
  );
}
