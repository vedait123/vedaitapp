import './App.css';
//import './pages/signupuser.css';
//import './pages/Signup.css';
//import './pages/login.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import SignupUser from './pages/SignupUser';
import ForgotPassword from './pages/ForgotPassword';
import EnquiryForm from './pages/EnquiryForm';
import EmailForm from './pages/EmailForm';


function App() {



  return (
    <>
      <div className="App">
        <Router>
        <div className="list">
                  <Link to="/">Home</Link>
                  <Link to="login">Login</Link>
                  <Link to="signup">Signup</Link>
                  <Link to="signupuser">Signup User</Link>
                  <Link to="forgotpassword">Forgot Password</Link>
                  <Link to="enquiryform">Enquiry Form</Link>
                  <Link to="emailform">Email Form</Link>
          </div>
          <Routes>
            <Route exact path="/" element={<h1>Home Page</h1>} />
            <Route exact path="login" element={<Login />} />
            <Route exact path="signup" element={<Signup />} />
            <Route exact path="forgotpassword" element={<ForgotPassword />} /> 
            <Route exact path="signupuser" element={<SignupUser />} />
            <Route exact path="enquiryform" element={<EnquiryForm />} />
            <Route exact path="emailform" element={<EmailForm />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
