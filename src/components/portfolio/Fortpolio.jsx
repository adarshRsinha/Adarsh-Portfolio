import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
  {
    id: 1,
    title: "Creatorship",
    img: "/Screenshot1.png",
    description:
      "Creatorship is a dynamic platform designed to connect creators and businesses in a mutually beneficial way. The application facilitates collaboration by matching creators with businesses based on their needs and preferences. By leveraging a variety of filters and algorithms, Creatorship ensures that both creators and businesses find the best possible partners for their goals.",
    demo: "https://creatorship-frontend.onrender.com/",
  },
  {
    id: 2,
    title: "Classroom Management",
    img: "/Screenshot2.png",
    description:
      "A Full-Stack web application which allows teachers, principal and students to manage the class and its timetable.",
    demo: "https://classroom-mangement.vercel.app/",
  },
  {
    id: 3,
    title: "Other",
    img: "/other-project.jpg",
    description: "Yout can find other project on my github.",
    demo: "https://github.com/adarshRsinha?tab=repositories",
  },
];

function Single({ item }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={`${item.img}`} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={item.demo} target="blank">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => {
        return <Single key={item.id} item={item} />;
      })}
    </div>
  );
}
