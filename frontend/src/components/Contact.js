import React from 'react';
import {
  UilPhone,
  UilEnvelopeEdit,
  UilLocationPinAlt,
} from '@iconscout/react-unicons';

const Contact = () => {
  return (
    <>
      <div className="section">
        <div className="container pt-4">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header text-center">
                  <UilPhone /> Phone
                </div>
                <div className="card-body text-center">
                  <h6>+8801788080397</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header text-center">
                  <UilEnvelopeEdit /> Email
                </div>
                <div className="card-body text-center">
                  <h6>mdnahidislam30@gmail.com</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header text-center">
                  <UilLocationPinAlt /> Address
                </div>
                <div className="card-body text-center">
                  <h6>Dinajpur, Bangladesh</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* contact form */}
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="contact_form_cont box_shadow p-4 mt-4">
                <div className="contact_form_title">
                  <h2>Contact Me</h2>
                </div>
                <form className="contact_form">
                  <div className="contact_form_input d-flex justify-content-between">
                    <input type="text" className="contact_form_name" placeholder="Your Name" required />
                    <input type="email" className="contact_form_email" placeholder="Your Email" required />
                    <input type="number" className="contact_form_phone" placeholder="Your Phone" required />
                  </div>
                  <div className="contact_form_input mt-3">
                    <textarea className="contact_form_inp_msg" cols="20" rows="4" placeholder="Message..."></textarea>
                  </div>
                  <div className="contact_form_btn d-flex justify-content-center mt-4">
                    <button type="submit" className="btn btn-success">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Contact;
