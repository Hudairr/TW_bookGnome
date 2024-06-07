import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from "react-hot-toast";
function Signup() {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit =async (data) => {
        const userInfo={
        fullname:data.fullname,
        email:data.email,
        password:data.password
      }
      await axios.post("https://tw-book-gnome.vercel.app/user/signup", userInfo)
      .then((res)=>{
        console.log(res.data)
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
      localStorage.setItem("Users", JSON.stringify(res.data.user));
      }).catch((err)=>{
       if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
       }
      });
    };

    return (
      <>
        <div className="flex h-screen items-center justify-center dark:bg-slate-800 dark:text-white">
          <div className="w-[600px]">
            <div className="modal-box dark:bg-slate-900 dark:text-white">
              <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <Link
                  to="/"
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                  ✕
                </Link>
                <h3 className="font-bold text-lg">Login</h3>
                <div className="mt-4 space-y-2">
                  <span>Name</span>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your Full Name"
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                    {...register("fullname", { required: true })}
                  />
                  <br />
                  {errors.fullname && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mt-4 space-y-2">
                  <span>Email</span>
                  <br />
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                    {...register("email", { required: true })}
                  />
                  <br />
                  {errors.email && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mt-4 space-y-2">
                  <span>Password</span>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your Password"
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                    {...register("password", { required: true })}
                  />
                  <br />
                  {errors.password && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="flex justify-around mt-4">
                  <button className="bg-green-500 text-white rounded-md px-3 py-1 hover:bg-green-700 duration-200">
                    Sign Up
                  </button>
                  <p className="text-xl">
                    Have an account?{" "}
                    <button
                      to="/"
                      className="cursor-pointer text-blue-500 underline"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Login Now!
                    </button>{" "}
                    <Login />
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
}

export default Signup
