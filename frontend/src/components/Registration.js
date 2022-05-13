import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  UilUser,
  UilPhone,
  UilEye,
  UilEyeSlash,
  UilMoneybag,
  UilLock,
} from '@iconscout/react-unicons';

const Registration = () => {
  const [state, setstate] = useState(false);

  const toggleBtn = () => {
    setstate((prevState) => !prevState);
  };

  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    profession: '',
    password: '',
    confirmpwd: '',
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  
  const history = useNavigate();
  
  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, phone, profession, password, confirmpwd } = user;
    await axios.post('/register', {
      name, email, phone, profession, password, confirmpwd
    })
      .then((response) => {
        console.log(response.data.message);
        history('/login')
    })
      .catch((error) => {
        console.log(error.response.data.error);
    });
    // const res = await fetch("/register", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     name, email, phone, profession, password, confirmpwd
    //   })
    // });

    // const data = await res.json();
    // if (data.status === 422) {
    //   console.log(data);
    // } else {
    //   console.log(data);

    //   history('/login');
    // }
  }
  return (
    <>
      <section className="signup">
        <div className="container center-sec">
          <div className="row center-form">
            <div className="form login">
              <span className="title">Registration</span>
              <form method='POST'>
                <div className="input-field">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={user.name}
                    onChange={handleInputs}
                    placeholder="Enter Your Name"
                    required
                  />
                  <span className="icon">
                    {' '}
                    <UilUser />{' '}
                  </span>
                </div>
                <div className="input-field">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="Enter Your Email"
                    required
                  />
                  <i className="uil uil-envelope icon"></i>
                </div>
                <div className="input-field">
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInputs}
                    placeholder="Enter Your Phone"
                    required
                  />
                  <span className="icon">
                    {' '}
                    <UilPhone />{' '}
                  </span>
                </div>
                <div className="input-field">
                  <input
                    type="text"
                    name="profession"
                    id="profession"
                    autoComplete="off"
                    value={user.profession}
                    onChange={handleInputs}
                    placeholder="Enter Your Profession"
                    required
                  />
                  <span className="icon">
                    {' '}
                    <UilMoneybag />{' '}
                  </span>
                </div>
                <div className="input-field">
                  <input
                    type={state ? 'text' : 'password'}
                    name="password"
                    value={user.password}
                    onChange={handleInputs}
                    id="password"
                    className="password"
                    placeholder="Enter Password"
                    required
                  />
                  <span className="icon">
                    {' '}
                    <UilLock />{' '}
                  </span>
                </div>
                <div className="input-field">
                  <input
                    type={state ? 'text' : 'password'}
                    name="confirmpwd"
                    value={user.confirmpwd}
                    onChange={handleInputs}
                    id="confirmpwd"
                    className="password"
                    placeholder="Confirm Password"
                    required
                  />
                  <span className="icon">{<UilLock />}</span>
                  <span className="showHidePw" onClick={toggleBtn}>
                    {state ? <UilEye /> : <UilEyeSlash />}
                  </span>
                </div>

                <div className="input-field button">
                  <input type="submit" onClick={registerUser} value="Signup" />
                </div>
                <div className="login-signup">
                  <span className="text">
                    Already have an Account?
                    <Link to="/login" className="text signup-text">
                      Login Now
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
