import React, { useEffect, useState } from 'react';

export default function CurrentPoundPrice() {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/GBP')
      .then(response => response.json())
      .then(data => setPrice(data.rates['JPY']));
  }, []);

  return (
    <di className=" font-sans text-xl font-semibold text-blue-900 ml-4" style={{ color : '#6b93ff' }}v>
      {price ? `￥${price}` : 'Loading...'}
    </di>
  );
}