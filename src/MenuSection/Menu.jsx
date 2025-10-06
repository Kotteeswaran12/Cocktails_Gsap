import React, { useRef } from 'react';
import './Menu.css'
import LeftLeaf from '../assets/images/cocktailleftleaf.png'
import RightLeaf from '../assets/images/cocktailrightleaf.png'

import About from '../AboutSection/About.jsx'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { mockTailLists } from '../constants/index.js';
import gsap from 'gsap';

import { cocktailLists } from '../constants/index.js';
gsap.registerPlugin(ScrollTrigger)

const Menu = () => {
    useGSAP(() => {

        gsap.from(".left", {
            scrollTrigger: {
                trigger: ".left",
                start: "-10% 90%",
                end: "50% 80%",

                scrub: 1

            },
            x: -200,
            rotate: -20,
            duration: 1,
            ease: 'power1.inOut',
           
        })

        gsap.from(".right", {
            scrollTrigger: {
                trigger: ".right",
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
        <div id='Cocktails'>
            <div className="MenuOuter">
                <div className="MenuInner">

                    <div className="MostPopular" >
                        <h3>Most popular cocktails :</h3>
                        <div className="cocktailLists">

                            {
                                cocktailLists.map((cocktail, i) => (
                                    <div className="cocktail" key={i} >

                                        <div className="cocktailName">
                                            <h3>{cocktail.name}</h3>
                                            <p>{cocktail.country} | {cocktail.detail}</p>
                                        </div>

                                        <div className="cocktailPrice">

                                            <p>-{cocktail.price}</p>
                                        </div>

                                    </div>
                                ))
                            }


                        </div>
                    </div>

                    <div className="MostLoved">
                        <h3>Most loved mocktails : </h3>
                        <div className="mocktailsList">

                            {
                                mockTailLists.map((mockTail, i) => (
                                    <div className="mocktails" key={i}>
                                        <div className="mocktailsName">
                                            <h3>{mockTail.name} </h3>
                                            <p>{mockTail.country} | {mockTail.detail}</p>
                                        </div>
                                        <div className="mocktailsPrice">
                                            <p>- {mockTail.price}</p>
                                        </div>
                                    </div>
                                ))
                            }


                        </div>
                    </div>
                </div>

                <div className="MenuleftLeaf">
                    <img src={LeftLeaf} alt="" className='left'/>
                </div>
                <div className="MenurightLeaf">
                    <img src={RightLeaf} alt="" className='right'/>
                </div>
            </div>
        </div>
    );
}

export default Menu;
