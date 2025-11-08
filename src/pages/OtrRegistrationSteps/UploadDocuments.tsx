import React, { useState } from "react";

interface UploadDocumentsProps {
  nextStep: () => void;
  prevStep?: () => void;
}

const UploadDocuments: React.FC<UploadDocumentsProps> = ({ nextStep, prevStep }) => {
  // ---------------------------------------
  // 📂 Document Fields Configuration
  // ---------------------------------------
  const documentList = [
    { label: "Scanned Photograph Of The Candidate", key: "photo" },
    { label: "Scanned Signature Of The Candidate", key: "signature" },
    { label: "Scanned Aadhar Card Of The Candidate", key: "aadhar" },
    { label: "Scanned PAN Card Of The Candidate", key: "pan" },
    { label: "Scanned Caste Certificate Of The Candidate", key: "caste" },
    { label: "Scanned 10th Class Certificate Of The Candidate", key: "tenth" },
    { label: "Scanned 12th or Diploma Certificate Of The Candidate", key: "twelfth" },
    { label: "Scanned Graduation Certificate Of The Candidate", key: "graduation" },
    { label: "Scanned Post Graduation Certificate Of The Candidate", key: "postgraduation" },
    { label: "Upload Your Updated Resume", key: "resume" },
  ];

  const [uploadedDocs, setUploadedDocs] = useState<Record<string, File | null>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  // ---------------------------------------
  // 📸 File Upload Handler
  // ---------------------------------------
  const handleFileChange = (key: string, file: File | null) => {
    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    const maxSize = 1 * 1024 * 1024; // 1MB

    if (!allowedTypes.includes(file.type)) {
      setErrors((prev) => ({ ...prev, [key]: "Only JPG, PNG, or PDF allowed." }));
      return;
    }

    if (file.size > maxSize) {
      setErrors((prev) => ({ ...prev, [key]: "File size should be under 1MB." }));
      return;
    }

    setErrors((prev) => ({ ...prev, [key]: "" }));
    setUploadedDocs((prev) => ({ ...prev, [key]: file }));
  };

  // ---------------------------------------
  // 🪪 DigiLocker Upload
  // ---------------------------------------
  const handleDigiLockerUpload = async () => {
    alert("DigiLocker integration is under development. Stay tuned!");
  };

  // ---------------------------------------
  // ✅ Form Submit
  // ---------------------------------------
  const handleNext = () => {
    const missing = documentList.filter((d) => !uploadedDocs[d.key]);
    if (missing.length > 0) {
      alert(`Please upload all required documents before proceeding.`);
      return;
    }

    console.log("✅ Uploaded Docs:", uploadedDocs);
    nextStep();
  };

  // ---------------------------------------
  // 💅 Components
  // ---------------------------------------
  const FormLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <label className="block text-sm font-semibold text-gray-800 mb-1 text-left">
      {children}
    </label>
  );

  const NoteBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="rounded-md border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-800 mb-6 text-left">
      {children}
    </div>
  );

  // ---------------------------------------
  // 🧾 UI
  // ---------------------------------------
  return (
    <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-lg border border-gray-100">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
        Upload Documents
      </h2>

      {/* Note Section */}
      <NoteBox>
        <p className="font-semibold">Note:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Ensure all documents are scanned clearly and legibly.</li>
          <li>Only original and valid certificates will be accepted.</li>
          <li>
            File size should not exceed <strong>1 MB</strong> per document.
          </li>
          <li>Supported formats: JPG, JPEG, PNG, or PDF.</li>
          <li>Uploading forged or invalid documents may lead to disqualification.</li>
        </ul>
      </NoteBox>

      {/* Upload Guidelines */}
      <div className="space-y-4 text-left mb-8">
        <FormLabel>
          Guidelines for Scanning the Photograph, Signature & Documents:
        </FormLabel>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
          <li>Photograph should be recent, clear, and against a plain background.</li>
          <li>Signature must be done in BLACK ink and should not touch the border.</li>
          <li>Ensure that your name and other details on documents are readable.</li>
          <li>Use a proper scanner — avoid taking photos with a mobile camera.</li>
          <li>
            Save documents using file names that reflect their purpose (e.g.,{" "}
            <em>“10thCertificate.jpg”</em>).
          </li>
        </ul>
      </div>

      {/* Upload Fields */}
      <div className="space-y-6">
        {documentList.map((doc, idx) => (
          <div key={doc.key} className="border-b border-gray-100 pb-4">
            <FormLabel>
              {idx + 1}. {doc.label}
            </FormLabel>
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              onChange={(e) =>
                handleFileChange(doc.key, e.target.files ? e.target.files[0] : null)
              }
              className="block w-full text-sm text-gray-700 border rounded-md p-2 file:mr-3 file:py-1 file:px-3 file:rounded file:border-0 file:bg-pink-100 file:text-pink-700 hover:file:bg-pink-200 focus:ring-2 focus:ring-pink-400"
            />

            {uploadedDocs[doc.key] && (
              <p className="text-green-600 text-xs mt-1">
                ✅ {uploadedDocs[doc.key]?.name} uploaded successfully
              </p>
            )}
            {errors[doc.key] && (
              <p className="text-red-500 text-xs mt-1">{errors[doc.key]}</p>
            )}
          </div>
        ))}
      </div>

      {/* DigiLocker Integration */}
      <div className="mt-8 rounded-lg border border-pink-300 bg-pink-50 p-6 text-center shadow-sm">
        <p className="text-gray-800 font-bold text-lg mb-2">
          Upload Your Documents via DigiLocker
        </p>
        <p className="text-sm text-gray-600 mb-4">
          Securely fetch and verify your official documents directly from DigiLocker.
        </p>

        <button
          type="button"
          onClick={handleDigiLockerUpload}
          className="inline-block rounded-md bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-6 py-2 text-white font-semibold shadow-md hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 transition-all duration-200"
        >
          Upload with DigiLocker
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-10">
        <button
          type="button"
          onClick={() => prevStep && prevStep()}
          className="rounded-md bg-gradient-to-r from-gray-100 to-gray-200 py-2 px-8 text-lg font-semibold text-gray-700 shadow-sm hover:from-gray-200 hover:to-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all duration-200"
        >
          Back
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="rounded-md bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 py-2 px-10 text-lg font-semibold text-white shadow-md hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 transition-all duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UploadDocuments;
