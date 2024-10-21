import { Link } from "react-router-dom";
import Button from "../Elements/Button/index-button";
import FormInput from "../Elements/Input/index-input";

const FormLogin = () => {
  return (
    <div>
      <form>
        <FormInput
          label="Email"
          type="email"
          placeholder="jhondoe@gmail.com"
          name="email"
          variants="py-2 px-3"
        ></FormInput>
        <FormInput
          label="Password"
          type="password"
          placeholder="********"
          name="password"
          variants="py-2 px-3"
        ></FormInput>
        <div className="flex items-center justify-between mt-6">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4" />
            <span className="ml-2 text-gray-700">Remember Me</span>
          </label>
          <Link to="/forgot-password" className="text-blue-500">
            Forgot Password?
          </Link>
        </div>
        <Button
          variants="w-full mt-10 bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100"
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default FormLogin;
