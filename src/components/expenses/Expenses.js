import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterDate, setFilterDate] = useState("2023");

  const filterChangedHandler = (data) => {
    setFilterDate(data);
  };

  const filteredExpenses = props.expenseList.filter((expense) => {
    return expense.date.getFullYear().toString() === filterDate;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter onChange={filterChangedHandler} selected={filterDate} />
      <ExpensesChart ExpensesList={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
