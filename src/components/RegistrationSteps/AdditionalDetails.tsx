import React, { useState } from "react";

export const AdditionalDetails: React.FC = () => {
  const [hasCasteCertificate, setHasCasteCertificate] = useState<"Yes" | "No" | null>(null);
  const [hasDisability, setHasDisability] = useState<"Yes" | "No" | null>(null);
  const [sameAddress, setSameAddress] = useState<"Yes" | "No" | null>(null);

  const FormLabel: React.FC<{ children: React.ReactNode; required?: boolean }> = ({
    children,
    required,
  }) => (
    <label className="block text-sm font-semibold text-gray-800 mb-1">
      {children}
      {required && <span className="text-red-500">*</span>}
    </label>
  );

  const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
    <input
      {...props}
      className={`mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:border-pink-500 focus:ring-pink-500 ${props.className || ""}`}
    />
  );

  const TextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => (
    <textarea
      {...props}
      className={`mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:border-pink-500 focus:ring-pink-500 ${props.className || ""}`}
    />
  );

  const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (props) => (
    <select
      {...props}
      className={`mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 focus:border-pink-500 focus:ring-pink-500 ${props.className || ""}`}
    >
      {props.children}
    </select>
  );

  return (
    <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-lg border border-gray-100">
      <h2 className="mb-8 text-center text-2xl font-bold text-gray-800">
        Additional Details
      </h2>

      <form className="space-y-8 text-left">
        {/* 1. Caste Certificate */}
        <div>
          <FormLabel required>1. Do you have a caste certificate?</FormLabel>
          <div className="flex gap-6 mt-2">
            {["Yes", "No"].map((option) => (
              <label
                key={option}
                className="flex items-center space-x-2 text-sm text-gray-700"
              >
                <input
                  type="radio"
                  name="caste"
                  value={option}
                  onChange={(e) =>
                    setHasCasteCertificate(e.target.value as "Yes" | "No")
                  }
                  className="h-4 w-4 text-pink-600 focus:ring-pink-500"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>

          {hasCasteCertificate === "Yes" && (
            <div className="pl-6 mt-3 space-y-4 border-l-2 border-pink-100">
              <div>
                <FormLabel required>a. Enter Caste Certificate Number</FormLabel>
                <Input type="text" placeholder="Enter certificate number" />
              </div>
              <div>
                <FormLabel required>b. Verify Caste Certificate Number</FormLabel>
                <Input type="text" placeholder="Re-enter certificate number" />
              </div>
            </div>
          )}
        </div>

        {/* 2. Nationality */}
        <div>
          <FormLabel required>2. Nationality</FormLabel>
          <Select>
            <option value="">Select</option>
            <option value="indian">Indian</option>
            <option value="other">Other</option>
          </Select>
        </div>

        {/* 3. Visible Identification Marks */}
        <div>
          <FormLabel required>3. Visible Identification Marks</FormLabel>
          <Input type="text" placeholder="Enter identification marks" />
        </div>

        {/* 4. Disability */}
        <div>
          <FormLabel required>
            4. Are you a person with benchmark disability (PwBD)?
          </FormLabel>
          <div className="flex gap-6 mt-2">
            {["Yes", "No"].map((option) => (
              <label
                key={option}
                className="flex items-center space-x-2 text-sm text-gray-700"
              >
                <input
                  type="radio"
                  name="disability"
                  value={option}
                  onChange={(e) =>
                    setHasDisability(e.target.value as "Yes" | "No")
                  }
                  className="h-4 w-4 text-pink-600 focus:ring-pink-500"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>

          {hasDisability === "Yes" && (
            <div className="pl-6 mt-3 space-y-4 border-l-2 border-pink-100">
              <div>
                <FormLabel required>a. Type of Disability</FormLabel>
                <Select>
                  <option value="">Select</option>
                  <option value="visual">Visual Impairment</option>
                  <option value="hearing">Hearing Impairment</option>
                  <option value="locomotor">Locomotor Disability</option>
                  <option value="other">Other</option>
                </Select>
              </div>
              <div>
                <FormLabel required>b. Disability Certificate Number</FormLabel>
                <Input type="text" placeholder="Enter certificate number" />
              </div>
            </div>
          )}
        </div>

        {/* 5. Permanent Address */}
        <div>
          <FormLabel required>5. Permanent Address</FormLabel>
          <div className="pl-6 mt-3 space-y-4 border-l-2 border-pink-100">
            <div>
              <FormLabel required>a. Address</FormLabel>
              <TextArea rows={2} placeholder="Enter address" />
            </div>
            <div>
              <FormLabel required>b. State/UT</FormLabel>
              <Select>
                <option value="">Select</option>
              </Select>
            </div>
            <div>
              <FormLabel required>c. District</FormLabel>
              <Select>
                <option value="">Select</option>
              </Select>
            </div>
            <div>
              <FormLabel required>d. Pincode</FormLabel>
              <Input type="text" placeholder="Enter pincode" />
            </div>
          </div>
        </div>

        {/* 6. Current Address */}
        <div>
          <FormLabel required>
            6. Is permanent address same as current address?
          </FormLabel>
          <div className="flex gap-6 mt-2">
            {["Yes", "No"].map((option) => (
              <label
                key={option}
                className="flex items-center space-x-2 text-sm text-gray-700"
              >
                <input
                  type="radio"
                  name="sameAddress"
                  value={option}
                  onChange={(e) => setSameAddress(e.target.value as "Yes" | "No")}
                  className="h-4 w-4 text-pink-600 focus:ring-pink-500"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>

          {sameAddress === "No" && (
            <div className="pl-6 mt-3 space-y-4 border-l-2 border-pink-100">
              <div>
                <FormLabel required>a. Address</FormLabel>
                <TextArea rows={2} placeholder="Enter current address" />
              </div>
              <div>
                <FormLabel required>b. State/UT</FormLabel>
                <Select>
                  <option value="">Select</option>
                </Select>
              </div>
              <div>
                <FormLabel required>c. District</FormLabel>
                <Select>
                  <option value="">Select</option>
                </Select>
              </div>
              <div>
                <FormLabel required>d. Pincode</FormLabel>
                <Input type="text" placeholder="Enter pincode" />
              </div>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-between pt-8">
          <button
            type="button"
            className="rounded-md bg-linear-to-r from-gray-100 to-gray-200 py-2 px-8 text-lg font-semibold text-gray-700 shadow-sm hover:from-gray-200 hover:to-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all duration-200"
          >
            Save
          </button>
          <button
            type="submit"
            className="rounded-md bg-linear-to-r from-pink-500 via-rose-500 to-pink-600 py-2 px-10 text-lg font-semibold text-white shadow-md hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 transition-all duration-200"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdditionalDetails;
