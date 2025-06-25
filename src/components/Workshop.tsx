
import { Calendar, Clock, Users, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const Workshop = () => {
  const days = [
    {
      day: 1,
      title: "Brand Foundation",
      focus: "Discover your unique value proposition and core message"
    },
    {
      day: 2,
      title: "Audience Deep Dive", 
      focus: "Understand exactly who you're talking to and what they need"
    },
    {
      day: 3,
      title: "Visual Identity",
      focus: "Create colors, fonts, and styles that reflect your brand"
    },
    {
      day: 4,
      title: "Messaging Framework",
      focus: "Craft compelling copy that converts visitors to customers"
    },
    {
      day: 5,
      title: "Brand Guidelines",
      focus: "Build your brand bible for consistent application"
    },
    {
      day: 6,
      title: "Real-World Application",
      focus: "Apply your brand to website, social media, and marketing"
    },
    {
      day: 7,
      title: "Launch & Scale",
      focus: "Go live with confidence and plan for growth"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Your 7-Day Brand Transformation
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Each day builds on the last, giving you a complete brand system by the end of the week.
            </p>
            
            {/* Workshop Details */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="flex items-center justify-center space-x-2 bg-white p-4 rounded-lg shadow-sm">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Jan 15-21, 2024</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white p-4 rounded-lg shadow-sm">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="font-medium">90 min/day</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white p-4 rounded-lg shadow-sm">
                <Video className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Live + Recorded</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white p-4 rounded-lg shadow-sm">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Max 12 People</span>
              </div>
            </div>
          </div>
          
          {/* Daily Curriculum */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {days.map((day, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                    {day.day}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {day.title}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {day.focus}
                </p>
              </div>
            ))}
          </div>
          
          {/* Bonus Content */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-blue-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Bonus: What's Included
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-slate-700">Brand Strategy Workbook</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-slate-700">Design Templates & Tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-slate-700">1-on-1 Brand Review Session</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-slate-700">30-Day Implementation Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-slate-700">Private Community Access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-slate-700">Lifetime Recording Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshop;
