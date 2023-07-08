
import { Cell, Pie, PieChart, Tooltip } from 'recharts';

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
