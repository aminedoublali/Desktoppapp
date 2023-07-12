import React, { useState } from "react";

// デフォルトの通貨データ
const currencies = [
  { id: 1, name: 'US Dollar', symbol: 'USD' },
  { id: 2, name: 'Euro', symbol: 'EUR' },
  { id: 3, name: 'Japanese Yen', symbol: 'JPY' },
  // 他の通貨データを追加できます...
];

export default function Form() {
  const [currencyId, setCurrencyId] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // ここでサーバーにデータを送信します
    console.log(`Currency ID: ${currencyId}`);
    console.log(`Amount: ${amount}`);
    console.log(`Date: ${date}`);
  };

  return (
<form onSubmit={handleSubmit} className="space-y-4">
  <div className="flex flex-col">
    <label htmlFor="currency" className="mb-2 font-sans text-base font-medium text-gray-600">国を選択</label>
    <select id="currency" value={currencyId} onChange={(e) => setCurrencyId(e.target.value)} className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
      <option value=""></option>
      {currencies.map((currency) => (
        <option key={currency.id} value={currency.id}>{currency.name}</option>
      ))}
    </select>
  </div>
  <div className="flex flex-col">
    <label htmlFor="amount" className="mb-2 font-sans text-base font-medium text-gray-600">枚数</label>
    <input id="amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
  </div>
  <div className="flex flex-col">
    <label htmlFor="date" className="mb-2 font-sans text-base font-medium text-gray-600">購入日</label>
    <input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
  </div>
  <input type="submit" value="Submit" className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
</form>

  );
}
