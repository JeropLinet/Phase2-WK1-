import logo from './logo.svg';
import './App.css';
import './index.css'
import Transaction from './transactions';

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
