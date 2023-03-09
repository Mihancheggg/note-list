import React from 'react';
import './App.css';
import { AddItemForm } from '../components/addItemForm/AddItemForm';
import { useAppDispatch, useAppSelector } from './store';
import { addNoteAC, NoteType } from '../modules/noteList/notesReducer';
import { NoteList } from '../modules/noteList/NoteList';

function App() {
    console.log('render app')
    const dispatch = useAppDispatch()
    const notes = useAppSelector<Array<NoteType>>(state => state.notesData.notes)

    const addItem = (noteText: string): void => {
        dispatch(addNoteAC(noteText))
    }
    return (
        <div className="App">
            <AddItemForm addItem={addItem}/>
            <NoteList notes={notes}/>
        </div>
    );
}

export default App;
