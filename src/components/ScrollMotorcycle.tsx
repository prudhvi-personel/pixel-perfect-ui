import { motion, useScroll, useTransform } from "framer-motion";
import motorcycleImage from "@/assets/himalayan-motorcycle.png";

const ScrollMotorcycle = () => {
  const { scrollYProgress } = useScroll();

  // Transform values based on scroll progress
  // Section 1 (0-0.33): Hero position
  // Section 2 (0.33-0.66): Move right and down
  // Section 3 (0.66-1): Move to center bottom

  const y = useTransform(
    scrollYProgress,
    [0, 0.15, 0.33, 0.5, 0.66, 0.85, 1],
    ["10vh", "40vh", "110vh", "140vh", "210vh", "260vh", "310vh"]
  );

  const x = useTransform(
    scrollYProgress,
    [0, 0.33, 0.5, 0.66, 1],
    ["0%", "0%", "15%", "-10%", "5%"]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.33, 0.5, 0.66, 1],
    [1, 1.1, 0.9, 1.15, 1]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [0, -3, 5, 0]
  );

  return (
    <motion.div
      className="fixed left-1/2 z-[100] pointer-events-none"
      style={{
        y,
        x,
        scale,
        rotate,
        translateX: "-50%",
      }}
    >
      <motion.img
        src={motorcycleImage}
        alt="Royal Enfield Himalayan"
        className="w-[600px] lg:w-[800px] xl:w-[900px] h-auto object-contain"
        style={{
          filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.4))",
        }}
      />
    </motion.div>
  );
};

export default ScrollMotorcycle;
