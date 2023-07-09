import React, { useEffect, useState } from 'react';

export default function CurrentPoundPrice() {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/GBP')
      .then(response => response.json())
      .then(data => setPrice(data.rates['JPY']));
  }, []);

  return (
    <div>
      {price ? ` ${price}` : 'Loading...'}
    </div>
  );
}