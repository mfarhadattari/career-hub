import React, { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs-data.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <section className="container mx-auto p-10">
      <div>
        <h1 className="text-4xl text-center font-extrabold">Featured Jobs</h1>
        <p className="text-lg text-center text-gray-700 mt-4 mb-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {jobs.map((job) => (
          <JobCard key={job.jobId} job={job}></JobCard>
        ))}
      </div>
      <div className="flex justify-center">
      <button className="bg-purple-500 text-white px-10 py-4 text-xl font-medium rounded-lg mt-8">
        See All Jobs
      </button>
      </div>
    </section>
  );
};

export default FeaturedJobs;
