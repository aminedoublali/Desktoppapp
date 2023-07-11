import { Cell, Pie, PieChart, Tooltip } from 'recharts';

// データベース接続のためのカスタムAPIモジュールをインポートします
import connection from '../api/api.js';

// Next.jsのgetStaticPropsを使ってビルド時にデータを取得します
export async function getStaticProps() {
  // 各通貨の合計金額を取得するSQLクエリを定義します
  const transactions = 'SELECT currency_id, SUM(amount) AS total_amount FROM transactions GROUP BY currency_id';

  // SQLクエリを実行し、結果を取得します
  const transactionResults = await new Promise((resolve, reject) => {
    connection.query(transactions, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });

  // currency_idをそのシンボルにマッピングします
  const data = await Promise.all(
    transactionResults.map(async (result) => {
      // 各通貨のシンボルを取得するSQLクエリを定義します
      const currencies = 'SELECT symbol FROM currencies WHERE id = ?';
      // SQLクエリを実行し、結果を取得します
      const currencyResults = await new Promise((resolve, reject) => {
        connection.query(currencies, [result.currency_id], (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });

      // データを{name: symbol, value: total_amount}の形式で返します
      return {
        name: currencyResults[0].symbol,
        value: result.total_amount,
      };
    })
  );

  // 取得したデータをpropsとして返します
  return {
    props: {
      data: data,
    },
  };
}

// グラフの色を示す例です
const COLORS = ['#0088FE', '#ff5d78', '#cb49ff', '#0004ff'];

const PieComponent = ({ data }) => {
  // データが定義されているか、または空の配列でないかを確認します
  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  // データが定義されていて空の配列でない場合、PieChartをレンダリングします
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {
          data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        }
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default PieComponent;
