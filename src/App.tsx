import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DriftPage from "./pages/DriftPage";
import ForzaPage from "./pages/ForzaPage";
import TimeAttackPage from "./pages/TimeAttackPage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="driftpage" element={<DriftPage />} />
          <Route path="forzapage" element={<ForzaPage />} />
          <Route path="timeattackpage" element={<TimeAttackPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
