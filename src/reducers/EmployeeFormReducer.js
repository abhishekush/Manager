import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_SAVE_SUCCESS} from '../actions/types'


const INITIAL_STATE = {
    name: '',
    phone:'',
    shift:'Monday'
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type){

        case EMPLOYEE_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value};
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;
        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
}