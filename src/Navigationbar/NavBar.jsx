import React from 'react';
import Logo from '../assets/images/logo.png'
import './NavBar.css'
import { navLinks } from '../constants';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)
const NavBar = () => {
    useGSAP(()=>{
        const navTwee = gsap.timeline({
            scrollTrigger:{
                trigger:".outerNav",
                start:"bottom top",
                scrub:1,
            }
        });

        // navTwee.fromTo(".outerNav" , {
        //     backgroundColor:'transparent'
        // },{
        //     backgroundColor:"#0000002b",
        //    backdropFilter: 'blur(3px)',
        //     duration:0.8,
        //     ease:'power1.inOut'
        // })
    })
    return (
        <div className='outerNav'>
            <div className="innerNav">
                
                <div className="Navleft">
                    <img src={Logo} alt="Logo" /> <h1>Velvet Pour</h1>
                </div>

                <div className="NavRight">
                    <ul>
                        {
                            navLinks.map((nav) => (
                                <li key={nav.id} >{nav.title}</li>

                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
