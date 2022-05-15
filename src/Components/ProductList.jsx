import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProducts, getProducts } from "../JS/actions/productActions";

function ProductList() {
    const dispatch = useDispatch();
    // when the component is mounted, we dispatch the action getProducts
    useEffect(() => {
        dispatch(getProducts);
    }, [dispatch]);
    // we get the products from the state
    const products = useSelector((state) => state.productReducer.products);
    console.log(products);
    return (
        <div>
            {
                // map the products array to a list of products
                products.map((product) => {
                    return (
                        <div key={product.id}>
                            {product.title}
                            {product.author}
                            <button
                                onClick={() =>
                                    // dispatch the action deleteProducts and send the id of the product to delete
                                    dispatch(deleteProducts(product.id))
                                }
                            >
                                Delete
                            </button>
                            {/* routing  */}
                            <Link to={`/update/${product.id}`}>
                                <button>Edit</button>
                            </Link>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default ProductList;
