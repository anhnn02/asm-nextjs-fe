import React from 'react'
import { LayoutProps } from '../../models/layout'

const LayoutEmpty = ({children}: LayoutProps) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default LayoutEmpty