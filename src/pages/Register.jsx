import React from "react";
import CommonHead from "../components/Common/CommonHead";

const Register = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div>

        <div className="text-center mb-15">
          <CommonHead text1={"Register"} />
        </div>

        <div>
            <form className="flex flex-col gap-6" action="">
                <div>
                    <label className="text-base text-black font-popppind font-semibold mb-2">Email</label>
                    <div className="w-[440px] h-11 border border-border flex items-center rounded-[12px]">
                        <input className="text-base text-black font-popppind font-normal border-none outline-none ml-4" type="text" />
                    </div>
                </div>

                <div>
                    <label className="text-base text-black font-popppind font-semibold mb-2">Password</label>
                    <div className="w-[440px] h-11 border border-border flex items-center rounded-[12px]">
                        <input className="text-base text-black font-popppind font-normal border-none outline-none ml-4" type="password" />
                    </div>
                </div>

                <div>
                    <label className="text-base text-black font-popppind font-semibold mb-2">Password (Again)</label>
                    <div className="w-[440px] h-11 border border-border flex items-center rounded-[12px]">
                        <input className="text-base text-black font-popppind font-normal border-none outline-none ml-4" type="password" />
                    </div>
                </div>

                <button className="w-[440px] h-13 rounded-[9999px] bg-black text-base text-white font-medium font-popppind">Continue</button>
            </form>
        </div>
        </div>
      </div>
    </>
  );
};

export default Register;
