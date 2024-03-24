import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [formData, setFormData] = useState({
    type: "",
    amount: 0,
    description: "",
  });

  const [value, setValue] = useState("expense");
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [allTransactions, setAllTransactions] = useState([]);

  function handleFormSubmit(getCurrentData) {
    if (!getCurrentData.description || !getCurrentData.amount) return;

    setAllTransactions([
      ...allTransactions,
      { ...getCurrentData, id: Date.now() },
    ]);
  }

  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        totalExpense,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
        allTransactions,
        setAllTransactions,
        value,
        setValue,
        handleFormSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
