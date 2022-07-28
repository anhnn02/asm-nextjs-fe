import AsideUser from '@/components/client/AsideUser'
import Icon from '@/components/Icon'
import { IconMap } from 'antd/lib/result'
import Link from 'next/link'
import React from 'react'
import styles from './Orders.module.scss'

const OrderList = () => {
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
                            <Link href="/" className=''>
                                <div className={styles['tr-tbody_table_user']}>
                                    <h5 className={styles['order_item']}><span className={styles['order_id']}>1050017AS</span></h5>
                                    <div className={styles['order_item']}><span className={styles['order_status_pending-progress']}>pending</span></div>
                                    <div className={styles['order_item']}><span className={styles['order_date']}>jul 26, 2022</span></div>
                                    <div className={styles['order_item']}><span className={styles['order_total']}>$350.00</span></div>
                                    <div className={styles['order_item_none-flex']}><Link href="/"><button className={styles['order_view-detail']}><Icon.ArrowRight className={styles["btn_arrow_right_view-detail"]} content="" /></button></Link></div>
                                </div>
                            </Link>
                            <Link href="/" className=''>
                                <div className={styles['tr-tbody_table_user']}>
                                    <h5 className={styles['order_item']}><span className={styles['order_id']}>1050017AS</span></h5>
                                    <div className={styles['order_item']}><span className={styles['order_status_pending-progress']}>processing</span></div>
                                    <div className={styles['order_item']}><span className={styles['order_date']}>jul 26, 2022</span></div>
                                    <div className={styles['order_item']}><span className={styles['order_total']}>$350.00</span></div>
                                    <div className={styles['order_item_none-flex']}><Link href="/"><button className={styles['order_view-detail']}><Icon.ArrowRight className={styles["btn_arrow_right_view-detail"]} content="" /></button></Link></div>
                                </div>
                            </Link>
                            <Link href="/" className=''>
                                <div className={styles['tr-tbody_table_user']}>
                                    <h5 className={styles['order_item']}><span className={styles['order_id']}>1050017AS</span></h5>
                                    <div className={styles['order_item']}><span className={styles['order_status_delivered']}>delivered</span></div>
                                    <div className={styles['order_item']}><span className={styles['order_date']}>jul 26, 2022</span></div>
                                    <div className={styles['order_item']}><span className={styles['order_total']}>$350.00</span></div>
                                    <div className={styles['order_item_none-flex']}><Link href="/"><button className={styles['order_view-detail']}><Icon.ArrowRight className={styles["btn_arrow_right_view-detail"]} content="" /></button></Link></div>
                                </div>
                            </Link>
                            <Link href="/" className=''>
                                <div className={styles['tr-tbody_table_user']}>
                                    <h5 className={styles['order_item']}><span className={styles['order_id']}>1050017AS</span></h5>
                                    <div className={styles['order_item']}><span className={styles['order_status_cancelled']}>cancelled</span></div>
                                    <div className={styles['order_item']}><span className={styles['order_date']}>jul 26, 2022</span></div>
                                    <div className={styles['order_item']}><span className={styles['order_total']}>$350.00</span></div>
                                    <div className={styles['order_item_none-flex']}><Link href="/"><button className={styles['order_view-detail']}><Icon.ArrowRight className={styles["btn_arrow_right_view-detail"]} content="" /></button></Link></div>
                                </div>
                            </Link>
                            <Link href="/" className=''>
                                <div className={styles['tr-tbody_table_user']}>
                                    <h5 className={styles['order_item']}><span className={styles['order_id']}>1050017AS</span></h5>
                                    <div className={styles['order_item']}><span className={styles['order_status_cancelled']}>cancelled</span></div>
                                    <div className={styles['order_item']}><span className={styles['order_date']}>jul 26, 2022</span></div>
                                    <div className={styles['order_item']}><span className={styles['order_total']}>$350.00</span></div>
                                    <div className={styles['order_item_none-flex']}><Link href="/"><button className={styles['order_view-detail']}><Icon.ArrowRight className={styles["btn_arrow_right_view-detail"]} content="" /></button></Link></div>
                                </div>
                            </Link>
                        </div>
                        <div className={styles['pagination_page']}>
                            <div className={styles['pagination_item-selected']}><Icon.ChevronLeft className={styles['pag_previous']}/></div>
                            <div className={styles['pagination_item-selected']}><span>1</span></div>
                            <div className={styles['pagination_item']}><span>2</span></div>
                            <div className={styles['pagination_item']}><span>3</span></div>
                            <div className={styles['pagination_item']}><span>4</span></div>
                            <div className={styles['pagination_item']}><span>5</span></div>
                            <div className={styles['pagination_item-selected']}><Icon.ChevronRight className={styles['pag_next']}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderList