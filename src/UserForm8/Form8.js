import { useState } from "react";
import React from "react";
import CustomButton from "../components/CustomButton";
import axios from "axios"; // Ensure axios is imported

const Form8 = () => {
  const CertificateStage = ({ formData }) => (
    <div className="min-h-screen bg-gray-50 p-4 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        {/* Certificate Header */}
        <div className="text-center mb-6">
          <div className="flex justify-between items-start mb-4">
            <div className="text-left">सेवा क्र.८</div>
            <CustomButton variant="primary" className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download PDF
            </CustomButton>
          </div>
          <p className="text-sm text-bold mb-4">
            (महाराष्ट्र लोकसेवा हक्क अनियमित २०२५ अंतर्गत सेवा मिळणेकरीत सादर
            करावयाचा आरजाचा नमूना )
          </p>
          <p className="text-sm mb-4">
            पुनर्वसन योजनेतील पात्र संभासदाना झोपडी तोंडल्यानंतर पर्यायी
            जागेपोटी भाडे मिळाले नसल्यास करावयाचा अर्ज
          </p>

          {/* Photo Box */}
          <div className="flex justify-end mb-4">
            <div className="border border-gray-400 w-24 h-12 flex items-center justify-center text-gray-400 text-xs">
              ₹ १० चे कोर्ट फी
            </div>
          </div>
        </div>

        {/* Certificate Content */}
        <div className="space-y-6 text-sm ">
          <div className="d-flex justify-content-center align-items-start flex-column mb-5">
            <div className="flex">
              <span>अर्जदाराचे नाव</span>
              <span className="mx-2">:</span>
              <span className="flex-1 border-b border-gray-300">
                {formData.name || "_____________"}
              </span>
            </div>
            <div className="flex">
              <span>पत्ता</span>
              <span className="mx-2">:</span>
              <span className="flex-1 border-b border-gray-300">
                {formData.address || "_____________"}
              </span>
            </div>
            <div className="flex">
              <span>मोबाईल क्र.</span>
              <span className="mx-2">:</span>
              <span className="flex-1 border-b border-gray-300">
                {formData.mobile || "_____________"}
              </span>
            </div>
            <div className="flex">
              <span>दि. </span>
              <span className="mx-2">:</span>
              <span className="flex-1 border-b border-gray-300">
                {formData.date || "_____________"}
              </span>
            </div>
            <div className="flex">
              <span>आधार क्र. </span>
              <span className="mx-2">:</span>
              <span className="flex-1 border-b border-gray-300">
                {formData.addhar || "_____________"}
              </span>
            </div>
          </div>

          <div>
            <div className="container mt-4">
              <form className="p-4 rounded shadow-sm">
                <div className="mb-3">
                  <label className="form-label">
                    २) परि -२ मध्ये अर्जदारांची संख्या स्थिती :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="paripatra"
                    value={form.paripatra}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    ३) मूळ परि -२ मधील अ क्रमांक :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="mulParipatra"
                    value={form.mulParipatra}
                    onChange={handleChange}
                  />
                  <div className="form-check mt-1">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="patra"
                      defaultChecked
                    />
                    <label className="form-check-label">पात्र</label>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    ४) पूर्वपत्री परि -२ मधील अ क्रमांक :<br />
                    <small>
                      (पूर्वपत्री परि – २ मध्ये पात्र असल्यास त्याची प्रत जोडा)
                    </small>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="purvParipatra"
                    value={form.purvParipatra}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">५) योजनेचे नाव व पत्ता :</label>
                  <input
                    type="text"
                    className="form-control"
                    name="yojanecheNaav"
                    value={form.yojanecheNaav}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">६) विकासकाचे नाव :</label>
                  <input
                    type="text"
                    className="form-control"
                    name="vikasakNaav"
                    value={form.vikasakNaav}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    ७) झोडणी झाल्याचा दिनांक :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="jodaniTariq"
                    value={form.jodaniTariq}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    ८) भाडे करार करण्यात आलेला आहे का ?
                    <br />
                    असल्‍यास करारात दिनांक व ठरविण्यात आलेल्‍या भाड्याचा मासिक
                    दर :
                  </label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="bhaadeKarar"
                      value="होय"
                      onChange={handleChange}
                    />
                    <label className="form-check-label">होय</label>
                  </div>
                  <input
                    type="text"
                    className="form-control mt-2"
                    name="bhaadeDar"
                    value={form.bhaadeDar}
                    onChange={handleChange}
                    placeholder="रुपये -"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    ९) करार झाल्यास सदरच्‍या विकासकाकडून पूर्वी भाडे दिले
                    असल्‍यास कोणत्या मासिक दराने दिले त्याचा दर :
                  </label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="purvaBhaade"
                      value="होय"
                      onChange={handleChange}
                    />
                    <label className="form-check-label">होय</label>
                  </div>
                  <input
                    type="text"
                    className="form-control mt-2"
                    name="purvaBhaadeDar"
                    value={form.purvaBhaadeDar}
                    onChange={handleChange}
                    placeholder="रुपये -"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const [form, setForm] = useState({
    paripatra: "",
    mulParipatra: "",
    purvParipatra: "",
    yojanecheNaav: "",
    vikasakNaav: "",
    jodaniTariq: "",
    bhaadeKarar: "",
    bhaadeDar: "",
    purvaBhaade: "",
    purvaBhaadeDar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    address: "",
    mobile: "",
    taluka: "",
    bhukhandNo: "",
    mouje: "",
    district: "",
    wardNo: "",
    nagarpalika: "",
    yojana: "",
    sahakari: "",
    addhar: "",
  });

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        className="d-flex justify-content-center align-items-start gap-3"
        style={{ width: "100%" }}
      >
        <div className="leftside w-100 h-100">
          <CertificateStage formData={formData} />
        </div>
      </div>
    </div>
  );
};

export default Form8;
