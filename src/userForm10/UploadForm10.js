import React from "react";
import servicesData from "../data/services.json";

const UploadForm10 = () => {

  const serviceDescription =
    servicesData[0].services.find((service) => service.id === 10)
      ?.description || "";
  return (
    <div>
      <div className="min-h-screen w-full bg-gray-50 p-4 flex justify-center">
        <div className="w-full max-w-6xl bg-white rounded-lg shadow p-6">
          {/* Header */}
          <div className="bg-blue-900 text-white text-center p-2 rounded text-sm md:text-base font-semibold mb-6">
            सेवा क्र. १० {serviceDescription}
          </div>

          <div className="w-100 d-flex justify-content-center flex-column align-items-start rounded mb-4" style={{ border: '1px solid' }}>
            <p className="p-4 font-bold">मूळ पात्र सभासद</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3 w-100">
              {/* Aadhar Card Upload */}
              <div className="space-y-2" >
                <label className="flex items-start text-sm font-medium text-gray-700">
                  <span className="text-red-500 mr-1">*</span>
                  मूळ पात्र सभासदाचा अर्ज
                </label>
                <div className="relative">
                  <input
                    type="file"
                    className="hidden"
                    id="mullpatr"
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <label
                    htmlFor="mulpatr"
                    className="flex items-center gap-2 w-full border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors group"
                  >
                    <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-sm text-gray-500">
                      <span className="font-medium">Choose from files</span>
                      <p className="text-xs">PDF, JPG, JPEG or PNG (max. 2MB)</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Signature Upload */}
              <div className="space-y-2 ">
                <label className="flex items-start text-sm font-medium text-gray-700">
                  <span className="text-red-500 mr-1">*</span>
                  मूळ पात्र सभासद पॅन कार्ड
                </label>
                <div className="relative">
                  <input
                    type="file"
                    className="hidden"
                    id="pancard"
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <label
                    htmlFor="pancard"
                    className="flex items-center gap-2 w-full border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors group"
                  >
                    <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-sm text-gray-500">
                      <span className="font-medium">Choose from files</span>
                      <p className="text-xs">PDF, JPG, JPEG or PNG (max. 2MB)</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* PAN Card Upload */}
              <div className="space-y-2">
                <label className="flex items-start text-sm font-medium text-gray-700">
                  <span className="text-red-500 mr-1">*</span>
                  मूळ पात्र सभासद आधार कार्ड
                </label>
                <div className="relative">
                  <input
                    type="file"
                    className="hidden"
                    id="adhar"
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <label
                    htmlFor="adhar"
                    className="flex items-center gap-2 w-full border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors group"
                  >
                    <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-sm text-gray-500">
                      <span className="font-medium">Choose from files</span>
                      <p className="text-xs">PDF, JPG, JPEG or PNG (max. 2MB)</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* etc Upload */}
              <div className="space-y-2">
                <label className="flex items-start text-sm font-medium text-gray-700">
                  <span className="text-red-500 mr-1">*</span>
                  मूळ पात्र सभासद ताबापावती
                </label>
                <div className="relative">
                  <input type="file" className="hidden" id="tabapawi" accept=".pdf,.jpg,.jpeg,.png" />
                  <label htmlFor="tabapawi" className="flex items-center gap-2 w-full border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors group">
                    <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </div>
                    <div className="flex-1 text-sm text-gray-500">
                      <span className="font-medium">Choose from files</span>
                      <p className="text-xs">PDF, JPG, JPEG or PNG (max. 2MB)</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3 w-100">
              {/* Aadhar Card Upload */}
              <div className="space-y-2" >
                <label className="flex items-start text-sm font-medium text-gray-700">
                  <span className="text-red-500 mr-1">*</span>
                  मूळ पात्र सभासद भागधारक प्रमाणपत्र
                </label>
                <div className="relative">
                  <input
                    type="file"
                    className="hidden"
                    id="bhagdar"
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <label
                    htmlFor="bhagdar"
                    className="flex items-center gap-2 w-full border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors group"
                  >
                    <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-sm text-gray-500">
                      <span className="font-medium">Choose from files</span>
                      <p className="text-xs">PDF, JPG, JPEG or PNG (max. 2MB)</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Signature Upload */}
              <div className="space-y-2 ">
                <label className="flex items-start text-sm font-medium text-gray-700">
                  <span className="text-red-500 mr-1">*</span>
                  मूळ पात्र सभासद पात्रता यादी
                </label>
                <div className="relative">
                  <input
                    type="file"
                    className="hidden"
                    id="sabhasdar"
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <label
                    htmlFor="sabhasdar"
                    className="flex items-center gap-2 w-full border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors group"
                  >
                    <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-sm text-gray-500">
                      <span className="font-medium">Choose from files</span>
                      <p className="text-xs">PDF, JPG, JPEG or PNG (max. 2MB)</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* PAN Card Upload */}
              <div className="space-y-2">
                <label className="flex items-start text-sm font-medium text-gray-700">
                  <span className="text-red-500 mr-1">*</span>
                  मूळ पात्र सभासद प्रतिज्ञा पत्र
                </label>
                <div className="relative">
                  <input
                    type="file"
                    className="hidden"
                    id="sabhasdar"
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <label
                    htmlFor="sabhasdar"
                    className="flex items-center gap-2 w-full border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors group"
                  >
                    <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-sm text-gray-500">
                      <span className="font-medium">Choose from files</span>
                      <p className="text-xs">PDF, JPG, JPEG or PNG (max. 2MB)</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* etc Upload */}
              <div className="space-y-2">
                <label className="flex items-start text-sm font-medium text-gray-700">
                  <span className="text-red-500 mr-1">*</span>
                  मूळ पात्र सभासद संस्थेचे नाहरकत प्रमाणपत्र
                </label>
                <div className="relative">
                  <input type="file" className="hidden" id="narkat" accept=".pdf,.jpg,.jpeg,.png" />
                  <label htmlFor="narkat" className="flex items-center gap-2 w-full border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors group">
                    <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </div>
                    <div className="flex-1 text-sm text-gray-500">
                      <span className="font-medium">Choose from files</span>
                      <p className="text-xs">PDF, JPG, JPEG or PNG (max. 2MB)</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/*2nd div Upload */}

          <div className="w-100 mb-4" style={{ border: '1px solid' }}>
            <p className="p-4 font-bold">खरेदीदार</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3" >
              {/* Aadhar Card Upload */}
              <div className="space-y-2" >
                <label className="flex items-start text-sm font-medium text-gray-700">
                  <span className="text-red-500 mr-1">*</span>
                  खरेदीदार आधार कार्ड
                </label>
                <div className="relative">
                  <input
                    type="file"
                    className="hidden"
                    id="aadharCard"
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <label
                    htmlFor="aadharCard"
                    className="flex items-center gap-2 w-full border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors group"
                  >
                    <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-sm text-gray-500">
                      <span className="font-medium">Choose from files</span>
                      <p className="text-xs">PDF, JPG, JPEG or PNG (max. 2MB)</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Signature Upload */}
              <div className="space-y-2 ">
                <label className="flex items-start text-sm font-medium text-gray-700">
                  <span className="text-red-500 mr-1">*</span>
                  खरेदीदार पॅन कार्ड
                </label>
                <div className="relative">
                  <input
                    type="file"
                    className="hidden"
                    id="signature"
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <label
                    htmlFor="signature"
                    className="flex items-center gap-2 w-full border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors group"
                  >
                    <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-sm text-gray-500">
                      <span className="font-medium">Choose from files</span>
                      <p className="text-xs">PDF, JPG, JPEG or PNG (max. 2MB)</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* PAN Card Upload */}
              <div className="space-y-2">
                <label className="flex items-start text-sm font-medium text-gray-700">
                  <span className="text-red-500 mr-1">*</span>
                  खरेदीदार वास्तव्याचा दाखला
                </label>
                <div className="relative">
                  <input
                    type="file"
                    className="hidden"
                    id="kharedidar"
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <label
                    htmlFor="kharedidar"
                    className="flex items-center gap-2 w-full border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors group"
                  >
                    <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-sm text-gray-500">
                      <span className="font-medium">Choose from files</span>
                      <p className="text-xs">PDF, JPG, JPEG or PNG (max. 2MB)</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* etc Upload */}
              <div className="space-y-2">
                <label className="flex items-start text-sm font-medium text-gray-700">
                  <span className="text-red-500 mr-1">*</span>
                  खरेदीदार नौदणीकृत दस्ताऐवज
                </label>
                <div className="relative">
                  <input type="file" className="hidden" id="nondanikart" accept=".pdf,.jpg,.jpeg,.png" />
                  <label htmlFor="nondanikart" className="flex items-center gap-2 w-full border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors group">
                    <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </div>
                    <div className="flex-1 text-sm text-gray-500">
                      <span className="font-medium">Choose from files</span>
                      <p className="text-xs">PDF, JPG, JPEG or PNG (max. 2MB)</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Aadhar Card Upload */}
              <div className="space-y-2" >
                <label className="flex items-start text-sm font-medium text-gray-700">
                  <span className="text-red-500 mr-1">*</span>
                  खरेदीदार प्रतिज्ञापत्र
                </label>
                <div className="relative">
                  <input
                    type="file"
                    className="hidden"
                    id="pretiksha"
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <label
                    htmlFor="pretiksha"
                    className="flex items-center gap-2 w-full border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors group"
                  >
                    <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-sm text-gray-500">
                      <span className="font-medium">Choose from files</span>
                      <p className="text-xs">PDF, JPG, JPEG or PNG (max. 2MB)</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

            {/*3rd div */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3" >
            {/* Aadhar Card Upload */}
            <div className="space-y-2" >
              <label className="flex items-start text-sm font-medium text-gray-700">
                <span className="text-red-500 mr-1">*</span>
                स्वाक्षरी
              </label>
              <div className="relative">
                <input
                  type="file"
                  className="hidden"
                  id="khatri"
                  accept=".pdf,.jpg,.jpeg,.png"
                />
                <label
                  htmlFor="khatri"
                  className="flex items-center gap-2 w-full border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors group"
                >
                  <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 text-sm text-gray-500">
                    <span className="font-medium">Choose from files</span>
                    <p className="text-xs">PDF, JPG, JPEG or PNG (max. 2MB)</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Signature Upload */}
            <div className="space-y-2 ">
              <label className="flex items-start text-sm font-medium text-gray-700">
                <span className="text-red-500 mr-1">*</span>
                इतर कागद पत्रे
              </label>
              <div className="relative">
                <input
                  type="file"
                  className="hidden"
                  id="etcitems"
                  accept=".pdf,.jpg,.jpeg,.png"
                />
                <label
                  htmlFor="etcitems"
                  className="flex items-center gap-2 w-full border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors group"
                >
                  <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 text-sm text-gray-500">
                    <span className="font-medium">Choose from files</span>
                    <p className="text-xs">PDF, JPG, JPEG or PNG (max. 2MB)</p>
                  </div>
                </label>
              </div>
            </div>

            {/* PAN Card Upload */}
            <div className="space-y-2">
              <label className="flex items-start text-sm font-medium text-gray-700">
                <span className="text-red-500 mr-1">*</span>
                इतर कागद पत्रे
              </label>
              <div className="relative">
                <input
                  type="file"
                  className="hidden"
                  id="etcitems"
                  accept=".pdf,.jpg,.jpeg,.png"
                />
                <label
                  htmlFor="etcitems"
                  className="flex items-center gap-2 w-full border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors group"
                >
                  <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 text-sm text-gray-500">
                    <span className="font-medium">Choose from files</span>
                    <p className="text-xs">PDF, JPG, JPEG or PNG (max. 2MB)</p>
                  </div>
                </label>
              </div>
            </div>

          </div>


        </div>
      </div>
    </div>
  );
};

export default UploadForm10;
