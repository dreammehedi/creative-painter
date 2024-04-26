import Button from "../button/Button";

function ServiceItem() {
  return (
    <div className="flex justify-center items-center space-y-3 flex-col text-center p-6 rounded-md hover:shadow-md group cursor-pointer">
      <img
        className="group-hover:scale-[1.02] transition-all duration-300 ease-linear rounded-md object-cover w-full h-[300px]"
        src="https://image3.jdomni.in/banner/21122017/71/39/F9/D8A9C95B1E4E52531A3D504CE6_1513855596676.jpg?output-format=webp"
        alt=""
      />
      <h2 className="font-dancing-script text-3xl font-bold group-hover:text-orange-500 transition-all duration-300 ease-linear">
        Services Basic Painting
      </h2>
      <p className="text-gray-400">
        Services Basic Painting Kids from junior kg to third standard fall in
        this category of simple painting and they start of learning to draw. We
        teach them basic drawing lines and we make kids drawing roots strong.
      </p>
      <Button
        name={"View Detailes"}
        cls={"text-white group-hover:scale-[1.02]"}
      ></Button>
    </div>
  );
}

export default ServiceItem;
