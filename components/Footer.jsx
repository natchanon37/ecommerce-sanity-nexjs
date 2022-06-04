import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = ({ footerbanner }) => {
  return (
    <div className="footer-container">
      <p>2022 Ducky Store All rigts reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
