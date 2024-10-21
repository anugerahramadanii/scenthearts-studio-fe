import { Link } from "react-router-dom";
import Icon from "../Elements/Icon/Icon";

const HeaderSection = () => {
  return (
    <header className="bg-gray-100 py-2 px-6 lg:px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center ">
        {/* Bagian Atas untuk Teks Free Shipping */}
        <div className="w-full overflow-hidden font-semibold mx-2 mb-2 md:mb-0 animate-bounce">
          <div className="marquee-text w-full">
            Free Shipping for all Order of $99
          </div>
        </div>

        {/* Bagian Bawah untuk Ikon Sosial Media dan Login */}
        <div className="flex items-center justify-end space-x-4">
          <Icon iconClass="fab fa-facebook-f" />
          <Icon iconClass="fab fa-twitter" />
          <Icon iconClass="fab fa-linkedin-in" />
          <Icon iconClass="fab fa-pinterest-p" />
          <div className="border-l-2 border-black h-6"></div>
          <div className="relative group">
            <div className="flex items-center space-x-2 cursor-pointer">
              <Link to="/login" className="flex items-center gap-2">
                <span className="whitespace-nowrap ">Anugerah Ramadani</span>
                <Icon iconClass="fas fa-user" />
              </Link>
            </div>
            <div className="absolute w-40 right-0 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50">
              <ul className="py-2 w-full">
                <li className="px-4 py-2 text-sm bg-white hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 text-sm bg-white hover:bg-gray-100 cursor-pointer">
                  Settings
                </li>
                <li className="px-4 py-2 text-sm bg-white hover:bg-gray-100 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
