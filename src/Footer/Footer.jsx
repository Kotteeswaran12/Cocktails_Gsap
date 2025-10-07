import React from 'react';
import './Footer.css';
import { storeInfo } from '../constants';
import { openingHours } from '../constants';
import { socials } from '../constants';
import footerLeftLeaf from '../assets/images/footerleftleaf.png';
import footerRightLeaf from '../assets/images/footerrightleaf.png';
import footerDrinks from '../assets/images/footerdrinks.png';
const Footer = () => {
    return (
        <div id='Contact'>
            <div className="contactInner">

                <h1>{storeInfo.heading}</h1>
                <p className='title'>Visit Our Store</p>
                <p className='address'>{storeInfo.address}</p>
                <p className='title'> Contact Us</p>
                <p className='address'>{storeInfo.contact.phone} </p>
                <p className='address'>{storeInfo.contact.email} </p>

                <p className='title' style={{marginBottom:'0px'}}>Open Every Time</p>
                {
                    openingHours.map((open, i) => {
                        return (
                            <div className='openAt' key={i}>
                                <p className='address'>{open.day} : </p>
                                <p className='address'>{open.time}</p>
                            </div>
                        )
                    })
                }

                    <p className='title'>social</p>
                <div className="social">
                    {
                        socials.map((social , i)=>{
                           return( <img src={social.icon} alt={social.name} key={i} />)
                        })
                    }
                </div>

                <img src={footerLeftLeaf} alt="" className='FooterLeftLeaf'/>
                 <img src={footerRightLeaf} alt=""  className='FooterRightLeaf'/>
                  <img src={footerDrinks} alt="" className='FooterDrinks' />

            </div>
        </div>
    );
}

export default Footer;
