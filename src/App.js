import Expenses from "./components/Expenses/Expenses";

const App = () => {
  // test
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 3, 15),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.99,
      date: new Date(2020, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Yoga Mat",
      amount: 27.89,
      date: new Date(2021, 3, 7),
    },
  ];

  return (
    <div>
      <Expenses
        expenses={expenses}
      />
    </div>
  );
}

export default App;
