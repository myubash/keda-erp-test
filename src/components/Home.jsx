import React from 'react'

import img_projections from '../assets/img-projections.svg'
import img_powerful from '../assets/img-powerful.svg'
import img_organized from '../assets/img-organized.svg'

const Home = (props) => {

  return (
    <div className='bg-blob row justify-content-around mt-0 container-fluid pt-5'>
      <div class="px-0 px-md-2 py-5 my-5 text-center row">
        <div className='col-11 col-md-6'>
          <img class="d-block mx-auto mb-4" src={img_projections} alt="projections" style={{height: '60vh'}}/>
        </div>
        <div className='col-11 col-md-6'>
          <h1 class="display-5 fw-bold">Unleashing Efficiency and Integration</h1>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">
            In a world of rapid business evolution, staying ahead requires more than just adaptability – it requires empowerment. Introducing our revolutionary ERP website solution, a beacon of efficiency and integration that will transform the way you manage your business.
            </p>
          </div>
        </div>
      </div>
      <div class="px-0 px-lg-4 py-5 my-5 text-center row">
        <div className='col'>
          <h1 class="display-5 fw-bold">Empower Your Operations</h1>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">
            Gone are the days of disconnected data silos and manual processes. Our ERP website seamlessly integrates every facet of your business, from finance and HR to supply chain and customer relations. Imagine effortlessly managing your entire operation through a single, intuitive interface.
            </p>
          </div>
        </div>
        <div className='col'>
          <img class="d-block mx-auto mb-4" src={img_powerful} alt="powerful" style={{height: '60vh', maxWidth: '80vw'}}/>
        </div>
      </div>
      <div class="px-0 px-lg-4 py-5 my-5 text-center row">
        <div class="col-lg-6 col-10 mx-auto">
          <p class="lead mb-4">
          Don't just adapt to the future – shape it with our ERP website solution. Embrace a new era of operational excellence, customer satisfaction, and growth. Unleash the power of integration today and watch your business soar to new heights.
          </p>
        </div>
        <img class="d-block mx-auto mb-4" src={img_organized} alt="powerful" style={{height: '60vh', maxWidth: '80vw'}}/>
      </div>
    </div>
  )
}

export default Home