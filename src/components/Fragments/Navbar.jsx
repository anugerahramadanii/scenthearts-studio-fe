import { useState } from "react";
import ShoppingCart from "../Elements/Cart/Cart";
import Icon from "../Elements/Icon/Icon";
import NavLinks from "../Elements/NavLinks/NavLinks";
import { Link } from "react-router-dom";

const NavbarSection = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <nav className="bg-white py-6 px-4 lg:px-10 shadow">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          {/* For mobile screen: logo and hamburger aligned in one row, shopping cart in second row */}
          <div className="flex flex-col w-full lg:hidden">
            <div className="flex justify-between items-center w-full">
              <Link to="/">
                <img
                  src="./logo-vinoti.png"
                  alt="Vinoti Living Logo"
                  className="w-[150px] h-[30px] bg-cover bg-center bg-no-repeat"
                />
              </Link>
              <button onClick={toggleDrawer} className="text-gray-700">
                {isDrawerOpen ? (
                  <Icon iconClass="fas fa-times" />
                ) : (
                  <Icon iconClass="fas fa-bars" />
                )}
              </button>
            </div>
            <div className="mt-4 md:hidden">
              <ShoppingCart />
            </div>
          </div>

          {/* For larger screens (tablet and laptop): logo and shopping cart in a single row */}
          <div className="hidden lg:flex justify-center md:justify-start">
            <a href="#">
              <img
                src="./logo-vinoti.png"
                alt="Vinoti Living Logo"
                className="w-[200px] h-[33px] bg-cover bg-center bg-no-repeat"
              />
            </a>
          </div>

          {/* Menu for larger screens */}
          <div className="hidden lg:flex">
            <NavLinks isMobile={false} />
          </div>

          {/* Shopping cart for larger screens */}
          <div className="hidden md:block">
            <ShoppingCart />
          </div>
        </div>
      </nav>

      {/* Drawer */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleDrawer} // Close drawer when clicking outside
      ></div>

      <div
        className={`fixed z-50 left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <img
            src="./logo-vinoti.png"
            alt="Vinoti Living Logo"
            className="w-[200px] h-[33px] bg-cover bg-center bg-no-repeat"
          />
          <button onClick={toggleDrawer} className="text-gray-700">
            <Icon iconClass="fas fa-times" />
          </button>
        </div>
        {/* Use NavLinks for the drawer as well */}
        <NavLinks isMobile={true} />
      </div>
    </>
  );
};

export default NavbarSection;
