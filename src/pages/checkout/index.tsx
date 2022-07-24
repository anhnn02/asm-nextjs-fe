import Button from '@/components/Button'
import React from 'react'
import styles from './Checkout.module.scss'

type Props = {}

const CheckOut = (props: Props) => {
    return (
        <div>
            <div className={styles['row_progress_of_customer']}>
                <div className={styles['progress_of_customer']}>
                    <div className={styles['format_progress_of_customer']}>
                        <div className={styles['step_progress-active']}><span>1. Cart</span></div>
                        <div className={styles['line_progress-active']}></div>
                        <div className={styles['step_progress-active']}><span>2. Checkout</span></div>
                        <div className={styles['line_progress-unactive']}></div>
                        <div className={styles['step_progress-unactive']}><span>3. Order completed</span></div>
                    </div>
                </div>
                <div className={styles['clone_sidebar_invisible']}></div>
            </div>
            <div className={styles['content_checkout']}>
                <div className={styles['form_checkout']}>
                    <form action="">
                        <div className={styles['form_checkout_inside']}>
                            <div className={styles['header-form_checkout']}>
                                <h3 className='tw-capitalize tw-font-semibold'>shipping address</h3>
                                <div>
                                    <label htmlFor="my-modal" className='tw-font-semibold tw-text-red-600 tw-underline tw-modal-button tw-cursor-pointer'>Use other Address</label>
                                    <input type="checkbox" id="my-modal" className="tw-modal-toggle" />
                                    <div className="tw-modal">
                                        <div className="tw-modal-box">
                                            <h3 className="tw-font-bold text-lg">Congratulations random Internet user!</h3>
                                            <p className="tw-py-4">You have been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                            <div className="tw-modal-action">
                                                <label htmlFor="my-modal" className="tw-btn">Yay!</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['form_checkout-row']}>
                                <div>
                                    <label className={styles['label-form_checkout']} htmlFor="">full name</label>
                                    <input className={styles['input-form_checkout']} type="text" />
                                    <label className={styles['label-form_checkout']} htmlFor="">phone number</label>
                                    <input className={styles['input-form_checkout']} type="text" />
                                </div>
                                <div>
                                    <label className={styles['label-form_checkout']} htmlFor="">email</label>
                                    <input className={styles['input-form_checkout']} type="text" />
                                    <label className={styles['label-form_checkout']} htmlFor="">address</label>
                                    <input className={styles['input-form_checkout']} type="text" />
                                </div>
                            </div>
                            <div>
                                <label className={styles['label-form_checkout']} htmlFor="">note</label>
                                <textarea className={styles['textarea-form_checkout']} rows="4"></textarea>
                            </div>
                        </div>
                        <div className={styles['submit-form_checkout']}>
                            <Button.Transparent className="tw-bg-white" content={"Back to Cart"} />
                            <Button.Fill content={"Proceed to Payment"} />
                        </div>
                    </form>
                </div >
                <div className={styles['sidebar_checkout']}>
                    <div className={styles['sidebar_checkout_inside']}>
                        <div>
                            <div className={styles['infor_checkout']} >
                                <div className={styles['row-infor_checkout']}>
                                    <div><span className={styles['color-text-infor_checkout']}>Subtotal:</span></div>
                                    <div><span className='tw-font-semibold'><span className='tw-text-xl'>$9999</span>.00</span></div>
                                </div>
                                <div className={styles['row-infor_checkout']}>
                                    <div><span className={styles['color-text-infor_checkout']}>Shipping:</span></div>
                                    <div><span className='tw-font-semibold'><span className='tw-text-xl'>$00</span>.00</span></div>
                                </div>
                                <div className={styles['row-infor_checkout']}>
                                    <div><span className={styles['color-text-infor_checkout']}>Tax:</span></div>
                                    <div><span className='tw-font-semibold'><span className='tw-text-xl'>$40</span>.00</span></div>
                                </div>
                                <div className={styles['row-infor_checkout']}>
                                    <div><span className={styles['color-text-infor_checkout']}>Discount:</span></div>
                                    <div><span className='tw-font-semibold'><span className='tw-text-xl'>$00</span>.00</span></div>
                                </div>
                            </div>
                        </div>
                        <div className='tw-text-right tw-mb-6'><span className='tw-text-2xl tw-font-semibold'>$10039.00</span></div>
                        <form action="">
                            <input type="text" placeholder='Voucher' className={styles['input-form_checkout']} />
                            <Button.Transparent className='tw-w-full' content={'Apply Voucher'} />
                        </form>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default CheckOut