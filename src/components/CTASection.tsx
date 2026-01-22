import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Phone } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-foreground overflow-hidden flex items-center"
    >
      {/* Decorative diagonal lines */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 50px, hsl(var(--background)) 50px, hsl(var(--background)) 51px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-6xl md:text-8xl text-background tracking-wider">
              START YOUR
            </h2>
            <h3 className="font-display text-6xl md:text-8xl text-primary tracking-wider -mt-4">
              JOURNEY
            </h3>

            <p className="mt-8 text-lg text-background/70 leading-relaxed max-w-lg">
              Experience the Himalayan at your nearest Royal Enfield dealership.
              Book a test ride today and discover what adventure feels like.
            </p>

            {/* Price */}
            <div className="mt-8">
              <p className="font-heading text-sm text-background/50 tracking-wider">
                STARTING AT
              </p>
              <p className="font-display text-5xl text-background mt-1">
                ₹2,15,000*
              </p>
              <p className="text-xs text-background/50 mt-1">
                *Ex-showroom price. Varies by location.
              </p>
            </div>
          </motion.div>

          {/* Right - CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <button className="w-full flex items-center justify-between bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-lg transition-colors group">
              <div className="flex items-center gap-4">
                <Calendar className="w-6 h-6" />
                <div className="text-left">
                  <p className="font-heading text-lg tracking-wider">
                    BOOK A TEST RIDE
                  </p>
                  <p className="text-sm opacity-80">
                    Experience the Himalayan firsthand
                  </p>
                </div>
              </div>
              <span className="font-heading text-2xl group-hover:translate-x-2 transition-transform">
                →
              </span>
            </button>

            <button className="w-full flex items-center justify-between bg-background hover:bg-muted text-foreground px-8 py-6 rounded-lg transition-colors group">
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6" />
                <div className="text-left">
                  <p className="font-heading text-lg tracking-wider">
                    FIND A DEALER
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Locate your nearest showroom
                  </p>
                </div>
              </div>
              <span className="font-heading text-2xl group-hover:translate-x-2 transition-transform">
                →
              </span>
            </button>

            <button className="w-full flex items-center justify-between bg-transparent border-2 border-background/30 hover:border-background/60 text-background px-8 py-6 rounded-lg transition-colors group">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6" />
                <div className="text-left">
                  <p className="font-heading text-lg tracking-wider">
                    CONTACT US
                  </p>
                  <p className="text-sm opacity-70">
                    Get in touch with our team
                  </p>
                </div>
              </div>
              <span className="font-heading text-2xl group-hover:translate-x-2 transition-transform">
                →
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Large Background Text */}
      <div className="absolute -bottom-20 left-0 pointer-events-none select-none overflow-hidden">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.03 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="font-display text-[15rem] text-background whitespace-nowrap"
        >
          RIDE FREE
        </motion.span>
      </div>
    </section>
  );
};

export default CTASection;
