import * as actions from './actionTypes';
import axios from 'axios';
import { handleAlert, showLoading, stopLoading } from '../CommonAction/actions';
const addProduct = (product) => async dispatch =>{
    dispatch(showLoading());
    try{
        const res = await axios({
            url:'https://5fc78342f3c77600165d863e.mockapi.io/product',
            method:"POST",
            data:product,
        })
        if(res.status === 201 || res.status === 200) {
            dispatch(handleAlert({title: "An item is added", status: "success", id: Math.random()}));
            await dispatch({
                type: actions.ADD_PRODUCT,
                payload:res.data
            })
        }
    }catch(err) {
        console.log(err);
    }
    dispatch(stopLoading());
}

const getAllProducts = () => async dispatch => {
    try{
        const res = await axios({
            url:'https://5fc78342f3c77600165d863e.mockapi.io/product',
            method:"GET",
        })
        if(res.status === 201 || res.status === 200) {
            await dispatch({
                type: actions.GET_ALL_PRODUCTS,
                payload:res.data
            })
        }
    }catch(err) {
        console.log(err);
    }
}

const deleteProducts = (id) => async dispatch => {
    try{
        const res = await axios({
            url:`https://5fc78342f3c77600165d863e.mockapi.io/product/${id}`,
            method:"DELETE",
        })
        if(res.status === 201 || res.status === 200) {
            await dispatch({
                type: actions.GET_ALL_PRODUCTS,
                payload:id
            })
        }
    }catch(err) {
        console.log(err);
    }
}


const updateProduct = (product) => async dispatch => {
    try{
        const res = await axios({
            url:`https://5fc78342f3c77600165d863e.mockapi.io/product/${product.id}`,
            method:"PUT",
            data:product,
        })
        if(res.status === 201 || res.status === 200) {
            await dispatch({
                type: actions.UPDATE_PRODUCT,
                payload:res.data
            })
        }
    }catch(err) {
        console.log(err);
    }
}

export {addProduct,getAllProducts,updateProduct,deleteProducts};
