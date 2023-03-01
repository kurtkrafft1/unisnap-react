import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthenticatedRoute } from "./AuthenticatedRoute";
import Login from "./pages/Login";
import { AuthProvider } from "./hooks/useAuth";
import TopBar from "./components/Topbar.js";
import Home from "./pages/Home";

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
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
