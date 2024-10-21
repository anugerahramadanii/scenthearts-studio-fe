const DropdownItemList = (props) => {
  const { label, onClick, vatiants } = props;
  return (
    <li
      className={`py-2 ${vatiants} hover:bg-gray-100 cursor-pointer bg-white`}
      onClick={onClick}
    >
      {label}
    </li>
  );
};

export default DropdownItemList;
