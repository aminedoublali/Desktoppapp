import React, { useState } from "react";
import Dollar from "../api/Dollar";
import Button from "../components/Button";
import Exchange from "../components/Exchange";
import Form from "../components/Form";
import JP from "../components/JP";
import MainLayout from "../components/Layouts/Mainlayout";
import Modal from "../components/Modal"; // モーダルコンポーネントをインポート
import US from "../components/US";

export default function Dtailus( onClose) {
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false); // モーダルの状態を管理するstate
  const [isSellModalOpen, setIsSellModalOpen] = useState(false); // モーダルの状態を管理するstate
  return (
    <MainLayout>
      <div className="bg-slate-200 shadow-md p-4 m-4 rounded-md">
        <div className="flex items-center">
          <US />
          <h1 className="font-sans text-xl font-semibold text-gray-600 ml-4 mr-2">
            米ドルレート
          </h1>
          <Button
            onClick={() => setIsSellModalOpen(true)} 
            className="w-24 bg-blue-500 text-white px-4 py-2  p-4 m-4 rounded-md hover:bg-blue-600"
          >
            売り
          </Button>
          <Button
            onClick={() => setIsBuyModalOpen(true)} // 購入ボタンがクリックされたらモーダルを開く
            className="w-24 bg-red-400 text-white px-4 py-2  p-4 m-4 rounded-md hover:bg-red-600"
          >
            買い
          </Button>
        </div>
        <Dollar />
      </div>
      {isBuyModalOpen && ( // モーダルの状態によってモーダルを表示または非表示にする
        <Modal onClose={() => setIsBuyModalOpen(false)} onClick={(e) => e.stopPropagation()}>
         <div className="fixed inset-0 flex items-center justify-center bg-opacity-75 bg-red-50 z-50">
          <div className="bg-white p-10 rounded-md shadow-md">
          <button  className="btnbox" onClick={() => setIsBuyModalOpen(false)}>×</button>
          <div className="flex items-center">
            <JP />
            <Exchange />
            <US />
            </div>
          <Form />
          </div>
         </div>
        </Modal>
        
      )}
         {isSellModalOpen && ( // モーダルの状態によってモーダルを表示または非表示にする
        <Modal  onClose={() => setIsSellModalOpen(false)} onClick={(e) => e.stopPropagation()}>
         <div className="fixed inset-0 flex items-center justify-center bg-opacity-75 bg-cyan-50 z-50 ">
        
          <div className="bg-white  p-10 rounded-md shadow-md">
          <button className="btnbox"  onClick={() => setIsSellModalOpen(false)}>×</button>
          <div className="flex items-center">
            <JP />
            <Exchange />
            <US />
            </div>
          <Form />
          </div>
         </div>
        </Modal>
        
      )}
    </MainLayout>
  );
}
