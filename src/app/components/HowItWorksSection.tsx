"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const steps = [
  {
    icon: "📲",
    title: "Installation facile",
    desc: "Intégrez notre QR code à votre établissement",
  },
  {
    icon: "⭐️",
    title: "Filtrage intelligent",
    desc: "Les clients évaluent leur expérience sur une échelle de 1 à 5 étoiles",
  },
  {
    icon: "🔗",
    title: "Redirection sélective",
    desc: "Seuls les clients satisfaits (4-5 étoiles) sont invités à partager leur avis sur Google",
  },
  {
    icon: "💬",
    title: "Feedback constructif",
    desc: "Les avis moins favorables sont recueillis en interne pour amélioration",
  },
];

const HowItWorksSection = () => (
  <section className="w-full py-24 px-4 bg-muted/30">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
        Comment ça fonctionne ?
      </h2>
      <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-lg">
        Dans le monde digital d&apos;aujourd&apos;hui, un seul avis négatif peut
        faire perdre jusqu&apos;à 22% de clients potentiels.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <Card
            key={step.title}
            className="flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border-t-4 border-t-primary/70 overflow-hidden group"
          >
            <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-primary via-destructive to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <CardHeader className="flex flex-col items-center pt-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="text-4xl">{step.icon}</span>
              </div>
              <CardTitle className="text-xl font-semibold mb-2">
                {step.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {step.desc}
              </CardDescription>
            </CardContent>
            <div className="absolute right-3 top-3 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
              {index + 1}
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
