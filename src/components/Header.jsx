import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Header = () => {
  return (
    <div className='header_esas'>
      <div className='container row'>
        <div className='col'><img src="src\assets\shoe_1.png.webp" alt="ygjhjg" className='img'/></div>
        <div className='col'>
          <h2>Finding Your Perfect Shoes</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
          <button className='btn btn-primary'>Shop Now</button>
        </div>
      </div>
    </div>
  )
}
