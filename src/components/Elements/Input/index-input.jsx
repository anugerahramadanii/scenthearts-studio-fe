import Input from "./input";
import Label from "./label";

const FormInput = (props) => {
  const { label, type, placeholder, name, variants } = props;
  return (
    <>
      <div className="mb-3">
        <Label htmlFor={name}>{label}</Label>
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          variants={variants}
        />
      </div>
    </>
  );
};

export default FormInput;
