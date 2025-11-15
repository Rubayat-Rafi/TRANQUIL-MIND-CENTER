import React from "react";
import { Brain, Sparkles, Shield, Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <div
      id="#home"
      className="relative bg-linear-to-br from-second-primary via-primary to-second-primary overflow-hidden border-none"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>

        <div className="absolute top-40 right-10 w-96 h-96 bg-second-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>

        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

      <div className="relative max-w-[1440px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 pt-14 pb-24 lg:pb-28 lg:bt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-28 lg:gap-6">
          {/* Left Content */}
          <div className=" space-y-5 lg:space-y-8 text-center lg:text-left w-full lg:w-1/2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm text-secondary-background/90 font-medium">
                Welcome to{" "}
                <span className="bg-linear-to-r from-accent/90  to-accent bg-clip-text text-transparent font-semibold">
                  Tranquil Mind Center
                </span>
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
                <h1 className="text-3xl lg:text-4xl  font-bold text-secondary-background leading-tight font-montserrat">
                  {/* Drug-Free{" "}
                <span className="bg-linear-to-r from-accent/90  to-accent bg-clip-text text-transparent">
                  Depression Relief
                </span>{" "}
                with NeuroStar<sup className="text-2xl">®</sup> TMS Therapy */}
                  A New Path to{" "}
                  <span className="bg-linear-to-r from-accent/90  to-accent bg-clip-text text-transparent">
                    Mental Wellness
                  </span>
                </h1>
                <p className="lg:text-sm text-xs text-secondary-background/85 max-w-2xl mx-auto lg:mx-0">
                  At Tranquil Mind Center, we provide safe, effective, and
                  FDA-approved Transcranial Magnetic Stimulation (TMS) therapy
                  for depression, anxiety, OCD, PTSD, and other mood disorders.
                  Our mission is simple: to restore hope, balance, and emotional
                  wellbeing without the side effects of medication.
                </p>

                <p className="lg:text-sm text-xs text-secondary-background/85 max-w-2xl mx-auto lg:mx-0">
                  If traditional treatments haven’t worked, TMS offers a
                  non-invasive alternative backed by science. Thousands of
                  patients worldwide have experienced life-changing improvement
                  — and you can too.
                </p>
       
            </div>

            {/* Buttons */}
            <div className="">
              <button className="group relative py-1.5 px-3.5 lg:px-6 lg:py-2 bg-linear-to-r from-accent to-primary rounded-full font-medium text-secondary-background  overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-accent/50">
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm lg:text-base">
                  Book a Free Consultation
                  <Sparkles className=" w-4 h-4  lg:w-5 lg:h-5 group-hover:rotate-12 transition-transform" />
                </span>

                <div className="absolute inset-0 bg-linear-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              {/* <button className="px-6 py-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full font-medium text-secondary-background hover:bg-white/20 transition-all hover:scale-105">
                Learn How TMS Works
              </button> */}
            </div>

            {/* Features */}
            <div className="">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-secondary-background/80">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-[10px] lg:text-xs font-medium">
                  Call us today to schedule your first visit and see if TMS is
                  right for you.
                </span>
              </div>
              {/* <div className="flex items-center gap-2 text-secondary-background">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-200"></div>
                <span className="text-sm font-medium">No surgery</span>
              </div> */}
              {/* <div className="flex items-center gap-2 text-secondary-background">
                <div className="w-2 h-2 bg-second-primary rounded-full animate-pulse delay-500"></div>
                <span className="text-sm font-medium">
                  Proven, long-lasting relief
                </span>
              </div> */}
            </div>
          </div>

          {/* Right Visual Element */}
          <div className="relative flex justify-center lg:justify-end w-full lg:w-1/2 max-lg:pb-28">
            <div className="relative w-full max-w-lg">
              {/* Floating Cards */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Center brain icon */}
                <div className="relative z-10 w-40 h-40 sm:w-48 sm:h-48 bg-linear-to-br from-accent via-primary to-second-primary rounded-full flex items-center justify-center shadow-2xl shadow-second-primary/50 animate-pulse">
                  <Brain className="w-20 h-20 sm:w-24 sm:h-24 text-secondary-background" />
                </div>

                {/* Orbiting elements */}
                <div className="absolute top-0 left-1/6 w-16 h-16 lg:w-20 lg:h-20 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 flex items-center justify-center animate-bounce delay-300">
                  <Sparkles className="w-6 h-6  lg:w-8 lg:h-8 text-accent" />
                </div>

                <div className="absolute bottom-10 lg:bottom-18 right-1/4 w-14 h-14 lg:w-24 lg:h-24 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 flex items-center justify-center animate-bounce delay-700">
                  <Heart className=" w-5 h-5 lg:w-10 lg:h-10 text-red-400" />
                </div>

                <div className="absolute top-1/3 right-0 w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 flex items-center justify-center animate-bounce">
                  <Shield className="w-7 h-7 text-second-primary" />
                </div>
              </div>

              {/* Glow effect */}
              <div
                className="absolute inset-0 bg-linear-to-r from-primary/20
               to-second-primary/20 blur-3xl"
              ></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="mt-20 sm:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "83%", label: "Success Rate" },
            { number: "2M+", label: "Treatments Given" },
            { number: "15+", label: "Years Proven" },
            { number: "0", label: "Systemic Side Effects" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center space-y-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-r from-white to-white bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-secondary-background font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24 sm:h-32 fill-current text-secondary-background"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
