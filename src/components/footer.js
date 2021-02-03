import React from 'react'
import {Link} from 'gatsby'
import {faTwitter, faInstagram, faFacebook, faGoodreads} from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LogoFooter from '../../static/logo/stratton-footer-logo.png'
import  Logo from '../../static/logo/logo.svg'
import Newsletter from "./newsletter"


const Footer = ()=>{
    
    return(
        <>
            <footer className="footer-section">
                <div className="footer-container footer-grid">
                    <div className="footer-child footer-paragraph-info">
                        <h1>
                            <img
                                src={Logo}
                                alt="img-footer-logo"
                            />
                        </h1>

                        <p>
                            Dr. Wanda D. Tolbert loves to hear from readers. You can reach her via email. 
                            Feel free to send questions about writing, her works, interviews 
                            and other publicity matters.
                        </p>
                        
                    <nav className="social-media-nav">
                        <ul> 

                            <li>
                                <a href="https://www.facebook.com/StrattonPressInc/"
                                target="_blank"
                                rel="noreferrer">
                                    <FontAwesomeIcon   
                                        className='font-awesome'
                                        icon={faFacebook} />
                                </a>
                            </li>

                            <li>
                                <a
                                    target="_blank"
                                    href="https://twitter.com/StrattonPress"
                                    rel="noreferrer"
                                    >
                                        
                                    <FontAwesomeIcon
                                        className='font-awesome'
                                        icon={faTwitter} />
                                </a>
                            </li>

                            <li>
                                <a          
                                    target="_blank"
                                    href="https://www.instagram.com/strattonpress/"
                                    rel="noreferrer"
                                    >

                                    <FontAwesomeIcon
                                        className='font-awesome'
                                        icon={faInstagram} />
                                </a>
                            </li>

                            <li>
                                <a          
                                    target="_blank"
                                    href="https://www.goodreads.com/book/show/56362405-don-t-work-for-the-money-let-the-money-work-for-you?from_search=true&from_srp=true&qid=0eKMo4w7xC&rank=1"
                                    rel="noreferrer"
                                    >

                                    <FontAwesomeIcon
                                        className='font-awesome'
                                        icon={faGoodreads} />
                                </a>
                            </li>
                        
                        </ul>

                    </nav>
                </div>

                <div className="footer-child footer-nav">
                    <h5>Navigations</h5>
                        <ul>
                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about-the-author">
                                    About the Author
                                </Link>
                            </li>
                            <li>
                                <Link to="/about-the-book">
                                    About the Book
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <div className="footer-child" id="newsletter">
                        <h5>Newsletter</h5>
                            <p>Stay up to date with the latest from me</p>
                        <Newsletter/>
                    </div>
                </div>

                <div className="two-grid-column" id="lower-footer">
                    <p>
                        <img 
                            alt="logo-developer"
                            className="logo-developer"
                            src={LogoFooter}
                        />

                         &#169; Copyright 2020. Stratton Press.
                    </p>

                    <ul className="two-grid-column" id="metalinks-footer">

                        <li>
                            <Link to="/privacy-policy">
                                Privacy Policy
                            </Link>
                        </li>

                        <li>
                            <Link to="/terms-and-conditions">
                                Terms & Conditions
                            </Link>
                        </li>

                    </ul>
                </div>

            </footer>
        </>
    )
}

export default Footer;


