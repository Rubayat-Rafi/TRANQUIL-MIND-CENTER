"use client";
import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Calendar,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import Container from "../Container/Container";
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
      value: "(858)864-0192",
      subtext: "Mon-Fri: 8AM-6PM",
      color: "from-primary to-second-primary",
      href: "tel:8588640192",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@tranquilmindcenter.com",
      subtext: "We respond within 24 hours",
      color: "from-accent to-primary",
      href: "mailto:info@tranquilmindcenter.com",
    },
  ];

  const locations = [
    {
      name: "Enara Family Counseling",
      address: "175 W Lexington Avenue",
      city: "El Cajon, CA 92020",
      mapUrl:
        "https://maps.google.com/?q=175+W+Lexington+Avenue+El+Cajon+CA+92020",
    },
    {
      name: "UrgentCare & Tranquil Mind Center",
      address: "4508 Imperial Highway",
      city: "Inglewood, CA 90304",
      mapUrl:
        "https://maps.google.com/?q=4508+Imperial+Highway+Inglewood+CA+90304",
    },
    {
      name: "Essenza Wellness Center",
      address: "8901 Activity Road",
      city: "San Diego, CA 92126",
      mapUrl:
        "https://maps.google.com/?q=8901+Activity+Road+San+Diego+CA+92126",
    },
  ];
  return (
    <section className="py-16 lg:py-24 bg-secondary-background">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Contact Us
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-text mb-6 font-montserrat">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary via-accent to-second-primary mx-auto rounded-full mb-8"></div>
          <p className="text-base lg:text-xl text-secondary-text max-w-3xl mx-auto">
            We&apos;re here to answer all your questions and help you start your
            wellness journey.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-24">
          {/* Left - Contact Information */}
          <div className="space-y-6">
            {/* Contact Methods */}
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
                        className={`w-14 h-14 bg-linear-to-br ${method.color} rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-secondary-text mb-1">
                          {method?.title}
                        </h3>
                        <p className="text-base lg:text-lg font-bold text-text mb-1 group-hover:text-primary transition-colors">
                          {method?.value}
                        </p>
                        <p className="text-sm text-secondary-text">
                          {method?.subtext}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Locations */}
            <div className="bg-linear-to-br from-second-primary/5 to-accent/5 rounded-2xl p-6 lg:p-8 border border-second-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-linear-to-br from-second-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text">Our Locations</h3>
              </div>
              <div className="space-y-4">
                {locations.map((location, index) => (
                  <a
                    key={index}
                    href={location?.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-secondary-background rounded-xl border border-second-primary/10 hover:border-second-primary/30 hover:shadow-md transition-all group"
                  >
                    <h4 className="font-bold text-text text-sm lg:text-base mb-1 group-hover:text-second-primary transition-colors">
                      {location?.name}
                    </h4>
                    <p className="text-xs lg:text-sm text-secondary-text">
                      {location?.address}
                    </p>
                    <p className="text-xs lg:text-sm text-secondary-text">
                      {location?.city}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            {/* <div className="bg-linear-to-br from-primary/5 to-second-primary/5 rounded-2xl p-6 lg:p-8 border border-primary/20">
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
            </div> */}

            {/* Quick Book Button */}
            {/* <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-primary to-second-primary p-1">
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
            </div> */}
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
                    value={formData?.message}
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
        <div className="space-y-8">
          {/* Enara Family Counseling Map */}
          <div className="space-y-4">
            {/* heading with icon */}
            <div className="flex items-center gap-2  ">
              <MapPin className=" w-5 h-5 lg:w-8 lg:h-8 " />
              <h6 className="font-semibold  lg:text-xl">
                Enara Family Counseling
              </h6>
            </div>

            {/* map */}
            <div className="rounded-3xl overflow-hidden border-2 border-primary/10 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.9892136691506!2d-116.96588942433655!3d32.79254527365719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d959c87310fce3%3A0x5cc61848c89631d5!2s175%20W%20Lexington%20Ave%2C%20El%20Cajon%2C%20CA%2092020%2C%20USA!5e0!3m2!1sen!2sbd!4v1763235252661!5m2!1sen!2sbd"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* UrgentCare & Tranquil Mind Center Map */}
          <div className="space-y-4">
            {/* heading with icon */}
            <div className="flex items-center gap-2  ">
              <MapPin className=" w-5 h-5 lg:w-8 lg:h-8 " />
              <h6 className="font-semibold  lg:text-xl">
                UrgentCare & Tranquil Mind Center
              </h6>
            </div>

            {/* map */}
            <div className="rounded-3xl overflow-hidden border-2 border-primary/10 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.4082786308745!2d-118.35752122357464!3d33.93062577320308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b68ef80110bf%3A0x8b9011ae6b1bbeb9!2s4508%20Imperial%20Hwy.%2C%20Inglewood%2C%20CA%2090304%2C%20USA!5e0!3m2!1sen!2sbd!4v1763235700292!5m2!1sen!2sbd"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Essenza Wellness Center Map */}
          <div className="space-y-4">
            {/* heading with icon */}
            <div className="flex items-center gap-2  ">
              <MapPin className=" w-5 h-5 lg:w-8 lg:h-8 " />
              <h6 className="font-semibold  lg:text-xl">
                Essenza Wellness Center
              </h6>
            </div>

            {/* map */}
            <div className="rounded-3xl overflow-hidden border-2 border-primary/10 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.1112772266165!2d-117.13522781339904!3d32.89522604092816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf8d11c4b9493%3A0xd9be698cfa14ee8!2s8901%20Activity%20Rd%2C%20San%20Diego%2C%20CA%2092126%2C%20USA!5e0!3m2!1sen!2sbd!4v1763235888713!5m2!1sen!2sbd"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
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
      </Container>
    </section>
  );
};

export default ContactSection;
