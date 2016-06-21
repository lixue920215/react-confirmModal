import {SHOW_CONFMODAL, HIDE_CONFMODAL} from '../constants/actionType'

//初始状态
const initState = {
    visible : false
}

export default function modal(state = initState, action) {
    switch(action.type){
        case 'SHOW_CONFMODAL':
            return Object.assign({}, state, action.newstate);
        case 'HIDE_CONFMODAL':
            return initState
        default:
            return state;
    }
}