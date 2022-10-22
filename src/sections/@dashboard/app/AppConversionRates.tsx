import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Box, Card, CardHeader } from '@mui/material';
// utils
import { fNumber } from '../../../utils/formatNumber';
// components
import { BaseOptionChart } from '../../../components/chart';
import { IChartDataNumber } from 'src/types/chart';
import { ApexOptions } from 'apexcharts';

// ----------------------------------------------------------------------

// AppConversionRates.propTypes = {
//   title: PropTypes.string,
//   subheader: PropTypes.string,
//   chartData: PropTypes.array.isRequired,
// };

export default function AppConversionRates({
  title,
  subheader,
  chartData,
  ...other
}: {
  title?: string;
  subheader?: string;
  chartData: IChartDataNumber[];
}) {
  const chartLabels = chartData.map((i) => i.label);

  const chartSeries = chartData.map((i) => i.value);

  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName: number) => fNumber(seriesName),
        title: {
          formatter: () => '',
        },
      },
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: '28%', borderRadius: 2 },
    },
    xaxis: {
      categories: chartLabels,
    },
  }) as unknown as ApexOptions;

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart type="bar" series={[{ data: chartSeries }]} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
