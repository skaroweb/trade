import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";

import Homepage from "./pages/Homepage";
import InnerPage from "./pages/InnerPage";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index exact element={<Homepage />} />
          <Route exact path="/innerpage" element={<InnerPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
