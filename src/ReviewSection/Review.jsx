import React from 'react';
import './Review.css'
import { profileLists } from '../constants';
import abt1 from '../assets/images/abt1.png';
import abt2 from '../assets/images/abt2.png';
import abt3 from '../assets/images/abt3.png';
import abt4 from '../assets/images/abt4.png';
import abt5 from '../assets/images/abt5.png';
import { FaStar } from "react-icons/fa6";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)
const Review = () => {

    useGSAP(() => {

        const splitText = SplitText.create(".txtAnimation", {
            type: 'words'
        })

        gsap
            .from(splitText.words, {
                scrollTrigger: {
                    trigger: '.Reviewleft',
                    start: "top 50%",
                    end: "bottom bottom",
                    scrub: 1,
                },
                y: 200,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power1.inOut'
            }

            )
        gsap.from('.leftbtn', {
            scrollTrigger: {
                trigger: '.Reviewleft',
                start: "top 50%",
                end: "bottom bottom",
                scrub: 1,
            },
            opacity: 0,
            duration: 1
        })

        gsap.from(".Reviewright", {
            scrollTrigger: {
                trigger: '.Reviewleft',
                start: "top 50%",
                end: "bottom bottom",
                scrub: 1,
            },
            x: 200,
            opacity: 0,
            duration: 1,
            ease: 'power1.inOut'
        })
        const images = document.querySelectorAll(".ReviewImg")
        gsap.from(images, {
            scrollTrigger: {
                trigger: images,
                start: "top 50%",
                end: "bottom bottom",
                scrub: 1,
            },
            opacity: 0,
            y: 40,
            duration: 1,
            ease: 'power1.inOut',
            stagger: 0.7,
        }, '-=0.5')
    }, [])

    const Abtimg = [abt1, abt2, abt3, abt4, abt5]
    return (
        <div id='Review'>
            <div className="ReviewOuter">
                <div className="ReviewInner">
                    <div className="ReviewPart1">
                        <div className="Reviewleft">
                            <button className='leftbtn'>Best Cocktails</button>
                            <h1 className='txtAnimation'>Where every detail matters—from muddle to garnish</h1>
                        </div>
                        <div className="Reviewright">
                            <p>Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable. </p>
                            <div className="review">
                                <div className="stars">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                    <h1>4.5/5</h1>
                                </div>
                                <div className="logos">
                                    {
                                        profileLists.map((profil, i) => (
                                            <img src={profil} alt="sorry" key={i}/>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ReviewImgs">
                        {
                            Abtimg.map((img, i) => (
                                <img src={img} alt="" style={{ gridArea: `img${i}` }} className='ReviewImg'  key={i}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;
