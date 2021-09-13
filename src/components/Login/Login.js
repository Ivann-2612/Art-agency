import { useState } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import { getAllUsers } from "../../service"
import './Login.css'
// import CountUp from 'react-countup'


const Login = ({ setUser }) => {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const history = useHistory()
    
    return (
        <div className='form-wrapper'>
            <form onSubmit={(e) => {
                e.preventDefault()
                getAllUsers().then(res => {
                    let user = res.data.find(el => (el.username === username || el.email === username) && el.password === password)
                    if(user){
                        setUser(user)
                        history.push('/aboutus')
                    }
                    else{
                       alert('Wrong password')
                    }
                })
            }}>
                <div className='div-input'>
                    <input className='input' required type="text" placeholder="Username..." onChange={e => setUsername(e.target.value.toLowerCase())}/>
                    <input className='input' required type="password" placeholder="Password..." onChange={e => setPassword(e.target.value)}/>
                    <input className='btn-login' type="submit" value="Login" />
                    <Link className='not-registered' to='/register'>Not registered?</Link>
                </div>
            </form>
        </div>
    )
}

export default Login
