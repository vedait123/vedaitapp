import './App.css';
//import './pages/signupuser.css';
//import './pages/Signup.css';
//import './pages/login.css';
import Login from './pages/login';
import Signup from './pages/signup';
import SignupUser from './pages/SignupUser';
import ForgotPassword from './pages/ForgotPassword';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import EmailForm from './pages/EmailForm';


function App() {



  return (
    <>
      <div className='App'>
        <Router>
          <Routes>
            <Route exact path="/" element={<h1>Home Page</h1>} />
            <Route exact path="login" element={<Login />} />
            <Route exact path="signup" element={<Signup />} />
            <Route exact path="forgotpassword" element={<ForgotPassword />} /> 
            <Route exact path="signupuser" element={<SignupUser />} />
            <Route exact path="emailform" element={<EmailForm />} />
          </Routes>
          <div className="list">
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="login">Login</Link></li>
                  <li><Link to="signup">Signup</Link></li>
                  <li><Link to="signupuser">Signup User</Link></li>
                  <li><Link to="forgotpassword">Forgot Password</Link></li>
                  <li><Link to="emailform">Email Form</Link></li>
              </ul>
          </div>
        </Router>
      </div>
      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <SignupUser /> */}
    </>
  );
}

export default App;
