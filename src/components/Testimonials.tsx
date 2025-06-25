
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "E-commerce Founder",
      company: "Bloom & Co",
      image: "photo-1581091226825-a6a2a5aee158",
      content: "I went from confused about my brand to having customers tell me they chose us because we 'just felt right.' The workshop gave me clarity I never thought possible.",
      result: "300% increase in conversions"
    },
    {
      name: "Marcus Rodriguez",
      role: "Consultant",
      company: "Growth Partners",
      image: "photo-1486312338219-ce68d2c6f44d",
      content: "As someone with zero design background, I was skeptical. But the system is so clear and practical. My clients now see me as a premium option.",
      result: "Doubled pricing overnight"
    },
    {
      name: "Emma Thompson",
      role: "SaaS Founder",
      company: "ProductFlow",
      image: "photo-1649972904349-6e44c42644a7",
      content: "The 7-day framework completely transformed how I present my software. We went from 'just another tool' to 'the obvious choice' for our market.",
      result: "2x demo-to-close rate"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Real Results from Real People
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what entrepreneurs just like you achieved after our workshop.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-slate-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Result */}
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-medium mb-6 inline-block">
                  {testimonial.result}
                </div>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-slate-600 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Social Proof */}
          <div className="mt-16 text-center">
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Join 500+ Entrepreneurs Who've Transformed Their Brands
              </h3>
              <div className="grid sm:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-slate-600">Brands Transformed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">4.9★</div>
                  <div className="text-slate-600">Average Rating</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">92%</div>
                  <div className="text-slate-600">See Results in 30 Days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
