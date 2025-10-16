import React, { useState } from "react";
import CommonHead from "../components/Common/CommonHead";
import axios from "axios";

const Register = () => {


  const ragex = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    pass: /^.{6,}$/
  }


  const [formdata, setFormData] = useState({
    email: null,
    password: null,
    role: "ADMIN",
    username: 'hahaha',
    confrimPassword: null,
  });

  console.log(formdata)


  const [allError, setAllError] = useState({
    emailError: "border-gray-300",
    // nameError: "border-border",
    passwordError: "border-border",
    confirmPasswordError: "border-border",
  });


  const handleRegister = (e)=>{
    e.preventDefault();

    if(!ragex.email.test(formdata.email)|| !formdata.email){
      setAllError((prev) => ({ ...prev, emailError: "border-red-500" }));
    }
    if(!ragex.pass.test(formdata.password)|| !formdata.password){
      setAllError((prev) => ({ ...prev, passwordError: "border-red-500" }));
    }
    if(formdata.password !== formdata.confrimPassword || !formdata.confrimPassword){
      return setAllError((prev) => ({
        ...prev,
        confirmPasswordError: "border-red-500",
      }));
    }

    axios.post(`https://api.freeapi.app/api/v1/users/register`,{
    email: formdata.email,
    password: formdata.password,
    role: "ADMIN",
    username: formdata.email.slice(0,4),
    confrimPassword: null,
  },
  {headers: {accept: 'application/json', 'content-type': 'application/json'},})
  .then((res)=>{console.log(res)})
  .catch((err)=>{console.log(err)})


  }





  return (
    <>
      <section className="flex items-center justify-center mt-10 mb-18">
        <div>

        <div className="text-center mb-15">
          <CommonHead text1={"Register"} />
        </div>

        <div>
            <form onSubmit={handleRegister} className="flex flex-col gap-6" action="">
                <div>
                    <label className="text-base text-black font-popppind font-semibold mb-2">Email</label>
                    <div className={`w-[440px] h-11 border ${allError.emailError} flex items-center rounded-[12px]`}>
                        <input onChange={(e)=>{setFormData((prev)=>({...prev, email: e.target.value,}))}} className="text-base text-black font-popppind font-normal border-none outline-none ml-4" type="email" />
                    </div>
                </div>

                <div>
                    <label className="text-base text-black font-popppind font-semibold mb-2">Password</label>
                    <div className={`w-[440px] h-11 border ${allError.passwordError} flex items-center rounded-[12px]`}>
                        <input onChange={(e)=>{setFormData((prev)=>({...prev, password: e.target.value,}))}} className="text-base text-black font-popppind font-normal border-none outline-none ml-4" type="password" />
                    </div>
                </div>

                <div>
                    <label className="text-base text-black font-popppind font-semibold mb-2">Password (Again)</label>
                    <div className={`w-[440px] h-11 border ${allError.confirmPasswordError} flex items-center rounded-[12px]`}>
                        <input onChange={(e)=>{setFormData((prev)=>({...prev, confrimPassword: e.target.value,}))}} className="text-base text-black font-popppind font-normal border-none outline-none ml-4" type="password" />
                    </div>
                </div>

                <button className="w-[440px] h-13 rounded-[9999px] bg-black text-base text-white font-medium font-popppind">Continue</button>
            </form>
        </div>
        </div>
      </section>
    </>
  );
};

export default Register;
