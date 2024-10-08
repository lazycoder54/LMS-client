'use client';
import React from "react";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import Heading from "../../../app/utils/Heading";
import OrdersAnalytics from "../../components/Admin/Analytics/OrdersAnalytics";
import DashboardHeader from "../../../app/components/Admin/DashboardHeader";

type Props = {}

const Page = (props: Props) => {
  return (
    <div>
      <Heading
        title="ELearning - Admin"
        description="ELearning is a platform for students to learn and keep the curiosity in them alive"
        keywords="Programming,Redis,MERN,Machine Learning"
      />
      <div className="flex">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHeader />
          <OrdersAnalytics />
        </div>
      </div>
    </div>
  )
}

export default Page;
