import React from 'react';
import { EditableSpan } from '../../../components/editableSpan/EditableSpan';
import { useAppDispatch } from '../../../app/store';
import { deleteNoteAC, NoteType, updateNoteAC } from '../notesReducer';

type NoteItemPropsType = {
    note: NoteType
}

const NoteItem = (props: NoteItemPropsType) => {
    const dispatch = useAppDispatch()
    const {note} = props

    const onNoteTextUpdateHandler = (newText: string) => {
        dispatch(updateNoteAC(note.id, newText))
    }

    const deleteNote = () => {
        dispatch(deleteNoteAC(note.id))
    }

    return (
        <div>
            <EditableSpan text={note.text} onChange={onNoteTextUpdateHandler}/>
            <button onClick={deleteNote}>Delete</button>
        </div>
    );
};

export default NoteItem;