import React from "react";
import { FaFacebook } from "react-icons/fa6";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-section">
            <div className="footer-menu-one">
              <h2 className="contact-logo">HEALTCARE</h2>
              <p>Metairie, 3689 Bassel Street, LA, Louisiana</p>
              <p>Contact us: 225-788-5489</p>
              <div className="footer-social">
                <Link href="#">
                  <FaFacebook size={30} />
                </Link>
                <Link href="#">
                  <FaInstagram size={30} />
                </Link>{" "}
                <Link href="#">
                  <FaSquareTwitter size={30} />
                </Link>
                <Link href="#">
                  <FaYoutube size={30} />
                </Link>{" "}
              </div>
            </div>
            <div className="footer-menu-two">
              <h3 className="footer-h">Category</h3>
              <ul className="footer-menu">
                <li>
                  {" "}
                  <a href="#home">Home</a>
                </li>
                <li>
                  {" "}
                  <a href="#about">About</a>
                </li>
                <li>
                  {" "}
                  <a href="#services">Services</a>
                </li>
                <li>
                  {" "}
                  <a href="#reviews">Reviews</a>
                </li>
                <li>
                  {" "}
                  <a href="#article">Article</a>
                </li>
              </ul>
            </div>
            <div className="footer-menu-three">
              <h3 className="footer-h">About</h3>
              <ul className="footer-menu">
                <li>
                  {" "}
                  <a href="#partners">Partners</a>
                </li>
                <li>
                  {" "}
                  <a href="#careers">Careers</a>
                </li>
                <li>
                  {" "}
                  <a href="#press">Press</a>
                </li>
                <li>
                  {" "}
                  <a href="#community">Community</a>
                </li>
              </ul>
            </div>
            <div className="footer-menu-four">
              <h3 className="footer-h">Subscribe newsletter</h3>
              <p>Sign up for tips, new destinations, and exclusive promos.</p>
              <input
                className="input-box"
                type="email"
                name="Enter Your Email"
                placeholder="Enter Your Email"
              />{" "}
              <br />
              <input className="submit-btn" type="button" value="Subcribe" />
            </div>
          </div>
        </div>
      </footer>
      <hr />
      <section className="copy-right">
        <div className="left-copy-right">
          <p>© 2021 Healthcare - All rights reserved.</p>
        </div>
        <div className="right-copy-right">
          <ul>
            <li>
              <a href="#privacy">Privacy</a>
            </li>
            <li>
              <a href="#tecurity">Security</a>
            </li>
            <li>
              <a href="#terms">Terms</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
