import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { title, children, type } = props;
  return (
    <div className="flex items-center justify-center min-h-screen px-4 lg:pt-20">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg auth-outer">
        <img
          src="./logo-vinoti.png"
          alt="Vinoti Living Logo"
          className="w-[230px] h-[33px] mx-auto mb-6 bg-cover bg-center bg-no-repeat mb-14"
        />
        <div className="flex items-center mb-6 gap-1">
          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-gray-100 to-gray-300 animate-bounce"></div>
          <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 font-bold">
            {title}
          </h1>
        </div>
        {children}
        <p className="text-center text-gray-600 mt-6">
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          {type === "login" ? (
            <Link to="/register" className="text-blue-500">
              Register
            </Link>
          ) : (
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
