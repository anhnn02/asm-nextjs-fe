/* eslint-disable @next/next/no-img-element */
import Button from '@/components/Button'
import AsideUser from '@/components/client/AsideUser'
import Icon from '@/components/Icon'
import useInvoice from '@/hooks/use-invoice'
import { formatPrice } from '@/utils/formatNumber'
import { IconMap } from 'antd/lib/result'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from './Orders.module.scss'
import stylesPrice from '../../components/client/shop/ListProduct.module.scss'
import { data } from 'autoprefixer'

const OrderDetail = () => {
    const { detail, editInvoice, error } = useInvoice();
    const [invoice, setInvoice] = useState();
    const [total, setTotal] = useState();
    const router = useRouter();
    const id = router.query?.id;
    useEffect(() => {
        if (!id) return;
        const get = async () => {
            const data: any = await detail(id);
            let totalPrice = 0;
            let totalOneProduct = 0;
            console.log(data)
            const cart = data.invoiceDetails;
            // console.log(cart)
            cart.forEach((element) => {
                console.log(element)
                totalOneProduct = element.quantity * element.salePrice;
                totalPrice += totalOneProduct;
            });
            // console.log(totalPrice)
            setTotal(totalPrice);
            setInvoice(data);
        };
        get();
    }, [id]);

    const btnCancelOrder = async () => {
        const confirm = window.confirm('You co muon huy order no ?')
        if (confirm) {
            console.log(invoice);
            console.log(id)
            await editInvoice()
        }
    }

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
                                <Button.Transparent className={'tw-bg-[#ffe1e6]'} onClick={() => btnCancelOrder()} content={'Cancel Order'} />
                            </div>
                        </div>
                        {invoice?.invoice.status === 0 ? (
                            <div className={styles['status-note_order']}>
                                <div className={styles['status-order_user']}>
                                    <div className={`${styles['step-status_order_user']} ${styles['step-status_order_user_active']}`}><span className={styles['style_icon']}><Icon.Cart className={styles['icon-step_status']} /></span></div>
                                    <div className={`${styles['line-status_order_user']} ${styles['line-status_order_user_unactive']}`}></div>
                                    <div className={`${styles['step-status_order_user']} ${styles['step-status_order_user_unactive']}`}><span className={styles['style_icon']}><Icon.BoxSeamFill className={styles['icon-step_status']} /></span></div>
                                    <div className={`${styles['line-status_order_user']} ${styles['line-status_order_user_unactive']}`}></div>
                                    <div className={`${styles['step-status_order_user']} ${styles['step-status_order_user_unactive']}`}><span className={styles['style_icon']}><Icon.Truck className={styles['icon-step_status']} /></span></div>
                                    <div className={`${styles['line-status_order_user']} ${styles['line-status_order_user_unactive']}`}></div>
                                    <div className={`${styles['step-status_order_user']} ${styles['step-status_order_user_unactive']}`}><span className={styles['style_icon']}><Icon.CheckLg className={styles['icon-step_status']} /></span></div>
                                </div>
                                <div className='tw-flex tw-justify-end'>
                                    <p className={styles['note-status_user']}>Estimated Delivery Date<strong> 4th October</strong></p>
                                </div>
                            </div>
                        ) : invoice?.invoice.status === 1 ? (
                            <div className={styles['status-note_order']}>
                                <div className={styles['status-order_user']}>
                                    <div className={`${styles['step-status_order_user']} ${styles['step-status_order_user_active']}`}><span className={styles['style_icon']}><Icon.Cart className={styles['icon-step_status']} /></span></div>
                                    <div className={`${styles['line-status_order_user']} ${styles['line-status_order_user_active']}`}></div>
                                    <div className={`${styles['step-status_order_user']} ${styles['step-status_order_user_active']}`}><span className={styles['style_icon']}><Icon.BoxSeamFill className={styles['icon-step_status']} /></span></div>
                                    <div className={`${styles['line-status_order_user']} ${styles['line-status_order_user_unactive']}`}></div>
                                    <div className={`${styles['step-status_order_user']} ${styles['step-status_order_user_unactive']}`}><span className={styles['style_icon']}><Icon.Truck className={styles['icon-step_status']} /></span></div>
                                    <div className={`${styles['line-status_order_user']} ${styles['line-status_order_user_unactive']}`}></div>
                                    <div className={`${styles['step-status_order_user']} ${styles['step-status_order_user_unactive']}`}><span className={styles['style_icon']}><Icon.CheckLg className={styles['icon-step_status']} /></span></div>
                                </div>
                                <div className='tw-flex tw-justify-end'>
                                    <p className={styles['note-status_user']}>Estimated Delivery Date<strong> 4th October</strong></p>
                                </div>
                            </div>
                        ) : invoice?.invoice.status === 2 ? (
                            <div className={styles['status-note_order']}>
                                <div className={styles['status-order_user']}>
                                    <div className={`${styles['step-status_order_user']} ${styles['step-status_order_user_active']}`}><span className={styles['style_icon']}><Icon.Cart className={styles['icon-step_status']} /></span></div>
                                    <div className={`${styles['line-status_order_user']} ${styles['line-status_order_user_active']}`}></div>
                                    <div className={`${styles['step-status_order_user']} ${styles['step-status_order_user_active']}`}><span className={styles['style_icon']}><Icon.BoxSeamFill className={styles['icon-step_status']} /></span></div>
                                    <div className={`${styles['line-status_order_user']} ${styles['line-status_order_user_active']}`}></div>
                                    <div className={`${styles['step-status_order_user']} ${styles['step-status_order_user_active']}`}><span className={styles['style_icon']}><Icon.Truck className={styles['icon-step_status']} /></span></div>
                                    <div className={`${styles['line-status_order_user']} ${styles['line-status_order_user_active']}`}></div>
                                    <div className={`${styles['step-status_order_user']} ${styles['step-status_order_user_active']}`}><span className={styles['style_icon']}><Icon.CheckLg className={styles['icon-step_status']} /></span></div>
                                </div>
                                <div className='tw-flex tw-justify-end'>
                                    <p className={styles['note-status_user']}>Estimated Delivery Date<strong> 4th October</strong></p>
                                </div>
                            </div>
                        ) : invoice?.invoice.status === 3 ? (
                            <div className={styles['status-note_order']}>
                                <div className={styles['status-order_user']}>
                                    <div className={`${styles['step-status_order_user']} ${styles['step-status_order_user_active']}`}><span className={styles['style_icon']}><Icon.Cart className={styles['icon-step_status']} /></span></div>
                                    <div className={`${styles['line-status_order_user']} ${styles['line-status_order_user_unactive']}`}></div>
                                    <div className={`${styles['step-status_order_user']} ${styles['step-status_order_user_unactive']}`}><span className={styles['style_icon']}><Icon.CheckLg className={styles['icon-step_status']} /></span></div>
                                </div>
                                <div className='tw-flex tw-justify-end'>
                                    <p className={styles['note-status_user']}>Estimated Delivery Date<strong> 4th October</strong></p>
                                </div>
                            </div>
                        ) : invoice?.invoice.status === 4 ? (
                            <div className={styles['status-note_order']}>
                                <div className={styles['status-order_user']}>
                                    <div className={`${styles['step-status_order_user']} ${styles['step-status_order_user_active']}`}><span className={styles['style_icon']}><Icon.Cart className={styles['icon-step_status']} /></span></div>
                                    <div className={`${styles['line-status_order_user']} ${styles['line-status_order_user_active']}`}></div>
                                    <div className={`${styles['step-status_order_user']} ${styles['step-status_order_user_active']}`}><span className={styles['style_icon']}><Icon.XCircle className={styles['icon-step_status']} /></span></div>
                                    <div className={`${styles['line-status_order_user']} ${styles['line-status_order_user_unactive']}`}></div>
                                    <div className={`${styles['step-status_order_user']} ${styles['step-status_order_user_unactive']}`}><span className={styles['style_icon']}><Icon.CheckLg className={styles['icon-step_status']} /></span></div>
                                </div>
                                <div className='tw-flex tw-justify-end'>
                                    <p className={styles['note-status_user']}>Estimated Delivery Date<strong> 4th October</strong></p>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className={styles['table_order-details']}>
                        <div className={styles['thead-table_order-details']}>
                            <div className={styles['column-table_order-details']}>
                                <div className={styles['th_table_order-details']}>Order ID:</div>
                                <div className='tw-text-sm'>{invoice?.invoice?._id}</div>
                            </div>
                            <div className={styles['column-table_order-details']}>
                                <div className={styles['th_table_order-details']}>Placed on:</div>
                                <div className='tw-text-sm'>{invoice?.invoice?.createdAt?.split("", 10)}</div>
                            </div>
                            <div className={styles['column-table_order-details']}>
                                <div className={styles['th_table_order-details']}>Delivered on:</div>
                                <div className='tw-text-sm'>28 Jul, 2022</div>
                            </div>
                        </div>
                        <div className='tw-py-2'>
                            {invoice?.invoiceDetails?.map((item, index) => {
                                return (
                                    <div className={styles['tr_table_order-details']} key={index}>
                                        <div className={styles['td_table_order-details']}>
                                            {/* PRODUCT IMAGE  */}
                                            <div><img className={styles['image-product_order-details']} src={item?.img} alt="" /></div>
                                            <div className='tw-ml-5'>
                                                {/* PRODUCT NAME  */}
                                                <h6 className={styles['name-product_order-details']}>{item?.name}</h6>
                                                {/* PRODUCT PRICE X PRODUCT QUANTITY */}
                                                <div className={styles['price_plus_quantity']}>
                                                    <span className='tw-font-semibold'>
                                                        {item.salePrice
                                                            ? formatPrice(item.salePrice)
                                                            : formatPrice(item.regularPrice)}
                                                    </span>
                                                    <span> </span>
                                                    <span className='tw-line-through'>
                                                        {item.salePrice ? formatPrice(item.regularPrice) : ""}
                                                    </span> x <span className={styles['quantity-product_order-details']}>{item.quantity}</span></div>
                                            </div>
                                        </div >
                                        {/* PRODUCT PROPERTIES */}
                                        <div className={styles['td_table_order-details']}>
                                            <p className={styles['properties-product_order-details']}>Size: {item.size}</p>
                                        </div>
                                        {/* WRITE A REVIEW */}
                                        <div className={`${styles['td_table_order-details']} ${styles['td_table_order-details_last']}`}>
                                            <p className={`${styles['properties-product_order-details']} && ${styles['total_order-detail-one-Product']}`}>Total: {formatPrice(item.total)}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {/* SHIPPING INFOR AND TOTAL  */}
                    <div>
                        <div className='tw-grid tw-grid-cols-2'>
                            <div className='tw-p-2'>
                                <div className={styles['shipping-total_order-details']}>
                                    <h5 className='tw-font-semibold tw-text-base tw-mb-3.5'>Shipping Address</h5>
                                    <p className='tw-text-sm'>{invoice?.invoice?.address}</p>
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
                                            <div className='tw-font-semibold'>{formatPrice(total)}</div>
                                        </div>
                                        <div className='tw-flex tw-justify-between tw-items-center tw-mb-2'>
                                            <div className='tw-text-sm tw-text-[#7d879c]'>Shipping fee:</div>
                                            <div className='tw-font-semibold'>{formatPrice(5)}</div>
                                        </div>
                                        <div className='tw-flex tw-justify-between tw-items-center tw-mb-2'>
                                            <div className='tw-text-sm tw-text-[#7d879c]'>Discount:</div>
                                            <div className='tw-font-semibold'>{formatPrice(0)}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='tw-flex tw-justify-between tw-items-center tw-mb-2'>
                                            <div className='tw-font-semibold'>Total</div>
                                            <div className={styles['total_order-detail']}>{formatPrice(total + 5)}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetail