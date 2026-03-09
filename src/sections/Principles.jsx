import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useState } from "react";

const principles = [
  {
    title: "Clarity over cleverness",
    description:
      "Readable, predictable code scales better than smart abstractions that only one person understands.",
  },
  {
    title: "Ship small, iterate fast",
    description:
      "Progress beats perfection. I focus on shipping usable increments and improving with real feedback.",
  },
  {
    title: "Performance is a feature",
    description:
      "Fast interfaces feel better, convert better, and age better. Performance is never an afterthought.",
  },
  {
    title: "Design and code must agree",
    description:
      "Great products happen when engineering and design reinforce each other instead of fighting.",
  },
];

export const Principles = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % principles.length);
  };

  const previous = () => {
    setActiveIdx((prev) => (prev - 1 + principles.length) % principles.length);
  };

  return (
    <section id="principles" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            How I Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Principles I{" "}
            <span className="font-serif italic font-normal text-white">
              build by.
            </span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Card */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold mb-4 pt-4">
                {principles[activeIdx].title}
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {principles[activeIdx].description}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={previous}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {principles.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
