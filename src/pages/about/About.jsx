import { Helmet } from "react-helmet-async";

function About() {
  return (
    <>
      <Helmet>
        <title>Creative Painter | About</title>
      </Helmet>
      <h1 className="text-center text-orange-500 text-2xl md:text-3xl my-6 font-bold">
        About
      </h1>
    </>
  );
}

export default About;
