/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import userSlice from "@/features/user/user.slice";
import useSlide from "@/hooks/use-slide";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./Slide.module.scss";
type Props = {};

const Banner = (props: Props) => {
  const { data, error } = useSlide();

  if (!data) return <div>Loading...</div>;
  if (error) return <div>Failed to loading</div>;
  return (
      <>
      <div className={styles["slide-container"]} >
        <Slide>
          {data.map((item: any) => (
            <div className={styles["slide__item"]} key={item._id}>
                <div className={styles["each-slide"]} >
                  <div className={styles["image-container"]}>
                    <img src={item.img}  />
                  </div>
                </div>
              </div>
          ))}
        </Slide>
      </div>
    </>
  );
};
  

export default Banner;
