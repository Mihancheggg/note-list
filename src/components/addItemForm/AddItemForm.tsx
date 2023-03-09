import React, { ChangeEvent, useState } from 'react';

type AddItemFormPropsType = {
    addItem: (noteText: string) => void
}

export const AddItemForm = (props: AddItemFormPropsType) => {
    console.log('render add item form')
    const [noteText, setNoteText] = useState<string>('')

    const onNoteChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setNoteText(e.currentTarget.value.trim())
    }

    const onAddNoteClickHandler = () => {
        if(noteText){
            props.addItem(noteText)
            setNoteText('')
        } else {
            alert('Empty string can\'t be added')
        }
    }

    return (
        <div>
            <input type="text" placeholder="New note" name="note" value={noteText} onChange={onNoteChangeHandler}/>
            <button onClick={onAddNoteClickHandler}>Add note</button>
        </div>
    );
};

