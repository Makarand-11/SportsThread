const Footer = () => {
    return (
      <footer className="bg-gray-900 shadow-md text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} SportsThread. All rights reserved.
          </p>
          <div className="mt-4">
            <a href="#about" className="text-blue-400 hover:underline mx-2">About Us</a>
            <a href="#contact" className="text-blue-400 hover:underline mx-2">Contact</a>
            {/* Optional: Add social media links */}
            <div className="mt-4">
              <a href="https://twitter.com" className="text-blue-400 mx-2" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="https://facebook.com" className="text-blue-400 mx-2" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  