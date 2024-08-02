import React from 'react';

function Education({id}) {
    return (
        <div id={id} className='mt-20'>
            <h1 className='text-center text-4xl font-bold'>Education</h1>
            <div className="relative h-1 mt-4 px-28">
                <div className="inset-0 dark:bg-gradient-to-r dark:from-pink-500 dark:via-red-500 dark:to-yellow-500 h-full bg-gradient-to-r from-purple-400 via-pink-400 to-red-400"></div>
            </div>
            <div className='mt-16 px-28 pb-10 flex flex-wrap justify-center'>

                <div className=' bg-zinc-50 dark:bg-zinc-800 w-1/2 m-4 p-6 shadow-2xl rounded-xl transform hover:scale-105 transition-transform duration-300'>
                    <div className='mb-4'>
                        <span className='block font-bold text-2xl text-gray-800 dark:text-gray-200 pb-2'>2021-2024</span>
                        <h2 className='text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-2'>Bachelor in Technology</h2>
                        <span className='block uppercase font-semibold text-md text-gray-700 dark:text-gray-300'>MIT Academy of Engineering</span>
                    </div>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">CGPA: 8.9</p>
                </div>

                <div className=' bg-zinc-50 dark:bg-zinc-800 w-1/2  m-4 p-6 shadow-2xl rounded-xl transform hover:scale-105 transition-transform duration-300'>
                    <div className='mb-4'>
                        <span className='block font-bold text-2xl text-gray-800 pb-2 dark:text-gray-200 '>2018-2021</span>
                        <h2 className='text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-2'>Diploma in Information Technology</h2>
                        <span className='block uppercase font-semibold text-md text-gray-700 dark:text-gray-300'>Government Polytrechnic College, Nanded</span>
                    </div>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Marks: 91.9%</p>
                </div>

                <div className=' bg-zinc-50 w-1/2 dark:bg-zinc-800 m-4 p-6 shadow-2xl rounded-xl transform hover:scale-105 transition-transform duration-300'>
                    <div className='mb-4'>
                        <span className='block font-bold text-2xl text-gray-800 pb-2 dark:text-gray-200'>2017-2018</span>
                        <h2 className='text-3xl font-extrabold text-gray-900 mb-2 dark:text-gray-100'>10th SSC</h2>
                        <span className='block uppercase font-semibold text-md text-gray-700 dark:text-gray-300'>MAHATMA PHULE HIGH SCHOOL</span>
                    </div>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Marks: 83%</p>
                </div>

            </div>
        </div>
    );
}
export default Education
