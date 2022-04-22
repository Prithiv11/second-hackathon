import React from "react";
import { useState } from "react";

function Table() {
  const [data, updateData] = useState([]);

  const getMovies = () => {
    fetch("https://money-manager-b.herokuapp.com/money-manager/data")
      .then((data) => data.json())
      .then((list) => updateData(list));
  };

  getMovies();
  return (
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Category</th>
          <th>Note</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data, key) => {
          return (
            <>
              <tr>
                <td>{key + 1}</td>
                <td>{data.category}</td>
                <td>{data.note}</td>
                <td style={{ color: data.type == "income" ? "green" : "red" }}>
                  {data.amount}
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
