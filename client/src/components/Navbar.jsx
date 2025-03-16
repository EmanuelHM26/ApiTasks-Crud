import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated,logout, user } = useAuth();

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-4 bg-zinc-700 text-white">
      <Link to={
        isAuthenticated ? '/tasks' : '/'
      }>
        <h1 className="text-2xl font-bold">Task Manager</h1>
      </Link>

      <ul className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 md:gap-x-10 mt-4 md:mt-0">
        {isAuthenticated ? (
          <>
            <li>
              Welcome {user.username}
            </li>
            <li>
              <Link to="/add-task" className="bg-indigo-500 px-4 py-1 rounded-sm">Add Task</Link>
            </li>
            <li>
              <Link to="/" onClick={() => {logout()}} className="bg-indigo-500 px-4 py-1 rounded-sm">LogOut</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="bg-indigo-500 px-4 py-1 rounded-sm">Login</Link>
            </li>
            <li>
              <Link to="/register" className="bg-indigo-500 px-4 py-1 rounded-sm">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
