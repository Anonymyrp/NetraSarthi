import React, { useState } from 'react';
import { Download, Trash2, Play, Clock, Calendar, Filter, MoreVertical, HardDrive, Shield } from 'lucide-react';

const RecordingsPage = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [sortBy, setSortBy] = useState('recent');
  const [viewMode, setViewMode] = useState('list');

  const recordings = [
    {
      id: 1,
      title: "Morning Walk - Park Route",
      timeAgo: "30 min ago",
      size: "24.5 MB",
      duration: "12:45",
      date: "2024-01-14",
      type: "walk",
      protected: false
    },
    {
      id: 2,
      title: "Street Crossing - Market Road",
      timeAgo: "2 hours ago",
      size: "12.8 MB",
      duration: "06:32",
      date: "2024-01-14",
      type: "crossing",
      protected: false
    },
    {
      id: 3,
      title: "Market Visit",
      timeAgo: "5 hours ago",
      size: "58.2 MB",
      duration: "24:18",
      date: "2024-01-14",
      type: "visit",
      protected: true
    },
    {
      id: 4,
      title: "Evening Return - Home",
      timeAgo: "1 day ago",
      size: "34.1 MB",
      duration: "18:42",
      date: "2024-01-13",
      type: "return",
      protected: false
    },
    {
      id: 5,
      title: "Bus Station Navigation",
      timeAgo: "2 days ago",
      size: "48.7 MB",
      duration: "22:15",
      date: "2024-01-12",
      type: "navigation",
      protected: false
    },
    {
      id: 6,
      title: "School Route - Monday",
      timeAgo: "3 days ago",
      size: "67.3 MB",
      duration: "32:48",
      date: "2024-01-11",
      type: "route",
      protected: true
    },
    {
      id: 7,
      title: "Medical Center Visit",
      timeAgo: "4 days ago",
      size: "29.6 MB",
      duration: "15:22",
      date: "2024-01-10",
      type: "medical",
      protected: true
    },
    {
      id: 8,
      title: "Grocery Store Trip",
      timeAgo: "6 days ago",
      size: "42.8 MB",
      duration: "21:05",
      date: "2024-01-08",
      type: "shopping",
      protected: false
    }
  ];

  const storageStats = {
    used: 178.3,
    total: 2048, // 2GB in MB
    percentage: (178.3 / 2048) * 100
  };

  const handleSelect = (id) => {
    setSelectedItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedItems.length === recordings.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(recordings.map(rec => rec.id));
    }
  };

  const handleDownload = (id) => {
    console.log(`Download recording ${id}`);
    // Implement download logic
  };

  const handleDelete = (id) => {
    console.log(`Delete recording ${id}`);
    // Implement delete logic
  };

  const handlePlay = (id) => {
    console.log(`Play recording ${id}`);
    // Implement play logic
  };

  const getFileIcon = (type) => {
    const icons = {
      walk: '🚶',
      crossing: '🚦',
      visit: '🏪',
      return: '🏠',
      navigation: '🧭',
      route: '🛣️',
      medical: '🏥',
      shopping: '🛒'
    };
    return icons[type] || '📁';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Location Recordings
          </h1>
          <p className="text-gray-600">
            View and manage your location history recordings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - 2/3 width */}
          <div className="lg:col-span-2">
            {/* Action Bar */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="selectAll"
                      checked={selectedItems.length === recordings.length}
                      onChange={handleSelectAll}
                      className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor="selectAll" className="ml-2 text-gray-700">
                      {selectedItems.length > 0 
                        ? `${selectedItems.length} selected` 
                        : 'Select all'}
                    </label>
                  </div>
                  
                  {selectedItems.length > 0 && (
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                        <Download size={18} />
                        <span className="hidden sm:inline">Download</span>
                      </button>
                      <button className="flex items-center gap-2 px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                        <Trash2 size={18} />
                        <span className="hidden sm:inline">Delete</span>
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="recent">Most Recent</option>
                    <option value="oldest">Oldest First</option>
                    <option value="size">Size (Large to Small)</option>
                    <option value="name">Name (A-Z)</option>
                  </select>

                  <div className="flex items-center bg-gray-50 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-100'}`}
                    >
                      <div className="w-5 h-5 flex flex-col justify-between">
                        <div className="h-0.5 w-full bg-gray-600"></div>
                        <div className="h-0.5 w-full bg-gray-600"></div>
                        <div className="h-0.5 w-full bg-gray-600"></div>
                      </div>
                    </button>
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-100'}`}
                    >
                      <div className="w-5 h-5 grid grid-cols-2 gap-0.5">
                        <div className="bg-gray-600 rounded-sm"></div>
                        <div className="bg-gray-600 rounded-sm"></div>
                        <div className="bg-gray-600 rounded-sm"></div>
                        <div className="bg-gray-600 rounded-sm"></div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Recordings List */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {recordings.map((recording) => (
                <div
                  key={recording.id}
                  className={`flex items-center p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    selectedItems.includes(recording.id) ? 'bg-blue-50' : ''
                  }`}
                >
                  {/* Checkbox */}
                  <div className="pr-4">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(recording.id)}
                      onChange={() => handleSelect(recording.id)}
                      className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                  </div>

                  {/* File Icon */}
                  <div className="pr-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">{getFileIcon(recording.type)}</span>
                      {recording.protected && (
                        <div className="absolute -top-1 -right-1">
                          <Shield size={14} className="text-blue-500" fill="currentColor" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Recording Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-semibold text-gray-800 truncate">
                        {recording.title}
                        {recording.protected && (
                          <Shield size={14} className="inline ml-2 text-blue-500" fill="currentColor" />
                        )}
                      </h3>
                      <span className="text-sm font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded">
                        {recording.size}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {recording.timeAgo}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {recording.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Play size={14} />
                        {recording.duration}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 pl-4">
                    <button
                      onClick={() => handlePlay(recording.id)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Play recording"
                    >
                      <Play size={20} />
                    </button>
                    <button
                      onClick={() => handleDownload(recording.id)}
                      className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Download"
                    >
                      <Download size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(recording.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={20} />
                    </button>
                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreVertical size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - 1/3 width */}
          <div className="lg:col-span-1">
            {/* Storage Stats */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <HardDrive size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Storage</h3>
                  <p className="text-sm text-gray-600">Used space</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-700 font-medium">
                    {storageStats.used.toFixed(1)} MB
                  </span>
                  <span className="text-gray-500">
                    {(storageStats.total / 1024).toFixed(1)} GB total
                  </span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-500"
                    style={{ width: `${storageStats.percentage}%` }}
                  />
                </div>
              </div>

              <div className="text-sm text-gray-600">
                <p className="mb-2">
                  <span className="font-medium">{storageStats.percentage.toFixed(1)}%</span> of storage used
                </p>
                <p className="text-xs text-gray-500">
                  {(storageStats.total - storageStats.used).toFixed(1)} MB available
                </p>
              </div>
            </div>

            {/* Auto-delete Warning */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Trash2 size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Auto-delete Notice</h4>
                  <p className="text-sm text-gray-600">
                    Recordings older than 7 days will be automatically deleted to save storage space.
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">Files to be deleted soon:</span>
                  <span className="font-semibold text-amber-600">2 files</span>
                </div>
                <button className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-medium hover:shadow-lg transition-all">
                  Manage Storage Settings
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-6">
              <h4 className="font-semibold text-gray-800 mb-4">Quick Stats</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Recordings</span>
                  <span className="font-semibold text-gray-800">{recordings.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Protected</span>
                  <span className="font-semibold text-blue-600">
                    {recordings.filter(r => r.protected).length} files
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average Duration</span>
                  <span className="font-semibold text-gray-800">~18:45 min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Last 24 hours</span>
                  <span className="font-semibold text-green-600">3 recordings</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            Showing {recordings.length} recordings • Last updated: Today, 10:42 AM
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Export All
            </button>
            <button className="px-4 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all">
              New Recording
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordingsPage;