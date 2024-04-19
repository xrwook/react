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
import Button from '../../common/Button';
import { useTranslation } from 'react-i18next';

interface AirportData extends Airport {
  number?: number;
  [key: string]: any;
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
  if (data.length === 0) return;

  const label: string[] = data.map((x) => x.name);

  const datas: { [key: string]: number }[] = data.map((x) => {
    return Object.keys(x).reduce((acc, key) => {
      if (key.includes('number')) {
        return { ...acc, [key]: x[key] };
      }
      return acc;
    }, {});
  });

  const chartKey: string[] = Object.keys(datas[0]).filter((x) =>
    x.includes('number'),
  );

  const reduceData = chartKey.map((key) => {
    return datas.map((x) => x[key]);
  });

  const dataSet = reduceData.map((data, index) => ({
    label: `AirPort${index + 1}`,
    data,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1,
  }));

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
      <div style={{ width: '1000px', height: '320px' }}>
        {chartType === 'Bar' ? (
          <Bar options={options} data={chartData} />
        ) : (
          <Line options={options} data={chartData} />
        )}
      </div>
    </>
  );
};

const Chart = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<AirportData[]>([]);
  const [type, setType] = useState('Bar');
  const [idx, setIdx] = useState(0);

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

  const addData = () => {
    const add = idx + 1;
    const addData = data.map((x) => {
      return {
        ...x,
        [`number${add}`]: faker.number.int({ max: 10000 }),
      };
    });
    setData(addData);
    setIdx(add);
  };

  return (
    <>
      <h1>AirPort</h1>
      <Button text={t('test.add')} isLoading={false} onClick={addData}></Button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>IataCode{idx}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x, idx) => {
            return (
              <tr key={idx}>
                <td>{x.name}</td>
                <td>{x.iataCode}</td>
                {Object.keys(x).map((key) => {
                  return (
                    <td key={key}>{key.includes('number') ? x[key] : ''}</td>
                  );
                })}
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
