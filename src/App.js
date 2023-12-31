
import HomePage from "./Pages/Home.js"
import ComparePage from "./Pages/Compare.js"
import DashboardPage from "./Pages/Dashboard.js"
import CoinPage from "./Pages/Coin.js"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WatchlistPage from "./Pages/Watchlist.js";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
