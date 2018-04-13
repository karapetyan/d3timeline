import React, { Component } from 'react';
import './App.css';
import BarChart from './components/BarChart/BarChart';
import historicDatesForSkiing from './data/historicDatesForSkiing';

class App extends Component {

   render() {
    return (
        <div className='App'>
            <div className='App-header'>
                <h2>d3ia dashboard</h2>
            </div>
            <div>
                <BarChart data={historicDatesForSkiing.map( i => i.year )} size={[500,700]} />
            </div>
        </div>
    )
   }
}
export default App;