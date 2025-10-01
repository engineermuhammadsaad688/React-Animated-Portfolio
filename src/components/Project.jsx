import React from 'react'
import project from './data/projects.json'
const Project = () => {
  return (
    <>
      <div className="container projects my-3 ">
        <h1>PROJECT</h1>
        <div className="row d-flex justify-content-center align-item-center">
          {project.map((data) => (<>
            <div key={data.id} className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4 ">
              <div class="card bg-dark text-light" style={{ width: '18rem', border: '1px solid yellow', boxShadow: ' 5px 5px 10px 10px rgba(101, 175, 10, 0.5)' }}
                            data-aos="flip-right" 
              data-aos-duration="1000">
                <div className="img d-flex justify-content-center align-item-center p-3">
                  <img src={data.imageSrc} class="card-img-top" alt="..."
                    style={{ width: '250px', height: '200px', border: '1px solid yellow', borderRadius: '10px' }} />
                </div>
                <div class="card-body text-center">
                  <h5 class="card-title">{data.title}</h5>
                  <p class="card-text">
                    {data.description}
                  </p>
                  <a href={data.demo} class="btn btn-primary mx-3">
                    Demo
                  </a>
                  <a href={data.source} class="btn btn-warning">
                    Code
                  </a>

                </div>

              </div>
            </div>
          </>))}
        </div>
      </div>
    </>
  )
}

export default Project