
const About = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
            You Don't Need to Be a Designer to Build a 
            <span className="text-blue-600"> Powerful Brand</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Most entrepreneurs struggle with branding because they think it's all about pretty logos and fancy colors. 
                <span className="font-semibold text-slate-800"> It's not.</span>
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Real branding is about <span className="font-semibold text-slate-800">connection, clarity, and conversion</span>. 
                It's about making your customers feel something and compelling them to act.
              </p>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-600">
                <p className="text-slate-700 font-medium">
                  "In just 7 days, you'll have everything you need to create a brand that doesn't just look good – it sells."
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">🎯</div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl">💡</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
