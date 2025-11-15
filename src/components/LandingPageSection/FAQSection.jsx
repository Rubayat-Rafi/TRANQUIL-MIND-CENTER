'use client'
import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Shield, Clock, DollarSign, Car, TrendingUp, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Container from '../Container/Container';

const FAQSection = () => {
 const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Is TMS painful?',
      answer: 'Most patients feel only a tapping sensation. It becomes more comfortable after the first few sessions.',
      icon: Shield,
      color: 'from-primary to-second-primary'
    },
    {
      question: 'Are there side effects?',
      answer: 'Mild scalp discomfort or headache in early sessions — these usually fade quickly.',
      icon: HelpCircle,
      color: 'from-accent to-primary'
    },
    {
      question: 'Will insurance cover TMS?',
      answer: 'Many insurance plans cover TMS. Our team checks benefits and handles authorization before treatment begins.',
      icon: DollarSign,
      color: 'from-second-primary to-primary'
    },
    {
      question: 'Can I work or drive afterward?',
      answer: 'Yes! There is no sedation. Patients return to daily activities immediately.',
      icon: Car,
      color: 'from-primary to-accent'
    },
    {
      question: 'How soon will I feel better?',
      answer: 'Some patients notice improvement within 1–2 weeks; others see changes later in the program.',
      icon: TrendingUp,
      color: 'from-accent to-second-primary'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 lg:py-24  bg-secondary-background">
      <Container >
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">FAQ</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-text mb-6 font-montserrat">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary via-accent to-second-primary mx-auto rounded-full mb-8"></div>
          <p className="text-base lg:text-xl text-secondary-text max-w-3xl mx-auto">
            Get answers to the most common questions about TMS therapy
          </p>
        </div>

        {/* FAQ Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left - Decorative Card */}
          <div className="lg:sticky lg:top-8">
            <div className="relative bg-linear-to-br from-primary/10 via-accent/10 to-second-primary/10 rounded-3xl p-8 lg:p-12 border border-primary/20 overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-linear-to-br from-primary to-second-primary rounded-3xl flex items-center justify-center mb-6 shadow-xl">
                  <HelpCircle className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-text mb-4">
                  Still Have Questions?
                </h3>
                <p className="text-base lg:text-lg text-secondary-text mb-8 leading-relaxed">
                  Our team is here to help answer any questions you may have about TMS therapy and whether it&apos;s right for you.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-secondary-background/50 backdrop-blur-sm rounded-2xl p-4 border border-primary/10">
                    <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-xs lg:text-sm text-secondary-text">Support Available</div>
                  </div>
                  <div className="bg-secondary-background/50 backdrop-blur-sm rounded-2xl p-4 border border-accent/10">
                    <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">100%</div>
                    <div className="text-xs lg:text-sm text-secondary-text">Confidential</div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link href={'/schedule'} className="w-full px-8 py-4 bg-linear-to-r from-primary to-second-primary hover:from-second-primary hover:to-primary text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg">
                  Schedule a Consultation
                </Link>

                {/* Contact Info */}
                <div className="mt-6 pt-6 border-t border-primary/20">
                  <p className="text-sm text-secondary-text mb-2">Or call us directly</p>
                  <p className="text-xl font-bold text-text">(858)864-0192</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`bg-background rounded-2xl border-2 transition-all ${
                    isOpen
                      ? 'border-primary/30 shadow-xl'
                      : 'border-primary/10 hover:border-primary/20 shadow-md'
                  }`}
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-start gap-4 p-6 lg:p-8 text-left"
                  >
                    {/* Icon */}
                    <div className={`w-12 h-12 lg:w-14 lg:h-14 bg-linear-to-br ${faq.color} rounded-xl lg:rounded-2xl flex items-center justify-center shrink-0 shadow-lg transition-transform ${
                      isOpen ? 'scale-110' : ''
                    }`}>
                      <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                    </div>

                    {/* Question Text */}
                    <div className="flex-1">
                      <h3 className={`text-lg lg:text-xl font-bold mb-1 transition-colors ${
                        isOpen ? 'text-primary' : 'text-text'
                      }`}>
                        {faq.question}
                      </h3>
                      {!isOpen && (
                        <p className="text-sm text-secondary-text">Click to expand</p>
                      )}
                    </div>

                    {/* Arrow Icon */}
                    <div className={`w-8 h-8 flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}>
                      <ChevronDown className={`w-6 h-6 transition-colors ${
                        isOpen ? 'text-primary' : 'text-secondary-text'
                      }`} />
                    </div>
                  </button>

                  {/* Answer Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-0">
                      <div className={`pl-16 lg:pl-20 p-6 bg-linear-to-br ${faq.color} bg-opacity-5 rounded-xl border-l-4 ${
                        index === 0 ? 'border-primary' :
                        index === 1 ? 'border-accent' :
                        index === 2 ? 'border-second-primary' :
                        index === 3 ? 'border-primary' :
                        'border-accent'
                      }`}>
                        <p className="text-base lg:text-lg text-secondary-background leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Help Section */}
        {/*<div className="mt-16 lg:mt-24 grid lg:grid-cols-3 gap-6">
          <div className="bg-linear-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-bold text-text mb-2">Chat Support</h4>
            <p className="text-sm text-secondary-text mb-4">Get instant answers to your questions</p>
            <button className="text-primary font-semibold text-sm hover:underline">Start Chat →</button>
          </div>

          <div className="bg-linear-to-br from-accent/5 to-accent/10 rounded-2xl p-6 border border-accent/20 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-bold text-text mb-2">Book a Call</h4>
            <p className="text-sm text-secondary-text mb-4">Schedule a time to speak with our team</p>
            <button className="text-accent font-semibold text-sm hover:underline">Schedule Now →</button>
          </div>

          <div className="bg-linear-to-br from-second-primary/5 to-second-primary/10 rounded-2xl p-6 border border-second-primary/20 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-second-primary rounded-xl flex items-center justify-center mb-4">
              <HelpCircle className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-bold text-text mb-2">Resource Center</h4>
            <p className="text-sm text-secondary-text mb-4">Browse guides and educational materials</p>
            <button className="text-second-primary font-semibold text-sm hover:underline">Explore →</button>
          </div>
        </div>*/}

      </Container>
    </section>
    );
};

export default FAQSection;