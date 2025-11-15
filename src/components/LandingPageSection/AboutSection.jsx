import { Award, Heart, Shield, Sparkles, Users } from "lucide-react";
import React from "react";
import Container from "../Container/Container";

const AboutSection = () => {
  const commitments = [
    { text: "Patient-centered care", icon: Heart },
    { text: "Science-driven treatment", icon: Award },
    { text: "Modern equipment and protocols", icon: Sparkles },
    { text: "Friendly and supportive staff", icon: Users },
    { text: "A relaxing, private setting", icon: Shield },
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary-background">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              About Us
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-text mb-4">
            Who We Are
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary via-accent to-second-primary mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 lg:mb-24">
          {/* Left Column - Description */}
          <div className="space-y-8">
            <div className="relative p-8 bg-secondary-background rounded-3xl shadow-lg border border-primary/10 hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-linear-to-br from-primary to-second-primary rounded-2xl flex items-center justify-center shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <p className="text-base lg:text-lg text-secondary-text leading-relaxed pt-4">
                Tranquil Mind Center is a dedicated TMS therapy clinic offering
                advanced, evidence-based treatment for depression and mood
                disorders. Our experienced clinicians, technicians, and support
                staff provide personalized care in a calm, welcoming
                environment.
              </p>
            </div>

            <div className="relative p-8 bg-linear-to-br from-primary/5 to-accent/5 rounded-3xl border border-primary/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-text mb-3">
                    Our Philosophy
                  </h3>
                  <p className="text-base lg:text-lg text-secondary-text leading-relaxed">
                    We believe mental wellness is a journey — and every patient
                    deserves compassionate care, transparency, and modern
                    technology that truly works.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-accent/20 to-second-primary/20 rounded-3xl"></div>
            <div className="absolute inset-4 bg-secondary-background rounded-3xl shadow-2xl overflow-hidden">
              {/* Decorative patterns */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

              {/* Center content */}
              <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                <div className="w-24 h-24 lg:w-32 lg:h-32 bg-linear-to-br from-primary to-second-primary rounded-full flex items-center justify-center mb-6 shadow-xl">
                  <Award className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-text mb-3">
                  Evidence-Based Care
                </h3>
                <p className="text-secondary-text text-base lg:text-lg max-w-sm">
                  Trusted by thousands, backed by science, delivered with
                  compassion
                </p>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-2 gap-6 w-full max-w-md">
                  <div className="p-4 bg-primary/5 rounded-xl">
                    <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                      15+
                    </div>
                    <div className="text-xs lg:text-sm text-secondary-text">
                      Years Experience
                    </div>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-xl">
                    <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">
                      1000+
                    </div>
                    <div className="text-xs lg:text-sm text-secondary-text">
                      Patients Helped
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Commitment Section */}
        <div className="relative">
          <div className="text-center mb-10 lg:mb-16">
            <h3 className="text-2xl lg:text-4xl font-bold text-text mb-4">
              Our Commitment
            </h3>
            <p className="text-base lg:text-lg text-secondary-text max-w-2xl mx-auto">
              We&apos;re dedicated to providing the highest quality care through
              proven methods and genuine compassion
            </p>
          </div>

          {/* Commitment Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6">
            {commitments.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative p-6 bg-secondary-background rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-14 h-14 bg-linear-to-br from-primary to-second-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-sm lg:text-base font-semibold text-text leading-snug">
                      {item.text}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 lg:mt-20 text-center">
            <div className="inline-flex flex-col lg:flex-row items-center gap-4 p-8 bg-linear-to-r from-primary to-second-primary rounded-3xl shadow-2xl">
              <div className="text-white text-left">
                <h4 className="text-xl lg:text-2xl font-bold mb-2">
                  Ready to Start Your Journey?
                </h4>
                <p className="text-white/90 text-sm lg:text-base">
                  Let&apos;s discuss how TMS therapy can help you
                </p>
              </div>
              <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg whitespace-nowrap">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
