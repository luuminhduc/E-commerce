import * as actions from '../action/CommonAction/actionTypes';

const initalState = {
    sideBar: false,
    isLoading: false,
    alertList: [],
}

export default function commonReducer(state = initalState, action) {
    const {payload} = action;
    switch(action.type) {
        case actions.TOGGLE_SIDE_BAR: return {...state, sideBar: !state.sideBar}
        case actions.SHOW_LOADING: case actions.STOP_LOADING:return{...state, isLoading: payload};
        case actions.ADD_ALERT:return {...state, alertList: [...state.alertList, payload]};
        case actions.REMOVE_ALERT:return {...state, alertList: [...state.alertList].filter(el => el.id !== payload)};
        default: return state;
    }
}