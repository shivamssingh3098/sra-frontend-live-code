import React, { useEffect, useState } from 'react'
import UserForm from '../../UserForm/Form'
import { useLocation } from 'react-router-dom';
import axios from "axios";

// Import Form components
import Form1 from "../../UserForm1/Form1";
import Form2 from "../../UserForm2/Form2";
import Form3 from "../../UserForm3/Form3";
import Form4 from "../../UserForm4/Form4";
import Form5 from "../../UserForm5/Form5";
import Form6 from "../../UserForm6/Form6";
import Form7 from "../../UserForm7/Form7";
import Form8 from "../../UserForm8/Form8";
import Form9 from "../../UserForm9/Form9";
import Form10 from "../../userForm10/Form10";
import Form11 from "../../userForm11/Form11";
import Form12 from "../../userForm12/Form12";
import Form13 from "../../userForm13/Form13";
import Form14 from "../../userForm14/Form14";
import Form15 from "../../userForm15/Form15";
import Form16 from "../../userForm16/Form16";
import Form17 from "../../userForm17/Form17";
import Form18 from "../../userForm18/Form18";
import Form19 from "../../userForm19/Form19";
import Form20 from "../../userForm20/Form20";
import Form21 from "../../userForm21/Form21";
import Form22 from "../../userForm22/Form22";

const ApplicationApproval = ({ formData }) => {
  const location = useLocation();
  console.log("Application info", location.state)
  const { app } = location.state;
  const [applicationInfo, setApplicationInfo] = useState(app);
  const [documentList, setDocumentList] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [selectedCheckbox, setSelectedCheckbox] = useState(null); // Track which checkbox is being clicked
  const [checkedCheckboxes, setCheckedCheckboxes] = useState({}); // Store checked status for all checkboxes
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  // Open modal when checkbox or label is clicked
  const handleCheckboxClick = (labelText, imageUrl) => {
    setSelectedCheckbox(labelText);  // Save which checkbox was clicked
    setSelectedImageUrl(imageUrl);   // Save the image URL (new state)
    setIsModalOpen(true);
    setModalTitle(labelText);
  };
  useEffect(() => {
    fetchApplicationData(applicationInfo?._id);
  }, []);
  const token = localStorage.getItem("accessToken");
  const fetchApplicationData = async (applicationId) => {
    console.log("Making API request to fetch data...");
    const response = await axios.get(
      "https://sra-government-project-thane-1.onrender.com/api/v1/department-managers/get-specific-form-data",
      {
        params: {
          formId: applicationId,
        },
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    console.log("API Response received:", {
      status: response.status,
      data: response.data.data[0].documents.documentList,
      headers: response.headers,
    });
    setDocumentList(response.data.data[0]?.documents?.documentList)
  };
  const handleRejectButtonClick = (data) => {
    alert(data);
    setIsRejectModalOpen(true);
  };
  // Close modal and reset checkbox state
  const handleCloseModal = () => {
    setIsModalOpen(false);
    //setIsChecked(false); // Uncheck the checkbox
  };
  const handleCloseRejectModal = () => {
    setIsRejectModalOpen(false);
  };

  // Handle Done button
  const handleDone = () => {
    setCheckedCheckboxes((prev) => ({
      ...prev,
      [selectedCheckbox]: true,   // Mark that particular checkbox as checked
    }));
    setSelectedCheckbox(null);     // Clear selected checkbox
    setIsModalOpen(false);          // Close modal
  };


  const handleRejectAction = () => {

  };
  const [isLoading, setIsLoading] = useState(false);
  const handleAcceptRejectClick = async (applicationId) => {
    if (!applicationId) return;

    // Log the data being sent
    console.log("Application Id:", applicationId);
    const submitData = {
      "serviceStatus": "ACCEPTED",
      "_id": applicationId
    };
    try {
      const token = localStorage.getItem("accessToken");
      // Add axios configuration
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        withCredentials: true,
      };

      const response = await axios.post(
        "https://sra-government-project-thane-1.onrender.com/api/v1/department-managers/accept-serviceStatus-for-sra_circular3_proposal-docs3",
        submitData,
        config
      );

      console.log("API Response:", response);
    } catch (error) {
      console.error('Error:', error);
      alert("Accept function has some error.");
      // Handle error (show toast maybe)
    } finally {
      //setIsLoading(false); // done loading
    }

  };
  return (
    <div style={{ display: 'flex', height: '100vh', marginTop: '1rem' }}>

      {/* First Panel (8/12) */}
      <div style={{ flex: 8, padding: '10px', border: '1px solid #ccc', overflowY: 'auto' }}>
        {(app?.serviceNumber == 1 ? (
          <Form1 formData={formData} />
        ) : app?.serviceNumber == 2 ? (
          <Form2 formData={formData} />
        ) : app?.serviceNumber == 3 ? (
          <Form3 formData={formData} />
        ) : app?.serviceNumber == 4 ? (
          <Form4 formData={formData} />
        ) : app?.serviceNumber == 5 ? (
          <Form5 formData={formData} />
        ) : app?.serviceNumber == 6 ? (
          <Form6 formData={formData} />
        ) : app?.serviceNumber == 7 ? (
          <Form7 formData={formData} />
        ) : app?.serviceNumber == 8 ? (
          <Form8 formData={formData} />
        ) : app?.serviceNumber == 9 ? (
          <Form9 formData={formData} />
        ) : app?.serviceNumber == 10 ? (
          <Form10 formData={formData} />
        ) : app?.serviceNumber == 11 ? (
          <Form11 formData={formData} />
        ) : app?.serviceNumber == 12 ? (
          <Form12 formData={formData} />
        ) : app?.serviceNumber == 13 ? (
          <Form13 formData={formData} />
        ) : app?.serviceNumber == 14 ? (
          <Form14 formData={formData} />
        ) : app?.serviceNumber == 15 ? (
          <Form15 formData={formData} />
        ) : app?.serviceNumber == 16 ? (
          <Form16 formData={formData} />
        ) : app?.serviceNumber == 17 ? (
          <Form17 formData={formData} />
        ) : app?.serviceNumber == 18 ? (
          <Form18 formData={formData} />
        ) : app?.serviceNumber == 19 ? (
          <Form19 formData={formData} />
        ) : app?.serviceNumber == 20 ? (
          <Form20 formData={formData} />
        ) : app?.serviceNumber == 21 ? (
          <Form21 formData={formData} />
        ) : app?.serviceNumber == 22 ? (
          <Form22 formData={formData} />
        ) : null)}
      </div>

      {/* Second Panel (4/12) */}
      <div style={{ flex: 4, padding: '10px', border: '1px solid #ccc', overflowY: 'auto' }}>

        {/* Form Heading */}
        <h4 className="text-center mb-4">Listed Documents</h4>

        {/* Vertical Checkbox List */}
        {/* Vertical Checkbox List */}
        <div className="mb-4">
          {documentList.map((doc, index) => {
            const labelText = Object.keys(doc)[0];    // e.g., "Identity Card"
            const imageUrl = Object.values(doc)[0];   // e.g., "https://..."

            return (
              <div
                className="form-check mb-3"
                key={index}
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                <input
                  className="form-check-input custom-checkbox"
                  type="checkbox"
                  id={`checkbox${labelText}`}
                  checked={checkedCheckboxes[labelText] || false}
                  onChange={() => { }}
                  onClick={() => handleCheckboxClick(labelText, imageUrl)}
                />
                <label
                  className="form-check-label"
                  htmlFor={`checkbox${labelText}`}
                  style={{ fontSize: '1.1rem', cursor: 'pointer' }}
                  onClick={() => handleCheckboxClick(labelText, imageUrl)}
                >
                  {labelText}
                </label>
              </div>
            );
          })}


        </div>

        {/* Centered Approve and Reject Buttons */}
        <div className="d-flex justify-content-center gap-3">
          <button type="submit" className="btn btn-success" onClick={() => handleAcceptRejectClick(applicationInfo?._id)}>
            Accept
          </button>
          <button type="button" className="btn btn-danger" onClick={() => handleAcceptRejectClick(applicationInfo?._id)}>
            Reject
          </button>
        </div>


        {/* Custom Checkbox Styles */}
        <style jsx>{`
    .custom-checkbox {
      width: 22px;
      height: 22px;
      cursor: pointer;
    }

    .custom-checkbox:checked {
      background-color: #0d6efd; /* Bootstrap primary blue */
      border-color: #0d6efd;
    }
  `}</style>
        {/* Bootstrap Modal */}
        <div className={`modal fade ${isModalOpen ? 'show' : ''}`} style={{ display: isModalOpen ? 'block' : 'none' }}>
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '500px', width: '100%' }}>
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h5 className="modal-title">{modalTitle}</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal} />
              </div>
              {/* Modal Body with Image */}
              <div className="modal-body">
                <img
                  src={selectedImageUrl}
                  alt="Modal Image"
                  className="img-fluid"
                  style={{ display: 'block', margin: 'auto', width: '100%', height: 'auto' }}
                />
              </div>
              {/* Modal Footer with Buttons */}
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={handleDone}>
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bootstrap Modal */}
        <div className={`modal fade ${isRejectModalOpen ? 'show' : ''}`} style={{ display: isRejectModalOpen ? 'block' : 'none' }}>
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '500px', width: '100%' }}>
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h5 className="modal-title">Reject Action</h5>
                <button type="button" className="btn-close" onClick={handleCloseRejectModal} />
              </div>

              {/* Modal Body */}
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="fileUpload" className="form-label">
                    Upload File
                  </label>
                  <input type="file" className="form-control" id="fileUpload" />
                </div>

                <div className="mb-3">
                  <label htmlFor="remarks" className="form-label">
                    Remarks
                  </label>
                  <textarea
                    className="form-control"
                    id="remarks"
                    rows="4"
                    placeholder="Enter remarks..."
                  ></textarea>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="modal-footer justify-content-end">
                <button type="button" className="btn btn-secondary" onClick={handleCloseRejectModal}>
                  Cancel
                </button>
                <button type="button" className="btn btn-danger" onClick={() => handleRejectAction()}>
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>



  )
}

export default ApplicationApproval