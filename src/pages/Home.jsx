import { Link } from 'react-router';

function Home({ totalJobs, appliedCount, remoteCount }) {
  return (
    <>
      <h1>Job Portal</h1>
      <p>Browse jobs, check the details, and keep track of your applications.</p>
      <div className="jobs">
        <div className="card">Total jobs: <strong>{totalJobs}</strong></div>
        <div className="card">Applied jobs: <strong>{appliedCount}</strong></div>
        <div className="card">Remote jobs: <strong>{remoteCount}</strong></div>
      </div>
      <p><Link to="/jobs">Browse Jobs</Link></p>
    </>
  );
}

export default Home;
