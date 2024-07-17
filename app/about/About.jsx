import React from 'react';
import Image from "next/image";
import Logo from "@/public/assets/images/Illustrator/cherry_soc.png";
import Image1 from "@/public/assets/images/Photoshop/aboutus_1.jpg";
import Image2 from "@/public/assets/images/Photoshop/aboutus_2.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

function About() {
    return (
        <section className='grid grid-cols-12 2xs:mt-0 2xl:mt-20'>
            <div className="2xs:order-2 lg:order-1 2xs:col-span-12 lg:col-span-6 2xs:mt-10 xl:mt-20">
                <div
                    className="text-primary 2xs:mx-10 sm:mx-8"
                >
                    <div className="2xs:text-center xl:text-start xl:flex">
                        <span className='xl:self-center font-funkhouse text-stroke-[2px] text-stroke-[#fff] font-bold 2xs:text-3xl sm:text-5xl md:text-3xl lg:text-5xl xl:text-6xl'>About</span>
                        <Image className={`ml-5 h-36 w-auto 2xs:block xs:mx-auto xl:inline xl:ml-5`} alt="Cherry Society Logo" src={Logo} />
                    </div>

                    <div className="mt-5 grid grid-cols-12 gap-5 text-2xl">
                        <div className="2xs:col-span-12">
                            We are a 4 piece all girl punk band. Individually, we are every color that has ever been made. Together, a cluster of wonder.
                            We represent every little girl out there who wanted what boys had but was molded into what a female artist should look like.
                            Should be. Should have.

                            <span className="block mt-4">
                                We think you can still enjoy cute things and sing about agony. We think you could still cry over romance films and protest against double standards. We represent the ones who felt out of place, out of pace, and stuck in outer space. There are no bars to reach or boxes to fit into. This is Cherry Society. We are your best friends.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="2xs:order-1 lg:order-2 2xs:col-span-12 lg:col-span-6 2xs:mt-10 xl:mt-20">
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="
                    2xs:h-[250px] 2xs:w-[250px] 
                    xs:h-[350px] xs:w-[350px]
                    sm:h-[450px] sm:w-[450px]
                    md:h-[550px] md:w-[550px]
                    lg:h-[450px] lg:w-[450px]
                    xl:h-[600px] xl:w-[600px]
                    "
                >
                    <SwiperSlide>
                        <Image className="h-auto w-auto" src={Image1} alt="About us" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className="h-auto w-auto" src={Image2} alt="About us" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default About