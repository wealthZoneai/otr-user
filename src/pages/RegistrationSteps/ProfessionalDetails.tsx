import React from "react";

export const ProfessionalDetails: React.FC = () => {
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

  const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (props) => (
    <select
      {...props}
      className={`mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 focus:border-pink-500 focus:ring-pink-500 ${props.className || ""}`}
    >
      {props.children}
    </select>
  );

  const PercentageType = () => (
    <div className="flex items-center gap-6 mt-2">
      <label className="flex items-center space-x-2 text-sm text-gray-700">
        <input
          type="radio"
          name="percentageType"
          className="h-4 w-4 text-pink-600 focus:ring-pink-500"
        />
        <span>%</span>
      </label>
      <label className="flex items-center space-x-2 text-sm text-gray-700">
        <input
          type="radio"
          name="percentageType"
          className="h-4 w-4 text-pink-600 focus:ring-pink-500"
        />
        <span>CGPA</span>
      </label>
    </div>
  );

  const SectionWrapper: React.FC<{ title: string; children: React.ReactNode }> = ({
    title,
    children,
  }) => (
    <div className="space-y-4 border-b border-gray-100 pb-6">
      <h3 className="text-base font-semibold text-gray-900 mt-4">{title}</h3>
      <div className="pl-4 space-y-4 border-l-2 border-pink-100">{children}</div>
    </div>
  );

  return (
    <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-lg border border-gray-100">
      <h2 className="mb-8 text-center text-2xl font-bold text-gray-800">
        Professional Details
      </h2>

      <form className="space-y-8 text-left">
        {/* 1. Matriculation */}
        <SectionWrapper title="1. Matriculation (10th Class) Details">
          <div>
            <FormLabel required>1. Matriculation (10th Class) Education Board</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
            <FormLabel>a. Verify Matriculation (10th Class) Education Board</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
          </div>

          <div>
            <FormLabel required>2. Roll Number</FormLabel>
            <Input type="text" placeholder="Enter roll number" />
            <FormLabel>a. Verify Roll Number</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
          </div>

          <div>
            <FormLabel required>3. Year of Passing</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
            <FormLabel>a. Verify Year Of Passing</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
          </div>

          <div>
            <FormLabel required>4. School Name</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
          </div>

          <div>
            <FormLabel required>5. 10th Percentage</FormLabel>
            <PercentageType />
          </div>
        </SectionWrapper>

        {/* 2. Secondary */}
        <SectionWrapper title="2. Secondary Education (12th Class) Details">
          <div>
            <FormLabel required>1. Secondary Education (12th Class) Education Board</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
            <FormLabel>a. Verify Secondary Education (12th Class) Education Board</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
          </div>

          <div>
            <FormLabel required>2. Roll Number</FormLabel>
            <Input type="text" placeholder="Enter roll number" />
            <FormLabel>a. Verify Roll Number</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
          </div>

          <div>
            <FormLabel required>3. Year of Passing</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
            <FormLabel>a. Verify Year Of Passing</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
          </div>

          <div>
            <FormLabel required>4. College Name</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
          </div>

          <div>
            <FormLabel required>5. 12th Percentage</FormLabel>
            <PercentageType />
          </div>
        </SectionWrapper>

        {/* 3. Diploma */}
        <SectionWrapper title="3. Diploma or Polytechnic Details">
          <div>
            <FormLabel required>1. Diploma or Polytechnic Education Board</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
            <FormLabel>a. Verify Diploma or Polytechnic Board</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
          </div>

          <div>
            <FormLabel required>2. Roll Number</FormLabel>
            <Input type="text" placeholder="Enter roll number" />
            <FormLabel>a. Verify Roll Number</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
          </div>

          <div>
            <FormLabel required>3. Year of Passing</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
            <FormLabel>a. Verify Year Of Passing</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
          </div>

          <div>
            <FormLabel required>4. Diploma College Name</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
          </div>

          <div>
            <FormLabel required>5. Diploma Percentage</FormLabel>
            <PercentageType />
          </div>
        </SectionWrapper>

        {/* 4. Graduation */}
        <SectionWrapper title="4. Graduation Details">
          <div>
            <FormLabel required>1. Graduation Board</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
            <FormLabel>a. Verify Graduation Board</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
          </div>

          <div>
            <FormLabel required>2. Roll Number</FormLabel>
            <Input type="text" placeholder="Enter roll number" />
            <FormLabel>a. Verify Roll Number</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
          </div>

          <div>
            <FormLabel required>3. Year of Passing</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
            <FormLabel>a. Verify Year Of Passing</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
          </div>

          <div>
            <FormLabel required>4. College Name</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
          </div>

          <div>
            <FormLabel required>5. Graduation or Degree Percentage</FormLabel>
            <PercentageType />
          </div>
        </SectionWrapper>

        {/* 5. Post-Graduation */}
        <SectionWrapper title="5. Post-Graduation Details">
          <div>
            <FormLabel required>1. Post-Graduation Board</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
            <FormLabel>a. Verify Post-Graduation Board</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
          </div>

          <div>
            <FormLabel required>2. Roll Number</FormLabel>
            <Input type="text" placeholder="Enter roll number" />
            <FormLabel>a. Verify Roll Number</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
          </div>

          <div>
            <FormLabel required>3. Year of Passing</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
            <FormLabel>a. Verify Year Of Passing</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
          </div>

          <div>
            <FormLabel required>4. College Name</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
          </div>

          <div>
            <FormLabel required>5. Post-Graduation or Degree Percentage</FormLabel>
            <PercentageType />
          </div>
        </SectionWrapper>

        {/* 6. PhD */}
        <SectionWrapper title="6. PhD Details">
          <div>
            <FormLabel required>1. PhD Board</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
            <FormLabel>a. Verify PhD Board</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
          </div>

          <div>
            <FormLabel required>2. Roll Number</FormLabel>
            <Input type="text" placeholder="Enter roll number" />
            <FormLabel>a. Verify Roll Number</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
          </div>

          <div>
            <FormLabel required>3. Year of Passing</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
            <FormLabel>a. Verify Year Of Passing</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
          </div>

          <div>
            <FormLabel required>4. College Name</FormLabel>
            <Select>
              <option value="">Select</option>
            </Select>
          </div>

          <div>
            <FormLabel required>5. PhD Percentage</FormLabel>
            <PercentageType />
          </div>
        </SectionWrapper>

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

export default ProfessionalDetails;
