import GoogleButton from 'react-google-button'
import { auth, provider } from '../Service/Firebase'
import { signInWithPopup } from 'firebase/auth'


function Login() {

  const handallogin=()=>{
   
    signInWithPopup(auth, provider)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
  }
  
  return (
    <div style={{marginTop: '15%'}}>
      <h1 style={{textAlign: 'center'}}>Login Page</h1>
      <GoogleButton onClick={handallogin} style={{marginLeft: '40%'}}/>
    </div>
  )
}

export default Login
