

//state
import { v1 } from 'uuid';
import { text } from 'stream/consumers';

const initialState: NotesStateType = {
    notes: [{id: v1(),text: 'Test!'}]
}

//reducer
export const notesReducer = (state: NotesStateType = initialState, action: NotesReducerActionTypes): NotesStateType => {
    switch (action.type) {
        case 'NOTES/SET_NOTES':
            return {...state, notes: action.payload.notes}
        case 'NOTES/UPDATE_NOTE':
            return {...state, notes: [...state.notes.map(el=> el.id === action.payload.noteID ? {...el, text: action.payload.newText} : el )]}
        case 'NOTES/ADD_NOTE':
            return {...state, notes:[action.payload.note, ...state.notes]}
        default:
            return state
    }
}

//action creators
export const setNotesAC = (notes: Array<NoteType>) => {
    return {
        type: 'NOTES/SET_NOTES',
        payload: {
            notes
        }
    }as const
}

export const addNoteAC = (note: NoteType) => {
    return {
        type: 'NOTES/ADD_NOTE',
        payload: {
            note
        }
    }as const
}

export const updateNoteAC = (noteID: string, newText: string) => {
    return {
        type: 'NOTES/UPDATE_NOTE',
        payload: {
            noteID,
            newText
        }
    }as const
}

//types
export type NotesReducerActionTypes = setNotesACType | addNoteACType | updateNoteACType

type setNotesACType = ReturnType<typeof setNotesAC>
type addNoteACType = ReturnType<typeof addNoteAC>
type updateNoteACType = ReturnType<typeof updateNoteAC>

type NotesStateType = {
    notes: Array<NoteType>
}

export type NoteType = {
    id: string
    text: string
}