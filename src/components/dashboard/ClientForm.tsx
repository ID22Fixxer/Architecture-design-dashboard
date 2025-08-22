"use client";

import React, { useState } from "react";

export const ClientForm = () => {
  const [qid, setQid] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [constructionType, setConstructionType] = useState("");
  const [constructionTypeOther, setConstructionTypeOther] = useState("");
  const [existingStructure, setExistingStructure] = useState("");
  const [existingStructureOther, setExistingStructureOther] = useState("");
  const [demolitionRequired, setDemolitionRequired] = useState<string[]>([]);
  const [demolitionStartDate, setDemolitionStartDate] = useState("");
  const [plotSize, setPlotSize] = useState("");
  const [plotFacing, setPlotFacing] = useState("");
  const [siteType, setSiteType] = useState("");
  const [siteTypeOther, setSiteTypeOther] = useState("");
  const [khataType, setKhataType] = useState("");
  const [khataTypeOther, setKhataTypeOther] = useState("");
  const [plotAddress, setPlotAddress] = useState("");
  const [loanRequired, setLoanRequired] = useState<string[]>([]);
  const [googleSiteLocation, setGoogleSiteLocation] = useState("");
  const [emptyPlotNearby, setEmptyPlotNearby] = useState<string[]>([]);
  const [roadWidth, setRoadWidth] = useState("");
  const [packageName, setPackageName] = useState("");
  const [packageRate, setPackageRate] = useState("");
  const [nonDiscountedValue, setNonDiscountedValue] = useState("");
  const [discountOffered, setDiscountOffered] = useState("");
  const [projectValue, setProjectValue] = useState("");
  const [baCollected, setBaCollected] = useState("");
  const [freebiesProvided, setFreebiesProvided] = useState("");
  const [modeOfPayment, setModeOfPayment] = useState("");
  const [priorArchitectConnection, setPriorArchitectConnection] = useState("");
  const [constructionStartDate, setConstructionStartDate] = useState("");
  const [customerCommitments, setCustomerCommitments] = useState("");
  const [quotationFile, setQuotationFile] = useState<File | null>(null);

  const handleDemolitionChange = (value: string) => {
    setDemolitionRequired(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const handleLoanChange = (value: string) => {
    setLoanRequired(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const handleEmptyPlotChange = (value: string) => {
    setEmptyPlotNearby(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="bg-white shadow-sm rounded-lg border border-gray-200 mb-6 overflow-hidden">
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">New Client Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="qid" className="block text-sm font-medium text-gray-700 mb-1">
              QID <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="qid" 
              value={qid}
              onChange={(e) => setQid(e.target.value)}
              className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 text-black placeholder-gray-500" 
              placeholder="Your answer" 
              required
            />
          </div>
          <div>
            <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-1">
              Customer Name <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="customerName" 
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 text-black placeholder-gray-500" 
              placeholder="Your answer" 
              required
            />
          </div>
          <div>
            <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700 mb-1">
              Customer Phone <span className="text-red-500">*</span>
            </label>
            <input 
              type="tel" 
              id="customerPhone" 
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 text-black placeholder-gray-500" 
              placeholder="Your answer" 
              required
            />
          </div>
          <div>
            <label htmlFor="customerEmail" className="block text-sm font-medium text-gray-700 mb-1">
              Customer Email ID <span className="text-red-500">*</span>
            </label>
            <input 
              type="email" 
              id="customerEmail" 
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 text-black placeholder-gray-500" 
              placeholder="Your answer" 
              required
            />
          </div>

          {/* Type of Construction */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Type of Construction <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="construction-new"
                  name="constructionType"
                  value="new"
                  checked={constructionType === "new"}
                  onChange={(e) => setConstructionType(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  required
                />
                <label htmlFor="construction-new" className="ml-3 text-sm text-gray-700">New</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="construction-extension"
                  name="constructionType"
                  value="extension"
                  checked={constructionType === "extension"}
                  onChange={(e) => setConstructionType(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="construction-extension" className="ml-3 text-sm text-gray-700">Extension</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="construction-demolition"
                  name="constructionType"
                  value="demolition"
                  checked={constructionType === "demolition"}
                  onChange={(e) => setConstructionType(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="construction-demolition" className="ml-3 text-sm text-gray-700">Demolition</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="construction-other"
                  name="constructionType"
                  value="other"
                  checked={constructionType === "other"}
                  onChange={(e) => setConstructionType(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="construction-other" className="ml-3 text-sm text-gray-700">Other:</label>
                <input
                  type="text"
                  value={constructionTypeOther}
                  onChange={(e) => setConstructionTypeOther(e.target.value)}
                  className="ml-2 flex-1 rounded-md border border-gray-300 shadow-sm px-3 py-1 text-sm focus:ring-blue-500 focus:border-blue-500 text-black placeholder-gray-500"
                  placeholder="Your answer"
                  disabled={constructionType !== "other"}
                />
              </div>
            </div>
          </div>

          {/* Existing Structure */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Existing Structure <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="existing-yes"
                  name="existingStructure"
                  value="yes"
                  checked={existingStructure === "yes"}
                  onChange={(e) => setExistingStructure(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  required
                />
                <label htmlFor="existing-yes" className="ml-3 text-sm text-gray-700">Yes</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="existing-no"
                  name="existingStructure"
                  value="no"
                  checked={existingStructure === "no"}
                  onChange={(e) => setExistingStructure(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="existing-no" className="ml-3 text-sm text-gray-700">No</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="existing-other"
                  name="existingStructure"
                  value="other"
                  checked={existingStructure === "other"}
                  onChange={(e) => setExistingStructure(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="existing-other" className="ml-3 text-sm text-gray-700">Other:</label>
                <input
                  type="text"
                  value={existingStructureOther}
                  onChange={(e) => setExistingStructureOther(e.target.value)}
                  className="ml-2 flex-1 rounded-md border border-gray-300 shadow-sm px-3 py-1 text-sm focus:ring-blue-500 focus:border-blue-500 text-black placeholder-gray-500"
                  placeholder="Your answer"
                  disabled={existingStructure !== "other"}
                />
              </div>
            </div>
          </div>

          {/* Demolition Required */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Demolition required?
            </label>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="demolition-vendor"
                  value="vendor-required"
                  checked={demolitionRequired.includes("vendor-required")}
                  onChange={() => handleDemolitionChange("vendor-required")}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="demolition-vendor" className="ml-3 text-sm text-gray-700">Yes - demolition vendor required</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="demolition-own"
                  value="will-do-own"
                  checked={demolitionRequired.includes("will-do-own")}
                  onChange={() => handleDemolitionChange("will-do-own")}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="demolition-own" className="ml-3 text-sm text-gray-700">No - will get it done on his own</label>
              </div>
            </div>
          </div>

          {/* Expected Start Date of Demolition */}
          <div>
            <label htmlFor="demolitionStartDate" className="block text-sm font-medium text-gray-700 mb-1">
              Expected Start Date of Demolition
            </label>
            <div>
              {/* <label htmlFor="demolitionStartDate" className="block text-xs text-gray-500 mb-1">Date</label> */}
              <div className="relative">
                <input
                  type="date"
                  id="demolitionStartDate"
                  value={demolitionStartDate}
                  onChange={(e) => setDemolitionStartDate(e.target.value)}
                  className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Plot Size */}
          <div>
            <label htmlFor="plotSize" className="block text-sm font-medium text-gray-700 mb-1">
              Plot Size (in sqft) <span className="text-red-500">*</span>
            </label>
            <input 
              type="number" 
              id="plotSize" 
              value={plotSize}
              onChange={(e) => setPlotSize(e.target.value)}
              className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 text-black placeholder-gray-500" 
              placeholder="Your answer" 
              required
            />
          </div>

          {/* Plot Facing */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Plot Facing <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="facing-east"
                  name="plotFacing"
                  value="east"
                  checked={plotFacing === "east"}
                  onChange={(e) => setPlotFacing(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  required
                />
                <label htmlFor="facing-east" className="ml-3 text-sm text-gray-700">East</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="facing-west"
                  name="plotFacing"
                  value="west"
                  checked={plotFacing === "west"}
                  onChange={(e) => setPlotFacing(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="facing-west" className="ml-3 text-sm text-gray-700">West</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="facing-north"
                  name="plotFacing"
                  value="north"
                  checked={plotFacing === "north"}
                  onChange={(e) => setPlotFacing(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="facing-north" className="ml-3 text-sm text-gray-700">North</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="facing-south"
                  name="plotFacing"
                  value="south"
                  checked={plotFacing === "south"}
                  onChange={(e) => setPlotFacing(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="facing-south" className="ml-3 text-sm text-gray-700">South</label>
              </div>
            </div>
          </div>

          {/* Type of Site */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Type of Site? <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="site-bbmp"
                  name="siteType"
                  value="bbmp"
                  checked={siteType === "bbmp"}
                  onChange={(e) => setSiteType(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  required
                />
                <label htmlFor="site-bbmp" className="ml-3 text-sm text-gray-700">BBMP</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="site-bmrda"
                  name="siteType"
                  value="bmrda"
                  checked={siteType === "bmrda"}
                  onChange={(e) => setSiteType(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="site-bmrda" className="ml-3 text-sm text-gray-700">BMRDA</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="site-biappa"
                  name="siteType"
                  value="biappa"
                  checked={siteType === "biappa"}
                  onChange={(e) => setSiteType(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="site-biappa" className="ml-3 text-sm text-gray-700">BIAPPA</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="site-bda"
                  name="siteType"
                  value="bda"
                  checked={siteType === "bda"}
                  onChange={(e) => setSiteType(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="site-bda" className="ml-3 text-sm text-gray-700">BDA</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="site-panchayat"
                  name="siteType"
                  value="panchayat"
                  checked={siteType === "panchayat"}
                  onChange={(e) => setSiteType(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="site-panchayat" className="ml-3 text-sm text-gray-700">Panchayat</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="site-other"
                  name="siteType"
                  value="other"
                  checked={siteType === "other"}
                  onChange={(e) => setSiteType(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="site-other" className="ml-3 text-sm text-gray-700">Other:</label>
                <input
                  type="text"
                  value={siteTypeOther}
                  onChange={(e) => setSiteTypeOther(e.target.value)}
                  className="ml-2 flex-1 rounded-md border border-gray-300 shadow-sm px-3 py-1 text-sm focus:ring-blue-500 focus:border-blue-500 text-black placeholder-gray-500"
                  placeholder="Your answer"
                  disabled={siteType !== "other"}
                />
              </div>
            </div>
          </div>

          {/* Type of Khata */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Type of Khata? <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="khata-a"
                  name="khataType"
                  value="a"
                  checked={khataType === "a"}
                  onChange={(e) => setKhataType(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  required
                />
                <label htmlFor="khata-a" className="ml-3 text-sm text-gray-700">A</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="khata-b"
                  name="khataType"
                  value="b"
                  checked={khataType === "b"}
                  onChange={(e) => setKhataType(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="khata-b" className="ml-3 text-sm text-gray-700">B</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="khata-e"
                  name="khataType"
                  value="e"
                  checked={khataType === "e"}
                  onChange={(e) => setKhataType(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="khata-e" className="ml-3 text-sm text-gray-700">E</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="khata-panchayat"
                  name="khataType"
                  value="panchayat"
                  checked={khataType === "panchayat"}
                  onChange={(e) => setKhataType(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="khata-panchayat" className="ml-3 text-sm text-gray-700">Panchayat</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="khata-other"
                  name="khataType"
                  value="other"
                  checked={khataType === "other"}
                  onChange={(e) => setKhataType(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="khata-other" className="ml-3 text-sm text-gray-700">Other:</label>
                <input
                  type="text"
                  value={khataTypeOther}
                  onChange={(e) => setKhataTypeOther(e.target.value)}
                  className="ml-2 flex-1 rounded-md border border-gray-300 shadow-sm px-3 py-1 text-sm focus:ring-blue-500 focus:border-blue-500 text-black placeholder-gray-500"
                  placeholder="Your answer"
                  disabled={khataType !== "other"}
                />
              </div>
            </div>
          </div>

          {/* Plot Address with Pincode */}
          <div className="md:col-span-2">
            <label htmlFor="plotAddress" className="block text-sm font-medium text-gray-700 mb-1">
              Plot Address with Pincode <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="plotAddress" 
              value={plotAddress}
              onChange={(e) => setPlotAddress(e.target.value)}
              className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 text-black placeholder-gray-500" 
              placeholder="Your answer" 
              required
            />
          </div>

          {/* Loan required? */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Loan required? <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="loan-yes"
                  value="yes"
                  checked={loanRequired.includes("yes")}
                  onChange={() => handleLoanChange("yes")}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="loan-yes" className="ml-3 text-sm text-gray-700">Yes</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="loan-no"
                  value="no"
                  checked={loanRequired.includes("no")}
                  onChange={() => handleLoanChange("no")}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="loan-no" className="ml-3 text-sm text-gray-700">No</label>
              </div>
            </div>
          </div>

          {/* Google Site Location */}
          <div className="md:col-span-2">
            <label htmlFor="googleSiteLocation" className="block text-sm font-medium text-gray-700 mb-1">
              Google Site Location <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="googleSiteLocation" 
              value={googleSiteLocation}
              onChange={(e) => setGoogleSiteLocation(e.target.value)}
              className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 text-black placeholder-gray-500" 
              placeholder="Your answer" 
              required
            />
          </div>

          {/* Is there any empty plot within a radius of 500m? */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Is there any empty plot within a radius of 500m? <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="empty-plot-yes"
                  value="yes"
                  checked={emptyPlotNearby.includes("yes")}
                  onChange={() => handleEmptyPlotChange("yes")}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="empty-plot-yes" className="ml-3 text-sm text-gray-700">Yes</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="empty-plot-no"
                  value="no"
                  checked={emptyPlotNearby.includes("no")}
                  onChange={() => handleEmptyPlotChange("no")}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="empty-plot-no" className="ml-3 text-sm text-gray-700">No</label>
              </div>
            </div>
          </div>

          {/* Is the road width less than 20 ft? */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Is the road width less than 20 ft? <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="road-width-yes"
                  name="roadWidth"
                  value="yes-bump-cost"
                  checked={roadWidth === "yes-bump-cost"}
                  onChange={(e) => setRoadWidth(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  required
                />
                <label htmlFor="road-width-yes" className="ml-3 text-sm text-gray-700">Yes - bump cost will be added</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="road-width-no"
                  name="roadWidth"
                  value="no"
                  checked={roadWidth === "no"}
                  onChange={(e) => setRoadWidth(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="road-width-no" className="ml-3 text-sm text-gray-700">No</label>
              </div>
            </div>
          </div>

          {/* Package Name */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Package Name <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="package-essential"
                  name="packageName"
                  value="id-essential"
                  checked={packageName === "id-essential"}
                  onChange={(e) => setPackageName(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  required
                />
                <label htmlFor="package-essential" className="ml-3 text-sm text-gray-700">ID Essential</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="package-premier"
                  name="packageName"
                  value="id-premier"
                  checked={packageName === "id-premier"}
                  onChange={(e) => setPackageName(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="package-premier" className="ml-3 text-sm text-gray-700">ID Premier</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="package-infinia"
                  name="packageName"
                  value="id-infinia"
                  checked={packageName === "id-infinia"}
                  onChange={(e) => setPackageName(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="package-infinia" className="ml-3 text-sm text-gray-700">ID Infinia</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="package-pinnacle"
                  name="packageName"
                  value="id-pinnacle"
                  checked={packageName === "id-pinnacle"}
                  onChange={(e) => setPackageName(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="package-pinnacle" className="ml-3 text-sm text-gray-700">ID Pinnacle</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="package-boq"
                  name="packageName"
                  value="boq"
                  checked={packageName === "boq"}
                  onChange={(e) => setPackageName(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="package-boq" className="ml-3 text-sm text-gray-700">BOQ</label>
              </div>
            </div>
          </div>

          {/* Package/BOQ Rate */}
          <div>
            <label htmlFor="packageRate" className="block text-sm font-medium text-gray-700 mb-1">
              Package/BOQ Rate (in cost/sqft) <span className="text-red-500">*</span>
            </label>
            <input 
              type="number" 
              id="packageRate" 
              value={packageRate}
              onChange={(e) => setPackageRate(e.target.value)}
              className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 text-black placeholder-gray-500" 
              placeholder="Your answer" 
              required
            />
          </div>

          {/* Non Discounted Value */}
          <div>
            <label htmlFor="nonDiscountedValue" className="block text-sm font-medium text-gray-700 mb-1">
              Non Discounted Value (as per the sales quote) <span className="text-red-500">*</span>
            </label>
            <input 
              type="number" 
              id="nonDiscountedValue" 
              value={nonDiscountedValue}
              onChange={(e) => setNonDiscountedValue(e.target.value)}
              className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 text-black placeholder-gray-500" 
              placeholder="Your answer" 
              required
            />
          </div>

          {/* Discount Offered */}
          <div>
            <label htmlFor="discountOffered" className="block text-sm font-medium text-gray-700 mb-1">
              Discount Offered? (as per the sales quote) <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="discountOffered" 
              value={discountOffered}
              onChange={(e) => setDiscountOffered(e.target.value)}
              className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 text-black placeholder-gray-500" 
              placeholder="Your answer" 
              required
            />
          </div>

          {/* Project Value */}
          <div>
            <label htmlFor="projectValue" className="block text-sm font-medium text-gray-700 mb-1">
              Project Value (as per the sales quote) <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="projectValue" 
              value={projectValue}
              onChange={(e) => setProjectValue(e.target.value)}
              className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 text-black placeholder-gray-500" 
              placeholder="Your answer" 
              required
            />
          </div>

          {/* BA Collected */}
          <div>
            <label htmlFor="baCollected" className="block text-sm font-medium text-gray-700 mb-1">
              BA Collected (Mention the amount and % collected) <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="baCollected" 
              value={baCollected}
              onChange={(e) => setBaCollected(e.target.value)}
              className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 text-black placeholder-gray-500" 
              placeholder="Your answer" 
              required
            />
          </div>

          {/* Freebies Provided */}
          <div>
            <label htmlFor="freebiesProvided" className="block text-sm font-medium text-gray-700 mb-1">
              Freebies Provided? <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="freebiesProvided" 
              value={freebiesProvided}
              onChange={(e) => setFreebiesProvided(e.target.value)}
              className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 text-black placeholder-gray-500" 
              placeholder="Your answer" 
              required
            />
          </div>

          {/* Mode of Payment */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Mode of Payment <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="payment-cheque"
                  name="modeOfPayment"
                  value="cheque"
                  checked={modeOfPayment === "cheque"}
                  onChange={(e) => setModeOfPayment(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  required
                />
                <label htmlFor="payment-cheque" className="ml-3 text-sm text-gray-700">Cheque</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="payment-cash"
                  name="modeOfPayment"
                  value="cash"
                  checked={modeOfPayment === "cash"}
                  onChange={(e) => setModeOfPayment(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="payment-cash" className="ml-3 text-sm text-gray-700">Cash</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="payment-upi"
                  name="modeOfPayment"
                  value="upi"
                  checked={modeOfPayment === "upi"}
                  onChange={(e) => setModeOfPayment(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="payment-upi" className="ml-3 text-sm text-gray-700">UPI</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="payment-neft"
                  name="modeOfPayment"
                  value="neft"
                  checked={modeOfPayment === "neft"}
                  onChange={(e) => setModeOfPayment(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="payment-neft" className="ml-3 text-sm text-gray-700">NEFT</label>
              </div>
            </div>
          </div>

          {/* Prior Architect Connection */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Has the customer connected with any architect prior to booking? <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="prior-architect-yes"
                  name="priorArchitectConnection"
                  value="yes"
                  checked={priorArchitectConnection === "yes"}
                  onChange={(e) => setPriorArchitectConnection(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  required
                />
                <label htmlFor="prior-architect-yes" className="ml-3 text-sm text-gray-700">Yes</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="prior-architect-no"
                  name="priorArchitectConnection"
                  value="no"
                  checked={priorArchitectConnection === "no"}
                  onChange={(e) => setPriorArchitectConnection(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="prior-architect-no" className="ml-3 text-sm text-gray-700">No</label>
              </div>
            </div>
          </div>

          {/* Expected Start Date of Construction */}
          <div>
            <label htmlFor="constructionStartDate" className="block text-sm font-medium text-gray-700 mb-1">
              Expected Start date of Construction <span className="text-red-500">*</span>
            </label>
            <div>
              {/* <label htmlFor="constructionStartDate" className="block text-xs text-gray-500 mb-1">Date</label> */}
              <div className="relative">
                <input
                  type="date"
                  id="constructionStartDate"
                  value={constructionStartDate}
                  onChange={(e) => setConstructionStartDate(e.target.value)}
                  className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Commitments */}
          <div>
            <label htmlFor="customerCommitments" className="block text-sm font-medium text-gray-700 mb-1">
              Are there any commitments made to the customer? Please describe. <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="customerCommitments" 
              value={customerCommitments}
              onChange={(e) => setCustomerCommitments(e.target.value)}
              className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 text-black placeholder-gray-500" 
              placeholder="Your answer" 
              required
            />
          </div>

          {/* Quotation/BOQ File Upload */}
          <div className="md:col-span-2">
            <label htmlFor="quotationFile" className="block text-sm font-medium text-gray-700 mb-3">
              Attach the PDF of the quotation/BOQ <span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-400 transition-colors duration-200">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="quotationFile"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="quotationFile"
                        name="quotationFile"
                        type="file"
                        accept=".pdf"
                        onChange={(e) => setQuotationFile(e.target.files?.[0] || null)}
                        className="sr-only"
                        required
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PDF files only, up to 10 MB</p>
                  {quotationFile && (
                    <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded-md">
                      <p className="text-sm text-green-700">
                        <span className="font-medium">Selected:</span> {quotationFile.name}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
