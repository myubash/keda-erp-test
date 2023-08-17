import React from 'react'
import { Link } from 'react-router-dom'

import {GoLog} from 'react-icons/go'

const Header = (props) => {

  return (
    <nav className="navbar navbar-expand-md px-3">
      <div className="container-fluid">
        <Link className="navbar-brand text-light fw-bolder" to="/"> <h3 className='text-logo'><GoLog /> Inventor-E</h3></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" >
            <li className="nav-item">
              <Link className="nav-link fw-bolder text-end" to="/about">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bolder text-end" to="/pricing">PRICING</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bolder text-end" to="/contact">CONTACT</Link>
            </li>
            <li className="nav-item d-flex ml-auto">
              <button
                className='btn btn-outline-primary'
                type='button'
                style={{minWidth: '7rem'}}
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Login</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">Username:</label>
                <input type="text" class="form-control py-1 px-0" id="recipient-name"/>
              </div>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">Password:</label>
                <input type="text" class="form-control py-1 px-0" id="recipient-name"/>
              </div>
            </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header