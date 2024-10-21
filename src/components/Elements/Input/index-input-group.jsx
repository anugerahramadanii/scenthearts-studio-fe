import Button from "../Button/index-button";
import Input from "./input";
import Label from "./label";

const InputGroup = (props) => {
  const {
    label,
    inputType,
    buttonType,
    placeholder,
    inputName,
    inputVariants,
    buttonName,
    buttonVariants,
    onButtonClick,
  } = props;

  return (
    <div className="mb-3">
      {label && <Label htmlFor={inputName}>{label}</Label>}
      <div className="flex gap-2">
        <div className="flex-grow">
          <Input
            type={inputType}
            placeholder={placeholder}
            name={inputName}
            variants={inputVariants}
          />
        </div>
        <Button
          variants={buttonVariants}
          onButtonClick={onButtonClick}
          type={buttonType}
        >
          {buttonName}
        </Button>
      </div>
    </div>
  );
};

export default InputGroup;
