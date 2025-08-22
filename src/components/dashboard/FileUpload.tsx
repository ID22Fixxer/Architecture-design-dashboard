"use client";

import React from "react";

export const FileUpload = () => {
  return (
    <div className="bg-white shadow-sm rounded-lg border border-gray-200 mb-6">
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Upload Floor Plans</h3>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors duration-150 cursor-pointer">
          <div className="space-y-2">
            <span className="text-4xl text-gray-400">📁</span>
            <div className="text-sm text-gray-600">
              <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                <span>Upload files</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-600">
              Supported file types: PDF, DWG, JPG, PNG (up to 50MB)
            </p>
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Uploaded Files</h4>
          <ul className="divide-y divide-gray-200 border border-gray-200 rounded-md">
            <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">📄</span>
                <span className="ml-2 flex-1 truncate">first_floor_plan.pdf</span>
              </div>
              <div className="ml-4 flex-shrink-0 flex items-center space-x-2">
                <button className="font-medium text-blue-600 hover:text-blue-500 transition duration-150">
                  View
                </button>
                <button className="font-medium text-red-600 hover:text-red-500 transition duration-150">
                  Remove
                </button>
              </div>
            </li>
            <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">🖼️</span>
                <span className="ml-2 flex-1 truncate">exterior_rendering.jpg</span>
              </div>
              <div className="ml-4 flex-shrink-0 flex items-center space-x-2">
                <button className="font-medium text-blue-600 hover:text-blue-500 transition duration-150">
                  View
                </button>
                <button className="font-medium text-red-600 hover:text-red-500 transition duration-150">
                  Remove
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
