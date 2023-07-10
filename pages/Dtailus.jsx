import React from "react";
import Dollar from "../api/Dollar";
import Button from "../components/Button";
import MainLayout from "../components/Layouts/Mainlayout";
import US from "../components/US";
export default function Dtailus() {
  return (
    <MainLayout>
      <div className="bg-slate-200 shadow-md p-4 m-4 rounded-md">
        <div className="flex items-center">
          <US />
          <h1 className="font-sans text-xl font-semibold text-gray-600 ml-4 mr-2">
            米ドルレート
          </h1>
          <Button className="w-24 bg-blue-500 text-white px-4 py-2  p-4 m-4 rounded-md hover:bg-blue-600">
            売り
          </Button>
          <Button className="w-24 bg-red-400 text-white px-4 py-2  p-4 m-4 rounded-md hover:bg-red-600">
            買い
          </Button>
        </div>
        <Dollar />
      </div>
    </MainLayout>
  );
}
