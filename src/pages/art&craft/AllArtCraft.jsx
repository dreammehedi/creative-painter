import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import errorImage from "../../assets/error-img.jpg";
import Button from "../../components/button/Button";
import Loader from "../../components/loader/Loader";
import SectionTitle from "../../components/section/SectionTitle";
import SlugBanner from "../../components/slug_banner/SlugBanner";

function AllArtCraft() {
  // find path
  const { pathname } = useLocation();
  // loading state
  const [loading, setLoading] = useState(true);

  // all art craft data
  const [artCraftData, setArtCraftData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://server-sand-two.vercel.app/crafts"
        );
        const data = await response.json();
        setArtCraftData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <>
      <Helmet>
        <title>Creative Painter | All Art Craft</title>
      </Helmet>
      <SlugBanner path={pathname}></SlugBanner>

      <SectionTitle title="All Art Craft Data"></SectionTitle>
      {/* all art & craft */}
      <section className="py-4 md:py-6 lg:py-8 dark:bg-black dark:text-white">
        <div className="container ring ring-orange-500 py-6 rounded-md overflow-x-auto">
          {/* art & craft table */}
          <table className="w-full divide-y divide-orange-900 dark:divide-gray-600  ">
            <thead className="bg-gray-50 dark:bg-gray-800 font-poppins ">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider"
                >
                  Id
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider"
                >
                  Image & Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider"
                >
                  Short Description
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider"
                >
                  Stock Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="ivide-y divide-orange-300">
              {artCraftData.map((artCraftData, ind) => {
                const {
                  _id,
                  itemImage,
                  itemName,
                  subCategoryName,
                  shortDescription,
                  price,
                  stockStatus,
                  email,
                } = artCraftData;
                return (
                  <tr
                    key={_id}
                    className={`group ${
                      ind % 2 === 0
                        ? "bg-orange-50 dark:bg-orange-950 dark:text-white"
                        : "bg-orange-100/70 dark:bg-orange-950/70"
                    }`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">{ind + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={
                              itemImage.startsWith("http")
                                ? itemImage
                                : errorImage
                            }
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {subCategoryName}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-white">
                            {itemName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white text-wrap break-words">
                        {shortDescription.slice(0, 30)}
                        {"..."}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-900/50 text-white ${
                          stockStatus === "In Stock"
                            ? "bg-green-500 dark:bg-green-950"
                            : "bg-red-500 dark:bg-red-500"
                        }`}
                      >
                        {stockStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-white">
                      {price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-white">
                      {email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                      <Link to={`/art-craft-detailes/${_id}`}>
                        <Button
                          name="View Detailes"
                          cls={"!text-white group-hover:!bg-orange-500"}
                        ></Button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default AllArtCraft;
