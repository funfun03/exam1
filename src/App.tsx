import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import UserManagementSystem from "./components/UserManagementSystem";
import { UserProvider } from "./components/UserProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserManagementSystem />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserManagementSystem />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
