"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { Divider, Input } from "@nextui-org/react";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import GoogleProvider from "@/components/AuthProvider/GoogleProvider";
const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const onLogin = async (e) => {
    // e.preventDefault();

    console.log(e);
    try {
      toast.loading("loading");
      const result = await signIn("credentials", {
        email: e.email,
        password: e.password,
        redirect: false,
      });
      //console.log(result);
      toast.dismiss();
      if (!result.ok) {
        toast.success(result.error);
        //console.log(result.error);
      } else {
        toast.success("user logged in successfully");
        router.push("/targets");
      }
     } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
<Toaster />
    <div className="h-full flex items-center justify-center flex-col gap-3 lg:w-[60%] w-full m-3">
      <h2 className=" font-bold  font-Barlow text-3xl">Welcome Back 👋</h2>
      <h3 className=" font-normal  font-Barlow text-lg ">
        Today is a new day. It's your day. You shape it. Sign in to start
        managing your projects.
      </h3>
        <div className=" w-full h-full flex pt-5 justify-start items-center flex-col ">
          <form
            id="dataForm"
            onSubmit={handleSubmit(onLogin)}
            className="w-full items-center flex flex-col"
          >
            <div key={"email"} className="w-full mb-full p-3">
              <Input
                type="email"
                name="Email"
                placeholder="Enter a email"
                // onChange={(e)=>setuser({...user,email:e.target.value})}
                // defaultValue={user.email}
                {...register("email", {
                  required: " *This is required.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Enter a valid email",
                  },
                })}
                label="Email"
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => (
                  <div className=" text-red-500 text-sm">{message}</div>
                )}
              />
            </div>
            <div key={"password"} className=" w-full mb-full p-3">
              <Input
                type="password"
                name="password"
                placeholder="Enter 6 character password"
                {...register("password", {
                  required: " *This is required.",
                  minLength: {
                    value: 6,
                    message: "Enter more than 6 charecters",
                  },
                })}
                label="Password"
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => (
                  <div className=" text-red-500 text-sm">{message}</div>
                )}
              />
            </div>
            <Button
              size="lg"
              variant="ghost"
              className=" w-full bg-slate-800 text-slate-50 "
              type="submit"
            >
              Sign In
            </Button>
          </form>
          <div className=" flex flex-row  gap-3 items-center justify-center">
<Divider className=" text-black w-24" />
          <div className=" text-slate-400"> or </div>
<Divider className=" text-black w-24"/>
          </div>
          <GoogleProvider />
        </div>

        <div className=" flex flex-row gap-2">
        <div className=" text-sm text-slate-500 ">Don't you have an account? </div>
          <Link href="/" className=" text-sm text-blue-500 " >Register</Link>
        </div>
    </div>
    </>
    
  );
};

export default LoginForm;
