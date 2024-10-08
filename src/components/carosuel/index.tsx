import React from 'react';
import '@mantine/carousel/styles.css';
import { Carousel } from '@mantine/carousel';
import { images } from "../../Data/imageData";

const ProductCarousel: React.FC = () => {
    return (
        <Carousel withIndicators height={200}>
            <Carousel.Slide>1</Carousel.Slide>
            <Carousel.Slide>2</Carousel.Slide>
            <Carousel.Slide>3</Carousel.Slide>
            {/* ...other slides */}
        </Carousel>
    );
}

export default ProductCarousel;
