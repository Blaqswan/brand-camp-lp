
import { CheckCircle, Target, Zap, Users, TrendingUp, Clock } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Target,
      title: "Crystal Clear Positioning",
      description: "Know exactly what makes you different and why customers should choose you over competitors."
    },
    {
      icon: Zap,
      title: "Instant Recognition",
      description: "Create a visual identity that sticks in minds and builds trust at first glance."
    },
    {
      icon: Users,
      title: "Customer Magnetism",
      description: "Attract your ideal customers like a magnet with messaging that speaks directly to them."
    },
    {
      icon: TrendingUp,
      title: "Increased Conversions",
      description: "Turn more visitors into customers with a brand that builds trust and drives action."
    },
    {
      icon: Clock,
      title: "Time-Saving System",
      description: "Never second-guess your brand decisions again with our proven framework."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              What You'll Walk Away With
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              By the end of our 7-day workshop, you'll have a complete brand system that works – not just pretty pictures.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group p-6 rounded-xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300 border hover:border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                    <benefit.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Results Preview */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Stop Guessing. Start Converting.
            </h3>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of entrepreneurs who've transformed their businesses with our proven system.
            </p>
            <div className="flex justify-center items-center space-x-8">
              <div>
                <div className="text-3xl font-bold">87%</div>
                <div className="text-blue-200 text-sm">More Conversions</div>
              </div>
              <div>
                <div className="text-3xl font-bold">3x</div>
                <div className="text-blue-200 text-sm">Faster Growth</div>
              </div>
              <div>
                <div className="text-3xl font-bold">92%</div>
                <div className="text-blue-200 text-sm">Completion Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
