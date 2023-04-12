import React from "react";
import { getAppliedJobs } from "../../utilities/fakedb";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedPage = () => {
  const storedAppliedJob = getAppliedJobs();
  const jobs = useLoaderData()
  let appliedJobs = [] ;
  for(const jobId in  storedAppliedJob){
    for(const job of jobs){
        if(job.jobId == jobId){
            appliedJobs.push(job)
        }
    }
  }
  return (
    <div className="container mx-auto p-10">
        {
          appliedJobs.map(appliedJob => <AppliedJob key={appliedJob.jobId} appliedJob={appliedJob}></AppliedJob>)  
        }
    </div>
  );
};

export default AppliedPage;
