import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { decimalTimeFormatter } from '../../helpers/decimalTimeFormatter';
import { data } from '../../pages/Powerplant/data';

interface chartData {
  chartData: {
    chartValue: string;
    lineName: string;
  };
}

const Chart: React.FC<chartData> = ({ chartData }) => {
  const array = decimalTimeFormatter(data);

  return (
    <ResponsiveContainer minWidth={270} width="70%" height="50%">
      <LineChart
        data={array}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 15,
        }}
      >
        <CartesianGrid horizontal={true} vertical={false} stroke="#fff" />
        <XAxis
          label={{
            value: 'Horário',
            position: 'insideBottom',
            offset: -10,
            fill: '#fff',
          }}
          dataKey="tempo_h"
          tick={{ fill: 'lightblue' }}
          stroke="#fff"
        />
        <YAxis tick={{ fill: 'white' }} stroke="#fff" />
        <Tooltip
          contentStyle={{ backgroundColor: '#fff', color: '#00A2A2' }}
          itemStyle={{ color: '#00A2A2' }}
          cursor={false}
          viewBox={{ width: 0, height: 0 }}
        />
        <Legend verticalAlign="top" height={40} />
        <Line
          name={chartData.lineName}
          type="monotone"
          dataKey={chartData.chartValue}
          stroke="#fff"
          activeDot={{ r: 4, fill: '#00A2A2', stroke: '#fff' }}
          dot={{ r: 0 }}
          strokeWidth="3"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
