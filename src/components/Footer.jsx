import React from 'react'
import '../css/foot.css'
import { FaFacebookF,FaTwitter,FaYoutube,FaInstagram,FaMapMarkerAlt,FaPhoneAlt,FaEnvelope} from "react-icons/fa";

const Footer = () => {
    return (
            <body>
            <footer>
            <div class="contain">
                <div class="sec aboutus">
                    <h2>About Us</h2>
                    <p>Patel Stationary, is your one stop online shop for a huge variety of stationery products and other essential office supplies. Buy stationery items at great price from patel Stationery shop - online stationery store near me. Find the best notebooks, pen, pencils, glue, crayons and save big on discounts. Order now and pay cash on delivery.
                    </p>
                    <ul class="sci">
                        <li><a href="#"><FaFacebookF color='#fff' font-size='20px' /></a></li>
                        <li><a href="#"><FaTwitter color='#fff' font-size='20px' /></a></li>
                        <li><a href="#"><FaYoutube color='#fff' font-size='20px' /></a></li>
                        <li><a href="#"><FaInstagram color='#fff' font-size='20px' /></a></li>
                    </ul>
                </div>
                <div class="sec quickLinks">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Terms & Condition</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="sec quickLinks">
                    <h2>Shop</h2>
                    <ul>
                        <li><a href="#">Office Essential</a></li>
                        <li><a href="#">School Essential</a></li>
                        <li><a href="#">Notebook & Diaries</a></li>
                        <li><a href="#">Ink & Tonner</a></li>
                    </ul>
                </div>
                <div class="sec Contact">
                    <h2>Contact us</h2>
                    <ul class="info">
                        <li>
                            <span><FaMapMarkerAlt color='#fff' font-size='20px' /></span>
                            <span>Kazi Sayed Street <br />
                                Masjid Bandar West <br />Mumbai, Maharashtra 400003</span>
                        </li>
                        {<li>
                            <span class="phone"><FaPhoneAlt color='#fff' font-size='20px' /></span>
                            <p><a href="tel:+918850330868">+91-8850330868</a></p>
                        </li>}
                        <li>
                            <span><FaEnvelope color='#fff' font-size='20px' /></span>
                            <p><a href="mailto:patelstationary@gmail.com">patelstationary@gmail.com</a></p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
            <div class="copyrightText">
                <p>
                    Copyright &copy; 2022 Patel Stationery. All Rights Reserved.
                </p>
            </div>
        </body>
    )
}
export default Footer
