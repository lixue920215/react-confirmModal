import { createStore } from 'redux'
import modal from '../reducer/reducer'

export default function configureStore(initState){
    const store = createStore(modal, initState);
    return store;
}