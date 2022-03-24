import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";


const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
      <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
        {icon}
      </div>
      <div className="ml-5 flex flex-col flex-1">
        <h3 className="mt-2 text-white text-lg">{title}</h3>
        <p className="mt-1 text-white text-sm md:w-9/12">
          {subtitle}
        </p>
      </div>
    </div>
  );

const Services = () =>{
    return (
      <div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">  
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Latest technologies
          <br />
          that we use
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          BlockChain, MetaMask, Solidity, Web3.O, Ethereum, ReactJS, SmartContract
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Fast and Secure"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Very easy to use and fast web3.O based technology.  with upto date system and time to time updation."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Very low commision"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="very low fees on each transaction to anywhere. NO extra fee on any kind of tax."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Focus on privacy"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Privacy is guranteed. We always maintain privacy and maintain the quality of our products"
        />
      </div>
    </div>
  </div>
    );
}

export default Services;