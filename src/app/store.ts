import { combineReducers, legacy_createStore as createStore } from 'redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { notesReducer, NotesReducerActionTypes } from '../modules/noteList/notesReducer';

const saveToLocalStorage = (state: AppRootStateType) => {
    try {
        localStorage.setItem('state', JSON.stringify(state));
    } catch (e) {
        console.error(e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const stateStr = localStorage.getItem('state');
        return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (e) {
        console.error(e);
        return undefined;
    }
};

const persistedStore = loadFromLocalStorage();

const rootReducer = combineReducers({
    notesData: notesReducer,
})

export const store = createStore(rootReducer, persistedStore);

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

export type AppRootStateType = ReturnType<typeof rootReducer>
export type CommonActionsType = NotesReducerActionTypes
export type AppDispatch = typeof store.dispatch
type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector