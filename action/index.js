import { SHOW_CONFMODAL, HIDE_CONFMODAL } from '../constants/actionType'

//action
export function showConfModal(newstate){
    return {
        type: SHOW_CONFMODAL,
		newstate
    }
}
export function hideConfModal(){
    return {
        type: HIDE_CONFMODAL
    }
}