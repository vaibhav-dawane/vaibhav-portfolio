import React from 'react';

function Card({imageUrl, title}) {
    return (
        <div>
            <div className="card card-compact w-80 h-56 shadow-xl duration-300 hover:scale-110 cursor-pointer">
                <figure className=''>
                    <img
                    src={imageUrl}
                    alt="projects" />
                </figure>
                <div className="card-body rounded-bl-lg rounded-br-lg dark:bg-purple-600">
                    <h3 className="card-title">{title}</h3>
                </div>
            </div>
        </div>
    );
}
export default Card
