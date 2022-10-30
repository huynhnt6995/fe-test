import { LineChart, CartesianGrid, XAxis, Line, ResponsiveContainer } from "recharts";
import BodyWeightTick from "./BodyWeightTick";
import BreaklineTitleHeader from "../BreaklineTitleHeader";

import { useTranslation } from "react-i18next";
import * as dateFns from "date-fns";
import { useState } from "react";
import BodyWeightFilterButton from "./BodyWeightFilterButton";

interface Props {
  className?: string;
  data: BodyWeightData;
  showFilter?: boolean;
  height?: number;
}

export type BodyWeightDataItem = {
  month: string;
  uv: number;
  pv: number;
};

export type BodyWeightData = {
  items: BodyWeightDataItem[];
  date?: string;
};

function BodyWeight({ className, data, showFilter, height = 190 }: Props) {
  const { t } = useTranslation();
  const { date, items } = data;
  const [selectedFilter, setSelectedFilter] = useState<0 | 1 | 2 | 3>(2);

  return (
    <div className={`bg-dark-600 lg:px-6 lg:py-4 px-2 py-2 ${className || ""}`}>
      {date && <BreaklineTitleHeader title={t("record.body_record_en")} time={dateFns.format(new Date(date), "yyyy.mm.dd")} />}

      <ResponsiveContainer height={height} width="100%">
        <LineChart data={items} margin={{ left: 20, right: 20 }}>
          <CartesianGrid strokeDasharray="0" horizontal={false} />
          <XAxis dataKey="month" axisLine={false} tick={<BodyWeightTick />} tickMargin={0} tickLine={false} />
          <Line type="linear" dataKey="pv" stroke="#FFCC21" strokeWidth={2} />
          <Line type="linear" dataKey="uv" stroke="#8FE9D0" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>

      {showFilter && (
        <div className="flex mt-2">
          <BodyWeightFilterButton title={t("record.day")} active={selectedFilter === 0} onClick={() => setSelectedFilter(0)} />

          <BodyWeightFilterButton title={t("record.week")} active={selectedFilter === 1} onClick={() => setSelectedFilter(1)} />

          <BodyWeightFilterButton title={t("record.month")} active={selectedFilter === 2} onClick={() => setSelectedFilter(2)} />

          <BodyWeightFilterButton title={t("record.year")} active={selectedFilter === 3} onClick={() => setSelectedFilter(3)} />
        </div>
      )}
    </div>
  );
}

export default BodyWeight;
