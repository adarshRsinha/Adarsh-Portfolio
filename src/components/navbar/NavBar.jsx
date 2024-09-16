import SideBar from "../sidebar/SideBar";
import "./navbar.scss";
import { motion } from "framer-motion";

export default function NavBar() {
  return (
    <div className="navbar">
      <SideBar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Admin Portfolio
        </motion.span>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/adarsh-raj-sinha-88677b224/"
            target="blank"
          >
            <img src="/linkedin.png" alt="" />
          </a>
          <a
            href="https://github.com/adarshRsinha"
            target="blank"
          >
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
