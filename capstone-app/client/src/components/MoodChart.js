import React from "react";
import { Bar, defaults } from "react-chartjs-2";

const MoodChart = ({ entriesList }) => {
  let moodCount = {
    neutral: 0,
    joyful: 0,
    motivated: 0,
    satisfied: 0,
    stressed: 0,
    sad: 0,
    angry: 0,
  };

  for (let i = 0; i < entriesList.length; i++) {
    if (entriesList[i].neutral === true) moodCount.neutral++;
  }

  for (let i = 0; i < entriesList.length; i++) {
    if (entriesList[i].joyful === true) moodCount.joyful++;
  }

  for (let i = 0; i < entriesList.length; i++) {
    if (entriesList[i].motivated === true) moodCount.motivated++;
  }

  for (let i = 0; i < entriesList.length; i++) {
    if (entriesList[i].satisfied === true) moodCount.satisfied++;
  }

  for (let i = 0; i < entriesList.length; i++) {
    if (entriesList[i].sad === true) moodCount.sad++;
  }

  for (let i = 0; i < entriesList.length; i++) {
    if (entriesList[i].stressed === true) moodCount.stressed++;
  }

  for (let i = 0; i < entriesList.length; i++) {
    if (entriesList[i].angry === true) moodCount.angry++;
  }

  defaults.global.defaultFontFamily = "Barlow";
  let chartData = {
    labels: [
      "Neutral",
      "Joyful",
      "Motivated",
      "Satisfied",
      "Stressed",
      "Sad",
      "Angry",
    ],
    fontColor: "white",
    datasets: [
      {
        data: [
          moodCount.neutral,
          moodCount.joyful,
          moodCount.motivated,
          moodCount.satisfied,
          moodCount.stressed,
          moodCount.sad,
          moodCount.angry,
        ],
        backgroundColor: "#0c0c0c6b",
        borderColor: "rgba(255, 255, 255, 0.801)",
        borderWidth: 2,
        hoverBorderWidth: 3,
        hoverBorderColor: "white",
      },
    ],
  };
  return (
    <section className="mood-chart">
      <div className="mood-chart__container">
        <Bar
          data={chartData}
          width={100}
          height={100}
          options={{
            title: {
              display: true,
              text: "Mood Monitoring",
              fontColor: "white",
              fontSize: 20,
              fontStyle: 400,
              padding: 20,
            },
            legend: {
              display: false,
              labels: {
                fontColor: "white",
              },
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    fontColor: "white",
                    precision: 0,
                  },
                },
              ],
              xAxes: [
                {
                  ticks: {
                    fontColor: "white",
                  },
                },
              ],
            },
          }}
        />
      </div>
    </section>
  );
};

export default MoodChart;
