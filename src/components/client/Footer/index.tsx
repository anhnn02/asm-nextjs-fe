/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'
import Icon from '../../Icon';
import styles from "./Footer.module.scss";

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className={styles['footer']}>
      <div className={styles['footer-content']}>
        <div className="">
          <Link href="">
            <img src="https://bonik-react.vercel.app/assets/images/logo.svg" alt="" />
          </Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit
            diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
        </div>
        <div className="">
          <h2 className={styles['footer-title']}>About Us</h2>
          <ul className={styles['footer-list']}>
            <li className={styles['footer-list']}>
              <Link href=""><a className={styles['footer-item']} href="">Careers</a></Link>
              <Link href=""><a className={styles['footer-item']} href="">Our Stores</a></Link>
              <Link href=""><a className={styles['footer-item']} href="">Our Cares</a></Link>
              <Link href=""><a className={styles['footer-item']} href="">Terms & Conditions</a></Link>
              <Link href=""><a className={styles['footer-item']} href="">Privacy Policy</a></Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className={styles['footer-title']}>Customer Cares</h2>
          <ul className={styles['footer-list']}>
            <li className={styles['footer-list']}>
              <Link href=""><a className={styles['footer-item']} href="">Help Center</a></Link>
              <Link href=""><a className={styles['footer-item']} href="">How to Buy</a></Link>
              <Link href=""><a className={styles['footer-item']} href="">Track Your Order</a></Link>
              <Link href=""><a className={styles['footer-item']} href="">Corporate & Bulk Purchasing</a></Link>
              <Link href=""><a className={styles['footer-item']} href="">Returns & Refunds</a></Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className={styles['footer-title']}>Contact Us</h2>
          <ul className={styles['footer-list']}>
            <li className={styles['footer-list']}>
              70 Washington Square South, New York, NY 10012, United States
            </li>
            <li className={styles['footer-list']}>
              Email: uilib.help@gmail.com
            </li>
            <li className={styles['footer-list']}>
              Phone: +1 1123 456 780
            </li>
          </ul>
          <div className={styles['footer-social']}>
            <Link href="">
              <a href="" className={styles['footer-social__icon']}>
                <Icon.Fb className={""}/>
              </a>
            </Link>
            <Link href="">
              <a href="" className={styles['footer-social__icon']}>
                <Icon.Youtube className={""} />
              </a>
            </Link>
            <Link href="">
              <a href="" className={styles['footer-social__icon']}>
                <Icon.Ig className={""}/>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles['footer-copyright']}>
        <span className={styles['footer-copyright-content']}>
          Copyright &copy; by Nhom 1 nextjs WE16304
        </span>
      </div>
    </div>
  )
}

export default Footer