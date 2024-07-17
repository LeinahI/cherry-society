import React, { useEffect, useState, forwardRef } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import Lunchbox from "@/public/assets/images/Photoshop/lunchbox.png";
import Cherry from "@/public/assets/images/Photoshop/cherry.png";
import Person1 from "@/public/assets/images/Photoshop/person_1.png";
import Person2 from "@/public/assets/images/Photoshop/person_2.png";
import Person3 from "@/public/assets/images/Photoshop/person_3.png";
import Person4 from "@/public/assets/images/Photoshop/person_4.png";
import Image from "next/image";

function Hero() {

    const twoxlAndXl = useMediaQuery({ minWidth: 1280 });
    const large = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
    const medium = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const small = useMediaQuery({ minWidth: 640, maxWidth: 767 });
    const xs = useMediaQuery({ minWidth: 450, maxWidth: 639 });

    const [lunchboxSize, setLunchboxSize] = useState(569);
    const [cherrySize, setCherrySize] = useState(456);
    const [person1Size, setPerson1Size] = useState(385);
    const [person2Size, setPerson2Size] = useState(286);
    const [person3Size, setPerson3Size] = useState(606);
    const [person4Size, setPerson4Size] = useState(521);

    useEffect(() => {
        if (twoxlAndXl) {
            setLunchboxSize(569);
            setCherrySize(142);

            setPerson1Size(270);
            setPerson2Size(325);
            setPerson3Size(180);
            setPerson4Size(175);
        } else if (large) {
            setLunchboxSize(469);
            setCherrySize(114);

            setPerson1Size(220);
            setPerson2Size(270);
            setPerson3Size(148);
            setPerson4Size(148);
        } else if (medium) {
            setLunchboxSize(369);
            setCherrySize(90);

            setPerson1Size(175);
            setPerson2Size(210);
            setPerson3Size(115);
            setPerson4Size(115);
        } else if (small) {
            setLunchboxSize(269);
            setCherrySize(67);

            setPerson1Size(125);
            setPerson2Size(150);
            setPerson3Size(85);
            setPerson4Size(83);
        } else if (xs) {
            setLunchboxSize(200);
            setCherrySize(49);

            setPerson1Size(95);
            setPerson2Size(114);
            setPerson3Size(63);
            setPerson4Size(63);
        } else {
            setLunchboxSize(200);
            setCherrySize(49);

            setPerson1Size(95);
            setPerson2Size(114);
            setPerson3Size(63);
            setPerson4Size(63);
        }
    }, [twoxlAndXl, large, medium, small, xs]);


    return (
        <section className="mx-auto 2xs:mt-4 md:mt-10 relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Lunchbox */}
                <Image
                    src={Lunchbox}
                    alt="Lunchbox"
                    className="mx-auto select-none"
                    height={lunchboxSize}
                />
                {/* Person 1 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="flex justify-center">
                    <Image
                        src={Person1}
                        alt="Person 1"
                        className="select-none z-10 absolute 
                        2xs:bottom-24 2xs:mb-[8px] 2xs:left-0 2xs:ml-[26px]
                        xs:bottom-24 xs:mb-[8px] xs:left-16 xs:ml-[26px]
                        sm:bottom-28 sm:mb-[30px] sm:left-24 sm:ml-[46px]
                        md:bottom-44 md:mb-[17px] md:left-24 md:ml-[39px]
                        lg:bottom-56 lg:mb-[20px] lg:left-32 lg:ml-[70px]
                        xl:bottom-56 xl:mb-[70px] xl:left-56 xl:ml-[36px]
                        2xl:bottom-56 2xl:mb-[70px] 2xl:left-80 2xl:ml-[66px]
                        "
                        height={person1Size}
                        width={person1Size}
                    />
                </motion.div>
                {/* Person 2 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="flex justify-center">
                    <Image
                        src={Person2}
                        alt="Person 2"
                        className="select-none z-10 absolute 
                        2xs:bottom-3 2xs:mb-[6px] 2xs:left-5 2xs:ml-[0px]
                        xs:bottom-3 xs:mb-[6px] xs:left-20 xs:ml-[6px]
                        sm:bottom-3 sm:mb-[14px] sm:left-24 sm:ml-[40px]
                        md:bottom-3 md:mb-[19px] md:left-20 md:ml-[45px]
                        lg:bottom-3 lg:mb-[27px] lg:left-28 lg:ml-[70px]
                        xl:bottom-3 xl:mb-[35px] xl:left-48 xl:ml-[50px]
                        2xl:bottom-3 2xl:mb-[35px] 2xl:left-80 2xl:ml-[50px]
                        "
                        height={person2Size}
                        width={person2Size}
                    />
                </motion.div>
                {/* Person 3 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2 }}
                    className="flex justify-center">
                    <Image
                        src={Person3}
                        alt="Person 3"
                        className="select-none z-10 absolute 
                        2xs:bottom-3 2xs:mb-[6px] 2xs:left-36 2xs:ml-[6px]
                        xs:bottom-3 xs:mb-[6px] xs:left-48 xs:ml-[23px]
                        sm:bottom-3 sm:mb-[10px] sm:left-64 sm:ml-[51px]
                        md:bottom-3 md:mb-[19px] md:left-80 md:ml-[45px]
                        lg:bottom-3 lg:mb-[27px] lg:left-96 lg:ml-[103px]
                        xl:bottom-3 xl:mb-[35px] xl:left-1/3 xl:ml-[184px]
                        2xl:bottom-3 2xl:mb-[35px] 2xl:left-1/3 2xl:ml-[227px]
                        "
                        height={person3Size}
                        width={person3Size}
                    />
                </motion.div>
                {/* Person 4 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.5 }}
                    className="flex justify-center">
                    <Image
                        src={Person4}
                        alt="Person 4"
                        className="select-none z-10 absolute 
                        2xs:bottom-4 2xs:mb-[6px] 2xs:right-7 2xs:mr-[0px]
                        xs:bottom-4 xs:mb-[6px] xs:right-20 xs:mr-[14px]
                        sm:bottom-4 sm:mb-[18px] sm:right-20 sm:mr-[61px]
                        md:bottom-6 md:mb-[19px] md:right-20 md:mr-[56px]
                        lg:bottom-7 lg:mb-[27px] lg:right-20 lg:mr-[118px]
                        xl:bottom-7 xl:mb-[40px] xl:right-36 xl:mr-[118px]
                        2xl:bottom-7 2xl:mb-[40px] 2xl:right-72 2xl:mr-[106px]
                        "
                        height={person4Size}
                        width={person4Size}
                    />
                </motion.div>
                {/* Cherry */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 3 }}
                    className="flex justify-center">
                    <Image
                        src={Cherry}
                        alt="Dark Circle"
                        className="select-none z-10 absolute 
                        2xs:bottom-16 2xs:mb-[17px] 2xs:left-20 2xs:ml-[32px]
                        xs:bottom-15 xs:mb-[17px] xs:left-32 xs:ml-[49px]
                        sm:bottom-20 sm:mb-[26px] sm:left-52 sm:ml-[46px]
                        md:bottom-32 md:mb-[20px] md:left-64 md:ml-[37px]
                        lg:bottom-36 lg:mb-[48px] lg:left-80 lg:ml-[78px]
                        xl:bottom-44 xl:mb-[52px] xl:left-1/3 xl:ml-[75px]
                        2xl:bottom-44 2xl:mb-[50px] 2xl:left-1/3 2xl:ml-[115px]
                        "
                        height={cherrySize}
                        width={cherrySize}
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero;