import UserForm from "./UserForm";
import UserList from "./UserList";
// import Navbar from "./Navbar";

const UserManagementSystem = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">
            User Management System
          </h1>
          <UserForm />
          <UserList />
        </div>
      </div>
    </div>
  );
};

export default UserManagementSystem;
