import { Link } from "react-router-dom"
import { auth } from "../Service/Firebase"
import {  signOut } from "firebase/auth";
 
function Navbar() {

  const handallogout=()=>{
    signOut(auth)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
  }
  return (
    <div style={{justifyContent:"space-around",display:"flex"}}>
      <Link to={"/"} style={{textDecoration: 'none', color: 'red', fontSize: '20px'}}>Home</Link>
      <Link to={"/login"} style={{textDecoration: 'none', color: 'red', fontSize: '20px'}}>Login</Link>
      <Link to={"/product"} style={{textDecoration: 'none', color: 'red', fontSize: '20px'}}>Product</Link>
      <button onClick={handallogout} style={{padding: '8px 13px', border: '1px solid black', background: 'whitesmoke', fontWeight: 'bold', color: 'red', borderRadius: '5px', fontSize: '15px', cursor: 'pointer'}}>LogOut </button>
    </div>
  )
}

export default Navbar
