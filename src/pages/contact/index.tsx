/* eslint-disable @next/next/no-img-element */
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import React from 'react'
import styles from "./Contact.module.scss";

type Props = {}

const Contact = (props: Props) => {
    return (
        <>
            <div className={styles["contact-container"]}>
                <div className={styles["contact"]}>
                    <div className="">
                        <div className={styles["contact-detail"]}>
                            <div className={styles["contact-detail__item"]}>
                                <Icon.Phone className={styles["contact-detail__icon"]} /> <span className={styles["contact-detail__text"]}>012345689 <Icon.ArrowRight /></span>
                            </div>
                            <div className={styles["contact-detail__item"]}>
                                <Icon.Email className={styles["contact-detail__icon"]} /> <span className={styles["contact-detail__text"]}>nhom1nextjs@gmail.com <Icon.ArrowRight /></span>
                            </div>
                            <div className={styles["contact-detail__item"]}>
                                <Icon.Location className={styles["contact-detail__icon"]} /> <span className={styles["contact-detail__text"]}>Nam Tu Liem, Ha Noi <Icon.ArrowRight /></span>
                            </div>
                        </div>
                        <div className={styles["contact__img"]}>
                            <img src="https://i.imgur.com/xW2L4SC.png" alt="" />
                        </div>
                    </div>
                    <div className={styles["content"]}>
                        <form action="" className={`${styles['contact__form']} ${styles['form']}`}>
                            <h4 className={styles["form__title"]}>Get in touch</h4>
                            <div className={styles["form__label"]}>
                                <label className={styles["form__label"]} >
                                    Full Name
                                </label>
                                <input type="text" className={styles["form-input"]} />
                            </div>
                            <div className={styles["form__label"]}>
                                <label className={styles["form__label"]} >
                                    Email
                                </label>
                                <input type="text" className={styles["form-input"]} />
                            </div>
                            <div className={styles["form__label"]}>
                                <label className={styles["form__label"]} >
                                    Message
                                </label>
                                <textarea name="" id="" className={styles["form-textarea"]}>

                                </textarea>
                            </div>
                            <div className={styles["form__button"]}>
                                <Button.Transparent className={""} content={"Send"} />
                            </div>

                        </form>
                    </div>
                </div>
                <div className={styles["contact-map"]}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863855881387!2d105.7445984141118!3d21.03813279283602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1659902294539!5m2!1svi!2s" width="600" height="450" loading="lazy" ></iframe>
                </div>
            </div>
        </>

    )
}

export default Contact