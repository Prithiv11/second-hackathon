import { useState } from "react";
const [data, updateData] = useState([]);

export const getMovies = () => {
  fetch("https://money-manager-b.herokuapp.com/money-manager/data")
    .then((data) => data.json())
    .then((list) => updateData(list))
    .then(console.log(data));
  console.log("worsttt");
};

getMovies();
