import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

interface ProfessionalDetailsProps {
  nextStep: () => void;
  prevStep?: () => void;
}

interface EducationData {
  educationType: string;
  board: string;
  rollNumber: string;
  yearOfPassing: string;
  schoolOrCollegeName: string;
  specialization?: string;
  thesisTitle?: string;
  percentageType: string;
  percentageValue: string;
}

const ProfessionalDetails: React.FC<ProfessionalDetailsProps> = ({
  nextStep,
  prevStep,
}) => {
  const [selectedEducation, setSelectedEducation] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<EducationData>({
    defaultValues: {
      percentageType: "%",
    },
  });

  const percentageType = watch("percentageType");

  // Submit Handler
  const onSubmit = async (data: EducationData) => {
    try {
      if (!selectedEducation) {
        alert("Please select an education type!");
        return;
      }
      nextStep();

      setLoading(true);

      const payload = {
        educationType: selectedEducation,
        board: data.board,
        rollNumber: data.rollNumber,
        yearOfPassing: data.yearOfPassing,
        schoolOrCollegeName: data.schoolOrCollegeName,
        specialization: data.specialization || null,
        thesisTitle: data.thesisTitle || null,
        percentageType: data.percentageType,
        percentageValue: data.percentageValue,
      };

      console.log("✅ Sending payload:", payload);

      // Replace with your real backend URL
      await axios.post("http://localhost:8068/api/professionalDetails", payload);

      alert("✅ Professional details saved successfully!");
    } catch (error) {
      console.error("❌ Error submitting professional details:", error);
      alert("Failed to save professional details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Helper Components
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

  const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
    <input
      {...props}
      className={`mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:border-pink-500 focus:ring-pink-500 ${
        props.className || ""
      }`}
    />
  );

  const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (props) => (
    <select
      {...props}
      className={`mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 focus:border-pink-500 focus:ring-pink-500 ${
        props.className || ""
      }`}
    >
      {props.children}
    </select>
  );

  // Year Options (for demo)
  const years = Array.from({ length: 20 }, (_, i) => (2010 + i).toString());

  return (
    <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-lg border border-gray-100">
      <h2 className="mb-8 text-center text-2xl font-bold text-gray-800">
        Professional Details
      </h2>

      <form className="space-y-8 text-left" onSubmit={handleSubmit(onSubmit)}>
        {/* Education Type */}
        <div>
          <FormLabel required>Select Education Type</FormLabel>
          <Select
            value={selectedEducation}
            onChange={(e) => setSelectedEducation(e.target.value)}
          >
            <option value="">Select Education Type</option>
            <option value="10th">10th</option>
            <option value="12th">12th</option>
            <option value="BTech">B.Tech</option>
            <option value="PhD">Ph.D</option>
          </Select>
          {!selectedEducation && (
            <ErrorMsg message="Please select your education type." />
          )}
        </div>

        {/* Dynamic Fields */}
        {selectedEducation && (
          <div className="space-y-6 border-t pt-6">
            {/* Board */}
            <div>
              <FormLabel required>
                {selectedEducation === "BTech" || selectedEducation === "PhD"
                  ? "University / Board"
                  : "Education Board"}
              </FormLabel>
              <Input
                type="text"
                placeholder="Enter Board / University name"
                {...register("board", { required: "This field is required" })}
              />
              <ErrorMsg message={errors.board?.message} />
            </div>

            {/* Roll Number */}
            <div>
              <FormLabel required>Roll Number</FormLabel>
              <Input
                type="text"
                placeholder="Enter roll number"
                {...register("rollNumber", { required: "Roll number is required" })}
              />
              <ErrorMsg message={errors.rollNumber?.message} />
            </div>

            {/* Year of Passing */}
            <div>
              <FormLabel required>Year of Passing</FormLabel>
              <Select {...register("yearOfPassing", { required: "Select year" })}>
                <option value="">Select Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </Select>
              <ErrorMsg message={errors.yearOfPassing?.message} />
            </div>

            {/* School/College Name */}
            <div>
              <FormLabel required>
                {selectedEducation === "10th"
                  ? "School Name"
                  : selectedEducation === "12th"
                  ? "College Name"
                  : "Institute Name"}
              </FormLabel>
              <Input
                type="text"
                placeholder="Enter name"
                {...register("schoolOrCollegeName", {
                  required: "This field is required",
                })}
              />
              <ErrorMsg message={errors.schoolOrCollegeName?.message} />
            </div>

            {/* Specialization or Thesis */}
            {selectedEducation === "BTech" && (
              <div>
                <FormLabel required>Specialization</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter specialization"
                  {...register("specialization", {
                    required: "Specialization is required",
                  })}
                />
                <ErrorMsg message={errors.specialization?.message} />
              </div>
            )}

            {selectedEducation === "PhD" && (
              <div>
                <FormLabel required>Thesis Title</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter thesis title"
                  {...register("thesisTitle", {
                    required: "Thesis title is required",
                  })}
                />
                <ErrorMsg message={errors.thesisTitle?.message} />
              </div>
            )}

            {/* Percentage / CGPA */}
            <div>
              <FormLabel required>Result Type</FormLabel>
              <div className="flex items-center gap-6 mt-2">
                <label className="flex items-center space-x-2 text-sm text-gray-700">
                  <input
                    type="radio"
                    value="%"
                    {...register("percentageType", { required: true })}
                    checked={percentageType === "%"}
                    onChange={(e) => setValue("percentageType", e.target.value)}
                    className="h-4 w-4 text-pink-600 focus:ring-pink-500"
                  />
                  <span>%</span>
                </label>
                <label className="flex items-center space-x-2 text-sm text-gray-700">
                  <input
                    type="radio"
                    value="CGPA"
                    {...register("percentageType", { required: true })}
                    checked={percentageType === "CGPA"}
                    onChange={(e) => setValue("percentageType", e.target.value)}
                    className="h-4 w-4 text-pink-600 focus:ring-pink-500"
                  />
                  <span>CGPA</span>
                </label>
              </div>

              <div className="mt-3">
                <FormLabel required>
                  {percentageType === "CGPA" ? "Enter CGPA" : "Enter Percentage"}
                </FormLabel>
                <Input
                  type="number"
                  step="0.01"
                  placeholder={percentageType === "CGPA" ? "e.g. 8.5" : "e.g. 75"}
                  {...register("percentageValue", {
                    required: "This field is required",
                    validate: (val) =>
                      val !== "" || "Please enter a valid number",
                  })}
                />
                <ErrorMsg message={errors.percentageValue?.message} />
              </div>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-between pt-8">
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

export default ProfessionalDetails;
