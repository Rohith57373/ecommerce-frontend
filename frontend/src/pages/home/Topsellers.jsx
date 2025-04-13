import React, { useEffect, useState } from 'react'
import BookCard from '../books/BookCard'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../redux/features/cart/books/booksApi';

// import required modules
// import { Pagination } from 'swiper/modules';

const categories = ["choose a genere", "Business", "Fiction", "Horror", "Adventure"]

export default function Topsellers() {
    // const [books, setbooks] = useState([])
    const [selectedcategory, setSelectedcategory] = useState("choose a genere")

    // useEffect(() => {
    //     fetch("book.json")
    //         .then(res => res.json())
    //         .then((data) => setbooks(data))
    // }, [])

    const { data: books = [] } = useFetchAllBooksQuery();
    // console.log(books)

    const filteredBooks = selectedcategory === "choose a genere" ? books : books.filter(book => book.category == selectedcategory.toLowerCase())
    // console.log(filteredBooks)


    return (
        <div className='py-10'>
            <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
            {/* category filtering */}
            <div className='mg-8 flex items-center'>
                <select
                    onChange={(e) => setSelectedcategory(e.target.value)}
                    name="category" id="category" className='border bg-[#EAEAEA] border-grey-300 rounded-md px-4 py-2 focus:outline-none '>
                    {
                        categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))
                    }
                </select>
            </div>
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
                    filteredBooks.length > 0 && filteredBooks.map((book, index) => (
                        <SwiperSlide key={index}>
                            <BookCard book={book} />
                        </SwiperSlide>

                    ))
                }


            </Swiper>


        </div>
    )
}
