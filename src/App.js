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
<<<<<<< HEAD
          <Route exact path="/:id" element={<InnerPage />} />
=======
          <Route exact path="/provider/:id" element={<InnerPage />} />
>>>>>>> aasik
        </Route>
      </Routes>
    </div>
  );
}

export default App;
