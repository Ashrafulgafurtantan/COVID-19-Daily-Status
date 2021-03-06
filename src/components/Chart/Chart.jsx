import React, { useEffect, useState } from "react";
import styles from "./Chart.module.css";

import { fetchDailyData } from "../../api/index";
import { Line, Bar } from "react-chartjs-2";
function Chart(props) {
  const [dailyData, setDailyData] = useState([]);

  console.log("Chart country= " + props.selectCountry);
  const { confirmed, recovered, deaths } = props.formPosts.singleData;
  console.log(confirmed);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);
  //console.log(dailyData);

  const LineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            backgroundColor: "rgba(0,0,255,0.5)",

            fill: true,
          },

          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  const BarChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              " rgba(0, 255, 0, 0.5) ",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: true },
        title: {
          display: true,
          text: `Current state in ${props.selectCountry}`,
          fontSize: 25,
        },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>
      {props.selectCountry !== "global" ? BarChart : LineChart}
    </div>
  );
}

export default Chart;
