import React, { ChangeEvent, useState } from 'react';
import { NoteType } from '../../modules/noteList/notesReducer';
import { v1 } from 'uuid';

type AddItemFormPropsType = {
    addItem: (note: NoteType) => void
}

export const AddItemForm = (props: AddItemFormPropsType) => {
    const [note, setNote] = useState<NoteType>({id: v1(), text: ''})

    const onNoteChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setNote({...note, text: e.currentTarget.value})
    }

    const onAddNoteClickHandler = () => {
        props.addItem(note)
        setNote({id: v1(), text: ''})
    }

    return (
        <form>
            <input type="text" placeholder="New note" name="note" value={note.text} onChange={onNoteChangeHandler}/>
            <button onClick={onAddNoteClickHandler}>Add note</button>
        </form>
    );
};

