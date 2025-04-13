// import React from 'react';
// import { FiShoppingCart } from "react-icons/fi";
// import { useParams } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../redux/features/cart/CartSlice';
// import { useFetchBookByIdQuery } from '../../redux/features/cart/books/booksApi.js';

// const SingleBook = () => {
//     const { id } = useParams();
//     const { data: book, isLoading, isError } = useFetchBookByIdQuery(id);
//     const dispatch = useDispatch();

//     const handleAddToCart = (product) => {
//         dispatch(addToCart(product));
//     };

//     if (isLoading) return <div>Loading...</div>;
//     if (isError) return <div>Error while loading book info</div>;

//     return (
//         <div className="max-w-lg mx-auto shadow-md p-5 mt-10 bg-white rounded-md">
//             <h1 className="text-2xl font-bold mb-6">{book.title}</h1>

//             {/* Image Display */}
//             {book.coverImage && (
//                 <img
//                     src={book.coverImage}
//                     alt={book.title}
//                     className="mb-8 rounded-md shadow"
//                 />
//             )}

//             <div className='mb-5'>
//                 <p className="text-gray-700 mb-2">
//                     <strong>Author:</strong> {book.author || 'admin'}
//                 </p>
//                 <p className="text-gray-700 mb-4">
//                     <strong>Published:</strong> {new Date(book.createdAt).toLocaleDateString()}
//                 </p>
//                 <p className="text-gray-700 mb-4 capitalize">
//                     <strong>Category:</strong> {book.category}
//                 </p>
//                 <p className="text-gray-700">
//                     <strong>Description:</strong> {book.description}
//                 </p>
//             </div>

//             <button
//                 onClick={() => handleAddToCart(book)}
//                 className="btn-primary px-6 py-2 space-x-1 flex items-center gap-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//             >
//                 <FiShoppingCart />
//                 <span>Add to Cart</span>
//             </button>
//         </div>
//     );
// };

// export default SingleBook;

import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/CartSlice';
import { useFetchBookByIdQuery } from '../../redux/features/cart/books/booksApi.js';

const SingleBook = () => {
    const { id } = useParams();
    const { data: book, isLoading, isError } = useFetchBookByIdQuery(id);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(book));
    };

    if (isLoading) return <div className="text-center mt-10">Loading...</div>;
    if (isError) return <div className="text-center mt-10 text-red-500">Error loading book info</div>;

    // Combine coverImage with additionalImages (if any)
    const images = [book.coverImage, ...(book.additionalImages || [])];

    return (
        <div className="max-w-3xl mx-auto shadow-lg p-6 mt-10 bg-white rounded-lg">
            <h1 className="text-3xl font-semibold mb-6 text-center">{book.title}</h1>

            {/* Image Carousel */}
            {images.length > 0 && (
                <div className="mb-8">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={20}
                        slidesPerView={1}
                        className="rounded-lg"
                    >
                        {images.map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <Zoom>
                                    <img
                                        src={img}
                                        alt={`Book Image ${idx + 1}`}
                                        className="w-full h-64 sm:h-72 md:h-80 lg:h-[26rem] xl:h-[30rem] object-cover rounded-md mx-auto cursor-zoom-in max-w-4xl"
                                    />
                                </Zoom>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}

            {/* Book Details */}
            <div className="space-y-4 mb-6 text-gray-700">
                <p><strong>Author:</strong> {book.author || 'Admin'}</p>
                <p><strong>Published:</strong> {new Date(book.createdAt).toLocaleDateString()}</p>
                <p><strong>Category:</strong> <span className="capitalize">{book.category}</span></p>
                <p><strong>Description:</strong> {book.description}</p>
            </div>

            {/* Add to Cart Button */}
            <div className="text-center">
                <button
                    onClick={handleAddToCart}
                    className="flex items-center justify-center gap-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
                >
                    <FiShoppingCart className="text-lg" />
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    );
};

export default SingleBook;





