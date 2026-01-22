import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import motorcycleImage from "@/assets/himalayan-motorcycle.png";

const ScrollMotorcycle = () => {
  const { scrollYProgress } = useScroll();

  // Smooth spring physics for buttery smooth animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  });

  // Transform values based on scroll progress - slower movement
  const y = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["5vh", "105vh", "205vh", "290vh", "340vh"]
  );

  const x = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["0%", "5%", "-5%", "10%", "0%"]
  );

  const scale = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [1, 1.05, 0.95, 1.1, 1]
  );

  const rotate = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, -2, 3, -2, 0]
  );

  return (
    <motion.div
      className="fixed left-1/2 z-[100] pointer-events-none will-change-transform"
      style={{
        y,
        x,
        scale,
        rotate,
        translateX: "-50%",
      }}
    >
      <img
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
