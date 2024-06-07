import React from 'react'

function Cards({item}) {
    return (
        <>
            <div className="mt-4 my-3 p-3">
                <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                    <figure>
                        <img
                            src={item.image}
                            alt="Book Cover"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge bg-green-800 text-white ">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">{item.price}</div>
                            <a href={item.link} className="cursor-pointer badge badge-outline bg-green-500 hover:bg-green-800 hover:text-white px-2 py-1">
                                Buy Now!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards
