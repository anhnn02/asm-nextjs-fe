/* eslint-disable @next/next/no-img-element */
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import Link from 'next/link';
import React from 'react'
import styles from "./CartSidebar.module.scss";

type Props = {}

const CartSidebar = (props: Props) => {
    const abc = 12 + 12
    return (
        <div className="tw-drawer-side">
            <label htmlFor="my-drawer-4" className="tw-drawer-overlay"></label>
            <div className="tw-h-screen tw-menu tw-overflow-y-auto tw-w-[400px] tw-bg-base-100 tw-text-base-content">
                <div className={styles['cart-sidebar__header']}>
                    <Icon.Cart /> <span>5 item(s)</span>
                </div>
                <div className={styles['cart-sidebar__list']}>
                    <div className={styles['cart-sidebar__item']}>
                        <div className={styles['cart-sidebar__action-quantity']}>
                            <button className={styles['cart-sidebar__button']}>
                                <Icon.PlusRegular />
                            </button>
                            <span className={styles['cart-sidebar__quantity']}>1</span>
                            <button className={styles['cart-sidebar__button']}>
                                <Icon.Minus />
                            </button>
                        </div>
                        <div className={styles['cart-sidebar__info']}>
                            <Link href="">
                                <img className={styles['cart-sidebar__img']} src="https://picsum.photos/200/300" alt="" />
                            </Link>
                            <div className={styles['cart-sidebar__text']}>
                                <h3><Link href=""><a href="" className={styles['cart-sidebar__title']}>Product Aaas vasvas as sdsdd asdasd</a></Link></h3>
                                <span className={styles['cart-sidebar__price']}>$250.00 x 1</span>
                                <span className={styles['cart-sidebar__size']}>Size: 36</span>
                                <span className={styles['cart-sidebar__sub-total']}>$250.00</span>
                            </div>
                        </div>
                        <div className={styles['cart-sidebar__action-del']}>
                            <Icon.Close className="tw-text-3xl tw-m-auto tw-text-zinc-400 tw-cursor-pointer tw-duration-75 hover:tw-text-zinc-600" />
                        </div>
                    </div>
                    <div className={styles['cart-sidebar__item']}>
                        <div className={styles['cart-sidebar__action-quantity']}>
                            <button className={styles['cart-sidebar__button']}>
                                <Icon.PlusRegular />
                            </button>
                            <span className={styles['cart-sidebar__quantity']}>1</span>
                            <button className={styles['cart-sidebar__button']}>
                                <Icon.Minus />
                            </button>
                        </div>
                        <div className={styles['cart-sidebar__info']}>
                            <Link href="">
                                <img className={styles['cart-sidebar__img']} src="https://picsum.photos/200/300" alt="" />
                            </Link>
                            <div className={styles['cart-sidebar__text']}>
                                <h3><Link href=""><a href="" className={styles['cart-sidebar__title']}>Product Aaas vasvas as sdsdd asdasd</a></Link></h3>
                                <span className={styles['cart-sidebar__price']}>$250.00 x 1</span>
                                <span className={styles['cart-sidebar__size']}>Size: 36</span>
                                <span className={styles['cart-sidebar__sub-total']}>$250.00</span>
                            </div>
                        </div>
                        <div className={styles['cart-sidebar__action-del']}>
                            <Icon.Close className="tw-text-3xl tw-m-auto tw-text-zinc-400 tw-cursor-pointer tw-duration-75 hover:tw-text-zinc-600" />
                        </div>
                    </div>
                    <div className={styles['cart-sidebar__item']}>
                        <div className={styles['cart-sidebar__action-quantity']}>
                            <button className={styles['cart-sidebar__button']}>
                                <Icon.PlusRegular />
                            </button>
                            <span className={styles['cart-sidebar__quantity']}>1</span>
                            <button className={styles['cart-sidebar__button']}>
                                <Icon.Minus />
                            </button>
                        </div>
                        <div className={styles['cart-sidebar__info']}>
                            <Link href="">
                                <img className={styles['cart-sidebar__img']} src="https://picsum.photos/200/300" alt="" />
                            </Link>
                            <div className={styles['cart-sidebar__text']}>
                                <h3><Link href=""><a href="" className={styles['cart-sidebar__title']}>Product Aaas vasvas as sdsdd asdasd</a></Link></h3>
                                <span className={styles['cart-sidebar__price']}>$250.00 x 1</span>
                                <span className={styles['cart-sidebar__size']}>Size: 36</span>
                                <span className={styles['cart-sidebar__sub-total']}>$250.00</span>
                            </div>
                        </div>
                        <div className={styles['cart-sidebar__action-del']}>
                            <Icon.Close className="tw-text-3xl tw-m-auto tw-text-zinc-400 tw-cursor-pointer tw-duration-75 hover:tw-text-zinc-600" />
                        </div>
                    </div>
                    <div className={styles['cart-sidebar__item']}>
                        <div className={styles['cart-sidebar__action-quantity']}>
                            <button className={styles['cart-sidebar__button']}>
                                <Icon.PlusRegular />
                            </button>
                            <span className={styles['cart-sidebar__quantity']}>1</span>
                            <button className={styles['cart-sidebar__button']}>
                                <Icon.Minus />
                            </button>
                        </div>
                        <div className={styles['cart-sidebar__info']}>
                            <Link href="">
                                <img className={styles['cart-sidebar__img']} src="https://picsum.photos/200/300" alt="" />
                            </Link>
                            <div className={styles['cart-sidebar__text']}>
                                <h3><Link href=""><a href="" className={styles['cart-sidebar__title']}>Product Aaas vasvas as sdsdd asdasd</a></Link></h3>
                                <span className={styles['cart-sidebar__price']}>$250.00 x 1</span>
                                <span className={styles['cart-sidebar__size']}>Size: 36</span>
                                <span className={styles['cart-sidebar__sub-total']}>$250.00</span>
                            </div>
                        </div>
                        <div className={styles['cart-sidebar__action-del']}>
                            <Icon.Close className="tw-text-3xl tw-m-auto tw-text-zinc-400 tw-cursor-pointer tw-duration-75 hover:tw-text-zinc-600" />
                        </div>
                    </div>
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