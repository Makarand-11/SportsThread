import Hero from '../components/Hero.jsx';
import ProductList from '../components/ProductList.jsx';
import About from '../components/About.jsx'; 
import Contact from '../components/Contact.jsx'; 

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Static sections: Hero and ProductList */}
      <div className="static-sections">
        <Hero />
        <ProductList />
      </div>

      {/* Scrollable sections: About and Contact */}
      <div className="scrollable-sections">
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
