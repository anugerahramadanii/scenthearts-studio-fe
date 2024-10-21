import { Link } from "react-router-dom";
import Button from "../Elements/Button/index-button";
import FormInput from "../Elements/Input/index-input";
import InputGroup from "../Elements/Input/index-input-group";

const FormRegister = () => {
  const handleButton = () => {
    console.log("button clicked");
  };
  return (
    <div>
      <form>
        <InputGroup
          label="Email"
          inputType="email"
          buttonType="submit"
          placeholder="jhondoe@gmail.com"
          inputName="email"
          inputVariants="py-2 px-3"
          buttonName="Send OTP"
          buttonVariants="bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100 text-sm md:text-base text-white py-2"
          onButtonClick={handleButton}
        ></InputGroup>
        <FormInput
          label="OTP"
          type="text"
          placeholder="123456"
          name="otp"
          variants="py-2 px-3"
        ></FormInput>
        <FormInput
          label="Fullname"
          type="text"
          placeholder="John Doe"
          name="fullname"
          variants="py-2 px-3"
        ></FormInput>
        <FormInput
          label="Password"
          type="password"
          placeholder="********"
          name="password"
          variants="py-2 px-3"
        ></FormInput>
        <FormInput
          label="Confirm Password"
          type="password"
          placeholder="********"
          name="confirmPassword"
          variants="py-2 px-3"
        ></FormInput>
        <div className="flex items-center justify-between mt-6">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4" />
            <span className="ml-2 text-gray-700">
              I agree to{" "}
              <Link className="text-blue-500" to="/policy-terms">
                privacy policy & terms
              </Link>
            </span>
          </label>
        </div>
        <Button
          variants="w-full mt-10 bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100"
          type="submit"
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default FormRegister;
