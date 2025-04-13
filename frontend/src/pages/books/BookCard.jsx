import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/CartSlice';

function BookCard({ book }) {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const phoneNumber = "+918660890531"; // Replace with your WhatsApp number (e.g., 919876543210)
    const message = encodeURIComponent(
        `Hello, I'm interested in "${book?.title}" under the category "${book.category}"  priced at "$${book?.newPrice}". Can you provide more details?`
    );
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 bg-white">
            <div className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-6">
                {/* Book Image */}
                <div className="sm:h-72 sm:w-48 flex-shrink-0 border border-gray-200 rounded-lg overflow-hidden">
                    <Link to={`/books/${book._id}`}>
                        <img
                            src={book?.coverImage}
                            alt={book?.title}
                            className="w-full h-full object-cover p-2 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
                        />
                    </Link>
                </div>

                {/* Book Details */}
                <div className="flex flex-col">
                    <Link to={`/books/${book._id}`}>
                        <h3 className="text-lg sm:text-xl font-semibold hover:text-blue-600 transition-colors duration-200">
                            {book?.title}
                        </h3>
                    </Link>
                    <p className="text-gray-600 mt-2 mb-4 text-sm sm:text-base line-clamp-3">
                        {book?.description.length > 80 ? `${book?.description.slice(0, 80)}...` : book?.description}
                    </p>

                    {/* Pricing */}
                    <p className="text-lg font-medium mb-4">
                        ${book?.newPrice}{" "}
                        {book?.oldPrice && (
                            <span className="text-gray-500 line-through text-base font-normal ml-2">
                                ${book?.oldPrice}
                            </span>
                        )}
                    </p>

                    {/* Buttons: Add to Cart & WhatsApp */}
                    <div className="flex items-center gap-3">
                        {/* Add to Cart Button */}
                        <button
                            onClick={() => handleAddToCart(book)}
                            className="bg-blue-600 hover:bg-black text-white px-5 py-2 flex items-center justify-center gap-2 rounded-lg transition-all duration-200 w-max mr-2.5"
                        >
                            <FiShoppingCart />
                            <span>Add to Cart</span>
                        </button>

                        {/* Small Round WhatsApp Button */}
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-all duration-200 flex items-center justify-center shadow-md"
                            style={{ width: "40px", height: "40px" }}
                        >
                            <FaWhatsapp size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookCard;
