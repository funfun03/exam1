import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { UserProvider } from "./components/UserProvider";

function App() {
  return (
    <UserProvider>
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">
            User Management System
          </h1>
          <UserForm />
          <UserList />
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
