import React from "react";
import { Link } from "react-router-dom";

const UnlockEfficiency = () => {
  return (
    <section className="py-[5rem] text-white bg-gradient-to-r from-primary/30 to-secondary/30">
      <div
        data-aos="fade-up"
        className="wrapper flex flex-col text-white items-center gap-5 text-center"
      >
        <div className="gradient-rounded-text-box">Unlock Efficiency</div>
        <h2 className="heading-2">Empowering Businesses Through Digital Innovation</h2>
        <p className="desc max-w-[40rem] text-center">
          Enabling businesses to thrive and excel in the modern digital marketplace through innovative solutions and strategic partnerships.
        </p>
        <Link to="/contact-us" className="primary-btn mt-3">
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default UnlockEfficiency;
