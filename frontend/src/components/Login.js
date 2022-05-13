import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UilLock, UilEnvelope, UilEye, UilEyeSlash } from '@iconscout/react-unicons';
import axios from 'axios';

const Login = () => {
  const [state, setState] = useState(false);

  const toggleBtn = () => {
    setState(prevState => !prevState);
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    await axios.post('/login', {
      email, password
    })
    .then((response) => {
      console.log(response.data.message);
      history('/')
    })
    .catch((error) => {
      console.log(error.response.data.error);
    });
  }
  return (
    <section className="section">
      <div className="container center-sec">
        <div className="row center-form">
          <div className="form login">
            <span className="title">Login</span>
            <form method="POST">
              <div className="input-field">
                <input type="text" placeholder="Enter Your Email" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required />
                <div className="icon"> <UilEnvelope/> </div>
              </div>
              <div className="input-field">
                <input
                  type={state ? "text" : "password"}
                  className="password"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="icon"> <UilLock /> </span>
                <span className="showHidePw" onClick={toggleBtn}>
                  {state ? <UilEye /> : <UilEyeSlash />}
                </span>
              </div>
              <div className="checkbox-text">
                <div className="checkbox-content">
                  <input type="checkbox" id="logCheck" />
                  <label htmlFor="logCheck" className="text">
                    Remember Me
                  </label>
                </div>
                <Link to="#" className="text">
                  Forgot Password?
                </Link>
              </div>

              <div className="input-field button">
                <input type="button" value="Log In" onClick={loginUser} />
              </div>
              <div className="login-signup">
                <span className="text">
                  Not a member?
                  <Link to="/registration" className="text signup-text">
                    Signup Now
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
