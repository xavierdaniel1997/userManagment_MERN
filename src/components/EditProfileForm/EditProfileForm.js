import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const EditProfileForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null)

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        setSelectedImage(file)
        setImagePreview(URL.createObjectURL(file))
    }
  };

  return (
    <div className="flex flex-col items-center px-10 py-6 rounded-lg max-w-2xl bg-white shadow-lg">
      <div className="mb-6 w-full">
        <h1 className="text-2xl font-semibold text-left">Update your Profile</h1>
      </div>
      <form className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" >
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" >
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1" >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1" >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1" >
            Upload Image
          </label>
          <div className="flex items-center">
            {imagePreview ? (
              <img src={imagePreview} alt="Profile" className="w-32 h-32 rounded-full object-cover mr-4" />
            ) : (
              <FaUserCircle className="w-32 h-32 text-gray-400 mr-4" />
            )}
            <input
              type="file"
              id="image-upload"
              className="w-full px-3 py-2"
              onChange={handleImageUpload}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" >
              State
            </label>
            <input
              type="text"
              id="state"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" >
              City
            </label>
            <input
              type="text"
              id="city"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" >
              ZipCode
            </label>
            <input
              type="text"
              id="zip"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex">
          <button type="submit" className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
