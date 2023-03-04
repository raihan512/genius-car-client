import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 rounded-md mb-12">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img
            src={person}
            className="absolute bottom-0 left-0 w-4/5 rounded-lg shadow-2xl"
            alt=""
          />
          <img
            src={parts}
            className="absolute -top-20 right-8 w-3/5 border-8 rounded-lg shadow-2xl"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <h4 className="text-xl font-semibold text-orange-600">About Us</h4>
          <h3 className="text-5xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h3>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
