import landscapeImage from "@/assets/himalayan-landscape.jpg";
import logoImage from "@/assets/royal-enfield-logo.png";
import { MapPin, User, Fuel, Gauge, Shield, Droplet } from "lucide-react";

const colorSwatches = [
  { color: "#3d5a3d", name: "Green" },
  { color: "#c4302b", name: "Red" },
  { color: "#2d2d2d", name: "Black" },
  { color: "#5a5a6e", name: "Gray Blue" },
  { color: "#4a6fa5", name: "Blue" },
  { color: "#1a1a1a", name: "Dark Black" },
];

const specs = [
  { icon: Fuel, value: "24.3 bhp", label: "Max Power" },
  { icon: Gauge, value: "140KMPH", label: "" },
  { icon: Shield, value: "Disc", label: "Switchable ABS" },
  { icon: Droplet, value: "30KMPL", label: "" },
];

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-background">
      {/* Diagonal Background */}
      <div className="absolute inset-0">
        {/* Light gray base */}
        <div className="absolute inset-0 bg-background" />
        {/* Diagonal slate overlay */}
        <div 
          className="absolute inset-0 bg-re-slate"
          style={{
            clipPath: "polygon(55% 0, 100% 0, 100% 100%, 35% 100%)",
          }}
        />
        {/* Diagonal line accent */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(125deg, transparent 54.5%, hsl(215 20% 45% / 0.5) 54.5%, hsl(215 20% 45% / 0.5) 55%, transparent 55%)",
          }}
        />
      </div>

      {/* Header Navigation */}
      <header className="relative z-20 flex items-center justify-between px-8 py-4 lg:px-12">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src={logoImage} 
            alt="Royal Enfield" 
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Main Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="font-heading text-sm tracking-wider text-foreground hover:text-primary transition-colors">
            MOTORCYCLES
          </a>
          <a href="#" className="font-heading text-sm tracking-wider text-foreground hover:text-primary transition-colors">
            TESTRIDE
          </a>
          <a href="#" className="font-heading text-sm tracking-wider text-foreground hover:text-primary transition-colors">
            MORE
          </a>
          <a href="#" className="font-heading text-sm tracking-wider text-foreground hover:text-primary transition-colors">
            BOOK
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded text-xs font-semibold tracking-wide hover:opacity-90 transition-opacity">
            <MapPin className="w-3.5 h-3.5" />
            FIND DEALER
          </button>
          <button className="flex items-center gap-2 bg-card text-foreground border border-border px-4 py-2 rounded text-xs font-semibold tracking-wide hover:bg-muted transition-colors">
            <User className="w-3.5 h-3.5" />
            PROFILE
          </button>
        </div>
      </header>

      {/* HIMALAYAN Watermark Text - positioned absolutely in the main area */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-[5] overflow-hidden">
        <h1 
          className="text-watermark text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[10rem] whitespace-nowrap transform -translate-x-[5%]"
          style={{
            color: "hsl(220 10% 75% / 0.5)",
            letterSpacing: "0.4em",
          }}
        >
          HIMALAYAN
        </h1>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex h-[calc(100vh-88px)] min-h-[600px]">
        {/* Left Content */}
        <div className="relative z-20 flex flex-col justify-between w-1/4 min-w-[200px] px-8 py-8 lg:px-12">
          {/* Navigation Links */}
          <div className="space-y-3 mt-12">
            <a href="#" className="group flex items-center gap-2 text-xs font-medium tracking-wider text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-primary">▶</span> TECHNICAL SPECS
            </a>
            <a href="#" className="group flex items-center gap-2 text-xs font-medium tracking-wider text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-primary">▶</span> CUSTOMIZE
            </a>
            <a href="#" className="group flex items-center gap-2 text-xs font-medium tracking-wider text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-primary">▶</span> COMPARE
            </a>
          </div>

          {/* Pagination */}
          <div className="mb-8">
            <div className="flex items-baseline">
              <span className="font-display text-8xl lg:text-9xl text-foreground leading-none">01</span>
              <span className="text-muted-foreground text-lg ml-1">/06</span>
            </div>
          </div>

          {/* Color Swatches */}
          <div className="flex items-center gap-2">
            {colorSwatches.map((swatch, index) => (
              <button
                key={index}
                className={`relative w-8 h-8 rounded-sm transition-transform hover:scale-110 ${index === 0 ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''}`}
                style={{ backgroundColor: swatch.color }}
                title={swatch.name}
              >
                {index === 0 && (
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-primary rotate-180" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Center - Empty space for scroll motorcycle */}
        <div className="relative flex-1 flex items-center justify-center overflow-visible z-10">
          {/* Motorcycle is now rendered as a fixed scroll-animated element */}
          <div className="relative w-full max-w-3xl px-4 transform translate-x-8">
            {/* Placeholder space */}
          </div>
        </div>

        {/* Right Side - Landscape Image & Thumbnails */}
        <div className="relative w-1/3 min-w-[300px] flex flex-col">
          {/* Main Landscape Image */}
          <div className="flex-1 relative overflow-hidden">
            <img
              src={landscapeImage}
              alt="Himalayan Adventure"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                clipPath: "polygon(15% 0, 100% 0, 100% 85%, 0% 100%, 0% 15%)",
              }}
            />
          </div>

          {/* Thumbnail Gallery */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className={`w-16 h-12 rounded overflow-hidden border-2 ${index === 0 ? 'border-primary' : 'border-transparent'} cursor-pointer hover:border-primary/50 transition-colors`}
              >
                <img
                  src={landscapeImage}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Specs Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="flex items-center justify-between px-8 py-6 lg:px-12">
          {/* Empty space for left side */}
          <div className="w-1/4" />

          {/* Specs */}
          <div className="flex items-center justify-center gap-8 lg:gap-12">
            {specs.map((spec, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center">
                  <spec.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="text-left">
                  <p className="font-heading text-sm font-semibold text-foreground">{spec.value}</p>
                  {spec.label && (
                    <p className="text-xs text-muted-foreground">{spec.label}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Himalayan Logo */}
          <div className="w-1/4 flex justify-end">
            <div className="flex items-center gap-2">
              <svg className="w-12 h-12 text-secondary-foreground" viewBox="0 0 100 60" fill="currentColor">
                <path d="M10 55 L25 30 L35 40 L50 15 L65 35 L75 25 L90 55 Z" />
                <text x="30" y="58" fontSize="8" fill="currentColor" className="font-heading">HIMALAYAN</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
