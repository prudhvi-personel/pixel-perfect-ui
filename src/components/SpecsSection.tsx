import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cog, Zap, Wind, Gauge, Shield, Fuel } from "lucide-react";

const specs = [
  {
    icon: Cog,
    title: "Engine",
    value: "411cc",
    description: "Single Cylinder, Air-Cooled, SOHC",
  },
  {
    icon: Zap,
    title: "Power",
    value: "24.3 bhp",
    description: "@ 6500 RPM",
  },
  {
    icon: Wind,
    title: "Torque",
    value: "32 Nm",
    description: "@ 4000-4500 RPM",
  },
  {
    icon: Gauge,
    title: "Top Speed",
    value: "140 kmph",
    description: "Electronically Limited",
  },
  {
    icon: Shield,
    title: "ABS",
    value: "Dual Channel",
    description: "Switchable Rear",
  },
  {
    icon: Fuel,
    title: "Mileage",
    value: "30 kmpl",
    description: "Combined Cycle",
  },
];

const SpecsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-re-slate py-24 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(var(--foreground)) 35px, hsl(var(--foreground)) 36px)",
          }}
        />
      </div>

      {/* Section Title */}
      <div className="relative z-10 container mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-display text-6xl md:text-8xl text-primary-foreground tracking-wider">
            TECHNICAL
          </h2>
          <h3 className="font-heading text-3xl md:text-4xl text-primary-foreground/80 tracking-widest -mt-2">
            SPECIFICATIONS
          </h3>
        </motion.div>

        {/* Specs Grid - positioned to avoid motorcycle */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6 hover:bg-card/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <spec.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-heading text-sm text-primary-foreground/60 tracking-wider uppercase">
                    {spec.title}
                  </p>
                  <p className="font-display text-3xl text-primary-foreground mt-1">
                    {spec.value}
                  </p>
                  <p className="text-sm text-primary-foreground/70 mt-1">
                    {spec.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default SpecsSection;
