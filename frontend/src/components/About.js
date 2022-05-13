import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import myimg from '../images/nahid.jpg';

import axios from 'axios';

const About = () => {

  const history = useNavigate();

  const [userData, setUserData] = useState();

  console.log(userData);
  const callAboutPage = async() => {
    await axios.get("/about", {withCredentials: true})
      .then((res) => {
        if (res.status === 200) {
          const data = res.data;
          // console.log(data);
          setUserData(data);
        } else {
          console.log(res.error);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        history('/login')
      })
  }
  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <div className="section">
        <div className="container about_page pt-2 py-4 box_shadow">
          <form method='get'>
            <div className="row">
              <div className="col-md-3 about-image">
                <img src={myimg} alt="Me" />
              </div>
              <div className="col-md-8">
                <div className="profile_head">
                  <Tabs defaultActiveKey="profile" className="bg-light">
                    <Tab eventKey="profile" title="Profile">
                      <div className="tab-item-wrapper mt-4">
                        <h4>Name : Nahid { userData.name }</h4>
                        <h5>Profession : FullStack Developer</h5>
                        <h6>User Id : 247</h6>
                        <h6>Email : ninlife2@gmail.com </h6>
                        <h6>Phone : 01788080397</h6>
                      </div>
                    </Tab>

                    <Tab eventKey="work" title="Work">
                      <div className="tab-item-wrapper mt-4">
                        
                        <h5>Profession : FullStack Developer</h5>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Maxime libero vitae quia unde ex ducimus qui
                          reiciendis dolore, cumque possimus.
                        </p>
                      </div>
                    </Tab>

                    <Tab eventKey="links" title="Links">
                      <div className="tab-item-wrapper mt-4">
                        <h5>Contact Info</h5>
                        <h6>
                          <a href="https://www.linkedin.com/in/devnahidislam/" target="_blank">Linkedin Profile</a>
                        </h6>
                        <h6>
                          <a href="https://github.com/devnahidislam" target="_blank">GitHub Profile</a>
                        </h6>
                        <h6>
                          <a href="https://twitter.com/devnahidislam" target="_blank">Twitter Profile</a>
                        </h6>
                        <h6>
                          <a href="https://twitter.com/devnahidislam" target="_blank">Facebook Profile</a>
                        </h6>

                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Possimus, labore dignissimos? Accusantium impedit
                          assumenda quisquam incidunt quibusdam temporibus animi.
                        </p>
                      </div>
                    </Tab>
                  </Tabs>
                  {/* <ul className="nav nav-tabs " role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="about-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile">Profile</a>
                    </li>
                  </ul> */}
                </div>
              </div>
              <div className="col-md-1">
                <div className="edit_profile_btn d-flex justify-content-end">
                  <input
                    type="submit"
                    className="btn btn-sm btn-info"
                    value="Edit Profile"
                  />
                </div>
                
              </div>
            </div>
            {/* <div className="row">
              <div className="col-md-2 bg-danger">
                <div className="profile_work">
                  <p>Work Link</p>
                  <a href="https://github.com/devnahidislam" target="_blank">Git</a><br />
                  <a href="https://www.linkedin.com/in/devnahidislam/" target="_blank">Linkdin</a><br />
                </div>
              </div>
              <div className="col-md-10 about_info">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    
                    <div className="row">
                      <div className="col-md-6">
                        <label >User Id</label>
                      </div>
                      <div className="col-md-6">
                        <p>3461215</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label >Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>Nahid Islam</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label >Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>Nahid Islam</p>
                      </div>
                    </div>

                  </div>
                  <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    
                    <div className="row">
                      <div className="col-md-6">
                        <label >Experience</label>
                      </div>
                      <div className="col-md-6">
                        <p>Expart</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label >Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>Nahid Islam</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label >Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>Nahid Islam</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default About;
