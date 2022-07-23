/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'
import styles from "./Header.module.scss";
import Icon from '../Icon';
import { MenuList } from "./data-menu";
import { path } from '@/constants';
import clsx from 'clsx';

type Props = {}

const Header = (props: Props) => {
  return (
    <div className={styles['header']}>
      <div className={styles['header-top']}>
        <div className={styles['header-top-info']}>
          <div className="">
            <span className={styles['header-top-info__item']}>
              <Icon.Phone />
              <span>+84 123456890</span>
            </span>
            <span className={styles['header-top-info__item']}>
              <Icon.Email />
              <span>abcshoes@gmail.com</span>
            </span>
          </div>
          <div className="">
            <Link className={styles['header-top-info__item']} href="">FAQ's</Link>
          </div>
        </div>
      </div>
      <div className={styles['header-main']}>
        <div className={styles['header-main__top']}>
          <div className={styles['header-logo']}>
            <Link href="/">
              <img src="https://bonik-react.vercel.app/assets/images/logo.svg" alt="" />
            </Link>
          </div>
          <form action="" className={styles['header-form-search']}>
            <input type="text" className={styles['header-form-search__input']} />
            <button className={styles['header-form-search__button']}>Search</button>
          </form>
          <div className={styles['header-action']}>
            <Link href={path.public.signupRoute}>
              <a className={styles['header-action-link']}>
                Register
              </a>
            </Link>
            <span>/</span>
            <Link className={styles['header-action-link']} href={path.public.loginRoute}>
              <a className={styles['header-action-link']}>
                Sign in
              </a>
            </Link>
            {/* <button>
              <Icon.Person className={styles['header-action__button']} />
            </button> */}
            {/* <div className={styles['header-action__button--cart']}>
              <span className={styles['header-action__quantity-cart']}>99+</span>
            </div> */}
            <div className="tw-indicator">
              <span className="tw-indicator-item tw-badge tw-badge-secondary tw-bg-primary">99+</span>
              <button>
                <Icon.Cart className={styles['header-action__button']} />
              </button>
            </div>
          </div>
        </div>
        <nav className={styles['header-main__nav']}>
          <ul className={styles['menu']}>
            {MenuList.map((menu, index) => (
              <>
                <li className={styles['menu__item']}>
                  <Link className={styles['menu__item-link']} href={menu.path}>
                    <a
                    // className={clsx({
                    //   active: router.pathname === menu.path,
                    // })}
                    >
                      {menu.label}
                    </a>
                  </Link>
                </li>
              </>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header