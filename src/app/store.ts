import { combineReducers, createStore } from 'redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { notesReducer, NotesReducerActionTypes } from '../modules/noteList/notesReducer';

const rootReducer = combineReducers({
    notes: notesReducer,
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>
export type CommonActionsType = NotesReducerActionTypes
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector