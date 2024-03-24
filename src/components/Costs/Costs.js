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

  // let costsContent = <p>В этом году нет товаров</p>;
  // if(filteredCosts.length > 0){
  //   costsContent = filteredCosts.map((cost) => (
  //     <CostItem
  //       key={cost.id}
  //       date={cost.date}
  //       description={cost.description}
  //       amount={cost.amount}
  //     />
  //   ))
  // }

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={changeYearHandler} />
        <CostsDiagram costs={filteredCosts}/>
        <CostList costs={filteredCosts}/>
        {/* {costsContent} */}
      </Card>
    </div>
  );
};

export default Costs;
