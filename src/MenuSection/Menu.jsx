import React, { useRef } from 'react';
import './Menu.css'
import LeftLeaf from '../assets/images/cocktailleftleaf.png'
import RightLeaf from '../assets/images/cocktailrightleaf.png'

import About from '../AboutSection/About.jsx'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger)

const Menu = () => {
    useGSAP(() => {

        gsap.from(".MenuleftLeaf", {
            scrollTrigger: {
                trigger: ".MenuleftLeaf",
                start: "-10% 90%",
                end: "50% 80%",

                scrub: 1

            },
            x: -200,
            rotate: -20,
            duration: 1,
            ease: 'power1.inOut'
        })

        gsap.from(".MenurightLeaf", {
            scrollTrigger: {
                trigger: ".MenurightLeaf",
                start: "-10% 90%",
                end: "50% 80%",

                scrub: 1

            },
            x: 200,
            rotate: 20,
            duration: 1,
            ease: 'power1.inOut'
        })

        gsap.from(".MostLoved", {
            scrollTrigger: {
                trigger: ".MostLoved",
                start: "-50% center",
                end: "80% 60%",

                scrub: true,


            },
            x: 300,
            opacity: 0,
            duration: 1,
            ease: 'power1.inOut'
        })

        gsap.from(".MostPopular", {
            scrollTrigger: {
                trigger: ".MostPopular",
                start: "-50% center",
                end: "80% 60%",

                scrub: true,


            },
            x: -300,
            opacity: 0,
            duration: 1,
            ease: 'power1.inOut'
        })
    }, [])

    return (
        <div>
            <div className="MenuOuter">
                <div className="MenuInner">

                    <div className="MostPopular" >
                        <h3>Most popular cocktails :</h3>
                        <div className="cocktailLists">
                            <div className="cocktail">

                                <div className="cocktailName">
                                    <h3>Chapel Hill Shiraz</h3>
                                    <p>AU | Battle</p>
                                </div>

                                <div className="cocktailPrice">

                                    <p>- $10</p>
                                </div>

                            </div>
                            <div className="cocktail">

                                <div className="cocktailName">
                                    <h3>Caten Malbee</h3>
                                    <p>AU | Battle</p>
                                </div>

                                <div className="cocktailPrice">

                                    <p>- $49</p>
                                </div>

                            </div>
                            <div className="cocktail">

                                <div className="cocktailName">
                                    <h3>Rhino Pale Ale</h3>
                                    <p>CA | 750 ml</p>
                                </div>

                                <div className="cocktailPrice">

                                    <p>- $20</p>
                                </div>

                            </div>
                            <div className="cocktail">

                                <div className="cocktailName">
                                    <h3>Irish Guinness</h3>
                                    <p>IE | 600 ml</p>
                                </div>

                                <div className="cocktailPrice">

                                    <p>- $29</p>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="MostLoved">
                        <h3>Most loved mocktails : </h3>
                        <div className="mocktailsList">
                            <div className="mocktails">
                                <div className="mocktailsName">
                                    <h3>Tropical Bloom </h3>
                                    <p>US | Battle</p>
                                </div>
                                <div className="mocktailsPrice">
                                    <p>- $10</p>
                                </div>
                            </div>

                            <div className="mocktails">
                                <div className="mocktailsName">
                                    <h3>Lavender Fizz </h3>
                                    <p>IE | 600 ml</p>
                                </div>
                                <div className="mocktailsPrice">
                                    <p>- $29</p>
                                </div>
                            </div>

                            <div className="mocktails">
                                <div className="mocktailsName">
                                    <h3>Passionfruit Mint </h3>
                                    <p>US | Battle</p>
                                </div>
                                <div className="mocktailsPrice">
                                    <p>- $49</p>
                                </div>
                            </div>

                            <div className="mocktails">
                                <div className="mocktailsName">
                                    <h3>Citrus Glow</h3>
                                    <p>CA | 750 ml</p>
                                </div>
                                <div className="mocktailsPrice">
                                    <p>- $10</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="MenuleftLeaf">
                    <img src={LeftLeaf} alt="" />
                </div>
                <div className="MenurightLeaf">
                    <img src={RightLeaf} alt="" />
                </div>
            </div>
            <About />
        </div>
    );
}

export default Menu;
