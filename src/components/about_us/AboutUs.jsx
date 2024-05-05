import aboutImage from "../../assets/about-us.jpg";
import SectionTitle from "../section/SectionTitle";

function AboutUs() {
  return (
    <>
      <section className="dark:bg-black dark:text-white">
        {/* service title */}
        <SectionTitle title="About Us"></SectionTitle>
        <div className="container">
          <div className="py-4 pd:my-6 lg:py-8 space-y-4 flex-col flex justify-center items-center text-center">
            <img
              className="w-full rounded-md h-[400px] md:max-w-3xl md:mx-auto object-cover"
              src={aboutImage}
              alt="About Image"
            />
            <p className="md:max-w-4xl text-slate-600 dark:text-slate-300 font-medium">
              {` Welcome to Creative Painter, where creativity finds its canvas! We are a
              passionate community of artists, enthusiasts, and learners
              dedicated to the timeless craft of painting and drawing. At 3P
              Art, we believe in the power of art to inspire, to evoke emotions,
              and to transform the ordinary into the extraordinary. Whether
              you're a seasoned artist honing your skills or a beginner taking
              your first steps into the world of art, we're here to support and
              encourage you on your creative journey.`}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
