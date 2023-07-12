import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'testuser',
  password: 'testpass',
  database: 'invest',
});

// データベースに接続
// connect関数は、作成したデータベース接続を開きます。
// これは非同期操作であり、結果（成功または失敗）は指定されたコールバック関数に渡されます。
connection.connect((err) => {
  if (err) throw err; // エラーが発生した場合、エラーをスローしてプログラムを停止します
  console.log('Connected to the database.'); // 接続に成功したことをコンソールに表示します

  // Currenciesテーブルを作成するSQLクエリ
  // CREATE TABLE IF NOT EXISTS文は、指定された名前のテーブルが存在しない場合にのみ新しいテーブルを作成します。
  const createCurrenciesTable = `
    CREATE TABLE IF NOT EXISTS Currencies (
      id INT PRIMARY KEY,
      name VARCHAR(50),
      symbol VARCHAR(10)
    );
  `;
  // Currenciesテーブル作成クエリを実行
  // query関数は、指定されたSQLクエリをデータベースで実行します。
  // これも非同期操作であり、結果は指定されたコールバック関数に渡されます。
  connection.query(createCurrenciesTable, (err, results) => {
    if (err) throw err; // クエリの実行中にエラーが発生した場合、エラーをスローします
    console.log('Currencies table created or already exists.'); // テーブルの作成に成功したことをコンソールに表示します
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
   if (err) throw err; // クエリの実行中にエラーが発生した場合、エラーをスローします
   console.log('Transactions table created or already exists.'); // テーブルの作成に成功したことをコンソールに表示します
 });
});

// connectionオブジェクトをエクスポート
// 他のモジュールからこのデータベース接続を使用できるようにします。
export default connection;