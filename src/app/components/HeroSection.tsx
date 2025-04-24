"use client";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative flex flex-col items-center justify-center w-full min-h-[90vh] py-24 overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
    {/* Background decorative elements */}
    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
    <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-destructive/10 rounded-full filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>

    <div className="container px-4 mx-auto z-10 flex flex-col lg:flex-row items-center gap-12">
      {/* Text Content */}
      <div className="flex-1 text-center lg:text-left space-y-8">
        <div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-primary via-destructive/80 to-secondary bg-clip-text text-transparent drop-shadow-sm leading-tight">
            PositivReview
          </h1>
          <p className="text-xl md:text-3xl font-light text-foreground/90 mt-4 leading-relaxed max-w-2xl lg:mx-0 mx-auto">
            Cultivez votre réputation en ligne,{" "}
            <span className="font-medium">naturellement</span>
          </p>
        </div>

        <p className="text-lg text-muted-foreground max-w-xl lg:mx-0 mx-auto">
          Dans le monde digital d&apos;aujourd&apos;hui, un seul avis négatif
          peut faire perdre jusqu&apos;à{" "}
          <span className="font-bold text-destructive">22%</span> de clients
          potentiels.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button
            size="lg"
            className="px-8 py-6 text-lg font-medium rounded-full shadow-xl hover:scale-105 transition-transform bg-gradient-to-r from-primary to-primary/90"
          >
            DÉMARRER MON ESSAI GRATUIT
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg font-medium rounded-full border-primary/20 hover:bg-primary/5"
          >
            VOIR LA DÉMO
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          Aucune carte de crédit requise • Annulation facile
        </p>
      </div>

      {/* Image/Illustration */}
      <div className="flex-1 relative">
        <div className="relative h-[400px] w-[400px] md:h-[500px] md:w-[500px] mx-auto lg:mx-0 lg:ml-auto">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 border-8 border-primary/10 rounded-full"></div>
          <div className="absolute bottom-0 left-10 w-72 h-72 border-8 border-secondary/10 rounded-full"></div>

          {/* Phone mockup with review UI */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-[500px] bg-card rounded-[40px] shadow-2xl overflow-hidden border-8 border-foreground/5 rotate-3">
            <div className="w-full h-12 bg-muted/20 flex items-center justify-center">
              <div className="w-32 h-6 rounded-full bg-muted/40"></div>
            </div>
            <div className="p-4 space-y-6">
              <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-4">⭐️⭐️⭐️⭐️⭐️</div>
                  <div className="w-32 h-6 bg-muted/30 rounded-full mx-auto"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="w-full h-6 bg-muted/20 rounded-full"></div>
                <div className="w-3/4 h-6 bg-muted/20 rounded-full"></div>
                <div className="w-5/6 h-6 bg-muted/20 rounded-full"></div>
              </div>
              <div className="mt-auto pt-6 flex justify-center">
                <div className="w-40 h-12 bg-primary/30 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute top-20 right-10 w-24 h-24 bg-card rounded-2xl shadow-lg flex items-center justify-center rotate-12 z-20">
            <div className="text-4xl">📈</div>
          </div>
          <div className="absolute bottom-20 left-0 w-28 h-28 bg-card rounded-2xl shadow-lg flex items-center justify-center -rotate-6 z-20">
            <div className="text-4xl">⭐️</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
