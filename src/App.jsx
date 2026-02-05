import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Discover from "./pages/Discover";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ width: '80%',position: 'fixed',top: 0,right: 0, padding: "20px", background: "#121212", color: "#fff" }}>
          <Routes>
            <Route path="/" element={<Discover />} />
            <Route path="/watchlist" element={<h1>Watchlist</h1>} />
            <Route path="/blog" element={<h1>Blog</h1>} />
            <Route path="/artists" element={<h1>Artists</h1>} />
            <Route path="/contact" element={<h1>Contact</h1>} />
            <Route path="/help" element={<h1>Help Center</h1>} />
            <Route path="/settings" element={<h1>Settings</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
