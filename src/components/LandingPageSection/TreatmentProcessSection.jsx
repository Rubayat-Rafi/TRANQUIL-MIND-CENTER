"use client"
import { ArrowRight, Brain, Calendar, CheckCircle2, MessageSquare, RefreshCw, TrendingUp, X } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

const TreatmentProcessSection = () => {

    const [selectedMedia, setSelectedMedia] = useState(null);
    const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We meet with you to discuss symptoms, treatment history, and determine if TMS is right for you.',
      icon: MessageSquare,
      color: 'from-primary to-second-primary',
      accentColor: 'primary'
    },
    {
      number: '02',
      title: 'Motor Mapping',
      description: 'Your motor threshold is measured to individualize your treatment settings.',
      icon: Brain,
      color: 'from-accent to-primary',
      accentColor: 'accent'
    },
    {
      number: '03',
      title: 'Daily Treatment',
      description: 'You will visit the clinic Monday–Friday for 4–6 weeks. Each session lasts 20–45 minutes.',
      icon: Calendar,
      color: 'from-second-primary to-primary',
      accentColor: 'second-primary'
    },
    {
      number: '04',
      title: 'Progress Review',
      description: 'Weekly check-ins ensure improvement and allow protocol adjustments when needed.',
      icon: TrendingUp,
      color: 'from-primary to-accent',
      accentColor: 'primary'
    },
    {
      number: '05',
      title: 'Maintenance Care',
      description: 'Some patients receive monthly boosters to maintain long-term results.',
      icon: RefreshCw,
      color: 'from-accent to-second-primary',
      accentColor: 'accent'
    }
  ];



    // Placeholder media - replace with your actual images/videos
  const mediaGallery = [
    {
      type: "image",
      src: "/Adolescent Treatment - Side.jpg",
      alt: "TMS Treatment Room",
      thumbnail: true,
    },
    {
      type: "video",
      src: "/NeuroStar Story - Mariah.mp4",
      alt: "TMS Session Success Story",
      thumbnail: true,
    },
    {
      type: "image",
      src: "/NS Product Clipped.png",
      alt: "NeuroStar TMS Machine",
      thumbnail: true,
    },
    {
      type: "image",
      src: "/Cara + Dr Smiling Talking.png",
      alt: "Patient Care",
      thumbnail: true,
    },
  ];

  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8 bg-secondary-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Treatment Process</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-text mb-6 font-montserrat">
            Your Journey to Wellness
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary via-accent to-second-primary mx-auto rounded-full mb-8"></div>
          <p className="text-base lg:text-xl text-secondary-text max-w-3xl mx-auto">
            A clear, structured path from your first consultation to lasting relief
          </p>
        </div>

        {/* Desktop Timeline View (lg and up) */}
        <div className="hidden lg:block mb-16">
          {/* Timeline Container */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-linear-to-r from-primary via-accent to-second-primary opacity-20"></div>
            
            {/* Steps */}
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    {/* Step Card */}
                    <div className="group relative bg-background rounded-3xl p-6 border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-2xl hover:-translate-y-2">
                      {/* Number Badge */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-linear-to-br from-accent to-accent/80 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                        {step.number}
                      </div>
                      
                      {/* Icon */}
                      <div className={`w-20 h-20 bg-linear-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform shadow-lg`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold text-text mb-3 text-center">
                        {step.title}
                      </h3>
                      <p className="text-sm text-secondary-text leading-relaxed text-center">
                        {step.description}
                      </p>

                      {/* Timeline Dot */}
                      <div className={`absolute -bottom-12 left-1/2 -translate-x-1/2 w-6 h-6 bg-linear-to-br ${step.color} rounded-full border-4 border-background shadow-lg`}></div>
                    </div>

                    {/* Arrow (except last item) */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-1/2 -right-2 translate-x-1/2 -translate-y-1/2 z-20">
                        <div className={`w-8 h-8 bg-linear-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                          <ArrowRight className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Vertical View (below lg) */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-linear-to-b from-primary via-accent to-second-primary opacity-30 translate-y-6"></div>
                )}
                
                {/* Step Card */}
                <div className="relative bg-background rounded-3xl p-6 border-2 border-primary/10 hover:border-primary/30 transition-all">
                  <div className="flex gap-6">
                    {/* Left - Icon & Number */}
                    <div className="shrink-0">
                      <div className={`w-16 h-16 bg-linear-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg relative`}>
                        <Icon className="w-8 h-8 text-white" />
                        {/* Number Badge */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-linear-to-br from-accent to-accent/80 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                          {step.number}
                        </div>
                      </div>
                    </div>
                    
                    {/* Right - Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl font-bold text-text mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-secondary-text leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow Indicator */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4">
                    <div className={`w-10 h-10 bg-linear-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <ArrowRight className="w-5 h-5 text-white rotate-90" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

                {/* Media Gallery Section */}
                <div className="mb-16 lg:mb-24">
                  <div className="text-center mb-10 lg:mb-16">
                    <h3 className="text-2xl lg:text-4xl font-bold text-text mb-4">
                      See Our Facility & Treatment Process
                    </h3>
                    <p className="text-base lg:text-lg text-secondary-text max-w-2xl mx-auto">
                      Take a look at our state-of-the-art equipment and comfortable
                      treatment environment
                    </p>
                  </div>
        
                  {/* Gallery Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {mediaGallery.map((media, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedMedia(media)}
                        className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group bg-primary/5"
                      >
                        {/* Placeholder - Replace with actual image */}
                        <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          {media.type === "video" ? (
                            <video
                              className="w-full h-full object-cover rounded-lg"
                              controls
                              preload="none"
                              playsInline
                              // autoPlay    <-- enable only if needed
                              // muted       <-- required if autoPlay is enabled
                              // loop        <-- enable if repeated demo effect wanted
                            >
                              <source src={media.src} type="video/mp4" />
                              <track
                                src="/captions/english.vtt"
                                kind="subtitles"
                                srcLang="en"
                                label="English"
                              />
                              Your browser does not support the video tag.
                            </video>
                          ) : (
                            <Image
                              src={media.src}
                              alt={media.alt}
                              width={500}
                              height={500}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        {/* <Brain className="w-12 h-12 lg:w-16 lg:h-16 text-primary/40" /> */}
                        {/* Replace this div with your actual image/video thumbnail */}
                        {/* <img src={media.src} alt={media.alt} className="w-full h-full object-cover" /> */}
        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <p className="text-white text-sm font-semibold">
                              {media.alt}
                            </p>
                          </div>
                        </div>
        
                        {/* Video Badge */}
                        {media.type === "video" && (
                          <div className="absolute top-3 right-3 px-3 py-1 bg-accent rounded-full text-white text-xs font-bold">
                            VIDEO
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
        
                  {/* Note about replacing images */}
                  {/* <div className="mt-8 p-6 bg-accent/10 border border-accent/20 rounded-2xl">
                    <p className="text-sm lg:text-base text-secondary-text text-center">
                      <strong className="text-accent">Note:</strong> Replace the
                      placeholder gradient boxes with your actual images and videos by
                      updating the{" "}
                      <code className="px-2 py-1 bg-white rounded text-primary">
                        src
                      </code>{" "}
                      attributes in the mediaGallery array.
                    </p>
                  </div> */}
                </div>

        {/* Bottom Info Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mt-16 lg:mt-24">
          <div className="bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl p-6 lg:p-8 border border-primary/20">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg lg:text-xl font-bold text-text mb-2">Typical Timeline</h4>
            <p className="text-sm lg:text-base text-secondary-text">4–6 weeks of daily sessions, Monday through Friday</p>
          </div>

          <div className="bg-linear-to-br from-accent/10 to-accent/5 rounded-2xl p-6 lg:p-8 border border-accent/20">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg lg:text-xl font-bold text-text mb-2">Session Duration</h4>
            <p className="text-sm lg:text-base text-secondary-text">Each treatment session lasts 20–45 minutes</p>
          </div>

          <div className="bg-linear-to-br from-second-primary/10 to-second-primary/5 rounded-2xl p-6 lg:p-8 border border-second-primary/20">
            <div className="w-12 h-12 bg-second-primary rounded-xl flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg lg:text-xl font-bold text-text mb-2">Long-Term Care</h4>
            <p className="text-sm lg:text-base text-secondary-text">Optional maintenance sessions available for sustained results</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 lg:mt-24 text-center">
          <div className="inline-block bg-linear-to-r from-primary via-accent to-second-primary p-1 rounded-3xl">
            <div className="bg-background rounded-[22px] px-8 lg:px-12 py-8 lg:py-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-text mb-4">
                Ready to Begin Your Treatment Journey?
              </h3>
              <p className="text-base lg:text-lg text-secondary-text mb-6">
                Schedule your free consultation and we&apos;ll guide you through every step
              </p>
              <button className="px-8 py-4 bg-linear-to-r from-primary to-second-primary hover:from-second-primary hover:to-primary text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg">
                Book Your Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

            {/* Media Modal/Lightbox */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all"
            onClick={() => setSelectedMedia(null)}
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === "video" ? (
              <div className="aspect-video bg-black rounded-2xl overflow-hidden">
                {/* Replace with actual video element */}
                {/* <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-primary/20 to-accent/20">
                  <Play className="w-24 h-24 text-white" />
                </div> */}
                <video
                  src={selectedMedia.src}
                  controls
                  className="w-full h-full"
                />
              </div>
            ) : (
              <div className="aspect-video bg-black rounded-2xl overflow-hidden">
                {/* Replace with actual image */}
                {/* <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-primary/20 to-accent/20">
                  <Brain className="w-24 h-24 text-white/40" />
                </div> */}
                <Image
                  width={500}
                  height={500}
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <p className="text-white text-center mt-4 text-lg">
              {selectedMedia.alt}
            </p>
          </div>
        </div>
      )}
    </section>
    );
};

export default TreatmentProcessSection;