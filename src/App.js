// import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';

function App() {
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

  return (
    <div>
      <h2>Let's get started here!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
