import React from 'react'

export const Big_sales = () => {
  return (
    <>
      <div className='container'>
        <div className='Data_get_xett'></div>
        <h2 className='Data_get_basliq'>Big Sale!</h2>
        <div className='row'>
          <div className='Big_sales_img col'>
            <img src="src\assets\blog_1.jpg.webp" alt="blog" />
          </div>
          <div className='Big_sales_yazi col'>
            <div>
              <h3>50% endirim</h3>
              <p>By Carl Smith • September 3, 2018</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>
              <div><button className='btn btn-primary'>Shop Now</button></div>
              
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
