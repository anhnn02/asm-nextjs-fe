/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'
import styles from "./Header.module.scss";
import Icon from '../../Icon';
import { MenuList } from "./data-menu";
import { path } from '@/constants';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { logout } from '@/features/user/user.slice';
import { useRouter } from 'next/router';

type Props = {}

const Header = (props: Props) => {
  const router = useRouter()
  const dispatch = useDispatch();
  const { totalQuantity } = useSelector((state) => state.cart)
  const userInfor = useSelector(data => data.user.current)
  const isLogin = useSelector(data => data.user.isAuthenticated)
  const { register, handleSubmit, formState: { errors }, } = useForm()
  // search
  const getValueSearch = (value) => {
    if (value.keyword.trim() === '') {
      toast.error("Please enter a search keyword!")
    } else {
      const keyword = value.keyword.trim()
      router.push({ pathname: `${path.public.productRoute}/search`, query: { keyword: `${keyword}` } })

    }
  }
  // logout
  const btnLogOut = () => {
    dispatch(logout());
    router.push(path.public.loginRoute);
    toast.error("Please enter a search keyword!")
  }
  return (
    <div className={styles['header']}>
      <div className={styles['header-top']}>
        <div className={styles['header-top-info']}>
          <div className="">
            <span className={styles['header-top-info__item']}>
              <Icon.Phone className={""}/>
              <span>+84 123456890</span>
            </span>
            <span className={styles['header-top-info__item']}>
              <Icon.Email className={""}/>
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
            {isLogin === false ? (
              <div>
                <Link href={path.public.signupRoute}>
                  <a className={styles['header-action-link']}>
                    Register
                  </a>
                </Link>
                <span className='tw-px-2'>/</span>
                <Link className={styles['header-action-link']} href={path.public.loginRoute}>
                  <a className={styles['header-action-link']}>
                    Sign in
                  </a>
                </Link>
              </div>
            ) : (
              <button className="tw-dropdown tw-dropdown-end">
                <Icon.Person className={styles['header-action__button']} />
                <ul className="tw-dropdown-content tw-menu tw-p-2 tw-shadow tw-bg-base-100 tw-rounded-box tw-w-52 tw-capitalize tw-font-semibold">
                  <li className='tw-truncate'><p><Icon.Person className={""} /> {userInfor.user.name}</p></li>
                  <li className=''><Link href={path.public.ordersRoute}><p><Icon.Order className={""} /> My orders</p></Link></li>
                  <li className=''><p className='' onClick={() => btnLogOut()}><Icon.BoxArrowLeft className={""} /> Log out</p></li>
                </ul>
              </button>
            )}
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
    </div >
  )
}

export default Header