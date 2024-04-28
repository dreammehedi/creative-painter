import ArtCraftCategory from "../../components/art_craft_category/ArtCraftCategory";
import Banner from "../../components/banner/Banner";
import Craft from "../../components/craft/Craft";

function Home() {
  return (
    <>
      <section>
        <Banner></Banner>
        <Craft></Craft>
        {/* <Service></Service> */}
        <ArtCraftCategory></ArtCraftCategory>
      </section>
    </>
  );
}

export default Home;
