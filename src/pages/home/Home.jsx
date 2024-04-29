import AboutUs from "../../components/about_us/AboutUs";
import ArtCraftCategory from "../../components/art_craft_category/ArtCraftCategory";
import Banner from "../../components/banner/Banner";
import ContactUs from "../../components/contact_us/ContactUs";
import Craft from "../../components/craft/Craft";
import Gallery from "../../components/gallery/Gallery";

function Home() {
  return (
    <>
      <section>
        <Banner></Banner>
        <Craft></Craft>
        {/* <Service></Service> */}
        <ArtCraftCategory></ArtCraftCategory>
        <AboutUs></AboutUs>
        <Gallery></Gallery>
        <ContactUs></ContactUs>
      </section>
    </>
  );
}

export default Home;
