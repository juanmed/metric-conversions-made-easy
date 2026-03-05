import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import testimonial1 from "@/assets/testimonial-1.jpeg";
import testimonial2 from "@/assets/testimonial-2.jpeg";
import testimonial3 from "@/assets/testimonial-3.jpeg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const imageMap: Record<string, string> = {
  "testimonial-1": testimonial1,
  "testimonial-2": testimonial2,
  "testimonial-3": testimonial3,
};

const TestimonialsSection = () => {
  const { t } = useLang();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="py-24 px-6 md:px-12 lg:px-24 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold neon-glow-purple text-secondary mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="relative group">
          {/* Left arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm p-2 rounded-full neon-border-blue text-primary hover:neon-box-blue transition-shadow -ml-3"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {/* Right arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm p-2 rounded-full neon-border-blue text-primary hover:neon-box-blue transition-shadow -mr-3"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {t.testimonials.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex-shrink-0 w-[300px] md:w-[380px] snap-center rounded-2xl bg-card neon-border-blue overflow-hidden flex flex-col"
              >
                {item.type === "image" ? (
                  <img
                    src={imageMap[item.src]}
                    alt={item.caption}
                    className="w-full h-56 md:h-64 object-cover"
                  />
                ) : (
                  <div className="w-full h-56 md:h-64">
                    <iframe
                      src={item.src}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Testimonial video"
                      style={{ border: 0 }}
                    />
                  </div>
                )}
                <div className="p-5">
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
