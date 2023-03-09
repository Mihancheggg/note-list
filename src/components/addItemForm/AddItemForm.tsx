import React, { ChangeEvent, useState } from 'react';
import styles from './AddItemForm.module.css'

type AddItemFormPropsType = {
    addItem: (noteText: string) => void
}

export const AddItemForm = (props: AddItemFormPropsType) => {
    console.log('render add item form')
    const [noteText, setNoteText] = useState<string>('')

    const onNoteChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setNoteText(e.currentTarget.value)
    }

    const onAddNoteClickHandler = () => {
        if(noteText.trim()){
            if(noteText.trim().length < 100){
                props.addItem(noteText.trim())
                setNoteText('')
            } else {
                alert('Maximum length is 100 symbols')
            }
        } else {
            alert('Empty string can\'t be added')
        }
    }

    return (
        <div className={styles.addingForm}>
            <input type="text" placeholder="New note" name="note" value={noteText} onChange={onNoteChangeHandler}/>
            <button onClick={onAddNoteClickHandler}>Add note</button>
        </div>
    );
};

