const getJobDetails = async (jobId) => {
  const res = await fetch("jobs-data.json");
  const jobsData = await res.json();
  const job = await jobsData.find((jobData) => jobData.jobId == jobId);
  return await job;
};

export default getJobDetails ;