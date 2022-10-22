import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box } from '@mui/material';
// components
import { BaseOptionChart } from '../../../components/chart';
import { ApexOptions } from 'apexcharts';

// ----------------------------------------------------------------------

// AppWebsiteVisits.propTypes = {
//   title: PropTypes.string,
//   subheader: PropTypes.string,
//   chartData: PropTypes.array.isRequired,
//   chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default function AppWebsiteVisits({
  title,
  subheader,
  chartLabels,
  chartData,
  chartFill,
  ...other
}: {
  title?: string;
  subheader?: string;
  chartLabels: string[];
  chartData: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chartFill: string[];
}) {
  const chartOptions = merge(BaseOptionChart(), {
    plotOptions: { bar: { columnWidth: '16%' } },
    fill: { type: chartFill },
    labels: chartLabels,
    xaxis: { type: 'datetime' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y?: number) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} visits`;
          }
          return y;
        },
      },
    },
  }) as unknown as ApexOptions;

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={chartData} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
