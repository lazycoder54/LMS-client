'use client';
import AdminProtected from '@/app/hooks/adminProtected';
import Heading from '@/app/utils/Heading';
import React from 'react';
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import DashboardHero from '@/app/components/Admin/DashboardHero';
import AllCourses from "../../components/Admin/Course/AllCourses";

const Page = () => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="ELearning - Admin"
          description="ELearning is a platform for students to learn and keep the curiosity in them alive"
          keywords="Programming,Redis,MERN,Machine Learning"
        />
        <div className="flex h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHero />
            <AllCourses />
          </div>
        </div>
      </AdminProtected>
    </div>
  )
}

export default Page;
