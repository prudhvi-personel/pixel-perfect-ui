import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import landscapeImage from "@/assets/himalayan-landscape.jpg";
import { Mountain, Compass, Map } from "lucide-react";

const features = [
  {
    icon: Mountain,
    title: "Built for Adventure",
    description:
      "Engineered to conquer the most challenging terrains, from rocky mountain trails to sandy deserts.",
  },
  {
    icon: Compass,
    title: "Navigate Anywhere",
    description:
      "Tripper navigation system guides you through uncharted territories with precision.",
  },
  {
    icon: Map,
    title: "Endless Exploration",
    description:
      "15-litre fuel tank gives you the range to explore beyond the ordinary.",
  },
];

const AdventureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-background overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={landscapeImage}
          alt="Himalayan Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 lg:px-12 py-24 min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h2 className="font-display text-6xl md:text-8xl text-foreground tracking-wider">
            ADVENTURE
          </h2>
          <h3 className="font-heading text-3xl md:text-4xl text-primary tracking-widest -mt-2">
            AWAITS
          </h3>

          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
            The Himalayan is not just a motorcycle, it's a philosophy. Built for
            those who believe the journey is the destination. Every component
            is purpose-built for the adventure that lies ahead.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-heading text-lg text-foreground tracking-wide">
                {feature.title}
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Large Background Text */}
      <div className="absolute bottom-20 right-0 pointer-events-none select-none overflow-hidden">
        <motion.span
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 0.05, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="font-display text-[20rem] text-foreground whitespace-nowrap"
        >
          EXPLORE
        </motion.span>
      </div>
    </section>
  );
};

export default AdventureSection;
