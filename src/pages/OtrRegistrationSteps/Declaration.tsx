import React, { useState } from "react";

interface DeclarationProps {
  prevStep?: () => void;
  onConfirm?: () => void; // optional if you want to handle final submit externally
}

const Declaration: React.FC<DeclarationProps> = ({ prevStep, onConfirm }) => {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreed) {
      alert("Please agree to the terms and conditions before proceeding.");
      return;
    }

    alert("✅ Declaration Confirmed!");
    if (onConfirm) onConfirm(); // optional callback to handle final submission
  };

  return (
    <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-lg border border-gray-100">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
        Declaration
      </h2>

      <hr className="mb-6 border-gray-200" />

      <form
        onSubmit={handleSubmit}
        className="space-y-8 text-gray-800 text-left text-base leading-relaxed"
      >
        {/* Declaration Text */}
        <div>
          <p className="font-semibold text-gray-900 mb-2">
            One Time Registration
          </p>
          <p className="font-medium text-gray-800 mb-3">Declaration:</p>

          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>
              I hereby declare that the information provided by me in this form
              is true, complete, and correct to the best of my knowledge and
              belief.
            </li>
            <li>
              I understand that if any information is found to be false or
              incorrect at any stage, my candidature or appointment may be
              cancelled or terminated without notice.
            </li>
          </ol>
        </div>

        {/* Checkbox */}
        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            id="agreement"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            className="mt-1 h-4 w-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
          />
          <label
            htmlFor="agreement"
            className="text-sm text-gray-700 leading-5 cursor-pointer"
          >
            I hereby agree that I have read and understood the declaration above
            and all information submitted is accurate to the best of my
            knowledge.
          </label>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6">
          {prevStep && (
            <button
              type="button"
              onClick={prevStep}
              className="rounded-md bg-gradient-to-r from-gray-100 to-gray-200 py-2 px-8 text-lg font-semibold text-gray-700 shadow-sm hover:from-gray-200 hover:to-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all duration-200"
            >
              Back
            </button>
          )}

          <button
            type="submit"
            disabled={!agreed}
            className={`rounded-md py-2 px-10 text-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 ${
              agreed
                ? "bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 focus:ring-pink-400"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default Declaration;
