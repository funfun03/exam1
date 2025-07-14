import UserForm from "../components/UserForm";
import UserList from "../components/UserList";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4">
      <UserForm />
      <UserList />
    </div>
  );
};

export default HomePage;
