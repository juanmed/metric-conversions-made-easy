import { useLang } from "@/contexts/LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import logo from "@/assets/robopopki-logo.png";

const navIds = ["robopopki", "pricing", "as", "contact"] as const;

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

// ─── Navbar ──────────────────────────────────────────
const Navbar = () => {
  const { lang, toggleLang, t } = useLang();
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-background/70 border-b border-border"
    >
      <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
        <img src={logo} alt="Robopopki" className="h-18" />
      </button>
      <div className="hidden md:flex items-center gap-8">
        {navIds.map((id) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="text-base font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
          >
            {t.nav[id]}
          </button>
        ))}
      </div>
      <button
        onClick={toggleLang}
        className="px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider neon-border-blue text-primary hover:bg-primary/10 transition-colors"
      >
        {lang === "en" ? "한국어" : "ENG"}
      </button>
    </motion.nav>
  );
};

// ─── Hero Section (Full-screen Video) ────────────────
const HeroSection = () => {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} id="hero" className="relative h-screen w-full overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0">
        {/* Replace the iframe src in content.ts with your actual video */}
        <iframe
          src={t.hero.videoUrl}
          className="w-full h-full object-cover"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ border: 0, pointerEvents: "none" }}
          title="Robopopki gameplay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      </motion.div>
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-black neon-glow-blue text-primary mb-6"
        >
          {t.hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl text-foreground/90 mb-10"
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => scrollTo("robopopki")}
          className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-widest neon-box-blue hover:scale-105 transition-transform"
        >
          {t.hero.cta}
        </motion.button>
      </motion.div>
    </section>
  );
};

// ─── Section wrapper with fade-in ────────────────────
const Section = ({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7 }}
    className={`py-24 px-6 md:px-12 lg:px-24 ${className}`}
  >
    {children}
  </motion.section>
);

// ─── About (Robopopki) Section ───────────────────────
const AboutSection = () => {
  const { t } = useLang();
  return (
    <Section id="robopopki">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold neon-glow-blue text-primary mb-4">
          {t.about.title}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-16 text-lg">{t.about.subtitle}</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.about.features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl bg-card neon-border-blue hover:neon-box-blue transition-shadow group"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

// ─── Pricing Section ─────────────────────────────────
const PricingSection = () => {
  const { t } = useLang();
  return (
    <Section id="pricing" className="bg-muted/30">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold neon-glow-purple text-secondary mb-4">
          {t.pricing.title}
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-16 text-lg">{t.pricing.subtitle}</p>
        <div className="grid md:grid-cols-3 gap-8">
          {t.pricing.plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`p-8 rounded-2xl bg-card flex flex-col ${
                plan.highlighted ? "neon-box-purple neon-border-purple scale-105" : "neon-border-blue"
              }`}
            >
              <h3 className="font-display font-bold text-xl text-foreground mb-2">{plan.name}</h3>
              <div className="mb-1">
                <span
                  className={`text-4xl font-display font-black ${plan.highlighted ? "text-secondary neon-glow-purple" : "text-primary neon-glow-blue"}`}
                >
                  {plan.price}
                </span>
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-6">{plan.period}</p>
              <ul className="flex-1 space-y-3 text-left mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-accent mt-0.5">✦</span> {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollTo("contact")}
                className={`w-full py-3 rounded-xl font-display font-bold text-sm uppercase tracking-wider transition-transform hover:scale-105 ${
                  plan.highlighted
                    ? "bg-secondary text-secondary-foreground neon-box-purple"
                    : "bg-primary/10 text-primary neon-border-blue hover:bg-primary/20"
                }`}
              >
                {plan.highlighted ? "Get Started" : "Contact Us"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

// ─── After Service Section ───────────────────────────
const ASSection = () => {
  const { t } = useLang();
  return (
    <Section id="as">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold neon-glow-green text-accent mb-4">{t.as.title}</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-16 text-lg">{t.as.subtitle}</p>
        <div className="grid md:grid-cols-2 gap-6">
          {t.as.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl bg-card neon-border-blue text-left"
            >
              <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

// ─── Contact Section ─────────────────────────────────
const ContactSection = () => {
  const { t } = useLang();
  return (
    <Section id="contact" className="bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold neon-glow-blue text-primary mb-4">
          {t.contact.title}
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-12 text-lg">{t.contact.subtitle}</p>
        <div className="flex flex-col items-center space-y-6">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Email</p>
            <a href={`mailto:${t.contact.email}`} className="text-primary hover:underline">
              {t.contact.email}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Phone</p>
            <p className="text-foreground">{t.contact.phone}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Address</p>
            <p className="text-foreground">{t.contact.address}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

// ─── Footer ──────────────────────────────────────────
const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
      {t.footer.copyright}
    </footer>
  );
};

// ─── Main Page ───────────────────────────────────────
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PricingSection />
      <ASSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
