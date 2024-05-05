import { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../auth/AuthProvider";

function SocialLogin() {
  // after login navigate
  const navigate = useNavigate();
  // auth context data
  const { signInWithGoogle, signInWithFacebook } = useContext(AuthContext);

  // handle user login google
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Successfully logged in.");
        navigate("/");
      })
      .catch(() => {
        toast.error("An error occurred!");
      });
  };

  // handle user login facebook
  const handleFacebookLogin = () => {
    signInWithFacebook()
      .then(() => {
        toast.success("Successfully logged in.");
        navigate("/");
      })
      .catch(() => {
        toast.error("An error occurred!");
      });
  };

  // handle user login github
  // const handleGithubLogin = () => {
  //   signInWithGithub()
  //     .then(() => {
  //       toast.success("Successfully logged in.");
  //       navigate("/");
  //     })
  //     .catch(() => {
  //       toast.error("An error occurred!");
  //     });
  // };
  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={handleGoogleLogin}
        className="p-3 bg-orange-500/50 rounded-full text-orange-900 hover:shadow hover:ring-1 dark:text-white hover:ring-orange-500 hover:bg-orange-500 hover:text-white"
      >
        <FaGoogle className="size-5"></FaGoogle>
      </button>
      {/* <button
        onClick={handleGithubLogin}
        className="p-3 bg-orange-500/50 rounded-full text-orange-900 hover:shadow hover:ring-1 hover:ring-orange-500 hover:bg-orange-500 hover:text-white"
      >
        <FaGithub className="size-5"></FaGithub>
      </button> */}
      <button
        onClick={handleFacebookLogin}
        className="p-3 bg-orange-500/50 rounded-full text-orange-900 hover:shadow hover:ring-1 dark:text-white hover:ring-orange-500 hover:bg-orange-500 hover:text-white"
      >
        <FaFacebook className="size-5"></FaFacebook>
      </button>
    </div>
  );
}

export default SocialLogin;
