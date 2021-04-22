import {
    TEST_API
} from "../_actions/types";

export default function (state={}, action) {
    switch(action.type){
        case TEST_API:
            return {...state, message:action.payload};
        default:
            return state;
    }
}