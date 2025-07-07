import React from 'react';
import { MessageCircle, Copy, Users, Zap, Shield, Globe, ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Real-Time Event Chat Rooms',
      description: 'Connect instantly with vendors and organizers in event-specific chat rooms. Share updates, coordinate logistics, and solve problems in real-time.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Copy,
      title: 'One-Click Social Handle Copying',
      description: 'Instantly copy and share social media handles with a single tap. Perfect for quick networking and cross-promotion during busy events.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Vendor Networking Hub',
      description: 'Discover and connect with fellow vendors. Build lasting business relationships and explore collaboration opportunities.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Communication',
      description: 'Send messages, photos, and updates instantly. No more missed connections or delayed responses during critical event moments.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Enterprise-grade security ensures your conversations and business information remain protected and confidential.',
      gradient: 'from-red-500 to-rose-500'
    },
    {
      icon: Globe,
      title: 'Multi-Event Management',
      description: 'Manage communications across multiple events seamlessly. Switch between event chat rooms with ease.',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Event Success
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DayOf brings together all the communication tools vendors need to thrive at events, 
            from real-time messaging to instant networking capabilities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Event Experience?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the revolution in vendor communication. Download DayOf and never miss another networking opportunity.
          </p>
          <a
            href="#download"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;