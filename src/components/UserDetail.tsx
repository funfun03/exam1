import { useParams, Link } from "react-router-dom";
import { useUserContext } from "./UserProvider";

const UserDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { users } = useUserContext();

  const user = users.find((u) => u.id === id);

  if (!user) {
    return (
      <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-red-600">
          User not found
        </h2>
        <p className="text-gray-600 text-center mb-6">
          The user you are looking for does not exist.
        </p>
        <div className="text-center">
          <Link
            to="/users"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Back to Users List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">User Details</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name:
          </label>
          <p className="text-lg font-semibold text-gray-900">{user.name}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email:
          </label>
          <p className="text-lg text-gray-900">{user.email}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Age:
          </label>
          <p className="text-lg text-gray-900">{user.age ? user.age : "N/A"}</p>
        </div>
      </div>
      <div className="mt-6 flex space-x-3">
        <Link
          to="/users"
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
        >
          Back to Users List
        </Link>
        <Link
          to="/"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default UserDetail;
