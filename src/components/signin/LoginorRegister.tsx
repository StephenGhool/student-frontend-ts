import axios from "axios";
import { useState } from "react";

export interface logindata {
  email: string;
  password: string;
}

export function LoginOrRegister({ userdata }: { userdata: logindata }) {
  const [error, seterror] = useState("");

  const login = async (e: any) => {
    const API_URL = "http://localhost:8080/api/auth";
    try {
      const { data: response } = await axios.post(API_URL, userdata);
      localStorage.setItem("token", response.data);
      window.location.href = "/";
    } catch (err: any) {
      console.log(err);
      if (
        err.response &&
        err.response.status >= 400 &&
        err.response.status <= 500
      ) {
        seterror(err.response.data.message);
      }
    }
  };

  return (
    <div className="text-center lg:text-left">
      <button
        onClick={login}
        type="button"
        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Login
      </button>
      <div className="pt-6">
        {error && (
          <div className="inline-block bg-orange-600 text-white rounded-lg py-2 p-6">
            {error}
          </div>
        )}
      </div>
      <p className="text-sm font-semibold mt-2 pt-1 mb-0">
        Don't have an account?
        <a
          href="register"
          className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
        >
          Register
        </a>
      </p>
    </div>
  );
}
