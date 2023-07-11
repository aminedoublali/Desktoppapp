
import { Cell, Pie, PieChart, Tooltip } from 'recharts';

// データベース接続を含む自作の API モジュールをインポート
import connection from '../api/api.js';


// Next.js の getStaticProps を使って静的生成時にデータを取得
export async function getStaticProps() {
  // SQLクエリを定義
  const transactions = 'SELECT * FROM transactions';
  const currencies = 'SELECT * FROM currencies';

  // SQLクエリを実行し、結果を取得
  const results = await new Promise((resolve, reject) => {
    connection.query(transactions, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });

  // 各データを JSON シリアライズ可能な形式に変換
  const jsonResults = results.map(result => {
    const jsonResult = {};
    for (const key in result) {
      // Date オブジェクトを文字列に変換
      if (result[key] instanceof Date) {
        jsonResult[key] = result[key].toISOString();
      } else {
        jsonResult[key] = result[key];
      }
    }
    return jsonResult;
  });

  // 取得したデータを props として返す
  return {
    props: {
      data: jsonResults,
    },
  };
}

// 主要なコンポーネントを定義
const Index = ({data}) => {
  // 最初のデータオブジェクトを選択
  const firstData = data[0]; 
  // username プロパティを取得（データがない場合は null を設定）
  const currency=id = firstData ? firstData.currency_id : null; 
}

// データの例
const data = [

  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 200 },
  { name: 'Group D', value: 100 }
];

// グラフの色の例
const COLORS = ['#0088FE', '#ff5d78', '#cb49ff', '#0004ff'];

const PieComponent = () => (
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

export default PieComponent;
