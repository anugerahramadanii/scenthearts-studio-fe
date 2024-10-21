const Button = (props) => {
  const {
    children,
    variants,
    type = "button",
    onButtonClick = () => {},
  } = props;

  return (
    <>
      <button
        type={type}
        className={`h-10 px-6 font-semibold rounded-md text-white ${variants}`}
        onClick={onButtonClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
