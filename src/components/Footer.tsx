
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">
                Brand Builder Workshop
              </h3>
              <p className="text-slate-400 mb-6 max-w-md">
                Transform your business with a brand that actually sells. No design experience needed.
              </p>
              <div className="flex space-x-4 text-slate-500">
                <span>© 2024 Brand Builder Workshop</span>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Workshop</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">What You'll Learn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Schedule</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm">
            <p>Ready to transform your brand? <span className="text-white font-semibold">The workshop starts in 3 days.</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
