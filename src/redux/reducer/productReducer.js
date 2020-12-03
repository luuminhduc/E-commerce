import * as actions from '../action/ProductAction/actionTypes';
const initalState = {
    productList : [],
}

export default function productReducer(state = initalState, action) {
    const {payload} = action;
    switch(action.type){
        case actions.ADD_PRODUCT:return{...state, productList:[...state.productList, payload]};
        case actions.GET_ALL_PRODUCTS:{
            return{...state,productList: payload}
        };
        case actions.DELETE_PRODUCT:return{...state,productList: [...state.productList].filter(el => el.id !== payload)};
        default: return state;
    }
} 