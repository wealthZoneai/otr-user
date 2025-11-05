import React, { useState } from "react";
import Stepper from "../Stepper";
import PersonalDetails from "../RegistrationSteps/PersonalDetails";
import ProfessionalDetails from "../RegistrationSteps/ProfessionalDetails";
import AdditionalDetails from "../RegistrationSteps/AdditionalDetails";
import UploadDocuments from "../RegistrationSteps/UploadDocuments";
import Declaration from "../RegistrationSteps/Declaration";


const RegistrationForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <PersonalDetails />;
      case 2:
        return <ProfessionalDetails />;
      case 3:
        return <AdditionalDetails />;
      case 4:
        return <UploadDocuments />;
      case 5:
        return <Declaration />;
      default:
        return <PersonalDetails />;
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <Stepper currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <div className="mt-8">{renderStepContent()}</div>
    </div>
  );
};

export default RegistrationForm;
