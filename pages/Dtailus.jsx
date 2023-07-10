import React from 'react';
import Dollar from "../api/Dollar";
import MainLayout from '../components/Layouts/Mainlayout';
import US from "../components/US";
export default function Dtailus() {
  return (

    <MainLayout>
        <div className=" bg-slate-200 shadow-md p-4 m-4 rounded-md">
        <US />
        <Dollar />
        </div>
 </MainLayout>
  )
}
