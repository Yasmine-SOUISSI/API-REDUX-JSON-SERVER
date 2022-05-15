// const addProduct = (product) => {
//     return {
//         type: "ADD_PRODUCT",
//         payload: product,
//     };
// };

import axios from "axios";

export const addProduct = (product) => async (dispatch) => {
    try {
        // send a post request to the server with the new product data to create a product
        const res = await axios.post("http://localhost:3000/products", product);
        console.log(res);
        // dispatch the action to the reducer
        dispatch({
            type: "POST_PRODUCTS",
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const getProducts = async (dispatch) => {
    try {
        // send a get request to the server to get all products
        const res = await axios.get("http://localhost:3000/products");

        console.log(res.data);
        // dispatch the action to the reducer
        dispatch({
            type: "GET_PRODUCTS",
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};
export const deleteProducts = (id) => async (dispatch) => {
    try {
        // send a delete request to the server to delete a product with the id
        const res = await axios.delete(`http://localhost:3000/products/${id}`);
        console.log(res);
        dispatch({
            type: "DELETE_PRODUCTS",
            payload: id,
        });
    } catch (err) {
        console.log(err);
    }
};
export const updateProducts = (product) => async (dispatch) => {
    try {
        // send a put request to the server to update a product
        const res = await axios.put(
            `http://localhost:3000/products/${product.id}`,
            product
        );
        console.log(res);
        // dispatch the action to the reducer
        dispatch({
            type: "PUT_PRODUCTS",
            payload: product,
        });
    } catch (err) {
        console.log(err);
    }
};
export const getProductById = (id) => async (dispatch) => {
    try {
        // send a get request to the server to get a product by id
        const res = await axios.get(`http://localhost:3000/products/${id}`);
        console.log(res.data);
        // dispatch the action to the reducer
        dispatch({
            type: "GET_PRODUCT_BY_ID",
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};
