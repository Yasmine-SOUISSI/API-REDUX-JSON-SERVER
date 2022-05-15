import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../JS/actions/productActions";

function AddProduct() {
    const dispatch = useDispatch();
    // state bch nhot f wesstha el produit eli bch najoutih
    const [product, setProduct] = useState({
        title: "",
        author: "",
    });
    // fonction qui permet de modifier le state selon el input li nabiweeh
    const handleChange = (event) => {
        setProduct({
            ...product,
            [event.target.name]: event.target.value,
        });
    };
    return (
        <div>
            <input
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Author"
                name="author"
                onChange={handleChange}
            />
            <button
                onClick={() => {
                    // dipatch l'action addProduct
                    dispatch(
                        addProduct({ ...product, id: Math.random() }, dispatch)
                    );
                }}
            >
                Add Product
            </button>
        </div>
    );
}

export default AddProduct;
