import React from "react";
import {
  Clock,
  Calendar,
  CheckSquare,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const ScheduleSection = () => {
  const weekDays = [
    { day: "Monday", hours: "8:00 AM – 6:00 PM", available: true },
    { day: "Tuesday", hours: "8:00 AM – 6:00 PM", available: true },
    { day: "Wednesday", hours: "8:00 AM – 6:00 PM", available: true },
    { day: "Thursday", hours: "8:00 AM – 6:00 PM", available: true },
    { day: "Friday", hours: "8:00 AM – 6:00 PM", available: true },
    {
      day: "Saturday",
      hours: "9:00 AM – 1:00 PM",
      available: true,
      note: "by appointment only",
    },
    { day: "Sunday", hours: "Closed", available: false },
  ];

  const treatmentDetails = [
    { text: "5 sessions per week", icon: Calendar },
    { text: "4–6 weeks total", icon: Clock },
    { text: "Follow-ups and booster sessions as needed", icon: CheckSquare },
  ];

  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Schedule
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-text mb-6 font-montserrat">
            Plan Your Visit
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary via-accent to-second-primary mx-auto rounded-full mb-8"></div>
          <p className="text-base lg:text-xl text-secondary-text max-w-3xl mx-auto">
            Flexible scheduling to fit your lifestyle and treatment needs
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-24">
          {/* Left - Clinic Hours */}
          <div className="bg-secondary-background rounded-3xl p-6 lg:p-10 border-2 border-primary/10 shadow-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-linear-to-br from-primary to-second-primary rounded-2xl flex items-center justify-center shadow-lg">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-text">
                Clinic Hours
              </h3>
            </div>

            <div className="space-y-3">
              {weekDays.map((day, index) => (
                <div
                  key={index}
                  className={`group flex items-center justify-between p-4 rounded-xl transition-all ${
                    day.available
                      ? "bg-primary/5 hover:bg-primary/10 border border-primary/10"
                      : "bg-gray-100 border border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        day.available
                          ? "bg-primary animate-pulse"
                          : "bg-gray-400"
                      }`}
                    ></div>
                    <span
                      className={`font-semibold text-base lg:text-lg ${
                        day.available ? "text-text" : "text-gray-500"
                      }`}
                    >
                      {day.day}
                    </span>
                  </div>
                  <div className="text-right">
                    <span
                      className={`font-medium text-sm lg:text-base ${
                        day.available ? "text-secondary-text" : "text-gray-500"
                      }`}
                    >
                      {day.hours}
                    </span>
                    {day.note && (
                      <p className="text-xs text-accent mt-1 italic">
                        {day.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact */}
            <div className="mt-8 p-6 bg-linear-to-br from-accent/10 to-accent/5 rounded-2xl border border-accent/20">
              <p className="text-sm text-secondary-text mb-4">
                Need to schedule outside these hours?
              </p>
              <button className="w-full px-6 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Call for Special Arrangements
              </button>
            </div>
          </div>

          {/* Right - Visit Times & Treatment Course */}
          <div className="space-y-6 lg:space-y-8">
            {/* Typical Daily Visit Times */}
            <div className="bg-linear-to-br from-primary/5 to-second-primary/5 rounded-3xl p-6 lg:p-10 border border-primary/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-linear-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center shadow-lg">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-text">
                  Typical Daily Visit Times
                </h3>
              </div>

              <p className="text-base lg:text-lg text-secondary-text leading-relaxed mb-6">
                Sessions available every 20–45 minutes depending on your
                protocol.
              </p>

              {/* Time Slots Visual */}
              <div className="grid grid-cols-2 gap-3">
                {["Morning", "Midday", "Afternoon", "Evening"].map(
                  (slot, index) => (
                    <div
                      key={index}
                      className="p-4 bg-secondary-background rounded-xl border border-primary/10 text-center hover:border-primary/30 transition-all hover:shadow-md"
                    >
                      <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-sm font-semibold text-text">{slot}</p>
                      <p className="text-xs text-secondary-text mt-1">
                        Available
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Recommended Treatment Course */}
            <div className="bg-secondary-background rounded-3xl p-6 lg:p-10 border-2 border-accent/20 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-linear-to-br from-second-primary to-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <CheckSquare className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-text">
                  Recommended Treatment Course
                </h3>
              </div>

              <div className="space-y-4">
                {treatmentDetails.map((detail, index) => {
                  const Icon = detail.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-linear-to-r from-primary/5 to-transparent rounded-xl border border-primary/10 hover:border-primary/30 transition-all group"
                    >
                      <div className="w-10 h-10 bg-linear-to-br from-primary to-second-primary rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-base lg:text-lg text-text font-medium">
                        {detail.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Timeline Visual */}
              <div className="mt-8 p-6 bg-linear-to-r from-primary/10 via-accent/10 to-second-primary/10 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-text">
                    Treatment Timeline
                  </span>
                  <span className="text-sm font-semibold text-primary">
                    4-6 Weeks
                  </span>
                </div>
                <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-primary via-accent to-second-primary rounded-full animate-pulse"></div>
                </div>
                <div className="flex items-center justify-between mt-3 text-xs text-secondary-text">
                  <span>Week 1</span>
                  <span>Week 3</span>
                  <span>Week 6</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-primary via-second-primary to-accent p-1">
          <div className="bg-background rounded-[22px] p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Left - Text */}
              <div className="lg:col-span-2">
                <h3 className="text-2xl lg:text-4xl font-bold text-text mb-4">
                  Ready to Schedule Your First Session?
                </h3>
                <p className="text-base lg:text-lg text-secondary-text mb-6 lg:mb-0">
                  Our team is here to help you find the perfect time slot that
                  fits your schedule
                </p>
              </div>

              {/* Right - Buttons */}
              <div className="flex flex-col gap-4">
                <button className="px-8 py-4 bg-linear-to-r from-primary to-second-primary hover:from-second-primary hover:to-primary text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </button>
                <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Strip */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="flex items-center gap-4 p-4 bg-secondary-background rounded-2xl border border-primary/10">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-secondary-text">Call Us</p>
              <p className="text-sm font-semibold text-text">(555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-secondary-background rounded-2xl border border-primary/10">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-xs text-secondary-text">Email Us</p>
              <p className="text-sm font-semibold text-text">
                info@tranquilmind.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-secondary-background rounded-2xl border border-primary/10">
            <div className="w-10 h-10 bg-second-primary/10 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-second-primary" />
            </div>
            <div>
              <p className="text-xs text-secondary-text">Visit Us</p>
              <p className="text-sm font-semibold text-text">
                123 Wellness Ave
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
