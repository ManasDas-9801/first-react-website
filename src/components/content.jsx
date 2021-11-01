import React from "react";

 import Card from './card'

const content = () => {
    return (
        <>
          <div className="container mt-5">
              <div className="row">
              <div className="col-lg-4">
                  <Card card=" bg-danger text-light border shadow" heading="This is first"/>
              </div>
              <div className="col-lg-4">
                  <Card  card=" bg-primary text-light" heading="This is second"/>
              </div>
              <div className="col-lg-4">
                  <Card  card=" bg-secondary text-light" heading="This is third"/>
              </div>
              </div>
          </div>
        </>
    )
}

export default content;