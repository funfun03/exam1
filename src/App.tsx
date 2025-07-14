import "./App.css";
import { UserProvider } from "./components/UserProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100">
          <Navigation />
          <div className="py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/users/:id" element={<UserDetail />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
