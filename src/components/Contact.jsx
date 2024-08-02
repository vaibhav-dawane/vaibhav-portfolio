import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareGithub, faSquareInstagram, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';


function Contact({id}) {
    return (
        <div id={id} className='mt-20 pb-14'>
           <h1 className='text-center text-4xl font-bold'>Contact Me</h1>
           <div className='flex space-x-28 mt-16 justify-center'>
                <div className="flex flex-col items-center">
                    <a href="https://maps.app.goo.gl/mZwivZVuZBCkhN9N9">
                        <FontAwesomeIcon 
                            className='fa-xl bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full p-6 text-white cursor-pointer hover:shadow-lg hover:scale-110 transition-transform duration-300'
                            icon={faLocationDot} 
                        />
                    </a>
                    <h3 className='uppercase mt-4 font-semibold'>Address</h3>
                    <a href="https://maps.app.goo.gl/mZwivZVuZBCkhN9N9"><p className='mt-4'>Pune, India</p></a>
                </div>
                
                <div className="flex flex-col items-center">
                    <a href="https://mail.google.com/mail/u/1/#inbox?compose=DmwnWrRqgkMgMlRWzLHQRkwKFWRNDhfBvwPqPbhkzsFrwfKMMvxtcNNNjzJQGlsJVzHNsjjsVBnv">
                        <FontAwesomeIcon 
                            className='fa-xl bg-gradient-to-r from-blue-500 to-green-500 rounded-full p-6 text-white cursor-pointer hover:shadow-lg hover:scale-110 transition-transform duration-300' 
                            icon={faEnvelope} 
                        />
                    </a>
                    <h3 className='uppercase mt-4 font-semibold'>Email Address</h3>
                    <a href="https://mail.google.com/mail/u/1/#inbox?compose=DmwnWrRqgkMgMlRWzLHQRkwKFWRNDhfBvwPqPbhkzsFrwfKMMvxtcNNNjzJQGlsJVzHNsjjsVBnv"><p className='mt-4 cursor-pointer'>vpdawane@gmail.com</p></a>
                </div>

                <div className="flex flex-col items-center">
                    <a href="tel:+911234567890">
                        <FontAwesomeIcon 
                            className='fa-xl bg-gradient-to-r from-purple-500 to-red-500 rounded-full p-6 text-white cursor-pointer hover:shadow-lg hover:scale-110 transition-transform duration-300'
                            icon={faPhone} 
                        />
                    </a>
                    <h3 className='uppercase mt-4 font-semibold'>Contact Number</h3>
                    <a href="tel:+911234567890"><p className='mt-4 cursor-pointer'>+91 1234567890</p></a>
                </div>
                
                <div className="flex flex-col items-center">
                    <a href="https://x.com/vaibhav_dawane">
                        <FontAwesomeIcon 
                            className='fa-xl bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full p-6 text-white cursor-pointer hover:shadow-lg hover:scale-110 transition-transform duration-300' 
                            icon={faSquareXTwitter} 
                        />
                    </a>
                    <h3 className='uppercase mt-4 font-semibold'>Twitter (X)</h3>
                    <a href="https://x.com/vaibhav_dawane"><p className='mt-4 cursor-pointer'>@vaibhav_dawane</p></a>
                </div>
           </div>
        </div>
    );  
}
export default Contact
