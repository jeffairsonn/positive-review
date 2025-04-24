"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Est-ce éthique de filtrer les avis négatifs ?",
    a: "Absolument. PositivReview ne supprime pas les avis négatifs - il les recueille pour vous permettre d'améliorer votre service, tout en encourageant les clients satisfaits à partager leur expérience positive. Tous les avis sont pris en compte.",
    icon: "🔎",
  },
  {
    q: "Est-ce compatible avec les conditions d'utilisation de Google ?",
    a: "Oui. Notre système ne manipule pas les avis - il optimise simplement le parcours client en fonction de leur satisfaction. Les avis postés restent 100% authentiques.",
    icon: "📝",
  },
  {
    q: "Combien de temps faut-il pour voir des résultats ?",
    a: "La plupart de nos clients constatent une amélioration de leur note moyenne en ligne dans les 30 premiers jours d'utilisation.",
    icon: "⏱️",
  },
  {
    q: "Comment installer le système ?",
    a: "L'installation est simple et prend moins de 5 minutes. Imprimez le QR code personnalisé que nous vous fournissons et placez-le à des endroits stratégiques de votre établissement.",
    icon: "🔧",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full py-28 px-4 bg-gradient-to-t from-muted/30 via-muted/10 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl"></div>

      <div className="absolute right-0 top-[20%] bottom-0 w-1/4 opacity-5">
        <div className="w-full h-full flex flex-wrap gap-3 justify-center items-center -rotate-12">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="text-4xl">
              ❓
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full mb-4">
            Questions fréquentes
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Tout ce que vous devez savoir
          </h2>
          <div className="h-1 w-24 bg-primary rounded mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Nous avons compilé les questions les plus courantes pour vous aider
            à comprendre comment PositivReview peut transformer votre réputation
            en ligne.
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border">
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-xl overflow-hidden transition-all duration-300 ${
                  open === i
                    ? "shadow-md bg-card ring-1 ring-primary/10"
                    : "hover:bg-card/70"
                }`}
              >
                <button
                  className="w-full text-left px-6 py-5 font-medium text-lg flex justify-between items-center gap-4"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-${i}`}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div
                      className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center ${
                        open === i
                          ? "bg-primary/10 text-primary"
                          : "bg-muted/50 text-muted-foreground"
                      }`}
                    >
                      <span className="text-xl">{faq.icon}</span>
                    </div>
                    <span className="font-semibold">{faq.q}</span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      open === i
                        ? "bg-primary text-primary-foreground rotate-180"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </div>
                </button>

                <div
                  id={`faq-${i}`}
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: open === i ? "200px" : "0",
                    opacity: open === i ? 1 : 0,
                  }}
                >
                  <div className="px-6 pb-6 pt-1 text-muted-foreground text-base ml-16">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <button className="inline-flex items-center justify-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
            <span>Contactez notre équipe</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
