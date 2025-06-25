
import { ArrowRight, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Banner */}
          <div className="inline-flex items-center px-6 py-3 bg-red-600/20 border border-red-500/30 rounded-full text-red-300 font-medium mb-8 animate-pulse">
            <Clock className="w-4 h-4 mr-2" />
            Workshop starts in 3 days - Only 12 spots available
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Stop Blending In.
            <span className="block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Start Standing Out.
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            In 7 days, you'll have everything you need to build a brand that doesn't just look good – it sells. 
            <span className="text-white font-semibold"> No design experience required.</span>
          </p>
          
          {/* Pricing */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <span className="text-slate-400 text-lg line-through mr-4">$997</span>
              <span className="text-4xl font-bold">$497</span>
              <span className="text-slate-300 ml-2">Early Bird Special</span>
            </div>
            <p className="text-slate-300 mb-6">
              Complete 7-day workshop + bonuses worth $1,200
            </p>
            
            {/* What's Included Quick List */}
            <div className="grid sm:grid-cols-2 gap-4 text-left text-sm text-slate-300 mb-8">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>7 Live Workshop Sessions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Brand Strategy Workbook</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>1-on-1 Brand Review</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>30-Day Support Access</span>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-10 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              Secure Your Spot Now - $497
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          {/* Guarantee */}
          <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-300 mb-2">
              30-Day Money-Back Guarantee
            </h3>
            <p className="text-green-200">
              If you don't see a clear path to a stronger brand within 30 days, we'll refund every penny. No questions asked.
            </p>
          </div>
          
          {/* Final Urgency */}
          <p className="text-slate-400">
            Don't let another month go by wondering "what if?" 
            <span className="text-white font-semibold"> Your brand transformation starts now.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
