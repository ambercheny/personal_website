import { Calendar, Clock, CheckCircle } from "lucide-react";

export default function Timeline() {
  const events = [
    {
      status: "current",
      icon: Clock,
      title: "Preparing for the Google Health Student Research Application",
      date: "Current",
      color: "bg-primary-600 text-white",
    },
    {
      status: "upcoming",
      icon: Calendar,
      title: "International Conference on Healthcare Innovation",
      date: "June 2026",
      color: "bg-primary-400 text-white",
    },
    {
      status: "past",
      icon: CheckCircle,
      title: "Presented research at Data Science Summit",
      date: "September 2025",
      color: "bg-primary-200 text-primary-900",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 text-center mb-4">
          Timeline: News & Events
        </h2>
        <p className="text-center text-primary-700 mb-12">
          Current activities, upcoming milestones, and recent achievements
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 hidden md:block"></div>

          <div className="space-y-8">
            {events.map((event, index) => {
              const Icon = event.icon;
              return (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full ${event.color} flex items-center justify-center shadow-lg z-10`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-primary-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-heading text-xl font-bold text-primary-900">
                        {event.title}
                      </h3>
                      <span className="flex-shrink-0 px-3 py-1 bg-primary-200 text-primary-900 rounded-full text-sm font-semibold">
                        {event.date}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
