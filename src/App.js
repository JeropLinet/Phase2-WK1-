import logo from './logo.svg';
import './App.css';
import './index.css'

function App() {
    return(
        <div className='App'>
             <h1 className='header'>The Royal Bank of Flatiron</h1>

            <div className='search'>
              <input type='text' placeholder='Search Your Transaction Here'></input>
              <button>&#128269;</button>
            </div>

            <div className='addTransaction'>
              <input type='text' placeholder='Date'></input>
              <input type='text' placeholder='Description'></input>
              <input type='text' placeholder='Category'></input>
              <input type='text' placeholder='Amount'></input>
            </div>
            <button className='addTransaction'>Add Transaction</button>

            <table className='table'>
                <thead>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </thead>

            </table>
        </div>
    )
}

export default App;
