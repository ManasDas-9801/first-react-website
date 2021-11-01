import React from "react";


function header(){
   
    return(
       <React.Fragment>
              <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                   <div className="container">
                       <h2 className="navbar-brand">React</h2>
                       <form className="d-flex ms-auto">
                             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                             <button className="btn btn-danger" type="submit">Search</button>
                           </form>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><p  className="nav-link">Home</p></li>
                            <li className="nav-item"><p  className="nav-link">About</p></li>
                        </ul>
                       
                       </div>
              </nav>
           
       </React.Fragment>
    );

}

export default header;