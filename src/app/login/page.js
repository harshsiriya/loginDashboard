
import React from 'react'
import Image from 'next/image';
import logo from "../images/logo.jpg"

const Page = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className=' bg-white w-[50%] h-[100%] flex flex-col items-center justify-center'>
        <div className='bg-[#1C7C54] w-[100%] h-[100%] flex flex-col items-center pt-[15%] rounded-tr-[40%] rounded-bl-[40%]'>
          <Image src={logo} alt='logo' width={100} height={100} className="rounded-[50%] shadow-lg" />
          <h3 className='text-white'>CompanyName</h3>
          <h1 className='text-white text-6xl pt-[10px] font-bold'>Welcome Back !</h1>
          <p className='text-white text-justify tracking-tight font-thin text-3xl p-[5px] mt-[30px]'>To stay Connected with us </p>
          <p className='text-white text-justify tracking-tight font-thin text-3xl '>Please login with your personal information</p>
          <button className='w-[350px] text-white font-lg text-2xl mt-[15%] px-4 py-2 rounded-lg border hover:bg-[#3A8D6E]'>Sign In</button>
        </div>
      </div>
      <div className='bg-[#1C7C54] w-[50%] h-[100%] flex flex-col items-center justify-center'>
        <div className='bg-white w-full h-[100%] rounded-tr-[40%] pt-[15%] '>
          <h1 className='text-[#1C7C54] text-5xl font-bold text-center'>Welcome</h1>
          <p className='text-center'>Login to your account to Continue</p>
          <form className='text-center flex flex-col items-center'>
            <div className='bg-[#EAF5EF] p-[10px] rounded-xl mt-[10%] w-[85%] focus:border-none '>
              <input type='text' name='email' placeholder='EMAIL . . . .' className='focus:outline-none'/>
            </div>
            <div className='bg-[#EAF5EF] p-[10px] rounded-xl mt-[5%] w-[85%] focus:border-none'>
              <input type='password' name='password' placeholder='PASSWORD . . . .' className='focus:outline-none'/>
            </div>
            <a href='' className='font-xl'>Forget your Password ?</a>

            <button type="submit" className=" w-[70%] mt-[15%] rounded-lg bg-[#3A8D6E] px-3 py-2 text-lg font-semibold text-white shadow-xs hover:bg-[#5B9F86]">Log In</button>
            <p className="text-center text-sm text-gray-600 mt-4">
              Don’t have an account?{' '}
              <span className="text-[#1C7C54] font-medium hover:underline cursor-pointer">
                sign up
              </span>

            </p>


          </form>


        </div>
      </div>
    </div>
  )
}

export default Page