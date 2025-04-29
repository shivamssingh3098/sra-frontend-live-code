import React from "react";
import servicesData from "../data/services.json";

const DashBoardForm11 = ({ formData, handleChange, nextStage, prevStage }) => {
  const serviceDescription =
    servicesData[0].services.find((service) => service.id === 11)
      ?.description || "";
  return (
    <div>
      <div className="min-h-screen bg-gray-50 p-4 flex justify-center">
        <div className="w-full max-w-6xl bg-white rounded-lg shadow p-6">
          {/* Header */}
          <div className="bg-blue-900 text-white text-center p-2 rounded text-sm md:text-base font-semibold">
            सेवा क्र. ११ {serviceDescription}
          </div>
          <p className="text-center text-sm text-gray-700 mt-2">
            (महाराष्ट्र लोकसेवा हक्क अधिनियम २०१५ अंतर्गत सेवा मिळविण्याचा
            नमुना)
          </p>

          {/* Progress / Step Tracker */}
          <div className="flex justify-between items-center mt-4">
            <p className="text-blue-700 font-bold">मूलभूत माहिती</p>
            <div className="border border-black px-4 py-1 text-sm">
              ₹ १०/- फी
            </div>
          </div>

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-sm">
            {/* Name */}
            <div>
              <label className="font-medium block mb-1">
                मूळ झोपडी धारकाच नाव <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            {/* Date */}
            <div>
              <label className="font-medium block mb-1">
                दिनांक <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="font-medium block mb-1">
                मोबाईल नं. <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            {/* Address */}
            <div>
              <label className="font-medium block mb-1">
                पत्ता <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            {/* Taluka */}
            <div>
              <label className="font-medium block mb-1">
                सदनिका / गाळा क्र. <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="taluka"
                value={formData.taluka}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            {/* Bhukhand */}
            <div>
              <label className="font-medium block mb-1">
                सरकारी गृह संस्था पत्ता <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="bhukhandNo"
                value={formData.bhukhandNo}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            {/* पुनर्वसन योजनेचा दिनांक */}
            <div className="md:col-span-3">
              <label className="font-medium block mb-1">
              सदनिका / गाळा वाटप करण्यात आलेली तारीख    <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border rounded px-5 py-2"
                required
              />
            </div>

            {/* पुनर्वसन योजनेचा अनु क्र */}
            <div className="md:col-span-3">
              <label className="font-medium block mb-1">
              *विक्रीद्वारे हस्तांतर करण्यात येणारी व्यक्ति चे नाव     <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="wardNo"
                value={formData.wardNo}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            {/* झोपडी क्र. */}
            <div className="md:col-span-3">
              <label className="font-medium block mb-1">
              विकरिद्वारे हस्तांतर करण्यात येणारी व्यक्तिचा पत्ता.<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="wardNo"
                value={formData.wardNo}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashBoardForm11;
