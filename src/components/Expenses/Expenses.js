import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filterYearHandler = (year) => {
    console.log("Filtered year from Expenses.js ", year);
    setFilterYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterYear}
          onFilterYear={filterYearHandler}
        />
        {props.data.map((e) => {
          return (
            <ExpenseItem
              key={e.id}
              id={e.id}
              title={e.title}
              date={e.date}
              amount={e.amount}
            />
          );
        })}
      </Card>
    </div>
  );
}

export default Expenses;
