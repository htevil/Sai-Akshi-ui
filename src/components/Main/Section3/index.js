import React, {  useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './index.css';
import { Autoplay, Navigation } from 'swiper/modules';
import { images } from '../../../Data/imageData';

export default function Plans() {

  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [isSmallThan768, setIsSmallThan768] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsSmallThan768(window.innerWidth < 768);
    const viewportWidth = window.innerWidth;
    if (viewportWidth < 768) {
      setCardsPerPage(1);
    } else if (viewportWidth < 1200) {
      setCardsPerPage(2);
    } else {
      setCardsPerPage(3);
    }
  };

  useEffect(() => {
    handleResize(); // Call initially to set correct state
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="plans" id="Plans" style={{ width: "100%", backgroundColor: "#D9EDBF", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <div style={{ width: "100%", maxWidth: "1560px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h1 className="heading" id='h3' style={{ fontSize: isSmallThan768? "28px" : "32px", color: "#FF9800", marginBottom:"10px" }}>Our Plans</h1>
          <Swiper
            slidesPerView={cardsPerPage}
            spaceBetween={20}
            navigation={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide>
                <div className='card' key={index} style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "5px", backgroundColor: "#D9EDBF" }}>
                  <img src={image.src} alt={`plan_${image.src}`} style={{ width: "100%", borderRadius: "8px", border: "3.5px solid #2C7865" }} />
                  <span style={{ width: "40%", display: "flex", justifyContent: "center", alignItems: "center", padding: "6px 0px", backgroundColor: "#90D26D", borderRadius: "4px", color: "#2C7865", fontSize: "18px", fontWeight: "600" }}>{image.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
    </div>
  );
}
