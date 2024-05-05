import Lottie from "lottie-react";
import groovyWalkAnimation from "./groovyWalk.json";
function Loader() {
  return (
    <Lottie
      className="w-full h-[400px] dark:bg-black"
      animationData={groovyWalkAnimation}
    />
  );
}

export default Loader;
