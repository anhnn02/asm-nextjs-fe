/* eslint-disable react-hooks/exhaustive-deps */
import { read } from '@/api/auth'
import AsideUser from '@/components/client/AsideUser'
import Icon from '@/components/Icon'
import { useAuth } from '@/hooks/auth'
import { formatPrice } from '@/utils/formatNumber'
import { IconMap } from 'antd/lib/result'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './Orders.module.scss'

const OrderList = () => {
    // const { readUserOrder } = useAuth();
    const idUser = JSON.parse(localStorage.getItem('user')).user._id;
    const [userOrder, setUserOrder] = useState();
    // console.log(idUser);
    // console.log(readUserOrder(idUser))
    // const data = readUserOrder(idUser);
    useEffect(() => {
        const getUserOrder = async () => {
            const data = await read(idUser);
            console.log(data);
            const dataInvoice = data?.invoices;
            console.log(dataInvoice);
            setUserOrder(data);
        }
        getUserOrder()
    }, [])

    return (
        <div className=''>
            <div className={styles['main-user_multichoice']}>
                <AsideUser />
                <div className={styles['content-user_multichoice']}>
                    <div>
                        <div className={styles['header-user_style']}>
                            <Icon.OrderFill className={styles['icon-user_multichoice']} content="" />
                            <h2 className={styles['title-user_multichoice']}>my orders</h2>
                        </div>
                        <div className={styles['thead_table_user']}>
                            <div className={styles['th_table_user']}>
                                <span>order #</span>
                            </div>
                            <div className={styles['th_table_user']}>
                                <span>status</span>
                            </div>
                            <div className={styles['th_table_user']}>
                                <span>date purchased</span>
                            </div>
                            <div className={styles['th_table_user']}>
                                <span>total</span>
                            </div>
                            <div className={styles['th_table_user-none-flex']}>
                            </div>
                        </div>
                        <div className={styles['tbody_table_user']}>
                            {
                                userOrder?.invoices.map((item, index) => {
                                    return (
                                        <Link href={`/orders/${item._id}`} className='' key={index}>
                                            <div className={styles['tr-tbody_table_user']}>
                                                <h5 className={`${styles['order_item']} && tw-truncate`}><span className={styles['order_id']}>{item._id}</span></h5>
                                                {
                                                    item.status === 0 ? (
                                                        <div className={styles['order_item']}><span className={styles['order_status_pending-progress']}>Pending</span></div>
                                                    )
                                                        :
                                                        item.status === 1 ? (
                                                            <div className={styles['order_item']}><span className={styles['order_status_pending-progress']}>Shipping</span></div>
                                                        )
                                                            :
                                                            item.status === 2 ? (
                                                                <div className={styles['order_item']}><span className={styles['order_status_delevered']}>Delivered</span></div>
                                                            )
                                                                :
                                                                item.status === 3 ? (
                                                                    <div className={styles['order_item']}><span className={styles['order_status_cancelled']}>Cancel</span></div>
                                                                )
                                                                    :
                                                                    item.status === 4 ? (
                                                                        <div className={styles['order_item']}><span className={styles['order_status_cancelled']}>Cancelled</span></div>
                                                                    ) :
                                                                        ("")
                                                }
                                                <div className={styles['order_item']}><span className={styles['order_date']}>{item.createdAt.split("", 10)}</span></div>
                                                <div className={styles['order_item']}><span className={styles['order_total']}>{formatPrice(item.total)}</span></div>
                                                <div className={styles['order_item_none-flex']}><Link href={`/orders/${item._id}`}><button className={styles['order_view-detail']}><Icon.ArrowRight className={styles["btn_arrow_right_view-detail"]} content="" /></button></Link></div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        <div className={styles['pagination_page']}>
                            <div className={styles['pagination_item-selected']}><Icon.ChevronLeft className={styles['pag_previous']} /></div>
                            <div className={styles['pagination_item-selected']}><span>1</span></div>
                            <div className={styles['pagination_item']}><span>2</span></div>
                            <div className={styles['pagination_item']}><span>3</span></div>
                            <div className={styles['pagination_item']}><span>4</span></div>
                            <div className={styles['pagination_item']}><span>5</span></div>
                            <div className={styles['pagination_item-selected']}><Icon.ChevronRight className={styles['pag_next']} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderList