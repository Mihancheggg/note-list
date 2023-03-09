import React, { ChangeEvent, useState } from 'react';

type EditableSpanPropsType = {
    text: string
    onChange: (newValue: string) => void
}

export const EditableSpan = (props: EditableSpanPropsType) => {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.text);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.text);
    }
    const activateViewMode = () => {
        if (title.trim()) {
            if (title.trim().length < 100) {
                setEditMode(false);
                props.onChange(title.trim());
            } else {
                alert('Maximum length is 100 symbols')
            }
        } else {
            alert('String can\'t be empty')
        }

    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ? <input value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode}/>
        : <span onDoubleClick={activateEditMode}>{props.text}</span>
}