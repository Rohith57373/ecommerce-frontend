import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/CartSlice';
import { useFetchBookByIdQuery } from '../../redux/features/cart/books/booksApi.js';

const SingleBook = () => {
    const { id } = useParams();
    const { data: book, isLoading, isError } = useFetchBookByIdQuery(id);
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error while loading book info</div>;

    return (
        <div className="max-w-lg mx-auto shadow-md p-5 mt-10 bg-white rounded-md">
            <h1 className="text-2xl font-bold mb-6">{book.title}</h1>

            {/* Image Display */}
            {book.coverImage && (
                <img
                    src={book.coverImage}
                    alt={book.title}
                    className="mb-8 rounded-md shadow"
                />
            )}

            <div className='mb-5'>
                <p className="text-gray-700 mb-2">
                    <strong>Author:</strong> {book.author || 'admin'}
                </p>
                <p className="text-gray-700 mb-4">
                    <strong>Published:</strong> {new Date(book.createdAt).toLocaleDateString()}
                </p>
                <p className="text-gray-700 mb-4 capitalize">
                    <strong>Category:</strong> {book.category}
                </p>
                <p className="text-gray-700">
                    <strong>Description:</strong> {book.description}
                </p>
            </div>

            <button
                onClick={() => handleAddToCart(book)}
                className="btn-primary px-6 py-2 space-x-1 flex items-center gap-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                <FiShoppingCart />
                <span>Add to Cart</span>
            </button>
        </div>
    );
};

export default SingleBook;



// import React from 'react';
// import { FiShoppingCart } from "react-icons/fi";
// import { useParams } from "react-router-dom";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Pagination } from 'swiper/modules';
// import Zoom from 'react-medium-image-zoom';
// import 'react-medium-image-zoom/dist/styles.css';

// import { getImgUrl } from '../../utils/getImgUrl';
// import booksData from '../../../public/multiplebooks.json'; // Importing local JSON file

// // delete this
// import book1 from '../../assets/sample/grenn1.png';
// import book2 from '../../assets/sample/greenline2.png';
// import book3 from '../../assets/sample/brown3.png';
// // Import other images similarly

// const images = [book1, book2, book3];

// const SingleBook = () => {
//     const { id } = useParams();
//     const book = booksData.find(book => book._id === parseInt(2));

//     if (!book) return <div>Book not found</div>;

//     return (
//         <div className="flex justify-center items-center min-h-screen">
//             <div className="max-w-xs shadow-md p-3 text-center bg-white rounded-lg">
//                 <h1 className="text-lg font-bold mb-4">{book.title}</h1>

//                 {/* Swiper Carousel with Zoom */}
//                 <div className="mb-4">
//                     <Swiper
//                         modules={[Navigation, Pagination]}
//                         navigation
//                         pagination={{ clickable: true }}
//                         spaceBetween={10}
//                         slidesPerView={1}
//                         className="rounded-lg"
//                     >
//                         {images?.map((image, index) => (
//                             <SwiperSlide key={index}>
//                                 <Zoom>
//                                     <img
//                                         src={image}
//                                         alt={`${book.title} - ${index + 1}`}
//                                         className="w-2/3 mx-auto object-cover rounded-md cursor-zoom-in"
//                                     />
//                                 </Zoom>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                 </div>

//                 <div className='mb-4 text-sm'>
//                     <p className="text-gray-700 mb-1"><strong>Author:</strong> {book.author || 'admin'}</p>
//                     <p className="text-gray-700 mb-2">
//                         <strong>Published:</strong> {book.createdAt ? new Date(book.createdAt).toLocaleDateString() : 'N/A'}
//                     </p>
//                     <p className="text-gray-700 mb-2 capitalize">
//                         <strong>Category:</strong> {book?.category}
//                     </p>
//                     <p className="text-gray-700"><strong>Description:</strong> {book.description}</p>
//                 </div>

//                 <button
//                     className="btn-primary px-4 py-2 text-sm flex items-center gap-1 mx-auto"
//                 >
//                     <FiShoppingCart />
//                     <span>Add to Cart</span>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default SingleBook;


