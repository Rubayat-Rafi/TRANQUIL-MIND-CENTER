"use client";
import {
  Brain,
  Calendar,
  FileCheck,
  RefreshCw,
  TrendingUp,
  UserCheck,
  Zap,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const ServicesSection = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const services = [
    {
      icon: Brain,
      title: "TMS Therapy",
      description:
        "Standard and theta-burst protocols tailored to each patient.",
      color: "from-primary to-second-primary",
    },
    {
      icon: UserCheck,
      title: "New Patient Consultations",
      description: "Full evaluation of history, symptoms, and treatment goals.",
      color: "from-accent to-primary",
    },
    {
      icon: Zap,
      title: "Motor Threshold Mapping",
      description: "Determines the precise stimulation level for your brain.",
      color: "from-second-primary to-primary",
    },
    {
      icon: Calendar,
      title: "Daily TMS Treatment Sessions",
      description: "20–45 minutes per session, Monday–Friday.",
      color: "from-primary to-accent",
    },
    {
      icon: TrendingUp,
      title: "Follow-Up & Progress Monitoring",
      description: "Weekly check-ins and post-treatment evaluations.",
      color: "from-accent to-second-primary",
    },
    {
      icon: RefreshCw,
      title: "Booster / Maintenance Sessions",
      description: "Optional sessions to maintain long-term stability.",
      color: "from-second-primary to-accent",
    },
    {
      icon: FileCheck,
      title: "Insurance Verification & Support",
      description: "We handle all paperwork, authorizations, and approvals.",
      color: "from-primary to-second-primary",
    },
  ];






  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Services
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-text mb-6 font-montserrat">
            Our Core Services
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary via-accent to-second-primary mx-auto rounded-full mb-8"></div>
          <p className="text-base lg:text-xl text-secondary-text max-w-3xl mx-auto">
            Comprehensive TMS therapy services designed to support your journey
            to mental wellness
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-secondary-background rounded-3xl p-6 lg:p-8 border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`}
                ></div>

                <div className="relative flex items-start gap-4 lg:gap-6">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 lg:w-16 lg:h-16 bg-linear-to-br ${service.color} rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm lg:text-base text-secondary-text leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>



        {/* Bottom CTA */}
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-primary to-second-primary p-8 lg:p-12 text-center">
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-base lg:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule your free consultation today and take the first step
              towards lasting relief from depression
            </p>
            <div className="flex flex-col lg:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg">
                Book Consultation
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-semibold rounded-full transition-all hover:scale-105 backdrop-blur-sm">
                Call Us Today
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
