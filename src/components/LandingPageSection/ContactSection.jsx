"use client";
import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Calendar,
  Clock,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Add your form submission logic here
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      value: "(555) 123-4567",
      subtext: "Mon-Fri: 8AM-6PM",
      color: "from-primary to-second-primary",
      href: "tel:5551234567",
    },
    {
      icon: Mail,
      title: "Email",
      value: "appointments@tranquilmindcenter.com",
      subtext: "We respond within 24 hours",
      color: "from-accent to-primary",
      href: "mailto:appointments@tranquilmindcenter.com",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "123 Wellness Avenue, Suite 200",
      subtext: "City, State 12345",
      color: "from-second-primary to-accent",
      href: "https://maps.google.com",
    },
  ];

  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Contact Us
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-text mb-6">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary via-accent to-second-primary mx-auto rounded-full mb-8"></div>
          <p className="text-base lg:text-xl text-secondary-text max-w-3xl mx-auto">
            We&apos;re here to answer all your questions and help you start your
            wellness journey.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-24">
          {/* Left - Contact Information */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Link
                    key={index}
                    href={method.href}
                    target={method.icon === MapPin ? "_blank" : undefined}
                    rel={
                      method.icon === MapPin ? "noopener noreferrer" : undefined
                    }
                    className="group block bg-secondary-background rounded-2xl p-6 border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 bg-linear-to-br ${method.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-secondary-text mb-1">
                          {method.title}
                        </h3>
                        <p className="text-base lg:text-lg font-bold text-text mb-1 group-hover:text-primary transition-colors">
                          {method.value}
                        </p>
                        <p className="text-sm text-secondary-text">
                          {method.subtext}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Office Hours */}
            <div className="bg-linear-to-br from-primary/5 to-second-primary/5 rounded-2xl p-6 lg:p-8 border border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-second-primary rounded-xl flex items-center justify-center shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text">Office Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm lg:text-base font-medium text-text">
                    Monday - Friday
                  </span>
                  <span className="text-sm lg:text-base text-secondary-text">
                    8:00 AM – 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm lg:text-base font-medium text-text">
                    Saturday
                  </span>
                  <span className="text-sm lg:text-base text-secondary-text">
                    9:00 AM – 1:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm lg:text-base font-medium text-text">
                    Sunday
                  </span>
                  <span className="text-sm lg:text-base text-secondary-text">
                    Closed
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Book Button */}
            <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-primary to-second-primary p-1">
              <div className="bg-background rounded-[14px] p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-text mb-3">
                  Book an Appointment
                </h3>
                <p className="text-sm lg:text-base text-secondary-text mb-6">
                  Click below to schedule your consultation
                </p>
                <button className="w-full px-8 py-4 bg-linear-to-r from-primary to-second-primary hover:from-second-primary hover:to-primary text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Online
                </button>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-secondary-background rounded-3xl p-6 lg:p-10 border-2 border-primary/10 shadow-xl">
            <h3 className="text-2xl lg:text-3xl font-bold text-text mb-6">
              Send Us a Message
            </h3>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-text mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border-2 border-primary/10 rounded-xl focus:border-primary focus:outline-none transition-colors text-text"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-text mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border-2 border-primary/10 rounded-xl focus:border-primary focus:outline-none transition-colors text-text"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-text mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border-2 border-primary/10 rounded-xl focus:border-primary focus:outline-none transition-colors text-text"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-text mb-2"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-background border-2 border-primary/10 rounded-xl focus:border-primary focus:outline-none transition-colors text-text resize-none"
                    placeholder="Tell us about your symptoms, treatment history, or any questions you have..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-linear-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>

                <p className="text-xs text-secondary-text text-center">
                  By submitting this form, you agree to our privacy policy.
                  We&apos;ll respond within 24 hours.
                </p>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-linear-to-br from-primary to-second-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-text mb-3">
                  Message Sent!
                </h3>
                <p className="text-base text-secondary-text mb-6">
                  Thank you for reaching out. We&apos;ll get back to you within
                  24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-primary/10 text-primary font-semibold rounded-full hover:bg-primary/20 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Map Section */}
        <div className="rounded-3xl overflow-hidden border-2 border-primary/10 shadow-2xl">
          {/* Map Placeholder - Replace with actual Google Maps embed */}
          <div className="relative w-full h-64 lg:h-96 bg-linear-to-br from-primary/10 via-accent/10 to-second-primary/10">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <MapPin className="w-16 h-16 text-primary/40 mb-4" />
              <p className="text-lg font-semibold text-secondary-text">
                Map Location
              </p>
              <p className="text-sm text-secondary-text mt-2 px-4 text-center">
                Replace this placeholder with your Google Maps embed iframe
              </p>
            </div>
          </div>
          {/* Example: <iframe src="YOUR_GOOGLE_MAPS_EMBED_URL" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
        </div>

        {/* Help Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-secondary-background rounded-2xl border border-primary/10">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-lg font-bold text-text mb-2">Emergency?</h4>
            <p className="text-sm text-secondary-text">
              Call us immediately for urgent matters
            </p>
          </div>

          <div className="text-center p-6 bg-secondary-background rounded-2xl border border-accent/10">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-6 h-6 text-accent" />
            </div>
            <h4 className="text-lg font-bold text-text mb-2">
              Quick Questions?
            </h4>
            <p className="text-sm text-secondary-text">
              Check our FAQ section for instant answers
            </p>
          </div>

          <div className="text-center p-6 bg-secondary-background rounded-2xl border border-second-primary/10">
            <div className="w-12 h-12 bg-second-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-second-primary" />
            </div>
            <h4 className="text-lg font-bold text-text mb-2">
              Existing Patient?
            </h4>
            <p className="text-sm text-secondary-text">
              Use our patient portal to manage appointments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
