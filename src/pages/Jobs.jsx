import JobCard from '../components/JobCard.jsx';

function Jobs({ jobs, search, setSearch, mode, setMode, limitReached, changeApplication }) {
  const searchText = search.trim().toLowerCase();

  const visibleJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchText) ||
      job.company.toLowerCase().includes(searchText);
    const matchesMode = mode === 'All' || job.mode === mode;
    return matchesSearch && matchesMode;
  });

  return (
    <>
      <h1>Jobs</h1>
      {limitReached && (
        <p className="warning" role="status">
          Limit reached (3/3). Withdraw an application to apply for another job.
        </p>
      )}
      <div className="filters">
        <label>
          Search jobs
          <input
            type="search"
            placeholder="Title or company"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </label>
        <label>
          Work mode
          <select value={mode} onChange={(event) => setMode(event.target.value)}>
            <option>All</option>
            <option>Remote</option>
            <option>Onsite</option>
            <option>Hybrid</option>
          </select>
        </label>
      </div>
      {visibleJobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        <div className="jobs">
          {visibleJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              limitReached={limitReached}
              changeApplication={changeApplication}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Jobs;
