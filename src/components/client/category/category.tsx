import useCate from '@/hooks/use-category';
import { Component} from 'react'

import "react-slideshow-image/dist/styles.css";
 import { Swiper, SwiperSlide } from "swiper/react";
 import React from 'react';
 // Import Swiper styles
 import "swiper/css";
import Card from 'react-bootstrap/Card';

import styles from './Category.module.scss'

import { Slide } from 'react-slideshow-image';



import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; //here
import "slick-carousel/slick/slick-theme.css";  



type Props = {
  
};

function Category({}: Props) {
  const { data, error } = useCate();
  console.log(data);

  if (!data) return <div>Loading...</div>;
  if (error) return <div>Failed to loading</div>;
  
      
      return (
        <>
          <h2 className={styles["h1"]}>Category</h2>

          <Swiper
            className={styles["swip"]}
            spaceBetween={50}
            
            slidesPerView={4}
            
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <div className="swiper-wrapper">
              {data.map((item, index) => (
                <Card
                  className="swiper-slide"
                  style={{ width: "18rem" }}
                  key={index}
                >
                  <Card.Body>
                    <SwiperSlide className={styles["box-category"]}>
                      {item.name}
                    </SwiperSlide>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Swiper>
        </>
      );
    }
  
export default Category