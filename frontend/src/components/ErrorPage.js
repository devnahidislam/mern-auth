import React from 'react'
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 error_page d-flex justify-content-center align-items-center offset-3">
            <div className="err">
              <h3>404 Error ! Page Not Found...</h3>
            </div>
            <NavLink to="/" className="btn btn-primary">Back</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default ErrorPage
