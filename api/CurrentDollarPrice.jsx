import React, { useEffect, useState } from 'react';

export default function CurrentDollarPrice() {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => response.json())
      .then(data => setPrice(data.rates['JPY']));
  }, []);

  return (
    <div>
      {price ? ` ${price}` : 'Loading...'}
    </div>
  );
}

// import React, { useEffect, useState } from 'react';

// export default function CurrentDollarPrice() {
//   const [rates, setRates] = useState({});

//   useEffect(() => {
//     fetch('https://api.exchangerate-api.com/v4/latest/USD')
//       .then(response => response.json())
//       .then(data => {
//         setRates({
//           JPY: data.rates['JPY'],
//           GBP: data.rates['GBP'],
//           CHF: data.rates['CHF'],
//           SGD: data.rates['SGD'],
//         });
//       });
//   }, []);

//   return (
//     <div>
//       {rates.JPY ? `Current price of USD in JPY: ${rates.JPY}` : 'Loading...'}
//       {rates.GBP ? `Current price of USD in GBP: ${rates.GBP}` : 'Loading...'}
//       {rates.CHF ? `Current price of USD in CHF: ${rates.CHF}` : 'Loading...'}
//       {rates.SGD ? `Current price of USD in SGD: ${rates.SGD}` : 'Loading...'}
//     </div>
//   );
// }
