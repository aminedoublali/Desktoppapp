import React from "react";
import CurrentDollarPrice from "../api/CurrentDollarPrice";
import CurrentEuroPrice from "../api/CurrentEuroPrice";
import CurrentMoroccoPrice from "../api/CurrentMoroccoPrice";
import CurrentPoundPrice from "../api/CurrentPoundPrice";
import CurrentSingaporePrice from "../api/CurrentSingaporePrice";
import CurrentSwissPrice from "../api/CurrentSwissPrice";
import CHF from "../components/CHF";
import EU from "../components/EU";
import GBP from "../components/GBP";
import MainLayout from "../components/Layouts/Mainlayout";
import MAD from "../components/MAD";
import SGD from "../components/SGD";
import US from "../components/US";

export default function Fx() {
  return (
    <MainLayout>
      <div className=" flex items-center">
        <US />
        <CurrentDollarPrice/>
        </div>
        <div className=" flex items-center">
        <GBP/>
        <CurrentPoundPrice />
        </div>
        <div className=" flex items-center">
        <EU/>
        <CurrentEuroPrice />
        </div>
        <div className=" flex items-center">
        <CHF/>
        <CurrentSwissPrice />
        </div>
        <div className=" flex items-center">
        <SGD/>
        <CurrentSingaporePrice />
        </div>
        <div className=" flex items-center">
        <MAD/>
        <CurrentMoroccoPrice />
        </div>
    </MainLayout>
  );
}
