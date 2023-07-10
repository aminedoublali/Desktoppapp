import Link from 'next/link';
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
      <div className=" flex items-center bg-slate-200 shadow-md p-4 m-4 rounded-md">
        <US />
        <h1 className="font-sans text-xl font-semibold text-gray-600 ml-4">米ドル</h1>
        <CurrentDollarPrice/>
        <Link className='Detailbtn text-green-950 font-sans font-semibold  ml-4 rounded-md' href="/Dtailus">詳細なレートをチェック</Link>
        </div>
        <div className=" flex items-center bg-slate-200 shadow-md p-4 m-4 rounded-md">
        <GBP/>
        <h1 className="font-sans text-xl font-semibold text-gray-600 ml-4">イギリスポンド</h1>
        <CurrentPoundPrice />
        <Link className='Detailbtn text-green-950 font-sans font-semibold  ml-4 rounded-md' href="/dashboard">詳細なレートをチェック</Link>
        </div>
        <div className=" flex items-center bg-slate-200 shadow-md p-4 m-4 rounded-md">
        <EU/>
        <h1 className="font-sans text-xl font-semibold text-gray-600 ml-4">ユーロ</h1>
        <CurrentEuroPrice />
        <Link className='Detailbtn text-green-950 font-sans font-semibold  ml-4 rounded-md' href="/dashboard">詳細なレートをチェック</Link>
        </div>
        <div className=" flex items-center bg-slate-200 shadow-md p-4 m-4 rounded-md">
        <CHF/>
        <h1 className="font-sans text-xl font-semibold text-gray-600 ml-4">スイスフラン</h1>
        <CurrentSwissPrice />
        <Link className='Detailbtn text-green-950 font-sans font-semibold  ml-4 rounded-md' href="/dashboard">詳細なレートをチェック</Link>
        </div>
        <div className="flex items-center bg-slate-200 shadow-md p-4 m-4 rounded-md">
        <SGD/>
        <h1 className="font-sans text-xl font-semibold text-gray-600 ml-4">シンガポールドル</h1>
        <CurrentSingaporePrice />
        <Link className='Detailbtn text-green-950 font-sans font-semibold  ml-4 rounded-md' href="/dashboard">詳細なレートをチェック</Link>
        </div>
        <div className=" flex items-center bg-slate-200 shadow-md p-4 m-4 rounded-md">
        <MAD/>
        <h1 className="font-sans text-xl font-semibold text-gray-600 ml-4">モロッコディルハム</h1>
        <CurrentMoroccoPrice />
        <Link className='Detailbtn text-green-950 font-sans font-semibold  ml-4 rounded-md' href="/dashboard">詳細なレートをチェック</Link>
        </div>
    </MainLayout>
  );
}
