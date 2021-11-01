import React from "react";


function header(){
   
    return(
       <React.Fragment>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
             <div className="container-fluid ms-5">
    <h2 className="navbar-brand ms-5" href="#">My First react app</h2>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
      </ul>
      <form className="d-flex me-5">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
           
       </React.Fragment>
    );

}

export default header;