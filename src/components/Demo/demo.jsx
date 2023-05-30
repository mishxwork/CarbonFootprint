import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./demo.css";

// import { awsData, azureData, gcpData } from "../../dummy.js";

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableSortLabel,
} from "@mui/material";
import {
  getAwsData,
  getAzureData,
  getGcpData,
} from "../../service/carbonService";

// import { getAwsData, getAzureData, getGcpData } from "../../dummy.js";
import PieChart from "../Chart/PieChart";

var RegionDictionary_aws = {
  "ZA-CPT": "cpu-provider_aws-region_af_south_1",
  "ZA" :"cpu-provider_aws-region_af_south_1",
  "HK-HKG": "cpu-provider_aws-region_ap_east_1",
  "HK": "cpu-provider_aws-region_ap_east_1",
  "JP-TYO": "cpu-provider_aws-region_ap_northeast_1",
  "JP": "cpu-provider_aws-region_ap_northeast_1",
  "KR-SEL": "cpu-provider_aws-region_ap_northeast_2",
  "KR": "cpu-provider_aws-region_ap_northeast_2",
  "JP-OSA": "cpu-provider_aws-region_ap_northeast_3",
  "SA": "cpu-provider_aws-region_ap_northeast_3",
  "IN-BOM": "cpu-provider_aws-region_ap_south_1",
  "IN": "cpu-provider_aws-region_ap_south_1",
  "SG-SIN": "cpu-provider_aws-region_ap_southeast_1",
  "SG": "cpu-provider_aws-region_ap_southeast_1",
  "AU": "cpu-provider_aws-region_ap_southeast_2",
  "AU-SYD": "cpu-provider_aws-region_ap_southeast_2",
  "CA-MTR": "cpu-provider_aws-region_ca_central_1",
  "CA": "cpu-provider_aws-region_ca_central_1",
  "CN-BJS": "cpu-provider_aws-region_cn_north_1",
  "CN-NX": "cpu-provider_aws-region_cn_northwest_1",
  "CN": "cpu-provider_aws-region_cn_northwest_1",
  "DE-FRA": "cpu-provider_aws-region_eu_central_1",
  "DE": "cpu-provider_aws-region_eu_central_1",
  "SE-STO": "cpu-provider_aws-region_eu_north_1",
  "SE": "cpu-provider_aws-region_eu_north_1",
  "IT-MIL": "cpu-provider_aws-region_eu_south_1",
  "IT": "cpu-provider_aws-region_eu_south_1",
  "IE-DUB": "cpu-provider_aws-region_eu_west_1",
  "IE": "cpu-provider_aws-region_eu_west_1",
  "GB-LON": "cpu-provider_aws-region_eu_west_2",
  "GB": "cpu-provider_aws-region_eu_west_2",
  "FR-PAR": "cpu-provider_aws-region_eu_west_3",
  "FR": "cpu-provider_aws-region_eu_west_3",
  "BH-AMH": "cpu-provider_aws-region_me_south_1",
  "BH": "cpu-provider_aws-region_me_south_1",
  "BR-SAO": "cpu-provider_aws-region_sa_east_1",
  "BR": "cpu-provider_aws-region_sa_east_1",
  "US-VA": "cpu-provider_aws-region_us_east_1",
  "US-OH": "cpu-provider_aws-region_us_east_2",
  "US": "cpu-provider_aws-region_us_gov_west_1",
  "US-GIR": "cpu-provider_aws-region_us_west_1",
  "US-OR": "cpu-provider_aws-region_us_west_2",
  "US-CAMX": "cpu-provider_aws-region_us_west_2",
  "US-NWPP": "cpu-provider_aws-region_us_west_2",
  "US-SRVC": "cpu-provider_aws-region_us_west_2",
  "US-RFCW": "cpu-provider_aws-region_us_west_2",
  "CA-QC": "cpu-provider_aws-region_ap_southeast_1"
}
  //Azure
var RegionDictionary_azure = {
  "IN-PNQ": "cpu-provider_azure-region_central_india",
  "IN": "cpu-provider_azure-region_central_india",
  "US-IA": "cpu-provider_azure-region_central_us",
  "HK-HKG": "cpu-provider_azure-region_east_asia",
  "HK": "cpu-provider_azure-region_east_asia",
  "US-VA": "cpu-provider_azure-region_east_us_2",
  "US-GA": "cpu-provider_azure-region_east_us_3",
  "US-IL": "cpu-provider_azure-region_north_central_us",
  "IE": "cpu-provider_azure-region_north_europe",
  "US-TX": "cpu-provider_azure-region_south_central_us",
  "IN-MAA": "cpu-provider_azure-region_south_india",
  "SG-SIN": "cpu-provider_azure-region_southeast_asia",
  "SG": "cpu-provider_azure-region_southeast_asia",
  "GB-LON": "cpu-provider_azure-region_uk_south",
  "GB-CDF": "cpu-provider_azure-region_uk_west",
  "GB": "cpu-provider_azure-region_uk_west",
  "US-WY": "cpu-provider_azure-region_west_central_us",
  "NL": "cpu-provider_azure-region_west_europe",
  "IN-BOM": "cpu-provider_azure-region_west_india",
  "US-CA": "cpu-provider_azure-region_west_us",
  "US-WA": "cpu-provider_azure-region_west_us_2",
  "US": "cpu-provider_azure-region_west_us_2",
  "US-AZNM": "cpu-provider_azure-region_west_us_2",
  "US-RFCW": "cpu-provider_azure-region_west_us_2",
  "US-RMPA": "cpu-provider_azure-region_west_us_2",
  "US-SRSO": "cpu-provider_azure-region_west_us_2",
  "US-MROW": "cpu-provider_azure-region_west_us_2",
  "US-ERCT": "cpu-provider_azure-region_west_us_2",
  "US-CAMX": "cpu-provider_azure-region_west_us_2",
  "US-NWPP": "cpu-provider_azure-region_west_us_2",
  "US-AZ": "cpu-provider_azure-region_west_us_3"
}
var RegionDictionary_gcp = {
  "TW": "cpu-provider_gcp-region_asia_east_1",
  "HK-HKG": "cpu-provider_gcp-region_asia_east_2",
  "JP-TYO": "cpu-provider_gcp-region_asia_northeast_1",
  "JP-OSA": "cpu-provider_gcp-region_asia_northeast_2",
  "KR-SEL": "cpu-provider_gcp-region_asia_northeast_3",
  "IN-BOM": "cpu-provider_gcp-region_asia_south_1",
  "SG-SIN": "cpu-provider_gcp-region_asia_southeast_1",
  "ID-JKT": "cpu-provider_gcp-region_asia_southeast_2",
  "AU-SYD": "cpu-provider_gcp-region_australia_southeast_1",
  "FI-HMN": "cpu-provider_gcp-region_europe_north_1",
  "BE-GHI": "cpu-provider_gcp-region_europe_west_1",
  "GB-LON": "cpu-provider_gcp-region_europe_west_2",
  "DE-FRA": "cpu-provider_gcp-region_europe_west_3",
  "NL-EEM": "cpu-provider_gcp-region_europe_west_4",
  "CH-ZRH": "cpu-provider_gcp-region_europe_west_6",
  "CA-MTR": "cpu-provider_gcp-region_northamerica_northeast_1",
  "BR-SAO": "cpu-provider_gcp-region_southamerica_east_1",
  "US-IA": "cpu-provider_gcp-region_us_central_1",
  "US-SC": "cpu-provider_gcp-region_us_east_1",
  "US-VA": "cpu-provider_gcp-region_us_east_4",
  "US-OR": "cpu-provider_gcp-region_us_west_1",
  "US-LAX": "cpu-provider_gcp-region_us_west_2",
  "US-SLC": "cpu-provider_gcp-region_us_west_3",
  "US-LAS": "cpu-provider_gcp-region_us_west_4"
};


function TabPanel({ ...props }) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
export default function BasicTabs({ data }) {
  const [value, setValue] = React.useState(0);
  const [aws, setAws] = React.useState("");
  const [azure, setAzure] = React.useState("");
  const [gcp, setGcp] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [inputData, setInputData] = React.useState({ data });
  // console.log(inputData);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    // console.log(inputData);
    const getData = async () => {
      // const inputTest = {
      //   count: 10,
      //   load: 0.5,
      //   duration: 345,
      // };
      const input = {
        count: inputData.data.count,
        load: inputData.data.load,
        duration: inputData.data.duration,
      };
      // console.log(input);
      // console.log(inputTest);

      // Fetching AWS Data
      const AWS_response = await getAwsData(input);
      // console.log(response);
      setAws(AWS_response);

      //Fetching Azure Data

      const AZURE_response = await getAzureData(input);
      setAzure(AZURE_response);

      //Fetching GCP Data

      const GCP_response = await getGcpData(input);
      setGcp(GCP_response);

      setLoading(false);
    };
    getData(); // run it, run it
  }, []);

  if (!loading) {
    const sortAzure = azure.results.sort((a, b) => {
      if (a.co2e < b.co2e) {
        return -1;
      }
    });

    const sortGcp = gcp.results.sort((a, b) => {
      if (a.co2e < b.co2e) {
        return -1;
      }
    });

    for(let i=0;i<aws.results.length;i++)
    {
      // console.log(aws.results[i].emission_factor.region)
      // console.log(RegionDictionary_aws[aws.results[i].emission_factor.region])
      if(aws.results[i].emission_factor.region in RegionDictionary_aws){
        aws.results[i].emission_factor.region=String(RegionDictionary_aws[String(aws.results[i].emission_factor.region)])
      }
      //console.log(RegionDictionary_aws['CA-QC'])
    }

    for(let i=0;i<azure.results.length;i++)
    {
      // azure.results[i].emission_factor.region=RegionDictionary_azure[azure.results[i].emission_factor.region]
      if(azure.results[i].emission_factor.region in RegionDictionary_azure){
        azure.results[i].emission_factor.region=String(RegionDictionary_azure[String(azure.results[i].emission_factor.region)])
      }
    }

    for(let i=0;i<gcp.results.length;i++)
    {
      // gcp.results[i].emission_factor.region=RegionDictionary_gcp[gcp.results[i].emission_factor.region]
      if(gcp.results[i].emission_factor.region in RegionDictionary_gcp){
        gcp.results[i].emission_factor.region=String(RegionDictionary_gcp[String(gcp.results[i].emission_factor.region)])
      }
    }

    var rData = [aws.results[0], azure.results[0], gcp.results[0]];

    const sortRdata = rData.sort((a, b) => {
      if (a.co2e < b.co2e) {
        return -1;
      }
    });

    const sortAws = aws.results.sort((a, b) => {
      if (a.co2e < b.co2e) {
        return -1;
      }
    });

    // console.log(rData);

    const co2eArr = [rData[0].co2e, rData[1].co2e, rData[2].co2e];

    // Creating variable to store the sum
    var sum = 0;

    // Calculation the sum using forEach
    co2eArr.forEach((x) => {
      sum += x;
    });

    // console.log(co2eArr);

    // console.log(sum);

    const chartData = co2eArr.map((item) => ((item / sum) * 100).toFixed(2));

    const co2eArr2 = [
      {
        value: chartData[0],
        label: rData[0].emission_factor.region.substring(13).toUpperCase(),
      },
      {
        value: chartData[1],
        // label: regionDictionary[rData[1].emission_factor.region],

        label: rData[1].emission_factor.region.substring(13).toUpperCase(),
      },
      {
        value: chartData[2],
        label: rData[2].emission_factor.region.substring(13).toUpperCase(),
        // label: regionDictionary[rData[2].emission_factor.region],
      },
    ];

    // console.log(chartData);
    // console.log(co2eArr2);

    return (
      <div>
        <div className="float-right flex flex-1 -mt-96 mr-16">
          <PieChart inputData={co2eArr2} />
        </div>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="secondary"
              indicatorColor="secondary"
            >
              <Tab label="Recommended" />
              <Tab label="AWS" />
              <Tab label="Azure" />
              <Tab label="GCP" />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <TableContainer
              sx={{ maxHeight: "300px", bgcolor: "transparent" }}
              component={Paper}
            >
              <Table stickyHeader aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        bgcolor: "#3d3d3d",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      Region
                    </TableCell>

                    <TableCell
                      sx={{
                        bgcolor: "#3d3d3d",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      <TableSortLabel active={true} direction="asc">
                        <span className="text-white font-bold">Co2e</span>
                      </TableSortLabel>
                    </TableCell>
                    <TableCell
                      sx={{
                        bgcolor: "#3d3d3d",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      Source
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rData.map((result) => (
                    <TableRow
                      sx={{
                        "&:first-of-type td, &:first-of-type th": {
                          bgcolor: "green",
                          color: "white",
                          fontWeight: "bold",
                        },
                      }}
                    >
                      <TableCell>
                        {result.emission_factor.region}
                        {/* {regionDictionary} */}
                      </TableCell>
                      <TableCell>{result.co2e}</TableCell>
                      <TableCell>{result.emission_factor.source}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TableContainer
              sx={{ maxHeight: "300px", bgcolor: "transparent" }}
              component={Paper}
            >
              <Table stickyHeader aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        bgcolor: "#3d3d3d",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      Region
                    </TableCell>

                    <TableCell
                      sx={{
                        bgcolor: "#3d3d3d",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      <TableSortLabel
                        sx={{
                          bgcolor: "#3d3d3d",
                          color: "white",
                          textAlign: "center",
                        }}
                        active={true}
                        direction="asc"
                      >
                        <span className="text-white font-bold">Co2e</span>
                      </TableSortLabel>
                    </TableCell>
                    <TableCell
                      sx={{
                        bgcolor: "#3d3d3d",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      Source
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {aws.results.map((result) => (
                    <TableRow
                      sx={{
                        "&:first-of-type td, &:first-of-type th": {
                          bgcolor: "green",
                          color: "white",
                          fontWeight: "bold",
                        },
                      }}
                    >
                      <TableCell>
                        {result.emission_factor.region}
                      </TableCell>
                      <TableCell>{result.co2e}</TableCell>
                      <TableCell>{result.emission_factor.source}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <TableContainer
              sx={{ maxHeight: "300px", bgcolor: "transparent" }}
              component={Paper}
            >
              <Table stickyHeader aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        bgcolor: "#3d3d3d",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      Region
                    </TableCell>

                    <TableCell
                      sx={{
                        bgcolor: "#3d3d3d",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      <TableSortLabel active={true} direction="asc">
                        <span className="text-white font-bold">Co2e</span>
                      </TableSortLabel>
                    </TableCell>
                    <TableCell
                      sx={{
                        bgcolor: "#3d3d3d",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      Source
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {azure.results.map((result) => (
                    <TableRow
                      sx={{
                        "&:first-of-type td, &:first-of-type th": {
                          bgcolor: "green",
                          color: "white",
                          fontWeight: "bold",
                        },
                      }}
                    >
                      <TableCell>
                        {result.emission_factor.region}
                      </TableCell>
                      <TableCell>{result.co2e}</TableCell>
                      <TableCell>{result.emission_factor.source}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <TableContainer
              sx={{ maxHeight: "300px", bgcolor: "transparent" }}
              component={Paper}
            >
              <Table stickyHeader aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        bgcolor: "#3d3d3d",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      Region
                    </TableCell>

                    <TableCell
                      sx={{
                        bgcolor: "#3d3d3d",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      <TableSortLabel active={true} direction="asc">
                        <span className="text-white font-bold">Co2e</span>
                      </TableSortLabel>
                    </TableCell>
                    <TableCell
                      sx={{
                        bgcolor: "#3d3d3d",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      Source
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {gcp.results.map((result) => (
                    <TableRow
                      sx={{
                        "&:first-of-type td, &:first-of-type th": {
                          bgcolor: "green",
                          color: "white",
                          fontWeight: "bold",
                        },
                      }}
                    >
                      <TableCell>
                        {result.emission_factor.region}
                      </TableCell>
                      <TableCell>{result.co2e}</TableCell>
                      <TableCell>{result.emission_factor.source}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
        </Box>
      </div>
    );
  }
}
