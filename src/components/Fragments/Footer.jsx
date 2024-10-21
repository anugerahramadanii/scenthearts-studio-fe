const FooterSection = () => {
  return (
    <footer className="bg-slate-800 text-white px-2 lg:px-10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between space-x-4">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p className="text-sm">
              We are a team of passionate individuals with a shared goal: to
              make your life easier.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p className="text-sm">123 Main Street, Anytown, USA</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: 9oFb6@example.com</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-2">Social Media</h3>
            <p className="text-sm">Follow us on social media:</p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-slate-300 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-slate-300 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-800 text-center py-4">
        © 2024 Vinoti Living. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
