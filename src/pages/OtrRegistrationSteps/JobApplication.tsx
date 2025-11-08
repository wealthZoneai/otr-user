import React, { useEffect, useState } from "react";
import PersonalDetails from "./PersonalDetails";
import ProfessionalDetails from "./ProfessionalDetails";
import AdditionalDetails from "./AdditionalDetails";
import UploadDocuments from "./UploadDocuments";
import Declaration from "./Declaration";
import Stepper from "./Stepper";

const JobApplication: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(() => {
    // ✅ Initialize state directly from localStorage
    const saved = localStorage.getItem("otr_currentStep");
    return saved && !isNaN(Number(saved)) ? Number(saved) : 1;
  });

  // ✅ Persist progress on every step change
  useEffect(() => {
    localStorage.setItem("otr_currentStep", String(currentStep));
  }, [currentStep]);

  // Navigation functions
  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  // Render correct form
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalDetails nextStep={nextStep} />;
      case 2:
        return <ProfessionalDetails nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <AdditionalDetails nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <UploadDocuments nextStep={nextStep} prevStep={prevStep} />;
      case 5:
        return <Declaration prevStep={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <Stepper currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <div className="max-w-4xl mx-auto px-4">{renderStep()}</div>
    </div>
  );
};

export default JobApplication;
