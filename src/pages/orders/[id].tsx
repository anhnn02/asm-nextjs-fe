/* eslint-disable @next/next/no-img-element */
import Button from '@/components/Button'
import AsideUser from '@/components/client/AsideUser'
import Icon from '@/components/Icon'
import { IconMap } from 'antd/lib/result'
import Link from 'next/link'
import React from 'react'
import styles from './Orders.module.scss'

const OrderDetail = () => {
    return (
        <div className=''>
            <div className={styles['main-user_multichoice']}>
                <AsideUser />
                <div className={styles['content-user_multichoice']}>
                    <div className=''>
                        <div className='tw-flex tw-items-center tw-justify-between tw-mb-6'>
                            <div className={`${styles['header-user_style']} ${'!tw-mb-0'}`}>
                                <Icon.OrderFill className={styles['icon-user_multichoice']} content="" />
                                <h2 className={styles['title-user_multichoice']}>order details</h2>
                            </div>
                            <div>
                                <Link href='/orders'><Button.Transparent className={'tw-bg-[#ffe1e6]'} content={'Order Again'} /></Link>
                            </div>
                        </div>
                        <div className={styles['status-note_order']}>
                            <div className={styles['status-order_user']}>
                                <div className={`${styles['step-status_order_user']} ${styles['step-status_order_user_active']}`}><span className={styles['style_icon']}><Icon.BoxSeamFill className={styles['icon-step_status']} /></span></div>
                                <div className={`${styles['line-status_order_user']} ${styles['line-status_order_user_active']}`}></div>
                                <div className={`${styles['step-status_order_user']} ${styles['step-status_order_user_active']}`}><span className={styles['style_icon']}><Icon.Truck className={styles['icon-step_status']} /></span></div>
                                <div className={`${styles['line-status_order_user']} ${styles['line-status_order_user_unactive']}`}></div>
                                <div className={`${styles['step-status_order_user']} ${styles['step-status_order_user_unactive']}`}><span className={styles['style_icon']}><Icon.CheckLg className={styles['icon-step_status']} /></span></div>
                            </div>
                            <div className='tw-flex tw-justify-end'>
                                <p className={styles['note-status_user']}>Estimated Delivery Date<strong> 4th October</strong></p>
                            </div>
                        </div>
                        <div className={styles['table_order-details']}>
                            <div className={styles['thead-table_order-details']}>
                                <div className={styles['column-table_order-details']}>
                                    <div className={styles['th_table_order-details']}>Order ID:</div>
                                    <div className='tw-text-sm'>9001997718074513</div>
                                </div>
                                <div className={styles['column-table_order-details']}>
                                    <div className={styles['th_table_order-details']}>Placed on:</div>
                                    <div className='tw-text-sm'>28 Jul, 2022</div>
                                </div>
                                <div className={styles['column-table_order-details']}>
                                    <div className={styles['th_table_order-details']}>Delivered on:</div>
                                    <div className='tw-text-sm'>28 Jul, 2022</div>
                                </div>
                            </div>
                            <div className='tw-py-2'>
                                <div className={styles['tr_table_order-details']}>
                                    <div className={styles['td_table_order-details']}>
                                        {/* PRODUCT IMAGE  */}
                                        <div><img className={styles['image-product_order-details']} src="https://bonik-react.vercel.app/assets/images/products/Groceries/2.PremiumGroceryCollection.png" alt="" /></div>
                                        <div className='tw-ml-5'>
                                            {/* PRODUCT NAME  */}
                                            <h6 className={styles['name-product_order-details']}>Premium Grocery Collection</h6>
                                            {/* PRODUCT PRICE X PRODUCT QUANTITY */}
                                            <div className={styles['price_plus_quantity']}><span className={styles['price-product_order-details']}>$250</span> x <span className={styles['quantity-product_order-details']}>1</span></div>
                                        </div>
                                    </div >
                                    {/* PRODUCT PROPERTIES */}
                                    <div className={styles['td_table_order-details']}>
                                        <p className={styles['properties-product_order-details']}>Product properties: Black, L</p>
                                    </div>
                                    {/* WRITE A REVIEW */}
                                    <div className={`${styles['td_table_order-details']} ${styles['td_table_order-details_last']}`}>
                                        <Link href='#'><Button.Transparent className={''} content={'Hehehe'} /></Link>
                                    </div>
                                </div>
                                <div className={styles['tr_table_order-details']}>
                                    <div className={styles['td_table_order-details']}>
                                        {/* PRODUCT IMAGE  */}
                                        <div><img className={styles['image-product_order-details']} src="https://bonik-react.vercel.app/assets/images/products/Groceries/2.PremiumGroceryCollection.png" alt="" /></div>
                                        <div className='tw-ml-5'>
                                            {/* PRODUCT NAME  */}
                                            <h6 className={styles['name-product_order-details']}>Premium Grocery Collection</h6>
                                            {/* PRODUCT PRICE X PRODUCT QUANTITY */}
                                            <div className={styles['price_plus_quantity']}><span className={styles['price-product_order-details']}>$250</span> x <span className={styles['quantity-product_order-details']}>1</span></div>
                                        </div>
                                    </div >
                                    {/* PRODUCT PROPERTIES */}
                                    <div className={styles['td_table_order-details']}>
                                        <p className={styles['properties-product_order-details']}>Product properties: Black, L</p>
                                    </div>
                                    {/* WRITE A REVIEW */}
                                    <div className={`${styles['td_table_order-details']} ${styles['td_table_order-details_last']}`}>
                                        <Link href='#'><Button.Transparent className={''} content={'Hehehe'} /></Link>
                                    </div>
                                </div>
                                <div className={styles['tr_table_order-details']}>
                                    <div className={styles['td_table_order-details']}>
                                        {/* PRODUCT IMAGE  */}
                                        <div><img className={styles['image-product_order-details']} src="https://bonik-react.vercel.app/assets/images/products/Groceries/2.PremiumGroceryCollection.png" alt="" /></div>
                                        <div className='tw-ml-5'>
                                            {/* PRODUCT NAME  */}
                                            <h6 className={styles['name-product_order-details']}>Premium Grocery Collection</h6>
                                            {/* PRODUCT PRICE X PRODUCT QUANTITY */}
                                            <div className={styles['price_plus_quantity']}><span className={styles['price-product_order-details']}>$250</span> x <span className={styles['quantity-product_order-details']}>1</span></div>
                                        </div>
                                    </div >
                                    {/* PRODUCT PROPERTIES */}
                                    <div className={styles['td_table_order-details']}>
                                        <p className={styles['properties-product_order-details']}>Product properties: Black, L</p>
                                    </div>
                                    {/* WRITE A REVIEW */}
                                    <div className={`${styles['td_table_order-details']} ${styles['td_table_order-details_last']}`}>
                                        <Link href='#'><Button.Transparent className={''} content={'Hehehe'} /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* SHIPPING INFOR AND TOTAL  */}
                        <div>
                            <div className='tw-grid tw-grid-cols-2'>
                                <div className='tw-p-2'>
                                    <div className={styles['shipping-total_order-details']}>
                                        <h5 className='tw-font-semibold tw-text-base tw-mb-3.5'>Shipping Address</h5>
                                        <p className='tw-text-sm'>Kelly Williams 777 Brockton Avenue, Abington MA 2351</p>
                                    </div>
                                </div>
                                <div className='tw-p-2'>
                                    <div className={styles['shipping-total_order-details']}>
                                        <div className=''>
                                            <h5 className='tw-font-semibold tw-text-base tw-mb-3.5'>
                                                Total summary
                                            </h5>
                                            <div className='tw-flex tw-justify-between tw-items-center tw-mb-2'>
                                                <div className='tw-text-sm tw-text-[#7d879c]'>Subtotal:</div>
                                                <div className='tw-font-semibold'>$335</div>
                                            </div>
                                            <div className='tw-flex tw-justify-between tw-items-center tw-mb-2'>
                                                <div className='tw-text-sm tw-text-[#7d879c]'>Shipping fee:</div>
                                                <div className='tw-font-semibold'>$335</div>
                                            </div>
                                            <div className='tw-flex tw-justify-between tw-items-center tw-mb-2'>
                                                <div className='tw-text-sm tw-text-[#7d879c]'>Discount:</div>
                                                <div className='tw-font-semibold'>$335</div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='tw-flex tw-justify-between tw-items-center tw-mb-2'>
                                                <div className='tw-font-semibold'>Total</div>
                                                <div className='tw-font-semibold'>$315</div>
                                            </div>
                                            <div className='tw-text-sm'>Paid by Credit/Debit Card</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default OrderDetail