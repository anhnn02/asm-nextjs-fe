import React from 'react'
import { LayoutProps } from '../../models/layout'
import Navbar from '../admin/Navbar/Navbar'
import Sidebar from '../admin/Sidebar'
import 'antd/dist/antd.css'; //Ant Design
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { path } from '@/constants';

const LayoutAdmin = ({ children }: LayoutProps) => {
  const userCurrent = useSelector(data => data.user.current)
  const isLogin = useSelector(data => data.user.isAuthenticated)
  const route = useRouter()
  if (!isLogin) {
    route.push(path.public.notFound)
  } else {
    if (userCurrent.user.role !== 1) {
      route.push(path.public.rootRoute)
    } 
  }
  return (
    <div className="admin-container tw-flex tw-h-screen tw-text-black tw-bg-gray-50 :tw-bg-gray-900">
      <Sidebar />
      <div className="tw-flex tw-flex-col tw-flex-1 tw-w-full">
        <Navbar />
        <main className="tw-h-full tw-bg-white tw-overflow-y-auto">
          <div className='tw-p-5'>
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default LayoutAdmin