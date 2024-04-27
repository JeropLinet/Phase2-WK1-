import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css'
import Transaction from './transactions';

function App() {
    //a state is an object that represents the data that the component should keep track off
    //useState manages the state of components
    // calling usestate returns the value of the current state and allows the user to update the state
    const[date,SetDate]=useState('')
    const[description,SetDescription]=useState('')
    const[category,SetCategory]=useState('')
    const[amount,SetAmount]=useState('')

    return(
        <div className='App'>
            <h1 className='header'>The Royal Bank of Flatiron</h1>

            <div className='search'>
              <input type='text' placeholder='Search Your Transaction Here'></input>
              <button>&#128269;</button>
            </div>
          <form>
            <div className='addTransaction'>
              <input 
               type='text' 
               placeholder='Date' 
               value={date}>
              </input>

              <input
                type='text'
                placeholder='Description' 
                value={description}>
              </input>

              <input 
               type='text' placeholder='Category'></input>
              <input type='text' placeholder='Amount'></input>
            </div>
            
            <button className='addTransaction'>Add Transaction</button>
          </form>

            <table className='table'>
                <thead>
                    <tr>
                     <th>Date</th>
                     <th>Description</th>
                     <th>Category</th>
                     <th>Amount</th>
                    </tr>
                </thead>
                {/* in the transactions component we alredy has a tbody which is why we do not have to put another tbody */}
                <Transaction/> 
            </table>
        </div>
    )
}

export default App;
