import { Link } from "react-router-dom";
import { useUserContext } from "./UserProvider";

const UserList = () => {
  const { users } = useUserContext();

  if (users.length === 0) {
    return (
      <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
        <h3 className="text-xl font-bold mb-4">User List</h3>
        <p className="text-gray-500 text-center py-8">
          No users found. Add some users to see them here.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      <h3 className="text-xl font-bold mb-4">
        User List ({users.length} users)
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Email
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Age
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.age ? user.age : "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <Link
                    to={`/users/${user.id}`}
                    className="text-blue-500 hover:underline font-medium"
                  >
                    View Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
