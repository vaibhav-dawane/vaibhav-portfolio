import React from 'react';

function About({id}) {
    return (
        <div className='mt-20 p-5 space-y-6' id={id}>
            <h1 className='text-center text-4xl font-bold'>About Me</h1>
            <p className='px-28 dark:text-zinc-400'>I am Vaibhav Prakash Dawane, a B.Tech. student in Computer Science and Engineering at MIT Academy of Engineering, Pune, with a CGPA of 8.98. I have a strong foundation in cloud computing, DevOps, and software development, with hands-on experience in AWS, Docker, Kubernetes, and various programming languages. I have completed impactful projects, such as an optimized cloud service provider platform and a two-tier application deployment. Passionate about continuous learning, I thrive in problem-solving and adapting to new environments. Connect with me on LinkedIn and explore my projects on GitHub.</p>
        </div>
    );
}
export default About
