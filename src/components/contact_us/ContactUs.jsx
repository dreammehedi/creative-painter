import { FaPhone } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { MdDateRange } from "react-icons/md";
import SectionTitle from "../section/SectionTitle";

function ContactUs() {
  return (
    <section className="dark:text-white dark:bg-black">
      {/* service title */}
      <SectionTitle title="Contact Us"></SectionTitle>
      <div className="container">
        <div className="py-4 md:py-6 lg:py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <div className="border-b lg:!border-r border-orange-500/50 md:!border-b-0 p-4 md:p-6 flex flex-col space-y-3 justify-center items-center text-center">
            <FiSend className="text-orange-900 dark:text-white size-12"></FiSend>
            <h3 className="text-orange-500 font-semibold text-2xl md:text-3xl">
              Email
            </h3>
            <p className="text-orange-900">designermehedihassan@gmail.com</p>
          </div>
          <div className="border-b lg:!border-r border-orange-500/50  md:!border-b-0 p-4 md:p-6 flex flex-col space-y-3 justify-center items-center text-center">
            <FaPhone className="text-orange-900 dark:text-white size-12"></FaPhone>
            <h3 className="text-orange-500 dark:text-white font-semibold text-2xl md:text-3xl">
              Call Us
            </h3>
            <p className="text-orange-900 dark:text-white">(+880) 1783238465</p>
          </div>
          <div className="p-4 md:p-6 flex flex-col space-y-3 justify-center items-center text-center">
            <MdDateRange className="text-orange-900 dark:text-white size-12"></MdDateRange>
            <h3 className="text-orange-500 font-semibold text-2xl md:text-3xl">
              Working Hours
            </h3>
            <p className="text-orange-900 dark:text-white">10:00 - 18:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
