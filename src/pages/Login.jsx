import React, { useState } from "react";
import CommonHead from "../components/Common/CommonHead";
import axios from "axios";
import { Link } from "react-router";

const Login = () => {
  const [formdata, setFormData] = useState({
    password: null,
    username: null,
  });

  console.log(formdata)


  const [allError, setAllError] = useState({
    usernameError: "border-gray-300",
    passwordError: "border-gray-300",
  });


  const options = {
  method: 'POST',
  url: 'https://api.freeapi.app/api/v1/users/login',
  headers: {accept: 'application/json', 'content-type': 'application/json'},
  data: {password: formdata.password, username: formdata.username}

};





  const handleLogin = async (e) => {
    try{
      e.preventDefault();

    if (!formdata.username) {
      setAllError((prev) => ({ ...prev, usernameError: "border-red-500" }));
    }
    if (!formdata.password) {
      return setAllError((prev) => ({
        ...prev,
        passwordError: "border-red-500",
      }));
    }



    const myData= await axios.request(options);
    console.log(myData)
    }catch(err){
      console.log(err)
    }
  };






  return (
    <>
      <section className="flex items-center justify-center mt-10 mb-18">
        <div>
          <div className="text-center mb-15">
            <CommonHead text1={"Login"} />
          </div>

          <div>
            <form
              onSubmit={handleLogin}
              className="flex flex-col gap-6"
              action=""
            >
              <div>
                <label className="text-base text-black font-popppind font-semibold mb-2">
                  Username
                </label>
                <div
                  className={`w-[440px] h-11 border ${allError.usernameError} flex items-center rounded-[12px]`}
                >
                  <input
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        username: e.target.value,
                      }));
                    }}
                    className="text-base text-black font-popppind font-normal border-none outline-none ml-4"
                    type="text"
                  />
                </div>
              </div>

              <div>
                <label className="text-base text-black font-popppind font-semibold mb-2">
                  Password
                </label>
                <div
                  className={`w-[440px] h-11 border ${allError.passwordError} flex items-center rounded-[12px]`}
                >
                  <input
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }));
                    }}
                    className="text-base text-black font-popppind font-normal border-none outline-none ml-4"
                    type="password"
                  />
                </div>
              </div>

              <button className="w-[440px] h-13 rounded-[9999px] bg-black text-base text-white font-medium font-popppind">
                Continue
              </button>
            </form>
          </div>

          <div className="mt-6 mb-6 flex items-center justify-between w-[440px]">
            <div className="br1 w-[200px] border-b border-border"></div>
            <h2 className="text-sm text-black font-medium font-popppind">OR</h2>
            <div className="br2 w-[200px] border-b border-border"></div>
          </div>

          <div className="mt-6 text-center text-base text-[#4B5563] font-popppind font-normal">
            Dont have an account?{" "}
            <Link
              to={"/Register"}
              className="text-[#0EA5E9] font-medium link-theme"
            >
              Register
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
