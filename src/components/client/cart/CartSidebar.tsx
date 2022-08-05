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
import { confirmAlert } from 'react-confirm-alert';
import { optionDanger, optionWarning } from '@/utils/optionToast';

type Props = {}

const CartSidebar = (props: Props) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const cart = useSelector(data => data.cart.items)
    const cartTotalQuantity = useSelector(data => data.cart.totalQuantity)
    const isLogin = useSelector(data => data.user.isAuthenticated)

    //total cart
    let subTotal = 0;
    cart.forEach((item) => {
        subTotal += item.total;
    });
    let totalAmount = subTotal

    //remove action
    const removeCart = () => {
        confirmAlert(optionDanger(() => dispatch(resetCart("")), 'Are you want to delete all items?', 'Are you really you want to delete all items, This process cannot be undone?'))
    }
    const removeItemCart = (id: String) => {
        confirmAlert(optionDanger(() => dispatch(removeItemFromCart(id))))
    }

    //check user
    const checkUser = () => {
        if (!isLogin) {
            confirmAlert(optionWarning(() => router.push(path.public.loginRoute)))
        } else {
            router.push(path.public.checkoutRoute)
        }
    }

    return (
        <div className="tw-drawer-side">
            <label htmlFor="my-drawer-4" className="tw-drawer-overlay"></label>
            <div className="tw-h-screen tw-menu tw-overflow-y-auto tw-w-[400px] tw-bg-base-100 tw-text-base-content">
                <div className={styles['cart-sidebar__header']}>
                    <div className="">
                        <Icon.Cart className={""} /> <span>{cart.length} item(s)</span>
                    </div>
                    {cartTotalQuantity == 0 ? "" : <button onClick={() => removeCart()} className="tw-text-my-gray tw-font-normal">Clear All</button>}

                </div>
                {cartTotalQuantity == 0 ? <CartEmpty /> : <>
                    <div className={styles['cart-sidebar__list']}>
                        {cart.map((item, index) => (
                            <div key={index} className={styles['cart-sidebar__item']}>
                                <div className={styles['cart-sidebar__action-quantity']}>
                                    <button className={styles['cart-sidebar__button']} onClick={() => dispatch(incrementQuantity({ idInCart: item.idInCart, quantity: item.quantity }))}>
                                        <Icon.PlusRegular className={""} />
                                    </button>
                                    <span className={styles['cart-sidebar__quantity']}>{item.quantity}</span>
                                    <button className={styles['cart-sidebar__button']} onClick={() => dispatch(decrementQuantity({ idInCart: item.idInCart, quantity: item.quantity }))}>
                                        <Icon.Minus className={""}/>
                                    </button>
                                </div>
                                <div className={styles['cart-sidebar__info']}>
                                    <Link href={`/products/${item.idPro}`}>
                                        <img className={`${styles['cart-sidebar__img']} && tw-cursor-pointer`} src={item.img} alt="" />
                                    </Link>
                                    <div className={styles['cart-sidebar__text']}>
                                        <h3><Link href={`/products/${item.idPro}`}><a href="" className={styles['cart-sidebar__title']}>{item.name}</a></Link></h3>
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
                            <Button.Fill onClick={() => checkUser()}
                                className="tw-block tw-w-full !tw-h-3 !tw-p-1" content={`Checkout now ${formatPrice(totalAmount)}`} />
                            <Button.Transparent className="tw-block tw-w-full !tw-h-3 !tw-p-1" content={<Link href={path.public.cartRoute}>
                                <span>View cart</span>
                            </Link>} />
                        </div>
                    }
                </>}
            </div>
        </div>
    )
}

export default CartSidebar