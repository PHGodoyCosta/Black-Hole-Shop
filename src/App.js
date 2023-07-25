import IndexPage from "./Pages/IndexPage";
import ProductPage from "./Pages/ProductPage";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './css/App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<IndexPage />} />
                <Route path="/product" element={<ProductPage />} />
            </Routes>
        </Router>
    );
}

export default App;
