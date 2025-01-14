import React, { useRef } from 'react';
import { Building2, Phone, Mail, ArrowRight, TrendingUp, Shield, Map } from 'lucide-react';
// import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Background3D from './components/Background3D';

function App() {
  const contactRef = useRef<HTMLElement | null>(null); // Explicitly specify the type


  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Banner */}
      <header className="relative bg-blue-900 text-white">
        <Background3D />
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
            <img
              src="/photo.jpg"
              alt="/feed1.jpg"
              className="w-48 h-48 rounded-full border-4 border-white shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center md:text-left">
                KANNAN PERUMAL
              </h1>
              <p className="mt-2 text-xl text-blue-100 text-center md:text-left">
                Business Manager at VIP Housing and Properties
              </p>
              <p className="mt-6 max-w-2xl text-xl text-blue-100">
                Secure your future with investments that offer stability and long-term growth. Let’s explore why land investment is the best choice for you!
              </p>
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={scrollToContact}
                  className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center transition-all"
                >
                  Contact for Expert Advice
                  <Phone className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Are You Losing Money Without Even Knowing It?
          </h2>
          <div className="prose prose-lg max-w-none mx-auto">
            <p>
              In today’s world, we have a wide range of investment options, such as SIPs (Systematic Investment Plans), recurring deposits (RDs), fixed deposits (FDs), gold investments, and even the stock market. But have you ever wondered if you are losing money by not making the right investment choice?
            </p>
            <h3>The Risks and Returns of Other Investments</h3>
            <ul>
              <li><strong>SIP and Stock Market:</strong> While SIPs and stocks offer good returns, they come with significant risks.</li>
              <li><strong>Recurring Deposits and Fixed Deposits:</strong> These are safe but offer low returns that don’t keep up with inflation.</li>
              <li><strong>Gold Investments:</strong> Gold has value but includes charges for maintenance and storage.</li>
            </ul>
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                  Why Land Investment is Your Safest Choice
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
                      title: "Consistent Appreciation",
                      description: "Land values have shown steady growth over decades, outperforming volatile market alternatives."
                    },
                    {
                      icon: <Shield className="h-8 w-8 text-blue-600" />,
                      title: "Tangible Security",
                      description: "Unlike digital assets, land is a physical investment you can see, touch, and develop."
                    },
                    {
                      icon: <Map className="h-8 w-8 text-gold-600" />,
                      title: "Limited Supply",
                      description: "While shares can be diluted, land is finite - making it an increasingly valuable asset."
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                      <div className="mb-4">{benefit.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <h3>The Unique Advantage of Land Investment</h3>
            <p>
              Land investment offers unmatched security, growth potential, and versatility:
            </p>
            <ul>
              <li>No maintenance charges</li>
              <li>Historically high returns</li>
              <li>Potential for rental income</li>
            </ul>
            <h3>My Journey and How I Can Help</h3>
            <p>
              As a Business Manager at VIP Consultation, I’ve learned to identify the best investment opportunities. I can help you find DTCP-approved lands with proper documentation for safe investments.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <Testimonials /> */}

      {/* Contact Section */}
      <section ref={contactRef} className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Let’s Secure Your Future Together</h2>
              <p className="text-blue-100 mb-8">
                Don’t miss out on prime investment opportunities. Contact me today for personalized advice.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-3" />
                  <span>+91 9384947996</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 mr-3" />
                  <span>pkannan2002@gmail.com</span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
