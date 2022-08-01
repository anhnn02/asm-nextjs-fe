/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'
import styles from "./Header.module.scss";
import Icon from '../../Icon';
import { MenuList } from "./data-menu";
import { path } from '@/constants';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Header = () => {
  const { totalQuantity } = useSelector((state) => state.cart)
  const router = useRouter()
  const { register, handleSubmit, formState: { errors }, } = useForm()
  const getValueSearch = (value) => {
    if (value.keyword.trim() === '') {
      toast.error("Please enter a search keyword!")
    } else {
      const keyword = value.keyword.trim()
      router.push({ pathname: `${path.public.productRoute}/search`, query: { keyword: `${keyword}` } })

    }
  }
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
            <Link href={path.public.rootRoute}>
              <img className="tw-cursor-pointer" src="https://bonik-react.vercel.app/assets/images/logo.svg" alt="" />
            </Link>
          </div>
          <form action="" className={styles['header-form-search']} onSubmit={handleSubmit(getValueSearch)}>
            <input type="text" className={styles['header-form-search__input']} {...register("keyword")} required />
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
            <div className="tw-indicator">
              <span className="tw-indicator-item tw-badge tw-badge-secondary tw-bg-primary">{totalQuantity}</span>
              <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary tw-cursor-pointer">
                <Icon.Cart className={styles['header-action__button']} />
              </label>
            </div>
          </div>
        </div>
        <nav className={styles['header-main__nav']}>
          <ul className={styles['menu']}>
            {MenuList.map((menu, index) => (
              <li key={index} className={styles['menu__item']}>
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
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header