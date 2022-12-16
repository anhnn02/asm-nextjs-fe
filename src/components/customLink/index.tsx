import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import React, { Children, cloneElement, ReactElement, ReactNode } from 'react'


interface Props extends LinkProps{
    children: ReactNode
}
function CustomLink({href, children, ...props}: any) {
    const {asPath} = useRouter()
    const child = Children.only(children) as ReactElement
    
    const childClassName = child.props.className || ''
    const className = href === asPath ? `${childClassName} active` : childClassName
    const router = useRouter();
      const style = {
        color: router.asPath === href ? "#E94560" : "black",
        
      };


  return (
    <Link href={href}>
      <a style={style} {...props}>
        {cloneElement(child, {
          className: className || null,
        })}
      </a>
    </Link>
  );
}

export default CustomLink