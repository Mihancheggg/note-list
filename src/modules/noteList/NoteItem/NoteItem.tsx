import React from 'react';
import { EditableSpan } from '../../../components/editableSpan/EditableSpan';
import { useAppDispatch } from '../../../app/store';
import { deleteNoteAC, NoteType, updateNoteAC } from '../notesReducer';
import styles from './NoteItem.module.css'

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
        <div className={styles.item}>
            <EditableSpan text={note.text} onChange={onNoteTextUpdateHandler}/>
            <button className={styles.btn} onClick={deleteNote}>Delete</button>
        </div>
    );
};

export default NoteItem;