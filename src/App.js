import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css'
import Transaction from './transactions';

function App() {
    //a state is an object that represents the data that the component should keep track off
    //useState manages the state of components
    // calling usestate returns the value of the current state and allows the user to update the state
    const[date,setDate]=useState('')
    const[description,setDescription]=useState('')
    const[category,setCategory]=useState('')
    const[amount,setAmount]=useState('')
    const[transactions,setTransactions]=useState([]) //this makes sure that the transactions are always an array
   

    //adding eventhandlers to handle change in the input
    //e.target.value access the value of the input fielld
    const handleDateChange=(e)=>setDate(e.target.value)
    const handleDescriptionChange=(e)=>setDescription(e.target.value)
    const handleCategoryChange=(e)=>setCategory(e.target.value)
    const handleAmountChange=(e)=>setAmount(e.target.value)
    
   //adding transactions to the table
    const addTransaction = () => {
    const newTransaction = { date, description, category, amount } //creates a new transaction
    setTransactions([...transactions, newTransaction]) //spread operator enables creation of a new array with the existing transaction plus the new one
    
    setDate('')
    setDescription('')
    setCategory('')
    setAmount('')
   };
    return(
        <div className='App'>
            <h1 className='header'>The Royal Bank of Flatiron</h1>

            <div className='search'>
              <input 
               type='text' 
               placeholder='Search Your Transaction Here'
               
               />
              <button >&#128269;</button>
            </div>
          
            <div className='addTransaction'>
              <input 
               type='text' 
               placeholder='Date' 
               value={date} 
               onChange={handleDateChange}
              />

              <input
                type='text'
                placeholder='Description' 
                value={description}
                onChange={handleDescriptionChange}
              />

              <input 
               type='text' 
               placeholder='Category'
               value={category}
               onChange={handleCategoryChange}
              />
              
              <input 
               type='text' 
               placeholder='Amount'
               value={amount}
               onChange={handleAmountChange}
               />

            <button 
            className='addTransaction' 
            onClick={addTransaction}>Add Transaction
            </button>
            </div>
            
          <table className='table'>
              <thead>
                    <tr>
                     <th>Date</th>
                     <th>Description</th>
                     <th>Category</th>
                     <th>Amount</th>
                    </tr>
              </thead>
                
                {/* in the transactions component we already have a tbody which is why we do not have to put another tbody */}
              <Transaction transactions={transactions} />
                
          </table>
        </div>
    )
   }

export default App;
