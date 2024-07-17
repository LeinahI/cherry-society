import React from 'react';
import Image from "next/image";
import Logo from "@/public/assets/images/Illustrator/cherry_soc.png";

function About() {
    return (
        <section className='grid grid-cols-12 mt-20'>
            <div className="2xs:col-span-12 md:col-span-6 2xs:mt-10 xl:mt-20">
                <div
                    className="text-primary 2xs:mx-10 sm:mx-8"
                >
                    <div className='flex'>
                        <span className='self-center font-funkhouse text-stroke-[2px] text-stroke-[#fff] font-bold 2xs:text-3xl sm:text-5xl md:text-3xl lg:text-5xl xl:text-6xl'>About</span>
                        <Image className={`ml-5 h-36 w-auto inline`} alt="Cherry Society Logo" src={Logo} />
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
            {/*  <div className="2xs:col-span-12 md:col-span-6 2xs:mt-10 xl:mt-20">
                <div
                    className="text-primary 2xs:mx-10 sm:mx-8"
                >
                    <div
                        className={` font-bold 2xs:text-3xl sm:text-5xl md:text-3xl lg:text-5xl xl:text-6xl`}
                    >
                        Artisanal Coffee Tasting
                    </div>
                    <div className="font-bold">
                        <span className="xs:block sm:inline">Every Saturday 2:00PM</span>
                        <span className="2xs:float-left sm:float-right md:float-left lg:float-right">
                            Entry Price ₱ 1200
                        </span>
                    </div>
                    <div className="mt-16 grid grid-cols-12 gap-5">
                        <div className="2xs:col-span-12 xl:col-span-6">
                            Embark on a journey of discovery with our Artisanal Coffee Tasting
                            Experience. Delve into the world of coffee craftsmanship as our
                            expert baristas guide you through a sensory exploration of our
                            finest blends. From the rich and robust notes of our house blend
                            to the delicate nuances of single-origin varieties, each cup tells
                            a story of origin, flavor profile, and brewing technique.
                        </div>
                        <div className="2xs:col-span-12 xl:col-span-6">
                            Learn about the art of coffee roasting. brewing methods, and the
                            importance of ethical sourcing as you savor each distinct cup.
                            Accompanied by delectable pairings of artisanal treats, this
                            interactive and educational event promises to awaken your palate
                            and deepen your appreciation for the complexities of coffee.
                            Whether you're a coffee enthusiast or a curious beginner, join us
                            for an unforgettable journey into the world of artisanal coffee.
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    )
}

export default About