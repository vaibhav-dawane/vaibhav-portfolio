import React from 'react';

function Card({imageUrl, title}) {
    return (
        <div>
            <div className="card card-compact bg-base-100 w-80 h-56 shadow-xl duration-300 hover:scale-110 cursor-pointer">
                <figure>
                    <img
                    src={imageUrl}
                    alt="projects" />
                </figure>
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                </div>
            </div>
        </div>
    );
}
export default Card
