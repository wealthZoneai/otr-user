import React from "react";

export const UploadDocuments: React.FC = () => {
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
  const DigiLockerBox: React.FC = () => (
    <div className="mt-8 rounded-lg border border-pink-300 bg-pink-50 p-6 text-center shadow-sm">
      <p className="text-gray-800 font-bold text-lg mb-2">
        Upload Your Documents via DigiLocker
      </p>
      <p className="text-sm text-gray-600 mb-4">
        Securely fetch and verify your official documents directly from DigiLocker.
      </p>

      <div className="inline-block rounded-md bg-linear-to-r from-pink-500 via-rose-500 to-pink-600 px-6 py-2 text-white font-semibold shadow-md cursor-pointer hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 transition-all duration-200">
        Upload with DigiLocker
      </div>
    </div>
  );

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

      {/* Guidelines */}
      <div className="space-y-4 text-left">
        <FormLabel>Guidelines for Scanning the Photograph, Signature & Documents:</FormLabel>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
          <li>Photograph should be recent, clear, and against a plain background.</li>
          <li>Signature must be done in BLACK ink and should not touch the border.</li>
          <li>Ensure that your name and other details on documents are readable.</li>
          <li>Use a proper scanner — avoid taking photos with a mobile camera.</li>
          <li>
            Save documents using file names that reflect their purpose (e.g., <em>“10thCertificate.jpg”</em>).
          </li>
        </ul>
      </div>

      {/* DigiLocker Upload */}
      <DigiLockerBox />

      {/* Navigation Button */}
      <div className="pt-10 text-center">
        <button
          type="submit"
          className="rounded-md bg-linear-to-r from-pink-500 via-rose-500 to-pink-600 py-2 px-10 text-lg font-semibold text-white shadow-md hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 transition-all duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UploadDocuments;
