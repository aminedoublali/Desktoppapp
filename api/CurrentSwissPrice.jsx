import React, { useEffect, useState } from 'react';

export default function CurrentSwissPricejsx() {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/CHF')
      .then(response => response.json())
      .then(data => setPrice(data.rates['JPY']));
  }, []);

  return (
    <div className=" font-sans text-xl font-semibold text-blue-900 ml-4" style={{ color : '#6b93ff' }}>
      {price ? ` ￥${price}` : 'Loading...'}
    </div>
  );
}
