// components/Pie.jsx
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

const COLORS = [
  "#45a8ff",
  "#0059ff",
  "#b700ff",
  "#ff0000bd",
  "#47b300",
  "#49f9ff",
  "#0004ff",
];

const PieComponent = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  console.log(data);
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
      >
        
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieComponent;
