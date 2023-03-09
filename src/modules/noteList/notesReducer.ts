

//state
const initialState: NotesStateType = {
    notes: [{text: 'Test!'}]
}

//reducer
export const notesReducer = (state: NotesStateType = initialState, action: NotesReducerActionTypes): NotesStateType => {
    switch (action.type) {
        case 'NOTES/ADD_NOTE':
            return {...state, notes:[action.payload.note, ...state.notes]}
        default:
            return state
    }
}

//action creators
export const addNoteAC = (note: NoteType) => {
    return {
        type: 'NOTES/ADD_NOTE',
        payload: {
            note
        }
    }as const
}

//types
export type NotesReducerActionTypes = addNoteACType

type addNoteACType = ReturnType<typeof addNoteAC>

type NotesStateType = {
    notes: Array<NoteType>
}

export type NoteType = {
    text: string
}