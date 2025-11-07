import React, { useState } from "react";
import JobCategoryTabs from "../components/JobCategoryTabs";
import StateGovtJobsHeader from "../components/StateGovtJobsHeader";
import JobCard from "../components/JobCard";

const Home: React.FC = () => {
  const [selectedState, setSelectedState] = useState("All");
  const [selectedQualification, setSelectedQualification] = useState("All");

  // Dummy Job Data (replace later with backend API)
  const jobs = [
    {
      id: 1,
      title: "Medical & Health Department",
      subtitle: "Arogya Mitras & Team Leaders - 19 POSTS",
      description:
        "Tezpur University has given an employment notification for recruitment...",
      qualification: "B.Sc (Nursing)",
      state: "Andhra Pradesh",
      postDate: "3rd Mar, 2024",
      lastDate: "1st June, 2024",
    },
    {
      id: 2,
      title: "Education Department",
      subtitle: "Assistant Teachers - 45 POSTS",
      description:
        "Applications are invited from eligible candidates for teaching posts...",
      qualification: "B.Ed",
      state: "Odisha",
      postDate: "10th Apr, 2024",
      lastDate: "30th June, 2024",
    },
    {
      id: 3,
      title: "Public Works Department",
      subtitle: "Junior Engineer - 28 POSTS",
      description:
        "PWD invites online applications for recruitment of Junior Engineers...",
      qualification: "B.Tech",
      state: "Bihar",
      postDate: "5th May, 2024",
      lastDate: "10th July, 2024",
    },
  ];

  // 🔍 Filter logic
  const filteredJobs = jobs.filter(
    (job) =>
      (selectedState === "All" || job.state === selectedState) &&
      (selectedQualification === "All" ||
        job.qualification === selectedQualification)
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <JobCategoryTabs />

      {/* Filter Header */}
      <div className="mt-6">
        <StateGovtJobsHeader
        selectedState={selectedState}
        setSelectedState={setSelectedState}
        selectedQualification={selectedQualification}
        setSelectedQualification={setSelectedQualification}
      />
      </div>

      {/* Job List */}
      <div className="max-w-6xl mx-auto mt-6 space-y-6 px-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard key={job.id} {...job} />)
        ) : (
          <p className="text-center text-gray-600">No jobs found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
