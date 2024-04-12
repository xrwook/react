import { useState, useEffect } from 'react';
import { fakerKO as faker } from '@faker-js/faker';
import type { Airport } from '@faker-js/faker/modules/airline/index';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

interface AirportData extends Airport {
  number?: number;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
);

const BarChart = ({
  chartType,
  data,
}: {
  chartType: string;
  data: AirportData[];
}) => {
  const label: string[] = data.map((x) => x.name);
  const dataSet = [
    {
      label: 'AirPort',
      data: data.map((x) => x.number),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ];

  const chartData = {
    labels: label,
    datasets: dataSet,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  return (
    <>
      {chartType === 'Bar' ? (
        <Bar options={options} data={chartData} />
      ) : (
        <Line options={options} data={chartData} width="894px" height="320px" />
      )}
    </>
  );
};

const Chart = () => {
  const [data, setData] = useState<AirportData[]>([]);
  const [type, setType] = useState('Bar');
  useEffect(() => {
    const airport: Airport[] = Array.from({ length: 10 }, () =>
      faker.airline.airport(),
    );
    setData(
      airport.map((x) => ({
        ...x,
        number: faker.number.int({ max: 10000 }),
      })),
    );
  }, []);

  const chartChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };

  return (
    <>
      <h1>AirPort</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>IataCode</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x, idx) => {
            return (
              <tr key={idx}>
                <td>{x.name}</td>
                <td>{x.iataCode}</td>
                <td>{x.number}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <select value={type} onChange={chartChange}>
        <option>Bar</option>
        <option>Line</option>
      </select>
      <BarChart chartType={type} data={data} />
    </>
  );
};

export default Chart;
