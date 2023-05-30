import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Co2e Distribution across Cloud Platforms",
    plottooltext: "<b>$percentValue</b> of web servers run on $label servers",
    showlegend: "1",
    showpercentvalues: "1",
    legendposition: "bottom",
    usedataplotcolorforlabels: "1",
    theme: "candy",
  },
  data: [],
};

const PieChart = ({ inputData }) => {
  console.log(dataSource.data);
  console.log(inputData);
  dataSource.data = inputData;
  // dataSource.data = inputData;
  return (
    <div>
      <ReactFusioncharts
        type="pie2d"
        width="50%"
        height="70%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </div>
  );
};

export default PieChart;
