import React from "react";
import "../css/aboutus.css";
import {FaFacebookF,FaTwitter,FaYoutube,FaInstagram}from "react-icons/fa";


const Aboutus = () => {
  return (
    
    <div class="section">
      <div class="container1">
        <div class="content-section">
          <div class="title">
            <h1>About Us</h1>
          </div>
          <div class="content">
            <h3>Patel Stationery</h3>
            <p>
              Patel Stationary, is your one stop online shop for a huge variety
              of stationery products and other essential office supplies. Buy
              stationery items at great price from patel Stationery shop -
              online stationery store near me. Find the best notebooks, pen,
              pencils, glue, crayons and save big on discounts. Order now and
              pay cash on delivery.We believed stationery is the least expensive
              luxury and it is one of the few things that bring us joy. It has
              been a great pleasure serving all of our lovely customers. Some of
              you might have contact with us before and some of you might not.
              We think it would be great if you get to know us better. Here is
              the Patel Stationery team.
            </p>
          </div>
          <div class="sec about us">
            <ul class="sci">
              <li>
                <a href="/#">
                  <FaFacebookF color="#fff" font-size="20px" />
                </a>
              </li>
              <li>
                <a href="/#">
                  <FaTwitter color="#fff" font-size="20px" />
                </a>
              </li>
              <li>
                <a href="/#">
                  <FaYoutube color="#fff" font-size="20px" />
                </a>
              </li>
              <li>
                <a href="/#">
                  <FaInstagram color="#fff" font-size="20px" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus;