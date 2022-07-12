import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.data.map((e) => {
        return (
          <ExpenseItem
            key={e.id}
            title={e.title}
            date={e.date}
            amount={e.amount}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
