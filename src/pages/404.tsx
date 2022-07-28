/* eslint-disable @next/next/no-img-element */
import React from 'react'
import LayoutEmpty from '../components/Layout/empty'
import Button from '@/components/Button'
import Link from 'next/link'


const NotFound = () => {
  return (
    <div className="not-found">
      <img  className="img404" src="https://bonik-react.vercel.app/assets/images/illustrations/404.svg" alt=""  />
       <Button.Fill content={"Go to Home"} />
      
    </div>
  );
}
 NotFound.Layout = LayoutEmpty
export default NotFound;