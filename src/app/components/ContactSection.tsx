"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const contacts = [
  {
    icon: "✉️",
    label: "Email",
    value: "contact@positivreview.com",
    href: "mailto:contact@positivreview.com",
  },
  {
    icon: "📞",
    label: "Téléphone",
    value: "+33 1 23 45 67 89",
    href: "tel:+33123456789",
  },
  {
    icon: "📍",
    label: "Adresse",
    value: "123 Avenue de la Réputation, 75001 Paris",
    href: null,
  },
];

const ContactSection = () => (
  <section className="w-full py-28 px-4 bg-gradient-to-t from-muted/5 via-muted/10 to-background relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl"></div>

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full mb-4">
          Contact
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Contactez-nous</h2>
        <div className="h-1 w-24 bg-primary rounded mx-auto mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Notre équipe est à votre écoute pour toute question ou pour réserver
          une démo personnalisée.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Contact Info */}
        <Card className="lg:col-span-2 bg-card shadow-lg border-none p-8 rounded-2xl h-fit">
          <h3 className="text-xl font-bold mb-6">Nos informations</h3>

          <div className="space-y-6 mb-8">
            {contacts.map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl shrink-0">
                  {c.icon}
                </div>
                <div>
                  <div className="font-medium text-sm text-muted-foreground uppercase tracking-wide mb-1">
                    {c.label}
                  </div>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="font-medium text-lg hover:text-primary transition-colors"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span className="font-medium text-lg">{c.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-muted pt-6">
            <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide mb-4">
              Suivez-nous
            </h4>
            <div className="flex gap-4">
              {["twitter", "linkedin", "facebook", "instagram"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    {social === "twitter" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    )}
                    {social === "linkedin" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    )}
                    {social === "facebook" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    )}
                    {social === "instagram" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    )}
                  </a>
                )
              )}
            </div>
          </div>
        </Card>

        {/* Contact Form */}
        <Card className="lg:col-span-3 bg-card shadow-lg border-none p-8 rounded-2xl">
          <h3 className="text-xl font-bold mb-6">Envoyez-nous un message</h3>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nom complet
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full rounded-lg border border-muted bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-lg border border-muted bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Sujet
              </label>
              <input
                id="subject"
                type="text"
                className="w-full rounded-lg border border-muted bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                placeholder="Comment pouvons-nous vous aider ?"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full rounded-lg border border-muted bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                placeholder="Votre message ici..."
              ></textarea>
            </div>

            <Button className="w-full py-6 text-lg font-medium bg-gradient-to-r from-primary to-primary/90 shadow-md hover:shadow-lg transition-all">
              ENVOYER LE MESSAGE
            </Button>
          </form>
        </Card>
      </div>

      <div className="mt-20 text-center">
        <div className="inline-flex bg-primary/10 rounded-full px-6 py-3">
          <span className="font-medium">
            Ou réservez directement une démo personnalisée
          </span>
        </div>
        <div className="mt-6">
          <Button
            size="lg"
            className="px-8 py-6 text-lg font-medium rounded-full bg-gradient-to-r from-primary via-primary/90 to-primary shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            RÉSERVER UNE DÉMO
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
