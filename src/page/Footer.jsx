import React from 'react';
import { FaXTwitter, FaInstagram, FaMapLocationDot, FaPhone } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return(
        <div className="py-11 justify-items-center text-center bg-ungu1">
                <span className="text-3xl text-orange-400">Contact Info</span>

                <div className='grid-cols-1 mt-5'>
                    <div className="p-0">
                        <button className="btn bg-transparent text-white min-h-0 xl:h-0">
                            <FaPhone className='text-white'/> 
                            +62 858 0374 9030
                        </button>
                    </div>
                
                    <div className="p-0">
                        <button className="btn bg-transparent text-white min-h-0 xl:h-0">
                            <BiLogoGmail className='text-white'/> 
                            rudysetyawan25@gmail.com
                        </button>
                    </div>

                    <div className="p-0">
                        <button className="btn bg-transparent text-white min-h-0 xl:h-0">
                            <FaMapLocationDot className='text-white'/> 
                            Menteng Dalam,
                            Kec. Tebet, Kota Jakarta Selatan, 
                            Daerah Khusus Ibukota Jakarta 12870
                        </button>
                    </div>
                </div>


                <div className='grid-cols-1'>
                    <button className="btn bg-ungu10 text-white rounded-full mt-3 mr-2">
                        <FaXTwitter className='text-white'/>
                    </button>

                    <button className="btn bg-ungu10 text-white rounded-full mt-3 mr-2">
                        <FaInstagram className='text-white'/>
                    </button>

                    <button className="btn bg-ungu10 text-white rounded-full mt-3 ">
                        <FaFacebookF className='text-white'/>
                    </button>
                </div>
             
        </div>
    )
};

export default Footer;