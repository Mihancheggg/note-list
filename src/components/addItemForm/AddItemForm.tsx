import React, { ChangeEvent, useState } from 'react';
import { NoteType } from '../../modules/noteList/notesReducer';

type AddItemFormPropsType = {
    addItem: (note: NoteType) => void
}

export const AddItemForm = (props: AddItemFormPropsType) => {
    const [note, setNote] = useState<NoteType>({text: ''})

    const onNoteChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setNote({...note, text: e.currentTarget.value})
    }

    return (
        <form>
            <input type="text" placeholder="New note" name="note" value={note.text} onChange={onNoteChangeHandler}/>
            <button onClick={() => props.addItem(note)}>Add note</button>
        </form>
    );
};

