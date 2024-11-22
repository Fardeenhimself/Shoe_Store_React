import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
    return (
        <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto flex justify-center">
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showArrows={false} showIndicators={false} showStatus={false}>
                <div className="aspect-[16/9] max-h-[600px] md:max-h-[600px]">
                    <img src="/1.jpg" className="object-cover w-full h-full" />
                </div>
                <div className="aspect-[16/9] max-h-[600px] md:max-h-[600px]">
                    <img src="/2.jpg" className="object-cover w-full h-full" />
                </div>
                <div className="aspect-[16/9] max-h-[600px] md:max-h-[600px]">
                    <img src="/3.jpg" className="object-cover w-full h-full" />
                </div>
            </Carousel>
        </div>
    );
}

export default Hero;



