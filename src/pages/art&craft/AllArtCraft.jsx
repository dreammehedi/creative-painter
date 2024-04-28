import { Link, useLoaderData, useLocation } from "react-router-dom";
import Button from "../../components/button/Button";
import SlugBanner from "../../components/slug_banner/SlugBanner";
function AllArtCraft() {
  // find path
  const { pathname } = useLocation();

  // all art & craft data get
  const allArtCraftData = useLoaderData();
  return (
    <>
      <SlugBanner path={pathname}></SlugBanner>

      {/* all art & craft */}
      <section className="my-4 md:my-6 lg:my-8">
        <div className="container ring ring-orange-500 py-6 rounded-md overflow-x-auto">
          {/* art & craft table */}
          <table className="w-full divide-y divide-orange-900  ">
            <thead className="bg-gray-50 font-poppins ">
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
              {allArtCraftData.map((artCraftData, ind) => {
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
                      ind % 2 === 0 ? "bg-orange-50" : "bg-orange-100/70"
                    }`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">{ind + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={itemImage}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {subCategoryName}
                          </div>
                          <div className="text-sm text-gray-500">
                            {itemName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 text-wrap break-words">
                        {shortDescription.slice(0, 30)}
                        {"..."}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-900/50 text-white ${
                          stockStatus === "In stock"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      >
                        {stockStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {"$"}
                      {price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
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
