import {
  Activity,
  Brain,
  CheckCircle2,
  Clock,
  Heart,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import React from "react";
import Container from "../Container/Container";
import Link from "next/link";

const WhatIsTMSSection = () => {
  const howItWorksSteps = [
    {
      icon: Users,
      text: "You sit comfortably in a treatment chair.",
      color: "from-primary to-second-primary",
    },
    {
      icon: Zap,
      text: "A small electromagnetic coil is placed near your scalp.",
      color: "from-accent to-primary",
    },
    {
      icon: Activity,
      text: "Magnetic pulses stimulate specific neural pathways.",
      color: "from-second-primary to-primary",
    },
    {
      icon: Sparkles,
      text: "Over time, brain activity improves — reducing symptoms.",
      color: "from-primary to-accent",
    },
  ];

  const conditions = [
    "Major Depressive Disorder (MDD)",
    "Treatment-resistant depression",
    "Anxiety disorders",
    "OCD",
    "PTSD",
    "Chronic stress",
    "Mood instability",
  ];

  const benefits = [
    { text: "No medication needed", icon: Shield },
    { text: "Non-invasive & safe", icon: Heart },
    { text: "No systemic side effects", icon: CheckCircle2 },
    { text: "No sedation — you stay fully awake", icon: Brain },
    { text: "Resume normal activities immediately", icon: Clock },
    { text: "High success rate", icon: Sparkles },
  ];

  return (
    <section id="tms" className="py-16 lg:py-24 bg-background">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Understanding TMS
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-text mb-6 font-montserrat">
            What is TMS?
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary via-accent to-second-primary mx-auto rounded-full mb-8"></div>

          {/* Main Description */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl lg:text-3xl font-bold text-text mb-6">
              Transcranial Magnetic Stimulation (TMS) Explained
            </h3>
            <p className="text-base lg:text-xl text-secondary-text leading-relaxed">
              TMS is a non-invasive, drug-free, FDA-approved treatment that uses
              targeted magnetic pulses to activate underactive brain regions
              linked to depression and other conditions.
            </p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-16 lg:mb-24">
          <div className="text-center mb-10 lg:mb-16">
            <h3 className="text-2xl lg:text-4xl font-bold text-text mb-4">
              How It Works
            </h3>
            <p className="text-base lg:text-lg text-secondary-text max-w-2xl mx-auto">
              A simple, comfortable process that takes about 20-40 minutes per
              session
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
            {howItWorksSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connector Line (hidden on mobile, shown on lg) */}
                  {index < howItWorksSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-linear-to-r from-primary/30 to-transparent z-0"></div>
                  )}

                  <div className="relative bg-secondary-background rounded-2xl p-6 lg:p-8 border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl group">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-linear-to-br from-accent to-accent/80 rounded-full flex items-center justify-center text-white font-bold shadow-lg text-lg">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-16 h-16 lg:w-20 lg:h-20 bg-linear-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform shadow-lg`}
                    >
                      <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                    </div>

                    {/* Text */}
                    <p className="text-sm lg:text-base text-text text-center leading-relaxed font-medium">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* What TMS Helps Treat + Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16 lg:mb-24">
          {/* Left - What TMS Helps Treat */}
          <div className="bg-linear-to-br from-primary/5 to-second-primary/5 rounded-3xl p-8 lg:p-10 border border-primary/20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-linear-to-br from-primary to-second-primary rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-text">
                What TMS Helps Treat
              </h3>
            </div>

            <div className="space-y-4">
              {conditions.map((condition, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-base lg:text-lg text-text font-medium">
                    {condition}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Benefits */}
          <div className="bg-linear-to-br from-accent/5 to-primary/5 rounded-3xl p-8 lg:p-10 border border-accent/20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-linear-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-text">
                Benefits of TMS
              </h3>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 bg-accent rounded-lg flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-base lg:text-lg text-text font-medium">
                      {benefit.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-primary via-second-primary to-primary p-1">
          <div className="bg-secondary-background rounded-[22px] p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-4xl font-bold text-text mb-4">
                  Ready to Learn More?
                </h3>
                <p className="text-base lg:text-lg text-secondary-text mb-6 lg:mb-0">
                  Discover if TMS therapy is right for you. Schedule a free
                  consultation with our experienced team.
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-4 lg:justify-end">
                <Link
                  href={"/schedule"}
                  className="px-8 py-4 bg-linear-to-r from-primary to-second-primary hover:from-second-primary hover:to-primary text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
                >
                  Schedule Consultation
                </Link>
                <Link
                  href={"tel:8588640192"}
                  className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
                >
                  Call Us Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

// Helper component for icons (in case Users is not imported)
function Users({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}

export default WhatIsTMSSection;
