import { Container } from 'semantic-ui-react'
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import { useEffect, useState } from "react";
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';
import { useDispatch, useSelector } from 'react-redux';
import { resetEntry } from './redux/entrySlice';

function App() {

  const { entries } = useSelector(state => state.entries)

  JSON.stringify(entries)

  const dispatch = useDispatch()

  const [isOpen, setIsOpen] = useState(false);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);

  // Hook to calculate Total Income and Expense
  useEffect(() => {
    let totalIncome = 0
    let totalExpense = 0
    entries.map(entry => {
      if (entry.isExpense) {
        return totalExpense += +entry.amount
      } else {
        return totalIncome += +entry.amount
      }
    })
    let total = totalIncome - totalExpense
    setIncomeTotal(totalIncome)
    setExpenseTotal(totalExpense)
    setTotalBalance(total)
  }, [entries]);

  // Hook to get all entries
  useEffect(() => {
    dispatch({ type: "entries/getEntries" })
  }, [dispatch])

  const reset = () => {
    setIsOpen(false)
    dispatch(resetEntry())
  }

  return (
    <Container>
      {/* Main Heading */}
      <MainHeader type="h1" title="Budget" />

      {/* Balance Display */}
      <DisplayBalance title="Your Balance" value={totalBalance} size="small" />

      {/* Income-Expense Display */}
      <DisplayBalances expenseTotal={expenseTotal} incomeTotal={incomeTotal} />

      {/* History Header */}
      <MainHeader type="h3" title="History" />

      {/* History-Entries */}
      <EntryLines setIsOpen={setIsOpen} />

      {/* New Transaction Header */}
      <MainHeader type="h3" title="Add New Transaction" />

      {/* Entry Form */}
      <NewEntryForm />

      {/* Modal */}
      <ModalEdit isOpen={isOpen} reset={reset} />

    </Container>
  );
}

export default App;
