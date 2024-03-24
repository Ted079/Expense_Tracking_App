import React, { useState } from "react";
import "./CostForm.css";
const CostForm = (props) => {
  const [name, setName] = useState(""); //""инициализационная состояние, начальное состояние
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");


  const changeNameHandler = (event) => {
    setName(event.target.value);
  };

  const changeAmountHandler = (event) => {
    setAmount(event.target.value);
  };

  const changeDateHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      description: name,
      amount: amount,
      date: new Date(date),
    };

    props.onSaveCostDataHandler(costData);
    
    setName("");
    setAmount("");
    setDate("");

  };

  

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input type="text" value={name} onChange={changeNameHandler} />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={changeAmountHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            min="2018-01-01"
            max="2024-08-08"
            value={date}
            onChange={changeDateHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить рассходы</button>
          <button type="button" onClick={props.onCancelForm}>Отмена</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
