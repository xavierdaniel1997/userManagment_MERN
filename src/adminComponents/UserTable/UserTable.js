import React from 'react';

const UserTable = () => {
  return (
    <div className="overflow-x-auto mx-5">
      <table className="bg-white border border-gray-200 w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Avatar</th>
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Email</th>
            <th className="px-4 py-2 border-b">Phone</th>
            <th className="px-4 py-2 border-b">State</th>
            <th className="px-4 py-2 border-b">City</th>
            <th className="px-4 py-2 border-b">Zip Code</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 border-b">
              <img src="https://via.placeholder.com/50" alt="avatar" className="w-10 h-10 rounded-full"/>
            </td>
            <td className="px-4 py-2 border-b">John Doe</td>
            <td className="px-4 py-2 border-b">john@example.com</td>
            <td className="px-4 py-2 border-b">123-456-7890</td>
            <td className="px-4 py-2 border-b">CA</td>
            <td className="px-4 py-2 border-b">Los Angeles</td>
            <td className="px-4 py-2 border-b">90001</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 border-b">
              <img src="https://via.placeholder.com/50" alt="avatar" className="w-10 h-10 rounded-full"/>
            </td>
            <td className="px-4 py-2 border-b">Jane Smith</td>
            <td className="px-4 py-2 border-b">jane@example.com</td>
            <td className="px-4 py-2 border-b">987-654-3210</td>
            <td className="px-4 py-2 border-b">NY</td>
            <td className="px-4 py-2 border-b">New York</td>
            <td className="px-4 py-2 border-b">10001</td>
          </tr>
          {/* Add more rows here as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
