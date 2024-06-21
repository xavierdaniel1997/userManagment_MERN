import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const EditProfileForm = ({userData}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null)
  const [updateForm, setUpdateForm] = useState({
    fname: userData?.fname || "",
    sname: userData?.sname || "",
    email: userData?.email || "",
    phone: userData?.phone || "",
    state: userData?.state || "",
    city: userData?.city || "",
    zipCode: userData?.zipCode || ""
  })

  const handleChange = (e) => {
    setUpdateForm({
      ...updateForm,
      [e.target.name]:e.target.value
    })
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        setSelectedImage(file)
        setImagePreview(URL.createObjectURL(file))
    }
  };

  const handleSubmit  = (e) => {
    e.preventDefault()
 

    
    console.log(updateForm)
  }

  return (
    <div className="flex flex-col items-center px-10 py-6 rounded-lg max-w-2xl bg-white shadow-lg">
      <div className="mb-6 w-full">
        <h1 className="text-2xl font-semibold text-left">Update your Profile</h1>
      </div>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" >
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              name='fname'
              placeholder={userData? userData?.fname : ""}
              value={updateForm.fname}
              onChange={handleChange}
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
              name='sname'
              placeholder={userData? userData?.sname: ""}
              value={updateForm.sname}
              onChange={handleChange}
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
            name='email'
            placeholder={userData? userData?.email : ""}
            value={updateForm.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1" >
            Phone
          </label>
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            name='phone'
            placeholder={userData ? userData?.phone: ""}
            value={updateForm.phone}
            onChange={handleChange}
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
              name='state'
              placeholder={userData? userData?.state: ""}
              value={updateForm.state}
              onChange={handleChange}
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
              name='city'
              placeholder={userData? userData?.city : ""}
              value={updateForm.city}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" >
              ZipCode
            </label>
            <input
              type="number"
              id="zip"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              name='zipCode'
              placeholder={userData? userData?.zipCode : ""}
              value={updateForm.zipCode}
              onChange={handleChange}
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
