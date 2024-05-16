import React from 'react'
import { FaLinkedin ,FaFacebook  } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoApple , IoLogoGooglePlaystore  } from "react-icons/io5";


const Footer = () => {
    return (
        <>
            <div className='bg-blue-950 text-white mt-9'>
            <h1 className='text-2xl font-bold p-4 ml-11 '> <span className='text-rose-600' >Order </span> Now </h1>
                <div className='flex justify-around '> 
                <div className='space-y-3'>
                
                    <h1 className='uppercase font-semibold'>About OrderNow</h1>
                    <div>Who We are</div>
                    <div>Blog</div>
                    <div>Work With Us</div>
                    <div>Invester Relation</div>
                    <div>Report Froud</div>
                    <div>Press Kit</div>
                    <div>Contect Us</div>
                </div>
                <div className='space-y-3'>
                    <h1 className='uppercase font-semibold '>OrderMovers</h1>
                    <div>Order Now</div>
                    <div>Blenkit</div>
                    <div>feedind India</div>
                    <div>HyperPure</div>
                    <div>Orderland</div>
                </div>
                <div className='space-y-3'>
                    <h1 className='uppercase font-semibold'>For restorent</h1>
                    <div>Partner With Us</div>
                    <div>Apps For You</div>
                </div>
                <div  className='space-y-3'>
                    <h1 className='uppercase font-semibold'>Learn More</h1>
                    <div>Privacy</div>
                    <div>Security</div>
                    <div>Terms</div>
                    <div>Sitemap</div>
                </div>
                <div className='space-y-3'>
                    <h1 className='uppercase font-semibold'>Social Links</h1>
                    <div className='flex space-x-2'><FaLinkedin className='rounded-full ' />
                    <RiInstagramFill className='rounded-full' />
                    <FaSquareTwitter />
                    <IoLogoYoutube />
                    <FaFacebook />
                    </div>
                    <div className='rounded flex border h-[70px] w-[120px]'><IoLogoApple className='h-[90%] w-[80px]' />
                        <h6 className='font-0.1'>avalable on</h6>
                    </div>
                    <div className='rounded flex border h-[70px] w-[120px]'>< IoLogoGooglePlaystore  className='h-[90%] w-[80px]' />
                        <h6 className='font-0.1'>avalable on</h6>
                    </div>
                
                </div>
                </div>  
                <hr className='w-[95%] ml-9 mt-2'/>
                <div className='w-[95%] ml-9 mt-4 h-[90px]'>
                    <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
                </div>
                
            </div>
        </>
    )
}

export default Footer
