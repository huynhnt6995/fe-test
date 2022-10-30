import { PieChart, Pie, Cell } from "recharts";

interface Props {
  background: string;
  numOfDate: number;
  totalDate: number;
  percent: number;
  data: AchievementRateData[];
}

export type AchievementRateData = { name: string; value: number; fill: string };

function AchievementRate({ background, numOfDate, totalDate, percent, data }: Props) {
  return (
    <div
      className="relative flex-1 h-312px flex justify-center items-center bg-no-repeat	bg-cover bg-center"
      style={{ backgroundImage: `url("${background}")` }}
    >
      <PieChart width={181} height={181}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={88}
          outerRadius={90}
          stroke="none"
          startAngle={90}
          endAngle={450}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
      </PieChart>
      <div className="absolute flex items-baseline font-inter">
        <span className="text-lg text-white">
          {numOfDate}/{totalDate}
        </span>
        <span className="text-25px ml-1 text-white">{percent}%</span>
      </div>
    </div>
  );
}

export default AchievementRate;
