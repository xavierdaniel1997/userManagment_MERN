
import { useEffect, useState } from "react";
import bannerImg from "../../assets/images/banner-img.jpg";
import EditProfileForm from "../../components/EditProfileForm/EditProfileForm";
import PersonDetails from "../../components/PersonDetials/PersonDetials";
import axios from "axios";

const HomePage = () => {
    const [userData, setUserData] = useState(null)

    

    // const getUserData = async () => {
    //     const token = localStorage.getItem("token");
    //     try {
    //         const response = await fetch('http://localhost:4000/api/users/user-details', {
    //             headers: {
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         });
            
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }

    //         const result = await response.json();
    //         setUserData(result.user); // Access the user object from the response
    //     } catch (error) {
    //         console.error('Error fetching user details:', error);
    //     }
    // };

    const getUserData = async () => {
        const token = localStorage.getItem("token")
        try{
            const response = await axios.get("http://localhost:4000/api/users/user-details", {
                headers: {
                     'Authorization': `Bearer ${token}`
                }
            })
            setUserData(response.data.user)
        }catch(error){
            console.error('Error fetching user details:', error);
        }
    }
    useEffect(() => {
        getUserData()
    }, [])
    console.log(userData)
    return (
        <div className="w-full h-screen relative">
            <div className="w-full h-52 bg-gradient-to-r from-blue-400 to-blue-300 relative">
                <img src={bannerImg} alt="Banner" className="w-full h-full object-cover opacity-50" />
            </div>
            <div className="absolute inset-0 flex justify-center items-center top-48">
                <div className="flex gap-10">
                <div className="flex-none">
                        <PersonDetails userData={userData}/>
                    </div>
                    <div className="flex-1 mb-10">
                        <EditProfileForm userData={userData}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
