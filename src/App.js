import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AddProduct from "./Components/AddProduct";
import ProductList from "./Components/ProductList";
import UpdateProduct from "./Components/UpdateProduct";

function App() {
    return (
        <>
            {/* <ProductList />
            <AddProduct /> */}
            <Router>
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/add" element={<AddProduct />} />
                    <Route path="/update/:id" element={<UpdateProduct />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
