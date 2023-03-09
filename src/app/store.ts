import { combineReducers, legacy_createStore as createStore } from 'redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { notesReducer, NotesReducerActionTypes } from '../modules/noteList/notesReducer';

const rootReducer = combineReducers({
    notesData: notesReducer,
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>
export type CommonActionsType = NotesReducerActionTypes
export type AppDispatch = typeof store.dispatch
type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector