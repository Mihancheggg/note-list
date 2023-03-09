

//state
const initialState: NotesStateType = {
    notes: [{text: 'Test!'}]
}

//reducer
export const notesReducer = (state: NotesStateType = initialState, action: NotesReducerActionTypes): NotesStateType => {
    switch (action.type) {
        default:
            return state
    }
}

//types
export type NotesReducerActionTypes = any

type NotesStateType = {
    notes: Array<NoteType>
}

export type NoteType = {
    text: string
}