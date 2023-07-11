import React, { useEffect, useState } from "react";
import CHF from "../components/CHF";
import EUR from "../components/EU";
import GBP from "../components/GBP";
import JP from "../components/JP";
import MAD from "../components/MAD";
import SGD from "../components/SGD";
export default function Pound() {
  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/GBP")
      .then((response) => response.json())
      .then((data) => {
        setRates({
          JPY: data.rates["JPY"],
          USD: data.rates["USD"],
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
        <div>
          <h2 style={{  color : ' rgb(71 85 105)' }}>GBP/JPY</h2>
        {rates.JPY ? ` ${rates.JPY}` : "Loading..."}
        </div>
      </div>
      <div  className="flex items-center justify-center font-sans text-xl font-semibold  p-4 m-4 color ml-4 box">
        <EUR />
        <div>
          <h2 style={{  color : ' rgb(71 85 105)' }}>GBP/EUR</h2>
        {rates.EUR ? ` ${rates.EUR}` : "Loading..."}
      </div>
      </div>
      <div  className="flex items-center justify-center font-sans text-xl font-semibold  p-4 m-4 color ml-4 box">
        <GBP />
        <div>
          <h2 style={{  color : ' rgb(71 85 105)' }}>GBP/USD</h2>
        {rates.USD ? ` ${rates.USD}` : "Loading..."}
      </div>
      </div>
    </div>
      <div className="justify-between">
      <div className="flex items-center justify-center font-sans text-xl font-semibold  p-4 m-4 color ml-4 box">
        <SGD className='w-10 h-10'/>
        <div>
          <h2 style={{  color : ' rgb(71 85 105)' }}>GBP/SGD</h2>
        {rates.SGD ? ` ${rates.SGD}` : "Loading..."}
      </div>
      </div>
      <div  className="flex items-center justify-center font-sans text-xl font-semibold  p-4 m-4 color ml-4 box">
        <MAD />
        <div>
          <h2 style={{  color : ' rgb(71 85 105)' }}>GBP/MAD</h2>
        {rates.MAD ? ` ${rates.MAD}` : "Loading..."}
      </div>
      </div>
      <div  className="flex items-center justify-center font-sans text-xl font-semibold  p-4 m-4 color ml-4 box">
        <CHF />
        <div>
          <h2 style={{  color : ' rgb(71 85 105)' }}>GBP/CHF</h2>
        {rates.CHF ? ` ${rates.CHF}` : "Loading..."}
      </div>
      </div>
    </div>
    </div>
  );
}
