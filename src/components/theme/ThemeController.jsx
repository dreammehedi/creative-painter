import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";

function ThemeController() {
  // theme
  const [theme, setTheme] = useState("light");

  // toggle theme icon
  const [toggleThemeIcon, setToggleThemeIcon] = useState(true);

  // handle theme
  const handleTheme = () => {
    setToggleThemeIcon(!toggleThemeIcon);
    setTheme(theme === "dark" ? "light" : "dark");
  };
  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      onClick={handleTheme}
      className="text-2xl font-bold transition-all duration-300 ease-linear hover:text-orange-500"
    >
      {toggleThemeIcon ? (
        <MdOutlineDarkMode></MdOutlineDarkMode>
      ) : (
        <CiLight></CiLight>
      )}
    </button>
  );
}

export default ThemeController;
