import * as actions from './actionTypes';

const toggleSideBar = () => {
    return{
        type: actions.TOGGLE_SIDE_BAR,
    }
}

const showLoading = () => {
    return {
        type: actions.SHOW_LOADING,
        payload: true
    }
}

const stopLoading = () => {
    return {
        type: actions.STOP_LOADING,
        payload: false
    }
}

const addAler = (alert) => {
    return{
        type: actions.ADD_ALERT,
        payload:alert,
    }
}

const removeAlert = (id) => {
    return{
        type: actions.REMOVE_ALERT,
        payload: id,
    }
}

const handleAlert = (alert) => dispatch => {
    dispatch(addAler(alert));
    setTimeout(() => {
        dispatch(removeAlert(alert.id));
    }, 4000)
}

export {toggleSideBar, showLoading, stopLoading, handleAlert}