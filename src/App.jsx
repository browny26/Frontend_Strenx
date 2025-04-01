import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import { Navbar } from "./components/Navbar";

const App = () => {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="*" element={<NotFound />} />{" "}
                {/* Per gestire 404 */}
            </Routes>
        </Router>
    );
};

export default App;
