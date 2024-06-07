import React, { useEffect } from 'react'
import Cards from './Cards'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import axios from "axios"

function AllBooks() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      }catch(error){
        console.log(error);
      }
    };
    getBook();
  }, []);
    return (
      <>
        <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4">
          <div className="md:mt-16 mt-20 items-center justify-center text-center ">
            <h1 className="p-6 text-2x1 md:text-4x1">
              Discover Your Next Great Read with{" "}
              <span className="text-green-800">Book Gnome!</span>
            </h1>
            <p className="mt-12">Our mission is to connect readers with stories that inspire, educate, and entertain. With personalized recommendations and a vibrant community, we make finding your next book a delightful experience. </p>
            <Link to="/">
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 duration-300">
                Back
              </button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {book.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </div>
        </div>
      </>
    );
}

export default AllBooks
