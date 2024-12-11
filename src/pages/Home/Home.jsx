import banglaBanner from "../../assets/banner.png";

const Home = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: `url(${banglaBanner})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 text-white px-4 md:px-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-snug">
          Bangla AI Research, Technologies and Applications (BARTA)
        </h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Hello! We are a group of enthusiastic people wanting to solve the many problems around Bangla Natural Language Processing. 
          We extensively focus on social inclusion and accessibility for universalism of human values.
        </p>
      </div>
    </div>
  );
};

export default Home;
