import { LoginOrRegister } from "./LoginorRegister";
import { useState } from "react";

export function SignInForm() {
  const [logindata, setlogindata] = useState({
    email: "",
    password: "",
  });

  const handleInput = ({ currentTarget: input }) => {
    setlogindata({ ...logindata, [input.id]: input.value });
    console.log(logindata);
  };

  return (
    <div className="mx-auto">
      <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
        <p className="text-center font-semibold mx-4 mb-0">Or</p>
      </div>
      {/* Email Input */}
      <div className="mb-6">
        <input
          type="text"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="email"
          placeholder="Email address"
          value={logindata.email}
          onChange={handleInput}
        />
      </div>

      {/* Password Input */}
      <div className="mb-6">
        <input
          type="password"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="password"
          placeholder="Password"
          value={logindata.password}
          onChange={handleInput}
        />
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            id="exampleCheck2"
          />
          <label className="form-check-label inline-block text-gray-800">
            Remember me
          </label>
        </div>
        <a href="#!" className="text-gray-800">
          Forgot password?
        </a>
      </div>
      <LoginOrRegister userdata={logindata} />
    </div>
  );
}
