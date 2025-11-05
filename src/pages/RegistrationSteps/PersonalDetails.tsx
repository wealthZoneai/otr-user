import React, { useState } from "react";

type PersonalDetailsProps = {};

export const PersonalDetails: React.FC<PersonalDetailsProps> = () => {
  const [aadharChoice, setAadharChoice] = useState<"Yes" | "No" | null>(null);
  const [changedNameChoice, setChangedNameChoice] = useState<"Yes" | "No" | null>(null);

  const FormLabel: React.FC<{ children: React.ReactNode; required?: boolean }> = ({
    children,
    required,
  }) => (
    <label className="block text-sm font-semibold text-gray-800 mb-1">
      {children}
      {required && <span className="text-red-500">*</span>}
    </label>
  );

  // Hidden helper text for future validation use
  const HelperText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <p className="hidden mt-1 text-xs text-gray-500">{children}</p>
  );

  const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
    <input
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
        Personal Details
      </h2>

      <form className="space-y-6 text-left">
        {/* 1. Aadhar Card */}
        <div>
          <FormLabel required>1. Do you have an Aadhar card?</FormLabel>
          <div className="mt-2 flex gap-6">
            {["Yes", "No"].map((option) => (
              <label key={option} className="flex items-center space-x-2 text-sm text-gray-700">
                <input
                  type="radio"
                  name="aadhar"
                  value={option}
                  onChange={(e) => setAadharChoice(e.target.value as "Yes" | "No")}
                  className="h-4 w-4 text-pink-600 focus:ring-pink-500"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Conditional Aadhar Fields */}
        {aadharChoice === "Yes" && (
          <div className="pl-6 mt-3 space-y-4 border-l-2 border-pink-100">
            <div>
              <FormLabel required>a. Aadhar Card Number</FormLabel>
              <Input type="text" placeholder="Enter Aadhar number" />
              <HelperText>Aadhar details should match your Aadhar card.</HelperText>
            </div>
            <div>
              <FormLabel required>b. Verify Aadhar Card Number</FormLabel>
              <Input type="text" placeholder="Re-enter Aadhar number" />
            </div>
          </div>
        )}

        {/* Conditional Identification Card Fields */}
        {aadharChoice === "No" && (
          <div className="pl-6 mt-3 space-y-4 border-l-2 border-pink-100">
            <div>
              <FormLabel required>2. Type of Identification Card</FormLabel>
              <Select>
                <option value="">Select</option>
                <option value="pan">PAN Card</option>
                <option value="passport">Passport</option>
                <option value="driving_license">Driving License</option>
              </Select>
              <HelperText>If not using Aadhar, provide alternative ID.</HelperText>
            </div>
            <div>
              <FormLabel required>a. Identification Card Number</FormLabel>
              <Input type="text" placeholder="Enter ID number" />
            </div>
          </div>
        )}

        {/* 3. Candidate's Name */}
        <div>
          <FormLabel required>
            3. Candidate's Name (As per Matriculation Certificate)
          </FormLabel>
          <Input type="text" placeholder="Enter full name" />
          <HelperText>
            Enter name as per matriculation certificate. Avoid salutations.
          </HelperText>
        </div>

        {/* 4. Have you ever changed Name? */}
        <div>
          <FormLabel required>4. Have you ever changed your name?</FormLabel>
          <div className="mt-2 flex gap-6">
            {["Yes", "No"].map((option) => (
              <label key={option} className="flex items-center space-x-2 text-sm text-gray-700">
                <input
                  type="radio"
                  name="changedName"
                  value={option}
                  onChange={(e) => setChangedNameChoice(e.target.value as "Yes" | "No")}
                  className="h-4 w-4 text-pink-600 focus:ring-pink-500"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Conditional Changed Name Fields */}
        {changedNameChoice === "Yes" && (
          <div className="pl-6 mt-3 space-y-4 border-l-2 border-pink-100">
            <div>
              <FormLabel required>a. New/Changed Name</FormLabel>
              <Input type="text" placeholder="Enter new/changed name" />
            </div>
            <div>
              <FormLabel required>b. Verify New/Changed Name</FormLabel>
              <Input type="text" placeholder="Re-enter name" />
            </div>
          </div>
        )}

        {/* Gender */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <FormLabel required>5. Gender</FormLabel>
            <Select>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Select>
          </div>
          <div>
            <FormLabel required>a. Verify Gender</FormLabel>
            <Select>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Select>
          </div>
        </div>

        {/* Date of Birth */}
        <div>
          <FormLabel required>6. Date of Birth</FormLabel>
          <Input type="text" placeholder="dd-mm-yyyy" />
        </div>

        {/* Father's Name */}
        <div>
          <FormLabel required>7. Father's Name</FormLabel>
          <Input type="text" placeholder="Enter father's name" />
        </div>

        {/* Mother's Name */}
        <div>
          <FormLabel required>8. Mother's Name</FormLabel>
          <Input type="text" placeholder="Enter mother's name" />
        </div>

        {/* Mobile Number */}
        <div>
          <FormLabel required>9. Candidate's Mobile Number</FormLabel>
          <div className="flex gap-4">
            <Input type="tel" className="flex-1" placeholder="Enter mobile number" />
            <button
              type="button"
              className="rounded-md border border-gray-300 bg-linear-to-r from-pink-50 to-rose-50 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:from-pink-100 hover:to-rose-100 focus:ring-2 focus:ring-pink-500 transition-all duration-200"
            >
              Send OTP
            </button>
          </div>
        </div>

        {/* Email ID */}
        <div>
          <FormLabel required>10. Candidate's Email ID</FormLabel>
          <div className="flex gap-4">
            <Input type="email" className="flex-1" placeholder="Enter email address" />
            <button
              type="button"
              className="rounded-md border border-gray-300 bg-linear-to-r from-pink-50 to-rose-50 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:from-pink-100 hover:to-rose-100 focus:ring-2 focus:ring-pink-500 transition-all duration-200"
            >
              Send OTP
            </button>
          </div>
        </div>

        {/* Next Button */}
        <div className="pt-8 text-center">
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

export default PersonalDetails;
