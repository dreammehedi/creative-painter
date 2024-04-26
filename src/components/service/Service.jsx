import { Link } from "react-router-dom";
import Button from "../button/Button";
import SectionTitle from "../section/SectionTitle";
import ServiceItem from "./ServiceItem";

function Service() {
  return (
    <section className="my-4 md:my-6 lg:my-8">
      <div className="container">
        {/* service title */}
        <SectionTitle title="Our Services"></SectionTitle>

        {/* service items */}
        <div className="grid grid-cols-3 justify-between gap-4 md:gap-6">
          <ServiceItem></ServiceItem> <ServiceItem></ServiceItem>
          <ServiceItem></ServiceItem> <ServiceItem></ServiceItem>
        </div>
        <div className="mt-4 md:mt-6 lg:my-8 mx-auto flex justify-center">
          <Link to={"/add-craft"}>
            <Button
              name={"Add New Craft"}
              cls={"!bg-orange-500 text-white hover:!bg-orange-900"}
            ></Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Service;
