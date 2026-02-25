import React from 'react';
import { MapPin, Users, Shield, Send } from 'lucide-react';

const PastLocationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center">
              <MapPin size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">Past Location</h1>
              <p className="text-gray-600">Share your location securely with trusted contacts</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Share Location</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Share with</label>
                  <input
                    type="text"
                    placeholder="Enter contact name or number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Duration</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none">
                    <option>15 minutes</option>
                    <option>1 hour</option>
                    <option>4 hours</option>
                    <option>24 hours</option>
                    <option>Until manually stopped</option>
                  </select>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  <Send size={20} />
                  Share Location Now
                </button>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Emergency Contacts</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Users size={20} className="text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-medium">Emergency Contact 1</p>
                        <p className="text-sm text-gray-500">+91 9876543210</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                      Emergency
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="text-blue-600" />
                  <h4 className="font-semibold text-gray-800">Security Features</h4>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• End-to-end encryption</li>
                  <li>• Time-limited sharing</li>
                  <li>• Revoke access anytime</li>
                  <li>• Emergency contact priority</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastLocationPage;