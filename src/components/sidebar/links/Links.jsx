import { motion } from "framer-motion";
import {
  HiOutlineHome,
  HiOutlineBookOpen,
  HiOutlinePresentationChartLine,
  HiOutlinePhone,
} from "react-icons/hi";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

export default function Links() {
  const items = [
    { name: "Homepage", icon: <HiOutlineHome /> },
    { name: "Skills", icon: <HiOutlineBookOpen /> },
    { name: "Portfolio", icon: <HiOutlinePresentationChartLine /> },
    { name: "Contact", icon: <HiOutlinePhone /> },
  ];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => {
        return (
          <motion.a
            href={`#${item.name}`}
            variants={itemVariants}
            key={item.name}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#f8f8f8",
              color: "#000",
              borderRadius: "10px",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {item.icon}
            {item.name}
          </motion.a>
        );
      })}
    </motion.div>
  );
}
