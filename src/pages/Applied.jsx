import JobCard from '../components/JobCard.jsx';

function Applied({ jobs, applicationLimit, changeApplication }) {
  return (
    <>
      <h1>Applied Jobs</h1>
      {jobs.length === 0 ? (
        <p>No applications yet</p>
      ) : (
        <>
          <p>Applications used: {jobs.length}/{applicationLimit}</p>
          <div className="jobs">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} changeApplication={changeApplication} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Applied;
