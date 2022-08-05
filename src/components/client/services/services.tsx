/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './Service.module.scss'

type Props = {}

const Services = (props: Props) => {
  return (
    <>
      <section className={styles["section-center"]}>
        <div className={styles["boxbig"]}>
          <div className={styles["boxsmall"]}>
            <div className={styles["iconA"]}>
              <div className={styles["icon01"]}>
                <img
                  className={styles["icon1"]}
                  src="https://cdn-icons-png.flaticon.com/512/709/709790.png"
                />
              </div>
            </div>
            <div className={styles["text01"]}> Worldwide Delivery</div>
            <div className={styles["text02"]}>
              {" "}
              We offer competitive prices on our 100 million plus product any
              range.
            </div>
          </div>
        </div>
        <div className={styles["boxbig"]}>
          <div className={styles["boxsmall"]}>
            <div className={styles["iconA"]}>
              <div className={styles["icon01"]}>
                <img
                  className={styles["icon2"]}
                  src="https://cdn-icons-png.flaticon.com/512/8136/8136842.png"
                />
              </div>
            </div>
            <div className={styles["text01"]}> Safe Payment</div>
            <div className={styles["text02"]}>
              {" "}
              We offer competitive prices on our 100 million plus product any
              range.
            </div>
          </div>
        </div>

        <div className={styles["boxbig"]}>
          <div className={styles["boxsmall"]}>
            <div className={styles["iconA"]}>
              <div className={styles["icon01"]}>
                <img
                  className={styles["icon3"]}
                  src="https://cdn-icons-png.flaticon.com/512/884/884553.png"
                />
              </div>
            </div>
            <div className={styles["text01"]}> Shop With Confidence</div>
            <div className={styles["text02"]}>
              {" "}
              We offer competitive prices on our 100 million plus product any
              range.
            </div>
          </div>
        </div>

        <div className={styles["boxbig"]}>
          <div className={styles["boxsmall"]}>
            <div className={styles["iconA"]}>
              <div className={styles["icon01"]}>
                <img
                  className={styles["icon4"]}
                  src="https://cdn-icons-png.flaticon.com/512/937/937363.png"
                />
              </div>
            </div>
            <div className={styles["text01"]}> 24/7 Support</div>
            <div className={styles["text02"]}>
              {" "}
              We offer competitive prices on our 100 million plus product any
              range.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services