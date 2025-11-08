import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

interface PersonalDetailsProps {
  nextStep: () => void;
  prevStep?: () => void;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({ nextStep }) => {
  const [aadharChoice, setAadharChoice] = useState<"Yes" | "No" | null>(null);
  const [changedNameChoice, setChangedNameChoice] = useState<"Yes" | "No" | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

 const onSubmit = async (data: any) => {
  try {
    setLoading(true);

    // API payload if needed
    const payload = {
      hasAadhar: aadharChoice === "Yes",
      aadharNumber: data.aadharNumber,
      idType: data.idType,
      idNumber: data.idNumber,
      candidateName: data.candidateName,
      newName: changedNameChoice === "Yes" ? data.newName : null,
      gender: data.gender,
      dob: data.dob,
      fatherName: data.fatherName,
      motherName: data.motherName,
      mobile: data.mobile,
      email: data.email,
    };

    // ✅ Only move to next step *after* validation success
    // await axios.post("http://localhost:8068/api/personalDetails", payload);
    console.log("✅ Personal details saved:", payload);

    nextStep(); // move to step 2
  } catch (error) {
    console.error("❌ Error:", error);
    alert("Something went wrong!");
  } finally {
    setLoading(false);
  }
};


  // helper components
  const FormLabel: React.FC<{ children: React.ReactNode; required?: boolean }> = ({
    children,
    required,
  }) => (
    <label className="block text-sm font-semibold text-gray-800 mb-1">
      {children}
      {required && <span className="text-red-500">*</span>}
    </label>
  );

  const ErrorMsg = ({ message }: { message?: string }) =>
    message ? <p className="text-xs text-red-500 mt-1">{message}</p> : null;

  return (
    <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-lg border border-gray-100">
      <h2 className="mb-8 text-center text-2xl font-bold text-gray-800">
        Personal Details
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
        {/* Aadhar Choice */}
        <div>
          <FormLabel required>1. Do you have an Aadhar card?</FormLabel>
          <div className="mt-2 flex gap-6">
            {["Yes", "No"].map((option) => (
              <label key={option} className="flex items-center space-x-2 text-sm text-gray-700">
                <input
                  type="radio"
                  name="aadharChoice"
                  checked={aadharChoice === option}
                  onChange={() => setAadharChoice(option as "Yes" | "No")}
                  className="h-4 w-4 text-pink-600 focus:ring-pink-500"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Aadhar Fields */}
        {aadharChoice === "Yes" && (
          <div className="pl-6 mt-3 space-y-4 border-l-2 border-pink-100">
            <div>
              <FormLabel required>Aadhar Card Number</FormLabel>
              <input
                type="number"
                {...register("aadharNumber", {
                  required: "Aadhar number is required",
                  pattern: {
                    value: /^\d{12}$/,
                    message: "Aadhar number must be 12 digits",
                  },
                })}
                placeholder="Enter Aadhar number"
                className="w-full border rounded-md px-3 py-2 text-sm focus:border-pink-500 focus:ring-pink-500"
              />
              <ErrorMsg message={errors.aadharNumber?.message as string} />
            </div>
            <div>
              <FormLabel required>Verify Aadhar Number</FormLabel>
              <input
                type="number"
                {...register("verifyAadharNumber", {
                  validate: (val) =>
                    val === watch("aadharNumber") || "Aadhar numbers do not match",
                })}
                placeholder="Re-enter Aadhar number"
                className="w-full border rounded-md px-3 py-2 text-sm focus:border-pink-500 focus:ring-pink-500"
              />
              <ErrorMsg message={errors.verifyAadharNumber?.message as string} />
            </div>
          </div>
        )}

        {/* Alternate ID Fields */}
        {aadharChoice === "No" && (
          <div className="pl-6 mt-3 space-y-4 border-l-2 border-pink-100">
            <div>
              <FormLabel required>Type of Identification Card</FormLabel>
              <select
                {...register("idType", { required: "Please select ID type" })}
                className="w-full border rounded-md px-3 py-2 text-sm focus:border-pink-500 focus:ring-pink-500"
              >
                <option value="">Select</option>
                <option value="pan">PAN Card</option>
                <option value="passport">Passport</option>
                <option value="driving_license">Driving License</option>
              </select>
              <ErrorMsg message={errors.idType?.message as string} />
            </div>
            <div>
              <FormLabel required>Identification Card Number</FormLabel>
              <input
                type="text"
                {...register("idNumber", { required: "ID number is required" })}
                placeholder="Enter ID number"
                className="w-full border rounded-md px-3 py-2 text-sm focus:border-pink-500 focus:ring-pink-500"
              />
              <ErrorMsg message={errors.idNumber?.message as string} />
            </div>
          </div>
        )}

        {/* Candidate Name */}
        <div>
          <FormLabel required>Candidate's Name (As per Matriculation Certificate)</FormLabel>
          <input
            type="text"
            {...register("candidateName", { required: "Name is required" })}
            placeholder="Enter full name"
            className="w-full border rounded-md px-3 py-2 text-sm focus:border-pink-500 focus:ring-pink-500"
          />
          <ErrorMsg message={errors.candidateName?.message as string} />
        </div>

        {/* Changed Name */}
        <div>
          <FormLabel required>Have you ever changed your name?</FormLabel>
          <div className="mt-2 flex gap-6">
            {["Yes", "No"].map((option) => (
              <label key={option} className="flex items-center space-x-2 text-sm text-gray-700">
                <input
                  type="radio"
                  checked={changedNameChoice === option}
                  onChange={() => setChangedNameChoice(option as "Yes" | "No")}
                  className="h-4 w-4 text-pink-600 focus:ring-pink-500"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        {changedNameChoice === "Yes" && (
          <div className="pl-6 mt-3 space-y-4 border-l-2 border-pink-100">
            <div>
              <FormLabel required>New/Changed Name</FormLabel>
              <input
                type="text"
                {...register("newName", { required: "Please enter new name" })}
                placeholder="Enter new name"
                className="w-full border rounded-md px-3 py-2 text-sm focus:border-pink-500 focus:ring-pink-500"
              />
              <ErrorMsg message={errors.newName?.message as string} />
            </div>
            <div>
              <FormLabel required>Verify New/Changed Name</FormLabel>
              <input
                type="text"
                {...register("verifyNewName", {
                  validate: (val) =>
                    val === watch("newName") || "Names do not match",
                })}
                placeholder="Re-enter name"
                className="w-full border rounded-md px-3 py-2 text-sm focus:border-pink-500 focus:ring-pink-500"
              />
              <ErrorMsg message={errors.verifyNewName?.message as string} />
            </div>
          </div>
        )}

        {/* Gender */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <FormLabel required>Gender</FormLabel>
            <select
              {...register("gender", { required: "Please select gender" })}
              className="w-full border rounded-md px-3 py-2 text-sm focus:border-pink-500 focus:ring-pink-500"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <ErrorMsg message={errors.gender?.message as string} />
          </div>
          <div>
            <FormLabel required>Verify Gender</FormLabel>
            <select
              {...register("verifyGender", {
                validate: (val) => val === watch("gender") || "Gender mismatch",
              })}
              className="w-full border rounded-md px-3 py-2 text-sm focus:border-pink-500 focus:ring-pink-500"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <ErrorMsg message={errors.verifyGender?.message as string} />
          </div>
        </div>

        {/* Date of Birth */}
        <div>
          <FormLabel required>Date of Birth</FormLabel>
          <input
            type="date"
            {...register("dob", { required: "Please select date of birth" })}
            className="w-full border rounded-md px-3 py-2 text-sm focus:border-pink-500 focus:ring-pink-500"
          />
          <ErrorMsg message={errors.dob?.message as string} />
        </div>

        {/* Parents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <FormLabel required>Father's Name</FormLabel>
            <input
              type="text"
              {...register("fatherName", { required: "Father's name is required" })}
              placeholder="Enter father's name"
              className="w-full border rounded-md px-3 py-2 text-sm focus:border-pink-500 focus:ring-pink-500"
            />
            <ErrorMsg message={errors.fatherName?.message as string} />
          </div>
          <div>
            <FormLabel required>Mother's Name</FormLabel>
            <input
              type="text"
              {...register("motherName", { required: "Mother's name is required" })}
              placeholder="Enter mother's name"
              className="w-full border rounded-md px-3 py-2 text-sm focus:border-pink-500 focus:ring-pink-500"
            />
            <ErrorMsg message={errors.motherName?.message as string} />
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <FormLabel required>Mobile Number</FormLabel>
            <input
              type="tel"
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[6-9]\d{9}$/,
                  message: "Invalid mobile number",
                },
              })}
              placeholder="Enter mobile number"
              className="w-full border rounded-md px-3 py-2 text-sm focus:border-pink-500 focus:ring-pink-500"
            />
            <ErrorMsg message={errors.mobile?.message as string} />
          </div>
          <div>
            <FormLabel required>Email ID</FormLabel>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              placeholder="Enter email"
              className="w-full border rounded-md px-3 py-2 text-sm focus:border-pink-500 focus:ring-pink-500"
            />
            <ErrorMsg message={errors.email?.message as string} />
          </div>
        </div>

        {/* Submit */}
        <div className="pt-8 text-center">
          <button
            type="submit"
            disabled={loading}
            className={`rounded-md ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:via-rose-600 hover:to-pink-700"
            } py-2 px-10 text-lg font-semibold text-white shadow-md focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 transition-all duration-200`}
          >
            {loading ? "Saving..." : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
