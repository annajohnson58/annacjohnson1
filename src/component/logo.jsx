function Login()
{
    return(
        <div style={{color:"blue",backgroundColor:"lightblue",border:"2px solid black",width:"400px",display:"flex",flexDirection:"column",justifycontent:"space-between",alignItems:"center",margin:'30px'}}>
    
       
       <form>
        <h1>LOGIN</h1>
      
    
        <label>
            username</label><br />
        <input type="user name" placeholder="Enter your username"/><br />
        <label>email</label><br />
        <input type="email" placeholder="Enter your email"/><br />
        <label>password</label><br />
        <input type="password" placeholder="Enter your password"/><br />
        <label>Repassword</label><br />
        <input type="repassword" placeholder="Again enter your password"/><br />
        <button>signup</button>
       </form>
        
</div>
        
    );
}
export default Login;