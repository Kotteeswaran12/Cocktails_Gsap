import React, { useRef } from 'react';
import './HeroPage.css'

import leftLeaf from '../assets/images/heroleftleaf.png'
import rightLeaf from '../assets/images/herorightleaf.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollDown from '../assets/images/arrow.png'
import MainImg from '../assets/images/Main.png'
import inputVideo from '../assets/videos/input.mp4'
import { ScrollTrigger, SplitText } from "gsap/all";
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger, SplitText);
// herorightleaf.png
const HeroPage = () => {
    const videoRef = useRef();
    const isMobile = useMediaQuery({ maxWidth: 767 });
    useGSAP(() => {
        // const HeadingSplit = new SplitText('.MainHeading' , {type:'chars , words'});
        // const ParaSplit = new SplitText(".subtitle" , {type:'line'});
        // HeadingSplit.chars.forEach((char)=> char.classList.add("MainHeading"))

        // gsap.from(HeadingSplit.chars , {
        //     yPercent:90,
        //     duration:0.8,
        //     ease:'expo.in',
        //     stagger:0.06,
        //     opacity:0,
        // })
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
            delay: 1,
            ease: 'elastic'
        })
        gsap.from(".rightBottom", {
            x: 200,
            opacity: 0,
            duration: 5,
            delay: 1,
            ease: 'elastic'
        })
        gsap.from(".scrollDown", {
            y: -50,
            opacity: 0.5,
            duration: 0.6,
            ease: 'power2.inOut',
            delay: 2
        })
        gsap.timeline({
            scrollTrigger: {
                trigger: '.HeroInner',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            }
        })
            .to('.HeroleftLeaf', { y: 200 }, 0)
            .to(".HerorightLeaf", { y: -200 }, 0)
        const startValue = isMobile ? "top 50%" : "center 60%";
        const endValue = isMobile ? "120% top" : "bottom top";

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "video",
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
            },
        });

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration,
            });
        };
    }, [])
    return (
        <div>

            <div className="HeroInner">
                <div className="HeroInnermost">
                    <h1 className='MainHeading'>MOJITO</h1>

                    <div className="leftBottom">
                        <p className='subtitle'>Cool Crisp Classic</p>
                        <h3 className='subtitle'>Sip the Spirit  <br />of Summer</h3>
                    </div>
                    <div className="rightBottom">
                        <p className='subtitle'>Every cocktail on our menu is a blend of premium ingredients  creative flair and timeless recipes designed to delight your senses </p>
                        <p className='view subtitle'>View cocktails</p>
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

            <div className="HeroVideo">
                <video src={inputVideo}
                    ref={videoRef}
                    muted
                    playsInline
                    preload='auto'
                />
            </div>


        </div>
    );
}

export default HeroPage;
