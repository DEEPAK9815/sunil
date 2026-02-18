import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import { Phone, Clock, Download, MapPin, Truck, ShieldCheck, Star } from 'lucide-react';

function App() {
  const cardRef = useRef(null);

  const handleDownload = async () => {
    if (cardRef.current) {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#151B2E', // Match card bg
        scale: 2, // High resolution
      });
      const link = document.createElement('a');
      link.download = 'Sunil-Kumar-Card.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  return (
    <div className="min-h-screen pb-12">
      {/* Navbar */}
      <nav className="p-4 bg-opacity-90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
        <div className="container flex justify-between items-center">
          <h1 className="text-xl font-bold text-gold">Pickup Pro</h1>
          <a href="tel:6361071237" className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition">
            Call Now
          </a>
        </div>
      </nav>

      {/* Hero / Business Card Section */}
      <header className="container pt-12 pb-8 flex flex-col items-center">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Reliable <span className="text-accent">Pickup</span> Services
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Professional transport solutions for all your heavy lifting needs.
          </p>
        </div>

        {/* Digital Business Card */}
        <div
          ref={cardRef}
          className="relative group max-w-md w-full"
        >
          {/* Glassmorphism Background */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-0"></div>

          <div className="relative z-10 p-8 flex flex-col items-center text-center">
            {/* Top Gradient Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-accent rounded-t-2xl"></div>

            {/* Passport Size Photo */}
            <div className="w-32 h-40 bg-white p-1 mb-6 shadow-xl rotate-1 transform hover:rotate-0 transition duration-300">
              <img
                src="/profile.jpg"
                alt="Sunil Kumar"
                className="w-full h-full object-cover border border-gray-200"
              />
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">Sunil Kumar</h3>
            <p className="text-accent font-medium mb-6">Professional Pickup Driver</p>

            <div className="w-full space-y-4 mb-8">
              <a href="tel:6361071237" className="flex items-center justify-center gap-3 bg-gray-800/50 p-3 rounded-xl hover:bg-gray-800 transition">
                <Phone className="text-gold" size={20} />
                <span className="text-lg font-semibold">6361071237</span>
              </a>
              <div className="flex items-center justify-center gap-3 text-gray-400">
                <Clock size={18} />
                <span>9:00 AM - 8:00 PM</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 w-full text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
              <div className="flex flex-col items-center">
                <Truck className="mb-1 text-accent" size={20} />
                <span>Fast</span>
              </div>
              <div className="flex flex-col items-center">
                <ShieldCheck className="mb-1 text-accent" size={20} />
                <span>Safe</span>
              </div>
              <div className="flex flex-col items-center">
                <Star className="mb-1 text-accent" size={20} />
                <span>Rated</span>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleDownload}
          className="mt-8 flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition shadow-lg transform hover:scale-105"
        >
          <Download size={20} />
          Download Card
        </button>
      </header>

      {/* Services Section */}
      <section className="container py-12">
        <h3 className="text-2xl font-bold mb-8 text-center">Our Services</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Home Relocation", desc: "Safe and secure moving for your household items." },
            { title: "Office Shifting", desc: "Professional handling of office equipment and furniture." },
            { title: "Goods Delivery", desc: "Timely delivery of commercial goods and packages." },
            { title: "Heavy Transport", desc: "Specialized vehicles for heavy machinery or loads." }
          ].map((service, index) => (
            <div key={index} className="bg-card p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition">
              <h4 className="text-xl font-semibold mb-2 text-white">{service.title}</h4>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-gray-600 py-8 text-sm">
        &copy; {new Date().getFullYear()} Sunil Kumar. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
