import React from 'react';
import { NoteType } from './notesReducer';
import NoteItem from './NoteItem/NoteItem';

type NoteListPropsType = {
    notes: Array<NoteType>
}

export const NoteList = (props: NoteListPropsType) => {
    console.log('render note list')
    const {notes} = props

    return (
        <div>
            {notes.map((el) => <NoteItem key={el.id} note={el}/>)}
        </div>
    );
};