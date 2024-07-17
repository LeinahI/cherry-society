import React from 'react';

import Image from 'next/image';
import Logo from "@/public/assets/images/Illustrator/cherry_soc.png";

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";


function Navbar() {

  const xxl = useMediaQuery({ minWidth: 1536 });
  const xl = useMediaQuery({ minWidth: 1280 });
  const large = useMediaQuery({ minWidth: 1024 });
  const medium = useMediaQuery({ minWidth: 768 });
  const small = useMediaQuery({ minWidth: 640 });
  const xs = useMediaQuery({ minWidth: 450 });

  const [image, setImage] = useState(Logo);
  useEffect(() => {
    if (xxl) {
      setImage(Logo); /* xxl */
    } else if (xl) {
      setImage(Logo); /* xl */
    } else if (large) {
      setImage(Logo); /* lg */
    } else if (medium) {
      setImage(Logo); /* md */
    } else if (small) {
      setImage(Logo); /* sm */
    } else if (xs) {
      setImage(Logo); /* xs */
    } else {
      setImage(Logo);
    }
  }, [xxl, xl, large, medium, small, xs]);

  const [height, setHeight] = useState("h-36");
  useEffect(() => {
    if (xxl) {
      setHeight("h-36");
    } else if (xl) {
      setHeight("h-32");
    } else if (large) {
      setHeight("h-28");
    } else if (medium) {
      setHeight("h-24");
    } else if (small) {
      setHeight("h-20");
    } else {
      setHeight("h-20");
    }
  }, [xxl, xl, large, medium, small]);


  return (
    <div className="navbar z-50 bg-main text-primary">
      <div className="navbar-center mx-auto">
        <ul className="menu menu-horizontal">
          <li>
            <a href='#' className="btn btn-ghost h-auto">
              <Image className={`${height} w-auto`} alt="Cherry Society Logo" src={image} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar