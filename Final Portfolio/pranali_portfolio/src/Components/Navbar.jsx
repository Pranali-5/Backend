import React from 'react'
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (<div className="fixedNavbar">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-12 mx-auto">
            
                

            <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" exact to="/">Pranali Malkar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a activeClassName="menu_active" className="nav-link active" aria-current="page" target="_blank"  href="https://drive.google.com/file/d/1XVFKfbQaov0T4_gs2ZJum8W2jCKYZEgH/view?usp=sharing">My Resume</a>
        </li>
        
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/poject">Projects</NavLink>
       </li>
                                        
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
        </li>
                                        
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/skills">Skills</NavLink>
        </li>
                                        
        
        
      </ul>
      
    </div>
  </div>
</nav>
                    </div>
                    </div>
            </div>
        </div>
    )
}
