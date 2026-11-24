import { Link } from 'react-router';

function JobCard({ job, limitReached, changeApplication, showDetailsLink = true }) {
  let action;

  if (job.isApplied) {
    action = <button onClick={() => changeApplication(job.id, false)}>Withdraw</button>;
  } else if (job.openings === 0) {
    action = <span>Hiring Closed</span>;
  } else if (limitReached) {
    action = <span>Limit reached (3/3)</span>;
  } else {
    action = <button onClick={() => changeApplication(job.id, true)}>Apply</button>;
  }

  return (
    <article className="card">
      <h2>{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.location} · {job.mode}</p>
      <p>{job.packageLPA} LPA</p>
      <p className="badge">
        {job.experienceRequired === 0 ? 'Fresher Friendly' : `${job.experienceRequired} yrs exp`}
      </p>
      <div className="card-actions">
        {showDetailsLink && <Link to={`/jobs/${job.id}`}>View Details</Link>}
        {action}
      </div>
    </article>
  );
}

export default JobCard;
