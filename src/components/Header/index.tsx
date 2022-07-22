import Link from 'next/link';
import React from 'react'
import styles from "./Header.module.scss";
import Icon from '../Icon';

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
      <div className={styles['header-top']}>
        <div className={styles['']}>
          <span>
            <Icon.Phone />
            <span>+84 123456890</span>
          </span>
          <span>
            <Icon.Email />
            <span>abcshoes@gmail.com</span>
          </span>
        </div>
      </div>
      <div className="">
        <Link href="">FAQ's</Link>
      </div>
      <div className={styles['header-main']}>
        <div className={styles['header-main__top']}>

        </div>
        <nav className={styles['header-main__nav']}>
          <ul className={styles['menu']}>
            <li className={styles['menu__item']}>
              <Link className={styles['menu__item-link']} href="">Home</Link>
            </li>
            <li className={styles['menu__item']}>
              <Link className={styles['menu__item-link']} href="">Shop</Link>
            </li>
            <li className={styles['menu__item']}>
              <Link className={styles['menu__item-link']} href="">Blog</Link>
            </li>
            <li className={styles['menu__item']}>
              <Link className={styles['menu__item-link']} href="">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header