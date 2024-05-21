import React from 'react'
import { FaCarSide } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css'
import { MdOutlineRefresh } from "react-icons/md";
import { IoIosHelpCircle } from "react-icons/io";

export const Section_1 = () => {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='Section_1_esas col-md-6 col-lg-4'>
                    <span className='Section_1_icon'><FaCarSide className='Section_1_icons' /></span>
                    <div>
                        <h2>FREE SHIPPING</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                    </div>
                </div>
                <div className='Section_1_esas col-md-6 col-lg-4'>
                    <span className='Section_1_icon'><MdOutlineRefresh className='Section_1_icons' /></span>
                    <div>
                        <h2>FREE SHIPPING</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                    </div>
                </div>
                <div className='Section_1_esas col-md-6 col-lg-4'>
                    <span className='Section_1_icon'><IoIosHelpCircle className='Section_1_icons' /></span>
                    <div>
                        <h2>FREE SHIPPING</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
