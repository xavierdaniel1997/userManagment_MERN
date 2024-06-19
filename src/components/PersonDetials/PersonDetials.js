const PersonDetials = () => {
    return (
        <div className="flex flex-col items-center py-20 rounded-md max-w-xs mx-auto bg-white shadow-md">
            <img src="https://via.placeholder.com/150" alt="Avatar" className="w-36 h-36 rounded-full mb-6" />
            <h2 className="text-2xl font-semibold mb-2">John Doe</h2>
            <div className="text-center font-semibold text-lg">
                <p>Email: <a href="mailto:john.doe@example.com" className="text-blue-500">john.doe@example.com</a></p>
                <p>Phone: <a href="tel:1234567890" className="text-blue-500">(123) 456-7890</a></p>
                <p>Address: 1234 Elm Street, San Francisco, CA 94101</p>
            </div>
        </div>
    )
}
export default PersonDetials;