import { v1 } from 'uuid';

//state
const initialState: NotesStateType = {
    notes: [{id: v1(), text: 'Test!'}]
}

//reducer
export const notesReducer = (state: NotesStateType = initialState, action: NotesReducerActionTypes): NotesStateType => {
    switch (action.type) {
        case 'NOTES/SET_NOTES':
            return {...state, notes: action.payload.notes}
        case 'NOTES/UPDATE_NOTE':
            return {...state,
                notes: [...state.notes.map(el => el.id === action.payload.noteID ? {
                    ...el,
                    text: action.payload.newText
                } : el)]
            }
        case 'NOTES/ADD_NOTE':
            return {...state, notes: [action.payload, ...state.notes]}
        case 'NOTES/DELETE_NOTE':
            return {...state, notes: [...state.notes.filter(el => el.id !== action.payload.noteID)]}
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
    } as const
}

export const addNoteAC = (noteText: string) => {
    return {
        type: 'NOTES/ADD_NOTE',
        payload: {
            id: v1(),
            text: noteText
        }
    } as const
}

export const updateNoteAC = (noteID: string, newText: string) => {
    return {
        type: 'NOTES/UPDATE_NOTE',
        payload: {
            noteID,
            newText
        }
    } as const
}

export const deleteNoteAC = (noteID: string) => {
    return {
        type: 'NOTES/DELETE_NOTE',
        payload: {
            noteID
        }
    } as const
}

//types
export type NotesReducerActionTypes = setNotesACType | addNoteACType | updateNoteACType | deleteNoteACType

type setNotesACType = ReturnType<typeof setNotesAC>
type addNoteACType = ReturnType<typeof addNoteAC>
type updateNoteACType = ReturnType<typeof updateNoteAC>
type deleteNoteACType = ReturnType<typeof deleteNoteAC>

export type NotesStateType = {
    notes: Array<NoteType>
}

export type NoteType = {
    id: string
    text: string
}