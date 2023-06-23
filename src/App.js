
import './App.css';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import ReactFC from 'react-fusioncharts';
import Accessibility from './assets/fusioncharts.ext.accessibility';
import AccessibilityString from './assets/fusioncharts.ext.accessibility-resources-strings-en';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme, Accessibility, AccessibilityString);

FusionCharts.Accessibility.setAlternateTexts({
  'chartobject-1': {
      'chart': 'Este es un gráfico {chartType}',
      'plot': '{plotIndex}. {label}, {formattedValue}.'
  }
});

const dataSource = {
  chart: {
    caption: 'Countries With Most Oil Reserves [2017-18]',
    subCaption: 'In MMbbl = One Million barrels',
    xAxisName: 'Country',
    yAxisName: 'Reserves (MMbbl)',
    numberSuffix: 'K',
    theme: 'fusion',
    showValues:1
  },
  data: [
    { label: 'Venezuela', value: '290' },
    { label: 'Saudi', value: '260' },
    { label: 'Canada', value: '180' },
    { label: 'Iran', value: '140' },
    { label: 'Russia', value: '115' },
    { label: 'UAE', value: '100' },
    { label: 'US', value: '30' },
    { label: 'China', value: '30' }
  ]
};

const chartConfigs = {
  type: 'column2d',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: dataSource
};

function App() {
  return (
    <div className="App">
      <ReactFC {...chartConfigs} />
    </div>
  );
}

export default App;
