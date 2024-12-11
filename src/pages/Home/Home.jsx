import banglaBanner from "../../assets/banner.png";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banglaBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        color: 'white',
        zIndex: '0',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: '1',
        }}
      />

      <div
        style={{
          color: 'white',
          zIndex: '2',
          textAlign: 'center',
		  marginLeft: '10%',
		  marginRight: '10%',
          padding: '0 2rem',
        }}
      >
        <h1
          style={{
            fontSize: '5rem',
            fontWeight: 'bold',
			lineHeight: '1.4',
            letterSpacing: '0.01em',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            marginBottom: '1rem',
          }}
        >
          Bangla AI Research, Technologies and Applications (BARTA)
        </h1>

        <p
          style={{
            fontSize: '1.8rem',
            fontWeight: 'normal',
            lineHeight: '1.2',
            maxWidth: '60rem',
            margin: '0 auto',
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.4)',
          }}
        >
          Hello! We are a group of enthusiastic people wanting to solve the many problems around Bangla Natural Language Processing.
          We extensively focus on social inclusion and accessibility for universalism of human values.
        </p>
      </div>
    </div>
  );
};

export default Home;
