import { useRef } from "react";
import "./services.scss";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      stagerChildren: 0.1,
    },
  },
};

export default function Services() {
  const ref = useRef();

  const isInView =
    (ref,
    {
      margin: "-100px",
    });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer">
        <p>
          {`"First, solve the problem. Then, write the code."`}
          <br /> - John Johnson
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            My
            <motion.b whileHover={{ color: "Orange" }}> Skills</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "Orange" }}>Let See</motion.b> What I
            Do
          </h1>
          <a href="#Portfolio">
            <motion.button
              whileHover={{ scale: 1.1, color: "white", fontWeight: "bold" }}
            >
              <HiArrowRight className="arrow" />
            </motion.button>
          </a>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Languague</h2>
          <ul>
            <li>
              <span>Javascript</span>
            </li>
            <li>
              <span>Typescript</span>
            </li>
            <li>
              <span>PHP (Basic)</span>
            </li>
          </ul>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Backend</h2>
          <ul>
            <li>
              <span>NodeJs</span>
            </li>
            <li>
              <span>Express</span>
            </li>
            <li>
              <span>Laravel (Explore)</span>
            </li>
          </ul>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Frontend</h2>
          <ul>
            <li>
              <span>HTML</span>
            </li>
            <li>
              <span>CSS</span>
            </li>
            <li>
              <span>ReactJS</span>
            </li>
            <li>
              <span>NextJs</span>
            </li>
          </ul>
          <button>Go</button>
        </motion.div>
        {/* <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Mobile</h2>
          <ul>
            <li>
              <span>GraphQL</span>
            </li>
            <li>
              <span>React Native</span>
            </li>
          </ul>
          <button>Go</button>
        </motion.div> */}
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Database</h2>
          <ul>
            <li>
              <span>PostgreSQL</span>
            </li>
            <li>
              <span>MongoDB</span>
            </li>
          </ul>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
