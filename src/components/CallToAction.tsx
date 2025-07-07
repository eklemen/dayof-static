import React from 'react';
import { Download, Smartphone, ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="download" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-8">
            <Smartphone className="h-8 w-8 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your
            <br />Event Experience?
          </h2>

          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Join the revolution in vendor communication. Download DayOf and never miss another networking opportunity.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {/* App Store Button */}
            <a
              href="https://apps.apple.com"
              className="inline-flex items-center bg-white text-gray-900 px-6 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 group shadow-xl"
            >
              <div className="bg-black text-white p-2 rounded-lg mr-4">
                <Download className="h-6 w-6" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
              <ArrowRight className="ml-4 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            {/* Google Play Button */}
            <a
              href="https://play.google.com"
              className="inline-flex items-center bg-white text-gray-900 px-6 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 group shadow-xl"
            >
              <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-2 rounded-lg mr-4">
                <Download className="h-6 w-6" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
              <ArrowRight className="ml-4 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

          {/* QR Code Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">Scan to Download</h3>
            <div className="bg-white p-4 rounded-xl inline-block mb-4">
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <Smartphone className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-xs">QR Code</div>
                </div>
              </div>
            </div>
            <p className="text-blue-100 text-sm">
              Scan with your phone's camera to download DayOf instantly
            </p>
          </div>

          {/* Coming Soon Notice */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="text-blue-100 text-center">
              <p className="text-lg font-medium">Coming Soon to iOS and Android</p>
              <p className="text-sm mt-2">Be the first to know when DayOf launches</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;