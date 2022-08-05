/* eslint-disable @next/next/no-img-element */
import Button from '@/components/Button';
import React from 'react'
import styles from "./Contact.module.scss";

type Props = {}

const Contact = (props: Props) => {
    return (
        <div className={styles["contact"]}>
            <div className={styles["contact__img"]}>
                <img src="https://i.imgur.com/xW2L4SC.png" alt="" />
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
    )
}

export default Contact