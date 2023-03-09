import { addNoteAC, deleteNoteAC, notesReducer, NotesStateType, updateNoteAC } from './notesReducer';

let startState: NotesStateType;

beforeEach(() => {
    startState = {
        notes: [{id: '1', text: 'Test1'}]
    }
})

test('new note adding', () => {
    let action = addNoteAC('Hi')
    let newState = notesReducer(startState, action)

    expect(newState.notes.length).toBe(2)
    expect(newState.notes[1].text).toBe('Test1')
    expect(newState.notes[0].text).toBe('Hi')
})

test('update note', () => {
    let action = updateNoteAC('1', 'Test2')
    let newState = notesReducer(startState, action)

    expect(newState.notes.length).toBe(1)
    expect(newState.notes[0].text).toBe('Test2')
})

test('delete note', () => {
    let action = deleteNoteAC('1')
    let newState = notesReducer(startState, action)

    expect(newState.notes.length).toBe(0)
})