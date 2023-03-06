import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthenticatedRoute } from "./AuthenticatedRoute";
import Login from "./pages/Login";
import { AuthProvider } from "./hooks/useAuth";
import TopBar from "./components/Topbar.js";
import Home from "./pages/Home";
import Groups from "./pages/Groups";
import Invites from "./pages/Invites";
import Register from "./pages/Register";
import Splash from "./pages/Splash";

function App() {
  return (
    <div className="h-full w-full overflow-hidden">
      <AuthProvider>
        <TopBar />
        <Routes>
          <Route
            path="/"
            element={
              <AuthenticatedRoute>
                <Home />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/groups"
            element={
              <AuthenticatedRoute>
                <Groups />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/invites"
            element={
              <AuthenticatedRoute>
                <Invites />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/splash"
            element={
              <AuthenticatedRoute>
                <Splash />
              </AuthenticatedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
