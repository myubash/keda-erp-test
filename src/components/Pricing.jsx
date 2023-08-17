import React from 'react'

const Pricing = (props) => {

  const tierList = [
    {
      title: 'Basic',
      price: '100k',
      services: [
        'Record incoming inventory',
        'Record outgoing inventory',
        'Record profits',
      ]
    },
    {
      title: 'Business',
      price: '200k',
      services: [
        'Record incoming and outgoing goods',
        'Record Profits',
        'Analyze sales with chart',
        '7x24 hours support',
      ]
    },
    {
      title: 'Entrepreneur',
      price: '350k',
      services: [
        'Record incoming and outgoing goods',
        'Record Profits',
        'Analyze sales with chart',
        '7x24 hours support',
        'Export data to Excel',
        'AI Earning prediction'
      ]
    },
  ]

  return (
    <div>
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center col-lg-6">
        <h1 class="display-4">Pricing</h1>
        <p class="lead">
          At Inventor-E, we believe that every business is unique, and so are its needs. Our ERP pricing model is designed to provide you with flexibility and affordability, ensuring that you receive the perfect solution for your specific requirements. We understand that transparency and value are paramount, and we're committed to delivering both.
        </p>
      </div>
      <div className='container'>
        <div className="row mb-3 text-center justify-content-evenly">
          {
            tierList.map(tier => (
              <div className="card mb-4 box-shadow col-10 col-md-3">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">{tier.title}</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">Rp {tier.price} <small className="text-muted">/ month</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    {
                      tier.services.map(service => (
                        <li>{service}</li>
                      ))
                    }
                  </ul>
                  <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
                </div>
              </div>
            ))
          }
          
        </div>
      </div>
    </div>
  )
}

export default Pricing