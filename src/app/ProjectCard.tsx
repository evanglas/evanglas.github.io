"use client";

import Link from "next/link";
import Image from "next/image";

import { motion, Variants } from "framer-motion";

interface ProjectCardProps {
  id: string;
  imgPath: string;
}

// From Framer example
const cardVariants: Variants = {
  offscreen: {
    // y: 300,
    opacity: 0,
  },
  onscreen: {
    // y: 50,
    opacity: 1,
    // rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2,
    },
  },
};

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }}
      id="outer_wrapper"
    >
      <motion.div className="w-52 h-52 border" variants={cardVariants}>
        <Link href={`/projects/${encodeURIComponent(props.id)}`}>
          <div className="relative w-52 h-52">
            <Image
              src={props.imgPath}
              alt="Picture"
              fill={true}
              style={{ objectFit: "cover" }}
              className="h-full"
            />
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
