import React from "react";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";

interface JobViewModalProps {
  open: boolean;
  onClose: () => void;
  job: any;
}

const JobViewModal: React.FC<JobViewModalProps> = ({ open, onClose, job }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh] transform transition-all scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1a237e] text-white rounded-t-2xl px-6 py-4">
          <h2 className="text-xl font-semibold text-center">
            {job.jobCategory}
          </h2>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-1">
            {job.jobTitle}
          </h3>
          <p className="text-sm text-gray-600 mb-4">{job.description}</p>

          {/* Info Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm mb-4">
            <p>
              <strong>Post Date:</strong> {job.postDate}
            </p>
            <p>
              <strong>Last Date:</strong> {job.lastDate}
            </p>
            {job.importantDates && (
              <p>
                <strong>Important Dates:</strong> {job.importantDates}
              </p>
            )}
            {job.ageLimit && (
              <p>
                <strong>Age Limit:</strong> {job.ageLimit}
              </p>
            )}
          </div>

          <p className="text-sm mb-2">
            <strong>Qualification:</strong> {job.qualification}
          </p>

          {job.additionalDetails && (
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              <strong>Additional Details:</strong> {job.additionalDetails}
            </p>
          )}

          {/* Vacancy Details */}
          {Array.isArray(job.vacancyDetails) &&
            job.vacancyDetails.length > 0 && (
              <div className="overflow-x-auto mt-6">
                <h4 className="font-semibold mb-2 text-gray-800">
                  Vacancy Details
                </h4>
                <table className="min-w-full border text-sm rounded-md overflow-hidden">
                  <thead className="bg-gray-100 border-b">
                    <tr className="text-gray-700 text-left">
                      <th className="border px-3 py-2">Post Name</th>
                      <th className="border px-3 py-2">Total</th>
                      <th className="border px-3 py-2">Age</th>
                      <th className="border px-3 py-2">Category</th>
                      <th className="border px-3 py-2">Qualification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {job.vacancyDetails.map((v: any, idx: number) => (
                      <tr
                        key={idx}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="border px-3 py-2">{v.postName}</td>
                        <td className="border px-3 py-2">{v.total}</td>
                        <td className="border px-3 py-2">{v.age}</td>
                        <td className="border px-3 py-2">
                          {v.religions
                            ?.map((r: any) => r.religionName)
                            .join(", ")}
                        </td>
                        <td className="border px-3 py-2">{v.qualification}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-8">
            {job.uploadFile && (
              <a
                href={job.uploadFile}
                download
                target="_blank"
                rel="noreferrer"
                className="bg-pink-500 text-white text-sm px-5 py-2 rounded-md flex items-center gap-2 hover:bg-pink-600 transition-all"
              >
                <FaDownload /> Download Notification
              </a>
            )}

            <button
              onClick={() => {
                onClose();
                // Add redirect logic if needed here (like navigate("/apply/" + job.id))
              }}
              className="bg-[#1a237e] text-white text-sm px-5 py-2 rounded-md flex items-center gap-2 hover:bg-[#303f9f] transition-all"
            >
              <FaExternalLinkAlt /> Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobViewModal;
