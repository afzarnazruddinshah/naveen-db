import React, { Component } from 'react';
import AddRecord from '../AddRecord/addRecord';
import Routes from '../Routes/routes';

class App extends Component {
    state = {  }

    render() { 
        return ( 
            <div className="App">
            <Routes/>
        </div>
         );
    }
}
 
export default App;