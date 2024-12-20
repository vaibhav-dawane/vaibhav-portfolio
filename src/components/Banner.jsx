import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareGithub, faSquareInstagram, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';

function Banner({id, about}) {

    const handleScrollToAbout = (id) => (e) => {
        e.preventDefault();
        
        const navSection = document.getElementById(id);
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        window.scrollTo({
            top: navSection.offsetTop - navbarHeight,
            behavior: 'smooth'
          });
    }  

    return (
        <div id={id} className='flex justify-between px-20 mt-16'>
            {/* left */}
            <div className='w-1/2 mt-28 mx-10' >
                <div className='text-4xl font-bold space-y-1'>
                    <h1 className=''>Hey There,</h1>
                    <h1>I'm <span className='text-purple-600 font-extrabold'>Vaibhav Dawane</span></h1>
                </div>

                <h2 className='mt-4 text-2xl'> <span className='font-semibold'>Quality Engineer</span></h2>

                <div className='mt-8 bg-purple-600 rounded-full w-32 py-3 px-1 text-center text-base font-medium text-white hover:bg-blue-700 cursor-pointer duration-300 hover:scale-105'>
                <a className='select-none' href="" onClick={handleScrollToAbout(about)}>About Me</a> {""}

                <FontAwesomeIcon className='ml-1' icon={faArrowDown} beatFade/>
                </div>

                <div className='flex space-x-6 mt-6 '>
                    <a href="https://github.com/vaibhav-dawane">
                        <FontAwesomeIcon className='fa-xl bg-zinc-100 rounded-full p-3 text-black cursor-pointer hover:bg-zinc-300 hover:scale-110' icon={faSquareGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/vaibhav-dawane/">
                        <FontAwesomeIcon className='fa-xl bg-zinc-100 rounded-full p-3 text-black cursor-pointer hover:bg-zinc-300 hover:scale-110' icon={faLinkedin} />
                    </a>
                    <a href="https://x.com/vaibhav_dawane">
                        <FontAwesomeIcon className='fa-xl bg-zinc-100 rounded-full p-3 text-black cursor-pointer hover:bg-zinc-300 hover:scale-110' icon={faSquareXTwitter} />
                    </a>
                    {/* <a href="">
                        <FontAwesomeIcon className='fa-xl bg-zinc-100 rounded-full p-3 text-black cursor-pointer hover:bg-zinc-300 hover:scale-110' icon={faSquareInstagram} />
                    </a> */}
                </div>
            </div>

            {/* right */}
            <div className='w-1/2 mt-20 flex items-center justify-center'>
                <img src="./profile-photo.png" width={300} alt="dp" />
            </div>
        </div>
    );
}
export default Banner
