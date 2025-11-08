import React, { useState } from 'react';
import { FaArrowLeft, FaEdit } from 'react-icons/fa';

// Define the available tabs within the Settings screen
type MainTab = 'Profile Setting' | 'Address';
type ProfileSubTab = 'Profile Details' | 'Change Password' | 'Delete Account';

const Settings: React.FC = () => {
  const [mainTab, setMainTab] = useState<MainTab>('Profile Setting');
  const [profileSubTab, setProfileSubTab] = useState<ProfileSubTab>('Profile Details');

  const handleGoBack = () => {
    console.log("Navigating back from settings...");
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saving profile details...");
    // Add logic to submit form data
  };

  const InputField: React.FC<{ label: string; placeholder?: string; type?: string; w?: string }> = ({ label, placeholder, type = 'text', w = 'full' }) => (
    <div className="flex items-center mb-4">
      <label className="w-1/3 text-gray-700 font-medium">{label} :</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-${w} p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500`}
      />
    </div>
  );
  
  // Custom input layout for the OTP fields
  const OTPInput: React.FC<{ label: string }> = ({ label }) => (
    <div className="flex items-center mb-4">
        <label className="w-1/3 text-gray-700 font-medium">{label} :</label>
        <input
            type="text"
            className="w-1/4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            maxLength={6}
        />
        <button className="ml-3 text-sm text-teal-600 hover:text-teal-700 font-medium">
            Send OTP
        </button>
    </div>
  );

  const renderProfileDetails = () => (
    <form onSubmit={handleSave} className="p-4 pt-6">
      <InputField label="Name" placeholder="Enter your full name" />
      <InputField label="Email" placeholder="Enter your email" type="email" />
      <OTPInput label="OTP" />
      <InputField label="Mobile" placeholder="Enter your mobile number" />
      <OTPInput label="OTP" />
      <InputField label="Qualification" placeholder="B.Tech, MBA, etc." />
      <InputField label="Interest" placeholder="Job Category/Field" />

      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          className="bg-indigo-900 hover:bg-indigo-800 text-white font-semibold py-2 px-8 rounded-lg shadow-lg transition duration-200"
        >
          Save
        </button>
      </div>
    </form>
  );
  
  const renderChangePassword = () => (
      <div className="p-4 pt-6 text-center text-gray-500">
          <p>Change Password functionality goes here.</p>
          {/* Add form fields for Old Password, New Password, Confirm New Password */}
      </div>
  );

  const renderDeleteAccount = () => (
      <div className="p-4 pt-6 text-center text-red-600">
          <p>Delete Account confirmation and steps go here.</p>
          {/* Add confirmation checkbox and delete button */}
      </div>
  );


  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      
      {/* Header with Back Arrow and Title */}
      <header className="flex items-center p-4 bg-white border-b sticky top-0 z-10 shadow-sm">
        <button onClick={handleGoBack} className="text-gray-700 hover:text-teal-600 transition mr-3">
          <FaArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-gray-800">Settings</h1>
      </header>

      <div className="p-4">
        
        {/* Main Tab Navigation (Profile Setting / Address) */}
        <div className="flex space-x-2 mb-6">
          <button
            onClick={() => setMainTab('Profile Setting')}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition duration-150 ${
              mainTab === 'Profile Setting' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Profile Setting
          </button>
          <button
            onClick={() => setMainTab('Address')}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition duration-150 ${
              mainTab === 'Address' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Address
          </button>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-xl shadow-lg p-4">
            
          {/* Profile Sub-Tab Navigation (Profile Details / Change Password / Delete Account) */}
          {mainTab === 'Profile Setting' && (
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <div className="flex space-x-2">
                <button
                  onClick={() => setProfileSubTab('Profile Details')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition ${
                    profileSubTab === 'Profile Details' ? 'bg-teal-500 text-white' : 'border border-teal-500 text-teal-600 hover:bg-teal-50'
                  }`}
                >
                  Profile Details
                </button>
                <button
                  onClick={() => setProfileSubTab('Change Password')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition ${
                    profileSubTab === 'Change Password' ? 'bg-teal-500 text-white' : 'border border-teal-500 text-teal-600 hover:bg-teal-50'
                  }`}
                >
                  Change Password
                </button>
                <button
                  onClick={() => setProfileSubTab('Delete Account')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition ${
                    profileSubTab === 'Delete Account' ? 'bg-teal-500 text-white' : 'border border-teal-500 text-teal-600 hover:bg-teal-50'
                  }`}
                >
                  Delete Account
                </button>
              </div>
              
              {/* Edit Icon */}
              <button className="p-2 bg-indigo-900 rounded-full text-white hover:bg-indigo-800">
                  <FaEdit size={16} />
              </button>
            </div>
          )}

          {/* Render Content based on selected Profile Sub-Tab */}
          {mainTab === 'Profile Setting' && profileSubTab === 'Profile Details' && renderProfileDetails()}
          {mainTab === 'Profile Setting' && profileSubTab === 'Change Password' && renderChangePassword()}
          {mainTab === 'Profile Setting' && profileSubTab === 'Delete Account' && renderDeleteAccount()}
          
          {/* Placeholder for Address Content */}
          {mainTab === 'Address' && (
            <div className="p-4 text-center text-gray-500">
                <p>Address management form goes here.</p>
                {/* Add fields for address, city, state, pin code */}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Settings;