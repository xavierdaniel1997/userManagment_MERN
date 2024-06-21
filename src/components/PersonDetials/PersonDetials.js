const PersonDetials = ({userData}) => {
    return (
        <div className="flex flex-col items-center py-20 px-10 rounded-md  mx-auto bg-white shadow-md">
            <img src="https://via.placeholder.com/150" alt="Avatar" className="w-36 h-36 rounded-full mb-6" />
            <h2 className="text-2xl font-semibold mb-2">{userData?.fname} {userData?.
sname}</h2>
            <div className="text-center font-semibold text-lg">
                <p>Email: <a href="mailto:john.doe@example.com" className="text-blue-500">{userData?.email}</a></p>
                <p>Phone: <a href="tel:1234567890" className="text-blue-500">{userData?.phone}</a></p>
                <p>{userData?.state} {userData?.city} {userData?.zipCode}</p>
            </div>
        </div>
    )
}
export default PersonDetials;