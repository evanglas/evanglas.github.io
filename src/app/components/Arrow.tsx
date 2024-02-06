"use client";

import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

export default function Arrow(props: { scrollTo: string }) {
  return (
    <ScrollLink to={props.scrollTo} smooth={true} duration={500}>
      <motion.span
        className="text-8xl block hover:cursor-pointer hover:opacity-50"
        animate={{ y: [-4, 4, -4] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        &darr;
      </motion.span>
    </ScrollLink>
  );
}
