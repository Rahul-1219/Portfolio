import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Certificate.scss";

const Certificate = () => {
  const [certificates, setCertificates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "certificates"]';

    client.fetch(query).then((data) => {
      setCertificates(data);
    });
  }, []);

  const certificate = certificates[currentIndex];

  return (
    <>
      <h2 className="head-text">Certifications</h2>
      {certificates.length && (
        <>
          <div className="app__certificate-item app__flex">
            <a href={certificate.link} target="_blank" rel="noreferrer">
              <motion.img
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: [1, 0.98] }}
                transition={{ duration: 0.5, type: "tween" }}
                src={urlFor(certificate.imgUrl)}
                alt="certificate"
              />
            </a>
            <div className="app__certificate-content">
              <div>
                <p className="bold-text">
                  The Complete 2023 Web Development Bootcamp
                </p>
                <h4 className="bold-text">{certificate.platform}</h4>
                <h5 className="p-text"> {certificate.instructors}</h5>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="app__certificate-btns app__flex">
        <div
          className="app__flex"
          onClick={() =>
            handleClick(
              currentIndex === 0 ? certificates.length - 1 : currentIndex - 1
            )
          }
        >
          <HiChevronLeft />
        </div>
        <div
          className="app__flex"
          onClick={() =>
            handleClick(
              currentIndex === certificates.length - 1 ? 0 : currentIndex + 1
            )
          }
        >
          <HiChevronRight />
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Certificate, "app__certificate"),
  "certificate",
  "app__primarybg"
);
