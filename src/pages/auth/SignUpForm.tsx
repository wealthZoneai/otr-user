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
} from "lucide-react";
import { motion } from "framer-motion";
import Illustration from "../../assets/login-vector-img.png";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  registerUser,
  sendEmailOtpApi,
  verifyEmailOtpApi,
  sendMobileOtpApi,
  verifyMobileOtpApi,
} from "../../services/apiHelpers";

// ======================
// ✅ Types
// ======================
interface SignUpFormValues {
  username: string;
  name: string;
  email: string;
  emailOtp: string;
  mobile: string;
  mobileOtp: string;
  password: string;
  confirmPassword: string;
  state: string;
  role: string;
  agreement: boolean;
  qualification?: string;
  interest?: string;
}

// ======================
// ✅ Main Component
// ======================
const SignUpForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [mobileOtpSent, setMobileOtpSent] = useState(false);
  const [mobileVerified, setMobileVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [generatedMobileOtp, setGeneratedMobileOtp] = useState<string | null>(
    null
  );
  const navigate = useNavigate();

  // ======================
  // ✅ Form Validation
  // ======================
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address")
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

  const formik = useFormik<SignUpFormValues>({
    initialValues: {
      username: "",
      name: "",
      email: "",
      emailOtp: "",
      mobile: "",
      mobileOtp: "",
      password: "",
      confirmPassword: "",
      state: "",
      role: "Admin",
      agreement: false,
      qualification: "",
      interest: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      if (!emailVerified || !mobileVerified) {
        toast.warn("Please verify your Email and Mobile before signing up!");
        return;
      }
      try {
        setLoading(true);
        const res = await registerUser(values);
        if (res?.status === 200) {
          toast.success("Registered successfully!");
          navigate("/", { state: { email: values.email } });
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

  // ======================
  // ✅ OTP Handlers
  // ======================
  const handleSendEmailOtp = async () => {
    if (!formik.values.email) return toast.warn("Enter email first!");
    try {
      setLoading(true);
      const res = await sendEmailOtpApi({ email: formik.values.email });
      if (res?.status === 200) {
        setEmailOtpSent(true);
        toast.success("Email OTP sent successfully!");
      }
    } catch {
      toast.error("Failed to send Email OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyEmailOtp = async () => {
    if (!formik.values.emailOtp) return toast.warn("Enter Email OTP!");
    try {
      setLoading(true);
      const res = await verifyEmailOtpApi({
        email: formik.values.email,
        otp: formik.values.emailOtp,
      });
      if (res?.status === 200) {
        setEmailVerified(true);
        toast.success("Email verified successfully!");
      } else toast.error("Invalid Email OTP");
    } catch {
      toast.error("Failed to verify Email OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleSendMobileOtp = async () => {
    if (!formik.values.mobile) return toast.warn("Enter mobile number first!");
    try {
      setLoading(true);
      const res = await sendMobileOtpApi({ mobile: formik.values.mobile });
      if (res?.status === 200) {
        setMobileOtpSent(true);

        // ✅ Extract OTP from backend message (for debugging)
        const message = res?.data || "";
        const match = message.match(/\d{4,6}/);
        if (match) {
          setGeneratedMobileOtp(match[0]);
          toast.success(`OTP sent! (Mock OTP: ${match[0]})`);
        } else toast.success("OTP sent successfully!");
      }
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Failed to send Mobile OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyMobileOtp = async () => {
    if (!formik.values.mobileOtp) return toast.warn("Enter Mobile OTP!");
    try {
      setLoading(true);
      const res = await verifyMobileOtpApi({
        mobile: formik.values.mobile,
        otp: formik.values.mobileOtp,
      });

      if (res?.data?.message?.includes("verified")) {
        setMobileVerified(true);
        toast.success("Mobile verified successfully!");
      } else toast.error(res?.data?.message || "Invalid Mobile OTP");
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Failed to verify Mobile OTP");
    } finally {
      setLoading(false);
    }
  };

  // ======================
  // ✅ Render UI
  // ======================
  return (
    <div className="min-h-screen w-full bg-[#0f2d48] flex items-center justify-center px-4 py-8">
      <div className="max-w-6xl w-full bg-linear-to-b from-[#0f2d48] to-[#1a3a57] rounded-xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* LEFT SECTION */}
        <div className="flex flex-col justify-center text-white p-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Welcome to the <br /> Sign Up Page!
          </h2>
          <p className="text-gray-200 text-sm leading-relaxed max-w-md">
            To achieve your goals, set specific targets, create a plan with actionable steps, and stay committed through perseverance and adaptability. Consistent effort and a positive mindset will propel you towards success.
          </p>

          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            src={Illustration}
            alt="Signup Illustration"
            className="w-72 md:w-80"
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="bg-[#214166]/60 backdrop-blur-xl p-8 md:p-12 text-white space-y-8">

          {/* Tabs */}
          <div className="flex justify-center gap-10 text-lg font-semibold">
            {/* <span className="cursor-pointer text-gray-300 hover:text-white">Login</span> */}
            <span className=" text-2xl pb-1 text-white cursor-pointer">Sign Up</span>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-5">
            {/* Name */}
            <Input icon={User} name="name" placeholder="Enter Your Name" formik={formik} />

            {/* Email */}
            <Input
              icon={Mail}
              name="email"
              placeholder="Enter Your Email"
              formik={formik}
              rightButton={!emailVerified && (
                <button
                  type="button"
                  onClick={handleSendEmailOtp}
                  disabled={loading}
                  className="text-sm text-sky-400 hover:text-sky-300"
                >
                  Send OTP
                </button>
              )}
            />

            {emailOtpSent && !emailVerified && (
              <Input
                name="emailOtp"
                placeholder="Enter Email OTP"
                formik={formik}
                rightButton={
                  <button
                    type="button"
                    onClick={handleVerifyEmailOtp}
                    className="text-sm text-green-400 hover:text-green-300"
                  >
                    Verify
                  </button>
                }
              />
            )}

            {/* Mobile */}
            <Input
              icon={Phone}
              name="mobile"
              placeholder="Enter Mobile Number"
              formik={formik}
              rightButton={!mobileVerified && (
                <button
                  type="button"
                  onClick={handleSendMobileOtp}
                  disabled={loading}
                  className="text-sm text-sky-400 hover:text-sky-300"
                >
                  Send OTP
                </button>
              )}
            />

            {mobileOtpSent && !mobileVerified && (
              <div>
                <div>
                  <Input
                    name="mobileOtp"
                    placeholder="Enter Mobile OTP"
                    formik={formik}
                    rightButton={
                      <button
                        type="button"
                        onClick={handleVerifyMobileOtp}
                        className="text-sm text-green-400 hover:text-green-300"
                      >
                        Verify
                      </button>
                    }
                  />
                </div>
                {/* ✅ Show OTP from backend for testing */}
                {generatedMobileOtp && (
                  <p className="text-xs text-white-600 text-center mt-2">
                    Your OTP is <span className="font-semibold text-xl text-green-400">{generatedMobileOtp}</span>.
                    Please enter this code and click on the Verify button to confirm your mobile number.
                  </p>

                )}
              </div>
            )}

            {/* Password */}
            <PasswordField
              name="password"
              placeholder="Create Password"
              show={showPassword}
              setShow={setShowPassword}
              formik={formik}
            />

            {/* Confirm Password */}
            <PasswordField
              name="confirmPassword"
              placeholder="Confirm Password"
              show={showConfirmPassword}
              setShow={setShowConfirmPassword}
              formik={formik}
            />

            {/* Terms */}
            <div className="flex items-center gap-2 text-sm pt-2">
              <input
                type="checkbox"
                {...formik.getFieldProps("agreement")}
                className="accent-green-500 scale-110"
              />
              <span>
                I Agree To The{" "}
                <span className="text-green-400 font-medium">
                  User Agreement
                </span>{" "}
                And{" "}
                <span className="text-green-400 font-medium">
                  Privacy Policy
                </span>
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={
                loading ||
                !formik.values.agreement ||
                !emailVerified ||
                !mobileVerified
              }
              className={`w-full py-3 rounded-lg font-bold text-lg transition duration-300 ${loading ? "bg-gray-500" : "bg-sky-500 hover:bg-sky-600"
                } disabled:opacity-50 disabled:cursor-not-allowed mt-4`}
            >
              {loading ? "Processing..." : "Sign Up"}
            </button>

            <p className="text-sm text-gray-400 text-center pt-2">
              Already have an Account?{" "}
              <button
                type="button"
                onClick={() => navigate("/")}
                className="text-pink-400 font-medium hover:underline transition"
              >
                Sign In
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;

// ======================
// ✅ Reusable Components
// ======================
const Input = ({ icon: Icon, name, placeholder, formik, rightButton }: any) => (
  <div>
    <div
      className={`flex items-center gap-3 border rounded-md px-3 py-3 w-full ${formik.touched[name] && formik.errors[name]
          ? "border-red-500"
          : "border-gray-300/60"
        }`}
    >
      {Icon && <Icon className="text-gray-200" />}
      <input
        type="text"
        placeholder={placeholder}
        {...formik.getFieldProps(name)}
        className="bg-transparent outline-none w-full text-white placeholder-gray-300"
      />
      {rightButton}
    </div>
    {formik.touched[name] && formik.errors[name] && (
      <div className="text-red-400 text-xs mt-1">{formik.errors[name]}</div>
    )}
  </div>
);

const PasswordField = ({ name, placeholder, show, setShow, formik }: any) => (
  <div>
    <div
      className={`flex items-center gap-3 border rounded-md px-3 py-3 w-full ${formik.touched[name] && formik.errors[name]
          ? "border-red-500"
          : "border-gray-300/60"
        }`}
    >
      <Lock className="text-gray-200" />
      <input
        type={show ? "text" : "password"}
        placeholder={placeholder}
        {...formik.getFieldProps(name)}
        className="bg-transparent outline-none w-full text-white placeholder-gray-300"
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="text-gray-300 hover:text-white"
      >
        {show ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  </div>
);
