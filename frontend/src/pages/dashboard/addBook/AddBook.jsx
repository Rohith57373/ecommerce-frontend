import React, { useState } from 'react';
import axios from 'axios';
import InputField from './InputField';
import SelectField from './SelectField';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import getBaseUrl from '../../../utils/baseURL'

const AddBook = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [imageFile, setimageFile] = useState(null);
    const [imageFileName, setimageFileName] = useState('');
    const [image, setImage] = useState('');
    const [additionalImages, setAdditionalImages] = useState([]);

    const onSubmit = async (data) => {
        try {
            const result = await axios.post(`${getBaseUrl()}/api/cloud/upload`, {
                image: image,
                images: additionalImages, // sending multiple images
                title: data.title,
                description: data.description,
                category: data.category,
                trending: data.trending,
                oldPrice: data.oldPrice,
                newPrice: data.newPrice,
            });

            console.log(result.data);

            Swal.fire({
                title: "Book added",
                text: "Your book is uploaded successfully!",
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, It's Okay!"
            });

            reset();
            setimageFileName('');
            setimageFile(null);
            setImage('');
            setAdditionalImages([]);
        } catch (error) {
            console.error(error);
            alert("Failed to add book. Please try again.");
        }
    };

    function previewFiles(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
        };
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setimageFile(file);
            setimageFileName(file.name);
            previewFiles(file);
        }
    };

    const handleAdditionalImagesChange = (e) => {
        const files = Array.from(e.target.files);
        const readers = [];

        files.forEach(file => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setAdditionalImages(prev => [...prev, reader.result]);
            };
        });
    };

    return (
        <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Book</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <InputField
                    label="Title"
                    name="title"
                    placeholder="Enter book title"
                    register={register}
                />

                <InputField
                    label="Description"
                    name="description"
                    placeholder="Enter book description"
                    type="textarea"
                    register={register}
                />

                <SelectField
                    label="Category"
                    name="category"
                    options={[
                        { value: '', label: 'Choose A Category' },
                        { value: 'business', label: 'Business' },
                        { value: 'technology', label: 'Technology' },
                        { value: 'fiction', label: 'Fiction' },
                        { value: 'horror', label: 'Horror' },
                        { value: 'adventure', label: 'Adventure' },
                    ]}
                    register={register}
                />

                <div className="mb-4">
                    <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            {...register('trending')}
                            className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm font-semibold text-gray-700">Trending</span>
                    </label>
                </div>

                <InputField
                    label="Old Price"
                    name="oldPrice"
                    type="number"
                    placeholder="Old Price"
                    register={register}
                />

                <InputField
                    label="New Price"
                    name="newPrice"
                    type="number"
                    placeholder="New Price"
                    register={register}
                />

                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Cover Image</label>
                    <input type="file" accept="image/*" onChange={handleFileChange} className="mb-2 w-full" />
                    {imageFileName && <p className="text-sm text-gray-500">Selected: {imageFileName}</p>}
                </div>

                <img src={image} alt="" className="mb-4 max-h-60 object-cover" />

                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Images</label>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleAdditionalImagesChange}
                        className="mb-2 w-full"
                    />
                </div>

                <div className="mb-4">
                    {additionalImages.map((img, index) => (
                        <img key={index} src={img} alt={`Additional image ${index + 1}`} className="mb-4 max-h-60 object-cover" />
                    ))}
                </div>

                <button type="submit" className="w-full py-2 bg-green-500 text-white font-bold rounded-md">
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBook;
