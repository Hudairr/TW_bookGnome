import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import axios from "axios";

import Cards from "./Cards"

function Books() {
    const [book, setBook] = useState([]);
    useEffect(() => {
      const getBook = async () => {
        try {
          const res = await axios.get("https://tw-book-gnome.vercel.app/book");

          const data = res.data.filter((data) => data.category === "Literature");
          console.log(data);
          setBook(data);
        } catch (error) {
          console.log(error);
        }
      };
      getBook();
    }, []);
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
      <>
        <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4">
          <div>
            <h1 className="font-semi-bold text-2x1 pt-7 pb-2">My Top Favourite Books</h1>
            <p>Explore my curated book lists for my favourite genres</p>
          </div>

          <div>
            <Slider {...settings}>
              {book.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </Slider>
          </div>
        </div>
      </>
    );
}

export default Books
