import React, { useState } from "react";
import "./NewCost.css";
import CostForm from "./CostForm";
const NewCost = (props) => {
  const [showFrom, setShowForm] = useState();

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);

    setShowForm(false);
  };

  const cancelFormHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-cost">
      {!showFrom && (
        <button onClick={() => setShowForm(true)}>
          Добавить новый рассходы
        </button>
      )}
      {showFrom && (
        <CostForm
          onCancelForm={cancelFormHandler}
          onSaveCostDataHandler={saveCostDataHandler}
        />
      )}
    </div>
  );
};

export default NewCost;
