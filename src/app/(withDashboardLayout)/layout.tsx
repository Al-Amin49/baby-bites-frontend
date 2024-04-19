"use client"
import { ReactNode } from "react";
import Sidebar from "@/Components/UI/Sidebar/Sidebar";
import RootLayout from "../layout";
  type TDashboardProps={
    children: ReactNode
  }
const DashboardLayout=({children}:TDashboardProps)=>{

  return (
    <>
        <div className="flex">
          <Sidebar/>
            {/* dashboard content */}
            <div className="flex-1 p-8">
           {children}
            </div>
        </div>
        
    </>
);
        
  
}
export default DashboardLayout;