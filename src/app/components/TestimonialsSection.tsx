"use client";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote:
      "Notre note Google est passée de 3,8 à 4,7 étoiles en seulement deux mois d'utilisation de PositivReview.",
    author: "Marie D.",
    business: "Restaurant Le Gourmet",
    stars: 5,
    image: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    quote:
      "Enfin un outil qui nous permet d'améliorer notre service tout en protégeant notre réputation en ligne.",
    author: "Thomas L.",
    business: "Hôtel Belvédère",
    stars: 5,
    image: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    quote:
      "Simple, efficace et éthique. Nous avons augmenté nos réservations de 30% depuis l'installation.",
    author: "Sophie M.",
    business: "Spa Relaxation",
    stars: 5,
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
];

const TestimonialsSection = () => (
  <section className="w-full py-28 px-4 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl"></div>

    <div className="absolute left-0 top-[30%] bottom-0 w-1/3 opacity-5">
      <div className="w-full h-full flex flex-wrap gap-3 justify-center items-center rotate-12">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="text-4xl">
            ⭐️
          </div>
        ))}
      </div>
    </div>

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full mb-4">
          Témoignages
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ce que nos clients disent
        </h2>
        <div className="h-1 w-24 bg-primary rounded mx-auto mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Découvrez comment PositivReview a aidé nos clients à améliorer leur
          réputation en ligne.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <Card
            key={i}
            className="shadow-xl hover:shadow-2xl transition-all duration-300 border-none bg-white/80 dark:bg-card/80 backdrop-blur-sm overflow-hidden group hover:translate-y-[-5px]"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-3xl z-0"></div>

            <CardHeader className="relative pt-8 pb-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-destructive to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <div className="flex items-center mb-6">
                <Avatar className="mr-4 w-16 h-16 border-2 border-primary/20">
                  <AvatarImage src={t.image} alt={t.author} />
                  <AvatarFallback>{t.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardDescription className="font-bold text-lg not-italic text-foreground mb-1">
                    {t.author}
                  </CardDescription>
                  <div className="text-muted-foreground text-sm">
                    {t.business}
                  </div>
                </div>
              </div>

              <div className="mb-2">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-amber-400 text-lg">
                    ★
                  </span>
                ))}
              </div>
            </CardHeader>

            <CardContent className="pt-2 relative">
              <span className="absolute -top-6 left-4 text-6xl text-primary/10">
                &quot;
              </span>
              <blockquote className="italic text-lg relative z-10 pl-2">
                {t.quote}
              </blockquote>

              <div className="mt-6 pt-4 border-t border-muted">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">
                    Vérifié le{" "}
                    {new Date().toLocaleDateString("fr-FR", {
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-primary mr-1">Via</span>
                    <span className="text-primary font-medium">Google</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-16">
        <div className="inline-flex items-center justify-center gap-1 text-muted-foreground hover:text-primary">
          <span>Voir plus d&apos;avis</span>
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
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
