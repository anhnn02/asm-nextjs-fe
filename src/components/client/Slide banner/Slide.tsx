import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
type Props = {};
const slideImages = [
  {
    url: "https://theperfume.vn/wp-content/uploads/2013/12/banner-nuoc-hoa-chanel.jpg",
  },
  {
    url: "http://cdn.tgdd.vn/Files/2021/05/21/1353519/nuoc-hoa-chanel-no5-va-nhung-dieu-co-the-ban-chua-biet-ve-dong-nuoc-hoa-huyen-thoai-cua-hang-202105211426326208.jpg",
  },
  {
    url: "https://i0.wp.com/luxexpose.com/wp-content/uploads/2015/02/BleudeChanel2015_large-e1423388162430.jpg?fit=1200%2C675&ssl=1",
  },
];
const Banner = (props: Props) => {
  return (
    
      
       <div className="slide-container ">
                <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div className="each-slide my-8 " key={index}>
                            <div style={{ 'backgroundImage': `url(${slideImage.url})` }} >
                                <span>{slideImage.caption}</span>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>

    
  );
};

export default Banner;
