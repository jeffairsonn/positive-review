"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Démarrage",
    price: "7,99€",
    period: "/mois",
    features: [
      { text: "1 point de contact QR", icon: "📱" },
      { text: "Personnalisation basique", icon: "🎨" },
      { text: "Statistiques mensuelles", icon: "📊" },
    ],
    cta: "Choisir Démarrage",
    highlight: false,
  },
  {
    name: "Business",
    price: "14,99€",
    period: "/mois",
    features: [
      { text: "3 points de contact QR", icon: "📱" },
      { text: "Personnalisation complète", icon: "🎨" },
      { text: "Statistiques en temps réel", icon: "📊" },
      { text: "Notifications par email", icon: "📧" },
    ],
    cta: "Choisir Business",
    highlight: true,
    badge: "Populaire",
  },
  {
    name: "Premium",
    price: "29,99€",
    period: "/mois",
    features: [
      { text: "QR codes illimités", icon: "📱" },
      { text: "Personnalisation avancée", icon: "🎨" },
      { text: "Dashboard analytique", icon: "📊" },
      { text: "Intégration API", icon: "🔌" },
      { text: "Support dédié", icon: "🛎️" },
    ],
    cta: "Choisir Premium",
    highlight: false,
  },
];

const PricingSection = () => (
  <section className="w-full py-28 px-4 bg-gradient-to-b from-background via-muted/20 to-muted/10">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full mb-4">
          Tarification
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Nos formules</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          PositivReview vous permet de collecter les retours clients de manière
          intelligente, en acheminant uniquement les expériences positives vers
          vos plateformes d&apos;avis publiques.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`flex flex-col shadow-lg transition-all duration-300 overflow-hidden relative ${
              plan.highlight
                ? "border-2 border-primary md:scale-105 z-10 bg-card"
                : "bg-card/70 hover:bg-card hover:shadow-xl hover:translate-y-[-8px]"
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-4 right-0 left-0 flex justify-center">
                <span className="bg-primary text-primary-foreground text-xs font-bold py-1 px-4 rounded-full shadow-md">
                  {plan.badge}
                </span>
              </div>
            )}

            {/* Colored top border with gradient */}
            <div
              className={`h-2 w-full ${
                plan.highlight
                  ? "bg-gradient-to-r from-primary via-destructive/50 to-secondary"
                  : "bg-gradient-to-r from-muted/60 via-muted/70 to-muted/60"
              }`}
            ></div>

            <CardHeader className="pb-0 pt-8">
              <CardTitle className="text-2xl md:text-3xl font-bold text-center">
                {plan.name}
              </CardTitle>
              <div className="flex justify-center items-baseline mt-6 mb-4">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-muted-foreground ml-1">
                  {plan.period}
                </span>
              </div>
              <div className="h-0.5 w-16 bg-primary/20 mx-auto mb-6"></div>
            </CardHeader>

            <CardContent className="flex-1 pt-6">
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-base">
                      {feature.icon}
                    </span>
                    <span className="text-muted-foreground">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="pt-6 w-full flex justify-center pb-8">
              <Button
                size="lg"
                variant={plan.highlight ? "default" : "outline"}
                className={`w-full ${
                  plan.highlight
                    ? "bg-primary hover:bg-primary/90 shadow-md"
                    : "border-primary/20 hover:border-primary"
                }`}
              >
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-20 bg-card/40 rounded-2xl p-12 shadow-sm border">
        <h3 className="text-2xl font-bold mb-4">
          Prêt à améliorer votre réputation en ligne ?
        </h3>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Essayez gratuitement PositivReview pendant 14 jours et voyez la
          différence par vous-même.
        </p>
        <Button
          size="lg"
          className="px-8 py-6 rounded-full font-medium bg-gradient-to-r from-primary to-primary/90 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
        >
          DÉMARRER MON ESSAI GRATUIT
        </Button>
        <p className="mt-4 text-sm text-muted-foreground">
          Aucune carte de crédit requise • Annulation facile
        </p>
      </div>
    </div>
  </section>
);

export default PricingSection;
