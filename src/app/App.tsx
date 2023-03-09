import React from 'react';
import './App.css';
import { AddItemForm } from '../components/addItemForm/AddItemForm';
import { useAppDispatch, useAppSelector } from './store';
import { addNoteAC, NoteType } from '../modules/noteList/notesReducer';
import { NoteList } from '../modules/noteList/NoteList';

function App() {
    const dispatch = useAppDispatch()
    const notes = useAppSelector(state => state.notesData.notes)

    const addItem = (note: NoteType): void => {
        dispatch(addNoteAC(note))
    }
    return (
        <div className="App">
            <AddItemForm addItem={addItem}/>
            <NoteList notes={notes}/>
        </div>
    );
}

export default App;
