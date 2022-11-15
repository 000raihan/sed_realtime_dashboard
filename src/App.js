import { useState, useEffect, useRef } from "react";
import BarChart from "./BarChart";

// export const data = {
//   labels: ["Case on Hold", "Submitted", "In Production", "Shipped"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5],
//       backgroundColor: ["#F2CC59", "#BA68C8", "#407BFF", "#E6E5E6"],
//       borderColor: ["#F2CC59", "#BA68C8", "#407BFF", "#E6E5E6"],
//       borderWidth: 1,
//     },
//   ],
// };

// const pieOptions = {
//   plugins: {
//     legend: {
//       display: false,
//       labels: {
//         font: {
//           size: 12,
//         },
//       },
//     },
//   },
// };

function App() {
  
  return (
    <div>
      <h1>Bar Chart</h1>
      <BarChart/>
    </div>
  );
}

export default App;
