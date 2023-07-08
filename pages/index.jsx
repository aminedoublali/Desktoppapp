// Next.js と React の必要なライブラリをインポート
import dynamic from 'next/dynamic';
import React from 'react';

// データベース接続を含む自作の API モジュールをインポート
import connection from '../api/api.js';

// メインのレイアウトコンポーネントをインポート
import MainLayout from '../components/Layouts/Mainlayout';

// ダイナミックインポートを使用してPieComponentを非同期にロード（サーバーサイドレンダリングを無効にする）
const PieComponent = dynamic( () => import('../components/Pie'), { ssr: false });

// Next.js の getStaticProps を使って静的生成時にデータを取得
export async function getStaticProps() {
    // SQLクエリを定義
    const query = 'SELECT * FROM money';

    // SQLクエリを実行し、結果を取得
    const results = await new Promise((resolve, reject) => {
      connection.query(query, (error, results) => {
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
  const username = firstData ? firstData.username : null; 

  // JSX を返す（これが実際にレンダリングされる部分）
  return (
    <div className='box-border bg-gray-100'>
      <MainLayout>
        <section className='p-0 m-0 ml-4'>
          <p>{data[2].username}</p> {/* ユーザー名を表示 */}
          <h1 className="text-xl font-bold">Home</h1>
          <PieComponent /> {/* PieComponent を表示 */}
        </section>
      </MainLayout>
    </div>
  );
};

// コンポーネントをエクスポート（他のファイルからインポートできるようにする）
export default Index;
