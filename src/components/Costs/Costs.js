import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostFilter";
import React, { useState } from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("all");
  const changeYearHandler = (year) => {
    setSelectedYear(year);
    console.log(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    if (selectedYear === "all") {
      return true;
    } else {
      const selectedYearToNumber = Number(selectedYear);
      const getYear = cost.date.getFullYear();
      return getYear === selectedYearToNumber;
    }
  });


  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={changeYearHandler} />
        <CostsDiagram costs={filteredCosts}/>
        <CostList costs={filteredCosts}/>
      </Card>
    </div>
  );
};

export default Costs;
