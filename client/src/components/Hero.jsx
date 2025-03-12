import bgimg from '../assets/bg-img.jpg'; 

const Hero = () => {
  return (
    <section 
      className="relative bg-cover bg-center h-[500px] text-white"
      style={{ backgroundImage: `url(${bgimg})` }} 
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-start space-y-4">
        <h1 className="text-4xl lg:text-6xl font-bold text-black">
          Your Headline Here
        </h1>
        <p className="text-xl lg:text-2xl text-black">
          Your subheadline here. Inspire your customers.
        </p>
        <a 
          href="/shop" 
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
