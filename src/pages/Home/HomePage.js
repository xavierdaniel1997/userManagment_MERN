
import bannerImg from "../../assets/images/banner-img.jpg";
import EditProfileForm from "../../components/EditProfileForm/EditProfileForm";
import PersonDetails from "../../components/PersonDetials/PersonDetials";

const HomePage = () => {
    return (
        <div className="w-full h-screen relative">
            <div className="w-full h-52 bg-gradient-to-r from-blue-400 to-blue-300 relative">
                <img src={bannerImg} alt="Banner" className="w-full h-full object-cover opacity-50" />
            </div>
            <div className="absolute inset-0 flex justify-center items-center top-48">
                <div className="flex gap-10">
                <div className="flex-none">
                        <PersonDetails />
                    </div>
                    <div className="flex-1 mb-10">
                        <EditProfileForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
