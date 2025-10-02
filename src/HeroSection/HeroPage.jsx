import React from 'react';
import './HeroPage.css'
import NavBar from '../Navigationbar/NavBar';
import leftLeaf from '../assets/images/heroleftleaf.png'
import rightLeaf from '../assets/images/herorightleaf.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollDown from '../assets/images/arrow.png'
import MainImg from '../assets/images/Main.png'
import Menu from '../MenuSection/Menu.jsx'
// herorightleaf.png
const HeroPage = () => {
    useGSAP(() => {
        gsap.from(".HeroleftLeaf", {
            x: -200,
            rotate: -20,
            opacity: 0.7,
            duration: 0.8,

            ease: 'power1.inOut'
        })
        gsap.from(".HerorightLeaf", {
            x: 200,
            rotate: 20,
            opacity: 0.7,
            duration: 0.8,

            ease: 'power1.inOut'
        })

        gsap.from(".MainHeading", {
            y: 30,
            opacity: 0,
            duration: 2,

            ease: 'power1.inOut'
        })
        gsap.from(".leftBottom", {
            x: -200,
            opacity: 0,
            duration: 5,

            ease: 'elastic'
        })
        gsap.from(".rightBottom", {
            x: 200,
            opacity: 0,
            duration: 5,

            ease: 'elastic'
        })
        gsap.from(".scrollDown" , {
            y:-50,
            opacity:0.5,
            duration:0.6,
            ease:'power2.inOut'
        })
    }, [])
    return (
        <div>
            <NavBar></NavBar>
            <div className="HeroInner">
                <div className="HeroInnermost">
                    <h1 className='MainHeading'>MOJITO</h1>

                    <div className="leftBottom">
                        <p>Cool Crisp Classic</p>
                        <h3>Sip the Spirit of Summer</h3>
                    </div>
                    <div className="rightBottom">
                        <p>Every cocktail on our menu is a blend of premium ingredients  creative flair and timeless recipes designed to delight your senses View cocktails</p>
                    </div>

                    {/* ! Leafs */}
                    <div className="leftCenterLeaf">
                        <img src={leftLeaf} alt="" className='HeroleftLeaf' />
                    </div>
                    <div className="rightCenterLeaf">
                        <img className='HerorightLeaf' src={rightLeaf} alt="" />
                        {/* <img src={rightLeaf} alt="" className='rightLeaf' /> */}
                    </div>

                 
                 {/* Scroll down Arrow */}
                    <div className="scrollDown">
                        <img src={ScrollDown} alt="" />
                    </div>

                </div>
            </div>

            <Menu />
        </div>
    );
}

export default HeroPage;
