"use client";

const benefits = [
  {
    icon: "📈",
    title: "Augmentez votre note moyenne",
    desc: "Orientez les clients satisfaits vers vos plateformes d'avis publiques",
  },
  {
    icon: "🔍",
    title: "Identifiez les points d'amélioration",
    desc: "Recueillez tous les retours clients pour une amélioration continue",
  },
  {
    icon: "🚀",
    title: "Boostez votre visibilité",
    desc: "Apparaissez plus haut dans les résultats de recherche grâce à des avis positifs",
  },
  {
    icon: "💼",
    title: "Économisez du temps",
    desc: "Gérez votre e-réputation sans effort quotidien",
  },
];

const BenefitsSection = () => (
  <section className="w-full py-24 px-4 bg-gradient-to-b from-background to-muted/20">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
      <div className="flex-1 space-y-10">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Avantages pour votre entreprise
          </h2>
          <div className="h-1 w-24 bg-primary rounded"></div>
        </div>
        <ul className="space-y-8">
          {benefits.map((b) => (
            <li key={b.title} className="flex items-start gap-5 group">
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                {b.icon}
              </div>
              <div>
                <div className="font-semibold text-xl mb-2">{b.title}</div>
                <div className="text-muted-foreground text-base">{b.desc}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-80 h-80">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-3xl"></div>
          <div className="absolute inset-0 m-auto w-72 h-72 bg-card shadow-xl rounded-[2.5rem] p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="text-7xl mb-5">⭐️⭐️⭐️⭐️⭐️</div>
              <div className="text-primary font-bold text-2xl mb-2">
                PositivReview
              </div>
              <div className="text-muted-foreground">
                Boostez votre réputation en ligne
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BenefitsSection;
