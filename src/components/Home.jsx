import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
function Home() {
  return (
    <>
    <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
        <span className='text-xl'>Welcome In My Feed</span>
        <div className='flex space-x-1 text-2xl md:text-4xl'>
            <h1>Hello,I'm a</h1>
            {/* <span className='text-red-700 font-bold'>Devloper</span> */}
            <ReactTyped
            className='text-blue-700 font-bold'
      strings={[
        "Devloper",
        "Pogrammer",
        "Coder",
      ]}
      typeSpeed={40}
      backSpeed={50}
      attr="placeholder"
      loop="true"
    >
      <input type="text" />
    </ReactTyped>
        </div>
        <br/>
        <p className='text-sm md:text-md text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita modi,
            debitis quo explicabo dolores vitae magni labore beatae soluta earum sed omnis sequi minus? Assumenda quisquam eligendi sed perspiciatis 
            nobis.</p>
            <br />
            {/*social media icon */}
            <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
            <div className='space-y-2'>
                <h1 className='font-bold text-center'>Available on</h1>
                <ul className='flex space-x-5 '>
                    <li>
                        <a href="https://www.facebook.com/" target="_blank">
                        <FaFacebook className='text-2xl cursor-pointer hover:scale-110 duration-200' />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                        <FaLinkedin className='text-2xl cursor-pointer hover:scale-110 duration-200'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/" target='_blank'>
                        <FaYoutube className='text-2xl cursor-pointer hover:scale-110 duration-200'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/gitsunil577" target="_blank">
                        <FaGithub className='text-2xl cursor-pointer hover:scale-110 duration-200'/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='space-y-3'>
            <h1 className='font-bold text-right '>Currently Working on</h1>
                <div className='flex justify-end space-x-5'>
                <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer' />
                <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer'/>
                <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer'/>
                <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer'/>
                </div>
            </div>
            </div>
        </div>
        <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
            <img src="devloper.png" className='rounded-full md:w-[450px] md:h-[450px]' alt="" />
        </div>
        </div>
    </div>
    <hr />
    </>
  )
}

export default Home;
