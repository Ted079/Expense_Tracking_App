import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import Info from "./components/Info";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    date: new Date(2021, 2, 12),
    description: "Холодильник",
    amount: 999.99,
    id: "c1",
  },
  {
    date: new Date(2023, 1, 11),
    description: "Телевизор",
    amount: 1600.99,
    id: "c2",
  },
  {
    date: new Date(2023, 4, 4),
    description: "МакБук",
    amount: 1001.99,
    id: "c3",
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);


  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      console.log([cost, ...prevCosts]);
      return [cost, ...prevCosts];
    })
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;

//javascript Xml JSX
