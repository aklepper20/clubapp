import "./App.css";
import Welcome from "./pages/Welcome";
import PlanLayout from "./pages/Layouts/PlanLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirm from "./pages/CodeConfirm";
import AllowNotification from "./pages/AllowNotification";
import AppLayout from "./pages/Layouts/AppLayout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <PlanLayout>
          <Routes>
            <Route path="/allow_notification" element={<AllowNotification />} />
            <Route path="/code_confirm" element={<CodeConfirm />} />
            <Route path="/" element={<Welcome />} />
            <Route path="/invite" element={<PhoneConfirmation />} />
          </Routes>
        </PlanLayout>
        {/* <Route path={["/home"]} /> */}
        <AppLayout>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/profil" element={<Profile />} />
          </Routes>
        </AppLayout>
      </Router>
    </div>
  );
}

export default App;
