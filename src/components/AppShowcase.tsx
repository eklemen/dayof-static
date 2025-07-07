import React from 'react';
import { MessageCircle, Copy, Users, Bell } from 'lucide-react';

const AppShowcase: React.FC = () => {
  return (
    <section id="showcase" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            See DayOf in
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the intuitive interface that makes vendor communication effortless and efficient.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* App Mockup */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-[600px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                {/* Status Bar */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-12 flex items-center justify-between px-6 text-white text-sm">
                  <span>9:41</span>
                  <span className="font-semibold">DayOf</span>
                  <span>100%</span>
                </div>

                {/* Chat Interface */}
                <div className="p-4 space-y-4">
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-800">Tech Conference 2024</h3>
                    <p className="text-sm text-gray-500">32 vendors online</p>
                  </div>

                  {/* Messages */}
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                      <div>
                        <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                          <p className="text-sm">Setup complete at booth A12! 🎉</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Sarah - TechStart Inc.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2 justify-end">
                      <div>
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-3 max-w-xs">
                          <p className="text-sm">Great! Need help with anything?</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 text-right">You</p>
                      </div>
                      <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                      <div>
                        <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                          <p className="text-sm">My Instagram: @techstart_official</p>
                          <button className="bg-blue-500 text-white px-3 py-1 rounded mt-2 text-xs flex items-center">
                            <Copy className="h-3 w-3 mr-1" />
                            Copy Handle
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Input Area */}
                  <div className="flex items-center space-x-2 pt-4 border-t">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm"
                      disabled
                    />
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-full">
                      <MessageCircle className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-bounce">
              <Bell className="h-6 w-6 text-blue-600" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg animate-pulse">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl flex-shrink-0">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Messaging</h3>
                <p className="text-gray-600">
                  Instant communication with all event participants. Share updates, ask questions, 
                  and coordinate seamlessly throughout the event.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl flex-shrink-0">
                <Copy className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Handle Sharing</h3>
                <p className="text-gray-600">
                  One-click copying of social media handles makes networking effortless. 
                  Build your following and discover new connections instantly.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl flex-shrink-0">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Vendor Directory</h3>
                <p className="text-gray-600">
                  Explore all vendors at the event. View profiles, connect directly, 
                  and discover collaboration opportunities.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Pro Tip</h4>
              <p className="text-gray-700">
                Enable push notifications to never miss important event updates or networking opportunities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;