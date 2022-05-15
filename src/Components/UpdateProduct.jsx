import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById, updateProducts } from "../JS/actions/productActions";

function UpdateProduct() {
    // get id from the url
    const { id } = useParams();
    const dispatch = useDispatch();
    // get product by id when the component is mounted
    useEffect(() => dispatch(getProductById(id)), [dispatch, id]);
    // get the product from the state
    const product = useSelector((state) => state.productReducer.product);
    // state to store the product
    const [productUpdate, setProductUpdate] = useState({
        title: product.title,
        author: product.author,
        id: product.id,
    });
    // function to update the product
    const handleChange = (event) => {
        setProductUpdate({
            ...productUpdate,
            [event.target.name]: event.target.value,
        });
    };
    return (
        <div>
            <h1>Update Product</h1>
            <input
                type="text"
                placeholder="Title"
                name="title"
                value={productUpdate.title}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Author"
                name="author"
                value={productUpdate.author}
                onChange={handleChange}
            />
            <button
                onClick={() => {
                    // dispatch the action updateProducts and send the product to update
                    dispatch(updateProducts(productUpdate, dispatch));
                }}
            >
                Update Product
            </button>
        </div>
    );
}

export default UpdateProduct;
