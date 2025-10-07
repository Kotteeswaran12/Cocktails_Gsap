import React from 'react';
import './TheArt.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { FaCheckCircle } from "react-icons/fa";
import { goodLists } from '../constants';
import { featureLists } from '../constants';
import bgImg from '../assets/images/underimg.jpg'
import { useMediaQuery } from 'react-responsive';
gsap.registerPlugin(ScrollTrigger)
const TheArt = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    useGSAP(() => {
        const start = isMobile ? 'top 20%' : 'top top';
        const maskImg = gsap.timeline({
            scrollTrigger: {
                trigger: "#TheArt",
                start: start,
                end: 'bottom center',
                scrub: 1.5,
                pin: true
            }
        })

        maskImg
            .to('.fade', {
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power1.inOut'
            })
            .to('.MaskedImg', {
                scale: 1.3,
                maskPosition: 'center',
                maskSize: '400%',
                duration: 3,
                ease: 'power1.inOut',
            })
            .to('.MaskContent', {
                opacity: 1,
                duration: 1,
                ease: 'power1.inOut'
            })
    }, [])
    return (
        <div id='TheArt' >
            <div className="ArtOuter">
                <div className="ArtInner">
                    <div className="ArtText">
                        <h1 className='ArtTextMain fade'>The Art</h1>
                    </div>
                    <div className="ArtFeature">
                        <div className="FeatureList">
                            {
                                featureLists.map((feature) => (
                                    <p className='fade' key={feature}><FaCheckCircle className='check fade' /> {feature} </p>
                                ))
                            }
                        </div>
                        <div className="cocktailImg">
                            <img src={bgImg} alt="" className='MaskedImg' />
                        </div>
                        <div className="goodLists">
                            {
                                goodLists.map((goods) => {
                                    return (<p className='fade' key={goods}><FaCheckCircle className='check fade' /> {goods}</p>)
                                })
                            }
                        </div>

                    </div>
                    <div className="MaskContent">
                        <h2>Made with Craft, Poured with Passion</h2>
                        <p>This isn't just a drink. It's a carefully crafted moment made just for you.</p>
                    </div>
                    <div className="footer">
                        <h2 className='fade'>Sip-Worthy Perfection</h2>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default TheArt;
