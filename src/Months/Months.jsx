import { useState } from "react";

export function Months() {
  const months = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];
  //return <div className="page-wrap">{months.join(", ")}</div>;
  /*return (
    <div className="page-wrap">
      {months.map((month) => (
        <div key={month}>{month}</div>
      ))}
    </div>
  );*/
  /*return (
    <div className="page-wrap">
      {months.filter((month) => month.length < 5)}
    </div>
  );*/

  const [inputMonth, setInputMonth] = useState();

  const result = months.filter((month) => month.includes(inputMonth));

  return (
    <div className="page-wrap">
      <div className="search-header">Search</div>
      <div>search is case-sensitive!</div>
      <input onChange={(e) => setInputMonth(e.target.value)} type="text" />
      <div className="result"></div>
      {result.join(", ")}
    </div>
  );
}
