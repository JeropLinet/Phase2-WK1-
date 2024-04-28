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
    const[searchTransactions, setSearchTransactions] = useState('')
   
    
    //adding eventhandlers to handle change in the input
    //e.target.value access the value of the input fielld
    const handleDateChange=(e)=>setDate(e.target.value)
    const handleDescriptionChange=(e)=>setDescription(e.target.value)
    const handleCategoryChange=(e)=>setCategory(e.target.value)
    const handleAmountChange=(e)=>setAmount(e.target.value)
    const handleSearchChange = (e) => setSearchTransactions(e.target.value);
    
   //adding transactions to the table
    const addTransaction = () => {
    const newTransaction = { date, description, category, amount } //creates a new transaction
    setTransactions([...transactions, newTransaction]) //spread operator enables creation of a new array with the existing transaction plus the new one
    setDate('')
    setDescription('')
    setCategory('')
    setAmount('')
   }
//for the user to be able to filter through all the transactions in the table
const allTransactions = [...transactions, // Adds transactions
    { date: "2019-08-07", description: "Movies", category: "Entertainment", amount: -89 }, // Sample transactions
    { date: "2019-07-07", description: "Chipotle", category: "Food", amount: 200 },
    
  ];
//use of .filter which filters transactions based on what the user has place in the search field
//i have included that the description is the one that gets filtered
  const filteredTransactions = allTransactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTransactions.toLowerCase())
  )

  //rendering everything to be displayed
    return(
        <div className='App'>
            <h1 className='header'>The Royal Bank of Flatiron</h1>

            <div className='search'>
              <input 
               type='text' 
               placeholder='Search Your Transaction Here'
              value={searchTransactions}
              onChange={handleSearchChange}
               />
              
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
              <Transaction transactions={filteredTransactions} />
                
          </table>
        </div>
    )
   }

export default App;
