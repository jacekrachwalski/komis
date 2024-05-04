import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Listopad", Zysk: 120000, Koszty: 46000 },
  { name: "Grudzień", Zysk: 210000, Koszty: 125000 },
  { name: "Styczeń", Zysk: 80000, Koszty: 64000 },
  { name: "Luty", Zysk: 160000, Koszty: 90000 },
  { name: "Marzec", Zysk: 90000, Koszty: 25000 },
  { name: "Kwiecień", Zysk: 170000, Koszty: 74000 },
];

const Chart = () => {
  return (
    <div className="chart">
      <div className="title">Bilans za ostatnie 6 miesięcy</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="zysk" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="koszty" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Zysk"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#zysk)"
          />
          <Area
            type="monotone"
            dataKey="Koszty"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#koszty)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
