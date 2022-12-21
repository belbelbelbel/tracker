import React, { Component } from 'react';
import './App.css'
import Balance from './Components/Balance';
import Header from './Components/Header';
import IncomeExpense from './Components/IncomeExpense';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';
import { GlobalProvider } from './Context.js/GlobalState';
function App(params) {
  return(
    <GlobalProvider className='App'>
      <Header />
      <div className='container'>
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App;