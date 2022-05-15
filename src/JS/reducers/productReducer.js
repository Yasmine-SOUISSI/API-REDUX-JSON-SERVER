import {
    DELETE_PRODUCTS,
    GET_PRODUCTS,
    GET_PRODUCT_BY_ID,
    POST_PRODUCTS,
    PUT_PRODUCTS,
} from "../typeActions/productActionsTypes";

const initialState = {
    show: false,
    products: [],
    product: {},
};

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload,
            };
        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                product: payload,
            };

        case POST_PRODUCTS:
            return {
                ...state,
                products: [...state.products, payload],
            };
        case PUT_PRODUCTS:
            return {
                ...state,
                products: [...state.products, payload],
            };
        case DELETE_PRODUCTS:
            return {
                ...state,
                products: state.products.filter(
                    (product) => product.id !== payload
                ),
            };
        default:
            return state;
    }
};
