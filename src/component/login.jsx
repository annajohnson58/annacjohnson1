import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Log() {
  const navigate=useNavigate();
  const [username, setName] = useState(0);
  const [email, setEmail] = useState(0);
   const [password, setPassword] = useState(0);
   const [repassword, setRepassword] = useState(0);
   const[error,setError]=useState(false);
   const[result,setResult]=useState(0);
   const[output,setOutput]=useState('');
  
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
 async function handleSubmit() {
   
    if(password==repassword){
        
    
      setResult({email,password,repassword});
       setError(false);
       // navigate('/login');
       const response=await axios.post('http://localhost:5000/login',{username,
        email,password});
        console.log(response.data)
        if(response.data=='email not found'){
          setError(true)
          
        }
        else
        {
          setOutput('Welcome' + ' ' +response.data.username);
       
         
          
        }

  
       }
       else{
           setError(true)
       }
   
  }

  return (
    <>
    <div style={{border:'2px solid black',display:'flex',justifyContent:'space-between',flexDirection:'column',width:'400px',margin:'20px',alignItems:'center',borderRadius:'10px',background:'lightblue'}}>
    
      <h1>LOGIN</h1>
      <label style={{fontStyle:'italic'}}>username</label>
      
      <input type='username' placeholder='Enter the username' onChange={handleChange1}/>
      <label style={{fontStyle:'italic'}}>email</label>
      
      <input type='email' placeholder='Enter the email' onChange={handleChange2}/>
      
      <label style={{fontStyle:'italic'}}>password</label>
      
      <input type='password' placeholder='Enter the password' onChange={handleChange3}/>
     
      <label style={{fontStyle:'italic'}}>repassword</label>
      
      <input type='repassword' placeholder='Enter the password again' onChange={handleChange4}/>
      
      {error==true?<p style={{color:'red'}}>passwords do not match!</p>:''}
      <br />
    <button style={{color:'beige',background:'green'}} onClick={handleSubmit}>
     signin
    </button>
    
    <p >data:{output}</p>
    </div>
    </>
      
  );
}
