import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Track from "./pages/Track";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="about" element={<About />} />

                <Route path="/track" element={<Track />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Layout>
    );
}

export default App;
