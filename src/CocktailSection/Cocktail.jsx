import React, { useState } from 'react';
import './Cocktail.css'
import { allCocktails } from '../constants';
import CocktailRightLeaf from '../assets/images/sliderrightleaf.png'
import CocktailLeftLeaf from '../assets/images/sliderleftleaf.png'
import rightArrow from '../assets/images/right-arrow.png'
import leftArrow from '../assets/images/left-arrow.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)
const Cocktail = () => {
    const [displayById, setDisplayById] = useState(allCocktails[1].id);
    const [cocktailImg, setCocktailImg] = useState(allCocktails[displayById - 1]);
    console.log(cocktailImg);
    const handelPrev = () => {
        let prevId = displayById > 1 ? displayById - 1 : allCocktails.length;
        setDisplayById(prevId);
        setCocktailImg(allCocktails[prevId - 1])

    }
    const handelNext = () => {
        let prevId = displayById < allCocktails.length ? displayById + 1 : 1;
        setDisplayById(prevId);
        setCocktailImg(allCocktails[prevId - 1])

    }
    useGSAP(() => {
        gsap.from('.SlideCocktailImg', {
            y: 200,
            opacity: 0,
            duration: 1,
            ease: 'power1.inOut'
        })
        gsap.from('.CocktailDetails', {
            opacity: 0,
            filter: "blur(10px)",
            delay: 0.2,
            stagger: 1,
            duration: 1,
            ease: 'power1.inOut',
        })




    }, [displayById])

    useGSAP(() => {
        const LeaftimeLine = gsap.timeline({
            scrollTrigger: {
                trigger: '#Cocktails',
                start: 'top 30%',
                end: 'bottom bottom',
                scrub: 1,
                // markers: true, // (optional) use this to debug start/end
            },
        });

        LeaftimeLine
            .from('.CocktailLeftLeaf', {
                y: -200,
                opacity: 0,
                duration: 2,
                ease: 'power1.inOut',
            });
        LeaftimeLine.from('.CocktailRightLeaf', {
            y: 200,
            opacity: 0,
            duration: 2,
            ease: 'power1.inOut',
        })

    }, []);
    return (

        <div id='Cocktails' aria-labelledby='cocktail-menu'>
            <div className="cocktailOuter" >
                <div className="CocktailLeftLeaf" >
                    <img src={CocktailLeftLeaf} alt="" />
                </div>
                <div className="CocktailRightLeaf">
                    <img src={CocktailRightLeaf} alt="" className='ScrollCocktailLeaf' />
                </div>
                <div className="cocktailInner">
                    <nav>
                        <ul>
                            {
                                allCocktails.map((cocktail) => (
                                    <li className={displayById == cocktail.id ? 'display' : ''} onClick={() => {
                                        setDisplayById(cocktail.id); setCocktailImg(cocktail)
                                    }} key={cocktail.id}>{cocktail.name}</li>
                                ))
                            }
                        </ul>
                    </nav>


                    <div className="cocktailMainOuter">
                        <div className="CocktailMain" key={cocktailImg.id}>
                            <div className="leftArrow">
                                <img src={rightArrow} alt="" onClick={handelPrev} />
                                <h3>{cocktailImg.name}</h3>
                            </div>
                            <img src={cocktailImg.image} alt={cocktailImg.name} className='SlideCocktailImg' />


                            <div className="rightArrow">
                                <img src={leftArrow} alt="" onClick={handelNext} />
                                <h3>{allCocktails[displayById < allCocktails.length ? displayById : 0]?.name}</h3>

                            </div>
                        </div>


                    </div>
                    <div className="CocktailDetails">
                        <div className="leftDetails">
                            <p>recipe :</p>
                            <h2>{cocktailImg.name}</h2>
                        </div>
                        <div className="rightDetails">
                            <h3>
                                {cocktailImg.description}
                            </h3>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default Cocktail;
