import React from 'react';
import './App.css';
import { AddItemForm } from '../components/addItemForm/AddItemForm';

function App() {
    return (
        <div className="App">
            <AddItemForm addItem={() => {
            }}/>
        </div>
    );
}

export default App;
