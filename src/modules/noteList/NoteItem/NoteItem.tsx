import React, { useCallback } from 'react';
import { EditableSpan } from '../../../components/editableSpan/EditableSpan';
import { useAppDispatch } from '../../../app/store';
import { NoteType, updateNoteAC } from '../notesReducer';

type NoteItemPropsType = {
    note: NoteType
}

const NoteItem = (props: NoteItemPropsType) => {
    const dispatch = useAppDispatch()
    const {note} = props

    const onNoteTextUpdateHandler = useCallback((newText: string) => {
        dispatch(updateNoteAC(note.id, newText))
    },[dispatch, note])

    return (
        <div>
            <EditableSpan text={note.text} onChange={onNoteTextUpdateHandler}/>
            <button onClick={() => {}}>Delete</button>
        </div>
    );
};

export default NoteItem;