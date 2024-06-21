// AdminLayout.jsx
import React from 'react';
import SideNavbar from '../adminComponents/SideNavbar/SideNavbar';
import TopNavbar from '../adminComponents/TopNavbar/TopNavbar';
import UserTable from '../adminComponents/UserTable/UserTable';
import BreadCrumb from '../adminComponents/BreadCrumb/BreadCrumb';


const AdminLayout = () => {
  return (
    <div>
      <SideNavbar />
      <div className="ml-64">
        <TopNavbar />
        <div className="mt-28 pl-4 mx-12 flex flex-col gap-5">
          <BreadCrumb/>
          <UserTable/>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
