import React, { useEffect, useState } from 'react'
import BookCard from "../books/BookCard"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../redux/features/cart/books/booksApi';

export default function Recommended() {
    // const [books, setbooks] = useState([])

    // useEffect(() => {
    //     fetch("book.json")
    //         .then(res => res.json())
    //         .then((data) => setbooks(data))
    // }, [])

    const { data: books = [] } = useFetchAllBooksQuery();

    return (
        <div className='py-16'>
            <h2 className='text-3xl font-semibold mb-6'>Recommended  for you </h2>


            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                // pagination={{ clickable: true }} // Ensure pagination dots are clickable
                grabCursor={true}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1.5,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1180: {
                        slidesPerView: 2.5,
                        spaceBetween: 50,
                    },
                    1400: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    books.length > 0 && books.slice(8, 10).map((book, index) => (
                        <SwiperSlide key={index}>
                            <BookCard book={book} />
                        </SwiperSlide>

                    ))
                }


            </Swiper>
        </div>
    )
}
