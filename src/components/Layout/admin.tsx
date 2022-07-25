import React from 'react'
import { LayoutProps } from '../../models/layout'
import Navbar from '../admin/Navbar/Navbar'
import Sidebar from '../admin/Sidebar'
import 'antd/dist/antd.css'; //Ant Design

const LayoutAdmin = ({ children }: LayoutProps) => {
  return (
    <div className="admin-container tw-flex tw-h-screen tw-text-black tw-bg-gray-50 :tw-bg-gray-900">
      <Sidebar />
      <div className="tw-flex tw-flex-col tw-flex-1 tw-w-full">
        <Navbar />
        <main className="tw-h-full tw-overflow-y-auto">
          <div className='tw-p-5'>
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default LayoutAdmin