'use client'
import { Brain, Calendar, FileCheck, Play, RefreshCw, TrendingUp, UserCheck, X, Zap } from 'lucide-react';
import React, { useState } from 'react';

const ServicesSection = () => {
 const [selectedMedia, setSelectedMedia] = useState(null);

  const services = [
    {
      icon: Brain,
      title: 'TMS Therapy',
      description: 'Standard and theta-burst protocols tailored to each patient.',
      color: 'from-primary to-second-primary'
    },
    {
      icon: UserCheck,
      title: 'New Patient Consultations',
      description: 'Full evaluation of history, symptoms, and treatment goals.',
      color: 'from-accent to-primary'
    },
    {
      icon: Zap,
      title: 'Motor Threshold Mapping',
      description: 'Determines the precise stimulation level for your brain.',
      color: 'from-second-primary to-primary'
    },
    {
      icon: Calendar,
      title: 'Daily TMS Treatment Sessions',
      description: '20–45 minutes per session, Monday–Friday.',
      color: 'from-primary to-accent'
    },
    {
      icon: TrendingUp,
      title: 'Follow-Up & Progress Monitoring',
      description: 'Weekly check-ins and post-treatment evaluations.',
      color: 'from-accent to-second-primary'
    },
    {
      icon: RefreshCw,
      title: 'Booster / Maintenance Sessions',
      description: 'Optional sessions to maintain long-term stability.',
      color: 'from-second-primary to-accent'
    },
    {
      icon: FileCheck,
      title: 'Insurance Verification & Support',
      description: 'We handle all paperwork, authorizations, and approvals.',
      color: 'from-primary to-second-primary'
    }
  ];

  // Placeholder media - replace with your actual images/videos
  const mediaGallery = [
    { type: 'image', src: '/images/treatment-room.jpg', alt: 'TMS Treatment Room', thumbnail: true },
    { type: 'video', src: '/videos/tms-session.mp4', alt: 'TMS Session Demo', thumbnail: true },
    { type: 'image', src: '/images/tms-machine.jpg', alt: 'NeuroStar TMS Machine', thumbnail: true },
    { type: 'image', src: '/images/patient-care.jpg', alt: 'Patient Care', thumbnail: true }
  ];

  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Services</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-text mb-6">
            Our Core Services
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary via-accent to-second-primary mx-auto rounded-full mb-8"></div>
          <p className="text-base lg:text-xl text-secondary-text max-w-3xl mx-auto">
            Comprehensive TMS therapy services designed to support your journey to mental wellness
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
                <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`}></div>
                
                <div className="relative flex items-start gap-4 lg:gap-6">
                  {/* Icon */}
                  <div className={`w-14 h-14 lg:w-16 lg:h-16 bg-linear-to-br ${service.color} rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
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

        {/* Media Gallery Section */}
        <div className="mb-16 lg:mb-24">
          <div className="text-center mb-10 lg:mb-16">
            <h3 className="text-2xl lg:text-4xl font-bold text-text mb-4">
              See Our Facility & Treatment Process
            </h3>
            <p className="text-base lg:text-lg text-secondary-text max-w-2xl mx-auto">
              Take a look at our state-of-the-art equipment and comfortable treatment environment
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
                  {media.type === 'video' ? (
                    <div className="relative">
                      <Play className="w-12 h-12 lg:w-16 lg:h-16 text-white drop-shadow-lg" />
                      <div className="absolute inset-0 bg-black/20 rounded-full animate-pulse"></div>
                    </div>
                  ) : (
                    <Brain className="w-12 h-12 lg:w-16 lg:h-16 text-primary/40" />
                  )}
                </div>
                
                {/* Replace this div with your actual image/video thumbnail */}
                {/* <img src={media.src} alt={media.alt} className="w-full h-full object-cover" /> */}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-semibold">{media.alt}</p>
                  </div>
                </div>
                
                {/* Video Badge */}
                {media.type === 'video' && (
                  <div className="absolute top-3 right-3 px-3 py-1 bg-accent rounded-full text-white text-xs font-bold">
                    VIDEO
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Note about replacing images */}
          <div className="mt-8 p-6 bg-accent/10 border border-accent/20 rounded-2xl">
            <p className="text-sm lg:text-base text-secondary-text text-center">
              <strong className="text-accent">Note:</strong> Replace the placeholder gradient boxes with your actual images and videos by updating the <code className="px-2 py-1 bg-white rounded text-primary">src</code> attributes in the mediaGallery array.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-primary to-second-primary p-8 lg:p-12 text-center">
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-base lg:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule your free consultation today and take the first step towards lasting relief from depression
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
          
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            {selectedMedia.type === 'video' ? (
              <div className="aspect-video bg-black rounded-2xl overflow-hidden">
                {/* Replace with actual video element */}
                <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-primary/20 to-accent/20">
                  <Play className="w-24 h-24 text-white" />
                </div>
                {/* <video src={selectedMedia.src} controls className="w-full h-full" /> */}
              </div>
            ) : (
              <div className="aspect-video bg-black rounded-2xl overflow-hidden">
                {/* Replace with actual image */}
                <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-primary/20 to-accent/20">
                  <Brain className="w-24 h-24 text-white/40" />
                </div>
                {/* <img src={selectedMedia.src} alt={selectedMedia.alt} className="w-full h-full object-contain" /> */}
              </div>
            )}
            <p className="text-white text-center mt-4 text-lg">{selectedMedia.alt}</p>
          </div>
        </div>
      )}
    </section>
    );
};

export default ServicesSection;