/* eslint-disable @next/next/no-img-element */
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { formatPrice } from '@/utils/formatNumber';
import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./CartSidebar.module.scss";
import { addItemToCart, decrementQuantity, incrementQuantity, removeItemFromCart, resetCart } from '@/features/cart/cart.slice'
import { toast } from 'react-toastify';
import { add } from '@/api/product';
import CartEmpty from './CartEmpty';
import { path } from '@/constants';


type Props = {}

const CartSidebar = (props: Props) => {
    const dispatch = useDispatch()

    let totalCart = 0
    const cart = useSelector(data => data.cart.items)
    const cartTotalQuantity = useSelector(data => data.cart.totalQuantity)
    const router = useRouter()
    let subTotal = 0;
    cart.forEach((item) => {
        subTotal += item.total;
    });
    let totalAmount = subTotal

    const removeCart = () => {
        const confirm = window.confirm('Are you sure you want to delete all items?')
        if (confirm) {
            dispatch(resetCart(""))
        }
    }
    const removeItemCart = (id: String) => {
        const confirm = window.confirm('Are you sure you want to delete this item?')
        if (confirm) {
            dispatch(removeItemFromCart(id))
        }
    }

    return (
        <div className="tw-drawer-side">
            <label htmlFor="my-drawer-4" className="tw-drawer-overlay"></label>
            <div className="tw-h-screen tw-menu tw-overflow-y-auto tw-w-[400px] tw-bg-base-100 tw-text-base-content">
                <div className={styles['cart-sidebar__header']}>
                    <div className="">
                        <Icon.Cart /> <span>{cart.length} item(s)</span>
                    </div>
                    {cartTotalQuantity == 0 ? "" : <button onClick={() => removeCart()} className="tw-text-my-gray tw-font-normal">Clear All</button>}
                    
                </div>
                {cartTotalQuantity == 0 ? <CartEmpty /> : <>
                    <div className={styles['cart-sidebar__list']}>
                        {cart.map((item, index) => (
                            <div key={index} className={styles['cart-sidebar__item']}>
                                <div className={styles['cart-sidebar__action-quantity']}>
                                    <button className={styles['cart-sidebar__button']} onClick={() => dispatch(incrementQuantity({ idInCart: item.idInCart, quantity: item.quantity }))}>
                                        <Icon.PlusRegular />
                                    </button>
                                    <span className={styles['cart-sidebar__quantity']}>{item.quantity}</span>
                                    <button className={styles['cart-sidebar__button']} onClick={() => dispatch(decrementQuantity({ idInCart: item.idInCart, quantity: item.quantity }))}>
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
                                        <span className={styles['cart-sidebar__sub-total']}>{formatPrice(item.total)}</span>
                                    </div>
                                </div>
                                <div className={styles['cart-sidebar__action-del']}>
                                    <button className="tw-m-auto" onClick={() => removeItemCart(item.idInCart)}>
                                        <Icon.Close className="tw-text-3xl  tw-text-zinc-400 tw-cursor-pointer tw-duration-75 hover:tw-text-zinc-600" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {cartTotalQuantity == 0 ? "" :
                        <div className={styles['cart-sidebar__footer']}>
                            <Link href={path.public.checkoutRoute}>
                                <Button.Fill className="tw-block tw-w-full !tw-h-3 !tw-p-1" content={`Checkout now ${formatPrice(totalAmount)}`} />
                            </Link>
                            <Link href={path.public.cartRoute}>
                                <Button.Transparent className="tw-block tw-w-full" content={`View cart`} />
                            </Link>
                        </div>
                    }
                </>}
                
                
            </div>
        </div>
    )
}

export default CartSidebar