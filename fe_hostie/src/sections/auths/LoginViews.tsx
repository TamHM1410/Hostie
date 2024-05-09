"use client";
import { useWindowSize } from "react-use";
import LoginForm from "./loginForm";
import Image from "next/image";
import bg from "../../assets/auths/auth.jpeg";

const LoginView = (props: any) => {
  const { width } = useWindowSize();

  return (
    <>
      {" "}
      {width < 1024 ? (
        <div className='flex flex-col w-screen min-h-screen items-center'>
          <div className='w-full h-full relative top-20'>
            <LoginForm />
          </div>
        </div>
      ) : (
        <div className='flex flex-row w-screen min-h-screen '>
          <div className='w-1/2 flex  ' style={{ alignItems: "center" }}>
            <LoginForm />
          </div>
          <div className='w-1/2 min-h-screen   flex items-center  mr-5 '>
            <Image
              style={{ borderRadius: 20, marginLeft: 5 }}
              className='hover:cursor-pointer hover:w-[1000px] shadow-3xl	'
              width={900}
              height={900}
              alt=''
              src={bg}
            />
          </div>
        </div>
      )}
    </>
  );
};
export default LoginView;
