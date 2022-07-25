/* eslint-disable @next/next/no-img-element */
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { increaseQty } from '@/utils/cart';
import { formatPrice } from '@/utils/formatNumber';
import Link from 'next/link';
import React from 'react'
import styles from "./CartSidebar.module.scss";

type Props = {}

const CartSidebar = (props: Props) => {
    const abc = 10;
    
    // const fakeDataCart = [
    //     {
    //         _id: "62de7faeb125d2ef2fd0936f_36",
    //         name: "Product abc abc cashd asdhkas asj 2022",
    //         regularPrice: 123,
    //         salePrice: 12,
    //         img: "https://picsum.photos/200/300",
    //         desc: "https://picsum.photos/200/300sfas ácasxas",
    //         size: 35,
    //         categoryId: "62dd7af5b7f1d90d9ffc8305",
    //         quantity: 1,
    //         total: 12
    //     },
    //     {
    //         _id: "62de7faeb125d2ef2fd0936f_37",
    //         name: "Product abc abc cashd asdhkas asj 2022",
    //         regularPrice: 110,
    //         salePrice: 12,
    //         img: "https://picsum.photos/200/300",
    //         desc: "https://picsum.photos/200/300sfas ácasxas",
    //         size: 35,
    //         categoryId: "62dd7af5b7f1d90d9ffc8305",
    //         quantity: 1,
    //         total: 12
    //     },
    //     {
    //         _id: "62de7faeb125d2ef2fd0936f_38",
    //         name: "Product abc abc cashd asdhkas asj 2022",
    //         regularPrice: 11,
    //         salePrice: 10,
    //         img: "https://picsum.photos/200/300",
    //         desc: "https://picsum.photos/200/300sfas ácasxas",
    //         size: 35,
    //         categoryId: "62dd7af5b7f1d90d9ffc8305",
    //         quantity: 1,
    //         total: 10
    //     },
    //     {
    //         _id: "62de7faeb125d2ef2fd0936f_39",
    //         name: "Product abc abc cashd asdhkas asj 2022",
    //         regularPrice: 111,
    //         img: "https://picsum.photos/200/300",
    //         desc: "https://picsum.photos/200/300sfas ácasxas",
    //         size: 35,
    //         categoryId: "62dd7af5b7f1d90d9ffc8305",
    //         quantity: 1,
    //         total: 111
    //     }
    // ]
    // if (typeof window !== 'undefined') {
    //     localStorage.setItem('cart', JSON.stringify(fakeDataCart))
    // }
    let cart = [];
    let amount = 0
    let total = 0
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }
    }
    return (
        <div className="tw-drawer-side">
            <label htmlFor="my-drawer-4" className="tw-drawer-overlay"></label>
            <div className="tw-h-screen tw-menu tw-overflow-y-auto tw-w-[400px] tw-bg-base-100 tw-text-base-content">
                <div className={styles['cart-sidebar__header']}>
                    <Icon.Cart /> <span>{cart.length} item(s)</span>
                </div>
                <div className={styles['cart-sidebar__list']}>
                    {cart.map((item, index) => (
                        <div key={index} className={styles['cart-sidebar__item']}>
                            <div className={styles['cart-sidebar__action-quantity']}>
                                <button className={styles['cart-sidebar__button']}>
                                    <Icon.PlusRegular onClick={() => increaseQty(item._id)}/>
                                </button>
                                <span className={styles['cart-sidebar__quantity']}>{item.quantity}</span>
                                <button className={styles['cart-sidebar__button']}>
                                    <Icon.Minus />
                                </button>
                            </div>
                            <div className={styles['cart-sidebar__info']}>
                                <Link href="">
                                    <img className={styles['cart-sidebar__img']} src={item.img} alt="" />
                                </Link>
                                <div className={styles['cart-sidebar__text']}>
                                    <h3><Link href=""><a href="" className={styles['cart-sidebar__title']}>Product Aaas vasvas as sdsdd asdasd</a></Link></h3>
                                    <span className={styles['cart-sidebar__price']}>
                                        {(item?.salePrice) ? formatPrice(item?.salePrice) : formatPrice(item?.regularPrice)}
                                        {(item?.salePrice) ? <span className="tw-line-through tw-pl-1">{formatPrice(item?.regularPrice)}</span> : ""}
                                        <span className="tw-px-1">x</span>
                                        {item.quantity}
                                    </span>
                                    <span className={styles['cart-sidebar__size']}>Size: {item.size}</span>
                                    <span className={styles['cart-sidebar__sub-total']}>{total = item.quantity }</span>
                                </div>
                            </div>
                            <div className={styles['cart-sidebar__action-del']}>
                                <Icon.Close className="tw-text-3xl tw-m-auto tw-text-zinc-400 tw-cursor-pointer tw-duration-75 hover:tw-text-zinc-600" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles['cart-sidebar__footer']}>
                    <Link href="/abc">
                        <Button.Fill className="tw-block tw-w-full !tw-h-3 !tw-p-1" content={`Checkout now $${abc}`} />
                    </Link>
                    <Link href="/abc">
                        <Button.Transparent className="tw-block tw-w-full" content={`View cart`} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartSidebar