import { Chart, Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";

export function Barchart() {
  const [dbData, updateData] = useState([]);

  const getMovies = () => {
    fetch("https://money-manager-b.herokuapp.com/money-manager/data")
      .then((data) => data.json())
      .then((list) => updateData(list));
  };

  const data = [
    {
      id: 1,
      day: "monday",
      income: 80,
      expenses: 23,
    },
    {
      id: 2,
      day: "tuesday",
      income: 50,
      expenses: 345,
    },
    {
      id: 3,
      day: "wednusday",
      income: 80,
      expenses: 55,
    },
    {
      id: 4,
      day: "thursday",
      income: 90,
      expenses: 45,
    },
    {
      id: 5,
      day: "friday",
      income: 40,
      expenses: 53,
    },
    {
      id: 5,
      day: "saturday",
      income: 30,
      expenses: 234,
    },
    {
      id: 5,
      day: "sunday",
      income: 300,
      expenses: 1000,
    },
  ];

  const [userData, setUserData] = useState({
    labels: data.map((data) => data.day),
    datasets: [
      {
        label: "Saved income",
        data: data.map((data) => data.income),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <>
      <Bar data={userData} />
    </>
  );
}
