// import ExpenseItem from './components/ExpenseItem';
import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  // function App() { //two ways to write component one using arrow other using function
  const expenses = [
    {
      id: 'id1',
      title: 'Car Insurance',
      amount: 12,
      date: new Date(2021, 2, 28),
    },
    { id: 'id2', title: 'laptop', amount: 11, date: new Date(2021, 2, 28) },
    {
      id: 'id3',
      title: 'electric scooter',
      amount: 10,
      date: new Date(2021, 2, 28),
    },
    { id: 'id4', title: 'picnic', amount: 14, date: new Date(2021, 2, 28) },
  ];

  const addExpenseHandler = (expense) => {
    console.log('in App.js');
    console.log(expense);
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement(
  //     'h2',
  //     {},
  //     'Lets get started',
  //     React.createElement(Expenses, { items: expenses })
  //   )
  // );
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
