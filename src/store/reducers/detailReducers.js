import { initState } from "../../constants/initState";
import { generalActionsFailure, generalTypeFetching, generalTypePending, generalTypeSuccess } from '../actions/actions'
import { ACTION_TYPES } from "../actions/actionTypes";


export const detailReducers = (state = initState, { type, payload }) => {

    switch (type) {
        case generalTypeFetching(ACTION_TYPES.INIT):
            
            return {
                ...state,
                loading: true,
                pending: false
            }

        case generalTypeSuccess(ACTION_TYPES.INIT):
            return {
                ...state,
                loading: false,
                data: payload,
                hasErrors: null,
                pending: false
            }
        case generalActionsFailure(ACTION_TYPES.INIT):

            return {
                ...state,
                loading: false,
                data: null,
                hasErrors: payload,
                pending: false
            }

        case generalTypePending(ACTION_TYPES.INIT):
            return {
                ...state,
                loading: false,
                data: null,
                hasErrors: null,
                pending: true

            }
        default:
            return Object.assign({}, state)
    }

}
