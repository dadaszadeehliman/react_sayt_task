import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FcLike } from "react-icons/fc";

export const Header_2 = () => {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-6 mb-5 mb-lg-0'>
                    <h4 className='my-4'>Navigations</h4>
                    <div className='row Header_2_esas'>
                        <div className='col-3'>
                            <ul>
                                <li>Sell Online</li>
                                <li>Features</li>
                                <li>Shopping cart</li>
                                <li>Store builder</li>
                            </ul>
                        </div>
                        <div className='col-3'>
                            <ul>
                                <li>Mobil Commerce</li>
                                <li>Dropshopping</li>
                                <li>Website dewoleper</li>
                            </ul>
                        </div>
                        <div className='col-3'>
                            <ul>
                                <li>Point kfd</li>
                                <li>Hardwere</li>
                                <li>Software</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-lg-3 mb-4 mb-lg-0'>
                    <div>
                        <h4 className='my-4'>Navigations</h4>
                        <img src="src\assets\hero_1.jpg.webp" alt="hrftgh" className='Header_2_img'/>
                        <h5>Finding Your Perfect Shoes</h5>
                        <span>Promo from nuary 15 — 25, 2019</span>
                    </div>
                </div>
                <div className='col-md-6 col-lg-3 Header_2_contact'>
                    <div>
                    <h4 className='my-4'>Contact info</h4>
                    <span className='mt-3'>203 Fake St. Mountain View, San Francisco, California, USA</span>
                    <span className='mt-3'>+2 392 3929 210</span>
                    <span className='mt-3'>emailaddress@domain.com</span>
                    </div>
                </div>
            </div>
            <div className='mt-5 my-5 footer'>
                <footer>Copyright ©2024 All rights reserved. This template is made with <FcLike /> by Colorlib</footer>
            </div>
        </div>
    )
}
