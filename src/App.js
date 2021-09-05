import './App.css'
import Home from './components/Home/Home' 
import Login from './components/Login/Login'
import Register from './components/Register/Register'
// import Nav from './components/AboutUs/Nav'
import AboutUs from './components/AboutUs/AboutUs'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Work from './components/Work/Work'


function App() {

  const [user,setUser] = useState(null)

  return (
    <Router>
             <>
           {
               user ? 
               <>
             
               <div className='loggedin'>
                 <h2> Username: <span style={{textTransform:'uppercase'}}>{user.username}</span> </h2>&nbsp;
                 <button className='logout' onClick={() => setUser(null)}>LOGOUT</button> 
               </div>               
               </>
               :
               <> 
                <Home />
               </>
           }
       </>
      
 <Switch>
   <>    
           <Route exact path="/">
               <Home loggedIn={user} />
           </Route>
           <Route exact path="/login">
               <Login setUser={setUser} />
           </Route>
           <Route exact path="/register">
               <Register />
           </Route>
            <Route exact path="/aboutus">
               <AboutUs loggedIn={user} />
           </Route>

           <Route exact path="/work">
               <Work loggedIn={user} />
           </Route>
           {/*
           <Route exact path="/pagethree">
               <PageThree loggedIn={user} />
           </Route> */}
          
       
   </>    
 </Switch>  

    </Router>
  );
}

export default App;
