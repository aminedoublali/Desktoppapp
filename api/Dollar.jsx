import React, { useEffect, useState } from "react";
import CHF from "../components/CHF";
import EUR from "../components/EU";
import GBP from "../components/GBP";
import JP from "../components/JP";
import MAD from "../components/MAD";
import SGD from "../components/SGD";
export default function Dollar() {
  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((response) => response.json())
      .then((data) => {
        setRates({
          JPY: data.rates["JPY"],
          GBP: data.rates["GBP"],
          CHF: data.rates["CHF"],
          SGD: data.rates["SGD"],
          EUR: data.rates["EUR"],
          MAD: data.rates["MAD"],
        });
      });
  }, []);

  return (
    <div className="flex items-center ">
    <div className="justify-between">
      <div className="flex items-center justify-center font-sans text-xl font-semibold  p-4 m-4 color ml-4 box ">
        <JP className='w-10 h-10'/>
        {rates.JPY ? ` ${rates.JPY}` : "Loading..."}
      </div>
      <div  className="flex items-center justify-center font-sans text-xl font-semibold  p-4 m-4 color ml-4 box">
        <EUR />
        {rates.EUR ? ` ${rates.EUR}` : "Loading..."}
      </div>
      <div  className="flex items-center justify-center font-sans text-xl font-semibold  p-4 m-4 color ml-4 box">
        <GBP />
        {rates.GBP ? ` ${rates.GBP}` : "Loading..."}
      </div>
    </div>
      <div className="justify-between">
      <div className="flex items-center justify-center font-sans text-xl font-semibold  p-4 m-4 color ml-4 box">
        <SGD className='w-10 h-10'/>
        {rates.SGD ? ` ${rates.SGD}` : "Loading..."}
      </div>
      <div  className="flex items-center justify-center font-sans text-xl font-semibold  p-4 m-4 color ml-4 box">
        <MAD />
        {rates.MAD ? ` ${rates.MAD}` : "Loading..."}
      </div>
      <div  className="flex items-center justify-center font-sans text-xl font-semibold  p-4 m-4 color ml-4 box">
        <CHF />
        {rates.CHF ? ` ${rates.CHF}` : "Loading..."}
      </div>
    </div>
    </div>
  );
}
