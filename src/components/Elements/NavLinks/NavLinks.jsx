import { Link } from "react-router-dom";

const NavLinks = ({ isMobile }) => {
  return (
    <ul
      className={`flex ${
        isMobile ? "flex-col p-4 space-y-2" : "space-x-4"
      } font-bold`}
    >
      <li>
        <Link
          to="/"
          className={`cursor-pointer ${isMobile ? "" : "text-blue-700"}`}
        >
          HOME
        </Link>
      </li>
      <li>
        <Link to="/products" className="cursor-pointer text-black">
          PRODUCTS
        </Link>
      </li>
      <li>
        <Link to="/about" className="cursor-pointer">
          ABOUT US
        </Link>
      </li>
      <li>
        <Link to="/contact" className="cursor-pointer">
          CONTACT
        </Link>
      </li>
    </ul>
  );
};
export default NavLinks;
