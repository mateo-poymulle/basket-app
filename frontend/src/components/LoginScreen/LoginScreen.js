import './LoginScreen.css'
import {useState} from "react";
import { httpPost} from "../../utils/httpFunctions";
import {useHistory} from 'react-router-dom'

const LoginScreen = () => {

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  
  const[regUsername, setRegUsername] = useState()
  const[regPassword, setRegPassword] = useState()
  const[regFirstName, setFirstName] = useState()
  const[regLastName, setLastName] = useState()
  const[regemail, setEmail] = useState()

  const history = useHistory();

  const login = (e) => {
    e.preventDefault()
    httpPost('api/login/', {username: username, password: password}).then((res) => {
      localStorage.setItem('token', res.data.access)
      history.push('/products')
      
    })
  }

  const register = (e) => {
    e.preventDefault()
    httpPost('api/register/', {username: regUsername, password: regPassword, email: regemail, first_name: regFirstName,last_name: regLastName }).then((res) => {
      localStorage.setItem('token',res.data.access)
      
      history.push('/')
      
    })
  }
  function myFunction() {
    alert("El usuario "+ regUsername+ " se ha creado satisfactoriamente");
    
  }

  return (
    <div className='login-screen'>
    
      <form className='form-container' onSubmit={login}>
        <div className="mb-3">
          <h2>LOGIN</h2>
          <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
          <input
            className="form-control"
            
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            
            placeholder="Password" />
        </div>
        <div className={'button-container'}>
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>


      <form className='form-container' onSubmit={register}>
        <div className="mb-3">
        <h2>REGISTER</h2>
          <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
          <input
            className="form-control"
            
            value={regUsername}
            onChange={(e) => setRegUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">First Name</label>
          <input
            value={regFirstName}
            onChange={(e) => setFirstName(e.target.value)}
            
            className="form-control"
            
            placeholder="First Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Last Name</label>
          <input
            value={regLastName}
            onChange={(e) => setLastName(e.target.value)}
            
            className="form-control"
            
            placeholder="last name" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Email</label>
          <input
            value={regemail}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            
            placeholder="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Password</label>
          <input
            value={regPassword}
            onChange={(e) => setRegPassword(e.target.value)}
            type="password"
            className="form-control"
            
            placeholder="Password" />
        </div>
        <div className={'button-container'}>
          <button type="submit" className="btn btn-primary" onClick={myFunction}>Register</button>
        </div>
      </form>

    </div>

    
    



  )
}

export default LoginScreen