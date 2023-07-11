// pages/api/transactions.js

import connection from '../../api/api.js';

export default async (req, res) => {
  const transactions = 'SELECT currency_id, SUM(amount) AS total_amount FROM transactions GROUP BY currency_id';
  
  const transactionResults = await new Promise((resolve, reject) => {
    connection.query(transactions, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });

  const data = await Promise.all(
    transactionResults.map(async (result) => {
      const currencies = 'SELECT symbol FROM currencies WHERE id = ?';
      
      const currencyResults = await new Promise((resolve, reject) => {
        connection.query(currencies, [result.currency_id], (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });

      return {
        name: currencyResults[0].symbol,
        value: result.total_amount,
      };
    })
  );

  res.status(200).json(data);
};
