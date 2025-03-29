 import React from 'react';
import { NavLink } from 'react-router-dom';
import linkedIn from "../../assets/socialNetworking/linkedin.svg";
import tablerBrand from "../../assets/socialNetworking/tabler_brand-unsplash.svg";
import insta from "../../assets/socialNetworking/instagram.svg";
import facebook from "../../assets/socialNetworking/facebook.svg";
import twitter from "../../assets/socialNetworking/twitter.svg";
 
 const Footer = () => {
    return (
        <div>
            <p className='divider divider-neutral'></p>
           <div className='flex justify-between mt-10  mb-12'>
                <p>contact</p>
                <div className='flex gap-5'>
                    <NavLink><img src={linkedIn} alt="" /></NavLink>
                    <NavLink><img src={tablerBrand} alt="" /></NavLink>
                    <NavLink><img src={insta} alt="" /></NavLink>
                    <NavLink><img src={facebook} alt="" /></NavLink>
                    <NavLink><img src={twitter} alt="" /></NavLink>
                </div>
            </div> 
        </div>
    );
 };
 
 export default Footer;