import React from 'react';
import Card from './Card';

function Projects({id}) {
    return (
        <div id={id} className='mt-20'>
            <h1 className='text-center text-4xl font-bold'>Projects</h1>
            <div className='mt-16 flex flex-wrap justify-center px-28'>
                <div className="w-full md:w-1/3 mb-10 px-5">
                    <a href="https://github.com/vaibhav-dawane/cloud-federation">
                        <Card imageUrl={"./1.png"} title={"Optimised Service Provider Using Multi Cloud"}/>
                    </a>
                </div>
                <div className="w-full md:w-1/3 mb-10 px-5">
                    <a href="https://github.com/vaibhav-dawane/node-todo-jenkins-cicd">
                        <Card imageUrl={"./2.png"} title={"NodeJs ToDo App Using Jenkins Pipeline"}/>
                    </a>
                </div>
                <div className="w-full md:w-1/3 mb-10 px-5">
                    <a href="https://github.com/vaibhav-dawane/React-Three-Tier-App">
                        <Card imageUrl={"./3.png"} title={"React Three Tier Application"}/>
                    </a>
                </div>
                <div className="w-full md:w-1/3 mb-10 px-5">
                    <a href="https://github.com/vaibhav-dawane/two-tier-flask-app">
                        <Card imageUrl={"./4.png"} title={"Two Tier Flask App"}/>
                    </a>
                </div>
                <div className="w-full md:w-1/3 mb-10 px-5">
                    <a href="https://github.com/vaibhav-dawane/three-tier-nodejs-mongo">
                        <Card imageUrl={"./5.png"} title={"Three Tier Nodejs MongoDB"}/>
                    </a>
                </div>
            </div>

        </div>
    );
}
export default Projects
