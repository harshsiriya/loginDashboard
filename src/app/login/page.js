'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../images/logo.jpg';
import { postUserDetails } from '../hooks/postUserDetails';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';

const Page = () => {
  const navigation = useRouter();

  const [userData, setUserData] = useState({
    userid: '',
    password: '',
    otp: '',
  });

  const [showOtp, setShowOtp] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validation = () => {
    if (userData.userid === '') {
      alert('Please Enter Email');
      return false;
    }
    if (userData.password === '') {
      alert('Please Enter Password');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      const obj = {
        userid: userData.userid,
        password: userData.password,
      };
      try {
        const res = await postUserDetails('http://localhost:3000/api/login', obj);
        if (res.result === true) {
          setShowOtp(false);
        } else {
          alert('Login failed');
        }
      } catch (err) {
        console.error('Login Error:', err);
        alert('Something went wrong during login.');
      }
    }
  };

  const handleOtpClick = async () => {
    const obj = {
      userid: userData.userid,
      otp: userData.otp,
    };

    try {
      const res = await postUserDetails('http://localhost:3000/api/login/otp', obj);
      if (res.result === true && res.token) {
        setCookie('token', res.token, {
          maxAge: 60 * 60 * 24, // 1 day
          path: '/',
        });
        navigation.push('./dashboard');
      } else {
        alert('Invalid OTP or login failed');
      }
    } catch (err) {
      console.error('OTP Error:', err);
      alert('Something went wrong while submitting OTP.');
    }
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='bg-white w-[50%] h-full flex flex-col items-center justify-center'>
        <div className='bg-[#1C7C54] w-full h-full flex flex-col items-center pt-[15%] rounded-tr-[40%] rounded-bl-[40%]'>
          <Image src={logo} alt='logo' width={100} height={100} className='rounded-[50%] shadow-lg' />
          <h3 className='text-white'>CompanyName</h3>
          <h1 className='text-white text-6xl pt-2 font-bold'>Welcome Back!</h1>
          <p className='text-white text-3xl font-thin mt-8'>To stay connected with us</p>
          <p className='text-white text-3xl font-thin'>please login with your personal information</p>
          <button className='w-[350px] text-white text-2xl mt-16 px-4 py-2 rounded-lg border hover:bg-[#3A8D6E]'>
            Sign In
          </button>
        </div>
      </div>

      <div className='bg-[#1C7C54] w-[50%] h-full flex flex-col items-center justify-center'>
        <div className='bg-white w-full h-full rounded-tr-[40%] pt-[15%]'>
          <h1 className='text-[#1C7C54] text-5xl font-bold text-center'>Welcome</h1>
          <p className='text-center'>Login to your account to continue</p>
          <form className='text-center flex flex-col items-center' onSubmit={handleSubmit}>
            <div className='bg-[#EAF5EF] p-3 rounded-xl mt-10 w-[85%]'>
              <input
                type='text'
                name='userid'
                placeholder='EMAIL . . . .'
                className='focus:outline-none w-full bg-transparent'
                value={userData.userid}
                onChange={handleChange}
                disabled={!showOtp}
              />
            </div>

            {showOtp ? (
              <div className='bg-[#EAF5EF] p-3 rounded-xl mt-5 w-[85%]'>
                <input
                  type='password'
                  name='password'
                  placeholder='PASSWORD . . . .'
                  className='focus:outline-none w-full bg-transparent'
                  value={userData.password}
                  onChange={handleChange}
                />
              </div>
            ) : (
              <div className='bg-[#EAF5EF] p-3 rounded-xl mt-5 w-[85%]'>
                <input
                  type='number'
                  name='otp'
                  placeholder='OTP . . . .'
                  className='focus:outline-none w-full bg-transparent'
                  value={userData.otp}
                  onChange={handleChange}
                />
              </div>
            )}

            <a href='#' className='text-xl mt-3'>
              Forget your Password?
            </a>

            {showOtp ? (
              <button
                type='submit'
                className='w-[70%] mt-10 rounded-lg bg-[#3A8D6E] px-3 py-2 text-lg font-semibold text-white shadow hover:bg-[#5B9F86]'
              >
                Log In
              </button>
            ) : (
              <button
                type='button'
                onClick={handleOtpClick}
                className='w-[70%] mt-10 rounded-lg bg-[#3A8D6E] px-3 py-2 text-lg font-semibold text-white shadow hover:bg-[#5B9F86]'
              >
                Submit OTP
              </button>
            )}

            <p className='text-center text-sm text-gray-600 mt-4'>
              Don’t have an account?{' '}
              <span className='text-[#1C7C54] font-medium hover:underline cursor-pointer'>sign up</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
