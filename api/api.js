// MySQLパッケージをインポート
import mysql from 'mysql';

// データベース接続を作成
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'testuser',
  password: 'testpass',
  database: 'invest',
});

// データベースに接続
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');

  // Currenciesテーブルを作成するSQLクエリ
  const createCurrenciesTable = `
    CREATE TABLE IF NOT EXISTS Currencies (
      id INT PRIMARY KEY,
      name VARCHAR(50),
      symbol VARCHAR(10)
    );
  `;

  // Currenciesテーブル作成クエリを実行
  connection.query(createCurrenciesTable, (err, results) => {
    if (err) throw err;
    console.log('Currencies table created or already exists.');
  });

  // Transactionsテーブルを作成するSQLクエリ
  const createTransactionsTable = `
    CREATE TABLE IF NOT EXISTS Transactions (
      id INT PRIMARY KEY,
      currency_id INT,
      amount FLOAT,
      date DATE,
      FOREIGN KEY(currency_id) REFERENCES Currencies(id)
    );
  `;

  // Transactionsテーブル作成クエリを実行
  connection.query(createTransactionsTable, (err, results) => {
    if (err) throw err;
    console.log('Transactions table created or already exists.');
  });

  // デフォルトの通貨データ
  const currencies = [
    { id: 1, name: 'US Dollar', symbol: 'USD' },
    { id: 2, name: 'Euro', symbol: 'EUR' },
    { id: 3, name: 'Japanese Yen', symbol: 'JPY' },
    // 他の通貨データを追加できます...
  ];

  // それぞれの通貨データについて...
  currencies.forEach((currency) => {
    // INSERT INTOクエリを作成
    const query = `
      INSERT INTO Currencies (id, name, symbol)
      VALUES (${currency.id}, '${currency.name}', '${currency.symbol}')
      ON DUPLICATE KEY UPDATE name = VALUES(name), symbol = VALUES(symbol);
    `;

    // クエリを実行
    connection.query(query, (err, results) => {
      if (err) throw err;
      console.log(`Inserted or updated currency: ${currency.name}`);
    });
  });
});

// connectionオブジェクトをエクスポート
export default connection;
