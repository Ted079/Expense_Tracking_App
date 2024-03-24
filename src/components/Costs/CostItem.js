import React, { useState } from "react";
import Card from "../UI/Card";
import CostDate from "./CostDate";
import "./CostItem.css";

const CostItem = (props) => {
  // const [description, setDescription] = useState(props.description);

  // const initialDescription = props.description;

  // const changeDescriptionHandler = () => {
  //   setDescription("coca-cola"); // description = "coca-cola", CostItem(props); происходит вызов этой функции и все заново рендерится

  //   // description === initialDescription
  //   //   ? setDescription("coca-cola")
  //   //   : setDescription(initialDescription);
  // };

  return (
    <li>
      <Card className="cost-item">
        <CostDate date={props.date} />
        <div className="cost-item__description">
          <h2>{props.description} </h2>
          <div className="cost-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={changeDescriptionHandler}>change description</button> */}
      </Card>
    </li>
  );
};

export default CostItem;
