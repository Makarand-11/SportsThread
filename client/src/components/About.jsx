const About = () => {
  return (
    <section id="about" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-700 mb-4">
          Welcome to SportsThread! We are dedicated to providing the best jerseys for sports enthusiasts. Our collection features high-quality materials and designs that showcase your favorite teams and players. Our mission is to deliver exceptional products and customer service to all our clients.
        </p>
        <p className="text-gray-700 mb-4">
          Our team is passionate about sports and fashion, ensuring that every piece we offer meets our high standards. Thank you for choosing SportsThread, and we hope you enjoy exploring our collection!
        </p>
        {/* Optional: Add a Team Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Meet the Team</h3>
          <p className="text-gray-700">
            Our team consists of dedicated professionals who are passionate about sports and fashion. We strive to bring you the best products and experiences.
          </p>
        </div>
        {/* Optional: Add a Call-to-Action */}
        <div className="mt-8 text-center">
          <a href="#contact" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
