import React, { useEffect, useState } from 'react';

export default function CurrentSingaporePrice() {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/SGD')
      .then(response => response.json())
      .then(data => setPrice(data.rates['JPY']));
  }, []);

  return (
    <div>
      {price ? ` ${price}` : 'Loading...'}
    </div>
  );
}
