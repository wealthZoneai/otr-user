import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Phone,
  User,
  Calendar,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Illustration from "../../assets/login-vector-img.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../../services/apiHelpers";

// ✅ Type definition
interface SignUpFormValues {
  country: string;
  customCountry?: string;
  username: string;
  name: string;
  fatherName: string;
  motherName: string;
  email: string;
  emailOtp: string;
  mobile: string;
  password: string;
  confirmPassword: string;
  gender: string;
  dob?: Date | null;
  state: string;
  qualification?: string;
  agreement: boolean;
}

const SignUpForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mockOtp, setMockOtp] = useState<string | null>(null);
  const navigate = useNavigate();

  // ✅ Dummy country data (replace later with API data)
  const countryList = ["India", "Bhutan", "Nepal"];

  // ✅ Validation Schema
  const validationSchema = Yup.object({
    country: Yup.string().required("Country is required"),
    customCountry: Yup.string().when("country", {
      is: "Other",
      then: (schema) => schema.required("Please specify your country"),
    }),
    username: Yup.string()
      .min(4, "Username must be at least 4 characters")
      .required("Username is required"),
    name: Yup.string().required("Full Name is required"),
    fatherName: Yup.string().required("Father’s name is required"),
    motherName: Yup.string().required("Mother’s name is required"),
    gender: Yup.string().required("Please select your gender"),
    dob: Yup.date()
      .max(new Date(), "Date of Birth cannot be in the future")
      .required("Date of Birth is required"),
    email: Yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),
    mobile: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number")
      .required("Mobile number is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
    agreement: Yup.boolean().oneOf([true], "You must agree to continue"),
  });

  // ✅ Formik setup
  const formik = useFormik<SignUpFormValues>({
    initialValues: {
      country: "",
      customCountry: "",
      username: "",
      name: "",
      fatherName: "",
      motherName: "",
      email: "",
      emailOtp: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      gender: "",
      dob: null,
      state: "",
      qualification: "",
      agreement: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      if (!emailVerified) {
        toast.warn("Please verify your Email before signing up!");
        return;
      }

      try {
        setLoading(true);
        const payload = {
          ...values,
          country:
            values.country === "Other"
              ? values.customCountry
              : values.country,
          mobileOtp: "",
        };

        const res = await registerUser(payload);
        if (res?.status === 200) {
          toast.success("Registered successfully!");
          // ✅ Navigate to /home after 1s delay
          setTimeout(() => {
            navigate("/home", { state: { email: values.email } });
          }, 1000);
        } else {
          toast.error(res?.data?.message || "Signup failed");
        }
      } catch (err: any) {
        toast.error(err?.response?.data?.message || "Error during signup");
      } finally {
        setLoading(false);
      }
    },
  });

  // ✅ Mock OTP handler
  const handleSendEmailOtp = async () => {
    if (!formik.values.email) return toast.warn("Enter email first!");
    const fakeOtp = "123456";
    setEmailOtpSent(true);
    setMockOtp(fakeOtp);
    toast.info(`Mock OTP for testing: ${fakeOtp}`);
  };

  const handleVerifyEmailOtp = async () => {
    const otp = formik.values.emailOtp.trim();
    if (mockOtp && otp === mockOtp) {
      setEmailVerified(true);
      toast.success("✅ Email verified successfully (mock mode)!");
      return;
    }
    toast.error("Invalid OTP");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center justify-center px-4 py-auto">
      <div className="max-w-6xl w-full bg-white rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        {/* LEFT SECTION */}
        <div className="hidden md:flex w-[35%] items-center justify-center bg-gradient-to-br from-[#1b3a4b] via-[#28556b] to-[#3d738b] relative">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src={Illustration}
            alt="Signup Illustration"
            className="w-64 h-auto object-contain drop-shadow-lg"
          />
          <div className="absolute right-0 top-0 h-full w-[2px] bg-gray-200" />
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full md:w-[65%] p-8 md:p-10 text-gray-800 overflow-x-hidden overflow-y-auto h-[90vh]">
          <div className="mb-8 text-center text-2xl font-bold text-[#001F5C]">
            <h1>Sign-Up Form</h1>
          </div>

          {/* Country of Nationality */}
          <TooltipDropdown
            name="country"
            label="Country of Nationality"
            tooltip="Select your nationality. If not listed, choose 'Other' and enter it manually."
            options={countryList}
            placeholder="Select Country"
            formik={formik}
          />
          {formik.values.country === "Other" && (
            <TooltipInput
              name="customCountry"
              label="Specify Country"
              tooltip="Enter your country name if not listed above"
              placeholder="Enter your country"
              formik={formik}
            />
          )}

          {/* PERSONAL INFO */}
          <h2 className="block text-gray-700 font-medium mb-4 mt-6">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            <TooltipInput
              name="fatherName"
              label="Father’s Name"
              tooltip="As recorded in your Matriculation (10th) certificate."
              placeholder="Father's Name"
              formik={formik}
            />
            <TooltipInput
              name="motherName"
              label="Mother’s Name"
              tooltip="As recorded in your Matriculation (10th) certificate."
              placeholder="Mother's Name"
              formik={formik}
            />
            <TooltipInput
              name="name"
              label="Full Name"
              tooltip="Enter your full name as per your official ID or certificate."
              placeholder="Full Name"
              formik={formik}
            />
            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">
                Gender <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-6">
                {["Male", "Female"].map((g) => (
                  <label key={g} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value={g}
                      checked={formik.values.gender === g}
                      onChange={() => formik.setFieldValue("gender", g)}
                      className="accent-[#001F5C]"
                    />
                    <span>{g}</span>
                  </label>
                ))}
              </div>
            </div>
            <InputDate
              icon={Calendar}
              name="dob"
              placeholder="Select Date of Birth"
              formik={formik}
            />
            <Input
              icon={FileText}
              name="qualification"
              placeholder="Qualification"
              formik={formik}
            />
            <Input icon={User} name="state" placeholder="State" formik={formik} />
          </div>

          {/* CONTACT DETAILS */}
          <h2 className="block text-gray-700 font-medium mb-4">
            Contact Details
          </h2>
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <Input
                  icon={Mail}
                  name="email"
                  placeholder="Email Address"
                  formik={formik}
                />
              </div>
              {!emailVerified && (
                <button
                  type="button"
                  onClick={handleSendEmailOtp}
                  disabled={loading}
                  className="px-4 py-2 text-sm bg-purple-100 text-purple-700 rounded-md hover:bg-purple-200 border border-purple-400 transition"
                >
                  {emailOtpSent ? "Resend OTP" : "Generate OTP"}
                </button>
              )}
            </div>

            {emailOtpSent && !emailVerified && (
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  maxLength={6}
                  name="emailOtp"
                  value={formik.values.emailOtp}
                  onChange={formik.handleChange}
                  placeholder="Enter 6-digit OTP"
                  className="flex-1 border border-purple-400 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-400 outline-none text-gray-800 placeholder-gray-500"
                />
                <button
                  type="button"
                  onClick={handleVerifyEmailOtp}
                  className="px-4 py-2 text-sm bg-green-100 text-green-700 rounded-md hover:bg-green-200 border border-green-400 transition"
                >
                  Verify OTP
                </button>
              </div>
            )}

            {emailVerified && (
              <p className="text-sm text-green-600">
                ✅ Email verified successfully!
              </p>
            )}
          </div>

          <Input
            icon={Phone}
            name="mobile"
            placeholder="Mobile Number"
            formik={formik}
          />

          {/* SECURITY */}
          <h2 className="block text-gray-700 font-medium mb-4 mt-6">
            Security Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input
              icon={User}
              name="username"
              placeholder="Username"
              formik={formik}
            />
            <PasswordField
              name="password"
              placeholder="Create Password"
              show={showPassword}
              setShow={setShowPassword}
              formik={formik}
            />
            <PasswordField
              name="confirmPassword"
              placeholder="Confirm Password"
              show={showConfirmPassword}
              setShow={setShowConfirmPassword}
              formik={formik}
            />
          </div>

          {/* Agreement */}
          <div className="flex items-center gap-2 text-sm mt-6">
            <input
              type="checkbox"
              {...formik.getFieldProps("agreement")}
              className="accent-blue-600"
            />
            <span>
              I agree to the{" "}
              <span className="text-[#0072ff] font-semibold">Terms</span> and{" "}
              <span className="text-[#0072ff] font-semibold">
                Privacy Policy
              </span>.
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || !formik.values.agreement}
            onClick={() => formik.handleSubmit()}
            className="mt-6 w-full py-3 bg-[#001F5C] text-white rounded-lg font-semibold hover:bg-[#003399] transition"
          >
            {loading ? "Processing..." : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;

// ✅ Tooltip Input Component
const TooltipInput = ({ name, label, tooltip, placeholder, formik }: any) => (
  <div className="relative">
    <label className="block text-gray-700 font-medium mb-2 flex items-center gap-1">
      {label} <span className="text-red-500">*</span>
      <div className="group relative cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
        <div className="absolute left-6 top-1/2 -translate-y-1/2 w-64 text-sm bg-gray-800 text-white rounded-md px-3 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 shadow-md">
          {tooltip}
        </div>
      </div>
    </label>
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      className={`w-full border rounded-md px-3 py-3 outline-none ${
        formik.touched[name] && formik.errors[name]
          ? "border-red-500"
          : "border-gray-300"
      }`}
    />
    {formik.touched[name] && formik.errors[name] && (
      <div className="text-red-500 text-xs mt-1">{formik.errors[name]}</div>
    )}
  </div>
);

// ✅ Tooltip Dropdown Component
const TooltipDropdown = ({
  name,
  label,
  tooltip,
  options,
  placeholder,
  formik,
}: any) => (
  <div className="mb-6">
    <label className="block text-gray-700 font-medium mb-2 flex items-center gap-1">
      {label} <span className="text-red-500">*</span>
      <div className="group relative cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
        <div className="absolute left-6 top-1/2 -translate-y-1/2 w-64 text-sm bg-gray-800 text-white rounded-md px-3 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 shadow-md">
          {tooltip}
        </div>
      </div>
    </label>
    <select
      name={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      className={`w-full border rounded-md px-3 py-3 bg-white text-gray-800 outline-none ${
        formik.touched[name] && formik.errors[name]
          ? "border-red-500"
          : "border-gray-300"
      }`}
    >
      <option value="">{placeholder}</option>
      {options.map((country: string) => (
        <option key={country} value={country}>
          {country}
        </option>
      ))}
    </select>
    {formik.touched[name] && formik.errors[name] && (
      <div className="text-red-500 text-xs mt-1">{formik.errors[name]}</div>
    )}
  </div>
);

// ✅ Reusable Input Field
const Input = ({ icon: Icon, name, placeholder, formik }: any) => (
  <div>
    <div
      className={`flex items-center gap-3 border rounded-md px-3 py-3 w-full ${
        formik.touched[name] && formik.errors[name]
          ? "border-red-500"
          : "border-gray-300"
      }`}
    >
      {Icon && <Icon className="text-gray-500" />}
      <input
        type="text"
        placeholder={placeholder}
        {...formik.getFieldProps(name)}
        className="bg-transparent outline-none w-full text-gray-800 placeholder-gray-500"
      />
    </div>
  </div>
);

// ✅ Password Field
const PasswordField = ({ name, placeholder, show, setShow, formik }: any) => (
  <div>
    <div
      className={`flex items-center gap-3 border rounded-md px-3 py-3 w-full ${
        formik.touched[name] && formik.errors[name]
          ? "border-red-500"
          : "border-gray-300"
      }`}
    >
      <Lock className="text-gray-500" />
      <input
        type={show ? "text" : "password"}
        placeholder={placeholder}
        {...formik.getFieldProps(name)}
        className="bg-transparent outline-none w-full text-gray-800 placeholder-gray-500"
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="text-gray-500 hover:text-gray-800"
      >
        {show ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  </div>
);

// ✅ Date Picker Field
const InputDate = ({ icon: Icon, name, placeholder, formik }: any) => (
  <div>
    <div className="flex items-center gap-3 border rounded-md px-3 py-3 w-full border-gray-300">
      {Icon && <Icon className="text-gray-500" />}
      <DatePicker
        selected={formik.values[name]}
        onChange={(date) => formik.setFieldValue(name, date)}
        dateFormat="dd/MM/yyyy"
        placeholderText={placeholder}
        className="bg-transparent outline-none w-full text-gray-800 placeholder-gray-500"
        maxDate={new Date()}
        showYearDropdown
        scrollableYearDropdown
        yearDropdownItemNumber={70}
      />
    </div>
  </div>
);
