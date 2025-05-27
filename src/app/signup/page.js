import React from 'react'
import Image from 'next/image';
import greenCurve from "../images/isometric.png"

function page() {
    return (
        <div className=' bg-[#C6E2D2] h-screen pt-[20%] relative '>
            <Image src={greenCurve} alt='background' fill className='blur-xs object-contain' />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      bg-white/30 backdrop-blur-lg p-10 rounded-xl shadow-xl w-[90%] max-w-md">
                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="FULL NAME"
                        className="bg-[#EAF5EF] p-3 rounded-md focus:outline-none"
                    />
                    <input
                        type="email"
                        placeholder="EMAIL"
                        className="bg-[#EAF5EF] p-3 rounded-md focus:outline-none"
                    />
                    <input
                        type="password"
                        placeholder="PASSWORD"
                        className="bg-[#EAF5EF] p-3 rounded-md focus:outline-none"
                    />
                    <input
                        type="password"
                        placeholder="CONFIRM PASSWORD"
                        className="bg-[#EAF5EF] p-3 rounded-md focus:outline-none"
                    />
                    <label className="text-sm text-gray-700 flex items-center gap-2">
                        <input type="checkbox" className="accent-[#1C7C54]" required />
                        I agree to the <a href="#" className="text-[#1C7C54] underline">Terms and Conditions</a>
                    </label>
                    <button
                        type="submit"
                        className="bg-[#1C7C54] text-white py-2 rounded-md font-semibold hover:opacity-90 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default page
