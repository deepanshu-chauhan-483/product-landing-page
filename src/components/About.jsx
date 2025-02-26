import React from "react";
import { motion } from "framer-motion";
import "../styles/AboutUs.scss";
import Image from "../assets/aboutImg.jpg";

const About = () => {
  return (
    <div id="about" className="about-us">
      <div className="container-fluid">
        <div className="row flex-column-reverse flex-lg-row">
        
          {/* Text Section - Now Appears First */}
          <div className="col-12 col-lg-6 content-section">
          
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
             
              
            >
              ABOUT US
            </motion.h1>
            <motion.div
              className="text-content text-secondary"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              
            >
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae,
                tenetur recusandae doloremque fugiat aut ullam reprehenderit
                deleniti voluptatibus inventore facere fuga nam a error mollitia
                dicta voluptate ipsa, rerum consequatur!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                id animi omnis aut nam, fugiat quae maiores aspernatur tenetur
                ipsam sed eveniet quibusdam doloribus, dolores eaque modi
                facilis possimus nulla?
              </p>
            </motion.div>
          </div>

          {/* Image Section - Now Appears Second */}
          <div className="col-12 col-lg-6 image-section">
            <motion.div
              className="starburst-icon"
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1, rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              
            </motion.div>
            <motion.img
              src={Image}
              alt="Interior designer working at desk"
              className="about-image"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
