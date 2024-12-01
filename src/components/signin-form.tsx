"use client";

import Image from "next/image";
import SignInPic from "../../public/signin.png";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = () => {
    console.log(username, password);
  };

  return (
    <div className="flex flex-col md:flex-row-reverse h-screen">
      <div className="flex justify-center items-center flex-1 bg-green-300 rounded-b-[36px] md:rounded-r-none md:rounded-l-[36px] z-10">
        <Image src={SignInPic} alt="Signin" />
      </div>
      <div className="flex justify-center items-center flex-1 bg-green-500 -mt-9 md:-mr-9 ">
        <div className="flex flex-col gap-5 w-1/2">
          <h4 className="text-3xl font-semibold text-white mb-5">Sign In</h4>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button onClick={onSignIn}>Sign In</Button>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
